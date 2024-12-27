import{_ as r,r as c,o as p,c as d,a as e,b as n,d as t,w as s,f as i,e as u}from"./app-fqckLmln.js";const g={},h=e("h1",{id:"_1869-哪种连续子字符串更长",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1869-哪种连续子字符串更长","aria-hidden":"true"},"#"),n(" 1869. 哪种连续子字符串更长")],-1),m=e("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/longer-contiguous-segments-of-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary string <code>s</code>, return <code>true</code> _if the <strong>longest</strong> contiguous segment of _<code>1</code>&#39;_s is <strong>strictly longer</strong> than the <strong>longest</strong> contiguous segment of _<code>0</code>&#39;<em>s in</em><code>s</code>, or return <code>false</code> <em>otherwise</em>.</p><ul><li>For example, in <code>s = &quot;_11_ 01 _000_ 10&quot;</code> the longest continuous segment of <code>1</code>s has length <code>2</code>, and the longest continuous segment of <code>0</code>s has length <code>3</code>.</li></ul><p>Note that if there are no <code>0</code>&#39;s, then the longest continuous segment of <code>0</code>&#39;s is considered to have a length <code>0</code>. The same applies if there is no <code>1</code>&#39;s.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;1101&quot;</p><p>Output: true</p><p>Explanation:</p><p>The longest contiguous segment of 1s has length 2: &quot;<em>11</em> 01&quot;</p><p>The longest contiguous segment of 0s has length 1: &quot;11 <em>0</em> 1&quot;</p><p>The segment of 1s is longer, so return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;111000&quot;</p><p>Output: false</p><p>Explanation:</p><p>The longest contiguous segment of 1s has length 3: &quot;<em>111</em> 000&quot;</p><p>The longest contiguous segment of 0s has length 3: &quot;111 <em>000</em> &quot;</p><p>The segment of 1s is not longer, so return false.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;110100010&quot;</p><p>Output: false</p><p>Explanation:</p><p>The longest contiguous segment of 1s has length 2: &quot;<em>11</em> 0100010&quot;</p><p>The longest contiguous segment of 0s has length 3: &quot;1101 <em>000</em> 10&quot;</p><p>The segment of 1s is not longer, so return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二进制字符串 <code>s</code> 。如果字符串中由 <code>1</code> 组成的 <strong>最长</strong> 连续子字符串 <strong>严格长于</strong> 由 <code>0</code> 组成的 <strong>最长</strong> 连续子字符串，返回 <code>true</code> ；否则，返回 <code>false</code>。</p><ul><li>例如，<code>s = &quot;110100010&quot;</code> 中，由 <code>1</code> 组成的最长连续子字符串的长度是 <code>2</code> ，由 <code>0</code> 组成的最长连续子字符串的长度是 <code>3</code> 。</li></ul><p>注意，如果字符串中不存在 <code>0</code> ，此时认为由 <code>0</code> 组成的最长连续子字符串的长度是 <code>0</code> 。字符串中不存在 <code>1</code> 的情况也适用此规则。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1101&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>由 1 组成的最长连续子字符串的长度是 2：&quot;<strong>11</strong> 01&quot;</p><p>由 0 组成的最长连续子字符串的长度是 1：&quot;11<strong>0</strong> 1&quot;</p><p>由 1 组成的子字符串更长，故返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;111000&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>由 1 组成的最长连续子字符串的长度是 3：&quot;<strong>111</strong> 000&quot;</p><p>由 0 组成的最长连续子字符串的长度是 3：&quot;111<strong>000</strong> &quot;</p><p>由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;110100010&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>由 1 组成的最长连续子字符串的长度是 2：&quot;<strong>11</strong> 0100010&quot;</p><p>由 0 组成的最长连续子字符串的长度是 3：&quot;1101<strong>000</strong> 10&quot;</p><p>由 1 组成的子字符串不比由 0 组成的子字符串长，故返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> 不是 <code>&#39;0&#39;</code> 就是 <code>&#39;1&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>curOnes</code> 和 <code>curZeros</code> 用于记录当前连续出现的 1 和 0 的个数。</li><li><code>maxOnes</code> 和 <code>maxZeros</code> 用于记录字符串中出现的连续 1 和连续 0 的最大个数。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>遍历字符串中的每个字符： <ul><li>如果字符是 <code>1</code>，则： <ul><li>增加 <code>curOnes</code>，并更新 <code>maxOnes</code> 为 <code>curOnes</code> 和当前 <code>maxOnes</code> 的较大值。</li><li>重置 <code>curZeros</code> 为 0，表示当前连续的 0 断开了。</li></ul></li><li>如果字符是 <code>0</code>，则： <ul><li>增加 <code>curZeros</code>，并更新 <code>maxZeros</code> 为 <code>curZeros</code> 和当前 <code>maxZeros</code> 的较大值。</li><li>重置 <code>curOnes</code> 为 0，表示当前连续的 1 断开了。</li></ul></li></ul></li></ul></li><li><p><strong>最终判断</strong>：</p><ul><li>遍历结束后，直接比较 <code>maxOnes</code> 和 <code>maxZeros</code> 的大小，返回 <code>maxOnes &gt; maxZeros</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，因为只需要遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkZeroOnes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> curOnes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		curZeros <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxOnes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxZeros <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curOnes<span class="token operator">++</span><span class="token punctuation">;</span>
			maxOnes <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxOnes<span class="token punctuation">,</span> curOnes<span class="token punctuation">)</span><span class="token punctuation">;</span>
			curZeros <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置当前连续 0 的计数</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			curZeros<span class="token operator">++</span><span class="token punctuation">;</span>
			maxZeros <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxZeros<span class="token punctuation">,</span> curZeros<span class="token punctuation">)</span><span class="token punctuation">;</span>
			curOnes <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置当前连续 1 的计数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxOnes <span class="token operator">&gt;</span> maxZeros<span class="token punctuation">;</span> <span class="token comment">// 比较连续 1 和连续 0 的最大值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"485",-1),y=e("td",{style:{"text-align":"left"}},"最大连续 1 的个数",-1),O={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},w=e("code",null,"数组",-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),E={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},I=e("td",{style:{"text-align":"center"}},"1784",-1),L=e("td",{style:{"text-align":"left"}},"检查二进制字符串字段",-1),V={style:{"text-align":"center"}},z={style:{"text-align":"left"}},j=e("code",null,"字符串",-1),B=e("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"2031",-1),S=e("td",{style:{"text-align":"left"}},"1 比 0 多的子数组个数 🔒",-1),A=e("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},H=e("code",null,"树状数组",-1),J=e("code",null,"线段树",-1),K=e("code",null,"数组",-1),P=e("code",null,"4+",-1),Q=e("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/count-subarrays-with-more-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"};function Y($,ee){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),d("div",null,[h,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",k,[_,t(a)]),n(),e("a",f,[b,t(a)])]),x,i(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[q,y,e("td",O,[t(o,{to:"/problem/0485.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",Z,[t(o,{to:"/tag/array.html"},{default:s(()=>[w]),_:1})]),T,e("td",E,[e("a",N,[n("🀄️"),t(a)]),n(),e("a",C,[n("🔗"),t(a)])])]),e("tr",null,[I,L,e("td",V,[t(o,{to:"/problem/1784.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",z,[t(o,{to:"/tag/string.html"},{default:s(()=>[j]),_:1})]),B,e("td",M,[e("a",R,[n("🀄️"),t(a)]),n(),e("a",F,[n("🔗"),t(a)])])]),e("tr",null,[G,S,A,e("td",D,[t(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[H]),_:1}),n(),t(o,{to:"/tag/segment-tree.html"},{default:s(()=>[J]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),n(),P]),Q,e("td",U,[e("a",W,[n("🀄️"),t(a)]),n(),e("a",X,[n("🔗"),t(a)])])])])])])}const te=r(g,[["render",Y],["__file","1869.html.vue"]]);export{te as default};
