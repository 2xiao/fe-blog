import{_ as c,r as l,o as p,c as r,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-MXSjQbID.js";const m={},h=n("h1",{id:"_1572-矩阵对角线元素的和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1572-矩阵对角线元素的和","aria-hidden":"true"},"#"),e(" 1572. 矩阵对角线元素的和")],-1),v=n("code",null,"数组",-1),g=n("code",null,"矩阵",-1),k={href:"https://leetcode.cn/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a square matrix <code>mat</code>, return the sum of the matrix diagonals.</p><p>Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: 25</p><p>Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25</p><p>Notice that element mat[1][1] = 5 is counted only once.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat = [
	[1, 1, 1, 1],

	[1, 1, 1, 1],

	[1, 1, 1, 1],

	[1, 1, 1, 1]
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: 8;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: mat = [[<strong>5</strong>]]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == mat.length == mat[i].length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= mat[i][j] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正方形矩阵 <code>mat</code>，请你返回矩阵对角线元素的和。</p><p>请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/14/sample_1911.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> 25</p><p><strong>解释：</strong> 对角线的和为：1 + 5 + 9 + 3 + 7 = 25</p><p>请注意，元素 mat[1][1] = 5 只会被计算一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mat = [
	[1, 1, 1, 1],

	[1, 1, 1, 1],

	[1, 1, 1, 1],

	[1, 1, 1, 1]
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> 8</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> mat = [[<strong>5</strong>]]</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == mat.length == mat[i].length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= mat[i][j] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义变量：</strong></p><ul><li><code>n</code>：矩阵的大小。</li><li><code>j1</code> 和 <code>j2</code>：分别指向矩阵对角线的列索引，初始值为 <code>0</code> 和 <code>n - 1</code>。</li><li><code>sum</code>：用于存储对角线元素的累加和。</li></ul></li><li><p><strong>遍历矩阵：</strong></p><ul><li>通过循环，从第 0 行到第 <code>n-1</code> 行： <ul><li>累加主对角线 (<code>mat[i][j1]</code>) 和次对角线 (<code>mat[i][j2]</code>) 元素到 <code>sum</code>。</li><li>更新 <code>j1</code> 和 <code>j2</code>，使其分别向右下和左下移动。</li></ul></li></ul></li><li><p><strong>处理奇数维矩阵重复计算的情况：</strong></p><ul><li>如果矩阵维度 <code>n</code> 为奇数，主对角线和次对角线在中心位置会重复计算一次。</li><li>找到中心点的索引 <code>mid = Math.floor(n / 2)</code>，并从 <code>sum</code> 中减去该元素 <code>mat[mid][mid]</code>。</li></ul></li><li><p><strong>返回最终的和：</strong></p><ul><li>返回 <code>sum</code>，即对角线的总和。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，矩阵的行数决定了循环次数。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只使用了常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">mat</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">diagonalSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历矩阵，累加主对角线和次对角线的值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果矩阵维度为奇数，减去重复的中心值</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		sum <span class="token operator">-=</span> mat<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2133",-1),q=n("td",{style:{"text-align":"left"}},"检查是否每一行每一列都包含全部整数",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=n("code",null,"数组",-1),O=n("code",null,"哈希表",-1),C=n("code",null,"矩阵",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2319",-1),M=n("td",{style:{"text-align":"left"}},"判断矩阵是否是一个 X 矩阵",-1),R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},D=n("code",null,"数组",-1),G=n("code",null,"矩阵",-1),T=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/check-if-matrix-is-x-matrix",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/check-if-matrix-is-x-matrix",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[h,n("p",null,[e("🟢 "),s(i,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(a,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),e(),s(a,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),e("  🔗 "),n("a",k,[b,s(o)]),e(),n("a",_,[f,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",j,[s(a,{to:"/problem/2133.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),e(),s(a,{to:"/tag/hash-table.html"},{default:t(()=>[O]),_:1}),e(),s(a,{to:"/tag/matrix.html"},{default:t(()=>[C]),_:1})]),I,n("td",L,[n("a",V,[e("🀄️"),s(o)]),e(),n("a",B,[e("🔗"),s(o)])])]),n("tr",null,[z,M,n("td",R,[s(a,{to:"/problem/2319.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",S,[s(a,{to:"/tag/array.html"},{default:t(()=>[D]),_:1}),e(),s(a,{to:"/tag/matrix.html"},{default:t(()=>[G]),_:1})]),T,n("td",X,[n("a",A,[e("🀄️"),s(o)]),e(),n("a",F,[e("🔗"),s(o)])])])])])])}const Q=c(m,[["render",H],["__file","1572.html.vue"]]);export{Q as default};
