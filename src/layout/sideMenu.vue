<template>
  <div style="width: 256px">
    
    <a-menu
    :theme="theme"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      :inlineCollapsed="true"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{item.meta.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path"/>
      </template>
    </a-menu>
  </div>
</template>

<script>
/* 
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './subMenu'
export default {
  components: {
    'sub-menu': SubMenu,
  },
  props:{
      theme:{
          type:String,
          default:"dark"
      }
  },
  data () {
    return {
      list: [],
    }
  },
  mounted(){
     this.list= this.getMenuData(this.$router.options.routes)
  },
  methods: {
      getMenuData(routes){
          const menuData=[];
          routes.forEach(item=>{
             
              if(item.name && !item.hideInMenu){    //如果路径上name有值并且可以在菜单显示
                const newItem={...item}                //把item复制一份出来
                delete newItem.children;
                if(item.children && !item.hideChildren){
                    newItem.children=this.getMenuData(item.children)
                }
                menuData.push(newItem)
              }else if(!item.hideInMenu && !item.hideChildren && item.children){
                  menuData.push(...this.getMenuData(item.children))
              }
          })
        return menuData;
      }
  },
}
</script>
