import{_ as c,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-3dvbhwow.js";const m={},k=n("h1",{id:"_415-字符串相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_415-字符串相加","aria-hidden":"true"},"#"),s(" 415. 字符串相加")],-1),h=n("code",null,"数学",-1),_=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two non-negative integers, <code>num1</code> and <code>num2</code> represented as string, return <em>the sum of</em> <code>num1</code> <em>and</em> <code>num2</code> <em>as a string</em>.</p><p>You must solve the problem without using any built-in library for handling large integers (such as <code>BigInteger</code>). You must also not convert the inputs to integers directly.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = &quot;11&quot;, num2 = &quot;123&quot;</p><p>Output: &quot;134&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = &quot;456&quot;, num2 = &quot;77&quot;</p><p>Output: &quot;533&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num1 = &quot;0&quot;, num2 = &quot;0&quot;</p><p>Output: &quot;0&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num1.length, num2.length &lt;= 10^4</code></li><li><code>num1</code> and <code>num2</code> consist of only digits.</li><li><code>num1</code> and <code>num2</code> don&#39;t have any leading zeros except for the zero itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串形式的非负整数 <code>num1</code> 和 <code>num2</code> ，计算它们的和并同样以字符串形式返回。</p><p>你不能使用任何內建的用于处理大整数的库（比如 <code>BigInteger</code>）， 也不能直接将输入的字符串转换为整数形式。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>反向遍历</strong>：从字符串的最后一位开始遍历，以便处理进位。这样可以从最低位开始相加，符合数学加法的规则。</p></li><li><p><strong>逐位相加</strong>：逐位相加对应位置的数字。对于每一位，计算两个字符的数值，进行相加并考虑进位。</p></li><li><p><strong>进位处理</strong>：如果某一位的和大于或等于 <code>10</code>，则需要向下一位传递进位（<code>carry</code>），并更新当前位的结果。</p></li><li><p><strong>处理剩余位和进位</strong>：遍历结束后，如果还有进位，则需要在结果字符串前添加进位。</p></li><li><p><strong>结果构建</strong>：使用字符串拼接的方式构建最终结果，注意结果需要反向，因为我们是从低位到高位计算的。</p></li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>：<code>O(max(m, n))</code>，其中 <code>m</code> 和 <code>n</code> 是两个字符串的长度。需要遍历两个字符串的每一位。</li><li><strong>空间复杂度</strong>：<code>O(max(m, n))</code>，用于存储结果字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> j <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> carry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> x1 <span class="token operator">=</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// num1 的当前位</span>
		<span class="token keyword">const</span> x2 <span class="token operator">=</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// num2 的当前位</span>
		<span class="token keyword">const</span> sum <span class="token operator">=</span> x1 <span class="token operator">+</span> x2 <span class="token operator">+</span> carry<span class="token punctuation">;</span> <span class="token comment">// 当前位的和</span>

		result <span class="token operator">=</span> <span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> result<span class="token punctuation">;</span> <span class="token comment">// 结果的当前位，注意拼接方向</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新进位</span>

		i<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 移动到下一位</span>
		j<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 返回最终结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2",-1),j=n("td",{style:{"text-align":"left"}},"两数相加",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},B=n("code",null,"递归",-1),C=n("code",null,"链表",-1),L=n("code",null,"数学",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"43",-1),S=n("td",{style:{"text-align":"left"}},"字符串相乘",-1),Y={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"数学",-1),T=n("code",null,"字符串",-1),A=n("code",null,"模拟",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"989",-1),P=n("td",{style:{"text-align":"left"}},"数组形式的整数加法",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"数学",-1),Z=n("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"};function tn(en,an){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/math.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",v,[y,t(o)])]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,j,n("td",E,[t(a,{to:"/problem/0002.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/recursion.html"},{default:e(()=>[B]),_:1}),s(),t(a,{to:"/tag/linked-list.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",z,[s("🔗"),t(o)])])]),n("tr",null,[R,S,n("td",Y,[t(a,{to:"/problem/0043.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",G,[t(a,{to:"/tag/math.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[A]),_:1})]),D,n("td",F,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])]),n("tr",null,[K,P,n("td",Q,[t(a,{to:"/problem/0989.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",U,[t(a,{to:"/tag/array.html"},{default:e(()=>[W]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[X]),_:1})]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])])])])])}const ln=c(m,[["render",tn],["__file","0415.html.vue"]]);export{ln as default};
