<template>
  <div id="showDetail" class="form">
        <p id="titleText">{{ titleText }}</p>
        <p id="mainText">{{ mainText }}</p>
  </div>
</template>

<script>
export default {
    name:"showDetail",
    props:{
        titleText:String,
        mainText:String
    }
}
</script>

<style scoped>
@font-face {
    font-family: MiSans-Normal;
    src: url(../fonts/MiSans/MiSans-Normal.ttf);
}
@font-face {
    font-family: MiSans-Heavy;
    src: url(../fonts/MiSans/MiSans-Heavy.ttf);
}   
    
    #titleText{
        font-family: MiSans-Heavy;
        font-size: 5.5vh;
    }
    #mainText{
        font-family: MiSans-Normal;
        font-size: 4vh;
    }
</style>