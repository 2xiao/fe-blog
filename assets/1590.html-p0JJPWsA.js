import{_ as c,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-totCBmv-.js";const m={},k=n("h1",{id:"_1590-使数组和能被-p-整除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1590-使数组和能被-p-整除","aria-hidden":"true"},"#"),s(" 1590. 使数组和能被 P 整除")],-1),h=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),g=n("code",null,"前缀和",-1),_={href:"https://leetcode.cn/problems/make-sum-divisible-by-p",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/make-sum-divisible-by-p",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of positive integers <code>nums</code>, remove the <strong>smallest</strong> subarray (possibly <strong>empty</strong> ) such that the <strong>sum</strong> of the remaining elements is divisible by <code>p</code>. It is <strong>not</strong> allowed to remove the whole array.</p><p>Return <em>the length of the smallest subarray that you need to remove, or</em><code>-1</code><em>if it &#39;s impossible</em>.</p><p>A <strong>subarray</strong> is defined as a contiguous block of elements in the array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,1,4,2], p = 6</p><p>Output: 1</p><p>Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [6,3,5,2], p = 9</p><p>Output: 2</p><p>Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3], p = 3</p><p>Output: 0</p><p>Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>1 &lt;= p &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数数组 <code>nums</code>，请你移除 <strong>最短</strong> 子数组（可以为 <strong>空</strong>），使得剩余元素的 <strong>和</strong> 能被 <code>p</code> 整除。 <strong>不允许</strong> 将整个数组都移除。</p><p>请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 <code>-1</code> 。</p><p><strong>子数组</strong> 定义为原数组中连续的一组元素。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>计算总和</strong>：</p><ul><li>使用 <code>reduce</code> 方法计算数组 <code>nums</code> 的总和，并将其存储在变量 <code>sum</code> 中。</li></ul></li><li><p><strong>确定总余数</strong>：</p><ul><li>计算 <code>totalRemainder</code> 为 <code>sum % p</code>。如果 <code>totalRemainder</code> 为 <code>0</code>，说明整个数组的和已经可以被 <code>p</code> 整除，因此直接返回 <code>0</code>，因为不需要移除任何元素。</li></ul></li><li><p><strong>初始化变量</strong>：</p><ul><li>创建一个哈希表 <code>map</code>，用于存储遇到的余数及其对应的索引。初始化时将 <code>{0: -1}</code> 放入其中，以处理可能需要从数组开头移除元素的情况。</li><li>初始化 <code>curRemainder</code> 为 <code>0</code>，用于在遍历数组时存储当前累积和的余数。</li><li>将 <code>res</code> 设置为数组的长度 (<code>nums.length</code>)，用于跟踪需要移除的最小子数组长度。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>遍历数组，更新当前和的余数。对于每个元素，检查是否存在一个以前的余数，使得 <code>curRemainder - totalRemainder</code> 可以被 <code>p</code> 整除。</li><li>如果找到，计算需要移除的子数组的长度，并更新最小长度。</li><li>将当前的 <code>curRemainder</code> 和其索引 <code>i</code> 存入哈希表，以便后续使用。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历结束后，检查 <code>res</code> 是否仍等于数组的长度。如果是，返回 <code>-1</code>，表示无法找到合适的子数组；否则，返回 <code>res</code> 的值，表示需要移除的最小子数组长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储哈希表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> totalRemainder <span class="token operator">=</span> sum <span class="token operator">%</span> p<span class="token punctuation">;</span>
	<span class="token comment">// 如果总和已经可以被 p 整除，直接返回 0</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>totalRemainder <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		curRemainder <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 处理边界情况</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 计算当前的余数</span>
		curRemainder <span class="token operator">=</span> <span class="token punctuation">(</span>curRemainder <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> p<span class="token punctuation">;</span>
		<span class="token comment">// 计算需要的余数</span>
		<span class="token keyword">const</span> targetRemainder <span class="token operator">=</span> <span class="token punctuation">(</span>curRemainder <span class="token operator">-</span> totalRemainder <span class="token operator">+</span> p<span class="token punctuation">)</span> <span class="token operator">%</span> p<span class="token punctuation">;</span>
		<span class="token comment">// 如果存在这样的余数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>targetRemainder<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> i <span class="token operator">-</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>targetRemainder<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 记录当前余数及其索引</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>curRemainder<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果没有找到，返回 -1</span>
	<span class="token keyword">return</span> res <span class="token operator">==</span> nums<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),R=n("td",{style:{"text-align":"center"}},"974",-1),E=n("td",{style:{"text-align":"left"}},"和可被 K 整除的子数组",-1),q=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"前缀和",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"2575",-1),M=n("td",{style:{"text-align":"left"}},"找出字符串的可整除数组",-1),S=n("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},A=n("code",null,"数组",-1),G=n("code",null,"数学",-1),H=n("code",null,"字符串",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-the-divisibility-array-of-a-string",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/find-the-divisibility-array-of-a-string",target:"_blank",rel:"noopener noreferrer"};function F(J,Q){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[v,a(o)]),s(),n("a",f,[y,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[R,E,q,n("td",I,[a(e,{to:"/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[N]),_:1})]),O,n("td",V,[n("a",T,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])]),n("tr",null,[B,M,S,n("td",W,[a(e,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[G]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[H]),_:1})]),K,n("td",P,[n("a",z,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])])])])])}const X=c(m,[["render",F],["__file","1590.html.vue"]]);export{X as default};
