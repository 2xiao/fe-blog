import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as o,e as u}from"./app-XFeYdzZv.js";const d={},m=n("h1",{id:"_908-最小差值-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_908-最小差值-i","aria-hidden":"true"},"#"),s(" 908. 最小差值 I")],-1),k=n("code",null,"数组",-1),g=n("code",null,"数学",-1),h={href:"https://leetcode.cn/problems/smallest-range-i",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/smallest-range-i",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p><p>In one operation, you can choose any index <code>i</code> where <code>0 &lt;= i &lt; nums.length</code> and change <code>nums[i]</code> to <code>nums[i] + x</code> where <code>x</code> is an integer from the range <code>[-k, k]</code>. You can apply this operation <strong>at most once</strong> for each index <code>i</code>.</p><p>The <strong>score</strong> of <code>nums</code> is the difference between the maximum and minimum elements in <code>nums</code>.</p><p>Return <em>the minimum<strong>score</strong> of</em> <code>nums</code> <em>after applying the mentioned operation at most once for each index in it</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1], k = 0</p><p>Output: 0</p><p>Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,10], k = 2</p><p>Output: 6</p><p>Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,3,6], k = 3</p><p>Output: 0</p><p>Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 10^4</code></li><li><code>0 &lt;= k &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，和一个整数 <code>k</code> 。</p><p>在一个操作中，您可以选择 <code>0 &lt;= i &lt; nums.length</code> 的任何索引 <code>i</code> 。将 <code>nums[i]</code> 改为 <code>nums[i] + x</code> ，其中 <code>x</code> 是一个范围为 <code>[-k, k]</code> 的任意整数。对于每个索引 <code>i</code> ，最多 <strong>只能</strong> 应用 <strong>一次</strong> 此操作。</p><p><code>nums</code> 的 **分数 **是 <code>nums</code> 中最大和最小元素的差值。</p><p><em>在对 <code>nums</code> 中的每个索引最多应用一次上述操作后，返回 <code>nums</code> 的最低 <strong>分数</strong></em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1], k = 0</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 分数是 max(nums) - min(nums) = 1 - 1 = 0。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,10], k = 2</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 将 nums 改为 [2,8]。分数是 max(nums) - min(nums) = 8 - 2 = 6。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,6], k = 3</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 将 nums 改为 [4,4,4]。分数是 max(nums) - min(nums) = 4 - 4 = 0。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 10^4</code></li><li><code>0 &lt;= k &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><strong>目标</strong>是尽可能缩小数组中的最大值与最小值的差。</li><li>如果将最大值 <code>max</code> 减去 <code>k</code>，将最小值 <code>min</code> 加上 <code>k</code>，那么数组范围可能会缩小为：<br><code>范围 = (max - k) - (min + k) = max - min - 2k</code></li><li>如果结果为负数，则数组中的所有值经过调整后可以完全重叠在一起，此时差值为 0。</li></ul><ol><li><strong>计算数组的最大值和最小值</strong>： 遍历数组，分别记录 <code>max</code> 和 <code>min</code>。</li><li><strong>计算差值</strong>： <ul><li>按照公式 <code>范围 = max - min - 2k</code> 计算范围。</li><li>如果范围为负数，则返回 0。</li></ul></li><li>返回结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次，计算最大值和最小值。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">smallestRangeI</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		min <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历数组，计算最大值和最小值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>min<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算缩小后的范围</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max <span class="token operator">-</span> min <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> k<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function f(y,w){const p=e("font"),t=e("RouterLink"),c=e("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:o(()=>[k]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(c)]),s(),n("a",v,[x,a(c)])]),_])}const E=l(d,[["render",f],["__file","0908.html.vue"]]);export{E as default};
