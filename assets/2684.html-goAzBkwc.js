import{_ as r,r as o,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-OX-nYmHS.js";const g={},b=n("h1",{id:"_2684-矩阵中移动的最大次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2684-矩阵中移动的最大次数","aria-hidden":"true"},"#"),s(" 2684. 矩阵中移动的最大次数")],-1),h=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),f=n("code",null,"矩阵",-1),w={href:"https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/maximum-number-of-moves-in-a-grid",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> <code>m x n</code> matrix <code>grid</code> consisting of <strong>positive</strong> integers.</p><p>You can start at <strong>any</strong> cell in the first column of the matrix, and traverse the grid in the following way:</p><ul><li>From a cell <code>(row, col)</code>, you can move to any of the cells: <code>(row - 1, col + 1)</code>, <code>(row, col + 1)</code> and <code>(row + 1, col + 1)</code> such that the value of the cell you move to, should be <strong>strictly</strong> bigger than the value of the current cell.</li></ul><p>Return <em>the <strong>maximum</strong> number of <strong>moves</strong> that you can perform.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/04/11/yetgriddrawio-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]</p><p>Output: 3</p><p>Explanation: We can start at the cell (0, 0) and make the following moves:</p><ul><li>(0, 0) -&gt; (0, 1).</li><li>(0, 1) -&gt; (1, 2).</li><li>(1, 2) -&gt; (2, 3).</li></ul><p>It can be shown that it is the maximum number of moves that can be made.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2023/04/12/yetgrid4drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong> grid = [[3,2,4],[2,1,9],[1,1,7]]</p><p>Output: 0</p><p>Explanation: Starting from any cell in the first column we cannot perform any moves.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>2 &lt;= m, n &lt;= 1000</code></li><li><code>4 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= grid[i][j] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始、大小为 <code>m x n</code> 的矩阵 <code>grid</code> ，矩阵由若干 <strong>正</strong> 整数组成。</p><p>你可以从矩阵第一列中的 <strong>任一</strong> 单元格出发，按以下方式遍历 <code>grid</code> ：</p><ul><li>从单元格 <code>(row, col)</code> 可以移动到 <code>(row - 1, col + 1)</code>、<code>(row, col + 1)</code> 和 <code>(row + 1, col + 1)</code> 三个单元格中任一满足值 <strong>严格</strong> 大于当前单元格的单元格。</li></ul><p>返回你在矩阵中能够 <strong>移动</strong> 的 <strong>最大</strong> 次数。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/04/11/yetgriddrawio-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 可以从单元格 (0, 0) 开始并且按下面的路径移动：</p><ul><li>(0, 0) -&gt; (0, 1).</li><li>(0, 1) -&gt; (1, 2).</li><li>(1, 2) -&gt; (2, 3).</li></ul><p>可以证明这是能够移动的最大次数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2023/04/12/yetgrid4drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong> grid = [[3,2,4],[2,1,9],[1,1,7]]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 从第一列的任一单元格开始都无法移动。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>2 &lt;= m, n &lt;= 1000</code></li><li><code>4 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= grid[i][j] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来计算从矩阵第一列的任一单元格出发，能够移动的最大次数。</p><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p><strong>初始化状态</strong>： 创建一个 <code>dp</code> 数组，其中 <code>dp[i][j]</code> 表示从单元格 <code>(i, j)</code> 开始能够移动的最大次数。初始时，所有单元格的最大移动次数都设为 <code>0</code>，因为矩阵的最后一列没有后续的单元格可移动，移动次数就是 <code>0</code>。</p></li><li><p><strong>倒序遍历列</strong>：</p><p>从矩阵的倒数第二列开始遍历，直到第一列。在每一列中，我们都要计算从这一列每个单元格可以向右移动到下一列的次数。</p></li><li><p><strong>检查可移动条件</strong>：</p><ul><li>对于每个单元格 <code>(i, j)</code>，检查以下三个方向是否满足移动条件： <ul><li>移动到上右 <code>(i - 1, j + 1)</code>，如果 <code>i &gt; 0</code> 并且 <code>grid[i][j] &lt; grid[i - 1][j + 1]</code>，则可以移动，更新移动次数。</li><li>移动到右 <code>(i, j + 1)</code>，如果 <code>grid[i][j] &lt; grid[i][j + 1]</code>，则可以移动，更新移动次数。</li><li>移动到下右 <code>(i + 1, j + 1)</code>，如果 <code>i &lt; m - 1</code> 并且 <code>grid[i][j] &lt; grid[i + 1][j + 1]</code>，则可以移动，更新移动次数。</li></ul></li></ul></li><li><p><strong>获取结果</strong>：</p><ul><li>最后， <code>dp[i][0]</code> 中存储的就是从第一列任一单元格出发，能够移动的最大次数，从中获取最大的移动次数，作为结果返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code>、<code>n</code> 分别是矩阵的行数和列数，需要遍历整个矩阵。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，用于存储 <code>dp</code> 数组。</li></ul><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><ol><li><p><strong>初始化状态</strong>： 使用一个一维数组 <code>dp</code>，长度为 <code>m</code>，表示从每一行的某一列出发，能够到达的最大移动次数。最开始，<code>dp[i]</code> 表示从最后一列的第 <code>i</code> 行出发时的移动次数，因为没有后续的单元格可移动，初始值为 <code>0</code>。</p></li><li><p><strong>倒序遍历列</strong>：</p><p>从矩阵的倒数第二列开始遍历，直到第一列。在每一列中，我们都要计算从这一列每个单元格可以向右移动到下一列的次数。</p></li><li><p><strong>检查可移动条件</strong>：</p><ul><li>对于每个单元格 <code>(i, j)</code>，检查以下三个方向是否满足移动条件： <ul><li>移动到上右 <code>(i - 1, j + 1)</code>，如果 <code>i &gt; 0</code> 并且 <code>grid[i][j] &lt; grid[i - 1][j + 1]</code>，则可以移动，更新移动次数。</li><li>移动到右 <code>(i, j + 1)</code>，如果 <code>grid[i][j] &lt; grid[i][j + 1]</code>，则可以移动，更新移动次数。</li><li>移动到下右 <code>(i + 1, j + 1)</code>，如果 <code>i &lt; m - 1</code> 并且 <code>grid[i][j] &lt; grid[i + 1][j + 1]</code>，则可以移动，更新移动次数。</li></ul></li></ul></li><li><p><strong>更新状态数组</strong>：</p><ul><li>因为后续计算还依赖下一列的移动次数，所以需要通过临时数组 <code>newDp</code> 存储当前列的移动次数，在遍历完当前列后，更新 <code>dp</code> 为 <code>newDp</code>。</li></ul></li><li><p><strong>获取结果</strong>：</p><ul><li>最后， <code>dp</code> 数组中存储的就是从第一列任一单元格出发，能够移动的最大次数，从 <code>dp</code> 数组中获取最大的移动次数，作为结果返回。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code>、<code>n</code> 分别是矩阵的行数和列数，需要遍历整个矩阵。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，只需要一个一维数组 <code>dp</code> 存储状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"grid"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maxMoves"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},","),s(`
		n `),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 创建 dp 数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 倒序遍历列"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 检查上右、右、下右三个方向"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" m "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 获取结果"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" maxMoves "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		maxMoves `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("maxMoves"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" maxMoves"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"grid"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maxMoves"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},","),s(`
		n `),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 初始化 dp 数组"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 记录当前列的 dp 数组"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" newDp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 当前单元格的移动次数"),s(`
			`),n("span",{class:"token keyword"},"let"),s(" moves "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token comment"},"// 检查三个可移动方向"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				moves `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("moves"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				moves `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("moves"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" m "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				moves `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("moves"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"// 更新当前列的移动次数"),s(`
			newDp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("moves"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 更新 dp 数组"),s(`
		dp `),n("span",{class:"token operator"},"="),s(" newDp"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 返回最大的移动次数"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("dp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(E,C){const i=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon"),u=o("CodeTabs");return k(),d("div",null,[b,n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",w,[y,t(l)]),s(),n("a",j,[_,t(l)])]),x,t(u,{id:"381",data:[{id:"动态规划"},{id:"压缩状态的动态规划"}]},{title0:a(({value:c,isActive:p})=>[s("动态规划")]),title1:a(({value:c,isActive:p})=>[s("压缩状态的动态规划")]),tab0:a(({value:c,isActive:p})=>[M]),tab1:a(({value:c,isActive:p})=>[q]),_:1})])}const D=r(g,[["render",A],["__file","2684.html.vue"]]);export{D as default};
