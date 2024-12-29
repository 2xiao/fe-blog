import{_ as d,r as c,o as i,c as p,a as e,b as n,d as t,w as s,f as r,e as u}from"./app-r0ql_Osa.js";const h={},m=e("h1",{id:"_921-使括号有效的最少添加",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_921-使括号有效的最少添加","aria-hidden":"true"},"#"),n(" 921. 使括号有效的最少添加")],-1),k=e("code",null,"栈",-1),g=e("code",null,"贪心",-1),_=e("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A parentheses string is valid if and only if:</p><ul><li>It is the empty string,</li><li>It can be written as <code>AB</code> (<code>A</code> concatenated with <code>B</code>), where <code>A</code> and <code>B</code> are valid strings, or</li><li>It can be written as <code>(A)</code>, where <code>A</code> is a valid string.</li></ul><p>You are given a parentheses string <code>s</code>. In one move, you can insert a parenthesis at any position of the string.</p><ul><li>For example, if <code>s = &quot;()))&quot;</code>, you can insert an opening parenthesis to be <code>&quot;(**(**)))&quot;</code> or a closing parenthesis to be <code>&quot;())**)**)&quot;</code>.</li></ul><p>Return <em>the minimum number of moves required to make</em><code>s</code> <em>valid</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = <code>&quot;())&quot;</code></p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = <code>&quot;(((&quot;</code></p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s[i]</code> is either <code>&#39;(&#39;</code> or <code>&#39;)&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>只有满足下面几点之一，括号字符串才是有效的：</p><ul><li>它是一个空字符串，或者</li><li>它可以被写成 <code>AB</code> （<code>A</code> 与 <code>B</code> 连接）, 其中 <code>A</code> 和 <code>B</code> 都是有效字符串，或者</li><li>它可以被写作 <code>(A)</code>，其中 <code>A</code> 是有效字符串。</li></ul><p>给定一个括号字符串 <code>s</code> ，在每一次操作中，你都可以在字符串的任何位置插入一个括号</p><ul><li>例如，如果 <code>s = &quot;()))&quot;</code> ，你可以插入一个开始括号为 <code>&quot;(()))&quot;</code> 或结束括号为 <code>&quot;())))&quot;</code> 。</li></ul><p>返回 <em>为使结果字符串<code>s</code> 有效而必须添加的最少括号数</em>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = <code>&quot;())&quot;</code></p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = <code>&quot;(((&quot;</code></p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> 只包含 <code>&#39;(&#39;</code> 和 <code>&#39;)&#39;</code> 字符。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化两个变量</strong>：</p><ul><li><code>needLeft</code>：未匹配的左括号数，初始值为 0。</li><li><code>needRight</code>：需要的右括号数，初始值为 0。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>对于每个字符： <ul><li>如果是左括号 <code>&#39;(&#39;</code>，将 <code>needLeft</code> 变量加 1。</li><li>如果是右括号 <code>&#39;)&#39;</code>： <ul><li>如果存在未匹配的左括号（即 <code>needLeft &gt; 0</code>），则减少 <code>needLeft</code>，因为找到了一个右括号可以与之匹配。</li><li>否则，增加 <code>needRight</code>，因为这是一个未匹配的右括号。</li></ul></li></ul></li></ul></li><li><p><strong>最终结果</strong>：</p><ul><li>遍历完成后，剩余的 <code>needLeft</code> 表示未匹配的左括号，<code>needRight</code> 表示未匹配的右括号。两者之和就是需要添加的括号数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>:<code> O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。我们只需要遍历字符串一次。</li><li><strong>空间复杂度</strong>:<code> O(1)</code>，因为我们只使用了两个计数器变量 <code>needLeft</code> 和 <code>needRight</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minAddToMakeValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> needLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 记录左括号的需求量</span>
		needRight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录右括号的需求量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 对右括号的需求 + 1</span>
			needRight<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>needRight <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 对右括号的需求 - 1</span>
				needRight<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// 需插入一个左括号</span>
				needLeft<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> needLeft <span class="token operator">+</span> needRight<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"1963",-1),L=e("td",{style:{"text-align":"left"}},"使字符串平衡的最小交换次数",-1),A={style:{"text-align":"center"}},R={style:{"text-align":"left"}},B=e("code",null,"栈",-1),I=e("code",null,"贪心",-1),V=e("code",null,"双指针",-1),C=e("code",null,"1+",-1),E=e("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/minimum-number-of-swaps-to-make-the-string-balanced",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced",target:"_blank",rel:"noopener noreferrer"};function M(T,F){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),p("div",null,[m,e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(o,{to:"/tag/stack.html"},{default:s(()=>[k]),_:1}),n(),t(o,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[_]),_:1}),n("  🔗 "),e("a",b,[v,t(a)]),n(),e("a",f,[y,t(a)])]),x,r(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[w,L,e("td",A,[t(o,{to:"/problem/1963.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",R,[t(o,{to:"/tag/stack.html"},{default:s(()=>[B]),_:1}),n(),t(o,{to:"/tag/greedy.html"},{default:s(()=>[I]),_:1}),n(),t(o,{to:"/tag/two-pointers.html"},{default:s(()=>[V]),_:1}),n(),C]),E,e("td",N,[e("a",O,[n("🀄️"),t(a)]),n(),e("a",j,[n("🔗"),t(a)])])])])])])}const Y=d(h,[["render",M],["__file","0921.html.vue"]]);export{Y as default};
