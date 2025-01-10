import{_ as d,r as c,o as i,c as p,a as e,b as t,d as n,w as o,f as r,e as h}from"./app-XFeYdzZv.js";const u={},y=e("h1",{id:"_575-分糖果",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_575-分糖果","aria-hidden":"true"},"#"),t(" 575. 分糖果")],-1),_=e("code",null,"数组",-1),g=e("code",null,"哈希表",-1),m={href:"https://leetcode.cn/problems/distribute-candies",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/distribute-candies",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),x=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Alice has <code>n</code> candies, where the <code>ith</code> candy is of type <code>candyType[i]</code>. Alice noticed that she started to gain weight, so she visited a doctor.</p><p>The doctor advised Alice to only eat <code>n / 2</code> of the candies she has (<code>n</code> is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor&#39;s advice.</p><p>Given the integer array <code>candyType</code> of length <code>n</code>, return _the<strong>maximum</strong> number of different types of candies she can eat if she only eats _<code>n / 2</code> <em>of them</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candyType = [1,1,2,2,3,3]</p><p>Output: 3</p><p>Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candyType = [1,1,2,3]</p><p>Output: 2</p><p>Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: candyType = [6,6,6,6]</p><p>Output: 1</p><p>Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == candyType.length</code></li><li><code>2 &lt;= n &lt;= 10^4</code></li><li><code>n</code> is even.</li><li><code>-10^5 &lt;= candyType[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>Alice 有 <code>n</code> 枚糖，其中第 <code>i</code> 枚糖的类型为 <code>candyType[i]</code> 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。</p><p>医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 <code>n / 2</code> 即可（<code>n</code> 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。</p><p>给你一个长度为 <code>n</code> 的整数数组 <code>candyType</code> ，返回： Alice <em>在仅吃掉<code>n / 2</code> 枚糖的情况下，可以吃到糖的 <strong>最多</strong> 种类数</em>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> candyType = [1,1,2,2,3,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> candyType = [1,1,2,3]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> candyType = [6,6,6,6]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃 2 枚，但只能吃到 1 种糖。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == candyType.length</code></li><li><code>2 &lt;= n &lt;= 10^4</code></li><li><code>n</code> 是一个偶数</li><li><code>-10^5 &lt;= candyType[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>使用集合（<code>Set</code>）对糖果数组 <code>candyType</code> 进行去重，得到糖果的种类数 <code>totalType</code>。</li><li>结果即为 <code>Math.min(totalType, candyType.length / 2)</code>。 <ul><li>若糖果种类总数 <code>totalType</code> 小于 <code>candyType.length / 2</code>，可以尝到的糖果种类即为糖果的总种类数。</li><li>若糖果种类总数 <code>totalType</code> 大于或等于 <code>candyType.length / 2</code>，尝到的糖果种类为糖果总数量的一半。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为 <code>candyType</code> 的长度，使用 <code>Set</code> 遍历数组进行去重。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 为糖果种类数，使用 <code>Set</code> 存储糖果种类</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candyType</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">distributeCandies</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candyType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> totalType <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>candyType<span class="token punctuation">)</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// 去重计算糖果种类数</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>totalType<span class="token punctuation">,</span> candyType<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取种类数与糖果总数的一半的最小值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),T=e("td",{style:{"text-align":"center"}},"3122",-1),w=e("td",{style:{"text-align":"left"}},"使矩阵满足条件的最少操作次数",-1),A=e("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},E=e("code",null,"数组",-1),C=e("code",null,"动态规划",-1),S=e("code",null,"矩阵",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"3142",-1),j=e("td",{style:{"text-align":"left"}},"判断矩阵是否满足条件",-1),B=e("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},R=e("code",null,"数组",-1),z=e("code",null,"矩阵",-1),G=e("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return i(),p("div",null,[y,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),n(s,{to:"/tag/array.html"},{default:o(()=>[_]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[g]),_:1}),t("  🔗 "),e("a",m,[k,n(a)]),t(),e("a",f,[b,n(a)])]),x,r(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[T,w,A,e("td",q,[n(s,{to:"/tag/array.html"},{default:o(()=>[E]),_:1}),t(),n(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[C]),_:1}),t(),n(s,{to:"/tag/matrix.html"},{default:o(()=>[S]),_:1})]),I,e("td",L,[e("a",N,[t("🀄️"),n(a)]),t(),e("a",O,[t("🔗"),n(a)])])]),e("tr",null,[V,j,B,e("td",M,[n(s,{to:"/tag/array.html"},{default:o(()=>[R]),_:1}),t(),n(s,{to:"/tag/matrix.html"},{default:o(()=>[z]),_:1})]),G,e("td",W,[e("a",D,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])])])])])}const Q=d(u,[["render",H],["__file","0575.html.vue"]]);export{Q as default};
