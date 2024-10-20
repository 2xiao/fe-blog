import{_ as p,r as l,o as i,c as r,a as n,d as t,b as s,w as e,f as d,e as u}from"./app-Fucr7yuT.js";const h={},k={id:"_459-重复的子字符串",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_459-重复的子字符串","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"字符串",-1),g=n("code",null,"字符串匹配",-1),f={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abab&quot;</p><p>Output: true</p><p>Explanation: It is the substring &quot;ab&quot; twice.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aba&quot;</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;abcabcabcabc&quot;</p><p>Output: true</p><p>Explanation: It is the substring &quot;abc&quot; four times or the substring &quot;abcabc&quot; twice.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空的字符串 <code>s</code> ，检查是否可以通过由它的一个子串重复多次构成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>循环遍历可能的子字符串长度：</p><ul><li>通过一个循环遍历可能的子字符串长度，从长度为 1 到 <code>n/2</code> 遍历，<code>n</code> 是字符串的长度。我们只需要考虑到 <code>n/2</code>，因为一个子字符串重复构成的长度不能超过一半。</li></ul></li><li><p>判断整除：</p><ul><li>对于每一个可能的长度 <code>i</code>，检查 <code>n % i == 0</code>。如果字符串长度能被 <code>i</code> 整除，说明可以尝试用长度为 <code>i</code> 的子字符串构建原字符串。</li></ul></li><li><p>判断整除：</p><ul><li>通过 <code>s.slice(0, i)</code> 获取长度为 <code>i</code> 的子字符串 <code>str</code>。</li><li>然后用 <code>str.repeat(n / i)</code> 来构建一个新的字符串，并与原字符串 <code>s</code> 进行比较。如果相等，说明可以由该子字符串重复构成，返回 <code>true</code>。</li></ul></li><li><p>返回结果：</p><ul><li>如果遍历完所有可能的长度仍然没有找到符合条件的子字符串，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，外层循环的迭代次数最多为 <code>n/2</code>，而 <code>str.repeat(n / i)</code> 操作的时间复杂度为 <code>O(n)</code>。因此，总的时间复杂度为 <code>O(n^2)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用的额外空间主要是存储 <code>str</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">repeatedSubstringPattern</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n <span class="token operator">/</span> i<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"28",-1),w={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"双指针",-1),L=n("code",null,"字符串",-1),N=n("code",null,"字符串匹配",-1),V={style:{"text-align":"left"}},j=n("td",{style:{"text-align":"center"}},"686",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"字符串",-1),P=n("code",null,"字符串匹配",-1),T={style:{"text-align":"left"}};function z(A,D){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink");return i(),r("div",null,[n("h1",k,[_,t(),n("a",b,[t("459. 重复的子字符串"),s(o)])]),n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/string-matching.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",f,[v,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[q,n("td",w,[n("a",E,[t("找出字符串中第一个匹配项的下标"),s(o)])]),n("td",I,[s(a,{to:"/problem/0028.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",O,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/string-matching.html"},{default:e(()=>[N]),_:1})]),n("td",V,[s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[j,n("td",B,[n("a",R,[t("重复叠加字符串匹配"),s(o)])]),S,n("td",G,[s(a,{to:"/tag/string.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/string-matching.html"},{default:e(()=>[P]),_:1})]),n("td",T,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const H=p(h,[["render",z],["__file","0459.html.vue"]]);export{H as default};
