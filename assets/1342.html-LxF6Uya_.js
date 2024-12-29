import{_ as p,r as l,o as r,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-r0ql_Osa.js";const m={},h=n("h1",{id:"_1342-将数字变成-0-的操作次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1342-将数字变成-0-的操作次数","aria-hidden":"true"},"#"),e(" 1342. 将数字变成 0 的操作次数")],-1),b=n("code",null,"位运算",-1),k=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>num</code>, return <em>the number of steps to reduce it to zero</em>.</p><p>In one step, if the current number is even, you have to divide it by <code>2</code>, otherwise, you have to subtract <code>1</code> from it.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 14</p><p>Output: 6</p><p>Explanation: Step 1: 14 is even; divide by 2 and obtain 7. Step 2: 7 is odd; subtract 1 and obtain 6. Step 3: 6 is even; divide by 2 and obtain 3. Step 4: 3 is odd; subtract 1 and obtain 2. Step 5: 2 is even; divide by 2 and obtain 1. Step 6: 1 is odd; subtract 1 and obtain 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 8</p><p>Output: 4</p><p>Explanation: Step 1: 8 is even; divide by 2 and obtain 4. Step 2: 4 is even; divide by 2 and obtain 2. Step 3: 2 is even; divide by 2 and obtain 1. Step 4: 1 is odd; subtract 1 and obtain 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = 123</p><p>Output: 12</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数 <code>num</code> ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 14</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 步骤 1) 14 是偶数，除以 2 得到 7 。 步骤 2：7 是奇数，减 1 得到 6 。 步骤 3：6 是偶数，除以 2 得到 3 。 步骤 4：3 是奇数，减 1 得到 2 。 步骤 5：2 是偶数，除以 2 得到 1 。 步骤 6：1 是奇数，减 1 得到 0 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 8</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 步骤 1：8 是偶数，除以 2 得到 4 。 步骤 2：4 是偶数，除以 2 得到 2 。 步骤 3：2 是偶数，除以 2 得到 1 。 步骤 4：1 是奇数，减 1 得到 0 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = 123</p><p><strong>输出：</strong> 12</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= num &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用位运算中的右移（即 <code>num &gt;&gt;= 1</code>）来模拟操作过程：</p><ol><li>初始化 <code>steps</code> 为 0，用于记录步数。</li><li>特殊情况：如果 <code>num == 0</code>，不需要操作，返回 <code>0</code>。</li><li>循环进行操作，直到 <code>num == 0</code>。 <ul><li>如果 <code>num</code> 为偶数：直接除以 2（等价于右移 1 位，即 <code>num &gt;&gt;= 1</code>），步数加 1。</li><li>如果 <code>num</code> 为奇数：要先减 1 然后除以 2（等价于右移 1 位），步数加 2。</li><li>其中偶数可以通过 <code>(num &amp; 1) == 0</code> 判断；</li></ul></li><li>返回步数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log num)</code>，<code>num</code> 的值在每次操作中减半，最多需要进行 <code>O(log num)</code> 次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numberOfSteps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 边界条件：输入为 0</span>

	<span class="token keyword">let</span> steps <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 偶数操作 1 次，奇数操作 2 次</span>
		steps <span class="token operator">+=</span> <span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">;</span>
		num <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 除以 2</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> steps <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 最后一步操作将 1 变为 0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2139",-1),q=n("td",{style:{"text-align":"left"}},"得到目标值的最少行动次数",-1),S=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},O=n("code",null,"贪心",-1),I=n("code",null,"数学",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/minimum-moves-to-reach-target-score",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/minimum-moves-to-reach-target-score",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2169",-1),j=n("td",{style:{"text-align":"left"}},"得到 0 的操作数",-1),B={style:{"text-align":"center"}},R={style:{"text-align":"left"}},G=n("code",null,"数学",-1),T=n("code",null,"模拟",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/count-operations-to-obtain-zero",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/count-operations-to-obtain-zero",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),n("a",_,[g,t(o)]),e(),n("a",v,[f,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,S,n("td",E,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[O]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[I]),_:1})]),z,n("td",C,[n("a",L,[e("🀄️"),t(o)]),e(),n("a",N,[e("🔗"),t(o)])])]),n("tr",null,[V,j,n("td",B,[t(a,{to:"/problem/2169.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",R,[t(a,{to:"/tag/math.html"},{default:s(()=>[G]),_:1}),e(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[T]),_:1})]),A,n("td",D,[n("a",F,[e("🀄️"),t(o)]),e(),n("a",H,[e("🔗"),t(o)])])])])])])}const Q=p(m,[["render",J],["__file","1342.html.vue"]]);export{Q as default};
