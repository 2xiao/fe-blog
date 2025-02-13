import{_ as l,r,o as d,c as i,a as t,b as o,d as e,w as n,f as p,e as u}from"./app-MXSjQbID.js";const g={},h=t("h1",{id:"_1662-检查两个字符串数组是否相等",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1662-检查两个字符串数组是否相等","aria-hidden":"true"},"#"),o(" 1662. 检查两个字符串数组是否相等")],-1),q=t("code",null,"数组",-1),k=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two string arrays <code>word1</code> and <code>word2</code>, return <code>true</code> <em>if the two arrays <strong>represent</strong> the same string, and</em> <code>false</code> <em>otherwise.</em></p><p>A string is <strong>represented</strong> by an array if the array elements concatenated <strong>in order</strong> forms the string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word1 = [&quot;ab&quot;, &quot;c&quot;], word2 = [&quot;a&quot;, &quot;bc&quot;]</p><p>Output: true</p><p>Explanation:</p><p>word1 represents string &quot;ab&quot; + &quot;c&quot; -&gt; &quot;abc&quot;</p><p>word2 represents string &quot;a&quot; + &quot;bc&quot; -&gt; &quot;abc&quot;</p><p>The strings are the same, so return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word1 = [&quot;a&quot;, &quot;cb&quot;], word2 = [&quot;ab&quot;, &quot;c&quot;]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word1 = [&quot;abc&quot;, &quot;d&quot;, &quot;defg&quot;], word2 = [&quot;abcddefg&quot;]</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 10^3</code></li><li><code>1 &lt;= word1[i].length, word2[i].length &lt;= 10^3</code></li><li><code>1 &lt;= sum(word1[i].length), sum(word2[i].length) &lt;= 10^3</code></li><li><code>word1[i]</code> and <code>word2[i]</code> consist of lowercase letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串数组 <code>word1</code> 和 <code>word2</code> 。如果两个数组表示的字符串相同，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>数组表示的字符串</strong> 是由数组中的所有元素 <strong>按顺序</strong> 连接形成的字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word1 = [&quot;ab&quot;, &quot;c&quot;], word2 = [&quot;a&quot;, &quot;bc&quot;]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>word1 表示的字符串为 &quot;ab&quot; + &quot;c&quot; -&gt; &quot;abc&quot;</p><p>word2 表示的字符串为 &quot;a&quot; + &quot;bc&quot; -&gt; &quot;abc&quot;</p><p>两个字符串相同，返回 true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word1 = [&quot;a&quot;, &quot;cb&quot;], word2 = [&quot;ab&quot;, &quot;c&quot;]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word1 = [&quot;abc&quot;, &quot;d&quot;, &quot;defg&quot;], word2 = [&quot;abcddefg&quot;]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 10^3</code></li><li><code>1 &lt;= word1[i].length, word2[i].length &lt;= 10^3</code></li><li><code>1 &lt;= sum(word1[i].length), sum(word2[i].length) &lt;= 10^3</code></li><li><code>word1[i]</code> 和 <code>word2[i]</code> 由小写字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求判断两个字符串数组是否在连接后形成相同的字符串，通过直接将两个数组分别连接成字符串，然后比较是否相等即可。</p><ol><li><strong>连接字符串</strong>： <ul><li>使用 <code>Array.prototype.join(&#39;&#39;)</code> 方法将数组中的所有字符串拼接为一个完整的字符串。</li></ul></li><li><strong>比较字符串</strong>： <ul><li>使用 <code>==</code> 或 <code>===</code> 直接比较两个拼接后的字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，其中 <code>m</code> 和 <code>n</code>分别为 <code>word1</code> 和 <code>word2</code> 的总字符数。 <ul><li><code>join(&#39;&#39;)</code> 操作需要遍历整个数组，时间复杂度为 <code>O(m + n)</code>。</li><li>字符串比较的时间复杂度为 <code>O(min(m, n))</code>。</li><li>整体复杂度为 <code>O(m + n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m + n)</code>，需要额外的空间存储连接后的两个字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">word1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">word2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">arrayStringsAreEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> word1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> word2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"2060",-1),y=t("td",{style:{"text-align":"left"}},"同源字符串检测",-1),E=t("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},j=t("code",null,"字符串",-1),C=t("code",null,"动态规划",-1),I=t("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/check-if-an-original-string-exists-given-two-encoded-strings",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings",target:"_blank",rel:"noopener noreferrer"};function A(B,R){const c=r("font"),s=r("RouterLink"),a=r("ExternalLinkIcon");return d(),i("div",null,[h,t("p",null,[o("🟢 "),e(c,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1}),o("  🔖  "),e(s,{to:"/tag/array.html"},{default:n(()=>[q]),_:1}),o(),e(s,{to:"/tag/string.html"},{default:n(()=>[k]),_:1}),o("  🔗 "),t("a",m,[_,e(a)]),o(),t("a",b,[w,e(a)])]),f,p(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[v,y,E,t("td",O,[e(s,{to:"/tag/string.html"},{default:n(()=>[j]),_:1}),o(),e(s,{to:"/tag/dynamic-programming.html"},{default:n(()=>[C]),_:1})]),I,t("td",L,[t("a",N,[o("🀄️"),e(a)]),o(),t("a",V,[o("🔗"),e(a)])])])])])])}const T=l(g,[["render",A],["__file","1662.html.vue"]]);export{T as default};
