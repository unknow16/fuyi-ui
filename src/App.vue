<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>

      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
// 1. 导入组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  // 2. 导出中声明组件
  // 3. template中就可以使用了
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a.router-link-active {
  color: red;
}
</style>
