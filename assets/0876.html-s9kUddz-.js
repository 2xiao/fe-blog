import{_ as d,r as l,o as c,c as r,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-9CeBk-uV.js";const h={},_=e("h1",{id:"_876-链表的中间结点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_876-链表的中间结点","aria-hidden":"true"},"#"),t(" 876. 链表的中间结点")],-1),m=e("code",null,"链表",-1),k=e("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, return <em>the middle node of the linked list</em>.</p><p>If there are two middle nodes, return <strong>the second middle</strong> node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [3,4,5]</p><p>Explanation: The middle node of the list is node 3.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5,6]</p><p>Output: [4,5,6]</p><p>Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 100]</code>.</li><li><code>1 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>输出链表中间结点。这题在前面题目中反复出现了很多次了。</p><p>如果链表长度是奇数，输出中间结点是中间结点。如果链表长度是双数，输出中间结点是中位数后面的那个结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>思路一：单指针</p><ul><li>先遍历一遍链表，统计一下节点个数为 n，再遍历到 n / 2 的位置，返回中间节点；</li><li>需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。</li></ul></li><li><p>思路二：快慢指针</p><ul><li>使用步长不一致的快慢指针进行一次遍历找到链表的中间节点；</li><li>使用两个指针 <code>slow</code>、<code>fast</code>，都指向链表的头节点;</li><li>将快、慢指针同时向右移动，其中慢指针每次移动 1 步，即 <code>slow = slow.next</code>；快指针每次移动 2 步，即 <code>fast = fast.next.next</code>；</li><li>等到快指针移动到链表尾部（即 <code>fast.next == null</code>）时跳出循环体，此时 slow 指向链表中间位置；</li><li>返回 slow 指针。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">middleNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2095",-1),N=e("td",{style:{"text-align":"left"}},"删除链表的中间节点",-1),E={style:{"text-align":"center"}},L={style:{"text-align":"left"}},j=e("code",null,"链表",-1),C=e("code",null,"双指针",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},q={href:"https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},T=e("td",{style:{"text-align":"center"}},"2130",-1),z=e("td",{style:{"text-align":"left"}},"链表最大孪生和",-1),O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=e("code",null,"栈",-1),G=e("code",null,"链表",-1),A=e("code",null,"双指针",-1),D=e("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"};function K(M,P){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),r("div",null,[_,e("p",null,[t("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),e("a",f,[g,n(o)]),t(),e("a",x,[b,n(o)])]),v,p(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,N,e("td",E,[n(a,{to:"/problem/2095.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",L,[n(a,{to:"/tag/linked-list.html"},{default:s(()=>[j]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[C]),_:1})]),I,e("td",V,[e("a",q,[t("🀄️"),n(o)]),t(),e("a",B,[t("🔗"),n(o)])])]),e("tr",null,[T,z,e("td",O,[n(a,{to:"/problem/2130.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",R,[n(a,{to:"/tag/stack.html"},{default:s(()=>[S]),_:1}),t(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[G]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[A]),_:1})]),D,e("td",F,[e("a",H,[t("🀄️"),n(o)]),t(),e("a",J,[t("🔗"),n(o)])])])])])])}const U=d(h,[["render",K],["__file","0876.html.vue"]]);export{U as default};
