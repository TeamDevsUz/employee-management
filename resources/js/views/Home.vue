<template>
    <div class="header_banner">
        <div class="header_banner-box">
            <div class="header_banner-box-item">
                
            </div>
            <UsefulLinks></UsefulLinks>
        </div>
    </div>
</template>

<script>
import UsefulLinks from "../components/UsefulLinksComponent.vue";
export default {
    name: "home",
    components: {
        UsefulLinks
    }
}
</script>

<style>



@media screen and (min-width: 737px){
    .header_banner-box-item{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background: url('../../../public/images/banner.webp') no-repeat 50% 0 / cover;
    }
}

</style>