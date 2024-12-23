import{_ as i,r as l,o as d,c as p,a as e,b as t,d as n,w as s,f as r,e as u}from"./app-Kkp_66uf.js";const h={},k=e("h1",{id:"_142-环形链表-ii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_142-环形链表-ii","aria-hidden":"true"},"#"),t(" 142. 环形链表 II")],-1),_=e("code",null,"哈希表",-1),g=e("code",null,"链表",-1),m=e("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/linked-list-cycle-ii",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, return <em>the node where the cycle begins. If there is no cycle, return</em><code>null</code>.</p><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail&#39;s <code>next</code> pointer is connected to ( <strong>0-indexed</strong> ). It is <code>-1</code> if there is no cycle. <strong>Note that</strong><code>pos</code> <strong>is not passed as a parameter</strong>.</p><p><strong>Do not modify</strong> the linked list.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [3,2,0,-4], pos = 1</p><p>Output: tail connects to node index 1</p><p>Explanation: There is a cycle in the linked list, where tail connects to the second node.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2], pos = 0</p><p>Output: tail connects to node index 0</p><p>Explanation: There is a cycle in the linked list, where tail connects to the first node.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1], pos = -1</p><p>Output: no cycle</p><p>Explanation: There is no cycle in the linked list.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the list is in the range <code>[0, 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li><li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li></ul><p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个链表的头节点 <code>head</code> ，返回链表开始入环的第一个节点。 如果链表无环，则返回 <code>null</code>。</p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 <code>0</code> 开始）。如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。注意：<code>pos</code> 不作为参数进行传递，仅仅是为了标识链表的实际情况。</p><p><strong>不允许修改</strong> 链表。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过快慢指针的方法来解决。</p><ol><li>定义两个指针，一个慢指针 <code>slow</code>，一个快指针 <code>fast</code>，初始位置都在链表的头部。</li><li>使用循环，每轮循环中慢指针走一步，快指针走两步。</li><li>如果链表中存在环，快指针最终会追上慢指针，两者会相遇。如果链表中不存在环，快指针会先到达链表的末尾。</li><li>如果相遇，将其中一个指针重新放置在链表头部，然后两个指针以相同的速度向前移动，每次移动一步。</li><li>当两个指针再次相遇时，相遇点即为环的入口点。</li></ol><p>这个方法的原理证明如下：</p><p>假设链表头到环的入口点的距离为 <code>a</code> 步，环的入口点到相遇点的距离为 <code>b</code> 步，环的长度为 <code>c</code> 步。那么，在第一次相遇时，慢指针 <code>slow</code> 走了 <code>a + b</code> 步，快指针 <code>fast</code> 走了 <code>a + b + k * c</code> 步（其中 <code>k</code> 是快指针在环中转了 <code>k</code> 圈）。</p><p>由于快指针的速度是慢指针的两倍，所以：<code>2(a + b) = a + b + k * c</code></p><p>整理得：<code>a = (k - 1) * c + (c - b)</code></p><p>这意味着从相遇点继续走 <code>a</code> 步，将再次到达环的入口点。我们重新将 <code>slow</code> 指针放到链表头，然后 <code>slow</code> 和 <code>fast</code> 每次都移动一步，最终它们将在环的入口点相遇。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表中的节点数量。</p><ul><li>在第一阶段（找环阶段），快指针 <code>fast</code> 以两倍速度遍历链表，而慢指针 <code>slow</code> 以正常速度遍历链表。当链表中存在环时，快慢指针最终会在环中相遇。由于每次移动都会减少两者之间的距离，因此最坏情况下需要遍历整个链表，这一部分的时间复杂度为 <code>O(n)</code>。</li><li>在第二阶段（找环入口），两个指针从相遇点和头结点开始分别每次移动一步，最终会在环的入口处相遇。这个过程最多也需要遍历 <code>O(n)</code> 的节点。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
				fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),I=e("td",{style:{"text-align":"center"}},"141",-1),E=e("td",{style:{"text-align":"left"}},"环形链表",-1),N={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=e("code",null,"哈希表",-1),L=e("code",null,"链表",-1),q=e("code",null,"双指针",-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/linked-list-cycle",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"287",-1),R=e("td",{style:{"text-align":"left"}},"寻找重复数",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=e("code",null,"位运算",-1),M=e("code",null,"数组",-1),S=e("code",null,"双指针",-1),A=e("code",null,"1+",-1),H=e("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return d(),p("div",null,[k,e("p",null,[t("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[_]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",f,[b,n(a)]),t(),e("a",v,[x,n(a)])]),y,r(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[I,E,e("td",N,[n(o,{to:"/problem/0141.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",O,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[L]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[q]),_:1})]),T,e("td",V,[e("a",j,[t("🀄️"),n(a)]),t(),e("a",z,[t("🔗"),n(a)])])]),e("tr",null,[B,R,e("td",D,[n(o,{to:"/problem/0287.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",F,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[G]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),t(),A]),H,e("td",J,[e("a",K,[t("🀄️"),n(a)]),t(),e("a",P,[t("🔗"),n(a)])])])])])])}const Y=i(h,[["render",Q],["__file","0142.html.vue"]]);export{Y as default};
