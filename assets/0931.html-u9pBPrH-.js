import{_ as i,r as p,o as l,c as u,a as n,b as a,d as s,w as t,f as r,e as d}from"./app-9CeBk-uV.js";const k={},m=n("h1",{id:"_931-下降路径最小和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_931-下降路径最小和","aria-hidden":"true"},"#"),a(" 931. 下降路径最小和")],-1),h=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),b=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/minimum-falling-path-sum",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-falling-path-sum",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>n x n</code> array of integers <code>matrix</code>, return <em>the <strong>minimum sum</strong> of any <strong>falling path</strong> through</em> <code>matrix</code>.</p><p>A <strong>falling path</strong> starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position <code>(row, col)</code> will be <code>(row + 1, col - 1)</code>, <code>(row + 1, col)</code>, or <code>(row + 1, col + 1)</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/03/failing1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]</p><p>Output: 13</p><p>Explanation: There are two falling paths with a minimum sum as shown.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/11/03/failing2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[-19,57],[-40,-5]]</p><p>Output: -59</p><p>Explanation: The falling path with a minimum sum is shown.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>n x n</code> 的 方形 整数数组 <code>matrix</code> ，请你找出并返回通过 <code>matrix</code> 的 <strong>下降路径</strong> 的 <strong>最小和</strong> 。</p><p><strong>下降路径</strong> 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置 <code>(row, col)</code> 的下一个元素应当是 <code>(row + 1, col - 1)</code>、<code>(row + 1, col)</code> 或者 <code>(row + 1, col + 1)</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个典型的动态规划问题。可以采用自底向上的方法，从矩阵的倒数第二行开始，逐行更新，直到第一行。</p><p>定义状态 <code>dp[i][j]</code> 为从第一行（<code>matrix[0][..]</code>）向下落，落到位置 <code>matrix[i][j]</code> 的最小路径和为 <code>dp[i][j]</code>。那么，<code>dp[i][j]</code> 的值可以通过考虑从 <code>dp[i-1][j-1]</code>，<code>dp[i-1][j]</code> 和 <code>dp[i-1][j+1]</code> 这三个路径和中，选择其中路径和最小的一个。</p><p>具体的状态转移方程为：</p><p><code>dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1])</code></p><p>最终，我们只需从 <code>dp</code> 数组的最后一行中找到最小的路径和，即为最终的答案：</p><p><code>return Math.min(...dp[m - 1]);</code></p><p>由于 <code>dp[i][j]</code> 只和 <code>dp[i - 1][...]</code> 有关，所以可以进一步优化空间复杂度，除了可以将 <code>dp</code> 数组降维以外，甚至可以不使用 <code>dp</code> 数组，直接原地修改 <code>matrix</code> 数组。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 为矩阵行数，<code>n</code> 为矩阵列数，需要遍历整个矩阵。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，原地修改矩阵。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minFallingPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 从倒数第二行开始逐行更新</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 考虑边界情况</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span>
					Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span>
					Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span>
					Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>
						matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>
						matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
					<span class="token punctuation">)</span> <span class="token operator">+</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回最后一行的最小路径和</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>matrix<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1289",-1),E=n("td",{style:{"text-align":"left"}},"下降路径最小和 II",-1),M=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"动态规划",-1),N=n("code",null,"矩阵",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),q={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/minimum-falling-path-sum-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-falling-path-sum-ii",target:"_blank",rel:"noopener noreferrer"};function S(T,z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),u("div",null,[m,n("p",null,[a("🟠 "),s(c,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),a("  🔗 "),n("a",v,[_,s(o)]),a(),n("a",f,[x,s(o)])]),y,r(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[w,E,M,n("td",I,[s(e,{to:"/tag/array.html"},{default:t(()=>[C]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[L]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[N]),_:1})]),V,n("td",q,[n("a",O,[a("🀄️"),s(o)]),a(),n("a",B,[a("🔗"),s(o)])])])])])])}const A=i(k,[["render",S],["__file","0931.html.vue"]]);export{A as default};
