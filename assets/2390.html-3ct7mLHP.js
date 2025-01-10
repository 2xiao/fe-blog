import{_ as r,r as c,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-XFeYdzZv.js";const h={},g=e("h1",{id:"_2390-从字符串中移除星号",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2390-从字符串中移除星号","aria-hidden":"true"},"#"),t(" 2390. 从字符串中移除星号")],-1),_=e("code",null,"栈",-1),k=e("code",null,"字符串",-1),m=e("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code>, which contains stars <code>*</code>.</p><p>In one operation, you can:</p><ul><li>Choose a star in <code>s</code>.</li><li>Remove the closest <strong>non-star</strong> character to its <strong>left</strong> , as well as remove the star itself.</li></ul><p>Return <em>the string after<strong>all</strong> stars have been removed</em>.</p><p><strong>Note:</strong></p><ul><li>The input will be generated such that the operation is always possible.</li><li>It can be shown that the resulting string will always be unique.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: <code>s = &quot;leet**cod*e&quot;</code></p><p>Output: <code>&quot;lecoe&quot;</code></p><p>Explanation: Performing the removals from left to right:</p><ul><li>The closest character to the 1st star is &#39;t&#39; in <code>&quot;leet**cod*e&quot;</code>. s becomes <code>&quot;lee*cod*e&quot;</code>.</li><li>The closest character to the 2nd star is &#39;e&#39; in <code>&quot;lee*cod*e&quot;</code>. s becomes <code>&quot;lecod*e&quot;</code>.</li><li>The closest character to the 3rd star is &#39;d&#39; in <code>&quot;lecod*e&quot;</code>. s becomes <code>&quot;lecoe&quot;</code>.</li></ul><p>There are no more stars, so we return <code>&quot;lecoe&quot;</code>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = <code>&quot;erase*****&quot;</code></p><p>Output: <code>&quot;&quot;</code></p><p>Explanation: The entire string is removed, so we return an empty string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters and stars <code>*</code>.</li><li>The operation above can be performed on <code>s</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个包含若干星号 <code>*</code> 的字符串 <code>s</code> 。</p><p>在一步操作中，你可以：</p><ul><li>选中 <code>s</code> 中的一个星号。</li><li>移除星号 <strong>左侧</strong> 最近的那个 <strong>非星号</strong> 字符，并移除该星号自身。</li></ul><p>返回移除 <strong>所有</strong> 星号之后的字符串**。**</p><p><strong>注意：</strong></p><ul><li>生成的输入保证总是可以执行题面中描述的操作。</li><li>可以证明结果字符串是唯一的。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> <code>s = &quot;leet**cod*e&quot;</code></p><p><strong>输出：</strong> <code>&quot;lecoe&quot;</code></p><p><strong>解释：</strong> 从左到右执行移除操作：</p><ul><li>距离第 1 个星号最近的字符是 <code>&quot;leet**cod*e&quot;</code> 中的 &#39;t&#39; ，s 变为 <code>&quot;lee*cod*e&quot;</code> 。</li><li>距离第 2 个星号最近的字符是 <code>&quot;lee*cod*e&quot;</code> 中的 &#39;e&#39; ，s 变为 <code>&quot;lecod*e&quot;</code> 。</li><li>距离第 3 个星号最近的字符是 <code>&quot;lecod*e&quot;</code> 中的 &#39;d&#39; ，s 变为 <code>&quot;lecoe&quot;</code> 。</li></ul><p>不存在其他星号，返回 <code>&quot;lecoe&quot; </code>。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> <code>s = &quot;erase*****&quot;</code></p><p><strong>输出：</strong> <code>&quot;&quot;</code></p><p><strong>解释：</strong> 整个字符串都会被移除，所以返回空字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 由小写英文字母和星号 <code>*</code> 组成</li><li><code>s</code> 可以执行上述操作</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用一个栈 <code>stack</code> 来存储字符。</li><li>遍历字符串 <code>s</code>，遇到普通字符时将其推入栈，遇到 <code>*</code> 时从栈中弹出一个字符。</li><li>最后将栈中的字符拼接成最终结果。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，因为只遍历了字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为在最坏情况下，栈中可能会存储所有字符（当没有 <code>*</code> 时）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeStars</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"844",-1),E=e("td",{style:{"text-align":"left"}},"比较含退格的字符串",-1),T={style:{"text-align":"center"}},j={style:{"text-align":"left"}},C=e("code",null,"栈",-1),I=e("code",null,"双指针",-1),N=e("code",null,"字符串",-1),L=e("code",null,"1+",-1),V=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},S=e("td",{style:{"text-align":"center"}},"1047",-1),M=e("td",{style:{"text-align":"left"}},"删除字符串中的所有相邻重复项",-1),P={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},z=e("code",null,"栈",-1),A=e("code",null,"字符串",-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string",target:"_blank",rel:"noopener noreferrer"};function J(K,Q){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),d("div",null,[g,e("p",null,[t("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(o,{to:"/tag/stack.html"},{default:s(()=>[_]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),t(),n(o,{to:"/tag/simulation.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",f,[b,n(a)]),t(),e("a",v,[q,n(a)])]),x,p(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,E,e("td",T,[n(o,{to:"/problem/0844.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",j,[n(o,{to:"/tag/stack.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[I]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[N]),_:1}),t(),L]),V,e("td",O,[e("a",R,[t("🀄️"),n(a)]),t(),e("a",B,[t("🔗"),n(a)])])]),e("tr",null,[S,M,e("td",P,[n(o,{to:"/problem/1047.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",Y,[n(o,{to:"/tag/stack.html"},{default:s(()=>[z]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[A]),_:1})]),D,e("td",F,[e("a",G,[t("🀄️"),n(a)]),t(),e("a",H,[t("🔗"),n(a)])])])])])])}const W=r(h,[["render",J],["__file","2390.html.vue"]]);export{W as default};
