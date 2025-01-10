import{_ as c,r as e,o as r,c as i,a as n,b as a,d as s,w as t,e as d}from"./app-XFeYdzZv.js";const u={},m=n("h1",{id:"_1491-去掉最低工资和最高工资后的工资平均值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1491-去掉最低工资和最高工资后的工资平均值","aria-hidden":"true"},"#"),a(" 1491. 去掉最低工资和最高工资后的工资平均值")],-1),k=n("code",null,"数组",-1),g=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/average-salary-excluding-the-minimum-and-maximum-salary",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <strong>unique</strong> integers <code>salary</code> where <code>salary[i]</code> is the salary of the <code>ith</code> employee.</p><p>Return <em>the average salary of employees excluding the minimum and maximum salary</em>. Answers within <code>10-5</code> of the actual answer will be accepted.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: salary = [4000,3000,1000,2000]</p><p>Output: 2500.00000</p><p>Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.</p><p>Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: salary = [1000,2000,3000]</p><p>Output: 2000.00000</p><p>Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.</p><p>Average salary excluding minimum and maximum salary is (2000) / 1 = 2000</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= salary.length &lt;= 100</code></li><li><code>1000 &lt;= salary[i] &lt;= 10^6</code></li><li>All the integers of <code>salary</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>salary</code> ，数组里每个数都是 <strong>唯一</strong> 的，其中 <code>salary[i]</code> 是第 <code>i</code> 个员工的工资。</p><p>请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> salary = [4000,3000,1000,2000]</p><p><strong>输出：</strong> 2500.00000</p><p><strong>解释：</strong> 最低工资和最高工资分别是 1000 和 4000 。</p><p>去掉最低工资和最高工资以后的平均工资是 (2000+3000)/2= 2500</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> salary = [1000,2000,3000]</p><p><strong>输出：</strong> 2000.00000</p><p><strong>解释：</strong> 最低工资和最高工资分别是 1000 和 3000 。</p><p>去掉最低工资和最高工资以后的平均工资是 (2000)/1= 2000</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> salary = [6000,5000,4000,3000,2000,1000]</p><p><strong>输出：</strong> 3500.00000</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> salary = [8000,9000,2000,3000,6000,1000]</p><p><strong>输出：</strong> 4750.00000</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= salary.length &lt;= 100</code></li><li><code>10^3 &lt;= salary[i] &lt;= 10^6</code></li><li><code>salary[i]</code> 是唯一的。</li><li>与真实值误差在 <code>10^-5</code> 以内的结果都将视为正确答案。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过一次遍历同时计算总和、最小值和最大值，从而优化效率。</p><ol><li>初始化 <code>sum</code> 为 <code>0</code>，<code>min</code> 为正无穷大，<code>max</code> 为负无穷大。</li><li>遍历 <code>salary</code> 数组： <ul><li>更新 <code>min</code> 和 <code>max</code> 的值。</li><li>累加当前元素到 <code>sum</code>。</li></ul></li><li>计算平均值：从总和中减去 <code>min</code> 和 <code>max</code>，然后除以 <code>salary.length - 2</code>。</li><li>返回结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，需要遍历整个数组一次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用常量级变量，无额外空间消耗。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">salary</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">average</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> salary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>sum <span class="token operator">-</span> min <span class="token operator">-</span> max<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>salary<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(f,w){const l=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[a("🟢 "),s(l,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),a(),s(o,{to:"/tag/sorting.html"},{default:t(()=>[g]),_:1}),a("  🔗 "),n("a",h,[y,s(p)]),a(),n("a",v,[b,s(p)])]),_])}const E=c(u,[["render",x],["__file","1491.html.vue"]]);export{E as default};
