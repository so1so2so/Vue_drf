<template>
   <div class="login-bg">
        <div class="login">
        <el-form  status-icon   label-width="100px" class="demo-ruleForm">
            <el-form-item label="帐号" prop="userName">
                <el-input type="text"  v-model="username" placeholder="请输入用户名" auto-complete="off" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="password"  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="chklogin">提交</el-button>
                <el-button >重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-alert  title="登录失败" type="error" center show-icon>
  </el-alert>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        url: '/user/getByNameAndPass.action',
          username: '',
          password: '',
      }
    },
    methods: {
          chklogin(){
                // console.log(this.username,this.password)
            var logininfo ={
              username: this.username,
              password:this.password,
              // csrftoken:'123'
            };
          //   axios.request({
          // url:'http://127.0.0.1:8000/login/',
          // method:'post',
          // data:logininfo})

            // console.log(this.$store)
              this.$store.dispatch("login", logininfo)
          }
      },
    mounted(){
            // console.log(this.$store)

    }
  }
</script>

<style  scoped>
  /* login */
.login-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #f1f1f1;
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
