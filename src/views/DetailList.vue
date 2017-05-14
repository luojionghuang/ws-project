<template>
    <div class="detail-wrapper">
        <div class="detail-header">
            <Button v-if="!isEdit" type="primary" icon="document">导出Word</Button>
            <Button :type="isEdit ? 'success' : 'primary'" :icon="isEdit ? 'checkmark' : 'edit'" @click="toggleEditStatus">{{isEdit ? '保存' : '编辑'}}</Button>
        </div>
        <div class="detail-table-1">
            <div class="table-header">
                <h1>表1：安全生产大排查大整治台账</h1>
            </div>
            <Row class="table-pre">
                <Col span="12" class="table-pre-left">
                    <label>填报单位：</label>
                    <Input class="input-style" v-if="isEdit" v-model="fillUnit"></Input>
                    <span v-else>{{fillUnit}}</span>
                </Col>
                <Col span="12" class="table-pre-right">
                    <label>填报人：</label>
                    <Input class="input-style" v-if="isEdit" v-model="fillPerson"></Input>
                    <span v-else>{{fillPerson}}</span>
                </Col>
            </Row>
            <table class="main-table">
                <thead>
                    <tr>
                        <th v-for="item in columns1">{{item.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td :rowspan="rowSpan">{{datas1.checkDate}}</td>
                        <td :rowspan="rowSpan">{{datas1.companyName}}</td>
                        <td :rowspan="rowSpan">
                            <Input v-if="isEdit" v-model="datas1.companyAddress"></Input>
                            <template v-else>{{datas1.companyAddress}}</template>
                        </td>
                        <td :rowspan="rowSpan">
                            <Input v-if="isEdit" v-model="datas1.checkPerson"></Input>
                            <template v-else>{{datas1.checkPerson}}</template>
                        </td>
                        <td>
                            <Select v-if="isEdit" v-model="datas1.action[0]" filterable>
                                <Option v-for="(item, key) in actionList" :value="key" :key="key">{{item}}</Option>
                            </Select>
                            <template v-else>{{actionList[datas1.action[0]]}}</template>
                        </td>
                        <td>
                            <Input v-if="isEdit" v-model="datas1.method[0]"></Input>
                            <template v-else>{{datas1.method[0]}}</template>
                        </td>
                        <td :rowspan="rowSpan">
                            <Input v-if="isEdit" v-model="datas1.dutyUnit"></Input>
                            <template v-else>{{datas1.dutyUnit}}</template>
                        </td>
                        <td :rowspan="rowSpan">
                            <Input v-if="isEdit" v-model="datas1.dutyPerson"></Input>
                            <template v-else>{{datas1.dutyPerson}}</template>
                        </td>
                        <td :rowspan="rowSpan">
                            <Date-picker type="date" v-if="isEdit" v-model="datas1.finishDate"></Date-picker>
                            <template v-else>{{datas1.finishDate}}</template>
                        </td>
                        <td :rowspan="rowSpan">
                            <Input v-if="isEdit" v-model="datas1.remark"></Input>
                            <template v-else>{{datas1.remark}}</template>
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
                                <Select v-if="isEdit" v-model="datas1.action[index]" filterable>
                                    <Option v-for="(item, key) in actionList" :value="key" :key="key">{{item}}</Option>
                                </Select>
                                <template v-else>{{actionList[datas1.action[index]]}}</template>
                            </td>
                            <td>
                                <Input v-if="isEdit" v-model="datas1.method[index]"></Input>
                                <template v-else>{{datas1.method[index]}}</template>
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
                    <Date-picker type="date" placeholder="选择日期" class="input-style" v-if="isEdit" v-model="checkDate"></Date-picker>
                    <span v-else>{{checkDate}}</span>
                </Col>
                <Col span="12" class="table-pre-right">
                    <label>执法检查人员：</label>
                    <Input class="input-style" v-if="isEdit" v-model="checkPerson"></Input>
                    <span v-else>{{checkPerson}}</span>
                </Col>
            </Row>
            <table class="main-table">
                <thead>
                    <tr>
                        <th v-for="item in columns2">{{item.title}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in datas2">
                        <td>{{index + 1}}</td>
                        <td>
                        </td>
                        <td>
                            {{item['actionOrDesc']}}
                        </td>
                        <td>
                        </td>
                        <td>
                            <Date-picker type="date" :open= v-if="isEdit" v-model="item['rectificateDate']" @on-ok="handleDate(index)"></Date-picker>
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
</template>
<script>
    import moment from 'moment'
    export default {
        name: 'DetailList',
        data() {
            return {
                isEdit: false,
                fillUnit: '马田中队',//填报单位
                fillPerson: '蔡春婷',//填报人
                checkDate: '2017-02-27',//执法检查日期
                checkPerson: '蔡春婷',//执法检查人员
                columns1: [{
                    title: '执法检查日期',
                    key: 'checkDate',
                }, {
                    title: '执法检查（或复查）企业（场所）名称',
                    key: 'companyName',
                }, {
                    title: '企业地址',
                    key: 'companyAddress',
                }, {
                    title: '执法检查人员',
                    key: 'checkPerson',
                }, {
                    title: '违法行为或隐患情况',
                    key: 'action',
                }, {
                    title: '整改落实情况或处置措施',
                    key: 'method',
                }, {
                    title: '责任单位',
                    key: 'dutyUnit',
                }, {
                    title: '责任人',
                    key: 'dutyPerson',
                }, {
                    title: '整改完成期限',
                    key: 'finishDate',
                }, {
                    title: '备注',
                    key: 'remark',
                }],
                datas1: {
                    checkDate: '2017-02-21',
                    companyName: '宝明发包装制品有限公司',
                    companyAddress: '合水口社区第四工业区1期1栋3,4层',
                    checkPerson: '林志松,王敏学',
                    action: [],
                    method: [],
                    dutyUnit: '马田中队',
                    dutyPerson: '麦柏基',
                    finishDate: '2017-02-28',
                    remark: ''
                },
                columns2: [{
                    title: '序号',
                    key: 'no'
                }, {
                    title: '违法行为或隐患所在部位',
                    key: 'actionOrPart'
                }, {
                    title: '违法行为或隐患描述',
                    key: 'actionOrDesc'
                }, {
                    title: '整改前照片',
                    key: 'beforeImg'
                }, {
                    title: '整改期限',
                    key: 'rectificateDate'
                }, {
                    title: '整改后照片',
                    key: 'afterImg'
                }, {
                    title: '备注',
                    key: 'remark'
                }],
                datas2: [],
                actionList: {
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
                let max = 0;
                if(this.datas1) {
                    let actionLength = this.datas1.action.length;
                    let methodLength = this.datas1.method.length;
                    max = actionLength > methodLength ? actionLength : methodLength;
                    if(max == 0) {
                        max = 1;
                    }
                }
                if(this.isEdit) {
                    max++;
                }
                return max;
            }
        },
        watch: {
            checkDate() {
                this.checkDate = moment(this.checkDate).format('YYYY-MM-DD');
            },
            'datas1.checkDate': function() {
                this.datas1.checkDate = moment(this.datas1.checkDate).format('YYYY-MM-DD');
            },
            'datas1.finishDate': function() {
                this.datas1.finishDate = moment(this.datas1.finishDate).format('YYYY-MM-DD');
            },
            'datas1.action': function() {
                this.datas1.action.forEach((item, index) => {
                    if(this.datas2[index]) {
                        if(this.datas2[index].actionOrDesc != this.actionList[item]) {
                            this.datas2[index].actionOrDesc = this.actionList[item];
                        }
                    } else {
                        this.datas2.push({
                            actionOrPart: null,
                            actionOrDesc: this.actionList[item],
                            beforeImg: null,
                            rectificateDate: null,
                            afterImg: null,
                            remark: null
                        });
                    }
                });
            }
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
                this.isEdit = !this.isEdit;
            },
            insertLine() {
                let max = 0;
                if(this.datas1) {
                    let actionLength = this.datas1.action.length;
                    let methodLength = this.datas1.method.length;
                    max = actionLength > methodLength ? actionLength : methodLength;
                    if(max == 0) {
                        this.datas1.action.push('');
                    }
                }
                this.datas1.action.push('');
            },
            handleDate(index) {
                this.datas2[index].rectificateDate = moment(date).format('YYYY-MM-DD')
            }
        }
    }
</script>

<style lang="scss" scoped>
    $borderStyle: 1px solid #e3e8ee;
    .detail-wrapper {
        width: 80%;
        margin: 0 auto;
        .detail-header {
            margin: 10px 0;
            padding: 10px 0;
            text-align: right;
            border-bottom: $borderStyle;
        }
        .detail-table-2 {
            margin-top: 40px;
        }
        .detail-table-1, .detail-table-2 {
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
    
</style>