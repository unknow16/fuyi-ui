const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  routes: state => state.user.routes
}
export default getters
