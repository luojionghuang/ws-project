<template>
    <div class="ws-wrapper">
        <div class="ws-header">
            <div class="ws-header-left">
                <h1>违法行为维护</h1>
            </div>
            <div class="ws-header-right">
                <Button type="primary" icon="plus" @click="createModel">创建</Button>
                <Modal
                    v-model="newModel"
                    title="违法行为添加">
                    <Form
                        :model="formItem"
                        :label-width="80">
                        <Form-item label="描述">
                            <Input v-model="formItem.name"></Input>
                        </Form-item>
                        <Form-item label="排序">
                            <Input v-model="formItem.sort"></Input>
                        </Form-item>
                    </Form>
                    <div slot="footer">
                        <Button type="primary" @click="saveModel">保存</Button>
                    </div>
                </Modal>
            </div>
        </div>
        <div class="ws-content">
            <Table :columns="columns" :data="datas"></Table>
        </div>
    </div>
</template>

<script>
    import { loadSituations, dealSituation, delSituation } from '@/services/situation'
    export default {
        name: 'situation',
        data() {
            return {
                newModel: false,
                formItem: {
                    id: null,
                    name: '',
                    sort: 1,
                },
                columns: [{
                    title: 'ID',
                    key: 'id',
                    align: 'center',
                }, {
                    title: '描述',
                    key: 'name',
                    align: 'center',
                }, {
                    title: '排序（越小优先级越高）',
                    key: 'sort',
                    align: 'center',
                }, {
                    title: '操作',
                    key: 'control',
                    align: 'center',
                    render: (h, {row, column, index}) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                },
                                style: {
                                    marginRight: '5px',
                                },
                                on: {
                                    click: () => {
                                        this.formItem.id = row.id
                                        this.formItem.name = row.name
                                        this.formItem.sort = row.sort
                                        this.newModel = true
                                    }
                                }
                            }, '修改'),
                            h('Poptip', {
                                props: {
                                    confirm: true,
                                    title: '您确认删除这条内容吗？',
                                },
                                on: {
                                    'on-ok': () => {
                                         this.delSituation(row.id)
                                    },
                                    'on-cancel': () => {
                                    }
                                }
                            }, [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                    },
                                }, '删除')
                            ])
                        ])
                    }
                }],
                datas: []
            }
        },
        methods: {
            createModel() {
                this.formItem.id = null
                this.formItem.name = ''
                this.formItem.sort = 1
                this.newModel = true
            },
            saveModel() {
                dealSituation(this.formItem).then(resp => {
                    if(resp.data) {
                        let msg = resp.data.msg
                        if(resp.data.status) {
                            loadSituations().then(resp => {
                                this.datas = resp.data;
                                this.newModel = false
                                this.$Message.success(msg)
                            })
                        } else {
                            this.$Message.error(msg)
                        }
                    }
                })
            },
            delSituation(id) {
                delSituation(id).then(resp => {
                    if(resp.data) {
                        let msg = resp.data.msg
                        if(resp.data.status) {
                            loadSituations().then(resp => {
                                this.datas = resp.data;
                                this.$Message.success(msg)
                            })
                        } else {
                            this.$Message.error(msg)
                        }
                    }
                })
            }
        },
        mounted() {
            loadSituations().then(resp => {
                this.datas = resp.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>