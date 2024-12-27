import{_ as i,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_40-矩阵中最大的矩形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_40-矩阵中最大的矩形","aria-hidden":"true"},"#"),s(" 40. 矩阵中最大的矩形")],-1),m=n("code",null,"栈",-1),v=n("code",null,"数组",-1),h=n("code",null,"动态规划",-1),g=n("code",null,"矩阵",-1),b=n("code",null,"单调栈",-1),q={href:"https://leetcode.cn/problems/PLYXKQ",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个由 <code>0</code> 和 <code>1</code> 组成的矩阵 <code>matrix</code> ，找出只包含 <code>1</code> 的最大矩形，并返回其面积。</p><p><strong>注意：</strong> 此题 <code>matrix</code> 输入格式为一维 <code>01</code> 字符串数组。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [&quot;10100&quot;,&quot;10111&quot;,&quot;11111&quot;,&quot;10010&quot;]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 最大矩形如上图所示。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> matrix = []</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> matrix = [&quot;0&quot;]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> matrix = [&quot;1&quot;]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> matrix = [&quot;00&quot;]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>rows == matrix.length</code></li><li><code>cols == matrix[0].length</code></li><li><code>0 &lt;= row, cols &lt;= 200</code></li><li><code>matrix[i][j]</code> 为 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code></li></ul>',16),f={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>检查矩阵是否为空。</p></li><li><p>初始化一个数组 <code>heights</code>，用于存储当前行的高度。</p></li><li><p>将每一行视为基于上方连续 <code>1</code> 的高度。如果当前元素是 <code>1</code>，则其高度等于当前行的 <code>1</code> 的数量；如果是 <code>0</code>，则高度为 <code>0</code>。</p><ul><li>例如，给定矩阵：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;, &quot;0&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>对应的高度矩阵为：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [1, 0, 1, 0, 0],
  [2, 0, 2, 1, 1],
  [3, 1, 3, 2, 2],
  [4, 0, 0, 3, 0]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>遍历每一行，更新 <code>heights</code> 数组。</p></li><li><p>对每一行调用 <code>largestRectangleArea</code> 函数计算最大矩形面积。</p><ul><li>对于每一行的高度数组，可以使用单调栈来计算最大矩形面积。</li><li>使用栈来维护高度的索引，确保栈中的高度是单调递增的。遍历高度数组，如果当前高度小于栈顶元素，计算以栈顶高度为最小高度的矩形面积，并更新最大面积。</li><li>通过遍历高度数组，计算以每个高度为最小高度的矩形面积。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是列数。每行的最大矩形计算是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储高度数组和栈。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximalRectangle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matrix<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> heights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新当前行的高度</span>
			heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">?</span> heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span>heights<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">largestRectangleArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	heights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在数组末尾添加0以清空栈</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> h <span class="token operator">=</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> w <span class="token operator">=</span> stack<span class="token punctuation">.</span>length <span class="token operator">?</span> i <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
			maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> h <span class="token operator">*</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function j(A,I){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/monotonic-stack.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",q,[_,a(l)])]),x,n("div",f,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0085.html"},{default:t(()=>[s("第 85 题")]),_:1}),s(" 相同（输入参数格式不同）。")])]),y])}const R=i(d,[["render",j],["__file","jz_offer_II_040.html.vue"]]);export{R as default};
