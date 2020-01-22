#! /bin/python

# in order to use this script you must create a testDir directory in /doc

import os
import uuid
from datetime import datetime
import pprint

owner = '9e32f25dab6c4d7f8bd54a4bfba9ccd9' # this is tommy's uuid (in /backend/testserver/testdata.py)

def main():
    resources = []
    for root, dirs, files in os.walk('./testDir'):
        path = root[10:] # nicely hardcoded :P
        parent = next((f['uuid'] for f in resources if os.path.join(f['path'], f['name']) == path), '')
        date = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        for dir in dirs:
            resources.append({
                'uuid': str(uuid.uuid4()),
                'name': dir,
                'path': path,
                'type': 'd',
                'owner': owner,
                'parent': parent,
                'date': date
            })
        for file in files:
            resources.append({
                'uuid': str(uuid.uuid4()),
                'name': file,
                'path': path,
                'type': 'f',
                'owner': owner,
                'parent': parent,
                'date': date
            })
    pprint.pprint(resources)

if __name__ == '__main__':
    main()
