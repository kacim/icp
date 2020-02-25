<template>
    <div style='font-size: 0;'>
        <div class='us'>
                <img src='../../assets/img/group.jpg'/>
                       <div class='companydes'>xxxxxx
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

}
</style>