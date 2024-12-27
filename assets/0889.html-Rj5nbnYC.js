import{_ as l,r as o,o as i,c as u,a as s,b as n,d as a,w as t,e as r}from"./app-fqckLmln.js";const d={},k=s("h1",{id:"_889-根据前序和后序遍历构造二叉树",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_889-根据前序和后序遍历构造二叉树","aria-hidden":"true"},"#"),n(" 889. 根据前序和后序遍历构造二叉树")],-1),m=s("code",null,"树",-1),h=s("code",null,"数组",-1),v=s("code",null,"哈希表",-1),b=s("code",null,"分治",-1),f=s("code",null,"二叉树",-1),_={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"LeetCode",-1),x=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays, <code>preorder</code> and <code>postorder</code> where <code>preorder</code> is the preorder traversal of a binary tree of <strong>distinct</strong> values and <code>postorder</code> is the postorder traversal of the same tree, reconstruct and return <em>the binary tree</em>.</p><p>If there exist multiple answers, you can <strong>return any</strong> of them.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/24/lc-prepost.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]</p><p>Output: [1,2,3,4,5,6,7]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: preorder = [1], postorder = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 30</code></li><li><code>1 &lt;= preorder[i] &lt;= preorder.length</code></li><li>All the values of <code>preorder</code> are <strong>unique</strong>.</li><li><code>postorder.length == preorder.length</code></li><li><code>1 &lt;= postorder[i] &lt;= postorder.length</code></li><li>All the values of <code>postorder</code> are <strong>unique</strong>.</li><li>It is guaranteed that <code>preorder</code> and <code>postorder</code> are the preorder traversal and postorder traversal of the same binary tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一棵无重复值二叉树的前序遍历结果 <code>preorder</code> 和后序遍历结果 <code>postorder</code>，构造出该二叉树并返回其根节点。如果存在多个答案，则可以返回其中任意一个。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),q=r(`<p>构建二叉树的套路很简单，先找到根节点，然后找到并递归构造左右子树即可。</p><p>这道题让用后序遍历和前序遍历结果还原二叉树，和前两道题有一个本质的区别：</p><p>通过前序中序，或者后序中序遍历结果，可以确定一棵原始二叉树，可以通过前序或者后序遍历结果找到根节点，然后根据中序遍历结果确定左右子树。</p><p>但是通过前序后序遍历结果，无法确定原始二叉树。可以确定根节点，但是无法确切的知道左右子树有哪些节点。题目也说了，如果有多种结果，可以返回任意一种。</p><p>具体算法是：</p><ol><li>首先把前序遍历结果的第一个元素或者后序遍历结果的最后一个元素确定为根节点的值。</li><li>然后把前序遍历结果的第二个元素作为左子树的根节点的值。</li><li>在后序遍历结果中寻找左子树根节点的值，从而确定了左子树的索引边界，进而确定右子树的索引边界，递归构造左右子树即可。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">postorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">constructFromPrePost</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> postorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>postorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> preorder<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">constructFromPrePost</span><span class="token punctuation">(</span>
				preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
			root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructFromPrePost</span><span class="token punctuation">(</span>
				preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function I(N,P){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),n(),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),n(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[f]),_:1}),n("  🔗 "),s("a",_,[g,a(p)]),n(),s("a",y,[w,a(p)])]),x,s("p",null,[n("做这道题之前，建议做一下 "),a(e,{to:"/problem/0105.html"},{default:t(()=>[n("105. 从前序与中序遍历序列构造二叉树")]),_:1}),n(" 和 "),a(e,{to:"/problem/0105.html"},{default:t(()=>[n("106. 从中序与后序遍历序列构造二叉树")]),_:1}),n(" 这两道题。")]),q])}const L=l(d,[["render",I],["__file","0889.html.vue"]]);export{L as default};
