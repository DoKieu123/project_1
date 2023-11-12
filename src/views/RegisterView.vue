<template>
    <div>
        <AppHeader></AppHeader>
        <AppBody></AppBody>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
 import AppBody from '@/components/register/body/AppBody.vue';
 import AppHeader from '@/components/register/header/AppHeader.vue';
 import AppFooter from "@/components/home/footer/AppFooter.vue"
    export default {
        components:{
            AppBody,
            AppHeader,
            AppFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>