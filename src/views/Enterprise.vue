<template>
    <div class="ws-wrapper">
        <div class="ws-header">
            <div class="ws-header-left">
                <h1>企业维护</h1>
            </div>
            <div class="ws-header-right">
                <Button type="primary" icon="plus" @click="newModel = true">创建</Button>
                <Modal
                    v-model="newModel"
                    title="企业添加">
                    <Form
                        :model="formItem"
                        :label-width="80">
                        <Form-item label="企业名称">
                            <Input v-model="formItem.name"></Input>
                        </Form-item>
                        <Form-item label="企业地址">
                            <Input v-model="formItem.address"></Input>
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
    import { loadEnterprises, insertEnterprise } from '@/services/enterprise'
    export default {
        name: 'enterprise',
        data() {
            return {
                newModel: false,
                formItem: {
                    name: '',
                    address: '',
                },
                columns: [{
                    title: 'ID',
                    key: 'id',
                    align: 'center',
                }, {
                    title: '企业名称',
                    key: 'name',
                    align: 'center',
                }, {
                    title: '企业地址',
                    key: 'address',
                    align: 'center',
                }, {
                    title: '创建时间',
                    key: 'createTime',
                    align: 'center',
                }],
                datas: []
            }
        },
        methods: {
            saveModel() {
                insertEnterprise(this.formItem).then(resp => {
                    if(resp.data) {
                        if(resp.data.status) {
                            loadEnterprises(1).then(resp => {
                                if(resp.data) {
                                    this.datas = resp.data
                                    this.newModel = false
                                    this.$Message.success('添加成功！')
                                }
                            })
                        }
                    }
                })
            }
        },
        mounted() {
            loadEnterprises(1).then(resp => {
                if(resp.data) {
                    this.datas = resp.data
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>