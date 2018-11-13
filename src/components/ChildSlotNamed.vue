<template>
  <section class="bg-child">
    <div>
      <!-- 具名插槽 -->
      <slot name="up">子组件slot， name=up的默认值</slot>
      
      <h2>这是子组件</h2>
      
      <!-- 具名插槽 -->
      <slot name="down">子组件slot， name=down的默认值</slot>
      
      <br>
      <!-- 匿名插槽 -->
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
