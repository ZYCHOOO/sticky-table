<p align="center">@boacho/sticky-table - 吸顶表格组件</p>

<p align="center">
   <a href="https://www.npmjs.com/package/@boacho/sticky-table">
    <img src="https://img.shields.io/npm/v/@boacho/sticky-table.svg">
  </a>
</p>

- 🔥 Vue3 Composition Api
- 💻 Written in TypeScript

## Installation

```
   npm install @boacho/sticky-table
```

## Usage

```typescript
// main.ts
import { createApp } from 'vue'
import StickyTable from '@boacho/sticky-table'
import '@boacho/sticky-table/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(StickyTable)
app.mount('#app')
```

## Attributes

|  Name   | Description  |  Type   | Accepted Value  |  Default   |
|  ----  | ----  |  ----  | ----  |  ----  |
| data  | Table data | Array  | - | -  |
| columns  | Table Columns | Array  | - | -  |
| border  | to show border or not | Boolean  | - | false  |
| stickyKey  | key that controls rows to stick to the top | String  | - | 'isSticky'  |
| max  |  Maximum number of rows displayed in the sticky section  | Number  | - | 3  |
| rowHeight  | row's height | Number  | - | 40  |

## Events

|  Name   | Description  | Parameters  |
|  ----  | ----  |
| row-click  | triggers when a row is clicked | row  |





