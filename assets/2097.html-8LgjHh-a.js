import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fqckLmln.js";const k={},g=n("h1",{id:"_2097-合法重新排列数对",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2097-合法重新排列数对","aria-hidden":"true"},"#"),s(" 2097. 合法重新排列数对")],-1),h=n("code",null,"深度优先搜索",-1),m=n("code",null,"图",-1),v=n("code",null,"欧拉回路",-1),_={href:"https://leetcode.cn/problems/valid-arrangement-of-pairs",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/valid-arrangement-of-pairs",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 2D integer array <code>pairs</code> where <code>pairs[i] = [starti, endi]</code>. An arrangement of <code>pairs</code> is <strong>valid</strong> if for every index <code>i</code> where <code>1 &lt;= i &lt; pairs.length</code>, we have <code>endi-1 == starti</code>.</p><p>Return _<strong>any</strong> valid arrangement of _<code>pairs</code>.</p><p><strong>Note:</strong> The inputs will be generated such that there exists a valid arrangement of <code>pairs</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: pairs = [[5,1],[4,5],[11,9],[9,4]]</p><p>Output: [[11,9],[9,4],[4,5],[5,1]]</p><p>Explanation: This is a valid arrangement since endi-1 always equals starti.</p><p>end0 = 9 == 9 = start1</p><p>end1 = 4 == 4 = start2</p><p>end2 = 5 == 5 = start3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pairs = [[1,3],[3,2],[2,1]]</p><p>Output: [[1,3],[3,2],[2,1]]</p><p>Explanation:</p><p>This is a valid arrangement since endi-1 always equals starti.</p><p>end0 = 3 == 3 = start1</p><p>end1 = 2 == 2 = start2</p><p>The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: pairs = [[1,2],[1,3],[2,1]]</p><p>Output: [[1,2],[2,1],[1,3]]</p><p>Explanation:</p><p>This is a valid arrangement since endi-1 always equals starti.</p><p>end0 = 2 == 2 = start1</p><p>end1 = 1 == 1 = start2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pairs.length &lt;= 10^5</code></li><li><code>pairs[i].length == 2</code></li><li><code>0 &lt;= starti, endi &lt;= 10^9</code></li><li><code>starti != endi</code></li><li>No two pairs are exactly the same.</li><li>There <strong>exists</strong> a valid arrangement of <code>pairs</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>pairs</code> ，其中 <code>pairs[i] = [starti, endi]</code> 。如果 <code>pairs</code> 的一个重新排列，满足对每一个下标 <code>i</code> （ <code>1 &lt;= i &lt; pairs.length</code> ）都有 <code>endi-1 == starti</code> ，那么我们就认为这个重新排列是 <code>pairs</code> 的一个 <strong>合法重新排列</strong> 。</p><p>请你返回 <strong>任意一个</strong> <code>pairs</code> 的合法重新排列。</p><p><strong>注意：</strong> 数据保证至少存在一个 <code>pairs</code> 的合法重新排列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> pairs = [[5,1],[4,5],[11,9],[9,4]]</p><p><strong>输出：</strong>[[11,9],[9,4],[4,5],[5,1]]</p><p><strong>解释：</strong> 输出的是一个合法重新排列，因为每一个 endi-1 都等于 starti 。</p><p>end0 = 9 == 9 = start1</p><p>end1 = 4 == 4 = start2</p><p>end2 = 5 == 5 = start3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> pairs = [[1,3],[3,2],[2,1]]</p><p><strong>输出：</strong>[[1,3],[3,2],[2,1]]</p><p><strong>解释：</strong></p><p>输出的是一个合法重新排列，因为每一个 endi-1 都等于 starti 。</p><p>end0 = 3 == 3 = start1</p><p>end1 = 2 == 2 = start2</p><p>重新排列后的数组 [[2,1],[1,3],[3,2]] 和 [[3,2],[2,1],[1,3]] 都是合法的。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> pairs = [[1,2],[1,3],[2,1]]</p><p><strong>输出：</strong>[[1,2],[2,1],[1,3]]</p><p><strong>解释：</strong></p><p>输出的是一个合法重新排列，因为每一个 endi-1 都等于 starti 。</p><p>end0 = 2 == 2 = start1</p><p>end1 = 1 == 1 = start2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= pairs.length &lt;= 10^5</code></li><li><code>pairs[i].length == 2</code></li><li><code>0 &lt;= starti, endi &lt;= 10^9</code></li><li><code>starti != endi</code></li><li><code>pairs</code> 中不存在一模一样的数对。</li><li>至少 <strong>存在</strong> 一个合法的 <code>pairs</code> 重新排列。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>相关知识：欧拉路径和欧拉回路</strong></p><ol><li><p><strong>欧拉路径</strong>:</p><ul><li>是一种路径，它能够遍历图中的所有边，且每条边恰好遍历一次。</li><li>对于欧拉路径的图，满足的条件： <ul><li>最多有两个特殊的节点：一个节点的出度比入度多 1（起点），一个节点的入度比出度多 1（终点）。</li><li>其他节点的出度等于入度。</li></ul></li></ul></li><li><p><strong>欧拉回路</strong>:</p><ul><li>是一种路径，它能够遍历图中的所有边且回到起点，形成一个回路。</li><li>条件是：所有节点的出度等于入度。</li></ul></li></ol><p>为了找到一个合法的路径，可以通过以下步骤：</p><p><strong>1. 构建图</strong></p><p>使用邻接表表示图，记录每个节点的出度和入度：</p><ul><li><strong>邻接表</strong>存储图中的边，方便遍历。</li><li><strong>出度和入度</strong>记录每个节点的出入情况，帮助判断起点或终点。</li></ul><p><strong>2. 确定起点</strong></p><ul><li>如果存在出度比入度多 1 的节点，起点就是它。</li><li>如果所有节点的出度等于入度，可以任选一个有边的节点作为起点。</li></ul><p><strong>3. Hierholzer 算法构建欧拉路径</strong></p><p>Hierholzer 算法用于构建欧拉路径或欧拉回路：</p><ol><li>从起点开始，尽可能深地访问节点。</li><li>当无法继续时，将节点加入路径，并回溯。</li><li>最后得到的路径是倒序的，需翻转为正序。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(E)</code>，其中 <code>E</code> 是边的数量，需要构建图以及深度优先搜索遍历所有边。</li><li><strong>空间复杂度</strong>：<code>O(V + E)</code>，其中 <code>V</code> 是节点数，用于存储邻接表和入出度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">validArrangement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pairs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Step 1: 构建图、出度和入度</span>
	<span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 邻接表</span>
	<span class="token keyword">const</span> outDegree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> inDegree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>u<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token keyword">of</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>graph<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">)</span> graph<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>

		outDegree<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span> <span class="token punctuation">(</span>outDegree<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		inDegree<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token punctuation">(</span>inDegree<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Step 2: 确定起点</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> pairs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 默认起点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>node<span class="token punctuation">,</span> out<span class="token punctuation">]</span> <span class="token keyword">of</span> outDegree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> inD <span class="token operator">=</span> inDegree<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>out <span class="token operator">&gt;</span> inD<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			start <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 出度大于入度的节点是起点</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Step 3: 使用 Hierholzer 算法构建路径</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> edges <span class="token operator">=</span> graph<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>edges<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> next <span class="token operator">=</span> edges<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除一条边</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归访问下一节点</span>
		<span class="token punctuation">}</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 回溯时记录路径</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// Step 4: 翻转路径并返回</span>
	<span class="token keyword">return</span> result
		<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>v<span class="token punctuation">,</span> result<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,41),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"332",-1),E=n("td",{style:{"text-align":"left"}},"重新安排行程",-1),D=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},T=n("code",null,"深度优先搜索",-1),V=n("code",null,"图",-1),C=n("code",null,"欧拉回路",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/reconstruct-itinerary",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/reconstruct-itinerary",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"1971",-1),j=n("td",{style:{"text-align":"left"}},"寻找图中是否存在路径",-1),z={style:{"text-align":"center"}},B={style:{"text-align":"left"}},M=n("code",null,"深度优先搜索",-1),R=n("code",null,"广度优先搜索",-1),A=n("code",null,"并查集",-1),Y=n("code",null,"1+",-1),F=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/find-if-path-exists-in-graph",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/find-if-path-exists-in-graph",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/eulerian-circuit.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",_,[b,a(o)]),s(),n("a",f,[y,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,D,n("td",N,[a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/eulerian-circuit.html"},{default:t(()=>[C]),_:1})]),I,n("td",L,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])]),n("tr",null,[H,j,n("td",z,[a(e,{to:"/problem/1971.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",B,[a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[R]),_:1}),s(),a(e,{to:"/tag/union-find.html"},{default:t(()=>[A]),_:1}),s(),Y]),F,n("td",G,[n("a",J,[s("🀄️"),a(o)]),s(),n("a",K,[s("🔗"),a(o)])])])])])])}const X=l(k,[["render",P],["__file","2097.html.vue"]]);export{X as default};
