import{_ as i,r as e,o as u,c as k,a as n,b as s,d as a,w as t,e as o}from"./app-totCBmv-.js";const d={},r=n("h1",{id:"_59-数据流的第-k-大数值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_59-数据流的第-k-大数值","aria-hidden":"true"},"#"),s(" 59. 数据流的第 K 大数值")],-1),h=n("code",null,"树",-1),m=n("code",null,"设计",-1),v=n("code",null,"二叉搜索树",-1),b=n("code",null,"二叉树",-1),_=n("code",null,"数据流",-1),g=n("code",null,"堆（优先队列）",-1),y={href:"https://leetcode.cn/problems/jBjn9C",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>设计一个找到数据流中第 <code>k</code> 大元素的类（class）。注意是排序后的第 <code>k</code> 大元素，不是第 <code>k</code> 个不同的元素。</p><p>请实现 <code>KthLargest</code> 类：</p><ul><li><code>KthLargest(int k, int[] nums)</code> 使用整数 <code>k</code> 和整数流 <code>nums</code> 初始化对象。</li><li><code>int add(int val)</code> 将 <code>val</code> 插入数据流 <code>nums</code> 后，返回当前数据流中第 <code>k</code> 大的元素。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;KthLargest&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;, &quot;add&quot;]</p><p>[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]</p><p><strong>输出：</strong></p><p>[null, 4, 5, 5, 8, 8]</p><p><strong>解释：</strong></p><p>KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);</p><p>kthLargest.add(3); // return 4</p><p>kthLargest.add(5); // return 5</p><p>kthLargest.add(10); // return 5</p><p>kthLargest.add(9); // return 8</p><p>kthLargest.add(4); // return 8</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= k &lt;= 10^4</code></li><li><code>0 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>-10^4 &lt;= val &lt;= 10^4</code></li><li>最多调用 <code>add</code> 方法 <code>10^4</code> 次</li><li>题目数据保证，在查找第 <code>k</code> 大元素时，数组中至少有 <code>k</code> 个元素</li></ul>',8),x={class:"hint-container warning"},L=n("p",{class:"hint-container-title"},"注意",-1),q=o(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以用小顶堆来做。</p><p>数组在不断插入数据，如果每次求前 <code>K</code> 大的数据，都基于当前的数据重新计算的话，那时间复杂度就是 <code>O(nlogK)</code>，<code>n</code> 表示当前的数据的大小。</p><p>可以维护一个大小为 <code>K</code> 的小顶堆，当有数据被添加到数组中时，就拿它与堆顶的元素对比。</p><ul><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理；</li></ul><p>这样，无论任何时候需要查询当前的前 <code>K</code> 大的数据，都可以立刻返回。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(log k)</code></p><p>对于 <code>add</code> 方法，最坏情况下，我们需要进行堆化的次数是堆的高度，即 <code>log k</code>。因此，<code>add</code> 方法的时间复杂度是 <code>O(log k)</code>。在初始化时，需要将前 <code>k</code> 个元素构建最小堆，这一过程的时间复杂度是 <code>O(klog k)</code>。</p><p>总体来说，<code>KthLargest</code> 类的时间复杂度主要受 <code>add</code> 方法的影响，为 <code>O(log k)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">KthLargest</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {number} k</span>
	<span class="token comment">// @param {number[]} nums</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">=</span> k<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span>
				<span class="token punctuation">]</span><span class="token punctuation">;</span>
				index <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> index <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> index<span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function K(j,I){const c=e("font"),p=e("RouterLink"),l=e("ExternalLinkIcon");return u(),k("div",null,[r,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/tree.html"},{default:t(()=>[h]),_:1}),s(),a(p,{to:"/tag/design.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/binary-search-tree.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/binary-tree.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/data-stream.html"},{default:t(()=>[_]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",y,[f,a(l)])]),w,n("div",x,[L,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0703.html"},{default:t(()=>[s("第 703 题")]),_:1}),s(" 相同。")])]),q])}const B=i(d,[["render",K],["__file","jz_offer_II_059.html.vue"]]);export{B as default};
