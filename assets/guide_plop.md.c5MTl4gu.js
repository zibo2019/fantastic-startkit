import{_ as e,o,c as a,R as t}from"./chunks/framework.GMe7lAwE.js";const u=JSON.parse('{"title":"代码文件自动生成","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plop.md","filePath":"guide/plop.md"}'),c={name:"guide/plop.md"},p=t('<h1 id="代码文件自动生成" tabindex="-1">代码文件自动生成 <a class="header-anchor" href="#代码文件自动生成" aria-label="Permalink to &quot;代码文件自动生成&quot;">​</a></h1><p>开发过程中，避免不了手动去频繁创建页面、组件等文件，并且还要在文件里写一些必要的代码，是不是觉得很麻烦？现在你可以用更简洁的方式来处理这一切。</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>该功能基于 <a href="https://www.npmjs.com/package/plop" target="_blank" rel="noreferrer">plop</a> 实现，在扩展新的模式前，请先详细阅读 plop 文档。</p></div><p>本套件默认提供了 3 种模式，通过 <code>pnpm run new</code> 指令可以自行选择。</p><ul><li><code>page</code> 页面文件</li><li><code>component</code> 组件文件</li><li><code>store</code> 全局状态文件</li></ul><p>除了默认提供的 3 种模式，你还可以自定义新的模式，其原理就是通过预设模板，按照特定规则创建文件或者文件夹。</p><p>预设模板文件存放在 <code>./plop-templates/</code> 目录下，并在 <code>./plopfile.js</code> 文件里进行引用，你可以参考现有 3 种模式的目录结构进行创建新的模板。</p><h2 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-label="Permalink to &quot;page&quot;">​</a></h2><p>page 模式下，只能在 <code>/src/views/</code> 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 <code>&lt;page-header /&gt;</code> 中的 <code>title</code> 会按照你输入的中文名称替换，页面的 <code>name</code> 会根据当前文件目录和文件名自动生成，确保唯一。</p><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h2><p>component 模式可以选择生成的是全局组件还是局部组件，全局组件生成目录为 <code>/src/components/</code> ，局部组件则在 <code>/src/views/</code> 目录下选择指定的文件夹进行生成。</p><h2 id="store" tabindex="-1">store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;store&quot;">​</a></h2><p>store 模式则会在 <code>/src/store/modules/</code> 目录下生成一个对应的文件。</p>',13),r=[p];function d(l,s,n,i,h,m){return o(),a("div",null,r)}const f=e(c,[["render",d]]);export{u as __pageData,f as default};
