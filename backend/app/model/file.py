
class File:
    def __init__(self, uuid, name, path, type, children, date, owner):
        self.uuid = uuid
        self.name = name
        self.path = path
        self.type = type
        self.children = children
        self.date = date
        self.owner = owner

    @classmethod
    def fromTuple(cls, t):
        uuid, name, path, type, children, date, owner = t
        return cls(uuid, name, path, type, children, date, owner)

    @classmethod
    def fromJSON(cls, j):
        pass

    def toTuple(self):
        return self.uuid, self.name, self.path, self.type,
               self.children, self.date, self.owner

    def toJSON(self):
        pass
