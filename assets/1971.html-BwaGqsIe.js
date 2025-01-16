import{_ as l,r as c,o as i,c as d,a as n,b as s,d as e,w as a,f as r,e as u}from"./app-KDJRKGep.js";const k={},g=n("h1",{id:"_1971-寻找图中是否存在路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1971-寻找图中是否存在路径","aria-hidden":"true"},"#"),s(" 1971. 寻找图中是否存在路径")],-1),h=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),v=n("code",null,"并查集",-1),f=n("code",null,"图",-1),b={href:"https://leetcode.cn/problems/find-if-path-exists-in-graph",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-if-path-exists-in-graph",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a <strong>bi-directional</strong> graph with <code>n</code> vertices, where each vertex is labeled from <code>0</code> to <code>n - 1</code> (<strong>inclusive</strong>). The edges in the graph are represented as a 2D integer array <code>edges</code>, where each <code>edges[i] = [ui, vi]</code> denotes a bi-directional edge between vertex <code>ui</code> and vertex <code>vi</code>. Every vertex pair is connected by <strong>at most one</strong> edge, and no vertex has an edge to itself.</p><p>You want to determine if there is a <strong>valid path</strong> that exists from vertex <code>source</code> to vertex <code>destination</code>.</p><p>Given <code>edges</code> and the integers <code>n</code>, <code>source</code>, and <code>destination</code>, return <code>true</code> _if there is a<strong>valid path</strong> from _<code>source</code> <em>to</em><code>destination</code> <em>, or</em><code>false</code><em>otherwise</em> <em>.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/14/validpath-ex1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2</p><p>Output: true</p><p>Explanation: There are two paths from vertex 0 to vertex 2:</p><ul><li>0 -&gt; 1 -&gt; 2</li><li>0 -&gt; 2</li></ul></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/14/validpath-ex2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5</p><p>Output: false</p><p>Explanation: There is no path from vertex 0 to vertex 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2 * 10^5</code></li><li><code>0 &lt;= edges.length &lt;= 2 * 10^5</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= ui, vi &lt;= n - 1</code></li><li><code>ui != vi</code></li><li><code>0 &lt;= source, destination &lt;= n - 1</code></li><li>There are no duplicate edges.</li><li>There are no self edges.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一个具有 <code>n</code> 个顶点的 <strong>双向</strong> 图，其中每个顶点标记从 <code>0</code> 到 <code>n - 1</code>（包含 <code>0</code> 和 <code>n - 1</code>）。图中的边用一个二维整数数组 <code>edges</code> 表示，其中 <code>edges[i] = [ui, vi]</code> 表示顶点 <code>ui</code> 和顶点 <code>vi</code> 之间的双向边。 每个顶点对由 <strong>最多一条</strong> 边连接，并且没有顶点存在与自身相连的边。</p><p>请你确定是否存在从顶点 <code>source</code> 开始，到顶点 <code>destination</code> 结束的 <strong>有效路径</strong> 。</p><p>给你数组 <code>edges</code> 和整数 <code>n</code>、<code>source</code> 和 <code>destination</code>，如果从 <code>source</code> 到 <code>destination</code> 存在 <strong>有效路径</strong> ，则返回 <code>true</code>，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/14/validpath-ex1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 存在由顶点 0 到顶点 2 的路径:</p><ul><li>0 → 1 → 2</li><li>0 → 2</li></ul></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/08/14/validpath-ex2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 不存在由顶点 0 到顶点 5 的路径.</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 2 * 10^5</code></li><li><code>0 &lt;= edges.length &lt;= 2 * 10^5</code></li><li><code>edges[i].length == 2</code></li><li><code>0 &lt;= ui, vi &lt;= n - 1</code></li><li><code>ui != vi</code></li><li><code>0 &lt;= source, destination &lt;= n - 1</code></li><li>不存在重复边</li><li>不存在指向顶点自身的边</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>特殊情况处理</strong>：</p><ul><li>如果起点 <code>source</code> 和终点 <code>destination</code> 相同，则无需任何计算，直接返回 <code>true</code>。</li></ul></li><li><p><strong>构建图的邻接表</strong>：</p><ul><li>使用邻接表表示图，方便存储节点之间的连接关系。</li><li>遍历 <code>edges</code> 数组，将每条边的两个节点相互添加到邻接表中，以便于查询相邻节点。</li></ul></li><li><p><strong>初始化 BFS</strong>：</p><ul><li>使用队列存储当前访问的节点，从起点 <code>source</code> 开始。</li><li>使用一个 <code>visited</code> 数组标记访问过的节点，避免重复遍历，降低时间复杂度。</li></ul></li><li><p><strong>执行 BFS</strong>：</p><ul><li>每次从队列中取出一个节点 <code>node</code>，检查它的所有相邻节点： <ul><li>如果相邻节点为 <code>destination</code>，直接返回 <code>true</code>。</li><li>如果相邻节点未访问过，标记为已访问，并将其加入队列继续遍历。</li></ul></li><li>如果队列为空且未找到 <code>destination</code>，则返回 <code>false</code>。</li></ul></li><li><p><strong>结束条件</strong>：</p><ul><li>BFS 的终止条件为队列为空或找到目标节点 <code>destination</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(V + E)</code></p><ul><li>构建图的时间复杂度为 <code>O(E)</code>，其中 <code>E</code> 是边的数量。</li><li>BFS 遍历所有节点和边的时间复杂度为 <code>O(V + E)</code>，其中 <code>V</code> 是节点数量。</li><li>总体时间复杂度为 <code>O(V + E)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(V + E)</code></p><ul><li>图的存储空间为 <code>O(V + E)</code>。</li><li>访问数组和队列的空间为 <code>O(V)</code>。</li><li>总体空间复杂度为 <code>O(V + E)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">source</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">destination</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validPath</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> edges<span class="token punctuation">,</span> source<span class="token punctuation">,</span> destination</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>source <span class="token operator">===</span> destination<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建图</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> edges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
		graph<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// BFS 搜索</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>source<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	visited<span class="token punctuation">[</span>source<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> neighbor <span class="token keyword">of</span> graph<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>neighbor <span class="token operator">===</span> destination<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>neighbor<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				visited<span class="token punctuation">[</span>neighbor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"2077",-1),q=n("td",{style:{"text-align":"left"}},"殊途同归 🔒",-1),O=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},T=n("code",null,"图",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/paths-in-maze-that-lead-to-same-room",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},"2097",-1),N=n("td",{style:{"text-align":"left"}},"合法重新排列数对",-1),I={style:{"text-align":"center"}},j={style:{"text-align":"left"}},A=n("code",null,"深度优先搜索",-1),R=n("code",null,"图",-1),D=n("code",null,"欧拉回路",-1),G=n("td",{style:{"text-align":"center"}},"🔴",-1),P={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/valid-arrangement-of-pairs",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/valid-arrangement-of-pairs",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[g,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/depth-first-search.html"},{default:a(()=>[h]),_:1}),s(),e(t,{to:"/tag/breadth-first-search.html"},{default:a(()=>[m]),_:1}),s(),e(t,{to:"/tag/union-find.html"},{default:a(()=>[v]),_:1}),s(),e(t,{to:"/tag/graph.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",b,[_,e(o)]),s(),n("a",x,[y,e(o)])]),w,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[V,q,O,n("td",B,[e(t,{to:"/tag/graph.html"},{default:a(()=>[T]),_:1})]),z,n("td",S,[n("a",C,[s("🀄️"),e(o)]),s(),n("a",F,[s("🔗"),e(o)])])]),n("tr",null,[L,N,n("td",I,[e(t,{to:"/problem/2097.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",j,[e(t,{to:"/tag/depth-first-search.html"},{default:a(()=>[A]),_:1}),s(),e(t,{to:"/tag/graph.html"},{default:a(()=>[R]),_:1}),s(),e(t,{to:"/tag/eulerian-circuit.html"},{default:a(()=>[D]),_:1})]),G,n("td",P,[n("a",Y,[s("🀄️"),e(o)]),s(),n("a",H,[s("🔗"),e(o)])])])])])])}const U=l(k,[["render",J],["__file","1971.html.vue"]]);export{U as default};
