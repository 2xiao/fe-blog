import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_1037-有效的回旋镖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1037-有效的回旋镖","aria-hidden":"true"},"#"),s(" 1037. 有效的回旋镖")],-1),m=n("code",null,"几何",-1),h=n("code",null,"数组",-1),g=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/valid-boomerang",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/valid-boomerang",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>points</code> where <code>points[i] = [xi, yi]</code> represents a point on the <strong>X-Y</strong> plane, return <code>true</code> <em>if these points are a<strong>boomerang</strong></em>.</p><p>A <strong>boomerang</strong> is a set of three points that are <strong>all distinct</strong> and <strong>not in a straight line</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: points = [[1,1],[2,3],[3,2]]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: points = [[1,1],[2,2],[3,3]]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>points.length == 3</code></li><li><code>points[i].length == 2</code></li><li><code>0 &lt;= xi, yi &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 表示 <strong>X-Y</strong> 平面上的一个点， _如果这些点构成一个 _<strong>回旋镖</strong> 则返回 <code>true</code> 。</p><p><strong>回旋镖</strong> 定义为一组三个点，这些点 <strong>各不相同</strong> 且 <strong>不在一条直线上</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> points = [[1,1],[2,3],[3,2]]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> points = [[1,1],[2,2],[3,3]]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>points.length == 3</code></li><li><code>points[i].length == 2</code></li><li><code>0 &lt;= xi, yi &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求判断由三个点组成的三角形是否为回旋镖，即这三个点不能共线。</p><ul><li>三个点共线的充要条件是三点构成的向量间的斜率相同。</li><li>对于点 <code>A(x1, y1)</code>, <code>B(x2, y2)</code>, <code>C(x3, y3)</code>，可以用以下公式判断 <code>AB</code> 和 <code>AC</code> 的向量是否共线： <code>(x1 - x2) * (y1 - y3) == (x1 - x3) * (y1 - y2)</code></li><li>如果等式成立，则点共线；否则点不共线。</li><li>另外，如果三个点中有两个点重复，则等式也成立。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，仅涉及常量次的数值运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了少量变量存储坐标值和中间计算结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isBoomerang</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 解构三点的坐标</span>
	<span class="token keyword">const</span> x1 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> x2 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> x3 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> y1 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> y2 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> y3 <span class="token operator">=</span> points<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查是否共线</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>x1 <span class="token operator">-</span> x2<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>y1 <span class="token operator">-</span> y3<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token punctuation">(</span>x1 <span class="token operator">-</span> x3<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>y1 <span class="token operator">-</span> y2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function f(w,q){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/geometry.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,a(p)]),s(),n("a",v,[x,a(p)])]),y])}const C=l(d,[["render",f],["__file","1037.html.vue"]]);export{C as default};
