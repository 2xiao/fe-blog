import{_ as r,r as c,o as p,c as i,a as e,b as n,d as s,w as t,f as d,e as u}from"./app-3dvbhwow.js";const h={},k=e("h1",{id:"_1941-检查是否所有字符出现次数相同",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1941-检查是否所有字符出现次数相同","aria-hidden":"true"},"#"),n(" 1941. 检查是否所有字符出现次数相同")],-1),g=e("code",null,"哈希表",-1),_=e("code",null,"字符串",-1),m=e("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <code>true</code> <em>if</em><code>s</code> <em>is a <strong>good</strong> string, or</em> <code>false</code><em>otherwise</em>.</p><p>A string <code>s</code> is <strong>good</strong> if <strong>all</strong> the characters that appear in <code>s</code> have the <strong>same</strong> number of occurrences (i.e., the same frequency).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abacbc&quot;</p><p>Output: true</p><p>Explanation: The characters that appear in s are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;. All characters occur 2 times in s.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aaabb&quot;</p><p>Output: false</p><p>Explanation: The characters that appear in s are &#39;a&#39; and &#39;b&#39;.</p><p>&#39;a&#39; occurs 3 times while &#39;b&#39; occurs 2 times, which is not the same number of times.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，如果 <code>s</code> 是一个 <strong>好</strong> 字符串，请你返回 <code>true</code> ，否则请返回 <code>false</code> 。</p><p>如果 <code>s</code> 中出现过的 <strong>所有</strong> 字符的出现次数 <strong>相同</strong> ，那么我们称字符串 <code>s</code> 是 <strong>好</strong> 字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abacbc&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> s 中出现过的字符为 &#39;a&#39;，&#39;b&#39; 和 &#39;c&#39; 。s 中所有字符均出现 2 次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aaabb&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> s 中出现过的字符为 &#39;a&#39; 和 &#39;b&#39; 。</p><p>&#39;a&#39; 出现了 3 次，&#39;b&#39; 出现了 2 次，两者出现次数不同。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>字符频率统计</strong>：</p><ul><li>创建一个长度为 26 的数组 <code>freq</code>，初始值为 0，用于记录每个字母的出现次数。数组下标与字母对应关系为 <code>char.charCodeAt() - 97</code>。</li><li>遍历字符串 <code>s</code>，更新 <code>freq</code> 数组。</li></ul></li><li><p><strong>验证频率一致性</strong>：</p><ul><li>使用 <code>Set</code> 数据结构去重，将 <code>freq</code> 中的非零值添加到 <code>Set</code> 中。</li><li>如果 <code>Set</code> 的大小为 1，则说明所有字符的出现次数相等；否则不相等。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>遍历字符串 <code>s</code> 计算频率：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。</li><li>构建 <code>Set</code>：<code>O(26)</code>，常数时间。</li><li>总时间复杂度：<code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code></p><ul><li>频率数组 <code>freq</code>：<code>O(26)</code>，常数空间。</li><li><code>Set</code> 存储不同的频率值：最多 <code>O(26)</code>，常数空间。</li><li>总空间复杂度：<code>O(1)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">areOccurrencesEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>freq<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 删除未出现字母的计数</span>
	set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> set<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2103",-1),O=e("td",{style:{"text-align":"left"}},"环和杆",-1),E=e("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},S=e("code",null,"哈希表",-1),A=e("code",null,"字符串",-1),L=e("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/rings-and-rods",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/rings-and-rods",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"center"}},"2531",-1),B=e("td",{style:{"text-align":"left"}},"使字符串中不同字符的数目相等",-1),T=e("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},z=e("code",null,"哈希表",-1),G=e("code",null,"字符串",-1),D=e("code",null,"计数",-1),F=e("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/make-number-of-distinct-characters-equal",target:"_blank",rel:"noopener noreferrer"};function M(P,Q){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[k,e("p",null,[n("🟢 "),s(l,{color:"#15bd66"},{default:t(()=>[n("Easy")]),_:1}),n("  🔖  "),s(a,{to:"/tag/hash-table.html"},{default:t(()=>[g]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:t(()=>[_]),_:1}),n(),s(a,{to:"/tag/counting.html"},{default:t(()=>[m]),_:1}),n("  🔗 "),e("a",b,[f,s(o)]),n(),e("a",v,[x,s(o)])]),y,d(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[w,O,E,e("td",C,[s(a,{to:"/tag/hash-table.html"},{default:t(()=>[S]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:t(()=>[A]),_:1})]),L,e("td",N,[e("a",V,[n("🀄️"),s(o)]),n(),e("a",I,[n("🔗"),s(o)])])]),e("tr",null,[j,B,T,e("td",R,[s(a,{to:"/tag/hash-table.html"},{default:t(()=>[z]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:t(()=>[G]),_:1}),n(),s(a,{to:"/tag/counting.html"},{default:t(()=>[D]),_:1})]),F,e("td",H,[e("a",J,[n("🀄️"),s(o)]),n(),e("a",K,[n("🔗"),s(o)])])])])])])}const W=r(h,[["render",M],["__file","1941.html.vue"]]);export{W as default};
