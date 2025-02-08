import{_ as i,r as p,o as u,c as r,a as n,b as s,d as a,w as t,f as d,e as c}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_30-串联所有单词的子串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_30-串联所有单词的子串","aria-hidden":"true"},"#"),s(" 30. 串联所有单词的子串")],-1),b=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),v=n("code",null,"滑动窗口",-1),g={href:"https://leetcode.cn/problems/substring-with-concatenation-of-all-words",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/substring-with-concatenation-of-all-words",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),_=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> and an array of strings <code>words</code>. All the strings of <code>words</code> are of <strong>the same length</strong>.</p><p>A <strong>concatenated substring</strong> in <code>s</code> is a substring that contains all the strings of any permutation of <code>words</code> concatenated.</p><ul><li>For example, if <code>words = [&quot;ab&quot;,&quot;cd&quot;,&quot;ef&quot;]</code>, then <code>&quot;abcdef&quot;</code>, <code>&quot;abefcd&quot;</code>, <code>&quot;cdabef&quot;</code>, <code>&quot;cdefab&quot;</code>, <code>&quot;efabcd&quot;</code>, and <code>&quot;efcdab&quot;</code> are all concatenated strings. <code>&quot;acdbef&quot;</code> is not a concatenated substring because it is not the concatenation of any permutation of <code>words</code>.</li></ul><p>Return <em>the starting indices of all the concatenated substrings in</em><code>s</code>. You can return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;barfoothefoobarman&quot;, words = [&quot;foo&quot;,&quot;bar&quot;]</p><p>Output: [0,9]</p><p>Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.</p><p>The substring starting at 0 is &quot;barfoo&quot;. It is the concatenation of [&quot;bar&quot;,&quot;foo&quot;] which is a permutation of words.</p><p>The substring starting at 9 is &quot;foobar&quot;. It is the concatenation of [&quot;foo&quot;,&quot;bar&quot;] which is a permutation of words.</p><p>The output order does not matter. Returning [9,0] is fine too.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;wordgoodgoodgoodbestword&quot;, words = [&quot;word&quot;,&quot;good&quot;,&quot;best&quot;,&quot;word&quot;]</p><p>Output: []</p><p>Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.</p><p>There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.</p><p>We return an empty array.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;barfoofoobarthefoobarman&quot;, words = [&quot;bar&quot;,&quot;foo&quot;,&quot;the&quot;]</p><p>Output: [6,9,12]</p><p>Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.</p><p>The substring starting at 6 is &quot;foobarthe&quot;. It is the concatenation of [&quot;foo&quot;,&quot;bar&quot;,&quot;the&quot;] which is a permutation of words.</p><p>The substring starting at 9 is &quot;barthefoo&quot;. It is the concatenation of [&quot;bar&quot;,&quot;the&quot;,&quot;foo&quot;] which is a permutation of words.</p><p>The substring starting at 12 is &quot;thefoobar&quot;. It is the concatenation of [&quot;the&quot;,&quot;foo&quot;,&quot;bar&quot;] which is a permutation of words.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>1 &lt;= words.length &lt;= 5000</code></li><li><code>1 &lt;= words[i].length &lt;= 30</code></li><li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> 和一个字符串数组 <code>words</code>。 <code>words</code> 中所有字符串 长度相同。</p><ul><li>s 中的 <strong>串联子串</strong> 是指一个包含 <code>words</code> 中所有字符串以任意顺序排列连接起来的子串。</li></ul><p>例如，如果 <code>words = [&quot;ab&quot;,&quot;cd&quot;,&quot;ef&quot;]</code>， 那么 <code>&quot;abcdef&quot;</code>， <code>&quot;abefcd&quot;</code>，<code>&quot;cdabef&quot;</code>， <code>&quot;cdefab&quot;</code>，<code>&quot;efabcd&quot;</code>， 和 <code>&quot;efcdab&quot;</code> 都是串联子串。 <code>&quot;acdbef&quot;</code> 不是串联子串，因为他不是任何 <code>words</code> 排列的连接。 返回所有串联子串在 <code>s</code> 中的开始索引。你可以以 <strong>任意顺序</strong> 返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',18),y=c(`<ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>words.length * words[0].length</code> 个字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求；</li><li>每次窗口中的字符串长度符合要求时，都要通过<code>isConcatenatedString</code>函数，判断窗口中的字符串是否符合题目要求，并更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s2</code> 的尽头；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(l×n)</code>，其中 <code>l</code> 是输入 <code>s</code> 的长度，<code>n</code> 是 <code>words</code> 中每个单词的长度。需要做 <code>n</code> 次滑动窗口，每次需要遍历一次 <code>s</code>。</li><li><strong>空间复杂度</strong>：<code>O(m×n)</code>，其中 <code>m</code> 是 <code>words</code> 的单词数，<code>n</code> 是 <code>words</code> 中每个单词的长度。每次滑动窗口时，需要用一个哈希表保存单词频次。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> len <span class="token operator">=</span> words<span class="token punctuation">.</span>length <span class="token operator">*</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token comment">// 记录结果</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 进行窗口内数据的一系列更新</span>
		window <span class="token operator">+=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 判断左侧窗口是否要收缩</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token comment">// 进行窗口内数据的一系列更新</span>
			window <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 当窗口符合条件时，把起始索引加入 res</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isConcatenatedString</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> words<span class="token punctuation">,</span> need<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 判断 str 是否为 words 的串联子串</span>
<span class="token keyword">var</span> <span class="token function-variable function">isConcatenatedString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> words<span class="token punctuation">,</span> need</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> n <span class="token operator">=</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		m <span class="token operator">=</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">!==</span> m <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> word <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">*</span> n<span class="token punctuation">,</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>word<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			obj<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>word<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>word<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				valid <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,6),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"76",-1),I=n("td",{style:{"text-align":"left"}},"最小覆盖子串",-1),j={style:{"text-align":"center"}},C={style:{"text-align":"left"}},S=n("code",null,"哈希表",-1),T=n("code",null,"字符串",-1),O=n("code",null,"滑动窗口",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"};function B(A,Y){const l=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return u(),r("div",null,[h,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/sliding-window.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",g,[f,a(e)]),s(),n("a",w,[q,a(e)])]),_,n("p",null,[s("此题是 "),a(o,{to:"/problem/0438.html"},{default:t(()=>[s("第 438 题 找到字符串中所有字母异位词")]),_:1}),s(" 的进阶版。不同的是第 438 题的元素是字母，而此题的元素是单词，可以用类似的滑动窗口方法来解此题。")]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[E,I,n("td",j,[a(o,{to:"/problem/0076.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(o,{to:"/tag/hash-table.html"},{default:t(()=>[S]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[T]),_:1}),s(),a(o,{to:"/tag/sliding-window.html"},{default:t(()=>[O]),_:1})]),L,n("td",N,[n("a",V,[s("🀄️"),a(e)]),s(),n("a",R,[s("🔗"),a(e)])])])])])])}const H=i(k,[["render",B],["__file","0030.html.vue"]]);export{H as default};
