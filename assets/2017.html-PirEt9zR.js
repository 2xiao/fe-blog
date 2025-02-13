import{_ as r,r as c,o as i,c as l,a as n,b as t,d as s,w as o,f as d,e as u}from"./app-MXSjQbID.js";const g={},h=n("h1",{id:"_2017-网格游戏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2017-网格游戏","aria-hidden":"true"},"#"),t(" 2017. 网格游戏")],-1),m=n("code",null,"数组",-1),k=n("code",null,"矩阵",-1),b=n("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/grid-game",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/grid-game",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 2D array <code>grid</code> of size <code>2 x n</code>, where <code>grid[r][c]</code> represents the number of points at position <code>(r, c)</code> on the matrix. Two robots are playing a game on this matrix.</p><p>Both robots initially start at <code>(0, 0)</code> and want to reach <code>(1, n-1)</code>. Each robot may only move to the <strong>right</strong> (<code>(r, c)</code> to <code>(r, c + 1)</code>) or <strong>down</strong>(<code>(r, c)</code> to <code>(r + 1, c)</code>).</p><p>At the start of the game, the <strong>first</strong> robot moves from <code>(0, 0)</code> to <code>(1, n-1)</code>, collecting all the points from the cells on its path. For all cells <code>(r, c)</code> traversed on the path, <code>grid[r][c]</code> is set to <code>0</code>. Then, the <strong>second</strong> robot moves from <code>(0, 0)</code> to <code>(1, n-1)</code>, collecting the points on its path. Note that their paths may intersect with one another.</p><p>The <strong>first</strong> robot wants to <strong>minimize</strong> the number of points collected by the <strong>second</strong> robot. In contrast, the <strong>second</strong> robot wants to <strong>maximize</strong> the number of points it collects. If both robots play <strong>optimally</strong> , return <em>the<strong>number of points</strong> collected by the <strong>second</strong> robot.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,5,4],[1,5,1]]</p><p>Output: 4</p><p>Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.</p><p>The cells visited by the first robot are set to 0.</p><p>The second robot will collect 0 + 0 + 4 + 0 = 4 points.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[3,3,1],[8,5,2]]</p><p>Output: 4</p><p>Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.</p><p>The cells visited by the first robot are set to 0.</p><p>The second robot will collect 0 + 3 + 1 + 0 = 4 points.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,3,1,15],[1,3,3,1]]</p><p>Output: 7</p><p>Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.</p><p>The cells visited by the first robot are set to 0.</p><p>The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>grid.length == 2</code></li><li><code>n == grid[r].length</code></li><li><code>1 &lt;= n &lt;= 5 * 10^4</code></li><li><code>1 &lt;= grid[r][c] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的二维数组 <code>grid</code> ，数组大小为 <code>2 x n</code> ，其中 <code>grid[r][c]</code> 表示矩阵中 <code>(r, c)</code> 位置上的点数。现在有两个机器人正在矩阵上参与一场游戏。</p><p>两个机器人初始位置都是 <code>(0, 0)</code> ，目标位置是 <code>(1, n-1)</code> 。每个机器人只会 <strong>向右</strong> (<code>(r, c)</code> 到 <code>(r, c + 1)</code>) 或 <strong>向下</strong>(<code>(r, c)</code> 到 <code>(r + 1, c)</code>) 。</p><p>游戏开始，<strong>第一个</strong> 机器人从 <code>(0, 0)</code> 移动到 <code>(1, n-1)</code> ，并收集路径上单元格的全部点数。对于路径上所有单元格 <code>(r, c)</code> ，途经后 <code>grid[r][c]</code> 会重置为 <code>0</code> 。然后，<strong>第二个</strong> 机器人从 <code>(0, 0)</code> 移动到 <code>(1, n-1)</code> ，同样收集路径上单元的全部点数。注意，它们的路径可能会存在相交的部分。</p><p><strong>第一个</strong> 机器人想要打击竞争对手，使 <strong>第二个</strong> 机器人收集到的点数 <strong>最小化</strong> 。与此相对，<strong>第二个</strong> 机器人想要 <strong>最大化</strong> 自己收集到的点数。两个机器人都发挥出自己的 <strong>最佳水平</strong> 的前提下，返回 <strong>第二个</strong> 机器人收集到的 <strong>点数</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[2,5,4],[1,5,1]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 第一个机器人的最佳路径如红色所示，第二个机器人的最佳路径如蓝色所示。</p><p>第一个机器人访问过的单元格将会重置为 0 。</p><p>第二个机器人将会收集到 0 + 0 + 4 + 0 = 4 个点。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[3,3,1],[8,5,2]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 第一个机器人的最佳路径如红色所示，第二个机器人的最佳路径如蓝色所示。</p><p>第一个机器人访问过的单元格将会重置为 0 。</p><p>第二个机器人将会收集到 0 + 3 + 1 + 0 = 4 个点。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/08/a3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,3,1,15],[1,3,3,1]]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 第一个机器人的最佳路径如红色所示，第二个机器人的最佳路径如蓝色所示。</p><p>第一个机器人访问过的单元格将会重置为 0 。</p><p>第二个机器人将会收集到 0 + 1 + 3 + 3 + 0 = 7 个点。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>grid.length == 2</code></li><li><code>n == grid[r].length</code></li><li><code>1 &lt;= n &lt;= 5 * 10^4</code></li><li><code>1 &lt;= grid[r][c] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>玩家 1 选择路径后，玩家 2 需要选择一条与玩家 1 路径不重叠的路径。</p><p>玩家 2 的路径只能走玩家 1 路径的剩余部分（上行或下行），因此我们只需计算玩家 2 在这两种情况下的分数即可。</p><ol><li><p>使用前缀和计算两个方向的路径和：</p><ul><li><code>firstRowSum</code> 表示玩家 1 从当前列之后（包括当前列）向右的总和。</li><li><code>secondRowSum</code> 表示玩家 1 从当前列之前（不包括当前列）向左的总和。</li></ul></li><li><p>遍历每个列，假设玩家 1 切换路径的分割点为当前列 <code>i</code>，计算以下两种情况的分数：</p><ul><li>玩家 2 向右选择剩余的第一行路径分数（<code>firstRowSum</code>）。</li><li>玩家 2 向左选择第二行路径分数（<code>secondRowSum</code>）。</li></ul></li><li><p>对于每一列，玩家 2 的分数是 <code>max(firstRowSum, secondRowSum)</code>（即选择路径时的最坏情况），我们需要找到这种分数的最小值。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是列数，遍历一遍网格的列。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数级变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">gridGame</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> firstRowSum <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第一行总和</span>
	<span class="token keyword">let</span> secondRowSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 第二行初始累积和</span>
	<span class="token keyword">let</span> minSum <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 玩家 2 的最小可能分数</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		firstRowSum <span class="token operator">-=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 从第一行总和中减去当前列的值</span>
		minSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minSum<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>firstRowSum<span class="token punctuation">,</span> secondRowSum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 玩家 2 的最大分数（选择最优路径）</span>
		secondRowSum <span class="token operator">+=</span> grid<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 累加第二行的值</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> minSum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,41),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"2483",-1),R=n("td",{style:{"text-align":"left"}},"商店的最少代价",-1),T=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},E=n("code",null,"字符串",-1),z=n("code",null,"前缀和",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/minimum-penalty-for-a-shop",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/minimum-penalty-for-a-shop",target:"_blank",rel:"noopener noreferrer"};function O(V,B){const p=c("font"),e=c("RouterLink"),a=c("ExternalLinkIcon");return i(),l("div",null,[h,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:o(()=>[k]),_:1}),t(),s(e,{to:"/tag/prefix-sum.html"},{default:o(()=>[b]),_:1}),t("  🔗 "),n("a",f,[_,s(a)]),t(),n("a",v,[y,s(a)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[S,R,T,n("td",q,[s(e,{to:"/tag/string.html"},{default:o(()=>[E]),_:1}),t(),s(e,{to:"/tag/prefix-sum.html"},{default:o(()=>[z]),_:1})]),I,n("td",N,[n("a",C,[t("🀄️"),s(a)]),t(),n("a",L,[t("🔗"),s(a)])])])])])])}const M=r(g,[["render",O],["__file","2017.html.vue"]]);export{M as default};
