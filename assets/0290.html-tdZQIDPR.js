import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-9Xw5divW.js";const k={},h=n("h1",{id:"_290-单词规律",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_290-单词规律","aria-hidden":"true"},"#"),s(" 290. 单词规律")],-1),_=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/word-pattern",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/word-pattern",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.</p><p>Here <strong>follow</strong> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <strong>non-empty</strong> word in <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat dog&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pattern = &quot;abba&quot;, s = &quot;dog cat cat fish&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: pattern = &quot;aaaa&quot;, s = &quot;dog cat cat dog&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pattern.length &lt;= 300</code></li><li><code>pattern</code> contains only lower-case English letters.</li><li><code>1 &lt;= s.length &lt;= 3000</code></li><li><code>s</code> contains only lowercase English letters and spaces <code>&#39; &#39;</code>.</li><li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li><li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一种规律 <code>pattern</code> 和一个字符串 <code>s</code> ，判断 <code>s</code> 是否遵循相同的规律。</p><p>这里的 <strong>遵循</strong> 指完全匹配，例如， <code>pattern</code> 里的每个字母和字符串 <code>s</code> 中的每个非空单词之间存在着双向连接的对应规律。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了判断字符串是否遵循相同的规律，可以使用两个哈希表 <code>map1</code> 和 <code>map2</code> 来分别建立字符到单词和单词到字符的映射关系。具体的思路如下：</p><ol><li><p><strong>分割字符串</strong>：首先，将输入的字符串 <code>str</code> 使用空格分割成一个单词数组。</p></li><li><p><strong>建立映射关系</strong>：对于规律字符串 <code>pattern</code> 和单词数组，同时遍历它们的每个元素。对于 <code>pattern[i]</code> 和 <code>arr[i]</code>，如果 <code>pattern[i]</code> 已经在 <code>map1</code> 中，但对应的值不等于 <code>arr[i]</code>，说明不满足规律，返回 <code>false</code>；如果 <code>pattern[i]</code> 不在 <code>map1</code> 中，但 <code>arr[i]</code> 在 <code>map2</code> 中，说明不满足规律，返回 <code>false</code>。如果都符合条件，则建立映射关系。</p></li><li><p><strong>返回结果</strong>：遍历结束后，如果没有发现不满足规律的情况，说明字符串满足相同的规律，返回 <code>true</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是字符集的大小，通常是常数大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">pattern</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordPattern</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pattern<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">!==</span> pattern<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> map2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>map2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> pattern<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"205",-1),q=n("td",{style:{"text-align":"left"}},"同构字符串",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/isomorphic-strings",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/isomorphic-strings",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"291",-1),M=n("td",{style:{"text-align":"left"}},"单词规律 II 🔒",-1),R=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"哈希表",-1),H=n("code",null,"字符串",-1),P=n("code",null,"回溯",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/word-pattern-ii",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/word-pattern-ii",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"890",-1),J=n("td",{style:{"text-align":"left"}},"查找和替换模式",-1),K=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),X=n("code",null,"字符串",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/find-and-replace-pattern",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/find-and-replace-pattern",target:"_blank",rel:"noopener noreferrer"};function sn(tn,an){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",g,[f,t(o)]),s(),n("a",b,[v,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[t(e,{to:"/problem/0205.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[B,M,R,n("td",A,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[P]),_:1})]),S,n("td",T,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",D,[s("🔗"),t(o)])])]),n("tr",null,[F,J,K,n("td",Q,[t(e,{to:"/tag/array.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[s("🀄️"),t(o)]),s(),n("a",nn,[s("🔗"),t(o)])])])])])])}const on=l(k,[["render",sn],["__file","0290.html.vue"]]);export{on as default};
