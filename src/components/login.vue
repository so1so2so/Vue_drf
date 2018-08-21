<template>
  <div class="login-bg">
    <div class="login">
      <el-form status-icon label-width="100px" class="demo-ruleForm">
        <h1>CMDB后台管理</h1>
        <el-form-item label="帐号" prop="userName">
          <el-input type="text" v-model="username" placeholder="请输入用户名" auto-complete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="chklogin">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-alert v-if='show' :title="[errors]" type="error" center show-icon>
    </el-alert>
  </div>
</template>

<script>
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
      chklogin() {
        var logininfo = {
          username: this.username,
          password: this.password,
        };
        this.$store.dispatch("login", logininfo);
        this.show = true;
        if(this.$store.state.login.sessionid !==null){
           this.$router.push({name:'index',path:'/index'})
      }},
      // if (this.$store.state.login.data.status !==400){
      //     this.show=true;
      //     this.errors=this.$store.state.login.data.data;
      // }

      },
    mounted() {
      // console.log(this.$store.dispatch("login", 111))
      console.log(this.$store.state.login.message);
      console.log(typeof (this.$store.state.login.message));
    },
    computed:{
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
