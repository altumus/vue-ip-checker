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

    <el-main v-if="detailsInfo">
      <el-container>
        <div class="flex w-full gap-x-[20px]">
          <!-- ip stats -->
          <div class="flex h-full flex-col w-[50%]">
            <!-- stat item -->
            <div
              v-for="(value, key) in detailsInfo"
              :key="key"
              class="flex min-h-[48px] border-[1px] border-[#E1E8F1] p-[16px] justify-between items-center w-full"
            >
              <div
                class="flex text-[#303345] font-[500] leading-[16px] text-[14px] items-center"
              >
                {{ key }}:
              </div>

              <div
                class="flex text-[#303345] text-[14px] leading-[16px] items-center"
              >
                {{ value }}
              </div>
            </div>
          </div>

          <!-- current pc stats -->
          <div class="flex flex-col w-[50%]">
            <!-- stat item -->
            <div
              v-for="(value, key) in clientInfo"
              :key="key"
              class="flex min-h-[48px] h-auto border-[1px] border-[#E1E8F1] p-[16px] justify-between items-center w-full"
            >
              <div
                class="flex text-[#303345] font-[500] leading-[16px] text-[14px] items-center"
              >
                {{ key }}
              </div>

              <div
                class="flex max-w-[300px] text-[#303345] text-[14px] leading-[16px] items-center"
              >
                {{ value }}
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
import { useIpStore } from '../stores/ipStore';
import { computed, onMounted } from 'vue';

onMounted(() => {
  ipStore.fetchIpWithClientInfo(ipParam);
});

const route = useRoute();
const router = useRouter();
const ipStore = useIpStore();

const ipParam = route.params.ip as string;

const detailsInfo = computed(() => {
  return ipStore.detailedIpInfo;
});

const clientInfo = computed(() => {
  return ipStore.userInfo;
});

function goBack() {
  router.push('/');
}
</script>
