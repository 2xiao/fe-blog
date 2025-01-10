import{_ as p,r as c,o as i,c as d,a as n,b as e,d as s,w as a,f as r,e as u}from"./app-XFeYdzZv.js";const m={},k=n("h1",{id:"_13-罗马数字转整数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_13-罗马数字转整数","aria-hidden":"true"},"#"),e(" 13. 罗马数字转整数")],-1),h=n("code",null,"哈希表",-1),v=n("code",null,"数学",-1),b=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/roman-to-integer",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/roman-to-integer",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, two is written as <code>II</code> in Roman numeral, just two one&#39;s added together. Twelve is written as, <code>XII</code>, which is simply <code>X</code> + <code>II</code>. The number twenty seven is written as <code>XXVII</code>, which is <code>XX</code> + <code>V</code> + <code>II</code>.</p><p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p><ul><li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.</li><li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.</li><li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li></ul><p>Given a roman numeral, convert it to an integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;III&quot;</p><p>Output: 3</p><p>Explanation: III = 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;LVIII&quot;</p><p>Output: 58</p><p>Explanation: L = 50, V= 5, III = 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;MCMXCIV&quot;</p><p>Output: 1994</p><p>Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 15</code></li><li><code>s</code> contains only the characters <code>(&#39;I&#39;, &#39;V&#39;, &#39;X&#39;, &#39;L&#39;, &#39;C&#39;, &#39;D&#39;, &#39;M&#39;)</code>.</li><li>It is <strong>guaranteed</strong> that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>罗马数字包含以下七种字符: <code>I, V, X, L, C, D, M</code>。</p><p>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例：</p><ul><li><code>I</code>  可以放在  <code>V (5)</code> 和  <code>X (10)</code> 的左边，来表示 <code>4</code> 和 <code>9</code>。</li><li><code>X</code>  可以放在  <code>L (50)</code> 和  <code>C (100)</code> 的左边，来表示 <code>40</code> 和 <code> 90</code>。</li><li><code>C</code>  可以放在  <code>D (500)</code> 和  <code>M (1000)</code> 的左边，来表示 <code>400</code> 和 <code>900</code>。</li></ul><p>给定一个罗马数字，将其转换成整数。输入确保在 <code>1</code>  到 <code>3999</code> 的范围内。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题目中罗马数字的字符数值，计算出对应罗马数字的十进制数即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">romanToInt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> roman <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token constant">I</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token constant">V</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
		<span class="token constant">X</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		<span class="token constant">L</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
		<span class="token constant">C</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
		<span class="token constant">D</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
		<span class="token constant">M</span><span class="token operator">:</span> <span class="token number">1000</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> num<span class="token punctuation">,</span> nextNum<span class="token punctuation">;</span>
	<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> roman<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		nextNum <span class="token operator">=</span> roman<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> nextNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			total <span class="token operator">-=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			total <span class="token operator">+=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"12",-1),V=n("td",{style:{"text-align":"left"}},"整数转罗马数字",-1),C={style:{"text-align":"center"}},X={style:{"text-align":"left"}},L=n("code",null,"哈希表",-1),q=n("code",null,"数学",-1),M=n("code",null,"字符串",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/integer-to-roman",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/integer-to-roman",target:"_blank",rel:"noopener noreferrer"};function R(j,B){const l=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/hash-table.html"},{default:a(()=>[h]),_:1}),e(),s(t,{to:"/tag/math.html"},{default:a(()=>[v]),_:1}),e(),s(t,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),e("  🔗 "),n("a",_,[g,s(o)]),e(),n("a",f,[I,s(o)])]),x,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,V,n("td",C,[s(t,{to:"/problem/0012.html"},{default:a(()=>[e("[✓]")]),_:1})]),n("td",X,[s(t,{to:"/tag/hash-table.html"},{default:a(()=>[L]),_:1}),e(),s(t,{to:"/tag/math.html"},{default:a(()=>[q]),_:1}),e(),s(t,{to:"/tag/string.html"},{default:a(()=>[M]),_:1})]),E,n("td",N,[n("a",D,[e("🀄️"),s(o)]),e(),n("a",T,[e("🔗"),s(o)])])])])])])}const S=p(m,[["render",R],["__file","0013.html.vue"]]);export{S as default};
