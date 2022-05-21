<template>
  <div id="reGacha">
      <button class="btn"
      @click="BtnCnClick">
          >换一个
      </button>
  </div>
</template>

<script>
export default {
    methods:{
        BtnCnClick(){
            this.$emit("GachaOnClick",{
                ans:false,
                id:2,
                meal:"扒饭"
                })
        }  
    }
}
</script>

<style>

</style>