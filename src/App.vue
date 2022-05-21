<template>
  <div id="app">
      <mainForm></mainForm>
      
  </div>
</template>

<script>
import mainForm from './components/mainForm.vue'
export default {
    components: { mainForm },  
}
</script>

<style>
body{
    height: 100vh;
    width: 100vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        #FFE48C,
        #d18126,
        #eb4d38
    )
}

</style>