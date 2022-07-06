<template>
    <div class="main-box">
        <div class="main-box-block zs0iC_bottom">
            <div class="container">
                <div class="main-box-block-smallBox">
                    <h1 class="main-box-block-smallBox-h1">Полезные ссылки</h1>
                    <div class="main-box-block-smallBox-grid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="main-box-block-smallBox-item buy-flat">
                                    <div class="main-box-block-smallBox-item_block">
                                        <h5>Купить квартиру</h5>
                                        <div class="main-box-block-smallBox-item_block-links">
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>1-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>2-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>3-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-box-block-smallBox-item buy-room">
                                    <div class="main-box-block-smallBox-item_block d-flex justify-content-center align-items-center flex-column">
                                        <h5>Купить квартиру</h5>
                                        <div class="main-box-block-smallBox-item_block-links">
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>1-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-box-block-smallBox-item buy-room">
                                    <div class="main-box-block-smallBox-item_block d-flex justify-content-center align-items-center flex-column">
                                        <h5>Купить квартиру</h5>
                                        <div class="main-box-block-smallBox-item_block-links">
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>1-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-box-block-smallBox-item buy-room">
                                    <div class="main-box-block-smallBox-item_block d-flex justify-content-center align-items-center flex-column">
                                        <h5>Купить квартиру</h5>
                                        <div class="main-box-block-smallBox-item_block-links">
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>1-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-box-block-smallBox-item buy-room">
                                    <div class="main-box-block-smallBox-item_block d-flex justify-content-center align-items-center flex-column">
                                        <h5>Купить квартиру</h5>
                                        <div class="main-box-block-smallBox-item_block-links">
                                            <router-link :to="{name: 'home'}" class="links_flat d-block">
                                                <span>1-комнатные</span>
                                                <span>29 105</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>



<style scoped>
.main-box-block-smallBox-h1{
    margin: 0 0 16px;
    font-weight: 700;
    font-size: 28px;
}

.main-box-block-smallBox-item{
    margin-bottom: 8px;
    border-radius: 2px;
    background-position: 50% !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    height: 200px !important;
    color: #fff !important;
}
.buy-flat{
    background: url('../../../public/images/buy-flat.jpg');
}
.buy-room{
    background: url('../../../public/images/buy-room.jpg') !important;
}

.main-box-block-smallBox-item_block{
    background-image: linear-gradient(110deg,rgba(43,71,86,.7),rgba(43,71,86,.1));
    padding: 27px 15px 25px 25px;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    display: block;
}

.main-box-block-smallBox-item_block h5{
    margin: 0 0 10px;
    overflow: hidden;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.18;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.main-box-block-smallBox-item_block-links span:nth-child(1){
    display: inline;
    transition: color .3s,border-color .3s,background .3s;
    margin: 0 8px 3px 0;
    border-bottom: 1px solid transparent;
    color: #fff;
    line-height: 1.71;
}

.main-box-block-smallBox-item_block-links span:nth-child(2){
    display: inline;
    color: hsla(0,0%,100%,.8);
    font-weight: 700;
    font-size: 10px;
    line-height: 2.3;
}

.main-box-block-smallBox-item_block-links .links_flat:hover span:nth-child(1){
    border-bottom-color: #00afea;
}
</style>