<template>
    <div>
        <Table :columns="columns" :data="datas"></Table>
    </div>
</template>

<script>
    import { loadSituations } from '@/services/situation'
    export default {
        name: 'situation',
        data() {
            return {
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
                }],
                datas: []
            }
        },
        mounted() {
            loadSituations(1).then(resp => {
                this.datas = resp.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>