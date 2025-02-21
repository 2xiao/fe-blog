import{_ as c,r as l,o as i,c as r,a as n,b as s,d as a,w as e,f as u,e as d}from"./app-9CeBk-uV.js";const m={},k=n("h1",{id:"_2779-数组的最大美丽值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2779-数组的最大美丽值","aria-hidden":"true"},"#"),s(" 2779. 数组的最大美丽值")],-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_=n("code",null,"排序",-1),b=n("code",null,"滑动窗口",-1),f={href:"https://leetcode.cn/problems/maximum-beauty-of-an-array-after-applying-operation",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> array <code>nums</code> and a <strong>non-negative</strong> integer <code>k</code>.</p><p>In one operation, you can do the following:</p><ul><li>Choose an index <code>i</code> that <strong>hasn &#39;t been chosen before</strong> from the range <code>[0, nums.length - 1]</code>.</li><li>Replace <code>nums[i]</code> with any integer from the range <code>[nums[i] - k, nums[i] + k]</code>.</li></ul><p>The <strong>beauty</strong> of the array is the length of the longest subsequence consisting of equal elements.</p><p>Return _the<strong>maximum</strong> possible beauty of the array _<code>nums</code> <em>after applying the operation any number of times.</em></p><p><strong>Note</strong> that you can apply the operation to each index <strong>only once</strong>.</p><p>A <strong>subsequence</strong> of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,6,1,2], k = 2</p><p>Output: 3</p><p>Explanation: In this example, we apply the following operations:</p><ul><li>Choose index 1, replace it with 4 (from range [4,8]), nums = [4,4,1,2].</li><li>Choose index 3, replace it with 4 (from range [0,4]), nums = [4,4,1,4].</li></ul><p>After the applied operations, the beauty of the array nums is 3 (subsequence consisting of indices 0, 1, and 3).</p><p>It can be proven that 3 is the maximum possible length we can achieve.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1,1], k = 10</p><p>Output: 4</p><p>Explanation: In this example we don&#39;t have to apply any operations.</p><p>The beauty of the array nums is 4 (whole array).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i], k &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个 <strong>非负</strong> 整数 <code>k</code> 。</p><p>在一步操作中，你可以执行下述指令：</p><ul><li>在范围 <code>[0, nums.length - 1]</code> 中选择一个 <strong>此前没有选过</strong> 的下标 <code>i</code> 。</li><li>将 <code>nums[i]</code> 替换为范围 <code>[nums[i] - k, nums[i] + k]</code> 内的任一整数。</li></ul><p>数组的 <strong>美丽值</strong> 定义为数组中由相等元素组成的最长子序列的长度。</p><p>对数组 <code>nums</code> 执行上述操作任意次后，返回数组可能取得的 <strong>最大</strong> 美丽值。</p><p><strong>注意：</strong> 你 <strong>只</strong> 能对每个下标执行 <strong>一次</strong> 此操作。</p><p>数组的 <strong>子序列</strong> 定义是：经由原数组删除一些元素（也可能不删除）得到的一个新数组，且在此过程中剩余元素的顺序不发生改变。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,6,1,2], k = 2</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 在这个示例中，我们执行下述操作：</p><ul><li>选择下标 1 ，将其替换为 4（从范围 [4,8] 中选出），此时 nums = [4,4,1,2] 。</li><li>选择下标 3 ，将其替换为 4（从范围 [0,4] 中选出），此时 nums = [4,4,1,4] 。</li></ul><p>执行上述操作后，数组的美丽值是 3（子序列由下标 0 、1 、3 对应的元素组成）。</p><p>可以证明 3 是我们可以得到的由相等元素组成的最长子序列长度。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,1], k = 10</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 在这个示例中，我们无需执行任何操作。</p><p>数组 nums 的美丽值是 4（整个数组）。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i], k &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>解决这个问题需要考虑如何通过操作将数组中尽可能多的元素调整到某个特定的值，使该值的频率达到最大。</p><p>由于每个元素的调整范围是有限的，问题可以转化为查找所有可能值区间中最大化重叠覆盖的值。</p><p>我们可以用一个差分数组来快速计算某一值是否被多个区间覆盖。</p><ol><li>初始化一个差分数组 <code>count</code>，大小为 <code>maxValue + 1</code>（包括所有可能的值范围）。</li><li>遍历 <code>nums</code>，对每个 <code>nums[i]</code>，计算其可调整区间 <code>[nums[i] - k, nums[i] + k]</code>，并更新差分数组 <code>count</code>： <ul><li>在 <code>Math.max(num - k, 0)</code> 位置加 <code>+1</code> 表示区间的开始。</li><li>在 <code>Math.min(num + k + 1, maxValue)</code> 位置减 <code>-1</code> 表示区间的结束。</li></ul></li><li>对差分数组求前缀和，得到每个值的覆盖次数，取最大值作为结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + maxValue)</code>； <ul><li>遍历 <code>nums</code> 更新差分数组需要 <code>O(n)</code>；</li><li>遍历差分数组求前缀和需要 <code>O(maxValue)</code>；</li><li>总时间复杂度为 <code>O(n + maxValue)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(maxValue)</code>，差分数组占用 <code>O(maxValue)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumBeauty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> maxValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 差分数组</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>maxValue <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 更新差分数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> start <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>num <span class="token operator">-</span> k<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>num <span class="token operator">+</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算前缀和，找到最大覆盖次数</span>
	<span class="token keyword">let</span> curSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxBeauty <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> val <span class="token keyword">of</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		curSum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
		maxBeauty <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxBeauty<span class="token punctuation">,</span> curSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxBeauty<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),V=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"325",-1),B=n("td",{style:{"text-align":"left"}},"和等于 k 的最长子数组长度 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},O=n("code",null,"数组",-1),E=n("code",null,"哈希表",-1),M=n("code",null,"前缀和",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"2294",-1),A=n("td",{style:{"text-align":"left"}},"划分数组使最大差为 K",-1),T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},K=n("code",null,"贪心",-1),Y=n("code",null,"数组",-1),D=n("code",null,"排序",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/partition-array-such-that-maximum-difference-is-k",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=l("font"),t=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/binary-search.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/tag/sliding-window.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",f,[y,a(o)]),s(),n("a",v,[x,a(o)])]),w,u(" prettier-ignore "),n("table",null,[V,n("tbody",null,[n("tr",null,[q,B,C,n("td",I,[a(t,{to:"/tag/array.html"},{default:e(()=>[O]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[E]),_:1}),s(),a(t,{to:"/tag/prefix-sum.html"},{default:e(()=>[M]),_:1})]),N,n("td",L,[n("a",R,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])]),n("tr",null,[j,A,T,n("td",z,[a(t,{to:"/tag/greedy.html"},{default:e(()=>[K]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[D]),_:1})]),F,n("td",G,[n("a",H,[s("🀄️"),a(o)]),s(),n("a",J,[s("🔗"),a(o)])])])])])])}const X=c(m,[["render",P],["__file","2779.html.vue"]]);export{X as default};
