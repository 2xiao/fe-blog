import{_ as i,r as o,o as l,c as r,a as n,b as s,d as e,w as a,e as d}from"./app-9Xw5divW.js";const u={},k=n("h1",{id:"_1545-找出第-n-个二进制字符串中的第-k-位",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1545-找出第-n-个二进制字符串中的第-k-位","aria-hidden":"true"},"#"),s(" 1545. 找出第 N 个二进制字符串中的第 K 位")],-1),m=n("code",null,"递归",-1),v=n("code",null,"字符串",-1),h=n("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/find-kth-bit-in-nth-binary-string",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-kth-bit-in-nth-binary-string",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two positive integers <code>n</code> and <code>k</code>, the binary string <code>Sn</code> is formed as follows:</p><ul><li><code>S1 = &quot;0&quot;</code></li><li><code>Si = Si - 1 + &quot;1&quot; + reverse(invert(Si - 1))</code> for <code>i &gt; 1</code></li></ul><p>Where <code>+</code> denotes the concatenation operation, <code>reverse(x)</code> returns the reversed string <code>x</code>, and <code>invert(x)</code> inverts all the bits in <code>x</code> (<code>0</code> changes to <code>1</code> and <code>1</code> changes to <code>0</code>).</p><p>For example, the first four strings in the above sequence are:</p><ul><li><code>S1 = &quot;0&quot;</code></li><li><code>S2 = &quot;011&quot;</code></li><li><code>S3 = &quot;0111001&quot;</code></li><li><code>S4 = &quot;011100110110001&quot;</code></li></ul><p>Return <em>the</em> <code>kth</code> <em>bit</em> <em>in</em> <code>Sn</code>. It is guaranteed that <code>k</code> is valid for the given <code>n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3, k = 1</p><p>Output: &quot;0&quot;</p><p>Explanation: S3 is &quot;<strong><em>0</em></strong> 111001&quot;.</p><p>The 1st bit is &quot;0&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 4, k = 11</p><p>Output: &quot;1&quot;</p><p>Explanation: S4 is &quot;0111001101** <em>1</em>** 0001&quot;.</p><p>The 11th bit is &quot;1&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 20</code></li><li><code>1 &lt;= k &lt;= 2^n - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个正整数 <code>n</code> 和 <code>k</code>，二进制字符串 <code>Sn</code> 的形成规则如下：</p><ul><li><code>S1 = &quot;0&quot;</code></li><li>当 <code>i &gt; 1</code> 时，<code>Si = Si-1 + &quot;1&quot; + reverse(invert(Si-1))</code></li></ul><p>其中 <code>+</code> 表示串联操作，<code>reverse(x)</code> 返回反转 <code>x</code> 后得到的字符串，而 <code>invert(x)</code> 则会翻转 x 中的每一位（0 变为 1，而 1 变为 0）。</p><p>例如，符合上述描述的序列的前 4 个字符串依次是：</p><ul><li><code>S1 = &quot;0&quot;</code></li><li><code>S2 = &quot;011&quot;</code></li><li><code>S3 = &quot;0111001&quot;</code></li><li><code>S4 = &quot;011100110110001&quot;</code></li></ul><p>请你返回 <code>Sn</code> 的 <strong>第<code>k</code> 位字符</strong> ，题目数据保证 <code>k</code> 一定在 <code>Sn</code> 长度范围以内。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 20</code></li><li><code>1 &lt;= k &lt;= 2^n - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>可以使用递归方法生成第 <code>n</code> 个二进制字符串。生成的过程可以用 <code>S(n) = S(n-1) + &#39;1&#39; + reverse(invert(Si - 1))</code> 来表示，其中 <code>reverse</code> 是翻转操作，<code>invert</code> 是取反操作，通过 <code>split</code> 和 <code>map</code> 方法实现取反操作。</p></li><li><p>一旦生成了第 <code>n</code> 个字符串，就可以根据 1-indexed 规则返回第 <code>k</code> 位的字符。</p></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(2^n)</code>，随着 <code>n</code> 增加，字符串长度呈指数增长。</li><li><strong>空间复杂度</strong>：<code>O(2^n)</code>，存储生成的字符串所需的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKthBit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">genString</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token function">genString</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> reverse <span class="token operator">=</span> prev
			<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> prev <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> reverse<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">genString</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> str<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// k 是 1-indexed</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function S(x,w){const p=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/recursion.html"},{default:a(()=>[m]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[v]),_:1}),s(),e(t,{to:"/tag/simulation.html"},{default:a(()=>[h]),_:1}),s("  🔗 "),n("a",b,[g,e(c)]),s(),n("a",f,[_,e(c)])]),q])}const E=i(u,[["render",S],["__file","1545.html.vue"]]);export{E as default};
