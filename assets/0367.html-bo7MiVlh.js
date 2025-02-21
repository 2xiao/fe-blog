import{_ as p,r as c,o as r,c as d,a as n,b as e,d as t,w as s,f as i,e as u}from"./app-9CeBk-uV.js";const m={},h=n("h1",{id:"_367-有效的完全平方数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_367-有效的完全平方数","aria-hidden":"true"},"#"),e(" 367. 有效的完全平方数")],-1),k=n("code",null,"数学",-1),_=n("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/valid-perfect-square",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/valid-perfect-square",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer num, return <code>true</code> <em>if</em> <code>num</code> <em>is a perfect square or</em> <code>false</code> <em>otherwise</em>.</p><p>A <strong>perfect square</strong> is an integer that is the square of an integer. In other words, it is the product of some integer with itself.</p><p>You must not use any built-in library function, such as <code>sqrt</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 16</p><p>Output: true</p><p>Explanation: We return true because 4 * 4 = 16 and 4 is an integer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 14</p><p>Output: false</p><p>Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数 <code>num</code> 。如果 <code>num</code> 是一个完全平方数，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>完全平方数</strong> 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。</p><p>不能使用任何内置的库函数，如 <code>sqrt</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 16</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 返回 true ，因为 4 * 4 = 16 且 4 是一个整数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 14</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以利用 <strong>二分查找</strong> 来高效判断 <code>num</code> 是否为完全平方数。</p><p>如果使用暴力法，从 <code>1</code> 到 <code>num</code> 遍历所有可能的整数，并判断其平方是否等于 <code>num</code>，这种方法的时间复杂度为 <code>O(sqrt(num))</code>，对于较大的 <code>num</code> 效率较低。</p><p>使用二分查找算法，可以在对数时间内找到 <code>num</code> 是否为完全平方数。假设 <code>x</code> 是 <code>num</code> 的平方根，我们可以限制 <code>x</code> 的取值范围在 <code>[1, num]</code>。通过二分查找，逐步逼近 <code>x</code>，检查中间值 <code>mid</code> 的平方是否等于 <code>num</code>，并根据结果缩小搜索范围。</p><ol><li><p>初始化 <code>left = 1</code> 和 <code>right = num</code>，定义搜索范围。</p></li><li><p>计算中间值 <code>mid = Math.floor((left + right) / 2)</code>。</p></li><li><p>比较 <code>mid * mid</code> 和 <code>num</code>：</p><ul><li>如果 <code>mid * mid == num</code>，返回 <code>true</code>。</li><li>如果 <code>mid * mid &gt; num</code>，说明平方根在左半部分，调整右边界：<code>right = mid - 1</code>。</li><li>如果 <code>mid * mid &lt; num</code>，说明平方根在右半部分，调整左边界：<code>left = mid + 1</code>。</li></ul></li><li><p>如果搜索完成后未找到满足条件的整数，返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，二分查找每次搜索将范围缩小一半，最多进行 <code>O(log n)</code> 次比较。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPerfectSquare</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 初始化搜索范围</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算中间值</span>
		<span class="token keyword">const</span> product <span class="token operator">=</span> mid <span class="token operator">*</span> mid<span class="token punctuation">;</span> <span class="token comment">// 计算平方值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>product <span class="token operator">===</span> num<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 如果找到完全平方数</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>product <span class="token operator">&gt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 缩小搜索范围到左半部分</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 缩小搜索范围到右半部分</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果未找到，返回 false</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"69",-1),w=n("td",{style:{"text-align":"left"}},"x 的平方根",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"数学",-1),I=n("code",null,"二分查找",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"633",-1),M=n("td",{style:{"text-align":"left"}},"平方数之和",-1),R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},W=n("code",null,"数学",-1),A=n("code",null,"双指针",-1),G=n("code",null,"二分查找",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/sum-of-square-numbers",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/sum-of-square-numbers",target:"_blank",rel:"noopener noreferrer"};function D(F,H){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),d("div",null,[h,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",g,[f,t(o)]),e(),n("a",b,[v,t(o)])]),x,i(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[q,w,n("td",E,[t(a,{to:"/problem/0069.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",O,[t(a,{to:"/tag/math.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[I]),_:1})]),L,n("td",N,[n("a",V,[e("🀄️"),t(o)]),e(),n("a",j,[e("🔗"),t(o)])])]),n("tr",null,[B,M,R,n("td",S,[t(a,{to:"/tag/math.html"},{default:s(()=>[W]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[A]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[G]),_:1})]),P,n("td",T,[n("a",Y,[e("🀄️"),t(o)]),e(),n("a",z,[e("🔗"),t(o)])])])])])])}const K=p(m,[["render",D],["__file","0367.html.vue"]]);export{K as default};
