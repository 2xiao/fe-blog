import{_ as r,r as l,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-9CeBk-uV.js";const h={},k=n("h1",{id:"_769-最多能完成排序的块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_769-最多能完成排序的块","aria-hidden":"true"},"#"),e(" 769. 最多能完成排序的块")],-1),m=n("code",null,"栈",-1),g=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),b=n("code",null,"排序",-1),f=n("code",null,"单调栈",-1),v={href:"https://leetcode.cn/problems/max-chunks-to-make-sorted",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/max-chunks-to-make-sorted",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),V=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>arr</code> of length <code>n</code> that represents a permutation of the integers in the range <code>[0, n - 1]</code>.</p><p>We split <code>arr</code> into some number of <strong>chunks</strong> (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.</p><p>Return <em>the largest number of chunks we can make to sort the array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [4,3,2,1,0]</p><p>Output: 1</p><p>Explanation:</p><p>Splitting into two or more chunks will not return the required result.</p><p>For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn&#39;t sorted.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,0,2,3,4]</p><p>Output: 4</p><p>Explanation:</p><p>We can split into two chunks, such as [1, 0], [2, 3, 4].</p><p>However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == arr.length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>0 &lt;= arr[i] &lt; n</code></li><li>All the elements of <code>arr</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的整数数组 <code>arr</code> ，它表示在 <code>[0, n - 1]</code> 范围内的整数的排列。</p><p>我们将 <code>arr</code> 分割成若干 <strong>块</strong> (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。</p><p>返回数组能分成的最多块数量。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> arr = [4,3,2,1,0]</p><p><strong>输出:</strong> 1</p><p><strong>解释:</strong></p><p>将数组分成 2 块或者更多块，都无法得到所需的结果。</p><p>例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> arr = [1,0,2,3,4]</p><p><strong>输出:</strong> 4</p><p><strong>解释:</strong></p><p>我们可以把它分成两块，例如 [1, 0], [2, 3, 4]。</p><p>然而，分成 [1, 0], [2], [3], [4] 可以得到最多的块数。</p><p>对每个块单独排序后，结果为 [0, 1], [2], [3], [4]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>n == arr.length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>0 &lt;= arr[i] &lt; n</code></li><li><code>arr</code> 中每个元素都 <strong>不同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>解题的<strong>关键</strong>是找到可以分块的位置：数组中前缀最大值等于对应的索引时，当前可以分割。</p><ul><li>若从头遍历到位置 <code>i</code> 的子数组 <code>[0, i]</code> 的最大值等于 <code>i</code>，则可以将前缀 <code>[0, i]</code> 作为一个块。 <ul><li>例如：对于数组 <code>[1, 0, 2, 3, 4]</code>： <ul><li><code>[1, 0]</code> 的最大值是 <code>1</code>，对应的索引也是 <code>1</code>，所以可以划分为一个块。</li><li><code>[2]</code>、<code>[3]</code>、<code>[4]</code> 都满足上述条件。</li></ul></li></ul></li><li>如果最大值大于 <code>i</code>，说明当前块还不能结束。</li></ul><ol><li>初始化变量： <ul><li><code>maxVal</code>：记录当前遍历的前缀的最大值。</li><li><code>chunks</code>：记录分块的数量。</li></ul></li><li>遍历数组 <code>arr</code>： <ul><li>更新 <code>maxVal</code> 为当前遍历到的最大值。</li><li>如果 <code>maxVal</code> 等于当前索引 <code>i</code>，说明可以分块，<code>chunks</code> 加一。</li></ul></li><li>遍历结束，返回分块数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxChunksToSorted</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxVal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前前缀最大值</span>
	<span class="token keyword">let</span> chunks <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 分块数量</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxVal <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxVal<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新前缀最大值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>maxVal <span class="token operator">===</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 最大值等于索引时，可以分块</span>
			chunks<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> chunks<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"768",-1),C=n("td",{style:{"text-align":"left"}},"最多能完成排序的块 II",-1),I=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},N=n("code",null,"栈",-1),O=n("code",null,"贪心",-1),j=n("code",null,"数组",-1),B=n("code",null,"2+",-1),R=n("td",{style:{"text-align":"center"}},"🔴",-1),S={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/max-chunks-to-make-sorted-ii",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/max-chunks-to-make-sorted-ii",target:"_blank",rel:"noopener noreferrer"};function T(W,F){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/stack.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",v,[x,t(o)]),e(),n("a",y,[w,t(o)])]),V,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,C,I,n("td",L,[t(a,{to:"/tag/stack.html"},{default:s(()=>[N]),_:1}),e(),t(a,{to:"/tag/greedy.html"},{default:s(()=>[O]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[j]),_:1}),e(),B]),R,n("td",S,[n("a",A,[e("🀄️"),t(o)]),e(),n("a",M,[e("🔗"),t(o)])])])])])])}const Y=r(h,[["render",T],["__file","0769.html.vue"]]);export{Y as default};
