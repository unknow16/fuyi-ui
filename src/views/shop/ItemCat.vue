<template>
  <section>
    <el-tree :data="treeData" 
             :props="defaultProps" 
             node-key="id"
             show-checkbox
             @node-click="handleNodeClick">
    </el-tree>
  </section>
</template>

<script>

let data = () => {
  return {
    treeData: [],
    defaultProps: {children: 'children', label: 'text'}
  }
}

let handleNodeClick = (currentNodeData, currentNode, node) => {
  //currentNodeData.children = [{"id":1,"text":"aaa","children":[]},{"id":74,"text":"bbb","children":[]}];
  console.log(currentNodeData)
  console.log(currentNode)
  console.log(node)
}

export default {
  data: data,
  methods: {
    handleNodeClick
  },
  mounted: function() {
    this.treeData = [{"id":1,"text":"图书、音像、电子书刊","children":[{"id":1,"text":"aaa","children":[]},{"id":74,"text":"bbb","children":[]}]},{"id":74,"text":"家用电器","children":[]}];
  }
}
</script>

