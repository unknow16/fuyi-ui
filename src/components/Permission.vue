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
                            width="100" 
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
                {{scope.row.locked === 0 ? '锁定' : '正常'}}
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
                            :page-size="size" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <!-- 对话框 -->
        <el-dialog :title="form && form.id ? '编辑':'新增'" :visible.sync="formVisible" :close-on-click-modal="false">
            <el-form :model="form" label-width="100px" :rules="rules" ref="form">
                <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username" />
                </el-form-item>

                <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="form.sex">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                </el-radio-group>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="formVisible = false">取消</el-button>
                <el-button type="primary" @click.native="handleSubmit" :loading="formLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
export default {
    
}
</script>

