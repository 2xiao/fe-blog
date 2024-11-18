import{_ as l,r as t,o as i,c as u,a as n,b as s,d as a,w as o,e as r}from"./app-9Xw5divW.js";const d={},k=n("h1",{id:"_6-z-字形变换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-z-字形变换","aria-hidden":"true"},"#"),s(" 6. Z 字形变换")],-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/zigzag-conversion",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/zigzag-conversion",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The string <code>&quot;PAYPALISHIRING&quot;</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p><pre><code>P   A   H   N
A P L S I I G
Y   I   R
</code></pre><p>And then read line by line: <code>&quot;PAHNAPLSIIGYIR&quot;</code></p><p>Write the code that will take a string and make this conversion given a number of rows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string convert(string s, int numRows);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;PAYPALISHIRING&quot;, numRows = 3</p><p>Output: &quot;PAHNAPLSIIGYIR&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;PAYPALISHIRING&quot;, numRows = 4</p><p>Output: &quot;PINALSIGYAHRPI&quot;</p></blockquote><p>Explanation:</p><pre><code>P     I    N
A   L S  I G
Y A   H R
P     I
</code></pre><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;A&quot;, numRows = 1</p><p>Output: &quot;A&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists of English letters (lower-case and upper-case), <code>&#39;,&#39;</code> and <code>&#39;.&#39;</code>.</li><li><code>1 &lt;= numRows &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>将一个给定字符串 <code>s</code> 根据给定的行数 <code>numRows</code> ，以从上往下、从左到右进行  Z 字形排列。</p><p>比如输入字符串为 <code>&quot;PAYPALISHIRING&quot;</code>  行数为 3 时，排列如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">P</span>   <span class="token constant">A</span>   <span class="token constant">H</span>   <span class="token constant">N</span>
<span class="token constant">A</span> <span class="token constant">P</span> <span class="token constant">L</span> <span class="token constant">S</span> <span class="token constant">I</span> <span class="token constant">I</span> <span class="token constant">G</span>
<span class="token constant">Y</span>   <span class="token constant">I</span>   <span class="token constant">R</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：<code>&quot;PAHNAPLSIIGYIR&quot;</code>。</p><p>请你实现这个将字符串进行指定行数变换的函数：</p><p><code>string convert(string s, int numRows);</code></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>这一题没有什么算法思想，考察的是对程序控制的能力；</li><li>用 2 个变量保存方向，当垂直输出的行数达到了规定的目标行数以后，需要从下往上转折到第一行；</li><li>循环中控制好方向，注意转变方向时的情况处理。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numRows</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">convert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> numRows</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numRows<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 负责从第一行开始向下加，直到第numRows行</span>
	<span class="token keyword">let</span> down <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 负责从倒数第一行开始向上加，直到第二行</span>
	<span class="token keyword">let</span> up <span class="token operator">=</span> numRows <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>down <span class="token operator">&lt;</span> numRows<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>down<span class="token punctuation">]</span> <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			down<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>up <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span>up<span class="token punctuation">]</span> <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			up<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			down <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			up <span class="token operator">=</span> numRows <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function _(I,f){const p=t("font"),c=t("RouterLink"),e=t("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",v,[b,a(e)]),s(),n("a",h,[g,a(e)])]),w])}const q=l(d,[["render",_],["__file","0006.html.vue"]]);export{q as default};
