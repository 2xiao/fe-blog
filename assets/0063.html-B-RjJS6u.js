import{_ as d,r as c,o as k,c as h,a as n,b as t,d as s,w as a,f as m,e as p}from"./app-Kkp_66uf.js";const b={},_=n("h1",{id:"_63-不同路径-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_63-不同路径-ii","aria-hidden":"true"},"#"),t(" 63. 不同路径 II")],-1),g=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),v=n("code",null,"矩阵",-1),y={href:"https://leetcode.cn/problems/unique-paths-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/unique-paths-ii",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),G=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> integer array <code>grid</code>. There is a robot initially located at the <strong>top-left corner</strong> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m - 1][n - 1]</code>). The robot can only move either down or right at any point in time.</p><p>An obstacle and space are marked as <code>1</code> or <code>0</code> respectively in <code>grid</code>. A path that the robot takes cannot include <strong>any</strong> square that is an obstacle.</p><p>Return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p><p>The testcases are generated so that the answer will be less than or equal to <code>2 * 10^9</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]</p><p>Output: 2</p><p>Explanation: There is one obstacle in the middle of the 3x3 grid above.</p><p>There are two ways to reach the bottom-right corner:</p><ol><li><p>Right -&gt; Right -&gt; Down -&gt; Down</p></li><li><p>Down -&gt; Down -&gt; Right -&gt; Right</p></li></ol></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: obstacleGrid = [[0,1],[0,0]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == obstacleGrid.length</code></li><li><code>n == obstacleGrid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>obstacleGrid[i][j]</code> is <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',16),q=n("li",null,[t("这一题比第 62 题增加的条件是地图中会出现障碍物，障碍物的处理方法是 "),n("code",null,"dp[i][j]=0"),t("。")],-1),A=n("li",null,"需要注意的一种情况是，起点就是障碍物，那么这种情况直接输出 0 。",-1),D=p('<table><thead><tr><th>❤️</th><th>1</th><th>1</th><th>1</th><th>1</th><th>1</th><th>1</th></tr></thead><tbody><tr><td>1</td><td>💩</td><td>1</td><td>2</td><td>💩</td><td>1</td><td>2</td></tr><tr><td>1</td><td>1</td><td>2</td><td>4</td><td>4</td><td>5</td><td>7</td></tr></tbody></table><h3 id="思路一-dp-压缩状态" tabindex="-1"><a class="header-anchor" href="#思路一-dp-压缩状态" aria-hidden="true">#</a> 思路一：DP-压缩状态</h3><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(m)</code>，使用了一个长度为 <code>m</code> 的 <code>arr</code> 数组来存储中间状态。</li></ul><h3 id="思路一-dp-压缩状态-1" tabindex="-1"><a class="header-anchor" href="#思路一-dp-压缩状态-1" aria-hidden="true">#</a> 思路一：DP-压缩状态</h3><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，由于<code>obstacleGrid[i][j]</code> 只与 <code>obstacleGrid[i-1][j]</code> 及 <code>obstacleGrid[i][j-1]</code> 有关，所以可以直接原地修改 <code>obstacleGrid</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',8),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 时间复杂度 O(nm)，空间复杂度 O(m)"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"path"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"inputArr"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 如果起点就是障碍物"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("inputArr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" inputArr"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" inputArr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 用0填充，因为现在有障碍物"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 第一列先写成1"),t(`
	arr`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" m"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("inputArr"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// 遇到障碍物arr[j]就变成0，这里包含了第一列的情况"),t(`
				arr`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				arr`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" arr"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},"["),t("m "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 时间复杂度 O(nm)，空间复杂度 O(1)"),t(`
`),n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"obstacleGrid"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"uniquePathsWithObstacles"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"obstacleGrid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" obstacleGrid"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},","),t(`
		n `),n("span",{class:"token operator"},"="),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" m"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 遇到障碍物 obstacleGrid[i][j] 就变成 0"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("obstacleGrid"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				obstacleGrid`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token comment"},"// 起点"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				obstacleGrid`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token comment"},"// 第一行"),t(`
			`),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				obstacleGrid`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token comment"},"// 第一列"),t(`
			`),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				obstacleGrid`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				obstacleGrid`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" obstacleGrid"),n("span",{class:"token punctuation"},"["),t("m "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),P=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"62",-1),R=n("td",{style:{"text-align":"left"}},"不同路径",-1),E={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"数学",-1),V=n("code",null,"动态规划",-1),B=n("code",null,"组合数学",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"980",-1),W=n("td",{style:{"text-align":"left"}},"不同路径 III",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"位运算",-1),Q=n("code",null,"数组",-1),U=n("code",null,"回溯",-1),X=n("code",null,"1+",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/unique-paths-iii",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/unique-paths-iii",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"2304",-1),an=n("td",{style:{"text-align":"left"}},"网格中的最小路径代价",-1),en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},cn=n("code",null,"数组",-1),ln=n("code",null,"动态规划",-1),pn=n("code",null,"矩阵",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},hn=n("td",{style:{"text-align":"center"}},"2435",-1),mn=n("td",{style:{"text-align":"left"}},"矩阵中和能被 K 整除的路径",-1),bn=n("td",{style:{"text-align":"center"}},null,-1),_n={style:{"text-align":"left"}},gn=n("code",null,"数组",-1),fn=n("code",null,"动态规划",-1),vn=n("code",null,"矩阵",-1),yn=n("td",{style:{"text-align":"center"}},"🔴",-1),xn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},jn={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"};function Gn(qn,An){const r=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return k(),h("div",null,[_,n("p",null,[t("🟠 "),s(r,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[v]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",w,[j,s(o)])]),G,n("ul",null,[n("li",null,[t("这一题是 "),s(e,{to:"/problem/0062.html"},{default:a(()=>[t("第 62 题")]),_:1}),t(" 的加强版。也是一道考察 DP 的简单题。")]),q,A]),D,s(u,{id:"232",data:[{id:"DP-压缩状态"},{id:"DP-更改原数组"}]},{title0:a(({value:l,isActive:i})=>[t("DP-压缩状态")]),title1:a(({value:l,isActive:i})=>[t("DP-更改原数组")]),tab0:a(({value:l,isActive:i})=>[O]),tab1:a(({value:l,isActive:i})=>[I]),_:1}),T,m(" prettier-ignore "),n("table",null,[P,n("tbody",null,[n("tr",null,[C,R,n("td",E,[s(e,{to:"/problem/0062.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",L,[s(e,{to:"/tag/math.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[V]),_:1}),t(),s(e,{to:"/tag/combinatorics.html"},{default:a(()=>[B]),_:1})]),z,n("td",S,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",K,[t("🔗"),s(o)])])]),n("tr",null,[M,W,Y,n("td",H,[s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[J]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Q]),_:1}),t(),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[U]),_:1}),t(),X]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])]),n("tr",null,[sn,an,en,n("td",on,[s(e,{to:"/tag/array.html"},{default:a(()=>[cn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[ln]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[pn]),_:1})]),rn,n("td",un,[n("a",dn,[t("🀄️"),s(o)]),t(),n("a",kn,[t("🔗"),s(o)])])]),n("tr",null,[hn,mn,bn,n("td",_n,[s(e,{to:"/tag/array.html"},{default:a(()=>[gn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[fn]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[vn]),_:1})]),yn,n("td",xn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",jn,[t("🔗"),s(o)])])])])])])}const On=d(b,[["render",Gn],["__file","0063.html.vue"]]);export{On as default};
