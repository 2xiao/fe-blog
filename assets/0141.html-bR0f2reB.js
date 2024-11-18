import{_ as c,r as l,o as p,c as d,a as e,b as t,d as n,w as s,f as r,e as u}from"./app-5LzGvT4H.js";const h={},_=e("h1",{id:"_141-环形链表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_141-环形链表","aria-hidden":"true"},"#"),t(" 141. 环形链表")],-1),k=e("code",null,"哈希表",-1),m=e("code",null,"链表",-1),f=e("code",null,"双指针",-1),g={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail&#39;s <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed as a parameter</strong>.</p><p>Return <code>true</code> <em>if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [3,2,0,-4], pos = 1</p><p>Output: true</p><p>Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2], pos = 0</p><p>Output: true</p><p>Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1], pos = -1</p><p>Output: false</p><p>Explanation: There is no cycle in the linked list.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the list is in the range <code>[0, 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li><li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li></ul><p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断链表是否有环，不能使用额外的空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>思路一：哈希表 <ul><li>最简单的思路是遍历所有节点，每次遍历节点之前，使用哈希表判断该节点是否被访问过；</li><li>如果访问过就说明存在环；</li><li>如果没访问过则将该节点添加到哈希表中，继续遍历判断；</li></ul></li><li>思路二：快慢指针 <ul><li>两个指针从同一位置同时出发，一快一慢，如果有环，那么快的一方总能追上慢的一方；</li><li>慢指针每次前进一步，快指针每次前进 n 步（n &gt;= 2）；</li><li>如果两个指针在链表头节点以外的某一节点相遇了，那么说明链表有环；</li><li>否则，如果（快指针）到达了某个没有后继指针的节点时，那么说明没环；</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"142",-1),I=e("td",{style:{"text-align":"left"}},"环形链表 II",-1),N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},q=e("code",null,"哈希表",-1),L=e("code",null,"链表",-1),T=e("code",null,"双指针",-1),O=e("td",{style:{"text-align":"left"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"202",-1),R=e("td",{style:{"text-align":"left"}},"快乐数",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},S=e("code",null,"哈希表",-1),A=e("code",null,"数学",-1),D=e("code",null,"双指针",-1),H=e("td",{style:{"text-align":"left"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/happy-number",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[_,e("p",null,[t("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),t(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),e("a",g,[b,n(o)]),t(),e("a",y,[x,n(o)])]),v,r(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[E,I,e("td",N,[n(a,{to:"/problem/0142.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",C,[n(a,{to:"/tag/hash-table.html"},{default:s(()=>[q]),_:1}),t(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[L]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[T]),_:1})]),O,e("td",V,[e("a",j,[t("🀄️"),n(o)]),t(),e("a",z,[t("🔗"),n(o)])])]),e("tr",null,[B,R,e("td",F,[n(a,{to:"/problem/0202.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",G,[n(a,{to:"/tag/hash-table.html"},{default:s(()=>[S]),_:1}),t(),n(a,{to:"/tag/math.html"},{default:s(()=>[A]),_:1}),t(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[D]),_:1})]),H,e("td",J,[e("a",K,[t("🀄️"),n(o)]),t(),e("a",M,[t("🔗"),n(o)])])])])])])}const X=c(h,[["render",P],["__file","0141.html.vue"]]);export{X as default};
