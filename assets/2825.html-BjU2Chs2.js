import{_ as p,r as c,o as l,c as d,a as e,b as t,d as n,w as s,f as i,e as u}from"./app-MXSjQbID.js";const h={},g=e("h1",{id:"_2825-循环增长使字符串子序列等于另一个字符串",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2825-循环增长使字符串子序列等于另一个字符串","aria-hidden":"true"},"#"),t(" 2825. 循环增长使字符串子序列等于另一个字符串")],-1),k=e("code",null,"双指针",-1),m=e("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/make-string-a-subsequence-using-cyclic-increments",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>0-indexed</strong> strings <code>str1</code> and <code>str2</code>.</p><p>In an operation, you select a <strong>set</strong> of indices in <code>str1</code>, and for each index <code>i</code> in the set, increment <code>str1[i]</code> to the next character <strong>cyclically</strong>. That is <code>&#39;a&#39;</code> becomes <code>&#39;b&#39;</code>, <code>&#39;b&#39;</code> becomes <code>&#39;c&#39;</code>, and so on, and <code>&#39;z&#39;</code> becomes <code>&#39;a&#39;</code>.</p><p>Return <code>true</code> <em>if it is possible to make</em><code>str2</code> <em>a subsequence of</em><code>str1</code> <em>by performing the operation<strong>at most once</strong></em> , <em>and</em> <code>false</code> <em>otherwise</em>.</p><p><strong>Note:</strong> A subsequence of a string is a new string that is formed from the original string by deleting some (possibly none) of the characters without disturbing the relative positions of the remaining characters.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: str1 = &quot;abc&quot;, str2 = &quot;ad&quot;</p><p>Output: true</p><p>Explanation: Select index 2 in str1.</p><p>Increment str1[2] to become &#39;d&#39;.</p><p>Hence, str1 becomes &quot;abd&quot; and str2 is now a subsequence. Therefore, true is returned.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: str1 = &quot;zc&quot;, str2 = &quot;ad&quot;</p><p>Output: true</p><p>Explanation: Select indices 0 and 1 in str1.</p><p>Increment str1[0] to become &#39;a&#39;.</p><p>Increment str1[1] to become &#39;d&#39;.</p><p>Hence, str1 becomes &quot;ad&quot; and str2 is now a subsequence. Therefore, true is returned.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: str1 = &quot;ab&quot;, str2 = &quot;d&quot;</p><p>Output: false</p><p>Explanation: In this example, it can be shown that it is impossible to make str2 a subsequence of str1 using the operation at most once.</p><p>Therefore, false is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= str1.length &lt;= 10^5</code></li><li><code>1 &lt;= str2.length &lt;= 10^5</code></li><li><code>str1</code> and <code>str2</code> consist of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>str1</code> 和 <code>str2</code> 。</p><p>一次操作中，你选择 <code>str1</code> 中的若干下标。对于选中的每一个下标 <code>i</code> ，你将 <code>str1[i]</code> <strong>循环</strong> 递增，变成下一个字符。也就是说 <code>&#39;a&#39;</code> 变成 <code>&#39;b&#39;</code> ，<code>&#39;b&#39;</code> 变成 <code>&#39;c&#39;</code> ，以此类推，<code>&#39;z&#39;</code> 变成 <code>&#39;a&#39;</code> 。</p><p>如果执行以上操作 <strong>至多一次</strong> ，可以让 <code>str2</code> 成为 <code>str1</code> 的子序列，请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>注意：</strong> 一个字符串的子序列指的是从原字符串中删除一些（可以一个字符也不删）字符后，剩下字符按照原本先后顺序组成的新字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;abc&quot;, str2 = &quot;ad&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 选择 str1 中的下标 2 。</p><p>将 str1[2] 循环递增，得到 &#39;d&#39; 。</p><p>因此，str1 变成 &quot;abd&quot; 且 str2 现在是一个子序列。所以返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;zc&quot;, str2 = &quot;ad&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 选择 str1 中的下标 0 和 1 。</p><p>将 str1[0] 循环递增得到 &#39;a&#39; 。</p><p>将 str1[1] 循环递增得到 &#39;d&#39; 。</p><p>因此，str1 变成 &quot;ad&quot; 且 str2 现在是一个子序列。所以返回 true 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;ab&quot;, str2 = &quot;d&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 这个例子中，没法在执行一次操作的前提下，将 str2 变为 str1 的子序列。</p><p>所以返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= str1.length &lt;= 10^5</code></li><li><code>1 &lt;= str2.length &lt;= 10^5</code></li><li><code>str1</code> 和 <code>str2</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>字符比较规则</strong></p><p>对于 <code>str1[i]</code> 和 <code>str2[j]</code>，如果：</p><ul><li><code>str1[i] == str2[j]</code>，匹配成功。</li><li><code>(str1[i] + 1) % 26 == str2[j]</code>，表示 <code>str1[i]</code> 通过一次循环递增可以变成 <code>str2[j]</code>。</li></ul><p><strong>双指针法</strong></p><ul><li>指针 <code>prev1</code> 遍历 <code>str1</code>。</li><li>指针 <code>prev2</code> 遍历 <code>str2</code>。</li><li>每次当 <code>str1[prev1]</code> 满足上述匹配规则时，将 <code>prev2</code> 向前移动一位，表示 <code>str2[prev2]</code> 找到了对应的字符。</li><li>如果最后 <code>prev2</code> 能遍历完 <code>str2</code>，则说明 <code>str2</code> 是 <code>str1</code> 的子序列。</li></ul><p><strong>算法步骤</strong></p><ol><li>初始化指针 <code>prev1</code> 和 <code>prev2</code> 均为 0。</li><li>遍历 <code>str1</code>，对当前字符进行判断： <ul><li>如果 <code>str1[prev1]</code> 与 <code>str2[prev2]</code> 匹配，移动 <code>prev2</code>。</li><li>无论是否匹配，指针 <code>prev1</code> 总是向右移动。</li></ul></li><li>检查 <code>prev2</code> 是否等于 <code>str2.length</code>，如果是，则返回 <code>true</code>；否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n = str1.length</code>，每个字符最多遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了固定数量的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canMakeSubsequence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> prev1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		prev2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev1 <span class="token operator">&lt;</span> str1<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> prev2 <span class="token operator">&lt;</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			str1<span class="token punctuation">[</span>prev1<span class="token punctuation">]</span> <span class="token operator">==</span> str2<span class="token punctuation">[</span>prev2<span class="token punctuation">]</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>prev1<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">-</span> str2<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>prev2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">26</span> <span class="token operator">==</span> <span class="token number">0</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev1<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> prev2 <span class="token operator">==</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"392",-1),w=e("td",{style:{"text-align":"left"}},"判断子序列",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},j=e("code",null,"双指针",-1),C=e("code",null,"字符串",-1),N=e("code",null,"动态规划",-1),L=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"};function z(S,A){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return l(),d("div",null,[g,e("p",null,[t("🟠 "),n(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",b,[v,n(a)]),t(),e("a",_,[f,n(a)])]),q,i(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,w,e("td",E,[n(o,{to:"/problem/0392.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",I,[n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[j]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),t(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[N]),_:1})]),L,e("td",O,[e("a",T,[t("🀄️"),n(a)]),t(),e("a",V,[t("🔗"),n(a)])])])])])])}const R=p(h,[["render",z],["__file","2825.html.vue"]]);export{R as default};
