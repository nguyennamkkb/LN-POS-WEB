import axios from 'axios'


// Request interceptor
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000', // api 的 base_url
  timeout: 5000 // request timeout
})
service.interceptors.request.use(request => {
    const token = store.getters['auth/token']
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`
    }
  
    const locale = store.getters['lang/locale']
    if (locale) {
      request.headers.common['Accept-Language'] = locale
    }
  
    // request.headers['X-Socket-Id'] = Echo.socketId()
  
    return request
  })
  // Response interceptor
service.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response
  
      if (status === 401 && store.getters['auth/check']) {
        Swal.fire({
          icon: 'warning',
          title: i18n.t('token_expired_alert_title'),
          text: i18n.t('token_expired_alert_text'),
          reverseButtons: true,
          confirmButtonText: i18n.t('ok'),
          cancelButtonText: i18n.t('cancel')
        }).then(() => {
          store.commit('auth/LOGOUT')
  
          router.push({ name: 'login' })
        })
      }
  
      if (status >= 500) {
        serverError(error.response)
      }
  
      return Promise.reject(error)
    }
  )
  
  let serverErrorModalShown = false
  async function serverError (response) {
    if (serverErrorModalShown) {
      return
    }
  
    if ((response.headers['content-type'] || '').includes('text/html')) {
      const iframe = document.createElement('iframe')
  
      if (response.data instanceof Blob) {
        iframe.srcdoc = await response.data.text()
      } else {
        iframe.srcdoc = response.data
      }
  
      Swal.fire({
        html: iframe.outerHTML,
        showConfirmButton: false,
        customClass: { container: 'server-error-modal' },
        didDestroy: () => {
          serverErrorModalShown = false
        }
      })
  
      serverErrorModalShown = true
    } else {
      Swal.fire({
        icon: 'error',
        title: i18n.t('error_alert_title'),
        text: i18n.t('error_alert_text'),
        reverseButtons: true,
        confirmButtonText: i18n.t('ok'),
        cancelButtonText: i18n.t('cancel')
      })
    }
  }
  
  export default service