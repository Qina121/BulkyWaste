<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
   
      <el-header class="bgred clearfix">
        <div class="left lf">
          <img src="../assets/text.png" height="60" width="396"/>
        </div>
          <div class="right lr">
          <i class="el-icon-bell"></i>
          <span>消息中心</span>
          <i class="line"></i>
          <span>Hello ,</span>
          <span>Admin</span>
          <i class="el-icon-caret-bottom"></i>
            <img  class="user" src="../assets/user.png" height="63" width="62"/>
          </div>
      </el-header>
      <el-container class="sideHeight">
   
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#284CA0"
          text-color="#aec8dd"
          active-text-color="#f5f8f3"
          :default-active="$route.path" router
        >

          <el-submenu class="el-submenu-one" index="1">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>操作台</span>
            </template>
            <el-menu-item-group >
              <el-submenu  index="1-1">
                <template slot="title">
                  <i class="el-icon-s-order"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="public" index="1-1-1" @click='NewOrders'>最新订单</el-menu-item>
                  <el-menu-item class="public" index="1-1-2" @click="Order">已派出订单</el-menu-item>
                  <el-menu-item class="public" index="1-1-3" @click="CompleteOrder">已完成订单</el-menu-item>
                  <el-menu-item class="public" index="1-1-4" @click="RejectOrder">审核驳回订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu  index="1-2">
                <template slot="title">
                  <i class="el-icon-box"></i>
                  <span>任务管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="public" index="1-2-1" @click="SendTask">已派出任务</el-menu-item>
                  <el-menu-item class="public" index="1-2-2" @click="MissionOn">任务进行中</el-menu-item>
                  <el-menu-item class="public" index="1-2-3" @click="TaskCompleted">已完成任务</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu  index="1-3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>GPS管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="public" index="1-3-1" @click="OnAccess">实时监控</el-menu-item>
                  <el-menu-item class="public" index="1-3-2" @click="Gps">信息管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>基础信息</span>
            </template>
            <el-menu-item-group>
              <el-submenu  index="2-1">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="public" index="2-1-1" @click="AppletUser">小程序用户</el-menu-item>
                  <el-menu-item class="public" index="2-1-1" @click="BackgroundUser">后台用户</el-menu-item>
                  <!--              <el-menu-item index="1-3">重点关照</el-menu-item>-->
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="2-2">
                <i class="el-icon-s-check"></i>
                <span slot="title">审批管理</span>
              </el-menu-item>

              <el-menu-item index="2-3" @click="Notice">
                <i class="el-icon-message-solid"></i>
                <span slot="title">公告管理</span>
              </el-menu-item>
              <el-menu-item index="2-4" @click="Car">
                <i class="el-icon-truck"></i>
                <span slot="title">车辆管理</span>
              </el-menu-item>
              <el-submenu  index="2-5">
                <template slot="title">
                  <i class="el-icon-s-data"></i>
                  <span>数据统计</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item class="public" index="2-5-1" @click="QuantitativeStatistics">量方统计</el-menu-item>
                  <el-menu-item class="public" index="2-5-2" @click="TrainStatistics">车次统计</el-menu-item>
                  <el-menu-item class="public" index="2-5-3" @click="DriverStatistics">司机统计</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu-item-group>
          </el-submenu>

<!--          <el-submenu class="el-submenu-one" index="1">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-user"></i>-->
<!--              <span>人员管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <el-menu-item index="1-1" @click="AppletUser">小程序用户</el-menu-item>-->
<!--              <el-menu-item index="1-2" @click="BackgroundUser">后台用户</el-menu-item>-->
<!--&lt;!&ndash;              <el-menu-item index="1-3">重点关照</el-menu-item>&ndash;&gt;-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-menu-item index="2" @click="Gps">-->
<!--            <i class="el-icon-location"></i>-->
<!--            <span slot="title" >GPS管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-submenu  index="3">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-s-order"></i>-->
<!--              <span>订单管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <el-menu-item index="3-1" @click='NewOrder'>最新订单</el-menu-item>-->
<!--              <el-menu-item index="3-2" @click="Order">已派出订单</el-menu-item>-->
<!--              <el-menu-item index="3-3">已完成订单</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-submenu  index="4">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-box"></i>-->
<!--              <span>任务管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <el-menu-item index="3-1">已派出任务</el-menu-item>-->
<!--              <el-menu-item index="3-2">已完成任务</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-menu-item index="5">-->
<!--            <i class="el-icon-s-check"></i>-->
<!--            <span slot="title">审批管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="6">-->
<!--            <i class="el-icon-message-solid"></i>-->
<!--            <span slot="title">公告管理</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="7">-->
<!--            <i class="el-icon-s-data"></i>-->
<!--            <span slot="title">数据统计</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item >-->

<!--          </el-menu-item>-->

<!--          <el-image src="../assets/logo1.png"></el-image>-->
<!--          <el-menu-item index="8">-->
<!--            <i class="el-icon-s-flag"></i>-->
<!--            <span slot="title">车辆审批</span>-->
<!--          </el-menu-item>-->
<!--          <el-submenu index="/home">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span>备案表的管理</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <el-menu-item index="/AdministratorRecordForm" @click='AdministratorRecord'>管理员备案</el-menu-item>-->
<!--              <el-menu-item index="/home/OtherRecordForm" @click='OtherRecordForm'>其他</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
        </el-menu>
        <el-main style="width:80%">
          <router-view/>
        </el-main>
    
        
      </el-container>

<!--    <img src="../assets/logo1.png"  class="fixed" height="120" width="240"/>-->
  
  </div>
</template>

<script>
import AboutUser from '@/components/AboutUser.vue'
export default {
  name :"About",
  components: {
    AboutUser
  },
  data() {
return {
  power:'show'   //权限的显示与隐藏  //需要把这个参数传递给登录页面
  
}
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      AboutUser() {
        this.$router.push('/home/AboutUser')
      },
      AdministratorRecord() {
        this.$router.push('/home/AdministratorRecordForm')
      },
      OtherRecordForm() {
        this.$router.push('/home/OtherRecordForm')
      },
    //跳转到小程序用户页面
    AppletUser(){
      this.$router.push('/home/AppletUser')
    },

    BackgroundUser(){
      this.$router.push('/home/BackgroundUser')
    },
    Gps(){
      this.$router.push('/home/Gps')
    },
    NewOrders(){
      this.$router.push('/home/NewOrders')
    },
    Order(){
      this.$router.push('/home/Order')
    },

    Notice(){
      this.$router.push('/home/Notice')
    },
    CompleteOrder(){
      this.$router.push('/home/CompleteOrder')
    },
    RejectOrder(){
      this.$router.push('/home/RejectOrder')
    },
    TaskCompleted(){
      this.$router.push('/home/TaskCompleted')
    },
    MissionOn(){
      this.$router.push('/home/MissionOn')
    },
    SendTask(){
      this.$router.push('/home/SendTask')
    },
    OnAccess(){
      this.$router.push('/home/OnAccess')
    },
    Car(){
      this.$router.push('/home/Car')
    },
    QuantitativeStatistics(){
      this.$router.push('/home/QuantitativeStatistics')
    },
    TrainStatistics(){
      this.$router.push('/home/TrainStatistics')
    },
    DriverStatistics(){
      this.$router.push('/home/DriverStatistics')
    },

    // 获取后台数据
      logoutHandle() {
        this.$axios.get('http://192.168.1.110:8084/FamilyInfo/selectAllInfo').then(function(res){
          console.log(res)
        }).catch(function(err){
          console.log(err)
        })
      }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
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
.about {
  width: 100%;
  height: 100vh;
  background-color:#f3f0f3;
}
.el-header
 {
  height:80px!important;
  line-height:100px;
}
.left img{
  margin-top:10px;
  margin-left:20px;
}
.right{
  height: 80px;
  margin-right:40px;
}
.right span ,.right i{
  display: inline-block;
  height:80px;
  line-height:80px;
  vertical-align: top;

}
.right span{
  padding:0 10px;
  box-sizing: border-box;
}
.right .line{
  display: inline-block;
  width:1px;
  height:27px;
  background:#fff;
margin-top:25px;
  margin-left:15px;
  margin-right:15px;

}
.right img{
  margin-top:10px;
  margin-left:30px;
}
.el-menu-vertical-demo {
  width: 240px;
}
.bgred {
  overflow: hidden;
  background-color: #19367B;
  color:#fff;
  margin-bottom:40px;
}
.el-menu{
  width:240px;
  border-radius: 0 80px 0 0;
  font-size:32px;
  font-weight:700;
}

.el-menu-item-group{
  text-align: left;
}
.public{
  padding-left:90px!important;
  box-sizing: border-box;
}
.sideHeight {
  height: calc(100vh - 140px);
}
.el-submenu-one{
  padding-top:80px;
  box-sizing: border-box;
}
.el-icon-arrow-down{
  font-size:15px;
  font-weight:700;
}

  .fixed{
    position: fixed;
    bottom:0;
  }

</style>
