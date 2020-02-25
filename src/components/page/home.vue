<template>
    <div style='font-size: 0;width: 100%'>
            <img class='homeimg' src='../../assets/img/big.jpg'>

            <div class='homeInfo'>
                 <div class='title'>行业资讯</div>
                 <div class='homeItem'>
                        <img src='../../assets/img/bg1.jpg' @click='showAllInfo'/>
                        <div class='itemTitle'>重回正轨的旷视科技IPO</div>
                        <div class='itemRes'>2019年8月25日，旷视科技在香港提交上市申请。
                        2019年11月，有报道称旷视科技未通过港交所上市聆讯，因为香港监管机构要求该提供更多信息。旷视科技对此回应报道不实。
                        2019年12月，有报道称旷视科技决定把香港IPO计划推迟至2020年。
                        媒体报道称...
                        </div>
                 </div>
                 <div class='homeItem'>
                        <img src='../../assets/img/bg2.jpg' @click='showAllInfo'/>
                        <div class='itemTitle'>苹果重返CES：物联网时代，隐私还有救吗？O</div>
                        <div class='itemRes'>从1992年至2019年，整整27年，2020年1月7日苹果公司的身影从来没有出现在CES的舞台上。但是今年的CES大会上，苹果终于出现，它的回归成为了大家关注的焦点。
                        苹果公司派出了全球隐私高级主管...
                        </div>
                 </div>
                 <div class='homeItem' @click='showAllInfo'>
                        <img src='../../assets/img/bg3.jpg' />
                        <div class='itemTitle'>乌克兰客机坠毁：物联网还能这么用？</div>
                        <div class='itemRes'>2020年1月8日是伊朗多灾多难的一天。伊朗当地时间早上5点多,伊朗布什尔省突然爆发4.7级地震,震源深度9公里。紧接着,5小时后地震又在伊朗西南部爆发了,震级为4.9级,震源深度为10公里,到目前为止人员伤亡情况未知。幸好菲律宾总统杜特尔特早在1月6日召开内...
                        </div>
                 </div>
            </div>
            <div class='companyInfo'>
                       <div class='title'>公司介绍</div>
                       <img src='../../assets/img/team.jpg'/>
                       <div class='companydes'>
                        介绍
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
        showAllInfo(){
            alert('注册成为付费会员后可阅读全文，会员费30元/月')
        }
    }
}
</script>
<style lang="scss">

.companyInfo{
     width: 100%;
     .title{
         text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 40px;
     }
     img{
        width: 400px;
     }
     img,.companydes{
        display: inline-block;
        vertical-align: top;
     }
     .companydes{
        width: 500px;
        margin-left: 200px;
        font-size: 16px;
        color:#666;
        line-height: 40px;
     }

}


.homeimg{
    width: 100%;
    margin-top: 10px;
}

.homeInfo{
    text-align: center;
    .title{
        width: 100%;
        text-align: center;
        margin: 20px;
        font-size: 20px;
    }
}

.homeItem:nth-child(3){
   
     margin-left: 10px;
     margin-right: 10px;
}

.homeItem{
    display: inline-block;
    vertical-align: top;
    width: 390px;

    img{
        width: 100%;
        height: 300px;
    }

    .itemTitle{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
    }

     .itemRes{
        text-align: left;
        font-size: 14px;
        color:#333;
        line-height: 20px;
    }

 
}

</style>