import{_ as r,r as l,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-MXSjQbID.js";const h={},m=e("h1",{id:"_2357-使数组中所有元素都等于零",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2357-使数组中所有元素都等于零","aria-hidden":"true"},"#"),n(" 2357. 使数组中所有元素都等于零")],-1),_=e("code",null,"贪心",-1),g=e("code",null,"数组",-1),k=e("code",null,"哈希表",-1),b=e("code",null,"排序",-1),f=e("code",null,"模拟",-1),x=e("code",null,"堆（优先队列）",-1),y={href:"https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),E=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a non-negative integer array <code>nums</code>. In one operation, you must:</p><ul><li>Choose a positive integer <code>x</code> such that <code>x</code> is less than or equal to the <strong>smallest non-zero</strong> element in <code>nums</code>.</li><li>Subtract <code>x</code> from every <strong>positive</strong> element in <code>nums</code>.</li></ul><p>Return _the<strong>minimum</strong> number of operations to make every element in _<code>nums</code><em>equal to</em><code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,5,0,3,5]</p><p>Output: 3</p><p>Explanation:</p><p>In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].</p><p>In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].</p><p>In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: 0</p><p>Explanation: Each element in nums is already 0 so no operations are needed.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数数组 <code>nums</code> 。在一步操作中，你必须：</p><ul><li>选出一个正整数 <code>x</code> ，<code>x</code> 需要小于或等于 <code>nums</code> 中 <strong>最小</strong> 的 <strong>非零</strong> 元素。</li><li><code>nums</code> 中的每个正整数都减去 <code>x</code>。</li></ul><p>返回使 <code>nums</code> 中所有元素都等于 <code>0</code> 需要的 <strong>最少</strong> 操作数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,5,0,3,5]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>第一步操作：选出 x = 1 ，之后 nums = [0,4,0,2,4] 。</p><p>第二步操作：选出 x = 2 ，之后 nums = [0,2,0,0,2] 。</p><p>第三步操作：选出 x = 2 ，之后 nums = [0,0,0,0,0] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> nums 中的每个元素都已经是 0 ，所以不需要执行任何操作。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>每次减去的数可以看作是当前数组中非零元素的一个 &quot;独特值&quot;。因此，最终结果取决于数组中有多少个独特的非零值。使用一个集合（Set）来记录数组中所有的非零值，集合的大小即为结果。</p><ol><li>初始化一个集合，用来存储数组中的非零值。</li><li>遍历数组，将所有非零值加入集合中。</li><li>返回集合的大小。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是数组中不同的非零值的数量，使用了集合来记录非零元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),I=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),N=e("td",{style:{"text-align":"center"}},"217",-1),C=e("td",{style:{"text-align":"left"}},"存在重复元素",-1),L={style:{"text-align":"center"}},O={style:{"text-align":"left"}},V=e("code",null,"数组",-1),z=e("code",null,"哈希表",-1),S=e("code",null,"排序",-1),j=e("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/contains-duplicate",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/contains-duplicate",target:"_blank",rel:"noopener noreferrer"};function Y(A,D){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[m,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/greedy.html"},{default:s(()=>[_]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),t(o,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),n(),t(o,{to:"/tag/simulation.html"},{default:s(()=>[f]),_:1}),n(),t(o,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[x]),_:1}),n("  🔗 "),e("a",y,[v,t(a)]),n(),e("a",q,[w,t(a)])]),E,d(" prettier-ignore "),e("table",null,[I,e("tbody",null,[e("tr",null,[N,C,e("td",L,[t(o,{to:"/problem/0217.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",O,[t(o,{to:"/tag/array.html"},{default:s(()=>[V]),_:1}),n(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[z]),_:1}),n(),t(o,{to:"/tag/sorting.html"},{default:s(()=>[S]),_:1})]),j,e("td",B,[e("a",R,[n("🀄️"),t(a)]),n(),e("a",T,[n("🔗"),t(a)])])])])])])}const G=r(h,[["render",Y],["__file","2357.html.vue"]]);export{G as default};
