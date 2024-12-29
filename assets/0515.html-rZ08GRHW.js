import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_515-在每个树行中找最大值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_515-在每个树行中找最大值","aria-hidden":"true"},"#"),s(" 515. 在每个树行中找最大值")],-1),m=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/find-largest-value-in-each-tree-row",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>an array of the largest value in each row</em> of the tree <strong>(0-indexed)</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,2,5,3,null,9]</p><p>Output: [1,3,9]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1,2,3]</p><p>Output: [1,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree will be in the range <code>[0, 104]</code>.</li><li><code>-231 &lt;= Node.val &lt;= 231 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一棵二叉树的根节点 <code>root</code> ，请找出该二叉树中每一层的最大值。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> root = [1,3,2,5,3,null,9]</p><p><strong>输出:</strong>[1,3,9]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> root = [1,2,3]</p><p><strong>输出:</strong>[1,3]</p></blockquote><p><strong>提示：</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,104]</code></li><li><code>-231 &lt;= Node.val &lt;= 231 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 BFS 来找到每行的最大值。</p><ol><li><p><strong>初始化</strong>：</p><ul><li>如果树为空，直接返回空数组 <code>res</code>。</li><li>使用一个队列 <code>queue</code> 来存储当前层的节点，从根节点 <code>root</code> 开始。</li></ul></li><li><p><strong>遍历每一层</strong>：</p><ul><li>使用 <code>queue.length</code> 确定当前层的节点数量 <code>len</code>。</li><li>初始化一个变量 <code>max</code> 为负无穷大，用于记录该层节点的最大值。</li></ul></li><li><p><strong>处理每个节点</strong>：</p><ul><li>从队列中逐个取出当前层的节点，并更新该层的最大值。</li><li>将该节点的左右子节点加入队列，以供下一层遍历。</li></ul></li><li><p><strong>记录结果</strong>：</p><ul><li>将该层的最大值 <code>max</code> 添加到结果数组 <code>res</code>。</li></ul></li><li><p><strong>继续下一层</strong>：</p><ul><li>循环执行以上步骤，直到队列为空，即所有层遍历完毕。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点访问一次，总共有 <code>n</code> 个节点。</li><li><strong>空间复杂度</strong>：<code>O(w)</code>，<code>w</code> 为树的最大宽， 最多同时存储一层的节点。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestValues</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 如果树为空，直接返回</span>

	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 初始化队列，包含根节点</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

		<span class="token comment">// 遍历本层所有节点</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新本层最大值</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将本层最大值加入结果数组</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function y(q,N){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",_,[w,a(p)])]),x])}const E=l(d,[["render",y],["__file","0515.html.vue"]]);export{E as default};
