import{_ as c,r as p,o as r,c as i,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_917-仅仅反转字母",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_917-仅仅反转字母","aria-hidden":"true"},"#"),s(" 917. 仅仅反转字母")],-1),g=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/reverse-only-letters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/reverse-only-letters",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, reverse the string according to the following rules:</p><ul><li>All the characters that are not English letters remain in the same position.</li><li>All the English letters (lowercase or uppercase) should be reversed.</li></ul><p>Return <code>s</code> <em>after reversing it</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ab-cd&quot;</p><p>Output: &quot;dc-ba&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a-bC-dEf-ghIj&quot;</p><p>Output: &quot;j-Ih-gfE-dCba&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;Test1ng-Leet=code-Q!&quot;</p><p>Output: &quot;Qedo1ct-eeLg=ntse-T!&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of characters with ASCII values in the range <code>[33, 122]</code>.</li><li><code>s</code> does not contain <code>&#39;\\&quot;&#39;</code> or <code>&#39;\\\\&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，根据下述规则反转字符串：</p><ul><li>所有非英文字母保留在原有位置。</li><li>所有英文字母（小写或大写）位置反转。</li></ul><p>返回反转后的 <code>s</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ab-cd&quot;</p><p><strong>输出：</strong> &quot;dc-ba&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a-bC-dEf-ghIj&quot;</p><p><strong>输出：</strong> &quot;j-Ih-gfE-dCba&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;Test1ng-Leet=code-Q!&quot;</p><p><strong>输出：</strong> &quot;Qedo1ct-eeLg=ntse-T!&quot;</p></blockquote><p><strong>提示</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 仅由 ASCII 值在范围 <code>[33, 122]</code> 的字符组成</li><li><code>s</code> 不含 <code>&#39;\\&quot;&#39;</code> 或 <code>&#39;\\\\&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用双指针的方法，分别从字符串的两端向中间扫描，遇到字母时进行交换。</p><ol><li><p><strong>定义辅助函数</strong><br> 定义一个 <code>isLetter</code> 函数，用于判断字符是否是字母（大小写均可）。</p></li><li><p><strong>初始化双指针</strong></p><ul><li><code>left</code> 指针从字符串的开头开始。</li><li><code>right</code> 指针从字符串的末尾开始。</li></ul></li><li><p><strong>扫描和交换</strong></p><ul><li>如果 <code>left</code> 和 <code>right</code> 所指向的字符中有非字母字符，则分别向内移动相应的指针，直到找到字母。</li><li>如果两指针指向的字符均为字母，则交换它们。</li><li>然后继续移动指针，重复上述步骤，直到 <code>left &gt;= right</code>。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>将经过处理的数组转换回字符串并返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个字符数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseOnlyLetters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isLetter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>char <span class="token operator">&gt;=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>char <span class="token operator">&gt;=</span> <span class="token string">&#39;A&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isLetter</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isLetter</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		left<span class="token operator">++</span><span class="token punctuation">;</span>
		right<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2810",-1),w=n("td",{style:{"text-align":"left"}},"故障键盘",-1),L=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=n("code",null,"字符串",-1),C=n("code",null,"模拟",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/faulty-keyboard",target:"_blank",rel:"noopener noreferrer"};function T(V,Q){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",_,[f,t(o)])]),q,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,L,n("td",E,[t(e,{to:"/tag/string.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/simulation.html"},{default:a(()=>[C]),_:1})]),j,n("td",O,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",N,[s("🔗"),t(o)])])])])])])}const R=c(k,[["render",T],["__file","0917.html.vue"]]);export{R as default};
