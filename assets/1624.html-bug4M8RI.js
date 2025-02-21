import{_ as l,r as t,o as r,c as i,a as n,b as s,d as a,w as e,e as u}from"./app-9CeBk-uV.js";const d={},k=n("h1",{id:"_1624-两个相同字符之间的最长子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1624-两个相同字符之间的最长子字符串","aria-hidden":"true"},"#"),s(" 1624. 两个相同字符之间的最长子字符串")],-1),g=n("code",null,"哈希表",-1),h=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/largest-substring-between-two-equal-characters",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/largest-substring-between-two-equal-characters",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the length of the longest substring between two equal characters, excluding the two characters.</em> If there is no such substring return <code>-1</code>.</p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aa&quot;</p><p>Output: 0</p><p>Explanation: The optimal substring here is an empty substring between the two &#39;a&#39;s.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abca&quot;</p><p>Output: 2</p><p>Explanation: The optimal substring here is &quot;bc&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;cbzxy&quot;</p><p>Output: -1</p><p>Explanation: There are no characters that appear twice in s.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 300</code></li><li><code>s</code> contains only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，请你返回 <strong>两个相同字符之间的最长子字符串的长度</strong> ，计算长度时不含这两个字符。如果不存在这样的子字符串，返回 <code>-1</code>。</p><p><strong>子字符串</strong> 是字符串中的一个连续字符序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aa&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 最优的子字符串是两个 &#39;a&#39; 之间的空子字符串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abca&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 最优的子字符串是 &quot;bc&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;cbzxy&quot;</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> s 中不存在出现出现两次的字符，所以返回 -1 。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;cabbac&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 最优的子字符串是 &quot;abba&quot; ，其他的非最优解包括 &quot;bb&quot; 和 &quot;&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 300</code></li><li><code>s</code> 只含小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义状态存储第一个出现位置</strong>：</p><ul><li>使用一个长度为 <code>26</code> 的数组 <code>firstIndex</code> 来记录每个字符的首次出现索引。</li><li>初始化数组的所有值为 <code>n</code>，即数组长度，这表示该字符尚未出现在字符串中。</li><li>定义变量 <code>longest</code> 来记录两个相同字符之间的最长子字符串的长度，初始化为 <code>-1</code>，即无符合条件的字符；</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>对于每个字符 <code>s[i]</code>： <ul><li>计算其在 <code>firstIndex</code> 中对应的索引 <code>code</code>，公式为： <code>s[i].charCodeAt() - 97</code></li><li>如果 <code>firstIndex[code]</code> 为初始值 <code>n</code>，说明这是该字符的首次出现，记录其索引： <code>firstIndex[code] = i</code></li><li>否则，该字符已出现过，计算当前索引和首次索引的间隔长度，并尝试更新最长间隔： <code>longest = Math.max(longest, i - firstIndex[code] - 1)</code></li></ul></li></ul></li><li><p>最后返回 <code>longest</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，只需遍历字符串一次，每次操作为常数时间。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了固定大小的数组 <code>firstIndex</code>，大小为 <code>26</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxLengthBetweenEqualCharacters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> firstIndex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化为 n，表示字符尚未出现</span>
	<span class="token keyword">let</span> longest <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 初始化为 -1，表示尚未找到符合条件的字符</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> code <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">;</span> <span class="token comment">// 计算字符的数组索引</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>firstIndex<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 首次出现</span>
			firstIndex<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 已出现过，计算间隔并更新最长距离</span>
			longest <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>longest<span class="token punctuation">,</span> i <span class="token operator">-</span> firstIndex<span class="token punctuation">[</span>code<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> longest<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function _(x,w){const c=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",b,[m,a(p)]),s(),n("a",v,[f,a(p)])]),q])}const I=l(d,[["render",_],["__file","1624.html.vue"]]);export{I as default};
