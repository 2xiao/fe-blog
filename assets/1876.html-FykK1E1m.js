import{_ as l,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as i}from"./app-r0ql_Osa.js";const d={},k=n("h1",{id:"_1876-长度为三且各字符不同的子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1876-长度为三且各字符不同的子字符串","aria-hidden":"true"},"#"),s(" 1876. 长度为三且各字符不同的子字符串")],-1),b=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),g=n("code",null,"计数",-1),h=n("code",null,"滑动窗口",-1),q={href:"https://leetcode.cn/problems/substrings-of-size-three-with-distinct-characters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),z=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A string is <strong>good</strong> if there are no repeated characters.</p><p>Given a string <code>s</code>​​​​​, return <em>the number of <strong>good substrings</strong> of length <strong>three</strong> in</em> <code>s</code>​​​​​​.</p><p>Note that if there are multiple occurrences of the same substring, every occurrence should be counted.</p><p>A <strong>substring</strong> is a contiguous sequence of characters in a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;xyzzaz&quot;</p><p>Output: 1</p><p>Explanation: There are 4 substrings of size 3: &quot;xyz&quot;, &quot;yzz&quot;, &quot;zza&quot;, and &quot;zaz&quot;.</p><p>The only good substring of length 3 is &quot;xyz&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aababcabc&quot;</p><p>Output: 4</p><p>Explanation: There are 7 substrings of size 3: &quot;aab&quot;, &quot;aba&quot;, &quot;bab&quot;, &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.</p><p>The good substrings are &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code>​​​​​​ consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果一个字符串不含有任何重复字符，我们称这个字符串为 <strong>好</strong> 字符串。</p><p>给你一个字符串 <code>s</code> ，请你返回 <code>s</code> 中长度为 <strong>3</strong> 的 <strong>好子字符串</strong> 的数量。</p><p>注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。</p><p><strong>子字符串</strong> 是一个字符串中连续的字符序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;xyzzaz&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 总共有 4 个长度为 3 的子字符串：&quot;xyz&quot;，&quot;yzz&quot;，&quot;zza&quot; 和 &quot;zaz&quot; 。</p><p>唯一的长度为 3 的好子字符串是 &quot;xyz&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aababcabc&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 总共有 7 个长度为 3 的子字符串：&quot;aab&quot;，&quot;aba&quot;，&quot;bab&quot;，&quot;abc&quot;，&quot;bca&quot;，&quot;cab&quot; 和 &quot;abc&quot; 。</p><p>好子字符串包括 &quot;abc&quot;，&quot;bca&quot;，&quot;cab&quot; 和 &quot;abc&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code>​​​​​​ 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化三个指针</strong>：</p><ul><li>可以通过三个变量 <code>a</code>, <code>b</code>, 和 <code>c</code> 来表示当前滑动窗口内的 3 个字符。</li><li>初始时，<code>a</code>, <code>b</code>, <code>c</code> 是第一个窗口（<code>s[0]</code>, <code>s[1]</code>, <code>s[2]</code>）的字符</li></ul></li><li><p><strong>滑动窗口</strong>：</p><ul><li>从 <code>i = 3</code> 开始遍历，逐个更新 <code>a</code>, <code>b</code>, <code>c</code>。对于每个更新的窗口，</li><li>每次滑动时，判断窗口中的字符是否全部不同（即 <code>a != b &amp;&amp; b != c &amp;&amp; a != c</code>）</li><li>如果是，则计数 <code>count</code> 加 1。</li></ul></li><li><p><strong>最后一个窗口的处理</strong>：</p><ul><li>遍历结束后，还需要处理最后一个窗口的判断，因为最后的窗口没有通过循环被检查。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最终返回 <code>count</code>，即符合条件的子串数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，只需遍历字符串一次，并进行常数时间的判断操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常数级别的额外空间来存储字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countGoodSubstrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 初始化前三个字符</span>
	<span class="token keyword">let</span> a <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		b <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		c <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 从第4个字符开始遍历</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前窗口内的3个字符都不相同</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b <span class="token operator">&amp;&amp;</span> b <span class="token operator">!=</span> c <span class="token operator">&amp;&amp;</span> a <span class="token operator">!=</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 更新窗口</span>
		a <span class="token operator">=</span> b<span class="token punctuation">;</span>
		b <span class="token operator">=</span> c<span class="token punctuation">;</span>
		c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 最后一个窗口的判断</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">!=</span> b <span class="token operator">&amp;&amp;</span> b <span class="token operator">!=</span> c <span class="token operator">&amp;&amp;</span> a <span class="token operator">!=</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function x(y,w){const p=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/sliding-window.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",q,[v,a(c)]),s(),n("a",_,[f,a(c)])]),z])}const L=l(d,[["render",x],["__file","1876.html.vue"]]);export{L as default};
