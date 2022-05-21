<template>
  <div id="upperForm">
      <p id="question">这顿去吃</p>
      <p id="answer">{{ meal }}</p>
  </div>
</template>

<script>
export default {
    props:{
        meal:String
    }
}
</script>

<style>
@font-face {
    font-family: MiSans-Normal;
    src: url(../fonts/MiSans/MiSans-Normal.ttf);
}
@font-face {
    font-family: MiSans-Heavy;
    src: url(../fonts/MiSans/MiSans-Heavy.ttf);
}
    #upperForm{
            width: 30vh;
            height: 30vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 2vh 2vh;
            border-radius: 20px;
            margin: 0.5vh 0.5vh;
            background:rgba(255, 255, 255, 0.25);
        }
    #question{
        font-family: MiSans-Heavy;
        font-size: 6vh;
    }
    #answer{
        font-size: 4vh;
    }
</style>