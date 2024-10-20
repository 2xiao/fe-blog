import{_ as i,r as p,o as r,c as u,a as n,d as t,b as s,w as e,f as d,e as c}from"./app-Fucr7yuT.js";const h={},m={id:"_283-移动零",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_283-移动零","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"数组",-1),b=n("code",null,"双指针",-1),v={href:"https://leetcode.com/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, move all <code>0</code>&#39;s to the end of it while maintaining the relative order of the non-zero elements.</p><p><strong>Note</strong> that you must do this in-place without making a copy of the array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,0,3,12]</p><p>Output: [1,3,12,0,0]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you minimize the total number of operations done?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>题目要求不能采用额外的辅助空间，将数组中 0 元素都移动到数组的末尾，并且维持所有非 0 元素的相对位置。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),x=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">moveZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> zeroSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			zeroSize <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>i <span class="token operator">-</span> zeroSize<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),z=n("td",{style:{"text-align":"center"}},"27",-1),E={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"数组",-1),j=n("code",null,"双指针",-1),q={style:{"text-align":"left"}},I=n("td",{style:{"text-align":"center"}},"2460",-1),S={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/apply-operations-to-an-array",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},D=n("code",null,"数组",-1),F=n("code",null,"双指针",-1),G=n("code",null,"模拟",-1),T={style:{"text-align":"left"}};function Z(A,H){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return r(),u("div",null,[n("h1",m,[k,t(),n("a",_,[t("283. 移动零"),s(o)])]),n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",v,[g,s(o)])]),y,n("p",null,[t("这一题可以只扫描数组一遍，不断的用 i，j 标记 0 和非 0 的元素，然后相互交换，最终到达题目的目的。与这一题相近的题目有 "),s(a,{to:"/problem/0026.html"},{default:e(()=>[t("第 26 题")]),_:1}),t("，"),s(a,{to:"/problem/0027.html"},{default:e(()=>[t("第 27 题")]),_:1}),t("，"),s(a,{to:"/problem/0080.html"},{default:e(()=>[t("第 80 题")]),_:1}),t("。")]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[z,n("td",E,[n("a",C,[t("移除元素"),s(o)])]),n("td",N,[s(a,{to:"/problem/0027.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",L,[s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[j]),_:1})]),n("td",q,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[I,n("td",S,[n("a",B,[t("对数组执行操作"),s(o)])]),O,n("td",R,[s(a,{to:"/tag/array.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[G]),_:1})]),n("td",T,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])])])])])}const K=i(h,[["render",Z],["__file","0283.html.vue"]]);export{K as default};
