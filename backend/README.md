
# Backend
...geschrieben mit Python, Flask (Server für die API), sqlite3 (Datenbank). Bisher befindet sich in diesem Ordner nur ein Dummyserver zum Ausprobieren.

## Struktur
- `api/`: Flask Server Api (Backend)
- `main.py`: "Entry Point" des Servers

# Anleitung

1. Python 3 [hier](https://www.python.org/downloads/) herunterladen
2. In diesem Ordner virtuelle Umgebung einrichten mit `python -m venv venv`
3. Virtuelle Umgebung starten:  
Windows: `venv\Scripts\activate`  
Linux: `source venv/bin/activate`  
Jetzt sollte an jedem Zeilenanfang im Terminal `(venv)` stehen.
4. Dependencies installieren: `pip install -r requirements.txt`
5. Mit Flask ausführen: `flask run`
