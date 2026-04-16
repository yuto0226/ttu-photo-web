<template>
  <div class="bg-black min-h-screen pt-20 pb-20 px-6 text-white font-sans overflow-x-hidden selection:bg-[#e6a23c]/30">
    
    <div class="text-center mb-16 animate-fade-in">
      <h1 class="text-3xl font-bold mb-3 tracking-widest font-serif text-white">關於我們</h1>
      <p class="text-[#e6a23c] tracking-[0.3em] text-[10px] uppercase opacity-80">About TTU Photo</p>
    </div>

    <div class="max-w-md mx-auto flex flex-col gap-20">
      
      <section class="reveal-up flex flex-col items-center">
        <h2 class="text-xl tracking-[0.2em] font-light text-[#e6a23c] mb-8 flex items-center gap-3">
          <span class="w-8 h-px bg-[#e6a23c]"></span>
          本社成立宗旨
          <span class="w-8 h-px bg-[#e6a23c]"></span>
        </h2>
        <p class="text-white/80 text-sm leading-[2] tracking-wider text-justify px-2">
          本社成立目的在於透過影像分析及技術指導，讓大家能輕易地使用相機，把所學習到的技能和方法用攝影展現出來，並且加以記錄我們生活週遭一切美好的事物和畫面，藉此提供令人賞心悅目的作品。
        </p>
      </section>

      <div class="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <section class="reveal-up">
        <h2 class="text-xl tracking-[0.2em] font-light text-[#e6a23c] mb-10 text-center">
          主要運作方式
        </h2>

        <div class="flex flex-col gap-6">
          
          <div v-for="(item, index) in activities" :key="index" 
            class="bg-[#080808] border border-white/10 p-8 min-h-[280px] flex flex-col justify-end relative overflow-hidden rounded-2xl group active:scale-[0.98] transition-all duration-300">
            
            <div 
              class="absolute inset-0 z-0 opacity-30 bg-cover bg-center transition-transform duration-700"
              :style="{ backgroundImage: `url(${basePath}${item.img})` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>

            <div class="relative z-10">
              <h3 class="text-xl font-serif tracking-widest mb-3 font-bold text-[#e6a23c]">{{ item.title }}</h3>
              <p class="text-white/70 leading-relaxed text-xs tracking-wide">
                {{ item.desc }}
              </p>
            </div>
          </div>

        </div>
      </section>

      <div class="text-center pt-10">
        <router-link to="/about" class="text-white/20 text-[10px] tracking-[0.3em] uppercase underline underline-offset-8">
          切換回電腦版網頁
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const basePath = import.meta.env.BASE_URL

const activities = [
  { 
    title: '平日社課', 
    desc: '平日社課時間我們會邀請不同類型的攝影師來為我們上課。', 
    img: 'class.jpg' 
  },
  { 
    title: '假日實拍', 
    desc: '假日會請攝影師帶領我們去做實拍的練習，將理論化為實作。', 
    img: 'outdoor.jpg' 
  },
  { 
    title: '年度競賽', 
    desc: '每年都會舉辦「光影之間」攝影比賽，投稿者來自全台各地。', 
    img: 'contest.jpg' 
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal-up').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}
.is-visible {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>