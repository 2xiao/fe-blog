import{_ as c,r as l,o as i,c as r,a as n,d as s,b as a,w as t,f as u,e as d}from"./app-Fucr7yuT.js";const k={},m={id:"_54-螺旋矩阵",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_54-螺旋矩阵","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/spiral-matrix",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),b=n("code",null,"矩阵",-1),f=n("code",null,"模拟",-1),g={href:"https://leetcode.com/problems/spiral-matrix",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]</p><p>Output: [1,2,3,6,9,8,7,4,5]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]</p><p>Output: [1,2,3,4,8,12,11,10,9,5,6,7]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10</code></li><li><code>-100 &lt;= matrix[i][j] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个二维数组，按照螺旋的方式输出；</li><li>用四个指针控制每次上、下、左、右的边，然后按照逆时针的顺序从边界上依次访问元素；</li><li>当访问完当前边界之后，要更新一下边界位置，缩小范围，方便下一轮进行访问；</li><li>注意由于输入的数组 <code>matrix</code> 是 <code>m * n</code> 的矩阵，<code>m</code> 不一定等于 <code>n</code>，所以在螺旋遍历时可能出现多遍历了行或者列，返回时需要删除 <code>res</code> 中多余的数： <code>res.slice(0, m * n)</code>；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">spiralOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> bottom <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> m <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>top<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		top<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> top<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bottom<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> right<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>bottom<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		bottom<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> bottom<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		left<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> m <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),I=n("td",{style:{"text-align":"center"}},"59",-1),j={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/spiral-matrix-ii",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"矩阵",-1),q=n("code",null,"模拟",-1),M={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"885",-1),O={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/spiral-matrix-iii",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},S=n("code",null,"数组",-1),T=n("code",null,"矩阵",-1),A=n("code",null,"模拟",-1),D={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2326",-1),H={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/spiral-matrix-iv",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"链表",-1),W=n("code",null,"矩阵",-1),X=n("code",null,"1+",-1),Y={style:{"text-align":"left"}};function Z($,nn){const o=l("ExternalLinkIcon"),p=l("font"),e=l("RouterLink");return i(),r("div",null,[n("h1",m,[h,s(),n("a",_,[s("54. 螺旋矩阵"),a(o)])]),n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",g,[x,a(o)])]),y,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[I,n("td",j,[n("a",V,[s("螺旋矩阵 II"),a(o)])]),n("td",C,[a(e,{to:"/problem/0059.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[q]),_:1})]),n("td",M,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",O,[n("a",z,[s("螺旋矩阵 III"),a(o)])]),R,n("td",G,[a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[A]),_:1})]),n("td",D,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[F,n("td",H,[n("a",J,[s("螺旋矩阵 IV"),a(o)])]),K,n("td",P,[a(e,{to:"/tag/array.html"},{default:t(()=>[Q]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[U]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[W]),_:1}),s(),X]),n("td",Y,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const an=c(k,[["render",Z],["__file","0054.html.vue"]]);export{an as default};
