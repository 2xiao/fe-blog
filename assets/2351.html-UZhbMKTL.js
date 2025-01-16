import{_ as r,r as l,o as p,c as i,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-KDJRKGep.js";const h={},_=t("h1",{id:"_2351-第一个出现两次的字母",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2351-第一个出现两次的字母","aria-hidden":"true"},"#"),e(" 2351. 第一个出现两次的字母")],-1),g=t("code",null,"位运算",-1),k=t("code",null,"哈希表",-1),f=t("code",null,"字符串",-1),b=t("code",null,"计数",-1),m={href:"https://leetcode.cn/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> consisting of lowercase English letters, return <em>the first letter to appear <strong>twice</strong></em>.</p><p><strong>Note</strong> :</p><ul><li>A letter <code>a</code> appears twice before another letter <code>b</code> if the <strong>second</strong> occurrence of <code>a</code> is before the <strong>second</strong> occurrence of <code>b</code>.</li><li><code>s</code> will contain at least one letter that appears twice.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abccbaacz&quot;</p><p>Output: &quot;c&quot;</p><p>Explanation:</p><p>The letter &#39;a&#39; appears on the indexes 0, 5 and 6.</p><p>The letter &#39;b&#39; appears on the indexes 1 and 4.</p><p>The letter &#39;c&#39; appears on the indexes 2, 3 and 7.</p><p>The letter &#39;z&#39; appears on the index 8.</p><p>The letter &#39;c&#39; is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abcdd&quot;</p><p>Output: &quot;d&quot;</p><p>Explanation:</p><p>The only letter that appears twice is &#39;d&#39; so we return &#39;d&#39;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of lowercase English letters.</li><li><code>s</code> has at least one repeated letter.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由小写英文字母组成的字符串 <code>s</code> ，请你找出并返回第一个出现 <strong>两次</strong> 的字母。</p><p><strong>注意：</strong></p><ul><li>如果 <code>a</code> 的 <strong>第二次</strong> 出现比 <code>b</code> 的 <strong>第二次</strong> 出现在字符串中的位置更靠前，则认为字母 <code>a</code> 在字母 <code>b</code> 之前出现两次。</li><li><code>s</code> 包含至少一个出现两次的字母。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abccbaacz&quot;</p><p><strong>输出：</strong> &quot;c&quot;</p><p><strong>解释：</strong></p><p>字母 &#39;a&#39; 在下标 0 、5 和 6 处出现。</p><p>字母 &#39;b&#39; 在下标 1 和 4 处出现。</p><p>字母 &#39;c&#39; 在下标 2 、3 和 7 处出现。</p><p>字母 &#39;z&#39; 在下标 8 处出现。</p><p>字母 &#39;c&#39; 是第一个出现两次的字母，因为在所有字母中，&#39;c&#39; 第二次出现的下标是最小的。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abcdd&quot;</p><p><strong>输出：</strong> &quot;d&quot;</p><p><strong>解释：</strong></p><p>只有字母 &#39;d&#39; 出现两次，所以返回 &#39;d&#39; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 由小写英文字母组成</li><li><code>s</code> 包含至少一个重复字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>如果字符串只包含小写字母，还可以用数组模拟哈希表来优化空间消耗：</p><ol><li>初始化一个长度为 26 的数组，用于存储已访问的字符的出现次数，模拟哈希表，优化空间。</li><li>遍历字符串 <code>s</code> 的每个字符 <code>char</code>： <ul><li>使用 <code>char.charCodeAt() - 97</code> 获取字母在数组中对应的下标。</li><li>如果 <code>char</code> 对应的数组元素大于 <code>0</code>，说明它是第一个重复的字符，立即返回。</li><li>否则，将其对应的数组元素加一。</li></ul></li><li>遍历完成，返回找到的字符。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>（固定大小的数组）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">repeatedCharacter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> index <span class="token operator">=</span> char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">97</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>freq<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> char<span class="token punctuation">;</span>
		freq<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"1",-1),C=t("td",{style:{"text-align":"left"}},"两数之和",-1),T={style:{"text-align":"center"}},N={style:{"text-align":"left"}},L=t("code",null,"数组",-1),V=t("code",null,"哈希表",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"387",-1),B=t("td",{style:{"text-align":"left"}},"字符串中的第一个唯一字符",-1),R={style:{"text-align":"center"}},G={style:{"text-align":"left"}},S=t("code",null,"队列",-1),D=t("code",null,"哈希表",-1),F=t("code",null,"字符串",-1),H=t("code",null,"1+",-1),J=t("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/first-unique-character-in-a-string",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[_,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/counting.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),t("a",m,[x,n(o)]),e(),t("a",v,[y,n(o)])]),q,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,C,t("td",T,[n(a,{to:"/problem/0001.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",N,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[V]),_:1})]),z,t("td",A,[t("a",I,[e("🀄️"),n(o)]),e(),t("a",O,[e("🔗"),n(o)])])]),t("tr",null,[j,B,t("td",R,[n(a,{to:"/problem/0387.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",G,[n(a,{to:"/tag/queue.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[D]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[F]),_:1}),e(),H]),J,t("td",K,[t("a",M,[e("🀄️"),n(o)]),e(),t("a",P,[e("🔗"),n(o)])])])])])])}const Y=r(h,[["render",Q],["__file","2351.html.vue"]]);export{Y as default};
