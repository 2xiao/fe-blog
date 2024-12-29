import{_ as c,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_73-矩阵置零",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_73-矩阵置零","aria-hidden":"true"},"#"),s(" 73. 矩阵置零")],-1),_=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"矩阵",-1),v={href:"https://leetcode.cn/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("p",null,[s("Given an "),n("code",null,"m x n"),s(" integer matrix "),n("code",null,"matrix"),s(", if an element is "),n("code",null,"0"),s(", set its entire row and column to "),n("code",null,"0"),s("'s.")],-1),j={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},z=d(`<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]</p><p>Output: [[1,0,1],[0,0,0],[1,0,1]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]</p><p>Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[0].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-2^31 &lt;= matrix[i][j] &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong></p><ul><li>A straightforward solution using <code>O(mn)</code> space is probably a bad idea.</li><li>A simple improvement uses <code>O(m + n)</code> space, but still not the best solution.</li><li>Could you devise a constant space solution?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>m x n</code> 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>此题考查对程序的控制能力，无算法思想；</li><li>题目要求采用原地的算法，所有修改即在原二维数组上进行；</li><li>在二维数组中有 2 个特殊位置，一个是第一行，一个是第一列，先用 2 个变量记录这一行和这一列中是否有 0，防止之后的修改覆盖了这 2 个地方；</li><li>然后除去这一行和这一列以外的部分判断是否有 0，如果有 0，将它们所在的行第一个元素和所在列的第一个元素标记为 0 ；</li><li>最后通过标记，将对应的行列置 0 即可。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"289",-1),E=n("td",{style:{"text-align":"left"}},"生命游戏",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=n("code",null,"数组",-1),q=n("code",null,"矩阵",-1),O=n("code",null,"模拟",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2123",-1),G=n("td",{style:{"text-align":"left"}},"使矩阵中的 1 互不相邻的最小操作数 🔒",-1),M=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"图",-1),Y=n("code",null,"数组",-1),Z=n("code",null,"矩阵",-1),H=n("td",{style:{"text-align":"center"}},"🔴",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/minimum-operations-to-remove-adjacent-ones-in-matrix",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2125",-1),U=n("td",{style:{"text-align":"left"}},"银行中的激光束数量",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},$=n("code",null,"数组",-1),nn=n("code",null,"数学",-1),sn=n("code",null,"字符串",-1),an=n("code",null,"1+",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/number-of-laser-beams-in-a-bank",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/number-of-laser-beams-in-a-bank",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},"2174",-1),cn=n("td",{style:{"text-align":"left"}},"通过翻转行或列来去除所有的 1 II 🔒",-1),un=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},dn=n("code",null,"位运算",-1),kn=n("code",null,"广度优先搜索",-1),mn=n("code",null,"数组",-1),_n=n("code",null,"1+",-1),hn=n("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/remove-all-ones-with-row-and-column-flips-ii",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii",target:"_blank",rel:"noopener noreferrer"};function gn(xn,yn){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(o)]),s(),n("a",g,[x,a(o)])]),y,w,n("p",null,[s("You must do it "),n("a",j,[s("in place"),a(o)]),s(".")]),z,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[C,E,n("td",L,[a(e,{to:"/problem/0289.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",N,[a(e,{to:"/tag/array.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[O]),_:1})]),B,n("td",A,[n("a",R,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])]),n("tr",null,[F,G,M,n("td",S,[a(e,{to:"/tag/graph.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[Z]),_:1})]),H,n("td",J,[n("a",K,[s("🀄️"),a(o)]),s(),n("a",P,[s("🔗"),a(o)])])]),n("tr",null,[Q,U,W,n("td",X,[a(e,{to:"/tag/array.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[nn]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[sn]),_:1}),s(),an]),tn,n("td",en,[n("a",on,[s("🀄️"),a(o)]),s(),n("a",pn,[s("🔗"),a(o)])])]),n("tr",null,[ln,cn,un,n("td",rn,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[dn]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[kn]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[mn]),_:1}),s(),_n]),hn,n("td",bn,[n("a",vn,[s("🀄️"),a(o)]),s(),n("a",fn,[s("🔗"),a(o)])])])])])])}const jn=c(k,[["render",gn],["__file","0073.html.vue"]]);export{jn as default};
