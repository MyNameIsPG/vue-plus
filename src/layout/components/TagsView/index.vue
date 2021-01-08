<template>
  <div class="tags-view-container">
    <scroll-pane>
      <span
        v-for="item in affixTags"
        :key="item.path"
        :class="[item.path === $route.path ? 'active' : '']"
        class="tags-view-item"
        @click="openMenu(item.path)"
      >
        {{ item.name }}
      </span>
      <span
        v-for="item in visitedViews"
        :key="item.path"
        :class="[item.path === $route.path ? 'active' : '']"
        class="tags-view-item"
        @click="openMenu(item.path)"
      >
        {{ item.name }}
        <span class="el-icon-close"></span>
      </span>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane.vue'
import menus from '@/layout/menus'
import { mapGetters } from 'vuex'
export default {
  name: 'TagsView',
  components: {
    ScrollPane
  },
  data() {
    return {
      affixTags: []
    }
  },
  mounted() {
    this.initTags()
  },
  // watch: {
  //   $route() {
  //     this.addTags()
  //   }
  // },
  computed: {
    ...mapGetters(['visitedViews'])
  },
  methods: {
    initTags: function() {
      this.filterAffixTags(menus)
    },
    filterAffixTags: function(routes) {
      routes.forEach(route => {
        if (route.affix) {
          this.affixTags.push({
            path: route.path,
            name: route.name
          })
        }
        if (route.children) {
          this.filterAffixTags(route.children)
        }
      })
    },
    addTags() {
      const { path } = this.$route
      const tag = this.queryFindTagData(menus, path)
      this.$store.dispatch('tagsView/addVisitedView', tag)
    },
    openMenu(path) {
      this.$router.push({ path: path })
    },
    queryFindTagData(menus, path) {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
          return {
            path: menus[i].path,
            name: menus[i].name
          }
        } else if (menus[i].children) {
          const tag = this.queryFindTagData(menus[i].children, path)
          if (tag) {
            return tag
          }
        }
      }
      return {}
    }
  }
}
</script>

<style lang="sass" scoped>
.tags-view-container
  height: 34px
  width: 100%
  background: #fff
  border-bottom: 1px solid #d8dce5
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04)
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
