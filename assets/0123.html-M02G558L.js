import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as _}from"./app-3dvbhwow.js";const h={},b=n("h1",{id:"_123-买卖股票的最佳时机-iii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_123-买卖股票的最佳时机-iii","aria-hidden":"true"},"#"),t(" 123. 买卖股票的最佳时机 III")],-1),g=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.</p><p>Find the maximum profit you can achieve. You may complete <strong>at most two transactions</strong>.</p><p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: prices = [3,3,5,0,0,3,1,4]</p><p>Output: 6</p><p>Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.</p><p>Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: prices = [1,2,3,4,5]</p><p>Output: 4</p><p>Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.</p><p>Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: prices = [7,6,4,3,1]</p><p>Output: 0</p><p>Explanation: In this case, no transaction is done, i.e. max profit = 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 10^5</code></li><li><code>0 &lt;= prices[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，它的第 <code>i</code> 个元素是一支给定的股票在第 <code>i</code> 天的价格。</p><p>设计一个算法来计算你所能获取的最大利润。你最多可以完成 <strong>两笔</strong> 交易。</p><p><strong>注意</strong>：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。</p><p><strong>示例 1:</strong></p><blockquote><p>输入：prices = [3,3,5,0,0,3,1,4]</p><p>输出：6</p><p>解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。</p><p>随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：prices = [1,2,3,4,5]</p><p>输出：4</p><p>解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。</p><p>注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。</p><p>因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：prices = [7,6,4,3,1]</p><p>输出：0</p><p>解释：在这个情况下, 没有交易完成, 所以最大利润为 0。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p>输入：prices = [1]</p><p>输出：0</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><strong>动态规划：</strong> 定义一个三维数组 <code>dp</code>，其中 <code>dp[i][j][0]</code> 表示截至第 <code>i</code> 天、最多进行 <code>j</code> 次交易、不持有股票时的最大利润， <code>dp[i][j][1]</code> 表示示截至第 <code>i</code> 天、最多进行 <code>j</code> 次交易、持有股票时的最大利润。</li></ol><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>状态 <code>j</code> 的定义并不是「<strong>已进行的交易次数</strong>」，而是「<strong>最大交易次数的上限限制</strong>」。如果确定今天进行一次交易，且要保证截至今天最大交易次数上限为 <code>j</code>，那么昨天的最大交易次数上限必须是 <code>j - 1</code>。</p></div><ol start="2"><li><p><strong>状态转移方程：</strong></p><ul><li><p><code>dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1] + prices[i])</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润加上今天卖出的利润的最大值。</p></li><li><p><code>dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润，或者前一天不持有股票的最大利润减去今天买入的利润的最大值，今天买入的话，前一天的交易次数上限要减一。</p></li><li><p>由于 <code>j</code> 的取值范围较小，可以直接把 <code>j = 1、2</code> 的情况全部列举出来也可以：</p><ul><li><code>dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])</code></li><li><code>dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])</code></li><li><code>dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])</code></li><li><code>dp[i][1][1] = max(dp[i-1][1][1], -prices[i])</code></li></ul></li></ul></li><li><p><strong>边界条件：</strong> 第一天（<code>i == 0</code>）时，<code>dp[0][j][0] = 0</code>，<code>dp[0][j][1] = -prices[0]</code>。</p></li><li><p><strong>初始化：</strong> 初始化利润为 0。</p></li><li><p><strong>返回最大利润：</strong> 最后返回 <code>dp[n - 1][2][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><ul><li><strong>时间复杂度</strong>: <code>O(n)</code> - 遍历整个二维数组，其中 n 是股票价格数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(n)</code> - 使用了一个 <code>2 * 3 * n</code> 的三维数组来存储中间状态。</li></ul><hr><h3 id="思路二-动态规划-状态压缩" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-状态压缩" aria-hidden="true">#</a> 思路二：动态规划-状态压缩</h3><ol><li><p><strong>状态定义</strong>：由于 <code>dp[i][...]</code> 只与和 <code>dp[i - 1][...]</code> 有关，且 <code>j</code> 只有两种情况，所以可将 <code>dp</code> 数组简化为四个状态：</p><ul><li><code>dp_i20</code>：截至第 i 天、最多交易两次、不持有股票的最大收益;</li><li><code>dp_i21</code>：截至第 i 天、最多交易两次、持有股票的最大收益;</li><li><code>dp_i10</code>：截至第 i 天、最多交易一次、不持有股票的最大收益;</li><li><code>dp_i11</code>：截至第 i 天、最多交易一次、持有股票的最大收益;</li></ul></li><li><p><strong>状态转移方程</strong>：</p><ul><li><code>dp_i20 = max(dp_i20, dp_i21 + prices[i])</code></li><li><code>dp_i21 = max(dp_i21, dp_i10 - prices[i])</code></li><li><code>dp_i10 = max(dp_i10, dp_i11 + prices[i])</code></li><li><code>dp_i11 = max(dp_i11, -prices[i])</code></li></ul></li><li><p><strong>遍历天数</strong>：遍历每一天的股票价格，更新四个状态的值。</p></li><li><p><strong>返回结果</strong>：返回最终的 <code>dp_i20</code> 值，即最大的利润。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，只需要遍历一次股票价格数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常数个额外的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',36),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"prices"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxProfit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"prices"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" prices"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("m "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"in"),t(" prices"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" m"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
				dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"-"),t("prices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" prices"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"-"),t(" prices"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"prices"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxProfit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"prices"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp_i20 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		dp_i21 `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),t(`
		dp_i10 `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		dp_i11 `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" price "),n("span",{class:"token keyword"},"of"),t(" prices"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp_i20 `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp_i20"),n("span",{class:"token punctuation"},","),t(" dp_i21 "),n("span",{class:"token operator"},"+"),t(" price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		dp_i21 `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp_i21"),n("span",{class:"token punctuation"},","),t(" dp_i10 "),n("span",{class:"token operator"},"-"),t(" price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		dp_i10 `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp_i10"),n("span",{class:"token punctuation"},","),t(" dp_i11 "),n("span",{class:"token operator"},"+"),t(" price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		dp_i11 `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("dp_i11"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"-"),t("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" dp_i20"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"121",-1),N=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机",-1),O={style:{"text-align":"center"}},M={style:{"text-align":"left"}},V=n("code",null,"数组",-1),B=n("code",null,"动态规划",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"122",-1),R=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 II",-1),F={style:{"text-align":"center"}},H={style:{"text-align":"left"}},S=n("code",null,"贪心",-1),D=n("code",null,"数组",-1),G=n("code",null,"动态规划",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"188",-1),X=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 IV",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"动态规划",-1),sn=n("td",{style:{"text-align":"center"}},"🔴",-1),en={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"689",-1),ln=n("td",{style:{"text-align":"left"}},"三个无重叠子数组的最大和",-1),pn=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},un=n("code",null,"数组",-1),dn=n("code",null,"动态规划",-1),kn=n("td",{style:{"text-align":"center"}},"🔴",-1),mn={style:{"text-align":"center"}},_n={href:"https://leetcode.cn/problems/maximum-sum-of-3-non-overlapping-subarrays",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"center"}},"2291",-1),gn=n("td",{style:{"text-align":"left"}},"最大股票收益 🔒",-1),fn=n("td",{style:{"text-align":"center"}},null,-1),yn={style:{"text-align":"left"}},xn=n("code",null,"数组",-1),vn=n("code",null,"动态规划",-1),wn=n("td",{style:{"text-align":"center"}},"🟠",-1),jn={style:{"text-align":"center"}},qn={href:"https://leetcode.cn/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"},In={href:"https://leetcode.com/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"},En=n("td",{style:{"text-align":"center"}},"2555",-1),An=n("td",{style:{"text-align":"left"}},"两个线段获得的最多奖品",-1),Cn=n("td",{style:{"text-align":"center"}},null,-1),Nn={style:{"text-align":"left"}},On=n("code",null,"数组",-1),Mn=n("code",null,"二分查找",-1),Vn=n("code",null,"滑动窗口",-1),Bn=n("td",{style:{"text-align":"center"}},"🟠",-1),Ln={style:{"text-align":"center"}},Tn={href:"https://leetcode.cn/problems/maximize-win-from-two-segments",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://leetcode.com/problems/maximize-win-from-two-segments",target:"_blank",rel:"noopener noreferrer"};function zn(Pn,Rn){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🔴 "),s(i,{color:"#ff334b"},{default:e(()=>[t("Hard")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",v,[w,s(o)])]),j,s(r,{id:"334",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:e(({value:l,isActive:p})=>[t("动态规划")]),title1:e(({value:l,isActive:p})=>[t("动态规划-状态压缩")]),tab0:e(({value:l,isActive:p})=>[q]),tab1:e(({value:l,isActive:p})=>[I]),_:1}),E,m(" prettier-ignore "),n("table",null,[A,n("tbody",null,[n("tr",null,[C,N,n("td",O,[s(a,{to:"/problem/0121.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",M,[s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[B]),_:1})]),L,n("td",T,[n("a",Y,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[P,R,n("td",F,[s(a,{to:"/problem/0122.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",H,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[S]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[G]),_:1})]),J,n("td",K,[n("a",Q,[t("🀄️"),s(o)]),t(),n("a",U,[t("🔗"),s(o)])])]),n("tr",null,[W,X,n("td",Z,[s(a,{to:"/problem/0188.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",$,[s(a,{to:"/tag/array.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[tn]),_:1})]),sn,n("td",en,[n("a",an,[t("🀄️"),s(o)]),t(),n("a",on,[t("🔗"),s(o)])])]),n("tr",null,[cn,ln,pn,n("td",rn,[s(a,{to:"/tag/array.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[dn]),_:1})]),kn,n("td",mn,[n("a",_n,[t("🀄️"),s(o)]),t(),n("a",hn,[t("🔗"),s(o)])])]),n("tr",null,[bn,gn,fn,n("td",yn,[s(a,{to:"/tag/array.html"},{default:e(()=>[xn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[vn]),_:1})]),wn,n("td",jn,[n("a",qn,[t("🀄️"),s(o)]),t(),n("a",In,[t("🔗"),s(o)])])]),n("tr",null,[En,An,Cn,n("td",Nn,[s(a,{to:"/tag/array.html"},{default:e(()=>[On]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[Mn]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[Vn]),_:1})]),Bn,n("td",Ln,[n("a",Tn,[t("🀄️"),s(o)]),t(),n("a",Yn,[t("🔗"),s(o)])])])])])])}const Hn=u(h,[["render",zn],["__file","0123.html.vue"]]);export{Hn as default};
