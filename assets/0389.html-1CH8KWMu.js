import{_ as r,r as c,o as d,c as p,a as t,b as n,d as e,w as s,f as i,e as u}from"./app-Kkp_66uf.js";const h={},_=t("h1",{id:"_389-找不同",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_389-找不同","aria-hidden":"true"},"#"),n(" 389. 找不同")],-1),g=t("code",null,"位运算",-1),k=t("code",null,"哈希表",-1),m=t("code",null,"字符串",-1),f=t("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/find-the-difference",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-the-difference",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two strings <code>s</code> and <code>t</code>.</p><p>String <code>t</code> is generated by random shuffling string <code>s</code> and then add one more letter at a random position.</p><p>Return the letter that was added to <code>t</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcd&quot;, t = &quot;abcde&quot;</p><p>Output: &quot;e&quot;</p><p>Explanation: &#39;e&#39; is the letter that was added.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;&quot;, t = &quot;y&quot;</p><p>Output: &quot;y&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 1000</code></li><li><code>t.length == s.length + 1</code></li><li><code>s</code> and <code>t</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串 <code>s</code> 和 <code>t</code> ，它们只包含小写字母。</p><p>字符串 <code>t</code> 由字符串 <code>s</code> 随机重排，然后在随机位置添加一个字母。</p><p>请找出在 <code>t</code> 中被添加的字母。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcd&quot;, t = &quot;abcde&quot;</p><p><strong>输出：</strong> &quot;e&quot;</p><p><strong>解释：</strong> &#39;e&#39; 是那个被添加的字母。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;&quot;, t = &quot;y&quot;</p><p><strong>输出：</strong> &quot;y&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 1000</code></li><li><code>t.length == s.length + 1</code></li><li><code>s</code> 和 <code>t</code> 只包含小写字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过异或运算来高效解决。异或运算具有以下性质：</p><ul><li><strong>相同的数字异或为零</strong>：<code>a ^ a = 0</code>。</li><li><strong>任何数与零异或为其本身</strong>：<code>a ^ 0 = a</code>。</li><li><strong>异或运算满足交换律和结合律</strong>，即 <code>a ^ b ^ c = c ^ a ^ b</code>。</li></ul><p>由于异或运算的特性，相同的字符异或会变为零，所以通过对合并后的字符串进行异或操作，所有相同的字符都将抵消，剩下的就是唯一一个未被抵消的字符，也就是被添加的字符。</p><ol><li>将字符串 <code>s</code> 和 <code>t</code> 合并成一个字符串，然后对该字符串中的每个字符的 ASCII 值进行异或。</li><li>由于字符在 <code>s</code> 和 <code>t</code> 中都出现过一次（除非是被添加的字符），这些字符的 ASCII 值通过异或会相互抵消（变为零）。</li><li>最后剩下的就是被添加的字符，因为它在 <code>t</code> 中出现一次，而在 <code>s</code> 中没有对应的字符。</li><li>使用 <code>String.fromCharCode()</code> 将该 ASCII 值转换成字符，并返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s + t</code> 的长度。我们需要遍历 <code>s + t</code> 字符串中的每个字符，并进行异或操作，时间复杂度是线性的。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只用了常数空间来存储最终的异或结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findTheDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 合并字符串 s 和 t，然后对每个字符的 ASCII 值进行异或</span>
	<span class="token keyword">const</span> charCode <span class="token operator">=</span> <span class="token punctuation">(</span>s <span class="token operator">+</span> t<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">^</span> cur<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回异或结果对应的字符</span>
	<span class="token keyword">return</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>charCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),C=t("td",{style:{"text-align":"center"}},"136",-1),I=t("td",{style:{"text-align":"left"}},"只出现一次的数字",-1),E={style:{"text-align":"center"}},S={style:{"text-align":"left"}},A=t("code",null,"位运算",-1),L=t("code",null,"数组",-1),N=t("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"3146",-1),R=t("td",{style:{"text-align":"left"}},"两个字符串的排列差",-1),T=t("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},Y=t("code",null,"哈希表",-1),z=t("code",null,"字符串",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/permutation-difference-between-two-strings",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/permutation-difference-between-two-strings",target:"_blank",rel:"noopener noreferrer"};function K(M,P){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return d(),p("div",null,[_,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",b,[v,e(o)]),n(),t("a",x,[y,e(o)])]),q,i(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[C,I,t("td",E,[e(a,{to:"/problem/0136.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",S,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[A]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1})]),N,t("td",V,[t("a",O,[n("🀄️"),e(o)]),n(),t("a",j,[n("🔗"),e(o)])])]),t("tr",null,[B,R,T,t("td",D,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[z]),_:1})]),F,t("td",G,[t("a",H,[n("🀄️"),e(o)]),n(),t("a",J,[n("🔗"),e(o)])])])])])])}const U=r(h,[["render",K],["__file","0389.html.vue"]]);export{U as default};
