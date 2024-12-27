import{_ as i,r as o,o as l,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_3243-新增道路查询后的最短距离-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3243-新增道路查询后的最短距离-i","aria-hidden":"true"},"#"),s(" 3243. 新增道路查询后的最短距离 I")],-1),g=n("code",null,"广度优先搜索",-1),m=n("code",null,"图",-1),h=n("code",null,"数组",-1),f={href:"https://leetcode.cn/problems/shortest-distance-after-road-addition-queries-i",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code> and a 2D integer array <code>queries</code>.</p><p>There are <code>n</code> cities numbered from <code>0</code> to <code>n - 1</code>. Initially, there is a <strong>unidirectional</strong> road from city <code>i</code> to city <code>i + 1</code> for all <code>0 &lt;= i &lt; n - 1</code>.</p><p><code>queries[i] = [ui, vi]</code> represents the addition of a new <strong>unidirectional</strong> road from city <code>ui</code> to city <code>vi</code>. After each query, you need to find the <strong>length</strong> of the <strong>shortest path</strong> from city <code>0</code> to city <code>n - 1</code>.</p><p>Return an array <code>answer</code> where for each <code>i</code> in the range <code>[0, queries.length - 1]</code>, <code>answer[i]</code> is the <em>length of the shortest path</em> from city <code>0</code> to city \`n</p><ul><li>1<code> after processing the **first**</code>i + 1\` queries.</li></ul><p><strong>Example 1:</strong></p><p><strong>Input:</strong> n = 5, queries = [[2,4],[0,2],[0,4]]</p><p><strong>Output:</strong> [3,2,1]</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the addition of the road from 2 to 4, the length of the shortest path from 0 to 4 is 3.</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the addition of the road from 0 to 2, the length of the shortest path from 0 to 4 is 2.</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the addition of the road from 0 to 4, the length of the shortest path from 0 to 4 is 1.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> n = 4, queries = [[0,3],[0,2]]</p><p><strong>Output:</strong> [1,1]</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image11.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the addition of the road from 0 to 3, the length of the shortest path from 0 to 3 is 1.</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image12.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the addition of the road from 0 to 2, the length of the shortest path remains 1.</p><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= n &lt;= 500</code></li><li><code>1 &lt;= queries.length &lt;= 500</code></li><li><code>queries[i].length == 2</code></li><li><code>0 &lt;= queries[i][0] &lt; queries[i][1] &lt; n</code></li><li><code>1 &lt; queries[i][1] - queries[i][0]</code></li><li>There are no repeated roads among the queries.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> 和一个二维整数数组 <code>queries</code>。</p><p>有 <code>n</code> 个城市，编号从 <code>0</code> 到 <code>n - 1</code>。初始时，每个城市 <code>i</code> 都有一条<strong>单向</strong> 道路通往城市 <code>i + 1</code>（ <code>0 &lt;= i &lt; n - 1</code>）。</p><p><code>queries[i] = [ui, vi]</code> 表示新建一条从城市 <code>ui</code> 到城市 <code>vi</code> 的<strong>单向</strong> 道路。每次查询后，你需要找到从城市 <code>0</code> 到城市 <code>n - 1</code> 的<strong>最短路径</strong> 的<strong>长度</strong> 。</p><p>返回一个数组 <code>answer</code>，对于范围 <code>[0, queries.length - 1]</code> 中的每个 <code>i</code>，<code>answer[i]</code> 是处理完<strong>前</strong><code>i + 1</code> 个查询后，从城市 <code>0</code> 到城市 <code>n - 1</code> 的最短路径的 <em>长度</em> 。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> n = 5, queries = [[2, 4], [0, 2], [0, 4]]</p><p><strong>输出：</strong> [3, 2, 1]</p><p><strong>解释：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image8.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增一条从 2 到 4 的道路后，从 0 到 4 的最短路径长度为 3。</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image9.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增一条从 0 到 2 的道路后，从 0 到 4 的最短路径长度为 2。</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image10.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增一条从 0 到 4 的道路后，从 0 到 4 的最短路径长度为 1。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> n = 4, queries = [[0, 3], [0, 2]]</p><p><strong>输出：</strong> [1, 1]</p><p><strong>解释：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image11.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增一条从 0 到 3 的道路后，从 0 到 3 的最短路径长度为 1。</p><figure><img src="https://assets.leetcode.com/uploads/2024/06/28/image12.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新增一条从 0 到 2 的道路后，从 0 到 3 的最短路径长度仍为 1。</p><p><strong>提示：</strong></p><ul><li><code>3 &lt;= n &lt;= 500</code></li><li><code>1 &lt;= queries.length &lt;= 500</code></li><li><code>queries[i].length == 2</code></li><li><code>0 &lt;= queries[i][0] &lt; queries[i][1] &lt; n</code></li><li><code>1 &lt; queries[i][1] - queries[i][0]</code></li><li>查询中没有重复的道路。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道考察图遍历的题目，可以把每个城市看成图的一个节点，每条通路看成一条边。</p><ol><li><p><strong>初始化图的表示方式</strong>：</p><ul><li>使用 <strong>邻接表</strong> 存储图，邻接表用一个数组 <code>road</code> 表示，其中 <code>road[i]</code> 是节点 <code>i</code> 的所有邻居节点。</li><li>初始图中只有链状路径 <code>0 -&gt; 1 -&gt; 2 -&gt; ... -&gt; n-1</code>。</li></ul></li><li><p><strong>BFS 寻找最短路径</strong>：</p><ul><li>从节点 <code>0</code> 开始，用 <strong>队列</strong> 实现广度优先搜索。</li><li>每次从队列中取出当前节点及其路径长度，访问其所有未访问的邻居节点。</li><li>一旦访问到终点 <code>n-1</code>，即可返回当前路径长度，保证是最短的。</li></ul></li><li><p><strong>处理查询</strong>：</p><ul><li>遍历每个查询 <code>(from, to)</code>，将边 <code>(from, to)</code> 添加到邻接表中。</li><li>调用 BFS 计算当前图中从节点 <code>0</code> 到节点 <code>n-1</code> 的最短路径，将结果存储到 <code>res</code> 数组中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历所有查询后，返回结果数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(q * (V + E))</code>，每次查询执行 BFS，BFS 的复杂度为 <code>O(V + E)</code>，其中 <code>V = n</code>，<code>E</code> 是图中边数，<code>q</code> 是 <code>queries</code> 的长度，代表要查询 <code>q</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(V + E)</code>，邻接表占用 <code>O(V + E)</code> 的空间，BFS 的队列和 <code>visited</code> 集合占用 <code>O(V)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shortestDistanceAfterQueries</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化图，使用邻接表表示</span>
	<span class="token keyword">let</span> road <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算最短路径的函数，使用 BFS</span>
	<span class="token keyword">const</span> <span class="token function-variable function">bfsShortestPath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [节点, 距离]</span>
		<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> dist<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 如果找到目标节点，返回距离</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">===</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dist<span class="token punctuation">;</span>

			<span class="token comment">// 遍历邻接节点</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> neighbor <span class="token keyword">of</span> road<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>neighbor<span class="token punctuation">)</span><span class="token punctuation">;</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>neighbor<span class="token punctuation">,</span> dist <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 处理每次查询</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>from<span class="token punctuation">,</span> to<span class="token punctuation">]</span> <span class="token keyword">of</span> queries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 添加新边</span>
		road<span class="token punctuation">[</span>from<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 计算当前最短路径</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">bfsShortestPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function q(w,x){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",f,[v,a(p)]),s(),n("a",b,[y,a(p)])]),_])}const E=i(d,[["render",q],["__file","3243.html.vue"]]);export{E as default};
