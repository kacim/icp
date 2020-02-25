<template>
       <img class='uptop' :class="{ 'setBomb': top}"  @click='upTop' src='../../assets/img/uptop.png'>
</template>

<script>
    import vHead from './Header.vue';
    import vFoot from './footer.vue';
    import bus from './bus';
    export default {
        data(){
            return {
                top:false
            }
        },
        components:{
            vHead,vFoot
        },
        created(){
             
        },
        methods:{
            upTop(){
                    $('html').animate({ scrollTop: 0 }, 1500);
                    this.top = true;
                    let that = this;
                     setTimeout(function() {
                        that.top = false
                    }, 2000)
                }
        }
    }
</script>

<style>
.uptop {
    width: 30px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 2;
    clip: rect(0px 30px 47px 0px);
    cursor: url('../../assets/img/hand.png'), auto;
}

.setBomb {
    animation: totop 3s alternate forwards;
    -webkit-animation: totop 3s alternate forwards;
}

@keyframes totop {

    0% {
        bottom: 35px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    3% {
        bottom: 50px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    6% {
        bottom: 55px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    9% {
        bottom: 70px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    12% {
        bottom: 85px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    15% {
        bottom: 100px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    18% {
        bottom: 115px;
        right: 30px;
        clip: rect(0px 30px 70px 0px);
    }

    100% {
        bottom: 5000px;
    }
}

@-webkit-keyframes totop {

    /*Safari and Chrome*/
    0% {
        bottom: 31px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    3% {
        bottom: 32px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    6% {
        bottom: 33px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    9% {
        bottom: 34px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    12% {
        bottom: 35px;
        right: 35px;
        clip: rect(0px 30px 70px 0px);
    }

    15% {
        bottom: 36px;
        right: 25px;
        clip: rect(0px 30px 52px 0px);
    }

    18% {
        bottom: 37px;
        right: 30px;
        clip: rect(0px 30px 70px 0px);
    }

    100% {
        bottom: 5000px;
    }
}
</style>