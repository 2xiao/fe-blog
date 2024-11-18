import{_ as c,r as o,o as l,c as i,a as n,b as s,d as a,w as e,e as d}from"./app-5LzGvT4H.js";const u={},k=n("h1",{id:"_1008-前序遍历构造二叉搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1008-前序遍历构造二叉搜索树","aria-hidden":"true"},"#"),s(" 1008. 前序遍历构造二叉搜索树")],-1),h=n("code",null,"栈",-1),m=n("code",null,"树",-1),v=n("code",null,"二叉搜索树",-1),f=n("code",null,"数组",-1),_=n("code",null,"二叉树",-1),g=n("code",null,"单调栈",-1),b={href:"https://leetcode.cn/problems/construct-binary-search-tree-from-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers preorder, which represents the <strong>preorder traversal</strong> of a BST (i.e., <strong>binary search tree</strong> ), construct the tree and return <em>its root</em>.</p><p>It is <strong>guaranteed</strong> that there is always possible to find a binary search tree with the given requirements for the given test cases.</p><p>A <strong>binary search tree</strong> is a binary tree where for every node, any descendant of <code>Node.left</code> has a value <strong>strictly less than</strong> <code>Node.val</code>, and any descendant of <code>Node.right</code> has a value <strong>strictly greater than</strong> <code>Node.val</code>.</p><p>A <strong>preorder traversal</strong> of a binary tree displays the value of the node first, then traverses <code>Node.left</code>, then traverses <code>Node.right</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/03/06/1266.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: preorder = [8,5,1,7,10,12]</p><p>Output: [8,5,10,1,7,null,12]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: preorder = [1,3]</p><p>Output: [1,null,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 100</code></li><li><code>1 &lt;= preorder[i] &lt;= 1000</code></li><li>All the values of <code>preorder</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组，它表示 BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。</p><p>保证 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。</p><p>二叉搜索树 是一棵二叉树，其中每个节点， <code>Node.left</code> 的任何后代的值 严格小于 <code>Node.val</code> , <code>Node.right</code> 的任何后代的值 严格大于 <code>Node.val</code>。</p><p>二叉树的 前序遍历 首先显示节点的值，然后遍历<code>Node.left</code>，最后遍历<code>Node.right</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>构造二叉树，先找到根节点，再递归地构造左右子树。</p><p>本题中已知二叉搜索树的先序遍历，根节点就是数组的第一个元素。</p><p>只需要再找出左右子树分割的地方，就可以递归构造左右子树了。根据二叉搜索树的特点，左子树的所有值都小于根节点，所以只需遍历后续数组，找到第一个比根节点大的数值，即为右子树先序遍历的第一个元素。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">bstFromPreorder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>preorder<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		mid<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">bstFromPreorder</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">bstFromPreorder</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function q(B,E){const r=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟠 "),a(r,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/binary-search-tree.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/tag/monotonic-stack.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[y,a(p)]),s(),n("a",w,[N,a(p)])]),x])}const L=c(u,[["render",q],["__file","1008.html.vue"]]);export{L as default};
