import{_ as i,r as p,o as u,c as r,a as n,d as t,b as s,w as a,f as d,e as c}from"./app-ynO5B_DP.js";const k={},_={id:"_76-最小覆盖子串",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_76-最小覆盖子串","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"哈希表",-1),f=n("code",null,"字符串",-1),b=n("code",null,"滑动窗口",-1),v={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code> of lengths <code>m</code> and <code>n</code> respectively, return <em>the <strong>minimum window</strong></em> <strong><em>substring</em></strong> <em>of</em><code>s</code> <em>such that every character in</em> <code>t</code><em>( <strong>including duplicates</strong> ) is included in the window</em>. If there is no such substring, return <em>the empty string</em><code>&quot;&quot;</code>.</p><p>The testcases will be generated such that the answer is <strong>unique</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ADOBECODEBANC&quot;, t = &quot;ABC&quot;</p><p>Output: &quot;BANC&quot;</p><p>Explanation: The minimum window substring &quot;BANC&quot; includes &#39;A&#39;, &#39;B&#39;, and &#39;C&#39; from string t.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a&quot;, t = &quot;a&quot;</p><p>Output: &quot;a&quot;</p><p>Explanation: The entire string s is the minimum window.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;a&quot;, t = &quot;aa&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: Both &#39;a&#39;s from t must be included in the window.</p><p>Since the largest window of s only has one &#39;a&#39;, return empty string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == s.length</code></li><li><code>n == t.length</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li></ul><p><strong>Follow up:</strong> Could you find an algorithm that runs in <code>O(m + n)</code> time?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个源字符串 <code>s</code>，再给一个字符串 <code>t</code>，要求在源字符串中找到一个窗口，这个窗口包含由字符串各种排列组合组成的，窗口中可以包含 <code>t</code> 中没有的字符，如果存在多个，在结果中输出最小的窗口，如果找不到这样的窗口，输出空字符串。</p><p>进阶：你能设计一个在 <code>O(m+n)</code> 时间内解决此问题的算法吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如果我们使用暴力解法，代码大概是这样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token operator">:</span>j<span class="token punctuation">]</span> 包含 t 的所有字母<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            更新答案
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路很直接，但是显然，这个算法的复杂度大于 <code>O(n^2)</code> 了，不好。</p><p>滑动窗口算法的思路是这样：</p><ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>t</code> 中的所有字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求（不包含 <code>t</code> 中的所有字符了）；同时，每次增加 <code>left</code>，都要更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s</code> 的尽头；</li></ol><p>第 2 步相当于在寻找一个「可行解」，第 3 步在优化这个「可行解」，最终找到最优解，也就是最短的覆盖子串。左右指针轮流前进，窗口大小增增减减，一伸一缩，不断向右滑动，这就是「滑动窗口」这个名字的来历。</p>`,22),x=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> need <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		vaild <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		len <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> i <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">===</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				vaild<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>vaild <span class="token operator">===</span> need<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				start <span class="token operator">=</span> left<span class="token punctuation">;</span>
				len <span class="token operator">=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">let</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">===</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					vaild<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				window<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> window<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> len <span class="token operator">===</span> <span class="token number">Infinity</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> start <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"30",-1),E={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/substring-with-concatenation-of-all-words",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"center"}},B={href:"/problem/0030",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"left"}},O=n("code",null,"哈希表",-1),A=n("code",null,"字符串",-1),H=n("code",null,"滑动窗口",-1),L={style:{"text-align":"left"}},M=n("td",{style:{"text-align":"center"}},"209",-1),V={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/minimum-size-subarray-sum",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},D={href:"/problem/0209",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"left"}},S=n("code",null,"数组",-1),F=n("code",null,"二分查找",-1),G=n("code",null,"前缀和",-1),W=n("code",null,"1+",-1),J={style:{"text-align":"left"}},K=n("td",{style:{"text-align":"center"}},"239",-1),P={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},U={style:{"text-align":"center"}},X={href:"/problem/0239",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"left"}},Z=n("code",null,"队列",-1),$=n("code",null,"数组",-1),nn=n("code",null,"滑动窗口",-1),tn=n("code",null,"2+",-1),sn={style:{"text-align":"left"}},an=n("td",{style:{"text-align":"center"}},"567",-1),en={style:{"text-align":"left"}},on={href:"https://leetcode.com/problems/permutation-in-string",target:"_blank",rel:"noopener noreferrer"},ln={style:{"text-align":"center"}},pn={href:"/problem/0567",target:"_blank",rel:"noopener noreferrer"},cn={style:{"text-align":"left"}},un=n("code",null,"哈希表",-1),rn=n("code",null,"双指针",-1),dn=n("code",null,"字符串",-1),kn=n("code",null,"1+",-1),_n={style:{"text-align":"left"}},hn=n("td",{style:{"text-align":"center"}},"632",-1),mn={style:{"text-align":"left"}},gn={href:"https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists",target:"_blank",rel:"noopener noreferrer"},fn={style:{"text-align":"center"}},bn={href:"/problem/0632",target:"_blank",rel:"noopener noreferrer"},vn={style:{"text-align":"left"}},wn=n("code",null,"贪心",-1),yn=n("code",null,"数组",-1),xn=n("code",null,"哈希表",-1),qn=n("code",null,"3+",-1),Cn={style:{"text-align":"left"}},En=n("td",{style:{"text-align":"center"}},"727",-1),In={style:{"text-align":"left"}},jn={href:"https://leetcode.com/problems/minimum-window-subsequence",target:"_blank",rel:"noopener noreferrer"},Bn=n("td",{style:{"text-align":"center"}},null,-1),Nn={style:{"text-align":"left"}},On=n("code",null,"字符串",-1),An=n("code",null,"动态规划",-1),Hn=n("code",null,"滑动窗口",-1),Ln={style:{"text-align":"left"}},Mn=n("td",{style:{"text-align":"center"}},"3297",-1),Vn={style:{"text-align":"left"}},Tn={href:"https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i",target:"_blank",rel:"noopener noreferrer"},zn=n("td",{style:{"text-align":"center"}},null,-1),Dn={style:{"text-align":"left"}},Rn=n("code",null,"哈希表",-1),Sn=n("code",null,"字符串",-1),Fn=n("code",null,"滑动窗口",-1),Gn={style:{"text-align":"left"}},Wn=n("td",{style:{"text-align":"center"}},"3298",-1),Jn={style:{"text-align":"left"}},Kn={href:"https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-ii",target:"_blank",rel:"noopener noreferrer"},Pn=n("td",{style:{"text-align":"center"}},null,-1),Qn={style:{"text-align":"left"}},Un=n("code",null,"哈希表",-1),Xn=n("code",null,"字符串",-1),Yn=n("code",null,"滑动窗口",-1),Zn={style:{"text-align":"left"}};function $n(nt,tt){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return u(),r("div",null,[n("h1",_,[h,t(),n("a",m,[t("76. 最小覆盖子串"),s(o)])]),n("p",null,[t("🔴 "),s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),n("a",v,[w,s(o)])]),y,n("p",null,[t("详细的滑动窗口答题框架讲解，可阅读 "),s(e,{to:"/algorithm/slide_window.html"},{default:a(()=>[t("《3.11 滑动窗口》")]),_:1}),t("。")]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[C,n("td",E,[n("a",I,[t("串联所有单词的子串"),s(o)])]),n("td",j,[n("a",B,[t("[✓]"),s(o)])]),n("td",N,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[O]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[H]),_:1})]),n("td",L,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[M,n("td",V,[n("a",T,[t("长度最小的子数组"),s(o)])]),n("td",z,[n("a",D,[t("[✓]"),s(o)])]),n("td",R,[s(e,{to:"/outline/tag/array.html"},{default:a(()=>[S]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[F]),_:1}),t(),s(e,{to:"/outline/tag/prefix-sum.html"},{default:a(()=>[G]),_:1}),t(),W]),n("td",J,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[K,n("td",P,[n("a",Q,[t("滑动窗口最大值"),s(o)])]),n("td",U,[n("a",X,[t("[✓]"),s(o)])]),n("td",Y,[s(e,{to:"/outline/tag/queue.html"},{default:a(()=>[Z]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[$]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[nn]),_:1}),t(),tn]),n("td",sn,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[an,n("td",en,[n("a",on,[t("字符串的排列"),s(o)])]),n("td",ln,[n("a",pn,[t("[✓]"),s(o)])]),n("td",cn,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[un]),_:1}),t(),s(e,{to:"/outline/tag/two-pointers.html"},{default:a(()=>[rn]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[dn]),_:1}),t(),kn]),n("td",_n,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[hn,n("td",mn,[n("a",gn,[t("最小区间"),s(o)])]),n("td",fn,[n("a",bn,[t("[✓]"),s(o)])]),n("td",vn,[s(e,{to:"/outline/tag/greedy.html"},{default:a(()=>[wn]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[yn]),_:1}),t(),s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[xn]),_:1}),t(),qn]),n("td",Cn,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[En,n("td",In,[n("a",jn,[t("最小窗口子序列"),s(o)])]),Bn,n("td",Nn,[s(e,{to:"/outline/tag/string.html"},{default:a(()=>[On]),_:1}),t(),s(e,{to:"/outline/tag/dynamic-programming.html"},{default:a(()=>[An]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[Hn]),_:1})]),n("td",Ln,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[Mn,n("td",Vn,[n("a",Tn,[t("统计重新排列后包含另一个字符串的子字符串数目 I"),s(o)])]),zn,n("td",Dn,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[Rn]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[Sn]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[Fn]),_:1})]),n("td",Gn,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[Wn,n("td",Jn,[n("a",Kn,[t("统计重新排列后包含另一个字符串的子字符串数目 II"),s(o)])]),Pn,n("td",Qn,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[Un]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[Xn]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[Yn]),_:1})]),n("td",Zn,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])])])])])}const at=i(k,[["render",$n],["__file","0076.html.vue"]]);export{at as default};
