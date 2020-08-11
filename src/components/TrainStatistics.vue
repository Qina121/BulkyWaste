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
                    title: { text: '车次统计' },
                    tooltip: {},
                    xAxis: {
                        name:'车牌号',
                        type: 'category',
                        data: ['京A12345', '京B12345', '京C12345', '京D12345', '京E12345', '京F12345', '京H12345']
                    },
                    yAxis: {
                        name:'订单量',
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
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