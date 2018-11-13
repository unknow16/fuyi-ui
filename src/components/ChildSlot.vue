<template>
  <section class="bg-child">
    <div>
      <h2>这是子组件</h2>
      <slot>子组件-slot默认值</slot>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>
  .bg-child {
    background: #84ccc9
  }
</style>
