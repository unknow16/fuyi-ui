<template>
  <el-dialog :visible.sync="currentShow">子组件弹窗</el-dialog>
</template>

<script>
export default {
  props: ['show'], //父组件通过标签的show属性传入值
  computed: {
    currentShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("update:show", val);
      }
    }
  }
}
</script>

