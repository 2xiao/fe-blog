import{_ as p,r as c,o as d,c as r,a as n,b as e,d as s,w as o,f as i,e as u}from"./app-totCBmv-.js";const k={},g=n("h1",{id:"_1961-检查字符串是否为数组前缀",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1961-检查字符串是否为数组前缀","aria-hidden":"true"},"#"),e(" 1961. 检查字符串是否为数组前缀")],-1),h=n("code",null,"数组",-1),f=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/check-if-string-is-a-prefix-of-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/check-if-string-is-a-prefix-of-array",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and an array of strings <code>words</code>, determine whether <code>s</code> is a <strong>prefix string</strong> of <code>words</code>.</p><p>A string <code>s</code> is a <strong>prefix string</strong> of <code>words</code> if <code>s</code> can be made by concatenating the first <code>k</code> strings in <code>words</code> for some <strong>positive</strong> <code>k</code> no larger than <code>words.length</code>.</p><p>Return <code>true</code> <em>if</em><code>s</code> _is a <strong>prefix string</strong> of _<code>words</code> <em>, or</em> <code>false</code><em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;iloveleetcode&quot;, words = [&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;,&quot;apples&quot;]</p><p>Output: true</p><p>Explanation:</p><p>s can be made by concatenating &quot;i&quot;, &quot;love&quot;, and &quot;leetcode&quot; together.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;iloveleetcode&quot;, words = [&quot;apples&quot;,&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;]</p><p>Output: false</p><p>Explanation:</p><p>It is impossible to make s using a prefix of arr.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 20</code></li><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>words[i]</code> and <code>s</code> consist of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个字符串数组 <code>words</code> ，请你判断 <code>s</code> 是否为 <code>words</code> 的 <strong>前缀字符串</strong> 。</p><p>字符串 <code>s</code> 要成为 <code>words</code> 的 <strong>前缀字符串</strong> ，需要满足：<code>s</code> 可以由 <code>words</code> 中的前 <code>k</code>（<code>k</code> 为 <strong>正数</strong>）个字符串按顺序相连得到，且 <code>k</code> 不超过 <code>words.length</code> 。</p><p>如果 <code>s</code> 是 <code>words</code> 的 <strong>前缀字符串</strong> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;iloveleetcode&quot;, words = [&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;,&quot;apples&quot;]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>s 可以由 &quot;i&quot;、&quot;love&quot; 和 &quot;leetcode&quot; 相连得到。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;iloveleetcode&quot;, words = [&quot;apples&quot;,&quot;i&quot;,&quot;love&quot;,&quot;leetcode&quot;]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>数组的前缀相连无法得到 s 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 20</code></li><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>words[i]</code> 和 <code>s</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>遍历字符串数组</strong>： <ul><li>使用变量 <code>length</code> 来记录当前已连接字符串的长度。</li><li>遍历数组 <code>words</code>，逐步累加当前字符串的长度。</li></ul></li><li><strong>检查是否满足条件</strong>： <ul><li>如果累加长度 <code>length</code> 等于字符串 <code>s</code> 的长度 <code>n</code>，我们需要验证 <code>s</code> 是否等于数组 <code>words</code> 的前 <code>i+1</code> 个字符串的连接结果。 <ul><li>如果相等，返回 <code>true</code>，否则，返回 <code>false</code>。</li></ul></li><li>如果 <code>length &gt; n</code>，直接返回 <code>false</code>，因为连接的部分已经超过 <code>s</code>。</li></ul></li><li><strong>返回结果</strong>： <ul><li>如果遍历完整个数组都未找到符合条件的前缀，则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k + n)</code><ul><li>遍历 <code>words</code> 数组需要 <code>O(k)</code> 次，其中 <code>k</code> 是数组的长度。</li><li>在每次检查时使用 <code>join</code> 拼接，最坏情况下字符串长度为 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(k + n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，额外使用的空间主要来自 <code>slice</code> 和 <code>join</code>，最坏情况下需要 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPrefixString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		length <span class="token operator">+=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> s <span class="token operator">==</span> words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2255",-1),E=n("td",{style:{"text-align":"left"}},"统计是给定字符串前缀的字符串数目",-1),O={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=n("code",null,"数组",-1),I=n("code",null,"字符串",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"};function R(S,A){const l=c("font"),t=c("RouterLink"),a=c("ExternalLinkIcon");return d(),r("div",null,[g,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/array.html"},{default:o(()=>[h]),_:1}),e(),s(t,{to:"/tag/two-pointers.html"},{default:o(()=>[f]),_:1}),e(),s(t,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),e("  🔗 "),n("a",_,[v,s(a)]),e(),n("a",b,[q,s(a)])]),w,i(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,E,n("td",O,[s(t,{to:"/problem/2255.html"},{default:o(()=>[e("[✓]")]),_:1})]),n("td",j,[s(t,{to:"/tag/array.html"},{default:o(()=>[C]),_:1}),e(),s(t,{to:"/tag/string.html"},{default:o(()=>[I]),_:1})]),L,n("td",N,[n("a",V,[e("🀄️"),s(a)]),e(),n("a",B,[e("🔗"),s(a)])])])])])])}const P=p(k,[["render",R],["__file","1961.html.vue"]]);export{P as default};
