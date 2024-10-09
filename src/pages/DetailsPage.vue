<template>
  <el-page-header @back="goBack">
    <template #title> Проверка IP </template>

    <template #icon>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#ECF0F5" />
        <path
          d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
          fill="#303345"
        />
      </svg>
    </template>

    <template #content>
      {{ ipParam }}
    </template>
  </el-page-header>

  <el-container>
    <el-header>
      <span
        class="text-[24px] font-[700] leading-[32px] tracking-[-5%] text-[#303345]"
      >
        {{ ipParam }}
      </span>
    </el-header>

    <el-main>
      <el-container>
        <div class="flex w-full gap-x-[20px]">
          <!-- ip stats -->
          <div class="flex h-full flex-col w-[50%]">
            <!-- stat item -->
            <div
              v-for="(stat, index) in ipStatsOptions"
              :key="stat.name"
              :class="{
                'bg-[#F7F9FB]': index % 2 === 0,
                'rounded-t-[16px]': index === 0,
                'rounded-b-[16px]': index === ipStatsOptions.length - 1,
              }"
              class="flex h-[48px] border-[1px] border-[#E1E8F1] p-[16px] justify-between items-center w-full"
            >
              <div
                class="flex text-[#303345] font-[500] leading-[16px] text-[14px] items-center"
              >
                {{ stat.name }}
              </div>

              <div
                class="flex text-[#303345] text-[14px] leading-[16px] items-center"
              >
                {{ stat.value }}
              </div>
            </div>
          </div>

          <!-- current pc stats -->
          <div class="flex flex-col w-[50%]">
            <!-- stat item -->
            <div
              v-for="(stat, index) in pcStatsOptions"
              :key="stat.name"
              :class="{
                'bg-[#F7F9FB]': index % 2 === 0,
                'rounded-t-[16px]': index === 0,
                'rounded-b-[16px]': index === pcStatsOptions.length - 1,
              }"
              class="flex h-[48px] border-[1px] border-[#E1E8F1] p-[16px] justify-between items-center w-full"
            >
              <div
                class="flex text-[#303345] font-[500] leading-[16px] text-[14px] items-center"
              >
                {{ stat.name }}
              </div>

              <div
                class="flex text-[#303345] text-[14px] leading-[16px] items-center"
              >
                {{ stat.value }}
              </div>
            </div>
          </div>
        </div>
      </el-container>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const ipParam = route.params.ip;

function goBack() {
  router.push('/');
}

// constants
const ipStatsOptions = [
  {
    name: 'Выборка:',
    value: '???',
  },
  {
    name: 'Страна:',
    value: '???',
  },
  {
    name: 'Код страны:',
    value: '???',
  },
  {
    name: 'Регион:',
    value: '???',
  },
  {
    name: 'Город:',
    value: '???',
  },
  {
    name: 'As:',
    value: '???',
  },
  {
    name: 'Asname:',
    value: '???',
  },
  {
    name: 'Телефон:',
    value: '???',
  },
  {
    name: 'Прокси:',
    value: '???',
  },
  {
    name: 'Хост:',
    value: '???',
  },
];

const pcStatsOptions = [
  {
    name: 'ОС:',
    value: '???',
  },
  {
    name: 'Браузер:',
    value: '???',
  },
  {
    name: 'Заголовок:',
    value: '???',
  },
  {
    name: 'JavaScript:',
    value: '???',
  },
];
</script>
