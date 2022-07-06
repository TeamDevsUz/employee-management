<template>
    <div class="form_mainBox zs0iC_bottom">
        <div class="container">
            <div class="form-box">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <el-page-header @back="goBack" content="Регистрация">
                                </el-page-header>
                            </div>
                            <div>
                                <el-form ref="employeeForm" :model="form">
                                    <el-row :guuter="10">
                                        <el-form-item
                                            label="Имя" required prop="first_name">
                                            <el-input v-model="form.first_name" 
                                            :readonly="readOnlyField"
                                            placeholder="Имя"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="Фамилия" required prop="last_name">
                                            <el-input v-model="form.last_name" 
                                            :readonly="readOnlyField"
                                            placeholder="Фамилия"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="Email" required prop="email">
                                            <el-input v-model="form.email" 
                                            :readonly="readOnlyField"
                                            placeholder="Email Address"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="Телефон" required prop="phone">
                                            <el-input v-mask="'+############'" v-model="form.phone" 
                                            :readonly="readOnlyField"
                                            placeholder="+998901234567"></el-input>
                                        </el-form-item>
                                        <el-form-item
                                            label="Пароль" required prop="password">
                                            <div class="password_div">
                                                <el-input v-if="showPassword" v-model="form.password" 
                                                :readonly="readOnlyField"
                                                placeholder="+998901234567"></el-input>
                                                <el-input v-else v-model="form.password" 
                                                :readonly="readOnlyField"
                                                placeholder="Пароль" type="password"></el-input>
                                                <div class="control">
                                                    <el-button class="button" @click="toggleShow">
                                                        <span class="icon is-small is-right">
                                                            <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
                                                        </span>
                                                    </el-button>
                                                </div>
                                            </div>
                                        </el-form-item>
                                    </el-row>
                                    <el-row :guuter="10">
                                        <el-form-item v-if="scope !='show'">
                                            <el-button type="success" @click="saveForm('employeeForm')">
                                                Регистрация
                                            </el-button>
                                            <el-button type="primary">
                                                Войти
                                            </el-button>
                                        </el-form-item>
                                    </el-row>
                                </el-form>
                            </div>
                        </el-card>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script >
    export default {
        name: 'employee-form',
        props:{
            scope:String,
            id:Number,
        },
        computed:{
            readOnlyField(){
                return this.scope == 'show' ? true : false;
            },
            
            buttonLabel() {
                return (this.showPassword) ? "Hide" : "Show";
            }
        },
        mounted(){
            if(this.scope == 'edit' || this.scope == 'show')
            {
                axios.get(`/fetch-employee-data/${this.id}`).then(res => {
                    this.$set(this, 'form', res.data.data);
                });
            }
        },
        data(){
            return {
                form:{
                    first_name:null,
                    last_name:null,
                    email:null,
                    phone:null,
                    password: null
                },
                showPassword: false,
            }
        },
        methods:{
            goBack(){
                window.location.href = '/';
            },
            
            toggleShow() {
                this.showPassword = !this.showPassword;
            },
            
            saveForm(){
                axios.post('/api/register', this.form).then(() =>{
                    console.log('saved');
                }).catch((error) =>{
                    this.errors = error.response.data.errors;
                })
            }
        }
    } 
</script>

<style scoped>
.password_div{
    display: flex;
    justify-content: flex-start;
}

.control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: inherit;
}

.control .button {
    background-color: #fff;
    border: 1px solid #DCDFE6;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 0 4px 4px 0;
    outline: none !important;
}

.button .icon.is-small {
    height: 1.5em;
    width: 1.5em;
}
</style>