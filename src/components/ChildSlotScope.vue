<template>
  <section class="bg-child">
    <div>
      <h2>这是子组件</h2>
      <slot :data="data"></slot>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  }
}
</script>

<style>
  .bg-child {
    background: #84ccc9
  }
</style>
