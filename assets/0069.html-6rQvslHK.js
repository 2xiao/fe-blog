import{_ as c,r as l,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-Kkp_66uf.js";const h={},k=n("h1",{id:"_69-x-的平方根",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_69-x-的平方根","aria-hidden":"true"},"#"),e(" 69. x 的平方根")],-1),_=n("code",null,"数学",-1),m=n("code",null,"二分查找",-1),x={href:"https://leetcode.cn/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a non-negative integer <code>x</code>, return <em>the square root of</em><code>x</code> <em>rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.</p><p>You <strong>must not use</strong> any built-in exponent function or operator.</p><ul><li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ** 0.5</code> in python.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: x = 4</p><p>Output: 2</p><p>Explanation: The square root of 4 is 2, so we return 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = 8</p><p>Output: 2</p><p>Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= x &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数 <code>x</code> ，计算并返回 <code>x</code> 的 算术平方根 。</p><p>由于返回类型是整数，结果只保留 <strong>整数部分</strong> ，小数部分将被 <strong>舍去</strong> 。</p><p>注意：不允许使用任何内置指数函数和算符，例如 c++ 中的 <code>pow(x, 0.5)</code> 或者 python 中的 <code>x ** 0.5</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过二分查找得到答案。</p><ul><li>二分查找的下界为 <code>0</code>，上界可以粗略地设定为 <code>x</code>。</li><li>在二分查找的每一步中，只需要比较中间元素 <code>mid</code> 的平方与 <code>x</code> 的大小关系，并通过比较的结果调整上下界的范围。</li><li>由于所有的运算都是整数运算，不会存在误差，因此在得到最终的答案 <code>res</code> 后，也就不需要再去尝试 <code>res + 1</code> 了。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(logx)</code>，即为二分查找需要的次数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mySqrt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> x<span class="token punctuation">,</span>
		res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> mid<span class="token punctuation">;</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"50",-1),q=n("td",{style:{"text-align":"left"}},"Pow(x, n)",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"递归",-1),N=n("code",null,"数学",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"367",-1),B=n("td",{style:{"text-align":"left"}},"有效的完全平方数",-1),R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},F=n("code",null,"数学",-1),G=n("code",null,"二分查找",-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/valid-perfect-square",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/valid-perfect-square",target:"_blank",rel:"noopener noreferrer"};function D(H,J){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/math.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),n("a",x,[b,t(o)]),e(),n("a",g,[f,t(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[t(a,{to:"/problem/0050.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[L]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[N]),_:1})]),V,n("td",I,[n("a",O,[e("🀄️"),t(o)]),e(),n("a",T,[e("🔗"),t(o)])])]),n("tr",null,[j,B,n("td",R,[t(a,{to:"/problem/0367.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",S,[t(a,{to:"/tag/math.html"},{default:s(()=>[F]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[G]),_:1})]),P,n("td",Y,[n("a",z,[e("🀄️"),t(o)]),e(),n("a",A,[e("🔗"),t(o)])])])])])])}const M=c(h,[["render",D],["__file","0069.html.vue"]]);export{M as default};
