import{_ as i,r as p,o as r,c as u,a as n,b as s,d as t,w as a,f as d,e as l}from"./app-9Xw5divW.js";const k={},m=n("h1",{id:"_16-最接近的三数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_16-最接近的三数之和","aria-hidden":"true"},"#"),s(" 16. 最接近的三数之和")],-1),h=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),v=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of length <code>n</code> and an integer <code>target</code>, find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.</p><p>Return <em>the sum of the three integers</em>.</p><p>You may assume that each input would have exactly one solution.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-1,2,1,-4], target = 1</p><p>Output: 2</p><p>Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,0,0], target = 1</p><p>Output: 0</p><p>Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 500</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^4 &lt;= target &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，要求在这个数组中找出 3 个数之和离 target 最近。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),w=n("li",null,[n("p",null,"先对数组进行排序，i 从后往前扫描，这里同样需要注意数组中存在多个重复数字的问题。i 在循环的时候和后一个数进行比较，如果相等，i 继续往前移，直到移到下一个和前一个数字不同的位置。")],-1),j=n("li",null,[n("p",null,"j，k 两个指针开始一前一后对撞。j 从数组首位开始，k 为 i 的前一个数字，由于经过排序，所以 j < k。对比三个数的和与 target 的大小，小于 target，j 往后移动；大于 target，k 往前移动，逐渐夹逼出最接近 target 的值。")],-1),E=l(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSumClosest</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 排除 i 重复的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> k <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> minus <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> minus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					diff <span class="token operator">=</span> minus<span class="token punctuation">;</span>
					res <span class="token operator">=</span> sum<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> target<span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					k<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					j<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"15",-1),I=n("td",{style:{"text-align":"left"}},"三数之和",-1),L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},q=n("code",null,"数组",-1),R=n("code",null,"双指针",-1),T=n("code",null,"排序",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"259",-1),O=n("td",{style:{"text-align":"left"}},"较小的三数之和 🔒",-1),F={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"双指针",-1),D=n("code",null,"二分查找",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"};function U(W,Z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",b,[g,t(o)]),s(),n("a",f,[y,t(o)])]),x,n("ul",null,[n("li",null,[n("p",null,[s("这一题看似和 "),t(e,{to:"/problem/0015.html"},{default:a(()=>[s("第 15 题")]),_:1}),s(" 和 "),t(e,{to:"/problem/0018.html"},{default:a(()=>[s("第 18 题")]),_:1}),s(" 很像，都是求 3 或者 4 个数之和的问题，也可以使用对撞指针。")])]),w,j]),E,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[C,I,n("td",L,[t(e,{to:"/problem/0015.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/array.html"},{default:a(()=>[q]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[R]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[T]),_:1})]),B,n("td",M,[n("a",S,[s("🀄️"),t(o)]),s(),n("a",A,[s("🔗"),t(o)])])]),n("tr",null,[G,O,n("td",F,[t(e,{to:"/problem/0259.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",X,[t(e,{to:"/tag/array.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[D]),_:1}),s(),H]),J,n("td",K,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])])])])])}const nn=i(k,[["render",U],["__file","0016.html.vue"]]);export{nn as default};
