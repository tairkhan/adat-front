export default function ({ $axios, $auth }) {
  $axios.onResponse((response) => {
    const freshToken = response.headers.fresh_token
    if (freshToken) {
      $auth.setToken('local', freshToken)
      $axios.setHeader('access_token', freshToken)
    }
  })

  $axios.onRequest((request) => {
    if ($auth.loggedIn) {
      request.headers.common.access_token = $auth.getToken('local')
    }
  })
}
