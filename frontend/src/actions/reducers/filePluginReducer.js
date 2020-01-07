
import { EXTEND_FILE_LIST } from '../../globals/actionTypes'

export default function filePluginReducer(state, action) {
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
