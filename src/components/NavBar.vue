<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
// 把 Discord 圖示換成了 IG 圖示
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const iconClickCount = ref(0)
const lastClickTime = ref(0)
const handleIconClick = () => {
  const now = Date.now()
  if (now - lastClickTime.value > 10000) iconClickCount.value = 0
  iconClickCount.value++
  lastClickTime.value = now
  if (iconClickCount.value === 10) {
    alert('TTU PHOTO!')
    iconClickCount.value = 0
  }
}

// 這裡我幫你把選單改成攝影社的
const navLinks = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於' },
  { to: '/member', label: '幹部' },
  { to: '/equipment', label: '器材' },
  { to: '/project', label: '活動' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-all duration-500"
    :class="isScrolled ? 'bg-paper/90 backdrop-blur-xl border-chalk/80' : 'bg-paper border-chalk'"
  >
    <nav class="max-w-5xl mx-auto px-6 h-14 flex items-center">
      
      <div class="flex items-center shrink-0">
        <RouterLink
          to="/"
          class="flex items-center gap-2.5 font-display font-bold text-ink tracking-tight hover:text-[#e6a23c] transition-colors duration-300"
          @click="handleIconClick"
        >
          <img src="/logo.png" alt="TTU PHOTO" class="h-34 w-51" />
          <span class="text-base">TTU PHOTO</span>
        </RouterLink>
      </div>

      <div class="hidden md:block flex-grow" style="flex-grow: 0.5;"></div>

      <ul class="hidden md:flex items-center gap-0.5 shrink-0">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-3 py-1.5 text-[15px] font-medium text-clay rounded-md hover:text-[#e6a23c] hover:bg-fog transition-all duration-200"
            active-class="!text-ink !bg-fog font-bold"
            >{{ link.label }}</RouterLink
          >
        </li>
        
        <li class="relative group list-none">
          <button class="px-3 py-1.5 text-[15px] font-medium text-clay rounded-md hover:text-[#e6a23c] hover:bg-fog transition-all duration-200 flex items-center gap-1">
            光影之間
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div class="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div class="bg-paper border border-chalk shadow-xl rounded-md w-32 py-1 flex flex-col">
              <RouterLink 
                to="/exhibition-2026" 
                class="px-4 py-2 text-sm text-clay hover:text-[#e6a23c] hover:bg-fog transition-colors text-center" 
                active-class="!text-[#e6a23c] font-bold"
              >
                2026 定格
              </RouterLink>
            </div>
          </div>
        </li>
      </ul>

      <div class="hidden md:block flex-grow"></div>

      <div class="flex items-center gap-2 shrink-0">
        <div class="hidden md:flex">
          <a
            href="https://www.instagram.com/ttuphoto_?igsh=MW80Z2puaGdkZnJlZQ%3D%3D&utm_source=qr"
            target="_blank"
            class="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-clay border border-chalk rounded-md hover:border-[#e6a23c] hover:text-[#e6a23c] transition-all duration-200"
          >
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
    
    </header>
</template>