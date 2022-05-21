
<template>
  <div id="bottomForm">
      <button id="Gacha" v-if="!seen" @click="btnGacha">
            >按我抽卡
      </button>
      <br/>
      
      <button id="remake" v-if="seen" @click="btnRemake" >
            >换一个
      </button>
      <br/>
      <button id="showDetail" v-if="seen" @click="btnShow" >
            >细说{{ meal }}
      </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            seen:false
        }
    },
    props:{
        meal:String
    },
    methods:{
        btnGacha(){
            this.seen = !this.seen
            alert("抽了一张");
        },
        btnRemake(){
            alert("换了一张");
        },
        btnShow(){
            alert("展示了卡片信息");
        }
    }

}
</script>

<style>
    @font-face {
    font-family: MiSans-Normal;
    src: url(../fonts/MiSans/MiSans-Normal.ttf);
    }
    #bottomForm{
            width: 30vh;
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 0.5vh 0.5vh;
            padding: 2vh 2vh;
            border-radius: 20px;
            background:rgba(255, 255, 255, 0.25);
    }
    button{
        width:30vh;
        height: 5vh;
        /* background: linear-gradient(90deg,
            rgba(233, 106, 222,0.35),
            rgba(233, 106, 222,0.65) 50%,
            rgba(233, 106, 222,0.35)
            ); */
        border-radius: 15px; 
        background:rgba(255, 255, 255, 0.25);
        border-radius: 68px;
        justify-content: center;
        align-items: center;
        font-family: MiSans-Normal;
        font-size: 3vh;
        margin: 0.5vh 0.5vh;
        color:white;
        border: none;
        outline: none;    
    }
=======
<template>
  <div id="bottomForm">
      <button id="Gacha" v-if="!seen" @click="btnGacha">
            >按我抽卡
      </button>
      <br/>
      
      <button id="remake" v-if="seen" @click="btnRemake" >
            >换一个
      </button>
      <br/>
      <button id="showDetail" v-if="seen" @click="btnShow" >
            >细说{{ meal }}
      </button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            seen:false
        }
    },
    props:{
        meal:String
    },
    methods:{
        btnGacha:()=>{
            alert("抽了一张卡");
            this.seen = true;
        },
        btnRemake:()=>{
            alert('重置')
        },
        btnShow:()=>{
            alert('balabala')
        }
    }

}
</script>

<style>
    @font-face {
    font-family: MiSans-Normal;
    src: url(../fonts/MiSans/MiSans-Normal.ttf);
    }
    #bottomForm{
            width: 30vh;
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 10px 10px;
            border-radius: 20px;
            background:rgba(255, 255, 255, 0.25);
    }
    button{
        width:30vh;
        height: 5vh;
        /* background: linear-gradient(90deg,
            rgba(233, 106, 222,0.35),
            rgba(233, 106, 222,0.65) 50%,
            rgba(233, 106, 222,0.35)
            ); */
        background:rgba(255, 255, 255, 0.25);
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        font-family: MiSans-Normal;
        font-size: 25px;
        color:white;
        border: none;
        outline: none;    
    }
>>>>>>> dce4233056d2859bf67fe8fce6144a7d682a9120
</style>