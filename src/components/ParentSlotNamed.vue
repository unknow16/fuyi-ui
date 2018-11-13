<template>
  <section class="bg-parent">
    <div>
      <h2>这是父组件</h2>
      <ChildSlotNamed>
        <div slot="up">
              <span>菜单1-up</span>
              <span>菜单2-up</span>
              <span>菜单3-up</span>
              <span>菜单4-up</span>
              <span>菜单5-up</span>
              <span>菜单6-up</span>
        </div>
         <div slot="down">
              <span>菜单1-down</span>
              <span>菜单2-down</span>
              <span>菜单3-down</span>
              <span>菜单4-down</span>
              <span>菜单5-down</span>
              <span>菜单6-down</span>
        </div>
         <div>
              <span>菜单1</span>
              <span>菜单2</span>
              <span>菜单3</span>
              <span>菜单4</span>
              <span>菜单5</span>
              <span>菜单6</span>
        </div>
      </ChildSlotNamed>
    </div>
  </section>
</template>

<script>
import ChildSlotNamed from '@/components/ChildSlotNamed.vue'

export default {
  components: {ChildSlotNamed}
}
</script>

<style>
  .bg-parent {
    background: #999999;
    padding: 10px;
  }
</style>
