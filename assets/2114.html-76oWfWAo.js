import{_ as i,r as l,o as r,c as p,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-totCBmv-.js";const h={},g=e("h1",{id:"_2114-句子中的最多单词数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2114-句子中的最多单词数","aria-hidden":"true"},"#"),n(" 2114. 句子中的最多单词数")],-1),m=e("code",null,"数组",-1),k=e("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/maximum-number-of-words-found-in-sentences",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-number-of-words-found-in-sentences",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>sentence</strong> is a list of <strong>words</strong> that are separated by a single space with no leading or trailing spaces.</p><p>You are given an array of strings <code>sentences</code>, where each <code>sentences[i]</code> represents a single <strong>sentence</strong>.</p><p>Return <em>the <strong>maximum number of words</strong> that appear in a single sentence</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentences = [&quot;alice and bob love leetcode&quot;, &quot;i think so too&quot;, <em>&quot; this is great thanks very much&quot;</em>]</p><p>Output: 6</p><p>Explanation:</p><ul><li>The first sentence, &quot;alice and bob love leetcode&quot;, has 5 words in total.</li><li>The second sentence, &quot;i think so too&quot;, has 4 words in total.</li><li>The third sentence, &quot;this is great thanks very much&quot;, has 6 words in total.</li></ul><p>Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentences = [&quot;please wait&quot;, <em>&quot; continue to fight&quot;</em>, <em>&quot; continue to win&quot;</em>]</p><p>Output: 3</p><p>Explanation: It is possible that multiple sentences contain the same number of words.</p><p>In this example, the second and third sentences (underlined) have the same number of words.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentences.length &lt;= 100</code></li><li><code>1 &lt;= sentences[i].length &lt;= 100</code></li><li><code>sentences[i]</code> consists only of lowercase English letters and <code>&#39; &#39;</code> only.</li><li><code>sentences[i]</code> does not have leading or trailing spaces.</li><li>All the words in <code>sentences[i]</code> are separated by a single space.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个 <strong>句子</strong> 由一些 <strong>单词</strong> 以及它们之间的单个空格组成，句子的开头和结尾不会有多余空格。</p><p>给你一个字符串数组 <code>sentences</code> ，其中 <code>sentences[i]</code> 表示单个 <strong>句子</strong> 。</p><p>请你返回单个句子里 <strong>单词的最多数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentences = [&quot;alice and bob love leetcode&quot;, &quot;i think so too&quot;, <em><strong>&quot;this is great thanks very much&quot;</strong></em>]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><ul><li>第一个句子 &quot;alice and bob love leetcode&quot; 总共有 5 个单词。</li><li>第二个句子 &quot;i think so too&quot; 总共有 4 个单词。</li><li>第三个句子 &quot;this is great thanks very much&quot; 总共有 6 个单词。</li></ul><p>所以，单个句子中有最多单词数的是第三个句子，总共有 6 个单词。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentences = [&quot;please wait&quot;, <em><strong>&quot;continue to fight&quot;</strong></em> , <em><strong>&quot;continue to win&quot;</strong></em>]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 可能有多个句子有相同单词数。</p><p>这个例子中，第二个句子和第三个句子（加粗斜体）有相同数目的单词数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentences.length &lt;= 100</code></li><li><code>1 &lt;= sentences[i].length &lt;= 100</code></li><li><code>sentences[i]</code> 只包含小写英文字母和 <code>&#39; &#39;</code> 。</li><li><code>sentences[i]</code> 的开头和结尾都没有空格。</li><li><code>sentences[i]</code> 中所有单词由单个空格隔开。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>:</p><ul><li>定义变量 <code>max</code> 用于记录当前的最大单词数，初始值设为 <code>0</code>。</li></ul></li><li><p><strong>遍历 <code>sentences</code></strong>:</p><ul><li>对于数组中的每个句子： <ul><li>使用 <code>split(&#39; &#39;)</code> 方法将句子按空格分割成单词数组。</li><li>计算数组的长度，即句子的单词数。</li><li>更新 <code>max</code> 为当前最大值。</li></ul></li></ul></li><li><p><strong>返回结果</strong>:</p><ul><li>遍历完成后，<code>max</code> 即为句子中单词数的最大值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中数组长度为 <code>n</code>，每个句子平均长度为 <code>m</code>。 <ul><li>遍历数组需要 <code>O(n)</code>。</li><li>对每个句子使用 <code>split</code> 方法的时间复杂度为 <code>O(m)</code>。</li><li>总时间复杂度为 <code>O(n * m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，每次调用 <code>split</code> 会创建一个临时数组，其空间复杂度取决于句子的长度，但整体为动态分配，额外的持久空间为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">sentences</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mostWordsFound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentences</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> sentence <span class="token keyword">of</span> sentences<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2047",-1),y=e("td",{style:{"text-align":"left"}},"句子中的有效单词数",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},I=e("code",null,"字符串",-1),C=e("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/number-of-valid-words-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/number-of-valid-words-in-a-sentence",target:"_blank",rel:"noopener noreferrer"};function V(j,B){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),p("div",null,[g,e("p",null,[n("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[b,t(a)]),n(),e("a",f,[v,t(a)])]),q,d(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[w,y,e("td",E,[t(o,{to:"/problem/2047.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",O,[t(o,{to:"/tag/string.html"},{default:s(()=>[I]),_:1})]),C,e("td",L,[e("a",N,[n("🀄️"),t(a)]),n(),e("a",T,[n("🔗"),t(a)])])])])])])}const A=i(h,[["render",V],["__file","2114.html.vue"]]);export{A as default};
