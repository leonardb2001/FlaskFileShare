# Dummyserver für das unglaublich wundervolle Python-Projekt

Bisher befindet sich in dieser Repository ein Dummyserver zur individuellen Entwicklung. Der hat nur die absoluten Basics.

Steps:

### 1. Python [hier](https://www.python.org/downloads/) herunterladen

### 2. Entsprechenden Ordner suchen bzw erstellen und dort dieses Repository einfügen

### 3. Darin im Ordner mit der Datei "main.py" virtuelle Umgebung einrichten:
`python -m venv <Name für deine virtuelle Umgebung>`

### 4. Virtuelle Umgebung starten:
Unter Windows:
`<Name für deiner virtuellen Umgebung>\Scripts\activate`

Unter Linux (ka ob das funktioniert, hab ich so ausm Internet kopiert. Hab kein Linux und konnte es daher nicht ausprobieren):

`source <Name deiner virtuellen Umgebung>/bin/activate`

### 5. Flask herunterladen:
`pip install flask`

### 6. Programm schreiben (Ich empfehle das IDLE von Python, kann bei Installation von Python mit zum Runterladen ausgewählt werden. Es geht aber so ziemlich jedes Python IDE)

### 7. Mit Flask ausführen:
Unter Windows:
`set FLASK_APP=main.py`
`flask run`

Unter Linux:
`export FLASK_APP=main.py`
`flask run`

Ich hoffe, dass ich nichts vergessen habe. Meldet gerne Fehler oder wenn etwas unklar ist.