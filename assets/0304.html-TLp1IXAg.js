import{_ as p,r as l,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-totCBmv-.js";const m={},k=n("h1",{id:"_304-二维区域和检索-矩阵不可变",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_304-二维区域和检索-矩阵不可变","aria-hidden":"true"},"#"),s(" 304. 二维区域和检索 - 矩阵不可变")],-1),g=n("code",null,"设计",-1),h=n("code",null,"数组",-1),_=n("code",null,"矩阵",-1),b=n("code",null,"前缀和",-1),v={href:"https://leetcode.cn/problems/range-sum-query-2d-immutable",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/range-sum-query-2d-immutable",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a 2D matrix <code>matrix</code>, handle multiple queries of the following type:</p><ul><li>Calculate the <strong>sum</strong> of the elements of <code>matrix</code> inside the rectangle defined by its <strong>upper left corner</strong> <code>(row1, col1)</code> and <strong>lower right corner</strong> <code>(row2, col2)</code>.</li></ul><p>Implement the <code>NumMatrix</code> class:</p><ul><li><code>NumMatrix(int[][] matrix)</code> Initializes the object with the integer matrix <code>matrix</code>.</li><li><code>int sumRegion(int row1, int col1, int row2, int col2)</code> Returns the <strong>sum</strong> of the elements of <code>matrix</code> inside the rectangle defined by its <strong>upper left corner</strong> <code>(row1, col1)</code> and <strong>lower right corner</strong> <code>(row2, col2)</code>.</li></ul><p>You must design an algorithm where <code>sumRegion</code> works on <code>O(1)</code> time complexity.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/14/sum-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;NumMatrix&quot;, &quot;sumRegion&quot;, &quot;sumRegion&quot;, &quot;sumRegion&quot;]</p><p>[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]</p><p><strong>Output</strong></p><p>[null, 8, 11, 12]</p><p><strong>Explanation</strong></p><p>NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);</p><p>numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)</p><p>numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)</p><p>numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-10^4 &lt;= matrix[i][j] &lt;= 10^4</code></li><li><code>0 &lt;= row1 &lt;= row2 &lt; m</code></li><li><code>0 &lt;= col1 &lt;= col2 &lt; n</code></li><li>At most <code>10^4</code> calls will be made to <code>sumRegion</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二维矩阵 <code>matrix</code>，以下类型的多个请求：</p><ul><li>计算其子矩形范围内元素的总和，该子矩阵的 <strong>左上角</strong> 为 <code>(row1, col1)</code> ，<strong>右下角</strong> 为 <code>(row2, col2)</code> 。</li></ul><p>实现 <code>NumMatrix</code> 类：</p><ul><li><code>NumMatrix(int[][] matrix)</code> 给定整数矩阵 <code>matrix</code> 进行初始化</li><li><code>int sumRegion(int row1, int col1, int row2, int col2)</code> 返回 <strong>左上角</strong> <code>(row1, col1)</code> 、<strong>右下角</strong> <code>(row2, col2)</code> 所描述的子矩阵的元素 <strong>总和</strong> 。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://pic.leetcode-cn.com/1626332422-wUpUHT-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong></p><p>[&quot;NumMatrix&quot;,&quot;sumRegion&quot;,&quot;sumRegion&quot;,&quot;sumRegion&quot;]</p><p>[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]</p><p><strong>输出:</strong></p><p>[null, 8, 11, 12]</p><p><strong>解释:</strong></p><p>NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);</p><p>numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)</p><p>numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)</p><p>numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-10^5 &lt;= matrix[i][j] &lt;= 10^5</code></li><li><code>0 &lt;= row1 &lt;= row2 &lt; m</code></li><li><code>0 &lt;= col1 &lt;= col2 &lt; n</code></li><li>最多调用 <code>10^4</code> 次 <code>sumRegion</code> 方法</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构建前缀和数组</strong>：</p><ul><li>使用一个二维数组 <code>sum</code> 存储前缀和。</li><li><code>sum[i][j]</code> 表示从左上角 <code>(0, 0)</code> 到当前位置 <code>(i-1, j-1)</code> 的子矩阵元素总和。</li><li><code>sum[i][j]</code> 的递推公式为：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sum[i][j] = matrix[i-1][j-1] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>其中： <ul><li><code>matrix[i-1][j-1]</code> 是当前元素。</li><li><code>sum[i-1][j]</code> 是上一行累积的前缀和。</li><li><code>sum[i][j-1]</code> 是当前行左边累积的前缀和。</li><li><code>sum[i-1][j-1]</code> 是重复计算的区域，需要减掉。</li></ul></li></ul></li><li><p><strong>查询区域和</strong>：</p><ul><li>对于任意给定的矩阵区域 <code>(row1, col1)</code> 到 <code>(row2, col2)</code>，区域和可以通过前缀和数组快速计算：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sumRegion = sum[row2+1][col2+1]
          - sum[row1][col2+1]
          - sum[row2+1][col1]
          + sum[row1][col1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>其中： <ul><li><code>sum[row2+1][col2+1]</code> 是完整区域的前缀和。</li><li><code>sum[row1][col2+1]</code> 是去掉上方区域的前缀和。</li><li><code>sum[row2+1][col1]</code> 是去掉左侧区域的前缀和。</li><li><code>sum[row1][col1]</code> 是上方和左侧重叠区域的前缀和，需要加回来。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong>构造</strong>：计算前缀和需要遍历整个矩阵，时间复杂度为 <code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是矩阵的列数。</li><li><strong>查询</strong>：每次查询只涉及常数次加减法操作，因此时间复杂度为 <code>O(1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，需要一个大小为 <code>(m + 1) x (n + 1)</code> 的二维数组存储前缀和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">NumMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span>
				matrix<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">row1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">col1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">row2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">col2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">NumMatrix</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sumRegion</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">row1<span class="token punctuation">,</span> col1<span class="token punctuation">,</span> row2<span class="token punctuation">,</span> col2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>row2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>row1<span class="token punctuation">]</span><span class="token punctuation">[</span>col2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>row2 <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>col1<span class="token punctuation">]</span> <span class="token operator">+</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">[</span>row1<span class="token punctuation">]</span><span class="token punctuation">[</span>col1<span class="token punctuation">]</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"303",-1),R=n("td",{style:{"text-align":"left"}},"区域和检索 - 数组不可变",-1),M={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=n("code",null,"设计",-1),E=n("code",null,"数组",-1),I=n("code",null,"前缀和",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/range-sum-query-immutable",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/range-sum-query-immutable",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"308",-1),B=n("td",{style:{"text-align":"left"}},"二维区域和检索 - 矩阵可修改 🔒",-1),T=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},D=n("code",null,"设计",-1),G=n("code",null,"树状数组",-1),H=n("code",null,"线段树",-1),S=n("code",null,"2+",-1),Y=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/range-sum-query-2d-mutable",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/range-sum-query-2d-mutable",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"3030",-1),Q=n("td",{style:{"text-align":"left"}},"找出网格的区域平均强度",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"矩阵",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),sn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/find-the-grid-of-region-average",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/find-the-grid-of-region-average",target:"_blank",rel:"noopener noreferrer"};function en(on,ln){const c=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/design.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[x,t(o)]),s(),n("a",f,[w,t(o)])]),y,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,R,n("td",M,[t(e,{to:"/problem/0303.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",N,[t(e,{to:"/tag/design.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[I]),_:1})]),L,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",z,[s("🔗"),t(o)])])]),n("tr",null,[A,B,T,n("td",U,[t(e,{to:"/tag/design.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[H]),_:1}),s(),S]),Y,n("td",F,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[P,Q,W,n("td",X,[t(e,{to:"/tag/array.html"},{default:a(()=>[Z]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[$]),_:1})]),nn,n("td",sn,[n("a",tn,[s("🀄️"),t(o)]),s(),n("a",an,[s("🔗"),t(o)])])])])])])}const pn=p(m,[["render",en],["__file","0304.html.vue"]]);export{pn as default};
