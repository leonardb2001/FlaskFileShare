
import { EXTEND_FILE_LIST } from '../../globals/actionTypes'

const filePlugin = (resourceType, options) => (state, action) => {
  switch(action.type) {
    case EXTEND_FILE_LIST:
      const { listkey, files } = action.payload
      const oldList = state.lists[listkey] || []
      const newList = oldList.concat(files)
      return {
        ...state,
        lists: {
          ...state.lists,
          [listkey]: newList
        }
      }
    default:
      return state
  }
}

export default filePlugin
