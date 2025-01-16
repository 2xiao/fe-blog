import{_ as c,r as p,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-KDJRKGep.js";const h={},k=n("h1",{id:"_1637-两点之间不包含任何点的最宽垂直区域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1637-两点之间不包含任何点的最宽垂直区域","aria-hidden":"true"},"#"),t(" 1637. 两点之间不包含任何点的最宽垂直区域")],-1),g=n("code",null,"数组",-1),_=n("code",null,"排序",-1),m={href:"https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given <code>n</code> <code>points</code> on a 2D plane where <code>points[i] = [xi, yi]</code>, Return _ the <strong>widest vertical area</strong> between two points such that no points are inside the area._</p><p>A <strong>vertical area</strong> is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The <strong>widest vertical area</strong> is the one with the maximum width.</p><p>Note that points <strong>on the edge</strong> of a vertical area <strong>are not</strong> considered included in the area.</p><p><strong>Example 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/09/19/points3.png" alt="" loading="lazy">​</p><blockquote><p>Input: points = [[8,7],[9,9],[7,4],[9,7]]</p><p>Output: 1</p><p>Explanation: Both the red and the blue area are optimal.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == points.length</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>points[i].length == 2</code></li><li><code>0 &lt;= xi, yi &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你 <code>n</code> 个二维平面上的点 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> ，请你返回两点之间内部不包含任何点的 <strong>最宽垂直区域</strong> 的宽度。</p><p><strong>垂直区域</strong> 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 <strong>最宽垂直区域</strong> 为宽度最大的一个垂直区域。</p><p>请注意，垂直区域 <strong>边上</strong> 的点 <strong>不在</strong> 区域内。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/10/31/points3.png)​</p><blockquote><p><strong>输入：</strong> points = [[8,7],[9,9],[7,4],[9,7]]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 红色区域和蓝色区域都是最优区域。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == points.length</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>points[i].length == 2</code></li><li><code>0 &lt;= xi, yi &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><code>points</code> 中的每个点是一个二维坐标 <code>[x, y]</code>。关注横坐标 <code>x</code>，忽略纵坐标 <code>y</code>。</p></li><li><p>按横坐标 <code>x</code> 对点进行升序排序，以便计算相邻点之间的间距。</p></li><li><p>遍历排序后的横坐标，计算相邻横坐标之间的差值，取最大的差值作为结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是点的数量，排序的时间开销。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序是原地排序，不需要额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxWidthOfVerticalArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按横坐标升序排序</span>
	points<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> widest <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历相邻横坐标，找出最大差值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> points<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		widest <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>widest<span class="token punctuation">,</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> points<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> widest<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"164",-1),q=n("td",{style:{"text-align":"left"}},"最大间距",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=n("code",null,"数组",-1),C=n("code",null,"桶排序",-1),L=n("code",null,"基数排序",-1),O=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/maximum-gap",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/maximum-gap",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"2274",-1),T=n("td",{style:{"text-align":"left"}},"不含特殊楼层的最大连续楼层数",-1),z=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},G=n("code",null,"数组",-1),M=n("code",null,"排序",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[_]),_:1}),t("  🔗 "),n("a",m,[b,s(o)]),t(),n("a",f,[v,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[s(a,{to:"/problem/0164.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/bucket-sort.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/radix-sort.html"},{default:e(()=>[L]),_:1}),t(),O]),B,n("td",I,[n("a",j,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[A,T,z,n("td",D,[s(a,{to:"/tag/array.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[M]),_:1})]),S,n("td",W,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])])])])])}const U=c(h,[["render",J],["__file","1637.html.vue"]]);export{U as default};
