import{_ as r,r as l,o as i,c as p,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-3dvbhwow.js";const h={},m=n("h1",{id:"_201-数字范围按位与",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_201-数字范围按位与","aria-hidden":"true"},"#"),e(" 201. 数字范围按位与")],-1),k=n("code",null,"位运算",-1),g={href:"https://leetcode.cn/problems/bitwise-and-of-numbers-range",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/bitwise-and-of-numbers-range",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>left</code> and <code>right</code> that represent the range <code>[left, right]</code>, return <em>the bitwise AND of all numbers in this range, inclusive</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: left = 5, right = 7</p><p>Output: 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: left = 0, right = 0</p><p>Output: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: left = 1, right = 2147483647</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= left &lt;= right &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>left</code> 和 <code>right</code> ，表示区间 <code>[left, right]</code>，返回此区间内所有数字 <strong>按位与</strong> 的结果（包含 <code>left</code> 、<code>right</code> 端点）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>直接遍历范围内的每个数字会非常低效，因此需要更高效的解决方案。</p><p>可以先找到 <code>m</code> 和 <code>n</code> 的公共前缀，并利用位运算特性，高效地计算出范围内所有整数的按位与结果。</p><ol><li><p><strong>位运算特性</strong>：</p><ul><li>按位与操作会将数字的某些位清零，当两个数字的某一位不同（即一个是 <code>0</code>，另一个是 <code>1</code>）时，该位的结果必为 <code>0</code>。</li><li>在某些情况下，随着数字的增加，某些低位会变为 <code>0</code>，而高位则保持不变。</li></ul></li><li><p><strong>找到公共前缀</strong>：</p><ul><li>将 <code>m</code> 和 <code>n</code> 逐位比较，直到它们的值相等，记录下公共前缀。</li><li>这个公共前缀就是在范围内所有数字的按位与结果的高位部分。</li></ul></li><li><p><strong>右移操作</strong>：</p><ul><li>在 <code>m</code> 和 <code>n</code> 不相等时，持续右移这两个数字，直到它们相等。每次右移都会消除最低位，帮助找到公共前缀。</li><li>记录右移的次数，以便最终将公共前缀左移回原位。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(max(m, n)))</code>，因为在最坏情况下，我们最多需要右移 32 次（对于 32 位整数）。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rangeBitwiseAnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> shift <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到 left 和 right 的公共前缀</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		left <span class="token operator">=</span> left <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 left</span>
		right <span class="token operator">=</span> right <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 right</span>
		shift<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 记录右移的次数</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 将公共前缀左移回原位</span>
	<span class="token keyword">return</span> left <span class="token operator">&lt;&lt;</span> shift<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2401",-1),w=n("td",{style:{"text-align":"left"}},"最长优雅子数组",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},N=n("code",null,"位运算",-1),C=n("code",null,"数组",-1),I=n("code",null,"滑动窗口",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"};function j(A,R){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[m,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),n("a",g,[_,t(o)]),e(),n("a",b,[f,t(o)])]),v,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,q,n("td",E,[t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[N]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/sliding-window.html"},{default:s(()=>[I]),_:1})]),L,n("td",O,[n("a",V,[e("🀄️"),t(o)]),e(),n("a",B,[e("🔗"),t(o)])])])])])])}const G=r(h,[["render",j],["__file","0201.html.vue"]]);export{G as default};
