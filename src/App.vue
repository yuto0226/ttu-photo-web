<script setup>
import { ref, watch, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import GlobalBackground from '@/components/GlobalBackground.vue'
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'       // 電腦版底欄
import MobileFooter from '@/components/MobileFooter.vue' // 手機版底欄

const route = useRoute()

// 核心邏輯：判斷目前是否在手機版路徑
const isMobileMode = computed(() => route.path.startsWith('/m/'))

const usePageTitle = () => {
  const baseTitle = '大同大學 攝影社'
  const pageTitle = ref(baseTitle)

  watch(
    () => route.meta.title,
    (newTitle) => {
      pageTitle.value = newTitle ? `${baseTitle}｜${newTitle}` : baseTitle
      document.title = pageTitle.value
    },
    { immediate: true },
  )

  return pageTitle
}

usePageTitle()
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <GlobalBackground />
    
    <NavBar />

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <MobileFooter v-if="isMobileMode" />
    <PageFooter v-else />
  </div>
</template>

<style>
/* 頁面切換動畫 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>