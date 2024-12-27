import{_ as l,r as o,o as u,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-fqckLmln.js";const r={},k=n("h1",{id:"_59-滑动窗口的最大值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_59-滑动窗口的最大值","aria-hidden":"true"},"#"),s(" 59. 滑动窗口的最大值")],-1),m=n("code",null,"队列",-1),h=n("code",null,"数组",-1),v=n("code",null,"滑动窗口",-1),b=n("code",null,"单调队列",-1),_=n("code",null,"堆（优先队列）",-1),g={href:"https://leetcode.cn/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 <code>heights</code> ，其中 <code>heights[i]</code> 表示对应位置的海拔高度。请找出并返回望远镜视野范围 <code>limit</code> 内，可以观测到的最高海拔值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> heights = [14,2,27,-5,28,13,39], limit = 3</p><p><strong>输出：</strong>[27,27,28,28,39]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  滑动窗口的位置                最大值
---------------               -----
[14 2 27] -5 28 13 39           27

14 [2 27 -5] 28 13 39           27

14 2 [27 -5 28] 13 39           28

14 2 27 [-5 28 13] 39           28

14 2 27 -5 [28 13 39]           39
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><p>你可以假设输入总是有效的，在输入数组不为空的情况下：</p><ul><li><code>1 &lt;= limit &lt;= heights.length</code></li><li><code>-10000 &lt;= heights[i] &lt;= 10000</code></li></ul>`,7),x={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>双端队列（Deque，全称 Double Ended Queue）是一种可以在两端进行插入和删除操作的数据结构。相比于普通的队列（只能在一端插入，在另一端删除），双端队列更加灵活，适用于一些特殊的场景。在 JavaScript 中，双端队列可以使用数组来模拟。</p><ol><li>遍历数组：每次移动滑动窗口时，对双端队列进行更新：</li></ol><ul><li>如果队列头部的元素已经不在当前窗口中（即索引小于 <code>i - limit + 1</code>），将其移除。</li><li>在队列尾部，移除所有小于当前元素的值，因为它们不可能成为当前或之后窗口的最大值。</li><li>将当前元素的索引加入队列。</li></ul><ol start="2"><li>获取最大值：对于每一个窗口，队列的前端始终保存当前窗口的最大值的索引。</li></ol><p>注意：</p><ul><li>存储数组元素的索引：不会直接存储数组的值，而是存储元素的索引，以便通过索引访问具体的值，并通过索引判断某个元素是否还在当前滑动窗口中。</li><li>保持队列中的元素单调递减：为了保证队列的前端始终是窗口的最大值，会从队列的后端移除所有小于当前元素的索引。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。每个元素被加入和移除队列至多各一次，因此总的操作次数为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(limit)</code>，队列的大小在最坏情况下为 <code>limit</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">heights</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">limit</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAltitude</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> i <span class="token operator">-</span> limit <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>deque<span class="token punctuation">[</span>deque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> limit <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>heights<span class="token punctuation">[</span>deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function j(L,z){const c=o("font"),e=o("RouterLink"),i=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/queue.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/monotonic-queue.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",g,[f,a(i)])]),w,n("div",x,[q,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0239.html"},{default:t(()=>[s("第 239 题")]),_:1}),s(" 相同。")])]),y])}const N=l(r,[["render",j],["__file","jz_offer_59_1.html.vue"]]);export{N as default};
