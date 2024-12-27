import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-fqckLmln.js";const d={},m=n("h1",{id:"_2542-最大子序列的分数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2542-最大子序列的分数","aria-hidden":"true"},"#"),s(" 2542. 最大子序列的分数")],-1),h=n("code",null,"贪心",-1),v=n("code",null,"数组",-1),b=n("code",null,"排序",-1),g=n("code",null,"堆（优先队列）",-1),_={href:"https://leetcode.cn/problems/maximum-subsequence-score",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/maximum-subsequence-score",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> of equal length <code>n</code> and a positive integer <code>k</code>. You must choose a <strong>subsequence</strong> of indices from <code>nums1</code> of length <code>k</code>.</p><p>For chosen indices <code>i0</code>, <code>i1</code>, ..., <code>ik - 1</code>, your <strong>score</strong> is defined as:</p><ul><li>The sum of the selected elements from <code>nums1</code> multiplied with the <strong>minimum</strong> of the selected elements from <code>nums2</code>.</li><li>It can defined simply as: <code>(nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1])</code>.</li></ul><p>Return <em>the <strong>maximum</strong> possible score.</em></p><p>A <strong>subsequence</strong> of indices of an array is a set that can be derived from the set <code>{0, 1, ..., n-1}</code> by deleting some or no elements.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3</p><p>Output: 12</p><p>Explanation:</p><p>The four possible subsequence scores are:</p><ul><li>We choose the indices 0, 1, and 2 with score = <code>(1+3+3) * min(2,1,3) = 7</code>.</li><li>We choose the indices 0, 1, and 3 with score = <code>(1+3+2) * min(2,1,4) = 6</code>.</li><li>We choose the indices 0, 2, and 3 with score = <code>(1+3+2) * min(2,3,4) = 12</code>.</li><li>We choose the indices 1, 2, and 3 with score = <code>(3+3+2) * min(1,3,4) = 8</code>.</li></ul><p>Therefore, we return the max score, which is 12.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1</p><p>Output: 30</p><p>Explanation:</p><p>Choosing index 2 is optimal: <code>nums1[2] * nums2[2] = 3 * 10 = 30</code> is the maximum possible score.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums1.length == nums2.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= nums1[i], nums2[j] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个下标从 <strong>0</strong> 开始的整数数组 <code>nums1</code> 和 <code>nums2</code> ，两者长度都是 <code>n</code> ，再给你一个正整数 <code>k</code> 。你必须从 <code>nums1</code> 中选一个长度为 <code>k</code> 的 <strong>子序列</strong> 对应的下标。</p><p>对于选择的下标 <code>i0</code> ，<code>i1</code> ，...， <code>ik - 1</code> ，你的 <strong>分数</strong> 定义如下：</p><ul><li><code>nums1</code> 中下标对应元素求和，乘以 <code>nums2</code> 中下标对应元素的 <strong>最小值</strong> 。</li><li>用公式表示： <code>(nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1])</code> 。</li></ul><p>请你返回 <strong>最大</strong> 可能的分数。</p><p>一个数组的 <strong>子序列</strong> 下标是集合 <code>{0, 1, ..., n-1}</code> 中删除若干元素得到的剩余集合，也可以不删除任何元素。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3</p><p><strong>输出：</strong> 12</p><p><strong>解释：</strong></p><p>四个可能的子序列分数为：</p><ul><li>选择下标 0 ，1 和 2 ，得到分数 <code>(1+3+3) * min(2,1,3) = 7</code>。</li><li>选择下标 0 ，1 和 3 ，得到分数 <code>(1+3+2) * min(2,1,4) = 6</code>。</li><li>选择下标 0 ，2 和 3 ，得到分数 <code>(1+3+2) * min(2,3,4) = 12</code>。</li><li>选择下标 1 ，2 和 3 ，得到分数 <code>(3+3+2) * min(1,3,4) = 8</code>。</li></ul><p>所以最大分数为 12 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1</p><p><strong>输出：</strong> 30</p><p><strong>解释：</strong></p><p>选择下标 2 最优：<code>nums1[2] * nums2[2] = 3 * 10 = 30</code> 是最大可能分数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums1.length == nums2.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= nums1[i], nums2[j] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>按权重排序</strong>：将 <code>nums2</code> 的值作为排序依据，从大到小排序，这样确保我们优先处理较大的最小权重值。</p></li><li><p><strong>维护最大子序列和</strong>：</p><ul><li>使用一个大小为 <code>k</code> 的<strong>最小堆</strong>存储当前选定的 <code>nums1</code> 中的数字。</li><li>保持堆中有 <code>k</code> 个数时，其总和即为当前的最大子序列和。</li></ul></li><li><p><strong>计算分数</strong>：</p><ul><li>遍历 <code>nums2</code> 的权重数组，对于每个权重，尝试将对应的 <code>nums1</code> 中的数字加入堆： <ul><li>如果堆大小小于 <code>k</code>，直接加入。</li><li>如果堆大小等于 <code>k</code>，用当前值替换堆顶（最小值）以尝试增加总和，并更新最大得分。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n + n log k)</code></p><ul><li><strong>排序</strong>：对 <code>nums2</code> 降序排序，时间复杂度为 <code>O(n log n)</code>。</li><li><strong>堆操作</strong>：遍历每个元素时，堆中插入或移除的操作为 <code>O(log k)</code>，总共有 <code>n</code> 个元素，因此时间复杂度为 <code>O(n log k)</code>。</li><li>总时间复杂度：<code>O(n log n + n log k)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n + k)</code></p><ul><li>存储堆的空间复杂度为 <code>O(k)</code>。</li><li>存储排序后的数组需要 <code>O(n)</code>。</li><li>总空间复杂度为 <code>O(n + k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxScore</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 nums2 的权重和对应的 nums1 组合，并按权重降序排序</span>
	<span class="token keyword">const</span> pairs <span class="token operator">=</span> nums1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> nums2<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	pairs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> curSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前堆中数字的和</span>
	<span class="token keyword">let</span> maxScore <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 最大得分</span>
	<span class="token keyword">let</span> minHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最小堆</span>

	<span class="token comment">// 遍历每个权重</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> pairs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span> <span class="token operator">=</span> pairs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 将当前 num1 加入堆</span>
		minHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
		curSum <span class="token operator">+=</span> num1<span class="token punctuation">;</span>

		<span class="token comment">// 如果堆中元素已经达到 k 个，计算得分</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>minHeap<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxScore <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxScore<span class="token punctuation">,</span> curSum <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
			curSum <span class="token operator">-=</span> minHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxScore<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span>
			min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"502",-1),S=n("td",{style:{"text-align":"left"}},"IPO",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},H=n("code",null,"贪心",-1),I=n("code",null,"数组",-1),j=n("code",null,"排序",-1),L=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/ipo",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/ipo",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"857",-1),B=n("td",{style:{"text-align":"left"}},"雇佣 K 名工人的最低成本",-1),D=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},z=n("code",null,"贪心",-1),U=n("code",null,"数组",-1),Y=n("code",null,"排序",-1),A=n("code",null,"1+",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/minimum-cost-to-hire-k-workers",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/minimum-cost-to-hire-k-workers",target:"_blank",rel:"noopener noreferrer"};function J(Q,X){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,a(o)]),s(),n("a",y,[w,a(o)])]),x,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[O,S,n("td",E,[a(e,{to:"/problem/0502.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[j]),_:1}),s(),L]),N,n("td",V,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])]),n("tr",null,[W,B,D,n("td",R,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[U]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[Y]),_:1}),s(),A]),F,n("td",K,[n("a",P,[s("🀄️"),a(o)]),s(),n("a",G,[s("🔗"),a(o)])])])])])])}const $=l(d,[["render",J],["__file","2542.html.vue"]]);export{$ as default};
