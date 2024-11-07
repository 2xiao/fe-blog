import{_ as i,r as c,o as p,c as d,a as t,b as s,d as n,w as e,f as u,e as r}from"./app-OX-nYmHS.js";const _={},h=t("h1",{id:"_200-岛屿数量",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_200-岛屿数量","aria-hidden":"true"},"#"),s(" 200. 岛屿数量")],-1),f=t("code",null,"深度优先搜索",-1),m=t("code",null,"广度优先搜索",-1),k=t("code",null,"并查集",-1),g=t("code",null,"数组",-1),b=t("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), return <em>the number of islands</em>.</p><p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: grid = [</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]</p><p>]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]</p><p>]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 300</code></li><li><code>grid[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <code>&#39;1&#39;</code>（陆地）和 <code>&#39;0&#39;</code>（水）组成的的二维网格，请你计算网格中岛屿的数量。</p><p>岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。</p><p>此外，你可以假设该网格的四条边均被水包围。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>遍历整个网格，并在每次找到一个陆地单元时，使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历所有相连的陆地单元，从而将整个岛屿标记为已访问。</p><ol><li>遍历网格：遍历每一个单元格，如果当前单元格是 <code>&#39;1&#39;</code>（陆地），则找到一个新的岛屿，计数器加一。</li><li>标记已访问：使用 DFS 从当前单元格开始，标记所有连通的陆地单元为 <code>&#39;0&#39;</code>（水），表示它们已被访问。</li><li>继续遍历：继续遍历剩余的单元格，直到整个网格被检查完。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是网格的行数，<code>n</code> 是网格的列数，每个格子最多会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，最坏情况下，递归的深度可能达到 <code>m * n</code>，因此递归调用栈的空间复杂度为 <code>O(m * n)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numIslands</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 从 (i, j) 开始，将与之相邻的陆地都变成海水</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超出索引边界</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// (i, j) 已经是海水了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将 (i, j) 变成海水</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
		<span class="token comment">// 淹没上下左右的陆地</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 下</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 grid</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 每发现一个岛屿，岛屿数量加一</span>
				res<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token comment">// 然后使用 DFS 将岛屿淹了</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),M=t("td",{style:{"text-align":"center"}},"130",-1),I={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/surrounded-regions",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"深度优先搜索",-1),O=t("code",null,"广度优先搜索",-1),S=t("code",null,"并查集",-1),V=t("code",null,"2+",-1),B={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"286",-1),F={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=t("code",null,"广度优先搜索",-1),H=t("code",null,"数组",-1),T=t("code",null,"矩阵",-1),Y={style:{"text-align":"left"}},J=t("td",{style:{"text-align":"center"}},"305",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/number-of-islands-ii",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"并查集",-1),X=t("code",null,"数组",-1),Z=t("code",null,"哈希表",-1),$={style:{"text-align":"left"}},tt=t("td",{style:{"text-align":"center"}},"323",-1),nt={style:{"text-align":"left"}},st={href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"深度优先搜索",-1),lt=t("code",null,"广度优先搜索",-1),ct=t("code",null,"并查集",-1),it=t("code",null,"1+",-1),pt={style:{"text-align":"left"}},dt=t("td",{style:{"text-align":"center"}},"419",-1),ut={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},ft=t("code",null,"深度优先搜索",-1),mt=t("code",null,"数组",-1),kt=t("code",null,"矩阵",-1),gt={style:{"text-align":"left"}},bt=t("td",{style:{"text-align":"center"}},"694",-1),vt={style:{"text-align":"left"}},yt={href:"https://leetcode.com/problems/number-of-distinct-islands",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},wt=t("code",null,"深度优先搜索",-1),jt=t("code",null,"广度优先搜索",-1),Mt=t("code",null,"并查集",-1),It=t("code",null,"2+",-1),Ct={style:{"text-align":"left"}},Et=t("td",{style:{"text-align":"center"}},"695",-1),Lt={style:{"text-align":"left"}},Nt={href:"https://leetcode.com/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},Ot={style:{"text-align":"center"}},St={style:{"text-align":"left"}},Vt=t("code",null,"深度优先搜索",-1),Bt=t("code",null,"广度优先搜索",-1),Dt=t("code",null,"并查集",-1),Ft=t("code",null,"2+",-1),Rt={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"1905",-1),At={style:{"text-align":"left"}},Gt={href:"https://leetcode.com/problems/count-sub-islands",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},Yt=t("code",null,"深度优先搜索",-1),Jt=t("code",null,"广度优先搜索",-1),Kt=t("code",null,"并查集",-1),Pt=t("code",null,"2+",-1),Qt={style:{"text-align":"left"}},Ut=t("td",{style:{"text-align":"center"}},"1992",-1),Wt={style:{"text-align":"left"}},Xt={href:"https://leetcode.com/problems/find-all-groups-of-farmland",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},null,-1),$t={style:{"text-align":"left"}},tn=t("code",null,"深度优先搜索",-1),nn=t("code",null,"广度优先搜索",-1),sn=t("code",null,"数组",-1),en=t("code",null,"1+",-1),an={style:{"text-align":"left"}},on=t("td",{style:{"text-align":"center"}},"2316",-1),ln={style:{"text-align":"left"}},cn={href:"https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},pn=t("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},un=t("code",null,"深度优先搜索",-1),rn=t("code",null,"广度优先搜索",-1),_n=t("code",null,"并查集",-1),hn=t("code",null,"1+",-1),fn={style:{"text-align":"left"}},mn=t("td",{style:{"text-align":"center"}},"2658",-1),kn={style:{"text-align":"left"}},gn={href:"https://leetcode.com/problems/maximum-number-of-fish-in-a-grid",target:"_blank",rel:"noopener noreferrer"},bn=t("td",{style:{"text-align":"center"}},null,-1),vn={style:{"text-align":"left"}},yn=t("code",null,"深度优先搜索",-1),qn=t("code",null,"广度优先搜索",-1),xn=t("code",null,"并查集",-1),wn=t("code",null,"2+",-1),jn={style:{"text-align":"left"}};function Mn(In,Cn){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),d("div",null,[h,t("p",null,[s("🟠 "),n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[f]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[k]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),n(a,{to:"/tag/matrix.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),t("a",v,[y,n(o)]),s(),t("a",q,[x,n(o)])]),w,u(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[M,t("td",I,[t("a",C,[s("被围绕的区域"),n(o)])]),t("td",E,[n(a,{to:"/problem/0130.html"},{default:e(()=>[s("[✓]")]),_:1})]),t("td",L,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[N]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[O]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[S]),_:1}),s(),V]),t("td",B,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",R,[s("墙与门 🔒"),n(o)])]),z,t("td",A,[n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[G]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[H]),_:1}),s(),n(a,{to:"/tag/matrix.html"},{default:e(()=>[T]),_:1})]),t("td",Y,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[J,t("td",K,[t("a",P,[s("岛屿数量 II 🔒"),n(o)])]),Q,t("td",U,[n(a,{to:"/tag/union-find.html"},{default:e(()=>[W]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[X]),_:1}),s(),n(a,{to:"/tag/hash-table.html"},{default:e(()=>[Z]),_:1})]),t("td",$,[n(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),t("tr",null,[tt,t("td",nt,[t("a",st,[s("无向图中连通分量的数目 🔒"),n(o)])]),et,t("td",at,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[ot]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[lt]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[ct]),_:1}),s(),it]),t("td",pt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[dt,t("td",ut,[t("a",rt,[s("棋盘上的战舰"),n(o)])]),_t,t("td",ht,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[ft]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[mt]),_:1}),s(),n(a,{to:"/tag/matrix.html"},{default:e(()=>[kt]),_:1})]),t("td",gt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[bt,t("td",vt,[t("a",yt,[s("不同岛屿的数量 🔒"),n(o)])]),qt,t("td",xt,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[wt]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[jt]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[Mt]),_:1}),s(),It]),t("td",Ct,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[Et,t("td",Lt,[t("a",Nt,[s("岛屿的最大面积"),n(o)])]),t("td",Ot,[n(a,{to:"/problem/0695.html"},{default:e(()=>[s("[✓]")]),_:1})]),t("td",St,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[Vt]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[Bt]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[Dt]),_:1}),s(),Ft]),t("td",Rt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[zt,t("td",At,[t("a",Gt,[s("统计子岛屿"),n(o)])]),Ht,t("td",Tt,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[Yt]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[Jt]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[Kt]),_:1}),s(),Pt]),t("td",Qt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[Ut,t("td",Wt,[t("a",Xt,[s("找到所有的农场组"),n(o)])]),Zt,t("td",$t,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[tn]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[nn]),_:1}),s(),n(a,{to:"/tag/array.html"},{default:e(()=>[sn]),_:1}),s(),en]),t("td",an,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[on,t("td",ln,[t("a",cn,[s("统计无向图中无法互相到达点对数"),n(o)])]),pn,t("td",dn,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[un]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[rn]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[_n]),_:1}),s(),hn]),t("td",fn,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[mn,t("td",kn,[t("a",gn,[s("网格图中鱼的最大数目"),n(o)])]),bn,t("td",vn,[n(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[yn]),_:1}),s(),n(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[qn]),_:1}),s(),n(a,{to:"/tag/union-find.html"},{default:e(()=>[xn]),_:1}),s(),wn]),t("td",jn,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const Ln=i(_,[["render",Mn],["__file","0200.html.vue"]]);export{Ln as default};
