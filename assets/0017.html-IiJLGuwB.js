import{_ as p,r as l,o as i,c as r,a as t,b as n,d as s,w as e,f as d,e as u}from"./app-Kkp_66uf.js";const _={},k=t("h1",{id:"_17-电话号码的字母组合",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_17-电话号码的字母组合","aria-hidden":"true"},"#"),n(" 17. 电话号码的字母组合")],-1),h=t("code",null,"哈希表",-1),g=t("code",null,"字符串",-1),m=t("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p><p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p><figure><img src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = &quot;23&quot;</p><p>Output: [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = &quot;&quot;</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = &quot;2&quot;</p><p>Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= digits.length &lt;= 4</code></li><li><code>digits[i]</code> is a digit in the range <code>[&#39;2&#39;, &#39;9&#39;]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个仅包含数字 <code>2-9</code> 的字符串，返回所有它能表示的字母组合。答案可以按 <strong>任意顺序</strong> 返回。</p><p>给出数字到字母的映射如下（与电话按键相同）。注意 <code>1</code> 不对应任何字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数字与字母的映射关系：</strong> 首先，需要建立数字与字母的映射关系，即 <code>2</code> 对应 <code>&quot;abc&quot;</code>，<code>3</code> 对应 <code>&quot;def&quot;</code>，以此类推。可以使用一个数组或对象来存储这种映射关系。</p></li><li><p><strong>回溯过程：</strong> 定义一个回溯函数 <code>backtrack</code>，接收当前需要处理的数字索引 <code>index</code> 和当前已生成的字符串 <code>current</code> 作为参数。</p></li><li><p><strong>终止条件：</strong> 在回溯的过程中，需要判断当前字符串的长度是否等于输入数字字符串的长度。如果相等，则将当前字符串加入结果集。</p></li><li><p><strong>递归调用：</strong> 在回溯过程中，根据当前数字的映射关系，逐个尝试每个对应的字母。对于当前数字的每个映射字母，都可以选择加入当前字符串，然后递归调用下一层，之后需要撤销当前选择，继续尝试下一个映射字母。</p></li><li><p><strong>循环遍历：</strong> 对于当前数字的每个映射字母，通过循环遍历的方式实现，确保每个字母都被考虑到。</p></li><li><p><strong>返回结果：</strong> 最终通过调用 <code>backtrack</code> 函数得到所有符合条件的字符串组合，返回这些组合的数组作为最终结果。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"22",-1),I=t("td",{style:{"text-align":"left"}},"括号生成",-1),L={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=t("code",null,"字符串",-1),E=t("code",null,"动态规划",-1),N=t("code",null,"回溯",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"39",-1),z=t("td",{style:{"text-align":"left"}},"组合总和",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=t("code",null,"数组",-1),S=t("code",null,"回溯",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"401",-1),P=t("td",{style:{"text-align":"left"}},"二进制手表",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=t("code",null,"位运算",-1),X=t("code",null,"回溯",-1),Y=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"2266",-1),st=t("td",{style:{"text-align":"left"}},"统计打字方案数",-1),et=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"哈希表",-1),lt=t("code",null,"数学",-1),ct=t("code",null,"字符串",-1),pt=t("code",null,"1+",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),rt={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"3014",-1),kt=t("td",{style:{"text-align":"left"}},"输入单词需要的最少按键次数 I",-1),ht=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},mt=t("code",null,"贪心",-1),bt=t("code",null,"数学",-1),ft=t("code",null,"字符串",-1),vt=t("td",{style:{"text-align":"center"}},"🟢",-1),yt={style:{"text-align":"center"}},xt={href:"https://leetcode.cn/problems/minimum-number-of-pushes-to-type-word-i",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},"3016",-1),It=t("td",{style:{"text-align":"left"}},"输入单词需要的最少按键次数 II",-1),Lt=t("td",{style:{"text-align":"center"}},null,-1),jt={style:{"text-align":"left"}},Ct=t("code",null,"贪心",-1),Et=t("code",null,"哈希表",-1),Nt=t("code",null,"字符串",-1),Vt=t("code",null,"2+",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ot={style:{"text-align":"center"}},Rt={href:"https://leetcode.cn/problems/minimum-number-of-pushes-to-type-word-ii",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii",target:"_blank",rel:"noopener noreferrer"};function zt(At,Gt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,t("p",null,[n("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[m]),_:1}),n("  🔗 "),t("a",b,[f,s(o)]),n(),t("a",v,[y,s(o)])]),x,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,I,t("td",L,[s(a,{to:"/problem/0022.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",j,[s(a,{to:"/tag/string.html"},{default:e(()=>[C]),_:1}),n(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[E]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[N]),_:1})]),V,t("td",B,[t("a",O,[n("🀄️"),s(o)]),n(),t("a",R,[n("🔗"),s(o)])])]),t("tr",null,[T,z,t("td",A,[s(a,{to:"/problem/0039.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",G,[s(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[S]),_:1})]),D,t("td",F,[t("a",H,[n("🀄️"),s(o)]),n(),t("a",J,[n("🔗"),s(o)])])]),t("tr",null,[K,P,t("td",Q,[s(a,{to:"/problem/0401.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",U,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[W]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[X]),_:1})]),Y,t("td",Z,[t("a",$,[n("🀄️"),s(o)]),n(),t("a",tt,[n("🔗"),s(o)])])]),t("tr",null,[nt,st,et,t("td",at,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[ot]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[lt]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[ct]),_:1}),n(),pt]),it,t("td",rt,[t("a",dt,[n("🀄️"),s(o)]),n(),t("a",ut,[n("🔗"),s(o)])])]),t("tr",null,[_t,kt,ht,t("td",gt,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[mt]),_:1}),n(),s(a,{to:"/tag/math.html"},{default:e(()=>[bt]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[ft]),_:1})]),vt,t("td",yt,[t("a",xt,[n("🀄️"),s(o)]),n(),t("a",qt,[n("🔗"),s(o)])])]),t("tr",null,[wt,It,Lt,t("td",jt,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[Ct]),_:1}),n(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[Et]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[Nt]),_:1}),n(),Vt]),Bt,t("td",Ot,[t("a",Rt,[n("🀄️"),s(o)]),n(),t("a",Tt,[n("🔗"),s(o)])])])])])])}const St=p(_,[["render",zt],["__file","0017.html.vue"]]);export{St as default};
