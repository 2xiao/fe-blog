import{_ as p,r as c,o as r,c as i,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-Kkp_66uf.js";const m={},k=n("h1",{id:"_1829-每个查询的最大异或值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1829-每个查询的最大异或值","aria-hidden":"true"},"#"),e(" 1829. 每个查询的最大异或值")],-1),h=n("code",null,"位运算",-1),g=n("code",null,"数组",-1),b=n("code",null,"前缀和",-1),_={href:"https://leetcode.cn/problems/maximum-xor-for-each-query",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-xor-for-each-query",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>sorted</strong> array <code>nums</code> of <code>n</code> non-negative integers and an integer <code>maximumBit</code>. You want to perform the following query <code>n</code> <strong>times</strong> :</p><ol><li>Find a non-negative integer <code>k &lt; 2maximumBit</code> such that <code>nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k</code> is <strong>maximized</strong>. <code>k</code> is the answer to the <code>ith</code> query.</li><li>Remove the <strong>last</strong> element from the current array <code>nums</code>.</li></ol><p>Return <em>an array</em> <code>answer</code> <em>, where</em><code>answer[i]</code><em>is the answer to the</em><code>ith</code><em>query</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,1,3], maximumBit = 2</p><p>Output: [0,3,2,3]</p><p><strong>Explanation</strong> : The queries are answered as follows:</p><p>1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.</p><p>2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.</p><p>3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.</p><p>4th query: nums = [0], k = 3 since 0 XOR 3 = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,4,7], maximumBit = 3</p><p>Output: [5,2,6,5]</p><p><strong>Explanation</strong> : The queries are answered as follows:</p><p>1st query: nums = [2,3,4,7], k = 5 since 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7.</p><p>2nd query: nums = [2,3,4], k = 2 since 2 XOR 3 XOR 4 XOR 2 = 7.</p><p>3rd query: nums = [2,3], k = 6 since 2 XOR 3 XOR 6 = 7.</p><p>4th query: nums = [2], k = 5 since 2 XOR 5 = 7.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [0,1,2,2,5,7], maximumBit = 3</p><p>Output: [4,3,6,4,6,7]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums.length == n</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= maximumBit &lt;= 20</code></li><li><code>0 &lt;= nums[i] &lt; 2maximumBit</code></li><li><code>nums</code>​​​ is sorted in <strong>ascending</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>有序</strong> 数组 <code>nums</code> ，它由 <code>n</code> 个非负整数组成，同时给你一个整数 <code>maximumBit</code> 。你需要执行以下查询 <code>n</code> 次：</p><ol><li>找到一个非负整数 <code>k &lt; 2maximumBit</code> ，使得 <code>nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k</code> 的结果 <strong>最大化</strong> 。<code>k</code> 是第 <code>i</code> 个查询的答案。</li><li>从当前数组 <code>nums</code> 删除 <strong>最后</strong> 一个元素。</li></ol><p>请你返回一个数组 <code>answer</code> ，其中 <code>answer[i]</code>是第 <code>i</code> 个查询的结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,1,3], maximumBit = 2</p><p><strong>输出：</strong>[0,3,2,3]</p><p><strong>解释：</strong> 查询的答案如下：</p><p>第一个查询：nums = [0,1,1,3]，k = 0，因为 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3 。</p><p>第二个查询：nums = [0,1,1]，k = 3，因为 0 XOR 1 XOR 1 XOR 3 = 3 。</p><p>第三个查询：nums = [0,1]，k = 2，因为 0 XOR 1 XOR 2 = 3 。</p><p>第四个查询：nums = [0]，k = 3，因为 0 XOR 3 = 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,4,7], maximumBit = 3</p><p><strong>输出：</strong>[5,2,6,5]</p><p><strong>解释：</strong> 查询的答案如下：</p><p>第一个查询：nums = [2,3,4,7]，k = 5，因为 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7。</p><p>第二个查询：nums = [2,3,4]，k = 2，因为 2 XOR 3 XOR 4 XOR 2 = 7 。</p><p>第三个查询：nums = [2,3]，k = 6，因为 2 XOR 3 XOR 6 = 7 。</p><p>第四个查询：nums = [2]，k = 5，因为 2 XOR 5 = 7 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,2,2,5,7], maximumBit = 3</p><p><strong>输出：</strong>[4,3,6,4,6,7]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>nums.length == n</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= maximumBit &lt;= 20</code></li><li><code>0 &lt;= nums[i] &lt; 2maximumBit</code></li><li><code>nums</code>​​​ 中的数字已经按 <strong>升序</strong> 排好序。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>异或的规则是：当且仅当两个输入值不同时，异或运算输出为 <code>1</code>，否则输出为 <code>0</code>，即“同为 <code>0</code>，异为 <code>1</code>”。</p><p>异或运算 <code>^</code> 具有以下特点：</p><ul><li><strong>自反性</strong>：对于任意整数 <code>a</code>，都有 <code>a ^ a = 0</code>。</li><li><strong>交换性</strong>：<code>a ^ b = b ^ a</code>。</li><li><strong>结合性</strong>：<code>(a ^ b) ^ c = a ^ (b ^ c)</code>，即异或的顺序可以调整。</li><li><strong>自逆性</strong>：对于任意整数 <code>a</code> 和 <code>b</code>，<code>a ^ b = c</code> 则 <code>a = b ^ c</code> 和 <code>b = a ^ c</code>，可以通过对任意一个值进行异或操作，来还原另一个值。</li></ul><p>在这个问题中，异或运算的关键在于：</p><ol><li><p><strong>求解总异或值</strong> <code>totalXor</code>：</p><ul><li>首先，对数组 <code>nums</code> 中所有元素执行异或操作，得到 <code>totalXor</code>，即 <code>nums[0] ^ nums[1] ^ ... ^ nums[n-1]</code>。</li><li><code>totalXor</code> 表示当前数组的<strong>整体异或值</strong>，会基于它来计算每次查询时的结果。</li></ul></li><li><p><strong>确定 <code>k</code> 的最佳值</strong>：</p><ul><li>本题的目标是找到一个整数 <code>k</code>，使得 <code>totalXor ^ k</code> 的值尽可能大。</li><li>在二进制表示中，所有 <code>1</code> 的位会贡献最大的值，因此希望选择 <code>k</code> 使其与 <code>totalXor</code> 的每一位相反，即 <code>k = (2^maximumBit - 1) ^ totalXor</code>。</li><li>这里 <code>(2^maximumBit - 1)</code> 是一个包含 <code>maximumBit</code> 位数的全 <code>1</code> 的数。比如，<code>maximumBit = 3</code> 时，<code>2^3 - 1 = 7</code>，即二进制 <code>111</code>。</li></ul></li><li><p><strong>逐步移除元素并更新 <code>totalXor</code></strong>：</p><ul><li>每次查询后，都要将 <code>nums</code> 数组的最后一个元素从 <code>totalXor</code> 中移除，模拟“删除”操作。</li><li>由于异或的自逆性，可以通过 <code>totalXor ^= nums[i]</code> 来移除最后一个元素的影响（相当于从 <code>totalXor</code> 中减去 <code>nums[i]</code>）。</li><li>更新 <code>totalXor</code> 后，可以继续进行下一次查询，直到所有元素被处理完毕。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为只需遍历数组一次来计算 <code>totalXor</code>，并在后续操作中遍历 <code>nums</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maximumBit</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getMaximumXor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> maximumBit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> maxVal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> maximumBit<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2^maximumBit - 1</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> totalXor <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算初始的 totalXor</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		totalXor <span class="token operator">^=</span> num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 逐步移除最后一个元素并计算结果</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> maxVal <span class="token operator">^</span> totalXor<span class="token punctuation">;</span>
		totalXor <span class="token operator">^=</span> nums<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 移除最后一个元素</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),R=n("td",{style:{"text-align":"center"}},"2588",-1),y=n("td",{style:{"text-align":"left"}},"统计美丽子数组数目",-1),w=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},B=n("code",null,"位运算",-1),E=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),C=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/count-the-number-of-beautiful-subarrays",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/count-the-number-of-beautiful-subarrays",target:"_blank",rel:"noopener noreferrer"};function T(M,Y){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟠 "),s(l,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[h]),_:1}),e(),s(o,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),e(),s(o,{to:"/tag/prefix-sum.html"},{default:t(()=>[b]),_:1}),e("  🔗 "),n("a",_,[X,s(a)]),e(),n("a",v,[x,s(a)])]),f,d(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[R,y,w,n("td",q,[s(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[B]),_:1}),e(),s(o,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),e(),s(o,{to:"/tag/hash-table.html"},{default:t(()=>[V]),_:1}),e(),C]),I,n("td",L,[n("a",N,[e("🀄️"),s(a)]),e(),n("a",j,[e("🔗"),s(a)])])])])])])}const A=p(m,[["render",T],["__file","1829.html.vue"]]);export{A as default};
