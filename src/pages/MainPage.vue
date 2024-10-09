<template>
  <el-container>
    <el-header>
      <span
        class="text-[24px] font-[700] leading-[32px] tracking-[-5%] text-[#303345]"
      >
        Проверка IP
      </span>
    </el-header>

    <el-main>
      <div
        class="flex flex-col gap-y-[24px] bg-[#F7F9FB] border-[1px] border-[#E1E8F1] rounded-[16px] p-[24px]"
      >
        <span class="text-[#6B6D80] text-[16px] leading-[20px]">Ваши IP</span>

        <el-input
          v-model="inputValue"
          :placeholder="inputPlaceholder"
          type="textarea"
          class="w-full"
          resize="none"
          :autosize="{ minRows: 10, maxRows: 10 }"
        />

        <el-button
          size="large"
          class="w-[145px]"
          color="#070707"
          type="primary"
        >
          Начать поиск
        </el-button>
      </div>
    </el-main>
  </el-container>

  <el-container>
    <el-header>
      <span
        class="text-[24px] font-[700] leading-[32px] tracking-[-5%] text-[#303345]"
      >
        Результаты
      </span>
    </el-header>

    <el-main>
      <TableComponent />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TableComponent from '../components/TableComponent.vue';

// static info
const inputPlaceholder = `47.236.161.323.11\n47.236.161.323.11\n47.236.161.323.11`;

// data
const inputValue = ref('');
</script>
