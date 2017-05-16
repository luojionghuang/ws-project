<template>
    <div>
        <Menu mode="horizontal" theme="primary" active-name="1">
            <Menu-item name="1">
                <Icon type="ios-paper"></Icon>
                内容管理
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
        </Menu>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route);
        }
    }
</script>

<style lant="scss" scoped>
</style>