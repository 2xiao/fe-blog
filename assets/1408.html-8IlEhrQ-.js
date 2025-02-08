import{_ as l,r as c,o as r,c as u,a as n,b as t,d as s,w as o,f as i,e as d}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_1408-数组中的字符串匹配",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1408-数组中的字符串匹配","aria-hidden":"true"},"#"),t(" 1408. 数组中的字符串匹配")],-1),g=n("code",null,"数组",-1),q=n("code",null,"字符串",-1),m=n("code",null,"字符串匹配",-1),_={href:"https://leetcode.cn/problems/string-matching-in-an-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/string-matching-in-an-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of string <code>words</code>, return <em>all strings in</em><code>words</code> <em>that is a<strong>substring</strong> of another word</em>. You can return the answer in <strong>any order</strong>.</p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;mass&quot;,&quot;as&quot;,&quot;hero&quot;,&quot;superhero&quot;]</p><p>Output: [&quot;as&quot;,&quot;hero&quot;]</p><p>Explanation: &quot;as&quot; is substring of &quot;mass&quot; and &quot;hero&quot; is substring of &quot;superhero&quot;.</p><p>[&quot;hero&quot;,&quot;as&quot;] is also a valid answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;leetcode&quot;,&quot;et&quot;,&quot;code&quot;]</p><p>Output: [&quot;et&quot;,&quot;code&quot;]</p><p>Explanation: &quot;et&quot;, &quot;code&quot; are substring of &quot;leetcode&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words = [&quot;blue&quot;,&quot;green&quot;,&quot;bu&quot;]</p><p>Output: []</p><p>Explanation: No string of words is substring of another string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 30</code></li><li><code>words[i]</code> contains only lowercase English letters.</li><li>All the strings of <code>words</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> ，数组中的每个字符串都可以看作是一个单词。请你按 <strong>任意</strong> 顺序返回 <code>words</code> 中是其他单词的子字符串的所有单词。</p><p>如果你可以删除 <code>words[j]</code> 最左侧和/或最右侧的若干字符得到 <code>words[i]</code> ，那么字符串 <code>words[i]</code> 就是 <code>words[j]</code> 的一个子字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;mass&quot;,&quot;as&quot;,&quot;hero&quot;,&quot;superhero&quot;]</p><p><strong>输出：</strong>[&quot;as&quot;,&quot;hero&quot;]</p><p><strong>解释：</strong> &quot;as&quot; 是 &quot;mass&quot; 的子字符串，&quot;hero&quot; 是 &quot;superhero&quot; 的子字符串。</p><p>[&quot;hero&quot;,&quot;as&quot;] 也是有效的答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;leetcode&quot;,&quot;et&quot;,&quot;code&quot;]</p><p><strong>输出：</strong>[&quot;et&quot;,&quot;code&quot;]</p><p><strong>解释：</strong> &quot;et&quot; 和 &quot;code&quot; 都是 &quot;leetcode&quot; 的子字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;blue&quot;,&quot;green&quot;,&quot;bu&quot;]</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 30</code></li><li><code>words[i]</code> 仅包含小写英文字母。</li><li>题目数据 <strong>保证</strong> 每个 <code>words[i]</code> 都是独一无二的。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>将 <code>words</code> 按照字符串长度从小到大排序。这样可以保证，较短的字符串总是优先被检查是否是其他字符串的子串。</p></li><li><p>使用双重循环：</p><ul><li>外层循环遍历每个字符串 <code>words[i]</code>。</li><li>内层循环从 <code>i+1</code> 开始，检查后续字符串 <code>words[j]</code> 是否包含当前字符串 <code>words[i]</code>。</li></ul></li><li><p>如果 <code>words[j]</code> 包含 <code>words[i]</code>，将 <code>words[i]</code> 添加到结果数组 <code>res</code> 中，并跳出内层循环。</p></li><li><p>返回结果数组 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n + n^2 * m)</code></p><ul><li>对数组按长度排序的时间复杂度为 <code>O(n log n)</code>，其中 <code>n</code> 是 <code>words</code> 的长度。</li><li>外层循环遍历 <code>n</code> 个字符串，内层循环最多遍历 <code>n - 1</code> 次，字符串比较的复杂度为 <code>O(m)</code>，其中 <code>m</code> 是字符串的平均长度，双层循环的总时间复杂度为 <code>O(n^2 * m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是结果数组的长度，只使用了结果数组 <code>res</code> 和一些辅助变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">stringMatching</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按字符串长度排序</span>
	words<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>length <span class="token operator">-</span> b<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历每个字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查是否为子字符串</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>words<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"2564",-1),j=n("td",{style:{"text-align":"left"}},"子字符串异或查询",-1),E=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},N=n("code",null,"位运算",-1),C=n("code",null,"数组",-1),I=n("code",null,"哈希表",-1),L=n("code",null,"1+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/substring-xor-queries",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/substring-xor-queries",target:"_blank",rel:"noopener noreferrer"};function G(M,S){const p=c("font"),e=c("RouterLink"),a=c("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:o(()=>[g]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:o(()=>[q]),_:1}),t(),s(e,{to:"/tag/string-matching.html"},{default:o(()=>[m]),_:1}),t("  🔗 "),n("a",_,[b,s(a)]),t(),n("a",w,[f,s(a)])]),v,i(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,j,E,n("td",O,[s(e,{to:"/tag/bit-manipulation.html"},{default:o(()=>[N]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:o(()=>[C]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:o(()=>[I]),_:1}),t(),L]),V,n("td",B,[n("a",A,[t("🀄️"),s(a)]),t(),n("a",R,[t("🔗"),s(a)])])])])])])}const Y=l(k,[["render",G],["__file","1408.html.vue"]]);export{Y as default};
