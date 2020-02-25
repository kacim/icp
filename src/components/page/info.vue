<template>
    <div style='font-size: 0;'>
        <div class='us' @click='showinfo'>
            <img src='../../assets/img/bg1.jpg' style='height:600px'/>
            <div class='companydes'>
              <div class='companydesTitle'>重回正轨的旷视科技IPO</div>
              2019年8月25日，旷视科技在香港提交上市申请。
              2019年11月，有报道称旷视科技未通过港交所上市聆讯，因为香港监管机构要求该提供更多信息。旷视科技对此回应报道不实。
              2019年12月，有报道称旷视科技决定把香港IPO计划推迟至2020年。
              媒体报道称...
          </div>
      </div>
      <div class='us' @click='showinfo'>
        <img src='../../assets/img/bg2.jpg'/>
        <div class='companydes'>
          <div class='companydesTitle'>苹果重返CES：物联网时代，隐私还有救吗？</div>
          从1992年至2019年，整整27年，2020年1月7日苹果公司的身影从来没有出现在CES的舞台上。但是今年的CES大会上，苹果终于出现，它的回归成为了大家关注的焦点。
          苹果公司派出了全球隐私高级主管...
      </div>
  </div>
  <div class='us' @click='showinfo'>
    <img src='../../assets/img/bg3.jpg'/>
    <div class='companydes'>
      <div class='companydesTitle'>乌克兰客机坠毁：物联网还能这么用？</div>
      2020年1月8日是伊朗多灾多难的一天。伊朗当地时间早上5点多,伊朗布什尔省突然爆发4.7级地震,震源深度9公里。紧接着,5小时后地震又在伊朗西南部爆发了,震级为4.9级,震源深度为10公里,到目前为止人员伤亡情况未知。幸好菲律宾总统杜特尔特早在1月6日召开内...
  </div>
</div>
<div class='us' @click='showinfo'>
    <img class='setHieght' src='../../assets/img/bg4.jpg'/>
    <div class='companydes'>
      <div class='companydesTitle'>诺基亚计划今年在芬兰裁员约180人 称继续投资5G</div>
      据国外媒体报道，芬兰电信设备制造商诺基亚公司周二表示，计划今年在芬兰裁员约180人，同时还计划加大对5G通信技术和数字化的研发投资。
      　　该公司表示，其在奥卢和该国其他地方的5G产品开发部门将被排除在180人的裁员计划之外。据悉，诺基亚在芬兰一共雇佣了6000人。该公司正在寻求恢复投资者的信心，此前人们担心诺基亚在争夺5G通信设备合同的竞争中落后于同行瑞典爱立信和中国华为公司。
      　　诺基亚早在10月份就下调了2019年和2020年的业绩预期，将其归咎于需要增加对5G通信技术的投资，这一消息使其股价下跌了三分之一。
      　　周二，该公司重申了...
  </div>
</div>
<div class='us' @click='showinfo'>
    <img class='setHieght' src='../../assets/img/bg5.jpg'/>
    <div class='companydes'>
      <div class='companydesTitle'>谷歌云与IBM合作 将IBM Power Systems引入谷歌云计算</div>
      为了方便更多的用户迁移到云计算平台，谷歌云计算部门近日就宣布将同IBM合作，将IBM的Power Systems引入谷歌的云计算。
　　目前仍有很多企业的工作负荷是在IBM Power Systems运行，使用的也是Power处理器，IBM也是目前仅有的一家提供基于云的Power Systems的厂商，将IBM Power Systems引入云服务中，也能方便使用IBM PowerSystems的企业，迁移到谷歌云。
　　谷歌云全球生态系统副总裁凯文·因齐普拉尼(Kevin Ichhpurani)表示，企业希望通过云来使他们现存的架构现代化，也希望通过云简化他们的业务流程...
  </div>
</div>
<div class='us' @click='showinfo'>
    <img class='setHieght' src='../../assets/img/bg6.jpg'/>
    <div class='companydes'>
      <div class='companydesTitle'>物联网咨询</div>
      阿里云IoT是阿里巴巴集团推出的专业物联网服务平台，提供云管边端等基础产品接入及技术赋能、行业解决方案合作与实施、软硬件销售、营销推广、需求对接等快速商业变现通道，全方位对接物联网产业上亿商机。物联网平台提供安全可靠的设备连接通信能力，支持设备数据采集上云，规则引擎流转数据和云端数据下发设备端。此外，也提供方便快捷的设备管理能力，支持物模型定义，数据结构化存储，和远程调试、监控、运维。
阿里云物联网平台为设备提供安全可靠的连接通信能力，向下连接海量设备，支撑设备数据采集上云；向上提供云端API，服务端通过调用云端API将指令下发至设备端，实现远程控制。物联网平台也提供了其他增值能力，如设备管理、规则引擎、数据分析、边缘计算等...
  </div>
</div>
<div class='readmore' @click='showinfo'>
   查看更多》》
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
         showinfo(){
            alert('注册成为付费会员后可进入可阅读完整咨询，会员费30元/月')
        }
    }
}
</script>
<style lang="scss">

.setHieght{
    height: 600px;
}

.readmore{
 width: 100%;
 margin: 10px;
 text-align: right;
 font-size: 16px;
 color:#000;
 cursor: pointer;
}

.us{
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
    .companydesTitle{
        margin-left: 0px;
        text-align: left;
        font-size:26px;
        font-weight: bold;
        margin-bottom: 20px;

    }

}
</style>