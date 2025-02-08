import{_ as c,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-totCBmv-.js";const m={},g=e("h1",{id:"_1827-最少操作使数组递增",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1827-最少操作使数组递增","aria-hidden":"true"},"#"),t(" 1827. 最少操作使数组递增")],-1),h=e("code",null,"贪心",-1),_=e("code",null,"数组",-1),k={href:"https://leetcode.cn/problems/minimum-operations-to-make-the-array-increasing",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> (<strong>0-indexed</strong>). In one operation, you can choose an element of the array and increment it by <code>1</code>.</p><ul><li>For example, if <code>nums = [1,2,3]</code>, you can choose to increment <code>nums[1]</code> to make <code>nums = [1,3,3]</code>.</li></ul><p>Return <em>the <strong>minimum</strong> number of operations needed to make</em> <code>nums</code><em><strong>strictly</strong> <strong>increasing</strong>.</em></p><p>An array <code>nums</code> is <strong>strictly increasing</strong> if <code>nums[i] &lt; nums[i+1]</code> for all <code>0 &lt;= i &lt; nums.length - 1</code>. An array of length <code>1</code> is trivially strictly increasing.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> nums = [1,1,1]</p><p>Output: 3</p><p>Explanation: You can do the following operations:</p><ol><li><p>Increment nums[2], so nums becomes [1,1,<em><strong>2</strong></em> ].</p></li><li><p>Increment nums[1], so nums becomes [1,<em><strong>2</strong></em> ,2].</p></li><li><p>Increment nums[2], so nums becomes [1,2,<em><strong>3</strong></em> ].</p></li></ol></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> nums = [1,5,2,4,1]</p><p>Output: 14</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> nums = [8]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> （<strong>下标从 0 开始</strong> ）。每一次操作中，你可以选择数组中一个元素，并将它增加 <code>1</code> 。</p><ul><li>比方说，如果 <code>nums = [1,2,3]</code> ，你可以选择增加 <code>nums[1]</code> 得到 <code>nums = [1,3,3]</code> 。</li></ul><p>请你返回使 <code>nums</code> <strong>严格递增</strong> 的 <strong>最少</strong> 操作次数。</p><p>我们称数组 <code>nums</code> 是 <strong>严格递增的</strong> ，当它满足对于所有的 <code>0 &lt;= i &lt; nums.length - 1</code> 都有 <code>nums[i] &lt; nums[i+1]</code> 。一个长度为 <code>1</code> 的数组是严格递增的一种特殊情况。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 你可以进行如下操作：</p><ol><li><p>增加 nums[2] ，数组变为 [1,1,<strong>2</strong> ] 。</p></li><li><p>增加 nums[1] ，数组变为 [1,<strong>2</strong> ,2] 。</p></li><li><p>增加 nums[2] ，数组变为 [1,2,<strong>3</strong> ] 。</p></li></ol></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,5,2,4,1]</p><p><strong>输出：</strong> 14</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [8]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化：</strong></p><ul><li>使用一个变量 <code>prev</code> 来记录当前元素应该满足的最小值（即前一个元素的值加 1）。最开始，<code>prev</code> 设置为 <code>0</code>。</li></ul></li><li><p><strong>遍历数组：</strong></p><ul><li>遍历数组中的每个元素： <ul><li>如果当前元素 <code>num</code> 大于 <code>prev</code>，那么它已经满足递增条件，直接将 <code>prev</code> 更新为当前元素 <code>num</code>。</li><li>如果当前元素 <code>num</code> 小于或等于 <code>prev</code>，则需要进行调整。为了使当前元素严格大于 <code>prev</code>，我们将当前元素增加到 <code>prev + 1</code>，并计算所需的操作次数（即 <code>prev + 1 - num</code>）。然后将 <code>prev</code> 更新为 <code>prev + 1</code>，以便接下来继续判断下一个元素。</li></ul></li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终，所有需要进行的操作次数累加起来，即为最少的修改次数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，只遍历了数组一次，每次操作的时间复杂度为常数级别。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只使用了常数的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> operations <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			operations <span class="token operator">+=</span> prev <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">-</span> num<span class="token punctuation">;</span>
			prev<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> operations<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"945",-1),w=e("td",{style:{"text-align":"left"}},"使数组唯一的最小增量",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=e("code",null,"贪心",-1),C=e("code",null,"数组",-1),L=e("code",null,"计数",-1),N=e("code",null,"1+",-1),V=e("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/minimum-increment-to-make-array-unique",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/minimum-increment-to-make-array-unique",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},"2233",-1),Y=e("td",{style:{"text-align":"left"}},"K 次增加后的最大乘积",-1),F=e("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},S=e("code",null,"贪心",-1),T=e("code",null,"数组",-1),z=e("code",null,"堆（优先队列）",-1),D=e("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},"2263",-1),P=e("td",{style:{"text-align":"left"}},"数组变为有序的最小操作次数 🔒",-1),Q=e("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=e("code",null,"贪心",-1),X=e("code",null,"动态规划",-1),Z=e("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/make-array-non-decreasing-or-non-increasing",target:"_blank",rel:"noopener noreferrer"},te={href:"https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing",target:"_blank",rel:"noopener noreferrer"},ne=e("td",{style:{"text-align":"center"}},"2366",-1),se=e("td",{style:{"text-align":"left"}},"将数组排序的最少替换次数",-1),oe=e("td",{style:{"text-align":"center"}},null,-1),ae={style:{"text-align":"left"}},le=e("code",null,"贪心",-1),re=e("code",null,"数组",-1),ce=e("code",null,"数学",-1),ie=e("td",{style:{"text-align":"center"}},"🔴",-1),de={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/minimum-replacements-to-sort-the-array",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://leetcode.com/problems/minimum-replacements-to-sort-the-array",target:"_blank",rel:"noopener noreferrer"};function me(ge,he){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[g,e("p",null,[t("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/greedy.html"},{default:s(()=>[h]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),e("a",k,[f,n(a)]),t(),e("a",b,[y,n(a)])]),v,p(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[q,w,e("td",I,[n(o,{to:"/problem/0945.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",E,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[O]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/counting.html"},{default:s(()=>[L]),_:1}),t(),N]),V,e("td",j,[e("a",B,[t("🀄️"),n(a)]),t(),e("a",R,[t("🔗"),n(a)])])]),e("tr",null,[A,Y,F,e("td",K,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[S]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[T]),_:1}),t(),n(o,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[z]),_:1})]),D,e("td",G,[e("a",H,[t("🀄️"),n(a)]),t(),e("a",J,[t("🔗"),n(a)])])]),e("tr",null,[M,P,Q,e("td",U,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[W]),_:1}),t(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[X]),_:1})]),Z,e("td",$,[e("a",ee,[t("🀄️"),n(a)]),t(),e("a",te,[t("🔗"),n(a)])])]),e("tr",null,[ne,se,oe,e("td",ae,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[le]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[re]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[ce]),_:1})]),ie,e("td",de,[e("a",pe,[t("🀄️"),n(a)]),t(),e("a",ue,[t("🔗"),n(a)])])])])])])}const ke=c(m,[["render",me],["__file","1827.html.vue"]]);export{ke as default};
