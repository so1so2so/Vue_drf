<template>
  <el-header>
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
             background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">资产管理</el-menu-item>
      <el-submenu index="2">
        <template slot="title">服务器管理</template>
        <el-menu-item index="2-1">小型机</el-menu-item>
        <el-menu-item index="2-1">刀片机</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">交换机</template>
          <el-menu-item index="2-4-1">路由器</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      <el-menu-item index="-1" type="primary" icon="el-icon-search">{{getuser}}</el-menu-item>
      <el-menu-item  index="5" @click="logout">注销</el-menu-item>

    </el-menu>
  </el-header>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import ElSlPanel from "element-ui/packages/color-picker/src/components/sv-panel";

  export default {
    name: "heads",
    components: {ElSlPanel},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      ...mapActions(['getserver', 'login_out']),
      handleSelect(key, keyPath) {
        if (key === '2-1') {
          console.log(1);
          this.$router.push({name: 'login'})
        }
        console.log(key, keyPath);
      },
      logout() {
        this.login_out()
        this.$router.push({name: 'login'})


      }
    },
    computed: {
      ... mapGetters(['getuser',]),
    },
    // mounted() {
    //   this.getuser;
    // }

  }
</script>

<style scoped>

</style>
