<script setup>
import { reactive, ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import Cookies from "js-cookie";

const router = useRouter();

const loginForm = ({
    'phone': '',
    'code': ''
});

const login = () => {
    router.push({ name: 'index' });
};

</script>

<template>
    <div class="relative flex flex-col justify-center mt-12 overflow-hidden">
        <div
            class="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
            <div class="text-center p-6 bg-slate-900 rounded-t">
                    <a href="index.html"><img src="assets/images/logo-sm.png" alt="" class="w-14 h-14 mx-auto mb-2"></a>
                    <h3 class="font-semibold text-white text-xl mb-1">title</h3>
                    <p class="text-xs text-slate-400">subtitle</p>
                </div>
            <form class="p-6">
                <div class="mt-4">
                    <label for="phone" class="label">手機號碼</label>
                    <div class="flex">
                    
                    <input type="number" id="phone" class="form-control rounded-none bg-slate-50 border text-slate-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-slate-300 p-2.5  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="0" name="quantity" placeholder="09xxxxxxxx">
                    <button type="button" class="inline-flex items-center px-3 text-sm text-slate-100 bg-primary-500 rounded-r-md border border-l-0 border-primary-500 dark:bg-slate-600 dark:text-slate-400 dark:border-slate-600" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        發送驗證碼
                    </button>
                </div>
                </div>

                <div class="mt-4">
                    <label for="code" class="label">驗證碼</label>
                    <input type="text" id="code" class="form-control dark:bg-slate-800/60 dark:border-slate-700/50"
                        placeholder="手機驗證碼" v-model="loginForm.code" required>
                </div>
                <div class="mt-6">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        type="button" @click="login">
                        登入
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import "../assets/css/icons.css";
@import "../assets/css/tailwind.css";
</style>