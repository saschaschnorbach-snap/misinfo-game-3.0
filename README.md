# Interaktive Story-App

Vite + React + Tailwind CSS – App für verzweigte, interaktive Geschichten.

## Starten

```bash
npm install
npm run dev
```

Dann im Browser zu http://localhost:5173 gehen.

## Bauen

```bash
npm run build
```

Ausgabe in `dist/`.

## Struktur

- **`src/data/story.js`** – Story-Daten (Kapitel mit Text und Verzweigungen)
- **`src/components/StoryView.jsx`** – Anzeige von Kapitel und Entscheidungen
- **`src/App.jsx`** – State und Einstieg
