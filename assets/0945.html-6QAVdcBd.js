import{_ as i,r as c,o as r,c as p,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-Kkp_66uf.js";const m={},h=e("h1",{id:"_945-使数组唯一的最小增量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_945-使数组唯一的最小增量","aria-hidden":"true"},"#"),n(" 945. 使数组唯一的最小增量")],-1),_=e("code",null,"贪心",-1),k=e("code",null,"数组",-1),g=e("code",null,"计数",-1),f=e("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/minimum-increment-to-make-array-unique",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/minimum-increment-to-make-array-unique",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. In one move, you can pick an index <code>i</code> where <code>0 &lt;= i &lt; nums.length</code> and increment <code>nums[i]</code> by <code>1</code>.</p><p>Return <em>the minimum number of moves to make every value in</em><code>nums</code><em><strong>unique</strong></em>.</p><p>The test cases are generated so that the answer fits in a 32-bit integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2]</p><p>Output: 1</p><p>Explanation: After 1 move, the array could be [1, 2, 3].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,1,2,1,7]</p><p>Output: 6</p><p>Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].</p><p>It can be shown with 5 or less moves that it is impossible for the array to have all unique values.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 。每次 <code>move</code> 操作将会选择任意一个满足 <code>0 &lt;= i &lt; nums.length</code> 的下标 <code>i</code>，并将 <code>nums[i]</code> 递增 <code>1</code>。</p><p>返回使 <code>nums</code> 中的每个值都变成唯一的所需要的最少操作次数。</p><p>生成的测试用例保证答案在 <code>32</code> 位整数范围内。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了确保数组中的所有元素都是唯一的，并且操作次数最少，关键思想是先对数组进行排序。通过排序，可以从最小值到最大值以线性扫描的方式处理重复项。这样，对于每个元素，可以直接将其移动到下一个可用的唯一位置，从而最小化所需的总增量。</p><ol><li>对数组进行排序：排序有助于识别重复项并确定每个元素的下一个可用唯一位置。</li><li>初始化变量：使用两个变量 <code>i</code> 和 <code>res</code>，<code>i</code> 表示下一个唯一数字所需的当前最小值，<code>res</code> 跟踪所做的总操作次数。</li><li>遍历数组：对于排序数组中的每个元素： <ul><li>将 <code>i</code> 更新为其当前值和当前元素值中的最大值，这可确保 <code>i</code> 始终是使元素唯一的最小值。</li><li>将 <code>res</code> 增加 <code>i</code> 和当前元素之间的差值，此差值表示使当前元素唯一所需的操作次数。</li><li>增加 <code>i</code> 以移动到下一次迭代的下一个可能唯一值。</li></ul></li><li>返回结果：返回使所有元素唯一所需的增量总数 <code>res</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minIncrementForUnique</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> i <span class="token operator">-</span> num<span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"1827",-1),I=e("td",{style:{"text-align":"left"}},"最少操作使数组递增",-1),C=e("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},N=e("code",null,"贪心",-1),V=e("code",null,"数组",-1),j=e("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/minimum-operations-to-make-the-array-increasing",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},"2233",-1),O=e("td",{style:{"text-align":"left"}},"K 次增加后的最大乘积",-1),T=e("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},K=e("code",null,"贪心",-1),S=e("code",null,"数组",-1),U=e("code",null,"堆（优先队列）",-1),Y=e("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"};function H(J,P){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),p("div",null,[h,e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:s(()=>[_]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),n(),t(a,{to:"/tag/counting.html"},{default:s(()=>[g]),_:1}),n(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),e("a",b,[v,t(o)]),n(),e("a",y,[x,t(o)])]),w,d(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[E,I,C,e("td",L,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[N]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[V]),_:1})]),j,e("td",B,[e("a",R,[n("🀄️"),t(o)]),n(),e("a",A,[n("🔗"),t(o)])])]),e("tr",null,[M,O,T,e("td",F,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[K]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),n(),t(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[U]),_:1})]),Y,e("td",z,[e("a",D,[n("🀄️"),t(o)]),n(),e("a",G,[n("🔗"),t(o)])])])])])])}const W=i(m,[["render",H],["__file","0945.html.vue"]]);export{W as default};
