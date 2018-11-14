<template>
  <el-dialog :visible.sync="show">子组件弹窗</el-dialog>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState({
      show:state=>state.dialog.show
    })
  }
}
</script>

