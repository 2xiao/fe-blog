import{_ as l}from"./1288-HcFWwBIb.js";import{_ as i,r as t,o as u,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-KDJRKGep.js";const k={},v=n("h1",{id:"_1288-删除被覆盖区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1288-删除被覆盖区间","aria-hidden":"true"},"#"),s(" 1288. 删除被覆盖区间")],-1),m=n("code",null,"数组",-1),b=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/remove-covered-intervals",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/remove-covered-intervals",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=d('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>intervals</code> where <code>intervals[i] = [li, ri]</code> represent the interval <code>[li, ri)</code>, remove all intervals that are covered by another interval in the list.</p><p>The interval <code>[a, b)</code> is covered by the interval <code>[c, d)</code> if and only if <code>c &lt;= a</code> and <code>b &lt;= d</code>.</p><p>Return <em>the number of remaining intervals</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,4],[3,6],[2,8]]</p><p>Output: 2</p><p>Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,4],[2,3]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 1000</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= li &lt; ri &lt;= 10^5</code></li><li>All the given intervals are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。</p><p>只有当 <code>c &lt;= a</code> 且 <code>b &lt;= d</code> 时，我们才认为区间 <code>[a,b)</code> 被区间 <code>[c,d)</code> 覆盖。</p><p>在完成所有删除操作后，请你返回列表中剩余区间的数目。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>按照区间的起点进行升序排序，若起点相同时按照区间的终点进行降序排列；</li><li>排序之后，两个相邻区间可能有如下三种情况：</li></ol><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>对于情况一，找到了一个覆盖区间，<code>count ++</code>；</li><li>对于情况二，两个区间可以合并，更新终点（因为区间已按起点升序排序，所以只需要更新终点）；</li><li>对于情况三，两个区间完全不相交，更新起点和终点；</li></ul><ol start="3"><li>最后返回总区间数减去覆盖区间数 <code>intervals.length - count</code>；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeCoveredIntervals</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按照起点升序排列，起点相同时，按终点降序排列</span>
	intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 记录合并区间的起点和终点</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> intervals<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> intervals<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> intervals<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> item <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 情况一，找到覆盖区间</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 情况二，找到相交区间，更新终点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">&lt;=</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 情况三，完全不相交，更新起点和终点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			right <span class="token operator">=</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> intervals<span class="token punctuation">.</span>length <span class="token operator">-</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function w(x,E){const c=t("font"),p=t("RouterLink"),o=t("ExternalLinkIcon");return u(),r("div",null,[v,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(p,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",h,[_,a(o)]),s(),n("a",f,[g,a(o)])]),y])}const C=i(k,[["render",w],["__file","1288.html.vue"]]);export{C as default};
