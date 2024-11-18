import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-5LzGvT4H.js";const k={},m=n("h1",{id:"_38-外观数列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_38-外观数列","aria-hidden":"true"},"#"),t(" 38. 外观数列")],-1),h=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/count-and-say",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-and-say",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>count-and-say</strong> sequence is a sequence of digit strings defined by the recursive formula:</p><ul><li><code>countAndSay(1) = &quot;1&quot;</code></li><li><code>countAndSay(n)</code> is the way you would &quot;say&quot; the digit string from <code>countAndSay(n-1)</code>, which is then converted into a different digit string.</li></ul><p>To determine how you &quot;say&quot; a digit string, split it into the <strong>minimal</strong> number of substrings such that each substring contains exactly <strong>one</strong> unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.</p><p>For example, the saying and conversion for digit string <code>&quot;3322251&quot;</code>:</p><figure><img src="https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Given a positive integer <code>n</code>, return <em>the</em><code>nth</code> <em>term of the <strong>count-and-say</strong> sequence</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 1</p><p>Output: &quot;1&quot;</p><p>Explanation: This is the base case.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 4</p><p>Output: &quot;1211&quot;</p><p>Explanation:</p><p>countAndSay(1) = &quot;1&quot;</p><p>countAndSay(2) = say &quot;1&quot; = one 1 = &quot;11&quot;</p><p>countAndSay(3) = say &quot;11&quot; = two 1&#39;s = &quot;21&quot;</p><p>countAndSay(4) = say &quot;21&quot; = one 2 + one 1 = &quot;12&quot; + &quot;11&quot; = &quot;1211&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 30</code></li></ul><p><strong>Follow up</strong>: Could you solve it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>「外观数列」是一个数位字符串序列，由递归公式定义：</p><ul><li><code>countAndSay(1) = &quot;1&quot;</code></li><li><code>countAndSay(n)</code> 是 <code>countAndSay(n-1)</code> 的行程长度编码。</li></ul><p>行程长度编码（RLE）是一种字符串压缩方法，其工作原理是通过将连续相同字符（重复两次或更多次）替换为字符重复次数（运行长度）和字符的串联。例如，要压缩字符串 <code>&quot;3322251&quot;</code> ，我们将 <code>&quot;33&quot;</code> 用 <code>&quot;23&quot;</code> 替换，将 <code>&quot;222&quot;</code> 用 <code>&quot;32&quot;</code> 替换，将 <code>&quot;5&quot;</code> 用 <code>&quot;15&quot;</code> 替换并将 <code>&quot;1&quot;</code> 用 <code>&quot;11&quot;</code> 替换。因此压缩后字符串变为 <code>&quot;23321511&quot;</code>。</p><p>给定一个整数 <code>n</code> ，返回 <strong>外观数列</strong> 的第 <code>n</code> 个元素。</p><p><strong>进阶</strong>：你能迭代解决该问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个题的核心思路是模拟生成报数序列。我们需要从第 1 项开始，逐步生成后面的每一项，直到生成第 <code>n</code> 项为止。</p><ol><li>初始化：第 1 项是固定的，直接设置为 <code>&quot;1&quot;</code>。</li><li>迭代生成：从第 2 项开始，每次根据前一项生成新的一项。我们通过遍历前一项的字符，统计连续相同字符的个数，然后将其转化为描述性的字符串。</li><li>遍历字符串：对于每一项的生成，我们遍历当前项的字符串，对于每一组连续相同的数字，记录下它们的数量和数字本身，形成新的项。</li><li>循环直到 <code>n</code>：我们从第 1 项逐步生成到第 <code>n</code> 项。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>n</code> 是给定的项数，<code>m</code> 是报数序列中最长的字符串的长度。对于每一项，我们需要遍历前一项的字符串生成新的一项，字符串的长度随着 <code>n</code> 逐渐增长。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，<code>m</code> 是最长的字符串长度，因为我们只需要存储当前项和下一项的字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countAndSay</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始项是 &quot;1&quot;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>

	<span class="token comment">// 迭代生成从第2项到第n项</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 存储当前生成的项</span>
			count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 计数相同字符的数量</span>

		<span class="token comment">// 遍历上一个结果的字符</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> res<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果当前字符与前一个相同，计数增加</span>
				count<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// 否则，将前面的数字和计数添加到结果字符串中</span>
				temp <span class="token operator">+=</span> count <span class="token operator">+</span> res<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置计数</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 处理最后一个数字</span>
		temp <span class="token operator">+=</span> count <span class="token operator">+</span> res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新当前项</span>
		res <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回第n项</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"271",-1),x=n("td",{style:{"text-align":"left"}},"字符串的编码与解码 🔒",-1),w=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},A=n("code",null,"设计",-1),j=n("code",null,"数组",-1),E=n("code",null,"字符串",-1),C=n("td",{style:{"text-align":"left"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"443",-1),I=n("td",{style:{"text-align":"left"}},"压缩字符串",-1),O={style:{"text-align":"center"}},B={style:{"text-align":"left"}},F=n("code",null,"双指针",-1),R=n("code",null,"字符串",-1),z=n("td",{style:{"text-align":"left"}},"🟠",-1),G={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),t("  🔗 "),n("a",g,[_,s(o)]),t(),n("a",v,[b,s(o)])]),f,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[q,x,w,n("td",S,[s(a,{to:"/tag/design.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[j]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[E]),_:1})]),C,n("td",L,[n("a",N,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[V,I,n("td",O,[s(a,{to:"/problem/0443.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",B,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[R]),_:1})]),z,n("td",G,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",D,[t("🔗"),s(o)])])])])])])}const Q=p(k,[["render",H],["__file","0038.html.vue"]]);export{Q as default};
