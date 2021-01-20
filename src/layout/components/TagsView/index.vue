<template>
  <div class="tags-view-container">
    <div class="tags-item-container">
      <scroll-pane>
        <span
          v-for="item in visitedViews"
          :key="item.path"
          class="tags-view-item"
          :class="[item.path === $route.path ? 'active' : '']"
          @click="openMenu(item.path)"
        >
          {{ item.name }}
          <span class="el-icon-close" v-if="!item.affix" @click.prevent.stop="closeMenu(item)"></span>
        </span>
      </scroll-pane>
    </div>
    <div class="tags-more-container">
      <el-dropdown size="small" trigger="click">
        <div class="username-container">
          <span style="cursor: pointer; font-size: 13px;">更多<i class="el-icon-arrow-down"></i></span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <div class="center">关闭其它</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">关闭左侧</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">关闭右侧</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">全部关闭</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane.vue'
import menus from '@/layout/menus'
import { useStore } from 'vuex'
import { defineComponent, computed, onBeforeMount } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
export default defineComponent({
  name: 'TagsView',
  components: {
    ScrollPane
  },
  setup: function() {
    const router = useRouter()
    const store = useStore()
    const route = useRoute()
    function initTags() {
      filterAffixTags(menus, route.path)
    }
    function filterAffixTags(routes, path) {
      routes.forEach(route => {
        if (route.affix || route.path === path) {
          store.dispatch('tagsView/addVisitedView', {
            path: route.path,
            name: route.name,
            affix: route.affix
          })
        }
        if (route.children) {
          filterAffixTags(route.children, path)
        }
      })
    }
    function addTags(path) {
      const tag = queryFindTagData(menus, path)
      store.dispatch('tagsView/addVisitedView', tag)
    }
    function queryFindTagData(menus, path) {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
          return {
            path: menus[i].path,
            name: menus[i].name,
            affix: menus[i].affix
          }
        } else if (menus[i].children) {
          const tag = queryFindTagData(menus[i].children, path)
          if (tag) {
            return tag
          }
        }
      }
    }
    function openMenu(path) {
      router.push(path)
    }
    function closeMenu(view) {
      store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        toLastView(visitedViews, view)
      })
    }
    function toLastView(visitedViews) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        router.push(latestView.path)
      } else {
        router.push('/')
      }
    }
    onBeforeMount(() => {
      initTags()
    })
    onBeforeRouteUpdate((to) => {
      addTags(to.path)
    })
    return {
      openMenu,
      closeMenu,
      visitedViews: computed(() => store.state.tagsView.visitedViews)
    }
  }
})
</script>

<style lang="sass" scoped>
.tags-view-container
  height: 34px
  width: 100%
  background: #fff
  border-bottom: 1px solid #d8dce5
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04)
  display: flex
  .tags-item-container
    width: calc(100% - 60px)
    height: 100%
  .tags-more-container
    flex: 0 0 60px
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    font-size: 13px
  .tags-view-item
    display: inline-block
    position: relative
    cursor: pointer
    height: 26px
    line-height: 26px
    border: 1px solid #d8dce5
    color: #495060
    background: #fff
    padding: 0 8px
    font-size: 12px
    margin-left: 5px
    margin-top: 4px
    &.active
      background-color: #42b983
      color: #fff
      border-color: #42b983
      &:before
        content: ""
        background: #fff
        display: inline-block
        width: 8px
        height: 8px
        border-radius: 50%
        position: relative
        margin-right: 2px
    &:last-of-type
      margin-right: 15px
    &:first-of-type
      margin-left: 15px
    .el-icon-close
      border-radius: 50%
      text-align: center
      transition: all .3s cubic-bezier(.645,.045,.355,1)
      transform-origin: 100% 50%
</style>
