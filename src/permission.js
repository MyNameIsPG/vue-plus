import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from './store'
import router from './router'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(_to, _, next) => {
  NProgress.start()
  store.dispatch('permission/generateRoutes').then(res => {
    console.log(res)
  })
  next()
})

router.afterEach(() => {
  NProgress.done()
})
