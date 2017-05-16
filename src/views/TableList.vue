<template>
    <div class="list-wrapper">
        <div class="search-list">
            <Row :gutter="16">
                <Col span="6">
                    <label>检测日期</label>
                    <Date-picker type="date" v-model="sCheckDate"></Date-picker>
                </Col>
                <Col span="6">
                    <label>公司名称</label>
                    <Input v-model="sEnterpriseName"></Input>
                </Col>
            </Row>
        </div>
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
                sCheckDate: '',
                sEnterpriseName: '',
                columns: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                }, {
                    title: '检测日期',
                    key: 'checkDate',
                    align: 'center',
                }, {
                    title: '公司',
                    key: 'enterpriseName',
                    align: 'center',
                }, {
                    title: '复查状态',
                    key: 'isReviewed',
                    align: 'center',
                    render(h, {row, column, index}) {
                        let color = row.isReviewed ? 'green' : 'red';
                        let text = row.isReviewed ? '已复查' : '未复查';
                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }
                }, {
                    title: '立案状态',
                    key: 'isRecorded',
                    align: 'center',
                    render(h, {row, column, index}) {
                        let color = row.isRecorded ? 'green' : 'red';
                        let text = row.isRecorded ? '已立案' : '未立案';
                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }
                }, {
                    title: '备注',
                    key: 'remark',
                    align: 'center',
                }, {
                    title: '操作',
                    key: 'control',
                    align: 'action',
                    render(h, params) {
                        return `<i-button type="primary" size="small" @click="detail()">查看</i-button>
                                <i-button type="error" size="small">删除</i-button>`
                    }
                }],
                datas: [{
                    checkDate: '2017-01-01',
                    enterpriseName: '宝明发包装材料',
                    isReviewed: true,
                    isRecorded: false,
                    remark: '无备注'
                }, {
                    checkDate: '2017-01-01',
                    enterpriseName: '宝明发包装材料',
                    isReviewed: true,
                    isRecorded: false,
                    remark: '无备注'
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
        .search-list {
            margin: 20px 0;
        }
    }
</style>