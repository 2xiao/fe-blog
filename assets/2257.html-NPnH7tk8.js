import{_ as c,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-totCBmv-.js";const k={},g=n("h1",{id:"_2257-统计网格图中没有被保卫的格子数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2257-统计网格图中没有被保卫的格子数","aria-hidden":"true"},"#"),s(" 2257. 统计网格图中没有被保卫的格子数")],-1),m=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),b=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/count-unguarded-cells-in-the-grid",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-unguarded-cells-in-the-grid",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integers <code>m</code> and <code>n</code> representing a <strong>0-indexed</strong> <code>m x n</code> grid. You are also given two 2D integer arrays <code>guards</code> and <code>walls</code> where <code>guards[i] = [rowi, coli]</code> and <code>walls[j] = [rowj, colj]</code> represent the positions of the <code>ith</code> guard and <code>jth</code> wall respectively.</p><p>A guard can see <strong>every</strong> cell in the four cardinal directions (north, east, south, or west) starting from their position unless <strong>obstructed</strong> by a wall or another guard. A cell is <strong>guarded</strong> if there is <strong>at least</strong> one guard that can see it.</p><p>Return <em>the number of unoccupied cells that are <strong>not</strong> <strong>guarded</strong>.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/03/10/example1drawio2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]</p><p>Output: 7</p><p>Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.</p><p>There are a total of 7 unguarded cells, so we return 7.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/03/10/example2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]</p><p>Output: 4</p><p>Explanation: The unguarded cells are shown in green in the above diagram.</p><p>There are a total of 4 unguarded cells, so we return 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>2 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= guards.length, walls.length &lt;= 5 * 10^4</code></li><li><code>2 &lt;= guards.length + walls.length &lt;= m * n</code></li><li><code>guards[i].length == walls[j].length == 2</code></li><li><code>0 &lt;= rowi, rowj &lt; m</code></li><li><code>0 &lt;= coli, colj &lt; n</code></li><li>All the positions in <code>guards</code> and <code>walls</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数 <code>m</code> 和 <code>n</code> 表示一个下标从 <strong>0</strong> 开始的 <code>m x n</code> 网格图。同时给你两个二维整数数组 <code>guards</code> 和 <code>walls</code> ，其中 <code>guards[i] = [rowi, coli]</code> 且 <code>walls[j] = [rowj, colj]</code> ，分别表示第 <code>i</code> 个警卫和第 <code>j</code> 座墙所在的位置。</p><p>一个警卫能看到 4 个坐标轴方向（即东、南、西、北）的 <strong>所有</strong> 格子，除非他们被一座墙或者另外一个警卫 <strong>挡住</strong> 了视线。如果一个格子能被 <strong>至少</strong> 一个警卫看到，那么我们说这个格子被 <strong>保卫</strong> 了。</p><p>请你返回空格子中，有多少个格子是 <strong>没被保卫</strong> 的。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/03/10/example1drawio2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 上图中，被保卫和没有被保卫的格子分别用红色和绿色表示。</p><p>总共有 7 个没有被保卫的格子，所以我们返回 7 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/03/10/example2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 上图中，没有被保卫的格子用绿色表示。</p><p>总共有 4 个没有被保卫的格子，所以我们返回 4 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>2 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= guards.length, walls.length &lt;= 5 * 10^4</code></li><li><code>2 &lt;= guards.length + walls.length &lt;= m * n</code></li><li><code>guards[i].length == walls[j].length == 2</code></li><li><code>0 &lt;= rowi, rowj &lt; m</code></li><li><code>0 &lt;= coli, colj &lt; n</code></li><li><code>guards</code> 和 <code>walls</code> 中所有位置 <strong>互不相同</strong> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>数据初始化</li></ol><ul><li>使用一个二维数组 <code>g</code> 表示网格状态： <ul><li><strong>0</strong>：当前格子未被保卫；</li><li><strong>1</strong>：当前格子被守卫保卫；</li><li><strong>2</strong>：当前格子是守卫或墙。</li></ul></li><li>将 <code>guards</code> 和 <code>walls</code> 的位置初始化为 <strong>2</strong>。</li></ul><ol start="2"><li>模拟守卫的视线</li></ol><ul><li>遍历每个守卫 <code>(gx, gy)</code>，从其位置向四个方向（上下左右）扩展，直到： <ul><li>超出边界；</li><li>遇到墙或其他守卫（值为 <strong>2</strong>）。</li></ul></li><li>对每个可以扩展的格子，标记为 <strong>1</strong>（被保卫）。</li></ul><ol start="3"><li>统计未被保卫的格子</li></ol><ul><li>遍历整个网格，统计值为 <strong>0</strong> 的格子数，即未被保卫的格子。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k * max(m, n) + m * n)</code>。 <ul><li>遍历 <code>guards</code> 和其四个方向扩展的操作，复杂度约为 <code>O(k * max(m, n))</code>，其中 <code>k</code> 是守卫的数量；</li><li>统计未被保卫的格子需要遍历一次矩阵，复杂度为 <code>O(m * n)</code>；</li><li>总复杂度为 <code>O(k * max(m, n) + m * n)</code></li></ul></li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，需要一个二维数组 <code>g</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">guards</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">walls</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countUnguarded</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> guards<span class="token punctuation">,</span> walls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化网格</span>
	<span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 设置守卫和墙的位置为 2</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token keyword">of</span> guards<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token keyword">of</span> walls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 定义四个方向</span>
	<span class="token keyword">const</span> dirs <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历每个守卫，模拟其视线</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>gx<span class="token punctuation">,</span> gy<span class="token punctuation">]</span> <span class="token keyword">of</span> guards<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> x <span class="token operator">=</span> gx<span class="token punctuation">,</span>
				y <span class="token operator">=</span> gy<span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				x <span class="token operator">+=</span> dx<span class="token punctuation">;</span>
				y <span class="token operator">+=</span> dy<span class="token punctuation">;</span>
				<span class="token comment">// 超出边界或遇到障碍物</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> y <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> x <span class="token operator">&gt;=</span> m <span class="token operator">||</span> y <span class="token operator">&gt;=</span> n <span class="token operator">||</span> g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token comment">// 标记当前格子为被保卫</span>
				g<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 统计未被保卫的格子数</span>
	<span class="token keyword">return</span> g<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> sum <span class="token operator">+</span> row<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"361",-1),q=n("td",{style:{"text-align":"left"}},"轰炸敌人 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},A=n("code",null,"数组",-1),C=n("code",null,"动态规划",-1),L=n("code",null,"矩阵",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/bomb-enemy",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/bomb-enemy",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"center"}},"999",-1),B=n("td",{style:{"text-align":"left"}},"可以被一步捕获的棋子数",-1),R={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},D=n("code",null,"数组",-1),M=n("code",null,"矩阵",-1),S=n("code",null,"模拟",-1),U=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/available-captures-for-rook",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/available-captures-for-rook",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[_,a(o)]),s(),n("a",f,[y,a(o)])]),w,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[j,q,E,n("td",O,[a(e,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[L]),_:1})]),N,n("td",T,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",z,[s("🔗"),a(o)])])]),n("tr",null,[I,B,n("td",R,[a(e,{to:"/problem/0999.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",Y,[a(e,{to:"/tag/array.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[S]),_:1})]),U,n("td",F,[n("a",G,[s("🀄️"),a(o)]),s(),n("a",H,[s("🔗"),a(o)])])])])])])}const W=c(k,[["render",J],["__file","2257.html.vue"]]);export{W as default};
