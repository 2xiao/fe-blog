import{_ as c,r as l,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-OX-nYmHS.js";const k={},m=n("h1",{id:"_73-矩阵置零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_73-矩阵置零","aria-hidden":"true"},"#"),s(" 73. 矩阵置零")],-1),_=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("p",null,[s("Given an "),n("code",null,"m x n"),s(" integer matrix "),n("code",null,"matrix"),s(", if an element is "),n("code",null,"0"),s(", set its entire row and column to "),n("code",null,"0"),s("'s.")],-1),j={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},z=d(`<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]</p><p>Output: [[1,0,1],[0,0,0],[1,0,1]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]</p><p>Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[0].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-2^31 &lt;= matrix[i][j] &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong></p><ul><li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.</li><li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.</li><li>Could you devise a constant space solution?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>m x n</code> 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>此题考查对程序的控制能力，无算法思想；</li><li>题目要求采用原地的算法，所有修改即在原二维数组上进行；</li><li>在二维数组中有 2 个特殊位置，一个是第一行，一个是第一列，先用 2 个变量记录这一行和这一列中是否有 0，防止之后的修改覆盖了这 2 个地方；</li><li>然后除去这一行和这一列以外的部分判断是否有 0，如果有 0，将它们所在的行第一个元素和所在列的第一个元素标记为 0 ；</li><li>最后通过标记，将对应的行列置 0 即可。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify matrix in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">setZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> first_row_has_zero <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> first_line_has_zero <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 第一列是否有 0</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			first_row_has_zero <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 第一行是否有 0</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			first_line_has_zero <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 除第一行、第一列外，其他地方有 0，则将列首和行首置为 0</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 遍历第一列，有 0 则将整行置为 0</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 遍历第一行，有 0 则将整列置为 0</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 若第一列原本有 0，则将第一列都置为 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>first_row_has_zero<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 若第一行原本有 0，则将第一行都置为 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>first_line_has_zero<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"289",-1),E={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},q=n("code",null,"数组",-1),M=n("code",null,"矩阵",-1),O=n("code",null,"模拟",-1),B={style:{"text-align":"left"}},A=n("td",{style:{"text-align":"center"}},"2123",-1),R={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},H=n("code",null,"图",-1),S=n("code",null,"数组",-1),T=n("code",null,"矩阵",-1),Y={style:{"text-align":"left"}},Z=n("td",{style:{"text-align":"center"}},"2125",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/number-of-laser-beams-in-a-bank",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"数学",-1),X=n("code",null,"字符串",-1),$=n("code",null,"1+",-1),nn={style:{"text-align":"left"}},sn=n("td",{style:{"text-align":"center"}},"2174",-1),an={style:{"text-align":"left"}},tn={href:"https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},pn=n("code",null,"位运算",-1),ln=n("code",null,"广度优先搜索",-1),cn=n("code",null,"数组",-1),un=n("code",null,"1+",-1),rn={style:{"text-align":"left"}};function dn(kn,mn){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(o)]),s(),n("a",g,[y,a(o)])]),x,w,n("p",null,[s("You must do it "),n("a",j,[s("in place"),a(o)]),s(".")]),z,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[C,n("td",E,[n("a",L,[s("生命游戏"),a(o)])]),n("td",N,[a(e,{to:"/problem/0289.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",V,[a(e,{to:"/tag/array.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[O]),_:1})]),n("td",B,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[A,n("td",R,[n("a",D,[s("使矩阵中的 1 互不相邻的最小操作数 🔒"),a(o)])]),F,n("td",G,[a(e,{to:"/tag/graph.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[T]),_:1})]),n("td",Y,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[Z,n("td",J,[n("a",K,[s("银行中的激光束数量"),a(o)])]),P,n("td",Q,[a(e,{to:"/tag/array.html"},{default:t(()=>[U]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[W]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[X]),_:1}),s(),$]),n("td",nn,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[sn,n("td",an,[n("a",tn,[s("通过翻转行或列来去除所有的 1 II 🔒"),a(o)])]),en,n("td",on,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[pn]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[ln]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[cn]),_:1}),s(),un]),n("td",rn,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const hn=c(k,[["render",dn],["__file","0073.html.vue"]]);export{hn as default};
