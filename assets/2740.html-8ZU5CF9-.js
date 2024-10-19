import{_ as i,r as e,o as l,c as u,a as n,d as s,b as a,w as t,e as r}from"./app-ynO5B_DP.js";const d={},m={id:"_2740-找出分区值",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_2740-找出分区值","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/find-the-value-of-the-partition",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数组",-1),f=n("code",null,"排序",-1),v={href:"https://leetcode.com/problems/find-the-value-of-the-partition",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>positive</strong> integer array <code>nums</code>.</p><p>Partition <code>nums</code> into two arrays, <code>nums1</code> and <code>nums2</code>, such that:</p><ul><li>Each element of the array <code>nums</code> belongs to either the array <code>nums1</code> or the array <code>nums2</code>.</li><li>Both arrays are <strong>non-empty</strong>.</li><li>The value of the partition is <strong>minimized</strong>.</li></ul><p>The value of the partition is <code>|max(nums1) - min(nums2)|</code>.</p><p>Here, <code>max(nums1)</code> denotes the maximum element of the array <code>nums1</code>, and <code>min(nums2)</code> denotes the minimum element of the array <code>nums2</code>.</p><p>Return <em>the integer denoting the value of such partition</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,2,4]</p><p>Output: 1</p><p>Explanation: We can partition the array nums into nums1 = [1,2] and nums2 = [3,4].</p><ul><li>The maximum element of the array nums1 is equal to 2.</li><li>The minimum element of the array nums2 is equal to 3.</li></ul><p>The value of the partition is |2 - 3| = 1.</p><p>It can be proven that 1 is the minimum value out of all partitions.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [100,1,10]</p><p>Output: 9</p><p>Explanation: We can partition the array nums into nums1 = [10] and nums2 = [100,1].</p><ul><li>The maximum element of the array nums1 is equal to 10.</li><li>The minimum element of the array nums2 is equal to 1.</li></ul><p>The value of the partition is |10 - 1| = 9.</p><p>It can be proven that 9 is the minimum value out of all partitions.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>正</strong> 整数数组 <code>nums</code> 。</p><p>将 <code>nums</code> 分成两个数组：<code>nums1</code> 和 <code>nums2</code> ，并满足下述条件：</p><ul><li>数组 <code>nums</code> 中的每个元素都属于数组 <code>nums1</code> 或数组 <code>nums2</code> 。</li><li>两个数组都 <strong>非空</strong> 。</li><li>分区值 <strong>最小</strong> 。</li></ul><p>分区值的计算方法是 <code>|max(nums1) - min(nums2)|</code> 。</p><p>其中，<code>max(nums1)</code> 表示数组 <code>nums1</code> 中的最大元素，<code>min(nums2)</code> 表示数组 <code>nums2</code> 中的最小元素。</p><p>返回表示分区值的整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,2,4]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 可以将数组 nums 分成 nums1 = [1,2] 和 nums2 = [3,4] 。</p><ul><li>数组 nums1 的最大值等于 2 。</li><li>数组 nums2 的最小值等于 3 。</li></ul><p>分区值等于 |2 - 3| = 1 。</p><p>可以证明 1 是所有分区方案的最小值。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [100,1,10]</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 可以将数组 nums 分成 nums1 = [10] 和 nums2 = [100,1] 。</p><ul><li>数组 nums1 的最大值等于 10 。</li><li>数组 nums2 的最小值等于 1 。</li></ul><p>分区值等于 |10 - 1| = 9 。</p><p>可以证明 9 是所有分区方案的最小值。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>排序：由于题目要求最小分区值，因此可以先对数组进行排序，让元素按递增值排序，这有助于最小化相邻元素之间的绝对差异。</p></li><li><p>寻找最小分区值：遍历已排序的元素，依次将相邻元素相减，计算每个分区处的差异并返回最小的差异。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n logn)</code>，其中 <code>n</code> 是数组的长度，排序的时间复杂度为 <code>O(n logn)</code>，遍历数组计算分区值的时间复杂度为 <code>O(n)</code>，所以总的时间复杂度为 <code>O(n logn)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个过程变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findValueOfPartition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function x(y,q){const o=e("ExternalLinkIcon"),c=e("font"),p=e("RouterLink");return l(),u("div",null,[n("h1",m,[h,s(),n("a",k,[s("2740. 找出分区值"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/outline/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(p,{to:"/outline/tag/sorting.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",v,[b,a(o)])]),_])}const T=i(d,[["render",x],["__file","2740.html.vue"]]);export{T as default};
