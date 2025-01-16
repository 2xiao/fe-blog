import{_ as l,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_99-最小路径之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_99-最小路径之和","aria-hidden":"true"},"#"),s(" 99. 最小路径之和")],-1),m=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),v=n("code",null,"矩阵",-1),h={href:"https://leetcode.cn/problems/0i0mDW",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个包含非负整数的 <code>m x n</code> 网格 <code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p><p><strong>说明：</strong> 一个机器人每次只能向下或者向右移动一步。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,3,1],[1,5,1],[4,2,1]]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 因为路径 1-&gt;3-&gt;1-&gt;1-&gt;1 的总和最小。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> grid = [[1,2,3],[4,5,6]]</p><p><strong>输出：</strong> 12</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>0 &lt;= grid[i][j] &lt;= 100</code></li></ul>',10),f={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),w=e(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>动态规划</strong>：使用动态规划来解决问题。定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示从 <code>(0, 0)</code> 到 <code>(i, j)</code> 的最小路径和。</p></li><li><p><strong>状态转移方程</strong>：可以从左上角到达 <code>(i, j)</code> 的路径有两条：从 <code>(i-1, j)</code> 向下移动和从 <code>(i, j-1)</code> 向右移动。因此，状态转移方程为 <code>dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</code>。</p></li><li><p><strong>边界条件</strong>：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径和等于前一个格子的路径和加上当前格子的值。即 <code>dp[0][j] = dp[0][j-1] + grid[0][j]</code> 和 <code>dp[i][0] = dp[i-1][0] + grid[i][0]</code>。</p></li><li><p><strong>初始化</strong>：初始化第一行和第一列的路径和。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，由于<code>dp[i][j]</code> 只与 <code>dp[i-1][j]</code> 及 <code>dp[i][j-1]</code> 有关，所以可以直接原地修改 <code>grid</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理左上角的边界情况</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一行的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一列的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> grid<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(x,I){const c=o("font"),p=o("RouterLink"),i=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s(),a(p,{to:"/tag/matrix.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(i)])]),_,n("div",f,[j,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0064.html"},{default:t(()=>[s("第 64 题")]),_:1}),s(" 相同。")])]),w])}const q=l(d,[["render",y],["__file","jz_offer_II_099.html.vue"]]);export{q as default};
