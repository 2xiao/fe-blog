import{_ as l,r as p,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-MXSjQbID.js";const k={},g=n("h1",{id:"_1592-重新排列单词间的空格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1592-重新排列单词间的空格","aria-hidden":"true"},"#"),s(" 1592. 重新排列单词间的空格")],-1),h=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/rearrange-spaces-between-words",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/rearrange-spaces-between-words",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>text</code> of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It&#39;s guaranteed that <code>text</code> <strong>contains at least one word</strong>.</p><p>Rearrange the spaces so that there is an <strong>equal</strong> number of spaces between every pair of adjacent words and that number is <strong>maximized</strong>. If you cannot redistribute all the spaces equally, place the <strong>extra spaces at the end</strong> , meaning the returned string should be the same length as <code>text</code>.</p><p>Return <em>the string after rearranging the spaces</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: text = &quot; this is a sentence &quot;</p><p>Output: &quot;this is a sentence&quot;</p><p>Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: text = &quot; practice makes perfect&quot;</p><p>Output: &quot;practice makes perfect &quot;</p><p>Explanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= text.length &lt;= 100</code></li><li><code>text</code> consists of lowercase English letters and <code>&#39; &#39;</code>.</li><li><code>text</code> contains at least one word.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>text</code> ，该字符串由若干被空格包围的单词组成。每个单词由一个或者多个小写英文字母组成，并且两个单词之间至少存在一个空格。题目测试用例保证 <code>text</code><strong>至少包含一个单词</strong> 。</p><p>请你重新排列空格，使每对相邻单词之间的空格数目都 <strong>相等</strong> ，并尽可能 <strong>最大化</strong> 该数目。如果不能重新平均分配所有空格，请 <strong>将多余的空格放置在字符串末尾</strong> ，这也意味着返回的字符串应当与原 <code>text</code> 字符串的长度相等。</p><p>返回 <strong>重新排列空格后的字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> text = &quot; this is a sentence &quot;</p><p><strong>输出：</strong> &quot;this is a sentence&quot;</p><p><strong>解释：</strong> 总共有 9 个空格和 4 个单词。可以将 9 个空格平均分配到相邻单词之间，相邻单词间空格数为：9 / (4-1) = 3 个。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> text = &quot; practice makes perfect&quot;</p><p><strong>输出：</strong> &quot;practice makes perfect &quot;</p><p><strong>解释：</strong> 总共有 7 个空格和 3 个单词。7 / (3-1) = 3 个空格加上 1 个多余的空格。多余的空格需要放在字符串的末尾。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;hello world&quot;</p><p><strong>输出：</strong> &quot;hello world&quot;</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> text = &quot; walks udp package into bar a&quot;</p><p><strong>输出：</strong> &quot;walks udp package into bar a &quot;</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;a&quot;</p><p><strong>输出：</strong> &quot;a&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text.length &lt;= 100</code></li><li><code>text</code> 由小写英文字母和 <code>&#39; &#39;</code> 组成</li><li><code>text</code> 中至少包含一个单词</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>**分割字符串：**使用 <code>split(&#39; &#39;)</code> 将字符串按空格分隔成数组</p></li><li><p>**统计空格总数：**通过分割后的数组长度减一，来统计字符串中 <code>&#39; &#39;</code> 的个数。</p></li><li><p>**提取有效单词：**使用 <code>filter</code> 去掉空元素，提取有效单词。</p></li><li><p>**处理特殊情况：**如果只有一个单词，直接在单词后面拼接所有的空格即可。</p></li><li><p>**均分空格：**计算每对单词之间分配的空格数 <code>spaceBetween</code> 和多余的空格数 <code>extraSpaces</code>。</p></li><li><p>**拼接结果：**用 <code>join</code> 方法将单词以 <code>spaceBetween</code> 个空格连接起来，并在末尾添加多余的空格。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串统计空格和提取单词的操作。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了额外的数组来存储单词列表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">text</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderSpaces</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> words <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 统计空格总数</span>
	<span class="token keyword">const</span> spaces <span class="token operator">=</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// 提取单词</span>
	words <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果只有一个单词或没有单词，直接返回单词加上所有剩余空格</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>words<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>spaces<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 计算每对单词之间分配的空格数，以及剩余空格</span>
	<span class="token keyword">const</span> spaceBetween <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>spaces <span class="token operator">/</span> <span class="token punctuation">(</span>words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> extraSpaces <span class="token operator">=</span> spaces <span class="token operator">%</span> <span class="token punctuation">(</span>words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 拼接单词，并添加多余的空格</span>
	<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>spaceBetween<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>extraSpaces<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"68",-1),q=n("td",{style:{"text-align":"left"}},"文本左右对齐",-1),y={style:{"text-align":"center"}},E={style:{"text-align":"left"}},j=n("code",null,"数组",-1),B=n("code",null,"字符串",-1),I=n("code",null,"模拟",-1),C=n("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/text-justification",target:"_blank",rel:"noopener noreferrer"};function V(O,R){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[g,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/string.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",m,[b,t(o)]),s(),n("a",_,[f,t(o)])]),x,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[w,q,n("td",y,[t(a,{to:"/problem/0068.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/array.html"},{default:e(()=>[j]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[B]),_:1}),s(),t(a,{to:"/tag/simulation.html"},{default:e(()=>[I]),_:1})]),C,n("td",L,[n("a",N,[s("🀄️"),t(o)]),s(),n("a",S,[s("🔗"),t(o)])])])])])])}const W=l(k,[["render",V],["__file","1592.html.vue"]]);export{W as default};
