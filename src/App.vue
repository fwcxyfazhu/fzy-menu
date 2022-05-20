<template>
  <div id="app">
      <mainForm v-if="seen"></mainForm>
  </div>
</template>

<script>
import mainForm from './components/mainForm.vue'
export default {
    components: { mainForm },
    data(){
        return{
            seen:true
        }
    }
}
</script>

<style>
@font-face {
    font-family: MiSans-Normal;
    src: url(./fonts/MiSans/MiSans-Normal.ttf);
}
@font-face {
    font-family: MiSans-Heavy;
    src: url(./fonts/MiSans/MiSans-Heavy.ttf);
}
body{
    font-family: MiSans-Normal;
    height: 100vh;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color:white;
    background: linear-gradient(
        #d18126,
        #eb4d38
    )
}

</style>