<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">

    <el-menu-item index="1">
      <router-link to="/user">Nguoi dung</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/customer">Nhan vien</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/customer">khach hang</router-link>
    </el-menu-item>

  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

</script>
