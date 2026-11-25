# Sana — Single-Character Visual Novel (HTML / CSS / JS)

A standalone visual novel built with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES Modules)** featuring one character (**Sana**) and one linear 3-chapter storyline with 6 relationship meters and 4 endings.

## Running the Game

Because the game uses ES Modules (`<script type="module">`), serve the directory with any local static server:

```bash
cd /home/carno/Desktop/fdg
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Adding Real Photos

The media manifest in `js/data/contentManifest.js` automatically loads real photos if placed in `assets/photos/`:

- **Sana Emotions**:
  - `assets/photos/sana_neutral.jpg`
  - `assets/photos/sana_happy.jpg`
  - `assets/photos/sana_shy.jpg`
  - `assets/photos/sana_thoughtful.jpg`
  - `assets/photos/sana_surprised.jpg`
  - `assets/photos/sana_sad.jpg`
  - `assets/photos/sana_affectionate.jpg`
  - `assets/photos/sana_teasing.jpg`
- **Location Backgrounds**:
  - `assets/photos/bg_cafe.jpg`
  - `assets/photos/bg_park.jpg`
  - `assets/photos/bg_bookstore.jpg`
  - `assets/photos/bg_apartment.jpg`
  - `assets/photos/bg_rooftop.jpg`

If any photo file is missing, the game renders a styled fallback card and ambient gradient automatically.
# sana
