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
        },
        findmeal(id){
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
                    
                }
            }
        }
    },
}
</script>

<style>
    
</style>