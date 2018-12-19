<template>
    <section>
        <el-badge :value="200" :max="99" class="item">
            <el-button size="small">评论</el-button>
        </el-badge>
        
        <el-badge :value="100" :max="10" class="item">
            <el-button size="small">回复</el-button>
        </el-badge>
    </section>
</template>

<script>
export default {
    data() {
        return {
            desc: 'Dashboard'
        }
    }
}
</script>

<style>
.item {
    margin-top: 20px;
    margin-right: 40px;
}
</style>