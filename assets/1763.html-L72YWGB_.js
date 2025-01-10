import{_ as l,r as p,o as r,c as u,a as n,b as s,d as t,w as a,f as i,e as d}from"./app-XFeYdzZv.js";const k={},g=n("h1",{id:"_1763-最长的美好子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1763-最长的美好子字符串","aria-hidden":"true"},"#"),s(" 1763. 最长的美好子字符串")],-1),h=n("code",null,"位运算",-1),b=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),_=n("code",null,"分治",-1),q=n("code",null,"滑动窗口",-1),f={href:"https://leetcode.cn/problems/longest-nice-substring",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-nice-substring",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A string <code>s</code> is <strong>nice</strong> if, for every letter of the alphabet that <code>s</code> contains, it appears <strong>both</strong> in uppercase and lowercase. For example, <code>&quot;abABB&quot;</code> is nice because <code>&#39;A&#39;</code> and <code>&#39;a&#39;</code> appear, and <code>&#39;B&#39;</code> and <code>&#39;b&#39;</code> appear. However, <code>&quot;abA&quot;</code> is not because <code>&#39;b&#39;</code> appears, but <code>&#39;B&#39;</code> does not.</p><p>Given a string <code>s</code>, return <em>the longest <strong>substring</strong> of <code>s</code> that is <strong>nice</strong>. If there are multiple, return the substring of the <strong>earliest</strong> occurrence. If there are none, return an empty string</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;YazaAay&quot;</p><p>Output: &quot;aAa&quot;</p><p>Explanation: &quot;aAa&quot; is a nice string because &#39;A/a&#39; is the only letter of the alphabet in s, and both &#39;A&#39; and &#39;a&#39; appear.</p><p>&quot;aAa&quot; is the longest nice substring.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;Bb&quot;</p><p>Output: &quot;Bb&quot;</p><p>Explanation: &quot;Bb&quot; is a nice string because both &#39;B&#39; and &#39;b&#39; appear. The whole string is a substring.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;c&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: There are no nice substrings.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of uppercase and lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>当一个字符串 <code>s</code> 包含的每一种字母的大写和小写形式 <strong>同时</strong> 出现在 <code>s</code> 中，就称这个字符串 <code>s</code> 是 <strong>美好</strong> 字符串。比方说，<code>&quot;abABB&quot;</code> 是美好字符串，因为 <code>&#39;A&#39;</code> 和 <code>&#39;a&#39;</code> 同时出现了，且 <code>&#39;B&#39;</code> 和 <code>&#39;b&#39;</code> 也同时出现了。然而，<code>&quot;abA&quot;</code> 不是美好字符串因为 <code>&#39;b&#39;</code> 出现了，而 <code>&#39;B&#39;</code> 没有出现。</p><p>给你一个字符串 <code>s</code> ，请你返回 <code>s</code> 最长的 <strong>美好子字符串</strong> 。如果有多个答案，请你返回 <strong>最早</strong> 出现的一个。如果不存在美好子字符串，请你返回一个空字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;YazaAay&quot;</p><p><strong>输出：</strong> &quot;aAa&quot;</p><p><strong>解释：</strong> &quot;aAa&quot; 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 &#39;a&#39; 和大写形式 &#39;A&#39; 也同时出现了。</p><p>&quot;aAa&quot; 是最长的美好子字符串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;Bb&quot;</p><p><strong>输出：</strong> &quot;Bb&quot;</p><p><strong>解释：</strong> &quot;Bb&quot; 是美好字符串，因为 &#39;B&#39; 和 &#39;b&#39; 都出现了。整个字符串也是原字符串的子字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;c&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> 没有美好子字符串。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;dDzeE&quot;</p><p><strong>输出：</strong> &quot;dD&quot;</p><p><strong>解释：</strong> &quot;dD&quot; 和 &quot;eE&quot; 都是最长美好子字符串。</p><p>由于有多个美好子字符串，返回 &quot;dD&quot; ，因为它出现得最早。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 只包含大写和小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>分治法</strong>来解决这一问题。</p><ul><li>如果当前字符串中的某个字符只存在小写或大写形式，则当前字符串不可能是优美字符串。</li><li>我们以该字符为分隔点，将字符串分成两个子字符串，分别递归求解最长的优美子字符串。 <ul><li>比较两个子字符串的长度，返回较长的那个。</li></ul></li><li>终止条件：如果字符串长度小于等于 1，则无法形成优美字符串，返回空字符串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归调用的深度最大为字符串长度 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestNiceSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 长度为 1 或 0 的字符串不能是优美字符串</span>

	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>s<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符串中的字符放入集合中</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 如果当前字符的另一种大小写形式不存在，则分治处理</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> sub1 <span class="token operator">=</span> <span class="token function">longestNiceSubstring</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左子字符串</span>
			<span class="token keyword">const</span> sub2 <span class="token operator">=</span> <span class="token function">longestNiceSubstring</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右子字符串</span>
			<span class="token keyword">return</span> sub1<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> sub2<span class="token punctuation">.</span>length <span class="token operator">?</span> sub1 <span class="token operator">:</span> sub2<span class="token punctuation">;</span> <span class="token comment">// 返回较长的优美子字符串</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> s<span class="token punctuation">;</span> <span class="token comment">// 当前字符串是优美字符串，直接返回</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"2421",-1),E=n("td",{style:{"text-align":"left"}},"好路径的数目",-1),N=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=n("code",null,"树",-1),L=n("code",null,"并查集",-1),O=n("code",null,"图",-1),S=n("code",null,"3+",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/number-of-good-paths",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/number-of-good-paths",target:"_blank",rel:"noopener noreferrer"};function T(R,Y){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return r(),u("div",null,[g,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/bit-manipulation.html"},{default:a(()=>[h]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[b]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s(),t(o,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[_]),_:1}),s(),t(o,{to:"/tag/sliding-window.html"},{default:a(()=>[q]),_:1}),s("  🔗 "),n("a",f,[v,t(e)]),s(),n("a",y,[x,t(e)])]),w,i(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[A,E,N,n("td",C,[t(o,{to:"/tag/tree.html"},{default:a(()=>[I]),_:1}),s(),t(o,{to:"/tag/union-find.html"},{default:a(()=>[L]),_:1}),s(),t(o,{to:"/tag/graph.html"},{default:a(()=>[O]),_:1}),s(),S]),V,n("td",D,[n("a",j,[s("🀄️"),t(e)]),s(),n("a",z,[s("🔗"),t(e)])])])])])])}const G=l(k,[["render",T],["__file","1763.html.vue"]]);export{G as default};
