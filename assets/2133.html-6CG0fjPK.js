import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},m=n("h1",{id:"_2133-检查是否每一行每一列都包含全部整数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2133-检查是否每一行每一列都包含全部整数","aria-hidden":"true"},"#"),t(" 2133. 检查是否每一行每一列都包含全部整数")],-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),_=n("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An <code>n x n</code> matrix is <strong>valid</strong> if every row and every column contains <strong>all</strong> the integers from <code>1</code> to <code>n</code> (<strong>inclusive</strong>).</p><p>Given an <code>n x n</code> integer matrix <code>matrix</code>, return <code>true</code> <em>if the matrix is <strong>valid</strong>.</em> Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/21/example1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]</p><p>Output: true</p><p>Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.</p><p>Hence, we return true.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/21/example2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]</p><p>Output: false</p><p>Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.</p><p>Hence, we return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= matrix[i][j] &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>对一个大小为 <code>n x n</code> 的矩阵而言，如果其每一行和每一列都包含从 <code>1</code> 到 <code>n</code> 的 <strong>全部</strong> 整数（含 <code>1</code> 和 <code>n</code>），则认为该矩阵是一个 <strong>有效</strong> 矩阵。</p><p>给你一个大小为 <code>n x n</code> 的整数矩阵 <code>matrix</code> ，请你判断矩阵是否为一个有效矩阵：如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/21/example1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,2,3],[3,1,2],[2,3,1]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 在此例中，n = 3 ，每一行和每一列都包含数字 1、2、3 。</p><p>因此，返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/21/example2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,1,1],[1,2,3],[1,2,3]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 在此例中，n = 3 ，但第一行和第一列不包含数字 2 和 3 。</p><p>因此，返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= matrix[i][j] &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历行与列</strong>：</p><ul><li>对每一行和每一列分别建立集合。</li><li>使用集合的特性（自动去重），如果集合的大小小于 <code>n</code>，说明存在重复或缺少的数字。</li></ul></li><li><p><strong>判断条件</strong>：</p><ul><li>如果任意行或任意列的集合大小小于 <code>n</code>，直接返回 <code>false</code>。</li><li>如果所有行和列都符合条件，则返回 <code>true</code>。</li></ul></li><li><p><strong>提前终止</strong>：</p><ul><li>为提高效率，一旦发现某一行或列不满足条件，可以直接终止后续的判断。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，两层循环，检查矩阵中的每个元素。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用集合存储行和列的元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkValid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 矩阵的大小 n x n</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 初始化行和列的集合</span>
		<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第 i 行</span>
		<span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 第 i 列</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			col<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 收集第 i 列的元素</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 检查行和列是否都包含 n 个元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">.</span>size <span class="token operator">&lt;</span> n <span class="token operator">||</span> col<span class="token punctuation">.</span>size <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 所有行和列都满足条件</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"36",-1),q=n("td",{style:{"text-align":"left"}},"有效的数独",-1),E={style:{"text-align":"center"}},z={style:{"text-align":"left"}},I=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),C=n("code",null,"矩阵",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/valid-sudoku",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/valid-sudoku",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"1572",-1),H=n("td",{style:{"text-align":"left"}},"矩阵对角线元素的和",-1),R={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=n("code",null,"数组",-1),T=n("code",null,"矩阵",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"2661",-1),P=n("td",{style:{"text-align":"left"}},"找出叠涂元素",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"哈希表",-1),Y=n("code",null,"矩阵",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/first-completely-painted-row-or-column",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/first-completely-painted-row-or-column",target:"_blank",rel:"noopener noreferrer"};function en(sn,an){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",f,[x,e(o)]),t(),n("a",b,[v,e(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,q,n("td",E,[e(a,{to:"/problem/0036.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",z,[e(a,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[V]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[C]),_:1})]),L,n("td",N,[n("a",O,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])]),n("tr",null,[S,H,n("td",R,[e(a,{to:"/problem/1572.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",A,[e(a,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[T]),_:1})]),D,n("td",F,[n("a",J,[t("🀄️"),e(o)]),t(),n("a",K,[t("🔗"),e(o)])])]),n("tr",null,[M,P,Q,n("td",U,[e(a,{to:"/tag/array.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[X]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),e(o)]),t(),n("a",tn,[t("🔗"),e(o)])])])])])])}const ln=p(h,[["render",en],["__file","2133.html.vue"]]);export{ln as default};
