import{_ as p,r as c,o as r,c as i,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-5LzGvT4H.js";const k={},m=n("h1",{id:"_383-赎金信",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_383-赎金信","aria-hidden":"true"},"#"),s(" 383. 赎金信")],-1),h=n("code",null,"哈希表",-1),_=n("code",null,"字符串",-1),g=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/ransom-note",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/ransom-note",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code> <em>if</em><code>ransomNote</code><em>can be constructed by using the letters from</em><code>magazine</code> <em>and</em><code>false</code><em>otherwise</em>.</p><p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: ransomNote = &quot;a&quot;, magazine = &quot;b&quot;</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ransomNote = &quot;aa&quot;, magazine = &quot;ab&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: ransomNote = &quot;aa&quot;, magazine = &quot;aab&quot;</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10^5</code></li><li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串：<code>ransomNote</code> 和 <code>magazine</code> ，判断 <code>ransomNote</code> 能不能由 <code>magazine</code> 里面的字符构成。</p><p>如果可以，返回 <code>true</code> ；否则返回 <code>false</code> 。</p><p><code>magazine</code> 中的每个字符只能在 <code>ransomNote</code> 中使用一次。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用哈希表记录每个字符的出现次数</strong>：遍历杂志字符串，使用哈希表记录每个字符的出现次数。</p></li><li><p><strong>检查赎金信中的字符</strong>：遍历赎金信字符串，对于每个字符，查看哈希表中是否存在该字符并且出现次数大于零，如果是，则减少对应字符的出现次数；如果不是，则返回 <code>false</code>。</p></li><li><p><strong>返回结果</strong>：如果遍历结束，说明赎金信中的每个字符在杂志中都出现了足够次数，返回 <code>true</code>；否则返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(N + M)</code>，其中 <code>N</code> 和 <code>M</code> 分别是赎金信和杂志的长度。</li><li><strong>空间复杂度</strong>：<code>O(K)</code>，其中 <code>K</code> 是字符集的大小，这里假设字符集是有限的，通常是常数大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ransomNote</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">magazine</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canConstruct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ransomNote<span class="token punctuation">,</span> magazine</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 记录杂志中每个字符的出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> magazine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> num <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查赎金信中的字符</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> ransomNote<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> num <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"691",-1),q=n("td",{style:{"text-align":"left"}},"贴纸拼词",-1),z=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"位运算",-1),I=n("code",null,"数组",-1),L=n("code",null,"字符串",-1),O=n("code",null,"3+",-1),V=n("td",{style:{"text-align":"left"}},"🔴",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/stickers-to-spell-word",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/stickers-to-spell-word",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"1160",-1),R=n("td",{style:{"text-align":"left"}},"拼写单词",-1),G=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"数组",-1),A=n("code",null,"哈希表",-1),D=n("code",null,"字符串",-1),F=n("code",null,"1+",-1),H=n("td",{style:{"text-align":"left"}},"🟢",-1),J={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[_]),_:1}),s(),e(a,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,e(o)]),s(),n("a",v,[y,e(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[N,q,z,n("td",E,[e(a,{to:"/tag/bit-manipulation.html"},{default:t(()=>[C]),_:1}),s(),e(a,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[L]),_:1}),s(),O]),V,n("td",j,[n("a",B,[s("🀄️"),e(o)]),s(),n("a",M,[s("🔗"),e(o)])])]),n("tr",null,[K,R,G,n("td",S,[e(a,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[A]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[D]),_:1}),s(),F]),H,n("td",J,[n("a",P,[s("🀄️"),e(o)]),s(),n("a",Q,[s("🔗"),e(o)])])])])])])}const Z=p(k,[["render",U],["__file","0383.html.vue"]]);export{Z as default};
