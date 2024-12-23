import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as c}from"./app-Kkp_66uf.js";const d={},k=n("h1",{id:"_259-较小的三数之和-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_259-较小的三数之和-🔒","aria-hidden":"true"},"#"),s(" 259. 较小的三数之和 🔒")],-1),m=n("code",null,"数组",-1),h=n("code",null,"双指针",-1),v=n("code",null,"二分查找",-1),_=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of n integers nums and a target, find the number of index triplets <code>i, j, k</code> with <code>0 &lt;= i &lt; j &lt; k &lt; n</code> that satisfy the condition <code>nums[i] + nums[j] + nums[k] &lt; target</code>.</p><p><strong>Example:</strong></p><blockquote><p>Input: nums = [-2,0,1,3], and target = 2</p><p>Output: 2</p></blockquote><p>Explanation:</p><p>Because there are two triplets which sums are less than 2: <code>[-2,0,1]</code>、<code>[-2,0,3]</code></p><p>Follow up: Could you solve it in O(n^2) runtime?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 nums，要求返回三数之和小于一个目标值的情况的个数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',10),j=n("li",null,"也可以使用对撞指针；",-1),x=n("li",null,"先将数组排序，i 从后往前扫描，j，k 两个指针开始一前一后对撞，j 从数组首位开始，k 为 i 的前一个数字；",-1),E=n("li",null,"若三数之和大于等于 target，则 k 向左移动，继续判断；",-1),L=n("li",null,[s("若三数之和小于 target，则 j 与 k 之间的所有数做为 k，都满足 "),n("code",null,"nums[i] + nums[j] + nums[k] < target"),s("，此时将 j 向右移动，继续判断；")],-1),B=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">threeSumSmaller</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> k <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				k<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> k <span class="token operator">-</span> j<span class="token punctuation">;</span>
				j<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function C(N,S){const l=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",g,[w,a(p)])]),y,n("ul",null,[n("li",null,[s("这道题是 3Sum 问题的一个变形，与 "),a(e,{to:"/problem/0015.html"},{default:t(()=>[s("第 15 题")]),_:1}),s("、"),a(e,{to:"/problem/0016.html"},{default:t(()=>[s("第 16 题")]),_:1}),s(" 类似，不过此题不需要排除数值相等的情况。")]),j,x,E,L]),B])}const I=i(d,[["render",C],["__file","0259.html.vue"]]);export{I as default};
