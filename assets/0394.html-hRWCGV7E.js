import{_ as i,r as c,o as u,c as r,a as n,d as s,b as a,w as t,f as d,e as l}from"./app-ynO5B_DP.js";const k={},m={id:"_394-字符串解码",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_394-字符串解码","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/decode-string",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"栈",-1),v=n("code",null,"递归",-1),g=n("code",null,"字符串",-1),f={href:"https://leetcode.com/problems/decode-string",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an encoded string, return its decoded string.</p><p>The encoding rule is: <code>k[encoded_string]</code>, where the <code>encoded_string</code> inside the square brackets is being repeated exactly <code>k</code> times. Note that <code>k</code> is guaranteed to be a positive integer.</p><p>You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, <code>k</code>. For example, there will not be input like <code>3a</code> or <code>2[4]</code>.</p><p>The test cases are generated so that the length of the output will never exceed <code>105</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;3[a]2[bc]&quot;</p><p>Output: &quot;aaabcbc&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;3[a2[c]]&quot;</p><p>Output: &quot;accaccacc&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;2[abc]3[cd]ef&quot;</p><p>Output: &quot;abcabccdcdcdef&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 30</code></li><li><code>s</code> consists of lowercase English letters, digits, and square brackets <code>&#39;[]&#39;</code>.</li><li><code>s</code> is guaranteed to be <strong>a valid</strong> input.</li><li>All the integers in <code>s</code> are in the range <code>[1, 300]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个经过编码的字符串，返回它解码后的字符串。</p><p>编码规则为: <code>k[encoded_string]</code>，表示其中方括号内部的 <code>encoded_string</code> 正好重复 <code>k</code> 次。注意 <code>k</code> 保证为正整数。</p><p>你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。</p><p>此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 <code>k</code> ，例如不会出现像 <code>3a</code> 或 <code>2[4]</code> 的输入。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',19),w=n("code",null,"2[a2[bc]]",-1),q=n("code",null,"2[abcbc]",-1),E=n("code",null,"abcbcabcbc",-1),N=l(`<p>具体做法是：</p><ul><li>遍历字符串，如果当前的字符为数位，解析出一个数字（连续的多个数位）并进栈；</li><li>如果当前的字符为字母或者左括号，直接进栈；</li><li>如果当前的字符为右括号，开始出栈，一直到左括号出栈，出栈序列反转后拼接成一个字符串，此时取出栈顶的数字，就是这个字符串应该出现的次数；</li><li>根据这个次数和字符串构造出新的字符串并进栈，这里可以用二分法拼接字符串，避免超时；</li><li>重复如上操作，最终将栈中的元素按照从栈底到栈顶的顺序拼接起来，就得到了答案。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decodeString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">isDigit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> str <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			k <span class="token operator">=</span> k <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
			k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				str <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> num <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">repreat</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 二分法拼接字符串</span>
<span class="token keyword">var</span> <span class="token function-variable function">repreat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> str<span class="token punctuation">,</span>
		temp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp <span class="token operator">+=</span> res<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res <span class="token operator">+=</span> res<span class="token punctuation">;</span>
		num <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res <span class="token operator">+</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"471",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/encode-string-with-shortest-length",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},O=n("code",null,"字符串",-1),T=n("code",null,"动态规划",-1),D={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"726",-1),H={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/number-of-atoms",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},A=n("code",null,"栈",-1),G=n("code",null,"哈希表",-1),Y=n("code",null,"字符串",-1),z=n("code",null,"1+",-1),J={style:{"text-align":"left"}},K=n("td",{style:{"text-align":"center"}},"1087",-1),P={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/brace-expansion",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=n("code",null,"广度优先搜索",-1),Z=n("code",null,"字符串",-1),$=n("code",null,"回溯",-1),nn={style:{"text-align":"left"}};function sn(an,tn){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return u(),r("div",null,[n("h1",m,[h,s(),n("a",_,[s("394. 字符串解码"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/outline/tag/stack.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/outline/tag/recursion.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[y,a(o)])]),x,n("p",null,[s("本题和 "),a(e,{to:"/problem/0880.html"},{default:t(()=>[s("第 880 题")]),_:1}),s(" 类似。需要注意，本题中可能出现括号嵌套的情况，比如 "),w,s("，这种情况下可以先转化成 "),q,s("，再转化成 "),E,s("，可以使用栈处理。")]),N,d(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[I,n("td",L,[n("a",V,[s("编码最短长度的字符串"),a(o)])]),j,n("td",B,[a(e,{to:"/outline/tag/string.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/outline/tag/dynamic-programming.html"},{default:t(()=>[T]),_:1})]),n("td",D,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[F,n("td",H,[n("a",M,[s("原子的数量"),a(o)])]),R,n("td",S,[a(e,{to:"/outline/tag/stack.html"},{default:t(()=>[A]),_:1}),s(),a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[Y]),_:1}),s(),z]),n("td",J,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[K,n("td",P,[n("a",Q,[s("花括号展开"),a(o)])]),U,n("td",W,[a(e,{to:"/outline/tag/breadth-first-search.html"},{default:t(()=>[X]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[Z]),_:1}),s(),a(e,{to:"/outline/tag/backtracking.html"},{default:t(()=>[$]),_:1})]),n("td",nn,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const on=i(k,[["render",sn],["__file","0394.html.vue"]]);export{on as default};
