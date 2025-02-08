import{_ as r,r as l,o as i,c as p,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-totCBmv-.js";const h={},m=n("h1",{id:"_357-统计各位数字都不同的数字个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_357-统计各位数字都不同的数字个数","aria-hidden":"true"},"#"),e(" 357. 统计各位数字都不同的数字个数")],-1),k=n("code",null,"数学",-1),_=n("code",null,"动态规划",-1),g=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/count-numbers-with-unique-digits",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-numbers-with-unique-digits",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return the count of all numbers with unique digits, <code>x</code>, where <code>0 &lt;= x &lt; 10^n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 91</p><p>Explanation: The answer should be the total numbers in the range of 0 ≤ x &lt; 100, excluding 11,22,33,44,55,66,77,88,99</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 0</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，统计并返回各位数字都不同的数字 <code>x</code> 的个数，其中 <code>0 &lt;= x &lt; 10^n</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> 91</p><p><strong>解释：</strong> 答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x &lt; 100 范围内的所有数字。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 8</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong><code>n == 0</code> 的特殊情况</strong>：</p><ul><li>只有一个数字 <code>0</code>，答案为 <code>1</code>。</li></ul></li><li><p><strong>枚举长度为 1 到 <code>n</code> 的所有数字</strong>：</p><ul><li>长度为 1 的数字：<code>10</code> 个（<code>0</code> 到 <code>9</code>）。</li><li>长度为 2 的数字：第一位有 <code>9</code> 种选择（不能为 <code>0</code>），第二位有 <code>9</code> 种选择（不能与第一位重复），共 <code>9 * 9</code>。</li><li>长度为 3 的数字：第一位有 <code>9</code> 种选择，第二位有 <code>9</code> 种，第三位有 <code>8</code> 种（共 <code>9 * 9 * 8</code>）。</li><li>依次类推。</li></ul></li><li><p><strong>公式化计算</strong>：</p><ul><li>对于长度为 <code>k</code> 的数字，总的不同数字个数为： <code>9 * 9 * 8 * ... * (10 - k + 1)</code></li><li>累加所有长度为 <code>1</code> 到 <code>n</code> 的结果即可。</li><li>使用循环递推的方式计算每个长度的值，避免直接递归导致的额外开销。</li></ul></li></ol><h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为我们最多只计算 <code>n</code> 个长度的结果。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countNumbersWithUniqueDigits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 特殊情况</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 包含长度为 1 的数字（0 到 9）</span>
	<span class="token keyword">let</span> unique <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment">// 从第二位开始的独特数字组合数</span>
	<span class="token keyword">let</span> availableNumber <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment">// 可供选择的数字数量</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> availableNumber <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		unique <span class="token operator">*=</span> availableNumber<span class="token punctuation">;</span> <span class="token comment">// 更新当前长度的独特组合数</span>
		res <span class="token operator">+=</span> unique<span class="token punctuation">;</span> <span class="token comment">// 累加结果</span>
		availableNumber<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 剩余可选数字减少</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2376",-1),N=n("td",{style:{"text-align":"left"}},"统计特殊整数",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"数学",-1),L=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/count-special-integers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/count-special-integers",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"3032",-1),T=n("td",{style:{"text-align":"left"}},"统计各位数字都不同的数字个数 II 🔒",-1),D=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"哈希表",-1),S=n("code",null,"数学",-1),U=n("code",null,"动态规划",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/count-numbers-with-unique-digits-ii",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/count-numbers-with-unique-digits-ii",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[m,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/backtracking.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",b,[v,t(o)]),e(),n("a",f,[x,t(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,N,E,n("td",I,[t(a,{to:"/tag/math.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[L]),_:1})]),V,n("td",O,[n("a",j,[e("🀄️"),t(o)]),e(),n("a",B,[e("🔗"),t(o)])])]),n("tr",null,[R,T,D,n("td",G,[t(a,{to:"/tag/hash-table.html"},{default:s(()=>[M]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[U]),_:1})]),W,n("td",z,[n("a",A,[e("🀄️"),t(o)]),e(),n("a",F,[e("🔗"),t(o)])])])])])])}const Q=r(h,[["render",H],["__file","0357.html.vue"]]);export{Q as default};
