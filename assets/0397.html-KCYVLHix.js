import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_397-整数替换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_397-整数替换","aria-hidden":"true"},"#"),s(" 397. 整数替换")],-1),m=n("code",null,"贪心",-1),g=n("code",null,"位运算",-1),h=n("code",null,"记忆化搜索",-1),b=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/integer-replacement",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/integer-replacement",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer <code>n</code>, you can apply one of the following operations:</p><ol><li>If <code>n</code> is even, replace <code>n</code> with <code>n / 2</code>.</li><li>If <code>n</code> is odd, replace <code>n</code> with either <code>n + 1</code> or <code>n - 1</code>.</li></ol><p>Return <em>the minimum number of operations needed for</em> <code>n</code> <em>to become</em> <code>1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 8</p><p>Output: 3</p><p>Explanation: 8 -&gt; 4 -&gt; 2 -&gt; 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 7</p><p>Output: 4</p><p>Explanation: 7 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1</p><p>or 7 -&gt; 6 -&gt; 3 -&gt; 2 -&gt; 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 4</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个正整数 <code>n</code> ，你可以做如下操作：</p><ol><li>如果 <code>n</code> 是偶数，则用 <code>n / 2</code>替换 <code>n</code> 。</li><li>如果 <code>n</code> 是奇数，则可以用 <code>n + 1</code> 或 <code>n - 1</code> 替换 <code>n</code> 。</li></ol><p>返回 <code>n</code> 变为 <code>1</code> 所需的最小替换次数 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 8</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 8 -&gt; 4 -&gt; 2 -&gt; 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 7</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 7 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1</p><p>或 7 -&gt; 6 -&gt; 3 -&gt; 2 -&gt; 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p><strong>递归与记忆化</strong>：</p><ul><li>使用递归方法计算从 <code>n</code> 到 <code>1</code> 的最小操作次数。</li><li>通过缓存中间结果避免重复计算，加速求解过程。</li></ul></li><li><p><strong>奇偶处理策略</strong>：</p><ul><li>若 <code>n</code> 为偶数，直接递归计算 <code>n / 2</code>，所需操作次数为 <code>1 + traverse(n / 2)</code>。</li><li>若 <code>n</code> 为奇数，则有两种选择： <ul><li>将 <code>n - 1</code> 递归转换为 <code>1</code>。</li><li>将 <code>n + 1</code> 递归转换为 <code>1</code>。</li></ul></li><li>取两者中较小的操作次数。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，由于记忆化递归避免了大量重复计算，每次减少数值规模。</li><li><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用栈深度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">integerReplacement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">traverse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 基础情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> operations<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			operations <span class="token operator">=</span> <span class="token function">traverse</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			operations <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token function">traverse</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">traverse</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> operations<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缓存结果</span>
		<span class="token keyword">return</span> operations<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">traverse</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function x(q,E){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/memoization.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(p)]),s(),n("a",_,[w,a(p)])]),y])}const L=l(d,[["render",x],["__file","0397.html.vue"]]);export{L as default};
