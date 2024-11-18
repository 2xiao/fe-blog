import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-9Xw5divW.js";const k={},m=n("h1",{id:"_498-对角线遍历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_498-对角线遍历","aria-hidden":"true"},"#"),s(" 498. 对角线遍历")],-1),v=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),b=n("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/diagonal-traverse",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/diagonal-traverse",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> matrix <code>mat</code>, return <em>an array of all the elements of the array in a diagonal order</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[1,2,3],[4,5,6],[7,8,9]]</p><p>Output: [1,2,4,7,5,3,6,8,9]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: mat = [[1,2],[3,4]]</p><p>Output: [1,2,3,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == mat.length</code></li><li><code>n == mat[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10^4</code></li><li><code>1 &lt;= m * n &lt;= 10^4</code></li><li><code>-10^5 &lt;= mat[i][j] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。</p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/diagonal_traverse.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>说明: 给定矩阵中的元素总数不会超过 100000 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题用模拟的方式就可以解出来。需要注意的是边界条件：比如二维数组为空，二维数组退化为一行或者一列，退化为一个元素。具体例子见测试用例。</p><p>解题关键是在判断下一个位置，将矩阵想像成一个 <code>X</code>,<code>Y</code> 坐标轴。那么可分为以下几种情况，</p><ol><li>斜角向右上遍历时， <ul><li>当右上角在坐标轴内， 正常计算 即， <code>x+1</code>(<code>X</code> 轴向右移动)，<code> y-1</code>(<code>Y</code> 轴向上移动)</li><li>当右上角在坐标轴外，那么当前位置只能在 第一行 <code>X</code> 坐标轴 ，或者 最后一列 <code>Y</code> 坐标轴，即判断该两种情况下，应该 <code>X</code> 坐标往右，或者 <code>Y</code> 坐标往上</li></ul></li><li>同理 斜角向下遍历时 <ul><li>当左下角在坐标轴内，正常计算 即， <code>x-1</code>(<code>X</code> 轴向右移动)， <code>y+1</code>(<code>Y</code> 轴向下移动)</li><li>当左下角在坐标轴外，那么当前位置只能在 第一列 <code>Y</code> 坐标轴，或者 最后一行 <code>X</code> 坐标轴，即判断该两种情况下，应该 <code>X</code> 坐标往左，或者 <code>Y</code> 坐标往下</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">mat</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDiagonalOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> rowLen <span class="token operator">=</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> colLen <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> rowLen <span class="token operator">*</span> colLen<span class="token punctuation">;</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> direction <span class="token operator">=</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>direction <span class="token operator">===</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> col <span class="token operator">&lt;</span> colLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				col<span class="token operator">++</span><span class="token punctuation">;</span>
				direction <span class="token operator">=</span> <span class="token string">&#39;down&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>col <span class="token operator">===</span> colLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				row<span class="token operator">++</span><span class="token punctuation">;</span>
				direction <span class="token operator">=</span> <span class="token string">&#39;down&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				row<span class="token operator">--</span><span class="token punctuation">;</span>
				col<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>col <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> row <span class="token operator">&lt;</span> rowLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				row<span class="token operator">++</span><span class="token punctuation">;</span>
				direction <span class="token operator">=</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> rowLen <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				col<span class="token operator">++</span><span class="token punctuation">;</span>
				direction <span class="token operator">=</span> <span class="token string">&#39;up&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				row<span class="token operator">++</span><span class="token punctuation">;</span>
				col<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		k<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"2075",-1),N=n("td",{style:{"text-align":"left"}},"解码斜向换位密码",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},j=n("code",null,"字符串",-1),C=n("code",null,"模拟",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},q={href:"https://leetcode.cn/problems/decode-the-slanted-ciphertext",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/decode-the-slanted-ciphertext",target:"_blank",rel:"noopener noreferrer"};function B(M,O){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[g,a(o)]),s(),n("a",f,[y,a(o)])]),w,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[L,N,X,n("td",Y,[a(e,{to:"/tag/string.html"},{default:t(()=>[j]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[C]),_:1})]),E,n("td",V,[n("a",q,[s("🀄️"),a(o)]),s(),n("a",I,[s("🔗"),a(o)])])])])])])}const R=l(k,[["render",B],["__file","0498.html.vue"]]);export{R as default};
