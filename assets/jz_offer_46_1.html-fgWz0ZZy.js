import{_ as l,r as t,o as i,c as u,a as n,b as s,d as a,w as e,e as r}from"./app-BBnmDgJV.js";const d={},k=n("h1",{id:"_46-把数字翻译成字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_46-把数字翻译成字符串","aria-hidden":"true"},"#"),s(" 46. 把数字翻译成字符串")],-1),m=n("code",null,"字符串",-1),v=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),g=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现有一串神秘的密文 <code>ciphertext</code>，经调查，密文的特点和规则如下：</p><ul><li>密文由非负整数组成</li><li>数字 0-25 分别对应字母 a-z</li></ul><p>请根据上述规则将密文 <code>ciphertext</code> 解密为字母，并返回共有多少种解密结果。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> ciphertext = 216612</p><p><strong>输出:</strong> 6</p><p><strong>解释:</strong> 216612 解密后有 6 种不同的形式，分别是 &quot;cbggbc&quot;，&quot;vggbc&quot;，&quot;vggm&quot;，&quot;cbggm&quot;，&quot;cqgbc&quot; 和 &quot;cqgm&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= ciphertext &lt; 2^31</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来解决这个问题：</p><ol><li><p><strong>动态规划数组</strong>：定义一个数组 <code>dp</code>，其中 <code>dp[i]</code> 表示解密到第 <code>i</code> 个字符时的不同解密方式数量。</p></li><li><p><strong>初始化</strong>：设置 <code>dp[0] = 1</code>，表示空字符串有一种解密方式。</p></li><li><p><strong>状态转移</strong>：</p><ul><li>对于每个位置 <code>i</code>，可以单字符解码，<code>dp[i] = dp[i-1]</code>。</li><li>还可以与前一个字符组合成双字符解码，即看 <code>str[i-2]</code> 和 <code>str[i-1]</code> 是否构成有效的两位数字（在 <code>10</code> 到 <code>25</code> 之间），如果是，则 <code>dp[i] += dp[i-2]</code> 。</li></ul></li><li><p><strong>返回结果</strong>：最后返回 <code>dp[n]</code>，其中 <code>n</code> 是密文的长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是密文的长度，因为只遍历密文一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储动态规划数组 <code>dp</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ciphertext</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">crackNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ciphertext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>ciphertext<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// dp 数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 空字符串</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 单字符解码</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 双字符解码</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> twoDigit <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>twoDigit <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> twoDigit <span class="token operator">&lt;=</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function _(f,w){const p=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/dynamic-programming.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(c)])]),g])}const y=l(d,[["render",_],["__file","jz_offer_46_1.html.vue"]]);export{y as default};
