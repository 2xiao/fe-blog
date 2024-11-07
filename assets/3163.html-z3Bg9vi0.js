import{_ as d,r as l,o as p,c as i,a as o,b as t,d as e,w as n,f as r,e as u}from"./app-OX-nYmHS.js";const h={},m=o("h1",{id:"_3163-压缩字符串-iii",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_3163-压缩字符串-iii","aria-hidden":"true"},"#"),t(" 3163. 压缩字符串 III")],-1),g=o("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/string-compression-iii",target:"_blank",rel:"noopener noreferrer"},k=o("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/string-compression-iii",target:"_blank",rel:"noopener noreferrer"},b=o("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>word</code>, compress it using the following algorithm:</p><ul><li>Begin with an empty string <code>comp</code>. While <code>word</code> is <strong>not</strong> empty, use the following operation:</li><li>Remove a maximum length prefix of <code>word</code> made of a <em>single character</em> <code>c</code> repeating <strong>at most</strong> 9 times.</li><li>Append the length of the prefix followed by <code>c</code> to <code>comp</code>.</li></ul><p>Return the string <code>comp</code>.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> word = &quot;abcde&quot;</p><p><strong>Output:</strong> &quot;1a1b1c1d1e&quot;</p><p><strong>Explanation:</strong></p><p>Initially, <code>comp = &quot;&quot;</code>. Apply the operation 5 times, choosing <code>&quot;a&quot;</code>, <code>&quot;b&quot;</code>, <code>&quot;c&quot;</code>, <code>&quot;d&quot;</code>, and <code>&quot;e&quot;</code> as the prefix in each operation.</p><p>For each prefix, append <code>&quot;1&quot;</code> followed by the character to <code>comp</code>.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> word = &quot;aaaaaaaaaaaaaabb&quot;</p><p><strong>Output:</strong> &quot;9a5a2b&quot;</p><p><strong>Explanation:</strong></p><p>Initially, <code>comp = &quot;&quot;</code>. Apply the operation 3 times, choosing <code>&quot;aaaaaaaaa&quot;</code>, <code>&quot;aaaaa&quot;</code>, and <code>&quot;bb&quot;</code> as the prefix in each operation.</p><ul><li>For prefix <code>&quot;aaaaaaaaa&quot;</code>, append <code>&quot;9&quot;</code> followed by <code>&quot;a&quot;</code> to <code>comp</code>.</li><li>For prefix <code>&quot;aaaaa&quot;</code>, append <code>&quot;5&quot;</code> followed by <code>&quot;a&quot;</code> to <code>comp</code>.</li><li>For prefix <code>&quot;bb&quot;</code>, append <code>&quot;2&quot;</code> followed by <code>&quot;b&quot;</code> to <code>comp</code>.</li></ul><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 2 * 10^5</code></li><li><code>word</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>word</code>，请你使用以下算法进行压缩：</p><ul><li>从空字符串 <code>comp</code> 开始。当 <code>word</code> <strong>不为空</strong> 时，执行以下操作：</li><li>移除 <code>word</code> 的最长单字符前缀，该前缀由单一字符 <code>c</code> 重复多次组成，且该前缀长度 <strong>最多</strong> 为 9 。</li><li>将前缀的长度和字符 <code>c</code> 追加到 <code>comp</code> 。</li></ul><p>返回字符串 <code>comp</code> 。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> word = &quot;abcde&quot;</p><p><strong>输出：</strong> &quot;1a1b1c1d1e&quot;</p><p><strong>解释：</strong></p><p>初始时，<code>comp = &quot;&quot;</code> 。进行 5 次操作，每次操作分别选择 <code>&quot;a&quot;</code>、<code>&quot;b&quot;</code>、<code>&quot;c&quot;</code>、<code>&quot;d&quot;</code> 和 <code>&quot;e&quot;</code> 作为前缀。</p><p>对每个前缀，将 <code>&quot;1&quot;</code> 和对应的字符追加到 <code>comp</code>。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> word = &quot;aaaaaaaaaaaaaabb&quot;</p><p><strong>输出：</strong> &quot;9a5a2b&quot;</p><p><strong>解释：</strong></p><p>初始时，<code>comp = &quot;&quot;</code>。进行 3 次操作，每次操作分别选择 <code>&quot;aaaaaaaaa&quot;</code>、<code>&quot;aaaaa&quot;</code> 和 <code>&quot;bb&quot;</code> 作为前缀。</p><ul><li>对于前缀 <code>&quot;aaaaaaaaa&quot;</code>，将 <code>&quot;9&quot;</code> 和 <code>&quot;a&quot;</code> 追加到 <code>comp</code>。</li><li>对于前缀 <code>&quot;aaaaa&quot;</code>，将 <code>&quot;5&quot;</code> 和 <code>&quot;a&quot;</code> 追加到 <code>comp</code>。</li><li>对于前缀 <code>&quot;bb&quot;</code>，将 <code>&quot;2&quot;</code> 和 <code>&quot;b&quot;</code> 追加到 <code>comp</code>。</li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 2 * 10^5</code></li><li><code>word</code> 仅由小写英文字母组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>创建一个空字符串 <code>comp</code> 用于存储压缩后的结果。</li><li>使用一个索引 <code>i</code> 从 <code>0</code> 开始遍历 <code>word</code>。</li></ul></li><li><p><strong>循环遍历字符串</strong>：</p><ul><li>在循环中，首先重置 <code>count</code> 为 <code>0</code>，用来计数当前字符的连续出现次数。</li><li>使用 <code>curChar</code> 记录当前字符。</li></ul></li><li><p><strong>计算前缀长度</strong>：</p><ul><li>使用一个嵌套的 <code>while</code> 循环，计算当前字符的最长前缀长度。条件是当前字符与 <code>curChar</code> 相等并且计数小于 <code>9</code>。</li><li>每次匹配到相同字符时，增加计数并移动索引 <code>i</code>。</li></ul></li><li><p><strong>构建压缩字符串</strong>：</p><ul><li>在外层循环中，将前缀长度和字符追加到 <code>comp</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>当字符串遍历完成后，返回最终的压缩结果 <code>comp</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>word</code> 的长度，每个字符最多被遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，压缩后的字符串可能与输入字符串相同（例如，所有字符都不同），因此需要额外的空间存储结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">compressedString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> comp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> curChar <span class="token operator">=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 计算当前字符的前缀长度（最多为9）</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> curChar <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将前缀的长度和字符追加到 comp</span>
		comp <span class="token operator">+=</span> count <span class="token operator">+</span> curChar<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> comp<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,43),v=o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}},"题号"),o("th",{style:{"text-align":"left"}},"标题"),o("th",{style:{"text-align":"center"}},"题解"),o("th",{style:{"text-align":"left"}},"标签"),o("th",{style:{"text-align":"left"}},"难度")])],-1),w=o("td",{style:{"text-align":"center"}},"443",-1),x={style:{"text-align":"left"}},y={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},C={style:{"text-align":"left"}},E=o("code",null,"双指针",-1),L=o("code",null,"字符串",-1),N={style:{"text-align":"left"}},V=o("td",{style:{"text-align":"center"}},"1531",-1),B={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/string-compression-ii",target:"_blank",rel:"noopener noreferrer"},O=o("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},j=o("code",null,"字符串",-1),A=o("code",null,"动态规划",-1),M={style:{"text-align":"left"}};function S(G,H){const c=l("font"),a=l("RouterLink"),s=l("ExternalLinkIcon");return p(),i("div",null,[m,o("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:n(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/string.html"},{default:n(()=>[g]),_:1}),t("  🔗 "),o("a",q,[k,e(s)]),t(),o("a",_,[b,e(s)])]),f,r(" prettier-ignore "),o("table",null,[v,o("tbody",null,[o("tr",null,[w,o("td",x,[o("a",y,[t("压缩字符串"),e(s)])]),o("td",I,[e(a,{to:"/problem/0443.html"},{default:n(()=>[t("[✓]")]),_:1})]),o("td",C,[e(a,{to:"/tag/two-pointers.html"},{default:n(()=>[E]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:n(()=>[L]),_:1})]),o("td",N,[e(c,{color:"#ffb800"},{default:n(()=>[t("Medium")]),_:1})])]),o("tr",null,[V,o("td",B,[o("a",F,[t("压缩字符串 II"),e(s)])]),O,o("td",R,[e(a,{to:"/tag/string.html"},{default:n(()=>[j]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:n(()=>[A]),_:1})]),o("td",M,[e(c,{color:"#ff334b"},{default:n(()=>[t("Hard")]),_:1})])])])])])}const W=d(h,[["render",S],["__file","3163.html.vue"]]);export{W as default};
