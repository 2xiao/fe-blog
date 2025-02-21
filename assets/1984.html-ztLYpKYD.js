import{_ as c,r as l,o as p,c as i,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-9CeBk-uV.js";const m={},g=n("h1",{id:"_1984-学生分数的最小差值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1984-学生分数的最小差值","aria-hidden":"true"},"#"),s(" 1984. 学生分数的最小差值")],-1),h=n("code",null,"数组",-1),k=n("code",null,"排序",-1),f=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>, where <code>nums[i]</code> represents the score of the <code>ith</code> student. You are also given an integer <code>k</code>.</p><p>Pick the scores of any <code>k</code> students from the array so that the <strong>difference</strong> between the <strong>highest</strong> and the <strong>lowest</strong> of the <code>k</code> scores is <strong>minimized</strong>.</p><p>Return <em>the <strong>minimum</strong> possible difference</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [90], k = 1</p><p>Output: 0</p><p>Explanation: There is one way to pick score(s) of one student:</p><ul><li>[<strong><em>90</em></strong>]. The difference between the highest and lowest score is 90 - 90 = 0.</li></ul><p>The minimum possible difference is 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [9,4,1,7], k = 2</p><p>Output: 2</p><p>Explanation: There are six ways to pick score(s) of two students:</p><ul><li>[<strong><em>9</em></strong> ,<strong><em>4</em></strong> ,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.</li><li>[<strong><em>9</em></strong> ,4,<strong><em>1</em></strong> ,7]. The difference between the highest and lowest score is 9 - 1 = 8.</li><li>[<strong><em>9</em></strong> ,4,1,<strong><em>7</em></strong>]. The difference between the highest and lowest score is 9 - 7 = 2.</li><li>[9,<strong><em>4</em></strong> ,<strong><em>1</em></strong> ,7]. The difference between the highest and lowest score is 4 - 1 = 3.</li><li>[9,<strong><em>4</em></strong> ,1,<strong><em>7</em></strong>]. The difference between the highest and lowest score is 7 - 4 = 3.</li><li>[9,4,<strong><em>1</em></strong> ,<strong><em>7</em></strong>]. The difference between the highest and lowest score is 7 - 1 = 6.</li></ul><p>The minimum possible difference is 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>下标从 0 开始</strong> 的整数数组 <code>nums</code> ，其中 <code>nums[i]</code> 表示第 <code>i</code> 名学生的分数。另给你一个整数 <code>k</code> 。</p><p>从数组中选出任意 <code>k</code> 名学生的分数，使这 <code>k</code> 个分数间 <strong>最高分</strong> 和 <strong>最低分</strong> 的 <strong>差值</strong> 达到<strong>最小化</strong> 。</p><p>返回可能的 <strong>最小差值</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [90], k = 1</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 选出 1 名学生的分数，仅有 1 种方法：</p><ul><li>[<em><strong>90</strong></em>] 最高分和最低分之间的差值是 90 - 90 = 0</li></ul><p>可能的最小差值是 0</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [9,4,1,7], k = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 选出 2 名学生的分数，有 6 种方法：</p><ul><li>[<em><strong>9</strong></em> ,<em><strong>4</strong></em> ,1,7] 最高分和最低分之间的差值是 9 - 4 = 5</li><li>[<em><strong>9</strong></em> ,4,<em><strong>1</strong></em> ,7] 最高分和最低分之间的差值是 9 - 1 = 8</li><li>[<em><strong>9</strong></em> ,4,1,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 9 - 7 = 2</li><li>[9,<em><strong>4</strong></em> ,<em><strong>1</strong></em> ,7] 最高分和最低分之间的差值是 4 - 1 = 3</li><li>[9,<em><strong>4</strong></em> ,1,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 7 - 4 = 3</li><li>[9,4,<em><strong>1</strong></em> ,<em><strong>7</strong></em>] 最高分和最低分之间的差值是 7 - 1 = 6</li></ul><p>可能的最小差值是 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数组排序</strong>：</p><ul><li>由于最大值和最小值的差在有序数组中更容易计算，将数组按照升序排列。</li></ul></li><li><p><strong>滑动窗口</strong>：</p><ul><li>用一个大小为 <code>k</code> 的窗口遍历排序后的数组。</li><li>对于窗口的起点为 <code>i</code>： <ul><li>窗口内的最大值是 <code>nums[i + k - 1]</code>。</li><li>窗口内的最小值是 <code>nums[i]</code>。</li><li>差值为 <code>nums[i + k - 1] - nums[i]</code>。</li></ul></li></ul></li><li><p><strong>维护最小差值</strong>：</p><ul><li>在遍历过程中，记录所有窗口中差值的最小值。</li></ul></li><li><p>返回最小差值。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组长度，主要是排序的时间开销。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序是原地进行的，不占用额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当 k 为 1 时，差值一定为 0</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>diff<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算最小差值</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> diff<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"561",-1),q=n("td",{style:{"text-align":"left"}},"数组拆分",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"贪心",-1),L=n("code",null,"数组",-1),N=n("code",null,"计数排序",-1),V=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/array-partition",target:"_blank",rel:"noopener noreferrer"};function Y(z,D){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[g,n("p",null,[s("🟢 "),e(r,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(o,{to:"/tag/sorting.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/sliding-window.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",_,[b,e(a)]),s(),n("a",v,[w,e(a)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[T,q,n("td",E,[e(o,{to:"/problem/0561.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[e(o,{to:"/tag/greedy.html"},{default:t(()=>[I]),_:1}),s(),e(o,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),e(o,{to:"/tag/counting-sort.html"},{default:t(()=>[N]),_:1}),s(),V]),O,n("td",j,[n("a",B,[s("🀄️"),e(a)]),s(),n("a",R,[s("🔗"),e(a)])])])])])])}const P=c(m,[["render",Y],["__file","1984.html.vue"]]);export{P as default};
