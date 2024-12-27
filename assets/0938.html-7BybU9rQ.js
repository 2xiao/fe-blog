import{_ as p,r as t,o as i,c as d,a as n,b as s,d as a,w as e,e as r}from"./app-fqckLmln.js";const u={},k=n("h1",{id:"_938-二叉搜索树的范围和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_938-二叉搜索树的范围和","aria-hidden":"true"},"#"),s(" 938. 二叉搜索树的范围和")],-1),h=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),m=n("code",null,"二叉搜索树",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/range-sum-of-bst",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/range-sum-of-bst",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> node of a binary search tree and two integers <code>low</code> and <code>high</code>, return <em>the sum of values of all nodes with a value in the <strong>inclusive</strong> range</em><code>[low, high]</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/bst1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [10,5,15,3,7,null,18], low = 7, high = 15</p><p>Output: 32</p><p>Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/bst2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10</p><p>Output: 23</p><p>Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 2 * 104]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li><code>1 &lt;= low &lt;= high &lt;= 10^5</code></li><li>All <code>Node.val</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定二叉搜索树的根结点 <code>root</code>，返回值位于范围 <em><code>[low, high]</code></em> 之间的所有结点的值的和。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/bst1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,5,15,3,7,null,18], low = 7, high = 15</p><p><strong>输出：</strong> 32</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/bst2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10</p><p><strong>输出：</strong> 23</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目在范围 <code>[1, 2 * 104]</code> 内</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li><code>1 &lt;= low &lt;= high &lt;= 10^5</code></li><li>所有 <code>Node.val</code> <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求我们计算二叉搜索树（BST）中所有值在 <code>low</code> 和 <code>high</code> 范围内的节点值的和。利用二叉搜索树的性质，可以优化搜索过程。</p><ol><li><p><strong>二叉搜索树的性质</strong>：</p><ul><li>对于任意节点 <code>root</code>，如果 <code>root.val</code> 小于 <code>low</code>，那么其左子树的所有节点值都小于 <code>root.val</code>，因此不需要再遍历左子树。</li><li>如果 <code>root.val</code> 大于 <code>high</code>，那么其右子树的所有节点值都大于 <code>root.val</code>，因此不需要再遍历右子树。</li><li>如果 <code>root.val</code> 在 <code>[low, high]</code> 范围内，则将其值加到总和中，并继续遍历左右子树。</li></ul></li><li><p><strong>递归策略</strong>：</p><ul><li>从根节点开始，递归遍历二叉搜索树。</li><li>在每个节点上判断其值是否在 <code>low</code> 和 <code>high</code> 范围内，如果是，则将其值加到 <code>sum</code> 中。</li><li>递归左子树时，只在当前节点的值大于等于 <code>low</code> 时进行。</li><li>递归右子树时，只在当前节点的值小于等于 <code>high</code> 时进行。</li></ul></li><li><p><strong>边界情况</strong>：</p><ul><li>如果树为空，返回 <code>0</code>。</li><li>如果所有节点的值都在范围外，则返回 <code>0</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的数量。最坏情况下，我们需要遍历整棵树。</li><li><strong>空间复杂度</strong>: <code>O(h)</code>，其中 <code>h</code> 是树的高度。递归调用栈的最大深度为树的高度，最坏情况下是 <code>O(n)</code>，即树为链状时。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">low</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">high</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rangeSumBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> low <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果当前节点值大于等于low，则可以继续遍历左子树</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果当前节点值小于等于high，则可以继续遍历右子树</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function y(N,q){const c=t("font"),o=t("RouterLink"),l=t("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/depth-first-search.html"},{default:e(()=>[g]),_:1}),s(),a(o,{to:"/tag/binary-search-tree.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(l)]),s(),n("a",_,[w,a(l)])]),x])}const j=p(u,[["render",y],["__file","0938.html.vue"]]);export{j as default};
