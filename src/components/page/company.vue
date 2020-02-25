<template>
    <div style='font-size: 0'>
         <div class='our'>
                <img src='../../assets/img/team.jpg'/>
                       <div class='companydes'>
                        公司介绍
                      </div>
                      <div class='ourItem'>
                            <span>客服联系方式</span>
                            电话：010-11111
                      </div>
                      <div class='ourItem'>
                            <span>公司地址:</span>
                            北京市xxxxx
                      </div>
        </div>
    </div>
</template>
<script>
  



export default {
    data() {
        return {
           
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
       
    }
}
</script>
<style lang="scss">


.ourItem{
    margin-top: 30px;
}

.our{
    width: 100%;
    margin-top: 20px;
    
    img,div{
        display: inline-block;
        vertical-align: top;
    }

    img{
        width: 540px;
    }

    div{
        width: 400px;
         margin-left: 100px;
        font-size: 16px;
        color:#666;
        line-height: 40px;
    }

}
</style>