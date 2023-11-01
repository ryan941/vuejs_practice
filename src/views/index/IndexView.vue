<script setup>
</script>
<template>
    <div class="container mx-auto px-2 min-h-[calc(100vh-138px)]  relative pb-14 ">
        <div class="grid xl:grid-cols-12 gap-4 mb-4">
            <div class="sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-6 ">
                <div class="card h-full">
                    <div class="card-header">
                        <h4 class="card-title">Buttons with icon and label</h4>
                    </div><!--end card-header-->
                    <div class="card-body">
                        <button type="button"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">
                            Messages
                            <span
                                class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                                2
                            </span>
                        </button>
                        <div class="dropdown inline-block">
                            <button data-dropdown-toggle="dropdown"
                                class="dropdown-toggle text-white bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded text-sm px-3 py-2 text-center inline-flex items-center"
                                type="button">
                                Dropdown
                                <i class="fas fa-chevron-down text-xs ml-2"></i>
                            </button>
                            <!-- Dropdown menu -->
                            <div
                                class="dropdown-menu hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                            out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end col-->

        </div>
    </div>
</template>
<style></style>