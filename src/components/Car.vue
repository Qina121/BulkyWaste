<template>
    <div id="car">
        <div class="zhezhao" v-show="iszhezhao"></div>
        <el-button type="primary" class="button" @click="changeisShow">添加信息</el-button>
        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"    max-height="440">

            <el-table-column
                    fixed
                    type="selection"
                    width="55"
                    align="center">
            </el-table-column>
            <el-table-column
                    label="时间"
                    prop="date" align="center">
            </el-table-column>
            <el-table-column
                    label="车牌号"
                    prop="car" align="center">
            </el-table-column>
            <el-table-column
                    label="司机姓名"
                    prop="name" align="center">
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
        <div class="fenye">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    page-size="8"
                    hide-on-single-page="ture"
                    :total="tableData.length">
            </el-pagination>
        </div>
        <div class="add" v-show="isShow">
            <i class="el-icon-close" @click="change"></i>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="车牌" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="京A12345" value="shanghai"></el-option>
                        <el-option label="京B12345" value="beijing"></el-option>
                        <el-option label="京C12345" value="shanghai"></el-option>
                        <el-option label="京D12345" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="添加时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="edit" v-show="isEdit">
            <i class="el-icon-close" @click="changeisEdit"></i>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="车牌" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="京A12345" value="shanghai"></el-option>
                        <el-option label="京B12345" value="beijing"></el-option>
                        <el-option label="京C12345" value="shanghai"></el-option>
                        <el-option label="京D12345" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="添加时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
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
                tableData: [{
                    date: '2016-05-02',
                    car:'京A123456',
                    name: '王小虎'
                }, {
                    date: '2016-05-04',
                    car:'京A5555',
                    name: '张三'
                }, {
                    date: '2016-05-01',
                    car:'京A5555',
                    name: '王小虎'

                }, {
                    date: '2016-05-03',
                    car:'京A66555',
                    name: '李四'

                }],
                search: '',
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择车牌号', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ]

                },
                isShow:false,
                iszhezhao:false,
                isEdit:false
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                this.isEdit = !this.isEdit;//取反
                this.iszhezhao= !this.iszhezhao
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            //表单
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

            //显示与隐藏
            changeisShow : function(){
                this.isShow = !this.isShow;//取反
                this.iszhezhao= !this.iszhezhao
            },
            change:function(){
                this.isShow = !this.isShow;//取反
                this.iszhezhao= !this.iszhezhao
            },
            changeisEdit:function(){
                this.isEdit = !this.isEdit;//取反
                this.iszhezhao= !this.iszhezhao
            }

        },
    }
</script>
<style scoped>
    #car{
        width:calc(100vh-280px);
        height:650px;
        margin-left:40px;
        margin-right:40px;
        margin-bottom:40px;
        position: relative;
    }
    .fenye{
        margin-top:30px;
        text-align: center;
        background:red;
    }
    .el-icon-close{
        height:30px;
        line-height:30px;
        font-size:30px;
        color:blue;
        font-weight: 700;
        float: right;
        margin-top:-30px;
        margin-bottom:10px;

    }

    .button{
        margin-bottom:20px;
    }

    .add ,.edit{
        width:450px;
        height:300px;
        box-shadow:inset 0px 0px 3px blue;
        position: absolute;
        top:60px;
        left:50%;
        margin-left:-200px;
        background:#fff;
        padding-top:40px;
        padding-right:30px;
        box-sizing: content-box;
        z-index:100;
    }
    .zhezhao{
        width:100%;
        height:100%;
        position:absolute;
        background:rgba(0,0,0,.3);
        z-index:10;
    }
</style>
