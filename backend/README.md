
# src

  - `api/`: Flask Server Api (Backend)
  - `web/`: React Code (Frontend)
# Server

Bisher befindet sich in diesem Ordner ein Dummyserver zum Ausprobieren.

1. Python 3 [hier](https://www.python.org/downloads/) herunterladen
2. In diesem Ordner virtuelle Umgebung einrichten mit `python -m venv venv`
3. Virtuelle Umgebung starten:
Unter Windows: `venv\Scripts\activate`
Unter Linux: `source venv/bin/activate`
Jetzt sollte an jedem Zeilenanfang im Terminal `(venv)` stehen.
4. Flask herunterladen: `pip install flask`
5. Mit Flask ausführen:
Unter Windows:
`set FLASK_APP=main.py`
`flask run`

Unter Linux:
`export FLASK_APP=main.py`
`flask run`

6. optional: Mit `python-dotenv` (`pip install python-dotenv`) sollte die `.flaskenv`-Datei erkannt werden. Dann ist `FLASK_APP=main.py` nicht mehr nötig.
