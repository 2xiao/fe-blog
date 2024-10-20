import{_ as l,r as o,o as r,c as i,a as n,d as s,b as a,w as t,e as u}from"./app-Fucr7yuT.js";const d={},k={id:"_99-恢复二叉搜索树",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_99-恢复二叉搜索树","aria-hidden":"true"},"#",-1),h={href:"https://leetcode.com/problems/recover-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),b=n("code",null,"二叉搜索树",-1),g=n("code",null,"二叉树",-1),_={href:"https://leetcode.com/problems/recover-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary search tree (BST), where the values of <strong>exactly</strong> two nodes of the tree were swapped by mistake. <em>Recover the tree without changing its structure</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,null,null,2]</p><p>Output: [3,1,null,null,2]</p><p>Explanation: 3 cannot be a left child of 1 because 3 &gt; 1. Swapping 1 and 3 makes the BST valid.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,1,4,null,null,2]</p><p>Output: [2,1,4,null,null,3]</p><p>Explanation: 2 cannot be in the right subtree of 3 because 2 &lt; 3. Swapping 2 and 3 makes the BST valid.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 1000]</code>.</li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> A solution using <code>O(n)</code> space is pretty straight-forward. Could you devise a constant <code>O(1)</code> space solution?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉搜索树的根节点 <code>root</code> ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>根据 BST 的性质，BST 的中序遍历是升序的，我们可以通过中序遍历来找到这两个错误节点，并交换它们的值，从而恢复 BST 的正确顺序。</p><ol><li>进行 BST 的中序遍历，并记录先前访问的节点 <code>prev</code>；</li><li>在遍历过程中，如果发现当前节点的值小于先前节点的值，说明找到了一个错误节点；</li><li>记录这两个错误节点，并继续遍历；</li><li>遍历结束后，交换这两个错误节点的值，即完成修复操作；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify root in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">recoverTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				first <span class="token operator">=</span> prev<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			second <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">traverse</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> temp <span class="token operator">=</span> first<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
	first<span class="token punctuation">.</span>val <span class="token operator">=</span> second<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
	second<span class="token punctuation">.</span>val <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function x(T,B){const p=o("ExternalLinkIcon"),c=o("font"),e=o("RouterLink");return r(),i("div",null,[n("h1",k,[v,s(),n("a",h,[s("99. 恢复二叉搜索树"),a(p)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/binary-search-tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[y,a(p)])]),w])}const E=l(d,[["render",x],["__file","0099.html.vue"]]);export{E as default};
