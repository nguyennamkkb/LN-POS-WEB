<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="flex main-container">
      <BaseSide />
      <div w="full" py="4">
        <!-- <Logos my="4" /> -->
        <router-view>
        </router-view>
      </div>
    </div>
  </el-config-provider>
</template>

<style>