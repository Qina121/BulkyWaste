<template>
    <div id="order-detail">
        <div class="message">
            <span>订单编号&nbsp:&nbsp</span>
            <span>0001</span>

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

</template>
<script></script>
<style scoped>
    #order-detail{
        width:800px;
        hieght:calc(100hv-140px);
        background:#eee;
        padding:40px;
        border-radius: 10px;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        left:450px;

    }
    .message{
        width:800px;
        height:30px;
        line-height:30px;
        font-size:20px;
        font-weight: 700;
        color:#b8b6b9;
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

