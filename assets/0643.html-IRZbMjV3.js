import{_ as p,r as l,o as i,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-9Xw5divW.js";const m={},k=n("h1",{id:"_643-子数组最大平均数-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_643-子数组最大平均数-i","aria-hidden":"true"},"#"),s(" 643. 子数组最大平均数 I")],-1),h=n("code",null,"数组",-1),g=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/maximum-average-subarray-i",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/maximum-average-subarray-i",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> consisting of <code>n</code> elements, and an integer <code>k</code>.</p><p>Find a contiguous subarray whose <strong>length is equal to</strong> <code>k</code> that has the maximum average value and return <em>this value</em>. Any answer with a calculation error less than <code>10^-5</code> will be accepted.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,12,-5,-6,50,3], k = 4</p><p>Output: 12.75000</p><p>Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5], k = 1</p><p>Output: 5.00000</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= k &lt;= n &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <code>n</code> 个元素组成的整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p><p>请你找出平均数最大且 <strong>长度为<code>k</code></strong> 的连续子数组，并输出该最大平均数。</p><p>任何误差小于 <code>10^-5</code> 的答案都将被视为正确答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,12,-5,-6,50,3], k = 4</p><p><strong>输出：</strong> 12.75</p><p><strong>解释：</strong> 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [5], k = 1</p><p><strong>输出：</strong> 5.00000</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= k &lt;= n &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>滑动窗口</strong>：</p><ul><li>使用滑动窗口来计算连续子数组的和，以便高效地找到最大平均值；</li><li>初始化当前和 <code>sum</code> 和最大和 <code>maxSum</code>；</li></ul></li><li><p><strong>更新窗口</strong>：</p><ul><li>在每次迭代中更新 <code>sum</code>；</li><li>当索引 <code>i</code> 大于等于 <code>k</code> 时，减去窗口左侧的元素，以保持窗口大小为 <code>k</code>；</li></ul></li><li><p><strong>更新最大和</strong>：</p><ul><li>一旦当前索引 <code>i</code> 达到 <code>k - 1</code>，就开始比较并更新最大和 <code>maxSum</code>；</li></ul></li><li><p><strong>计算平均值</strong>：</p><ul><li>最后，根据最大和计算平均值并返回；</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间来存储状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMaxAverage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxSum <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token comment">// 滑动窗口</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 更新当前和</span>
		sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 缩小窗口</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">-=</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新最大和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回最大平均值</span>
	<span class="token keyword">return</span> maxSum <span class="token operator">/</span> k<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"644",-1),q=n("td",{style:{"text-align":"left"}},"子数组最大平均数 II 🔒",-1),I=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},S=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),L=n("code",null,"前缀和",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/maximum-average-subarray-ii",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/maximum-average-subarray-ii",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"2090",-1),M=n("td",{style:{"text-align":"left"}},"半径为 k 的子数组平均值",-1),A=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},F=n("code",null,"数组",-1),T=n("code",null,"滑动窗口",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/sliding-window.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[v,e(o)]),s(),n("a",b,[f,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,I,n("td",E,[e(a,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),e(a,{to:"/tag/binary-search.html"},{default:t(()=>[C]),_:1}),s(),e(a,{to:"/tag/prefix-sum.html"},{default:t(()=>[L]),_:1})]),N,n("td",V,[n("a",O,[s("🀄️"),e(o)]),s(),n("a",j,[s("🔗"),e(o)])])]),n("tr",null,[B,M,A,n("td",R,[e(a,{to:"/tag/array.html"},{default:t(()=>[F]),_:1}),s(),e(a,{to:"/tag/sliding-window.html"},{default:t(()=>[T]),_:1})]),Y,n("td",z,[n("a",D,[s("🀄️"),e(o)]),s(),n("a",G,[s("🔗"),e(o)])])])])])])}const Q=p(m,[["render",H],["__file","0643.html.vue"]]);export{Q as default};
