
const makeResPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => res(data), 1000)
  })

const makeRejPromise = (data) => () =>
  new Promise((res, rej) => {
    setTimeout(() => rej(data), 1000)
  })


export const getFiles200 = makeResPromise({
  status: 200,
  resources: [
    {
        id: '8wb302bsn28lsi20',
        name: 'Hinweise.pdf',
        path: '',
        type: 'f'
    },
    {
        id: 'n9an3l2kd8sna92n',
        name: 'Mitschnitte',
        path: '',
        type: 'd',
        children: [
            '9aw211j9abbslwei',
            '0anvhd73g1dssu50'
        ]
    },
    {
        id: '9aw211j9abbslwei',
        name: 'Vorlesung1.mp4',
        path: 'Mitschnitte/',
        type: 'f'
    },
    {
        id: '0anvhd73g1dssu50',
        name: 'Vorlesung2.mp4',
        path: 'Mitschnitte/',
        type: 'f'
    }
  ]
})

export const getFiles401 = makeRejPromise({
  status: 401
})

export const getFiles404 = makeRejPromise({
  status: 404
})

export const postFile201 = makeResPromise({
  status: 201,
  resource: {
    id: 'nao209sn3nnvndk3',
    name: 'Vorlesung3.mp4',
    path: 'Mitschnitte/',
    type: 'f'
  } 
})

export const postFile404 = makeRejPromise({
  status: 404
})

export const postFile401 = makeRejPromise({
  status: 401
})

export const deleteFile204 = makeResPromise({
  status: 204
})

export const deleteFile401 = makeRejPromise({
  status: 401
})

export const deleteFile404 = makeRejPromise({
  status: 404
})
