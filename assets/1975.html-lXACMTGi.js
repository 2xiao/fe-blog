import{_ as i,r as o,o as c,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-KDJRKGep.js";const d={},m=n("h1",{id:"_1975-最大方阵和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1975-最大方阵和","aria-hidden":"true"},"#"),s(" 1975. 最大方阵和")],-1),k=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/maximum-matrix-sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-matrix-sum",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>n x n</code> integer <code>matrix</code>. You can do the following operation <strong>any</strong> number of times:</p><ul><li>Choose any two <strong>adjacent</strong> elements of <code>matrix</code> and <strong>multiply</strong> each of them by <code>-1</code>.</li></ul><p>Two elements are considered <strong>adjacent</strong> if and only if they share a <strong>border</strong>.</p><p>Your goal is to <strong>maximize</strong> the summation of the matrix&#39;s elements. Return <em>the<strong>maximum</strong> sum of the matrix&#39;s elements using the operation mentioned above.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,-1],[-1,1]]</p><p>Output: 4</p><p>Explanation: We can follow the following steps to reach sum equals 4:</p><ul><li>Multiply the 2 elements in the first row by -1.</li><li>Multiply the 2 elements in the first column by -1.</li></ul></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]</p><p>Output: 16</p><p>Explanation: We can follow the following step to reach sum equals 16:</p><ul><li>Multiply the 2 last elements in the second row by -1.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>2 &lt;= n &lt;= 250</code></li><li><code>-10^5 &lt;= matrix[i][j] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>n x n</code> 的整数方阵 <code>matrix</code> 。你可以执行以下操作 <strong>任意次</strong> ：</p><ul><li>选择 <code>matrix</code> 中 <strong>相邻</strong> 两个元素，并将它们都 <strong>乘以</strong> <code>-1</code> 。</li></ul><p>如果两个元素有 <strong>公共边</strong> ，那么它们就是 <strong>相邻</strong> 的。</p><p>你的目的是 <strong>最大化</strong> 方阵元素的和。请你在执行以上操作之后，返回方阵的 <strong>最大</strong> 和。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,-1],[-1,1]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 我们可以执行以下操作使和等于 4 ：</p><ul><li>将第一行的 2 个元素乘以 -1 。</li><li>将第一列的 2 个元素乘以 -1 。</li></ul></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/16/pc79-q2ex2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong> 我们可以执行以下操作使和等于 16 ：</p><ul><li>将第二行的最后 2 个元素乘以 -1 。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>2 &lt;= n &lt;= 250</code></li><li><code>-10^5 &lt;= matrix[i][j] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>最大化矩阵元素和的关键在于：</p><ul><li><strong>尽量使负数变为正数</strong>。</li><li>如果某些负数无法翻转符号，我们需要减少它们对总和的影响。</li></ul><ol><li><strong>计算矩阵的绝对值总和</strong>： <ul><li>对于所有元素的绝对值相加，假设所有元素都能变为正数，这是理论上的最大可能总和。</li></ul></li><li><strong>统计负数的个数</strong>： <ul><li>如果负数的个数为偶数，通过多次翻转操作可以将所有负数变为正数。</li><li>如果负数的个数为奇数，最终会剩下一个负数。</li></ul></li><li><strong>处理奇数个负数的情况</strong>： <ul><li>找到矩阵中绝对值最小的元素（不论正负），如果无法完全消除负数，可以将这个绝对值最小的元素翻转为负，从而对总和影响最小。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，遍历矩阵所有元素。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的辅助变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxMatrixSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> totalSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 矩阵绝对值总和</span>
	<span class="token keyword">let</span> minAbs <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 矩阵中绝对值最小的元素</span>
	<span class="token keyword">let</span> negativeCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 负数个数</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token keyword">of</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> val <span class="token keyword">of</span> row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			totalSum <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 统计绝对值总和</span>
			minAbs <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minAbs<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新绝对值最小的值</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> negativeCount<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 统计负数个数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果负数个数为偶数，所有负数都能消除</span>
	<span class="token comment">// 如果负数个数为奇数，剩下的负数会减去最小绝对值的两倍</span>
	<span class="token keyword">return</span> negativeCount <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> totalSum <span class="token operator">:</span> totalSum <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> minAbs<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function y(w,q){const p=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return c(),r("div",null,[m,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[k]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",b,[f,a(l)]),s(),n("a",v,[x,a(l)])]),_])}const M=i(d,[["render",y],["__file","1975.html.vue"]]);export{M as default};
