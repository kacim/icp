<template>
    <div class="wrapper">
        <div class='logoDiv'>
          <img class='logo' src='../../assets/img/logo.jpg'>
          <span>公司名</span>
          <div class='btn login' @click='showlogin'>登录</div>
          <div class='btn rig' @click='showrig'>注册</div>
      </div>
      <div class='tablist'>
         <div @click='tohome'>首页</div>
         <div @click='toour'>关于我们</div>
         <div @click='tous'>联系我们</div>
         <div @click='showInfo'>行业资讯</div>
     </div>
     <div class="content">
        <router-view></router-view>
    </div>
    <div class='foot'>
            <span>&copyxxxx</span>  <span>电话：010-1111</span>   <span>邮箱：xxxx</span>   <br><span>联系地址：北京市xxxx</span>   <a target="_blank"href='http://beian.miit.gov.cn/'>京ICP备xxx</a>
    </div>


    <div class='logincard' v-if="login == 1">
         <div class='title'>用户登录</div>
         <div class='cardInfo'>登录付费后可完整阅读资讯，会员费30元/月</div>
         <div class='loginItem'>
             <div>用户名</div>
             <input/>
         </div>
         <div class='loginItem'>
             <div>密码</div>
             <input type='password'/>
         </div>
         <div class='loginBtnItem'>
          <div @click='hidelogin'>取消</div>
          <div @click='checklogin'>确定</div>
      </div>
    </div>

    <div class='logincard' v-if="rig == 1">
         <div class='title'>用户注册</div>
          <div class='cardInfo'>注册付费后可完整阅读资讯，会员费30元/月</div>
         <div class='loginItem'>
             <div>用户名</div>
             <input/>
         </div>
         <div class='loginItem'>
             <div>密码</div>
             <input type='password'/>
         </div>
         <div class='loginBtnItem'>
          <div @click='hiderig'>取消</div>
          <div @click='checkrig'>确定</div>
      </div>
    </div>


</div>
</template>

<script>
    export default {
        data() {
            return {
                 login:0,
                 rig:0
            }
        },
        mounted() {

        },
        created() {
            window.scrollTo(0, 0);
        },
        destroyed() {

        },
        methods: {
           showInfo(){
            this.$router.push({path:'/info'})
            //alert('注册成为付费会员后可进入行业资讯频道，会员费30元/月')
        },
        showlogin(){
              this.login = 1;
        },
        hidelogin(){
          this.login = 0;
        },
        checklogin(){
           alert('用户名密码错，请联系客户或重新尝试')
        },
        showrig(){
            this.rig = 1;
        },
         hiderig(){
          this.rig = 0;
        },
        checkrig(){
           alert('用户注册成功，人工审核中')
        },
        tohome(){
          this.$router.push({path:'/home'})
        },
        toour(){
          this.$router.push({path:'/our'})
        },
        tous(){
          this.$router.push({path:'/company'})
        }
    }
}
</script>

<style lang="scss">


.foot{
    margin-top: 40px;
    width: 100%;
    height: 60px;
    background-color: #ccc;
    color: white;
    text-align: center;
    line-height: 26px;
    span{
      margin-right: 20px;
    }
    a{
      color:white;
      text-decoration: underline;
    }
}

.wrapper{
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
}

.logincard{
    width: 260px;
    height: auto;
    background: #CCC;
    border-radius: 10px;
    height: auto;
    padding: 30px;
    position: fixed;
    top:40%;
    left:50%;
    transform:translate(-50%);

    .cardInfo{
          margin: 5px;
          font-size: 12px;
          color:#666;
    }

    input{
        width: 100%;
    }
    .title{
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }

    .loginBtnItem{
        width: 100%;
        margin-top: 10px;
        div{
            width: 120px;
            height: 26px;
            font-size: 18px;
            line-height: 26px;
            display: inline-block;
            vertical-align: top;
            border:1px solid #666;
            border-radius:8px;
            text-align: center;
            cursor: pointer;
        }

        div:nth-child(1){
            margin-right: 10px;
        }
    }
}

.logoDiv{
    width: 100%;
    position: relative;
    .logo{
        width: 40px;
    }
    span{
        position: relative;
        left:20px;
        top:-12px;
    }
    font-size: 20px;
    color:black;

    .login{
        position: absolute;
        top:10px;
        right:120px;
    }

    .rig{
        position: absolute;
        top:10px;
        right:0px;
    }

    .btn{
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
        color:#333;
        border:1px solid #e0e0e0;
        border-radius: 10px;
        cursor: pointer;
    }
}


.tablist{
    width: 100%;
    border-bottom: 1px solid #cecece;
    margin-top: 20px;
    div{
        width: 25%;
        display: inline-block;
        vertical-align: top;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color:black;
        text-align: center;
        cursor: pointer;
    }
}

</style>