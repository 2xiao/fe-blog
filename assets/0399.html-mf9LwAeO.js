import{_ as u,r as p,o as l,c as i,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-9CeBk-uV.js";const k={},m=n("h1",{id:"_399-除法求值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_399-除法求值","aria-hidden":"true"},"#"),s(" 399. 除法求值")],-1),h=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),b=n("code",null,"并查集",-1),q=n("code",null,"图",-1),g=n("code",null,"数组",-1),f=n("code",null,"字符串",-1),_=n("code",null,"最短路",-1),y={href:"https://leetcode.cn/problems/evaluate-division",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/evaluate-division",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),B=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of variable pairs <code>equations</code> and an array of real numbers <code>values</code>, where <code>equations[i] = [Ai, Bi]</code> and <code>values[i]</code> represent the equation <code>Ai / Bi = values[i]</code>. Each <code>Ai</code> or <code>Bi</code> is a string that represents a single variable.</p><p>You are also given some <code>queries</code>, where <code>queries[j] = [Cj, Dj]</code> represents the <code>jth</code> query where you must find the answer for <code>Cj / Dj = ?</code>.</p><p>Return <em>the answers to all queries</em>. If a single answer cannot be determined, return <code>-1.0</code>.</p><p><strong>Note:</strong> The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.</p><p>**Note: **The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]</p><p>Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]</p><p>Explanation:</p><p>Given: <em>a / b = 2.0</em> , <em>b / c = 3.0</em></p><p>queries are: <em>a / c = ?</em> , <em>b / a = ?</em> , <em>a / e = ?</em> , <em>a / a = ?</em> , <em>x / x = ?</em></p><p>return: [6.0, 0.5, -1.0, 1.0, -1.0 ]</p><p>note: x is undefined =&gt; -1.0</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]</p><p>Output: [3.75000,0.40000,5.00000,0.20000]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]</p><p>Output: [0.50000,2.00000,-1.00000,-1.00000]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= equations.length &lt;= 20</code></li><li><code>equations[i].length == 2</code></li><li><code>1 &lt;= Ai.length, Bi.length &lt;= 5</code></li><li><code>values.length == equations.length</code></li><li><code>0.0 &lt; values[i] &lt;= 20.0</code></li><li><code>1 &lt;= queries.length &lt;= 20</code></li><li><code>queries[i].length == 2</code></li><li><code>1 &lt;= Cj.length, Dj.length &lt;= 5</code></li><li><code>Ai, Bi, Cj, Dj</code> consist of lower case English letters and digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个变量对数组 <code>equations</code> 和一个实数值数组 <code>values</code> 作为已知条件，其中 <code>equations[i] = [Ai, Bi]</code> 和 <code>values[i]</code> 共同表示等式 <code>Ai / Bi = values[i]</code> 。每个 <code>Ai</code> 或 <code>Bi</code> 是一个表示单个变量的字符串。</p><p>另有一些以数组 <code>queries</code> 表示的问题，其中 <code>queries[j] = [Cj, Dj]</code> 表示第 <code>j</code> 个问题，请你根据已知条件找出 <code>Cj / Dj = ?</code> 的结果作为答案。</p><p>返回 <strong>所有问题的答案</strong> 。如果存在某个无法确定的答案，则用 <code>-1.0</code> 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 <code>-1.0</code> 替代这个答案。</p><p><strong>注意</strong>：输入总是有效的。你可以假设除法运算中不会出现除数为 <code>0</code> 的情况，且不存在任何矛盾的结果。</p><p><strong>注意</strong>：未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题在考察 <strong>有向加权图</strong> 的遍历。</p><p><code>a/b=2</code> 就相当于往图中添加了一条 <code>a-&gt;b</code> 权值为 <code>2</code> 的边，同时添加一条 <code>b-&gt;a</code> 权值为 <code>1/2</code> 的边。</p><p><code>queries</code> 问 <code>x/y</code> 的值，相当于就是图中是否存在一条从 <code>x</code> 到 <code>y</code> 的路径，如果有，那么路径上所有边的权值相乘就是 <code>x/y</code> 的值。</p><p>所以思路就是，用邻接表建图，然后用 DFS 或者 BFS 遍历即可。</p><ol><li><p><strong>构建图</strong>：</p><ul><li>使用邻接表来表示图，每一个变量作为一个节点，边的权重为它们之间的值（<code>a/b=2</code> 就相当于往图中添加了一条 <code>a-&gt;b</code> 权值为 <code>2</code> 的边，同时添加一条 <code>b-&gt;a</code> 权值为 <code>1/2</code> 的边）</li><li>遍历给定的方程式和对应的值，将其构建为一个双向图。</li></ul></li><li><p><strong>处理查询</strong>：</p><ul><li>对于每个查询 <code>x/y</code>，我们使用 DFS 或 BFS 在图中查找从 <code>x</code> 到 <code>y</code> 的路径。如果能找到路径，则计算路径上所有边的权重乘积；如果找不到路径，则返回 <code>-1.0</code>。</li></ul></li><li><p><strong>实现 BFS</strong>：</p><ul><li>使用 BFS 遍历图，维护一个队列和一个记录已访问节点的集合，同时维护一个权重映射，用于记录从起始节点到当前节点的路径乘积。</li><li>一旦找到目标节点，则直接返回从起始节点到目标节点的路径乘积。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(E + Q * (V + E))</code>，其中 <code>E</code> 是 <code>equations</code> 的数量，<code>V</code> 是 <code>values</code> 的数量，<code>Q</code> 是 <code>queries</code> 的数量。 <ul><li>在构建图的过程中，需要遍历所有方程，每个方程式涉及两个节点；</li><li>对于每个查询，使用 BFS 在图中查找路径，最坏情况下需要遍历所有节点和边，时间复杂度为 <code>O(V + E)</code>，一共要查询 <code>Q</code> 次；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(V + E)</code><ul><li>存储图的空间复杂度为 <code>O(V + E)</code>，需要为每个节点和边分配空间；</li><li>还需要额外的空间来存储队列和已访问集合，空间复杂度也是 <code>O(V)</code>；</li><li>因此，总的空间复杂度为 <code>O(V + E)</code>；</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"2307",-1),C=n("td",{style:{"text-align":"left"}},"检查方程中的矛盾之处 🔒",-1),S=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},F=n("code",null,"深度优先搜索",-1),O=n("code",null,"并查集",-1),D=n("code",null,"图",-1),N=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/check-for-contradictions-in-equations",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/check-for-contradictions-in-equations",target:"_blank",rel:"noopener noreferrer"};function R(T,Y){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/union-find.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/shortest-path.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,a(o)]),s(),n("a",x,[j,a(o)])]),B,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[V,C,S,n("td",A,[a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[F]),_:1}),s(),a(e,{to:"/tag/union-find.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[D]),_:1}),s(),N]),I,n("td",L,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",Q,[s("🔗"),a(o)])])])])])])}const G=u(k,[["render",R],["__file","0399.html.vue"]]);export{G as default};
