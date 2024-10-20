import{_ as i,r as p,o as c,c as r,a as n,d as t,b as s,w as e,f as d,e as u}from"./app-Fucr7yuT.js";const k={},h={id:"_82-删除排序链表中的重复元素-ii",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_82-删除排序链表中的重复元素-ii","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"链表",-1),f=n("code",null,"双指针",-1),b={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a sorted linked list, <em>delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,3,4,4,5]</p><p>Output: [1,2,5]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,1,1,2,3]</p><p>Output: [2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个已排序的链表的头 <code>head</code> ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 <strong>已排序的链表</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题意做即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 删除与 prev.next 重复的节点</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>
				prev<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span>
				prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span>
				prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 删除 prev.next 节点</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"83",-1),N={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},j=n("code",null,"链表",-1),C={style:{"text-align":"left"}},V=n("td",{style:{"text-align":"center"}},"1836",-1),q={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),M=n("code",null,"链表",-1),O={style:{"text-align":"left"}};function D(G,S){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return c(),r("div",null,[n("h1",h,[m,t(),n("a",v,[t("82. 删除排序链表中的重复元素 II"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",b,[g,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,n("td",N,[n("a",L,[t("删除排序链表中的重复元素"),s(o)])]),n("td",E,[s(a,{to:"/problem/0083.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/linked-list.html"},{default:e(()=>[j]),_:1})]),n("td",C,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[V,n("td",q,[n("a",B,[t("从未排序的链表中移除重复元素"),s(o)])]),R,n("td",T,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[M]),_:1})]),n("td",O,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const F=i(k,[["render",D],["__file","0082.html.vue"]]);export{F as default};
