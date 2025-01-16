import{_ as i,r as c,o as l,c as r,a as n,b as t,d as a,w as s,f as d,e as u}from"./app-KDJRKGep.js";const h={},m=n("h1",{id:"_2275-按位与结果大于零的最长组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2275-按位与结果大于零的最长组合","aria-hidden":"true"},"#"),t(" 2275. 按位与结果大于零的最长组合")],-1),k=n("code",null,"位运算",-1),g=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),_=n("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/largest-combination-with-bitwise-and-greater-than-zero",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>bitwise AND</strong> of an array <code>nums</code> is the bitwise AND of all integers in <code>nums</code>.</p><ul><li>For example, for <code>nums = [1, 5, 3]</code>, the bitwise AND is equal to <code>1 &amp; 5 &amp; 3 = 1</code>.</li><li>Also, for <code>nums = [7]</code>, the bitwise AND is <code>7</code>.</li></ul><p>You are given an array of positive integers <code>candidates</code>. Evaluate the <strong>bitwise AND</strong> of every <strong>combination</strong> of numbers of <code>candidates</code>. Each number in <code>candidates</code> may only be used <strong>once</strong> in each combination.</p><p>Return the size of the<strong>largest</strong> combination of <code>candidates</code> with a bitwise AND<strong>greater</strong> than <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candidates = [16,17,71,62,12,24,14]</p><p>Output: 4</p><p>Explanation: The combination [16,17,62,24] has a bitwise AND of 16 &amp; 17 &amp; 62 &amp; 24 = 16 &gt; 0.</p><p>The size of the combination is 4.</p><p>It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.</p><p>Note that more than one combination may have the largest size.</p><p>For example, the combination [62,12,24,14] has a bitwise AND of 62 &amp; 12 &amp; 24 &amp; 14 = 8 &gt; 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candidates = [8,8]</p><p>Output: 2</p><p>Explanation: The largest combination [8,8] has a bitwise AND of 8 &amp; 8 = 8 &gt; 0.</p><p>The size of the combination is 2, so we return 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 10^5</code></li><li><code>1 &lt;= candidates[i] &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>对数组 <code>nums</code> 执行 <strong>按位与</strong> 相当于对数组 <code>nums</code> 中的所有整数执行 <strong>按位与</strong> 。</p><ul><li>例如，对 <code>nums = [1, 5, 3]</code> 来说，按位与等于 <code>1 &amp; 5 &amp; 3 = 1</code> 。</li><li>同样，对 <code>nums = [7]</code> 而言，按位与等于 <code>7</code> 。</li></ul><p>给你一个正整数数组 <code>candidates</code> 。计算 <code>candidates</code> 中的数字每种组合下 <strong>按位与</strong> 的结果。 <code>candidates</code> 中的每个数字在每种组合中只能使用 <strong>一次</strong> 。</p><p>返回按位与结果大于 <code>0</code> 的 <strong>最长</strong> 组合的长度。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> candidates = [16,17,71,62,12,24,14]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 组合 [16,17,62,24] 的按位与结果是 16 &amp; 17 &amp; 62 &amp; 24 = 16 &gt; 0 。</p><p>组合长度是 4 。</p><p>可以证明不存在按位与结果大于 0 且长度大于 4 的组合。</p><p>注意，符合长度最大的组合可能不止一种。</p><p>例如，组合 [62,12,24,14] 的按位与结果是 62 &amp; 12 &amp; 24 &amp; 14 = 8 &gt; 0 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> candidates = [8,8]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 最长组合是 [8,8] ，按位与结果 8 &amp; 8 = 8 &gt; 0 。</p><p>组合长度是 2 ，所以返回 2 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 10^5</code></li><li><code>1 &lt;= candidates[i] &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>按位与操作可以将多个二进制数逐位比较，如果相同位置上所有数的位均为 1，则结果的该位为 1，否则为 0。</li><li>要求按位与结果大于 0，意味着在某个位置上至少有一个 1。</li><li>问题的核心是找到使按位与结果大于 0 的最长组合长度，即在某个二进制位上为 1 的数最多的情况。</li></ul><ol><li><p><strong>统计每个位上的 1 的数量</strong>：</p><ul><li>对每个数字 <code>num</code> 转换成二进制表示并逐位检查。</li><li>对于每个位上的 1，将它记录在 <code>bitMap</code> 中，该 Map 的键表示二进制位的位置，值表示该位置上为 1 的数字数量。</li></ul></li><li><p><strong>返回最大值</strong>：</p><ul><li>遍历 <code>bitMap</code> 的所有值，选择最大值作为结果。这是因为该最大值表示某个位上所有数字为 1 的数量，即最长组合的长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log m)</code>，其中 <code>n</code> 是数组长度，<code>m</code> 是 <code>num</code> 的最大值，对于每个数字 <code>num</code>，转换为二进制字符串的时间复杂度为 <code>O(log m)</code>，一共要处理 <code>n</code> 个数字。</p></li><li><p><strong>空间复杂度</strong>：<code>O(d)</code>，其中 <code>d</code> 是二进制数的位数，用于存储每个位上为 1 的计数，最多 24 位，所以是常数量级的。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestCombination</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candidates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> bitMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> candidates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		num
			<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">char<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					bitMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token punctuation">(</span>bitMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>bitMap<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"2044",-1),D=n("td",{style:{"text-align":"left"}},"统计按位或能得到最大值的子集数目",-1),E={style:{"text-align":"center"}},M={style:{"text-align":"left"}},q=n("code",null,"位运算",-1),z=n("code",null,"数组",-1),C=n("code",null,"回溯",-1),T=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return l(),r("div",null,[m,n("p",null,[t("🟠 "),a(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),t(),a(e,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),a(e,{to:"/tag/hash-table.html"},{default:s(()=>[b]),_:1}),t(),a(e,{to:"/tag/counting.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",f,[v,a(o)]),t(),n("a",x,[w,a(o)])]),y,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[A,D,n("td",E,[a(e,{to:"/problem/2044.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[a(e,{to:"/tag/bit-manipulation.html"},{default:s(()=>[q]),_:1}),t(),a(e,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),t(),a(e,{to:"/tag/backtracking.html"},{default:s(()=>[C]),_:1}),t(),T]),I,n("td",L,[n("a",O,[t("🀄️"),a(o)]),t(),n("a",V,[t("🔗"),a(o)])])])])])])}const S=i(h,[["render",j],["__file","2275.html.vue"]]);export{S as default};
