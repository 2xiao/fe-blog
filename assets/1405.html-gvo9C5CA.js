import{_ as l,r as c,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fqckLmln.js";const k={},b=n("h1",{id:"_1405-最长快乐字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1405-最长快乐字符串","aria-hidden":"true"},"#"),s(" 1405. 最长快乐字符串")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"字符串",-1),m=n("code",null,"堆（优先队列）",-1),v={href:"https://leetcode.cn/problems/longest-happy-string",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-happy-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A string <code>s</code> is called <strong>happy</strong> if it satisfies the following conditions:</p><ul><li><code>s</code> only contains the letters <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, and <code>&#39;c&#39;</code>.</li><li><code>s</code> does not contain any of <code>&quot;aaa&quot;</code>, <code>&quot;bbb&quot;</code>, or <code>&quot;ccc&quot;</code> as a substring.</li><li><code>s</code> contains <strong>at most</strong> <code>a</code> occurrences of the letter <code>&#39;a&#39;</code>.</li><li><code>s</code> contains <strong>at most</strong> <code>b</code> occurrences of the letter <code>&#39;b&#39;</code>.</li><li><code>s</code> contains <strong>at most</strong> <code>c</code> occurrences of the letter <code>&#39;c&#39;</code>.</li></ul><p>Given three integers <code>a</code>, <code>b</code>, and <code>c</code>, return <em>the<strong>longest possible happy</strong> string</em>. If there are multiple longest happy strings, return <em>any of them</em>. If there is no such string, return <em>the empty string</em><code>&quot;&quot;</code>.</p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = 1, b = 1, c = 7</p><p>Output: &quot;ccaccbcc&quot;</p><p>Explanation: &quot;ccbccacc&quot; would also be a correct answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = 7, b = 1, c = 0</p><p>Output: &quot;aabaa&quot;</p><p>Explanation: It is the only correct answer in this case.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= a, b, c &lt;= 100</code></li><li><code>a + b + c &gt; 0</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果字符串中不含有任何 <code>&#39;aaa&#39;</code>，<code>&#39;bbb&#39;</code> 或 <code>&#39;ccc&#39;</code> 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。</p><p>给你三个整数 <code>a</code>，<code>b</code> ，<code>c</code>，请你返回 <strong>任意一个</strong> 满足下列全部条件的字符串 <code>s</code>：</p><ul><li><code>s</code> 是一个尽可能长的快乐字符串。</li><li><code>s</code> 中 <strong>最多</strong> 有<code>a</code> 个字母 <code>&#39;a&#39;</code>、<code>b</code> 个字母 <code>&#39;b&#39;</code>、<code>c</code> 个字母 <code>&#39;c&#39;</code> 。</li><li><code>s </code>中只含有 <code>&#39;a&#39;</code>、<code>&#39;b&#39;</code> 、<code>&#39;c&#39;</code> 三种字母。</li></ul><p>如果不存在这样的字符串 <code>s</code> ，请返回一个空字符串 <code>&quot;&quot;</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> a = 1, b = 1, c = 7</p><p><strong>输出：</strong> &quot;ccaccbcc&quot;</p><p><strong>解释：</strong> &quot;ccbccacc&quot; 也是一种正确答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = 2, b = 2, c = 1</p><p><strong>输出：</strong> &quot;aabbc&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> a = 7, b = 1, c = 0</p><p><strong>输出：</strong> &quot;aabaa&quot;</p><p><strong>解释：</strong> 这是该测试用例的唯一正确答案。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= a, b, c &lt;= 100</code></li><li><code>a + b + c &gt; 0</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以归类为<strong>贪心算法</strong>。核心思路是<strong>优先使用次数最多的字符</strong>，但要避免产生连续三个相同的字符。</p><ol><li><strong>模拟构建字符串</strong>： 维护三个变量 <code>a</code>, <code>b</code>, 和 <code>c</code>，分别表示每个字符的剩余次数。</li><li><strong>排序选择最大字符</strong>：每次都对按照前剩余次数从大到小排序，优先选择剩余次数最多的字符进行拼接。</li><li><strong>贪心策略</strong>：每次选择剩余次数最多的字符加入结果，如果该字符已经连续出现两次，则选择剩余次数第二多的字符，确保不会连续出现三个相同字符。</li><li><strong>停止条件</strong>：当不能再添加任何字符时，即无法选择下一个合法字符（例如所有字符都已经使用完，或者剩下的字符会导致违背&quot;连续不重复三次&quot;的规则），则停止构建。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>a + b + c</code>，最多进行 <code>a + b + c</code> 次字符加入操作，每次加入时只需进行最多三次的比较和选择。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，构建了一个最大长度为 <code>a + b + c</code> 的结果字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestDiverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> chars <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span> <span class="token literal-property property">char</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> a <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span> <span class="token literal-property property">char</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> b <span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span> <span class="token literal-property property">char</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> c <span class="token punctuation">}</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 按照 count 从大到小排序</span>
		chars<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>count <span class="token operator">-</span> a<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> added <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> char <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>char<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

			<span class="token comment">// 如果最后两个字符和当前字符一样，跳过</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				str<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span>
				str<span class="token punctuation">[</span>str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> char <span class="token operator">&amp;&amp;</span>
				str<span class="token punctuation">[</span>str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> char
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 否则将它加到 str 末尾</span>
			str <span class="token operator">=</span> str <span class="token operator">+</span> char<span class="token punctuation">;</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
			added <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 当不能再添加任何字符时，停止循环</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>added<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"767",-1),E=n("td",{style:{"text-align":"left"}},"重构字符串",-1),I=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),N=n("code",null,"哈希表",-1),V=n("code",null,"字符串",-1),O=n("code",null,"3+",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/reorganize-string",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/reorganize-string",target:"_blank",rel:"noopener noreferrer"};function R(S,D){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[b,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",v,[_,a(o)]),s(),n("a",y,[f,a(o)])]),q,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,E,I,n("td",C,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[V]),_:1}),s(),O]),j,n("td",B,[n("a",z,[s("🀄️"),a(o)]),s(),n("a",A,[s("🔗"),a(o)])])])])])])}const M=l(k,[["render",R],["__file","1405.html.vue"]]);export{M as default};
