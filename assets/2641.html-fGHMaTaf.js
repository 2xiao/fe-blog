import{_ as c,r as l,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_2641-二叉树的堂兄弟节点-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2641-二叉树的堂兄弟节点-ii","aria-hidden":"true"},"#"),s(" 2641. 二叉树的堂兄弟节点 II")],-1),m=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),g=n("code",null,"广度优先搜索",-1),b=n("code",null,"哈希表",-1),f=n("code",null,"二叉树",-1),_={href:"https://leetcode.cn/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),N=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, replace the value of each node in the tree with the <strong>sum of all its cousins &#39; values</strong>.</p><p>Two nodes of a binary tree are <strong>cousins</strong> if they have the same depth with different parents.</p><p>Return <em>the</em><code>root</code> <em>of the modified tree</em>.</p><p><strong>Note</strong> that the depth of a node is the number of edges in the path from the root node to it.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/11/example11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,4,9,1,10,null,7]</p><p>Output: [0,0,0,7,7,null,11]</p><p>Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.</p><ul><li>Node with value 5 does not have any cousins so its sum is 0.</li><li>Node with value 4 does not have any cousins so its sum is 0.</li><li>Node with value 9 does not have any cousins so its sum is 0.</li><li>Node with value 1 has a cousin with value 7 so its sum is 7.</li><li>Node with value 10 has a cousin with value 7 so its sum is 7.</li><li>Node with value 7 has cousins with values 1 and 10 so its sum is 11.</li></ul></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/11/diagram33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,1,2]</p><p>Output: [0,0,0]</p><p>Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.</p><ul><li>Node with value 3 does not have any cousins so its sum is 0.</li><li>Node with value 1 does not have any cousins so its sum is 0.</li><li>Node with value 2 does not have any cousins so its sum is 0.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^5]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉树的根 <code>root</code> ，请你将每个节点的值替换成该节点的所有 **堂兄弟节点值的和 **。</p><p>如果两个节点在树中有相同的深度且它们的父节点不同，那么它们互为 <strong>堂兄弟</strong> 。</p><p>请你返回修改值之后，树的根 <code>root</code> 。</p><p><strong>注意</strong> ，一个节点的深度指的是从树根节点到这个节点经过的边数。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/11/example11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,4,9,1,10,null,7]</p><p><strong>输出：</strong>[0,0,0,7,7,null,11]</p><p><strong>解释：</strong> 上图展示了初始的二叉树和修改每个节点的值之后的二叉树。</p><ul><li>值为 5 的节点没有堂兄弟，所以值修改为 0 。</li><li>值为 4 的节点没有堂兄弟，所以值修改为 0 。</li><li>值为 9 的节点没有堂兄弟，所以值修改为 0 。</li><li>值为 1 的节点有一个堂兄弟，值为 7 ，所以值修改为 7 。</li><li>值为 10 的节点有一个堂兄弟，值为 7 ，所以值修改为 7 。</li><li>值为 7 的节点有两个堂兄弟，值分别为 1 和 10 ，所以值修改为 11 。</li></ul></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/11/diagram33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [3,1,2]</p><p><strong>输出：</strong>[0,0,0]</p><p><strong>解释：</strong> 上图展示了初始的二叉树和修改每个节点的值之后的二叉树。</p><ul><li>值为 3 的节点没有堂兄弟，所以值修改为 0 。</li><li>值为 1 的节点没有堂兄弟，所以值修改为 0 。</li><li>值为 2 的节点没有堂兄弟，所以值修改为 0 。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目的范围是 <code>[1, 10^5]</code> 。</li><li><code>1 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在你的代码中，，其中：</p><ul><li><code>node</code>：表示当前遍历到的树节点，它是一个 <code>TreeNode</code> 对象，包含节点的值以及指向其左子节点和右子节点的指针。</li><li><code>siblingSum</code>：表示当前节点的兄弟节点的值之和。这个值是根据当前节点的父节点计算得出的，即父节点的左右子节点的值之和（不包括当前节点自身）。</li></ul><h3 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h3><ol><li><strong>初始化</strong>：</li></ol><ul><li>首先，检查根节点是否存在。如果不存在，则直接返回 <code>null</code>。</li><li>创建一个队列，每个节点以一个数组的形式存储，具体结构为 <code>[node, siblingSum]</code>，其中： <ul><li><code>node</code>：表示当前遍历到的树节点，它是一个 <code>TreeNode</code> 对象，包含节点的值以及指向其左子节点和右子节点的指针。</li><li><code>siblingSum</code>：表示和当前节点的父节点相同的兄弟节点的值之和（包括当前节点自身），这个值是根据当前节点的父节点计算得出的，即父节点的左右子节点的值之和。</li></ul></li><li>在 BFS 开始时，将根节点及其值 <code>root.val</code> 存入队列，初始化队列为 <code>[[root, root.val]]</code>。</li></ul><ol start="2"><li><p><strong>广度优先搜索 (BFS)</strong>：</p><ul><li>进行 BFS 遍历，每次从队列中取出当前层的所有节点，存储在 <code>currentLevel</code> 中，然后按层存入 <code>levels</code> 数组。</li></ul></li><li><p><strong>更新节点值</strong>：</p><ul><li>遍历 <code>levels</code> 数组，计算当前层所有节点值的总和，存储在 <code>totalSum</code> 变量中，以便后续更新每个节点的值。</li><li>遍历当前层的所有节点，将每个节点的值更新为 <code>totalSum</code> 减去该节点的兄弟节点值和，这样确保了每个节点的新值是其同层堂兄弟节点的和。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>完成所有层的遍历和更新后，返回更新后的根节点 <code>root</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中的节点数量吗，对树中每个节点只进行一次访问。</li><li><strong>空间复杂度</strong>：<code>O(n)</code><ul><li>BFS 使用队列存储当前层的节点，而在最坏情况下（例如完全二叉树），队列可能存储所有节点。因此空间复杂度为 <code>O(n)</code>。</li><li>另外，<code>levels</code> 数组也存储每一层的节点引用和兄弟节点值和，在最坏情况下也会占用 <code>O(n)</code> 的空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">replaceValueInTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token comment">// 初始化队列</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>root<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		levels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> currentLevel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 从队列中取出当前层的所有节点，存入 currentLevel 中</span>
			<span class="token keyword">const</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> siblingSum<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			currentLevel<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>node<span class="token punctuation">,</span> siblingSum<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 计算相同父节点的兄弟节点的值之和</span>
			<span class="token keyword">const</span> childSum <span class="token operator">=</span>
				<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">?</span> node<span class="token punctuation">.</span>left<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">?</span> node<span class="token punctuation">.</span>right<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> childSum<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> childSum<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 按层存入 levels 数组</span>
		levels<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentLevel<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levels<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> currentLevel <span class="token operator">=</span> levels<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 计算当前层所有节点值的总和</span>
		<span class="token keyword">const</span> totalSum <span class="token operator">=</span> currentLevel<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> siblingSum<span class="token punctuation">]</span> <span class="token keyword">of</span> currentLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 新的值为 totalSum 减去该节点的同父兄弟节点值之和</span>
			node<span class="token punctuation">.</span>val <span class="token operator">=</span> totalSum <span class="token operator">-</span> siblingSum<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),S=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"993",-1),L=n("td",{style:{"text-align":"left"}},"二叉树的堂兄弟节点",-1),T={style:{"text-align":"center"}},B={style:{"text-align":"left"}},E=n("code",null,"树",-1),I=n("code",null,"深度优先搜索",-1),O=n("code",null,"广度优先搜索",-1),V=n("code",null,"1+",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1161",-1),G=n("td",{style:{"text-align":"left"}},"最大层内元素和",-1),M={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=n("code",null,"树",-1),H=n("code",null,"深度优先搜索",-1),J=n("code",null,"广度优先搜索",-1),K=n("code",null,"1+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",_,[y,t(o)]),s(),n("a",x,[w,t(o)])]),N,r(" prettier-ignore "),n("table",null,[S,n("tbody",null,[n("tr",null,[q,L,n("td",T,[t(e,{to:"/problem/0993.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",B,[t(e,{to:"/tag/tree.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[O]),_:1}),s(),V]),C,n("td",F,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[R,G,n("td",M,[t(e,{to:"/problem/1161.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",A,[t(e,{to:"/tag/tree.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[J]),_:1}),s(),K]),P,n("td",Q,[n("a",U,[s("🀄️"),t(o)]),s(),n("a",W,[s("🔗"),t(o)])])])])])])}const nn=c(k,[["render",X],["__file","2641.html.vue"]]);export{nn as default};
