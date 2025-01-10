import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-XFeYdzZv.js";const d={},k=n("h1",{id:"_867-转置矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_867-转置矩阵","aria-hidden":"true"},"#"),s(" 867. 转置矩阵")],-1),m=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),g=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/transpose-matrix",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/transpose-matrix",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a 2D integer array <code>matrix</code>, return <em>the<strong>transpose</strong> of</em> <code>matrix</code>.</p><p>The <strong>transpose</strong> of a matrix is the matrix flipped over its main diagonal, switching the matrix&#39;s row and column indices.</p><figure><img src="https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]</p><p>Output: [[1,4,7],[2,5,8],[3,6,9]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[1,2,3],[4,5,6]]</p><p>Output: [[1,4],[2,5],[3,6]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 1000</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>matrix</code>， 返回 <code>matrix</code> 的 <strong>转置矩阵</strong> 。</p><p>矩阵的 <strong>转置</strong> 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。</p><figure><img src="https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]</p><p><strong>输出：</strong>[[1,4,7],[2,5,8],[3,6,9]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[1,2,3],[4,5,6]]</p><p><strong>输出：</strong>[[1,4],[2,5],[3,6]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 1000</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>获取原矩阵的行数 <code>m</code> 和列数 <code>n</code>。</li><li>初始化一个空矩阵 <code>res</code>，其尺寸为 <code>n x m</code>，用来存储转置后的结果。</li><li>遍历原矩阵的每个元素 <code>matrix[i][j]</code>，将其放到转置矩阵的相应位置 <code>res[j][i]</code>。</li><li>返回 <code>res</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是原矩阵的行数，<code>n</code> 是原矩阵的列数。遍历矩阵中的每个元素一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，创建了一个新的矩阵 <code>res</code>，其大小是 <code>n x m</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">transpose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取原矩阵的行数 m 和列数 n</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 创建转置矩阵，大小为 n x m</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历原矩阵，将元素放到转置矩阵对应的位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 交换行列</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回转置后的矩阵</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function y(w,j){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",x,[_,a(p)])]),f])}const E=l(d,[["render",y],["__file","0867.html.vue"]]);export{E as default};
