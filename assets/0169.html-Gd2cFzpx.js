import{_ as r,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-9CeBk-uV.js";const h={},_=e("h1",{id:"_169-多数元素",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_169-多数元素","aria-hidden":"true"},"#"),t(" 169. 多数元素")],-1),m=e("code",null,"数组",-1),k=e("code",null,"哈希表",-1),g=e("code",null,"分治",-1),f=e("code",null,"计数",-1),y=e("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/majority-element",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/majority-element",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p><p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,3]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,1,1,1,2,2]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5 * 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><p><strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个大小为 <code>n</code> 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ <code>n/2</code> ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在众数。要求线性时间复杂度和 <code>O(1)</code> 空间复杂度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题如果用一个哈希表作为计数器，记录每个元素出现的次数，然后寻找出现次数最多的那个元素，时间和空间复杂度都是 <code>O(N)</code>。</p><p>想要空间复杂度为 <code>O(1)</code> ,可以用栈的思路：遍历数组，如果栈为空，或者当前元素与栈顶元素相同，则入栈；否则将栈顶元素弹出。</p><p>由于数组中的众数出现次数大于 <code>n/2</code> ，所以经过不断地入栈出栈，互相消除，最终栈内留下的肯定是我们要找的众数。证明如下：</p><ul><li>当数组内只有两种元素时，由于众数的数量过半，所以不管顺序如何，经过两两对比，不一样的互相消除，最后栈内留下的都是众数；</li><li>当数组内有两种以上的元素时，除众数以外的其他元素还会互相对比消除，所以用于消耗众数的元素数量更少，所以栈内留下的元素就是众数。</li></ul><p>实际上我们并不需要真的实现一个栈，只需要记录栈顶元素 <code>major</code> （栈内所有元素一定相同，遇到不相同的不会入栈），以及元素的个数 <code>count</code> ，因此只需要两个变量就够了。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中<code>n</code> 表示 <code>nums</code> 的长度，需要遍历数组一遍。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用了常数个变量存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">majorityElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> major<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> item <span class="token operator">===</span> major<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			major <span class="token operator">=</span> item<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> major<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"229",-1),E=e("td",{style:{"text-align":"left"}},"多数元素 II",-1),I={style:{"text-align":"center"}},C={style:{"text-align":"left"}},N=e("code",null,"数组",-1),L=e("code",null,"哈希表",-1),V=e("code",null,"计数",-1),B=e("code",null,"1+",-1),R=e("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/majority-element-ii",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/majority-element-ii",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"1150",-1),S=e("td",{style:{"text-align":"left"}},"检查一个数是否在数组中占绝大多数 🔒",-1),Y=e("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},D=e("code",null,"数组",-1),H=e("code",null,"二分查找",-1),J=e("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/check-if-a-number-is-majority-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"2404",-1),U=e("td",{style:{"text-align":"left"}},"出现最频繁的偶数元素",-1),W=e("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=e("code",null,"数组",-1),$=e("code",null,"哈希表",-1),ee=e("code",null,"计数",-1),te=e("td",{style:{"text-align":"center"}},"🟢",-1),ne={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://leetcode.com/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},ae=e("td",{style:{"text-align":"center"}},"2780",-1),le=e("td",{style:{"text-align":"left"}},"合法分割的最小下标",-1),ce=e("td",{style:{"text-align":"center"}},null,-1),re={style:{"text-align":"left"}},ie=e("code",null,"数组",-1),de=e("code",null,"哈希表",-1),pe=e("code",null,"排序",-1),ue=e("td",{style:{"text-align":"center"}},"🟠",-1),he={style:{"text-align":"center"}},_e={href:"https://leetcode.cn/problems/minimum-index-of-a-valid-split",target:"_blank",rel:"noopener noreferrer"},me={href:"https://leetcode.com/problems/minimum-index-of-a-valid-split",target:"_blank",rel:"noopener noreferrer"},ke=e("td",{style:{"text-align":"center"}},"3065",-1),ge=e("td",{style:{"text-align":"left"}},"超过阈值的最少操作数 I",-1),fe=e("td",{style:{"text-align":"center"}},null,-1),ye={style:{"text-align":"left"}},be=e("code",null,"数组",-1),xe=e("td",{style:{"text-align":"center"}},"🟢",-1),ve={style:{"text-align":"center"}},je={href:"https://leetcode.cn/problems/minimum-operations-to-exceed-threshold-value-i",target:"_blank",rel:"noopener noreferrer"},we={href:"https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i",target:"_blank",rel:"noopener noreferrer"};function Oe(qe,Ee){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[_,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),t(),n(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[g]),_:1}),t(),n(o,{to:"/tag/counting.html"},{default:s(()=>[f]),_:1}),t(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[y]),_:1}),t("  🔗 "),e("a",b,[x,n(a)]),t(),e("a",v,[j,n(a)])]),w,p(" prettier-ignore "),e("table",null,[O,e("tbody",null,[e("tr",null,[q,E,e("td",I,[n(o,{to:"/problem/0229.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",C,[n(o,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),t(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[L]),_:1}),t(),n(o,{to:"/tag/counting.html"},{default:s(()=>[V]),_:1}),t(),B]),R,e("td",T,[e("a",z,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])]),e("tr",null,[G,S,Y,e("td",A,[n(o,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),t(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[H]),_:1})]),J,e("td",K,[e("a",M,[t("🀄️"),n(a)]),t(),e("a",P,[t("🔗"),n(a)])])]),e("tr",null,[Q,U,W,e("td",X,[n(o,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),t(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[$]),_:1}),t(),n(o,{to:"/tag/counting.html"},{default:s(()=>[ee]),_:1})]),te,e("td",ne,[e("a",se,[t("🀄️"),n(a)]),t(),e("a",oe,[t("🔗"),n(a)])])]),e("tr",null,[ae,le,ce,e("td",re,[n(o,{to:"/tag/array.html"},{default:s(()=>[ie]),_:1}),t(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[de]),_:1}),t(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[pe]),_:1})]),ue,e("td",he,[e("a",_e,[t("🀄️"),n(a)]),t(),e("a",me,[t("🔗"),n(a)])])]),e("tr",null,[ke,ge,fe,e("td",ye,[n(o,{to:"/tag/array.html"},{default:s(()=>[be]),_:1})]),xe,e("td",ve,[e("a",je,[t("🀄️"),n(a)]),t(),e("a",we,[t("🔗"),n(a)])])])])])])}const Ce=r(h,[["render",Oe],["__file","0169.html.vue"]]);export{Ce as default};
