<template>
    <div class="list-wrapper">
        <Table :columns="columns" :data="datas"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1"></Page>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [{
                    type: 'selection',
                    width: 60,
                    align: 'center'
                }, {
                    title: '时间',
                    key: 'time'
                }, {
                    title: '公司',
                    key: 'companyName'
                }, {
                    title: '备注',
                    key: 'remark'
                }, {
                    title: '操作',
                    key: 'control',
                    align: 'action',
                    render(row, column, index) {
                        return `<i-button type="primary" size="small" @click="detail()">查看</i-button>
                                <i-button type="error" size="small">删除</i-button>`
                    }
                }],
                datas: [{
                    time: '2017-01-01',
                    companyName: '宝明发包装材料',
                    remark: '已复查'
                }]
            }
        },
        methods: {
            detail() {
                this.$router.push({name: 'detail'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-wrapper {
        width: 80%;
        margin: 10px auto;
    }
</style>