import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-totCBmv-.js";const k={},g=n("h1",{id:"_436-寻找右区间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_436-寻找右区间","aria-hidden":"true"},"#"),s(" 436. 寻找右区间")],-1),h=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),m=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/find-right-interval",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-right-interval",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <code>intervals</code>, where <code>intervals[i] = [starti, endi]</code> and each <code>starti</code> is <strong>unique</strong>.</p><p>The <strong>right interval</strong> for an interval <code>i</code> is an interval <code>j</code> such that <code>startj &gt;= endi</code> and <code>startj</code> is <strong>minimized</strong>. Note that <code>i</code> may equal <code>j</code>.</p><p>Return <em>an array of<strong>right interval</strong> indices for each interval <code>i</code></em>. If no <strong>right interval</strong> exists for interval <code>i</code>, then put <code>-1</code> at index <code>i</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[1,2]]</p><p>Output: [-1]</p><p>Explanation: There is only one interval in the collection, so it outputs -1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[3,4],[2,3],[1,2]]</p><p>Output: [-1,0,1]</p><p>Explanation: There is no right interval for [3,4].</p><p>The right interval for [2,3] is [3,4] since start0 = 3 is the smallest start that is &gt;= end1 = 3.</p><p>The right interval for [1,2] is [2,3] since start1 = 2 is the smallest start that is &gt;= end2 = 2.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: intervals = [[1,4],[2,3],[3,4]]</p><p>Output: [-1,2,-1]</p><p>Explanation: There is no right interval for [1,4] and [3,4].</p><p>The right interval for [2,3] is [3,4] since start2 = 3 is the smallest start that is &gt;= end1 = 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 2 * 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>-10^6 &lt;= starti &lt;= endi &lt;= 10^6</code></li><li>The start point of each interval is <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个区间数组 <code>intervals</code> ，其中 <code>intervals[i] = [starti, endi]</code> ，且每个 <code>starti</code> 都 <strong>不同</strong> 。</p><p>区间 <code>i</code> 的 <strong>右侧区间</strong> 可以记作区间 <code>j</code> ，并满足 <code>startj\`\` &gt;= endi</code> ，且 <code>startj</code> <strong>最小化</strong> 。注意 <code>i</code> 可能等于 <code>j</code> 。</p><p>返回一个由每个区间 <code>i</code> 的 <strong>右侧区间</strong> 在 <code>intervals</code> 中对应下标组成的数组。如果某个区间 <code>i</code> 不存在对应的 <strong>右侧区间</strong> ，则下标 <code>i</code> 处的值设为 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> intervals = [[1,2]]</p><p><strong>输出：</strong>[-1]</p><p><strong>解释：</strong> 集合中只有一个区间，所以输出-1。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> intervals = [[3,4],[2,3],[1,2]]</p><p><strong>输出：</strong>[-1,0,1]</p><p><strong>解释：</strong> 对于 [3,4] ，没有满足条件的“右侧”区间。</p><p>对于 [2,3] ，区间[3,4]具有最小的“右”起点;</p><p>对于 [1,2] ，区间[2,3]具有最小的“右”起点。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> intervals = [[1,4],[2,3],[3,4]]</p><p><strong>输出：</strong>[-1,2,-1]</p><p><strong>解释：</strong> 对于区间 [1,4] 和 [3,4] ，没有满足条件的“右侧”区间。</p><p>对于 [2,3] ，区间 [3,4] 有最小的“右”起点。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 2 * 10^4</code></li><li><code>intervals[i].length == 2</code></li><li><code>-10^6 &lt;= starti &lt;= endi &lt;= 10^6</code></li><li>每个间隔的起点都 <strong>不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这题可以通过<strong>排序 + 二分查找</strong>高效解决。</p><ol><li><p><strong>保存区间起点和索引信息</strong>：</p><ul><li>为了保留原数组的索引，将所有区间的 <code>[start, end, index]</code> 提取出来形成一个新数组 <code>sortedArr</code>。</li></ul></li><li><p><strong>对起点进行排序</strong>：</p><ul><li>对 <code>sortedArr</code> 按起点从小到大排序，排序后，查找起点大于等于目标值时，可以利用二分查找高效完成。</li></ul></li><li><p><strong>遍历每个区间</strong>：</p><ul><li>对于区间 <code>i</code> 的 <code>end[i]</code>，使用二分查找在 <code>sortedArr</code> 中找到第一个满足 <code>start[j] &gt;= end[i]</code> 的区间。</li><li>如果找到符合条件的起点，将对应的索引加入结果数组；否则将 <code>-1</code> 加入结果数组。</li></ul></li><li><p><strong>返回结果数组</strong></p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n logn)</code>. <ul><li><code>sortedArr</code> 的排序时间复杂度为 <code>O(n logn)</code>；</li><li>对于每个区间进行一次二分查找，时间复杂度为 <code>O(logn)</code>，总共有 <code>n</code> 个区间，因此查找总复杂度为 <code>O(n logn)</code>；</li><li>总的时间复杂度为 <code>O(n logn)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，<code>sortedArr</code> 和结果数组都占用了 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRightInterval</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> intervals<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 构建带原索引信息的新排序数组</span>
	<span class="token keyword">const</span> sortedArr <span class="token operator">=</span> intervals
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span>item<span class="token punctuation">,</span> idx<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 结果数组</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> idx<span class="token punctuation">]</span> <span class="token keyword">of</span> sortedArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token comment">// 二分查找</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sortedArr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果找到了符合条件的起点，加入对应索引，否则加入 -1</span>
		res<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> left <span class="token operator">&lt;</span> n <span class="token operator">?</span> sortedArr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"352",-1),j=n("td",{style:{"text-align":"left"}},"将数据流变为多个不相交区间",-1),A=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},E=n("code",null,"设计",-1),T=n("code",null,"二分查找",-1),I=n("code",null,"有序集合",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/data-stream-as-disjoint-intervals",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/data-stream-as-disjoint-intervals",target:"_blank",rel:"noopener noreferrer"};function R(B,z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",b,[_,t(o)]),s(),n("a",f,[x,t(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,j,A,n("td",O,[t(e,{to:"/tag/design.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[T]),_:1}),s(),t(e,{to:"/tag/ordered-set.html"},{default:a(()=>[I]),_:1})]),N,n("td",C,[n("a",L,[s("🀄️"),t(o)]),s(),n("a",V,[s("🔗"),t(o)])])])])])])}const S=l(k,[["render",R],["__file","0436.html.vue"]]);export{S as default};
