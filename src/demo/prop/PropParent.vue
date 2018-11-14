<template>
  <div>
    <a href="javascript:;" @click="show = true">点击</a>
    <t-dialog :show.sync="show"></t-dialog>
  </div>
</template>

<script>
import dialog from './PropChild';

export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    't-dialog': dialog
  }
}
</script>

