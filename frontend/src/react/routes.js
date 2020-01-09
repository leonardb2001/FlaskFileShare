
import * as scenes from './scenes'

const routes = [
  {
    path: '/',
    exact: true,
    component: scenes.Home,
    private: false
  },
  {
    path: '/login',
    exact: true,
    component: scenes.Login,
    private: false
  },
  {
    path: '/register',
    exact: true,
    component: scenes.Register,
    private: false
  },
  {
    path: '/users/:username/:folder*',
    exact: true,
    component: scenes.Files,
    private: false // actually true
  },
  {
    path: '/user-search/:search_text',
    exact: true,
    component: scenes.Search,
    private: false // actually true
  },
  {
    path: '/upload',
    exact: true,
    component: scenes.Upload,
    private: false // actually true
  },
  {
    path: '',
    exact: false,
    component: scenes.NotFound,
    private: false
  }
]

export default routes
