import{_ as i,r as l,o as r,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-3dvbhwow.js";const h={},_=t("h1",{id:"_2262-字符串的总引力",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2262-字符串的总引力","aria-hidden":"true"},"#"),n(" 2262. 字符串的总引力")],-1),g=t("code",null,"哈希表",-1),m=t("code",null,"字符串",-1),b=t("code",null,"动态规划",-1),k={href:"https://leetcode.cn/problems/total-appeal-of-a-string",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/total-appeal-of-a-string",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>appeal</strong> of a string is the number of <strong>distinct</strong> characters found in the string.</p><ul><li>For example, the appeal of <code>&quot;abbca&quot;</code> is <code>3</code> because it has <code>3</code> distinct characters: <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, and <code>&#39;c&#39;</code>.</li></ul><p>Given a string <code>s</code>, return <em>the <strong>total appeal of all of its <strong>substrings</strong>.</strong></em></p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abbca&quot;</p><p>Output: 28</p><p>Explanation: The following are the substrings of &quot;abbca&quot;:</p><ul><li>Substrings of length 1: &quot;a&quot;, &quot;b&quot;, &quot;b&quot;, &quot;c&quot;, &quot;a&quot; have an appeal of 1, 1, 1, 1, and 1 respectively. The sum is 5.</li><li>Substrings of length 2: &quot;ab&quot;, &quot;bb&quot;, &quot;bc&quot;, &quot;ca&quot; have an appeal of 2, 1, 2, and 2 respectively. The sum is 7.</li><li>Substrings of length 3: &quot;abb&quot;, &quot;bbc&quot;, &quot;bca&quot; have an appeal of 2, 2, and 3 respectively. The sum is 7.</li><li>Substrings of length 4: &quot;abbc&quot;, &quot;bbca&quot; have an appeal of 3 and 3 respectively. The sum is 6.</li><li>Substrings of length 5: &quot;abbca&quot; has an appeal of 3. The sum is 3.</li></ul><p>The total sum is 5 + 7 + 7 + 6 + 3 = 28.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;code&quot;</p><p>Output: 20</p><p>Explanation: The following are the substrings of &quot;code&quot;:</p><ul><li>Substrings of length 1: &quot;c&quot;, &quot;o&quot;, &quot;d&quot;, &quot;e&quot; have an appeal of 1, 1, 1, and 1 respectively. The sum is 4.</li><li>Substrings of length 2: &quot;co&quot;, &quot;od&quot;, &quot;de&quot; have an appeal of 2, 2, and 2 respectively. The sum is 6.</li><li>Substrings of length 3: &quot;cod&quot;, &quot;ode&quot; have an appeal of 3 and 3 respectively. The sum is 6.</li><li>Substrings of length 4: &quot;code&quot; has an appeal of 4. The sum is 4.</li></ul><p>The total sum is 4 + 6 + 6 + 4 = 20.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>字符串的 <strong>引力</strong> 定义为：字符串中 <strong>不同</strong> 字符的数量。</p><p>例如，<code>&quot;abbca&quot;</code> 的引力为 <code>3</code> ，因为其中有 <code>3</code> 个不同字符 <code>&#39;a&#39;</code>、<code>&#39;b&#39;</code> 和 <code>&#39;c&#39;</code> 。 给你一个字符串 <code>s</code> ，返回 <strong>其所有子字符串的总引力</strong> 。</p><p><strong>子字符串</strong> 定义为：字符串中的一个连续字符序列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于每个字符，它会出现在某些子字符串中，并对这些子字符串的吸引力有贡献。可以跟踪每个字符最后一次出现的位置，并计算从该字符的最后出现位置到当前字符之间的子字符串的吸引力变化。</p><p>为了避免遍历所有子字符串，可以使用动态更新的方式计算某个字符对当前子字符串的贡献。通过记录每个字符最后一次出现的位置，可以快速计算该字符的贡献。</p><ol><li><p><strong>初始化</strong>：</p><ul><li>使用数组 <code>lastIndex</code> 来记录每个字符的最后一次出现位置，初始值设为 <code>-1</code>，表示还没有出现过。</li><li>变量 <code>dp</code> 用来跟踪从第一个字符到当前字符的所有子字符串的总吸引力。</li><li>变量 <code>res</code> 用来存储所有子字符串的吸引力总和。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>对于字符串中的每个字符，首先通过 <code>lastIndex</code> 找到该字符上一次出现的位置。如果当前字符上一次出现在位置 <code>j</code>，那么从 <code>j+1</code> 到 <code>i</code> 的所有子字符串都会包含当前字符，因此当前字符对这些子字符串的吸引力都有贡献。</li><li>计算当前字符的贡献并更新 <code>dp</code> 和 <code>res</code>。</li></ul></li><li><p><strong>更新索引</strong>：</p><ul><li>每次处理完当前字符后，将其最后出现的位置更新为当前索引 <code>i</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，因为只遍历了一遍字符串，且每个字符的操作都是常数时间。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>（考虑字符集大小为 26 个字母）。</li></ul><p>通过记录每个字符的最后出现位置，可以高效地计算出每个字符对总吸引力的贡献，避免了暴力遍历所有子字符串的复杂度，从而达到了线性时间的复杂度。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">appealSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		dp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 用于记录每个字符最后一次出现的位置</span>
	<span class="token keyword">let</span> lastIndex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 将字符转换为数组索引</span>
		<span class="token keyword">let</span> charIndex <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 更新当前子串的总吸引力</span>
		dp <span class="token operator">+=</span> i <span class="token operator">-</span> lastIndex<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 累加到总吸引力</span>
		res <span class="token operator">+=</span> dp<span class="token punctuation">;</span>
		<span class="token comment">// 更新字符的最后出现位置</span>
		lastIndex<span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"828",-1),T=t("td",{style:{"text-align":"left"}},"统计子串中的唯一字符",-1),I=t("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},E=t("code",null,"哈希表",-1),C=t("code",null,"字符串",-1),j=t("code",null,"动态规划",-1),L=t("td",{style:{"text-align":"center"}},"🔴",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"2062",-1),B=t("td",{style:{"text-align":"left"}},"统计字符串中的元音子字符串",-1),R=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=t("code",null,"哈希表",-1),H=t("code",null,"字符串",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/count-vowel-substrings-of-a-string",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/count-vowel-substrings-of-a-string",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"2063",-1),P=t("td",{style:{"text-align":"left"}},"所有子字符串中的元音",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"数学",-1),X=t("code",null,"字符串",-1),Y=t("code",null,"动态规划",-1),Z=t("code",null,"1+",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/vowels-of-all-substrings",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/vowels-of-all-substrings",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"3134",-1),at=t("td",{style:{"text-align":"left"}},"找出唯一性数组的中位数",-1),ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"数组",-1),it=t("code",null,"哈希表",-1),rt=t("code",null,"二分查找",-1),pt=t("code",null,"1+",-1),dt=t("td",{style:{"text-align":"center"}},"🔴",-1),ut={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/find-the-median-of-the-uniqueness-array",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/find-the-median-of-the-uniqueness-array",target:"_blank",rel:"noopener noreferrer"};function gt(mt,bt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,t("p",null,[n("🔴 "),e(c,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1}),n("  🔖  "),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",k,[f,e(o)]),n(),t("a",v,[q,e(o)])]),x,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[w,T,I,t("td",S,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[E]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[j]),_:1})]),L,t("td",N,[t("a",V,[n("🀄️"),e(o)]),n(),t("a",A,[n("🔗"),e(o)])])]),t("tr",null,[O,B,R,t("td",F,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[H]),_:1})]),z,t("td",D,[t("a",J,[n("🀄️"),e(o)]),n(),t("a",K,[n("🔗"),e(o)])])]),t("tr",null,[M,P,Q,t("td",U,[e(a,{to:"/tag/math.html"},{default:s(()=>[W]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[X]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Y]),_:1}),n(),Z]),$,t("td",tt,[t("a",nt,[n("🀄️"),e(o)]),n(),t("a",et,[n("🔗"),e(o)])])]),t("tr",null,[st,at,ot,t("td",lt,[e(a,{to:"/tag/array.html"},{default:s(()=>[ct]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[it]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[rt]),_:1}),n(),pt]),dt,t("td",ut,[t("a",ht,[n("🀄️"),e(o)]),n(),t("a",_t,[n("🔗"),e(o)])])])])])])}const ft=i(h,[["render",gt],["__file","2262.html.vue"]]);export{ft as default};
