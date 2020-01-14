
import json

class User:
    def __init__(self, uuid, uname, email, pw_hash, date):
        self.uuid = uuid
        self.uname = uname
        self.email = email
        self.pw_hash = pw_hash
        self.date = date

    @classmethod
    def fromTuple(cls, t):
        uuid, uname, email, pw_hash, date = t
        return cls(uuid, uname, email, pw_hash, date)

    @classmethod
    def fromDict(cls, d):
        uuid = d['uuid']
        uname = d['uname']
        email = d['email']
        pw_hash = d['pw_hash']
        date = d['date']
        return cls(uuid, uname, email, pw_hash, date)

    @classmethod
    def fromJSON(cls, j):
        return User.fromDict(json.loads(j))

    def toDBTuple(self):
        return self.uuid, self.uname, self.email, self.pw_hash, self.date

    def toDict(self):
        return {
            'uuid': self.uuid,
            'uname': self.uname,
            'email': self.email,
            'pw_hash': self.pw_hash,
            'date': self.date
        }
    
    def toJSON(self):
        return json.dumps(self.toDict())

    def __eq__(self, other):
        return (
            self.uuid == other.uuid and
            self.uname == other.uname and
            self.email == other.email and
            self.pw_hash == other.pw_hash and
            self.date == other.date
        )

    def __repr__(self):
        return 'User(uuid={}, uname={}, email={}, pw_hash={}, date={}); ' \
            .format(self.uuid, self.uname, self.email, self.pw_hash, self.date)
