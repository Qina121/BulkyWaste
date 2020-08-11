<template>
    <div id="notice">
        <el-button type="primary" class="button" @click="changeisShow">添加公告</el-button>
        <!--    列表-->
        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.title.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%" max-height="480">
            <el-table-column
                    label="序号"
                    prop="id" align="center" width="80">
            </el-table-column>
            <el-table-column
                    label="发布时间"
                    prop="date1" align="center" width="180">
            </el-table-column>
            <el-table-column
                    label="创建时间"
                    prop="date2" align="center" width="180">
            </el-table-column>
            <el-table-column
                    label="标题"
                    align="center">
                <template slot-scope="scope">
                    <el-tooltip placement="top" >
                        <div slot="content">{{ scope.row.title }}</div>
                        <span  class="title">{{ scope.row.title }}</span>
                    </el-tooltip>
                </template>
            </el-table-column>
            <el-table-column
                    label="发布人"
                    prop="name" align="center" width="80">
            </el-table-column>
            <el-table-column
                    label="浏览量"
                    prop="pageview" align="center" width="80">
            </el-table-column>
            <el-table-column
                    align="center">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
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
<!--        分页-->
        <el-pagination  class="button"
                background
                layout="total,prev, pager, next,jumper"
                :total="tableData.length"
                :page-size="pagesize"
                        :pager-count="5"
                        :current-page="currentPage"
                        @current-change="handleCurrentChange"
                                   >
        </el-pagination>
        <!--    //添加公告-->
        <div id="add-notice" v-show="isShow">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="发布作者" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="创建时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="发布时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="发布内容" prop="desc" >
                    <el-input  type="textarea" v-model="ruleForm.desc" ></el-input>
                </el-form-item>
                <el-form-item label="上传图片" prop="file">
                    <el-upload
                            limit="3"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" >
                        <img width="100%" :src="dialogImageUrl" alt="用户图片" >
                    </el-dialog>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
<!--        //编辑页面-->
        <div id="edit-notice" v-show="isShowEdit">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题名称" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="发布作者" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="创建时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="发布时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="发布内容" prop="desc" >
                    <el-input  type="textarea" v-model="ruleForm.desc" ></el-input>
                </el-form-item>
                <el-form-item label="上传图片" prop="file">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                // 列表
                tableData: [{
                    id:'001',
                    date1: '2016-05-02 12:12:12',  //发布时间
                    date2: '2016-05-02 12:12:12',  //创建时间
                    title: '放假通知',
                    name: '王小虎',   //作者
                    pageview:'50'   //浏览量
                }, {
                    id:'001',
                    date1: '2016-05-02 12:12:12',
                    date2: '2016-05-02 12:12:12',
                    title: '放假通知',
                    name: '王小虎',
                    pageview:'50'
                }, {
                    id:'001',
                    date1: '2016-05-01 12:12:12',
                    date2: '2016-05-02 12:12:12',
                    title: '呵呵呵呵',
                    name: '王小虎',
                    pageview:'50'
                },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-01 12:12:12',
                        title: '放假通知',
                        name: '张三',
                        pageview:'50'
                    },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-02 12:12:12',
                        title: '放假通知',
                        name: '王小虎',
                        pageview:'50'
                    },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-02 12:12:12',
                        title: '放假通知',
                        name: '王小虎',
                        pageview:'50'
                    },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-02 12:12:12',
                        title: '放假通知',
                        name: '张三',
                        pageview:'50'
                    },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-02 12:12:12',
                        title: '放假通知放假通知放假通知放假通知放假通知放假通知放假通知',
                        name: '王小虎',
                        pageview:'50'
                    },
                    {
                        id:'001',
                        date1: '2016-05-02 12:12:12',
                        date2: '2016-05-02 12:12:12',
                        title: '放假通知',
                        name: '王小虎',
                        pageview:'50'
                    }],
                search: '',

                // add公告
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入发布人姓名', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动内容', trigger: 'blur' }
                    ]
                },
                dialogImageUrl: '',
                dialogVisible: false,
                isShow:false,
                isShowEdit:false,
                pagesize:8,
                currentPage:1


            };
        },
        methods: {
            //列表
                handleEdit(index, row) {
                    console.log(index, row);
                    this.isShowEdit = !this.isShowEdit;//取反

                },
                handleDelete(index, row) {
                    console.log(index, row);

                },

            //add提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            //图片上传

            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            //显示与隐藏
            changeisShow : function(){
                this.isShow = !this.isShow;//取反
            },

            //分页
            handleCurrentChange(val){
                this.currentPage = val;
            }

        }
    }

</script>
<style scoped>
    #notice{
        height:700px;
        margin-left:40px;
        margin-right:40px;
        position: relative;
    }
    #add-notice, #edit-notice{
        width:720px;
        /*height:600px;*/
        background:#eee;
        margin:0 auto;
        padding:40px;
        box-sizing: border-box;
        box-shadow: inset 0px 0px 10px #19367B;
        position: absolute;
        top:0;
        left:50%;
        margin-left:-360px;
    }

    .title{
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .button{
        margin-bottom:20px;
    }
    .line{
        text-align:center;
    }

    .avatar-uploader /deep/ .el-upload--picture-card {
        height: 100px;
        width: 100px;
    }

    .button el-pagination is-background /deep/ {
        height: 100px;
        width: 100px;
    }
    .button{
        margin-top:20px;
        text-align: center;
    }
</style>