import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,e}from"./app-Kkp_66uf.js";const k={},d=n("h1",{id:"_111-计算除法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_111-计算除法","aria-hidden":"true"},"#"),s(" 111. 计算除法")],-1),v=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),b=n("code",null,"并查集",-1),q=n("code",null,"图",-1),h=n("code",null,"数组",-1),g=n("code",null,"最短路",-1),f={href:"https://leetcode.cn/problems/vlzXQL",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个变量对数组 <code>equations</code> 和一个实数值数组 <code>values</code> 作为已知条件，其中 <code>equations[i] = [Ai, Bi]</code> 和 <code>values[i]</code> 共同表示等式 <code>Ai / Bi = values[i]</code> 。每个 <code>Ai</code> 或 <code>Bi</code> 是一个表示单个变量的字符串。</p><p>另有一些以数组 <code>queries</code> 表示的问题，其中 <code>queries[j] = [Cj, Dj]</code> 表示第 <code>j</code> 个问题，请你根据已知条件找出 <code>Cj / Dj = ?</code> 的结果作为答案。</p><p>返回 <strong>所有问题的答案</strong> 。如果存在某个无法确定的答案，则用 <code>-1.0</code> 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 <code>-1.0</code> 替代这个答案。</p><p><strong>注意：</strong> 输入总是有效的。可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]</p><p><strong>输出：</strong>[6.00000,0.50000,-1.00000,1.00000,-1.00000]</p><p><strong>解释：</strong></p><p>条件： <em>a / b = 2.0</em> , <em>b / c = 3.0</em></p><p>问题： <em>a / c = ?</em> , <em>b / a = ?</em> , <em>a / e = ?</em> , <em>a / a = ?</em> , <em>x / x = ?</em></p><p>结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]</p><p><strong>输出：</strong>[3.75000,0.40000,5.00000,0.20000]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]</p><p><strong>输出：</strong>[0.50000,2.00000,-1.00000,-1.00000]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= equations.length &lt;= 20</code></li><li><code>equations[i].length == 2</code></li><li><code>1 &lt;= Ai.length, Bi.length &lt;= 5</code></li><li><code>values.length == equations.length</code></li><li><code>0.0 &lt; values[i] &lt;= 20.0</code></li><li><code>1 &lt;= queries.length &lt;= 20</code></li><li><code>queries[i].length == 2</code></li><li><code>1 &lt;= Cj.length, Dj.length &lt;= 5</code></li><li><code>Ai, Bi, Cj, Dj</code> 由小写英文字母与数字组成</li></ul>',13),y={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),j=e(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题在考察 <strong>有向加权图</strong> 的遍历。</p><p><code>a/b=2</code> 就相当于往图中添加了一条 <code>a-&gt;b</code> 权值为 <code>2</code> 的边，同时添加一条 <code>b-&gt;a</code> 权值为 <code>1/2</code> 的边。</p><p><code>queries</code> 问 <code>x/y</code> 的值，相当于就是图中是否存在一条从 <code>x</code> 到 <code>y</code> 的路径，如果有，那么路径上所有边的权值相乘就是 <code>x/y</code> 的值。</p><p>所以思路就是，用邻接表建图，然后用 DFS 或者 BFS 遍历即可。</p><ol><li><p><strong>构建图</strong>：</p><ul><li>使用邻接表来表示图，每一个变量作为一个节点，边的权重为它们之间的值（<code>a/b=2</code> 就相当于往图中添加了一条 <code>a-&gt;b</code> 权值为 <code>2</code> 的边，同时添加一条 <code>b-&gt;a</code> 权值为 <code>1/2</code> 的边）</li><li>遍历给定的方程式和对应的值，将其构建为一个双向图。</li></ul></li><li><p><strong>处理查询</strong>：</p><ul><li>对于每个查询 <code>x/y</code>，我们使用 DFS 或 BFS 在图中查找从 <code>x</code> 到 <code>y</code> 的路径。如果能找到路径，则计算路径上所有边的权重乘积；如果找不到路径，则返回 <code>-1.0</code>。</li></ul></li><li><p><strong>实现 BFS</strong>：</p><ul><li>使用 BFS 遍历图，维护一个队列和一个记录已访问节点的集合，同时维护一个权重映射，用于记录从起始节点到当前节点的路径乘积。</li><li>一旦找到目标节点，则直接返回从起始节点到目标节点的路径乘积。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(E + Q * (V + E))</code>，其中 <code>E</code> 是 <code>equations</code> 的数量，<code>V</code> 是 <code>values</code> 的数量，<code>Q</code> 是 <code>queries</code> 的数量。 <ul><li>在构建图的过程中，需要遍历所有方程，每个方程式涉及两个节点；</li><li>对于每个查询，使用 BFS 在图中查找路径，最坏情况下需要遍历所有节点和边，时间复杂度为 <code>O(V + E)</code>，一共要查询 <code>Q</code> 次；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(V + E)</code><ul><li>存储图的空间复杂度为 <code>O(V + E)</code>，需要为每个节点和边分配空间；</li><li>还需要额外的空间来存储队列和已访问集合，空间复杂度也是 <code>O(V)</code>；</li><li>因此，总的空间复杂度为 <code>O(V + E)</code>；</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">equations</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">values</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calcEquation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">equations<span class="token punctuation">,</span> values<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 把 equations 抽象成一幅图，邻接表存储</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> equations<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span> <span class="token operator">=</span> equations<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
			weight <span class="token operator">=</span> values<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 构建双向图</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			graph<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">node</span><span class="token operator">:</span> end<span class="token punctuation">,</span> weight <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			graph<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">node</span><span class="token operator">:</span> start<span class="token punctuation">,</span> <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">/</span> weight <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 依次求解 queries</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>queries<span class="token punctuation">.</span>lenghth<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queries<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span> <span class="token operator">=</span> queries<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// BFS 遍历图，计算 start 到 end 的路径乘积</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 不存在的节点，肯定无法到达</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS 标准框架</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span>
		visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token comment">// key 为节点变量名，value 记录从 start 到该节点的路径乘积</span>
		weight <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>start<span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 更新路径乘积</span>
			weight<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>node<span class="token punctuation">,</span> weight<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token operator">*</span> item<span class="token punctuation">.</span>weight<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>node <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> weight<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 记录 visited</span>
			visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 新节点加入队列继续遍历</span>
			queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function B(E,S){const c=p("font"),o=p("RouterLink"),u=p("ExternalLinkIcon");return i(),r("div",null,[d,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/union-find.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/graph.html"},{default:t(()=>[q]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/shortest-path.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[_,a(u)])]),w,n("div",y,[x,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0399.html"},{default:t(()=>[s("第 399 题")]),_:1}),s(" 相同。")])]),j])}const F=l(k,[["render",B],["__file","jz_offer_II_111.html.vue"]]);export{F as default};
