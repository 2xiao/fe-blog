import{_ as l,r as p,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-XFeYdzZv.js";const g={},k=n("h1",{id:"_91-解码方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_91-解码方法","aria-hidden":"true"},"#"),t(" 91. 解码方法")],-1),h=n("code",null,"字符串",-1),m=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/decode-ways",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/decode-ways",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have intercepted a secret message encoded as a string of numbers. The message is <strong>decoded</strong> via the following mapping:</p><p><code>&quot;1&quot; -&gt; &#39;A&#39; &quot;2&quot; -&gt; &#39;B&#39; ... &quot;25&quot; -&gt; &#39;Y&#39; &quot;26&quot; -&gt; &#39;Z&#39;</code></p><p>However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes (<code>&quot;2&quot;</code> and <code>&quot;5&quot;</code> vs <code>&quot;25&quot;</code>).</p><p>For example, <code>&quot;11106&quot;</code> can be decoded into:</p><ul><li><code>&quot;AAJF&quot;</code> with the grouping <code>(1, 1, 10, 6)</code></li><li><code>&quot;KJF&quot;</code> with the grouping <code>(11, 10, 6)</code></li><li>The grouping <code>(1, 11, 06)</code> is invalid because <code>&quot;06&quot;</code> is not a valid code (only <code>&quot;6&quot;</code> is valid).</li></ul><p>Note: there may be strings that are impossible to decode.</p><p>Given a string s containing only digits, return the <strong>number of ways</strong> to <strong>decode</strong> it. If the entire string cannot be decoded in any valid way, return <code>0</code>.</p><p>The test cases are generated so that the answer fits in a <strong>32-bit</strong> integer.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;12&quot;</p><p><strong>Output:</strong> 2</p><p><strong>Explanation:</strong></p><p>&quot;12&quot; could be decoded as &quot;AB&quot; (1 2) or &quot;L&quot; (12).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;226&quot;</p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>&quot;226&quot; could be decoded as &quot;BZ&quot; (2 26), &quot;VF&quot; (22 6), or &quot;BBF&quot; (2 2 6).</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;06&quot;</p><p><strong>Output:</strong> 0</p><p><strong>Explanation:</strong></p><p>&quot;06&quot; cannot be mapped to &quot;F&quot; because of the leading zero (&quot;6&quot; is different from &quot;06&quot;). In this case, the string is not a valid encoding, so return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> contains only digits and may contain leading zero(s).</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一条包含字母 <code>A-Z</code> 的消息通过以下映射进行了 <strong>编码</strong> ：</p><p><code>&quot;1&quot; -&gt; &#39;A&#39; &quot;2&quot; -&gt; &#39;B&#39; ... &quot;25&quot; -&gt; &#39;Y&#39; &quot;26&quot; -&gt; &#39;Z&#39;</code></p><p>然而，在 <strong>解码</strong> 已编码的消息时，你意识到有许多不同的方式来解码，因为有些编码被包含在其它编码当中（<code>&quot;2&quot;</code> 和 <code>&quot;5&quot;</code> 与 <code>&quot;25&quot;</code>）。</p><p>例如，<code>&quot;11106&quot;</code> 可以映射为：</p><ul><li><code>&quot;AAJF&quot;</code> ，将消息分组为 <code>(1, 1, 10, 6)</code></li><li><code>&quot;KJF&quot;</code> ，将消息分组为 <code>(11, 10, 6)</code></li><li>消息不能分组为 <code>(1, 11, 06)</code> ，因为 <code>&quot;06&quot;</code> 不是一个合法编码（只有 &quot;6&quot; 是合法的）。</li></ul><p>注意，可能存在无法解码的字符串。</p><p>给你一个只含数字的 <strong>非空</strong> 字符串 <code>s</code> ，请计算并返回 <strong>解码</strong> 方法的 <strong>总数</strong> 。如果没有合法的方式解码整个字符串，返回 <code>0</code>。</p><p>题目数据保证答案肯定是一个 <strong>32 位</strong> 的整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;12&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 它可以解码为 &quot;AB&quot;（1 2）或者 &quot;L&quot;（12）。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;226&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 它可以解码为 &quot;BZ&quot; (2 26), &quot;VF&quot; (22 6), 或者 &quot;BBF&quot; (2 2 6) 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;06&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> &quot;06&quot; 无法映射到 &quot;F&quot; ，因为存在前导零（&quot;6&quot; 和 &quot;06&quot; 并不等价）。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 只包含数字，并且可能包含前导零。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以用 <strong>动态规划</strong> 来解决这道题。</p><ol><li><p><strong>状态定义</strong>：</p><ul><li>用 <code>dp[i]</code> 表示解码前 <code>i</code> 个字符的方法总数。</li></ul></li><li><p><strong>状态转移方程</strong>：</p><ul><li>如果当前字符 <code>s[i-1]</code> 可以单独解码（<code>1 &lt;= s[i-1] &lt;= 9</code>），则 <code>dp[i] += dp[i-1]</code>。</li><li>如果当前字符与前一个字符组合可以解码（<code>10 &lt;= s[i-2..i-1] &lt;= 26</code>），则 <code>dp[i] += dp[i-2]</code>。</li></ul></li><li><p><strong>初始化</strong>：</p><ul><li><code>dp[0] = 1</code>：空字符串有一种解码方式。</li><li><code>dp[1] = 1</code>：第一个字符非零时只有一种解码方式。</li></ul></li><li><p><strong>特殊情况</strong>：</p><ul><li>如果字符串以 <code>0</code> 开头，则无法解码，直接返回 <code>0</code>。</li></ul></li><li><p><strong>最终结果</strong>：</p><ul><li>返回 <code>dp[n]</code>，即解码整个字符串的方法数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了大小为 <code>n+1</code> 的数组 <code>dp</code>，可以优化为只使用两个变量 <code>prev2</code> 和 <code>prev1</code> 来表示 <code>dp[i-2]</code> 和 <code>dp[i-1]</code>，从而将空间复杂度降为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numDecodings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 字符串以0开头无法解码</span>

	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 空字符串初始化</span>
	dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 第一个字符有效时初始化为1</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> one <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 单独解码当前字符</span>
		<span class="token keyword">const</span> two <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 解码当前和前一个字符组合</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>one <span class="token operator">&gt;=</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> one <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>two <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> two <span class="token operator">&lt;=</span> <span class="token number">26</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,42),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"639",-1),w=n("td",{style:{"text-align":"left"}},"解码方法 II",-1),B=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},A=n("code",null,"字符串",-1),E=n("code",null,"动态规划",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),N={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/decode-ways-ii",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/decode-ways-ii",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"1977",-1),C=n("td",{style:{"text-align":"left"}},"划分数字的方案数",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},T=n("code",null,"字符串",-1),j=n("code",null,"动态规划",-1),z=n("code",null,"后缀数组",-1),Y=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/number-of-ways-to-separate-numbers",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/number-of-ways-to-separate-numbers",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2266",-1),H=n("td",{style:{"text-align":"left"}},"统计打字方案数",-1),M=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},P=n("code",null,"哈希表",-1),Q=n("code",null,"数学",-1),U=n("code",null,"字符串",-1),W=n("code",null,"1+",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"};function sn(en,on){const c=p("font"),o=p("RouterLink"),a=p("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(o,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",_,[q,s(a)]),t(),n("a",b,[f,s(a)])]),v,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,B,n("td",F,[s(o,{to:"/tag/string.html"},{default:e(()=>[A]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:e(()=>[E]),_:1})]),I,n("td",N,[n("a",L,[t("🀄️"),s(a)]),t(),n("a",V,[t("🔗"),s(a)])])]),n("tr",null,[O,C,Z,n("td",J,[s(o,{to:"/tag/string.html"},{default:e(()=>[T]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:e(()=>[j]),_:1}),t(),s(o,{to:"/tag/suffix-array.html"},{default:e(()=>[z]),_:1})]),Y,n("td",K,[n("a",R,[t("🀄️"),s(a)]),t(),n("a",D,[t("🔗"),s(a)])])]),n("tr",null,[G,H,M,n("td",S,[s(o,{to:"/tag/hash-table.html"},{default:e(()=>[P]),_:1}),t(),s(o,{to:"/tag/math.html"},{default:e(()=>[Q]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:e(()=>[U]),_:1}),t(),W]),X,n("td",$,[n("a",nn,[t("🀄️"),s(a)]),t(),n("a",tn,[t("🔗"),s(a)])])])])])])}const pn=l(g,[["render",sn],["__file","0091.html.vue"]]);export{pn as default};
