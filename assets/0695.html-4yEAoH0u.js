import{_ as i,r as l,o as r,c as d,a as n,b as t,d as s,w as e,f as u,e as c}from"./app-XFeYdzZv.js";const k={},h=n("h1",{id:"_695-岛屿的最大面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_695-岛屿的最大面积","aria-hidden":"true"},"#"),t(" 695. 岛屿的最大面积")],-1),_=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),g=n("code",null,"并查集",-1),b=n("code",null,"数组",-1),f=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group of <code>1</code>&#39;s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.</p><p>The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.</p><p>Return _the maximum<strong>area</strong> of an island in _<code>grid</code>. If there is no island, return <code>0</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]</p><p>Output: 6</p><p>Explanation: The answer is not 11, because the island must be connected 4-directionally.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[0,0,0,0,0,0,0,0]]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个大小为 <code>m x n</code> 的二进制矩阵 <code>grid</code> 。</p><p><strong>岛屿</strong> 是由一些相邻的 <code>1</code> (代表土地) 构成的组合，这里的「相邻」要求两个 <code>1</code> 必须在 <strong>水平或者竖直的四个方向上</strong> 相邻。你可以假设 <code>grid</code> 的四个边缘都被 <code>0</code>（代表水）包围着。</p><p>岛屿的面积是岛上值为 <code>1</code> 的单元格的数目。</p><p>计算并返回 <code>grid</code> 中最大的岛屿面积。如果没有岛屿，则返回面积为 <code>0</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> grid = [[0,0,0,0,0,0,0,0]]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',24),q=c(`<p>遍历整个网格，并在每次找到一个陆地单元时，使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历所有相连的陆地单元，从而将整个岛屿标记为已访问。</p><ol><li>遍历网格：遍历每一个单元格，如果当前单元格是 <code>&#39;1&#39;</code>（陆地），则找到一个新的岛屿，计数器加一。</li><li>标记已访问：使用 DFS 从当前单元格开始，标记所有连通的陆地单元为 <code>&#39;0&#39;</code>（水），表示它们已被访问，并返回岛屿面积。</li><li>继续遍历：继续遍历剩余的单元格，直到整个网格被检查完。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是网格的行数，<code>n</code> 是网格的列数，每个格子最多会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，最坏情况下，递归的深度可能达到 <code>m * n</code>，因此递归调用栈的空间复杂度为 <code>O(m * n)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAreaOfIsland</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 从 (i, j) 开始，将与之相邻的陆地都变成海水</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超出索引边界</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// (i, j) 已经是海水了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 将 (i, j) 变成海水</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// // 淹没上下左右的陆地，并返回相邻岛屿面积</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token number">1</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历 grid</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 记录最大岛屿面积</span>
				res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"200",-1),O=n("td",{style:{"text-align":"left"}},"岛屿数量",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"深度优先搜索",-1),V=n("code",null,"广度优先搜索",-1),B=n("code",null,"并查集",-1),S=n("code",null,"2+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"419",-1),D=n("td",{style:{"text-align":"left"}},"棋盘上的战舰",-1),M=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},G=n("code",null,"深度优先搜索",-1),H=n("code",null,"数组",-1),J=n("code",null,"矩阵",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"463",-1),X=n("td",{style:{"text-align":"left"}},"岛屿的周长",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},nn=n("code",null,"深度优先搜索",-1),tn=n("code",null,"广度优先搜索",-1),sn=n("code",null,"数组",-1),en=n("code",null,"1+",-1),an=n("td",{style:{"text-align":"center"}},"🟢",-1),on={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},"1727",-1),rn=n("td",{style:{"text-align":"left"}},"重新排列后的最大子矩阵",-1),dn=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},kn=n("code",null,"贪心",-1),hn=n("code",null,"数组",-1),_n=n("code",null,"矩阵",-1),mn=n("code",null,"1+",-1),gn=n("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/largest-submatrix-with-rearrangements",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/largest-submatrix-with-rearrangements",target:"_blank",rel:"noopener noreferrer"},xn=n("td",{style:{"text-align":"center"}},"2101",-1),yn=n("td",{style:{"text-align":"left"}},"引爆最多的炸弹",-1),wn=n("td",{style:{"text-align":"center"}},null,-1),jn={style:{"text-align":"left"}},qn=n("code",null,"深度优先搜索",-1),En=n("code",null,"广度优先搜索",-1),In=n("code",null,"图",-1),On=n("code",null,"3+",-1),Cn=n("td",{style:{"text-align":"center"}},"🟠",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/detonate-the-maximum-bombs",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/detonate-the-maximum-bombs",target:"_blank",rel:"noopener noreferrer"};function Bn(Sn,zn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),d("div",null,[h,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/union-find.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",v,[x,s(o)]),t(),n("a",y,[w,s(o)])]),j,n("p",null,[t("这道题和 "),s(a,{to:"/problem/0200.html"},{default:e(()=>[t("第 200 题 岛屿数量")]),_:1}),t(" 的解题思路是一样的，只不过需要给 dfs 函数加一个返回值，记录岛屿的面积。")]),q,u(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[I,O,n("td",C,[s(a,{to:"/problem/0200.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",L,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/union-find.html"},{default:e(()=>[B]),_:1}),t(),S]),z,n("td",F,[n("a",R,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[A,D,M,n("td",Y,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[H]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[J]),_:1})]),K,n("td",P,[n("a",Q,[t("🀄️"),s(o)]),t(),n("a",U,[t("🔗"),s(o)])])]),n("tr",null,[W,X,n("td",Z,[s(a,{to:"/problem/0463.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",$,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[sn]),_:1}),t(),en]),an,n("td",on,[n("a",ln,[t("🀄️"),s(o)]),t(),n("a",cn,[t("🔗"),s(o)])])]),n("tr",null,[pn,rn,dn,n("td",un,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[kn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[hn]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[_n]),_:1}),t(),mn]),gn,n("td",bn,[n("a",fn,[t("🀄️"),s(o)]),t(),n("a",vn,[t("🔗"),s(o)])])]),n("tr",null,[xn,yn,wn,n("td",jn,[s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[qn]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[En]),_:1}),t(),s(a,{to:"/tag/graph.html"},{default:e(()=>[In]),_:1}),t(),On]),Cn,n("td",Ln,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])])])])])}const Rn=i(k,[["render",Bn],["__file","0695.html.vue"]]);export{Rn as default};
