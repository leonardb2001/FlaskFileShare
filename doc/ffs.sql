PRAGMA foreign_keys = ON;

CREATE TABLE users (
	uuid TEXT PRIMARY KEY,
	uname	TEXT NOT NULL UNIQUE,
	email	TEXT NOT NULL UNIQUE,
	pw_hash	TEXT NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);


CREATE TABLE files (
	uuid TEXT PRIMARY KEY,
	name TEXT NOT NULL,
	path TEXT NOT NULL,
	type TEXT NOT NULL,
	parent TEXT,
	owner TEXT NOT NULL,
	date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	UNIQUE (name, path, owner),
	CONSTRAINT fk_file_parent
		FOREIGN KEY (parent, owner)
		REFERENCES files(uuid, owner)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CONSTRAINT fk_file_owner
		FOREIGN KEY (owner)
		REFERENCES users(uuid)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
	CHECK (type IN ('d', 'f')),
  CHECK (parent != uuid),
  CHECK (path != '')
);

CREATE TRIGGER validate_parent_type_insert
  BEFORE INSERT ON files
  BEGIN
    SELECT
      CASE
        WHEN (SELECT type FROM files WHERE uuid = NEW.parent) != 'd'
        THEN RAISE (ABORT, 'parent is not a folder')
      END;
  END;

CREATE TRIGGER validate_same_owner_insert
  BEFORE INSERT ON files
  BEGIN
    SELECT
      CASE
        WHEN (SELECT owner FROM files WHERE uuid = NEW.parent) != NEW.owner
        THEN RAISE (ABORT, 'parent has different owner')
      END;
  END;

CREATE TRIGGER prohibit_file_type_change
  UPDATE OF type ON files
  BEGIN
    SELECT RAISE (ABORT, 'file type cannot be updated');
  END;

