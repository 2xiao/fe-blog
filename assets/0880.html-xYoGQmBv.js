import{_ as i,r as e,o as l,c as u,a as n,b as s,d as a,w as t,e as d}from"./app-Kkp_66uf.js";const r={},k=n("h1",{id:"_880-索引处的解码字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_880-索引处的解码字符串","aria-hidden":"true"},"#"),s(" 880. 索引处的解码字符串")],-1),h=n("code",null,"栈",-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/decoded-string-at-index",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/decoded-string-at-index",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an encoded string <code>s</code>. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:</p><ul><li>If the character read is a letter, that letter is written onto the tape.</li><li>If the character read is a digit <code>d</code>, the entire current tape is repeatedly written <code>d - 1</code> more times in total.</li></ul><p>Given an integer <code>k</code>, return <em>the</em><code>kth</code> <em>letter ( <strong>1-indexed)</strong> in the decoded string</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;leet2code3&quot;, k = 10</p><p>Output: &quot;o&quot;</p><p>Explanation: The decoded string is &quot;leetleetcodeleetleetcodeleetleetcode&quot;.</p><p>The 10th letter in the string is &quot;o&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ha22&quot;, k = 5</p><p>Output: &quot;h&quot;</p><p>Explanation: The decoded string is &quot;hahahaha&quot;.</p><p>The 5th letter is &quot;h&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;a2345678999999999999999&quot;, k = 1</p><p>Output: &quot;a&quot;</p><p>Explanation: The decoded string is &quot;a&quot; repeated 8301530446056247680 times.</p><p>The 1st letter is &quot;a&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of lowercase English letters and digits <code>2</code> through <code>9</code>.</li><li><code>s</code> starts with a letter.</li><li><code>1 &lt;= k &lt;= 10^9</code></li><li>It is guaranteed that <code>k</code> is less than or equal to the length of the decoded string.</li><li>The decoded string is guaranteed to have less than <code>263</code> letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个编码字符串 <code>S</code>。为了找出解码字符串并将其写入磁带，从编码字符串中每次读取一个字符，并采取以下步骤：</p><ul><li>如果所读的字符是字母，则将该字母写在磁带上。</li><li>如果所读的字符是数字（例如 <code>d</code>），则整个当前磁带总共会被重复写 <code>d-1</code> 次。</li></ul><p>现在，对于给定的编码字符串 <code>S</code> 和索引 <code>K</code>，查找并返回解码字符串中的第 <code>K</code> 个字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于解码后的字符串有可能超大，不仅会超时，内存也会溢出，所以不能直接暴力扫描解码。</p><p>仔细观察会发现，如果有一个像 <code>abcdeabcdeabcdeabcdeabcdeabcde</code> 这样的解码字符串，和一个像 <code>k=23</code> 这样的索引，那么如果 <code>k=3</code>，答案是相同的。</p><p>所以可以从后向前逆向寻找，跟踪解码字符串的大小来找出答案。每当解码的字符串等于某些单词（如 <code>abcde</code>）重复 <code>n</code> 次时，我们就可以将 <code>k</code> 减少到 <code>k % (&#39;abcde&#39;.length)</code>。</p><p>具体算法是：</p><ol><li>首先顺序遍历字符串，计算解码字符串的总长度 <code>size</code>；</li><li>再从当前字符串最后一位开始遍历，用 <code>k</code> 对总长度求余： <code>k %= size</code>；</li><li>如果整除了，且当前字符不是数字，则答案就是当前字符。</li><li>否则，看当前字符是否是数字： <ul><li>是数字，则将总长度缩小等量倍 <code>size = size / S[i]</code> ；</li><li>不是数字，则总长度减一 <code>size = size - 1</code> ；</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decodeAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isDigit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> char <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			size <span class="token operator">*=</span> <span class="token function">Number</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			size<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		k <span class="token operator">=</span> k <span class="token operator">%</span> size<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			size <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>size <span class="token operator">/</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			size<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function q(w,x){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",g,[f,a(p)])]),_])}const z=i(r,[["render",q],["__file","0880.html.vue"]]);export{z as default};
