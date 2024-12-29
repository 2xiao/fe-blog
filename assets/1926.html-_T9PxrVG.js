import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_1926-迷宫中离入口最近的出口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1926-迷宫中离入口最近的出口","aria-hidden":"true"},"#"),s(" 1926. 迷宫中离入口最近的出口")],-1),m=n("code",null,"广度优先搜索",-1),g=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/nearest-exit-from-entrance-in-maze",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/nearest-exit-from-entrance-in-maze",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> matrix <code>maze</code> (<strong>0-indexed</strong>) with empty cells (represented as <code>&#39;.&#39;</code>) and walls (represented as <code>&#39;+&#39;</code>). You are also given the <code>entrance</code> of the maze, where <code>entrance = [entrancerow, entrancecol]</code> denotes the row and column of the cell you are initially standing at.</p><p>In one step, you can move one cell <strong>up</strong> , <strong>down</strong> , <strong>left</strong> , or <strong>right</strong>. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the <strong>nearest exit</strong> from the <code>entrance</code>. An <strong>exit</strong> is defined as an <strong>empty cell</strong> that is at the <strong>border</strong> of the <code>maze</code>. The <code>entrance</code> <strong>does not count</strong> as an exit.</p><p>Return _the<strong>number of steps</strong> in the shortest path from the _<code>entrance</code> <em>to the nearest exit, or</em><code>-1</code> <em>if no such path exists</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearest1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: maze = [[&quot;+&quot;,&quot;+&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;,&quot;.&quot;]], entrance = [1,2]</p><p>Output: 1</p><p>Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].</p><p>Initially, you are at the entrance cell [1,2].</p><ul><li>You can reach [1,0] by moving 2 steps left.</li><li>You can reach [0,2] by moving 1 step up.</li></ul><p>It is impossible to reach [2,3] from the entrance.</p><p>Thus, the nearest exit is [0,2], which is 1 step away.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearesr2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: maze = [[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;]], entrance = [1,0]</p><p>Output: 2</p><p>Explanation: There is 1 exit in this maze at [1,2].</p><p>[1,0] does not count as an exit since it is the entrance cell.</p><p>Initially, you are at the entrance cell [1,0].</p><ul><li>You can reach [1,2] by moving 2 steps right.</li></ul><p>Thus, the nearest exit is [1,2], which is 2 steps away.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearest3-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: maze = [[&quot;.&quot;,&quot;+&quot;]], entrance = [0,0]</p><p>Output: -1</p><p>Explanation: There are no exits in this maze.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>maze.length == m</code></li><li><code>maze[i].length == n</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>maze[i][j]</code> is either <code>&#39;.&#39;</code> or <code>&#39;+&#39;</code>.</li><li><code>entrance.length == 2</code></li><li><code>0 &lt;= entrancerow &lt; m</code></li><li><code>0 &lt;= entrancecol &lt; n</code></li><li><code>entrance</code> will always be an empty cell.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的迷宫矩阵 <code>maze</code> （<strong>下标从 0 开始</strong> ），矩阵中有空格子（用 <code>&#39;.&#39;</code> 表示）和墙（用 <code>&#39;+&#39;</code> 表示）。同时给你迷宫的入口 <code>entrance</code> ，用 <code>entrance = [entrancerow, entrancecol]</code> 表示你一开始所在格子的行和列。</p><p>每一步操作，你可以往 <strong>上</strong> ，<strong>下</strong> ，<strong>左</strong> 或者 <strong>右</strong> 移动一个格子。你不能进入墙所在的格子，你也不能离开迷宫。你的目标是找到离 <code>entrance</code> <strong>最近</strong> 的出口。<strong>出口</strong> 的含义是 <code>maze</code> <strong>边界</strong> 上的 <strong>空格子</strong> 。<code>entrance</code> 格子 <strong>不算</strong> 出口。</p><p>请你返回从 <code>entrance</code> 到最近出口的最短路径的 <strong>步数</strong> ，如果不存在这样的路径，请你返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearest1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> maze = [[&quot;+&quot;,&quot;+&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;+&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;,&quot;.&quot;]], entrance = [1,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 总共有 3 个出口，分别位于 (1,0)，(0,2) 和 (2,3) 。</p><p>一开始，你在入口格子 (1,2) 处。</p><ul><li>你可以往左移动 2 步到达 (1,0) 。</li><li>你可以往上移动 1 步到达 (0,2) 。</li></ul><p>从入口处没法到达 (2,3) 。</p><p>所以，最近的出口是 (0,2) ，距离为 1 步。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearesr2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> maze = [[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;],[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],[&quot;+&quot;,&quot;+&quot;,&quot;+&quot;]], entrance = [1,0]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 迷宫中只有 1 个出口，在 (1,2) 处。</p><p>(1,0) 不算出口，因为它是入口格子。</p><p>初始时，你在入口与格子 (1,0) 处。</p><ul><li>你可以往右移动 2 步到达 (1,2) 处。</li></ul><p>所以，最近的出口为 (1,2) ，距离为 2 步。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/04/nearest3-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> maze = [[&quot;.&quot;,&quot;+&quot;]], entrance = [0,0]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 这个迷宫中没有出口。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>maze.length == m</code></li><li><code>maze[i].length == n</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>maze[i][j]</code> 要么是 <code>&#39;.&#39;</code> ，要么是 <code>&#39;+&#39;</code> 。</li><li><code>entrance.length == 2</code></li><li><code>0 &lt;= entrancerow &lt; m</code></li><li><code>0 &lt;= entrancecol &lt; n</code></li><li><code>entrance</code> 一定是空格子。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以将迷宫抽象为图，网格的每个空格子 &#39;.&#39; 是图的节点，相邻的上下左右方向可以看作边，表示可以移动到下一个节点。</p><p>利用 <strong>广度优先搜索（BFS）</strong> 遍历图，因为 BFS 会优先找到距离入口最近的出口。同时记录已访问过的节点，避免重复遍历。</p><ol><li>初始化队列 <code>queue</code>，存储当前节点坐标及其到入口的步数 <code>[row, col, steps]</code>。</li><li>将入口坐标加入队列并标记为已访问。</li><li>开始 BFS： <ul><li>每次从队列中取出一个节点。</li><li>遍历其上下左右的相邻节点： <ul><li>如果该节点是出口，返回步数。</li><li>如果该节点是未访问的空格子，则加入队列并标记为已访问。</li></ul></li></ul></li><li>如果所有节点都遍历完，仍无出口，则返回 -1。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是迷宫的行数和列数。使用 BFS 遍历迷宫时，每个节点最多被访问一次，总访问的节点数为 <code>O(m * n)</code>，每次访问会检查其最多 4 个邻居（上下左右），邻居检查的次数与节点数成比例。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>。 <ul><li>队列空间：在最坏情况下，队列中可能同时存储所有未访问节点。</li><li>标记空间：直接在输入的 <code>maze</code> 中标记已访问节点，因此不需要额外的访问标记数组。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">maze</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">entrance</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nearestExit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">maze<span class="token punctuation">,</span> entrance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> rows <span class="token operator">=</span> maze<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> cols <span class="token operator">=</span> maze<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 上</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 下</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 左</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 右</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化队列和访问标记</span>
	<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>entrance<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> entrance<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [row, col, steps]</span>
	maze<span class="token punctuation">[</span>entrance<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>entrance<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 标记入口为已访问</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> steps<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>dr<span class="token punctuation">,</span> dc<span class="token punctuation">]</span> <span class="token keyword">of</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> newRow <span class="token operator">=</span> row <span class="token operator">+</span> dr<span class="token punctuation">;</span>
			<span class="token keyword">const</span> newCol <span class="token operator">=</span> col <span class="token operator">+</span> dc<span class="token punctuation">;</span>

			<span class="token comment">// 检查新位置是否有效且未访问</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				newRow <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				newRow <span class="token operator">&lt;</span> rows <span class="token operator">&amp;&amp;</span>
				newCol <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				newCol <span class="token operator">&lt;</span> cols <span class="token operator">&amp;&amp;</span>
				maze<span class="token punctuation">[</span>newRow<span class="token punctuation">]</span><span class="token punctuation">[</span>newCol<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 检查是否为出口</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>
					newRow <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>
					newRow <span class="token operator">===</span> rows <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">||</span>
					newCol <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span>
					newCol <span class="token operator">===</span> cols <span class="token operator">-</span> <span class="token number">1</span>
				<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> steps <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				<span class="token comment">// 标记为已访问并加入队列</span>
				maze<span class="token punctuation">[</span>newRow<span class="token punctuation">]</span><span class="token punctuation">[</span>newCol<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span>
				queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>newRow<span class="token punctuation">,</span> newCol<span class="token punctuation">,</span> steps <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 没有找到出口</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function _(x,y){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",q,[f,a(p)])]),w])}const C=l(d,[["render",_],["__file","1926.html.vue"]]);export{C as default};
