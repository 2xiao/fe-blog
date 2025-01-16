import{_ as i,r as c,o as r,c as p,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-KDJRKGep.js";const m={},h=n("h1",{id:"_2016-增量元素之间的最大差值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2016-增量元素之间的最大差值","aria-hidden":"true"},"#"),e(" 2016. 增量元素之间的最大差值")],-1),g=n("code",null,"数组",-1),k={href:"https://leetcode.cn/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code> of size <code>n</code>, find the <strong>maximum difference</strong> between <code>nums[i]</code> and <code>nums[j]</code> (i.e., <code>nums[j] - nums[i]</code>), such that <code>0 &lt;= i &lt; j &lt; n</code> and <code>nums[i] &lt; nums[j]</code>.</p><p>Return _the<strong>maximum difference</strong>. _If no such <code>i</code> and <code>j</code> exists, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [7,<strong><em>1</em></strong> ,<strong><em>5</em></strong> ,4]</p><p>Output: 4</p><p>Explanation:</p><p>The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.</p><p>Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i &gt; j, so it is not valid.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [9,4,3,2]</p><p>Output: -1</p><p>Explanation:</p><p>There is no i and j such that i &lt; j and nums[i] &lt; nums[j].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [<strong><em>1</em></strong> ,5,2,<strong><em>10</em></strong>]</p><p>Output: 9</p><p>Explanation:</p><p>The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，该数组的大小为 <code>n</code> ，请你计算 <code>nums[j] - nums[i]</code> 能求得的 <strong>最大差值</strong> ，其中 <code>0 &lt;= i &lt; j &lt; n</code> 且 <code>nums[i] &lt; nums[j]</code> 。</p><p>返回 <strong>最大差值</strong> 。如果不存在满足要求的 <code>i</code> 和 <code>j</code> ，返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [7,<em><strong>1</strong></em> ,<em><strong>5</strong></em> ,4]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。</p><p>注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 &gt; 4 ，但 i &gt; j 不满足题面要求，所以 6 不是有效的答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [9,4,3,2]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong></p><p>不存在同时满足 i &lt; j 和 nums[i] &lt; nums[j] 这两个条件的 i, j 组合。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [<em><strong>1</strong></em> ,5,2,<em><strong>10</strong></em>]</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong></p><p>最大差值出现在 i = 0 且 j = 3 时，nums[j] - nums[i] = 10 - 1 = 9 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>初始化 <code>min</code> 为数组的第一个元素。</li><li>初始化 <code>diff</code> 为 <code>-1</code>，表示当前没有找到满足条件的差值。</li><li>遍历数组，在每一步中： <ul><li>如果当前值 <code>num</code> 大于 <code>min</code>，计算差值 <code>num - min</code> 并更新最大差值 <code>diff</code>。</li><li>同时更新 <code>min</code> 为当前值与之前最小值的较小值。</li></ul></li><li>返回 <code>diff</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		diff <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>diff<span class="token punctuation">,</span> num <span class="token operator">-</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> diff<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"121",-1),j=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机",-1),w={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"数组",-1),I=n("code",null,"动态规划",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2078",-1),T=n("td",{style:{"text-align":"left"}},"两栋颜色不同且距离最远的房子",-1),B={style:{"text-align":"center"}},R={style:{"text-align":"left"}},M=n("code",null,"贪心",-1),z=n("code",null,"数组",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/two-furthest-houses-with-different-colors",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/two-furthest-houses-with-different-colors",target:"_blank",rel:"noopener noreferrer"};function F(H,J){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),p("div",null,[h,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",k,[_,t(a)]),e(),n("a",f,[b,t(a)])]),x,d(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[y,j,n("td",w,[t(o,{to:"/problem/0121.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",q,[t(o,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),e(),t(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[I]),_:1})]),N,n("td",C,[n("a",L,[e("🀄️"),t(a)]),e(),n("a",O,[e("🔗"),t(a)])])]),n("tr",null,[V,T,n("td",B,[t(o,{to:"/problem/2078.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",R,[t(o,{to:"/tag/greedy.html"},{default:s(()=>[M]),_:1}),e(),t(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1})]),D,n("td",G,[n("a",S,[e("🀄️"),t(a)]),e(),n("a",A,[e("🔗"),t(a)])])])])])])}const P=i(m,[["render",F],["__file","2016.html.vue"]]);export{P as default};
