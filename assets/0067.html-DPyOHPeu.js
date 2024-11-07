import{_ as r,r as c,o as i,c as d,a as n,b as s,d as t,w as a,f as u,e as p}from"./app-OX-nYmHS.js";const h={},_=n("h1",{id:"_67-二进制求和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_67-二进制求和","aria-hidden":"true"},"#"),s(" 67. 二进制求和")],-1),k=n("code",null,"位运算",-1),m=n("code",null,"数学",-1),b=n("code",null,"字符串",-1),f=n("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = &quot;11&quot;, b = &quot;1&quot;</p><p>Output: &quot;100&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = &quot;1010&quot;, b = &quot;1011&quot;</p><p>Output: &quot;10101&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li><li><code>a</code> and <code>b</code> consist only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li><li>Each string does not contain leading zeros except for the zero itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个二进制字符串 <code>a</code> 和 <code>b</code> ，以二进制字符串的形式返回它们的和。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',11),w=p(`<p>可以设置一个变量 <code>carry</code> 来表示进位，初始时 <code>carry = 0</code>。</p><p>遍历两个二进制字符串的每一位，从末尾开始逐位相加，并加上进位 <code>carry</code>。将相加的结果和进位的和对 <code>2</code> 取余数，得到当前位的值，对 <code>2</code> 取商，得到进位。将当前位的值插入结果字符串的开头，然后更新进位，继续遍历下一位，直到完成所有位的相加。</p><p>最后，若最高位有进位，还需将进位插入结果字符串的开头。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(max(m, n))</code>，其中 <code>m</code> 和 <code>n</code> 是字符串 <code>a</code> 和 <code>b</code> 的长度，因为需要逐位遍历两个二进制字符串，长度较长的字符串决定了迭代的次数。</li><li><strong>空间复杂度</strong>：<code>O(max(m, n))</code>，<code>res</code> 字符串会存储最终的结果，其最大长度为 <code>Math.max(m, n) + 1</code>（在最坏情况下需要存储进位的额外位数）</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// res 存储结果，carry 记录进位</span>
	<span class="token keyword">let</span> m <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> b<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 模拟加法逻辑</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> carry<span class="token punctuation">;</span>
		num <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>m <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> carry <span class="token operator">?</span> carry <span class="token operator">+</span> res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),N=n("td",{style:{"text-align":"center"}},"2",-1),C={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},V={style:{"text-align":"left"}},B=n("code",null,"递归",-1),I=n("code",null,"链表",-1),O=n("code",null,"数学",-1),j={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"43",-1),R={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},T={style:{"text-align":"left"}},A=n("code",null,"数学",-1),D=n("code",null,"字符串",-1),F=n("code",null,"模拟",-1),H={style:{"text-align":"left"}},J=n("td",{style:{"text-align":"center"}},"66",-1),K={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"数学",-1),Y={style:{"text-align":"left"}},Z=n("td",{style:{"text-align":"center"}},"989",-1),$={style:{"text-align":"left"}},nn={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},an=n("code",null,"数组",-1),en=n("code",null,"数学",-1),on={style:{"text-align":"left"}};function ln(cn,pn){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[_,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[k]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/simulation.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",g,[y,t(o)]),s(),n("a",v,[x,t(o)])]),q,n("p",null,[s("这道题和 "),t(e,{to:"/problem/0002.html"},{default:a(()=>[s("第 2 题 两数之和")]),_:1}),s(" 思路相同。")]),w,u(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[N,n("td",C,[n("a",L,[s("两数相加"),t(o)])]),n("td",M,[t(e,{to:"/problem/0002.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/recursion.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[O]),_:1})]),n("td",j,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[z,n("td",R,[n("a",G,[s("字符串相乘"),t(o)])]),n("td",S,[t(e,{to:"/problem/0043.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",T,[t(e,{to:"/tag/math.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/simulation.html"},{default:a(()=>[F]),_:1})]),n("td",H,[t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),n("tr",null,[J,n("td",K,[n("a",P,[s("加一"),t(o)])]),n("td",Q,[t(e,{to:"/problem/0066.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",U,[t(e,{to:"/tag/array.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[X]),_:1})]),n("td",Y,[t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),n("tr",null,[Z,n("td",$,[n("a",nn,[s("数组形式的整数加法"),t(o)])]),tn,n("td",sn,[t(e,{to:"/tag/array.html"},{default:a(()=>[an]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[en]),_:1})]),n("td",on,[t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])])])])])}const dn=r(h,[["render",ln],["__file","0067.html.vue"]]);export{dn as default};
