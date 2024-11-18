import{_ as p,r as e,o as c,c as l,a as n,b as s,d as a,w as i,e as u}from"./app-5LzGvT4H.js";const d={},r=n("h1",{id:"_2805-自定义间隔-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2805-自定义间隔-🔒","aria-hidden":"true"},"#"),s(" 2805. 自定义间隔 🔒")],-1),k={href:"https://leetcode.cn/problems/custom-interval",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/custom-interval",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>Function</strong> <code>customInterval</code></p><p>Given a function <code>fn</code>, a number <code>delay</code> and a number <code>period</code>, return a number <code>id</code>.</p><p><code>customInterval</code> is a function that should execute the provided function <code>fn</code> at intervals based on a linear pattern defined by the formula <code>delay + period * count</code>.</p><p>The <code>count</code> in the formula represents the number of times the interval has been executed starting from an initial value of <code>0</code>.</p><p><strong>Function</strong> <code>customClearInterval</code></p><p>Given the <code>id</code>. <code>id</code> is the returned value from the function <code>customInterval</code>.</p><p><code>customClearInterval</code> should stop executing provided function <code>fn</code> at intervals.</p><p><strong>Note:</strong> The <code>setTimeout</code> and <code>setInterval</code> functions in Node.js return an object, not a number.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: delay = 50, period = 20, cancelTime = 225</p><p>Output: [50,120,210]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> t <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">customInterval</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> period<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token function">customClearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">225</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>50 + 20 * 0 = 50 // 50ms - 1st function call</p><p>50 + 20 * 1 = 70 // 50ms + 70ms = 120ms - 2nd function call</p><p>50 + 20 * 2 = 90 // 50ms + 70ms + 90ms = 210ms - 3rd function call</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: delay = 20, period = 20, cancelTime = 150</p><p>Output: [20,60,120]</p><p>Explanation:</p><p>20 + 20 * 0 = 20 // 20ms - 1st function call</p><p>20 + 20 * 1 = 40 // 20ms + 40ms = 60ms - 2nd function call</p><p>20 + 20 * 2 = 60 // 20ms + 40ms + 60ms = 120ms - 3rd function call</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: delay = 100, period = 200, cancelTime = 500</p><p>Output: [100,400]</p><p>Explanation:</p><p>100 + 200 * 0 = 100 // 100ms - 1st function call</p><p>100 + 200 * 1 = 300 // 100ms + 300ms = 400ms - 2nd function call</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>20 &lt;= delay, period &lt;= 250</code></li><li><code>20 &lt;= cancelTime &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>函数</strong> <code>customInterval</code></p><p>给定一个函数 <code>fn</code>、一个数字 <code>delay</code> 和一个数字 <code>period</code>，返回一个数字 <code>id</code>。<code>customInterval</code> 是一个函数，它应该根据公式 <code>delay + period * count</code> 在间隔中执行提供的函数 <code>fn</code>，公式中的 <code>count</code> 表示从初始值 <code>0</code> 开始执行间隔的次数。</p><p><strong>函数</strong> <code>customClearInterval</code></p><p>给定 <code>id</code>。<code>id</code> 是从函数 <code>customInterval</code> 返回的值。<code>customClearInterval</code> 应该停止在间隔中执行提供的函数 <code>fn</code>。</p><p><strong>注意：</strong> 在 Node.js 中，<code>setTimeout</code> 和 <code>setInterval</code> 函数返回一个对象，而不是一个数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> delay = 50, period = 20, stopTime = 225</p><p><strong>输出：</strong>[50,120,210]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> t <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">customInterval</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> period<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token function">customClearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">225</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>50 + 20 * 0 = 50 // 50ms - 第一个函数调用</p><p>50 + 20 * 1 = 70 // 50ms + 70ms = 120ms - 第二个函数调用</p><p>50 + 20 * 2 = 90 // 50ms + 70ms + 90ms = 210ms - 第三个函数调用</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> delay = 20, period = 20, stopTime = 150</p><p><strong>输出：</strong>[20,60,120]</p><p><strong>解释：</strong></p><p>20 + 20 * 0 = 20 // 20ms - 第一个函数调用</p><p>20 + 20 * 1 = 40 // 20ms + 40ms = 60ms - 第二个函数调用</p><p>20 + 20 * 2 = 60 // 20ms + 40ms + 60ms = 120ms - 第三个函数调用</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> delay = 100, period = 200, stopTime = 500</p><p><strong>输出：</strong>[100,400]</p><p><strong>解释：</strong></p><p>100 + 200 * 0 = 100 // 100ms - 第一个函数调用</p><p>100 + 200 * 1 = 300 // 100ms + 300ms = 400ms - 第二个函数调用</p></blockquote><p><strong>提示：</strong></p><ul><li><code>20 &lt;= delay, period &lt;= 250</code></li><li><code>20 &lt;= stopTime &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>自定义定时函数 <code>customInterval</code></strong>:</p><ul><li><code>customInterval</code> 接受 <code>fn</code>、<code>delay</code> 和 <code>period</code>。</li><li>初始化一个 <code>count</code> 变量为 0，用来记录调用次数。</li><li>使用 <code>setTimeout</code> 设置初始延迟为 <code>delay</code> 毫秒。</li><li>在每次调用时，计算下次延迟时间 <code>delay + period * count</code>。</li><li>继续递归调用 <code>setTimeout</code>，并更新 <code>count</code>。</li><li>将 <code>setTimeout</code> 返回的 ID 用哈希表存储起来，以便后续可以清除该定时器。</li><li>返回用于停止调用的唯一标识符 <code>id</code>，让 <code>customClearInterval</code> 可以根据这个 ID 停止定时器。</li></ul></li><li><p><strong>停止定时器 <code>customClearInterval</code></strong>:</p><ul><li><code>customClearInterval</code> 使用 <code>clearTimeout</code> 清除相应的定时器，从而停止调用。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是调用次数，取决于 <code>stopTime</code> 和 <code>period</code>，每次递归调用都会执行 <code>setTimeout</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，每次递归调用哈希表中都需要存储定时器 ID。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> idMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">delay</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">period</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">customClearInterval</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> period</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> curDelay <span class="token operator">=</span> delay <span class="token operator">+</span> period <span class="token operator">*</span> count<span class="token punctuation">;</span>
		idMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
			id<span class="token punctuation">,</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				count<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> curDelay<span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> id <span class="token operator">=</span> Data<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">id</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">customClearInterval</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>idMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>idMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		idMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function g(h,y){const o=e("font"),t=e("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("🟠 "),a(o,{color:"#ffb800"},{default:i(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[m,a(t)]),s(),n("a",v,[b,a(t)])]),f])}const _=p(d,[["render",g],["__file","2805.html.vue"]]);export{_ as default};
