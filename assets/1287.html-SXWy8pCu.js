import{_ as r,r as t,o as l,c as i,a as n,b as a,d as s,w as o,e as u}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_1287-有序数组中出现次数超过-25-的元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1287-有序数组中出现次数超过-25-的元素","aria-hidden":"true"},"#"),a(" 1287. 有序数组中出现次数超过 25%的元素")],-1),h=n("code",null,"数组",-1),m={href:"https://leetcode.cn/problems/element-appearing-more-than-25-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <strong>sorted</strong> in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,2,6,6,6,6,7,10]</p><p>Output: 6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非递减的 <strong>有序</strong>整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。</p><p>请你找到并返回这个整数</p><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,2,6,6,6,6,7,10]</p><p><strong>输出：</strong> 6</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用双指针来解决这道题。</p><ol><li>计算目标数字出现的最小次数为 <code>target = Math.floor(n / 4) + 1</code>。</li><li>使用两个指针 <code>left</code> 和 <code>i</code>，分别指向当前数字的起始位置和遍历位置；</li><li>遍历数组，若当前元素 <code>arr[i]</code> 不等于 <code>arr[left]</code>，检查 <code>[left, i)</code> 之间的元素数量是否超过目标值 <code>target</code>； <ul><li>如果满足条件，可以提前终止循环，直接返回 <code>arr[left]</code>；</li><li>如果不满足，将 <code>left</code> 更新为当前元素的位置。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findSpecialInteger</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> target <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查区间长度</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> left <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			left <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 更新左指针</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function _(y,x){const p=t("font"),c=t("RouterLink"),e=t("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[a("🟢 "),s(p,{color:"#15bd66"},{default:o(()=>[a("Easy")]),_:1}),a("  🔖  "),s(c,{to:"/tag/array.html"},{default:o(()=>[h]),_:1}),a("  🔗 "),n("a",m,[v,s(e)]),a(),n("a",b,[g,s(e)])]),f])}const q=r(d,[["render",_],["__file","1287.html.vue"]]);export{q as default};
