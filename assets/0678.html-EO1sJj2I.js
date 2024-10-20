import{_ as l,r as c,o as i,c as u,a as n,d as s,b as a,w as t,f as d,e as r}from"./app-Fucr7yuT.js";const k={},h={id:"_678-有效的括号字符串",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_678-有效的括号字符串","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/valid-parenthesis-string",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"栈",-1),f=n("code",null,"贪心",-1),v=n("code",null,"字符串",-1),b=n("code",null,"动态规划",-1),y={href:"https://leetcode.com/problems/valid-parenthesis-string",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing only three types of characters: <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> and <code>&#39;*&#39;</code>, return <code>true</code> <em>if</em> <code>s</code> <em>is <strong>valid</strong></em>.</p><p>The following rules define a <strong>valid</strong> string:</p><ul><li>Any left parenthesis <code>&#39;(&#39;</code> must have a corresponding right parenthesis <code>&#39;)&#39;</code>.</li><li>Any right parenthesis <code>&#39;)&#39;</code> must have a corresponding left parenthesis <code>&#39;(&#39;</code>.</li><li>Left parenthesis <code>&#39;(&#39;</code> must go before the corresponding right parenthesis <code>&#39;)&#39;</code>.</li><li><code>&#39;*&#39;</code> could be treated as a single right parenthesis <code>&#39;)&#39;</code> or a single left parenthesis <code>&#39;(&#39;</code> or an empty string <code>&quot;&quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;()&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;(*)&quot;</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(*))&quot;</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> is <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code> or <code>&#39;*&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个只包含三种字符的字符串，支持的字符类型分别是 <code>&#39;(&#39;</code>、<code>&#39;)&#39;</code> 和 <code>&#39;*&#39;</code>。请你检验这个字符串是否为有效字符串，如果是有效字符串返回 <code>true</code> 。</p><p>有效字符串符合如下规则：</p><ul><li>任何左括号 <code>&#39;(&#39;</code> 必须有相应的右括号 <code>&#39;)&#39;</code>。</li><li>任何右括号 <code>&#39;)&#39;</code> 必须有相应的左括号 <code>&#39;(&#39;</code> 。</li><li>左括号 <code>&#39;(&#39;</code> 必须在对应的右括号之前 <code>&#39;)&#39;</code>。</li><li><code>&#39;*&#39;</code> 可以被视为单个右括号 <code>&#39;)&#39;</code> ，或单个左括号 <code>&#39;(&#39;</code> ，或一个空字符串。</li><li>一个空字符串也被视为有效字符串。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>括号匹配的问题可以用栈求解。</p><p>如果字符串中没有星号，则只需要一个栈存储左括号，从左到右遍历字符串的过程中检查括号是否匹配。</p><p>在有星号的情况下，需要两个栈分别存储左括号和星号。从左到右遍历字符串：</p><ul><li>如果遇到左括号，则将当前下标存入左括号栈。</li><li>如果遇到星号，则将当前下标存入星号栈。</li><li>如果遇到右括号，则需要有一个左括号或星号进行匹配，由于星号也可以看成右括号或者空字符串，因此当前的右括号应优先和左括号匹配，没有左括号时再和星号匹配： <ol><li>如果左括号栈不为空，则从左括号栈弹出栈顶元素；</li><li>如果左括号栈为空且星号栈不为空，则从星号栈弹出栈顶元素；</li><li>如果左括号栈和星号栈都为空，则没有字符可以和当前的右括号匹配，返回 <code>false</code>。</li></ol></li></ul><p>遍历结束之后，左括号栈和星号栈可能还有元素。为了将每个左括号匹配，需要将星号看成右括号，且每个左括号必须出现在其匹配的星号之前。当两个栈都不为空时，每次从左括号栈和星号栈分别弹出栈顶元素，对应左括号下标和星号下标，如果左括号下标大于星号下标则返回 <code>false</code>。</p><p>最终判断左括号栈是否为空。如果左括号栈为空，则左括号全部匹配完毕，剩下的星号都可以看成空字符串，此时 <code>s</code> 是有效的括号字符串，返回 <code>true</code>。如果左括号栈不为空，则还有左括号无法匹配，此时 <code>s</code> 不是有效的括号字符串，返回 <code>false</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkValidString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> pt_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> star_stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> pt_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> star_stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> pt_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>star_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> star_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> star_stack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pt_stack<span class="token punctuation">[</span>pt_stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> star_stack<span class="token punctuation">[</span>star_stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		pt_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		star_stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> pt_stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"761",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/special-binary-string",target:"_blank",rel:"noopener noreferrer"},C=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},N=n("code",null,"递归",-1),j=n("code",null,"字符串",-1),B={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"2116",-1),A={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"栈",-1),G=n("code",null,"贪心",-1),H=n("code",null,"字符串",-1),z={style:{"text-align":"left"}};function D(F,J){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return i(),u("div",null,[n("h1",h,[_,s(),n("a",m,[s("678. 有效的括号字符串"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",y,[x,a(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",L,[n("a",V,[s("特殊的二进制序列"),a(o)])]),C,n("td",I,[a(e,{to:"/tag/recursion.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[j]),_:1})]),n("td",B,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[O,n("td",A,[n("a",M,[s("判断一个括号字符串是否有效"),a(o)])]),R,n("td",S,[a(e,{to:"/tag/stack.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[H]),_:1})]),n("td",z,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const P=l(k,[["render",D],["__file","0678.html.vue"]]);export{P as default};
