import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as _}from"./app-UFGGnKWA.js";const u={},h=t("h1",{id:"_56-合并区间",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_56-合并区间","aria-hidden":"true"},"#"),e(" 56. 合并区间")],-1),g=t("code",null,"数组",-1),m=t("code",null,"排序",-1),k={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=_(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return <em>an array of the non-overlapping intervals that cover all the intervals in the input</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,3],[2,6],[8,10],[15,18]]</p><p>Output: [[1,6],[8,10],[15,18]]</p><p>Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,4],[4,5]]</p><p>Output: [[1,5]]</p><p>Explanation: Intervals [1,4] and [4,5] are considered overlapping.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>0 &lt;= starti &lt;= endi &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>以数组 <code>intervals</code> 表示若干个区间的集合，其中单个区间为 <code>intervals[i] = [starti, endi]</code> 。请你合并所有重叠的区间，并返回 <em>一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间</em> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>一个区间可以表示为 <code>[start, end]</code>，先按区间的 <code>start</code> 排序</li><li>对于几个相交区间合并后的结果区间 <code>x</code>，<code>x.start</code> 一定是这些相交区间中 <code>start</code> 最小的，<code>x.end</code> 一定是这些相交区间中 <code>end</code> 最大的</li><li>由于已经排了序，<code>x.start</code> 很好确定，<code>求 x.end</code> 也很容易，可以类比在数组中找最大值的过程。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,15),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"57",-1),E=t("td",{style:{"text-align":"left"}},"插入区间",-1),I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=t("code",null,"数组",-1),L=t("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/insert-interval",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"252",-1),B=t("td",{style:{"text-align":"left"}},"会议室 🔒",-1),M=t("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},O=t("code",null,"数组",-1),S=t("code",null,"排序",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/meeting-rooms",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/meeting-rooms",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"253",-1),H=t("td",{style:{"text-align":"left"}},"会议室 II 🔒",-1),J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"贪心",-1),Q=t("code",null,"数组",-1),U=t("code",null,"双指针",-1),W=t("code",null,"3+",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/meeting-rooms-ii",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"495",-1),et=t("td",{style:{"text-align":"left"}},"提莫攻击",-1),nt={style:{"text-align":"center"}},st={style:{"text-align":"left"}},at=t("code",null,"数组",-1),ot=t("code",null,"模拟",-1),lt=t("td",{style:{"text-align":"center"}},"🟢",-1),ct={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"616",-1),dt=t("td",{style:{"text-align":"left"}},"给字符串添加加粗标签 🔒",-1),_t=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},ht=t("code",null,"字典树",-1),gt=t("code",null,"数组",-1),mt=t("code",null,"哈希表",-1),kt=t("code",null,"2+",-1),ft=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/add-bold-tag-in-string",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://leetcode.com/problems/add-bold-tag-in-string",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},"715",-1),wt=t("td",{style:{"text-align":"left"}},"Range 模块",-1),Et=t("td",{style:{"text-align":"center"}},null,-1),It={style:{"text-align":"left"}},qt=t("code",null,"设计",-1),Ct=t("code",null,"线段树",-1),Lt=t("code",null,"有序集合",-1),Nt=t("td",{style:{"text-align":"center"}},"🔴",-1),Rt={style:{"text-align":"center"}},Vt={href:"https://leetcode.cn/problems/range-module",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/range-module",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},"759",-1),Mt=t("td",{style:{"text-align":"left"}},"员工空闲时间 🔒",-1),zt=t("td",{style:{"text-align":"center"}},null,-1),Ot={style:{"text-align":"left"}},St=t("code",null,"数组",-1),Gt=t("code",null,"排序",-1),Tt=t("code",null,"堆（优先队列）",-1),At=t("td",{style:{"text-align":"center"}},"🔴",-1),Dt={style:{"text-align":"center"}},Ft={href:"https://leetcode.cn/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},Ht={href:"https://leetcode.com/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},"763",-1),Kt=t("td",{style:{"text-align":"left"}},"划分字母区间",-1),Pt={style:{"text-align":"center"}},Qt={style:{"text-align":"left"}},Ut=t("code",null,"贪心",-1),Wt=t("code",null,"哈希表",-1),Xt=t("code",null,"双指针",-1),Yt=t("code",null,"1+",-1),Zt=t("td",{style:{"text-align":"center"}},"🟠",-1),$t={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/partition-labels",target:"_blank",rel:"noopener noreferrer"},ne=t("td",{style:{"text-align":"center"}},"986",-1),se=t("td",{style:{"text-align":"left"}},"区间列表的交集",-1),ae={style:{"text-align":"center"}},oe={style:{"text-align":"left"}},le=t("code",null,"数组",-1),ce=t("code",null,"双指针",-1),re=t("td",{style:{"text-align":"center"}},"🟠",-1),ie={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},de={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},_e=t("td",{style:{"text-align":"center"}},"2158",-1),ue=t("td",{style:{"text-align":"left"}},"每天绘制新区域的数量 🔒",-1),he=t("td",{style:{"text-align":"center"}},null,-1),ge={style:{"text-align":"left"}},me=t("code",null,"线段树",-1),ke=t("code",null,"数组",-1),fe=t("code",null,"有序集合",-1),ye=t("td",{style:{"text-align":"center"}},"🔴",-1),be={style:{"text-align":"center"}},xe={href:"https://leetcode.cn/problems/amount-of-new-area-painted-each-day",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://leetcode.com/problems/amount-of-new-area-painted-each-day",target:"_blank",rel:"noopener noreferrer"},we=t("td",{style:{"text-align":"center"}},"2213",-1),Ee=t("td",{style:{"text-align":"left"}},"由单个字符重复的最长子字符串",-1),Ie=t("td",{style:{"text-align":"center"}},null,-1),qe={style:{"text-align":"left"}},Ce=t("code",null,"线段树",-1),Le=t("code",null,"数组",-1),Ne=t("code",null,"字符串",-1),Re=t("code",null,"1+",-1),Ve=t("td",{style:{"text-align":"center"}},"🔴",-1),je={style:{"text-align":"center"}},Be={href:"https://leetcode.cn/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://leetcode.com/problems/longest-substring-of-one-repeating-character",target:"_blank",rel:"noopener noreferrer"},ze=t("td",{style:{"text-align":"center"}},"2276",-1),Oe=t("td",{style:{"text-align":"left"}},"统计区间中的整数数目",-1),Se=t("td",{style:{"text-align":"center"}},null,-1),Ge={style:{"text-align":"left"}},Te=t("code",null,"设计",-1),Ae=t("code",null,"线段树",-1),De=t("code",null,"有序集合",-1),Fe=t("td",{style:{"text-align":"center"}},"🔴",-1),He={style:{"text-align":"center"}},Je={href:"https://leetcode.cn/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"},Ke={href:"https://leetcode.com/problems/count-integers-in-intervals",target:"_blank",rel:"noopener noreferrer"},Pe=t("td",{style:{"text-align":"center"}},"2406",-1),Qe=t("td",{style:{"text-align":"left"}},"将区间分为最少组数",-1),Ue={style:{"text-align":"center"}},We={style:{"text-align":"left"}},Xe=t("code",null,"贪心",-1),Ye=t("code",null,"数组",-1),Ze=t("code",null,"双指针",-1),$e=t("code",null,"3+",-1),tn=t("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},an=t("td",{style:{"text-align":"center"}},"2446",-1),on=t("td",{style:{"text-align":"left"}},"判断两个事件是否存在冲突",-1),ln=t("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},rn=t("code",null,"数组",-1),pn=t("code",null,"字符串",-1),dn=t("td",{style:{"text-align":"center"}},"🟢",-1),_n={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},gn=t("td",{style:{"text-align":"center"}},"2580",-1),mn=t("td",{style:{"text-align":"left"}},"统计将重叠区间合并成组的方案数",-1),kn=t("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},yn=t("code",null,"数组",-1),bn=t("code",null,"排序",-1),xn=t("td",{style:{"text-align":"center"}},"🟠",-1),vn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/count-ways-to-group-overlapping-ranges",target:"_blank",rel:"noopener noreferrer"},En={href:"https://leetcode.com/problems/count-ways-to-group-overlapping-ranges",target:"_blank",rel:"noopener noreferrer"},In=t("td",{style:{"text-align":"center"}},"2848",-1),qn=t("td",{style:{"text-align":"left"}},"与车相交的点",-1),Cn=t("td",{style:{"text-align":"center"}},null,-1),Ln={style:{"text-align":"left"}},Nn=t("code",null,"数组",-1),Rn=t("code",null,"哈希表",-1),Vn=t("code",null,"前缀和",-1),jn=t("td",{style:{"text-align":"center"}},"🟢",-1),Bn={style:{"text-align":"center"}},Mn={href:"https://leetcode.cn/problems/points-that-intersect-with-cars",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://leetcode.com/problems/points-that-intersect-with-cars",target:"_blank",rel:"noopener noreferrer"},On=t("td",{style:{"text-align":"center"}},"3169",-1),Sn=t("td",{style:{"text-align":"left"}},"无需开会的工作日",-1),Gn=t("td",{style:{"text-align":"center"}},null,-1),Tn={style:{"text-align":"left"}},An=t("code",null,"数组",-1),Dn=t("code",null,"排序",-1),Fn=t("td",{style:{"text-align":"center"}},"🟠",-1),Hn={style:{"text-align":"center"}},Jn={href:"https://leetcode.cn/problems/count-days-without-meetings",target:"_blank",rel:"noopener noreferrer"},Kn={href:"https://leetcode.com/problems/count-days-without-meetings",target:"_blank",rel:"noopener noreferrer"},Pn=t("td",{style:{"text-align":"center"}},"3323",-1),Qn=t("td",{style:{"text-align":"left"}},"通过插入区间最小化连通组 🔒",-1),Un=t("td",{style:{"text-align":"center"}},null,-1),Wn={style:{"text-align":"left"}},Xn=t("code",null,"数组",-1),Yn=t("code",null,"二分查找",-1),Zn=t("code",null,"排序",-1),$n=t("code",null,"1+",-1),ts=t("td",{style:{"text-align":"center"}},"🟠",-1),es={style:{"text-align":"center"}},ns={href:"https://leetcode.cn/problems/minimize-connected-groups-by-inserting-interval",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval",target:"_blank",rel:"noopener noreferrer"};function as(os,ls){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",k,[f,n(o)]),e(),t("a",y,[b,n(o)])]),x,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,E,t("td",I,[n(a,{to:"/problem/0057.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1})]),L,t("td",N,[t("a",R,[e("🀄️"),n(o)]),e(),t("a",V,[e("🔗"),n(o)])])]),t("tr",null,[j,B,M,t("td",z,[n(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[S]),_:1})]),G,t("td",T,[t("a",A,[e("🀄️"),n(o)]),e(),t("a",D,[e("🔗"),n(o)])])]),t("tr",null,[F,H,J,t("td",K,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[P]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[U]),_:1}),e(),W]),X,t("td",Y,[t("a",Z,[e("🀄️"),n(o)]),e(),t("a",$,[e("🔗"),n(o)])])]),t("tr",null,[tt,et,t("td",nt,[n(a,{to:"/problem/0495.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",st,[n(a,{to:"/tag/array.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[ot]),_:1})]),lt,t("td",ct,[t("a",rt,[e("🀄️"),n(o)]),e(),t("a",it,[e("🔗"),n(o)])])]),t("tr",null,[pt,dt,_t,t("td",ut,[n(a,{to:"/tag/trie.html"},{default:s(()=>[ht]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[mt]),_:1}),e(),kt]),ft,t("td",yt,[t("a",bt,[e("🀄️"),n(o)]),e(),t("a",xt,[e("🔗"),n(o)])])]),t("tr",null,[vt,wt,Et,t("td",It,[n(a,{to:"/tag/design.html"},{default:s(()=>[qt]),_:1}),e(),n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[Ct]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[Lt]),_:1})]),Nt,t("td",Rt,[t("a",Vt,[e("🀄️"),n(o)]),e(),t("a",jt,[e("🔗"),n(o)])])]),t("tr",null,[Bt,Mt,zt,t("td",Ot,[n(a,{to:"/tag/array.html"},{default:s(()=>[St]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[Gt]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[Tt]),_:1})]),At,t("td",Dt,[t("a",Ft,[e("🀄️"),n(o)]),e(),t("a",Ht,[e("🔗"),n(o)])])]),t("tr",null,[Jt,Kt,t("td",Pt,[n(a,{to:"/problem/0763.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Qt,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Ut]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Wt]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Xt]),_:1}),e(),Yt]),Zt,t("td",$t,[t("a",te,[e("🀄️"),n(o)]),e(),t("a",ee,[e("🔗"),n(o)])])]),t("tr",null,[ne,se,t("td",ae,[n(a,{to:"/problem/0986.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",oe,[n(a,{to:"/tag/array.html"},{default:s(()=>[le]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[ce]),_:1})]),re,t("td",ie,[t("a",pe,[e("🀄️"),n(o)]),e(),t("a",de,[e("🔗"),n(o)])])]),t("tr",null,[_e,ue,he,t("td",ge,[n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[me]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[ke]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[fe]),_:1})]),ye,t("td",be,[t("a",xe,[e("🀄️"),n(o)]),e(),t("a",ve,[e("🔗"),n(o)])])]),t("tr",null,[we,Ee,Ie,t("td",qe,[n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[Ce]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Le]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[Ne]),_:1}),e(),Re]),Ve,t("td",je,[t("a",Be,[e("🀄️"),n(o)]),e(),t("a",Me,[e("🔗"),n(o)])])]),t("tr",null,[ze,Oe,Se,t("td",Ge,[n(a,{to:"/tag/design.html"},{default:s(()=>[Te]),_:1}),e(),n(a,{to:"/tag/segment-tree.html"},{default:s(()=>[Ae]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[De]),_:1})]),Fe,t("td",He,[t("a",Je,[e("🀄️"),n(o)]),e(),t("a",Ke,[e("🔗"),n(o)])])]),t("tr",null,[Pe,Qe,t("td",Ue,[n(a,{to:"/problem/2406.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",We,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Xe]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Ye]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Ze]),_:1}),e(),$e]),tn,t("td",en,[t("a",nn,[e("🀄️"),n(o)]),e(),t("a",sn,[e("🔗"),n(o)])])]),t("tr",null,[an,on,ln,t("td",cn,[n(a,{to:"/tag/array.html"},{default:s(()=>[rn]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[pn]),_:1})]),dn,t("td",_n,[t("a",un,[e("🀄️"),n(o)]),e(),t("a",hn,[e("🔗"),n(o)])])]),t("tr",null,[gn,mn,kn,t("td",fn,[n(a,{to:"/tag/array.html"},{default:s(()=>[yn]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[bn]),_:1})]),xn,t("td",vn,[t("a",wn,[e("🀄️"),n(o)]),e(),t("a",En,[e("🔗"),n(o)])])]),t("tr",null,[In,qn,Cn,t("td",Ln,[n(a,{to:"/tag/array.html"},{default:s(()=>[Nn]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Rn]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Vn]),_:1})]),jn,t("td",Bn,[t("a",Mn,[e("🀄️"),n(o)]),e(),t("a",zn,[e("🔗"),n(o)])])]),t("tr",null,[On,Sn,Gn,t("td",Tn,[n(a,{to:"/tag/array.html"},{default:s(()=>[An]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[Dn]),_:1})]),Fn,t("td",Hn,[t("a",Jn,[e("🀄️"),n(o)]),e(),t("a",Kn,[e("🔗"),n(o)])])]),t("tr",null,[Pn,Qn,Un,t("td",Wn,[n(a,{to:"/tag/array.html"},{default:s(()=>[Xn]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Yn]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[Zn]),_:1}),e(),$n]),ts,t("td",es,[t("a",ns,[e("🀄️"),n(o)]),e(),t("a",ss,[e("🔗"),n(o)])])])])])])}const rs=r(u,[["render",as],["__file","0056.html.vue"]]);export{rs as default};
