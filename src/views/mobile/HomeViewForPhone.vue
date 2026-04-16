<template>
  <div class="bg-black min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#e6a23c]/30">
    
    <section class="relative h-screen flex items-center justify-center px-6">
      <div 
        class="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[10s] ease-linear"
        :style="{ backgroundImage: `url(${basePath}IMG_9651.jpg)` }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black"></div>
      </div>

      <div class="relative z-10 text-center w-full">
        <div class="animate-fade-in">
          <span class="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#e6a23c] border border-[#e6a23c]/40 rounded-full mb-6">
            TTU PHOTO CLUB
          </span>
          <h1 class="text-5xl font-bold tracking-[0.15em] leading-tight mb-4 font-serif">
            大同大學<br/><span class="text-[#e6a23c]">攝影社</span>
          </h1>
          <div class="w-12 h-px bg-[#e6a23c] mx-auto mb-8 opacity-60"></div>
          <p class="text-white/70 text-sm tracking-[0.1em] leading-relaxed max-w-[280px] mx-auto mb-12">
            透過鏡頭，記錄那些被時光<br/>遺忘的細碎美好。
          </p>
        </div>

        <div class="flex flex-col gap-4 w-full max-w-[260px] mx-auto animate-slide-up">
          <router-link to="/m/exhibition" class="w-full py-4 bg-[#e6a23c] text-black font-bold rounded-2xl tracking-[0.2em] active:scale-95 transition-all shadow-xl shadow-[#e6a23c]/10">
            進入展覽紀錄
          </router-link>
          <router-link to="/m/about" class="w-full py-4 bg-white/5 border border-white/20 text-white font-bold rounded-2xl tracking-[0.2em] backdrop-blur-md active:bg-white/10 transition-all">
            關於我們
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-black pb-32"> <div class="mb-12">
        <span class="text-[#e6a23c] text-[10px] font-bold tracking-[0.4em] uppercase block mb-2">Our Activities</span>
        <h2 class="text-3xl font-bold tracking-widest font-serif">我們在做什麼？</h2>
      </div>

      <div class="space-y-8">
        <div v-for="(item, i) in whatWeDoItems" :key="i" 
          class="relative min-h-[300px] rounded-[2rem] overflow-hidden border border-white/10 flex flex-col justify-end p-8 active:scale-[0.98] transition-transform duration-300"
        >
          <img 
            :src="`${basePath}${item.img}`" 
            :alt="item.title"
            class="absolute inset-0 w-full h-full object-cover opacity-40" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          
          <div class="relative z-10 text-left">
            <span class="text-[#e6a23c] font-mono text-sm tracking-tighter mb-2 block">0{{ i + 1 }}</span>
            <h3 class="text-2xl font-bold mb-3 tracking-wide text-white">{{ item.title }}</h3>
            <p class="text-white/60 text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    </div>
</template>

<script setup>
// 🚩 import MobileFooter 已刪除

const basePath = import.meta.env.BASE_URL

const whatWeDoItems = [
  {
    title: '平日社課',
    desc: '邀請不同類型的攝影師來為我們上課，傳授實用的攝影技巧與獨門心法。',
    img: 'class.jpg', 
  },
  {
    title: '假日實拍',
    desc: '假日會請攝影師帶領我們去做實拍的練習，走出戶外，將課堂理論化為鏡頭下的實作。',
    img: 'outdoor.jpg',
  },
  {
    title: '年度競賽',
    desc: '每年都會舉辦「光影之間」攝影比賽，投稿者來自全台各地的高中職及大專院校的學生。',
    img: 'contest.jpg',
  },
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}
.animate-slide-up {
  animation: slideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.4s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.no-scrollbar::-webkit-scrollbar { display: none; }
</style>