import{_ as c,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-BBnmDgJV.js";const d={},k=n("h1",{id:"_662-二叉树最大宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_662-二叉树最大宽度","aria-hidden":"true"},"#"),s(" 662. 二叉树最大宽度")],-1),m=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),g=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/maximum-width-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximum-width-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the<strong>maximum width</strong> of the given tree</em>.</p><p>The <strong>maximum width</strong> of a tree is the maximum <strong>width</strong> among all levels.</p><p>The <strong>width</strong> of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end- nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.</p><p>It is <strong>guaranteed</strong> that the answer will in the range of a <strong>32-bit</strong> signed integer.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/03/width1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,2,5,3,null,9]</p><p>Output: 4</p><p>Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).</p></blockquote><p><strong>Example 2:</strong></p><p>![](https://assets.leetcode.com/uploads/2022/03/14/maximum-width-of-binary- tree-v3.jpg)</p><blockquote><p>Input: root = [1,3,2,5,null,null,9,6,null,7]</p><p>Output: 7</p><p>Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/03/width3-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,2,5]</p><p>Output: 2</p><p>Explanation: The maximum width exists in the second level with length 2 (3,2).</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 3000]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉树的根节点 <code>root</code> ，返回树的 <strong>最大宽度</strong> 。</p><p>树的 <strong>最大宽度</strong> 是所有层中最大的 <strong>宽度</strong> 。</p><p>每一层的 <strong>宽度</strong> 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 <code>null</code> 节点，这些 <code>null</code> 节点也计入长度。</p><p>题目数据保证答案将会在 <strong>32 位</strong> 带符号整数范围内。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/03/width1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,3,2,5,3,null,9]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 最大宽度出现在树的第 3 层，宽度为 4 (5,3,null,9) 。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode.com/uploads/2022/03/14/maximum-width-of-binary- tree-v3.jpg)</p><blockquote><p><strong>输入：</strong> root = [1,3,2,5,null,null,9,6,null,7]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 最大宽度出现在树的第 4 层，宽度为 7 (6,null,null,null,null,null,7) 。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/03/width3-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,3,2,5]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 最大宽度出现在树的第 2 层，宽度为 2 (3,2) 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目范围是 <code>[1, 3000]</code></li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以通过宽度优先搜索（BFS）来解决，借助队列，可以在遍历过程中记录每个节点的<strong>位置索引</strong>，并通过计算该层最左和最右节点的索引差异来确定最大宽度。</p><p>为了方便计算节点之间的距离，给每个节点分配一个<strong>虚拟索引</strong>。假设根节点的索引为 <code>0</code>，对于某个节点<code>i</code>，其左孩子的索引为<code>2*i + 1</code>，右孩子的索引为<code>2*i + 2</code>。这样就可以在遍历的过程中记录每一层的最左和最右索引，来计算该层的宽度：<code>宽度 = 最右索引 - 最左索引 + 1</code>。</p><ol><li><strong>初始化</strong>：使用队列来进行层序遍历，队列中的每个元素是一个二元组，包含节点和节点对应的索引位置。</li><li><strong>遍历树的每一层</strong>：对于每一层，记录这一层的最左和最右节点的索引。</li><li><strong>更新最大宽度</strong>：通过计算每层的宽度来更新最大宽度。</li><li><strong>返回最大宽度</strong>：遍历完成后，返回记录的最大宽度。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树中的节点数量。我们需要遍历每一个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，队列中会包含最多一整层的节点数量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">widthOfBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		first<span class="token punctuation">,</span>
		last<span class="token punctuation">;</span>
	<span class="token comment">// BFS</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token comment">// 这一层的最左节点的索引</span>
		<span class="token keyword">const</span> startIndex <span class="token operator">=</span> queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> index<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 减去这一层的最左节点的索引，防止溢出</span>
			<span class="token keyword">const</span> curIndex <span class="token operator">=</span> index <span class="token operator">-</span> startIndex<span class="token punctuation">;</span>

			<span class="token comment">// 记录这一层的最左和最右节点的索引</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> first <span class="token operator">=</span> curIndex<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> last <span class="token operator">=</span> curIndex<span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> curIndex <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> curIndex <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> last <span class="token operator">-</span> first <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function y(q,I){const l=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",w,[x,a(p)])]),_])}const j=c(d,[["render",y],["__file","0662.html.vue"]]);export{j as default};
