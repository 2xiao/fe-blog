import{_ as p,r as a,o as c,c as r,a as n,b as s,d as t,w as l,e as i}from"./app-fqckLmln.js";const u={},d=n("h1",{id:"_2796-重复字符串-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2796-重复字符串-🔒","aria-hidden":"true"},"#"),s(" 2796. 重复字符串 🔒")],-1),m={href:"https://leetcode.cn/problems/repeat-string",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/repeat-string",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all strings such that you can call the <code>string.replicate(x)</code> method on any string and it will return repeated string <code>x</code> times.</p><p>Try to implement it without using the built-in method <code>string.repeat</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: str = &quot;hello&quot;, times = 2</p><p>Output: &quot;hellohello&quot;</p><p>Explanation: &quot;hello&quot; is repeated 2 times</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: str = &quot;code&quot;, times = 3</p><p>Output: &quot;codecodecode&quot;</p><p>Explanation: &quot;code&quot; is repeated 3 times</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: str = &quot;js&quot;, times = 1</p><p>Output: &quot;js&quot;</p><p>Explanation: &quot;js&quot; is repeated 1 time</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= times &lt;= 10^5</code></li><li><code>1 &lt;= str.length &lt;= 1000</code></li></ul><p><strong>Follow up:</strong> Let&#39;s assume, for the sake of simplifying analysis, that concatenating strings is a constant time operation <code>O(1)</code>. With this assumption in mind, can you write an algorithm with a runtime complexity of <code>O(log n)</code>?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写代码实现字符串方法 <code>string.replicate(x)</code> ，它将返回重复的字符串 <code>x</code> 次。</p><p>请尝试在不使用内置方法 <code>string.repeat</code> 的情况下实现它。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> str = &quot;hello&quot;, times = 2</p><p><strong>输出：</strong> &quot;hellohello&quot;</p><p><strong>解释：</strong> &quot;hello&quot; 被重复了 2 次</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> str = &quot;code&quot;, times = 3</p><p><strong>输出：</strong> codecodecode&quot;</p><p><strong>解释：</strong> &quot;code&quot; 被重复了 3 次</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> str = &quot;js&quot;, times = 1</p><p><strong>输出：</strong> &quot;js&quot;</p><p><strong>解释：</strong> &quot;js&quot; 被重复了 1 次</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= times &lt;= 10^5</code></li><li><code>1 &lt;= str.length &lt;= 1000</code></li></ul><p><strong>进阶</strong> ：为了简化分析，让我们假设连接字符串是一个常数时间操作 <code>O(1)</code>。考虑到这个假设，您能编写时间复杂度为 <code>O(log n)</code> 的算法吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>创建 <code>result</code> 变量用于存放最终结果，<code>curStr</code> 变量为字符串的副本，用于倍增操作。</li><li>通过检查 <code>times</code> 是否为奇数，决定是否将 <code>curStr</code> 添加到 <code>result</code>。如果 <code>times</code> 是奇数，需要添加一个 <code>curStr</code>。</li><li>每次循环都将 <code>curStr</code> 自我翻倍，并将 <code>times</code> 除以 2，直到 <code>times == 0</code>，这样每次倍增 <code>curStr</code> 时都将工作量减半。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n = times</code>，因为每次循环 <code>times</code> 都会减半。</li><li><strong>空间复杂度</strong>：<code>O(str.length * times)</code>，用于存储最终的重复字符串，即最终返回的字符串长度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">times</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">replicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">times</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		curStr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>times <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果 times 是奇数，添加当前字符串到结果</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>times <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">+=</span> curStr<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将当前字符串翻倍</span>
		curStr <span class="token operator">+=</span> curStr<span class="token punctuation">;</span>

		<span class="token comment">// 对 times 进行整除 2 操作</span>
		times <span class="token operator">=</span> <span class="token punctuation">(</span>times <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function v(q,_){const o=a("font"),e=a("ExternalLinkIcon");return c(),r("div",null,[d,n("p",null,[s("🟢 "),t(o,{color:"#15bd66"},{default:l(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",m,[k,t(e)]),s(),n("a",h,[g,t(e)])]),b])}const x=p(u,[["render",v],["__file","2796.html.vue"]]);export{x as default};
