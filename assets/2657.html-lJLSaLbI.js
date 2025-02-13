import{_ as i,r as t,o as l,c as d,a as n,b as s,d as a,w as o,e as r}from"./app-MXSjQbID.js";const u={},k=n("h1",{id:"_2657-找到两个数组的前缀公共数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2657-找到两个数组的前缀公共数组","aria-hidden":"true"},"#"),s(" 2657. 找到两个数组的前缀公共数组")],-1),m=n("code",null,"位运算",-1),h=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b={href:"https://leetcode.cn/problems/find-the-prefix-common-array-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>0-indexed</strong> integer**** permutations <code>A</code> and <code>B</code> of length <code>n</code>.</p><p>A <strong>prefix common array</strong> of <code>A</code> and <code>B</code> is an array <code>C</code> such that <code>C[i]</code> is equal to the count of numbers that are present at or before the index <code>i</code> in both <code>A</code> and <code>B</code>.</p><p>Return <em>the <strong>prefix common array</strong> of</em> <code>A</code> <em>and</em> <code>B</code>.</p><p>A sequence of <code>n</code> integers is called a <strong>permutation</strong> if it contains all integers from <code>1</code> to <code>n</code> exactly once.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: A = [1,3,2,4], B = [3,1,2,4]</p><p>Output: [0,2,3,4]</p><p>Explanation: At i = 0: no number is common, so C[0] = 0.</p><p>At i = 1: 1 and 3 are common in A and B, so C[1] = 2.</p><p>At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.</p><p>At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: A = [2,3,1], B = [3,1,2]</p><p>Output: [0,1,3]</p><p>Explanation: At i = 0: no number is common, so C[0] = 0.</p><p>At i = 1: only 3 is common in A and B, so C[1] = 1.</p><p>At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= A.length == B.length == n &lt;= 50</code></li><li><code>1 &lt;= A[i], B[i] &lt;= n</code></li><li><code>It is guaranteed that A and B are both a permutation of n integers.</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个下标从 <strong>0</strong> 开始长度为 <code>n</code> 的整数排列 <code>A</code> 和 <code>B</code> 。</p><p><code>A</code> 和 <code>B</code> 的 <strong>前缀公共数组</strong> 定义为数组 <code>C</code> ，其中 <code>C[i]</code> 是数组 <code>A</code> 和 <code>B</code> 到下标为 <code>i</code> 之前公共元素的数目。</p><p>请你返回 <code>A</code> 和 <code>B</code> 的 <strong>前缀公共数组</strong> 。</p><p>如果一个长度为 <code>n</code> 的数组包含 <code>1</code> 到 <code>n</code> 的元素恰好一次，我们称这个数组是一个长度为 <code>n</code> 的 <strong>排列</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> A = [1,3,2,4], B = [3,1,2,4]</p><p><strong>输出：</strong>[0,2,3,4]</p><p><strong>解释：</strong> i = 0：没有公共元素，所以 C[0] = 0 。</p><p>i = 1：1 和 3 是两个数组的前缀公共元素，所以 C[1] = 2 。</p><p>i = 2：1，2 和 3 是两个数组的前缀公共元素，所以 C[2] = 3 。</p><p>i = 3：1，2，3 和 4 是两个数组的前缀公共元素，所以 C[3] = 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> A = [2,3,1], B = [3,1,2]</p><p><strong>输出：</strong>[0,1,3]</p><p><strong>解释：</strong> i = 0：没有公共元素，所以 C[0] = 0 。</p><p>i = 1：只有 3 是公共元素，所以 C[1] = 1 。</p><p>i = 2：1，2 和 3 是两个数组的前缀公共元素，所以 C[2] = 3 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= A.length == B.length == n &lt;= 50</code></li><li><code>1 &lt;= A[i], B[i] &lt;= n</code></li><li>题目保证 <code>A</code> 和 <code>B</code> 两个数组都是 <code>n</code> 个元素的排列。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化</strong>：</p><ul><li>创建一个计数数组 <code>count</code>，用于记录每个数字在 <code>A</code> 和 <code>B</code> 中的出现次数。数组的长度为 <code>n + 1</code>（假设数组元素值的范围是 1 到 <code>n</code>）。</li><li>创建变量 <code>prefix</code>，用于记录当前公共元素的数量。</li><li>创建结果数组 <code>res</code>，用于存储每个索引的公共前缀结果。</li></ul></li><li><p><strong>迭代处理</strong>：</p><ul><li>遍历索引 <code>i</code>： <ul><li>将 <code>A[i]</code> 和 <code>B[i]</code> 的出现次数分别在 <code>count</code> 中加 1。</li><li>如果 <code>A[i]</code> 的计数达到 2，说明 <code>A[i]</code> 是一个公共元素，增加 <code>prefix</code>。</li><li>如果 <code>B[i]</code> 不等于 <code>A[i]</code> 且 <code>B[i]</code> 的计数达到 2，说明 <code>B[i]</code> 是另一个公共元素，增加 <code>prefix</code>。</li><li>将当前的 <code>prefix</code> 值记录到 <code>res[i]</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最终返回结果数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组 <code>A</code> 和 <code>B</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，计数数组 <code>count</code> 的长度为 <code>n + 1</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">A</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">B</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findThePrefixCommonArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token constant">A</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> prefix <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">[</span><span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		count<span class="token punctuation">[</span><span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span><span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prefix<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> count<span class="token punctuation">[</span><span class="token constant">B</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prefix<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> prefix<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function B(x,y){const p=t("font"),e=t("RouterLink"),c=t("ExternalLinkIcon");return l(),d("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:o(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:o(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(c)]),s(),n("a",f,[A,a(c)])]),_])}const C=i(u,[["render",B],["__file","2657.html.vue"]]);export{C as default};
