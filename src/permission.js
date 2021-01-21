import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import router from './router'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(_to, _, next) => {
  NProgress.start()
  store.dispatch('permission/generateRoutes').then(accessRoutes => {
    // for (const item of accessRoutes) {
    //   router.addRoute('Layout', item)
    // }
  })
  next()
})

router.afterEach(() => {
  NProgress.done()
})
