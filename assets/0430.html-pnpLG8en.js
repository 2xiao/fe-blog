import{_ as c,r as l,o as p,c as d,a as n,b as e,d as t,w as s,f as r,e as u}from"./app-BBnmDgJV.js";const h={},k=n("h1",{id:"_430-扁平化多级双向链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_430-扁平化多级双向链表","aria-hidden":"true"},"#"),e(" 430. 扁平化多级双向链表")],-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"链表",-1),g=n("code",null,"双向链表",-1),v={href:"https://leetcode.cn/problems/flatten-a-multilevel-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional <strong>child pointer</strong>. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a <strong>multilevel data structure</strong> as shown in the example below.</p><p>Given the <code>head</code> of the first level of the list, <strong>flatten</strong> the list so that all the nodes appear in a single-level, doubly linked list. Let <code>curr</code> be a node with a child list. The nodes in the child list should appear <strong>after</strong><code>curr</code> and <strong>before</strong> <code>curr.next</code> in the flattened list.</p><p>Return <em>the</em><code>head</code> _of the flattened list. The nodes in the list must have <strong>all</strong> of their child pointers set to _<code>null</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/09/flatten11.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</p><p>Output: [1,2,3,7,8,11,12,9,10,4,5,6]</p><p>Explanation: The multilevel linked list in the input is shown.</p><p>After flattening the multilevel linked list it becomes:</p><figure><img src="https://assets.leetcode.com/uploads/2021/11/09/flatten12.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/09/flatten2.1jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,null,3]</p><p>Output: [1,3,2]</p><p>Explanation: The multilevel linked list in the input is shown.</p><p>After flattening the multilevel linked list it becomes:</p><figure><img src="https://assets.leetcode.com/uploads/2021/11/24/list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p><p>Explanation: There could be empty list in the input.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of Nodes will not exceed <code>1000</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>How the multilevel linked list is represented in test cases:</strong></p><p>We use the multilevel linked list from <strong>Example 1</strong> above:</p><blockquote><p>1---2---3---4---5---6--NULL</p><pre><code>    |

    7---8---9---10--NULL

        |

        11--12--NULL
</code></pre></blockquote><p>The serialization of each level is as follows:</p><blockquote><p>[1,2,3,4,5,6,null]</p><p>[7,8,9,10,null]</p><p>[11,12,null]</p></blockquote><p>To serialize all levels together, we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:</p><blockquote><p>[1, 2, 3, 4, 5, 6, null]</p><p>[null, null, 7, 8, 9, 10, null]</p><p>[null, 11, 12, null]</p></blockquote><p>Merging the serialization of each level and removing trailing nulls we obtain:</p><blockquote><p>[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你会得到一个双链表，其中包含的节点有一个下一个指针、一个前一个指针和一个额外的 <strong>子指针</strong> 。这个子指针可能指向一个单独的双向链表，也包含这些特殊的节点。这些子列表可以有一个或多个自己的子列表，以此类推，以生成如下面的示例所示的 <strong>多层数据结构</strong> 。</p><p>给定链表的头节点 <code>head</code> ，将链表 <strong>扁平化</strong> ，以便所有节点都出现在单层双链表中。让 <code>curr</code> 是一个带有子列表的节点。子列表中的节点应该出现在扁平化列表中的 <code>curr</code> <strong>之后</strong> 和 <code>curr.next</code> <strong>之前</strong> 。</p><p>返回 <em>扁平列表的</em> <code>head</code> 。列表中的节点必须将其 <strong>所有</strong> 子指针设置为 <code>null</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>使用递归遍历多级链表，如果某个节点有子链表，则对子链表进行递归处理。</li><li>在递归处理过程中，将当前节点的 <code>next</code> 指针指向递归处理后的子链表，同时将子链表的 <code>prev</code> 指针指向当前节点。</li><li>最后，将当前节点的 <code>child</code> 指针置为 <code>null</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的节点总数。这个算法递归地处理了多级链表中的每个节点，每个节点都只处理一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flatten</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">const</span> child <span class="token operator">=</span> head<span class="token punctuation">.</span>child<span class="token punctuation">;</span>

	<span class="token comment">// 处理当前节点的子链表</span>
	<span class="token keyword">const</span> flattenChild <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 连接当前节点和递归处理后的子链表</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>flattenChild<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> flattenChild<span class="token punctuation">;</span>
		flattenChild<span class="token punctuation">.</span>prev <span class="token operator">=</span> head<span class="token punctuation">;</span>
		head<span class="token punctuation">.</span>child <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 递归处理后续节点</span>
	<span class="token keyword">const</span> flattenNext <span class="token operator">=</span> <span class="token function">flatten</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 连接递归处理后的子链表和后续节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>flattenNext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token function">findLast</span><span class="token punctuation">(</span>flattenChild<span class="token punctuation">)</span> <span class="token operator">||</span> head<span class="token punctuation">;</span>
		last<span class="token punctuation">.</span>next <span class="token operator">=</span> flattenNext<span class="token punctuation">;</span>
		flattenNext<span class="token punctuation">.</span>prev <span class="token operator">=</span> last<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数：找到链表的最后一个节点</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"114",-1),q=n("td",{style:{"text-align":"left"}},"二叉树展开为链表",-1),L={style:{"text-align":"center"}},T={style:{"text-align":"left"}},C=n("code",null,"栈",-1),E=n("code",null,"树",-1),z=n("code",null,"深度优先搜索",-1),j=n("code",null,"2+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1660",-1),U=n("td",{style:{"text-align":"left"}},"纠正二叉树 🔒",-1),A=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},G=n("code",null,"树",-1),H=n("code",null,"深度优先搜索",-1),S=n("code",null,"广度优先搜索",-1),W=n("code",null,"2+",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/correct-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/correct-a-binary-tree",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[k,n("p",null,[e("🟠 "),t(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",v,[_,t(o)]),e(),n("a",b,[x,t(o)])]),y,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[N,q,n("td",L,[t(a,{to:"/problem/0114.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",T,[t(a,{to:"/tag/stack.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/tree.html"},{default:s(()=>[E]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[z]),_:1}),e(),j]),I,n("td",O,[n("a",V,[e("🀄️"),t(o)]),e(),n("a",B,[e("🔗"),t(o)])])]),n("tr",null,[R,U,A,n("td",M,[t(a,{to:"/tag/tree.html"},{default:s(()=>[G]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[H]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[S]),_:1}),e(),W]),Y,n("td",D,[n("a",F,[e("🀄️"),t(o)]),e(),n("a",J,[e("🔗"),t(o)])])])])])])}const Z=c(h,[["render",K],["__file","0430.html.vue"]]);export{Z as default};
