import{_ as r,r as o,o as c,c as p,a as n,b as a,d as e,w as d,e as l}from"./app-9Xw5divW.js";const i={},u=n("h1",{id:"_2724-排序方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2724-排序方式","aria-hidden":"true"},"#"),a(" 2724. 排序方式")],-1),k={href:"https://leetcode.cn/problems/sort-by",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sort-by",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),b=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>arr</code> and a function <code>fn</code>, return a sorted array <code>sortedArr</code>. You can assume <code>fn</code> only returns numbers and those numbers determine the sort order of <code>sortedArr</code>. <code>sortedArr</code> must be sorted in <strong>ascending order</strong> by <code>fn</code> output.</p><p>You may assume that <code>fn</code> will never duplicate numbers for a given array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [5, 4, 1, 2, 3], fn = (x) =&gt; x</p><p>Output: [1, 2, 3, 4, 5]</p><p>Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [{&quot;x&quot;: 1}, {&quot;x&quot;: 0}, {&quot;x&quot;: -1}], fn = (d) =&gt; d.x</p><p>Output: [{&quot;x&quot;: -1}, {&quot;x&quot;: 0}, {&quot;x&quot;: 1}]</p><p>Explanation: fn returns the value for the &quot;x&quot; key. So the array is sorted based on that value.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) =&gt; x[1]</p><p>Output: [[10, 1], [5, 2], [3, 4]]</p><p>Explanation: arr is sorted in ascending order by number at index=1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr</code> is a valid JSON array</li><li><code>fn</code> is a function that returns a number</li><li><code>1 &lt;= arr.length &lt;= 5 * 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>arr</code> 和一个函数 <code>fn</code>，返回一个排序后的数组 <code>sortedArr</code>。你可以假设 <code>fn</code> 只返回数字，并且这些数字决定了 <code>sortedArr</code> 的排序顺序。<code>sortedArr</code> 必须按照 <code>fn</code> 的输出值 <strong>升序</strong> 排序。</p><p>你可以假设对于给定的数组，<code>fn</code> 不会返回重复的数字。</p><p><strong>提示：</strong></p><ul><li><code>arr</code> 是一个有效的 JSON 数组</li><li><code>fn</code> 是一个函数，返回一个数字</li><li><code>1 &lt;= arr.length &lt;= 5 * 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用 <code>[...arr]</code> 创建当前数组的副本，以避免直接修改原数组。</li><li>在 <code>sort</code> 方法中，根据传入的键（<code>fn(arr[i])</code>）定义比较函数，对数组进行排序。</li><li>最后返回排序后的新数组。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度，排序算法通常需要 <code>O(n log n)</code> 的时间复杂度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为需要创建数组的副本。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortBy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">fn</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function g(_,v){const t=o("font"),s=o("ExternalLinkIcon");return c(),p("div",null,[u,n("p",null,[a("🟢 "),e(t,{color:"#15bd66"},{default:d(()=>[a("Easy")]),_:1}),a("  🔗 "),n("a",k,[h,e(s)]),a(),n("a",f,[m,e(s)])]),b])}const y=r(i,[["render",g],["__file","2724.html.vue"]]);export{y as default};
