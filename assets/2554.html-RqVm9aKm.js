import{_ as r,r as l,o as d,c as i,a as e,b as n,d as t,w as s,f as p,e as u}from"./app-Kkp_66uf.js";const m={},h=e("h1",{id:"_2554-从一个范围内选择最多整数-i",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2554-从一个范围内选择最多整数-i","aria-hidden":"true"},"#"),n(" 2554. 从一个范围内选择最多整数 I")],-1),_=e("code",null,"贪心",-1),g=e("code",null,"数组",-1),k=e("code",null,"哈希表",-1),b=e("code",null,"二分查找",-1),f=e("code",null,"排序",-1),x={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>banned</code> and two integers <code>n</code> and <code>maxSum</code>. You are choosing some number of integers following the below rules:</p><ul><li>The chosen integers have to be in the range <code>[1, n]</code>.</li><li>Each integer can be chosen <strong>at most once</strong>.</li><li>The chosen integers should not be in the array <code>banned</code>.</li><li>The sum of the chosen integers should not exceed <code>maxSum</code>.</li></ul><p>Return <em>the<strong>maximum</strong> number of integers you can choose following the mentioned rules</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: banned = [1,6,5], n = 5, maxSum = 6</p><p>Output: 2</p><p>Explanation: You can choose the integers 2 and 4.</p><p>2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1</p><p>Output: 0</p><p>Explanation: You cannot choose any integer while following the mentioned conditions.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: banned = [11], n = 7, maxSum = 50</p><p>Output: 7</p><p>Explanation: You can choose the integers 1, 2, 3, 4, 5, 6, and 7.</p><p>They are from the range [1, 7], all did not appear in banned, and their sum is 28, which did not exceed maxSum.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= banned.length &lt;= 10^4</code></li><li><code>1 &lt;= banned[i], n &lt;= 10^4</code></li><li><code>1 &lt;= maxSum &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>banned</code> 和两个整数 <code>n</code> 和 <code>maxSum</code> 。你需要按照以下规则选择一些整数：</p><ul><li>被选择整数的范围是 <code>[1, n]</code> 。</li><li>每个整数 <strong>至多</strong> 选择 <strong>一次</strong> 。</li><li>被选择整数不能在数组 <code>banned</code> 中。</li><li>被选择整数的和不超过 <code>maxSum</code> 。</li></ul><p>请你返回按照上述规则 <strong>最多</strong> 可以选择的整数数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> banned = [1,6,5], n = 5, maxSum = 6</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 你可以选择整数 2 和 4 。</p><p>2 和 4 在范围 [1, 5] 内，且它们都不在 banned 中，它们的和是 6 ，没有超过 maxSum 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 按照上述规则无法选择任何整数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> banned = [11], n = 7, maxSum = 50</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 你可以选择整数 1, 2, 3, 4, 5, 6 和 7 。</p><p>它们都在范围 [1, 7] 中，且都没出现在 banned 中，它们的和是 28 ，没有超过 maxSum 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= banned.length &lt;= 10^4</code></li><li><code>1 &lt;= banned[i], n &lt;= 10^4</code></li><li><code>1 &lt;= maxSum &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>利用一个 <code>Set</code> 存储禁止的数字 <code>banned</code>，以便快速查询某个数字是否被禁止。</li><li>定义两个变量：<code>count</code> 表示已选择的数字个数，<code>sum</code> 表示当前已选择数字的总和。</li><li>贪心选择数字：从 <code>1</code> 到 <code>n</code> 依次遍历每个数字，按照从小到大的顺序尝试将其加入总和 <code>sum</code> 中。 <ul><li>如果当前数字不在 <code>Set</code> 中，并且加入后 <code>sum</code> 不超过 <code>maxSum</code>，则将其计入结果，并更新总和 <code>sum</code> 和计数 <code>count</code>。</li><li>如果当前数字加入后总和超过 <code>maxSum</code>，则可以直接终止循环（后续的数字只会更大，无法满足条件）。</li></ul></li><li>返回最终的 <code>count</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + b)</code>，其中 <code>b</code> 是 <code>banned</code> 的长度。 <ul><li>创建 <code>Set</code> 的复杂度为 <code>O(b)</code>；</li><li>遍历范围 <code>1</code> 到 <code>n</code>，每次检查数字是否在 <code>banned</code> 集合中，时间复杂度为 <code>O(n)</code>；</li><li>总时间复杂度为 <code>O(n + b)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(b)</code>，<code>Set</code> 用于存储 <code>banned</code> 列表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">banned</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">banned<span class="token punctuation">,</span> n<span class="token punctuation">,</span> maxSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用 Set 存储 banned 列表</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>banned<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 从 1 遍历到 n</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> curSum <span class="token operator">=</span> sum <span class="token operator">+</span> i<span class="token punctuation">;</span>
		<span class="token comment">// 如果数字未被禁止且总和不超过 maxSum</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> curSum <span class="token operator">&lt;=</span> maxSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			sum <span class="token operator">=</span> curSum<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curSum <span class="token operator">&gt;</span> maxSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前数字超过 maxSum，直接退出循环</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"41",-1),I=e("td",{style:{"text-align":"left"}},"缺失的第一个正数",-1),O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=e("code",null,"数组",-1),N=e("code",null,"哈希表",-1),T=e("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/first-missing-positive",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"448",-1),R=e("td",{style:{"text-align":"left"}},"找到所有数组中消失的数字",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},z=e("code",null,"数组",-1),A=e("code",null,"哈希表",-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},J=e("td",{style:{"text-align":"center"}},"2195",-1),P=e("td",{style:{"text-align":"left"}},"向数组中追加 K 个整数",-1),Q=e("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=e("code",null,"贪心",-1),X=e("code",null,"数组",-1),Z=e("code",null,"数学",-1),$=e("code",null,"1+",-1),ee=e("td",{style:{"text-align":"center"}},"🟠",-1),ne={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"},se={href:"https://leetcode.com/problems/append-k-integers-with-minimal-sum",target:"_blank",rel:"noopener noreferrer"},ae=e("td",{style:{"text-align":"center"}},"2295",-1),oe=e("td",{style:{"text-align":"left"}},"替换数组中的元素",-1),le=e("td",{style:{"text-align":"center"}},null,-1),ce={style:{"text-align":"left"}},re=e("code",null,"数组",-1),de=e("code",null,"哈希表",-1),ie=e("code",null,"模拟",-1),pe=e("td",{style:{"text-align":"center"}},"🟠",-1),ue={style:{"text-align":"center"}},me={href:"https://leetcode.cn/problems/replace-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},he={href:"https://leetcode.com/problems/replace-elements-in-an-array",target:"_blank",rel:"noopener noreferrer"},_e=e("td",{style:{"text-align":"center"}},"2557",-1),ge=e("td",{style:{"text-align":"left"}},"从一个范围内选择最多整数 II 🔒",-1),ke=e("td",{style:{"text-align":"center"}},null,-1),be={style:{"text-align":"left"}},fe=e("code",null,"贪心",-1),xe=e("code",null,"数组",-1),ye=e("code",null,"二分查找",-1),ve=e("code",null,"1+",-1),Se=e("td",{style:{"text-align":"center"}},"🟠",-1),we={style:{"text-align":"center"}},qe={href:"https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii",target:"_blank",rel:"noopener noreferrer"};function Ie(Oe,Ce){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return d(),i("div",null,[h,e("p",null,[n("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:s(()=>[_]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[b]),_:1}),n(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),e("a",x,[y,t(o)]),n(),e("a",v,[S,t(o)])]),w,p(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[E,I,e("td",O,[t(a,{to:"/problem/0041.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",C,[t(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),n(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1})]),T,e("td",V,[e("a",Y,[n("🀄️"),t(o)]),n(),e("a",j,[n("🔗"),t(o)])])]),e("tr",null,[B,R,e("td",K,[t(a,{to:"/problem/0448.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",M,[t(a,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),n(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[A]),_:1})]),D,e("td",F,[e("a",G,[n("🀄️"),t(o)]),n(),e("a",H,[n("🔗"),t(o)])])]),e("tr",null,[J,P,Q,e("td",U,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[W]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),n(),t(a,{to:"/tag/math.html"},{default:s(()=>[Z]),_:1}),n(),$]),ee,e("td",ne,[e("a",te,[n("🀄️"),t(o)]),n(),e("a",se,[n("🔗"),t(o)])])]),e("tr",null,[ae,oe,le,e("td",ce,[t(a,{to:"/tag/array.html"},{default:s(()=>[re]),_:1}),n(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[de]),_:1}),n(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[ie]),_:1})]),pe,e("td",ue,[e("a",me,[n("🀄️"),t(o)]),n(),e("a",he,[n("🔗"),t(o)])])]),e("tr",null,[_e,ge,ke,e("td",be,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[fe]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[xe]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[ye]),_:1}),n(),ve]),Se,e("td",we,[e("a",qe,[n("🀄️"),t(o)]),n(),e("a",Ee,[n("🔗"),t(o)])])])])])])}const Ne=r(m,[["render",Ie],["__file","2554.html.vue"]]);export{Ne as default};
