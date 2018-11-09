<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>

        <router-link :to="{ name: 'aboutChild', params: { userId: 123}}">aboutChild</router-link>

        <p>
            <router-view></router-view>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>