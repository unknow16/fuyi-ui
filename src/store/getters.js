const getters = {
  token: state => state.auth.token,
  userInfo: state => state.auth.userInfo,
  roles: state => state.auth.roles,
  routes: state => state.auth.routes
}
export default getters
