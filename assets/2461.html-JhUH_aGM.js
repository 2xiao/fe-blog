import{_ as i,r as l,o as r,c as p,a as t,b as n,d as e,w as s,f as u,e as d}from"./app-vVczFiSl.js";const h={},m=t("h1",{id:"_2461-长度为-k-子数组中的最大和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2461-长度为-k-子数组中的最大和","aria-hidden":"true"},"#"),n(" 2461. 长度为 K 子数组中的最大和")],-1),_=t("code",null,"数组",-1),k=t("code",null,"哈希表",-1),g=t("code",null,"滑动窗口",-1),f={href:"https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> and an integer <code>k</code>. Find the maximum subarray sum of all the subarrays of <code>nums</code> that meet the following conditions:</p><ul><li>The length of the subarray is <code>k</code>, and</li><li>All the elements of the subarray are <strong>distinct</strong>.</li></ul><p>Return <em>the maximum subarray sum of all the subarrays that meet the conditions</em> <em>.</em> If no subarray meets the conditions, return <code>0</code>.</p><p><em>A<strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,5,4,2,9,9,9], k = 3</p><p>Output: 15</p><p>Explanation: The subarrays of nums with length 3 are:</p><ul><li>[1,5,4] which meets the requirements and has a sum of 10.</li><li>[5,4,2] which meets the requirements and has a sum of 11.</li><li>[4,2,9] which meets the requirements and has a sum of 15.</li><li>[2,9,9] which does not meet the requirements because the element 9 is repeated.</li><li>[9,9,9] which does not meet the requirements because the element 9 is repeated.</li></ul><p>We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,4,4], k = 3</p><p>Output: 0</p><p>Explanation: The subarrays of nums with length 3 are:</p><ul><li>[4,4,4] which does not meet the requirements because the element 4 is repeated.</li></ul><p>We return 0 because no subarrays meet the conditions.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。请你从 <code>nums</code> 中满足下述条件的全部子数组中找出最大子数组和：</p><ul><li>子数组的长度是 <code>k</code>，且</li><li>子数组中的所有元素 <strong>各不相同 。</strong></li></ul><p>返回满足题面要求的最大子数组和。如果不存在子数组满足这些条件，返回 <code>0</code> 。</p><p><strong>子数组</strong> 是数组中一段连续非空的元素序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,5,4,2,9,9,9], k = 3</p><p><strong>输出：</strong> 15</p><p><strong>解释：</strong> nums 中长度为 3 的子数组是：</p><ul><li>[1,5,4] 满足全部条件，和为 10 。</li><li>[5,4,2] 满足全部条件，和为 11 。</li><li>[4,2,9] 满足全部条件，和为 15 。</li><li>[2,9,9] 不满足全部条件，因为元素 9 出现重复。</li><li>[9,9,9] 不满足全部条件，因为元素 9 出现重复。</li></ul><p>因为 15 是满足全部条件的所有子数组中的最大子数组和，所以返回 15 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,4,4], k = 3</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> nums 中长度为 3 的子数组是：</p><ul><li>[4,4,4] 不满足全部条件，因为元素 4 出现重复。</li></ul><p>因为不存在满足全部条件的子数组，所以返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用滑动窗口和哈希集合来高效解决这个问题：</p><ol><li><strong>维护一个滑动窗口</strong>：窗口长度为 <code>k</code>，并且保证窗口中的元素都不重复。</li><li><strong>使用哈希集合记录窗口内的元素</strong>：确保元素的唯一性，同时快速检查是否存在重复。</li><li><strong>动态更新窗口和</strong>： <ul><li>如果窗口中存在重复元素，移动左边界直到没有重复元素。</li><li>当窗口大小为 <code>k</code> 时，更新当前的最大和。</li></ul></li><li><strong>边界处理</strong>：如果滑动窗口无法满足长度为 <code>k</code>，最终返回 <code>0</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每次移动左边界最多遍历一次整个数组。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，使用了一个哈希集合存储窗口中的元素，最多存储 <code>k</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumSubarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> currentSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果出现重复元素，移动左边界直到窗口内无重复</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			seen<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			currentSum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将当前元素加入窗口</span>
		seen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		currentSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查窗口大小是否满足 k</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> currentSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 缩小窗口大小，准备检查下一个窗口</span>
			seen<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			currentSum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"1004",-1),S=t("td",{style:{"text-align":"left"}},"最大连续1的个数 III",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=t("code",null,"数组",-1),L=t("code",null,"二分查找",-1),N=t("code",null,"前缀和",-1),V=t("code",null,"1+",-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"2401",-1),K=t("td",{style:{"text-align":"left"}},"最长优雅子数组",-1),R=t("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},M=t("code",null,"位运算",-1),W=t("code",null,"数组",-1),F=t("code",null,"滑动窗口",-1),Y=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"2405",-1),P=t("td",{style:{"text-align":"left"}},"子字符串的最优划分",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=t("code",null,"贪心",-1),Z=t("code",null,"哈希表",-1),$=t("code",null,"字符串",-1),tt=t("td",{style:{"text-align":"center"}},"🟠",-1),nt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/optimal-partition-of-string",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"2537",-1),ot=t("td",{style:{"text-align":"left"}},"统计好子数组的数目",-1),lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"数组",-1),rt=t("code",null,"哈希表",-1),pt=t("code",null,"滑动窗口",-1),ut=t("td",{style:{"text-align":"center"}},"🟠",-1),dt={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/count-the-number-of-good-subarrays",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://leetcode.com/problems/count-the-number-of-good-subarrays",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"3026",-1),kt=t("td",{style:{"text-align":"left"}},"最大好子数组和",-1),gt=t("td",{style:{"text-align":"center"}},null,-1),ft={style:{"text-align":"left"}},bt=t("code",null,"数组",-1),yt=t("code",null,"哈希表",-1),vt=t("code",null,"前缀和",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),wt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/maximum-good-subarray-sum",target:"_blank",rel:"noopener noreferrer"},St={href:"https://leetcode.com/problems/maximum-good-subarray-sum",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"3254",-1),Et=t("td",{style:{"text-align":"left"}},"长度为 K 的子数组的能量值 I",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Lt={style:{"text-align":"left"}},Nt=t("code",null,"数组",-1),Vt=t("code",null,"滑动窗口",-1),zt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ot={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-i",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},"3255",-1),Kt=t("td",{style:{"text-align":"left"}},"长度为 K 的子数组的能量值 II",-1),Rt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Mt=t("code",null,"数组",-1),Wt=t("code",null,"滑动窗口",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Yt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/find-the-power-of-k-size-subarrays-ii",target:"_blank",rel:"noopener noreferrer"},Gt={href:"https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii",target:"_blank",rel:"noopener noreferrer"};function Ht(Jt,Pt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[m,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),t("a",f,[b,e(o)]),n(),t("a",y,[v,e(o)])]),x,u(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,S,t("td",I,[e(a,{to:"/problem/1004.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[N]),_:1}),n(),V]),z,t("td",O,[t("a",T,[n("🀄️"),e(o)]),n(),t("a",j,[n("🔗"),e(o)])])]),t("tr",null,[B,K,R,t("td",A,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[W]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[F]),_:1})]),Y,t("td",D,[t("a",G,[n("🀄️"),e(o)]),n(),t("a",H,[n("🔗"),e(o)])])]),t("tr",null,[J,P,Q,t("td",U,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[X]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Z]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[$]),_:1})]),tt,t("td",nt,[t("a",et,[n("🀄️"),e(o)]),n(),t("a",st,[n("🔗"),e(o)])])]),t("tr",null,[at,ot,lt,t("td",ct,[e(a,{to:"/tag/array.html"},{default:s(()=>[it]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[rt]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[pt]),_:1})]),ut,t("td",dt,[t("a",ht,[n("🀄️"),e(o)]),n(),t("a",mt,[n("🔗"),e(o)])])]),t("tr",null,[_t,kt,gt,t("td",ft,[e(a,{to:"/tag/array.html"},{default:s(()=>[bt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[yt]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[vt]),_:1})]),xt,t("td",wt,[t("a",qt,[n("🀄️"),e(o)]),n(),t("a",St,[n("🔗"),e(o)])])]),t("tr",null,[It,Et,Ct,t("td",Lt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Nt]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[Vt]),_:1})]),zt,t("td",Ot,[t("a",Tt,[n("🀄️"),e(o)]),n(),t("a",jt,[n("🔗"),e(o)])])]),t("tr",null,[Bt,Kt,Rt,t("td",At,[e(a,{to:"/tag/array.html"},{default:s(()=>[Mt]),_:1}),n(),e(a,{to:"/tag/sliding-window.html"},{default:s(()=>[Wt]),_:1})]),Ft,t("td",Yt,[t("a",Dt,[n("🀄️"),e(o)]),n(),t("a",Gt,[n("🔗"),e(o)])])])])])])}const Ut=i(h,[["render",Ht],["__file","2461.html.vue"]]);export{Ut as default};
