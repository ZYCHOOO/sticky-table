export interface ColumnItem {
  // 字段名称
  prop: string,
  // 表头
  label: string,
  // 列宽度
  width: string,
  // 对齐方式
  align?: 'left' | 'center' | 'right'
}