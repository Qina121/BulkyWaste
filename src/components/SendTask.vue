<template>
    <div id="send-task">
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
                    prop="taskId"
                    label="任务编号"
                    width="80"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="派出时间"
                    sortable
                    width="180" align="center">
            </el-table-column>
            <el-table-column
                    prop="date1"
                    label="截止时间"
                    sortable
                    width="180" align="center">
            </el-table-column>
            <el-table-column
                    prop="carID"
                    label="车牌号"
                    sortable
                    width="180" align="center">
            </el-table-column>

            <el-table-column label="操作" formatter align="center">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="changeisShow(scope.$index, scope.row)">详情</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        <div id="task-detail" v-show="isShow" >
            <div class="message">
                <span>任务编号&nbsp:&nbsp</span>
                <span>0001</span>
                <i class="el-icon-close" @click="change"></i>
            </div>
            <div class="task-box">
                <ul class="order-box clearfix">
                    <li class="order-list lf">
                        <div class="order-id">
                            <span class="left">订单编号&nbsp:</span>
                            <span class="ids" style="font-weight:700;" >002</span>
                        </div>
                        <div class="address">
                            <span class="left">订单地址&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="describe">
                            <span class="left">订单描述&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="image">
                            <span class="left">图片展示&nbsp:</span>
                            <span class="right clearfix">
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                            </span>
                        </div>
                        <div class="time">
                            <span class="left">预约时间&nbsp:</span>
                            <i class=" el-icon-date"></i>
                            <span class="date">2020-07-23 12:12</span>

                        </div>
                    </li>
                    <li class="order-list lf">
                        <div class="order-id">
                            <span class="left">订单编号&nbsp:</span>
                            <span class="ids" style="font-weight:700;" >002</span>
                        </div>
                        <div class="address">
                            <span class="left">订单地址&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="describe">
                            <span class="left">订单描述&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="image">
                            <span class="left">图片展示&nbsp:</span>
                            <span class="right clearfix">
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                            </span>
                        </div>
                        <div class="time">
                            <span class="left">预约时间&nbsp:</span>
                            <i class=" el-icon-date"></i>
                            <span class="date">2020-07-23 12:12</span>

                        </div>
                    </li>
                    <li class="order-list lf">
                        <div class="order-id">
                            <span class="left">订单编号&nbsp:</span>
                            <span class="ids" style="font-weight:700;" >002</span>
                        </div>
                        <div class="address">
                            <span class="left">订单地址&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="describe">
                            <span class="left">订单描述&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="image">
                            <span class="left">图片展示&nbsp:</span>
                            <span class="right clearfix">
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                            </span>
                        </div>
                        <div class="time">
                            <span class="left">预约时间&nbsp:</span>
                            <i class=" el-icon-date"></i>
                            <span class="date">2020-07-23 12:12</span>

                        </div>
                    </li>
                    <li class="order-list lf">
                        <div class="order-id">
                            <span class="left">订单编号&nbsp:</span>
                            <span class="ids" style="font-weight:700;" >002</span>
                        </div>
                        <div class="address">
                            <span class="left">订单地址&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="describe">
                            <span class="left">订单描述&nbsp:</span>
                            <span class="right">比好哦啊哦哦 瑟吉欧数数据好哦啊哦哦 瑟吉欧数数据</span>
                        </div>
                        <div class="image">
                            <span class="left">图片展示&nbsp:</span>
                            <span class="right clearfix">
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                                <img src="../assets/timg.jpg" height="50" width="50" class="lf"/>
                            </span>
                        </div>
                        <div class="time">
                            <span class="left">预约时间&nbsp:</span>
                            <i class=" el-icon-date"></i>
                            <span class="date">2020-07-23 12:12</span>

                        </div>
                    </li>

                </ul>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    taskId:'001',
                    date: '2016-05-02 12:12',
                    date1: '2016-05-02 12:12',
                    carID:'京A123456'

                },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'
                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'
                    },
                    {
                        taskId:'001',
                        date: '2016-05-02 12:12',
                        date1: '2016-05-02 12:12',
                        carID:'京A123456'

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
    #send-task{
        height:700px;
        margin-left:40px;
        margin-right:40px;
        position: relative;
    }
    #task-detail{
        width:800px;
        hieght:calc(100hv-140px);
        background:#eee;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        top:0;
        left:50%;
        margin-left:-400px;

    }
    .fenye{
        margin-top:30px;
        text-align: center;


    }
    .message{
        padding:20px 40px;
        box-sizing: border-box;
        width:800px;
        height:30px;
        line-height:30px;
        font-size:20px;
        font-weight: 700;
        color:blue;

    }
    .message .el-icon-close{
        height:30px;
        line-height:30px;
        font-size:30px;
        color:blue;
        font-weight: 700;
        float:right;
        margin-right:0px;
    }
    ul li{
        list-style:none;
        padding:0;
        margin:0;
    }
    .clearfix:after{
        content: '';
        height:0;
        line-height:0;
        clear:both;
        display: block;
        visibility: hidden;
    }
    .clearfix{
        zoom:1;
    }

    .lf{
        float:left;
    }
    .lr{
        float:right;
    }
    .task-box{
        margin-top:20px;
        margin-right:-20px;
    }
    .order-list{
        width:350px;
        height:320px;
        margin-right:20px;
        margin-bottom:10px;
        background:#fff;
        box-sizing:content-box;
        position: relative;

    }
    .order-id ,.address ,.describe ,.image  ,.time{
        box-shadow: 0 0 3px #BBBBBB;
    }
    .address{
        height:70px;
    }

    .left{
        height:50px;
        display: inline-block;
        width:80px;
        margin-right:20px;
        line-height:50px;
        font-size:14px;
        font-weight: 700;
        padding-left:20px;
        vertical-align: top;
        padding-top:10px;
    }
    .ids{
        display: inline-block;
        height:50px;
        line-height:50px;
        padding-top:10px;
    }
    .right{
        display: inline-block;
        height:50px;
        font-size:14px;
        color:#333;
        line-height:20px;
        width:200px;
        padding-top:10px;
    }
    .image img{
        margin-right:15px;
    }
    .image img:hover{
        width:350px;
        height:300px;
        position: absolute;
        top:0;
        left:0;
        z-index:333;

    }

    .time i{
        margin-right:20px;
        margin-top:25px;
    }
    .time .date{
        margin-top:25px;
        font-size:14px;
        font-weight: 700;
    }

</style>