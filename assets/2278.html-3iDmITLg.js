import{_ as r,r as c,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},k=n("h1",{id:"_2278-字母在字符串中的百分比",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2278-字母在字符串中的百分比","aria-hidden":"true"},"#"),e(" 2278. 字母在字符串中的百分比")],-1),g=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/percentage-of-letter-in-string",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/percentage-of-letter-in-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and a character <code>letter</code>, return _the <strong>percentage</strong> of characters in _<code>s</code> <em>that equal</em><code>letter</code> <em><strong>rounded down</strong> to the nearest whole percent.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;foobar&quot;, letter = &quot;o&quot;</p><p>Output: 33</p><p>Explanation:</p><p>The percentage of characters in s that equal the letter &#39;o&#39; is 2 / 6 * 100% = 33% when rounded down, so we return 33.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;jjjj&quot;, letter = &quot;k&quot;</p><p>Output: 0</p><p>Explanation:</p><p>The percentage of characters in s that equal the letter &#39;k&#39; is 0%, so we return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of lowercase English letters.</li><li><code>letter</code> is a lowercase English letter.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个字符 <code>letter</code> ，返回在 <code>s</code> 中等于 <code>letter</code> 字符所占的 <strong>百分比</strong> ，向下取整到最接近的百分比。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;foobar&quot;, letter = &quot;o&quot;</p><p><strong>输出：</strong> 33</p><p><strong>解释：</strong></p><p>等于字母 &#39;o&#39; 的字符在 s 中占到的百分比是 2 / 6 * 100% = 33% ，向下取整，所以返回 33 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;jjjj&quot;, letter = &quot;k&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>等于字母 &#39;k&#39; 的字符在 s 中占到的百分比是 0% ，所以返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 由小写英文字母组成</li><li><code>letter</code> 是一个小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计字符出现次数</strong>：</p><ul><li>遍历字符串 <code>s</code>，统计字符 <code>letter</code> 出现的次数 <code>count</code>。</li></ul></li><li><p><strong>计算百分比</strong>：</p><ul><li>使用公式 <code>percentage = floor(count * 100 / s.length)</code>。</li><li>向下取整可以直接使用 <code>Math.floor()</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串长度，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">letter</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">percentageLetter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> letter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 字符串的总长度</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 统计 letter 出现的次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> letter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 计算百分比并向下取整</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>count <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"451",-1),q=n("td",{style:{"text-align":"left"}},"根据字符出现频率排序",-1),w={style:{"text-align":"center"}},j={style:{"text-align":"left"}},E=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),C=n("code",null,"桶排序",-1),N=n("code",null,"3+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"};function T(M,R){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",_,[m,t(o)]),e(),n("a",b,[f,t(o)])]),v,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,q,n("td",w,[t(a,{to:"/problem/0451.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",j,[t(a,{to:"/tag/hash-table.html"},{default:s(()=>[E]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[L]),_:1}),e(),t(a,{to:"/tag/bucket-sort.html"},{default:s(()=>[C]),_:1}),e(),N]),V,n("td",I,[n("a",O,[e("🀄️"),t(o)]),e(),n("a",B,[e("🔗"),t(o)])])])])])])}const S=r(h,[["render",T],["__file","2278.html.vue"]]);export{S as default};
