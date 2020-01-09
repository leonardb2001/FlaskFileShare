
import React from 'react'

import GetFilesExample from '../../examples/GetFilesExample'
import PostFileExample from '../../examples/PostFileExample'
import DeleteFileExample from '../../examples/DeleteFileExample'
import DeleteUserExample from '../../examples/DeleteUserExample'

class Files extends React.Component {
  render() {
    return (
      <>
        <h1>Files</h1>
        <GetFilesExample/>
        <PostFileExample/>
        <DeleteFileExample/>
        <DeleteUserExample/>
      </>
    )
  }
}

export default Files
