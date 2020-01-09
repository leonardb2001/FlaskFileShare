
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
    path: '/login',
    exact: true,
    component: <>login</>,
    private: false
  }




]

export default routes
