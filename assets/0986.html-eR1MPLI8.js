import{_ as p,r as l,o as i,c as r,a as n,d as s,b as t,w as e,f as d,e as u}from"./app-ynO5B_DP.js";const k="/leetcode-js/assets/986-yCJJ3zbg.png",h={},_={id:"_986-区间列表的交集",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_986-区间列表的交集","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数组",-1),b=n("code",null,"双指针",-1),v={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two lists of closed intervals, <code>firstList</code> and <code>secondList</code>, where <code>firstList[i] = [starti, endi]</code> and <code>secondList[j] = [startj, endj]</code>. Each list of intervals is pairwise <strong>disjoint</strong> and in <strong>sorted order</strong>.</p><p>Return <em>the intersection of these two interval lists</em>.</p><p>A <strong>closed interval</strong> <code>[a, b]</code> (with <code>a &lt;= b</code>) denotes the set of real numbers <code>x</code> with <code>a &lt;= x &lt;= b</code>.</p><p>The <strong>intersection</strong> of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of <code>[1, 3]</code> and <code>[2, 4]</code> is <code>[2, 3]</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/01/30/interval1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]</p><p>Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: firstList = [[1,3],[5,9]], secondList = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= firstList.length, secondList.length &lt;= 1000</code></li><li><code>firstList.length + secondList.length &gt;= 1</code></li><li><code>0 &lt;= starti &lt; endi &lt;= 10^9</code></li><li><code>endi &lt; starti+1</code></li><li><code>0 &lt;= startj &lt; endj &lt;= 10^9 </code></li><li><code>endj &lt; startj+1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个由一些 <strong>闭区间</strong> 组成的列表，<code>firstList</code> 和 <code>secondList</code> ，其中 <code>firstList[i] = [starti, endi]</code> 而 <code>secondList[j] = [startj, endj]</code> 。每个区间列表都是成对 <strong>不相交</strong> 的，并且 <strong>已经排序</strong> 。</p><p>返回这 <strong>两个区间列表的交集</strong> 。</p><p>形式上，<strong>闭区间</strong> <code>[a, b]</code>（其中 <code>a &lt;= b</code>）表示实数 <code>x</code> 的集合，而 <code>a &lt;= x &lt;= b</code> 。</p><p>两个闭区间的 <strong>交集</strong> 是一组实数，要么为空集，要么为闭区间。例如，<code>[1, 3]</code> 和 <code>[2, 4]</code> 的交集为 <code>[2, 3]</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们用 <code>[a1, a2]</code> 和 <code>[b1, b2]</code> 表示在 <code>A</code> 和 <code>B</code> 中的两个区间，如果这两个区间有交集，需满足 <code>b2 &gt;= a1 &amp;&amp; a2 &gt;= b1</code>，分下面四种情况：</p><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据上图可以发现规律，假设交集区间是 <code>[c1, c2]</code>，那么</p><ul><li><code>c1 = max(a1, b1)</code></li><li><code>c2 = min(a2, b2)</code></li></ul><p>这一点就是寻找交集的核心。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">firstList</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">secondList</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">intervalIntersection</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">firstList<span class="token punctuation">,</span> secondList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> firstList<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> secondList<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> a1 <span class="token operator">=</span> firstList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			a2 <span class="token operator">=</span> firstList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			b1 <span class="token operator">=</span> secondList<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			b2 <span class="token operator">=</span> secondList<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a1 <span class="token operator">&lt;=</span> b2 <span class="token operator">&amp;&amp;</span> a2 <span class="token operator">&gt;=</span> b1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a1<span class="token punctuation">,</span> b1<span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a2<span class="token punctuation">,</span> b2<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;</span> a2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),w=n("td",{style:{"text-align":"center"}},"56",-1),j={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},q={href:"/problem/0056",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"left"}},M=n("code",null,"数组",-1),N=n("code",null,"排序",-1),V={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"88",-1),z={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},J={href:"/problem/0088",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"left"}},T=n("code",null,"数组",-1),F=n("code",null,"双指针",-1),H=n("code",null,"排序",-1),S={style:{"text-align":"left"}},Y=n("td",{style:{"text-align":"center"}},"759",-1),D={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"排序",-1),W=n("code",null,"堆（优先队列）",-1),X={style:{"text-align":"left"}},Z=n("td",{style:{"text-align":"center"}},"2410",-1),$={style:{"text-align":"left"}},nn={href:"https://leetcode.com/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},en=n("code",null,"贪心",-1),an=n("code",null,"数组",-1),on=n("code",null,"双指针",-1),cn=n("code",null,"1+",-1),ln={style:{"text-align":"left"}};function pn(rn,dn){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink");return i(),r("div",null,[n("h1",_,[m,s(),n("a",f,[s("986. 区间列表的交集"),t(o)])]),n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/outline/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/outline/tag/two-pointers.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[y,t(o)])]),x,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[w,n("td",j,[n("a",E,[s("合并区间"),t(o)])]),n("td",C,[n("a",q,[s("[✓]"),t(o)])]),n("td",I,[t(a,{to:"/outline/tag/array.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/outline/tag/sorting.html"},{default:e(()=>[N]),_:1})]),n("td",V,[t(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",z,[n("a",R,[s("合并两个有序数组"),t(o)])]),n("td",A,[n("a",J,[s("[✓]"),t(o)])]),n("td",O,[t(a,{to:"/outline/tag/array.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/outline/tag/two-pointers.html"},{default:e(()=>[F]),_:1}),s(),t(a,{to:"/outline/tag/sorting.html"},{default:e(()=>[H]),_:1})]),n("td",S,[t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),n("tr",null,[Y,n("td",D,[n("a",G,[s("员工空闲时间"),t(o)])]),K,n("td",P,[t(a,{to:"/outline/tag/array.html"},{default:e(()=>[Q]),_:1}),s(),t(a,{to:"/outline/tag/sorting.html"},{default:e(()=>[U]),_:1}),s(),t(a,{to:"/outline/tag/heap-priority-queue.html"},{default:e(()=>[W]),_:1})]),n("td",X,[t(c,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1})])]),n("tr",null,[Z,n("td",$,[n("a",nn,[s("运动员和训练师的最大匹配数"),t(o)])]),tn,n("td",sn,[t(a,{to:"/outline/tag/greedy.html"},{default:e(()=>[en]),_:1}),s(),t(a,{to:"/outline/tag/array.html"},{default:e(()=>[an]),_:1}),s(),t(a,{to:"/outline/tag/two-pointers.html"},{default:e(()=>[on]),_:1}),s(),cn]),n("td",ln,[t(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const kn=p(h,[["render",pn],["__file","0986.html.vue"]]);export{kn as default};
