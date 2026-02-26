---
outline: deep
---
# 测试页面

这是一段测试文本。如果你能看到它变成了优美的**宋体（衬线体）**，说明字体配置成功了！

下面测试一下图标是否生效：

<font-awesome-icon icon="user" /> 这是一个用户图标
<font-awesome-icon icon="graduation-cap" /> 这是一个博士帽图标
<font-awesome-icon icon="envelope" /> 这是一个信封图标

::: details 点击展开查看更多信息
这是 Vitepress 原生的折叠块，效果类似于 `:::fold`。
:::

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
