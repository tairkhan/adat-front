export default function ({ $axios, $auth, redirect }) {
  $axios.onResponse((response) => {
    const freshToken = response.headers.fresh_token
    if (freshToken) {
      $auth.setToken('local', freshToken)
      $axios.setHeader('authorization', freshToken)
    }
  })

  $axios.onError((err) => {
    const status = err &&
                   err.response &&
                   err.response.status
    switch (status) {
      case 404:
        redirect('/error')
        break

      default:
        break
    }
  })
}
