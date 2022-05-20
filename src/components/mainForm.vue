<template>
    <div id="mainform">
        <UpperForm
            meal="猪扒包">
        </UpperForm>
        <br/>
        <BottomForm
            meal="猪扒包"></BottomForm>
    </div>
</template>

<script>
import UpperForm from './upperForm.vue'
import BottomForm from './bottomForm.vue';

export default {
    data() {
        return {
            Text1: "HelloWorld"
        };
    },
    methods: {},
    components: { UpperForm, BottomForm}
}
</script>

<style >

    #mainform{
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 35px;
        padding: 25px 25px;
        background:rgba(255, 255, 255, 0.25);
    }
    
</style>