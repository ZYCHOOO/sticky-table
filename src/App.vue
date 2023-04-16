<template>
  <div class="demo-container">
    <sticky-table
      border
      :data="tableData"
      :columns="tableColumns"
    />
  </div>
</template>

<script setup lang="ts">
import { ColumnItem } from './StickyTable/src/type'
const tableData: any[] = [
  { name: '锅意义', gender: '男', address: '广州市天河区燕塘', isSticky: true },
  { name: '走一封', gender: '男', address: '珠海市', isSticky: true },
  { name: '舟家暴', gender: '女', address: '广州市天河区车陂', isSticky: true },
  { name: '增一抄', gender: '男', address: '广州市荔湾区坑口', isSticky: true },
  { name: '晨火焰', gender: '女', address: '广州市黄埔区' },
  { name: '留奸雄', gender: '男', address: '广州市黄埔区' },
  { name: '株瑞红', gender: '男', address: '广州市白云区' },
  { name: '留晓芬', gender: '女', address: '广州市天河区' },
  { name: '菱镜', gender: '男', address: '广州市番禺区' },
  { name: '章会问', gender: '女', address: '广州市海珠区' },
  { name: '秋稍远', gender: '男', address: '广州市海珠区' }
]
const tableColumns: ColumnItem[] = [
  { prop: 'name', label: '姓名', width: '30%', align: 'center' },
  { prop: 'gender', label: '性别', width: '20%', align: 'center' },
  { prop: 'address', label: '地址', width: '50%', align: 'center' }
]
</script>

<style lang="scss" scoped>
  .demo-container {
    padding: 20px;
    width: 50%;
    height: 300px;
    background-color: lightskyblue;
    :deep .sticky-row {
      background-color: rgba($color: #FC5A5A, $alpha: .3);
    }
  }
</style>
