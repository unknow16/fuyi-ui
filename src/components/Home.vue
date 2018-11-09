<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>


        <router-link to="/home/computer">computer</router-link>
        <router-link to="/home/tablet">Tablet</router-link>   
        <router-link to="/home/phone">Phone</router-link>

        <p>
            <router-view></router-view>
        </p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>