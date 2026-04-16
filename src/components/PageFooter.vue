<template>
  <footer class="border-t border-chalk bg-paper">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <div class="flex items-center gap-2.5">
          <img src="/logoblack.png" alt="TTU PHOTO" class="h-10 w-10 opacity-100" />
          <span class="font-display font-semibold text-ink text-sm tracking-tight">TTU PHOTO</span>
          <span class="text-chalk mx-1">|</span>
          <span class="text-xs text-sand">大同大學攝影社</span>
        </div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-clay">
          <a
            href="https://www.instagram.com/ttuphoto_?igsh=MW80Z2puaGdkZnJlZQ%3D%3D&utm_source=qr"
            target="_blank"
            class="hover:text-[#e6a23c] transition-colors"
            >Instagram</a
          >
          <RouterLink to="/about" class="hover:text-[#e6a23c] transition-colors">關於我們</RouterLink>
          <RouterLink to="/member" class="hover:text-[#e6a23c] transition-colors">幹部名單</RouterLink>
           <RouterLink to="/equipment" class="hover:text-[#e6a23c] transition-colors">器材清單</RouterLink>
          <RouterLink to="/project" class="hover:text-[#e6a23c] transition-colors">活動紀錄</RouterLink>
          <RouterLink to="/exhibition-2026" class="hover:text-[#e6a23c] transition-colors">年度展覽</RouterLink>
        </div>

        <p class="text-[11px] text-sand tracking-wide">© 2026 TTU PHOTO.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* 這裡可以依需求加入特定的 footer 樣式 */
</style>