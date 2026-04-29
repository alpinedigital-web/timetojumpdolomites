#!/usr/bin/env python3
"""
Transkriptions-Script für WhatsApp Sprachmemos (OGG/Opus → Text).
Nutzt OpenAI Whisper (lokal, kein API-Key nötig).

Verwendung:
  python scripts/transcribe.py business/voice-memos/memo.ogg
  python scripts/transcribe.py business/voice-memos/       # alle OGG-Dateien im Ordner

Output:
  Erstellt .txt-Datei neben jeder .ogg-Datei.
  z.B. memo.ogg → memo.txt

Modelle (--model):
  tiny    → schnellst, ~1GB RAM, brauchbare Qualität
  base    → gut, ~1GB RAM (DEFAULT)
  small   → sehr gut, ~2GB RAM
  medium  → exzellent, ~5GB RAM
  large   → best, ~10GB RAM (braucht GPU)
"""

import sys
import os
import glob
import argparse
import whisper

def transcribe_file(model, filepath, language=None):
    """Transkribiert eine einzelne Audio-Datei."""
    basename = os.path.splitext(filepath)[0]
    output_path = basename + ".txt"
    
    print(f"\n🎙️  Transkribiere: {os.path.basename(filepath)}")
    print(f"   Modell: {model.model_name if hasattr(model, 'model_name') else 'whisper'}")
    
    options = {"fp16": False}  # CPU-kompatibel
    if language:
        options["language"] = language
    
    result = model.transcribe(filepath, **options)
    
    # Detected language
    detected_lang = result.get("language", "?")
    print(f"   Sprache erkannt: {detected_lang}")
    
    # Write output
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(f"# Transkription: {os.path.basename(filepath)}\n")
        f.write(f"# Sprache: {detected_lang}\n")
        f.write(f"# Modell: {args.model}\n")
        f.write("# ---\n\n")
        f.write(result["text"].strip())
        f.write("\n\n# --- Segmente ---\n\n")
        for seg in result["segments"]:
            start = seg["start"]
            end = seg["end"]
            text = seg["text"].strip()
            f.write(f"[{start:.1f}s - {end:.1f}s] {text}\n")
    
    print(f"   ✅ Gespeichert: {os.path.basename(output_path)}")
    print(f"   📝 Text: {result['text'][:200]}{'...' if len(result['text']) > 200 else ''}")
    
    return output_path

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="WhatsApp Sprachmemo Transkription (Whisper)")
    parser.add_argument("input", help="OGG-Datei oder Ordner mit OGG-Dateien")
    parser.add_argument("--model", default="base", choices=["tiny", "base", "small", "medium", "large"],
                        help="Whisper-Modell (default: base)")
    parser.add_argument("--language", default=None, help="Sprache erzwingen (z.B. 'de', 'it', 'en')")
    args = parser.parse_args()
    
    # Collect files
    input_path = args.input
    files = []
    
    if os.path.isdir(input_path):
        files = sorted(glob.glob(os.path.join(input_path, "*.ogg")))
        if not files:
            print(f"❌ Keine .ogg-Dateien in {input_path} gefunden.")
            sys.exit(1)
        print(f"📂 {len(files)} OGG-Datei(en) gefunden in: {input_path}")
    elif os.path.isfile(input_path):
        files = [input_path]
    else:
        print(f"❌ Pfad nicht gefunden: {input_path}")
        sys.exit(1)
    
    # Load model (downloads on first use)
    print(f"\n⏳ Lade Whisper-Modell '{args.model}'...")
    model = whisper.load_model(args.model)
    print(f"✅ Modell geladen.")
    
    # Transcribe
    outputs = []
    for f in files:
        out = transcribe_file(model, f, language=args.language)
        outputs.append(out)
    
    print(f"\n{'='*50}")
    print(f"🎉 Fertig! {len(outputs)} Datei(en) transkribiert:")
    for o in outputs:
        print(f"   → {o}")
