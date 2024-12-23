import{_ as l,r as a,o as i,c as r,a as n,b as e,d as s,w as o,e as d}from"./app-Kkp_66uf.js";const u={},k=n("h1",{id:"_860-柠檬水找零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_860-柠檬水找零","aria-hidden":"true"},"#"),e(" 860. 柠檬水找零")],-1),h=n("code",null,"贪心",-1),b=n("code",null,"数组",-1),m={href:"https://leetcode.cn/problems/lemonade-change",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/lemonade-change",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>At a lemonade stand, each lemonade costs <code>$5</code>. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a <code>$5</code>, <code>$10</code>, or <code>$20</code> bill. You must provide the correct change to each customer so that the net transaction is that the customer pays <code>$5</code>.</p><p>Note that you do not have any change in hand at first.</p><p>Given an integer array <code>bills</code> where <code>bills[i]</code> is the bill the <code>ith</code> customer pays, return <code>true</code> <em>if you can provide every customer with the correct change, or</em> <code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: bills = [5,5,5,10,20]</p><p>Output: true</p><p>Explanation:</p><p>From the first 3 customers, we collect three $5 bills in order.</p><p>From the fourth customer, we collect a $10 bill and give back a $5.</p><p>From the fifth customer, we give a $10 bill and a $5 bill.</p><p>Since all customers got correct change, we output true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: bills = [5,5,10,10,20]</p><p>Output: false</p><p>Explanation:</p><p>From the first two customers in order, we collect two $5 bills.</p><p>For the next two customers in order, we collect a $10 bill and give back a $5 bill.</p><p>For the last customer, we can not give the change of $15 back because we only have two $10 bills.</p><p>Since not every customer received the correct change, the answer is false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= bills.length &lt;= 10^5</code></li><li><code>bills[i]</code> is either <code>5</code>, <code>10</code>, or <code>20</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在柠檬水摊上，每一杯柠檬水的售价为 <code>5</code> 美元。顾客排队购买你的产品，（按账单 <code>bills</code> 支付的顺序）一次购买一杯。</p><p>每位顾客只买一杯柠檬水，然后向你付 <code>5</code> 美元、<code>10</code> 美元或 <code>20</code> 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 <code>5</code> 美元。</p><p>注意，一开始你手头没有任何零钱。</p><p>给你一个整数数组 <code>bills</code> ，其中 <code>bills[i]</code> 是第 <code>i</code> 位顾客付的账。如果你能给每位顾客正确找零，返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> bills = [5,5,5,10,20]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。</p><p>第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。</p><p>第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。</p><p>由于所有客户都得到了正确的找零，所以我们输出 true。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> bills = [5,5,10,10,20]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。</p><p>对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。</p><p>对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。</p><p>由于不是每位顾客都得到了正确的找零，所以答案是 false。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= bills.length &lt;= 10^5</code></li><li><code>bills[i]</code> 不是 <code>5</code> 就是 <code>10</code> 或是 <code>20</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过模拟顾客支付过程来解决。每位顾客支付 <code>5</code> 美元、<code>10</code> 美元或 <code>20</code> 美元，我们需要根据当前零钱的情况决定是否能找零。</p><ul><li>以用两个变量 <code>five</code> 和 <code>ten</code> 来记录手头有多少个 <code>5</code> 美元和 <code>10</code> 美元。</li><li>初始时，没有零钱。</li><li><strong>当顾客支付 <code>5</code> 美元时</strong>，不需要找零，只需将 <code>5</code> 美元添加到零钱中。</li><li><strong>当顾客支付 <code>10</code> 美元时</strong>，需要找 <code>5</code> 美元，如果没有足够的 <code>5</code> 美元，则返回 <code>false</code>。</li><li><strong>当顾客支付 <code>20</code> 美元时</strong>，需要找 <code>15</code> 美元，优先找 <code>10</code> 美元和 <code>5</code> 美元的组合。如果没有足够的 <code>10</code> 美元，则使用三个 <code>5</code> 美元找零。如果都不能找零，就返回 <code>false</code>。</li></ul><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度：</h3><ul><li>遍历一次 <code>bills</code> 数组，每次操作常数时间，所以时间复杂度是 O(n)，其中 <code>n</code> 是 <code>bills</code> 数组的长度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>bills</code> 数组的长度。遍历一次 <code>bills</code> 数组，每次操作常数时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">lemonadeChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bills</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> five <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		ten <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> bill <span class="token keyword">of</span> bills<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			five<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 没有足够的 5 美元找零</span>
			five<span class="token operator">--</span><span class="token punctuation">;</span>
			ten<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>bill <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 优先使用一个 10 美元和一个 5 美元</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>ten <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> five <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				ten<span class="token operator">--</span><span class="token punctuation">;</span>
				five<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>five <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				five <span class="token operator">-=</span> <span class="token number">3</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 无法找零</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 所有顾客都能正确找零</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function w(y,x){const p=a("font"),t=a("RouterLink"),c=a("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[e("🟢 "),s(p,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/greedy.html"},{default:o(()=>[h]),_:1}),e(),s(t,{to:"/tag/array.html"},{default:o(()=>[b]),_:1}),e("  🔗 "),n("a",m,[v,s(c)]),e(),n("a",g,[f,s(c)])]),_])}const q=l(u,[["render",w],["__file","0860.html.vue"]]);export{q as default};
