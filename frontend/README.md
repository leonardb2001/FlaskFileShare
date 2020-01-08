
# Frontend
...geschrieben mit React.

## Struktur
- `public/`: statische Dateien für React (uninteressant)
- `src/`: eigentlicher React source code
  - `actions/`: Funktionen, die den "state" des Frontends verwalten
    - `reducers/`: Reducer-Funktionen für Redux (verändern den State aufgrund von Actions)
    - `sagas/`: Generator-Funktionen, die für asynchrone Vorgänge zuständig sind (z. B. Serveranfragen)
  - `globals/`: Konstanten, die global verfügbar sein sollen
    - `actionCreators.js`: Funktionen, um Actions zu erstellen
    - `actionTypes.js`: Konstanten für alle selbst definierten Arten von Redux-Aktionen
  - `react/`: Dateien, die React-Komponenten enthalten (= eigentliches "Frontend")
    - `App.js`: Haupt-React-Komponente
    - `scenes/`: Komponenten, die einmalig verwendet werden und meist den ganzen Screen umfassen (entsprechen Activities in Android-Apps)
    - `icons/`: SVG-Icons, schon in React-Komponenten verpackt
    - `elements/`: wiederverwendbare React-Komponenten
- `.gitignore`: Auflistung von Dateien und Ordnern, die git ignorieren soll
- `package-lock.json`: automatisch generierte Datei mit dem Dependency-Graph (nicht anfassen)
- `package.json`: Datei mit Metadaten (zu installierende packages, Skripte, Name, Version, nicht anfassen)

## Anleitung
1. `node` und `npm` installieren  
Windows: [hier](https://nodejs.org/de/download/) runterladen  
Ubuntu/Debian: `sudo apt install nodejs`
2. `npm install` installiert alle Dependencies.
3. `npm start` startet den Development Server.
4. Öffnet `localhost:3000` im Browser.

