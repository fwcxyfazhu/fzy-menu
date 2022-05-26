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
            const mealId=Math.random(1,2)
            alert(mealId)
            const meal1 = this.findmeal(mealId)
            this.$emit("GachaOnClick",{
                ans:false,
                id:meal1.id,
                meal:meal1.meal,
                detail:meal1.detail
                })
        },
        findmeal(mealid){
            const { MongoClient } = require('mongodb');
            const URL = 'mongodb://127.0.0.1:27017';
            const client =new MongoClient(URL,{
                useNewUrlParser:true,
                useUnifiedTopology: true,
            });
            
            async function findOne(){
                try{
                    await client.connect();
                    const meals = client.db('fzymenu').collection('meals');
                    const meal = meals.findOne({id:mealid})
                    return meal;
                }catch{
                    console.dir;
                }
                finally{
                    await client.close()
                }
            }
            return findOne()

        }
    },
}
</script>

<style>
    
</style>