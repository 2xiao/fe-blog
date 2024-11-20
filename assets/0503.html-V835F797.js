import{_ as r,r as c,o as i,c as u,a as n,b as t,d as s,w as e,f as d,e as p}from"./app-BBnmDgJV.js";const k={},h=n("h1",{id:"_503-下一个更大元素-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_503-下一个更大元素-ii","aria-hidden":"true"},"#"),t(" 503. 下一个更大元素 II")],-1),m=n("code",null,"栈",-1),_=n("code",null,"数组",-1),g=n("code",null,"单调栈",-1),b={href:"https://leetcode.cn/problems/next-greater-element-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/next-greater-element-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a circular integer array <code>nums</code> (i.e., the next element of <code>nums[nums.length - 1]</code> is <code>nums[0]</code>), return <em>the <strong>next greater number</strong> for every element in</em> <code>nums</code>.</p><p>The <strong>next greater number</strong> of a number <code>x</code> is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn&#39;t exist, return <code>-1</code> for this number.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,1]</p><p>Output: [2,-1,2]</p><p>Explanation: The first 1&#39;s next greater number is 2;</p><p>The number 2 can&#39;t find next greater number.</p><p>The second 1&#39;s next greater number needs to search circularly, which is also 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4,3]</p><p>Output: [2,3,4,-1,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个循环数组 <code>nums</code> （ <code>nums[nums.length - 1]</code> 的下一个元素是 <code>nums[0]</code> ），返回 <code>nums</code> 中每个元素的 <strong>下一个更大元素</strong> 。</p><p>数字 <code>x</code> 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 <code>-1</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),w=p(`<p>可以依旧按照第 496 题的做法，用单调栈，栈中记录单调递增的下标。</p><p>只不过由于是循环数组，所以需要在原数组的基础上，将数组前 <code>n−1</code> 个元素拼接在原数组的后面，进行遍历，实际代码中，不需要真正拼接数组，只需对下标取模即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nextGreaterElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">*</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> idx <span class="token operator">=</span> i <span class="token operator">%</span> len<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"496",-1),C=n("td",{style:{"text-align":"left"}},"下一个更大元素 I",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},T=n("code",null,"栈",-1),V=n("code",null,"数组",-1),q=n("code",null,"哈希表",-1),j=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"556",-1),M=n("td",{style:{"text-align":"left"}},"下一个更大元素 III",-1),S=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},D=n("code",null,"数学",-1),F=n("code",null,"双指针",-1),H=n("code",null,"字符串",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/next-greater-element-iii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/next-greater-element-iii",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/monotonic-stack.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",b,[f,s(o)]),t(),n("a",x,[v,s(o)])]),y,n("p",null,[t("这题是 "),s(a,{to:"/problem/0496.html"},{default:e(()=>[t("第 496 题")]),_:1}),t(" 的加强版，在第 496 题的基础上增加了循环数组的条件。")]),w,d(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[E,C,n("td",L,[s(a,{to:"/problem/0496.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/stack.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[q]),_:1}),t(),j]),B,n("td",G,[n("a",O,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[A,M,S,n("td",z,[s(a,{to:"/tag/math.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])])])])])}const Z=r(k,[["render",U],["__file","0503.html.vue"]]);export{Z as default};
