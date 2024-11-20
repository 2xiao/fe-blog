import{_ as o,r as e,o as c,c as l,a as n,b as s,d as a,w as u,e as i}from"./app-BBnmDgJV.js";const r={},d=n("h1",{id:"_2803-阶乘生成器-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2803-阶乘生成器-🔒","aria-hidden":"true"},"#"),s(" 2803. 阶乘生成器 🔒")],-1),k={href:"https://leetcode.cn/problems/factorial-generator",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/factorial-generator",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a generator function that takes an integer <code>n</code> as an argument and returns a generator object which yields the <strong>factorial sequence</strong>.</p><p>The <strong>factorial sequence</strong> is defined by the relation <code>n! = n * (n-1) * (n-2) * ... * 2 * 1​​​.</code></p><p>The factorial of 0 is defined as 1.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5</p><p>Output: [1,2,6,24,120]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 6</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 24</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: [1,2]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 0</p><p>Output: [1]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 18</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个生成器函数，该函数以一个整数 <code>n</code> 作为参数，并返回一个生成器对象，该生成器对象可以生成 <strong>阶乘序列</strong> 。</p><p><strong>阶乘序列</strong> 的定义如下：<code>n! = n * (n-1) * (n-2) * ... * 2 * 1</code> 。</p><p>0 的阶乘被定义为 1。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong>[1,2,6,24,120]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 6</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 24</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong>[1,2]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong>[1]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 18</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以创建一个生成器函数 <code>factorialGenerator</code>，它接收一个整数 <code>n</code> 作为参数，并生成从 <code>0!</code> 到 <code>n!</code> 的阶乘序列。</p><ol><li>初始化一个变量 <code>res</code> 为 <code>1</code>（即 <code>0!</code> 的值）。</li><li>当 <code>n = 0</code> 时，直接 <code>yield res</code>。</li><li>使用 <code>for</code> 循环从 <code>1</code> 到 <code>n</code>，每次生成器调用 <code>next()</code> 时，都根据阶乘定义计算并更新阶乘值 <code>res *= i</code>，并返回当前的阶乘值。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">factorial</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">yield</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">*=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">yield</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function f(h,x){const p=e("font"),t=e("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:u(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[v,a(t)]),s(),n("a",m,[g,a(t)])]),b])}const j=o(r,[["render",f],["__file","2803.html.vue"]]);export{j as default};
