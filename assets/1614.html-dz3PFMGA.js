import{_ as r,r as c,o as l,c as d,a as n,b as s,d as e,w as t,f as i,e as u}from"./app-3dvbhwow.js";const h={},g=n("h1",{id:"_1614-括号的最大嵌套深度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1614-括号的最大嵌套深度","aria-hidden":"true"},"#"),s(" 1614. 括号的最大嵌套深度")],-1),m=n("code",null,"栈",-1),k=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),b=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>valid parentheses string</strong> <code>s</code>, return the <strong>nesting depth</strong> of <code>s</code>. The nesting depth is the <strong>maximum</strong> number of nested parentheses.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> <code>s = &quot;(1+(2*3)+((8)/4))+1&quot;</code></p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>Digit 8 is inside of 3 nested parentheses in the string.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> <code>s = &quot;(1)+((2))+(((3)))&quot;</code></p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>Digit 3 is inside of 3 nested parentheses in the string.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> <code>s = &quot;()(())((()()))&quot;</code></p><p><strong>Output:</strong> 3</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists of digits <code>0-9</code> and characters <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, <code>&#39;/&#39;</code>, <code>&#39;(&#39;</code>, and <code>&#39;)&#39;</code>.</li><li>It is guaranteed that parentheses expression <code>s</code> is a VPS.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <strong>有效括号字符串</strong> <code>s</code>，返回 <code>s</code> 的 <strong>嵌套深度</strong> 。嵌套深度是嵌套括号的 <strong>最大</strong> 数量。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> <code>s = &quot;(1+(2*3)+((8)/4))+1&quot;</code></p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 数字 8 在嵌套的 3 层括号中。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> <code>s = &quot;(1)+((2))+(((3)))&quot;</code></p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 数字 3 在嵌套的 3 层括号中。</p><p><strong>示例 3：</strong></p><p><strong>输入：</strong> <code>s = &quot;()(())((()()))&quot;</code></p><p><strong>输出：</strong> 3</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 由数字 <code>0-9</code> 和字符 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code>、<code>&#39;/&#39;</code>、<code>&#39;(&#39;</code>、<code>&#39;)&#39;</code> 组成</li><li>题目数据保证括号字符串 <code>s</code> 是 <strong>有效的括号字符串</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要计算字符串 <code>s</code> 中嵌套括号的最大深度，可以通过遍历字符串，维护一个计数器来实现。</p><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>depth</code>：表示当前括号嵌套的深度。</li><li><code>maxDepth</code>：记录遍历过程中遇到的最大深度。</li></ul></li><li><p><strong>遍历字符串</strong>：</p><ul><li>当遇到 <code>&#39;(&#39;</code> 时，当前深度 <code>depth</code> 增加 1，并更新 <code>maxDepth</code> 为当前 <code>depth</code> 和 <code>maxDepth</code> 的较大值。</li><li>当遇到 <code>&#39;)&#39;</code> 时，当前深度 <code>depth</code> 减少 1。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，<code>maxDepth</code> 即为字符串中的最大嵌套深度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为字符串的长度，需要遍历字符串一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量 <code>depth</code> 和 <code>maxDepth</code>，不需要额外的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxDepth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			depth<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 当前深度增加</span>
			maxDepth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>depth<span class="token punctuation">,</span> maxDepth<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大深度</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			depth<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 当前深度减少</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> maxDepth<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,40),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1111",-1),q=n("td",{style:{"text-align":"left"}},"有效括号的嵌套深度",-1),D=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=n("code",null,"栈",-1),V=n("code",null,"字符串",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return l(),d("div",null,[g,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",_,[f,e(a)]),s(),n("a",v,[x,e(a)])]),b,i(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,D,n("td",E,[e(o,{to:"/tag/stack.html"},{default:t(()=>[I]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:t(()=>[V]),_:1})]),C,n("td",L,[n("a",N,[s("🀄️"),e(a)]),s(),n("a",O,[s("🔗"),e(a)])])])])])])}const T=r(h,[["render",j],["__file","1614.html.vue"]]);export{T as default};
