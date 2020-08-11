<template>
    <div id="reject-order">
        <el-table
                :data="tableData"
                style="width: 100%"
                max-height="540"
                :default-sort = "{prop: 'date', order: 'descending'}"
                @selection-change="handleSelectionChange">
            >

            <el-table-column
                    fixed
                    type="selection"
                    width="55"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="orderId"
                    label="订单编号"
                    width="80"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="预约时间"
                    sortable
                    width="145" align="center">
            </el-table-column>
            <el-table-column
                    prop="date1"
                    label="驳回时间"
                    sortable
                    width="145" align="center">
            </el-table-column>
            <el-table-column
                    prop="lng"
                    label="经度"
                    sortable
                    width="100" align="center">
            </el-table-column>
            <el-table-column
                    prop="lat"
                    label="纬度"
                    sortable
                    width="100" align="center">
            </el-table-column>
            <el-table-column
                    label="地址"
                    align="center">
                <template slot-scope="scope">
                    <el-tooltip placement="top" >
                        <div slot="content" id="beijing" >{{ scope.row.address }}</div>
                        <span  class="address">{{ scope.row.address }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    label="驳回原因"
                    align="center">
                <template slot-scope="scope">
                    <el-tooltip placement="top" >
                        <div slot="content">{{ scope.row.reason }}</div>
                        <span  class="reason">{{ scope.row.reason }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column label="操作" formatter align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="agree(scope.$index, scope.row)">同意</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="reject(scope.$index, scope.row)">驳回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="fenye">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    page-size="8"
                    hide-on-single-page="ture"
                    :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    orderId:'001',
                    date: '2016-05-02 12:12',
                    date1: '2018-05-01 12:12',
                    lng: '112.26358',
                    lat: '26.26358',
                    address: '上海市普陀区金沙江路 1518 弄',
                    reason:'时间冲突'
                },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 ',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 ',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 ',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 ',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 ',
                        reason:'个人原因个人原因个人原因个人原因个人原因'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2018-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄',
                        reason:'个人原因'
                    },
                ]

            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            //选择框
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //同意
            agree(index, row) {
                console.log(index, row);
            },
            //驳回
            reject(index, row){
                console.log(index, row);
            }


        }
    }
</script>

<style scoped>
    #reject-order{
        height:700px;
        margin-left:40px;
        margin-right:40px;
    }
    .fenye{
        margin-top:30px;
        text-align: center;
    }
    .address , .reason{
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

</style>

