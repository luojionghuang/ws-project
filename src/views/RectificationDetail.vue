<template>
    <div class="ws-wrapper">
        <div class="ws-header">
            <div class="ws-header-left">
                <Button type="primary" icon="arrow-return-left" @click="handleBack">返回</Button>
            </div>
            <div class="ws-header-right">
                <a :href="exportUrl"><Button v-if="!isEdit" type="primary" icon="document">导出Word</Button></a>
                <Button :type="isEdit ? 'success' : 'primary'" :icon="isEdit ? 'checkmark' : 'edit'" @click="toggleEditStatus">{{isEdit ? '保存' : '编辑'}}</Button>
            </div>
        </div>
        <div class="ws-content">
            <Spin size="large" fix v-if="spinShow"></Spin>
            <div class="detail-check">
                <label>是否复查：</label>
                <i-switch v-model="datas.reviewed" :disabled="!isEdit">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
                <label>是否立案：</label>
                <i-switch v-model="datas.recorded" :disabled="!isEdit">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </div>
            <div class="detail-table-1">
                <div class="table-header">
                    <h1>表1：安全生产大排查大整治台账</h1>
                </div>
                <Row class="table-pre">
                    <Col span="12" class="table-pre-left">
                        <label>填报单位：</label>
                        <Input class="input-style" v-if="isEdit" v-model="datas.fillUnit"></Input>
                        <span v-else>{{datas.fillUnit}}</span>
                    </Col>
                    <Col span="12" class="table-pre-right">
                        <label>填报人：</label>
                        <Input class="input-style" v-if="isEdit" v-model="datas.fillPerson"></Input>
                        <span v-else>{{datas.fillPerson}}</span>
                    </Col>
                </Row>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th v-for="item in columns1" :width="item.width">{{item.title}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td :rowspan="rowSpan">
                                <Date-picker type="date" v-if="isEdit" v-model="datas.checkDate"></Date-picker>
                                <span v-else>{{datas.checkDate}}</span>
                            </td>
                            <td :rowspan="rowSpan">
                                {{datas.enterpriseName}}
                            </td>
                            <td :rowspan="rowSpan">
                                {{datas.enterpriseAddress}}
                            </td>
                            <td :rowspan="rowSpan">
                                <Input v-if="isEdit" v-model="datas.checkPerson"></Input>
                                <template v-else>{{datas.checkPerson}}</template>
                            </td>
                            <td>
                                <Select v-if="isEdit" v-model="datas.links[0].situationId" filterable>
                                    <Option v-for="(item, key) in situationList" :value="key" :key="key">{{item}}</Option>
                                </Select>
                                <template v-else>{{situationList[datas.links[0].situationId]}}</template>
                            </td>
                            <td>
                                <Input v-if="isEdit" v-model="datas.links[0].method"></Input>
                                <template v-else>{{datas.links[0].method}}</template>
                            </td>
                            <td :rowspan="rowSpan">
                                <Input v-if="isEdit" v-model="datas.dutyUnit"></Input>
                                <template v-else>{{datas.dutyUnit}}</template>
                            </td>
                            <td :rowspan="rowSpan">
                                <Input v-if="isEdit" v-model="datas.dutyPerson"></Input>
                                <template v-else>{{datas.dutyPerson}}</template>
                            </td>
                            <td :rowspan="rowSpan">
                                <Date-picker type="date" v-if="isEdit" v-model="datas.finishDate"></Date-picker>
                                <template v-else>{{datas.finishDate}}</template>
                            </td>
                            <td :rowspan="rowSpan">
                                <Input v-if="isEdit" v-model="datas.remark"></Input>
                                <template v-else>{{datas.remark}}</template>
                            </td>
                        </tr>
                        <tr v-for="index in (rowSpan - 1)">
                            <template v-if="isEdit && index == (rowSpan - 1)">
                                <td colspan="2">
                                    <Button type="primary" shape="circle" icon="plus" size="small" @click="insertLine()"></Button>
                                </td>
                            </template>
                            <template v-else>
                                <td>
                                    <Select v-if="isEdit" v-model="datas.links[index].situationId" filterable>
                                        <Option v-for="(item, key) in situationList" :value="key" :key="key">{{item}}</Option>
                                    </Select>
                                    <template v-else>{{situationList[datas.links[index].situationId]}}</template>
                                </td>
                                <td>
                                    <Input v-if="isEdit" v-model="datas.links[index].method"></Input>
                                    <template v-else>{{datas.links[index].method}}</template>
                                </td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="detail-table-2">
                <div class="table-header">
                    <h1>表2：安全生产隐患及整改情况一览表</h1>
                </div>
                <Row class="table-pre">
                    <Col span="12" class="table-pre-left">
                        <label>执法检查日期：</label>
                        <span>{{datas.checkDate}}</span>
                    </Col>
                    <Col span="12" class="table-pre-right">
                        <label>执法检查人员：</label>
                        <span>{{datas.checkPerson}}</span>
                    </Col>
                </Row>
                <table class="main-table">
                    <thead>
                        <tr>
                            <th v-for="item in columns2" :width="item.width">{{item.title}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in datas.links">
                            <td>{{index + 1}}</td>
                            <td>
                            </td>
                            <td>
                                {{situationList[item['situationId']]}}
                            </td>
                            <td>
                                <img-upload
                                    :defaultList="defaultList"
                                    action="xxxx">
                                </img-upload>
                            </td>
                            <td>
                                <Date-picker type="date" v-if="isEdit" v-model="item['rectificateDate']" @on-change="handleDate(index)"></Date-picker>
                                <template v-else>{{item['rectificateDate']}}</template>
                            </td>
                            <td>
                            </td>
                            <td>
                                <Input v-if="isEdit" v-model="item['remark']"></Input>
                                <template v-else>{{item['remark']}}</template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment'
    import ImgUpload from '@/components/ImgUpload'
    import { loadRectification, recordRectification, exportDoc } from '@/services/rectification'
    const standardDetail = {
                    reviewed: false,
                    recorded: false,
                    fillUnit: '',//填报单位
                    fillPerson: '',//填报人
                    checkDate: '',//执法检查日期
                    enterpriseName: '',//执法检查（或复查）企业（场所）名称
                    enterpriseAddress: '',//企业地址
                    checkPerson: '',//执法检查人员
                    dutyUnit: '',//责任单位
                    dutyPerson: '',//责任人
                    finishDate: '',//整改完成期限
                    remark: '',//备注
                    links: [{
                        id: '',
                        situationId: '',
                        method: '',
                        part: '',
                        rectificateDate: '',
                        remark: '',
                    }]
                }
    export default {
        components: {
            ImgUpload
        },
        data() {
            return {
                spinShow: true,
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                isEdit: false,
                columns1: [{
                    title: '执法检查日期',
                    key: 'checkDate',
                    width: '8%',
                }, {
                    title: '执法检查（或复查）企业（场所）名称',
                    key: 'enterpriseName',
                    width: '15%',
                }, {
                    title: '企业地址',
                    key: 'enterpriseAddress',
                    width: '15%',
                }, {
                    title: '执法检查人员',
                    key: 'checkPerson',
                    width: '8%',
                }, {
                    title: '违法行为或隐患情况',
                    key: 'situation',
                    width: '15%',
                }, {
                    title: '整改落实情况或处置措施',
                    key: 'method',
                    width: '8%',
                }, {
                    title: '责任单位',
                    key: 'dutyUnit',
                    width: '8%',
                }, {
                    title: '责任人',
                    key: 'dutyPerson',
                    width: '8%',
                }, {
                    title: '整改完成期限',
                    key: 'finishDate',
                    width: '8%',
                }, {
                    title: '备注',
                    key: 'remark',
                    width: '7%',
                }],
                datas: standardDetail,
                columns2: [{
                    title: '序号',
                    key: 'no',
                    width: '5%',
                }, {
                    title: '违法行为或隐患所在部位',
                    key: 'part',
                    width: '15%',
                }, {
                    title: '违法行为或隐患描述',
                    key: 'situation',
                    width: '15%',
                }, {
                    title: '整改前照片',
                    key: 'beforeImg',
                    width: '20%',
                }, {
                    title: '整改期限',
                    key: 'rectificateDate',
                    width: '10%',
                }, {
                    title: '整改后照片',
                    key: 'afterImg',
                    width: '20%',
                }, {
                    title: '备注',
                    key: 'remark',
                    width: '15%',
                }],
                situationList: {
                    '1': '烤线没有提供检测报告',
                    '2': '未提供劳保用品发放记录签收表',
                    '3': '未建立事故隐患排查治理记录档案',
                    '4': '未提供2017年安全资金投入计划',
                    '5': '未建立安全生产责任制',
                    '6': '为健全应急演练制度',
                    '7': '未提供员工三级教育培训档案'
                }
            }
        },
        computed: {
            rowSpan() {
                let result = 1
                if(this.datas) {
                    if(this.datas.links) {
                        result = this.datas.links.length
                    }
                }
                if(this.isEdit) {
                    result++
                }
                return result
            },
            exportUrl() {
                return 'http://127.0.0.1:9000/wsproject/rectification/exportDoc?rectificationMainId=' + this.datas.id
            }
        },
        watch: {
            'datas.checkDate': function() {
                if(this.datas && this.datas.checkDate) {
                    this.datas.checkDate = moment(this.datas.checkDate).format('YYYY-MM-DD')
                }
            },
            'datas.finishDate': function() {
                if(this.datas && this.datas.finishDate) {
                    this.datas.finishDate = moment(this.datas.finishDate).format('YYYY-MM-DD')
                }
            },
        },
        methods: {
            calRowSpan(type) {
                if(type !== 'Array') {
                    return this.rowSpan;
                } else {
                    return 1;
                }
            },
            calVal(type, val, index) {
                let curVal = null;
                if(type == 'Array') {
                    curVal = val[index];
                } else {
                    curVal = val;
                }
                return curVal;
            },
            isRowSpan(type, index) {
                if(type === 'Array' || index === 0) {
                    return true;
                }
                return false;
            },
            toggleEditStatus() {
                this.isEdit = !this.isEdit
                if(!this.isEdit) {
                    let tmp = Object.assign({}, this.datas)
                    tmp.reviewed = tmp.reviewed ? 1 : 0
                    tmp.recorded = tmp.recorded ? 1 : 0
                    recordRectification(tmp).then(resp => {
                        let respData = resp.data
                        if(respData.status) {
                            let data = respData.data
                            if(data) {
                                data.reviewed = data.reviewed == 1 ? true : false
                                data.recorded = data.recorded == 1 ? true : false
                                if(data.links.length == 0) {
                                    data.links.push({
                                        id: '',
                                        situationId: '',
                                        method: '',
                                        part: '',
                                        rectificateDate: '',
                                        remark: '',
                                    })
                                }
                            }
                            this.datas = data
                            this.$Message.success('保存成功！')
                        } else {
                            this.$Message.error('添加失败！')
                        }
                    }).catch(() => {
                        this.$Message.error('服务器错误！')
                    })
                }
            },
            insertLine() {
                let max = 0;
                if(this.datas) {
                    if(this.datas.links) {
                        this.datas.links.push({
                            id: '',
                            situationId: '',
                            method: '',
                            part: '',
                            rectificateDate: '',
                            remark: '',
                        })
                    }
                }
            },
            handleDate(index) {
                setTimeout(() => {
                    this.datas.links[index].rectificateDate = moment(this.datas.links[index].rectificateDate).format('YYYY-MM-DD')
                }, 500);
            },
            handleBack() {
                this.$router.go(-1)
            },
        },
        created() {
            loadRectification(this.$route.params.id).then(resp => {
                let respData = resp.data
                if(respData.status) {
                    let data = respData.data
                    if(data) {
                        data.reviewed = data.reviewed == 1 ? true : false
                        data.recorded = data.recorded == 1 ? true : false
                        if(data.links.length == 0) {
                            data.links.push({
                                id: '',
                                situationId: '',
                                method: '',
                                part: '',
                                rectificateDate: '',
                                remark: '',
                            })
                        }
                    }
                    this.datas = data
                    this.spinShow = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    $borderStyle: 1px solid #e3e8ee;
    .ws-wrapper {
        .ws-content {
            .detail-check {
                label:nth-child(3) {
                    margin-left: 20px;
                }
            }
            .detail-table-1, .detail-table-2 {
                margin-top: 20px;
                .table-header {
                    text-align: center;
                }
                .table-pre {
                    margin: 10px 0;
                    .table-pre-left {
                        text-align: left;
                    }
                    .table-pre-right {
                        text-align: right;
                    }
                    .input-style {
                        display: inline-block;
                        width: 200px;
                    }
                }
                .main-table {
                    width: 100%;
                    border: $borderStyle;
                    border-collapse: collapse;
                    th {
                        padding: 10px;
                        border: $borderStyle;
                        background-color: #f5f7f9;
                    }
                    td {
                        padding: 5px;
                        border: $borderStyle;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>