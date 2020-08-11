<template>
    <div id="order">
        <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
                @selection-change="handleSelectionChange">
        >

            <el-table-column
                    type="selection"
                    width="55"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="orderId"
                    label="订单编号"
                    width="100"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="预约时间"
                    sortable
                    width="230" align="center">
            </el-table-column>
            <el-table-column
                    prop="lng"
                    label="经度"
                    sortable
                    width="120" align="center">
            </el-table-column>
            <el-table-column
                    prop="lat"
                    label="纬度"
                    sortable
                    width="120" align="center">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    :formatter="formatter" align="center">
            </el-table-column>
            <el-table-column label="操作" formatter align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="OrderDetail(scope.$index, scope.row)">详情</el-button>
                    <el-button
                            size="mini"
                            @click="changeisShow(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <div id="order-detail" v-show="isShow" >
            <div class="message">
                <span>订单编号&nbsp:&nbsp</span>
                <span>0001</span>
                <i class="el-icon-close" @click="change"></i>


            </div>
            <div class="tip">图片展示</div>
            <div class="image">
                <img src="../assets/timg.jpg" alt="logo">
                <img src="../assets/timg.jpg" alt="logo">
                <img src="../assets/timg.jpg" alt="logo">
            </div>
            <div class="tip">描述估量</div>
            <div class="describe">
                随手打开一本书，走进古老的《诗经》，走进了一片诗意的光明。远古的人们，早就把诗意融入在了寻常的生活中。他们用诗歌颂爱情，描写景物，记录时节，感叹命运。每一句都是那么唯美与深刻，一片野草，就是一首诗。
            </div>
            <div class="tip">地址</div>
            <div class="address">
                命运。每一句都是那么唯美与深刻，一片野草，就是一首诗。
            </div>



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
                    lng: '112.26358',
                    lat: '26.26358',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 '
                    },
                    {
                        orderId:'001',
                        date: '2016-05-02 12:12',
                        lng: '112.26358',
                        lat: '26.26358',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                ],
                isShow:false
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
            //编辑
            // handleEdit(index, row) {
            //     console.log(index, row);
            //     alert('我是编辑')
            // },
            //删除
            handleDelete(index, row) {
                console.log(index, row);
            },
            OrderDetail(index, row){
                this.$router.push('/home/OrderDetail')
            },

            //弹窗的显示与隐藏
            changeisShow : function(index, row){
                this.isShow = !this.isShow;//取反
            },
            change : function(){
                this.isShow = !this.isShow;//取反
            },

        }
    }
</script>
<style scoped>
    #order{
        height: calc(100vh - 140px);
        margin-left:40px;
        position: relative;
    }

    #order-detail{
        width:800px;
        hieght:calc(100hv-140px);
        background:#eee;
        padding:40px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        top:0;
        left:50%;
        margin-left:-400px;


    }
    .message{
        width:800px;
        height:30px;
        line-height:30px;
        font-size:20px;
        font-weight: 700;
        color:#b8b6b9;

    }
    .message .el-icon-close{
        height:30px;
        line-height:30px;
        font-size:30px;
        color:#19367B;
        font-weight: 700;
        float:right;
        margin-right:80px;
    }

    .tip{
        width:720px;
        height:30px;
        line-height:30px;
        border-left:4px solid #19367B;
        margin:20px auto;
        padding-left:20px;
        box-sizing: border-box;
        font-size:20px;
        font-weight: 700;
        color:#19367B;
        margin-bottom:30px;
    }
    .image{
        width:720px;
        height:100px;
    }
    .image img{
        width:100px;
        height:100px;
        margin-right:30px;
    }
    .image img:hover{
        width:600px;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
        margin-left:-300px;
        z-index: 111;
    }
    .describe, .address{
        width:720px;
        margin:0 auto;
        border:1px solid #b8b6b9;
        border-radius: 5px;
        font-size:14px;
        line-height:26px;
        padding:0 20px;
        box-sizing: border-box;
    }
    .describe{
        height:100px;
    }
    .address{
        height:50px;
    }


</style>
