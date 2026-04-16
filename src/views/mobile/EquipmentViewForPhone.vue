<template>
  <div class="min-h-screen bg-[#f8f9fa] pt-20 pb-24 font-sans">
    <div class="px-6">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#1a1a1a] tracking-tight">器材清單</h1>
        <p class="text-[#e6a23c] text-xs font-bold tracking-[0.2em] mt-1 uppercase">Equipment List</p>
      </div>

      <div class="flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-6 px-6">
        <button 
          v-for="tab in tabs" 
          :key="tab.value"
          @click="currentTab = tab.value"
          class="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border shrink-0"
          :class="[
            currentTab === tab.value 
              ? 'bg-[#e6a23c] border-[#e6a23c] text-white shadow-lg shadow-[#e6a23c]/20' 
              : 'bg-white border-gray-200 text-gray-500'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-4">
        <TransitionGroup name="mobile-list">
          <div v-for="group in filteredEquipments" :key="group.title" class="mb-10">
            <div class="flex items-center gap-3 mb-5">
              <div class="h-1 w-6 bg-[#e6a23c] rounded-full"></div>
              <h2 class="text-lg font-bold text-gray-800 tracking-wide">{{ group.title }}</h2>
            </div>
            
            <div class="grid grid-cols-1 gap-3">
              <div 
                v-for="item in group.items" 
                :key="item.name" 
                class="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm flex justify-between items-center active:bg-gray-50 active:scale-[0.98] transition-all"
              >
                <div class="flex-1 pr-4">
                  <p class="font-bold text-gray-900 text-[15px] leading-tight">{{ item.name }}</p>
                  <p class="text-[10px] text-[#e6a23c] mt-1 font-black uppercase tracking-widest">
                    {{ item.sub }}
                  </p>
                </div>
                <div class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                  <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <div class="mt-12 p-6 bg-[#e6a23c]/5 rounded-2xl border border-[#e6a23c]/10">
        <p class="text-[#e6a23c] text-xs leading-relaxed text-center font-medium">
          ※ 欲借用器材，請先詳閱社團規範<br/>並聯繫當屆器材幹部
        </p>
      </div>

      <div class="mt-10 text-center pb-10">
        <router-link to="/equipment" class="text-gray-400 text-[10px] tracking-[0.2em] uppercase underline underline-offset-8">
          切換回電腦版網頁
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentTab = ref('all')

const tabs = [
  { label: '全部', value: 'all' },
  { label: '相機機身', value: 'body' },
  { label: '鏡鏡頭', value: 'lens' },
  { label: '配件', value: 'others' }
]

// 資料部分保持不變
const equipmentData = {
  body: {
    title: '機身 (Body)',
    items: [
      { name: 'Canon EOS R10 (x2)', sub: 'Canon-RF' },
      { name: 'Canon EOS R50', sub: 'Canon-RF' },
      { name: 'Canon EOS 77d', sub: 'Canon-EF' },
      { name: 'Nikon D750', sub: 'Nikon-F' },
      { name: 'Nikon D7100', sub: 'Nikon-F' },
      { name: 'Nikon D7000', sub: 'Nikon-F' }
    ]
  },
  lens: {
    title: '鏡頭 (Lens)',
    items: [
      { name: 'RF-S 10-18mm f/4.5-6.3 IS STM', sub: 'Canon RF' },
      { name: 'RF 100-400mm f/5.6-8 IS USM', sub: 'Canon RF' },
      { name: 'RF-S 18-150mm f/3.5-6.3 IS STM (x2)', sub: 'Canon RF' },
      { name: 'RF 35mm f/1.8 Macro IS STM', sub: 'Canon RF' },
      { name: 'RF 50mm f/1.8 STM', sub: 'Canon RF' },
      { name: 'RF 70-200mm f/4L IS USM', sub: 'Canon RF' },
      { name: 'RF-S 18-50mm f/2.8 (Sigma)', sub: 'Canon RF' },
      { name: 'EF 24mm f/2.8', sub: 'Canon EF' },
      { name: 'EF-S 18-135mm f/3.5-5.6 IS', sub: 'Canon EF' },
      { name: 'Sigma 10-20mm f/4-5.6 EX DC', sub: 'Canon EF' },
      { name: 'EF 75-300mm f/4-5.6', sub: 'Canon EF' },
      { name: 'EF 50mm f/1.8 STM', sub: 'Canon EF' },
      { name: 'AF-S 50mm f/1.8D (x2)', sub: 'Nikon F' },
      { name: 'AF-S 35mm f/1.8G', sub: 'Nikon F' },
      { name: 'Tamron 24-70mm f/2.8 Di VC USD', sub: 'Nikon F' },
      { name: 'AF-S 18-300mm f/3.5-5.6G', sub: 'Nikon F' },
      { name: 'AF-S 18-200mm f/3.5-5.6G', sub: 'Nikon F' }
    ]
  },
  others: {
    title: '其他配件 (Others)',
    items: [
      { name: '閃光燈', sub: 'Flash' },
      { name: '攝影包', sub: 'Camera Bag' },
      { name: '三腳架', sub: 'Tripod' },
      { name: '轉接環 (EF to RF)', sub: 'Adapter' },
      { name: 'SD 記憶卡', sub: 'Storage' },
      { name: '快門線', sub: 'Accessory' }
    ]
  }
}

const filteredEquipments = computed(() => {
  if (currentTab.value === 'all') return Object.values(equipmentData)
  return [equipmentData[currentTab.value]].filter(Boolean)
})
</script>

<style scoped>
/* 隱藏捲動條 */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* 列表動畫 */
.mobile-list-enter-active, .mobile-list-leave-active {
  transition: all 0.4s ease;
}
.mobile-list-enter-from, .mobile-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>