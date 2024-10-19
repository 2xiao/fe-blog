import{_ as i,r as c,o as r,c as p,a as t,d as e,b as n,w as s,f as d,e as u}from"./app-ynO5B_DP.js";const _={},h={id:"_56-合并区间",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_56-合并区间","aria-hidden":"true"},"#",-1),k={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"数组",-1),m=t("code",null,"排序",-1),y={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]</p><p>Output: [[1,6],[8,10],[15,18]]</p><p>Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,4],[4,5]]</p><p>Output: [[1,5]]</p><p>Explanation: Intervals [1,4] and [4,5] are considered overlapping.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= starti &lt;= endi &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [starti, endi]</code> 。请你合并所有重叠的区间，并返回 <em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>一个区间可以表示为 <code>[start, end]</code>，先按区间的 <code>start</code> 排序</li><li>对于几个相交区间合并后的结果区间 <code>x</code>，<code>x.start</code> 一定是这些相交区间中 <code>start</code> 最小的，<code>x.end</code> 一定是这些相交区间中 <code>end</code> 最大的</li><li>由于已经排了序，<code>x.start</code> 很好确定，<code>求 x.end</code> 也很容易，可以类比在数组中找最大值的过程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,15),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),w=t("td",{style:{"text-align":"center"}},"57",-1),M={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},I={style:{"text-align":"center"}},q={href:"/problem/0057",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"left"}},H=t("code",null,"数组",-1),L={style:{"text-align":"left"}},N=t("td",{style:{"text-align":"center"}},"252",-1),R={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/meeting-rooms",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},O=t("code",null,"数组",-1),S=t("code",null,"排序",-1),z={style:{"text-align":"left"}},G=t("td",{style:{"text-align":"center"}},"253",-1),T={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},J=t("code",null,"贪心",-1),K=t("code",null,"数组",-1),P=t("code",null,"双指针",-1),Q=t("code",null,"3+",-1),U={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"495",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"数组",-1),nt=t("code",null,"模拟",-1),et={style:{"text-align":"left"}},st=t("td",{style:{"text-align":"center"}},"616",-1),at={style:{"text-align":"left"}},ot={href:"https://leetcode.com/problems/add-bold-tag-in-string",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"字典树",-1),rt=t("code",null,"数组",-1),pt=t("code",null,"哈希表",-1),dt=t("code",null,"2+",-1),ut={style:{"text-align":"left"}},_t=t("td",{style:{"text-align":"center"}},"715",-1),ht={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/range-module",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},mt=t("code",null,"设计",-1),yt=t("code",null,"线段树",-1),bt=t("code",null,"有序集合",-1),xt={style:{"text-align":"left"}},vt=t("td",{style:{"text-align":"center"}},"759",-1),wt={style:{"text-align":"left"}},Mt={href:"https://leetcode.com/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},null,-1),It={style:{"text-align":"left"}},qt=t("code",null,"数组",-1),Ct=t("code",null,"排序",-1),Ht=t("code",null,"堆（优先队列）",-1),Lt={style:{"text-align":"left"}},Nt=t("td",{style:{"text-align":"center"}},"763",-1),Rt={style:{"text-align":"left"}},Vt={href:"https://leetcode.com/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},jt={style:{"text-align":"center"}},Bt={href:"/problem/0763",target:"_blank",rel:"noopener noreferrer"},Ot={style:{"text-align":"left"}},St=t("code",null,"贪心",-1),zt=t("code",null,"哈希表",-1),Gt=t("code",null,"双指针",-1),Tt=t("code",null,"1+",-1),At={style:{"text-align":"left"}},Dt=t("td",{style:{"text-align":"center"}},"986",-1),Ft={style:{"text-align":"left"}},Jt={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},Kt={style:{"text-align":"center"}},Pt={href:"/problem/0986",target:"_blank",rel:"noopener noreferrer"},Qt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Wt=t("code",null,"双指针",-1),Xt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"2158",-1),Zt={style:{"text-align":"left"}},$t={href:"https://leetcode.com/problems/amount-of-new-area-painted-each-day",target:"_blank",rel:"noopener noreferrer"},tn=t("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},en=t("code",null,"线段树",-1),sn=t("code",null,"数组",-1),an=t("code",null,"有序集合",-1),on={style:{"text-align":"left"}},ln=t("td",{style:{"text-align":"center"}},"2213",-1),cn={style:{"text-align":"left"}},rn={href:"https://leetcode.com/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},pn=t("td",{style:{"text-align":"center"}},null,-1),dn={style:{"text-align":"left"}},un=t("code",null,"线段树",-1),_n=t("code",null,"数组",-1),hn=t("code",null,"字符串",-1),fn=t("code",null,"1+",-1),kn={style:{"text-align":"left"}},gn=t("td",{style:{"text-align":"center"}},"2276",-1),mn={style:{"text-align":"left"}},yn={href:"https://leetcode.com/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"},bn=t("td",{style:{"text-align":"center"}},null,-1),xn={style:{"text-align":"left"}},vn=t("code",null,"设计",-1),wn=t("code",null,"线段树",-1),Mn=t("code",null,"有序集合",-1),En={style:{"text-align":"left"}},In=t("td",{style:{"text-align":"center"}},"2406",-1),qn={style:{"text-align":"left"}},Cn={href:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},Hn={style:{"text-align":"center"}},Ln={href:"/problem/2406",target:"_blank",rel:"noopener noreferrer"},Nn={style:{"text-align":"left"}},Rn=t("code",null,"贪心",-1),Vn=t("code",null,"数组",-1),jn=t("code",null,"双指针",-1),Bn=t("code",null,"3+",-1),On={style:{"text-align":"left"}},Sn=t("td",{style:{"text-align":"center"}},"2446",-1),zn={style:{"text-align":"left"}},Gn={href:"https://leetcode.com/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},Tn=t("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},Dn=t("code",null,"数组",-1),Fn=t("code",null,"字符串",-1),Jn={style:{"text-align":"left"}},Kn=t("td",{style:{"text-align":"center"}},"2580",-1),Pn={style:{"text-align":"left"}},Qn={href:"https://leetcode.com/problems/count-ways-to-group-overlapping-ranges",target:"_blank",rel:"noopener noreferrer"},Un=t("td",{style:{"text-align":"center"}},null,-1),Wn={style:{"text-align":"left"}},Xn=t("code",null,"数组",-1),Yn=t("code",null,"排序",-1),Zn={style:{"text-align":"left"}},$n=t("td",{style:{"text-align":"center"}},"2848",-1),te={style:{"text-align":"left"}},ne={href:"https://leetcode.com/problems/points-that-intersect-with-cars",target:"_blank",rel:"noopener noreferrer"},ee=t("td",{style:{"text-align":"center"}},null,-1),se={style:{"text-align":"left"}},ae=t("code",null,"数组",-1),oe=t("code",null,"哈希表",-1),le=t("code",null,"前缀和",-1),ce={style:{"text-align":"left"}},ie=t("td",{style:{"text-align":"center"}},"3169",-1),re={style:{"text-align":"left"}},pe={href:"https://leetcode.com/problems/count-days-without-meetings",target:"_blank",rel:"noopener noreferrer"},de=t("td",{style:{"text-align":"center"}},null,-1),ue={style:{"text-align":"left"}},_e=t("code",null,"数组",-1),he=t("code",null,"排序",-1),fe={style:{"text-align":"left"}},ke=t("td",{style:{"text-align":"center"}},"3323",-1),ge={style:{"text-align":"left"}},me={href:"https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval",target:"_blank",rel:"noopener noreferrer"},ye=t("td",{style:{"text-align":"center"}},null,-1),be=t("td",{style:{"text-align":"left"}},null,-1),xe={style:{"text-align":"left"}};function ve(we,Me){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return r(),p("div",null,[t("h1",h,[f,e(),t("a",k,[e("56. 合并区间"),n(o)])]),t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",y,[b,n(o)])]),x,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,t("td",M,[t("a",E,[e("插入区间"),n(o)])]),t("td",I,[t("a",q,[e("[✓]"),n(o)])]),t("td",C,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[H]),_:1})]),t("td",L,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[N,t("td",R,[t("a",V,[e("会议室"),n(o)])]),j,t("td",B,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[S]),_:1})]),t("td",z,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[G,t("td",T,[t("a",A,[e("会议室 II"),n(o)])]),D,t("td",F,[n(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[J]),_:1}),e(),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[K]),_:1}),e(),n(a,{to:"/outline/tag/two-pointers.html"},{default:s(()=>[P]),_:1}),e(),Q]),t("td",U,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[e("提莫攻击"),n(o)])]),Z,t("td",$,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),n(a,{to:"/outline/tag/simulation.html"},{default:s(()=>[nt]),_:1})]),t("td",et,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[st,t("td",at,[t("a",ot,[e("给字符串添加加粗标签"),n(o)])]),lt,t("td",ct,[n(a,{to:"/outline/tag/trie.html"},{default:s(()=>[it]),_:1}),e(),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[rt]),_:1}),e(),n(a,{to:"/outline/tag/hash-table.html"},{default:s(()=>[pt]),_:1}),e(),dt]),t("td",ut,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[_t,t("td",ht,[t("a",ft,[e("Range 模块"),n(o)])]),kt,t("td",gt,[n(a,{to:"/outline/tag/design.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/outline/tag/segment-tree.html"},{default:s(()=>[yt]),_:1}),e(),n(a,{to:"/outline/tag/ordered-set.html"},{default:s(()=>[bt]),_:1})]),t("td",xt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[vt,t("td",wt,[t("a",Mt,[e("员工空闲时间"),n(o)])]),Et,t("td",It,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[qt]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[Ct]),_:1}),e(),n(a,{to:"/outline/tag/heap-priority-queue.html"},{default:s(()=>[Ht]),_:1})]),t("td",Lt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Nt,t("td",Rt,[t("a",Vt,[e("划分字母区间"),n(o)])]),t("td",jt,[t("a",Bt,[e("[✓]"),n(o)])]),t("td",Ot,[n(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[St]),_:1}),e(),n(a,{to:"/outline/tag/hash-table.html"},{default:s(()=>[zt]),_:1}),e(),n(a,{to:"/outline/tag/two-pointers.html"},{default:s(()=>[Gt]),_:1}),e(),Tt]),t("td",At,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Dt,t("td",Ft,[t("a",Jt,[e("区间列表的交集"),n(o)])]),t("td",Kt,[t("a",Pt,[e("[✓]"),n(o)])]),t("td",Qt,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[Ut]),_:1}),e(),n(a,{to:"/outline/tag/two-pointers.html"},{default:s(()=>[Wt]),_:1})]),t("td",Xt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Yt,t("td",Zt,[t("a",$t,[e("每天绘制新区域的数量"),n(o)])]),tn,t("td",nn,[n(a,{to:"/outline/tag/segment-tree.html"},{default:s(()=>[en]),_:1}),e(),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[sn]),_:1}),e(),n(a,{to:"/outline/tag/ordered-set.html"},{default:s(()=>[an]),_:1})]),t("td",on,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[ln,t("td",cn,[t("a",rn,[e("由单个字符重复的最长子字符串"),n(o)])]),pn,t("td",dn,[n(a,{to:"/outline/tag/segment-tree.html"},{default:s(()=>[un]),_:1}),e(),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[_n]),_:1}),e(),n(a,{to:"/outline/tag/string.html"},{default:s(()=>[hn]),_:1}),e(),fn]),t("td",kn,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[gn,t("td",mn,[t("a",yn,[e("统计区间中的整数数目"),n(o)])]),bn,t("td",xn,[n(a,{to:"/outline/tag/design.html"},{default:s(()=>[vn]),_:1}),e(),n(a,{to:"/outline/tag/segment-tree.html"},{default:s(()=>[wn]),_:1}),e(),n(a,{to:"/outline/tag/ordered-set.html"},{default:s(()=>[Mn]),_:1})]),t("td",En,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[In,t("td",qn,[t("a",Cn,[e("将区间分为最少组数"),n(o)])]),t("td",Hn,[t("a",Ln,[e("[✓]"),n(o)])]),t("td",Nn,[n(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[Rn]),_:1}),e(),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[Vn]),_:1}),e(),n(a,{to:"/outline/tag/two-pointers.html"},{default:s(()=>[jn]),_:1}),e(),Bn]),t("td",On,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Sn,t("td",zn,[t("a",Gn,[e("判断两个事件是否存在冲突"),n(o)])]),Tn,t("td",An,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[Dn]),_:1}),e(),n(a,{to:"/outline/tag/string.html"},{default:s(()=>[Fn]),_:1})]),t("td",Jn,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[Kn,t("td",Pn,[t("a",Qn,[e("统计将重叠区间合并成组的方案数"),n(o)])]),Un,t("td",Wn,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[Xn]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[Yn]),_:1})]),t("td",Zn,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[$n,t("td",te,[t("a",ne,[e("与车相交的点"),n(o)])]),ee,t("td",se,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[ae]),_:1}),e(),n(a,{to:"/outline/tag/hash-table.html"},{default:s(()=>[oe]),_:1}),e(),n(a,{to:"/outline/tag/prefix-sum.html"},{default:s(()=>[le]),_:1})]),t("td",ce,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[ie,t("td",re,[t("a",pe,[e("无需开会的工作日"),n(o)])]),de,t("td",ue,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[_e]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[he]),_:1})]),t("td",fe,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[ke,t("td",ge,[t("a",me,[e("通过插入区间最小化连通组"),n(o)])]),ye,be,t("td",xe,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const Ie=i(_,[["render",ve],["__file","0056.html.vue"]]);export{Ie as default};
