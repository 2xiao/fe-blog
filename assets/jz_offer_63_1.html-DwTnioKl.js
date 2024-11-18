import{_ as k,r as e,o as d,c as m,a as n,b as s,d as t,w as a,e as l}from"./app-5LzGvT4H.js";const b={},h=n("h1",{id:"_63-股票的最大利润",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_63-股票的最大利润","aria-hidden":"true"},"#"),s(" 63. 股票的最大利润")],-1),_=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/gu-piao-de-zui-da-li-run-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),w=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>数组 <code>prices</code> 记录了某芯片近期的交易价格，其中 <code>prices[i]</code> 表示的 <code>i</code> 天该芯片的价格。你只能选择 <strong>某一天</strong> 买入芯片，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该芯片。请设计一个算法计算并返回你从这笔交易中能获取的最大利润。</p><p>如果你不能获取任何利润，返回 <code>0</code>。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：prices = [3, 6, 2, 9, 8, 5]</p><p>输出：7</p><p>解释：在第 3 天（芯片价格 = 2）买入，在第 4 天（芯片价格 = 9）卖出，最大利润 = 9 - 2 = 7。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：prices = [8, 12, 15, 7, 3, 10]</p><p>输出：7</p><p>解释：在第 5 天（芯片价格 = 3）买入，在第 6 天（芯片价格 = 10）卖出，最大利润 = 10 - 3 = 7。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= prices.length &lt;= 10^5</code></li><li><code>0 &lt;= prices[i] &lt;= 10^4</code></li></ul>',9),x={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),j=l('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p>**动态规划：**定义一个二维数组 <code>dp</code>，其中 <code>dp[i][0]</code> 表示第 <code>i</code> 天不持有股票时的最大利润， <code>dp[i][1]</code> 表示第 <code>i</code> 天持有股票时的最大利润。</p></li><li><p><strong>状态转移方程：</strong></p><ul><li><code>dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润加上今天卖出的利润的最大值。</li><li><code>dp[i][1] = max(dp[i-1][1], -prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润，或者前一天不持有股票的最大利润减去今天买入的利润的最大值。由于题目规定只能买入一次，所以前一天不持有股票的最大利润为 0。</li></ul></li><li><p>**边界条件：**第一天（<code>i == 0</code>）时，<code>dp[0][0] = 0</code>，<code>dp[0][1] = -prices[0]</code>。</p></li><li><p>**初始化：**初始化利润为 0。</p></li><li><p>**返回最大利润：**最后返回 <code>dp[n - 1][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历整个二维数组，其中 <code>n</code> 是股票价格数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个 <code>2 * n</code> 的二维数组来存储中间状态。</li></ul><hr><h3 id="思路二-动态规划-状态压缩" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-状态压缩" aria-hidden="true">#</a> 思路二：动态规划-状态压缩</h3><p>根据上面的代码可以发现，<code>dp[i][...]</code> 只与 <code>dp[i - 1][0]</code>、<code>dp[i - 1][1]</code> 有关。</p><p>因此不需要使用整个 <code>dp</code> 数组，只需用两个变量储存这两个状态就足够了，这样可以把空间复杂度降到 <code>O(1)</code>：</p><ul><li><code>min_price</code> 记录当前位置之前的最低股价</li><li><code>max_profit</code> 记录最大利润。</li></ul><ol><li><p><strong>遍历数组：</strong> 从头到尾遍历股票价格数组。</p></li><li><p><strong>维护最低价格：</strong> 在遍历的过程中，维护一个变量，记录当前位置之前的最低股价。</p></li><li><p><strong>更新最大利润：</strong> 对于每一天，计算当前股价与最低价格的差值，如果大于之前的最大利润，更新最大利润。</p></li><li><p><strong>返回最大利润：</strong> 遍历完成后，返回最大利润。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code> - 遍历整个二维数组，其中 n 是股票价格数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(1)</code> - 使用了常数个变量来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',14),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"prices"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"bestTiming"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"prices"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" prices"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
			dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),s("prices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"continue"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" prices"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"-"),s("prices"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"prices"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"bestTiming"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"prices"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" min_price "),n("span",{class:"token operator"},"="),s(" prices"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" max_profit "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" price "),n("span",{class:"token keyword"},"of"),s(" prices"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		min_price `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("min_price"),n("span",{class:"token punctuation"},","),s(" price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		max_profit `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("max_profit"),n("span",{class:"token punctuation"},","),s(" price "),n("span",{class:"token operator"},"-"),s(" min_price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" max_profit"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(M,O){const i=e("font"),o=e("RouterLink"),u=e("ExternalLinkIcon"),r=e("CodeTabs");return d(),m("div",null,[h,n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",f,[g,t(u)])]),w,n("div",x,[y,n("p",null,[s("本题与 LeetCode "),t(o,{to:"/problem/0121.html"},{default:a(()=>[s("第 121 题")]),_:1}),s(" 相同。")])]),j,t(r,{id:"185",data:[{id:"动态规划"},{id:"动态规划-状态压缩"}]},{title0:a(({value:c,isActive:p})=>[s("动态规划")]),title1:a(({value:c,isActive:p})=>[s("动态规划-状态压缩")]),tab0:a(({value:c,isActive:p})=>[A]),tab1:a(({value:c,isActive:p})=>[C]),_:1})])}const q=k(b,[["render",L],["__file","jz_offer_63_1.html.vue"]]);export{q as default};
