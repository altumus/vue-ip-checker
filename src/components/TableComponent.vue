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
          v-model="inputValue"
          :prefix-icon="Search"
          size="large"
          placeholder="Что вы хотите найти?"
        />
      </div>
    </div>

    <!-- table block -->
    <el-table class="w-full rounded-[16px]">
      <el-table-column prop="ip" label="IP" sortable />
      <el-table-column prop="country" label="Страна" sortable />
      <el-table-column prop="region" label="Регион" sortable />
      <el-table-column />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>
