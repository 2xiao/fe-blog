import{_ as s,r as l,o as r,c,a as o,b as n,d as e,w as p,e as d}from"./app-Kkp_66uf.js";const u={},i=o("h1",{id:"_2667-创建-hello-world-函数",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2667-创建-hello-world-函数","aria-hidden":"true"},"#"),n(" 2667. 创建 Hello World 函数")],-1),h={href:"https://leetcode.cn/problems/create-hello-world-function",target:"_blank",rel:"noopener noreferrer"},k=o("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/create-hello-world-function",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function <code>createHelloWorld</code>. It should return a new function that always returns <code>&quot;Hello World&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: args = []</p><p>Output: &quot;Hello World&quot;</p><p>Explanation:</p><p>const f = createHelloWorld();</p><p>f(); // &quot;Hello World&quot;</p><p>The function returned by createHelloWorld should always return &quot;Hello World&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: args = [{},null,42]</p><p>Output: &quot;Hello World&quot;</p><p>Explanation:</p><p>const f = createHelloWorld();</p><p>f({}, null, 42); // &quot;Hello World&quot;</p><p>Any arguments could be passed to the function but it should still always return &quot;Hello World&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= args.length &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个名为 <code>createHelloWorld</code> 的函数。它应该返回一个新的函数，该函数总是返回 <code>&quot;Hello World&quot;</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> args = []</p><p><strong>输出：</strong> &quot;Hello World&quot;</p><p><strong>解释：</strong></p><p>const f = createHelloWorld();</p><p>f(); // &quot;Hello World&quot;</p><p>createHelloWorld 返回的函数应始终返回 &quot;Hello World&quot;。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> args = [{},null,42]</p><p><strong>输出：</strong> &quot;Hello World&quot;</p><p><strong>解释：</strong></p><p>const f = createHelloWorld();</p><p>f({}, null, 42); // &quot;Hello World&quot;</p><p>可以传递任何参数给函数，但它应始终返回 &quot;Hello World&quot;。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= args.length &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的重点在于理解如何创建并返回一个函数，以及 JavaScript 中闭包的基本概念。</p><ol><li>定义一个外部函数 <code>createHelloWorld</code>。</li><li>这个函数返回一个匿名函数，而匿名函数的作用就是返回字符串 <code>&quot;Hello World&quot;</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为函数只进行简单的字符串返回操作，属于常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅仅存储一个字符串，不随输入变化。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createHelloWorld</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const f = createHelloWorld();
 * f(); // &quot;Hello World&quot;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function q(b,v){const a=l("font"),t=l("ExternalLinkIcon");return r(),c("div",null,[i,o("p",null,[n("🟢 "),e(a,{color:"#15bd66"},{default:p(()=>[n("Easy")]),_:1}),n("  🔗 "),o("a",h,[k,e(t)]),n(),o("a",g,[m,e(t)])]),f])}const W=s(u,[["render",q],["__file","2667.html.vue"]]);export{W as default};
