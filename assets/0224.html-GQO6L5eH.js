import{_ as p,r as l,o as i,c as r,a as t,b as n,d as s,w as e,f as d,e as u}from"./app-r0ql_Osa.js";const _={},h=t("h1",{id:"_224-基本计算器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_224-基本计算器","aria-hidden":"true"},"#"),n(" 224. 基本计算器")],-1),k=t("code",null,"栈",-1),m=t("code",null,"递归",-1),g=t("code",null,"数学",-1),f=t("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> representing a valid expression, implement a basic calculator to evaluate it, and return <em>the result of the evaluation</em>.</p><p><strong>Note:</strong> You are <strong>not</strong> allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;1 + 1&quot;</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot; 2-1 + 2 &quot;</p><p>Output: 3</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;(1+(4+5+2)-3)+(6+8)&quot;</p><p>Output: 23</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 * 105</code></li><li><code>s</code> consists of digits, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, and <code>&#39; &#39;</code>.</li><li><code>s</code> represents a valid expression.</li><li><code>&#39;+&#39;</code> is <strong>not</strong> used as a unary operation (i.e., <code>&quot;+1&quot;</code> and <code>&quot;+(2 + 3)&quot;</code> is invalid).</li><li><code>&#39;-&#39;</code> could be used as a unary operation (i.e., <code>&quot;-1&quot;</code> and <code>&quot;-(2 + 3)&quot;</code> is valid).</li><li>There will be no two consecutive operators in the input.</li><li>Every number and running calculation will fit in a signed 32-bit integer.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现一个基本的计算器来计算一个简单的字符串表达式的值。字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>加减法计算器，其实就是一个去括号的过程，需要根据 <code>+</code> <code>-</code> 和 <code>(</code> <code>)</code>来判断数字的正负；</li><li>遍历字符串，每当遇到 <code>(</code> ，就使用栈来保存括号前的运算符号；</li><li>注意，负负得正的情况需要特殊处理，所以需要记录每次计算出来的符号；</li><li>遇到 <code>）</code> ，则出栈；</li><li>遇到 <code>+</code> <code>-</code>，则用 <code>sign</code> 来保存数字前的运算符号；</li><li>每个数字的正负都取决于 栈顶和数字前的运算符号的乘积，即：<code>sum * sign * stack[stack.length - 1]</code>；</li><li>将 <code>数字 * 正负符号</code> 累加起来即可；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calculate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isDigit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span> <span class="token operator">&amp;&amp;</span> str <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> sum <span class="token operator">=</span> sum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> sum <span class="token operator">*</span> sign <span class="token operator">*</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> sign <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> sign<span class="token punctuation">)</span><span class="token punctuation">;</span>
				sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	res <span class="token operator">+=</span> sum <span class="token operator">*</span> sign<span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"150",-1),E=t("td",{style:{"text-align":"left"}},"逆波兰表达式求值",-1),N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"栈",-1),V=t("code",null,"数组",-1),z=t("code",null,"数学",-1),j=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"227",-1),T=t("td",{style:{"text-align":"left"}},"基本计算器 II",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},S=t("code",null,"栈",-1),Y=t("code",null,"数学",-1),A=t("code",null,"字符串",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/basic-calculator-ii",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/basic-calculator-ii",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"241",-1),Q=t("td",{style:{"text-align":"left"}},"为运算表达式设计优先级",-1),U=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"递归",-1),Z=t("code",null,"记忆化搜索",-1),$=t("code",null,"数学",-1),tt=t("code",null,"2+",-1),nt=t("td",{style:{"text-align":"center"}},"🟠",-1),st={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},"282",-1),lt=t("td",{style:{"text-align":"left"}},"给表达式添加运算符",-1),ct=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},it=t("code",null,"数学",-1),rt=t("code",null,"字符串",-1),dt=t("code",null,"回溯",-1),ut=t("td",{style:{"text-align":"center"}},"🔴",-1),_t={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://leetcode.com/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"772",-1),gt=t("td",{style:{"text-align":"left"}},"基本计算器 III 🔒",-1),ft={style:{"text-align":"center"}},bt={style:{"text-align":"left"}},vt=t("code",null,"栈",-1),yt=t("code",null,"递归",-1),xt=t("code",null,"数学",-1),wt=t("code",null,"1+",-1),qt=t("td",{style:{"text-align":"center"}},"🔴",-1),It={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/basic-calculator-iii",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/basic-calculator-iii",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},"2019",-1),Lt=t("td",{style:{"text-align":"left"}},"解出数学表达式的学生分数",-1),Vt=t("td",{style:{"text-align":"center"}},null,-1),zt={style:{"text-align":"left"}},jt=t("code",null,"栈",-1),Bt=t("code",null,"记忆化搜索",-1),Ot=t("code",null,"数组",-1),Dt=t("code",null,"3+",-1),Rt=t("td",{style:{"text-align":"center"}},"🔴",-1),Tt={style:{"text-align":"center"}},Gt={href:"https://leetcode.cn/problems/the-score-of-students-solving-math-expression",target:"_blank",rel:"noopener noreferrer"},Ht={href:"https://leetcode.com/problems/the-score-of-students-solving-math-expression",target:"_blank",rel:"noopener noreferrer"},St=t("td",{style:{"text-align":"center"}},"2232",-1),Yt=t("td",{style:{"text-align":"left"}},"向表达式添加括号后的最小结果",-1),At=t("td",{style:{"text-align":"center"}},null,-1),Ft={style:{"text-align":"left"}},Jt=t("code",null,"字符串",-1),Kt=t("code",null,"枚举",-1),Mt=t("td",{style:{"text-align":"center"}},"🟠",-1),Pt={style:{"text-align":"center"}},Qt={href:"https://leetcode.cn/problems/minimize-result-by-adding-parentheses-to-expression",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression",target:"_blank",rel:"noopener noreferrer"};function Wt(Xt,Zt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,t("p",null,[n("🔴 "),s(c,{color:"#ff334b"},{default:e(()=>[n("Hard")]),_:1}),n("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[k]),_:1}),n(),s(a,{to:"/tag/recursion.html"},{default:e(()=>[m]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[g]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[f]),_:1}),n("  🔗 "),t("a",b,[v,s(o)]),n(),t("a",y,[x,s(o)])]),w,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[I,E,t("td",N,[s(a,{to:"/problem/0150.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",C,[s(a,{to:"/tag/stack.html"},{default:e(()=>[L]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[z]),_:1})]),j,t("td",B,[t("a",O,[n("🀄️"),s(o)]),n(),t("a",D,[n("🔗"),s(o)])])]),t("tr",null,[R,T,t("td",G,[s(a,{to:"/problem/0227.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",H,[s(a,{to:"/tag/stack.html"},{default:e(()=>[S]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[Y]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[A]),_:1})]),F,t("td",J,[t("a",K,[n("🀄️"),s(o)]),n(),t("a",M,[n("🔗"),s(o)])])]),t("tr",null,[P,Q,U,t("td",W,[s(a,{to:"/tag/recursion.html"},{default:e(()=>[X]),_:1}),n(),s(a,{to:"/tag/memoization.html"},{default:e(()=>[Z]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[$]),_:1}),n(),tt]),nt,t("td",st,[t("a",et,[n("🀄️"),s(o)]),n(),t("a",at,[n("🔗"),s(o)])])]),t("tr",null,[ot,lt,ct,t("td",pt,[s(a,{to:"/tag/math.html"},{default:e(()=>[it]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[rt]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[dt]),_:1})]),ut,t("td",_t,[t("a",ht,[n("🀄️"),s(o)]),n(),t("a",kt,[n("🔗"),s(o)])])]),t("tr",null,[mt,gt,t("td",ft,[s(a,{to:"/problem/0772.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",bt,[s(a,{to:"/tag/stack.html"},{default:e(()=>[vt]),_:1}),n(),s(a,{to:"/tag/recursion.html"},{default:e(()=>[yt]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[xt]),_:1}),n(),wt]),qt,t("td",It,[t("a",Et,[n("🀄️"),s(o)]),n(),t("a",Nt,[n("🔗"),s(o)])])]),t("tr",null,[Ct,Lt,Vt,t("td",zt,[s(a,{to:"/tag/stack.html"},{default:e(()=>[jt]),_:1}),n(),s(a,{to:"/tag/memoization.html"},{default:e(()=>[Bt]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[Ot]),_:1}),n(),Dt]),Rt,t("td",Tt,[t("a",Gt,[n("🀄️"),s(o)]),n(),t("a",Ht,[n("🔗"),s(o)])])]),t("tr",null,[St,Yt,At,t("td",Ft,[s(a,{to:"/tag/string.html"},{default:e(()=>[Jt]),_:1}),n(),s(a,{to:"/tag/enumeration.html"},{default:e(()=>[Kt]),_:1})]),Mt,t("td",Pt,[t("a",Qt,[n("🀄️"),s(o)]),n(),t("a",Ut,[n("🔗"),s(o)])])])])])])}const tn=p(_,[["render",Wt],["__file","0224.html.vue"]]);export{tn as default};
