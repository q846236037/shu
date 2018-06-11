<template>
  <div id="app">
    <tree :set-tree='treeData' @add-node-top="addTopHandle" @add-node="addHandle" @edit-pass="editHandle" @del-node="delHandle" @handle-click="clickFn"></tree>
  </div>
</template>
<script>
import tree from "@/components/treeMenu"
import api from '@/resource/api'
export default {
  name: 'App',
  data(){
    return {
      treeData:api.treelist
    }
  },
  methods:{
    clickFn(param){
      console.log('p>',param)
    },
    addTopHandle(resovle){
       setTimeout(() => {
        resovle({
              id: 12,
              name: '新增顶级节点',
              pid: "",
              isEdit: false,
              children: []
            })
      }, 1000)
    },
    addHandle(param,resovle){
      console.log('addHandle', param)
      setTimeout(() => {
        resovle({
              id: 12,
              name: '新增节点',
              pid: 37,
              isEdit: false,
              children: []
            })
      }, 1000)
    },
    delHandle(param,resovle){
      console.log('tag', param)
      setTimeout(() => {
        resovle()
      }, 1000)
    },
    editHandle(param,resolve){
      console.log('edit',param)
      setTimeout(() => {
        resolve()
      }, 1000)
    }
  },
  components:{
    tree
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
