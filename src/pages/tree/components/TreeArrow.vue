<template>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <i class="iconfont append-icon">&#xe621;</i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>添加节</el-dropdown-item>
                <el-dropdown-item>添加课时</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
export default {
    props: {
        cities: Object
    },
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>