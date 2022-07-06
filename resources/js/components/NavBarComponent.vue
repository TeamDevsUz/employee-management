<template>
    <div class="header-menu">
        <div class="header-menu-top">
            <div class="header-menu-top-box justify-content-between">
                <div class="header-menu-top-box-item">
                    <div class="header-menu-top-box-item-2">
                        <div class="header-menu-top-box-item-2-item">
                            <div class="header-menu-top-box-item-2-item-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <span class="header-menu-top-box-item-2-item-span">Tashkent</span>
                        </div>
                    </div>
                </div>
                <div class="header-menu-top-box-item header__networks d-flex align-items-center">
                    <a href="#!" target="_blank" title="facebook" class="header-icons">
                        <img :src="'/images/facebook.svg'" alt="facebook" class="loading" data-was-processed="true">
                    </a>
                    <a href="#!" target="_blank" title="instagram" class="header-icons">
                        <img :src="'/images/instagram.svg'" alt="instagram" class="loading" data-was-processed="true">
                    </a>
                    <a href="#!" target="_blank" title="telegram" class="header-icons">
                        <img :src="'/images/telegram.svg'" alt="telegram" class="loading" data-was-processed="true">
                    </a>
                </div>
                <div class="header-menu-top-box-item header__authorization d-flex align-items-center">
                    <!-- <a class="authorization-link main-txt-col" href="#!" title="Войти" rel="nofollow">Войти</a> -->
                    <router-link class="authorization-link main-txt-col" :to="{ name: 'userRegist'}">Войти</router-link>
                    <span>/</span>
                    <router-link class="authorization-link main-txt-col" :to="{ name: 'userRegist'}">Регистрация</router-link>
                </div>
                <div class="header-menu-top-box-item">
                     <el-tooltip class="item" effect="dark" content="Избранное" placement="bottom">
                        <el-button><i class="fas fa-heart"></i></el-button>
                    </el-tooltip>
                </div>
                <div class="header-menu-top-box-item d-flex align-items-center">
                    <div class="header-addNew">
                        <router-link class="header-addNew-link" :to="{ name: 'newOffer'}">
                            <span class="header-addNew-link-span">+ Разместить объявление</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <header :class="{ 'scrolled-nav': scrolledNav }">
            <nav>
                <div class="brand_logo">
                    <img :src="'/images/favicon-logo.png'" alt="">
                </div>
                <ul v-show="!mobile" class="navigation">
                    <li>
                        <router-link class="link" :to="{ name: 'home'}">Аренда</router-link>
                        <div class="sub-menu">
                            <!-- item -->
                            <div class="sub-menu-item">
                            <h4>Квартира</h4>
                            <ul>
                                <li><a href="#">1 комнатные</a></li>
                                <li><a href="#">2 комнатные</a></li>
                                <li><a href="#">3 комнатные</a></li>
                                <li><a href="#">5 комнатные</a></li>
                                <li><a href="#">Более 5 комнат</a></li>
                            </ul>
                            </div>
                            <!-- end of item -->
                            <!-- item -->
                            <div class="sub-menu-item">
                            <h4>other categories</h4>
                            <ul>
                                <li><a href="#">iphones</a></li>
                                <li><a href="#">speakers</a></li>
                                <li><a href="#">samsung devices</a></li>
                                <li><a href="#">audio &amp; headphones</a></li>
                                <li><a href="#">vehicles electronics &amp; GPS</a></li>
                            </ul>
                            </div>
                            <!-- end of item -->
                            <!-- item -->
                            <div class="sub-menu-item">
                            <h4>other categories</h4>
                            <ul>
                                <li><a href="#">iphones</a></li>
                                <li><a href="#">speakers</a></li>
                                <li><a href="#">samsung devices</a></li>
                                <li><a href="#">audio &amp; headphones</a></li>
                                <li><a href="#">vehicles electronics &amp; GPS</a></li>
                            </ul>
                            </div>
                            <!-- end of item -->
                            <!-- item -->
                            <div class="sub-menu-item">
                            <img src="images/car.png" alt="product image">
                            </div>
                            <!-- end of item -->
                        </div>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: 'about'}">Продажа</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: 'newOffer'}">Новостройки</router-link>
                    </li>
                    <li>
                        <a class="link" href="#!">Коммерческая</a>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: 'about'}">Услуги</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{ name: 'about'}">Риелторы</router-link>
                    </li>
                </ul>
                <div class="icon">
                    <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{'icon-active' : mobileNav}"></i>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <li><a class="link" href="#!">Home</a></li>
                        <li><a class="link" href="#!">About</a></li>
                        <li><a class="link" href="#!">Skills</a></li>
                        <li><a class="link" href="#!">Contacts</a></li>
                    </ul>
                </transition>
            </nav>
        </header>
    </div>
</template>


<script >
export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
    
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        
        updateScroll() {
            const scrollPosition = window.scrollY;
            if(scrollPosition > 50){
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },
        
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        
    },
}
</script>



<style lang="scss" scoped>
.header-menu{
    height: 119px;
    
    .header-menu-top{
        background-color: #f7f7f9;
        box-shadow: inset 0 -1px 0 #e5e5e5;
        position: relative;
        
        .header-menu-top-box{
            padding: 0 18px;
            align-items: center;
            box-sizing: content-box;
            display: flex;
            flex-wrap: nowrap;
            height: 40px;
            margin: 0 auto;
            max-width: 1216px;
            min-width: 320px;
            position: relative;
            
            .header-menu-top-box-item{
                height: 100%;
                
                .header-menu-top-box-item-2{
                    height: 40px;
                    .header-menu-top-box-item-2-item{
                        align-items: center;
                        color: #737476;
                        cursor: pointer;
                        display: flex;
                        height: 100%;
                        justify-content: center;
                        padding: 0 16px;
                        position: relative;
                        text-decoration: none;
                        text-overflow: ellipsis;
                        transition: background-color .3s ease-in-out,color .3s ease-in-out;
                        
                        .header-menu-top-box-item-2-item-icon i{
                            color: #a7a8a9;
                            height: 18px !important;
                            line-height: 18px !important;
                            min-height: 18px !important;
                            min-width: 18px;
                            overflow: hidden;
                            width: 18px;
                        }
                        
                        .header-menu-top-box-item-2-item-span{
                            margin-left: 8px;
                            line-height: 19px !important;
                            color: inherit;
                            font: 500 14px/20px SeroPro,sans-serif;
                            letter-spacing: normal;
                            margin: 0;
                            padding: 0;
                            text-decoration: none;
                            text-indent: 0;
                            text-shadow: none;
                            text-transform: none;
                            white-space: nowrap;
                        }
                    }
                    
                    
                }
                
                .header-icons {
                    display: block;
                    margin: 0 2px;
                }
                
                .header-icons img {
                    display: block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                }
                
                .authorization-link{
                    display: inline-block;
                    margin: 0 0.375rem;
                }
                
                .el-button {
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    cursor: pointer;
                    background: transparent;
                    border: none;
                    color: #606266;
                    -webkit-appearance: none;
                    box-sizing: border-box;
                    outline: 0;
                    margin: 0;
                    transition: .1s;
                    font-weight: 500;
                    padding: 0 !important;
                    font-size: 16px;
                    border-radius: 0 !important;
                    height: 100%;
                }
                
                .header-addNew-link{
                    background-color: var(--primary-100);
                    color: var(--white-100);
                    padding: 3px 11px;
                    height: 28px;
                    position: relative;
                    cursor: pointer;
                    outline: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    white-space: nowrap;
                }
            
                .header-addNew-link-span{
                    font-size: 15px;
                    line-height: 20px;
                    font-style: normal;
                    font-weight: 700;
                }
            }
            
            .add-new-post{
                height: 100%;
                background-color: #ddf0e3;
            }
            
            .tpln-navItem-in-header--2-5-2 {
                height: 40px;
            }
            
            .tpln-navItem-item--2-5-2 {
                box-shadow: none;
                box-sizing: border-box;
                display: block;
                outline: none;
                position: relative;
                text-decoration: none;
                user-select: none;
                
                .header-menu-top-box-item-link-box{
                    color: #242629;
                }
            }
        }
        
    }
    
    header {
        background-color: var(--white-100);
        z-index: 99;
        width: 100%;
        //position: fixed;
        transition: .5s ease all;
        color: #fff;
        
        nav {
            position: relative;
            display: flex;
            flex-direction: row;
            padding: 0;
            transition: .5s ease all;
            width: 100%;
            margin: 0 auto;
            @media (min-width: 1216px) {
                max-width: 1216px;
            }
            
            ul{
                margin-bottom: 0;
                padding-left: 0;
            }
            ul, .link{
                font-weight: 600;
                color: var(--text-color-black);
                list-style: none;
                text-decoration: none;
            }
            .sub-menu li[data-v-1614d4d2] {
                padding: 0 !important;
                margin-left: 0 !important;
            }
            
            li{
                padding: 25px 16px;
                margin-left: 16px;
            }
            
            .link{
                font-size: 14px;
                transition: .5s ease all;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                
                &:hover{
                    color: #00afea;
                    border-color: #00afea;
                    cursor: pointer;
                }
            }
            
            .brand_logo{
                display: flex;
                align-items: center;
                
                img{
                    width: 50px;
                    transition: .5s ease all;
                }
            }
            
            .navigation{
                display: flex;
                align-items: center;
                flex: 1;
                justify-content: flex-end;
            }
            
            .icon{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 24px;
                height: 100%;
                
                i{
                    cursor: pointer;
                    font-size: 24px;
                    transition: .8s ease all;
                }
            }
            
            .icon-active{
                transform: rotate(180deg);
            }
            
            .dropdown-nav{
                display: flex;
                flex-direction: column;
                position: fixed;
                width: 100%;
                max-width: 250px;
                height: 100%;
                background: #fff;
                top: 0;
                left: 0;
                
                li{
                    margin-left: 0;
                    .link{
                        color: #000;
                    }
                }
            }
            
            .mobile-nav-enter-active,
            .mobile-nav-leave-active{
                transition: 1s ease all;
            }
            
            .mobile-nav-enter-from,
            .mobile-nav-leave-to{
                transform: translateX(-250px);
            }
            
            .mobile-nav-enter-to{
                transform: translateX(0);
            }
        }

    }
}
    
    .scrolled-nav{
        background: #000;
        box-shadow: 0 4px 6px -3px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        
        nav {
            padding: 8px 0;
            
            .brand_logo{
                img{
                    width: 40px;
                    box-shadow: 0 4px 6px -3px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
            }
        }
    }
</style>