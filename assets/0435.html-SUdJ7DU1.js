import{_ as p,r as l,o as c,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-totCBmv-.js";const h={},g=n("h1",{id:"_435-无重叠区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_435-无重叠区间","aria-hidden":"true"},"#"),t(" 435. 无重叠区间")],-1),k=n("code",null,"贪心",-1),m=n("code",null,"数组",-1),v=n("code",null,"动态规划",-1),_=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/non-overlapping-intervals",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/non-overlapping-intervals",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of intervals <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, return <em>the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping</em>.</p><p><strong>Note</strong> that intervals which only touch at a point are <strong>non-overlapping</strong>. For example, <code>[1, 2]</code> and <code>[2, 3]</code> are non-overlapping.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,2],[2,3],[3,4],[1,3]]</p><p>Output: 1</p><p>Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,2],[1,2],[1,2]]</p><p>Output: 2</p><p>Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: intervals = [[1,2],[2,3]]</p><p>Output: 0</p><p>Explanation: You don&#39;t need to remove any of the intervals since they&#39;re already non-overlapping.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^5</code></li><li><code>intervals[i].length == 2</code></li><li><code>-5 * 104 &lt;= starti &lt; endi &lt;= 5 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个区间的集合 <code>intervals</code> ，其中 <code>intervals[i] = [starti, endi]</code> 。返回 <em>需要移除区间的最小数量，使剩余区间互不重叠</em>。</p><p><strong>注意</strong> 只在一点上接触的区间是 <strong>不重叠的</strong> 。例如 <code>[1, 2]</code> 和 <code>[2, 3]</code> 是不重叠的。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> intervals = [[1,2],[2,3],[3,4],[1,3]]</p><p><strong>输出:</strong> 1</p><p><strong>解释:</strong> 移除 [1,3] 后，剩下的区间没有重叠。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> intervals = [ [1,2], [1,2], [1,2] ]</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong> 你需要移除两个 [1,2] 来使剩下的区间没有重叠。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> intervals = [ [1,2], [2,3] ]</p><p><strong>输出:</strong> 0</p><p><strong>解释:</strong> 你不需要移除任何区间，因为它们已经是无重叠的了。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^5</code></li><li><code>intervals[i].length == 2</code></li><li><code>-5 * 104 &lt;= starti &lt; endi &lt;= 5 * 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要使删除的区间数最少，可以从<strong>贪心算法</strong>的角度出发，优先保留结束时间较早的区间。因为结束时间越早，后续能够选择的区间范围越大，冲突的可能性越小。</p><ol><li><p><strong>排序区间</strong>：<br> 按照区间的结束时间 <code>end</code> 升序排序。</p></li><li><p><strong>遍历区间</strong>：<br> 逐一遍历区间，记录当前非重叠区间的结束时间。</p><ul><li>如果当前区间的开始时间 <code>start</code> 大于等于前一个非重叠区间的结束时间 <code>end</code>，说明它们不重叠，可以保留当前区间，同时更新当前的 <code>end</code>。</li><li>如果当前区间与前一个区间重叠，则跳过当前区间（相当于删除它）。</li></ul></li><li><p><strong>计算结果</strong>：<br> 用总区间数减去保留的区间数，即可得出需要删除的区间数。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是区间的数量，排序的时间复杂度为 <code>O(n log n)</code>，遍历区间的时间复杂度为 <code>O(n)</code>，总时间复杂度为 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个变量，排序为原地排序。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">eraseOverlapIntervals</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按结束时间排序</span>
	intervals<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录非重叠区间的数量</span>
	<span class="token keyword">let</span> prevEnd <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 初始化为一个不可能的最小值</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span> <span class="token keyword">of</span> intervals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;=</span> prevEnd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前区间不重叠，更新 prevEnd</span>
			prevEnd <span class="token operator">=</span> end<span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 总区间数 - 非重叠区间数 = 需要删除的区间数</span>
	<span class="token keyword">return</span> intervals<span class="token punctuation">.</span>length <span class="token operator">-</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"452",-1),O=n("td",{style:{"text-align":"left"}},"用最少数量的箭引爆气球",-1),I={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),L=n("code",null,"数组",-1),V=n("code",null,"排序",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2446",-1),G=n("td",{style:{"text-align":"left"}},"判断两个事件是否存在冲突",-1),M=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"数组",-1),z=n("code",null,"字符串",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),i("div",null,[g,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",b,[f,e(o)]),t(),n("a",y,[x,e(o)])]),w,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[q,O,n("td",I,[e(a,{to:"/problem/0452.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",N,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[V]),_:1})]),j,n("td",B,[n("a",R,[t("🀄️"),e(o)]),t(),n("a",Y,[t("🔗"),e(o)])])]),n("tr",null,[F,G,M,n("td",S,[e(a,{to:"/tag/array.html"},{default:s(()=>[T]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[z]),_:1})]),A,n("td",D,[n("a",H,[t("🀄️"),e(o)]),t(),n("a",J,[t("🔗"),e(o)])])])])])])}const W=p(h,[["render",K],["__file","0435.html.vue"]]);export{W as default};
