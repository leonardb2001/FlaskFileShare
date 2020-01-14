import json
import uuid

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
    def fromDBTuple(cls, t):
        uuid, name, path, type, children, date, owner = t
        children_array = json.loads(children)
        return cls(uuid, name, path, type, children_array, date, owner)

    @classmethod
    def fromDict(cls, d):
        uuid = d['uuid']
        name = d['name']
        path = d['path']
        type = d['type']
        children = d['children']
        date = d['date']
        owner = d['owner']
        return cls(uuid, name, path, type, children, date, owner)

    @classmethod
    def fromJSON(cls, j):
        return File.fromDict(json.loads(j))

    def toDBTuple(self):
        return (self.uuid, self.name, self.path, self.type,
                json.dumps(self.children), self.date, self.owner)

    def toDict(self):
        return {
            'uuid': self.uuid,
            'name': self.name,
            'path': self.name,
            'type': self.type,
            'children': self.children,
            'date': self.date,
            'owner': self.owner
        }

    def toJSON(self):
        return json.dumps(self.toDict())

    def __eq__(self, other):
        return (
            self.uuid == other.uuid and
            self.name == other.name and
            self.path == other.path and
            self.type == other.type and
            self.children == other.children and
            self.date == other.date and
            self.owner == other.owner
        )

    def __repr__(self):
        return 'File(uuid={}, name={}, path={}, type={}, children={}, date={}, owner={}); ' \
            .format(self.uuid, self.name, self.path, self.type,
                    self.children, self.date, self.owner)


def generateFileUUID():
    return str(uuid.uuid4())
