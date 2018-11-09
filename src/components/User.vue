<template>
    <div>
        <h1>User</h1>
        <p>欢迎用户{{userId}}</p>
    </div>
</template>

<script>
export default {
    // computed: {
    //     userId () {
    //         return this.$route.params.id;
    //     }
    // }

    data () {
        return {
            userId : ""
        }
    },
    watch: {
        // to表示的是你要去的那个组件，
        // from 表示的是你从哪个组件过来的，它们是两个对象
        // 你可以把它打印出来，它们也有一个param 属性
        $route(to, from) {
            console.log(to);
            console.log(from);
            this.userId = to.params.id;
        }
    }
}
</script>

