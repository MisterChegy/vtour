<template>
    <div class="task-list-header">
        <span>课时总数</span>
        <div class="addButton">
          <el-button type="success">添加课时</el-button>

          <el-button type="info">批量添加</el-button>
          <!-- <el-button type="info">添加章/节
            <span class="iconfont arrow-icon">&#xe600;</span>
          </el-button> -->
          <el-dropdown >
            
            <el-button type="primary">
              添加章/节<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加章</el-dropdown-item>
              <el-dropdown-item>添加节</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.addButton {
    float: right;
    margin-left: 4rem;
}
.task-list-header {
    position: relative;
    margin-bottom: 24px;
    padding: 0 6px 0 24px;
    width: 100%;
    height: 56px;
    line-height: 56px;
    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,.02), 0 0 2px 0 rgba(0,0,0,.04), 0 2px 2px 0 rgba(0,0,0,.06);
    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,.02),0 0 2px 0 rgba(0,0,0,.04),0 2px 2px 0 rgba(0,0,0,.06);
    box-shadow: 0 0 2px 0 rgba(0,0,0,.02), 0 0 2px 0 rgba(0,0,0,.04), 0 2px 2px 0 rgba(0,0,0,.06);
    color: rgba(0,0,0,.56);
    font-size: 14px;
}
.el-dropdown {
    vertical-align: top;
  }
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>