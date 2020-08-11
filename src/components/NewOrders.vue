<template>
    <div id="order">
        <div>
            <div class="mapdiv" :id="mapId"></div>
        </div>

        <div class="zhezhao" v-show="iszhezhao"></div>
        <el-button class="button" type="primary" @click="changeisTaskShow">添加到任务</el-button>
        <el-table
                :data="tableData"
                style="width: 100%"
                max-height="480"
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
                    width="180" align="center">
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
                        <div slot="content">{{ scope.row.address }}</div>
                        <span  class="reason">{{ scope.row.address }}</span>
                    </el-tooltip>
                </template>
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

        <div id="task" v-show="isTaskShow"  >
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="订单编号">
                    <el-input v-model="form.orderId" disabled></el-input>
                </el-form-item>
                <el-form-item label="选择车辆">
                    <el-select v-model="form.carId" placeholder="请选择车牌号">
                        <el-option label="京A12345" value="shanghai"></el-option>
                        <el-option label="京B12345" value="beijing"></el-option>
                        <el-option label="京C12345" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="派单时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="截止时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">派发任务</el-button>
                    <el-button @click="changeisTaskShow">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import {map} from '../js/map.js'
    import mapicon from '../assets/map.png'
    export default {
        data() {
            return {
                mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
                myMap: null,
                iconImg:mapicon,
                markerArr: [
                            {address:'北京香山',lng:116.311132,lat:40.004086},
                            {address:'北京南站',lng:116.39507,lat:39.870426},
                            {address:'北小河公园',lng:116.460036,lat:40.008949}],

                tableData: [
                    {
                    orderId:'001',
                    date: '2016-05-02 12:12',
                    lng: '112.26358',
                    lat: '26.26358',
                    address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
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
                isShow:false,
                form: {
                    orderId:['001','002','003'],
                    carId: '',
                    date1: '',
                    date2: '',
                    date3: '',
                    date4: ''
                },
                isTaskShow:false,
                iszhezhao:false,

            }
        },
        mounted() {
            this.initMap();
            this.ditu();

        },
        methods: {
            initMap() {
                map('h0fUd40nx8z4aDdHZjdy9GjuLjnK8Ih2')
                    .then(() => {
                        // 百度地图API功能
                        this.myMap = new BMap.Map(this.mapId) // 创建Map实例
                         this.markerArr.forEach((item)=>{
                            this.myMap.centerAndZoom(new BMap.Point(item.lng, item.lat), 15) // 初始化地图,设置中心点坐标和地图级别
                         })

                        //添加地图类型控件
                        this.myMap.addControl(
                            new BMap.MapTypeControl({
                                mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                            })
                        )
                        this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
                        this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
                        this.icon = new BMap.Icon(this.iconImg, new BMap.Size(80, 80));
                        
                        let marker = null
                        let makerLine = []
                        this.markerArr.forEach((item)=>{
                            console.log(item.order);
                            marker = new BMap.Marker(new BMap.Point(item.lng, item.lat), {icon: this.icon});
                            makerLine.push(new BMap.Point(item.lng, item.lat))
                            var content = "<table>";
                            // content = content + "<tr><td> 订单号："+item.order+"</td></tr>";
                            content = content + "<tr><td> 地点："+item.address+"</td></tr>";
                            content = content + "<tr><td> 预约时间：2020-08-02 13：12</td></tr>";
                            content += "</table>";
                            var infowindow = new BMap.InfoWindow(content);
                            marker.addEventListener("click", function () {
                                this.openInfoWindow(infowindow);
                            });

                            this.myMap.addOverlay(marker) //把标注显示到地图上

                        })

                        // let makerLine = []
                        // this.markerArr.forEach((item)=>{
                        //     makerLine.push(new BMap.Point(item.lng, item.lat))
                        // })
                        // console.log(makerLine)
                        
                        //把标注添加到地图上
                        var polyline = new BMap.Polyline(
                                makerLine

                        , {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
                        this.myMap.addOverlay(polyline);
                        
                        //     var polyline = new BMap.Polyline([
                        //         new BMap.Point(116.311132,40.004086),
                        //         new BMap.Point(116.39507, 39.870426),
                        //         new BMap.Point(116.460036, 40.008949)
                        //     ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
                                                
                        // this.myMap.addOverlay(polyline)

                    })
                    .catch(err => {
                        console.log('地图加载失败', err)
                    })
            },
            // initMap() {
            //     // const that  = this
            //     map('h0fUd40nx8z4aDdHZjdy9GjuLjnK8Ih2')
            //         .then(() => {
            //             // 百度地图API功能
            //             this.myMap = new BMap.Map(this.mapId) // 创建Map实例
            //             this.myMap.centerAndZoom(new BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
            //             //添加地图类型控件
            //             this.myMap.addControl(
            //                 new BMap.MapTypeControl({
            //                     mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            //                 })
            //             )
            //             this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
            //             this.myMap.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

            //             this.icon = new BMap.Icon(this.iii,new BMap.Size(50,50));
                        
                        
            //             // //设置标注的经纬度
            //             let marker = new BMap.Marker(new BMap.Point(116.404, 39.915),{icon:this.icon});
            //             // //把标注添加到地图上
            //             this.myMap.addOverlay(marker);
            //             let content = "<table>";
            //             content = content + "<tr><td> 编号：001</td></tr>";
            //             content = content + "<tr><td> 地点：上海汉得信息技术股份有限公司</td></tr>";
            //             content = content + "<tr><td> 时间：2018-1-3</td></tr>";
            //             content += "</table>";
            //             let infowindow = new BMap.InfoWindow(content);
            //             marker.addEventListener("click",function(){
            //                 this.openInfoWindow(infowindow);
            //             });
            //         })
            //         .catch(err => {
            //             console.log('地图加载失败')
            //         })
            // },
            formatter(row, column) {
                return row.address;
            },
            ditu(){


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
                this.iszhezhao= !this.iszhezhao
            },


            changeisTaskShow : function(index, row){
                this.isTaskShow = !this.isTaskShow;//取反
                this.iszhezhao= !this.iszhezhao
            },
            change : function(){
                this.isShow = !this.isShow;//取反
                this.iszhezhao= !this.iszhezhao
            },
            //表单提交
            onSubmit() {
                console.log('submit!');
            }

        }
    }
</script>
<style scoped>

    #order{
        height:600px;
        margin-left:40px;
        margin-right:40px;
        position: relative;

    }
    .mapdiv{
        width:100%;
        height:500px;
    }
    #order-detail{
        width:800px;
        height:calc(100hv-140px);
        background:#eee;
        padding:40px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        top:0;
        left:50%;
        margin-left:-400px;
        z-index:100;


    }

    #task{
        width:500px;
        height:calc(100hv-140px);
        background:#eee;
        padding:40px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        top:100px;
        left:50%;
        margin-left:-250px;
        z-index:100;
    }
    .fenye{
        margin-top:30px;
        text-align: center;


    }
    .line{
        text-align: center;
    }
    .button{
        margin-bottom:20px;
    }
    .message{
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
    .reason{
        width:200px;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
.zhezhao{
    width:100%;
    height:100%;
    position:absolute;
    background:rgba(0,0,0,.3);
    z-index:10;
}
</style>