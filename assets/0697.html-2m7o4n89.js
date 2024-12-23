import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-Kkp_66uf.js";const k={},m=n("h1",{id:"_697-数组的度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_697-数组的度","aria-hidden":"true"},"#"),s(" 697. 数组的度")],-1),h=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b={href:"https://leetcode.cn/problems/degree-of-an-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/degree-of-an-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a non-empty array of non-negative integers <code>nums</code>, the <strong>degree</strong> of this array is defined as the maximum frequency of any one of its elements.</p><p>Your task is to find the smallest possible length of a (contiguous) subarray of <code>nums</code>, that has the same degree as <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2,3,1]</p><p>Output: 2</p><p>Explanation:</p><p>The input array has a degree of 2 because both elements 1 and 2 appear twice.</p><p>Of the subarrays that have the same degree:</p><p>[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]</p><p>The shortest length is 2. So return 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,2,3,1,4,2]</p><p>Output: 6</p><p>Explanation:</p><p>The degree is 3 because the element 2 is repeated 3 times.</p><p>So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums.length</code> will be between 1 and 50,000.</li><li><code>nums[i]</code> will be an integer between 0 and 49,999.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空且只包含非负数的整数数组 <code>nums</code>，数组的 <strong>度</strong> 的定义是指数组里任一元素出现频数的最大值。</p><p>你的任务是在 <code>nums</code> 中找到与 <code>nums</code> 拥有相同大小的度的最短连续子数组，返回其长度。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,2,3,1]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。</p><p>连续子数组里面拥有相同度的有如下所示：</p><p>[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]</p><p>最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,2,3,1,4,2]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>数组的度是 3 ，因为元素 2 重复出现 3 次。</p><p>所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>nums.length</code> 在 <code>1</code> 到 <code>50,000</code> 范围内。</li><li><code>nums[i]</code> 是一个在 <code>0</code> 到 <code>49,999</code> 范围内的整数。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历数组 遍历数组一次，收集一下信息：</li></ol><ul><li>每个元素在数组中第一次（<code>start</code>）和最后一次出现的位置（<code>end</code>）。</li><li>每个元素在数组中的出现次数（<code>count</code>）。</li></ul><ol start="2"><li>确定度和满足条件的元素</li></ol><ul><li>根据 <code>count</code> 的最大值，找到数组的度 <code>degree</code>。</li><li>找出所有度等于 <code>degree</code> 的元素。</li></ul><ol start="3"><li>计算最短子数组</li></ol><ul><li>对于每个满足条件的元素，计算其子数组的长度：<code>子数组长度 = end[元素] - start[元素] + 1</code></li><li>找出这些长度中的最小值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>， 其中 <code>n</code> 是数组的长度，遍历数组一次，遍历 <code>count</code> 一次（最多 <code>n</code> 个元素）。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储 <code>count</code>、<code>start</code> 和 <code>end</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findShortestSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		start <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		end <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> degree <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> start<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录起始位置</span>
		end<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 记录结束位置</span>
		count<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 统计频数</span>
		degree <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>degree<span class="token punctuation">,</span> count<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新度</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> minLength <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历每个元素，找出度为 degree 的最短子数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">in</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">===</span> degree<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLength<span class="token punctuation">,</span> end<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">-</span> start<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> minLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"53",-1),q=n("td",{style:{"text-align":"left"}},"最大子数组和",-1),L={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=n("code",null,"数组",-1),I=n("code",null,"分治",-1),N=n("code",null,"动态规划",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"};function j(B,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,a(o)]),s(),n("a",v,[f,a(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",L,[a(e,{to:"/problem/0053.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[N]),_:1})]),O,n("td",S,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])])])])])}const G=l(k,[["render",j],["__file","0697.html.vue"]]);export{G as default};
