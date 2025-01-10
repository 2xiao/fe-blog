import{_ as p,r as i,o as l,c as r,a as n,b as e,d as s,w as a,f as d,e as u}from"./app-XFeYdzZv.js";const h={},k=n("h1",{id:"_8-字符串转换整数-atoi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-字符串转换整数-atoi","aria-hidden":"true"},"#"),e(" 8. 字符串转换整数 (atoi)")],-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++&#39;s <code>atoi</code> function).</p><p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p><ol><li>Read in and ignore any leading whitespace.</li><li>Check if the next character (if not already at the end of the string) is <code>&#39;-&#39;</code> or <code>&#39;+&#39;</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li><li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li><li>Convert these digits into an integer (i.e. <code>&quot;123&quot; -&gt; 123</code>, <code>&quot;0032&quot; -&gt; 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</li><li>If the integer is out of the 32-bit signed integer range <code>[-2^31, 2^31 - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2^31</code> should be clamped to <code>-2^31</code>, and integers greater than <code>2^31 - 1</code> should be clamped to <code>2^31 - 1</code>.</li><li>Return the integer as the final result.</li></ol><p><strong>Note:</strong></p><ul><li>Only the space character <code>&#39; &#39;</code> is considered a whitespace character.</li><li><strong>Do not ignore</strong> any characters other than the leading whitespace or the rest of the string after the digits.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;42&quot;</p><p>Output: 42</p><p>Explanation: The underlined characters are what is read in, the caret is the current reader position.</p><p>Step 1: &quot;42&quot; (no characters read because there is no leading whitespace)</p><p>Step 2: &quot;42&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)</p><p>Step 3: &quot; <em>42</em> &quot; (&quot;42&quot; is read in)</p><p>The parsed integer is 42.</p><p>Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot; -42&quot;</p><p>Output: -42</p><p>Explanation:</p><p>Step 1: &quot; -42&quot; (leading whitespace is read and ignored)</p><p>Step 2: &quot; <em>-</em> 42&quot; (&#39;-&#39; is read, so the result should be negative)</p><p>Step 3: &quot; - <em>42</em> &quot; (&quot;42&quot; is read in)</p><p>The parsed integer is -42.</p><p>Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;4193 with words&quot;</p><p>Output: 4193</p><p>Explanation:</p><p>Step 1: &quot;4193 with words&quot; (no characters read because there is no leading whitespace)</p><p>Step 2: &quot;4193 with words&quot; (no characters read because there is neither a &#39;-&#39; nor &#39;+&#39;)</p><p>Step 3: &quot; <em>4193</em> with words&quot; (&quot;4193&quot; is read in; reading stops because the next character is a non-digit)</p><p>The parsed integer is 4193.</p><p>Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 200</code></li><li><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>&#39; &#39;</code>, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, and <code>&#39;.&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你来实现一个  myAtoi(string s)  函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。</p><p>函数  myAtoi(string s) 的算法如下：</p><ul><li>读入字符串并丢弃无用的前导空格</li><li>检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。</li><li>读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。</li><li>将前面步骤读入的这些数字转换为整数（即，&quot;123&quot; -&gt; 123， &quot;0032&quot; -&gt; 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。</li><li>如果整数数超过 32 位有符号整数范围 <code>[−2^31,  2^31 − 1]</code> ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 <code>−2^31</code> 的整数应该被固定为 <code>−2^31</code> ，大于 <code>2^31 − 1</code> 的整数应该被固定为 <code>2^31 − 1</code> 。</li><li>返回整数作为最终结果。</li></ul><p>注意：</p><ul><li>本题中的空白字符只包括空格字符 &#39; &#39; 。</li><li>除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求实现类似 <code>C++</code> 中 <code>atoi</code> 函数的功能，这个函数功能是将字符串类型的数字转成 <code>int</code> 类型数字。</p><ol><li>先去除字符串中的前导空格，并判断记录数字的符号 <code>sign</code>；</li><li>遍历字符串，如果 <code>s[i]</code> 是整型，则将其转换成数字类型存入 <code>res</code>；</li><li>如果遇到非整型，则立刻结束遍历；</li><li>将数字乘以 <code>sign</code>；</li><li>判断是否超过 <code>int</code> 类型的上限 <code>[-2^31, 2^31 - 1]</code>，如果超过上限，需要输出边界，即 <code>-2^31</code>，或者 <code>2^31 - 1</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度； <ul><li>对输入字符串进行 <code>trim()</code> 操作，去除字符串开头和结尾的空格，此操作的时间复杂度为 <code>O(n)</code>；</li><li>遍历字符串，在最坏的情况下，可能需要遍历整个字符串，时间复杂度为 <code>O(n)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了几个变量（如 <code>i</code>, <code>res</code>, 和 <code>sign</code>），没有使用额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
		sign <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> res <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	res <span class="token operator">*=</span> sign<span class="token punctuation">;</span>
	res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"7",-1),q=n("td",{style:{"text-align":"left"}},"整数反转",-1),w={style:{"text-align":"center"}},S={style:{"text-align":"left"}},C=n("code",null,"数学",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"65",-1),A=n("td",{style:{"text-align":"left"}},"有效数字",-1),R=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},V=n("code",null,"字符串",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/valid-number",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/valid-number",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2042",-1),F=n("td",{style:{"text-align":"left"}},"检查句子中的数字是否递增",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=n("code",null,"字符串",-1),K=n("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const c=i("font"),o=i("RouterLink"),t=i("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[e("🟠 "),s(c,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1}),e("  🔖  "),s(o,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),e("  🔗 "),n("a",m,[_,s(t)]),e(),n("a",b,[f,s(t)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,q,n("td",w,[s(o,{to:"/problem/0007.html"},{default:a(()=>[e("[✓]")]),_:1})]),n("td",S,[s(o,{to:"/tag/math.html"},{default:a(()=>[C]),_:1})]),E,n("td",I,[n("a",N,[e("🀄️"),s(t)]),e(),n("a",O,[e("🔗"),s(t)])])]),n("tr",null,[T,A,R,n("td",L,[s(o,{to:"/tag/string.html"},{default:a(()=>[V]),_:1})]),j,n("td",B,[n("a",M,[e("🀄️"),s(t)]),e(),n("a",D,[e("🔗"),s(t)])])]),n("tr",null,[z,F,n("td",G,[s(o,{to:"/problem/2042.html"},{default:a(()=>[e("[✓]")]),_:1})]),n("td",H,[s(o,{to:"/tag/string.html"},{default:a(()=>[J]),_:1})]),K,n("td",P,[n("a",Q,[e("🀄️"),s(t)]),e(),n("a",U,[e("🔗"),s(t)])])])])])])}const $=p(h,[["render",W],["__file","0008.html.vue"]]);export{$ as default};
