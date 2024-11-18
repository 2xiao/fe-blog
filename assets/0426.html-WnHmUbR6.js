import{_ as c,r as o,o as p,c as d,a as n,b as s,d as a,w as e,e as r}from"./app-9Xw5divW.js";const u={},h=n("h1",{id:"_426-将二叉搜索树转化为排序的双向链表-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_426-将二叉搜索树转化为排序的双向链表-🔒","aria-hidden":"true"},"#"),s(" 426. 将二叉搜索树转化为排序的双向链表 🔒")],-1),k=n("code",null,"栈",-1),m=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉搜索树",-1),b=n("code",null,"链表",-1),g=n("code",null,"二叉树",-1),_=n("code",null,"双向链表",-1),y={href:"https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"LeetCode",-1),B=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Convert a BST to a sorted circular doubly-linked list in-place. Think of the left and right pointers as synonymous to the previous and next pointers in a doubly-linked list.</p><p>Let&#39;s take the following BST as an example, it may help you understand the problem better:</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>We want to transform this BST into a circular doubly linked list. Each node in a doubly linked list has a predecessor and successor. For a circular doubly linked list, the predecessor of the head element is the tail element, and the successor of the tail element is the head element.</p><p>The figure below shows the circular doubly linked list for the BST above. The &quot;head&quot; symbol means the node it points to is the smallest element of the linked list.</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Specifically, we want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. We should return the pointer to the head element of the linked list.</p><p>The figure below shows the transformed BST. The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturnbst.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>将一个二叉搜索树就地转化为一个已排序的双向循环链表。可以将左右孩子指针作为双向循环链表的前驱和后继指针。</p><p>为了让您更好地理解问题，以下面的二叉搜索树为例：</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。</p><p>下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。</p><p>下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。</p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturnbst.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>二叉搜索树的中序遍历结果是有序的，因此要将一个二叉搜索树就地转化为一个已排序的双向循环链表，可以采用中序遍历的方式，将节点的左右指针分别指向前驱和后继节点。最后，调整头尾节点的前驱和后继指针，形成循环链表。</p><ol><li>定义两个指针 <code>head</code> 和 <code>tail</code>，它们分别表示双向链表的头部和尾部。</li><li>定义一个中序遍历的函数 <code>traverse</code>，其中对每个节点进行如下处理： <ul><li>如果 <code>head</code> 为空，将当前节点赋值给 <code>head</code>。</li><li>如果 <code>tail</code> 不为空，将 <code>tail</code> 的右指针指向当前节点，将当前节点的左指针指向 <code>tail</code>。</li><li>更新 <code>tail</code> 为当前节点。</li></ul></li><li>在 <code>traverse</code> 完成中序遍历后，将 <code>head</code> 和 <code>tail</code> 进行连接，形成双向循环链表。 <ul><li>将 <code>head</code> 的左指针指向 <code>tail</code>。</li><li>将 <code>tail</code> 的右指针指向 <code>head</code>。</li></ul></li></ol><p>这样，我们就完成了将 BST 转化为已排序的双向循环链表。最后，返回 <code>head</code> 作为循环链表的头节点。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉搜索树的节点数量。因为我们需要访问每个节点一次，完成中序遍历。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是二叉搜索树的高度，表示递归调用栈的深度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">treeToDoublyList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 处理当前节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			head <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			tail<span class="token punctuation">.</span>right <span class="token operator">=</span> root<span class="token punctuation">;</span>
			root<span class="token punctuation">.</span>left <span class="token operator">=</span> tail<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		tail <span class="token operator">=</span> root<span class="token punctuation">;</span>

		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 开始中序遍历</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 将头尾相连形成循环链表</span>
	head<span class="token punctuation">.</span>left <span class="token operator">=</span> tail<span class="token punctuation">;</span>
	tail<span class="token punctuation">.</span>right <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function S(L,z){const i=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return p(),d("div",null,[h,n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/stack.html"},{default:e(()=>[k]),_:1}),s(),a(t,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/binary-search-tree.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/linked-list.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/doubly-linked-list.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,a(l)]),s(),n("a",x,[T,a(l)])]),B])}const C=c(u,[["render",S],["__file","0426.html.vue"]]);export{C as default};
