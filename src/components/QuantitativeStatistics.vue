<template>
    <div id="train">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">实时数据</el-menu-item>
            <el-menu-item index="2">周统计</el-menu-item>
            <el-menu-item index="3">月统计</el-menu-item>
        </el-menu>
        <div class="line"></div>

        <div class="echart-box">
            <div id="myChart" :style="{width: '800px', height: '500px'}"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                // 图标
                activeName: 'second'
            };
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            // 切换
            handleSelect(key) {
                console.log(key);
            },
            // 图表
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '量(方)统计' },
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        name:'时间',
                        boundaryGap: false,
                        data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00']
                    },
                    yAxis: {
                        name:'总量(方)',
                        type: 'value'
                    },
                    series: [{
                        data: ['0', '0', '0', '0', '4', '10', '30', '50.5', '80.23', '100.23'],
                        type: 'line',
                        areaStyle: {}
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    #train{
        width:calc(100vh-320);
        height:calc(100vh-160);
        margin:0 40px;
        text-align: center;
    }
    .el-menu{
        background:transparent!important;
    }
    .is-active{
        color:#409eff!important;
        background:transparent!important;
    }
    .line{
        height:2px;
    }
    .echart-box{
        width:800px;
        height:500px;
        margin-top:50px;
        display: inline-block;

    }

</style>