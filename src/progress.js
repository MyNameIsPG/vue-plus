import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from './router'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(_to, _, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
