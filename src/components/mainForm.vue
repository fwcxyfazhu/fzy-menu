<template>
    <div class="mainform">
        <ShowDetailText
            :titleText="titleText"
            :mainText="mainText">
            </ShowDetailText>
        <br v-if="seen"/>
        <GachaButton
            v-if="seen"
            @GachaOnClick="gachaonclick">
            </GachaButton>
        <br/>
        <ReGachaButton
            v-if="!seen"
            @GachaOnClick="gachaonclick">
            </ReGachaButton>
        <br/>
        <ShowMealDetailButton
            :mealText="mainText"
            v-if="!seen">
            </ShowMealDetailButton>

    </div>
</template>

<script>
import GachaButton from './gacha-button.vue';
import ShowDetailText from './showDetail-text.vue';
import ReGachaButton from './reGacha-button.vue';
import ShowMealDetailButton from './showMealDetail-button.vue';


export default {
    data() {
        return {
            titleText:'这顿吃',
            mainText:'',
            seen:true
        };
    },
    methods: {
        gachaonclick(val){
            this.mainText=val.meal
            this.seen=val.ans
        }
    },
    // updated:{
    //     seen:GachaButton.data.seen
    // },
    components: { GachaButton, ShowDetailText, ReGachaButton, ShowMealDetailButton }
}
</script>


<style>
@font-face {
    font-family: MiSans-Normal;
    src: url(../fonts/MiSans/MiSans-Normal.ttf);
}
    .mainform{
        display:flex;
        justify-content: center;
        align-items: center;

        /* flex-direction: column;
        flex-wrap: wrap; */
        flex-flow: column wrap;
        color: white;
        width: 60vw;
        height: 70vh;
        background: rgba(255,255,255,0.25);
        border-radius: 20px;
        backdrop-filter: blur(5px);

    }
    .form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 50vw;
        height: 30vh;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        backdrop-filter: blur(5px);

    }
    .btn{
        position: relative;
        width: 50vw;
        height: 5vh;
        border: none;
        outline: none;
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        backdrop-filter: blur(5px);
        color:white;
        font-family: MiSans-Normal;
        font-size: 3vh;

    }

</style>

    
