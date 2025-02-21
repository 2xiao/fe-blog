import{_ as i,r as c,o as p,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-9CeBk-uV.js";const h={},g=n("h1",{id:"_1859-将句子排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1859-将句子排序","aria-hidden":"true"},"#"),s(" 1859. 将句子排序")],-1),k=n("code",null,"字符串",-1),m=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/sorting-the-sentence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/sorting-the-sentence",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>sentence</strong> is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.</p><p>A sentence can be <strong>shuffled</strong> by appending the <strong>1-indexed word position</strong> to each word then rearranging the words in the sentence.</p><ul><li>For example, the sentence <code>&quot;This is a sentence&quot;</code> can be shuffled as <code>&quot;sentence4 a3 is2 This1&quot;</code> or <code>&quot;is2 sentence4 This1 a3&quot;</code>.</li></ul><p>Given a <strong>shuffled sentence</strong> <code>s</code> containing no more than <code>9</code> words, reconstruct and return <em>the original sentence</em>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;is2 sentence4 This1 a3&quot;</p><p>Output: &quot;This is a sentence&quot;</p><p>Explanation: Sort the words in s to their original positions &quot;This1 is2 a3 sentence4&quot;, then remove the numbers.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;Myself2 Me1 I4 and3&quot;</p><p>Output: &quot;Me Myself and I&quot;</p><p>Explanation: Sort the words in s to their original positions &quot;Me1 Myself2 and3 I4&quot;, then remove the numbers.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 200</code></li><li><code>s</code> consists of lowercase and uppercase English letters, spaces, and digits from <code>1</code> to <code>9</code>.</li><li>The number of words in <code>s</code> is between <code>1</code> and <code>9</code>.</li><li>The words in <code>s</code> are separated by a single space.</li><li><code>s</code> contains no leading or trailing spaces.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个 <strong>句子</strong> 指的是一个序列的单词用单个空格连接起来，且开头和结尾没有任何空格。每个单词都只包含小写或大写英文字母。</p><p>我们可以给一个句子添加 <strong>从 1 开始的单词位置索引</strong> ，并且将句子中所有单词 <strong>打乱顺序</strong> 。</p><ul><li>比方说，句子 <code>&quot;This is a sentence&quot;</code> 可以被打乱顺序得到 <code>&quot;sentence4 a3 is2 This1&quot;</code> 或者 <code>&quot;is2 sentence4 This1 a3&quot;</code> 。</li></ul><p>给你一个 <strong>打乱顺序</strong> 的句子 <code>s</code> ，它包含的单词不超过 <code>9</code> 个，请你重新构造并得到原本顺序的句子。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;is2 sentence4 This1 a3&quot;</p><p><strong>输出：</strong> &quot;This is a sentence&quot;</p><p><strong>解释：</strong> 将 s 中的单词按照初始位置排序，得到 &quot;This1 is2 a3 sentence4&quot; ，然后删除数字。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;Myself2 Me1 I4 and3&quot;</p><p><strong>输出：</strong> &quot;Me Myself and I&quot;</p><p><strong>解释：</strong> 将 s 中的单词按照初始位置排序，得到 &quot;Me1 Myself2 and3 I4&quot; ，然后删除数字。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 200</code></li><li><code>s</code> 只包含小写和大写英文字母、空格以及从 <code>1</code> 到 <code>9</code> 的数字。</li><li><code>s</code> 中单词数目为 <code>1</code> 到 <code>9</code> 个。</li><li><code>s</code> 中的单词由单个空格分隔。</li><li><code>s</code> 不包含任何前导或者后缀空格。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>拆分单词</strong>：</p><ul><li>首先使用 <code>split(&#39; &#39;)</code> 方法将句子拆分成单个单词，<code>words</code> 数组会包含所有的单词，每个单词的最后一个字符表示该单词的位置。</li></ul></li><li><p><strong>确定单词位置并填充</strong>：</p><ul><li>对于每个单词，获取其末尾的数字（即该单词应当出现的位置）。通过 <code>charAt(word.length - 1)</code> 获取最后一个字符，并将其转换为数字。然后，将这个数字减 1，得到正确的索引位置。</li><li>将该单词（去掉末尾数字）放入 <code>res</code> 数组的正确位置。</li></ul></li><li><p><strong>拼接并返回结果</strong>：</p><ul><li>将处理后的单词数组通过空格拼接起来，返回结果字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，拆分字符串需要遍历字符串。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是单词的个数，存储单词的 <code>words</code> 数组和<code>res</code> 数组的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortSentence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> words <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		res<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2042",-1),x=n("td",{style:{"text-align":"left"}},"检查句子中的数字是否递增",-1),T={style:{"text-align":"center"}},M={style:{"text-align":"left"}},E=n("code",null,"字符串",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"};function V(j,A){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),r("div",null,[g,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/string.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/sorting.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",_,[f,e(a)]),s(),n("a",b,[q,e(a)])]),v,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[y,x,n("td",T,[e(o,{to:"/problem/2042.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",M,[e(o,{to:"/tag/string.html"},{default:t(()=>[E]),_:1})]),I,n("td",N,[n("a",C,[s("🀄️"),e(a)]),s(),n("a",L,[s("🔗"),e(a)])])])])])])}const S=i(h,[["render",V],["__file","1859.html.vue"]]);export{S as default};
