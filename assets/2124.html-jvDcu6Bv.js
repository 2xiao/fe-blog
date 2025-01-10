import{_ as r,r as c,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},b=e("h1",{id:"_2124-检查是否所有-a-都在-b-之前",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2124-检查是否所有-a-都在-b-之前","aria-hidden":"true"},"#"),n(" 2124. 检查是否所有 A 都在 B 之前")],-1),g=e("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> consisting of <strong>only</strong> the characters <code>&#39;a&#39;</code> and <code>&#39;b&#39;</code>, return <code>true</code> <em>if <strong>every</strong></em> <code>&#39;a&#39;</code> <em>appears before <strong>every</strong></em> <code>&#39;b&#39;</code><em>in the string</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aaabbb&quot;</p><p>Output: true</p><p>Explanation:</p><p>The &#39;a&#39;s are at indices 0, 1, and 2, while the &#39;b&#39;s are at indices 3, 4, and 5.</p><p>Hence, every &#39;a&#39; appears before every &#39;b&#39; and we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abab&quot;</p><p>Output: false</p><p>Explanation:</p><p>There is an &#39;a&#39; at index 2 and a &#39;b&#39; at index 1.</p><p>Hence, not every &#39;a&#39; appears before every &#39;b&#39; and we return false.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;bbb&quot;</p><p>Output: true</p><p>Explanation:</p><p>There are no &#39;a&#39;s, hence, every &#39;a&#39; appears before every &#39;b&#39; and we return true.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> is either <code>&#39;a&#39;</code> or <code>&#39;b&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>仅</strong> 由字符 <code>&#39;a&#39;</code> 和 <code>&#39;b&#39;</code> 组成的字符串 <code>s</code> 。如果字符串中 <strong>每个</strong> <code>&#39;a&#39;</code> 都出现在每个<code>&#39;b&#39;</code> 之前，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aaabbb&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>&#39;a&#39; 位于下标 0、1 和 2 ；而 &#39;b&#39; 位于下标 3、4 和 5 。</p><p>因此，每个 &#39;a&#39; 都出现在每个 &#39;b&#39; 之前，所以返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abab&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>存在一个 &#39;a&#39; 位于下标 2 ，而一个 &#39;b&#39; 位于下标 1 。</p><p>因此，不能满足每个 &#39;a&#39; 都出现在每个 &#39;b&#39; 之前，所以返回 false 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;bbb&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>不存在 &#39;a&#39; ，因此可以视作每个 &#39;a&#39; 都出现在每个 &#39;b&#39; 之前，所以返回 true 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s[i]</code> 为 <code>&#39;a&#39;</code> 或 <code>&#39;b&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历字符串</strong>:</p><ul><li>使用一个变量 <code>indexB</code> 来记录当前最后一个出现的字符 <code>&#39;b&#39;</code> 的位置。</li><li>如果在记录了某个 <code>&#39;b&#39;</code> 的位置之后，仍然遇到字符 <code>&#39;a&#39;</code>，说明不满足条件，立即返回 <code>false</code>。</li></ul></li><li><p><strong>逻辑实现</strong>:</p><ul><li>遍历字符串时： <ul><li>如果当前字符是 <code>&#39;b&#39;</code>，更新 <code>indexB</code> 为当前索引。</li><li>如果当前字符是 <code>&#39;a&#39;</code> 且其索引大于 <code>indexB</code>，返回 <code>false</code>。</li></ul></li><li>遍历完成后，如果没有发现违反条件的情况，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，单次遍历字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量空间变量 <code>indexB</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">checkString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> indexB <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 初始化为字符串长度（默认没有 &#39;b&#39;）</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			indexB <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录当前 &#39;b&#39; 的位置</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> indexB <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果在 &#39;b&#39; 之后发现 &#39;a&#39;，返回 false</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 完成遍历，返回 true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"1653",-1),q=e("td",{style:{"text-align":"left"}},"使字符串平衡的最少删除次数",-1),w=e("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},E=e("code",null,"栈",-1),O=e("code",null,"字符串",-1),C=e("code",null,"动态规划",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/minimum-deletions-to-make-string-balanced",target:"_blank",rel:"noopener noreferrer"},T=e("td",{style:{"text-align":"center"}},"1752",-1),j=e("td",{style:{"text-align":"left"}},"检查数组是否经排序和轮转得到",-1),H={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=e("code",null,"数组",-1),A=e("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"2042",-1),J=e("td",{style:{"text-align":"left"}},"检查句子中的数字是否递增",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=e("code",null,"字符串",-1),Q=e("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[b,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),e("a",k,[_,t(o)]),n(),e("a",m,[f,t(o)])]),v,d(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,q,w,e("td",B,[t(a,{to:"/tag/stack.html"},{default:s(()=>[E]),_:1}),n(),t(a,{to:"/tag/string.html"},{default:s(()=>[O]),_:1}),n(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[C]),_:1})]),I,e("td",L,[e("a",N,[n("🀄️"),t(o)]),n(),e("a",V,[n("🔗"),t(o)])])]),e("tr",null,[T,j,e("td",H,[t(a,{to:"/problem/1752.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",R,[t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1})]),A,e("td",G,[e("a",z,[n("🀄️"),t(o)]),n(),e("a",D,[n("🔗"),t(o)])])]),e("tr",null,[F,J,e("td",K,[t(a,{to:"/problem/2042.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",M,[t(a,{to:"/tag/string.html"},{default:s(()=>[P]),_:1})]),Q,e("td",U,[e("a",W,[n("🀄️"),t(o)]),n(),e("a",X,[n("🔗"),t(o)])])])])])])}const ne=r(h,[["render",Y],["__file","2124.html.vue"]]);export{ne as default};
