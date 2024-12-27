import{_ as l,r as t,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-fqckLmln.js";const d={},m=n("h1",{id:"_1464-数组中两元素的最大乘积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1464-数组中两元素的最大乘积","aria-hidden":"true"},"#"),s(" 1464. 数组中两元素的最大乘积")],-1),k=n("code",null,"数组",-1),h=n("code",null,"排序",-1),g=n("code",null,"堆（优先队列）",-1),b={href:"https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the array of integers <code>nums</code>, you will choose two different indices <code>i</code> and <code>j</code> of that array. <em>Return the maximum value of</em><code>(nums[i]-1)*(nums[j]-1)</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,5,2]</p><p>Output: 12</p><p>Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, <code>(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12</code>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,5,4,5]</p><p>Output: 16</p><p>Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of <code>(5-1)*(5-1) = 16</code>.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,7]</p><p>Output: 12</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 10^3</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，请你选择数组的两个不同下标 <code>i</code> 和 <code>j</code>，使 <code>(nums[i]-1)*(nums[j]-1)</code> 取得最大值。</p><p>请你计算并返回该式的最大值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,5,2]</p><p><strong>输出：</strong> 12</p><p><strong>解释：</strong> 如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，<code>(nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12</code> 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,5,4,5]</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong> 选择下标 i=1 和 j=3（下标从 0 开始），则可以获得最大值 <code>(5-1)*(5-1) = 16</code> 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,7]</p><p><strong>输出：</strong> 12</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 10^3</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>问题要求从数组中选择两个不同的下标，使得 <code>(nums[i] - 1) * (nums[j] - 1)</code> 的值最大。最优的选择显然是数组中的两个最大值。</p><ol><li><p>遍历数组，维护两个变量：</p><ul><li><code>max</code>：当前最大的数字。</li><li><code>second</code>：当前第二大的数字。</li></ul></li><li><p>遍历时：</p><ul><li>如果当前数字比 <code>max</code> 大： <ul><li>更新 <code>second</code> 为之前的 <code>max</code>。</li><li>更新 <code>max</code> 为当前数字。</li></ul></li><li>否则，如果当前数字比 <code>second</code> 大，更新 <code>second</code>。</li></ul></li><li><p>计算结果为 <code>(max - 1) * (second - 1)</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，只需一次遍历数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，仅使用常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProduct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		second <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			second <span class="token operator">=</span> max<span class="token punctuation">;</span>
			max <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			second <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>second <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function y(w,q){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",_,[f,a(p)])]),x])}const E=l(d,[["render",y],["__file","1464.html.vue"]]);export{E as default};
