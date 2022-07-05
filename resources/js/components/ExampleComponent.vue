<template>
    <div class = "">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">Home</el-menu-item>
            <el-menu-item index="2">About</el-menu-item>
            <el-menu-item index="3">Skills</el-menu-item>
            <el-menu-item index="4">Works</el-menu-item>
            <el-menu-item index="5">Contacts</el-menu-item>
        </el-menu>
    </div>
</template>

<script >
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>




