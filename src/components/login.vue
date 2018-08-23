<template>
  <div class="login-bg">
    <div class="login">
      <el-form status-icon label-width="100px" class="demo-ruleForm">
              <h1 >CMDB后台管理</h1>
        <el-form-item label="帐号" prop="userName">
          <el-input type="text" v-model="username" placeholder="请输入用户名" auto-complete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="password" placeholder="请输入密码" auto-complete="off" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login_a">提交</el-button>
          <el-button @click="reset">重置</el-button>
          <!--<el-button >{{get_status}}</el-button>-->

        </el-form-item>
      </el-form>
    </div>
    <el-alert v-if='show' :title="errors" type="error" center show-icon>
    </el-alert>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Cookie from 'vue-cookies'
  import axios from 'axios'
  export default {
    data() {
      return {
        url: '/login',
        username: null,
        password: null,
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
        // if(this.username===null || this.password===null)
        //   this.show=true;
        //   this.errors="请输入用户名密码";
        var that = this;
        axios.request({
            url: '/auth/',
            method: 'post',
            data: logininfo,
          }
        ).then(function (response) {
          // console.log(response.data.code);

          if (response.data.code === 200) {
            //提交mapActions定义 display
            that.login({username:logininfo.username,token:response.data.token});
            var url = that.$route.query.backUrl;
             if(url){
                that.$router.push({path:url})
             }
             else {
               that.$router.push({path: '/index'})
             }
          }
          else {
            that.show = true;
            that.errors =response.data.message
          }
        }).catch(function (error) {
          //请求失败
          console.log(error);
          that.show = true;
          that.errors = "请求失败"
        })
      },
      reset() {
        this.show = false;
        this.username = null;
        this.password = null;
      }
    }
    ,
    mounted() {
      if (Cookie.get("token")) {

        this.$router.push({path: '/index'})
      }
    }
    ,
    computed: {
      ... mapGetters(['getloginmessage', 'getlogincode']),
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
