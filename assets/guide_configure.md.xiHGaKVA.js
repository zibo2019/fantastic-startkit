import{_ as s,o as n,c as a,R as p}from"./chunks/framework.GMe7lAwE.js";const E=JSON.parse('{"title":"环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configure.md","filePath":"guide/configure.md"}'),e={name:"guide/configure.md"},l=p(`<h1 id="环境配置" tabindex="-1">环境配置 <a class="header-anchor" href="#环境配置" aria-label="Permalink to &quot;环境配置&quot;">​</a></h1><p>默认提供三套环境配置，分别为：</p><h2 id="开发环境-env-development" tabindex="-1">开发环境 <code>.env.development</code> <a class="header-anchor" href="#开发环境-env-development" aria-label="Permalink to &quot;开发环境 \`.env.development\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 页面标题</span></span>
<span class="line"><span>VITE_APP_TITLE = 页面标题(development)</span></span>
<span class="line"><span># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否开启代理</span></span>
<span class="line"><span>VITE_OPEN_PROXY = true</span></span></code></pre></div><h2 id="测试环境-env-test" tabindex="-1">测试环境 <code>.env.test</code> <a class="header-anchor" href="#测试环境-env-test" aria-label="Permalink to &quot;测试环境 \`.env.test\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NODE_ENV = production</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 页面标题</span></span>
<span class="line"><span>VITE_APP_TITLE = 页面标题(test)</span></span>
<span class="line"><span># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否在打包时启用 Mock</span></span>
<span class="line"><span>VITE_BUILD_MOCK = true</span></span>
<span class="line"><span># 是否在打包时生成 sourcemap</span></span>
<span class="line"><span>VITE_BUILD_SOURCEMAP = true</span></span>
<span class="line"><span># 是否在打包时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS =</span></span>
<span class="line"><span># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE =</span></span></code></pre></div><h2 id="生产环境-env-production" tabindex="-1">生产环境 <code>.env.production</code> <a class="header-anchor" href="#生产环境-env-production" aria-label="Permalink to &quot;生产环境 \`.env.production\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NODE_ENV = production</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 页面标题</span></span>
<span class="line"><span>VITE_APP_TITLE = 页面标题</span></span>
<span class="line"><span># 接口请求地址，会设置到 axios 的 baseURL 参数上</span></span>
<span class="line"><span>VITE_APP_API_BASEURL = /</span></span>
<span class="line"><span># 调试工具，可设置 eruda 或 vconsole，如果不需要开启则留空</span></span>
<span class="line"><span>VITE_APP_DEBUG_TOOL =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否在打包时启用 Mock</span></span>
<span class="line"><span>VITE_BUILD_MOCK = false</span></span>
<span class="line"><span># 是否在打包时生成 sourcemap</span></span>
<span class="line"><span>VITE_BUILD_SOURCEMAP = false</span></span>
<span class="line"><span># 是否在打包时开启压缩，支持 gzip 和 brotli</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip,brotli</span></span>
<span class="line"><span># 是否在打包后生成存档，支持 zip 和 tar</span></span>
<span class="line"><span>VITE_BUILD_ARCHIVE =</span></span></code></pre></div><p>其中 <code>VITE_APP_TITLE</code> <code>VITE_APP_API_BASEURL</code> <code>VITE_APP_DEBUG_TOOL</code> 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。而其余配置则在不同环境下有不同用途，例如开发环境用于本地开发使用，测试环境和生产环境用于构建使用。</p><p>开发者可根据实际业务需求进行扩展，如果对这块不熟悉，请阅读 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Vite - 环境变量和模式</a> 章节。</p>`,10),i=[l];function c(t,o,d,_,r,h){return n(),a("div",null,i)}const P=s(e,[["render",c]]);export{E as __pageData,P as default};
