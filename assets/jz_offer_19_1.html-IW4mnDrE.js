import{_ as u,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e}from"./app-totCBmv-.js";const k={},d=n("h1",{id:"_19-正则表达式匹配",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_19-正则表达式匹配","aria-hidden":"true"},"#"),s(" 19. 正则表达式匹配")],-1),m=n("code",null,"递归",-1),b=n("code",null,"字符串",-1),v=n("code",null,"动态规划",-1),h={href:"https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你一个字符串 <code>article</code> 和一个字符规律 <code>input</code>，请你来实现一个支持 <code>&#39;.&#39;</code> 和 <code>&#39;*&#39;</code> 的正则表达式匹配。</p><ul><li><code>&#39;.&#39;</code> 匹配任意单个字符</li><li><code>&#39;*&#39;</code> 匹配零个或多个前面的那一个元素</li></ul><p>所谓匹配，是要涵盖 <strong>整个</strong> 字符串 <code>s</code> 的，而不是部分字符串。例如，字符串 <code>&quot;aaa&quot;</code> 与模式 <code>&quot;a.a&quot;</code> 和 <code>&quot;ab*ac*a&quot;</code> 匹配，但与 <code>&quot;aa.a&quot;</code> 和 <code>&quot;ab*a&quot;</code> 均不匹配。</p><p><strong>示例 1：</strong></p><blockquote><p>输入: article = &quot;aa&quot;, input = &quot;a&quot;</p><p>输出: false</p><p>解释: &quot;a&quot; 无法匹配 &quot;aa&quot; 整个字符串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入: article = &quot;aa&quot;, input = &quot;a*&quot;</p><p>输出: true</p><p>解释: 因为 &#39;*&#39; 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 &#39;a&#39;。因此，字符串 &quot;aa&quot; 可被视为 &#39;a&#39; 重复了一次。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入: article = &quot;ab&quot;, input = &quot;.*&quot;</p><p>输出: true</p><p>解释: &quot;.*&quot; 表示可匹配零个或多个（&#39;*&#39;）任意字符（&#39;.&#39;）。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= article.length &lt;= 20</code></li><li><code>1 &lt;= input.length &lt;= 20</code></li><li><code>article</code> 只包含从 <code>a-z</code> 的小写字母。</li><li><code>input</code> 只包含从 <code>a-z</code> 的小写字母，以及字符 <code>.</code> 和 <code>*</code> 。</li><li>保证每次出现字符 <code>*</code> 时，前面都匹配到有效的字符</li></ul>',12),j={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),g=e(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用动态规划来解决正则表达式匹配问题，可以使用一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示字符串 <code>article</code> 的前 <code>i</code> 个字符和模式 <code>input</code> 的前 <code>j</code> 个字符是否匹配。</p><p>动态规划的递推公式如下：</p><ol><li>如果 <code>input[j]</code> 不是 <code>&#39;*&#39;</code>，且当前字符 <code>article[i]</code> 和 <code>input[j]</code> 匹配，则 <code>dp[i][j] = dp[i-1][j-1]</code>，表示当前字符是否匹配取决于前面的字符是否匹配。</li><li>如果 <code>input[j]</code> 是 <code>&#39;*&#39;</code>，则有两种情况： <ul><li><code>&#39;*&#39;</code> 匹配零个字符，即 <code>dp[i][j] = dp[i][j-2]</code>。</li><li><code>&#39;*&#39;</code> 匹配多个字符，即 <code>dp[i][j] = dp[i-1][j]</code>，前提是当前字符 <code>article[i]</code> 和 <code>input[j-1]</code> 匹配。</li></ul></li><li>初始条件为 <code>dp[0][0] = true</code>，表示空字符串和空模式匹配。</li><li>初始化动态规划表 <code>dp</code> 的第一行，即 <code>dp[0][j]</code>，表示空字符串与模式 <code>input</code> 的前 <code>j</code> 个字符的匹配情况，要注意考虑第 <code>j</code> 个字符是 <code>&#39;*&#39;</code> 的情况，。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">articleMatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">match</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> p<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(y,x){const c=o("font"),p=o("RouterLink"),l=o("ExternalLinkIcon");return i(),r("div",null,[d,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(p,{to:"/tag/recursion.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[_,a(l)])]),f,n("div",j,[q,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0010.html"},{default:t(()=>[s("第 10 题")]),_:1}),s(" 相同。")])]),g])}const L=u(k,[["render",w],["__file","jz_offer_19_1.html.vue"]]);export{L as default};
