import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-totCBmv-.js";const d={},m=n("h1",{id:"_502-ipo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_502-ipo","aria-hidden":"true"},"#"),s(" 502. IPO")],-1),h=n("code",null,"贪心",-1),v=n("code",null,"数组",-1),b=n("code",null,"排序",-1),f=n("code",null,"堆（优先队列）",-1),_={href:"https://leetcode.cn/problems/ipo",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/ipo",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Suppose LeetCode will start its <strong>IPO</strong> soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the <strong>IPO</strong>. Since it has limited resources, it can only finish at most <code>k</code> distinct projects before the <strong>IPO</strong>. Help LeetCode design the best way to maximize its total capital after finishing at most <code>k</code> distinct projects.</p><p>You are given <code>n</code> projects where the <code>ith</code> project has a pure profit <code>profits[i]</code> and a minimum capital of <code>capital[i]</code> is needed to start it.</p><p>Initially, you have <code>w</code> capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.</p><p>Pick a list of <strong>at most</strong> <code>k</code> distinct projects from given projects to <strong>maximize your final capital</strong> , and return <em>the final maximized capital</em>.</p><p>The answer is guaranteed to fit in a 32-bit signed integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]</p><p>Output: 4</p><p>Explanation: Since your initial capital is 0, you can only start the project indexed 0.</p><p>After finishing it you will obtain profit 1 and your capital becomes 1.</p><p>With capital 1, you can either start the project indexed 1 or the project indexed 2.</p><p>Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.</p><p>Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]</p><p>Output: 6</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= 10^5</code></li><li><code>0 &lt;= w &lt;= 10^9</code></li><li><code>n == profits.length</code></li><li><code>n == capital.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= profits[i] &lt;= 10^4</code></li><li><code>0 &lt;= capital[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设 <em>力扣（LeetCode）</em> 即将开始 <strong>IPO</strong> 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 <code>k</code> 个不同的项目。帮助 力扣 设计完成最多 <code>k</code> 个不同项目后得到最大总资本的方式。</p><p>给你 <code>n</code> 个项目。对于每个项目 <code>i</code> ，它都有一个纯利润 <code>profits[i]</code> ，和启动该项目需要的最小资本 <code>capital[i]</code> 。</p><p>最初，你的资本为 <code>w</code> 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。</p><p>总而言之，从给定项目中选择 <strong>最多</strong> <code>k</code> 个不同项目的列表，以 <strong>最大化最终资本</strong> ，并输出最终可获得的最多资本。</p><p>答案保证在 32 位有符号整数范围内。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过优先队列（堆）来解决。我们可以维护一个大顶堆。每次将总资本允许的条件下所有项目的利润加入堆中，并弹出堆顶元素，将其加入到总利润中，直到做完了 <code>k</code> 个不同项目，最终返回总利润。</p><ol><li>将项目的成本和利润成对加入到数组 <code>vp</code> 中，并按照成本升序排序；</li><li>构建一个大顶堆 heap ，堆中的每个元素是项目的利润；</li><li>重复以下步骤 <code>k</code> 次： <ul><li>将所有成本 <code>capital</code> 小于总资本 <code>totalProfit</code> 的项目加入堆中；</li><li>弹出堆顶元素，并将更新加入总资本 <code>totalProfit</code> 中；</li></ul></li><li>返回总资本 <code>totalProfit</code>；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">w</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">profits</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">capital</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMaximizedCapital</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> w<span class="token punctuation">,</span> profits<span class="token punctuation">,</span> capital</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> max <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			min <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> min<span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> max<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span>
			min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> vp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		len <span class="token operator">=</span> profits<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		vp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>capital<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> profits<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	vp<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> totalProfit <span class="token operator">=</span> w<span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> vp<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> totalProfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">insert</span><span class="token punctuation">(</span>vp<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		totalProfit <span class="token operator">+=</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> totalProfit<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),P=n("td",{style:{"text-align":"center"}},"2542",-1),I=n("td",{style:{"text-align":"left"}},"最大子序列的分数",-1),C={style:{"text-align":"center"}},q={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),O=n("code",null,"数组",-1),E=n("code",null,"排序",-1),V=n("code",null,"1+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/maximum-subsequence-score",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/maximum-subsequence-score",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"2813",-1),T=n("td",{style:{"text-align":"left"}},"子序列最大优雅度",-1),H=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},U=n("code",null,"栈",-1),W=n("code",null,"贪心",-1),A=n("code",null,"数组",-1),M=n("code",null,"3+",-1),Y=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/maximum-elegance-of-a-k-length-subsequence",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence",target:"_blank",rel:"noopener noreferrer"};function K(Q,X){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",_,[g,a(p)]),s(),n("a",y,[w,a(p)])]),x,r(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[P,I,n("td",C,[a(e,{to:"/problem/2542.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[E]),_:1}),s(),V]),z,n("td",N,[n("a",S,[s("🀄️"),a(p)]),s(),n("a",B,[s("🔗"),a(p)])])]),n("tr",null,[D,T,H,n("td",R,[a(e,{to:"/tag/stack.html"},{default:t(()=>[U]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[W]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[A]),_:1}),s(),M]),Y,n("td",F,[n("a",G,[s("🀄️"),a(p)]),s(),n("a",J,[s("🔗"),a(p)])])])])])])}const $=l(d,[["render",K],["__file","0502.html.vue"]]);export{$ as default};
