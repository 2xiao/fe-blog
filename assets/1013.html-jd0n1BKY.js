import{_ as l,r,o as c,c as i,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-3dvbhwow.js";const k={},m=n("h1",{id:"_1013-将数组分成和相等的三个部分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1013-将数组分成和相等的三个部分","aria-hidden":"true"},"#"),a(" 1013. 将数组分成和相等的三个部分")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),b={href:"https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, return <code>true</code> if we can partition the array into three <strong>non-empty</strong> parts with equal sums.</p><p>Formally, we can partition the array if we can find indexes <code>i + 1 &lt; j</code> with <code>(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])</code></p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]</p><p>Output: true</p><p>Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [3,3,6,5,-2,2,5,1,-9,4]</p><p>Output: true</p><p>Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 5 * 10^4</code></li><li><code>-10^4 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code>，只有可以将其划分为三个和相等的 <strong>非空</strong> 部分时才返回 <code>true</code>，否则返回 <code>false</code>。</p><p>形式上，如果可以找出索引 <code>i + 1 &lt; j</code> 且满足 <code>(arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])</code> 就可以将数组三等分。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,2,1,-6,6,-7,9,1,2,0,1]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,2,1,-6,6,7,9,-1,2,0,1]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [3,3,6,5,-2,2,5,1,-9,4]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 5 * 10^4</code></li><li><code>-10^4 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>计算数组的总和 <code>totalSum</code>，如果 <code>totalSum</code> 不能被 <code>3</code> 整除，直接返回 <code>false</code>，因为三个部分的和无法相等。</p></li><li><p>每个部分的目标和为 <code>target = totalSum / 3</code>，我们需要找到三个这样的部分，使它们的和等于 <code>target</code>。</p></li><li><p><strong>寻找分割点</strong>：</p><ul><li>从左到右遍历数组，累加元素的值到 <code>partSum</code>。</li><li>每当累加和等于目标和 <code>target</code> 时，说明可以分割出一个部分。</li><li>重置累加和 <code>partSum = 0</code>，继续寻找下一个部分。</li><li>当找到三个部分时，如果还有元素没有遍历完，继续累加剩余的元素和到 <code>partSum</code>。</li></ul></li><li><p>如果遍历结束后，找到了三个部分，且剩余元素和 <code>partSum == 0</code>，返回 <code>true</code>；否则，返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组两次，一次计算总和，一次寻找分割点。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>

    <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> sum <span class="token operator">==</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">canThreePartsEqualSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> totalSum <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果总和不能被 3 整除，直接返回 false</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>totalSum <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> target <span class="token operator">=</span> totalSum <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> partSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		partSum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>partSum <span class="token operator">===</span> target <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			partSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果正好被分为 3 部分，返回 true</span>
	<span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> partSum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1991",-1),S=n("td",{style:{"text-align":"left"}},"找到数组的中间位置",-1),q=n("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},E=n("code",null,"数组",-1),C=n("code",null,"前缀和",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"};function V(B,R){const p=r("font"),e=r("RouterLink"),o=r("ExternalLinkIcon");return c(),i("div",null,[m,n("p",null,[a("🟢 "),s(p,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),a("  🔗 "),n("a",b,[v,s(o)]),a(),n("a",_,[f,s(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,S,q,n("td",j,[s(e,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),a(),s(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[C]),_:1})]),I,n("td",L,[n("a",N,[a("🀄️"),s(o)]),a(),n("a",O,[a("🔗"),s(o)])])])])])])}const F=l(k,[["render",V],["__file","1013.html.vue"]]);export{F as default};
