<template>
    <div>
        <Menu mode="horizontal" theme="primary" active-name="1">
            <Menu-item name="0">
                <Icon type="ios-paper"></Icon>
                企业安全生产管理平台
            </Menu-item>
            <router-link to="/rectificationTable">
                <Menu-item name="1">
                    <Icon type="ios-paper"></Icon>
                    台账
                </Menu-item>
            </router-link>
            <router-link to="/enterprise">
                <Menu-item name="2">
                    <Icon type="ios-people"></Icon>
                    企业管理
                </Menu-item>
            </router-link>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    数据管理
                </template>
                <Menu-group title="维护">
                    <router-link to="/situation"><Menu-item name="3-1">违法行为</Menu-item></router-link>
                </Menu-group>
            </Submenu>
        </Menu>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
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
    .content-wrapper {
        width: 85%;
        margin: 10px auto;
    }
</style>