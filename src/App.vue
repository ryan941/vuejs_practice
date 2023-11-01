<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <header v-if="$route.meta.showHeader" class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div class="container mx-auto px-4 py-2 flex justify-end items-center">
            <!-- 使用 flex 右对齐内容 -->
            <span class="mr-4">會員帳號: Username</span>
            <!-- 
<button class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none focus:bg-red-700">登出</button>
            -->
                <RouterLink class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none focus:bg-red-700" to="/login">登入</RouterLink>
        </div>
    </header>
    <main class="pt-16">
        <div class="container mx-auto">
            <RouterView />
        </div>
    </main>
</template>

<style>
@import "../src/assets/css/icons.css";
@import "../src/assets/css/tailwind.css";
</style>
