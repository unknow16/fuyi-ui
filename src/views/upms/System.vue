<template>
    <section>
        <!-- 工具条 -->
        <el-col :span="24" class="toolbar" >
            <el-form :inline="true" :model="filters" style="float: left; margin-top: 15px">
                
                <el-form-item>
                    <el-input v-model="filters.query" placeholder="系统标题/系统名称等条件" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" v-on:click="handleQuery" icon="el-icon-search">查询</el-button>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" v-on:click="handleAdd" icon="el-icon-plus">新增系统</el-button>
                </el-form-item>

            </el-form>
        </el-col>

        <!-- 表格  :height="clientHeight"-->
        <el-table :data="rows" 
                style="width: 100%; overflow: auto;" 
                
                stripe border highlight-current-row 
                v-loading="pageLoading">
            <el-table-column prop="systemId" 
                            label="编号" 
                            width="80" 
                            :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="icon" 
                            label="图标" 
                            width="80" 
                            :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <i :class="scope.row.icon"></i>
                </template>
            </el-table-column>
            <el-table-column prop="title" 
                            label="系统标题" 
                            width="150" 
                            :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="name" 
                            label="系统名称" 
                            width="200" 
                            :show-overflow-tooltip="true">
            </el-table-column>      
            <el-table-column prop="basepath" 
                            label="根目录" 
                            width="300" 
                            :show-overflow-tooltip="true">
            </el-table-column> 
            <el-table-column prop="name" 
                            label="状态" 
                            width="80" 
                            :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    {{scope.row.status === 1 ? '正常' : '失效'}}
                </template>
            </el-table-column>       

            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    
                </template>
            </el-table-column>
        </el-table>

        <!-- 底部 -->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" 
                           :current-page="page" :page-size="size" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <!-- 对话框 -->
        <el-dialog :title="form && form.userId ? '编辑':'新增'" :visible.sync="formVisible" :close-on-click-modal="false">
            <el-form :model="form" label-width="100px" :rules="rules" ref="form">
                
                <el-form-item label="系统标题" prop="title">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="系统名称" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="根目录" prop="basepath">
                    <el-input v-model="form.basepath" />
                </el-form-item>
                <el-form-item label="图标" prop="icon">
                    <el-input v-model="form.icon" />
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-radio-group v-model="form.status">
                        <el-radio :label="1">正常</el-radio>
                        <el-radio :label="0">失效</el-radio>
                    </el-radio-group>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="formVisible = false">取消</el-button>
                <el-button type="primary" @click.native="handleSubmit('form')" :loading="formLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>

import {getList, add, update, dels} from '@/api/upms/system'

const rules = {
  title: [{
    required: true,
    message: '请输入系统标题',
    trigger: 'blur'
  }],
  name: [{
    required: true,
    message: '请输入系统名称',
    trigger: 'blur'
  }]
}

let data = () => {
  return {
    page: 1, //页码
    size: 10, //每页数量
    total: 0,  //总数
    filters: {query: ''}, //查询条件
    rows: [], //页面数据
    pageLoading: false, //页面载入状态
    clientHeight: '100%',  //列表高度
    form: {},  //表单数据
    rules: rules, //验证规则
    formVisible: false, //对话框隐藏状态
    formLoading: false  //表单提交状态
  }
}

let handleQuery = function() {
  this.page = 1
  this.getRows()
}

let handleAdd = function() {
  this.form = {}
  this.form.sex = 1
  this.formVisible = true
}

let handleEdit = function(index, row) {
  console.log(index, row);
  
  this.form = Object.assign({}, row)
  this.formVisible = true
}

let handleDelete = function(index, row) {
    console.log(index, row);

    if (this.pageLoading)
        return
  
  this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    this.pageLoading = true
    new Promise((resolve, reject) => {
        dels(row.systemId).then(resp => {
            this.pageLoading = false

            this.page = 1
            this.getRows()
        })
    }).catch((error) => {
        reject(error)
    })
  })
}

let handleSubmit = function(formName) {
    if(this.formLoading)
        return true

    this.$refs[formName].validate((valid) => {
      if(!valid)
        return
        
        if(this.form.systemId) {
            
            new Promise((resolve, reject) => {
                update(this.form.systemId, this.form).then( response => {
                    this.formLoading = false
                    this.page = 1
                    this.getRows()
                    this.formVisible = false
                })
            }).catch(error => {
                reject(error)
            })

        } else {
            
            new Promise((resolve, reject) => {
                add(this.form).then( response => {
                    this.formLoading = false
                    this.page = 1
                    this.getRows()
                    this.formVisible = false
                })
            }).catch(error => {
                reject(error)
            })
        }

    })
}

let getRows = function() {
    var _this = this;
    this.rows = [];

    if(this.pageLoading) 
    return;

    this.pageLoading = true;
    new Promise((resolve, reject) => {
        getList(_this.page, _this.size, _this.filters.query).then(response => {  
            this.pageLoading = false;      
            this.total = response.total;
            this.rows = response.rows;
            resolve()
        }).catch(error => {
            reject(error)
        })
    })
}

let handleCurrentChange = function(val) {
  console.log(val);
  this.page = val;
  this.getRows();
}

let initHeight = function() {
  this.clientHeight = (document.documentElement.clientHeight - 258) + 'px';
}

export default {
  data: data,
  methods: {
    handleEdit,  //修改
    getRows, //获取分页
    handleCurrentChange,  //页数改变
    handleQuery,  //查询
    initHeight, //初始化高度
    handleAdd,  //添加
    handleSubmit, //提交
    handleDelete //删除
  },
  mounted: function() {
    //window.addEventListener('resize', this.initHeight)
    //this.initHeight()
    this.getRows()
  }
}
</script>


