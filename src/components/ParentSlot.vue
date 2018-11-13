<template>
  <section class="bg-parent">
    <div>
      <h2>这是父组件</h2>
      <ChildSlot>
        <div class="tmpl">
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
        </div>
      </ChildSlot>
    </div>
  </section>
</template>

<script>
import ChildSlot from '@/components/ChildSlot.vue'

export default {
  components: {ChildSlot}
}
</script>

<style>
  .bg-parent {
    background: #999999;
    padding: 10px;
  }
</style>
