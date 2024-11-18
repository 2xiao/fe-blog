import{_ as r,r as t,o as p,c,a as n,b as s,d as e,w as l,e as i}from"./app-5LzGvT4H.js";const d={},u=n("h1",{id:"_2703-返回传递的参数的长度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2703-返回传递的参数的长度","aria-hidden":"true"},"#"),s(" 2703. 返回传递的参数的长度")],-1),g={href:"https://leetcode.cn/problems/return-length-of-arguments-passed",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/return-length-of-arguments-passed",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"LeetCode",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function <code>argumentsLength</code> that returns the count of arguments passed to it.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: args = [5]</p><p>Output: 1</p><p>Explanation:</p><p>argumentsLength(5); // 1</p><p>One value was passed to the function so it should return 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: args = [{}, null, &quot;3&quot;]</p><p>Output: 3</p><p>Explanation:</p><p>argumentsLength({}, null, &quot;3&quot;); // 3</p><p>Three values were passed to the function so it should return 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>args</code> is a valid JSON array</li><li><code>0 &lt;= args.length &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数 <code>argumentsLength</code>，返回传递给该函数的参数数量。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> args = [5]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>argumentsLength(5); // 1</p><p>只传递了一个值给函数，因此它应返回 1。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> args = [{}, null, &quot;3&quot;]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>argumentsLength({}, null, &quot;3&quot;); // 3</p><p>传递了三个值给函数，因此它应返回 3。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>args</code> 是一个有效的 JSON 数组</li><li><code>0 &lt;= args.length &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求非常简单，主要考察对函数参数的处理。在 JavaScript 中，所有函数内部都有一个特殊的对象 <code>arguments</code>，它是一个类数组对象，包含所有传递给该函数的参数。</p><p>可以使用 <code>arguments.length</code> 来直接获取传递的参数数量。</p><ol><li><strong><code>...args</code></strong>：这是<strong>剩余参数</strong>语法，它允许我们将函数的所有参数收集到一个数组中。</li><li><strong><code>args.length</code></strong>：返回收集到的参数数组的长度，即传递给函数的参数数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为只是在计算参数数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅存储了函数的参数长度，不需要额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token operator">|</span>boolean<span class="token operator">|</span>number<span class="token operator">|</span>string<span class="token operator">|</span>Array<span class="token operator">|</span>Object<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">args</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">argumentsLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * argumentsLength(1, 2, 3); // 3
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function v(_,f){const o=t("font"),a=t("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("🟢 "),e(o,{color:"#15bd66"},{default:l(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",g,[h,e(a)]),s(),n("a",m,[k,e(a)])]),b])}const q=r(d,[["render",v],["__file","2703.html.vue"]]);export{q as default};
