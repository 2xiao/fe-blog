import{_ as u,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as m,e as _}from"./app-XFeYdzZv.js";const h={},b=t("h1",{id:"_122-买卖股票的最佳时机-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_122-买卖股票的最佳时机-ii","aria-hidden":"true"},"#"),n(" 122. 买卖股票的最佳时机 II")],-1),g=t("code",null,"贪心",-1),f=t("code",null,"数组",-1),y=t("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),I=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.</p><p>On each day, you may decide to buy and/or sell the stock. You can only hold <strong>at most one</strong> share of the stock at any time. However, you can buy it then immediately sell it on the <strong>same day</strong>.</p><p>Find and return <em>the <strong>maximum</strong> profit you can achieve</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: prices = [7,1,5,3,6,4]</p><p>Output: 7</p><p>Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.</p><p>Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.</p><p>Total profit is 4 + 3 = 7.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: prices = [1,2,3,4,5]</p><p>Output: 4</p><p>Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.</p><p>Total profit is 4.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: prices = [7,6,4,3,1]</p><p>Output: 0</p><p>Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 3 * 10^4</code></li><li><code>0 &lt;= prices[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>prices</code> ，其中 <code>prices[i]</code> 表示某支股票第 <code>i</code> 天的价格。</p><p>在每一天，你可以决定是否购买和/或出售股票。你在任何时候 <strong>最多</strong> 只能持有 <strong>一股</strong> 股票。你也可以先购买，然后在 <strong>同一天</strong> 出售。</p><p>返回 <em>你能获得的 <strong>最大</strong> 利润</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：prices = [7,1,5,3,6,4]</p><p>输出：7</p><p>解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。</p><p>随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。</p><p>总利润为 4 + 3 = 7 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：prices = [1,2,3,4,5]</p><p>输出：4</p><p>解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。</p><p>总利润为 4 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：prices = [7,6,4,3,1]</p><p>输出：0</p><p>解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p><strong>动态规划：</strong> 定义一个二维数组 <code>dp</code>，其中 <code>dp[i][0]</code> 表示第 <code>i</code> 天不持有股票时的最大利润， <code>dp[i][1]</code> 表示第 <code>i</code> 天持有股票时的最大利润。</p></li><li><p><strong>状态转移方程：</strong></p><ul><li><code>dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润加上今天卖出的利润的最大值。</li><li><code>dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润，或者前一天不持有股票的最大利润减去今天买入的利润的最大值。</li></ul></li><li><p><strong>边界条件：</strong> 第一天（<code>i == 0</code>）时，<code>dp[0][0] = 0</code>，<code>dp[0][1] = -prices[0]</code>。</p></li><li><p><strong>初始化：</strong> 初始化利润为 0。</p></li><li><p><strong>返回最大利润：</strong> 最后返回 <code>dp[n - 1][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是股票价格数组的长度, 遍历了整个数组，</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个 <code>2 * n</code> 的二维数组来存储中间状态。</li></ul><hr><h3 id="思路二-动态规划-状态压缩" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-状态压缩" aria-hidden="true">#</a> 思路二：动态规划-状态压缩</h3><p>根据上面的代码可以发现，<code>dp[i][...]</code> 只与 <code>dp[i - 1][0]</code>、<code>dp[i - 1][1]</code> 有关。</p><p>因此不需要使用整个 <code>dp</code> 数组，只需用两个变量储存这两个状态就足够了，这样可以把空间复杂度降到 <code>O(1)</code>：</p><ul><li><code>max_profit</code> 代表前一天不持有股票的最大利润，即 <code>dp[i - 1][0]</code></li><li><code>min_cost</code> 代表前一天持有股票的最大利润，即 <code>dp[i - 1][1]</code></li></ul><ol><li><p><strong>遍历数组：</strong> 从头到尾遍历股票价格数组。</p></li><li><p><strong>动态规划：</strong> 在遍历的过程中，根绝动态规划公式，记录当前位置的最大利润，并更新变量。</p></li><li><p><strong>返回最大利润：</strong> 遍历完成后，返回最大利润 <code>max_profit</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是股票价格数组的长度, 遍历了整个数组，</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个变量来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"prices"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxProfit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" prices"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" dp "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),n("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"map"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"in"),n(" prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
			dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"-"),n("prices"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"continue"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+"),n(" prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		dp`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" dp"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"-"),n(" prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" dp"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"prices"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"maxProfit"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"prices"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" prices"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" max_profit "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" min_cost "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token operator"},"-"),n("prices"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" temp_0 "),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("max_profit"),t("span",{class:"token punctuation"},","),n(" min_cost "),t("span",{class:"token operator"},"+"),n(" prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" min_cost "),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("min_cost"),t("span",{class:"token punctuation"},","),n(" max_profit "),t("span",{class:"token operator"},"-"),n(" prices"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		max_profit `),t("span",{class:"token operator"},"="),n(" temp_0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" max_profit"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),T=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"121",-1),A=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机",-1),V={style:{"text-align":"center"}},B={style:{"text-align":"left"}},L=t("code",null,"数组",-1),M=t("code",null,"动态规划",-1),N=t("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"123",-1),H=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 III",-1),S={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=t("code",null,"数组",-1),G=t("code",null,"动态规划",-1),J=t("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},"188",-1),X=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 IV",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},tt=t("code",null,"数组",-1),nt=t("code",null,"动态规划",-1),et=t("td",{style:{"text-align":"center"}},"🔴",-1),st={style:{"text-align":"center"}},at={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},"309",-1),lt=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机含冷冻期",-1),pt={style:{"text-align":"center"}},it={style:{"text-align":"left"}},rt=t("code",null,"数组",-1),ut=t("code",null,"动态规划",-1),dt=t("td",{style:{"text-align":"center"}},"🟠",-1),kt={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"714",-1),bt=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机含手续费",-1),gt={style:{"text-align":"center"}},ft={style:{"text-align":"left"}},yt=t("code",null,"贪心",-1),xt=t("code",null,"数组",-1),vt=t("code",null,"动态规划",-1),wt=t("td",{style:{"text-align":"center"}},"🟠",-1),qt={style:{"text-align":"center"}},It={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee",target:"_blank",rel:"noopener noreferrer"},Ot=t("td",{style:{"text-align":"center"}},"2291",-1),Ct=t("td",{style:{"text-align":"left"}},"最大股票收益 🔒",-1),Tt=t("td",{style:{"text-align":"center"}},null,-1),jt={style:{"text-align":"left"}},At=t("code",null,"数组",-1),Vt=t("code",null,"动态规划",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Lt={style:{"text-align":"center"}},Mt={href:"https://leetcode.cn/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"};function Pt(Rt,Yt){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[b,t("p",null,[n("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",x,[v,e(o)]),n(),t("a",w,[q,e(o)])]),I,e(r,{id:"261",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:s(({value:l,isActive:p})=>[n("动态规划")]),title1:s(({value:l,isActive:p})=>[n("动态规划-状态压缩")]),tab0:s(({value:l,isActive:p})=>[E]),tab1:s(({value:l,isActive:p})=>[O]),_:1}),C,m(" prettier-ignore "),t("table",null,[T,t("tbody",null,[t("tr",null,[j,A,t("td",V,[e(a,{to:"/problem/0121.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",B,[e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[M]),_:1})]),N,t("td",P,[t("a",R,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])]),t("tr",null,[F,H,t("td",S,[e(a,{to:"/problem/0123.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",z,[e(a,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[G]),_:1})]),J,t("td",K,[t("a",Q,[n("🀄️"),e(o)]),n(),t("a",U,[n("🔗"),e(o)])])]),t("tr",null,[W,X,t("td",Z,[e(a,{to:"/problem/0188.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",$,[e(a,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[nt]),_:1})]),et,t("td",st,[t("a",at,[n("🀄️"),e(o)]),n(),t("a",ot,[n("🔗"),e(o)])])]),t("tr",null,[ct,lt,t("td",pt,[e(a,{to:"/problem/0309.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",it,[e(a,{to:"/tag/array.html"},{default:s(()=>[rt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ut]),_:1})]),dt,t("td",kt,[t("a",mt,[n("🀄️"),e(o)]),n(),t("a",_t,[n("🔗"),e(o)])])]),t("tr",null,[ht,bt,t("td",gt,[e(a,{to:"/problem/0714.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",ft,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[yt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[vt]),_:1})]),wt,t("td",qt,[t("a",It,[n("🀄️"),e(o)]),n(),t("a",Et,[n("🔗"),e(o)])])]),t("tr",null,[Ot,Ct,Tt,t("td",jt,[e(a,{to:"/tag/array.html"},{default:s(()=>[At]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Vt]),_:1})]),Bt,t("td",Lt,[t("a",Mt,[n("🀄️"),e(o)]),n(),t("a",Nt,[n("🔗"),e(o)])])])])])])}const Ht=u(h,[["render",Pt],["__file","0122.html.vue"]]);export{Ht as default};
