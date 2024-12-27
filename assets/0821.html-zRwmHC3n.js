import{_ as l,r as c,o as i,c as r,a as n,b as s,d as e,w as a,f as d,e as u}from"./app-fqckLmln.js";const k={},h=n("h1",{id:"_821-字符的最短距离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_821-字符的最短距离","aria-hidden":"true"},"#"),s(" 821. 字符的最短距离")],-1),m=n("code",null,"数组",-1),b=n("code",null,"双指针",-1),g=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/shortest-distance-to-a-character",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/shortest-distance-to-a-character",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and a character <code>c</code> that occurs in <code>s</code>, return <em>an array of integers</em><code>answer</code> <em>where</em><code>answer.length == s.length</code> <em>and</em><code>answer[i]</code>_is the <strong>distance</strong> from index _<code>i</code> <em>to the <strong>closest</strong> occurrence of character</em><code>c</code> <em>in</em><code>s</code>.</p><p>The <strong>distance</strong> between two indices <code>i</code> and <code>j</code> is <code>abs(i - j)</code>, where <code>abs</code> is the absolute value function.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;loveleetcode&quot;, c = &quot;e&quot;</p><p>Output: [3,2,1,0,1,0,0,1,2,2,1,0]</p><p>Explanation: The character &#39;e&#39; appears at indices 3, 5, 6, and 11 (0-indexed).</p><p>The closest occurrence of &#39;e&#39; for index 0 is at index 3, so the distance is abs(0 - 3) = 3.</p><p>The closest occurrence of &#39;e&#39; for index 1 is at index 3, so the distance is abs(1 - 3) = 2.</p><p>For index 4, there is a tie between the &#39;e&#39; at index 3 and the &#39;e&#39; at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.</p><p>The closest occurrence of &#39;e&#39; for index 8 is at index 6, so the distance is abs(8 - 6) = 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aaab&quot;, c = &quot;b&quot;</p><p>Output: [3,2,1,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s[i]</code> and <code>c</code> are lowercase English letters.</li><li>It is guaranteed that <code>c</code> occurs at least once in <code>s</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个字符 <code>c</code> ，且 <code>c</code> 是 <code>s</code> 中出现过的字符。</p><p>返回一个整数数组 <code>answer</code> ，其中 <code>answer.length == s.length</code> 且 <code>answer[i]</code> 是 <code>s</code> 中从下标 <code>i</code> 到离它 <strong>最近</strong> 的字符 <code>c</code> 的 <strong>距离</strong> 。</p><p>两个下标 <code>i</code> 和 <code>j</code> 之间的 <strong>距离</strong> 为 <code>abs(i - j)</code> ，其中 <code>abs</code> 是绝对值函数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;loveleetcode&quot;, c = &quot;e&quot;</p><p><strong>输出：</strong>[3,2,1,0,1,0,0,1,2,2,1,0]</p><p><strong>解释：</strong> 字符 &#39;e&#39; 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。</p><p>距下标 0 最近的 &#39;e&#39; 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。</p><p>距下标 1 最近的 &#39;e&#39; 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。</p><p>对于下标 4 ，出现在下标 3 和下标 5 处的 &#39;e&#39; 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。</p><p>距下标 8 最近的 &#39;e&#39; 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aaab&quot;, c = &quot;b&quot;</p><p><strong>输出：</strong>[3,2,1,0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s[i]</code> 和 <code>c</code> 均为小写英文字母</li><li>题目数据保证 <code>c</code> 在 <code>s</code> 中至少出现一次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以通过两次遍历字符串 <code>s</code> 来解决，分别从左到右和从右到左更新距离。</p><ol><li><p><strong>从左到右遍历</strong>：</p><ul><li>遍历字符串 <code>s</code>，记录每个位置距离上一个字符 <code>c</code> 的距离。</li><li>如果当前位置是字符 <code>c</code>，更新上一个字符 <code>c</code> 为当前位置。</li></ul></li><li><p><strong>从右到左遍历</strong>：</p><ul><li>再次遍历字符串 <code>s</code>，更新每个位置距离下一个字符 <code>c</code> 的距离，取两个方向的最小值。</li></ul></li></ol><p>这样可以确保每个位置的最小距离都被正确更新。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要遍历两次字符串。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个长度为 <code>n</code> 的数组存储答案数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shortestToChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 从左到右更新距离</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 记录上一个字符 c 的位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> prev<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 从右到左更新距离</span>
	prev <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 记录下一个字符 c 的位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> prev <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2399",-1),E=n("td",{style:{"text-align":"left"}},"检查相同字母间的距离",-1),I=n("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},T=n("code",null,"数组",-1),C=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"};function R(A,F){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),e(t,{to:"/tag/two-pointers.html"},{default:a(()=>[b]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[_,e(o)]),s(),n("a",f,[x,e(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,I,n("td",j,[e(t,{to:"/tag/array.html"},{default:a(()=>[T]),_:1}),s(),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[C]),_:1}),s(),e(t,{to:"/tag/string.html"},{default:a(()=>[L]),_:1})]),N,n("td",V,[n("a",O,[s("🀄️"),e(o)]),s(),n("a",B,[s("🔗"),e(o)])])])])])])}const M=l(k,[["render",R],["__file","0821.html.vue"]]);export{M as default};
