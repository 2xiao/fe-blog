import{_ as c,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-9CeBk-uV.js";const m={},h=n("h1",{id:"_747-至少是其他数字两倍的最大数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_747-至少是其他数字两倍的最大数","aria-hidden":"true"},"#"),s(" 747. 至少是其他数字两倍的最大数")],-1),k=n("code",null,"数组",-1),g=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> where the largest integer is <strong>unique</strong>.</p><p>Determine whether the largest element in the array is <strong>at least twice</strong> as much as every other number in the array. If it is, return <em>the<strong>index</strong> of the largest element, or return</em> <code>-1</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,6,1,0]</p><p>Output: 1</p><p>Explanation: 6 is the largest integer.</p><p>For every other number in the array x, 6 is at least twice as big as x.</p><p>The index of value 6 is 1, so we return 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: -1</p><p>Explanation: 4 is less than twice the value of 3, so we return -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 50</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li><li>The largest element in <code>nums</code> is unique.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，其中总是存在 <strong>唯一的</strong> 一个最大整数 。</p><p>请你找出数组中的最大元素并检查它是否 <strong>至少是数组中每个其他数字的两倍</strong> 。如果是，则返回 <strong>最大元素的下标</strong> ，否则返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,6,1,0]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 4 没有超过 3 的两倍大，所以返回 -1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 50</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li><li><code>nums</code> 中的最大元素是唯一的</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要判断数组中的最大值是否至少是数组中每个其他数字的两倍，只需要找出数组中最大的两个元素，判断最大值是否两倍大于第二大值即可。</p><ol><li><p><strong>初始化变量</strong>：</p><ul><li>使用 <code>max1</code> 记录最大元素的索引，初始值为 <code>-1</code>。</li><li>使用 <code>max2</code> 记录第二大元素的索引，初始值为 <code>-1</code>。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>如果当前数字比 <code>nums[max1]</code> 大，或 <code>max1 == -1</code>（还没有被赋值）： <ul><li>将 <code>max1</code> 的值赋给 <code>max2</code>（即更新第二大值为之前的最大值）。</li><li>更新 <code>max1</code> 为当前数字的索引。</li></ul></li><li>否则，如果当前数字比 <code>nums[max2]</code> 大，或 <code>max2 == -1</code>（还没有被赋值）： <ul><li>更新 <code>max2</code> 为当前数字的索引。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历结束后，判断 <code>nums[max1]</code> 是否至少是 <code>nums[max2]</code> 的两倍： <ul><li>如果是，则返回 <code>max1</code>。</li><li>否则返回 <code>-1</code>。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dominantIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max1 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
		max2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// max1为最大值索引，max2为第二大值索引</span>

	<span class="token comment">// 遍历数组，找到最大值和第二大值的索引</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>max1 <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>max1<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max2 <span class="token operator">=</span> max1<span class="token punctuation">;</span> <span class="token comment">// 更新第二大值</span>
			max1 <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新最大值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>max2 <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>max2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max2 <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新第二大值</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查是否满足最大值至少是其他值两倍的条件</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">[</span>max1<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>max2<span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">?</span> max1 <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2154",-1),q=n("td",{style:{"text-align":"left"}},"将找到的值乘以 2",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"排序",-1),V=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2231",-1),D=n("td",{style:{"text-align":"left"}},"按奇偶性交换后的最大数字",-1),F={style:{"text-align":"center"}},S={style:{"text-align":"left"}},Y=n("code",null,"排序",-1),z=n("code",null,"堆（优先队列）",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"};function K(M,P){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,t(o)]),s(),n("a",x,[f,t(o)])]),v,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[t(a,{to:"/problem/2154.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/array.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[N]),_:1}),s(),V]),O,n("td",j,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",T,[s("🔗"),t(o)])])]),n("tr",null,[R,D,n("td",F,[t(a,{to:"/problem/2231.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",S,[t(a,{to:"/tag/sorting.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[z]),_:1})]),A,n("td",G,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])])])])])}const U=c(m,[["render",K],["__file","0747.html.vue"]]);export{U as default};
