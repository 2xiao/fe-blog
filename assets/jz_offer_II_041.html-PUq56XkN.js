import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as e,e as c}from"./app-9CeBk-uV.js";const r={},k=n("h1",{id:"_41-滑动窗口的平均值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_41-滑动窗口的平均值","aria-hidden":"true"},"#"),s(" 41. 滑动窗口的平均值")],-1),h=n("code",null,"设计",-1),v=n("code",null,"队列",-1),m=n("code",null,"数组",-1),g=n("code",null,"数据流",-1),_={href:"https://leetcode.cn/problems/qIsx9U",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个窗口大小和一个整数数据流，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。</p><p>实现 <code>MovingAverage</code> 类：</p><ul><li><code>MovingAverage(int size)</code> 用窗口大小 <code>size</code> 初始化对象。</li><li><code>double next(int val)</code> 成员函数 <code>next</code> 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 <code>size</code> 个值的移动平均值，即滑动窗口里所有数字的平均值。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong></p><p>inputs = [&quot;MovingAverage&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;, &quot;next&quot;]</p><p>inputs = [[3], [1], [10], [3], [5]]</p><p><strong>输出：</strong></p><p>[null, 1.0, 5.5, 4.66667, 6.0]</p><p><strong>解释：</strong></p><p>MovingAverage movingAverage = new MovingAverage(3);</p><p>movingAverage.next(1); // 返回 1.0 = 1 / 1</p><p>movingAverage.next(10); // 返回 5.5 = (1 + 10) / 2</p><p>movingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3</p><p>movingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= size &lt;= 1000</code></li><li><code>-10^5 &lt;= val &lt;= 10^5</code></li><li>最多调用 <code>next</code> 方法 <code>10^4</code> 次</li></ul>',8),x={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),w=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用队列来做，用一个队列记录数字，用一个变量记录窗口和，每次更新窗口和。</p><ol><li><p><strong>使用队列</strong>：</p><ul><li>为了维护窗口内的数值，可以使用一个队列（数组）来存储最新的 <code>size</code> 个数值。</li><li>每次调用 <code>next(val)</code> 方法时，将新的数值添加到队列中。如果队列的长度超过指定的 <code>size</code>，则移除队列中最旧的数值，以保持队列的长度不超过 <code>size</code>。</li></ul></li><li><p><strong>维护总和</strong>：</p><ul><li>为了快速计算平均值，可以维护一个 <code>sum</code> 变量，记录当前窗口内所有数值的和。</li><li>当添加新的数值时，更新 <code>sum</code>： <ul><li>如果队列未满，将新数值直接添加到队列中，并将其值加到 <code>sum</code>。</li><li>如果队列已满，首先从 <code>sum</code> 中减去队列中最旧的数值（即 <code>shift</code> 操作），然后再将新数值添加到队列中，并将其值加到 <code>sum</code>。</li></ul></li></ul></li><li><p><strong>计算平均值</strong>：</p><ul><li>返回当前 <code>sum</code> 除以队列的长度，即为当前窗口的平均值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>queue</code> 数组的最大长度。</p><ul><li>当队列未满时，只需执行 <code>push</code> 操作，时间复杂度为 <code>O(1)</code>。</li><li>当队列已满时，需先执行 <code>shift</code>（删除队列的第一个元素）和 <code>push</code>（添加新元素），其中 <code>shift</code> 操作的时间复杂度为 <code>O(n)</code>（因为需要移动数组中的元素）。因此，在最坏情况下，<code>next</code> 方法的时间复杂度为 <code>O(n)</code>。</li><li>因此，整体的时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，<code>queue</code> 数组最大需要 <code>O(n)</code> 的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MovingAverage</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(z,A){const p=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/data-stream.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,a(l)])]),b,n("div",x,[q,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0346.html"},{default:e(()=>[s("第 346 题")]),_:1}),s(" 相同。")])]),w])}const O=i(r,[["render",y],["__file","jz_offer_II_041.html.vue"]]);export{O as default};
