import{_ as i,r as c,o as p,c as r,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-OX-nYmHS.js";const _={},h=t("h1",{id:"_56-合并区间",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_56-合并区间","aria-hidden":"true"},"#"),e(" 56. 合并区间")],-1),f=t("code",null,"数组",-1),k=t("code",null,"排序",-1),m={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]</p><p>Output: [[1,6],[8,10],[15,18]]</p><p>Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,4],[4,5]]</p><p>Output: [[1,5]]</p><p>Explanation: Intervals [1,4] and [4,5] are considered overlapping.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= starti &lt;= endi &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [starti, endi]</code> 。请你合并所有重叠的区间，并返回 <em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>一个区间可以表示为 <code>[start, end]</code>，先按区间的 <code>start</code> 排序</li><li>对于几个相交区间合并后的结果区间 <code>x</code>，<code>x.start</code> 一定是这些相交区间中 <code>start</code> 最小的，<code>x.end</code> 一定是这些相交区间中 <code>end</code> 最大的</li><li>由于已经排了序，<code>x.start</code> 很好确定，<code>求 x.end</code> 也很容易，可以类比在数组中找最大值的过程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,15),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"57",-1),M={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=t("code",null,"数组",-1),H={style:{"text-align":"left"}},L=t("td",{style:{"text-align":"center"}},"252",-1),N={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/meeting-rooms",target:"_blank",rel:"noopener noreferrer"},V=t("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},B=t("code",null,"数组",-1),O=t("code",null,"排序",-1),S={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"253",-1),G={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=t("code",null,"贪心",-1),J=t("code",null,"数组",-1),K=t("code",null,"双指针",-1),P=t("code",null,"3+",-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"495",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"数组",-1),tt=t("code",null,"模拟",-1),nt={style:{"text-align":"left"}},et=t("td",{style:{"text-align":"center"}},"616",-1),st={style:{"text-align":"left"}},at={href:"https://leetcode.com/problems/add-bold-tag-in-string",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"字典树",-1),it=t("code",null,"数组",-1),pt=t("code",null,"哈希表",-1),rt=t("code",null,"2+",-1),dt={style:{"text-align":"left"}},ut=t("td",{style:{"text-align":"center"}},"715",-1),_t={style:{"text-align":"left"}},ht={href:"https://leetcode.com/problems/range-module",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},mt=t("code",null,"设计",-1),gt=t("code",null,"线段树",-1),yt=t("code",null,"有序集合",-1),bt={style:{"text-align":"left"}},xt=t("td",{style:{"text-align":"center"}},"759",-1),vt={style:{"text-align":"left"}},wt={href:"https://leetcode.com/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},null,-1),Et={style:{"text-align":"left"}},It=t("code",null,"数组",-1),qt=t("code",null,"排序",-1),Ct=t("code",null,"堆（优先队列）",-1),Ht={style:{"text-align":"left"}},Lt=t("td",{style:{"text-align":"center"}},"763",-1),Nt={style:{"text-align":"left"}},Rt={href:"https://leetcode.com/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},Vt={style:{"text-align":"center"}},jt={style:{"text-align":"left"}},Bt=t("code",null,"贪心",-1),Ot=t("code",null,"哈希表",-1),St=t("code",null,"双指针",-1),zt=t("code",null,"1+",-1),Gt={style:{"text-align":"left"}},Tt=t("td",{style:{"text-align":"center"}},"986",-1),At={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},Ft={style:{"text-align":"center"}},Jt={style:{"text-align":"left"}},Kt=t("code",null,"数组",-1),Pt=t("code",null,"双指针",-1),Qt={style:{"text-align":"left"}},Ut=t("td",{style:{"text-align":"center"}},"2158",-1),Wt={style:{"text-align":"left"}},Xt={href:"https://leetcode.com/problems/amount-of-new-area-painted-each-day",target:"_blank",rel:"noopener noreferrer"},Yt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"线段树",-1),tn=t("code",null,"数组",-1),nn=t("code",null,"有序集合",-1),en={style:{"text-align":"left"}},sn=t("td",{style:{"text-align":"center"}},"2213",-1),an={style:{"text-align":"left"}},on={href:"https://leetcode.com/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},ln=t("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},pn=t("code",null,"线段树",-1),rn=t("code",null,"数组",-1),dn=t("code",null,"字符串",-1),un=t("code",null,"1+",-1),_n={style:{"text-align":"left"}},hn=t("td",{style:{"text-align":"center"}},"2276",-1),fn={style:{"text-align":"left"}},kn={href:"https://leetcode.com/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"},mn=t("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},yn=t("code",null,"设计",-1),bn=t("code",null,"线段树",-1),xn=t("code",null,"有序集合",-1),vn={style:{"text-align":"left"}},wn=t("td",{style:{"text-align":"center"}},"2406",-1),Mn={style:{"text-align":"left"}},En={href:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},In={style:{"text-align":"center"}},qn={style:{"text-align":"left"}},Cn=t("code",null,"贪心",-1),Hn=t("code",null,"数组",-1),Ln=t("code",null,"双指针",-1),Nn=t("code",null,"3+",-1),Rn={style:{"text-align":"left"}},Vn=t("td",{style:{"text-align":"center"}},"2446",-1),jn={style:{"text-align":"left"}},Bn={href:"https://leetcode.com/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},On=t("td",{style:{"text-align":"center"}},null,-1),Sn={style:{"text-align":"left"}},zn=t("code",null,"数组",-1),Gn=t("code",null,"字符串",-1),Tn={style:{"text-align":"left"}},An=t("td",{style:{"text-align":"center"}},"2580",-1),Dn={style:{"text-align":"left"}},Fn={href:"https://leetcode.com/problems/count-ways-to-group-overlapping-ranges",target:"_blank",rel:"noopener noreferrer"},Jn=t("td",{style:{"text-align":"center"}},null,-1),Kn={style:{"text-align":"left"}},Pn=t("code",null,"数组",-1),Qn=t("code",null,"排序",-1),Un={style:{"text-align":"left"}},Wn=t("td",{style:{"text-align":"center"}},"2848",-1),Xn={style:{"text-align":"left"}},Yn={href:"https://leetcode.com/problems/points-that-intersect-with-cars",target:"_blank",rel:"noopener noreferrer"},Zn=t("td",{style:{"text-align":"center"}},null,-1),$n={style:{"text-align":"left"}},te=t("code",null,"数组",-1),ne=t("code",null,"哈希表",-1),ee=t("code",null,"前缀和",-1),se={style:{"text-align":"left"}},ae=t("td",{style:{"text-align":"center"}},"3169",-1),oe={style:{"text-align":"left"}},le={href:"https://leetcode.com/problems/count-days-without-meetings",target:"_blank",rel:"noopener noreferrer"},ce=t("td",{style:{"text-align":"center"}},null,-1),ie={style:{"text-align":"left"}},pe=t("code",null,"数组",-1),re=t("code",null,"排序",-1),de={style:{"text-align":"left"}},ue=t("td",{style:{"text-align":"center"}},"3323",-1),_e={style:{"text-align":"left"}},he={href:"https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval",target:"_blank",rel:"noopener noreferrer"},fe=t("td",{style:{"text-align":"center"}},null,-1),ke={style:{"text-align":"left"}},me=t("code",null,"数组",-1),ge=t("code",null,"二分查找",-1),ye=t("code",null,"排序",-1),be=t("code",null,"1+",-1),xe={style:{"text-align":"left"}};function ve(we,Me){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),r("div",null,[h,t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),t("a",m,[g,n(o)]),e(),t("a",y,[b,n(o)])]),x,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,t("td",M,[t("a",E,[e("插入区间"),n(o)])]),t("td",I,[n(a,{to:"/problem/0057.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1})]),t("td",H,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[L,t("td",N,[t("a",R,[e("会议室 🔒"),n(o)])]),V,t("td",j,[n(a,{to:"/tag/array.html"},{default:s(()=>[B]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[O]),_:1})]),t("td",S,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[z,t("td",G,[t("a",T,[e("会议室 II 🔒"),n(o)])]),A,t("td",D,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[F]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[J]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[K]),_:1}),e(),P]),t("td",Q,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[U,t("td",W,[t("a",X,[e("提莫攻击"),n(o)])]),Y,t("td",Z,[n(a,{to:"/tag/array.html"},{default:s(()=>[$]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[tt]),_:1})]),t("td",nt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[et,t("td",st,[t("a",at,[e("给字符串添加加粗标签 🔒"),n(o)])]),ot,t("td",lt,[n(a,{to:"/tag/trie.html"},{default:s(()=>[ct]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[it]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[pt]),_:1}),e(),rt]),t("td",dt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ut,t("td",_t,[t("a",ht,[e("Range 模块"),n(o)])]),ft,t("td",kt,[n(a,{to:"/tag/design.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[gt]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[yt]),_:1})]),t("td",bt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[xt,t("td",vt,[t("a",wt,[e("员工空闲时间 🔒"),n(o)])]),Mt,t("td",Et,[n(a,{to:"/tag/array.html"},{default:s(()=>[It]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[qt]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[Ct]),_:1})]),t("td",Ht,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Lt,t("td",Nt,[t("a",Rt,[e("划分字母区间"),n(o)])]),t("td",Vt,[n(a,{to:"/problem/0763.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",jt,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Bt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Ot]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[St]),_:1}),e(),zt]),t("td",Gt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Tt,t("td",At,[t("a",Dt,[e("区间列表的交集"),n(o)])]),t("td",Ft,[n(a,{to:"/problem/0986.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Jt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Kt]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Pt]),_:1})]),t("td",Qt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Ut,t("td",Wt,[t("a",Xt,[e("每天绘制新区域的数量 🔒"),n(o)])]),Yt,t("td",Zt,[n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[$t]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[tn]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[nn]),_:1})]),t("td",en,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[sn,t("td",an,[t("a",on,[e("由单个字符重复的最长子字符串"),n(o)])]),ln,t("td",cn,[n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[pn]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[rn]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[dn]),_:1}),e(),un]),t("td",_n,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[hn,t("td",fn,[t("a",kn,[e("统计区间中的整数数目"),n(o)])]),mn,t("td",gn,[n(a,{to:"/tag/design.html"},{default:s(()=>[yn]),_:1}),e(),n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[bn]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[xn]),_:1})]),t("td",vn,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[wn,t("td",Mn,[t("a",En,[e("将区间分为最少组数"),n(o)])]),t("td",In,[n(a,{to:"/problem/2406.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",qn,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Cn]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Hn]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Ln]),_:1}),e(),Nn]),t("td",Rn,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Vn,t("td",jn,[t("a",Bn,[e("判断两个事件是否存在冲突"),n(o)])]),On,t("td",Sn,[n(a,{to:"/tag/array.html"},{default:s(()=>[zn]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[Gn]),_:1})]),t("td",Tn,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[An,t("td",Dn,[t("a",Fn,[e("统计将重叠区间合并成组的方案数"),n(o)])]),Jn,t("td",Kn,[n(a,{to:"/tag/array.html"},{default:s(()=>[Pn]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[Qn]),_:1})]),t("td",Un,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Wn,t("td",Xn,[t("a",Yn,[e("与车相交的点"),n(o)])]),Zn,t("td",$n,[n(a,{to:"/tag/array.html"},{default:s(()=>[te]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[ne]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[ee]),_:1})]),t("td",se,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[ae,t("td",oe,[t("a",le,[e("无需开会的工作日"),n(o)])]),ce,t("td",ie,[n(a,{to:"/tag/array.html"},{default:s(()=>[pe]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[re]),_:1})]),t("td",de,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ue,t("td",_e,[t("a",he,[e("通过插入区间最小化连通组 🔒"),n(o)])]),fe,t("td",ke,[n(a,{to:"/tag/array.html"},{default:s(()=>[me]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[ge]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[ye]),_:1}),e(),be]),t("td",xe,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const Ie=i(_,[["render",ve],["__file","0056.html.vue"]]);export{Ie as default};
