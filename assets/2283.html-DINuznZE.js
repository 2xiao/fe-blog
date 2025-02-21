import{_ as l,r as c,o as i,c as u,a as n,b as e,d as s,w as t,f as r,e as d}from"./app-9CeBk-uV.js";const m={},h=n("h1",{id:"_2283-判断一个数的数字计数是否等于数位的值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2283-判断一个数的数字计数是否等于数位的值","aria-hidden":"true"},"#"),e(" 2283. 判断一个数的数字计数是否等于数位的值")],-1),k=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),f=n("code",null,"计数",-1),_={href:"https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string <code>num</code> of length <code>n</code> consisting of digits.</p><p>Return <code>true</code> _if for <strong>every</strong> index _<code>i</code> <em>in the range</em> <code>0 &lt;= i &lt; n</code> <em>, the digit</em><code>i</code> <em>occurs</em><code>num[i]</code><em>times in</em><code>num</code> <em>, otherwise return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = &quot;1210&quot;</p><p>Output: true</p><p>Explanation:</p><p>num[0] = &#39;1&#39;. The digit 0 occurs once in num.</p><p>num[1] = &#39;2&#39;. The digit 1 occurs twice in num.</p><p>num[2] = &#39;1&#39;. The digit 2 occurs once in num.</p><p>num[3] = &#39;0&#39;. The digit 3 occurs zero times in num.</p><p>The condition holds true for every index in &quot;1210&quot;, so return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = &quot;030&quot;</p><p>Output: false</p><p>Explanation:</p><p>num[0] = &#39;0&#39;. The digit 0 should occur zero times, but actually occurs twice in num.</p><p>num[1] = &#39;3&#39;. The digit 1 should occur three times, but actually occurs zero times in num.</p><p>num[2] = &#39;0&#39;. The digit 2 occurs zero times in num.</p><p>The indices 0 and 1 both violate the condition, so return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == num.length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>num</code> consists of digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的字符串 <code>num</code> ，它只包含数字。</p><p>如果对于 <strong>每个</strong> <code>0 &lt;= i &lt; n</code> 的下标 <code>i</code> ，都满足数位 <code>i</code> 在 <code>num</code> 中出现了 <code>num[i]</code>次，那么请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;1210&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>num[0] = &#39;1&#39; 。数字 0 在 num 中出现了一次。</p><p>num[1] = &#39;2&#39; 。数字 1 在 num 中出现了两次。</p><p>num[2] = &#39;1&#39; 。数字 2 在 num 中出现了一次。</p><p>num[3] = &#39;0&#39; 。数字 3 在 num 中出现了零次。</p><p>&quot;1210&quot; 满足题目要求条件，所以返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;030&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>num[0] = &#39;0&#39; 。数字 0 应该出现 0 次，但是在 num 中出现了两次。</p><p>num[1] = &#39;3&#39; 。数字 1 应该出现 3 次，但是在 num 中出现了零次。</p><p>num[2] = &#39;0&#39; 。数字 2 在 num 中出现了 0 次。</p><p>下标 0 和 1 都违反了题目要求，所以返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == num.length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>num</code> 只包含数字。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频率</strong>：</p><ul><li>使用一个长度为 10 的数组 <code>freq</code>（因为数字范围是 0-9），记录每个数字在字符串中的出现次数。</li><li>遍历字符串，逐一更新 <code>freq</code> 中对应索引的位置。</li></ul></li><li><p><strong>验证条件</strong>：</p><ul><li>遍历字符串的每个字符，根据索引 <code>i</code> 和字符串值 <code>num[i]</code> 进行验证： <ul><li>如果 <code>freq[i]</code> 不等于 <code>num[i]</code> 的数值形式，返回 <code>false</code>。</li></ul></li><li>如果所有索引都满足条件，返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串长度。需要两次遍历，第一次遍历字符串统计频率，第二次遍历字符串验证每个字符是否符合条件。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，频率数组 <code>freq</code> 长度为常数 10。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">digitCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化频率数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">[</span><span class="token function">Number</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 统计每个数字的频率</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>freq<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 验证频率是否符合要求</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 所有条件均满足</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"728",-1),T=n("td",{style:{"text-align":"left"}},"自除数",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=n("code",null,"数学",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/self-dividing-numbers",target:"_blank",rel:"noopener noreferrer"};function O(j,B){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[e("🟢 "),s(p,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(a,{to:"/tag/hash-table.html"},{default:t(()=>[k]),_:1}),e(),s(a,{to:"/tag/string.html"},{default:t(()=>[g]),_:1}),e(),s(a,{to:"/tag/counting.html"},{default:t(()=>[f]),_:1}),e("  🔗 "),n("a",_,[b,s(o)]),e(),n("a",v,[x,s(o)])]),y,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,T,n("td",E,[s(a,{to:"/problem/0728.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/math.html"},{default:t(()=>[C]),_:1})]),L,n("td",V,[n("a",z,[e("🀄️"),s(o)]),e(),n("a",I,[e("🔗"),s(o)])])])])])])}const A=l(m,[["render",O],["__file","2283.html.vue"]]);export{A as default};
