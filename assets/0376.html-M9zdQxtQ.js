import{_ as p,r as c,o as r,c as i,a as n,b as e,d as s,w as t,f as u,e as d}from"./app-totCBmv-.js";const g={},k=n("h1",{id:"_376-摆动序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_376-摆动序列","aria-hidden":"true"},"#"),e(" 376. 摆动序列")],-1),h=n("code",null,"贪心",-1),m=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/wiggle-subsequence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/wiggle-subsequence",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>wiggle sequence</strong> is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.</p><ul><li>For example, <code>[1, 7, 4, 9, 2, 5]</code> is a <strong>wiggle sequence</strong> because the differences <code>(6, -3, 5, -7, 3)</code> alternate between positive and negative.</li><li>In contrast, <code>[1, 4, 7, 2, 5]</code> and <code>[1, 7, 4, 5, 5]</code> are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.</li></ul><p>A <strong>subsequence</strong> is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.</p><p>Given an integer array <code>nums</code>, return _the length of the longest<strong>wiggle subsequence</strong> of _<code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,7,4,9,2,5]</p><p>Output: 6</p><p>Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,17,5,10,13,15,10,5,16,8]</p><p>Output: 7</p><p>Explanation: There are several subsequences that achieve this length.</p><p>One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8).</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5,6,7,8,9]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><p><strong>Follow up:</strong> Could you solve this in <code>O(n)</code> time?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 <strong>摆动序列。</strong> 第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。</p><ul><li><p>例如， <code>[1, 7, 4, 9, 2, 5]</code> 是一个 <strong>摆动序列</strong> ，因为差值 <code>(6, -3, 5, -7, 3)</code> 是正负交替出现的。</p></li><li><p>相反，<code>[1, 4, 7, 2, 5]</code> 和 <code>[1, 7, 4, 5, 5]</code> 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。</p></li></ul><p><strong>子序列</strong> 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。</p><p>给你一个整数数组 <code>nums</code> ，返回 <code>nums</code> 中作为 <strong>摆动序列</strong> 的 <strong>最长子序列的长度</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,7,4,9,2,5]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,17,5,10,13,15,10,5,16,8]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 这个序列包含几个长度为 7 摆动序列。</p><p>其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,5,6,7,8,9]</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><p><strong>进阶：</strong> 你能否用 <code>O(n)</code> 时间复杂度完成此题?</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>动态规划思路</strong></p><ul><li>维护两个状态变量 <code>increase</code> 和 <code>decrease</code>： <ul><li><code>increase</code>: 以当前元素为结尾的 <strong>最近一次上升摆动序列的长度</strong>。</li><li><code>decrease</code>: 以当前元素为结尾的 <strong>最近一次下降摆动序列的长度</strong>。</li></ul></li></ul></li><li><p><strong>状态转移</strong> 遍历数组时，根据当前元素与前一个元素的大小关系更新状态：</p><ul><li><strong>如果 <code>nums[i] &gt; nums[i - 1]</code></strong><br> 当前元素为上升趋势，需延续或更新上升摆动序列： <code>increase = decrease + 1</code> 解释：当前元素可以接在之前的下降序列后，因此长度增加。</li><li><strong>如果 <code>nums[i] &lt; nums[i - 1]</code></strong><br> 当前元素为下降趋势，需延续或更新下降摆动序列： <code>decrease = increase + 1</code> 解释：当前元素可以接在之前的上升序列后，因此长度增加。</li><li><strong>如果 <code>nums[i] === nums[i - 1]</code></strong><br> 跳过，序列不变。</li></ul></li><li><p><strong>结果计算</strong></p><ul><li>遍历结束后，返回 <code>Math.max(increase, decrease)</code> 即为最终结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，仅需一次遍历即可完成状态更新。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数空间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wiggleMaxLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> increase <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		decrease <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			increase <span class="token operator">=</span> decrease <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			decrease <span class="token operator">=</span> increase <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>increase<span class="token punctuation">,</span> decrease<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2149",-1),E=n("td",{style:{"text-align":"left"}},"按符号重排数组",-1),O=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"双指针",-1),N=n("code",null,"模拟",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"};function A(B,z){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟠 "),s(l,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(a,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),e(),s(a,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),e(),s(a,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),e("  🔗 "),n("a",_,[f,s(o)]),e(),n("a",v,[y,s(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,O,n("td",C,[s(a,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),e(),s(a,{to:"/tag/two-pointers.html"},{default:t(()=>[L]),_:1}),e(),s(a,{to:"/tag/simulation.html"},{default:t(()=>[N]),_:1})]),T,n("td",V,[n("a",M,[e("🀄️"),s(o)]),e(),n("a",j,[e("🔗"),s(o)])])])])])])}const R=p(g,[["render",A],["__file","0376.html.vue"]]);export{R as default};
