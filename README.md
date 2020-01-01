# Flask File Share
Ein Projekt zum Teilen von Dateien, besonders für die Uni. 

## Projekt Struktur
- `backend/`: source code für das Flask-Python-Backend
- `doc/`: Dokumente zum Konzept
- `frontend/`: source code für das React-Backend
- `.gitignore`: Auflistung von Dateien und Ordnern, die git ignorieren soll

Schaut auch mal im wiki (5. Tab oben) rein!

## Arbeit mit git und Github

1. `git clone https://www.github.com/leonardb2001/FlaskFileShare.git` kopiert das Repository von Github auf euren Rechner.
2. `git checkout -b <branch-name>` erstellt einen neuen Branch und wechselt zu dem neuen Branch (das gleiche wie `git branch <branch-name> && git checkout <branch-name>`). Bitte wählt einen aussagekräftigen Namen für den neuen Branch (z. B. `user_authentication_backend` oder `file_display_frontend` oder `redux_implementation_frontend`). Wenn ihr an einem bestehenden Branch arbeiten wollt, reicht `git checkout <branch-name>` aus.
3. Arbeitet an dem Code mit regelmäßigen `git add <path/to/file>` und `git commit`s und aussagekräftigen commit messages. Idealerweise committed man immer, wenn man eine neue Untereinheit (z. B. eine neue Funktion) fertiggeschrieben hat. Mit `get status` könnt ihr den aktuellen Status des Branches sehen.
4. `git push origin <branch-name>` lädt eure neuen commits auf Github hoch. Das ist wichtig, wenn mehrere zugleich am Branch arbeiten wollen. In diesem Fall am besten nach jedem Commit pushen.
5. Wenn ihr euren Code einreichen wollt (d. h. in den `master` Branch gemerged sehen wollt), stellt sichter, dass der Code in eurem Branch funktioniert und dass ihr den Code frisch gepushed habt. Dann geht ihr auf www.github.com zum Repository und klickt auf "New pull request", wählt den richtigen Branch aus und schickt den Pull Request ab.
6. Es kann sein, dass Kommentare kommen, was ihr noch verändern müsst. Dann führt ihr die entsprechenden Änderungen aus, added, committed und pushed. Ihr müsst keinen neuen Pull Request machen!
7. Wenn alles super ist, wird euer Branch in den `master` Branch gemerged.

Das Ziel ist es, auf dem `master` Branch nur "sauberen", funktionierenden Code zu haben. Das bedeutet: __Niemand arbeitet direkt auf dem `master` Branch!__ Um an dem Code zu arbeiten, wird ein neuer Branch erstellt. Wenn der Code funktionsfähig ist, wird auf Github ein Pull Request gemacht. Das ist eine Art "Antrag" darauf, euren Code mit dem Master zu mergen (zu vereinen).


