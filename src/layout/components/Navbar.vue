<template>
  <div class="navbar">
    <div class="hamburger-container">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="right-nav-bar">
      <el-dropdown class="username-container" trigger="click">
        <div class="username-container">
          <span style="cursor: pointer">中文</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <div class="center">中文简体</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">English</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <full-screen class="right-menu-item"></full-screen>
      <el-dropdown class="username-container" trigger="click">
        <div class="username-container">
          <img class="userImg" src="@/assets/userImg.png" />
          <span style="cursor: pointer">超级管理员</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <div class="center">个人中心</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">修改密码</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">退出登录</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import FullScreen from '@/components/FullScreen'
export default {
  name: 'Navbar',
  components: {
    FullScreen
  }
}
</script>

<style lang="sass" scoped>
.navbar
  height: 50px
  overflow: hidden
  position: relative
  background: #fff
  box-shadow: 0 1px 4px rgba(0,21,41,.08)
  .hamburger-container
    line-height: 46px
    height: 100%
    float: left
    cursor: pointer
    -webkit-transition: background 0.3s
    transition: background 0.3s
    -webkit-tap-highlight-color: transparent
    padding: 0px 15px
    font-size: 18px
    &:hover
      background: rgba(0, 0, 0, 0.025)
  .right-nav-bar
    position: absolute
    right: 0px
    top: 0px
    height: 100%
    .right-menu-item
      display: inline-block
      padding: 0 8px
      height: 100%
      font-size: 18px
      color: #5a5e66
      line-height: 50px
      vertical-align: text-bottom
      &:hover
        background: rgba(0, 0, 0, 0.025)
        transition: background .3s
        cursor: pointer
    .username-container
      display: flex
      justify-content: center
      align-items: center
      height: 50px
      float: left
      padding: 0 10px
      outline: none
      &:hover
        background: rgba(0, 0, 0, 0.025)
        transition: background .3s
        cursor: pointer
      .userImg
        width: 26px
        height: 26px
        margin-right: 5px
        border-radius: 50%
</style>
