<template>
    <div id="applet-user">
        <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="发起人" name="first">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            label="日期"
                            width="180" align="center">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="姓名"
                            width="180" align="center">
                        <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                                <p>姓名: {{ scope.row.name }}</p>
                                <p>住址: {{ scope.row.address }}</p>
                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="用户名"
                            width="250" align="center">
                        <template slot-scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.phone }}</span>
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
            </el-tab-pane>
            <el-tab-pane label="临时发起人" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="司机" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="管理员" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'first',  //tab数据
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    phone:'12345678912',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    phone:'12345678912',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    phone:'12345678912',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    phone:'12345678912',
                    address: '上海市普陀区金沙江路 1516 弄'
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
<style >
    #applet-user{
        height: calc(100vh - 140px);
        margin-left:40px;
    }
    .el-table  {
       height:100% !important;
   }

</style>

