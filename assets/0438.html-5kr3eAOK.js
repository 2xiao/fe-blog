import{_ as i,r as c,o as u,c as r,a as n,d as s,b as a,w as t,f as d,e as l}from"./app-ynO5B_DP.js";const k={},h={id:"_438-找到字符串中所有字母异位词",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_438-找到字符串中所有字母异位词","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"哈希表",-1),_=n("code",null,"字符串",-1),g=n("code",null,"滑动窗口",-1),f={href:"https://leetcode.com/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>p</code>, return <em>an array of all the start indices of</em><code>p</code> _&#39; s anagrams in _<code>s</code>. You may return the answer in <strong>any order</strong>.</p><p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;</p><p>Output: [0,6]</p><p>Explanation:</p><p>The substring with start index = 0 is &quot;cba&quot;, which is an anagram of &quot;abc&quot;.</p><p>The substring with start index = 6 is &quot;bac&quot;, which is an anagram of &quot;abc&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abab&quot;, p = &quot;ab&quot;</p><p>Output: [0,1,2]</p><p>Explanation:</p><p>The substring with start index = 0 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.</p><p>The substring with start index = 1 is &quot;ba&quot;, which is an anagram of &quot;ab&quot;.</p><p>The substring with start index = 2 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, p.length &lt;= 3 * 10^4</code></li><li><code>s</code> and <code>p</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串 <code>s</code> 和 <code>p</code>，找到 <code>s</code> 中所有 <code>p</code> 的 <strong>异位词</strong> 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。</p><p><strong>异位词</strong> 指由相同字母重排列形成的字符串（包括相同的字符串）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用滑动窗口算法，思路如下：</p><ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>s1.length</code> 个字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求（不包含 <code>s1.length</code> 个字符了）；同时，每次增加 <code>left</code>，都要更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s2</code> 的尽头；</li></ol>',15),x=l(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findAnagrams</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token comment">// 记录结果</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 进行窗口内数据的一系列更新</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				valid<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 判断左侧窗口是否要收缩</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">==</span> p<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当窗口符合条件时，把起始索引加入 res</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">let</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 进行窗口内数据的一系列更新</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					valid<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"242",-1),T={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},N={href:"/problem/0242",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"left"}},j=n("code",null,"哈希表",-1),I=n("code",null,"字符串",-1),A=n("code",null,"排序",-1),B={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"567",-1),M={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/permutation-in-string",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},S={href:"/problem/0567",target:"_blank",rel:"noopener noreferrer"},Y={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),D=n("code",null,"双指针",-1),F=n("code",null,"字符串",-1),H=n("code",null,"1+",-1),J={style:{"text-align":"left"}};function K(P,Q){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return u(),r("div",null,[n("h1",h,[m,s(),n("a",v,[s("438. 找到字符串中所有字母异位词"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/outline/tag/sliding-window.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[w,a(o)])]),y,n("p",null,[s("详细的滑动窗口答题框架讲解，可阅读 "),a(e,{to:"/algorithm/slide_window.html"},{default:t(()=>[s("《3.11 滑动窗口》")]),_:1}),s("。")]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,n("td",T,[n("a",C,[s("有效的字母异位词"),a(o)])]),n("td",L,[n("a",N,[s("[✓]"),a(o)])]),n("td",V,[a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[j]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/outline/tag/sorting.html"},{default:t(()=>[A]),_:1})]),n("td",B,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[O,n("td",M,[n("a",R,[s("字符串的排列"),a(o)])]),n("td",G,[n("a",S,[s("[✓]"),a(o)])]),n("td",Y,[a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/outline/tag/two-pointers.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/outline/tag/string.html"},{default:t(()=>[F]),_:1}),s(),H]),n("td",J,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const W=i(k,[["render",K],["__file","0438.html.vue"]]);export{W as default};
