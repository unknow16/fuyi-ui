<template>
    <section>
        <!-- 工具条 -->
        <el-col :span="24" class="toolbar" >
            <el-form :inline="true" :model="filters" style="float: left; margin-top: 15px">
                
                <el-form-item>
                    <el-input v-model="filters.query" placeholder="账号/姓名等条件" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" v-on:click="handleQuery" icon="el-icon-search">查询</el-button>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" v-on:click="handleAdd" icon="el-icon-plus">新增用户</el-button>
                </el-form-item>

            </el-form>
        </el-col>

        <!-- 表格  :height="clientHeight"-->
        <el-table :data="rows" 
                style="width: 100%; overflow: auto;" 
                
                stripe border highlight-current-row 
                v-loading="pageLoading">
            <el-table-column prop="userId" 
                            label="编号" 
                            width="80" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column prop="username" 
                            label="账号" 
                            width="100" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column prop="realname" 
                            label="姓名" 
                            width="200" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column prop="avatar" 
                            label="头像" 
                            width="180" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column prop="phone" 
                            label="电话" 
                            width="150" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column prop="email" 
                            label="邮箱" 
                            width="180" 
                            :show-overflow-tooltip="true">
            </el-table-column>

            <el-table-column label="性别" width="80" align="center" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                {{scope.row.sex === 1 ? '男':'女'}}
                </template>
            </el-table-column>

            <el-table-column label="状态" width="80" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                {{scope.row.locked === 1 ? '锁定' : '正常'}}
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">编辑用户</el-button>
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleOrganization(scope.$index, scope.row)">用户组织</el-button>
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleRole(scope.$index, scope.row)">用户角色</el-button>
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
        <el-dialog :title="form && form.userId ? '编辑用户':'新增用户'" :visible.sync="formVisible" :close-on-click-modal="false">
            <el-form :model="form" label-width="100px" :rules="rules" ref="form">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password" v-if="!(form && form.userId)">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item label="姓名" prop="realname">
                    <el-input v-model="form.realname" />
                </el-form-item>
                <el-form-item label="头像" prop="avatar">
                    <el-row>
                        <el-col :span="18">
                            <el-input v-model="form.avatar"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button type="success" @click.prevent="handleDelete(scope.$index, scope.row)">上传头像</el-button>
                        </el-col>
                    </el-row>
                    
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" />
                </el-form-item>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group v-model="form.sex">
                                <el-radio :label="1">男</el-radio>
                                <el-radio :label="2">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="状态" prop="locked">
                            <el-radio-group v-model="form.locked">
                                <el-radio :label="0">正常</el-radio>
                                <el-radio :label="1">锁定</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="formVisible = false">取消</el-button>
                <el-button type="primary" @click.native="handleSubmit('form')" :loading="formLoading">提交</el-button>
            </div>
        </el-dialog>

        <el-dialog  title="分配用户角色"
                    :visible.sync="userRoleVisible"
                    width="30%">
            
            <el-transfer v-model="userRoleList" :data="roleList" :props="roleProps"></el-transfer>

            <span slot="footer" class="dialog-footer">
                <el-button @click="userRoleVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleUserRoleSubmit">确 定</el-button>
            </span>
        </el-dialog>
        
    </section>
</template>

<script>

import {getList, addUser, updateUser, deleteUser} from '@/api/upms/user'

const rules = {
  username: [{
    required: true,
    message: '请输入账号',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }],
  realname: [{
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  }],
  phone: [{
    required: true,
    message: '请输入手机号',
    trigger: 'blur'
  }],
  email: [{
    required: true,
    message: '请输入邮箱',
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
    formLoading: false,  //表单提交状态
    userRoleVisible: false, // 分配用户角色对话框状态
    userRoleList: [],
    roleList: [],
    roleProps: {key: 'roleId', label: 'title'}
  }
}

let handleQuery = function() {
  this.page = 1
  this.getRows()
}

let handleAdd = function() {
  this.form = {}
  this.form.sex = 1
  this.form.locked = 0
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
        deleteUser(row.userId).then(resp => {
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
        
        if(this.form.userId) {
            
            new Promise((resolve, reject) => {
                updateUser(this.form.userId, this.form).then( response => {
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
                addUser(this.form).then( response => {
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

let handleOrganization = function() {

}

let handleRole = function() {
    this.userRoleVisible = true;

    this.pageLoading = true;
    this.getRequest('/manage/role/list?pageNum=0&pageSize=10').then(resp => {
        this.pageLoading = false;
        if(resp && resp.status == 200) {
            let data = resp.data;
            this.roleList = data.rows;
        }
    })

    let roles = this.$store.state.user.roles;
    roles.forEach(role => {
        this.userRoleList.push(role.roleId);
    });
}

let handleUserRoleSubmit = function() {
    this.userRoleVisible = false;

    this.pageLoading = true;
    this.postRequest4Json('manage/user/assignRoles', this.userRoleList).then(resp => {
        this.pageLoading = false;
    })
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
    handleDelete, //删除
    handleRole,
    handleUserRoleSubmit,
    handleOrganization
  },
  mounted: function() {
    this.getRows()
  }
}
</script>


