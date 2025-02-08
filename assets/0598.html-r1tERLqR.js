import{_ as p,r as l,o as i,c as r,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-totCBmv-.js";const m={},h=n("h1",{id:"_598-区间加法-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_598-区间加法-ii","aria-hidden":"true"},"#"),e(" 598. 区间加法 II")],-1),k=n("code",null,"数组",-1),g=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/range-addition-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/range-addition-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> matrix <code>M</code> initialized with all <code>0</code>&#39;s and an array of operations <code>ops</code>, where <code>ops[i] = [ai, bi]</code> means <code>M[x][y]</code> should be incremented by one for all <code>0 &lt;= x &lt; ai</code> and <code>0 &lt;= y &lt; bi</code>.</p><p>Count and return <em>the number of maximum integers in the matrix after performing all the operations</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: m = 3, n = 3, ops = [[2,2],[3,3]]</p><p>Output: 4</p><p>Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: m = 3, n = 3, ops = []</p><p>Output: 9</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= m, n &lt;= 4 * 10^4</code></li><li><code>0 &lt;= ops.length &lt;= 10^4</code></li><li><code>ops[i].length == 2</code></li><li><code>1 &lt;= ai &lt;= m</code></li><li><code>1 &lt;= bi &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的矩阵 <code>M</code> 和一个操作数组 <code>op</code> 。矩阵初始化时所有的单元格都为 <code>0</code> 。<code>ops[i] = [ai, bi]</code> 意味着当所有的 <code>0 &lt;= x &lt; ai</code> 和 <code>0 &lt;= y &lt; bi</code> 时， <code>M[x][y]</code> 应该加 1。</p><p>在 <em>执行完所有操作后</em> ，计算并返回 <em>矩阵中最大整数的个数</em> 。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/02/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> m = 3, n = 3，ops = [[2,2],[3,3]]</p><p><strong>输出:</strong> 4</p><p><strong>解释:</strong> M 中最大的整数是 2, 而且 M 中有 4 个值为 2 的元素。因此返回 4。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]</p><p><strong>输出:</strong> 4</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> m = 3, n = 3, ops = []</p><p><strong>输出:</strong> 9</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= m, n &lt;= 4 * 10^4</code></li><li><code>0 &lt;= ops.length &lt;= 10^4</code></li><li><code>ops[i].length == 2</code></li><li><code>1 &lt;= ai &lt;= m</code></li><li><code>1 &lt;= bi &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>值最大的区域</strong></p><ul><li>对于每次操作 <code>ops[i] = [a, b]</code>，会对矩形 <code>(0,0)</code> 到 <code>(a-1, b-1)</code> 的区域加 1。</li><li>因此，值最大的区域会被所有操作重叠，实际是所有操作中矩形的<strong>最小范围交集</strong>。</li></ul></li><li><p><strong>如何计算最小范围交集</strong></p><ul><li>遍历 <code>ops</code> 数组，对 <code>a</code> 和 <code>b</code> 分别取最小值，得到操作后的最小行 <code>minRow</code> 和最小列 <code>minCol</code>。</li><li>矩形网格的最大值区域即为大小为 <code>minRow × minCol</code> 的矩形区域。</li></ul></li><li><p><strong>特殊情况</strong></p><ul><li>如果 <code>ops</code> 是空数组，没有任何操作，值最大的网格区域就是整个矩形 <code>m × n</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>ops</code> 的长度，遍历 <code>ops</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">ops</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> ops</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> minRow <span class="token operator">=</span> m<span class="token punctuation">;</span> <span class="token comment">// 初始为矩阵行数</span>
	<span class="token keyword">let</span> minCol <span class="token operator">=</span> n<span class="token punctuation">;</span> <span class="token comment">// 初始为矩阵列数</span>

	<span class="token comment">// 遍历操作，计算最小行数和列数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> ops<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		minRow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minRow<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
		minCol <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minCol<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 最大值区域的网格数量</span>
	<span class="token keyword">return</span> minRow <span class="token operator">*</span> minCol<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"370",-1),q=n("td",{style:{"text-align":"left"}},"区间加法 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},E=n("code",null,"数组",-1),R=n("code",null,"前缀和",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/range-addition",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/range-addition",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2718",-1),V=n("td",{style:{"text-align":"left"}},"查询后矩阵的和",-1),z=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},S=n("code",null,"数组",-1),T=n("code",null,"哈希表",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/sum-of-matrix-after-queries",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/sum-of-matrix-after-queries",target:"_blank",rel:"noopener noreferrer"};function G(H,J){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",_,[b,t(o)]),e(),n("a",f,[x,t(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,C,n("td",M,[t(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),e(),t(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[R]),_:1})]),I,n("td",j,[n("a",L,[e("🀄️"),t(o)]),e(),n("a",N,[e("🔗"),t(o)])])]),n("tr",null,[O,V,z,n("td",B,[t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1})]),Y,n("td",A,[n("a",D,[e("🀄️"),t(o)]),e(),n("a",F,[e("🔗"),t(o)])])])])])])}const P=p(m,[["render",G],["__file","0598.html.vue"]]);export{P as default};
