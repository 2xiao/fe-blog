import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_50-向下的路径节点之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_50-向下的路径节点之和","aria-hidden":"true"},"#"),s(" 50. 向下的路径节点之和")],-1),m=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),b=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/6eUYwP",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p><p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 和等于 8 的路径有 3 条，如图所示。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,1000]</code></li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul>',10),_={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>深度优先搜索 (DFS)</strong> 和<strong>前缀和</strong>来解决这个问题。</p><ul><li>维护一个哈希表 <code>map</code>，存储从根节点到当前节点的所有路径和的出现次数。</li><li>在每次访问一个节点时，我们计算当前路径和 <code>sum</code>，并检查在此路径之前是否有路径和 <code>sum - targetSum</code>。如果存在，则说明有一条从之前某个节点到当前节点的路径的和为 <code>targetSum</code>。</li><li>递归处理左右节点，并在递归返回时回退 <code>map</code>，保证每次路径的计算仅在当前分支有效。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的个数。每个节点仅被访问一次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，用于存储递归栈和前缀和哈希表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 当路径和正好等于targetSum时，需要有一个虚拟前缀和为0的路径</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先遍历</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新当前路径和</span>
		sum <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

		<span class="token comment">// 查找有多少个之前的路径和等于sum - targetSum</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> targetSum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新路径和的计数</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 递归处理左右子树</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯时将当前节点的路径和从哈希表中删除</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function S(x,j){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",g,[h,a(l)])]),f,n("div",_,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0437.html"},{default:t(()=>[s("第 437 题")]),_:1}),s(" 相同。")])]),y])}const N=i(d,[["render",S],["__file","jz_offer_II_050.html.vue"]]);export{N as default};
