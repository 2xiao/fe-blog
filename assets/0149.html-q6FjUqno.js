import{_ as c,r as l,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-OX-nYmHS.js";const k={},m=n("h1",{id:"_149-直线上最多的点数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_149-直线上最多的点数","aria-hidden":"true"},"#"),s(" 149. 直线上最多的点数")],-1),h=n("code",null,"几何",-1),_=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),b=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/max-points-on-a-line",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/max-points-on-a-line",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <code>points</code> where <code>points[i] = [xi, yi]</code> represents a point on the <strong>X-Y</strong> plane, return <em>the maximum number of points that lie on the same straight line</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: points = [[1,1],[2,2],[3,3]]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= points.length &lt;= 300</code></li><li><code>points[i].length == 2</code></li><li><code>-10^4 &lt;= xi, yi &lt;= 10^4</code></li><li>All the <code>points</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 表示 <code>X-Y</code> 平面上的一个点。求最多有多少个点在同一条直线上。</p><p><code>points</code> 中的所有点 <strong>互不相同</strong>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>问题的解决关键在于如何有效地计算和比较斜率，可以通过规范化斜率和使用哈希表来记录点的分布，来找出最多共线的点。</p><ol><li><p><strong>斜率计算</strong>：</p><ul><li>对每个点 <code>points[i]</code>，计算与其他点的斜率并存入哈希表 <code>obj</code>。</li><li>斜率的计算可以通过 <code>(y2 - y1) / (x2 - x1)</code> 得到，但为了避免浮点数计算带来的精度问题，通常使用整数表示斜率，即使用 <code>(dy, dx)</code> 形式，其中 <code>dy = y2 - y1</code>，<code>dx = x2 - x1</code>。</li><li>对于垂直线的情况要特殊处理。</li></ul></li><li><p><strong>标准化斜率</strong>：</p><ul><li>斜率应当被标准化为最简分数形式，以确保相同斜率的点可以被正确识别。</li><li>使用最大公约数 (GCD) 来简化斜率。</li></ul></li><li><p><strong>使用哈希表统计</strong>：</p><ul><li>使用一个哈希表来记录每个点的斜率对应的点的数量。</li><li>遍历每个点，将其他点的斜率存入哈希表，并更新最多的点数。</li></ul></li><li><p><strong>处理重复点</strong>：</p><ul><li>对于重复的点，应当单独处理，确保它们被正确计入共线点的总数。</li></ul></li><li><p><strong>更新全局最大值</strong>：</p><ul><li>在每个点的计算中，算出最多共线的点数 <code>max</code>，包括当前、重复点以及斜率相同的点，更新全局最大值 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，每个点都与其他点进行比较。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储斜率的哈希表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxPoints</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">gcd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> n <span class="token operator">=</span> points<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			overlap <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			vertical <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> dx <span class="token operator">=</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> points<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				dy <span class="token operator">=</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> points<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token comment">// 重复点</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>dx <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> dy <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				overlap<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 垂直线</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>dx <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				vertical<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 规范化斜率</span>
			<span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">gcd</span><span class="token punctuation">(</span>dy<span class="token punctuation">,</span> dx<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> slope <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dy <span class="token operator">/</span> g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dx <span class="token operator">/</span> g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

			obj<span class="token punctuation">[</span>slope<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>slope<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>slope<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 加上垂直线的情况</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> vertical<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 加上当前点和重复点</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> max <span class="token operator">+</span> overlap <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"356",-1),M={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/line-reflection",target:"_blank",rel:"noopener noreferrer"},E=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),I=n("code",null,"数学",-1),O={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"2152",-1),z={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/minimum-number-of-lines-to-cover-points",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"位运算",-1),$=n("code",null,"几何",-1),A=n("code",null,"数组",-1),D=n("code",null,"5+",-1),H={style:{"text-align":"left"}},P=n("td",{style:{"text-align":"center"}},"2280",-1),S={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"几何",-1),Q=n("code",null,"数组",-1),U=n("code",null,"数学",-1),W=n("code",null,"2+",-1),Z={style:{"text-align":"left"}};function nn(sn,an){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/geometry.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",g,[f,a(o)]),s(),n("a",y,[x,a(o)])]),w,r(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[C,n("td",M,[n("a",q,[s("直线镜像 🔒"),a(o)])]),E,n("td",L,[a(e,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[I]),_:1})]),n("td",O,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",z,[n("a",G,[s("穿过所有点的所需最少直线数量 🔒"),a(o)])]),R,n("td",X,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/geometry.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),s(),D]),n("td",H,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[P,n("td",S,[n("a",T,[s("表示一个折线图的最少线段数"),a(o)])]),F,n("td",J,[a(e,{to:"/tag/geometry.html"},{default:t(()=>[K]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[Q]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[U]),_:1}),s(),W]),n("td",Z,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const en=c(k,[["render",nn],["__file","0149.html.vue"]]);export{en as default};
