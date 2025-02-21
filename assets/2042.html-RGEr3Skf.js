import{_ as c,r as l,o as i,c as p,a as e,b as t,d as n,w as s,f as d,e as u}from"./app-9CeBk-uV.js";const g={},h=e("h1",{id:"_2042-检查句子中的数字是否递增",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2042-检查句子中的数字是否递增","aria-hidden":"true"},"#"),t(" 2042. 检查句子中的数字是否递增")],-1),m=e("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A sentence is a list of <strong>tokens</strong> separated by a <strong>single</strong> space with no leading or trailing spaces. Every token is either a <strong>positive number</strong> consisting of digits <code>0-9</code> with no leading zeros, or a <strong>word</strong> consisting of lowercase English letters.</p><ul><li>For example, <code>&quot;a puppy has 2 eyes 4 legs&quot;</code> is a sentence with seven tokens: <code>&quot;2&quot;</code> and <code>&quot;4&quot;</code> are numbers and the other tokens such as <code>&quot;puppy&quot;</code> are words.</li></ul><p>Given a string <code>s</code> representing a sentence, you need to check if <strong>all</strong> the numbers in <code>s</code> are <strong>strictly increasing</strong> from left to right (i.e., other than the last number, <strong>each</strong> number is <strong>strictly smaller</strong> than the number on its <strong>right</strong> in <code>s</code>).</p><p>Return <code>true</code> <em>if so, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/30/example1.png" alt="example-1" tabindex="0" loading="lazy"><figcaption>example-1</figcaption></figure><blockquote><p>Input: s = &quot;1 box has 3 blue 4 red 6 green and 12 yellow marbles&quot;</p><p>Output: true</p><p>Explanation: The numbers in s are: 1, 3, 4, 6, 12.</p><p>They are strictly increasing from left to right: 1 &lt; 3 &lt; 4 &lt; 6 &lt; 12.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;hello world 5 x 5&quot;</p><p>Output: false</p><p>Explanation: The numbers in s are: <em><strong>5</strong></em> , <strong><em>5</em></strong>. They are not strictly increasing.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/30/example3.png" alt="example-3" tabindex="0" loading="lazy"><figcaption>example-3</figcaption></figure><blockquote><p>Input: s = &quot;sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s&quot;</p><p>Output: false</p><p>Explanation: The numbers in s are: 7, <em><strong>51</strong></em> , <em><strong>50</strong></em> , 60. They are not strictly increasing.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= s.length &lt;= 200</code></li><li><code>s</code> consists of lowercase English letters, spaces, and digits from <code>0</code> to <code>9</code>, inclusive.</li><li>The number of tokens in <code>s</code> is between <code>2</code> and <code>100</code>, inclusive.</li><li>The tokens in <code>s</code> are separated by a single space.</li><li>There are at least <strong>two</strong> numbers in <code>s</code>.</li><li>Each number in <code>s</code> is a <strong>positive</strong> number <strong>less</strong> than <code>100</code>, with no leading zeros.</li><li><code>s</code> contains no leading or trailing spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>句子是由若干 <strong>token</strong> 组成的一个列表，<strong>token</strong> 间用 <strong>单个</strong> 空格分隔，句子没有前导或尾随空格。每个 token 要么是一个由数字 <code>0-9</code> 组成的不含前导零的 <strong>正整数</strong> ，要么是一个由小写英文字母组成的 <strong>单词</strong> 。</p><ul><li>示例，<code>&quot;a puppy has 2 eyes 4 legs&quot;</code> 是一个由 7 个 token 组成的句子：<code>&quot;2&quot;</code> 和 <code>&quot;4&quot;</code> 是数字，其他像 <code>&quot;puppy&quot;</code> 这样的 tokens 属于单词。</li></ul><p>给你一个表示句子的字符串 <code>s</code> ，你需要检查 <code>s</code> 中的 <strong>全部</strong> 数字是否从左到右严格递增（即，除了最后一个数字，<code>s</code> 中的 <strong>每个</strong> 数字都严格小于它 <strong>右侧</strong> 的数字）。</p><p>如果满足题目要求，返回 <code>true</code> ，否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/30/example1.png" alt="example-1" tabindex="0" loading="lazy"><figcaption>example-1</figcaption></figure><blockquote><p><strong>输入：</strong> s = &quot;1 box has 3 blue 4 red 6 green and 12 yellow marbles&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 句子中的数字是：1, 3, 4, 6, 12 。</p><p>这些数字是按从左到右严格递增的 1 &lt; 3 &lt; 4 &lt; 6 &lt; 12 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;hello world 5 x 5&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 句子中的数字是： <em><strong>5</strong></em> , <strong><em>5</em></strong> 。这些数字不是严格递增的。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/30/example3.png" alt="example-3" tabindex="0" loading="lazy"><figcaption>example-3</figcaption></figure><blockquote><p><strong>输入：</strong> s = &quot;sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> s 中的数字是：7, <em><strong>51</strong></em> , <em><strong>50</strong></em> , 60 。这些数字不是严格递增的。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;4 5 11 26&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> s 中的数字是：4, 5, 11, 26 。</p><p>这些数字是按从左到右严格递增的：4 &lt; 5 &lt; 11 &lt; 26 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= s.length &lt;= 200</code></li><li><code>s</code> 由小写英文字母、空格和数字 <code>0</code> 到 <code>9</code> 组成（包含 <code>0</code> 和 <code>9</code>）</li><li><code>s</code> 中数字 token 的数目在 <code>2</code> 和 <code>100</code> 之间（包含 <code>2</code> 和 <code>100</code>）</li><li><code>s</code> 中的 token 之间由单个空格分隔</li><li><code>s</code> 中至少有 <strong>两个</strong> 数字</li><li><code>s</code> 中的每个数字都是一个 <strong>小于</strong> <code>100</code> 的 <strong>正</strong> 数，且不含前导零</li><li><code>s</code> 不含前导或尾随空格</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>提取数字</strong>：</p><ul><li>使用正则表达式 <code>/\\d{1,2}/ig</code> 匹配所有 1 到 2 位的数字。</li><li><code>match</code> 方法会返回一个匹配到的数字字符串数组。</li></ul></li><li><p><strong>验证递增</strong>：</p><ul><li>遍历提取的数字数组。</li><li>将每个数字字符串转为数字并比较当前数字和前一个数字。</li><li>如果当前数字小于或等于前一个数字，返回 <code>false</code>。</li><li>如果全部数字严格递增，返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m)</code><ul><li>正则匹配数字：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。</li><li>遍历数字数组：<code>O(m)</code>，其中 <code>m</code> 是提取的数字个数。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，正则匹配产生了一个数组，其中 <code>m</code> 是提取的数字个数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">areNumbersAscending</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d{1,2}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 匹配1到2位的数字</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查递增</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token function">Number</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),q=e("td",{style:{"text-align":"center"}},"8",-1),v=e("td",{style:{"text-align":"left"}},"字符串转换整数 (atoi)",-1),w={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=e("code",null,"字符串",-1),N=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/string-to-integer-atoi",target:"_blank",rel:"noopener noreferrer"},I=e("td",{style:{"text-align":"center"}},"1859",-1),L=e("td",{style:{"text-align":"left"}},"将句子排序",-1),V={style:{"text-align":"center"}},B={style:{"text-align":"left"}},j=e("code",null,"字符串",-1),A=e("code",null,"排序",-1),R=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/sorting-the-sentence",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/sorting-the-sentence",target:"_blank",rel:"noopener noreferrer"},D=e("td",{style:{"text-align":"center"}},"2124",-1),H=e("td",{style:{"text-align":"left"}},"检查是否所有 A 都在 B 之前",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},M=e("code",null,"字符串",-1),P=e("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[h,e("p",null,[t("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",k,[_,n(a)]),t(),e("a",b,[f,n(a)])]),x,d(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[q,v,e("td",w,[n(o,{to:"/problem/0008.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",E,[n(o,{to:"/tag/string.html"},{default:s(()=>[T]),_:1})]),N,e("td",O,[e("a",z,[t("🀄️"),n(a)]),t(),e("a",C,[t("🔗"),n(a)])])]),e("tr",null,[I,L,e("td",V,[n(o,{to:"/problem/1859.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",B,[n(o,{to:"/tag/string.html"},{default:s(()=>[j]),_:1}),t(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[A]),_:1})]),R,e("td",F,[e("a",G,[t("🀄️"),n(a)]),t(),e("a",S,[t("🔗"),n(a)])])]),e("tr",null,[D,H,e("td",J,[n(o,{to:"/problem/2124.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",K,[n(o,{to:"/tag/string.html"},{default:s(()=>[M]),_:1})]),P,e("td",Q,[e("a",U,[t("🀄️"),n(a)]),t(),e("a",W,[t("🔗"),n(a)])])])])])])}const ee=c(g,[["render",X],["__file","2042.html.vue"]]);export{ee as default};
