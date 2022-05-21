<template>
  <div id="Gacha">
      
      <button class="btn"
        @click="BtnCnClick">
          >抽一张卡
      </button>
  </div>
</template>

<script>
export default {
    name:'Gacha-button',
    data(){
        return{
            seen:true,
      }
    },
    methods:{
        BtnCnClick(){
            this.$emit("GachaOnClick",{
                ans:false,
                id:1,
                meal:"猪扒包"
                })
        }   
    },
}
</script>

<style>
    
</style>