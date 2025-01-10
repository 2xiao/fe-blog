import{_ as c,r as p,o as r,c as i,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-XFeYdzZv.js";const k={},h=n("h1",{id:"_20-有效的括号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-有效的括号","aria-hidden":"true"},"#"),s(" 20. 有效的括号")],-1),_=n("code",null,"栈",-1),m=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p><p>An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;()&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;()[]{}&quot;</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(]&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>括号匹配问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用栈来保存未匹配的左括号，从左到右依次扫描字符串。当扫描到左括号时，则将其压入栈中；</p><p>当扫描到右括号时，从栈顶取出一个左括号。如果能够匹配，比如“<code>(</code>”跟“<code>)</code>”匹配，“<code>[</code>”跟“<code>]</code>”匹配，“<code>{</code>”跟“<code>}</code>”匹配，则继续扫描剩下的字符串。</p><p>如果扫描的过程中，遇到不能配对的右括号，或者栈中没有数据，则说明为非法格式。</p><p>当所有的括号都扫描完成之后，如果栈为空，则说明字符串为合法格式；否则，说明有未匹配的左括号，为非法格式。</p><p>需要注意，空字符串是满足括号匹配的，即输出 <code>true</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> v <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span> <span class="token operator">||</span> v <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;}&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 简化写法</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		obj <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&#39;]&#39;</span><span class="token operator">:</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span>
			<span class="token string-property property">&#39;}&#39;</span><span class="token operator">:</span> <span class="token string">&#39;{&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;[{(&#39;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">!=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"22",-1),q=n("td",{style:{"text-align":"left"}},"括号生成",-1),E={style:{"text-align":"center"}},V={style:{"text-align":"left"}},j=n("code",null,"字符串",-1),O=n("code",null,"动态规划",-1),C=n("code",null,"回溯",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"32",-1),A=n("td",{style:{"text-align":"left"}},"最长有效括号",-1),G={style:{"text-align":"center"}},S={style:{"text-align":"left"}},T=n("code",null,"栈",-1),z=n("code",null,"字符串",-1),D=n("code",null,"动态规划",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/longest-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/longest-valid-parentheses",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"301",-1),P=n("td",{style:{"text-align":"left"}},"删除无效的括号",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"广度优先搜索",-1),X=n("code",null,"字符串",-1),Y=n("code",null,"回溯",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/remove-invalid-parentheses",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/remove-invalid-parentheses",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"1003",-1),an=n("td",{style:{"text-align":"left"}},"检查替换后的词是否有效",-1),en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},pn=n("code",null,"栈",-1),ln=n("code",null,"字符串",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),rn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/check-if-word-is-valid-after-substitutions",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/check-if-word-is-valid-after-substitutions",target:"_blank",rel:"noopener noreferrer"},kn=n("td",{style:{"text-align":"center"}},"2116",-1),hn=n("td",{style:{"text-align":"left"}},"判断一个括号字符串是否有效",-1),_n=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},gn=n("code",null,"栈",-1),bn=n("code",null,"贪心",-1),vn=n("code",null,"字符串",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"center"}},"2337",-1),En=n("td",{style:{"text-align":"left"}},"移动片段得到字符串",-1),Vn={style:{"text-align":"center"}},jn={style:{"text-align":"left"}},On=n("code",null,"双指针",-1),Cn=n("code",null,"字符串",-1),In=n("td",{style:{"text-align":"center"}},"🟠",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/move-pieces-to-obtain-a-string",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://leetcode.com/problems/move-pieces-to-obtain-a-string",target:"_blank",rel:"noopener noreferrer"};function Rn(An,Gn){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,t(o)]),s(),n("a",v,[f,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[t(e,{to:"/problem/0022.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/string.html"},{default:a(()=>[j]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[C]),_:1})]),I,n("td",L,[n("a",N,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[R,A,n("td",G,[t(e,{to:"/problem/0032.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",S,[t(e,{to:"/tag/stack.html"},{default:a(()=>[T]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[D]),_:1})]),F,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[M,P,Q,n("td",U,[t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[X]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])]),n("tr",null,[tn,an,en,n("td",on,[t(e,{to:"/tag/stack.html"},{default:a(()=>[pn]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[ln]),_:1})]),cn,n("td",rn,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",un,[s("🔗"),t(o)])])]),n("tr",null,[kn,hn,_n,n("td",mn,[t(e,{to:"/tag/stack.html"},{default:a(()=>[gn]),_:1}),s(),t(e,{to:"/tag/greedy.html"},{default:a(()=>[bn]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[vn]),_:1})]),fn,n("td",yn,[n("a",xn,[s("🀄️"),t(o)]),s(),n("a",wn,[s("🔗"),t(o)])])]),n("tr",null,[qn,En,n("td",Vn,[t(e,{to:"/problem/2337.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",jn,[t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[On]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[Cn]),_:1})]),In,n("td",Ln,[n("a",Nn,[s("🀄️"),t(o)]),s(),n("a",Bn,[s("🔗"),t(o)])])])])])])}const Tn=c(k,[["render",Rn],["__file","0020.html.vue"]]);export{Tn as default};
