import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-9CeBk-uV.js";const k={},m=n("h1",{id:"_714-买卖股票的最佳时机含手续费",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_714-买卖股票的最佳时机含手续费","aria-hidden":"true"},"#"),s(" 714. 买卖股票的最佳时机含手续费")],-1),h=n("code",null,"贪心",-1),b=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day, and an integer <code>fee</code> representing a transaction fee.</p><p>Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.</p><p><strong>Note:</strong></p><ul><li>You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</li><li>The transaction fee is only charged once for each stock purchase and sale.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: prices = [1,3,2,8,4,9], fee = 2</p><p>Output: 8</p><p>Explanation: The maximum profit can be achieved by:</p><ul><li>Buying at prices[0] = 1</li><li>Selling at prices[3] = 8</li><li>Buying at prices[4] = 4</li><li>Selling at prices[5] = 9</li></ul><p>The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: prices = [1,3,7,5,10,3], fee = 3</p><p>Output: 6</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 5 * 10^4</code></li><li><code>1 &lt;= prices[i] &lt; 5 * 10^4</code></li><li><code>0 &lt;= fee &lt; 5 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>prices</code>，其中 <code>prices[i]</code> 表示第 <code>i</code> 天的股票价格 ；整数 <code>fee</code> 代表了交易股票的手续费用。</p><p>你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。</p><p>返回获得利润的最大值。</p><p><strong>注意</strong>：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：prices = [1, 3, 2, 8, 4, 9], fee = 2</p><p>输出：8</p><p>解释：能够达到的最大利润:</p><p>在此处买入 prices[0] = 1</p><p>在此处卖出 prices[3] = 8</p><p>在此处买入 prices[4] = 4</p><p>在此处卖出 prices[5] = 9</p><p>总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：prices = [1,3,7,5,10,3], fee = 3</p><p>输出：6</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>动态规划：</strong> 定义一个二维数组 <code>dp</code>，其中 <code>dp[i][0]</code> 表示第 <code>i</code> 天不持有股票时的最大利润， <code>dp[i][1]</code> 表示第 <code>i</code> 天持有股票时的最大利润。</p></li><li><p><strong>状态转移方程：</strong></p><ul><li><code>dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润，或者前一天持有股票的最大利润 加上今天卖出的利润 减去手续费的最大值。</li><li><code>dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润，或者之前两天不持有股票的最大利润减去今天买入的利润的最大值。</li></ul></li><li><p><strong>边界条件：</strong></p><ul><li>第一天（<code>i == 0</code>）时，<code>dp[0][0] = 0</code>，<code>dp[0][1] = -prices[0]</code>。</li></ul></li><li><p><strong>初始化：</strong> 初始化利润为 0。</p></li><li><p><strong>返回最大利润：</strong> 最后返回 <code>dp[n - 1][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><ul><li><strong>时间复杂度</strong>: <code>O(n)</code> - 遍历整个二维数组，其中 n 是股票价格数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(n)</code> - 使用了一个 <code>2 * n</code> 的二维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">fee</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prices<span class="token punctuation">,</span> fee</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> fee<span class="token punctuation">)</span><span class="token punctuation">;</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"122",-1),E=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 II",-1),I={style:{"text-align":"center"}},N={style:{"text-align":"left"}},B=n("code",null,"贪心",-1),C=n("code",null,"数组",-1),L=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"};function M(S,Y){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,a(o)]),s(),n("a",y,[v,a(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",I,[a(e,{to:"/problem/0122.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",N,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[L]),_:1})]),V,n("td",O,[n("a",T,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])])])])])}const R=l(k,[["render",M],["__file","0714.html.vue"]]);export{R as default};
