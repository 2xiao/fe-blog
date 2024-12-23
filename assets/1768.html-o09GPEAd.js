import{_ as l,r,o as c,c as d,a as t,b as n,d as e,w as o,f as i,e as u}from"./app-Kkp_66uf.js";const g={},h=t("h1",{id:"_1768-交替合并字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1768-交替合并字符串","aria-hidden":"true"},"#"),n(" 1768. 交替合并字符串")],-1),k=t("code",null,"双指针",-1),_=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/merge-strings-alternately",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/merge-strings-alternately",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.</p><p>Return <em>the merged string.</em></p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> word1 = &quot;abc&quot;, word2 = &quot;pqr&quot;</p><p>Output: &quot;apbqcr&quot;</p><p>Explanation: The merged string will be merged as so:</p><p>word1: a b c</p><p>word2: p q r</p><p>merged: a p b q c r</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> word1 = &quot;ab&quot;, word2 = &quot;pqrs&quot;</p><p>Output: &quot;apbqrs&quot;</p><p>Explanation: Notice that as word2 is longer, &quot;rs&quot; is appended to the end.</p><p>word1: a b</p><p>word2: p q r s</p><p>merged: a p b q r s</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> word1 = &quot;abcd&quot;, word2 = &quot;pq&quot;</p><p>Output: &quot;apbqcd&quot;</p><p>Explanation: Notice that as word1 is longer, &quot;cd&quot; is appended to the end.</p><p>word1: a b c d</p><p>word2: p q</p><p>merged: a p b q c d</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li><li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>word1</code> 和 <code>word2</code> 。请你从 <code>word1</code> 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。</p><p>返回 <strong>合并后的字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;abc&quot;, word2 = &quot;pqr&quot;</p><p><strong>输出：</strong> &quot;apbqcr&quot;</p><p><strong>解释：</strong> 字符串合并情况如下所示：</p><p>word1： a b c</p><p>word2： p q r</p><p>合并后： a p b q c r</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;ab&quot;, word2 = &quot;pqrs&quot;</p><p><strong>输出：</strong> &quot;apbqrs&quot;</p><p><strong>解释：</strong> 注意，word2 比 word1 长，&quot;rs&quot; 需要追加到合并后字符串的末尾。</p><p>word1： a b</p><p>word2： p q r s</p><p>合并后： a p b q r s</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;abcd&quot;, word2 = &quot;pq&quot;</p><p><strong>输出：</strong> &quot;apbqcd&quot;</p><p><strong>解释：</strong> 注意，word1 比 word2 长，&quot;cd&quot; 需要追加到合并后字符串的末尾。</p><p>word1： a b c d</p><p>word2： p q</p><p>合并后： a p b q c d</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li><li><code>word1</code> 和 <code>word2</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化指针</strong>：</p><ul><li>使用两个指针分别遍历 <code>word1</code> 和 <code>word2</code>，从头到尾交替添加字符。</li></ul></li><li><p><strong>交替合并</strong>：</p><ul><li>在一个循环中，依次从 <code>word1</code> 和 <code>word2</code> 中取出字符，直到其中一个字符串的字符用完。</li></ul></li><li><p><strong>处理剩余字符</strong>：</p><ul><li>如果 <code>word1</code> 或 <code>word2</code> 中还有剩余字符，将其直接追加到结果字符串的末尾。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是 <code>word1</code> 和 <code>word2</code> 的长度，需要遍历每个字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n + m)</code>，用于存储合并后的字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeAlternately</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> word1<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> word2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> word1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> word2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	res <span class="token operator">+=</span> m <span class="token operator">&gt;</span> n <span class="token operator">?</span> word1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token operator">:</span> word2<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"281",-1),y=t("td",{style:{"text-align":"left"}},"锯齿迭代器 🔒",-1),E=t("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},I=t("code",null,"设计",-1),C=t("code",null,"队列",-1),L=t("code",null,"数组",-1),O=t("code",null,"1+",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"2645",-1),T=t("td",{style:{"text-align":"left"}},"构造有效字符串的最少插入数",-1),A=t("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},S=t("code",null,"栈",-1),Y=t("code",null,"贪心",-1),D=t("code",null,"字符串",-1),F=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/minimum-additions-to-make-valid-string",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/minimum-additions-to-make-valid-string",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=r("font"),s=r("RouterLink"),a=r("ExternalLinkIcon");return c(),d("div",null,[h,t("p",null,[n("🟢 "),e(p,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[k]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[_]),_:1}),n("  🔗 "),t("a",m,[b,e(a)]),n(),t("a",q,[w,e(a)])]),f,i(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[x,y,E,t("td",N,[e(s,{to:"/tag/design.html"},{default:o(()=>[I]),_:1}),n(),e(s,{to:"/tag/queue.html"},{default:o(()=>[C]),_:1}),n(),e(s,{to:"/tag/array.html"},{default:o(()=>[L]),_:1}),n(),O]),V,t("td",z,[t("a",j,[n("🀄️"),e(a)]),n(),t("a",B,[n("🔗"),e(a)])])]),t("tr",null,[R,T,A,t("td",M,[e(s,{to:"/tag/stack.html"},{default:o(()=>[S]),_:1}),n(),e(s,{to:"/tag/greedy.html"},{default:o(()=>[Y]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[D]),_:1}),n(),F]),G,t("td",H,[t("a",J,[n("🀄️"),e(a)]),n(),t("a",K,[n("🔗"),e(a)])])])])])])}const X=l(g,[["render",P],["__file","1768.html.vue"]]);export{X as default};
