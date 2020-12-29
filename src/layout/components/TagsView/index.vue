<template>
  <div class="tags-view-container">
    <scroll-pane>
      <span class="tags-view-item" v-for="item in 30" :key="item">
        首页{{item}}
        <span class="el-icon-close"></span>
      </span>
        <span class="tags-view-item active">
        首页
        <span class="el-icon-close"></span>
      </span>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from './ScrollPane.vue'
export default {
  name: 'TagsView',
  components: {
    ScrollPane
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
