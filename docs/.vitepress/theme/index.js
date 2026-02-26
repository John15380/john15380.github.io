// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style.css' 

// 引入 FontAwesome 核心与组件
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 引入三种图标库
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// 引入 FontAwesome 的原生 CSS（解决 Vitepress SSR 刷新时图标闪烁变大的问题）
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false 

// 将所有图标加入图标库
library.add(fas, far, fab)

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}