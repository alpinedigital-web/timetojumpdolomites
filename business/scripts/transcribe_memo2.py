"""Transcribe Memo 2 only."""
import whisper
import os

filepath = os.path.join(os.path.dirname(__file__), "..", "voice-memos", "Memo 2 - 40 sekunden.ogg")
print(f"File: {filepath}")
print(f"Size: {os.path.getsize(filepath) / 1024:.0f} KB")
print("Loading Whisper model (medium)...")

model = whisper.load_model("medium")
print("Transcribing...")

result = model.transcribe(filepath, language="de", task="transcribe", verbose=True)

print("\n" + "="*60)
print("FULL TEXT:")
print("="*60)
print(result["text"])
