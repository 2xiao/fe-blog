import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-3dvbhwow.js";const h={},k=n("h1",{id:"_387-字符串中的第一个唯一字符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_387-字符串中的第一个唯一字符","aria-hidden":"true"},"#"),t(" 387. 字符串中的第一个唯一字符")],-1),_=n("code",null,"队列",-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),b=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, find the <strong>first</strong> non-repeating character in it and return its index. If it <strong>does not</strong> exist, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> s = &quot;leetcode&quot;</p><p><strong>Output:</strong> 0</p><p><strong>Explanation:</strong></p><p>The character <code>&#39;l&#39;</code> at index 0 is the first character that does not occur at any other index.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> s = &quot;loveleetcode&quot;</p><p><strong>Output:</strong> 2</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> s = &quot;aabb&quot;</p><p><strong>Output:</strong> -1</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> ，找到 <em>它的第一个不重复的字符，并返回它的索引</em> 。如果不存在，则返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;leetcode&quot;</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;loveleetcode&quot;</p><p><strong>输出:</strong> 2</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;aabb&quot;</p><p><strong>输出:</strong> -1</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 只包含小写字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历字符串，构建哈希表（Map）记录每个字符在字符串中出现的次数。</li><li>再次遍历字符串，检查每个字符在哈希表中的出现次数。如果某个字符的出现次数为 1，说明它是第一个不重复的字符，返回它的索引。</li><li>如果没有找到不重复的字符，返回 -1。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。第一次遍历用来构建哈希表，第二次遍历用来查找第一个不重复的字符，都是线性时间。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，由于只有 26 个字母，我们使用的哈希表空间是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstUniqChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计每个字符的出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 查找第一个出现次数为 1 的字符</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果没有找到，返回 -1</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"451",-1),C=n("td",{style:{"text-align":"left"}},"根据字符出现频率排序",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"哈希表",-1),O=n("code",null,"字符串",-1),V=n("code",null,"桶排序",-1),j=n("code",null,"3+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2351",-1),S=n("td",{style:{"text-align":"left"}},"第一个出现两次的字母",-1),U=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=n("code",null,"位运算",-1),D=n("code",null,"哈希表",-1),F=n("code",null,"字符串",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/queue.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",f,[v,s(o)]),t(),n("a",x,[y,s(o)])]),q,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,C,n("td",I,[s(a,{to:"/problem/0451.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",L,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/tag/bucket-sort.html"},{default:e(()=>[V]),_:1}),t(),j]),B,n("td",M,[n("a",R,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[G,S,U,n("td",z,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[F]),_:1}),t(),H]),J,n("td",K,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])])])])])}const $=p(h,[["render",W],["__file","0387.html.vue"]]);export{$ as default};
