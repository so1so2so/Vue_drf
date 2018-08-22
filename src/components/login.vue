<template>
  <div class="login-bg">
    <div class="login">
      <el-form status-icon label-width="100px" class="demo-ruleForm">
        <h1>CMDB后台管理</h1>
        <el-form-item label="帐号" prop="userName">
          <el-input type="text" v-model="username" placeholder="请输入用户名" auto-complete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password" placeholder="请输入密码" auto-complete="off" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login_a" c="login_chose">提交</el-button>
          <el-button @click="reset">重置</el-button>
          <!--<el-button >{{get_status}}</el-button>-->

        </el-form-item>
      </el-form>
    </div>
    <el-alert v-if='show' :title="getloginmessage" type="error" center show-icon>
    </el-alert>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Cookie from 'vue-cookies'
  export default {
    data() {
      return {
        url: '/login',
        username: '',
        password: '',
        show: false,
        errors: '默认错误',
      }
    },
    methods: {
      ...mapActions(['login']),
      login_a() {
        var logininfo = {
          username: this.username,
          password: this.password,
        };
        this.login(logininfo);
        // console.log(this.getloginstatus)
        if (this.getlogincode===200) {
          this.$router.push({path: '/index'})
        }
        else {
          this.show=true;
        }
      },
      reset() {
        this.show = false;
        this.username = null;
        this.password = null;
      }
    }
    ,
    mounted() {
      if(Cookie.get("sessionid")){
         this.$router.push({path: '/index'})
      }
      //页面加载后
      // console.log(this.$store.dispatch("login", 111))
      // console.log(this.$store.state.login.message);
      // console.log(typeof (this.$store.state.login.message));
    }
    ,
    computed: {
      ... mapGetters(['getloginmessage', 'getlogincode']),
      // get_status() {
      //   return this.$store.state.login.message
      // }
    }
  }
</script>

<style scoped>
  /* login */
  .login-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f8f4ed;
  }

  .login-bg .login {
    min-width: 500px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
