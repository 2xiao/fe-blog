import{_ as p,r as e,o as l,c as r,a as n,b as s,d as a,w as t,e as d}from"./app-Kkp_66uf.js";const u={},k=n("h1",{id:"_1380-矩阵中的幸运数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1380-矩阵中的幸运数","aria-hidden":"true"},"#"),s(" 1380. 矩阵中的幸运数")],-1),m=n("code",null,"数组",-1),v=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/lucky-numbers-in-a-matrix",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/lucky-numbers-in-a-matrix",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> matrix of <strong>distinct</strong> numbers, return <em>all<strong>lucky numbers</strong> in the matrix in <strong>any</strong> order</em>.</p><p>A <strong>lucky number</strong> is an element of the matrix such that it is the minimum element in its row and maximum in its column.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]</p><p>Output: [15]</p><p>Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]</p><p>Output: [12]</p><p>Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: matrix = [[7,8],[1,2]]</p><p>Output: [7]</p><p>Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= n, m &lt;= 50</code></li><li><code>1 &lt;= matrix[i][j] &lt;= 10^5</code>.</li><li>All elements in the matrix are distinct.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的矩阵，矩阵中的数字 <strong>各不相同</strong> 。请你按 <strong>任意</strong> 顺序返回矩阵中的所有幸运数。</p><p><strong>幸运数</strong> 是指矩阵中满足同时下列两个条件的元素：</p><ul><li>在同一行的所有元素中最小</li><li>在同一列的所有元素中最大</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[3,7,8],[9,11,13],[15,16,17]]</p><p><strong>输出：</strong>[15]</p><p><strong>解释：</strong> 15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]</p><p><strong>输出：</strong>[12]</p><p><strong>解释：</strong> 12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[7,8],[1,2]]</p><p><strong>输出：</strong>[7]</p><p><strong>解释：</strong> 7 是唯一的幸运数字，因为它是行中的最小值，列中的最大值。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= n, m &lt;= 50</code></li><li><code>1 &lt;= matrix[i][j] &lt;= 10^5</code></li><li>矩阵中的所有元素都是不同的</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>幸运数是指一个元素，它既是所在行的最小值，又是所在列的最大值。</p><p>在解决这个问题时，我们首先可以观察到，矩阵中 <strong>最多只有一个幸运数</strong>，可以通过 <strong>反证法</strong> 来证明这一点。</p><h3 id="矩阵中最多只有一个幸运数" tabindex="-1"><a class="header-anchor" href="#矩阵中最多只有一个幸运数" aria-hidden="true">#</a> 矩阵中最多只有一个幸运数</h3><h4 id="_1-假设有两个幸运数-x-和-y" tabindex="-1"><a class="header-anchor" href="#_1-假设有两个幸运数-x-和-y" aria-hidden="true">#</a> 1. 假设有两个幸运数 X 和 Y</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      c2              c1
      |               |
r1 ---+-------------- X ---
      |               |
      |               |
      |               |
r2 -- Y --------------+----
      |               |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设矩阵中有两个幸运数 <code>X</code> 和 <code>Y</code>，它们分别位于不同的位置：</p><ul><li><code>X</code> 位于第 <code>r1</code> 行第 <code>c1</code> 列。</li><li><code>Y</code> 位于第 <code>r2</code> 行第 <code>c2</code> 列。</li></ul><p>根据题目定义，<code>X</code> 和 <code>Y</code> 都是幸运数，意味着：</p><ul><li><code>X</code> 是第 <code>r1</code> 行的最小值，并且是第 <code>c1</code> 列的最大值。</li><li><code>Y</code> 是第 <code>r2</code> 行的最小值，并且是第 <code>c2</code> 列的最大值。</li></ul><h4 id="_2-y-x" tabindex="-1"><a class="header-anchor" href="#_2-y-x" aria-hidden="true">#</a> 2. Y &lt; X</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      c2             c1
      |               |
r1 ---+-------------- X ---
      |               |
      |               |
      |               |
r2 -- Y ------------- A ---
      |               |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 <code>A</code> 点位于第 <code>r2</code> 行第 <code>c1</code> 列，则可以得到：</p><ul><li><code>X &gt; A</code>，因为 <code>X</code> 是第 <code>c1</code> 列的最大值。</li><li><code>Y &lt; A</code>，因为 <code>Y</code> 是第 <code>r2</code> 行的最小值。</li></ul><p>因此可以得到：<code>Y &lt; X</code></p><h4 id="_3-y-x" tabindex="-1"><a class="header-anchor" href="#_3-y-x" aria-hidden="true">#</a> 3. Y &gt; X</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      c2             c1
      |               |
r1 -- B ------------- X ---
      |               |
      |               |
      |               |
r2 -- Y ------------- A ---
      |               |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 <code>B</code> 点位于第 <code>r1</code> 行第 <code>c2</code> 列，则可以得到：</p><ul><li><code>X &lt; B</code>，因为 <code>X</code> 是第 <code>r1</code> 行的最小值。</li><li><code>Y &gt; B</code>，因为 <code>Y</code> 是第 <code>c2</code> 列的最大值。</li></ul><p>因此可以得到：<code>Y &gt; X</code></p><h4 id="_4-得出矛盾" tabindex="-1"><a class="header-anchor" href="#_4-得出矛盾" aria-hidden="true">#</a> 4. 得出矛盾</h4><p>从上面的描述可以看出，如果 <code>X</code> 和 <code>Y</code> 都是幸运数，当它们位于不同的行和列时，那么可以推出 <code>Y &lt; X</code> 和 <code>Y &gt; X</code>，这两个结论相互冲突，即不可能同时存在两个幸运数。</p><p>通过反证法，我们得出结论：<strong>矩阵中至多只有一个幸运数</strong>。</p><h3 id="找出幸运数" tabindex="-1"><a class="header-anchor" href="#找出幸运数" aria-hidden="true">#</a> 找出幸运数</h3><ul><li>幸运数字是所在行的最小值，又是所在列的最大值。</li><li>首先，找到每行的最小元素，然后将这些最小值中的最大值确定为 <code>rowMinMax</code>。</li><li>同样，找到每列的最大值，然后将这些最大值中的最小值确定为 <code>colMaxMin</code>。</li><li>如果 <code>rowMinMax</code> 等于 <code>colMaxMin</code>，则该值就是幸运数字；</li><li>否则，返回一个空数组。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是行数，<code>n</code> 是列数，遍历每一行和每一列各一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储变量</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">luckyNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 找到每行的最小值</span>
	<span class="token keyword">let</span> rowMinMax <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> rowMin <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			rowMin <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>rowMin<span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		rowMinMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>rowMinMax<span class="token punctuation">,</span> rowMin<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 找到每列的最大值</span>
	<span class="token keyword">let</span> colMaxMin <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> colMax <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			colMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>colMax<span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		colMaxMin <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>colMaxMin<span class="token punctuation">,</span> colMax<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 判断是否为幸运数</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>rowMinMax <span class="token operator">===</span> colMaxMin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>rowMinMax<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function f(y,w){const i=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟢 "),a(i,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(c)]),s(),n("a",x,[g,a(c)])]),_])}const X=p(u,[["render",f],["__file","1380.html.vue"]]);export{X as default};
