import{_ as r,r as c,o as l,c as i,a as n,b as s,d as o,w as a,f as u,e as d}from"./app-MXSjQbID.js";const k={},g=n("h1",{id:"_1419-数青蛙",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1419-数青蛙","aria-hidden":"true"},"#"),s(" 1419. 数青蛙")],-1),m=n("code",null,"字符串",-1),h=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/minimum-number-of-frogs-croaking",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-number-of-frogs-croaking",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the string <code>croakOfFrogs</code>, which represents a combination of the string <code>&quot;croak&quot;</code> from different frogs, that is, multiple frogs can croak at the same time, so multiple <code>&quot;croak&quot;</code> are mixed.</p><p><em>Return the minimum number of</em> different <em>frogs to finish all the croaks in the given string.</em></p><p>A valid <code>&quot;croak&quot;</code> means a frog is printing five letters <code>&#39;c&#39;</code>, <code>&#39;r&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;a&#39;</code>, and <code>&#39;k&#39;</code> <strong>sequentially</strong>. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid <code>&quot;croak&quot;</code> return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: croakOfFrogs = &quot;croakcroak&quot;</p><p>Output: 1</p><p>Explanation: One frog yelling &quot;croak**&quot;** twice.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: croakOfFrogs = &quot;crcoakroak&quot;</p><p>Output: 2</p><p>Explanation: The minimum number of frogs is two.</p><p>The first frog could yell &quot;<strong>cr</strong> c<strong>oak</strong> roak&quot;.</p><p>The second frog could yell later &quot;cr<strong>c</strong> oak<strong>roak</strong> &quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: croakOfFrogs = &quot;croakcrook&quot;</p><p>Output: -1</p><p>Explanation: The given string is an invalid combination of &quot;croak**&quot;** from different frogs.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= croakOfFrogs.length &lt;= 10^5</code></li><li><code>croakOfFrogs</code> is either <code>&#39;c&#39;</code>, <code>&#39;r&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;a&#39;</code>, or <code>&#39;k&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>croakOfFrogs</code>，它表示不同青蛙发出的蛙鸣声（字符串 <code>&quot;croak&quot;</code> ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 <code>croakOfFrogs</code> 中会混合多个 <code>“croak”</code></p><p>请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。</p><p>要想发出蛙鸣 &quot;croak&quot;，青蛙必须 <strong>依序</strong> 输出 <code>‘c’, ’r’, ’o’, ’a’, ’k’</code> 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。如果字符串 <code>croakOfFrogs</code> 不是由若干有效的 &quot;croak&quot; 字符混合而成，请返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> croakOfFrogs = &quot;croakcroak&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 一只青蛙 “呱呱” 两次</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> croakOfFrogs = &quot;crcoakroak&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 最少需要两只青蛙，“呱呱” 声用黑体标注</p><p>第一只青蛙 &quot;<strong>cr</strong> c<strong>oak</strong> roak&quot;</p><p>第二只青蛙 &quot;cr<strong>c</strong> oak<strong>roak</strong> &quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> croakOfFrogs = &quot;croakcrook&quot;</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 给出的字符串不是 <strong>&quot;croak&quot;</strong> 的有效组合。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= croakOfFrogs.length &lt;= 10^5</code></li><li>字符串中的字符只有 <code>&#39;c&#39;</code>, <code>&#39;r&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;a&#39;</code> 或者 <code>&#39;k&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>维护五个计数器，分别表示有多少个字符 <code>&#39;c&#39;</code>、<code>&#39;r&#39;</code>、<code>&#39;o&#39;</code>、<code>&#39;a&#39;</code> 和 <code>&#39;k&#39;</code>。这五个字符必须按照 <code>&quot;croak&quot;</code> 的顺序出现，所以每当一个字符出现时，要检查它的前置字符是否有足够的数量。</p></li><li><p>使用变量 <code>frogs</code> 和 <code>maxFrogs</code> 来跟踪在处理过程中，正在发声的青蛙数量及其最大值。</p></li><li><p>遍历字符串</p></li></ol><ul><li>每次遇到 <code>&#39;c&#39;</code> 时，意味着有一只新的青蛙开始发声，<code>frogs++</code>；</li><li>当遇到 <code>&#39;k&#39;</code> 时，表示一次完整的 <code>&quot;croak&quot;</code> 结束，<code>frogs--</code>；</li><li>遇到每个字符都需要检查相应的前置字符是否有足够的数量；</li></ul><ol start="3"><li>边界情况</li></ol><ul><li>如果在处理过程中，某个字符的数量超过了它前一个字符的数量，说明字符顺序错乱，返回 <code>-1</code>。</li><li>最后，如果 <code>frogs</code> 没有被正确清零，说明还有未完整结束的发声，也返回 <code>-1</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。只需遍历字符串一次，更新字符计数器。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量的额外空间来存储字符计数器和变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">croakOfFrogs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minNumberOfFrogs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">croakOfFrogs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">k</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> frogs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxFrogs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> croakOfFrogs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			frogs<span class="token operator">++</span><span class="token punctuation">;</span>
			maxFrogs <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxFrogs<span class="token punctuation">,</span> frogs<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			frogs<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token operator">!</span><span class="token punctuation">(</span>
				count<span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
				count<span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
				count<span class="token punctuation">[</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> count<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
				count<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> count<span class="token punctuation">[</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">]</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> frogs <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> maxFrogs <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2406",-1),O=n("td",{style:{"text-align":"left"}},"将区间分为最少组数",-1),F={style:{"text-align":"center"}},w={style:{"text-align":"left"}},E=n("code",null,"贪心",-1),I=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),T=n("code",null,"3+",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"};function B(R,M){const p=c("font"),t=c("RouterLink"),e=c("ExternalLinkIcon");return l(),i("div",null,[g,n("p",null,[s("🟠 "),o(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),o(t,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s(),o(t,{to:"/tag/counting.html"},{default:a(()=>[h]),_:1}),s("  🔗 "),n("a",f,[b,o(e)]),s(),n("a",v,[_,o(e)])]),q,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,O,n("td",F,[o(t,{to:"/problem/2406.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",w,[o(t,{to:"/tag/greedy.html"},{default:a(()=>[E]),_:1}),s(),o(t,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),s(),o(t,{to:"/tag/two-pointers.html"},{default:a(()=>[N]),_:1}),s(),T]),C,n("td",L,[n("a",V,[s("🀄️"),o(e)]),s(),n("a",j,[s("🔗"),o(e)])])])])])])}const S=r(k,[["render",B],["__file","1419.html.vue"]]);export{S as default};
