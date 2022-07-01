<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!-- 系统logo -->
      <div class="logo">
        <img src="./../assets/logo.png" alt="" />
        <span>manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu
        default-active="1"
        class="nav-menu"
        router
        background-color="#001529"
        text-color="#fff"
        :collapse="isCollapse"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Clock /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">用户管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Message /></el-icon>
            <span> 审批管理</span>
          </template>
          <el-menu-item index="2-1">休假申请</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div class="menu-fold" @click="toggle">
            <el-icon><Menu /></el-icon>
          </div>
          <div>面包屑</div>
        </div>
        <div class="user-info">
          <el-badge :value="12" class="notice" :is-dot="true">
            <el-icon><Bell /></el-icon>
          </el-badge>

          <el-dropdown @command="handleLogout">
            <span class="user-link">
              {{ userInfo.userName }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email"
                  >邮箱: {{ userInfo.userEmail }}</el-dropdown-item
                >
                <el-dropdown-item command="logout"> 退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <router-view class="main-page"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false, //默认没有展开
      userInfo: {
        userName: this.$store.state.userInfo.userName,
        userEmail: this.$store.state.userInfo.userEmail,
      },
    };
  },
  methods: {
    handleLogout(key) {
      if (key == "email") return;
      this.$store.commit("saveUserInfo", "");
      this.userInfo = null;
      this.$router.push("/login");
    },

    toggle() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;
  // 左侧
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      overflow-x: hidden;
      height: 50px;
      img {
        width: 32px;
        height: 32px;
        margin: 0 16px;
      }
    }
    .nav-menu {
      border-right: none;
      height: calc(100vh - 50px);
    }
    &.fold {
      width: 64px;
    }
    &.unfold {
      width: 200px;
    }
  }
  // 右侧
  .content-right {
    margin-left: 200px;
    &.fold {
      margin-left: 64px;
    }
    &.unfold {
      margin-left: 200px;
    }
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      .nav-left {
        display: flex;
        align-items: center;
        .menu-fold {
          padding-right: 16px;
          font-size: 16px;
        }
      }
      .user-info {
        display: flex;
        align-items: center;

        .notice {
          margin-right: 20px;
          line-height: 60px;
        }
        .user-link {
          cursor: pointer;
          color: #409eff;
        }
      }
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        height: 100%;
        background: #fff;
      }
    }
  }
}
</style>
