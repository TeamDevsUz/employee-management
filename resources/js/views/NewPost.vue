<template>
    <div class="" style="background: #F2F4F6;">
        <div class="container">
            <div class="form_mainBox zs0iC">
                <div class="form_mainBox-smallBox">
                    <div class="form_mainBox-smallBox-item">
                        <div class="form_mainBox-smallBox-item-form">
                            <div class="form_mainBox-smallBox-item-form-txt">
                                <div class="form_mainBox-smallBox-item-form-content">
                                    <h1 class="form_mainBox-smallBox-item-form-title">Тип объявления</h1>
                                </div>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <p class="label-3-0-1">Тип сделки</p>
                                <el-radio-group v-model="radio1">
                                    <el-radio-button label="Продажа"></el-radio-button>
                                    <el-radio-button label="Аренда"></el-radio-button>
                                </el-radio-group>
                            </div>
                            <div style="margin-bottom: 40px;">
                                <p class="label-3-0-1">Вид недвижимости</p>
                                <el-radio-group v-model="radio2">
                                    <el-radio-button label="Жилая"></el-radio-button>
                                    <el-radio-button label="Коммерческая"></el-radio-button>
                                    <el-radio-button label="Гараж"></el-radio-button>
                                </el-radio-group>
                            </div>
                            <div class="toTda">
                                <div class="radio-btns">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="radio-btns-item">
                                                <el-radio-group v-model="radio">
                                                    <el-radio :label="1">Квартира</el-radio>
                                                    <el-radio :label="2">Комната</el-radio>
                                                    <el-radio :label="3">Дом</el-radio>
                                                </el-radio-group>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="radio-btns-item">
                                                <el-radio-group v-model="radio">
                                                    <el-radio :label="4">Таунхаус</el-radio>
                                                    <el-radio :label="5">Часть дома</el-radio>
                                                    <el-radio :label="6">Участок</el-radio>
                                                </el-radio-group>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Image upload start -->
                <div class="form_mainBox-smallBox">
                    <div class="form_mainBox-smallBox-item">
                        <div class="form_mainBox-smallBox-item-form">
                            <div class="form_mainBox-smallBox-item-form-txt">
                                <div class="form_mainBox-smallBox-item-form-content">
                                    <h1 class="form_mainBox-smallBox-item-form-title">Фотографии</h1>
                                </div>
                            </div>
                            <div class="img-upload">
                                <el-upload
                                    action="#"
                                    list-type="picture-card"
                                    :auto-upload="false">
                                        <i slot="default" class="el-icon-plus"></i>
                                        <div slot="file" slot-scope="{file}">
                                        <img
                                            class="el-upload-list__item-thumbnail"
                                            :src="file.url" alt=""
                                        >
                                        <span class="el-upload-list__item-actions">
                                            <span
                                            class="el-upload-list__item-preview"
                                            @click="handlePictureCardPreview(file)"
                                            >
                                            <i class="el-icon-zoom-in"></i>
                                            </span>
                                            <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleDownload(file)"
                                            >
                                            <i class="el-icon-download"></i>
                                            </span>
                                            <span
                                            v-if="!disabled"
                                            class="el-upload-list__item-delete"
                                            @click="handleRemove(file)"
                                            >
                                            <i class="el-icon-delete"></i>
                                            </span>
                                        </span>
                                        </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Image upload end -->
            </div>
        </div>
    </div>
</template>



<script>
  export default {
    data () {
      return {
        radio1: 'Продажа',
        radio2: 'Жилая',
        radio: 1,
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>


<style>
.zs0iC {
    padding-top: 3.2rem;
}
.form_mainBox-smallBox{
    margin-bottom: 2rem;
    width: auto;
}


.form_mainBox-smallBox-item-form-txt{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.form_mainBox-smallBox-item-form-content{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.form_mainBox-smallBox-item-form-title{
    font-size: 30px;
    font-weight: 600;
    margin-right: 10px !important;
}

.form_mainBox-smallBox-item{
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012;
    padding: 3.2rem;
    width: 100%;
}

.label-3-0-1{
    color: #737476;
    display: block;
    font: normal 14px/20px SeroPro,sans-serif;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    margin-bottom: 8px;
}

.radio-btns .el-radio-group {
    display: flex !important;
    line-height: 1 !important;
    vertical-align: middle !important;
    flex-direction: column !important;
}

.radio-btns .el-radio {
    color: #606266;
    font-weight: 500;
    cursor: pointer;
    margin: 0 0 16px 0 !important;
}

.radio-btns .el-radio__label {
    font-size: 16px;
    padding-left: 10px;
}

.toTda {
    max-width: 42rem;
}
</style>