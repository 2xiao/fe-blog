import{_ as l,r as t,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_1190-反转每对括号间的子串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1190-反转每对括号间的子串","aria-hidden":"true"},"#"),s(" 1190. 反转每对括号间的子串")],-1),h=n("code",null,"栈",-1),v=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/reverse-substrings-between-each-pair-of-parentheses",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> that consists of lower case English letters and brackets.</p><p>Reverse the strings in each pair of matching parentheses, starting from the innermost one.</p><p>Your result should <strong>not</strong> contain any brackets.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;(abcd)&quot;</p><p>Output: &quot;dcba&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;(u(love)i)&quot;</p><p>Output: &quot;iloveu&quot;</p><p>Explanation: The substring &quot;love&quot; is reversed first, then the whole string is reversed.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(ed(et(oc))el)&quot;</p><p>Output: &quot;leetcode&quot;</p><p>Explanation: First, we reverse the substring &quot;oc&quot;, then &quot;etco&quot;, and finally, the whole string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> only contains lower case English characters and parentheses.</li><li>It is guaranteed that all parentheses are balanced.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出一个字符串  <code>s</code>（仅含有小写英文字母和括号）。请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。注意，您的结果中 <strong>不应</strong> 包含任何括号。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于括号序列相关的题目，通用的解法是使用递归或栈。本题中使用栈解决。</p><p>从左到右遍历该字符串，使用字符串 <code>str</code> 记录当前层所遍历到的小写英文字母。对于当前遍历的字符：</p><ul><li>如果是左括号，将 <code>str</code> 插入到栈中，并将 <code>str</code> 置为空，进入下一层；</li><li>如果是右括号，则说明遍历完了当前层，需要将 <code>str</code> 反转，返回给上一层。具体地，将栈顶字符串弹出，然后将反转后的 <code>str</code> 拼接到栈顶字符串末尾，将结果赋值给 <code>str</code>。</li><li>如果是小写英文字母，将其加到 <code>str</code> 末尾。</li></ul><p>仅在遇到右括号时才进行字符串处理，这样可以保证是按照从括号内到外的顺序处理字符串。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseParentheses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
			str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			str <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			str <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function q(w,x){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",m,[b,a(p)]),s(),n("a",g,[_,a(p)])]),f])}const E=l(d,[["render",q],["__file","1190.html.vue"]]);export{E as default};
