import{_ as i,r as l,o as c,c as r,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-r0ql_Osa.js";const h={},g=e("h1",{id:"_2095-删除链表的中间节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2095-删除链表的中间节点","aria-hidden":"true"},"#"),t(" 2095. 删除链表的中间节点")],-1),_=e("code",null,"链表",-1),m=e("code",null,"双指针",-1),k={href:"https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>head</code> of a linked list. <strong>Delete</strong> the <strong>middle node</strong> , and return <em>the</em> <code>head</code> <em>of the modified linked list</em>.</p><p>The <strong>middle node</strong> of a linked list of size <code>n</code> is the <code>⌊n / 2⌋th</code> node from the <strong>start</strong> using <strong>0-based indexing</strong> , where <code>⌊x⌋</code> denotes the largest integer less than or equal to <code>x</code>.</p><ul><li>For <code>n</code> = <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, and <code>5</code>, the middle nodes are <code>0</code>, <code>1</code>, <code>1</code>, <code>2</code>, and <code>2</code>, respectively.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,3,4,7,1,2,6]</p><p>Output: [1,3,4,1,2,6]</p><p>Explanation:</p><p>The above figure represents the given linked list. The indices of the nodes are written below.</p><p>Since n = 7, node 3 with value 7 is the middle node, which is marked in red.</p><p>We return the new list after removing this node.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4]</p><p>Output: [1,2,4]</p><p>Explanation:</p><p>The above figure represents the given linked list.</p><p>For n = 4, node 2 with value 3 is the middle node, which is marked in red.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [2,1]</p><p>Output: [2]</p><p>Explanation:</p><p>The above figure represents the given linked list.</p><p>For n = 2, node 1 with value 1 is the middle node, which is marked in red.</p><p>Node 0 with value 2 is the only node remaining after removing node 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 105]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个链表的头节点 <code>head</code> 。<strong>删除</strong> 链表的 <strong>中间节点</strong> ，并返回修改后的链表的头节点 <code>head</code> 。</p><p>长度为 <code>n</code> 链表的中间节点是从头数起第 <code>⌊n / 2⌋</code> 个节点（下标从 <strong>0</strong> 开始），其中 <code>⌊x⌋</code> 表示小于或等于 <code>x</code> 的最大整数。</p><ul><li>对于 <code>n</code> = <code>1</code>、<code>2</code>、<code>3</code>、<code>4</code> 和 <code>5</code> 的情况，中间节点的下标分别是 <code>0</code>、<code>1</code>、<code>1</code>、<code>2</code> 和 <code>2</code> 。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [1,3,4,7,1,2,6]</p><p><strong>输出：</strong>[1,3,4,1,2,6]</p><p><strong>解释：</strong></p><p>上图表示给出的链表。节点的下标分别标注在每个节点的下方。</p><p>由于 n = 7 ，值为 7 的节点 3 是中间节点，用红色标注。</p><p>返回结果为移除节点后的新链表。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [1,2,3,4]</p><p><strong>输出：</strong>[1,2,4]</p><p><strong>解释：</strong></p><p>上图表示给出的链表。</p><p>对于 n = 4 ，值为 3 的节点 2 是中间节点，用红色标注。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/16/eg3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [2,1]</p><p><strong>输出：</strong>[2]</p><p><strong>解释：</strong></p><p>上图表示给出的链表。</p><p>对于 n = 2 ，值为 1 的节点 1 是中间节点，用红色标注。</p><p>值为 2 的节点 0 是移除节点 1 后剩下的唯一一个节点。</p></blockquote><p><strong>提示：</strong></p><ul><li>链表中节点的数目在范围 <code>[1, 105]</code> 内</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>中间节点的定义：</strong></p><ul><li>如果链表的长度是奇数，中间节点是唯一的。</li><li>如果链表的长度是偶数，中间节点是中间偏右的那个节点（第二个节点）。</li></ul><ol><li><p><strong>初始化</strong>：</p><ul><li><code>slow</code> 和 <code>fast</code> 都初始化为链表的头节点。</li><li><code>prev</code> 用于保存慢指针前一个节点的位置。</li></ul></li><li><p><strong>使用快慢指针</strong>：</p><ul><li>在 <code>while</code> 循环中，快指针每次走两步，慢指针每次走一步。</li><li>当快指针达到链表末尾时，慢指针恰好指向链表的中间节点。</li></ul></li><li><p><strong>删除操作</strong>：当找到中间节点时，慢指针的前一个节点 <code>prev</code> 会指向慢指针的下一个节点，实际上就删除了中间节点。</p></li><li><p>返回链表的头节点 <code>head</code>，此时链表已经删除了中间节点。</p></li></ol><h4 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是链表的长度，快慢指针遍历链表一次。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只使用了常数空间来存储指针（快指针、慢指针、前一个节点）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteMiddle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 如果链表只有一个节点，删除后链表为空</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span>
		fast <span class="token operator">=</span> head<span class="token punctuation">,</span>
		prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用快慢指针找到中间节点的前一个节点</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prev <span class="token operator">=</span> slow<span class="token punctuation">;</span> <span class="token comment">// 慢指针前一个节点</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 快指针走两步</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 慢指针走一步</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 删除慢指针指向的中间节点</span>
	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"19",-1),q=e("td",{style:{"text-align":"left"}},"删除链表的倒数第 N 个结点",-1),N={style:{"text-align":"center"}},E={style:{"text-align":"left"}},z=e("code",null,"链表",-1),L=e("code",null,"双指针",-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"143",-1),j=e("td",{style:{"text-align":"left"}},"重排链表",-1),B={style:{"text-align":"center"}},F={style:{"text-align":"left"}},M=e("code",null,"栈",-1),R=e("code",null,"递归",-1),S=e("code",null,"链表",-1),D=e("code",null,"1+",-1),W=e("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/reorder-list",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/reorder-list",target:"_blank",rel:"noopener noreferrer"},H=e("td",{style:{"text-align":"center"}},"203",-1),J=e("td",{style:{"text-align":"left"}},"移除链表元素",-1),K={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=e("code",null,"递归",-1),U=e("code",null,"链表",-1),X=e("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},te=e("td",{style:{"text-align":"center"}},"876",-1),ne=e("td",{style:{"text-align":"left"}},"链表的中间结点",-1),se={style:{"text-align":"center"}},oe={style:{"text-align":"left"}},ae=e("code",null,"链表",-1),le=e("code",null,"双指针",-1),de=e("td",{style:{"text-align":"center"}},"🟢",-1),ie={style:{"text-align":"center"}},ce={href:"https://leetcode.cn/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},re={href:"https://leetcode.com/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"};function pe(ue,he){const d=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return c(),r("div",null,[g,e("p",null,[t("🟠 "),n(d,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[_]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",k,[f,n(a)]),t(),e("a",b,[v,n(a)])]),x,p(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,q,e("td",N,[n(o,{to:"/problem/0019.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",E,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[z]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[L]),_:1})]),T,e("td",C,[e("a",I,[t("🀄️"),n(a)]),t(),e("a",O,[t("🔗"),n(a)])])]),e("tr",null,[V,j,e("td",B,[n(o,{to:"/problem/0143.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",F,[n(o,{to:"/tag/stack.html"},{default:s(()=>[M]),_:1}),t(),n(o,{to:"/tag/recursion.html"},{default:s(()=>[R]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[S]),_:1}),t(),D]),W,e("td",Y,[e("a",A,[t("🀄️"),n(a)]),t(),e("a",G,[t("🔗"),n(a)])])]),e("tr",null,[H,J,e("td",K,[n(o,{to:"/problem/0203.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",P,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[Q]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[U]),_:1})]),X,e("td",Z,[e("a",$,[t("🀄️"),n(a)]),t(),e("a",ee,[t("🔗"),n(a)])])]),e("tr",null,[te,ne,e("td",se,[n(o,{to:"/problem/0876.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",oe,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[ae]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[le]),_:1})]),de,e("td",ie,[e("a",ce,[t("🀄️"),n(a)]),t(),e("a",re,[t("🔗"),n(a)])])])])])])}const _e=i(h,[["render",pe],["__file","2095.html.vue"]]);export{_e as default};
