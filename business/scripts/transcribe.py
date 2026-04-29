"""
Whisper Transkription für David's Voice Memos.
Verwendet das 'medium' Modell für gute Qualität bei Deutsch/Italienisch-Mix.
"""
import whisper
import json
import sys
import os

VOICE_MEMO_DIR = os.path.join(os.path.dirname(__file__), "..", "voice-memos")
OUTPUT_FILE = os.path.join(VOICE_MEMO_DIR, "transcription_raw.json")

def transcribe_all():
    print("Loading Whisper model (medium)... This may take a minute on first run.")
    model = whisper.load_model("medium")
    
    results = []
    
    for filename in sorted(os.listdir(VOICE_MEMO_DIR)):
        if filename.endswith(('.ogg', '.mp3', '.m4a', '.wav', '.webm')):
            filepath = os.path.join(VOICE_MEMO_DIR, filename)
            print(f"\nTranscribing: {filename}")
            print(f"  File size: {os.path.getsize(filepath) / 1024:.0f} KB")
            
            result = model.transcribe(
                filepath,
                language="de",       # Primary language: German
                task="transcribe",    # Keep original language (don't translate)
                verbose=True
            )
            
            results.append({
                "filename": filename,
                "text": result["text"],
                "segments": [
                    {
                        "start": seg["start"],
                        "end": seg["end"],
                        "text": seg["text"]
                    }
                    for seg in result["segments"]
                ],
                "language": result.get("language", "de")
            })
            
            print(f"\n  ✅ Done. Detected language: {result.get('language', 'unknown')}")
            print(f"  Full text:\n  {result['text'][:500]}...")
    
    # Save raw results
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\n\n{'='*60}")
    print(f"Saved raw transcription to: {OUTPUT_FILE}")
    print(f"Total memos transcribed: {len(results)}")
    
    # Also print full text for easy copy
    for r in results:
        print(f"\n{'='*60}")
        print(f"FILE: {r['filename']}")
        print(f"{'='*60}")
        print(r['text'])

if __name__ == "__main__":
    transcribe_all()
