<template>
  <div>
    <!-- 通过vuex的mutation操作状态管理 -->
    <!-- <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a> -->

    <!-- 通过vuex的action操作多个mutation方法，进而改变状态 -->
    <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
    <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from './PropChildVuex';

export default {
  components: {
    't-dialog': dialog
  }
}
</script>

