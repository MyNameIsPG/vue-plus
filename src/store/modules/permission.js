import { resMenusTree } from '@/api'
import Layout from '@/layout/index'

const state = {
  routes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      resMenusTree().then(res => {
        commit('SET_ROUTES', res.data)
        const accessedRoutes = filterAsyncRouter(res.data)
        resolve(accessedRoutes)
      })
    })
  }
}

function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

export const loadView = view => {
  return resolve => require([`@/views/${view}`], resolve)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
