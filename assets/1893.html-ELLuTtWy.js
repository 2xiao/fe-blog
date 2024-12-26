import{_ as r,r as c,o as p,c as i,a as n,b as e,d as s,w as a,f as d,e as u}from"./app-3dvbhwow.js";const k={},h=n("h1",{id:"_1893-检查是否区域内所有整数都被覆盖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1893-检查是否区域内所有整数都被覆盖","aria-hidden":"true"},"#"),e(" 1893. 检查是否区域内所有整数都被覆盖")],-1),g=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),f=n("code",null,"前缀和",-1),b={href:"https://leetcode.cn/problems/check-if-all-the-integers-in-a-range-are-covered",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer array <code>ranges</code> and two integers <code>left</code> and <code>right</code>. Each <code>ranges[i] = [starti, endi]</code> represents an <strong>inclusive</strong> interval between <code>starti</code> and <code>endi</code>.</p><p>Return <code>true</code> <em>if each integer in the inclusive range</em> <code>[left, right]</code> <em>is covered by <strong>at least one</strong> interval in</em> <code>ranges</code>. Return <code>false</code> <em>otherwise</em>.</p><p>An integer <code>x</code> is covered by an interval <code>ranges[i] = [starti, endi]</code> if <code>starti &lt;= x &lt;= endi</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5</p><p>Output: true</p><p>Explanation: Every integer between 2 and 5 is covered:</p><ul><li>2 is covered by the first range.</li><li>3 and 4 are covered by the second range.</li><li>5 is covered by the third range.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ranges = [[1,10],[10,20]], left = 21, right = 21</p><p>Output: false</p><p>Explanation: 21 is not covered by any range.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ranges.length &lt;= 50</code></li><li><code>1 &lt;= starti &lt;= endi &lt;= 50</code></li><li><code>1 &lt;= left &lt;= right &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>ranges</code> 和两个整数 <code>left</code> 和 <code>right</code> 。每个 <code>ranges[i] = [starti, endi]</code> 表示一个从 <code>starti</code> 到 <code>endi</code> 的 <strong>闭区间</strong> 。</p><p>如果闭区间 <code>[left, right]</code> 内每个整数都被 <code>ranges</code> 中 <strong>至少一个</strong> 区间覆盖，那么请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p>已知区间 <code>ranges[i] = [starti, endi]</code> ，如果整数 <code>x</code> 满足 <code>starti &lt;= x &lt;= endi</code> ，那么我们称整数<code>x</code> 被覆盖了。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 2 到 5 的每个整数都被覆盖了：</p><ul><li>2 被第一个区间覆盖。</li><li>3 和 4 被第二个区间覆盖。</li><li>5 被第三个区间覆盖。</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> ranges = [[1,10],[10,20]], left = 21, right = 21</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 21 没有被任何一个区间覆盖。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= ranges.length &lt;= 50</code></li><li><code>1 &lt;= starti &lt;= endi &lt;= 50</code></li><li><code>1 &lt;= left &lt;= right &lt;= 50</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>差分数组是一种用来高效处理区间更新的方法。通过在区间的起始和结束位置进行标记，然后在最终结果中进行累加得到每个位置的实际值。</p><p>我们可以利用差分数组来标记每个区间的覆盖范围，然后最终检查目标区间 <code>[left, right]</code> 是否完全被覆盖。</p><ol><li><p><strong>初始化差分数组</strong>：</p><ul><li>创建一个足够大的差分数组 <code>arr</code>，它的大小为 52，足以容纳从 <code>0</code> 到 <code>50</code> 的位置，所有位置初始化为 <code>0</code>。</li></ul></li><li><p><strong>更新差分数组</strong>：对于每个给定的区间 <code>[start, end]</code>：</p><ul><li>将 <code>arr[start]</code> 增加 1，表示从 <code>start</code> 位置开始有覆盖。</li><li>将 <code>arr[end + 1]</code> 减去 1，表示从 <code>end + 1</code> 位置开始没有覆盖。</li></ul></li><li><p><strong>检查区间 <code>[left, right]</code> 是否完全被覆盖</strong>：</p><ul><li>使用一个 <code>cur</code> 变量来累加 <code>arr</code> 数组的值，表示当前位置的覆盖状态。</li><li>遍历 <code>arr</code> 数组的从 <code>1</code> 到 <code>right</code> 范围，检查每个位置的覆盖状态。如果发现某个位置没有被覆盖，返回 <code>false</code>。</li><li>如果所有位置都被覆盖，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是区间 <code>ranges</code> 的长度， <ul><li>更新差分数组需要遍历每个给定区间的起始和结束位置，时间复杂度为 <code>O(n)</code>。</li><li>遍历差分数组进行区间检查，最大只需要遍历 52 个元素，时间复杂度为 <code>O(1)</code>（常数时间）。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个大小为 52 的数组 <code>arr</code> 来存储差分标记，即常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">ranges</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isCovered</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ranges<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">52</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>start<span class="token punctuation">,</span> end<span class="token punctuation">]</span> <span class="token keyword">of</span> ranges<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>end <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> left <span class="token operator">&amp;&amp;</span> cur <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2655",-1),q=n("td",{style:{"text-align":"left"}},"寻找最大长度的未覆盖区间 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"排序",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/find-maximal-uncovered-ranges",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/find-maximal-uncovered-ranges",target:"_blank",rel:"noopener noreferrer"};function B(A,D){const l=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(t,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),e(),s(t,{to:"/tag/hash-table.html"},{default:a(()=>[m]),_:1}),e(),s(t,{to:"/tag/prefix-sum.html"},{default:a(()=>[f]),_:1}),e("  🔗 "),n("a",b,[v,s(o)]),e(),n("a",_,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,q,C,n("td",O,[s(t,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),e(),s(t,{to:"/tag/sorting.html"},{default:a(()=>[N]),_:1})]),V,n("td",I,[n("a",R,[e("🀄️"),s(o)]),e(),n("a",j,[e("🔗"),s(o)])])])])])])}const T=r(k,[["render",B],["__file","1893.html.vue"]]);export{T as default};
