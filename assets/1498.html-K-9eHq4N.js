import{_ as c,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-Kkp_66uf.js";const m={},k=n("h1",{id:"_1498-满足条件的子序列数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1498-满足条件的子序列数目","aria-hidden":"true"},"#"),s(" 1498. 满足条件的子序列数目")],-1),h=n("code",null,"数组",-1),g=n("code",null,"双指针",-1),_=n("code",null,"二分查找",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/number-of-subsequences-that-satisfy-the-given-sum-condition",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>nums</code> and an integer <code>target</code>.</p><p>Return _the number of<strong>non-empty</strong> subsequences of _<code>nums</code> <em>such that the sum of the minimum and maximum element on it is less or equal to</em><code>target</code>. Since the answer may be too large, return it <strong>modulo</strong> <code>10^9 + 7</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,5,6,7], target = 9</p><p>Output: 4</p><p>Explanation: There are 4 subsequences that satisfy the condition.</p><p>[3] -&gt; Min value + max value &lt;= target (3 + 3 &lt;= 9)</p><p>[3,5] -&gt; (3 + 5 &lt;= 9)</p><p>[3,5,6] -&gt; (3 + 6 &lt;= 9)</p><p>[3,6] -&gt; (3 + 6 &lt;= 9)</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,3,6,8], target = 10</p><p>Output: 6</p><p>Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).</p><p>[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,3,3,4,6,7], target = 12</p><p>Output: 61</p><p>Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).</p><p>Number of valid subsequences (63 - 2 = 61).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li><li><code>1 &lt;= target &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>target</code> 。</p><p>请你统计并返回 <code>nums</code> 中能满足其最小元素与最大元素的 <strong>和</strong> 小于或等于 <code>target</code> 的 <strong>非空</strong> 子序列的数目。</p><p>由于答案可能很大，请将结果对 <code>10^9 + 7</code> 取余后返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,5,6,7], target = 9</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 有 4 个子序列满足该条件。</p><p>[3] -&gt; 最小元素 + 最大元素 &lt;= target (3 + 3 &lt;= 9)</p><p>[3,5] -&gt; (3 + 5 &lt;= 9)</p><p>[3,5,6] -&gt; (3 + 6 &lt;= 9)</p><p>[3,6] -&gt; (3 + 6 &lt;= 9)</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,3,6,8], target = 10</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 有 6 个子序列满足该条件。（nums 中可以有重复数字）</p><p>[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,3,4,6,7], target = 12</p><p><strong>输出：</strong> 61</p><p><strong>解释：</strong> 共有 63 个非空子序列，其中 2 个不满足条件（[6,7], [7]）</p><p>有效序列总数为（63 - 2 = 61）</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li><li><code>1 &lt;= target &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>对子序列的性质进行分析：</strong></p><ul><li>给定数组 <code>nums</code>，将其按照升序排列，这样可以简化子序列的处理。</li><li>假设子序列的最小元素为 <code>nums[i]</code>，最大元素为 <code>nums[j]</code>（<code>i &lt;= j</code>）。</li><li>如果 <code>nums[i] + nums[j] &lt;= target</code>，则所有从 <code>nums[i]</code> 到 <code>nums[j]</code> 的子序列都满足条件： <ul><li>以 <code>nums[i]</code> 为最小元素、以 <code>nums[j]</code> 为最大元素的子序列数为 <code>2^(j - i)</code>（每个位置的元素可选或不选）。</li></ul></li></ul></li><li><p><strong>双指针遍历：</strong></p><ul><li>使用两个指针 <code>i</code> 和 <code>j</code>，分别指向子序列的最小值和最大值。</li><li>初始化 <code>j = nums.length - 1</code>，从最大值开始逐步缩小范围。</li><li>如果当前 <code>nums[i] + nums[j] &lt;= target</code>，计算以 <code>nums[i]</code> 为起点的满足条件的子序列数量。</li><li>如果条件不满足，减小 <code>j</code>，直到满足为止。</li></ul></li><li><p><strong>快速计算组合数：</strong></p><ul><li>对于每对满足条件的 <code>i</code> 和 <code>j</code>，需要快速计算 <code>2^(j - i)</code>，使用<strong>预计算</strong>的方式加速： <ul><li>构造数组 <code>power</code>，其中 <code>power[k] = 2^k % (10^9 + 7)</code>。</li><li>查询时可以直接取 <code>power[j - i]</code>。</li></ul></li></ul></li><li><p><strong>结果取模：</strong></p><ul><li>所有子序列数量加总后对 <code>10^9 + 7</code> 取模，防止结果溢出。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，排序耗时 <code>O(n log n)</code>，双指针遍历耗时 <code>O(n)</code>，整体时间复杂度为 <code>O(n log n)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，预计算数组 <code>power</code> 需要 <code>O(n)</code> 的额外空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numSubseq</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token constant">MOD</span> <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 排序数组</span>

	<span class="token comment">// 预计算 2^k % MOD</span>
	<span class="token keyword">let</span> power <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		power<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>power<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token constant">MOD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
		result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 缩小最大值</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 子序列数目</span>
			result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> power<span class="token punctuation">[</span>j <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token constant">MOD</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 增大最小值</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"2835",-1),O=n("td",{style:{"text-align":"left"}},"使子序列的和等于目标的最少操作次数",-1),E=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},N=n("code",null,"贪心",-1),C=n("code",null,"位运算",-1),I=n("code",null,"数组",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/minimum-operations-to-form-subsequence-with-target-sum",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"3082",-1),R=n("td",{style:{"text-align":"left"}},"求出所有子序列的能量和",-1),S=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},z=n("code",null,"数组",-1),A=n("code",null,"动态规划",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/find-the-sum-of-the-power-of-all-subsequences",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"3098",-1),P=n("td",{style:{"text-align":"left"}},"求出所有子序列的能量和",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"动态规划",-1),Z=n("code",null,"排序",-1),$=n("td",{style:{"text-align":"center"}},"🔴",-1),nn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/find-the-sum-of-subsequence-powers",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/find-the-sum-of-subsequence-powers",target:"_blank",rel:"noopener noreferrer"};function en(an,on){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",f,[v,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[j,O,E,n("td",M,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1})]),L,n("td",V,[n("a",D,[s("🀄️"),t(o)]),s(),n("a",T,[s("🔗"),t(o)])])]),n("tr",null,[B,R,S,n("td",Y,[t(a,{to:"/tag/array.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[A]),_:1})]),F,n("td",G,[n("a",H,[s("🀄️"),t(o)]),s(),n("a",J,[s("🔗"),t(o)])])]),n("tr",null,[K,P,Q,n("td",U,[t(a,{to:"/tag/array.html"},{default:e(()=>[W]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[X]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[Z]),_:1})]),$,n("td",nn,[n("a",sn,[s("🀄️"),t(o)]),s(),n("a",tn,[s("🔗"),t(o)])])])])])])}const pn=c(m,[["render",en],["__file","1498.html.vue"]]);export{pn as default};
