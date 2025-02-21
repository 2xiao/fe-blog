import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-9CeBk-uV.js";const k={},m=n("h1",{id:"_4-寻找两个正序数组的中位数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-寻找两个正序数组的中位数","aria-hidden":"true"},"#"),s(" 4. 寻找两个正序数组的中位数")],-1),h=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),b=n("code",null,"分治",-1),f={href:"https://leetcode.cn/problems/median-of-two-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/median-of-two-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p><p>The overall run time complexity should be <code>O(log (m+n))</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,3], nums2 = [2]</p><p>Output: 2.00000</p><p>Explanation: merged array = [1,2,3] and median is 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [1,2], nums2 = [3,4]</p><p>Output: 2.50000</p><p>Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums1.length == m</code></li><li><code>nums2.length == n</code></li><li><code>0 &lt;= m &lt;= 1000</code></li><li><code>0 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= m + n &lt;= 2000</code></li><li><code>-10^6 &lt;= nums1[i], nums2[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个大小为 <code>m</code> 和 <code>n</code> 的有序数组 <code>nums1</code> 和  <code>nums2</code>。</p><p>请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为  <code>O(log(m + n))</code>。</p><p>你可以假设 <code>nums1</code>  和  <code>nums2</code>  不会同时为空。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题最容易想到的办法是把两个数组合并，然后取出中位数。但是合并有序数组的操作时间复杂度是 <code>O(m+n)</code> ，不符合题意。</p><p>由于题目要求的时间复杂度为 <code>O(log(m + n))</code>，这表明我们需要使用 <strong>二分查找</strong>。</p><p>可以将问题转化为 <strong>在两个排序数组中寻找第 k 小的数</strong>，其中 k 是 <code>(m + n) / 2</code> 或 <code>(m + n) / 2 + 1</code>，使用二分法来解决。</p><ul><li>给定两个排序数组 <code>nums1</code> 和 <code>nums2</code>，需要找到第 <code>k</code> 小的数。</li><li>使用二分法来缩小查找范围： <ul><li>取两个数组中第 <code>k / 2</code> 个数，比较这两个数的大小。</li><li>较小的那个数组的前 <code>k / 2</code> 个数不可能包含第 k 小的数，所以可以将这些数排除，并在剩余的部分继续查找。</li></ul></li></ul><p><strong>特殊情况处理</strong>：</p><ul><li>如果某一个数组为空，则直接返回另一个数组的中间值。</li><li>如果 k == 1，则返回两个数组的最小值。</li><li>总长度为偶数时，需要同时找到第 <code>(m + n) / 2</code> 和第 <code>(m + n) / 2 + 1</code> 小的数，并取它们的平均值作为中位数。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(min(m, n)))</code>，因为每次递归我们会排除掉 <code>k/2</code> 个元素，直到找到第 <code>k</code> 小的元素，整个过程是对较短数组长度的二分查找。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMedianSortedArrays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">findKth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> start1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> start2<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果数组 1 已经全部被排除，则返回数组 2 中的第 k 小元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start1 <span class="token operator">&gt;=</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> arr2<span class="token punctuation">[</span>start2 <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果数组 2 已经全部被排除，则返回数组 1 中的第 k 小元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start2 <span class="token operator">&gt;=</span> arr2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> arr1<span class="token punctuation">[</span>start1 <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果 k == 1，返回两个数组中最小的元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span>start1<span class="token punctuation">]</span><span class="token punctuation">,</span> arr2<span class="token punctuation">[</span>start2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 在两个数组中分别找出第 k/2 个元素</span>
		<span class="token keyword">let</span> harfK <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">,</span>
			index1 <span class="token operator">=</span> start1 <span class="token operator">+</span> harfK <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
			index2 <span class="token operator">=</span> start2 <span class="token operator">+</span> harfK <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
			mid1 <span class="token operator">=</span> index1 <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length <span class="token operator">?</span> arr1<span class="token punctuation">[</span>index1<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
			mid2 <span class="token operator">=</span> index2 <span class="token operator">&lt;</span> arr2<span class="token punctuation">.</span>length <span class="token operator">?</span> arr2<span class="token punctuation">[</span>index2<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果数组 1 的中间值较小，排除数组 1 中的前 k/2 个元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mid1 <span class="token operator">&lt;</span> mid2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token function">findKth</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> start1 <span class="token operator">+</span> harfK<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> start2<span class="token punctuation">,</span> k <span class="token operator">-</span> harfK<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 否则排除数组 2 中的前 k/2 个元素</span>
			<span class="token keyword">return</span> <span class="token function">findKth</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> start1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> start2 <span class="token operator">+</span> harfK<span class="token punctuation">,</span> k <span class="token operator">-</span> harfK<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> len <span class="token operator">=</span> nums1<span class="token punctuation">.</span>length <span class="token operator">+</span> nums2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 如果总长度为奇数，返回中间的那个数</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">findKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果总长度为偶数，返回中间两个数的平均值</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">findKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">findKth</span><span class="token punctuation">(</span>nums1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),K=n("td",{style:{"text-align":"center"}},"2387",-1),O=n("td",{style:{"text-align":"left"}},"行排序矩阵的中位数 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},q=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),L=n("code",null,"矩阵",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/median-of-a-row-wise-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix",target:"_blank",rel:"noopener noreferrer"};function M(R,S){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",g,[y,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[K,O,E,n("td",I,[a(e,{to:"/tag/array.html"},{default:t(()=>[q]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[L]),_:1})]),N,n("td",V,[n("a",j,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const z=l(k,[["render",M],["__file","0004.html.vue"]]);export{z as default};
