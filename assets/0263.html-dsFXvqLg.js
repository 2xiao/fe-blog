import{_ as r,r as l,o as p,c as d,a as e,b as t,d as n,w as o,f as i,e as u}from"./app-totCBmv-.js";const h={},_=e("h1",{id:"_263-丑数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_263-丑数","aria-hidden":"true"},"#"),t(" 263. 丑数")],-1),g=e("code",null,"数学",-1),m={href:"https://leetcode.cn/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An <strong>ugly number</strong> is a positive integer whose prime factors are limited to <code>2</code>, <code>3</code>, and <code>5</code>.</p><p>Given an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>is an<strong>ugly number</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 6</p><p>Output: true</p><p>Explanation: 6 = 2 × 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: true</p><p>Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 14</p><p>Output: false</p><p>Explanation: 14 is not ugly since it includes the prime factor 7.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>丑数</strong> 就是只包含质因数 <code>2</code>、<code>3</code> 和 <code>5</code> 的正整数。</p><p>给你一个整数 <code>n</code> ，请你判断 <code>n</code> 是否为 <strong>丑数</strong> 。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 6</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 6 = 2 × 3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 14</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 14 不是丑数，因为它包含了另外一个质因数 7 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的核心是利用质因数分解的思想，逐步被 <code>2</code>, <code>3</code>, 和 <code>5</code> 整除，直到无法整除为止。如果整除后剩下的数为 <code>1</code>，说明是丑数；否则，不是丑数。</p><ol><li><p><strong>定义丑数</strong>：</p><ul><li>丑数是只包含质因数 <code>2</code>, <code>3</code>, 和 <code>5</code> 的正整数。</li><li>特例：<code>1</code> 是丑数（没有质因数）。</li></ul></li><li><p><strong>提前排除无效输入</strong>：</p><ul><li>如果 <code>n &lt;= 0</code>，直接返回 <code>false</code>，因为丑数必须是正整数。</li></ul></li><li><p><strong>逐步整除</strong>：</p><ul><li>对于 <code>n &gt; 0</code>，不断用 <code>2</code>, <code>3</code>, 和 <code>5</code> 依次整除 <code>n</code>，直到无法整除为止。</li><li>如果最后的结果是 <code>1</code>，说明 <code>n</code> 只包含 <code>2</code>, <code>3</code>, 和 <code>5</code>，因此是丑数。</li><li>否则，<code>n</code> 包含其他质因数，不是丑数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是输入数值，主循环最多运行 <code>log_2(n) + log_3(n) + log_5(n)</code> 次，因为每次将 <code>n</code> 除以因数 <code>2</code>, <code>3</code>, 或 <code>5</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isUgly</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 丑数必须是正整数</span>
	<span class="token keyword">const</span> factors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 定义允许的质因数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> factor <span class="token keyword">of</span> factors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> factor <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 不断整除因数</span>
			n <span class="token operator">/=</span> factor<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果最终结果为1，则是丑数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),v=e("td",{style:{"text-align":"center"}},"202",-1),w=e("td",{style:{"text-align":"left"}},"快乐数",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=e("code",null,"哈希表",-1),C=e("code",null,"数学",-1),L=e("code",null,"双指针",-1),N=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"204",-1),R=e("td",{style:{"text-align":"left"}},"计数质数",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},S=e("code",null,"数组",-1),T=e("code",null,"数学",-1),U=e("code",null,"枚举",-1),z=e("code",null,"1+",-1),D=e("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},K=e("td",{style:{"text-align":"center"}},"264",-1),M=e("td",{style:{"text-align":"left"}},"丑数 II",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},W=e("code",null,"哈希表",-1),X=e("code",null,"数学",-1),Y=e("code",null,"动态规划",-1),Z=e("code",null,"1+",-1),$=e("td",{style:{"text-align":"center"}},"🟠",-1),ee={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"};function oe(se,ae){const c=l("font"),s=l("RouterLink"),a=l("ExternalLinkIcon");return p(),d("div",null,[_,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),n(s,{to:"/tag/math.html"},{default:o(()=>[g]),_:1}),t("  🔗 "),e("a",m,[k,n(a)]),t(),e("a",b,[f,n(a)])]),y,i(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[v,w,e("td",q,[n(s,{to:"/problem/0202.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",E,[n(s,{to:"/tag/hash-table.html"},{default:o(()=>[I]),_:1}),t(),n(s,{to:"/tag/math.html"},{default:o(()=>[C]),_:1}),t(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[L]),_:1})]),N,e("td",O,[e("a",V,[t("🀄️"),n(a)]),t(),e("a",j,[t("🔗"),n(a)])])]),e("tr",null,[B,R,e("td",A,[n(s,{to:"/problem/0204.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",G,[n(s,{to:"/tag/array.html"},{default:o(()=>[S]),_:1}),t(),n(s,{to:"/tag/math.html"},{default:o(()=>[T]),_:1}),t(),n(s,{to:"/tag/enumeration.html"},{default:o(()=>[U]),_:1}),t(),z]),D,e("td",F,[e("a",H,[t("🀄️"),n(a)]),t(),e("a",J,[t("🔗"),n(a)])])]),e("tr",null,[K,M,e("td",P,[n(s,{to:"/problem/0264.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",Q,[n(s,{to:"/tag/hash-table.html"},{default:o(()=>[W]),_:1}),t(),n(s,{to:"/tag/math.html"},{default:o(()=>[X]),_:1}),t(),n(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[Y]),_:1}),t(),Z]),$,e("td",ee,[e("a",te,[t("🀄️"),n(a)]),t(),e("a",ne,[t("🔗"),n(a)])])])])])])}const ce=r(h,[["render",oe],["__file","0263.html.vue"]]);export{ce as default};
