
import React from 'react'
import { Redirect } from 'react-router-dom'

import AuthenticationExample from './examples/AuthenticationExample'
import UserSearchExample from './examples/UserSearchExample'
import RegisterExample from './examples/RegisterExample'
import DeleteUserExample from './examples/DeleteUserExample'
import GetFilesExample from './examples/GetFilesExample'
import PostFileExample from './examples/PostFileExample'
import DeleteFileExample from './examples/DeleteFileExample'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <h1>home</h1>,
    private: false
  },
  {
    path: '/login',
    exact: true,
    component: () => <h1>login</h1>,
    private: false
  },
  {
    path: '/register',
    exact: true,
    component: () => <h1>register</h1>,
    private: false
  },
  {
    path: '/users/:username/:folder*',
    exact: true,
    component: () => <h1>files</h1>,
    private: false // actually true
  },
  {
    path: '/user-search/:search_text',
    exact: true,
    component: () => <h1>search results</h1>,
    private: false // actually true
  },
  {
    path: '/upload',
    exact: true,
    component: () => <h1>upload</h1>,
    private: false // actually true
  }
]

export default routes
