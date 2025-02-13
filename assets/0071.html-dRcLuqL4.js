import{_ as i,r as t,o as l,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-MXSjQbID.js";const u={},k=n("h1",{id:"_71-简化路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_71-简化路径","aria-hidden":"true"},"#"),s(" 71. 简化路径")],-1),h=n("code",null,"栈",-1),m=n("code",null,"字符串",-1),f={href:"https://leetcode.cn/problems/simplify-path",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/simplify-path",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>path</code>, which is an <strong>absolute path</strong> (starting with a slash <code>&#39;/&#39;</code>) to a file or directory in a Unix-style file system, convert it to the simplified <strong>canonical path</strong>.</p><p>In a Unix-style file system, a period <code>&#39;.&#39;</code> refers to the current directory, a double period <code>&#39;..&#39;</code> refers to the directory up a level, and any multiple consecutive slashes (i.e. <code>&#39;//&#39;</code>) are treated as a single slash <code>&#39;/&#39;</code>. For this problem, any other format of periods such as <code>&#39;...&#39;</code> are treated as file/directory names.</p><p>The <strong>canonical path</strong> should have the following format:</p><ul><li>The path starts with a single slash <code>&#39;/&#39;</code>.</li><li>Any two directories are separated by a single slash <code>&#39;/&#39;</code>.</li><li>The path does not end with a trailing <code>&#39;/&#39;</code>.</li><li>The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period <code>&#39;.&#39;</code> or double period <code>&#39;..&#39;</code>)</li></ul><p>Return <em>the simplified <strong>canonical path</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: path = &quot;/home/&quot;</p><p>Output: &quot;/home&quot;</p><p>Explanation: Note that there is no trailing slash after the last directory name.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: path = &quot;/../&quot;</p><p>Output: &quot;/&quot;</p><p>Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: path = &quot;/home//foo/&quot;</p><p>Output: &quot;/home/foo&quot;</p><p>Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= path.length &lt;= 3000</code></li><li><code>path</code> consists of English letters, digits, period <code>&#39;.&#39;</code>, slash <code>&#39;/&#39;</code> or <code>&#39;_&#39;</code>.</li><li><code>path</code> is a valid absolute Unix path.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>path</code> ，表示指向某一文件或目录的 Unix 风格 <strong>绝对路径</strong> （以 <code>&#39;/&#39;</code> 开头），请你将其转化为更加简洁的规范路径。</p><p>在 Unix 风格的文件系统中，一个点（<code>.</code>）表示当前目录本身；此外，两个点 （<code>..</code>） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，<code>&#39;//&#39;</code>）都被视为单个斜杠 <code>&#39;/&#39;</code> 。 对于此问题，任何其他格式的点（例如，<code>&#39;...&#39;</code>）均被视为文件/目录名称。</p><p>请注意，返回的 <strong>规范路径</strong> 必须遵循下述格式：</p><ul><li>始终以斜杠 <code>&#39;/&#39;</code> 开头。</li><li>两个目录名之间必须只有一个斜杠 <code>&#39;/&#39;</code> 。</li><li>最后一个目录名（如果存在）不能 以 <code>&#39;/&#39;</code> 结尾。</li><li>此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 <code>&#39;.&#39;</code> 或 <code>&#39;..&#39;</code>）。</li></ul><p>返回简化后得到的 <strong>规范路径</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题利用栈先进后出的特性处理上级目录 <code>&#39;..&#39;</code>，最后组装化简后的路径即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">simplifyPath</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token operator">||</span> i <span class="token operator">==</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function y(w,x){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",f,[g,a(p)]),s(),n("a",v,[b,a(p)])]),_])}const E=i(u,[["render",y],["__file","0071.html.vue"]]);export{E as default};
