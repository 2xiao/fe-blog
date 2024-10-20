import{_ as p,r as l,o as i,c as d,a as n,d as s,b as e,w as a,f as r,e as u}from"./app-Fucr7yuT.js";const k={},m={id:"_12-整数转罗马数字",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_12-整数转罗马数字","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/integer-to-roman",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"哈希表",-1),_=n("code",null,"数学",-1),g=n("code",null,"字符串",-1),f={href:"https://leetcode.com/problems/integer-to-roman",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two one&#39;s added together. <code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p><p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p><ul><li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9.</li><li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90.</li><li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li></ul><p>Given an integer, convert it to a roman numeral.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 3</p><p>Output: &quot;III&quot;</p><p>Explanation: 3 is represented as 3 ones.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 58</p><p>Output: &quot;LVIII&quot;</p><p>Explanation: L = 50, V = 5, III = 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = 1994</p><p>Output: &quot;MCMXCIV&quot;</p><p>Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 3999</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 <code>4</code> 不写做  <code>IIII</code>，而是  <code>IV</code>。数字 <code>1</code> 在数字 <code>5</code> 的左边，所表示的数等于大数 <code>5</code> 减小数 <code>1</code> 得到的数值 <code>4</code> 。同样地，数字 <code>9</code> 表示为  <code>IX</code>。这个特殊的规则只适用于以下六种情况：</p><ul><li><code>I</code>  可以放在  <code>V (5)</code> 和  <code>X (10)</code> 的左边，来表示 <code>4</code> 和 <code>9</code>。</li><li><code>X</code>  可以放在  <code>L (50)</code> 和  <code>C (100)</code> 的左边，来表示 <code>40</code> 和  <code>90</code>。</li><li><code>C</code>  可以放在  <code>D (500)</code> 和  <code>M (1000)</code> 的左边，来表示  <code>400</code> 和  <code>900</code>。</li></ul><p>给定一个整数，将其转为罗马数字。输入确保在 <code>1</code>  到 <code>3999</code> 的范围内。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>依照题意，优先选择大的数字，解题思路采用贪心算法。将 <code>1-3999</code> 范围内的罗马数字从大到小放在数组中，从头选择到尾，即可把整数转成罗马数字。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">intToRoman</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> int <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> roman <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;CM&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;CD&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;XC&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;L&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;XL&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;X&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;IX&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;V&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;IV&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;I&#39;</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> int<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;=</span> int<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> roman<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			num <span class="token operator">-=</span> int<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"13",-1),V={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/roman-to-integer",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},q=n("code",null,"哈希表",-1),M=n("code",null,"数学",-1),E=n("code",null,"字符串",-1),D={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"273",-1),N={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/integer-to-english-words",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},O=n("code",null,"递归",-1),H=n("code",null,"数学",-1),S=n("code",null,"字符串",-1),F={style:{"text-align":"left"}};function G(z,A){const o=l("ExternalLinkIcon"),c=l("font"),t=l("RouterLink");return i(),d("div",null,[n("h1",m,[h,s(),n("a",b,[s("12. 整数转罗马数字"),e(o)])]),n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[v]),_:1}),s(),e(t,{to:"/tag/math.html"},{default:a(()=>[_]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",f,[I,e(o)])]),x,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,n("td",V,[n("a",X,[s("罗马数字转整数"),e(o)])]),n("td",C,[e(t,{to:"/problem/0013.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",L,[e(t,{to:"/tag/hash-table.html"},{default:a(()=>[q]),_:1}),s(),e(t,{to:"/tag/math.html"},{default:a(()=>[M]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[E]),_:1})]),n("td",D,[e(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),n("tr",null,[R,n("td",N,[n("a",T,[s("整数转换英文表示"),e(o)])]),j,n("td",B,[e(t,{to:"/tag/recursion.html"},{default:a(()=>[O]),_:1}),s(),e(t,{to:"/tag/math.html"},{default:a(()=>[H]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[S]),_:1})]),n("td",F,[e(c,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])])])])])}const K=p(k,[["render",G],["__file","0012.html.vue"]]);export{K as default};
