<template>
  <div>
      <tree-header/>

    <!-- <el-tree :data="data" node-key="id"
    :default-expand-all="true" :props="defaultProps" :expand-on-click-node="false"></el-tree> -->
    <el-tree
      :data="data"
      node-key="id"
      :props="defaultProps"
      :expand-on-click-node="false"
      default-expand-all
      @node-drag-start="handleDragStart"
      @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave"
      @node-drag-over="handleDragOver"
      @node-drag-end="handleDragEnd"
      draggable
      :allow-drop="allowDrop"
      :allow-drag="allowDrag">
      <!-- v-if="data.type != 'lesson'" -->
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <div>
          <span>{{ node.label }}</span>
          <span>{{ data.type }}</span>
          
          <span>
          
            <el-dropdown v-if="data.type != 'lesson'">
              <span class="el-dropdown-link">
                  <i class="iconfont append-icon">&#xe621;</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-if="data.type == 'chapter'">添加节</el-dropdown-item>
                  <el-dropdown-item >添加课时</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown v-if="data.type != 'lesson'">
              <span class="el-dropdown-link">
                  <i class="iconfont append-icon">&#xe6ee;</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>重命名</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
              
            </el-dropdown>

            <el-dropdown v-if="data.type == 'lesson'">
              <span class="el-dropdown-link">
                  <i class="iconfont append-icon">&#xe601;</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >编辑任务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown v-if="data.type == 'lesson'">
              <span class="el-dropdown-link">
                  <i class="iconfont append-icon">&#xe633;</i>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >预览任务</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <el-dropdown v-if="data.type == 'lesson'">
              <span class="el-dropdown-link">
                  <i class="iconfont append-icon">&#xe6ee;</i>
              </span>
              <el-dropdown-menu slot="dropdown" placement='bottom-end'>
                  <el-dropdown-item>发布课时</el-dropdown-item>
                  <el-dropdown-item>设置选修</el-dropdown-item>
                  <el-dropdown-item>删除课时</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </div>
        
      </span>
    </el-tree> 

  </div>
</template>

<script>
import axios from 'axios'
import TreeHeader from './components/TreeHeader'

export default {
    components: {
      TreeHeader
    },
    data() {
      return {
        data: [],
        defaultProps: {
          id: "id",
          children: "children",
          label: "title",
          type: "type"
        },

      }
    },
    mounted(){
      this.getTreeInfo();
    },
    methods: {
      getTreeInfo () { 
            axios.get('/api/tree.json')
                .then(resp=>{
                  console.log(resp.data);
                  this.data = resp.data.data;
                })
      },
      handleDragStart(node, ev) {
        console.log('drag start', node.data);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        // 拖拽时判定目标节点能否被放置。type 参数有三种情况：
        // 'prev'、'inner' 和 'next'，
        // 分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
        // if (dropNode.data.label === '二级 3-1') {
        //   return type !== 'inner';
        // } else {
        //   return true;
        // }
        console.log('type = ',type);
        console.log('draggingNode.data = ',draggingNode.data);
        console.log('dropNode.data.titile = ',dropNode.data.title);

        if((draggingNode.data.type == 'unit' && dropNode.data.type == 'lesson') ||  
        dropNode.data.type == 'lesson' || 
        dropNode.data.type == draggingNode.data.type || 
        draggingNode.data.type == 'chapter'){

            return type != 'inner';
        }
        
        return true;
      },
      allowDrag(draggingNode) {
        //判断节点能否被拖拽

        return true;
      },
      append(data) {
        // const newChild = { id: id++, label: 'testtest', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },

      remove(node, data) {
        
      }
    }
}


</script>

<style>
.el-dropdown-link {
    cursor: pointer;
    color: #909399;
  }
.el-icon-arrow-down {
    font-size: 12px;
}


.el-tree-node {
    margin-top: 0.2rem;
}
.el-tree-node__content {
    width: 100%;
    height: 56px;
}
.custom-tree-node {
    margin-bottom: 15px;
    border: none;
    float: left;
    padding: 0 24px;
    width: 100%;
    height: 46px;
    line-height: 56px;
    background: #c43636;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: rgba(0,0,0,.88);
    /* overflow: hidden; */
}
</style>