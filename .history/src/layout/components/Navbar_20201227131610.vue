<template>
  <div class="navbar">
    <div class="hamburger-container">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="right-nav-bar">
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
export default {
  name: "Navbar"
};
</script>

<style lang="sass" scoped>
.navbar
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    padding: 0px 15px;
    font-size: 18px;
    &:hover
      background: rgba(0, 0, 0, 0.025);
  .right-nav-bar
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    .username-container
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      float: left;
      padding: 0 10px;
      outline: none;
      .userImg
        width: 26px;
        height: 26px;
        margin-right: 5px;
        border-radius: 50%;
</style>
