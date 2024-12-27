import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as o,e as u}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_1317-将整数转换为两个无零整数的和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1317-将整数转换为两个无零整数的和","aria-hidden":"true"},"#"),s(" 1317. 将整数转换为两个无零整数的和")],-1),g=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/convert-integer-to-the-sum-of-two-no-zero-integers",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>No-Zero integer</strong> is a positive integer that <strong>does not contain any <code>0</code></strong> in its decimal representation.</p><p>Given an integer <code>n</code>, return <em>a list of two integers</em> <code>[a, b]</code> <em>where</em> :</p><ul><li><code>a</code> and <code>b</code> are <strong>No-Zero integers</strong>.</li><li><code>a + b = n</code></li></ul><p>The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: [1,1]</p><p>Explanation: Let a = 1 and b = 1.</p><p>Both a and b are no-zero integers, and a + b = 2 = n.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 11</p><p>Output: [2,9]</p><p>Explanation: Let a = 2 and b = 9.</p><p>Both a and b are no-zero integers, and a + b = 9 = n.</p><p>Note that there are other valid answers as [8, 3] that can be accepted.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= n &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>「无零整数」是十进制表示中 <strong>不含任何 0</strong> 的正整数。</p><p>给你一个整数 <code>n</code>，请你返回一个 <strong>由两个整数组成的列表</strong> <code>[A, B]</code>，满足：</p><ul><li><code>A</code> 和 <code>B</code> 都是无零整数</li><li><code>A + B = n</code></li></ul><p>题目数据保证至少有一个有效的解决方案。</p><p>如果存在多个有效解决方案，你可以返回其中任意一个。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong>[1,1]</p><p><strong>解释：</strong> A = 1, B = 1. A + B = n 并且 A 和 B 的十进制表示形式都不包含任何 0 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 11</p><p><strong>输出：</strong>[2,9]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 10000</p><p><strong>输出：</strong>[1,9999]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> n = 69</p><p><strong>输出：</strong>[1,68]</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> n = 1010</p><p><strong>输出：</strong>[11,999]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>判断数字是否包含 <code>0</code>：</strong></p><ul><li>通过一个辅助函数 <code>isZeroInt</code>，判断一个数字是否包含数字 <code>0</code>。</li><li>对每个数字，我们逐位检查，直到没有 <code>0</code> 出现为止。</li></ul></li><li><p><strong>算法实现：</strong></p><ul><li>从 <code>a = 1</code> 开始，逐步增加 <code>a</code>，同时 <code>b = n - a</code>。</li><li>如果 <code>a</code> 和 <code>b</code> 都不包含 <code>0</code>，则返回 <code>[a, b]</code>。</li><li>否则继续检查下一个 <code>a</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code><ul><li>判断数字 <code>n</code> 是否包含 <code>0</code> 的时间复杂度是 <code>O(log n)</code>。</li><li>最坏情况下，要判断 <code>[1, n - 1]</code> 中的所有数字，有 <code>n - 1</code> 个。</li><li>因此整体时间复杂度为 <code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getNoZeroIntegers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isZeroInt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> b <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isZeroInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isZeroInt</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		a<span class="token operator">++</span><span class="token punctuation">;</span>
		b<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function f(w,y){const p=e("font"),c=e("RouterLink"),t=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/math.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",b,[m,a(t)]),s(),n("a",h,[v,a(t)])]),_])}const q=l(d,[["render",f],["__file","1317.html.vue"]]);export{q as default};
