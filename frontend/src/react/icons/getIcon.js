
import React from 'react'
import { SvgIcon } from '@material-ui/core'

export default (children) => (props) => (
  <SvgIcon {...props}>
    {children}
  </SvgIcon>
)


