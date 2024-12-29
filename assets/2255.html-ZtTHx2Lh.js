import{_ as l,r,o as i,c as d,a as t,b as n,d as e,w as s,f as p,e as u}from"./app-r0ql_Osa.js";const h={},g=t("h1",{id:"_2255-统计是给定字符串前缀的字符串数目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2255-统计是给定字符串前缀的字符串数目","aria-hidden":"true"},"#"),n(" 2255. 统计是给定字符串前缀的字符串数目")],-1),_=t("code",null,"数组",-1),f=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string array <code>words</code> and a string <code>s</code>, where <code>words[i]</code> and <code>s</code> comprise only of <strong>lowercase English letters</strong>.</p><p>Return <em>the <strong>number of strings</strong> in</em> <code>words</code> <em>that are a <strong>prefix</strong> of</em> <code>s</code>.</p><p>A <strong>prefix</strong> of a string is a substring that occurs at the beginning of the string. A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;ab&quot;,&quot;bc&quot;,&quot;abc&quot;], s = &quot;abc&quot;</p><p>Output: 3</p><p>Explanation:</p><p>The strings in words which are a prefix of s = &quot;abc&quot; are:</p><p>&quot;a&quot;, &quot;ab&quot;, and &quot;abc&quot;.</p><p>Thus the number of strings in words which are a prefix of s is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;a&quot;,&quot;a&quot;], s = &quot;aa&quot;</p><p>Output: 2</p><p>Explanation: Both of the strings are a prefix of s.</p><p>Note that the same string can occur multiple times in words, and it should be counted each time.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length, s.length &lt;= 10</code></li><li><code>words[i]</code> and <code>s</code> consist of lowercase English letters <strong>only</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> 和一个字符串 <code>s</code> ，其中 <code>words[i]</code> 和 <code>s</code> 只包含 <strong>小写英文字母</strong> 。</p><p>请你返回 <code>words</code> 中是字符串 <code>s</code> <strong>前缀</strong>的 <strong>字符串数目</strong> 。</p><p>一个字符串的 <strong>前缀</strong> 是出现在字符串开头的子字符串。<strong>子字符串</strong> 是一个字符串中的连续一段字符序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;ab&quot;,&quot;bc&quot;,&quot;abc&quot;], s = &quot;abc&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>words 中是 s = &quot;abc&quot; 前缀的字符串为：</p><p>&quot;a&quot; ，&quot;ab&quot; 和 &quot;abc&quot; 。</p><p>所以 words 中是字符串 s 前缀的字符串数目为 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;a&quot;,&quot;a&quot;], s = &quot;aa&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 两个字符串都是 s 的前缀。</p><p>注意，相同的字符串可能在 words 中出现多次，它们应该被计数多次。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length, s.length &lt;= 10</code></li><li><code>words[i]</code> 和 <code>s</code> <strong>只</strong> 包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>初始化计数器</strong>：<code>count</code> 用于统计满足条件的单词数量。</li><li><strong>遍历单词</strong>：使用 <code>for...of</code> 遍历 <code>words</code> 中的每个单词。</li><li><strong>检查前缀</strong>：使用 <code>startsWith</code> 方法判断<code>s</code>是否以单词开头。</li><li><strong>更新计数器</strong>：如果满足条件，计数器 <code>count</code> 增加。</li><li><strong>返回结果</strong>：最后返回满足条件的单词数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>words</code> 的长度，<code>n</code> 是单词的平均长度，对于每个单词，<code>startsWith</code> 方法需要检查前缀的长度为单词长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了一个计数器变量，没有额外的存储需求。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPrefixes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化计数器</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历每个单词</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查是否以 word 为前缀</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 如果满足条件，计数器 +1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span> <span class="token comment">// 返回最终计数结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"1455",-1),y=t("td",{style:{"text-align":"left"}},"检查单词是否为句中其他单词的前缀",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=t("code",null,"双指针",-1),L=t("code",null,"字符串",-1),V=t("code",null,"字符串匹配",-1),B=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"1961",-1),T=t("td",{style:{"text-align":"left"}},"检查字符串是否为数组前缀",-1),W={style:{"text-align":"center"}},A={style:{"text-align":"left"}},P=t("code",null,"数组",-1),S=t("code",null,"双指针",-1),Y=t("code",null,"字符串",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/check-if-string-is-a-prefix-of-array",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/check-if-string-is-a-prefix-of-array",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2185",-1),J=t("td",{style:{"text-align":"left"}},"统计包含给定前缀的字符串",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},Q=t("code",null,"数组",-1),U=t("code",null,"字符串",-1),X=t("code",null,"字符串匹配",-1),Z=t("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"};function et(st,ot){const c=r("font"),o=r("RouterLink"),a=r("ExternalLinkIcon");return i(),d("div",null,[g,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",m,[k,e(a)]),n(),t("a",b,[q,e(a)])]),w,p(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[v,y,t("td",E,[e(o,{to:"/problem/1455.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",N,[e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[C]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[L]),_:1}),n(),e(o,{to:"/tag/string-matching.html"},{default:s(()=>[V]),_:1})]),B,t("td",I,[t("a",O,[n("🀄️"),e(a)]),n(),t("a",j,[n("🔗"),e(a)])])]),t("tr",null,[R,T,t("td",W,[e(o,{to:"/problem/1961.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[Y]),_:1})]),z,t("td",D,[t("a",F,[n("🀄️"),e(a)]),n(),t("a",G,[n("🔗"),e(a)])])]),t("tr",null,[H,J,t("td",K,[e(o,{to:"/problem/2185.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",M,[e(o,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),n(),e(o,{to:"/tag/string.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/tag/string-matching.html"},{default:s(()=>[X]),_:1})]),Z,t("td",$,[t("a",tt,[n("🀄️"),e(a)]),n(),t("a",nt,[n("🔗"),e(a)])])])])])])}const rt=l(h,[["render",et],["__file","2255.html.vue"]]);export{rt as default};
