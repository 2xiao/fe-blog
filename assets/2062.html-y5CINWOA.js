import{_ as r,r as l,o as i,c as p,a as t,b as n,d as e,w as s,f as u,e as d}from"./app-KDJRKGep.js";const g={},h=t("h1",{id:"_2062-统计字符串中的元音子字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2062-统计字符串中的元音子字符串","aria-hidden":"true"},"#"),n(" 2062. 统计字符串中的元音子字符串")],-1),_=t("code",null,"哈希表",-1),k=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/count-vowel-substrings-of-a-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-vowel-substrings-of-a-string",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>substring</strong> is a contiguous (non-empty) sequence of characters within a string.</p><p>A <strong>vowel substring</strong> is a substring that <strong>only</strong> consists of vowels (<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, and <code>&#39;u&#39;</code>) and has <strong>all five</strong> vowels present in it.</p><p>Given a string <code>word</code>, return <em>the number of<strong>vowel substrings</strong> in</em> <code>word</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word = &quot;aeiouu&quot;</p><p>Output: 2</p><p>Explanation: The vowel substrings of word are as follows (underlined):</p><ul><li>&quot;<strong><em>aeiou</em></strong> u&quot;</li><li>&quot;<strong><em>aeiouu</em></strong> &quot;</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word = &quot;unicornarihan&quot;</p><p>Output: 0</p><p>Explanation: Not all 5 vowels are present, so there are no vowel substrings.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word = &quot;cuaieuouac&quot;</p><p>Output: 7</p><p>Explanation: The vowel substrings of word are as follows (underlined):</p><ul><li>&quot;c** <em>uaieuo</em>** uac&quot;</li><li>&quot;c** <em>uaieuou</em>** ac&quot;</li><li>&quot;c** <em>uaieuoua</em>** c&quot;</li><li>&quot;cu** <em>aieuo</em>** uac&quot;</li><li>&quot;cu** <em>aieuou</em>** ac&quot;</li><li>&quot;cu** <em>aieuoua</em>** c&quot;</li><li>&quot;cua** <em>ieuoua</em>** c&quot;</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>word</code> consists of lowercase English letters only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>子字符串</strong> 是字符串中的一个连续（非空）的字符序列。</p><p><strong>元音子字符串</strong> 是 <strong>仅</strong> 由元音（<code>&#39;a&#39;</code>、<code>&#39;e&#39;</code>、<code>&#39;i&#39;</code>、<code>&#39;o&#39;</code> 和 <code>&#39;u&#39;</code>）组成的一个子字符串，且必须包含 <strong>全部五种</strong> 元音。</p><p>给你一个字符串 <code>word</code> ，统计并返回 <code>word</code> 中 <strong>元音子字符串的数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;aeiouu&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 下面列出 word 中的元音子字符串（斜体加粗部分）：</p><ul><li>&quot;<em><strong>aeiou</strong></em> u&quot;</li><li>&quot;<strong><em>aeiouu</em></strong> &quot;</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;unicornarihan&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> word 中不含 5 种元音，所以也不会存在元音子字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;cuaieuouac&quot;</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 下面列出 word 中的元音子字符串（斜体加粗部分）：</p><ul><li>&quot;c <em><strong>uaieuo</strong></em> uac&quot;</li><li>&quot;c <em><strong>uaieuou</strong></em> ac&quot;</li><li>&quot;c <em><strong>uaieuoua</strong></em> c&quot;</li><li>&quot;cu <em><strong>aieuo</strong></em> uac&quot;</li><li>&quot;cu <em><strong>aieuou</strong></em> ac&quot;</li><li>&quot;cu <em><strong>aieuoua</strong></em> c&quot;</li><li>&quot;cua <em><strong>ieuoua</strong></em> c&quot;</li></ul></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;bbaeixoubb&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 所有包含全部五种元音的子字符串都含有辅音，所以不存在元音子字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>word</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>核心条件</strong>：</p><ul><li>子字符串必须仅包含元音字母。</li><li>子字符串中必须包含 <code>a, e, i, o, u</code>，且至少出现一次。</li></ul><p><strong>滑动窗口</strong>：</p><ul><li>使用滑动窗口可以高效地检查一个连续的子字符串是否符合条件。</li><li>在每次扩展窗口的过程中，更新一个数组来记录窗口内每个元音字母的出现次数。</li></ul><ol><li><p>初始化变量：</p><ul><li><code>vowels</code>：一个哈希表，用来快速判断字符是否为元音，并映射其索引。</li><li><code>freq</code>：一个长度为 5 的数组，用来记录 <code>a, e, i, o, u</code> 在窗口中的频次。</li><li><code>left</code> 和 <code>right</code>：滑动窗口的左右边界。</li><li><code>count</code>：用于记录符合条件的子字符串个数。</li></ul></li><li><p>滑动窗口逻辑：</p><ul><li>如果 <code>right</code> 指向的字符是元音： <ul><li>更新窗口内元音字符的频次。</li><li>检查窗口内是否包含所有元音字符。如果包含，则 <code>count</code> 增加。</li><li>移动 <code>right</code> 扩大窗口。</li></ul></li><li>如果 <code>right</code> 指向的字符不是元音： <ul><li>窗口无效，需要重置窗口。</li><li>将 <code>left</code> 和 <code>right</code> 移动到 <code>left + 1</code>，并清空 <code>freq</code>。</li></ul></li></ul></li><li><p>返回最终结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，窗口右边界最多移动 <code>n</code> 次，左边界最多移动 <code>n</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个长度为 5 的数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countVowelSubstrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> vowels <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token literal-property property">u</span><span class="token operator">:</span> <span class="token number">4</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> cur <span class="token operator">=</span> word<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>vowels<span class="token punctuation">[</span>cur<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			freq<span class="token punctuation">[</span>vowels<span class="token punctuation">[</span>cur<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				freq<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				freq<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				freq<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				freq<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				freq<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				count<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			right<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right <span class="token operator">=</span> left<span class="token punctuation">;</span>
			freq<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"792",-1),x=t("td",{style:{"text-align":"left"}},"匹配子序列的单词数",-1),E=t("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},N=t("code",null,"字典树",-1),V=t("code",null,"数组",-1),C=t("code",null,"哈希表",-1),L=t("code",null,"4+",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/number-of-matching-subsequences",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/number-of-matching-subsequences",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"992",-1),R=t("td",{style:{"text-align":"left"}},"K 个不同整数的子数组",-1),S=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},K=t("code",null,"数组",-1),z=t("code",null,"哈希表",-1),D=t("code",null,"计数",-1),F=t("code",null,"1+",-1),H=t("td",{style:{"text-align":"center"}},"🔴",-1),J={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"1513",-1),U=t("td",{style:{"text-align":"left"}},"仅含 1 的子串数",-1),W=t("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=t("code",null,"数学",-1),Z=t("code",null,"字符串",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/number-of-substrings-with-only-1s",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/number-of-substrings-with-only-1s",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"1839",-1),ot=t("td",{style:{"text-align":"left"}},"所有元音按顺序排布的最长子字符串",-1),at=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"字符串",-1),rt=t("code",null,"滑动窗口",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),pt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/longest-substring-of-all-vowels-in-order",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/longest-substring-of-all-vowels-in-order",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},"2262",-1),ht=t("td",{style:{"text-align":"left"}},"字符串的总引力",-1),_t={style:{"text-align":"center"}},kt={style:{"text-align":"left"}},mt=t("code",null,"哈希表",-1),bt=t("code",null,"字符串",-1),ft=t("code",null,"动态规划",-1),vt=t("td",{style:{"text-align":"center"}},"🔴",-1),yt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/total-appeal-of-a-string",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/total-appeal-of-a-string",target:"_blank",rel:"noopener noreferrer"},xt=t("td",{style:{"text-align":"center"}},"3305",-1),Et=t("td",{style:{"text-align":"left"}},"元音辅音字符串计数 I",-1),It=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},Vt=t("code",null,"哈希表",-1),Ct=t("code",null,"字符串",-1),Lt=t("code",null,"滑动窗口",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),jt={style:{"text-align":"center"}},At={href:"https://leetcode.cn/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"3306",-1),Rt=t("td",{style:{"text-align":"left"}},"元音辅音字符串计数 II",-1),St=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},Kt=t("code",null,"哈希表",-1),zt=t("code",null,"字符串",-1),Dt=t("code",null,"滑动窗口",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii",target:"_blank",rel:"noopener noreferrer"},Mt={href:"https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii",target:"_blank",rel:"noopener noreferrer"};function Pt(Qt,Ut){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[_]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),t("a",m,[b,e(a)]),n(),t("a",f,[v,e(a)])]),y,u(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,x,E,t("td",I,[e(o,{to:"/tag/trie.html"},{default:s(()=>[N]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[V]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[C]),_:1}),n(),L]),O,t("td",j,[t("a",A,[n("🀄️"),e(a)]),n(),t("a",B,[n("🔗"),e(a)])])]),t("tr",null,[T,R,S,t("td",G,[e(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[z]),_:1}),n(),e(o,{to:"/tag/counting.html"},{default:s(()=>[D]),_:1}),n(),F]),H,t("td",J,[t("a",M,[n("🀄️"),e(a)]),n(),t("a",P,[n("🔗"),e(a)])])]),t("tr",null,[Q,U,W,t("td",X,[e(o,{to:"/tag/math.html"},{default:s(()=>[Y]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",nt,[n("🀄️"),e(a)]),n(),t("a",et,[n("🔗"),e(a)])])]),t("tr",null,[st,ot,at,t("td",lt,[e(o,{to:"/tag/string.html"},{default:s(()=>[ct]),_:1}),n(),e(o,{to:"/tag/sliding-window.html"},{default:s(()=>[rt]),_:1})]),it,t("td",pt,[t("a",ut,[n("🀄️"),e(a)]),n(),t("a",dt,[n("🔗"),e(a)])])]),t("tr",null,[gt,ht,t("td",_t,[e(o,{to:"/problem/2262.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",kt,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[mt]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[bt]),_:1}),n(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ft]),_:1})]),vt,t("td",yt,[t("a",wt,[n("🀄️"),e(a)]),n(),t("a",qt,[n("🔗"),e(a)])])]),t("tr",null,[xt,Et,It,t("td",Nt,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Vt]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[Ct]),_:1}),n(),e(o,{to:"/tag/sliding-window.html"},{default:s(()=>[Lt]),_:1})]),Ot,t("td",jt,[t("a",At,[n("🀄️"),e(a)]),n(),t("a",Bt,[n("🔗"),e(a)])])]),t("tr",null,[Tt,Rt,St,t("td",Gt,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Kt]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[zt]),_:1}),n(),e(o,{to:"/tag/sliding-window.html"},{default:s(()=>[Dt]),_:1})]),Ft,t("td",Ht,[t("a",Jt,[n("🀄️"),e(a)]),n(),t("a",Mt,[n("🔗"),e(a)])])])])])])}const Xt=r(g,[["render",Pt],["__file","2062.html.vue"]]);export{Xt as default};
