import{_ as i,r as e,o as r,c as u,a as n,b as s,d as a,w as t,e as c}from"./app-JOMdB8bl.js";const d={},k={id:"_103-最少的硬币数目",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_103-最少的硬币数目","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.cn/problems/gaM7Ch",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"广度优先搜索",-1),v=n("code",null,"数组",-1),_=n("code",null,"动态规划",-1),g={href:"https://leetcode.cn/problems/gaM7Ch",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定不同面额的硬币 <code>coins</code> 和一个总金额 <code>amount</code>。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 <code>-1</code>。</p><p>你可以认为每种硬币的数量是无限的。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> coins = [1, 2, 5], amount = 11</p><p>**输出：**3</p><p><strong>解释：</strong> 11 = 5 + 5 + 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> coins = [2], amount = 3</p><p><strong>输出：</strong> -1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> coins = [1], amount = 0</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> coins = [1], amount = 1</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> coins = [1], amount = 2</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= coins.length &lt;= 12</code></li><li><code>1 &lt;= coins[i] &lt;= 2^31 - 1</code></li><li><code>0 &lt;= amount &lt;= 10^4</code></li></ul>',15),w={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),q=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规化，定义一个数组<code>dp</code>，其中<code>dp[i]</code>表示凑齐金额<code>i</code>所需的最少硬币数。</p><ul><li>初始化数组 <code>dp</code> 为 <code>-666</code>，便于后续取最小值。</li><li>将 base case <code>dp[0]</code> 设置为 <code>0</code>，表示凑齐金额 <code>0</code> 不需要任何硬币。</li><li>对于每个金额 <code>i</code>，遍历硬币的面额，计算凑齐金额 <code>i</code> 所需的最少硬币数。</li><li>状态转移方程为：<code>dp[i] = min(dp[i], dp[i - coin] + 1)</code>，其中 <code>coin</code> 为硬币的面额。</li><li>最终，<code>dp[amount]</code> 即为凑齐总金额所需的最少硬币数。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * amount)</code>，其中 <code>n</code> 是硬币的数量，<code>amount</code> 是目标金额。对于每个金额尝试使用每种硬币，因此在最坏情况下，可能对 <code>amount</code> 种金额进行 <code>O(n)</code> 次递归调用。</li><li><strong>空间复杂度</strong>：<code>O(amount)</code><ul><li>使用了一个长度为 <code>amount + 1</code> 的数组 <code>dp</code>；</li><li>递归调用的深度在最坏情况下可能达到 <code>amount</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">coins</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">amount</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">coinChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coins<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">666</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> sub <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>num <span class="token operator">-</span> coin<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sub <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> sub <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> res <span class="token operator">==</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
		<span class="token keyword">return</span> dp<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function I(C,L){const p=e("ExternalLinkIcon"),l=e("font"),o=e("RouterLink");return r(),u("div",null,[n("h1",k,[m,s(),n("a",b,[s("103. 最少的硬币数目"),a(p)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",g,[f,a(p)])]),y,n("div",w,[x,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0322.html"},{default:t(()=>[s("第 322 题")]),_:1}),s(" 相同。")])]),q])}const M=i(d,[["render",I],["__file","jz_offer_II_103.html.vue"]]);export{M as default};
