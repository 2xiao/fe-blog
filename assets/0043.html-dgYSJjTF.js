import{_ as c,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-MXSjQbID.js";const k={},_=n("h1",{id:"_43-字符串相乘",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_43-字符串相乘","aria-hidden":"true"},"#"),s(" 43. 字符串相乘")],-1),m=n("code",null,"数学",-1),h=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>, also represented as a string.</p><p><strong>Note:</strong> You must not use any built-in BigInteger library or convert the inputs to integer directly.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = &quot;2&quot;, num2 = &quot;3&quot;</p><p>Output: &quot;6&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = &quot;123&quot;, num2 = &quot;456&quot;</p><p>Output: &quot;56088&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num1.length, num2.length &lt;= 200</code></li><li><code>num1</code> and <code>num2</code> consist of digits only.</li><li>Both <code>num1</code> and <code>num2</code> do not contain any leading zero, except the number <code>0</code> itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个以字符串形式表示的非负整数 <code>num1</code> 和 <code>num2</code>，返回 <code>num1</code> 和 <code>num2</code> 的乘积，它们的乘积也表示为字符串形式。</p><p>注意：不能使用任何内置的 <code>BigInteger</code> 库或直接将输入转换为整数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>需要逐步模拟乘法过程，确保处理大数字时不会溢出。</p><ul><li>创建一个大小为 <code>m + n</code> 的数组 <code>res</code>，其中 <code>m</code> 和 <code>n</code> 分别是两个输入字符串的长度。这个大小足够存储乘法结果的最大可能位数。</li><li>从两个字符串的末尾开始反向遍历（从最低位到最高位）。对于每一对数字，将它们转换为整数进行相乘，并将结果放置在 <code>res</code> 数组的相应位置。</li><li>在将结果放入 <code>res</code> 数组时，需跟踪进位。由于乘积可能超过 <code>10</code>，因此需要计算进位并相应地调整 <code>res</code> 数组中的当前位。</li><li>填充完 <code>res</code> 数组后，将其转换为字符串。在此过程中，跳过前导零，构建最终的乘积字符串。</li><li>处理边界情况，若字符串为空，乘积应直接返回 <code>&quot;0&quot;</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是两个字符串的长度，因为需要遍历每一个数字。</li><li><strong>空间复杂度</strong>：<code>O(m + n)</code>，用于存储中间结果的 <code>res</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">multiply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> num1<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> num2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 模拟乘法过程</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>num2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> sum <span class="token operator">=</span> product <span class="token operator">+</span> res<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			res<span class="token punctuation">[</span>i <span class="token operator">+</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
			res<span class="token punctuation">[</span>i <span class="token operator">+</span> j<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 跳过前导零</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> str <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 处理边界条件</span>
	<span class="token keyword">return</span> str<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2",-1),j=n("td",{style:{"text-align":"left"}},"两数相加",-1),B={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"递归",-1),C=n("code",null,"链表",-1),E=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"66",-1),A=n("td",{style:{"text-align":"left"}},"加一",-1),G={style:{"text-align":"center"}},M={style:{"text-align":"left"}},S=n("code",null,"数组",-1),T=n("code",null,"数学",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"67",-1),K=n("td",{style:{"text-align":"left"}},"二进制求和",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"位运算",-1),W=n("code",null,"数学",-1),X=n("code",null,"字符串",-1),Z=n("code",null,"1+",-1),$=n("td",{style:{"text-align":"center"}},"🟢",-1),nn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"415",-1),an=n("td",{style:{"text-align":"left"}},"字符串相加",-1),on={style:{"text-align":"center"}},ln={style:{"text-align":"left"}},pn=n("code",null,"数学",-1),cn=n("code",null,"字符串",-1),rn=n("code",null,"模拟",-1),dn=n("td",{style:{"text-align":"center"}},"🟢",-1),un={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"2288",-1),hn=n("td",{style:{"text-align":"left"}},"价格减免",-1),gn=n("td",{style:{"text-align":"center"}},null,-1),bn={style:{"text-align":"left"}},fn=n("code",null,"字符串",-1),vn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/apply-discount-to-prices",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://leetcode.com/problems/apply-discount-to-prices",target:"_blank",rel:"noopener noreferrer"};function qn(jn,Bn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[_,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/math.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",v,[y,t(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,j,n("td",B,[t(a,{to:"/problem/0002.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",I,[t(a,{to:"/tag/recursion.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/tag/linked-list.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[E]),_:1})]),L,n("td",V,[n("a",O,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[z,A,n("td",G,[t(a,{to:"/problem/0066.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",M,[t(a,{to:"/tag/array.html"},{default:e(()=>[S]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[T]),_:1})]),Y,n("td",D,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",H,[s("🔗"),t(o)])])]),n("tr",null,[J,K,n("td",P,[t(a,{to:"/problem/0067.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Q,[t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[U]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[W]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[X]),_:1}),s(),Z]),$,n("td",nn,[n("a",sn,[s("🀄️"),t(o)]),s(),n("a",tn,[s("🔗"),t(o)])])]),n("tr",null,[en,an,n("td",on,[t(a,{to:"/problem/0415.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",ln,[t(a,{to:"/tag/math.html"},{default:e(()=>[pn]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[cn]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[rn]),_:1})]),dn,n("td",un,[n("a",kn,[s("🀄️"),t(o)]),s(),n("a",_n,[s("🔗"),t(o)])])]),n("tr",null,[mn,hn,gn,n("td",bn,[t(a,{to:"/tag/string.html"},{default:e(()=>[fn]),_:1})]),vn,n("td",yn,[n("a",xn,[s("🀄️"),t(o)]),s(),n("a",wn,[s("🔗"),t(o)])])])])])])}const Nn=c(k,[["render",qn],["__file","0043.html.vue"]]);export{Nn as default};
