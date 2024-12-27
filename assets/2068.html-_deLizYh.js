import{_ as l,r as c,o as d,c as i,a as n,b as e,d as s,w as o,f as p,e as u}from"./app-fqckLmln.js";const h={},k=n("h1",{id:"_2068-检查两个字符串是否几乎相等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2068-检查两个字符串是否几乎相等","aria-hidden":"true"},"#"),e(" 2068. 检查两个字符串是否几乎相等")],-1),w=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),f=n("code",null,"计数",-1),g={href:"https://leetcode.cn/problems/check-whether-two-strings-are-almost-equivalent",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Two strings <code>word1</code> and <code>word2</code> are considered <strong>almost equivalent</strong> if the differences between the frequencies of each letter from <code>&#39;a&#39;</code> to <code>&#39;z&#39;</code> between <code>word1</code> and <code>word2</code> is <strong>at most</strong> <code>3</code>.</p><p>Given two strings <code>word1</code> and <code>word2</code>, each of length <code>n</code>, return <code>true</code><em>if</em><code>word1</code> <em>and</em> <code>word2</code> <em>are <strong>almost equivalent</strong> , or</em> <code>false</code> <em>otherwise</em>.</p><p>The <strong>frequency</strong> of a letter <code>x</code> is the number of times it occurs in the string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word1 = &quot;aaaa&quot;, word2 = &quot;bccb&quot;</p><p>Output: false</p><p>Explanation: There are 4 &#39;a&#39;s in &quot;aaaa&quot; but 0 &#39;a&#39;s in &quot;bccb&quot;.</p><p>The difference is 4, which is more than the allowed 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word1 = &quot;abcdeef&quot;, word2 = &quot;abaaacc&quot;</p><p>Output: true</p><p>Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:</p><ul><li>&#39;a&#39; appears 1 time in word1 and 4 times in word2. The difference is 3.</li><li>&#39;b&#39; appears 1 time in word1 and 1 time in word2. The difference is 0.</li><li>&#39;c&#39; appears 1 time in word1 and 2 times in word2. The difference is 1.</li><li>&#39;d&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.</li><li>&#39;e&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.</li><li>&#39;f&#39; appears 1 time in word1 and 0 times in word2. The difference is 1.</li></ul></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word1 = &quot;cccddabba&quot;, word2 = &quot;babababab&quot;</p><p>Output: true</p><p>Explanation: The differences between the frequencies of each letter in word1 and word2 are at most 3:</p><ul><li>&#39;a&#39; appears 2 times in word1 and 4 times in word2. The difference is 2.</li><li>&#39;b&#39; appears 2 times in word1 and 5 times in word2. The difference is 3.</li><li>&#39;c&#39; appears 3 times in word1 and 0 times in word2. The difference is 3.</li><li>&#39;d&#39; appears 2 times in word1 and 0 times in word2. The difference is 2.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == word1.length == word2.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>word1</code> and <code>word2</code> consist only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果两个字符串 <code>word1</code> 和 <code>word2</code> 中从 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code> 每一个字母出现频率之差都 <strong>不超过</strong> <code>3</code> ，那么我们称这两个字符串 <code>word1</code> 和 <code>word2</code> <strong>几乎相等</strong> 。</p><p>给你两个长度都为 <code>n</code> 的字符串 <code>word1</code> 和 <code>word2</code> ，如果 <code>word1</code> 和 <code>word2</code> <strong>几乎相等</strong> ，请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p>一个字母 <code>x</code> 的出现 <strong>频率</strong> 指的是它在字符串中出现的次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;aaaa&quot;, word2 = &quot;bccb&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 字符串 &quot;aaaa&quot; 中有 4 个 &#39;a&#39; ，但是 &quot;bccb&quot; 中有 0 个 &#39;a&#39; 。</p><p>两者之差为 4 ，大于上限 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;abcdeef&quot;, word2 = &quot;abaaacc&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> word1 和 word2 中每个字母出现频率之差至多为 3 ：</p><ul><li>&#39;a&#39; 在 word1 中出现了 1 次，在 word2 中出现了 4 次，差为 3 。</li><li>&#39;b&#39; 在 word1 中出现了 1 次，在 word2 中出现了 1 次，差为 0 。</li><li>&#39;c&#39; 在 word1 中出现了 1 次，在 word2 中出现了 2 次，差为 1 。</li><li>&#39;d&#39; 在 word1 中出现了 1 次，在 word2 中出现了 0 次，差为 1 。</li><li>&#39;e&#39; 在 word1 中出现了 2 次，在 word2 中出现了 0 次，差为 2 。</li><li>&#39;f&#39; 在 word1 中出现了 1 次，在 word2 中出现了 0 次，差为 1 。</li></ul></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;cccddabba&quot;, word2 = &quot;babababab&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> word1 和 word2 中每个字母出现频率之差至多为 3 ：</p><ul><li>&#39;a&#39; 在 word1 中出现了 2 次，在 word2 中出现了 4 次，差为 2 。</li><li>&#39;b&#39; 在 word1 中出现了 2 次，在 word2 中出现了 5 次，差为 3 。</li><li>&#39;c&#39; 在 word1 中出现了 3 次，在 word2 中出现了 0 次，差为 3 。</li><li>&#39;d&#39; 在 word1 中出现了 2 次，在 word2 中出现了 0 次，差为 2 。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>n == word1.length == word2.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>word1</code> 和 <code>word2</code> 都只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>字符频率统计</strong>：</p><ul><li>使用一个长度为 26 的数组 <code>freq</code>，每个位置表示一个字母的频次差值。</li><li>遍历 <code>word1</code>，将对应字母的频次增加。</li><li>遍历 <code>word2</code>，将对应字母的频次减少。</li></ul></li><li><p><strong>检查频次差值</strong>：</p><ul><li>遍历 <code>freq</code> 数组，检查是否存在绝对值大于 3 的元素。如果有，则返回 <code>false</code>。</li><li>如果所有元素的绝对值都不超过 3，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，其中 <code>m, n</code> 分别是 <code>word1</code> 和 <code>word2</code> 的长度，分别遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了一个长度为 26 的数组 <code>freq</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkAlmostEquivalent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计 word1 中每个字符的频次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 统计 word2 中每个字符的频次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 检查频次差值是否超过3</span>
	<span class="token keyword">return</span> freq<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">3</span> <span class="token operator">||</span> i <span class="token operator">&lt;</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"3303",-1),T=n("td",{style:{"text-align":"left"}},"第一个几乎相等子字符串的下标",-1),E=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=n("code",null,"字符串",-1),L=n("code",null,"字符串匹配",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/find-the-occurrence-of-first-almost-equal-substring",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring",target:"_blank",rel:"noopener noreferrer"};function j(B,z){const r=c("font"),t=c("RouterLink"),a=c("ExternalLinkIcon");return d(),i("div",null,[k,n("p",null,[e("🟢 "),s(r,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/hash-table.html"},{default:o(()=>[w]),_:1}),e(),s(t,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),e(),s(t,{to:"/tag/counting.html"},{default:o(()=>[f]),_:1}),e("  🔗 "),n("a",g,[b,s(a)]),e(),n("a",_,[q,s(a)])]),v,p(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,T,E,n("td",C,[s(t,{to:"/tag/string.html"},{default:o(()=>[I]),_:1}),e(),s(t,{to:"/tag/string-matching.html"},{default:o(()=>[L]),_:1})]),N,n("td",O,[n("a",V,[e("🀄️"),s(a)]),e(),n("a",A,[e("🔗"),s(a)])])])])])])}const G=l(h,[["render",j],["__file","2068.html.vue"]]);export{G as default};
