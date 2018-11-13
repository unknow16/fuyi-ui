<template>
  <section class="bg-parent">
    <div>
      <h2>这是父组件</h2>
      <ChildSlotScope>
        <template slot-scope="user">
          <div>
            <span class="flex-border" v-for="item in user.data" :key="item">{{item}}</span>
          </div>
        </template>
      </ChildSlotScope>


      <ChildSlotScope>
        <template slot-scope="user">
          <ul>
            <li v-for="item in user.data" :key="item">{{item}}</li>
          </ul>
        </template>
      </ChildSlotScope>

      <child-slot-scope>
        <template slot-scope="user">
          {{user.data}}
        </template>
      </child-slot-scope>

      <child-slot-scope>不使用其提供的数据, 作用域插槽退变成匿名插槽</child-slot-scope>
    </div>
  </section>
</template>

<script>
import ChildSlotScope from '@/components/ChildSlotScope.vue'

export default {
  components: {ChildSlotScope}
}
</script>

<style>
  .bg-parent {
    background: #999999;
    padding: 10px;
  }

  .flex-border {
    padding: 10px;
  }
</style>
