import{_ as p,r as l,o as i,c as r,a as t,b as n,d as s,w as e,f as u,e as d}from"./app-Kkp_66uf.js";const h={},_=t("h1",{id:"_1047-删除字符串中的所有相邻重复项",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1047-删除字符串中的所有相邻重复项","aria-hidden":"true"},"#"),n(" 1047. 删除字符串中的所有相邻重复项")],-1),k=t("code",null,"栈",-1),m=t("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting of lowercase English letters. A <strong>duplicate removal</strong> consists of choosing two <strong>adjacent</strong> and <strong>equal</strong> letters and removing them.</p><p>We repeatedly make <strong>duplicate removals</strong> on <code>s</code> until we no longer can.</p><p>Return <em>the final string after all such duplicate removals have been made</em>. It can be proven that the answer is <strong>unique</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abbaca&quot;</p><p>Output: &quot;ca&quot;</p><p>Explanation:</p><p>For example, in &quot;abbaca&quot; we could remove &quot;bb&quot; since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is &quot;aaca&quot;, of which only &quot;aa&quot; is possible, so the final string is &quot;ca&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;azxxzy&quot;</p><p>Output: &quot;ay&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给出由小写字母组成的字符串  S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。在 S 上反复执行重复项删除操作，直到无法继续删除。在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用栈模拟，类似“对对碰”；</p><ul><li>遍历输入的字符串，用栈来存储字符；</li><li>如果栈不为空，且新遍历到的字符与栈顶的字符一样的话，就弹出栈顶字符；</li><li>否则将新遍历到的字符放入栈顶；</li><li>直至扫完整个字符串，栈中剩下的字符串就是最终要输出的结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"1209",-1),w=t("td",{style:{"text-align":"left"}},"删除字符串中的所有相邻重复项 II",-1),j=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=t("code",null,"栈",-1),C=t("code",null,"字符串",-1),L=t("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"2390",-1),R=t("td",{style:{"text-align":"left"}},"从字符串中移除星号",-1),S={style:{"text-align":"center"}},O={style:{"text-align":"left"}},T=t("code",null,"栈",-1),A=t("code",null,"字符串",-1),D=t("code",null,"模拟",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2716",-1),J=t("td",{style:{"text-align":"left"}},"最小化字符串长度",-1),K=t("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},P=t("code",null,"哈希表",-1),Q=t("code",null,"字符串",-1),U=t("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/minimize-string-length",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/minimize-string-length",target:"_blank",rel:"noopener noreferrer"};function tt(nt,st){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[_,t("p",null,[n("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[n("Easy")]),_:1}),n("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[k]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),n("  🔗 "),t("a",g,[f,s(o)]),n(),t("a",b,[v,s(o)])]),x,u(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[q,w,j,t("td",E,[s(a,{to:"/tag/stack.html"},{default:e(()=>[I]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[C]),_:1})]),L,t("td",N,[t("a",V,[n("🀄️"),s(o)]),n(),t("a",z,[n("🔗"),s(o)])])]),t("tr",null,[B,R,t("td",S,[s(a,{to:"/problem/2390.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",O,[s(a,{to:"/tag/stack.html"},{default:e(()=>[T]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[A]),_:1}),n(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[D]),_:1})]),F,t("td",W,[t("a",Y,[n("🀄️"),s(o)]),n(),t("a",G,[n("🔗"),s(o)])])]),t("tr",null,[H,J,K,t("td",M,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[P]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[Q]),_:1})]),U,t("td",X,[t("a",Z,[n("🀄️"),s(o)]),n(),t("a",$,[n("🔗"),s(o)])])])])])])}const at=p(h,[["render",tt],["__file","1047.html.vue"]]);export{at as default};
