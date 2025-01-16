import{_ as r,r as c,o as i,c as u,a as n,b as t,d as a,w as s,f as d,e as p}from"./app-KDJRKGep.js";const k={},h=n("h1",{id:"_2287-重排字符形成目标字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2287-重排字符形成目标字符串","aria-hidden":"true"},"#"),t(" 2287. 重排字符形成目标字符串")],-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),_=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/rearrange-characters-to-make-target-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/rearrange-characters-to-make-target-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>0-indexed</strong> strings <code>s</code> and <code>target</code>. You can take some letters from <code>s</code> and rearrange them to form new strings.</p><p>Return _the<strong>maximum</strong> number of copies of _<code>target</code> <em>that can be formed by taking letters from</em><code>s</code> <em>and rearranging them.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ilovecodingonleetcode&quot;, target = &quot;code&quot;</p><p>Output: 2</p><p>Explanation:</p><p>For the first copy of &quot;code&quot;, take the letters at indices 4, 5, 6, and 7.</p><p>For the second copy of &quot;code&quot;, take the letters at indices 17, 18, 19, and 20.</p><p>The strings that are formed are &quot;ecod&quot; and &quot;code&quot; which can both be rearranged into &quot;code&quot;.</p><p>We can make at most two copies of &quot;code&quot;, so we return 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abcba&quot;, target = &quot;abc&quot;</p><p>Output: 1</p><p>Explanation:</p><p>We can make one copy of &quot;abc&quot; by taking the letters at indices 0, 1, and 2.</p><p>We can make at most one copy of &quot;abc&quot;, so we return 1.</p><p>Note that while there is an extra &#39;a&#39; and &#39;b&#39; at indices 3 and 4, we cannot reuse the letter &#39;c&#39; at index 2, so we cannot make a second copy of &quot;abc&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;abbaccaddaeea&quot;, target = &quot;aaaaa&quot;</p><p>Output: 1</p><p>Explanation:</p><p>We can make one copy of &quot;aaaaa&quot; by taking the letters at indices 0, 3, 6, 9, and 12.</p><p>We can make at most one copy of &quot;aaaaa&quot;, so we return 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>1 &lt;= target.length &lt;= 10</code></li><li><code>s</code> and <code>target</code> consist of lowercase English letters.</li></ul>',11),x=n("strong",null,"Note:",-1),w=p('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个下标从 <strong>0</strong> 开始的字符串 <code>s</code> 和 <code>target</code> 。你可以从 <code>s</code> 取出一些字符并将其重排，得到若干新的字符串。</p><p>从 <code>s</code> 中取出字符并重新排列，返回可以形成 <code>target</code> 的 <strong>最大</strong> 副本数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ilovecodingonleetcode&quot;, target = &quot;code&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>对于 &quot;code&quot; 的第 1 个副本，选取下标为 4 、5 、6 和 7 的字符。</p><p>对于 &quot;code&quot; 的第 2 个副本，选取下标为 17 、18 、19 和 20 的字符。</p><p>形成的字符串分别是 &quot;ecod&quot; 和 &quot;code&quot; ，都可以重排为 &quot;code&quot; 。</p><p>可以形成最多 2 个 &quot;code&quot; 的副本，所以返回 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcba&quot;, target = &quot;abc&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>选取下标为 0 、1 和 2 的字符，可以形成 &quot;abc&quot; 的 1 个副本。</p><p>可以形成最多 1 个 &quot;abc&quot; 的副本，所以返回 1 。</p><p>注意，尽管下标 3 和 4 分别有额外的 &#39;a&#39; 和 &#39;b&#39; ，但不能重用下标 2 处的 &#39;c&#39; ，所以无法形成 &quot;abc&quot; 的第 2 个副本。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abbaccaddaeea&quot;, target = &quot;aaaaa&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>选取下标为 0 、3 、6 、9 和 12 的字符，可以形成 &quot;aaaaa&quot; 的 1 个副本。</p><p>可以形成最多 1 个 &quot;aaaaa&quot; 的副本，所以返回 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>1 &lt;= target.length &lt;= 10</code></li><li><code>s</code> 和 <code>target</code> 由小写英文字母组成</li></ul>',11),C=n("strong",null,"注意：",-1),M=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频率：</strong></p><ul><li><code>targetMap</code> 记录了 <code>target</code> 中每个字母的频率。</li><li><code>freq</code> 记录了 <code>s</code> 中每个字母的频率。</li></ul></li><li><p><strong>最小次数计算：</strong></p><ul><li><code>minCount</code> 初始化为 <code>Infinity</code>，需要找到所有字母能够拼接目标单词的最小次数。</li><li>对于 <code>targetMap</code> 中的每个字母，检查它在 <code>s</code> 中的出现次数。</li><li>如果 <code>s</code> 中没有某个字母，则直接返回 0。</li><li>用 <code>Math.floor(freq[char] / count)</code> 计算 <code>s</code> 中该字母能提供的最大次数，并更新 <code>minCount</code>。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终返回 <code>minCount</code>，即拼凑 <code>target</code> 单词的最大次数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 是 <code>s</code> 的长度，<code>m</code> 是 <code>target</code> 的长度。 <ul><li>统计频率的时间复杂度为 <code>O(n + m)</code>。</li><li>遍历目标字符串 <code>target</code> 计算最小次数，时间复杂度为 <code>O(m)</code>。</li><li>总体时间复杂度为 <code>O(n + m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了两个 <code>Map</code> 来记录字母的频率，最多有 26 个字母。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rearrangeCharacters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 统计 target 中每个字符的频率</span>
	<span class="token keyword">let</span> targetMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		targetMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 统计 s 中每个字符的频率</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算可以拼凑 target 中单词的最大次数</span>
	<span class="token keyword">let</span> minCount <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>char<span class="token punctuation">,</span> count<span class="token punctuation">]</span> <span class="token keyword">of</span> targetMap<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果 s 中没有 target 中的某个字母，直接返回 0</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>freq<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		minCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCount<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">/</span> count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> minCount<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"1160",-1),O=n("td",{style:{"text-align":"left"}},"拼写单词",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),B=n("code",null,"字符串",-1),j=n("code",null,"1+",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/find-words-that-can-be-formed-by-characters",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"1297",-1),z=n("td",{style:{"text-align":"left"}},"子串的最大出现次数",-1),A=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},G=n("code",null,"哈希表",-1),H=n("code",null,"字符串",-1),J=n("code",null,"滑动窗口",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/maximum-number-of-occurrences-of-a-substring",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring",target:"_blank",rel:"noopener noreferrer"};function X(Z,$){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[t("🟢 "),a(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),t(),a(e,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),t(),a(e,{to:"/tag/counting.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",b,[f,a(o)]),t(),n("a",q,[v,a(o)])]),y,n("p",null,[x,t(" This question is the same as "),a(e,{to:"/problem/1189.html"},{default:s(()=>[t(" 1189. Maximum Number of Balloons")]),_:1})]),w,n("p",null,[C,t(" 本题与 "),a(e,{to:"/problem/1189.html"},{default:s(()=>[t("1189. “气球” 的最大数量")]),_:1}),t(" 相同。")]),M,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[N,O,n("td",I,[a(e,{to:"/problem/1160.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/array.html"},{default:s(()=>[V]),_:1}),t(),a(e,{to:"/tag/hash-table.html"},{default:s(()=>[W]),_:1}),t(),a(e,{to:"/tag/string.html"},{default:s(()=>[B]),_:1}),t(),j]),R,n("td",T,[n("a",F,[t("🀄️"),a(o)]),t(),n("a",Y,[t("🔗"),a(o)])])]),n("tr",null,[S,z,A,n("td",D,[a(e,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),t(),a(e,{to:"/tag/string.html"},{default:s(()=>[H]),_:1}),t(),a(e,{to:"/tag/sliding-window.html"},{default:s(()=>[J]),_:1})]),K,n("td",P,[n("a",Q,[t("🀄️"),a(o)]),t(),n("a",U,[t("🔗"),a(o)])])])])])])}const tn=r(k,[["render",X],["__file","2287.html.vue"]]);export{tn as default};
