<template>
  <div class="w-full border-[1px] border-[#E1E8F1] bg-white rounded-[16px]">
    <!-- search block -->
    <div class="flex w-full gap-y-[8px] flex-col p-[24px]">
      <span class="text-[14px] font-[500] leading-[20px] text-[#6B6D80]">
        Поиск по таблице
      </span>

      <div class="flex w-full">
        <!-- search input -->
        <el-input
          v-model="searchValue"
          :prefix-icon="Search"
          size="large"
          placeholder="Что вы хотите найти?"
        />
      </div>
    </div>

    <!-- table block -->
    <el-table :data="props.ipInfoList" class="w-full rounded-[16px]">
      <el-table-column prop="query" label="IP" sortable />
      <el-table-column prop="country" label="Страна" sortable />
      <el-table-column prop="region" label="Регион" sortable />
      <el-table-column>
        <template #default="scope">
          <div class="w-full flex gap-x-[20px] justify-end items-center">
            <Delete
              @click="removeIp(scope.row.query)"
              class="h-[16px] cursor-pointer w-[16px]"
            />

            <router-link :to="`/ip-details/${scope.row.query}`">
              <ArrowRight class="h-[16px] cursor-pointer w-[16px]" />
            </router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { IpInformationInterface } from '../types/ipType';
import { Delete, ArrowRight } from '@element-plus/icons-vue';

const props = defineProps<{ ipInfoList: IpInformationInterface[] }>();
const emits = defineEmits(['removeIpEmit']);

const searchValue = defineModel('searchValue');

function removeIp(ip: string) {
  emits('removeIpEmit', ip);
}
</script>
