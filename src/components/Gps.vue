<template>
    <div id="gps">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="设备编号"
                    width="180" align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.equipment }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="车牌号"
                    width="180" align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.car }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="时间"
                    width="250" align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="地址"
                    width="250" align="center">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>


</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    equipment: '0001',
                    car: '京A12345',
                    time:'12345678912',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    equipment: '0001',
                    car: '京A12345',
                    time:'12345678912',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    equipment: '0001',
                    car: '京A12345',
                    time:'12345678912',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    equipment: '0001',
                    car: '京A12345',
                    time:'12345678912',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            //tab切换
            handleClick(tab, event) {
                console.log(tab, event);
            },

            //    表格
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    };
</script>
<style>
    #gps{
        height: calc(100vh - 140px);
        margin-left:40px;
        background:red;
    }
    .el-table  {
        height:100% !important;
    }
</style>