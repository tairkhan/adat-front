export default function ({ $axios, $auth }) {
  $axios.onResponse((response) => {
    const freshToken = response.headers.fresh_token
    if (freshToken) {
      $auth.setToken('local', freshToken)
      $axios.setHeader('authorization', freshToken)
    }
  })
}
