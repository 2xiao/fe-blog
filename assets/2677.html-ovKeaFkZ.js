import{_ as r,r as o,o as p,c,a as n,b as s,d as a,w as l,e as i}from"./app-3dvbhwow.js";const d={},u=n("h1",{id:"_2677-分块数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2677-分块数组","aria-hidden":"true"},"#"),s(" 2677. 分块数组")],-1),k={href:"https://leetcode.cn/problems/chunk-array",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/chunk-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),m=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>arr</code> and a chunk size <code>size</code>, return a <strong>chunked</strong> array.</p><p>A <strong>chunked</strong> array contains the original elements in <code>arr</code>, but consists of subarrays each of length <code>size</code>. The length of the last subarray may be less than <code>size</code> if <code>arr.length</code> is not evenly divisible by <code>size</code>.</p><p>You may assume the array is the output of <code>JSON.parse</code>. In other words, it is valid JSON.</p><p>Please solve it without using lodash&#39;s <code>_.chunk</code> function.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,3,4,5], size = 1</p><p>Output: [[1],[2],[3],[4],[5]]</p><p>Explanation: The arr has been split into subarrays each with 1 element.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,9,6,3,2], size = 3</p><p>Output: [[1,9,6],[3,2]]</p><p>Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [8,5,3,2,6], size = 6</p><p>Output: [[8,5,3,2,6]]</p><p>Explanation: Size is greater than arr.length thus all elements are in the first subarray.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input: arr = [], size = 1</p><p>Output: []</p><p>Explanation: There are no elements to be chunked so an empty array is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr</code> is a valid JSON array</li><li><code>2 &lt;= JSON.stringify(arr).length &lt;= 10^5</code></li><li><code>1 &lt;= size &lt;= arr.length + 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>arr</code> 和一个块大小 <code>size</code> ，返回一个 <strong>分块</strong> 的数组。</p><p><strong>分块</strong> 的数组包含了 <code>arr</code> 中的原始元素，但是每个子数组的长度都是 <code>size</code> 。如果 <code>arr.length</code> 不能被 <code>size</code> 整除，那么最后一个子数组的长度可能小于 <code>size</code> 。</p><p>你可以假设该数组是 <code>JSON.parse</code> 的输出结果。换句话说，它是有效的 JSON。</p><p>请你在不使用 lodash 的函数 <code>_.chunk</code> 的情况下解决这个问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,4,5], size = 1</p><p><strong>输出：</strong>[[1],[2],[3],[4],[5]]</p><p><strong>解释：</strong> 数组 arr 被分割成了每个只有一个元素的子数组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,9,6,3,2], size = 3</p><p><strong>输出：</strong>[[1,9,6],[3,2]]</p><p><strong>解释：</strong> 数组 arr 被分割成了每个有三个元素的子数组。然而，第二个子数组只有两个元素。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [8,5,3,2,6], size = 6</p><p><strong>输出：</strong>[[8,5,3,2,6]]</p><p>**解释：**size 大于 arr.length ，因此所有元素都在第一个子数组中。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [], size = 1</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong> 没有元素需要分块，因此返回一个空数组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>arr</code> 是一个有效的 JSON 数组</li><li><code>2 &lt;= JSON.stringify(arr).length &lt;= 10^5</code></li><li><code>1 &lt;= size &lt;= arr.length + 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>遍历数组</strong>：使用 <code>for</code> 循环迭代数组 <code>arr</code>，每次递增 <code>size</code>。</li><li><strong>分割逻辑</strong>：每次取出 <code>size</code> 个元素，<code>arr.slice(i, i + size)</code>，形成一个新的子数组，然后将其添加到结果数组中。</li><li><strong>处理剩余元素</strong>：如果数组的长度不是 <code>size</code> 的倍数，最后的子数组可能会有少于 <code>size</code> 个元素。</li><li><strong>返回结果</strong>：最终返回包含所有子数组的数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组 <code>arr</code> 的长度，需要遍历整个数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，结果数组的大小会与输入数组相同。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">size</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">chunk</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function v(f,_){const t=o("font"),e=o("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("🟢 "),a(t,{color:"#15bd66"},{default:l(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[h,a(e)]),s(),n("a",g,[b,a(e)])]),m])}const z=r(d,[["render",v],["__file","2677.html.vue"]]);export{z as default};
