import{_ as i,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as o}from"./app-KDJRKGep.js";const k={},d=n("h1",{id:"_74-合并区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_74-合并区间","aria-hidden":"true"},"#"),s(" 74. 合并区间")],-1),v=n("code",null,"数组",-1),m=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/SsGoHC",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),_=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [starti, endi]</code> 。请你合并所有重叠的区间，并返回 <em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：intervals = [[1,3],[2,6],[8,10],[15,18]]</p><p>输出：[[1,6],[8,10],[15,18]]</p><p>解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：intervals = [[1,4],[4,5]]</p><p>输出：[[1,5]]</p><p>解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^4</code></li><li><code>0 &lt;= starti &lt;= endi &lt;= 10^4</code></li><li><code>intervals[i].length == 2</code></li></ul>',8),f={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),w=o(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>一个区间可以表示为 <code>[start, end]</code>，先按区间的 <code>start</code> 排序</li><li>对于几个相交区间合并后的结果区间 <code>x</code>，<code>x.start</code> 一定是这些相交区间中 <code>start</code> 最小的，<code>x.end</code> 一定是这些相交区间中 <code>end</code> 最大的</li><li>由于已经排了序，<code>x.start</code> 很好确定，<code>求 x.end</code> 也很容易，可以类比在数组中找最大值的过程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 先按区间的 \`start\` 排序</span>
	intervals <span class="token operator">=</span> intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> intervals<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> start <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			end <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果区间相交，求结果区间 [start, end]</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>intervals<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">inRange</span><span class="token punctuation">(</span>intervals<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			start <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> intervals<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>end<span class="token punctuation">,</span> intervals<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 判断区间是否相交</span>
<span class="token keyword">var</span> <span class="token function-variable function">inRange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">interval<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> <span class="token punctuation">[</span>m<span class="token punctuation">,</span> n<span class="token punctuation">]</span> <span class="token operator">=</span> interval<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&lt;</span> start <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> start<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> end <span class="token operator">&amp;&amp;</span> n <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(x,I){const c=e("font"),p=e("RouterLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[d,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/sorting.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",b,[h,a(l)])]),_,n("div",f,[g,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0056.html"},{default:t(()=>[s("第 56 题")]),_:1}),s(" 相同。")])]),w])}const L=i(k,[["render",y],["__file","jz_offer_II_074.html.vue"]]);export{L as default};
