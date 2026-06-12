import os
import requests
from PIL import Image
import io

BASE_URL = "https://autofeeds.id/landing"
OUT_DIR = "public/landing"

def num(i):
    return str(i).zfill(2)

paths = []
# Dynamic
for i in range(1, 21):
    paths.append(f"ads-typography/typo-{num(i)}.jpg")
    paths.append(f"ads-9x16/vert-{num(i)}.jpg")
    paths.append(f"ads-16x9/yt-{num(i)}.jpg")
    paths.append(f"ads-1x1/ig-{num(i)}.jpg")

# Explicit
explicit = [
    "modes/banner-preview.jpg",
    "modes/thumbnail-preview.jpg",
    "modes/typography-preview.jpg",
    "modes/copy-preview.jpg",
    "face-card/face-features.jpg",
    "face-card/spectacles-guide.jpg",
    "face-card/style-analysis.jpg",
    "face-card/color-analysis.jpg",
    "face-card/makeup-analysis.jpg",
    "menu-fb/patisserie-luxury.jpg",
    "menu-fb/healthy-editorial.jpg",
    "menu-fb/korean-street.jpg",
    "menu-fb/indo-heritage.jpg",
    "menu-fb/japanese-premium.jpg",
    "menu-fb/retro-marketplace.jpg",
    "menu-fb/homemade-cozy.jpg",
    "menu-fb/betawi-festive.jpg",
    "menu-fb/rice-bowl-modern.jpg"
]
paths.extend(explicit)

# Check if PIL is available
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call(["python3", "-m", "pip", "install", "Pillow"])
    from PIL import Image

for path in paths:
    url = f"{BASE_URL}/{path}"
    out_path = os.path.join(OUT_DIR, path.replace(".jpg", ".webp"))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    if os.path.exists(out_path):
        continue
        
    print(f"Downloading {url}...")
    resp = requests.get(url)
    if resp.status_code == 200:
        try:
            img = Image.open(io.BytesIO(resp.content))
            img.save(out_path, "WEBP", quality=80)
            print(f"Saved {out_path}")
        except Exception as e:
            print(f"Failed to convert {path}: {e}")
    else:
        print(f"Failed to download {url}: {resp.status_code}")

print("Done!")
