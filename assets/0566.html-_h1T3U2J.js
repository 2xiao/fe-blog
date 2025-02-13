import{_ as l,r as p,o as i,c as r,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-MXSjQbID.js";const k={},m=n("h1",{id:"_566-重塑矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_566-重塑矩阵","aria-hidden":"true"},"#"),a(" 566. 重塑矩阵")],-1),h=n("code",null,"数组",-1),g=n("code",null,"矩阵",-1),_=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/reshape-the-matrix",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/reshape-the-matrix",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In MATLAB, there is a handy function called <code>reshape</code> which can reshape an <code>m x n</code> matrix into a new one with a different size <code>r x c</code> keeping its original data.</p><p>You are given an <code>m x n</code> matrix <code>mat</code> and two integers <code>r</code> and <code>c</code> representing the number of rows and the number of columns of the wanted reshaped matrix.</p><p>The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.</p><p>If the <code>reshape</code> operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[1,2],[3,4]], r = 1, c = 4</p><p>Output: [[1,2,3,4]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[1,2],[3,4]], r = 2, c = 4</p><p>Output: [[1,2],[3,4]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>-1000 &lt;= mat[i][j] &lt;= 1000</code></li><li><code>1 &lt;= r, c &lt;= 300</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在 MATLAB 中，有一个非常有用的函数 <code>reshape</code> ，它可以将一个 <code>m x n</code> 矩阵重塑为另一个大小不同（<code>r x c</code>）的新矩阵，但保留其原始数据。</p><p>给你一个由二维数组 <code>mat</code> 表示的 <code>m x n</code> 矩阵，以及两个正整数 <code>r</code> 和 <code>c</code> ，分别表示想要的重构的矩阵的行数和列数。</p><p>重构后的矩阵需要将原始矩阵的所有元素以相同的<strong>行遍历顺序</strong> 填充。</p><p>如果具有给定参数的 <code>reshape</code> 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> mat = [[1,2],[3,4]], r = 1, c = 4</p><p><strong>输出：</strong>[[1,2,3,4]]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> mat = [[1,2],[3,4]], r = 2, c = 4</p><p><strong>输出：</strong>[[1,2],[3,4]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>-1000 &lt;= mat[i][j] &lt;= 1000</code></li><li><code>1 &lt;= r, c &lt;= 300</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>获取矩阵尺寸</strong></p><ul><li><code>m</code> 和 <code>n</code> 分别表示原矩阵的行数和列数。</li><li>检查原矩阵的元素总数 <code>m * n</code> 是否等于新矩阵的元素总数 <code>r * c</code>。如果不等，直接返回原矩阵。</li></ul></li><li><p><strong>计算索引映射</strong></p><ul><li>将二维索引映射到一维索引： <ul><li>原矩阵的元素 <code>mat[i][j]</code> 的一维索引为 <code>idx = i * n + j</code>。</li></ul></li><li>一维索引映射到新矩阵的二维索引： <ul><li>新矩阵的行号为 <code>i = Math.floor(idx / c)</code>。</li><li>新矩阵的列号为 <code>j = idx % c</code>。</li></ul></li></ul></li><li><p><strong>构建结果矩阵</strong></p><ul><li>使用嵌套循环遍历新矩阵的每个元素，根据上述公式计算其对应的原矩阵元素，并填充到新矩阵。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>返回构造的结果矩阵 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，遍历矩阵中的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(r * c)</code>，构造了一个新矩阵。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">mat</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">r</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">c</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">matrixReshape</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mat<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取原矩阵行数和列数</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 如果元素总数不同，直接返回原矩阵</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> n <span class="token operator">!==</span> r <span class="token operator">*</span> c<span class="token punctuation">)</span> <span class="token keyword">return</span> mat<span class="token punctuation">;</span>

	<span class="token comment">// 初始化新矩阵</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历新矩阵，按照索引映射填充元素</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> r<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> c<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> idx <span class="token operator">=</span> i <span class="token operator">*</span> c <span class="token operator">+</span> j<span class="token punctuation">;</span> <span class="token comment">// 一维索引</span>
			res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> mat<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>idx <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>idx <span class="token operator">%</span> n<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 映射到原矩阵</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回新矩阵</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"2022",-1),q=n("td",{style:{"text-align":"left"}},"将一维数组转变成二维数组",-1),L={style:{"text-align":"center"}},A={style:{"text-align":"left"}},E=n("code",null,"数组",-1),I=n("code",null,"矩阵",-1),z=n("code",null,"模拟",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/convert-1d-array-into-2d-array",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/convert-1d-array-into-2d-array",target:"_blank",rel:"noopener noreferrer"};function V(M,T){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/simulation.html"},{default:t(()=>[_]),_:1}),a("  🔗 "),n("a",f,[b,s(o)]),a(),n("a",v,[x,s(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,q,n("td",L,[s(e,{to:"/problem/2022.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",A,[s(e,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[I]),_:1}),a(),s(e,{to:"/tag/simulation.html"},{default:t(()=>[z]),_:1})]),B,n("td",C,[n("a",N,[a("🀄️"),s(o)]),a(),n("a",O,[a("🔗"),s(o)])])])])])])}const S=l(k,[["render",V],["__file","0566.html.vue"]]);export{S as default};
