import{_ as p,r as l,o as i,c as r,a as n,b as s,d as e,w as a,f as d,e as u}from"./app-9CeBk-uV.js";const _={},k=n("h1",{id:"_2593-标记所有元素后数组的分数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2593-标记所有元素后数组的分数","aria-hidden":"true"},"#"),s(" 2593. 标记所有元素后数组的分数")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),g=n("code",null,"排序",-1),f=n("code",null,"模拟",-1),b=n("code",null,"堆（优先队列）",-1),v={href:"https://leetcode.cn/problems/find-score-of-an-array-after-marking-all-elements",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),O=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>nums</code> consisting of positive integers.</p><p>Starting with <code>score = 0</code>, apply the following algorithm:</p><ul><li>Choose the smallest integer of the array that is not marked. If there is a tie, choose the one with the smallest index.</li><li>Add the value of the chosen integer to <code>score</code>.</li><li>Mark <strong>the chosen element and its two adjacent elements if they exist</strong>.</li><li>Repeat until all the array elements are marked.</li></ul><p>Return <em>the score you get after applying the above algorithm</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = <code>[2,1,3,4,5,2]</code></p><p>Output: 7</p><p>Explanation: We mark the elements as follows:</p><ul><li>1 is the smallest unmarked element, so we mark it and its two adjacent elements: <code>[_2_ ,_1_ ,_3_ ,4,5,2]</code>.</li><li>2 is the smallest unmarked element, so we mark it and its left adjacent element: <code>[_2_ ,_1_ ,_3_ ,4,_5_ ,_2_]</code>.</li><li>4 is the only remaining unmarked element, so we mark it: <code>[_2_ ,_1_ ,_3_ ,_4_ ,_5_ ,_2_]</code>.</li></ul><p>Our score is 1 + 2 + 4 = 7.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = <code>[2,3,5,1,3,2]</code></p><p>Output: 5</p><p>Explanation: We mark the elements as follows:</p><ul><li>1 is the smallest unmarked element, so we mark it and its two adjacent elements: <code>[2,3,_5_ ,_1_ ,_3_ ,2]</code>.</li><li>2 is the smallest unmarked element, since there are two of them, we choose the left-most one, so we mark the one at index 0 and its right adjacent element: <code>[_2_ ,_3_ ,_5_ ,_1_ ,_3_ ,2]</code>.</li><li>2 is the only remaining unmarked element, so we mark it: <code>[_2_ ,_3_ ,_5_ ,_1_ ,_3_ ,_2_]</code>.</li></ul><p>Our score is 1 + 2 + 2 = 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code> ，它包含若干正整数。</p><p>一开始分数 <code>score = 0</code> ，请你按照下面算法求出最后分数：</p><ul><li>从数组中选择最小且没有被标记的整数。如果有相等元素，选择下标最小的一个。</li><li>将选中的整数加到 <code>score</code> 中。</li><li>标记 <strong>被选中元素</strong> ，如果有相邻元素，则同时标记 <strong>与它相邻的两个元素</strong> 。</li><li>重复此过程直到数组中所有元素都被标记。</li></ul><p>请你返回执行上述算法后最后的分数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = <code>[2,1,3,4,5,2]</code></p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 我们按照如下步骤标记元素：</p><ul><li>1 是最小未标记元素，所以标记它和相邻两个元素：<code>[_2_ ,_1_ ,_3_ ,4,5,2]</code>。</li><li>2 是最小未标记元素，所以标记它和左边相邻元素：<code>[_2_ ,_1_ ,_3_ ,4,_5_ ,_2_]</code>。</li><li>4 是仅剩唯一未标记的元素，所以我们标记它：<code>[_2_ ,_1_ ,_3_ ,_4_ ,_5_ ,_2_]</code>。</li></ul><p>总得分为 1 + 2 + 4 = 7 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,5,1,3,2]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 我们按照如下步骤标记元素：</p><ul><li>1 是最小未标记元素，所以标记它和相邻两个元素：<code>[2,3,_5_ ,_1_ ,_3_ ,2]</code>。</li><li>2 是最小未标记元素，由于有两个 2 ，我们选择最左边的一个 2 ，也就是下标为 0 处的 2 ，以及它右边相邻的元素：<code>[_2_ ,_3_ ,_5_ ,_1_ ,_3_ ,2]</code>。</li><li>2 是仅剩唯一未标记的元素，所以我们标记它：<code>[_2_ ,_3_ ,_5_ ,_1_ ,_3_ ,_2_]</code>。</li></ul><p>总得分为 1 + 2 + 2 = 5 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>使用排序优化最小值查找</strong></li></ol><p>为了快速找到未标记的最小值，先将 <code>nums</code> 中的每个元素与其下标存入数组 <code>arr</code>，并按元素值升序排序。</p><p>这样，遍历 <code>arr</code> 时，最小值总是优先处理，避免每次查找时都遍历整个数组。</p><ol start="2"><li><strong>使用集合记录标记状态</strong></li></ol><p>使用一个集合 <code>marked</code> 来记录已被标记的元素下标。</p><ol start="3"><li><strong>遍历 <code>arr</code></strong></li></ol><p>对每个元素，先判断其是否未被标记（<code>!marked.has(idx)</code>），若未标记则：</p><ul><li>将该值累加到分数。</li><li>标记当前元素的下标以及其左右相邻的下标。</li></ul><ol start="4"><li><strong>返回最终分数</strong></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code><ul><li>创建并排序数组 <code>arr</code>：<code>O(n log n)</code></li><li>遍历排序后的数组：<code>O(n)</code></li><li>总体复杂度：<code>O(n log n)</code></li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li>排序后的数组 <code>arr</code> 占用 <code>O(n)</code></li><li>用于记录标记状态的集合 <code>marked</code> 占用 <code>O(n)</code></li><li>总体空间复杂度：<code>O(n)</code></li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findScore</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个数组，包含每个元素及其原下标，并按值排序</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 用于记录已标记的下标</span>
	<span class="token keyword">let</span> marked <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> idx<span class="token punctuation">]</span> <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前下标未被标记</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>marked<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 累加分数</span>
			score <span class="token operator">+=</span> val<span class="token punctuation">;</span>
			<span class="token comment">// 标记当前元素</span>
			marked<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 标记相邻元素</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> marked<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> marked<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1387",-1),E=n("td",{style:{"text-align":"left"}},"将整数按权重排序",-1),C=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},L=n("code",null,"记忆化搜索",-1),N=n("code",null,"动态规划",-1),V=n("code",null,"排序",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/sort-integers-by-the-power-value",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/sort-integers-by-the-power-value",target:"_blank",rel:"noopener noreferrer"};function W(z,A){const c=l("font"),t=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[h]),_:1}),s(),e(t,{to:"/tag/sorting.html"},{default:a(()=>[g]),_:1}),s(),e(t,{to:"/tag/simulation.html"},{default:a(()=>[f]),_:1}),s(),e(t,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[x,e(o)]),s(),n("a",y,[w,e(o)])]),O,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[j,E,C,n("td",I,[e(t,{to:"/tag/memoization.html"},{default:a(()=>[L]),_:1}),s(),e(t,{to:"/tag/dynamic-programming.html"},{default:a(()=>[N]),_:1}),s(),e(t,{to:"/tag/sorting.html"},{default:a(()=>[V]),_:1})]),R,n("td",S,[n("a",B,[s("🀄️"),e(o)]),s(),n("a",M,[s("🔗"),e(o)])])])])])])}const Y=p(_,[["render",W],["__file","2593.html.vue"]]);export{Y as default};
