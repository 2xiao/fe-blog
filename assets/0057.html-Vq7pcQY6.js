import{_ as p,r as l,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-5LzGvT4H.js";const k="/leetcode-js/assets/57-kVWgwmSi.png",v={},h=n("h1",{id:"_57-插入区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_57-插入区间","aria-hidden":"true"},"#"),s(" 57. 插入区间")],-1),m=n("code",null,"数组",-1),_={href:"https://leetcode.cn/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of non-overlapping intervals <code>intervals</code> where <code>intervals[i] = [starti, endi]</code> represent the start and the end of the <code>ith</code> interval and <code>intervals</code> is sorted in ascending order by <code>starti</code>. You are also given an interval <code>newInterval = [start, end]</code> that represents the start and end of another interval.</p><p>Insert <code>newInterval</code> into <code>intervals</code> such that <code>intervals</code> is still sorted in ascending order by <code>starti</code> and <code>intervals</code> still does not have any overlapping intervals (merge overlapping intervals if necessary).</p><p>Return <code>intervals</code> <em>after the insertion</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,3],[6,9]], newInterval = [2,5]</p><p>Output: [[1,5],[6,9]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]</p><p>Output: [[1,2],[3,10],[12,16]]</p><p>Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= intervals.length &lt;= 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= starti &lt;= endi &lt;= 10^5</code></li><li><code>intervals</code> is sorted by <code>starti</code> in <strong>ascending</strong> order.</li><li><code>newInterval.length == 2</code></li><li><code>0 &lt;= start &lt;= end &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>无重叠的</strong> ，按照区间起始端点排序的区间列表 <code>intervals</code>，其中 <code>intervals[i] = [starti, endi]</code> 表示第 <code>i</code> 个区间的开始和结束，并且 <code>intervals</code> 按照 <code>starti</code> 升序排列。同样给定一个区间 <code>newInterval = [start, end]</code> 表示另一个区间的开始和结束。</p><p>在 <code>intervals</code> 中插入区间 <code>newInterval</code>，使得 <code>intervals</code> 依然按照 <code>starti</code> 升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。</p><p>返回插入之后的 <code>intervals</code>。</p><p><strong>注意</strong> 你不需要原地修改 <code>intervals</code>。你可以创建一个新数组然后返回它。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历区间数组，取出当前区间 <code>[b1, b2]</code> ，依次与插入区间 <code>[a1, a2]</code> 对比，可能有如下三种情况：</li></ol><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>情况一，两区间不相交且 <code>a1 &gt; b2</code>，直接将当前区间 <code>[b1, b2]</code> 放入返回数组，继续对比后续区间；</li><li>情况二，两区间不相交且 <code>a2 &lt; b1</code>，说明已经找到了插入区间 <code>[a1, a2]</code> 的位置，将插入区间和后续没有对比过的区间都放入返回数组，并跳出循环；</li><li>情况三，两个区间相交，此时需要将两个区间合并，将合并后的区间作为新的插入区间与后续区间对比。合并后的区间分为四种情况，根据上图可以发现规律，只需更新 <code>a1</code> 和 <code>a2</code> 为： <ul><li><code>a1 = min(a1, b1)</code></li><li><code>a2 = max(a2, b2)</code></li></ul></li></ul><ol start="2"><li>注意边界情况</li></ol><ul><li><ol><li>若区间数组为空（例如：<code>intervals = [], newInterval = [1,2]</code>），则直接返回 <code>newInterval</code>；</li></ol></li><li><ol start="2"><li>当循环遍历到区间数组的最后一个时（例如：<code>intervals = [[2,3]], newInterval = [1,4]</code>），由于后面不会再出现情况 2 了，所以最后要将合并后的区间放入返回数组中。</li></ol></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">newInterval</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals<span class="token punctuation">,</span> newInterval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 边界情况一</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>intervals<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>newInterval<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		a1 <span class="token operator">=</span> newInterval<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		a2 <span class="token operator">=</span> newInterval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> intervals<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> b1 <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			b2 <span class="token operator">=</span> intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 情况一</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a1 <span class="token operator">&gt;</span> b2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>intervals<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 情况二</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a2 <span class="token operator">&lt;</span> b1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>intervals<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> intervals<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 情况三</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			a1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a1<span class="token punctuation">,</span> b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
			a2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a2<span class="token punctuation">,</span> b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 边界情况二</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> intervals<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"56",-1),I=n("td",{style:{"text-align":"left"}},"合并区间",-1),E={style:{"text-align":"center"}},V={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"排序",-1),N=n("td",{style:{"text-align":"left"}},"🟠",-1),j={style:{"text-align":"center"}},q={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"715",-1),M=n("td",{style:{"text-align":"left"}},"Range 模块",-1),O=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},Y=n("code",null,"设计",-1),z=n("code",null,"线段树",-1),T=n("code",null,"有序集合",-1),W=n("td",{style:{"text-align":"left"}},"🔴",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/range-module",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/range-module",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2276",-1),H=n("td",{style:{"text-align":"left"}},"统计区间中的整数数目",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"设计",-1),Q=n("code",null,"线段树",-1),U=n("code",null,"有序集合",-1),X=n("td",{style:{"text-align":"left"}},"🔴",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"};function sn(tn,an){const c=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",_,[b,t(o)]),s(),n("a",g,[f,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,I,n("td",E,[t(e,{to:"/problem/0056.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[L]),_:1})]),N,n("td",j,[n("a",q,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[R,M,O,n("td",S,[t(e,{to:"/tag/design.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/ordered-set.html"},{default:a(()=>[T]),_:1})]),W,n("td",A,[n("a",D,[s("🀄️"),t(o)]),s(),n("a",F,[s("🔗"),t(o)])])]),n("tr",null,[G,H,J,n("td",K,[t(e,{to:"/tag/design.html"},{default:a(()=>[P]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[Q]),_:1}),s(),t(e,{to:"/tag/ordered-set.html"},{default:a(()=>[U]),_:1})]),X,n("td",Z,[n("a",$,[s("🀄️"),t(o)]),s(),n("a",nn,[s("🔗"),t(o)])])])])])])}const on=p(v,[["render",sn],["__file","0057.html.vue"]]);export{on as default};
