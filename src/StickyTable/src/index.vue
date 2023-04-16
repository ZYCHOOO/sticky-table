<template>
  <div :class="['sticky-table', border ? 'bordered' : '']">
    <!-- 表格头 -->
    <div class="sticky-table-header" :style="{ 'height': `${rowHeight}px`}">
      <div
        v-for="headerItem in columns"
        :key="headerItem.prop"
        class="header-item"
        :style="cellStyle(headerItem.width, headerItem.align!)"
        v-html="headerItem.label"
      />
    </div>
    <!-- 表格内容 -->
    <div
      class="sticky-table-body sticky"
      :style="{ 'top':`${rowHeight}px`, 'maxHeight': `${max * rowHeight}px` }"
    >
      <div
        v-for="(rowItem, i) in stickyTable"
        :key="i"
        class="sticky-table-row sticky-row"
        :style="{ 'height': `${rowHeight}px` }"
        @click="rowClick(rowItem)"
      >
        <div
          v-for="item in columns"
          :key="item.prop"
          class="sticky-table-cell"
          v-html="rowItem[item.prop]"
          :style="cellStyle(item.width, item.align!)"
        />
      </div>
    </div>
    <div
      class="sticky-table-body normal"
      :style="normalStyle"
    >
      <div
        v-for="(rowItem, i) in normalTable"
        :key="i"
        class="sticky-table-row normal-row"
        :style="{ 'height': `${rowHeight}px` }"
        @click="rowClick(rowItem)"
      >
        <div
          v-for="item in columns"
          :key="item.prop"
          class="sticky-table-cell"
          v-html="rowItem[item.prop]"
          :style="cellStyle(item.width, item.align!)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ColumnItem } from './type'

const emits = defineEmits(['row-click'])
const props = defineProps({
  // 表格值
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 表格列数组
  columns: {
    type: Array as PropType<ColumnItem[]>,
    required: true
  },
  // 是否展示边框
  border: {
    type: Boolean,
    default: false
  },
  // 吸顶判断字段
  stickyKey: {
    type: String,
    default: 'isSticky'
  },
  // 吸顶最大展示数量
  max: {
    type: Number,
    default: 3
  },
  // 行高度
  rowHeight: {
    type: Number,
    default: 40
  }
})

// 表格字段数组
const tableProps = computed(() => props.columns.map(item => item.prop))
// 表格宽度数组
const tableWidths = computed(() => props.columns.map(item => item.width))
// 吸顶的表格数据
const stickyTable = computed(() => props.data.filter(item => item[props.stickyKey]))
// 常规表格数据
const normalTable = computed(() => props.data.filter(item => !item[props.stickyKey]))

const normalStyle = computed(() => {
  let top
  const dynamicRow = stickyTable.value.length > props.max ? props.max + 1 : stickyTable.value.length + 1
  top = stickyTable.value.length > props.max
    ? dynamicRow * props.rowHeight
    : dynamicRow * props.rowHeight
  return { 'top': `${top}px`, 'maxHeight': `calc(100% -  ${dynamicRow * props.rowHeight}px)`}
})

// 行点击
const rowClick = (row: any) => {
  emits('row-click', { row })
}

// 单元格样式
const cellStyle = (width: string, align: 'left' | 'center' | 'right') => {
  const alignMap = {
    'left': 'flex-start',
    'center': 'center',
    'right': 'flex-end'
  }
  return { width, 'justify-content': alignMap[align || 'center'] }
}


</script>

<style lang="scss" scoped>
$borderColor: black;
.sticky-table {
  position: relative;
  height: 100%;
  background-color: #FFF;
  &-header {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    .header-item {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  &-body {
    &.sticky {
      position: sticky;
      overflow: auto;
      width: 100%;
    }
    &.normal {
      position: absolute;
      width: 100%;
      background-color: #FFF;
      overflow: scroll;
    }
  }
  &-row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &-cell {
    display: flex;
    align-items: center;
    height: 100%;
  }
  // 带边框
  &.bordered {
    border-top: 1px solid $borderColor;
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      height: 1px;
      width: 100%;
      background: $borderColor;
    }
    .sticky, .normal, .sticky-table-header {
      border-right: 1px solid $borderColor;
    }
    .sticky-table-header .header-item,
    .sticky-table-cell {
      border-left: 1px solid $borderColor;
    }
    .sticky-table-header::after {
      content: '';
      position: absolute;
      bottom: 0px;
      height: 1px;
      width: 100%;
      background: $borderColor;
    }
    .normal {
      .sticky-table-row {
        border-bottom: 1px solid $borderColor;
      }
      &::before {
        content: '';
        position: sticky;
        top: 0;
        height: 1px;
        width: 100%;
        display: block;
        background: $borderColor;
      }
    }

    .sticky {
      .sticky-table-row + .sticky-table-row {
        border-top: 1px solid $borderColor;
      }
    }
    
  }
}
</style>
