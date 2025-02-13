import{_ as l,r,o as p,c as i,a as t,b as e,d as n,w as s,f as u,e as d}from"./app-MXSjQbID.js";const h={},g=t("h1",{id:"_1957-删除字符使字符串变好",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1957-删除字符使字符串变好","aria-hidden":"true"},"#"),e(" 1957. 删除字符使字符串变好")],-1),m=t("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/delete-characters-to-make-fancy-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/delete-characters-to-make-fancy-string",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>fancy string</strong> is a string where no <strong>three</strong> <strong>consecutive</strong> characters are equal.</p><p>Given a string <code>s</code>, delete the <strong>minimum</strong> possible number of characters from <code>s</code> to make it <strong>fancy</strong>.</p><p>Return <em>the final string after the deletion</em>. It can be shown that the answer will always be <strong>unique</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;le <em>e</em> etcode&quot;</p><p>Output: &quot;leetcode&quot;</p><p>Explanation:</p><p>Remove an &#39;e&#39; from the first group of &#39;e&#39;s to create &quot;leetcode&quot;.</p><p>No three consecutive characters are equal, so return &quot;leetcode&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;<em>a</em> aab <em>aa</em> aa&quot;</p><p>Output: &quot;aabaa&quot;</p><p>Explanation:</p><p>Remove an &#39;a&#39; from the first group of &#39;a&#39;s to create &quot;aabaaaa&quot;.</p><p>Remove two &#39;a&#39;s from the second group of &#39;a&#39;s to create &quot;aabaa&quot;.</p><p>No three consecutive characters are equal, so return &quot;aabaa&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;aab&quot;</p><p>Output: &quot;aab&quot;</p><p>Explanation: No three consecutive characters are equal, so return &quot;aab&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个字符串如果没有 <strong>三个连续</strong> 相同字符，那么它就是一个 <strong>好字符串</strong> 。</p><p>给你一个字符串 <code>s</code> ，请你从 <code>s</code> 删除 <strong>最少</strong> 的字符，使它变成一个 <strong>好字符串</strong> 。</p><p>请你返回删除后的字符串。题目数据保证答案总是 <strong>唯一的</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;le<strong>e</strong>etcode&quot;</p><p><strong>输出：</strong> &quot;leetcode&quot;</p><p><strong>解释：</strong></p><p>从第一组 &#39;e&#39; 里面删除一个 &#39;e&#39; ，得到 &quot;leetcode&quot; 。</p><p>没有连续三个相同字符，所以返回 &quot;leetcode&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;<strong>a</strong>aab<strong>aa</strong>aa&quot;</p><p><strong>输出：</strong> &quot;aabaa&quot;</p><p><strong>解释：</strong></p><p>从第一组 &#39;a&#39; 里面删除一个 &#39;a&#39; ，得到 &quot;aabaaaa&quot; 。</p><p>从第二组 &#39;a&#39; 里面删除两个 &#39;a&#39; ，得到 &quot;aabaa&quot; 。</p><p>没有连续三个相同字符，所以返回 &quot;aabaa&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aab&quot;</p><p><strong>输出：</strong> &quot;aab&quot;</p><p><strong>解释：</strong> 没有连续三个相同字符，所以返回 &quot;aab&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>使用 <code>res</code> 来存储结果字符串。</li><li>使用 <code>sameCount</code> 记录当前字符出现的次数。</li><li>使用 <code>curChar</code> 来跟踪当前正在处理的字符。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>对于字符串中的每个字符，检查它是否与 <code>curChar</code> 相同： <ul><li>如果相同，则增加 <code>sameCount</code>。</li><li>如果不同，则将 <code>curChar</code> 更新为当前字符，并将 <code>sameCount</code> 重置为 1。</li></ul></li><li>如果 <code>sameCount</code> 小于 3，表示当前字符可以添加到结果中，则将其添加到 <code>res</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后返回构建的字符串 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，只遍历一次字符串，每个字符的处理是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果字符串，最坏情况下（输入字符串中没有重复字符），<code>res</code> 字符串的长度与输入字符串相同。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">makeFancyString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		sameCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		curChar<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>curChar <span class="token operator">==</span> char<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sameCount<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			curChar <span class="token operator">=</span> char<span class="token punctuation">;</span>
			sameCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sameCount <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> char<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"3316",-1),y=t("td",{style:{"text-align":"left"}},"从原字符串里进行删除操作的最多次数",-1),w=t("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},E=t("code",null,"数组",-1),N=t("code",null,"哈希表",-1),I=t("code",null,"双指针",-1),R=t("code",null,"2+",-1),L=t("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/find-maximum-removals-from-source-string",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/find-maximum-removals-from-source-string",target:"_blank",rel:"noopener noreferrer"};function B(S,A){const c=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon");return p(),i("div",null,[g,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",k,[b,n(o)]),e(),t("a",_,[q,n(o)])]),f,u(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[x,y,w,t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[I]),_:1}),e(),R]),L,t("td",O,[t("a",V,[e("🀄️"),n(o)]),e(),t("a",j,[e("🔗"),n(o)])])])])])])}const G=l(h,[["render",B],["__file","1957.html.vue"]]);export{G as default};
