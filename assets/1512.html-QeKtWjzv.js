import{_ as p,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-totCBmv-.js";const h={},m=n("h1",{id:"_1512-好数对的数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1512-好数对的数目","aria-hidden":"true"},"#"),s(" 1512. 好数对的数目")],-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),_=n("code",null,"数学",-1),b=n("code",null,"计数",-1),v={href:"https://leetcode.cn/problems/number-of-good-pairs",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/number-of-good-pairs",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code>, return <em>the number of<strong>good pairs</strong></em>.</p><p>A pair <code>(i, j)</code> is called <em>good</em> if <code>nums[i] == nums[j]</code> and <code>i</code> &lt; <code>j</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1,1,3]</p><p>Output: 4</p><p>Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1,1]</p><p>Output: 6</p><p>Explanation: Each pair in the array are <em>good</em>.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 。</p><p>如果一组数字 <code>(i,j)</code> 满足 <code>nums[i]</code> == <code>nums[j]</code> 且 <code>i</code> &lt; <code>j</code> ，就可以认为这是一组 <strong>好数对</strong> 。</p><p>返回好数对的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,1,1,3]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,1]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 数组中的每组数字都是好数对</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计每个数字的出现次数</strong>：</p><ul><li>使用 <code>Map</code> 记录每个数字的出现次数。例如，对于 <code>nums = [1,2,3,1,1,3]</code>，我们得到：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 -&gt; 3
2 -&gt; 1
3 -&gt; 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>根据组合公式计算好数对</strong>：</p><ul><li>如果一个数字出现了 <code>val</code> 次，那么可以形成的好数对数量为：<code>val * (val - 1) / 2</code></li></ul></li><li><p><strong>累加所有数字的好数对</strong>：</p><ul><li>遍历 <code>Map</code> 中的值，将所有数字的好数对数量累加，得到结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>nums</code> 数组的长度。</p><ul><li>统计出现次数,遍历 <code>nums</code> 一次，时间复杂度为 <code>O(n)</code>。</li><li>计算好数对，遍历 <code>Map</code> 的值，最坏情况下有 <code>n</code> 个不同的值，时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用了 <code>Map</code> 存储数字及其出现次数，最坏情况下 <code>nums</code> 中所有数字都不同，空间复杂度为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numIdenticalPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用 Map 统计每个数字的出现次数</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> goodPairs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历统计结果，计算每个数字能形成的好数对数量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> val <span class="token keyword">of</span> count<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			goodPairs <span class="token operator">+=</span> <span class="token punctuation">(</span>val <span class="token operator">*</span> <span class="token punctuation">(</span>val <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 组合公式</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> goodPairs<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2001",-1),j=n("td",{style:{"text-align":"left"}},"可互换矩形的组数",-1),O=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},M=n("code",null,"数组",-1),C=n("code",null,"哈希表",-1),L=n("code",null,"数学",-1),N=n("code",null,"2+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/number-of-pairs-of-interchangeable-rectangles",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2083",-1),A=n("td",{style:{"text-align":"left"}},"求以相同字母开头和结尾的子串总数 🔒",-1),G=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"哈希表",-1),D=n("code",null,"数学",-1),F=n("code",null,"字符串",-1),H=n("code",null,"2+",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/substrings-that-begin-and-end-with-the-same-letter",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,t(o)]),s(),n("a",x,[y,t(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,j,O,n("td",I,[t(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[L]),_:1}),s(),N]),V,n("td",P,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[T,A,G,n("td",S,[t(a,{to:"/tag/hash-table.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[D]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[F]),_:1}),s(),H]),J,n("td",K,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])])])])])}const $=p(h,[["render",W],["__file","1512.html.vue"]]);export{$ as default};
