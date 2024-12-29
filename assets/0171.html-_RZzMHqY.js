import{_ as r,r as l,o as p,c as i,a as e,b as t,d as n,w as s,f as u,e as d}from"./app-r0ql_Osa.js";const h={},m=e("h1",{id:"_171-excel-表列序号",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_171-excel-表列序号","aria-hidden":"true"},"#"),t(" 171. Excel 表列序号")],-1),k=e("code",null,"数学",-1),g=e("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/excel-sheet-column-number",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/excel-sheet-column-number",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>columnTitle</code> that represents the column title as appears in an Excel sheet, return <em>its corresponding column number</em>.</p><p>For example:</p><blockquote><p>A -&gt; 1 B -&gt; 2 C -&gt; 3 ... Z -&gt; 26 AA -&gt; 27 AB -&gt; 28 ...</p></blockquote><p><strong>Example 1:</strong></p><blockquote><p>Input: columnTitle = &quot;A&quot;</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: columnTitle = &quot;AB&quot;</p><p>Output: 28</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: columnTitle = &quot;ZY&quot;</p><p>Output: 701</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= columnTitle.length &lt;= 7</code></li><li><code>columnTitle</code> consists only of uppercase English letters.</li><li><code>columnTitle</code> is in the range <code>[&quot;A&quot;, &quot;FXSHRXW&quot;]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>columnTitle</code> ，表示 Excel 表格中的列名称。返回 <em>该列名称对应的列序号</em> 。</p><p>例如：</p><blockquote><p>A -&gt; 1 B -&gt; 2 C -&gt; 3 ... Z -&gt; 26 AA -&gt; 27 AB -&gt; 28 ...</p></blockquote><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> columnTitle = &quot;A&quot;</p><p><strong>输出:</strong> 1</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> columnTitle = &quot;AB&quot;</p><p><strong>输出:</strong> 28</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> columnTitle = &quot;ZY&quot;</p><p><strong>输出:</strong> 701</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= columnTitle.length &lt;= 7</code></li><li><code>columnTitle</code> 仅由大写英文组成</li><li><code>columnTitle</code> 在范围 <code>[&quot;A&quot;, &quot;FXSHRXW&quot;]</code> 内</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化变量 <code>res = 0</code>，用于存储最终结果。</li><li>遍历字符串 <code>columnTitle</code>，从高位到低位，依次将字符对应的数值按权重加到结果中。 <ul><li>计算当前字符的数值 <code>cur = columnTitle.charCodeAt(i) - &#39;A&#39;.charCodeAt() + 1</code>。</li><li>权重按从左到右递增的 26 次幂计算，按权重更新结果：<code>res = res * 26 + cur</code>。</li></ul></li><li>遍历结束后，<code>res</code> 即为结果，返回 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>columnTitle</code> 的长度。我们需要遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量级变量存储中间结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">columnTitle</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">titleToNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">columnTitle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnTitle<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> cur <span class="token operator">=</span> columnTitle<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 计算当前字符数值</span>
		res <span class="token operator">=</span> <span class="token number">26</span> <span class="token operator">*</span> res <span class="token operator">+</span> cur<span class="token punctuation">;</span> <span class="token comment">// 按 26 进制规则更新结果</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回最终结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"168",-1),T=e("td",{style:{"text-align":"left"}},"Excel 表列名称",-1),A={style:{"text-align":"center"}},E={style:{"text-align":"left"}},w=e("code",null,"数学",-1),C=e("code",null,"字符串",-1),B=e("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/excel-sheet-column-title",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/excel-sheet-column-title",target:"_blank",rel:"noopener noreferrer"},O=e("td",{style:{"text-align":"center"}},"2194",-1),V=e("td",{style:{"text-align":"left"}},"Excel 表中某个范围内的单元格",-1),R={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Z=e("code",null,"字符串",-1),j=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"};function W(Y,G){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[m,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",_,[b,n(a)]),t(),e("a",f,[x,n(a)])]),q,u(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[y,T,e("td",A,[n(o,{to:"/problem/0168.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",E,[n(o,{to:"/tag/math.html"},{default:s(()=>[w]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[C]),_:1})]),B,e("td",N,[e("a",I,[t("🀄️"),n(a)]),t(),e("a",L,[t("🔗"),n(a)])])]),e("tr",null,[O,V,e("td",R,[n(o,{to:"/problem/2194.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",X,[n(o,{to:"/tag/string.html"},{default:s(()=>[Z]),_:1})]),j,e("td",F,[e("a",S,[t("🀄️"),n(a)]),t(),e("a",H,[t("🔗"),n(a)])])])])])])}const D=r(h,[["render",W],["__file","0171.html.vue"]]);export{D as default};
