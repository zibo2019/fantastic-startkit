import{_ as a,o as s,c as e,R as n}from"./chunks/framework.GMe7lAwE.js";const b=JSON.parse('{"title":"构建与预览","description":"","frontmatter":{},"headers":[],"relativePath":"guide/build.md","filePath":"guide/build.md"}'),p={name:"guide/build.md"},t=n(`<h1 id="构建与预览" tabindex="-1">构建与预览 <a class="header-anchor" href="#构建与预览" aria-label="Permalink to &quot;构建与预览&quot;">​</a></h1><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><p>项目开发完成之后，可以执行 <code>pnpm build</code> 命令进行构建，构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件。</p><p>如果是需要构建测试环境，则执行 <code>pnpm build:test</code> 命令，对应会在根目录生成 dist-test 文件夹。</p><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p>生成好的 dist 文件夹一般需要部署至服务器才算部署发布成功，但为了保证构建出来的文件能正常运行，开发者通常希望能在本地先预览一下，可执行 <code>pnpm serve</code> 或 <code>pnpm serve:test</code> 命令预览不同环境构建出的文件夹。</p><h2 id="压缩" tabindex="-1">压缩 <a class="header-anchor" href="#压缩" aria-label="Permalink to &quot;压缩&quot;">​</a></h2><p>在环境配置文件里设置 <code>VITE_BUILD_COMPRESS</code> 即可在构建时生成 <code>.gz</code> 或 <code>.br</code> 文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 单独开启 gzip</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单独开启 brotli ，brotli 是比 gzip 压缩率更高的算法</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = brotli</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者也可以都开启，两者可以共存</span></span>
<span class="line"><span>VITE_BUILD_COMPRESS = gzip,brotli</span></span></code></pre></div><p>brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突。</p><p>两者均需要 nginx 安装指定模块并开启后才会生效。</p><h2 id="其它设置" tabindex="-1">其它设置 <a class="header-anchor" href="#其它设置" aria-label="Permalink to &quot;其它设置&quot;">​</a></h2><p>在环境配置文件里除了可以设置压缩选项，还可设置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 是否在打包时生成 sourcemap</span></span>
<span class="line"><span>VITE_BUILD_SOURCEMAP = true</span></span></code></pre></div>`,14),i=[t];function o(l,c,d,r,h,_){return s(),e("div",null,i)}const g=a(p,[["render",o]]);export{b as __pageData,g as default};
