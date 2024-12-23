import{_ as p,r as l,o as i,c as d,a as n,b as s,d as e,w as a,f as u,e as r}from"./app-Kkp_66uf.js";const k={},m=n("h1",{id:"_2872-可以被-k-整除连通块的最大数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2872-可以被-k-整除连通块的最大数目","aria-hidden":"true"},"#"),s(" 2872. 可以被 K 整除连通块的最大数目")],-1),g=n("code",null,"树",-1),h=n("code",null,"深度优先搜索",-1),v={href:"https://leetcode.cn/problems/maximum-number-of-k-divisible-components",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-number-of-k-divisible-components",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is an undirected tree with <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given the integer <code>n</code> and a 2D integer array <code>edges</code> of length <code>n - 1</code>, where <code>edges[i] = [ai, bi]</code> indicates that there is an edge between nodes <code>ai</code> and <code>bi</code> in the tree.</p><p>You are also given a <strong>0-indexed</strong> integer array <code>values</code> of length <code>n</code>, where <code>values[i]</code> is the <strong>value</strong> associated with the <code>ith</code> node, and an integer <code>k</code>.</p><p>A <strong>valid split</strong> of the tree is obtained by removing any set of edges, possibly empty, from the tree such that the resulting components all have values that are divisible by <code>k</code>, where the <strong>value of a connected component</strong> is the sum of the values of its nodes.</p><p>Return <em>the <strong>maximum number of components</strong> in any valid split</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/08/07/example12-cropped2svg.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6</p><p>Output: 2</p><p>Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:</p><ul><li>The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.</li><li>The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.</li></ul><p>It can be shown that no other valid split has more than 2 connected components.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/08/07/example21svg-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3</p><p>Output: 3</p><p>Explanation: We remove the edge connecting node 0 with 2, and the edge connecting node 0 with 1. The resulting split is valid because:</p><ul><li>The value of the component containing node 0 is values[0] = 3.</li><li>The value of the component containing nodes 2, 5, and 6 is values[2] + values[5] + values[6] = 9.</li><li>The value of the component containing nodes 1, 3, and 4 is values[1] + values[3] + values[4] = 6.</li></ul><p>It can be shown that no other valid split has more than 3 connected components.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 3 * 10^4</code></li><li><code>edges.length == n - 1</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; n</code></li><li><code>values.length == n</code></li><li><code>0 &lt;= values[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li><li>Sum of <code>values</code> is divisible by <code>k</code>.</li><li>The input is generated such that <code>edges</code> represents a valid tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 <code>n</code> 个节点的无向树，节点编号为 <code>0</code> 到 <code>n - 1</code> 。给你整数 <code>n</code> 和一个长度为 <code>n - 1</code> 的二维整数数组 <code>edges</code> ，其中 <code>edges[i] = [ai, bi]</code> 表示树中节点 <code>ai</code> 和 <code>bi</code> 有一条边。</p><p>同时给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数数组 <code>values</code> ，其中 <code>values[i]</code> 是第 <code>i</code> 个节点的 <strong>值</strong> 。再给你一个整数 <code>k</code> 。</p><p>你可以从树中删除一些边，也可以一条边也不删，得到若干连通块。一个 <strong>连通块的值</strong> 定义为连通块中所有节点值之和。如果所有连通块的值都可以被 <code>k</code> 整除，那么我们说这是一个 <strong>合法分割</strong> 。</p><p>请你返回所有合法分割中，<strong>连通块数目的最大值</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/08/07/example12-cropped2svg.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 5, edges = [[0,2],[1,2],[1,3],[2,4]], values = [1,8,1,4,4], k = 6</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 我们删除节点 1 和 2 之间的边。这是一个合法分割，因为：</p><ul><li>节点 1 和 3 所在连通块的值为 values[1] + values[3] = 12 。</li><li>节点 0 ，2 和 4 所在连通块的值为 values[0] + values[2] + values[4] = 6 。</li></ul><p>最多可以得到 2 个连通块的合法分割。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/08/07/example21svg-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 7, edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], values = [3,0,6,1,5,2,1], k = 3</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 我们删除节点 0 和 2 ，以及节点 0 和 1 之间的边。这是一个合法分割，因为：</p><ul><li>节点 0 的连通块的值为 values[0] = 3 。</li><li>节点 2 ，5 和 6 所在连通块的值为 values[2] + values[5] + values[6] = 9 。</li><li>节点 1 ，3 和 4 的连通块的值为 values[1] + values[3] + values[4] = 6 。</li></ul><p>最多可以得到 3 个连通块的合法分割。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 3 * 10^4</code></li><li><code>edges.length == n - 1</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; n</code></li><li><code>values.length == n</code></li><li><code>0 &lt;= values[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li><li><code>values</code> 之和可以被 <code>k</code> 整除。</li><li>输入保证 <code>edges</code> 是一棵无向树。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题目可以通过树的深度优先搜索（DFS）来解决。</p><ol><li><p><strong>构建树的邻接表</strong>：</p><ul><li>树是一个无向连通图，且没有环。</li><li>根据输入的 <code>edges</code> 构造树的邻接表表示，以便我们可以通过 DFS 遍历整棵树。</li></ul></li><li><p><strong>DFS 遍历树</strong>：</p><ul><li>我们可以任选一个节点（通常是节点 <code>0</code>）作为树的根，然后用 DFS 遍历整个树。</li><li>递归计算子树的节点值之和。</li><li>如果一个子树的节点和 <code>sum</code> 可以被 <code>k</code> 整除，那么从该子树的根节点断开后，该子树本身就构成一个合法的连通块，增加连通块数量，同时从当前节点断开与其父节点的连接。</li></ul></li><li><p><strong>计算最大连通块数量</strong>：</p><ul><li>在 DFS 的过程中记录分割的次数，即合法连通块的数量。</li><li>返回结果为最大连通块数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li>构建邻接表的时间复杂度为 <code>O(n)</code>。</li><li>DFS 遍历树的时间复杂度为 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li>邻接表占用 <code>O(n)</code> 空间。</li><li>递归调用栈的深度为 <code>O(n)</code>（最坏情况下为链状树）。</li><li>总空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">values</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxKDivisibleComponents</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> edges<span class="token punctuation">,</span> values<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 构建邻接表</span>
	<span class="token keyword">const</span> tree <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> n <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		tree<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		tree<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先搜索</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> values<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前子树的节点值之和</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> neighbor <span class="token keyword">of</span> tree<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>neighbor <span class="token operator">===</span> parent<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 跳过父节点</span>
			sum <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归计算子树的和</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果当前子树和可以被 k 整除，则形成一个连通块</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">%</span> k <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前子树可以分割掉，返回 0</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// 返回子树的和</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 从节点 0 开始 DFS</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2440",-1),T=n("td",{style:{"text-align":"left"}},"创建价值相同的连通块",-1),D=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},q=n("code",null,"树",-1),O=n("code",null,"深度优先搜索",-1),j=n("code",null,"数组",-1),E=n("code",null,"2+",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/create-components-with-same-value",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/create-components-with-same-value",target:"_blank",rel:"noopener noreferrer"};function N(V,z){const c=l("font"),t=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[s("🔴 "),e(c,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),e(t,{to:"/tag/tree.html"},{default:a(()=>[g]),_:1}),s(),e(t,{to:"/tag/depth-first-search.html"},{default:a(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,e(o)]),s(),n("a",f,[_,e(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,T,D,n("td",S,[e(t,{to:"/tag/tree.html"},{default:a(()=>[q]),_:1}),s(),e(t,{to:"/tag/depth-first-search.html"},{default:a(()=>[O]),_:1}),s(),e(t,{to:"/tag/array.html"},{default:a(()=>[j]),_:1}),s(),E]),F,n("td",C,[n("a",I,[s("🀄️"),e(o)]),s(),n("a",L,[s("🔗"),e(o)])])])])])])}const R=p(k,[["render",N],["__file","2872.html.vue"]]);export{R as default};
