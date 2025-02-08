import{_ as c,r as o,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-totCBmv-.js";const d={},k=n("h1",{id:"_897-递增顺序搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_897-递增顺序搜索树","aria-hidden":"true"},"#"),s(" 897. 递增顺序搜索树")],-1),h=n("code",null,"栈",-1),m=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉搜索树",-1),f=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/increasing-order-search-tree",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/increasing-order-search-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary search tree, rearrange the tree in <strong>in-order</strong> so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]</p><p>Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,1,7]</p><p>Output: [1,null,5,null,7]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the given tree will be in the range <code>[1, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉搜索树的 <code>root</code> ，请你 <strong>按中序遍历</strong> 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,3,6,2,4,null,8,1,null,null,null,7,9]</p><p><strong>输出：</strong>[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,1,7]</p><p><strong>输出：</strong>[1,null,5,null,7]</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数的取值范围是 <code>[1, 100]</code></li><li><code>0 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>二叉搜索树的中序遍历得到的结果是一个递增序列。</p><ol><li><p>使用一个 <strong>哑节点</strong>（dummy node）作为新树的起点。</p></li><li><p>用一个指针 <code>curr</code> 记录当前新树的构造位置。</p></li><li><p>中序遍历的每一步：</p><ul><li>将当前节点的左子节点清空（因为新树没有左子节点）。</li><li>将当前节点连接到新树的右子节点。</li><li>更新 <code>curr</code> 为当前节点。</li></ul></li><li><p>返回结果：哑节点的右子节点即为新树的根节点。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的数量，中序遍历访问每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，递归栈的深度取决于树的高度，最坏情况下为 <code>O(h)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">increasingBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个哑节点作为新树的起点</span>
	<span class="token keyword">let</span> curr <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">inorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token function">inorder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归左子树</span>
		node<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 清理左子节点</span>
		curr<span class="token punctuation">.</span>right <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 将当前节点接到新树的右子树</span>
		curr <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 更新当前指针</span>
		<span class="token function">inorder</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归右子树</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> dummy<span class="token punctuation">.</span>right<span class="token punctuation">;</span> <span class="token comment">// 返回哑节点的右子节点，即新树的根</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function N(q,j){const p=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/binary-search-tree.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),n("a",b,[_,a(l)]),s(),n("a",y,[x,a(l)])]),w])}const T=c(d,[["render",N],["__file","0897.html.vue"]]);export{T as default};
