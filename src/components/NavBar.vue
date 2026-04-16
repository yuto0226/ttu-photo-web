<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// 核心邏輯：判斷目前是否在手機版路徑
const isMobileMode = computed(() => route.path.startsWith('/m/'))

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }
const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

// 動態導覽連結
const navLinks = computed(() => {
  const prefix = isMobileMode.value ? '/m' : ''
  return [
    { to: isMobileMode.value ? '/m/home' : '/', label: '首頁' },
    { to: `${prefix}/about`, label: '關於' },
    { to: `${prefix}/member`, label: '幹部' },
    { to: `${prefix}/equipment`, label: '器材' },
    { to: `${prefix}/project`, label: '活動' },
  ]
})

// 光影之間動態連結
const exhibitionLink = computed(() => isMobileMode.value ? '/m/exhibition' : '/exhibition-2026')
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-all duration-500"
    :class="isScrolled ? 'bg-paper/90 backdrop-blur-xl border-chalk/80' : 'bg-paper border-chalk'"
  >
    <nav class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      
      <div class="flex items-center shrink-0">
        <RouterLink
          :to="isMobileMode ? '/m/home' : '/'"
          class="flex items-center gap-2.5 font-display font-bold text-ink tracking-tight hover:text-[#e6a23c] transition-colors duration-300"
          @click="closeMenu"
        >
          <img src="/logo.png" alt="TTU PHOTO" class="h-8 w-auto" />
          <span class="text-base">TTU PHOTO</span>
        </RouterLink>
      </div>

      <ul class="hidden md:flex items-center gap-0.5 shrink-0">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-3 py-1.5 text-[15px] font-medium text-clay rounded-md hover:text-[#e6a23c] hover:bg-fog transition-all duration-200"
            active-class="!text-ink !bg-fog font-bold"
          >{{ link.label }}</RouterLink>
        </li>
        
        <li class="relative group list-none">
          <RouterLink :to="exhibitionLink" class="px-3 py-1.5 text-[15px] font-medium text-clay rounded-md hover:text-[#e6a23c] hover:bg-fog transition-all duration-200 flex items-center gap-1">
            光影之間
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </RouterLink>
          
          <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div class="bg-paper border border-chalk shadow-xl rounded-md w-32 py-1 flex flex-col">
              <RouterLink 
                :to="exhibitionLink" 
                class="px-4 py-2 text-sm text-clay hover:text-[#e6a23c] hover:bg-fog transition-colors text-center" 
                active-class="!text-[#e6a23c] font-bold"
              >
                2026 定格
              </RouterLink>
            </div>
          </div>
        </li>
      </ul>

      <div class="flex items-center gap-2 shrink-0">
        <div class="hidden md:flex">
          <a href="https://www.instagram.com/ttuphoto_" target="_blank" class="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-clay border border-chalk rounded-md hover:border-[#e6a23c] hover:text-[#e6a23c] transition-all duration-200">
            <font-awesome-icon :icon="faInstagram" class="text-[15px]" />
            Instagram
          </a>
        </div>

        <button @click="toggleMenu" class="md:hidden p-1.5 rounded-md hover:bg-fog transition-colors">
          <svg v-if="!isMenuOpen" class="w-5 h-5 text-ink" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 7h16M4 12h10M4 17h14" /></svg>
          <svg v-else class="w-5 h-5 text-ink" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" class="md:hidden bg-paper border-b border-chalk px-6 py-6 flex flex-col gap-4 animate-fade-in">
      <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeMenu" class="text-lg font-medium text-clay active:text-[#e6a23c]">
        {{ link.label }}
      </RouterLink>
      <RouterLink :to="exhibitionLink" @click="closeMenu" class="text-lg font-bold text-[#e6a23c]">
        光影之間 (2026 定格)
      </RouterLink>
    </div>
  </header>
</template>