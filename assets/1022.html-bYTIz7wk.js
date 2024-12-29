import{_ as l,r as o,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_1022-从根到叶的二进制数之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1022-从根到叶的二进制数之和","aria-hidden":"true"},"#"),s(" 1022. 从根到叶的二进制数之和")],-1),m=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),b=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary tree where each node has a value <code>0</code> or <code>1</code>. Each root-to-leaf path represents a binary number starting with the most significant bit.</p><ul><li>For example, if the path is <code>0 -&gt; 1 -&gt; 1 -&gt; 0 -&gt; 1</code>, then this could represent <code>01101</code> in binary, which is <code>13</code>.</li></ul><p>For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return <em>the sum of these numbers</em>.</p><p>The test cases are generated so that the answer fits in a <strong>32-bits</strong> integer.</p><p><strong>Example 1:</strong></p><p>![](https://assets.leetcode.com/uploads/2019/04/04/sum-of-root-to-leaf-binary- numbers.png)</p><blockquote><p>Input: root = [1,0,1,0,1,0,1]</p><p>Output: 22</p><p>Explanation:(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [0]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>Node.val</code> is <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出一棵二叉树，其上每个结点的值都是 <code>0</code> 或 <code>1</code> 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。</p><ul><li>例如，如果路径为 <code>0 -&gt; 1 -&gt; 1 -&gt; 0 -&gt; 1</code>，那么它表示二进制数 <code>01101</code>，也就是 <code>13</code> 。</li></ul><p>对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。</p><p>返回这些数字之和。题目数据保证答案是一个 <strong>32 位</strong> 整数。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode.com/uploads/2019/04/04/sum-of-root-to-leaf-binary- numbers.png)</p><blockquote><p><strong>输入：</strong> root = [1,0,1,0,1,0,1]</p><p><strong>输出：</strong> 22</p><p><strong>解释：</strong>(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [0]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li>树中的节点数在 <code>[1, 1000]</code> 范围内</li><li><code>Node.val</code> 仅为 <code>0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以通过 <strong>深度优先搜索（DFS）</strong> 来实现这一目标。</p><ol><li><p><strong>深度优先搜索（DFS）</strong>：</p><ul><li>从根节点开始遍历，每次向下递归时，将父节点的值左移一位（相当于将二进制数向左移动一位）后加上当前节点的值，生成新的路径值。</li><li>如果当前节点是叶子节点（没有左子节点和右子节点），则将当前路径值累加到结果中。</li></ul></li><li><p><strong>递归传递路径值</strong>：</p><ul><li>每次递归时，将当前路径值作为参数传递到下一层，表示从根节点到当前节点的路径值。</li><li>当遍历到叶子节点时，直接将该路径值加到结果变量中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完整棵树后，返回累加的路径值总和。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点总数，每个节点都被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，递归调用栈的深度为树的高度， <ul><li>最坏情况下（树为链状），<code>h = n</code>；</li><li>最好情况下（树为完全平衡树），<code>h = log(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sumRootToLeaf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储路径值的总和</span>

	<span class="token comment">// 定义递归函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 如果节点为空，直接返回</span>

		<span class="token comment">// 更新当前路径值</span>
		<span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token punctuation">(</span>parent <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

		<span class="token comment">// 如果当前节点是叶子节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> cur<span class="token punctuation">;</span> <span class="token comment">// 将路径值累加到总和中</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 递归遍历左子树和右子树</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 从根节点开始 DFS，初始路径值为 0</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// 返回路径值的总和</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function w(x,q){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[g,a(p)]),s(),n("a",f,[_,a(p)])]),y])}const N=l(d,[["render",w],["__file","1022.html.vue"]]);export{N as default};
