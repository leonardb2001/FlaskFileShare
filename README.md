# Dummyserver

Bisher befindet sich in dieser Repository ein Dummyserver zur individuellen Entwicklung. Der hat nur die absoluten Basics.

Steps:

### 1. Python 3 [hier](https://www.python.org/downloads/) herunterladen

### 2. Dieses Repository auf euren Rechner klonen (siehe 1. unten)

### 3. Darin im Ordner "src" virtuelle Umgebung einrichten:
`python -m venv venv`

### 4. Virtuelle Umgebung starten:
Unter Windows:
`venv\Scripts\activate`

Unter Linux:
`source venv/bin/activate`

### 5. Flask herunterladen:
`pip install flask`

### 6. Programm schreiben (Ich empfehle die IDLE von Python, kann bei Installation von Python mit zum Runterladen ausgewählt werden. Es geht aber so ziemlich jede Python IDE.)

### 7. Mit Flask ausführen:
Unter Windows:
`set FLASK_APP=main.py`
`flask run`

Unter Linux:
`export FLASK_APP=main.py`
`flask run`


## Arbeit mit git und Github

Das Ziel ist es, auf dem `master` Branch nur "sauberen", funktionierenden Code zu haben. Das bedeutet: Niemand arbeitet direkt auf dem `master` Branch! Um an dem Code zu arbeiten, wird ein neuer Branch erstellt. Wenn der Code funktionsfähig ist, wird auf Github ein Pull Request gemacht. Das ist eine Art "Antrag" darauf, euren Code mit dem Master zu mergen (zu vereinen). Derjenige, der den Code reviewed, kann Kommentare abgeben, was noch verändert werden muss.
Hier eine kleine Hilfe:

1. `git clone https://www.github.com/leonardb2001/FlaskFileShare.git` kopiert das Repository von Github auf euren Rechner.
2. `git checkout -b <branch-name>` erstellt einen neuen branch und wechselt zu dem neuen Branch (das gleiche wie `git branch <branch-name> && git checkout <branch-name>`). Bitte wählt einen aussagekräftigen Namen für das "feature", das ihr gerade programmieren wollt (z. B. `user_authentication_backend` oder `file_display_frontend` oder `redux_implementation_frontend`).
3. Arbeitet an dem Code mit regelmäßigen `git add <path/to/file>` und `git commit`s und aussagekräftigen commit messages. Idealerweise committed man immer, wenn man eine neue Untereinheit (z. B. eine neue Funktion) fertiggeschrieben hat.
4. `git push origin <branch-name>` lädt eure neuen commits auf Github hoch. Das ist wichtig, wenn mehrere zugleich am Branch arbeiten wollen. In diesem Fall am besten nach jedem Commit pushen.
5. Wenn ihr euren Code einreichen wollt (d. h. in den `master` Branch gemerged sehen wollt), stellt sichter, dass der Code mit dem bestehenden Code funktioniert und dass ihr den Code frisch gepushed habt. Dann geht ihr auf www.github.com zum Repository und klickt auf "New pull request", wählt den richtigen Branch aus und schickt den Pull Request ab.
6. Es kann sein, dass Kommentare kommen, was ihr noch verändern müsst. Dann führt ihr die entsprechenden Änderungen aus, added, committed und pushed. Ihr müsst keinen neuen Pull Request machen!
7. Wenn alles super ist, wird euer Branch in den `master` Branch gemerged.

