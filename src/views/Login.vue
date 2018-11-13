<template>
    <section>
        <el-container>
            <el-header>登录页面</el-header>
            <el-main>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                        <el-button>忘记密码</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: 'admin',
                password: '123456'
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('main')
        }
    }
}
</script>

<style>
.el-header, .el-main, .el-footer {
    text-align: center;
    line-height: 60px;
}
</style>

