import{_ as l,r as p,o as i,c as u,a as n,d as s,b as a,w as t,f as r,e as d}from"./app-Fucr7yuT.js";const k={},h={id:"_32-最长有效括号",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_32-最长有效括号","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/longest-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"栈",-1),b=n("code",null,"字符串",-1),g=n("code",null,"动态规划",-1),f={href:"https://leetcode.com/problems/longest-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string containing just the characters <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>, return <em>the length of the longest valid (well-formed) parentheses</em> <em>substring</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;(()&quot;</p><p>Output: 2</p><p>Explanation: The longest valid parentheses substring is &quot;()&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;)()())&quot;</p><p>Output: 4</p><p>Explanation: The longest valid parentheses substring is &quot;()()&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;&quot;</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 3 * 10^4</code></li><li><code>s[i]</code> is <code>&#39;(&#39;</code>, or <code>&#39;)&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个只包含 <code>&#39;(&#39;</code> 和 <code>&#39;)&#39;</code> 的字符串，找出最长有效（格式正确且连续）括号 <strong>子串</strong> 的长度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用栈来解决这道题。</p><ul><li><p>保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」，初始化为 <code>-1</code>；</p></li><li><p>栈里其他元素维护左括号的下标。</p></li><li><p>从前往后遍历字符串:</p><ul><li>对于遇到的每个 <code>&#39;(&#39;</code> ，将它的下标放入栈中；</li><li>对于遇到的每个 <code>&#39;)&#39;</code> ，先弹出栈顶元素表示匹配了当前右括号；</li><li>如果栈为空，说明当前的右括号为没有被匹配的右括号，将其下标放入栈中来更新之前提到的「最后一个没有被匹配的右括号的下标」；</li><li>如果栈不为空，当前右括号的下标减去栈顶元素即为「以该右括号为结尾的最长有效括号的长度」；</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为字符串的长度，需要遍历整个字符串；</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，栈的大小在最坏情况下会达到 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestValidParentheses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> i <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"20",-1),E={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"栈",-1),N=n("code",null,"字符串",-1),O={style:{"text-align":"left"}};function j(B,T){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",h,[m,s(),n("a",_,[s("32. 最长有效括号"),a(o)])]),n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[x,a(o)])]),y,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,n("td",E,[n("a",V,[s("有效的括号"),a(o)])]),n("td",C,[a(e,{to:"/problem/0020.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[a(e,{to:"/tag/stack.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[N]),_:1})]),n("td",O,[a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])])])])])}const G=l(k,[["render",j],["__file","0032.html.vue"]]);export{G as default};
