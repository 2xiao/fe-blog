import{_ as p,r as c,o as d,c as r,a as e,b as n,d as t,w as o,f as i,e as u}from"./app-r0ql_Osa.js";const g={},k=e("h1",{id:"_2047-句子中的有效单词数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2047-句子中的有效单词数","aria-hidden":"true"},"#"),n(" 2047. 句子中的有效单词数")],-1),m=e("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/number-of-valid-words-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/number-of-valid-words-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A sentence consists of lowercase letters (<code>&#39;a&#39;</code> to <code>&#39;z&#39;</code>), digits (<code>&#39;0&#39;</code> to <code>&#39;9&#39;</code>), hyphens (<code>&#39;-&#39;</code>), punctuation marks (<code>&#39;!&#39;</code>, <code>&#39;.&#39;</code>, and <code>&#39;,&#39;</code>), and spaces (<code>&#39; &#39;</code>) only. Each sentence can be broken down into <strong>one or more tokens</strong> separated by one or more spaces <code>&#39; &#39;</code>.</p><p>A token is a valid word if <strong>all three</strong> of the following are true:</p><ul><li>It only contains lowercase letters, hyphens, and/or punctuation (<strong>no</strong> digits).</li><li>There is <strong>at most one</strong> hyphen <code>&#39;-&#39;</code>. If present, it <strong>must</strong> be surrounded by lowercase characters (<code>&quot;a-b&quot;</code> is valid, but <code>&quot;-ab&quot;</code> and <code>&quot;ab-&quot;</code> are not valid).</li><li>There is <strong>at most one</strong> punctuation mark. If present, it <strong>must</strong> be at the <strong>end</strong> of the token (<code>&quot;ab,&quot;</code>, <code>&quot;cd!&quot;</code>, and <code>&quot;.&quot;</code> are valid, but <code>&quot;a!b&quot;</code> and <code>&quot;c.,&quot;</code> are not valid).</li></ul><p>Examples of valid words include <code>&quot;a-b.&quot;</code>, <code>&quot;afad&quot;</code>, <code>&quot;ba-c&quot;</code>, <code>&quot;a!&quot;</code>, and <code>&quot;!&quot;</code>.</p><p>Given a string <code>sentence</code>, return <em>the <strong>number</strong> of valid words in</em> <code>sentence</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentence = &quot;<em>cat</em> <em>and</em> <em>dog</em> &quot;</p><p>Output: 3</p><p>Explanation: The valid words in the sentence are &quot;cat&quot;, &quot;and&quot;, and &quot;dog&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentence = &quot;!this 1-s b8d!&quot;</p><p>Output: 0</p><p>Explanation: There are no valid words in the sentence.</p><p>&quot;!this&quot; is invalid because it starts with a punctuation mark.</p><p>&quot;1-s&quot; and &quot;b8d&quot; are invalid because they contain digits.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: sentence = &quot;<em>alice</em> <em>and</em> <em>bob</em> <em>are</em> <em>playing</em> stone-game10&quot;</p><p>Output: 5</p><p>Explanation: The valid words in the sentence are &quot;alice&quot;, &quot;and&quot;, &quot;bob&quot;, &quot;are&quot;, and &quot;playing&quot;.</p><p>&quot;stone-game10&quot; is invalid because it contains digits.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 1000</code></li><li><code>sentence</code> only contains lowercase English letters, digits, <code>&#39; &#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;!&#39;</code>, <code>&#39;.&#39;</code>, and <code>&#39;,&#39;</code>.</li><li>There will be at least <code>1</code> token.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>句子仅由小写字母（<code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code>）、数字（<code>&#39;0&#39;</code> 到 <code>&#39;9&#39;</code>）、连字符（<code>&#39;-&#39;</code>）、标点符号（<code>&#39;!&#39;</code>、<code>&#39;.&#39;</code> 和 <code>&#39;,&#39;</code>）以及空格（<code>&#39; &#39;</code>）组成。每个句子可以根据空格分解成 <strong>一个或者多个 token</strong> ，这些 token 之间由一个或者多个空格 <code>&#39; &#39;</code> 分隔。</p><p>如果一个 token 同时满足下述条件，则认为这个 token 是一个有效单词：</p><ul><li>仅由小写字母、连字符和/或标点（不含数字）组成。</li><li><strong>至多一个</strong> 连字符 <code>&#39;-&#39;</code> 。如果存在，连字符两侧应当都存在小写字母（<code>&quot;a-b&quot;</code> 是一个有效单词，但 <code>&quot;-ab&quot;</code> 和 <code>&quot;ab-&quot;</code> 不是有效单词）。</li><li><strong>至多一个</strong> 标点符号。如果存在，标点符号应当位于 token 的 <strong>末尾</strong> 。</li></ul><p>这里给出几个有效单词的例子：<code>&quot;a-b.&quot;</code>、<code>&quot;afad&quot;</code>、<code>&quot;ba-c&quot;</code>、<code>&quot;a!&quot;</code> 和 <code>&quot;!&quot;</code> 。</p><p>给你一个字符串 <code>sentence</code> ，请你找出并返回 <code>sentence</code> 中<strong>有效单词的数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;<em><strong>cat</strong></em> <em><strong>and</strong></em> <em><strong>dog</strong></em> &quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 句子中的有效单词是 &quot;cat&quot;、&quot;and&quot; 和 &quot;dog&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;!this 1-s b8d!&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 句子中没有有效单词</p><p>&quot;!this&quot; 不是有效单词，因为它以一个标点开头</p><p>&quot;1-s&quot; 和 &quot;b8d&quot; 也不是有效单词，因为它们都包含数字</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;<em><strong>alice</strong></em> <em><strong>and</strong></em> <em><strong>bob</strong></em> <em><strong>are</strong></em> <em><strong>playing</strong></em> stone-game10&quot;</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 句子中的有效单词是 &quot;alice&quot;、&quot;and&quot;、&quot;bob&quot;、&quot;are&quot; 和 &quot;playing&quot;</p><p>&quot;stone-game10&quot; 不是有效单词，因为它含有数字</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 1000</code></li><li><code>sentence</code> 由小写英文字母、数字（<code>0-9</code>）、以及字符（<code>&#39; &#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;!&#39;</code>、<code>&#39;.&#39;</code> 和 <code>&#39;,&#39;</code>）组成</li><li>句子中至少有 <code>1</code> 个 token</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分割句子</strong>：使用空格 <code>split</code> 将句子分割为单词或标点符号的数组。</p></li><li><p><strong>过滤条件</strong>：通过一系列正则表达式的条件，过滤出符合规则的单词或标点符号。</p></li><li><p><strong>过滤规则</strong></p><ul><li><p><strong>移除带数字或空字符串的项</strong>：</p><ul><li><code>if (/\\d/.test(s) || s === &#39;&#39;) return false</code></li><li>如果字符串中包含数字 <code>\\d</code> 或是空字符串 <code>&#39;&#39;</code>，直接排除。</li></ul></li><li><p><strong>只包含标点符号的项</strong>：</p><ul><li><code>if (/^[!,.]$/.test(s)) return true</code></li><li>如果字符串仅由 <code>!</code>、<code>,</code> 或 <code>.</code> 组成，保留。</li></ul></li><li><p><strong>单词+可选标点符号的项</strong>：</p><ul><li><code>if (/^\\w+[!,.]?$/.test(s)) return true</code></li><li>匹配： <ul><li>至少包含一个字母或数字的单词：<code>\\w+</code></li><li>可选的标点符号 <code>!</code>, <code>,</code>, <code>.</code>：<code>[!,.]?</code></li></ul></li></ul></li><li><p><strong>单词-单词+可选标点符号的项</strong>：</p><ul><li><code>if (/^\\w+[-]?\\w+[!,.]?$/.test(s)) return true</code></li><li>匹配： <ul><li>单词部分：<code>\\w+</code></li><li>可选连字符：<code>[-]?</code></li><li>第二个单词部分：<code>\\w+</code></li><li>可选标点符号 <code>!</code>, <code>,</code>, <code>.</code>：<code>[!,.]?</code></li></ul></li></ul></li><li><p><strong>不符合上述条件的项</strong>：</p><ul><li><code>return false</code></li></ul></li></ul></li><li><p><strong>返回结果：</strong> 过滤后，返回符合条件的字符串数量：</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + m * k)</code></p><ul><li><strong>分割句子</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>过滤过程</strong>：假设分割后的数组长度为 <code>m</code>，每次正则匹配的复杂度为 <code>O(k)</code>（<code>k</code> 是每个字符串的长度）。 <ul><li>总过滤复杂度为 <code>O(m * k)</code>。</li></ul></li><li><strong>总体复杂度</strong>：<code>O(n + m * k)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m)</code>，存储分割后的数组。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sentence</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countValidWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> list <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> filtered <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">||</span> s <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[!,.]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\w+[!,.]?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\w+[-]?\\w+[!,.]?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> filtered<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2114",-1),w=e("td",{style:{"text-align":"left"}},"句子中的最多单词数",-1),y={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=e("code",null,"数组",-1),I=e("code",null,"字符串",-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/maximum-number-of-words-found-in-sentences",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/maximum-number-of-words-found-in-sentences",target:"_blank",rel:"noopener noreferrer"};function L(N,j){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return d(),r("div",null,[k,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),t(s,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),n("  🔗 "),e("a",h,[q,t(a)]),n(),e("a",b,[f,t(a)])]),_,i(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[x,w,e("td",y,[t(s,{to:"/problem/2114.html"},{default:o(()=>[n("[✓]")]),_:1})]),e("td",E,[t(s,{to:"/tag/array.html"},{default:o(()=>[O]),_:1}),n(),t(s,{to:"/tag/string.html"},{default:o(()=>[I]),_:1})]),T,e("td",V,[e("a",$,[n("🀄️"),t(a)]),n(),e("a",C,[n("🔗"),t(a)])])])])])])}const z=p(g,[["render",L],["__file","2047.html.vue"]]);export{z as default};
