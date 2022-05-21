<template>
  <div id="showMeal">
      <button class="btn">
          >细说{{ mealText }}
      </button>

  </div>
</template>

<script>
export default {
    name:"showDetailbtn",
    props:{
        mealText:String
    }
}
</script>

<style>

</style>