import{_ as r,r as c,o as p,c as i,a as n,b as e,d as s,w as a,f as d,e as u}from"./app-Kkp_66uf.js";const m={},k=n("h1",{id:"_507-完美数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_507-完美数","aria-hidden":"true"},"#"),e(" 507. 完美数")],-1),h=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/perfect-number",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/perfect-number",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),x={href:"https://en.wikipedia.org/wiki/Perfect_number",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"perfect number",-1),w=n("strong",null,"positive integer",-1),q=n("strong",null,"positive divisors",-1),E=n("strong",null,"divisor",-1),N=n("code",null,"x",-1),C=n("code",null,"x",-1),L=u(`<p>Given an integer <code>n</code>, return <code>true</code> <em>if</em><code>n</code> <em>is a perfect number, otherwise return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 28</p><p>Output: true</p><p>Explanation: 28 = 1 + 2 + 4 + 7 + 14</p><p>1, 2, 4, 7, and 14 are all divisors of 28.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 7</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 10^8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>对于一个 <strong>正整数</strong> ，如果它和除了它自身以外的所有 <strong>正因子</strong> 之和相等，我们称它为 <strong>「完美数」</strong> 。</p><p>给定一个 **整数 **<code>n</code>， 如果是完美数，返回 <code>true</code>；否则返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 28</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 28 = 1 + 2 + 4 + 7 + 14</p><p>1, 2, 4, 7, 和 14 是 28 的所有正因子。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 7</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 10^8</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于一个数 <code>num</code>，可以从 1 开始枚举其所有可能的正因子，累加这些因子的和，如果 <code>sum == num</code>，则 <code>num</code> 是完美数。</p><ol><li>如果 <code>num &lt;= 1</code>，直接返回 <code>false</code>，因为完美数定义中要求「正因子之和不包括自身」。</li><li>初始化累加因子的和 <code>sum = 1</code>，因为 1 是任何数的正因子。</li><li>枚举所有可能的因子： <ul><li>如果一个数可以被 <code>i</code> 整除，则 <code>num / i</code> 也是一个因子。</li><li>因此，遍历时只需从 2 遍历到 <code>sqrt(num)</code>，因为超出 <code>sqrt(num)</code> 的部分可以通过 <code>num / i</code> 推出。</li><li>将 <code>i</code> 和 <code>num / i</code> 加入累加因子和 <code>sum</code> 中，注意要避免重复累加平方根的因子。 <ul><li>例如，49 的平方根是 7，<code>7 * 7 = 49</code>，因子 7 只计算一次。</li></ul></li></ul></li><li>遍历结束后，将正因子之和与 <code>num</code> 比较。如果相等，返回 <code>true</code>；否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(sqrt(num))</code>，遍历范围是从 2 到 <code>sqrt(num)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了固定数量的变量存储中间结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> (number<span class="token punctuation">}</span> num
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkPerfectNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 边界情况，1 不是完美数</span>

	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 因为 1 是任何数的正因子</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> i<span class="token punctuation">;</span> <span class="token comment">// 累加较小的因子</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> num <span class="token operator">/</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				sum <span class="token operator">+=</span> num <span class="token operator">/</span> i<span class="token punctuation">;</span> <span class="token comment">// 累加较大的因子</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 比较累加因子和 sum 与 num</span>
	<span class="token keyword">return</span> sum <span class="token operator">===</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),V=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"728",-1),O=n("td",{style:{"text-align":"left"}},"自除数",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},A=n("code",null,"数学",-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"};function T(z,D){const l=c("font"),o=c("RouterLink"),t=c("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(o,{to:"/tag/math.html"},{default:a(()=>[h]),_:1}),e("  🔗 "),n("a",_,[g,s(t)]),e(),n("a",b,[f,s(t)])]),v,n("p",null,[e("A "),n("a",x,[y,s(t)]),e(" is a "),w,e(" that is equal to the sum of its "),q,e(" , excluding the number itself. A "),E,e(" of an integer "),N,e(" is an integer that can divide "),C,e(" evenly.")]),L,d(" prettier-ignore "),n("table",null,[V,n("tbody",null,[n("tr",null,[I,O,n("td",j,[s(o,{to:"/problem/0728.html"},{default:a(()=>[e("[✓]")]),_:1})]),n("td",B,[s(o,{to:"/tag/math.html"},{default:a(()=>[A]),_:1})]),P,n("td",R,[n("a",G,[e("🀄️"),s(t)]),e(),n("a",S,[e("🔗"),s(t)])])])])])])}const H=r(m,[["render",T],["__file","0507.html.vue"]]);export{H as default};
