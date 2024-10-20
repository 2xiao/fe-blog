import{_ as p,r as c,o as i,c as r,a as t,d as s,b as n,w as a,f as u,e as d}from"./app-Fucr7yuT.js";const k={},_={id:"_17-电话号码的字母组合",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#_17-电话号码的字母组合","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"哈希表",-1),b=t("code",null,"字符串",-1),f=t("code",null,"回溯",-1),v={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p><p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p><figure><img src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = &quot;23&quot;</p><p>Output: [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = &quot;&quot;</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = &quot;2&quot;</p><p>Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= digits.length &lt;= 4</code></li><li><code>digits[i]</code> is a digit in the range <code>[&#39;2&#39;, &#39;9&#39;]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个仅包含数字 <code>2-9</code> 的字符串，返回所有它能表示的字母组合。答案可以按 <strong>任意顺序</strong> 返回。</p><p>给出数字到字母的映射如下（与电话按键相同）。注意 <code>1</code> 不对应任何字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数字与字母的映射关系：</strong> 首先，需要建立数字与字母的映射关系，即 <code>2</code> 对应 <code>&quot;abc&quot;</code>，<code>3</code> 对应 <code>&quot;def&quot;</code>，以此类推。可以使用一个数组或对象来存储这种映射关系。</p></li><li><p><strong>回溯过程：</strong> 定义一个回溯函数 <code>backtrack</code>，接收当前需要处理的数字索引 <code>index</code> 和当前已生成的字符串 <code>current</code> 作为参数。</p></li><li><p><strong>终止条件：</strong> 在回溯的过程中，需要判断当前字符串的长度是否等于输入数字字符串的长度。如果相等，则将当前字符串加入结果集。</p></li><li><p><strong>递归调用：</strong> 在回溯过程中，根据当前数字的映射关系，逐个尝试每个对应的字母。对于当前数字的每个映射字母，都可以选择加入当前字符串，然后递归调用下一层，之后需要撤销当前选择，继续尝试下一个映射字母。</p></li><li><p><strong>循环遍历：</strong> 对于当前数字的每个映射字母，通过循环遍历的方式实现，确保每个字母都被考虑到。</p></li><li><p><strong>返回结果：</strong> 最终通过调用 <code>backtrack</code> 函数得到所有符合条件的字符串组合，返回这些组合的数组作为最终结果。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">letterCombinations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>digits<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> digitToLetters <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
		<span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span>
		<span class="token number">4</span><span class="token operator">:</span> <span class="token string">&#39;ghi&#39;</span><span class="token punctuation">,</span>
		<span class="token number">5</span><span class="token operator">:</span> <span class="token string">&#39;jkl&#39;</span><span class="token punctuation">,</span>
		<span class="token number">6</span><span class="token operator">:</span> <span class="token string">&#39;mno&#39;</span><span class="token punctuation">,</span>
		<span class="token number">7</span><span class="token operator">:</span> <span class="token string">&#39;pqrs&#39;</span><span class="token punctuation">,</span>
		<span class="token number">8</span><span class="token operator">:</span> <span class="token string">&#39;tuv&#39;</span><span class="token punctuation">,</span>
		<span class="token number">9</span><span class="token operator">:</span> <span class="token string">&#39;wxyz&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> digitToLetters<span class="token punctuation">[</span>digits<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"22",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=t("code",null,"字符串",-1),N=t("code",null,"动态规划",-1),M=t("code",null,"回溯",-1),V={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"39",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"center"}},z={style:{"text-align":"left"}},A=t("code",null,"数组",-1),G=t("code",null,"回溯",-1),S={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"401",-1),F={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"位运算",-1),Q=t("code",null,"回溯",-1),U={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"2266",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"哈希表",-1),nt=t("code",null,"数学",-1),st=t("code",null,"字符串",-1),at=t("code",null,"1+",-1),et={style:{"text-align":"left"}},ot=t("td",{style:{"text-align":"center"}},"3014",-1),lt={style:{"text-align":"left"}},ct={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},null,-1),it={style:{"text-align":"left"}},rt=t("code",null,"贪心",-1),ut=t("code",null,"数学",-1),dt=t("code",null,"字符串",-1),kt={style:{"text-align":"left"}},_t=t("td",{style:{"text-align":"center"}},"3016",-1),ht={style:{"text-align":"left"}},gt={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},null,-1),bt={style:{"text-align":"left"}},ft=t("code",null,"贪心",-1),vt=t("code",null,"哈希表",-1),yt=t("code",null,"字符串",-1),xt=t("code",null,"2+",-1),qt={style:{"text-align":"left"}};function wt(Et,It){const o=c("ExternalLinkIcon"),l=c("font"),e=c("RouterLink");return i(),r("div",null,[t("h1",_,[h,s(),t("a",g,[s("17. 电话号码的字母组合"),n(o)])]),t("p",null,[s("🟠 "),n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),n(e,{to:"/tag/hash-table.html"},{default:a(()=>[m]),_:1}),s(),n(e,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),s(),n(e,{to:"/tag/backtracking.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),t("a",v,[y,n(o)])]),x,u(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,t("td",E,[t("a",I,[s("括号生成"),n(o)])]),t("td",L,[n(e,{to:"/problem/0022.html"},{default:a(()=>[s("[✓]")]),_:1})]),t("td",j,[n(e,{to:"/tag/string.html"},{default:a(()=>[C]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[N]),_:1}),s(),n(e,{to:"/tag/backtracking.html"},{default:a(()=>[M]),_:1})]),t("td",V,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[B,t("td",O,[t("a",R,[s("组合总和"),n(o)])]),t("td",T,[n(e,{to:"/problem/0039.html"},{default:a(()=>[s("[✓]")]),_:1})]),t("td",z,[n(e,{to:"/tag/array.html"},{default:a(()=>[A]),_:1}),s(),n(e,{to:"/tag/backtracking.html"},{default:a(()=>[G]),_:1})]),t("td",S,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",H,[s("二进制手表"),n(o)])]),J,t("td",K,[n(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[P]),_:1}),s(),n(e,{to:"/tag/backtracking.html"},{default:a(()=>[Q]),_:1})]),t("td",U,[n(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[s("统计打字方案数"),n(o)])]),Z,t("td",$,[n(e,{to:"/tag/hash-table.html"},{default:a(()=>[tt]),_:1}),s(),n(e,{to:"/tag/math.html"},{default:a(()=>[nt]),_:1}),s(),n(e,{to:"/tag/string.html"},{default:a(()=>[st]),_:1}),s(),at]),t("td",et,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[ot,t("td",lt,[t("a",ct,[s("输入单词需要的最少按键次数 I"),n(o)])]),pt,t("td",it,[n(e,{to:"/tag/greedy.html"},{default:a(()=>[rt]),_:1}),s(),n(e,{to:"/tag/math.html"},{default:a(()=>[ut]),_:1}),s(),n(e,{to:"/tag/string.html"},{default:a(()=>[dt]),_:1})]),t("td",kt,[n(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1})])]),t("tr",null,[_t,t("td",ht,[t("a",gt,[s("输入单词需要的最少按键次数 II"),n(o)])]),mt,t("td",bt,[n(e,{to:"/tag/greedy.html"},{default:a(()=>[ft]),_:1}),s(),n(e,{to:"/tag/hash-table.html"},{default:a(()=>[vt]),_:1}),s(),n(e,{to:"/tag/string.html"},{default:a(()=>[yt]),_:1}),s(),xt]),t("td",qt,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const jt=p(k,[["render",wt],["__file","0017.html.vue"]]);export{jt as default};
