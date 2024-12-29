import{_ as l,r as c,o as p,c as i,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_2224-转化时间需要的最少操作数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2224-转化时间需要的最少操作数","aria-hidden":"true"},"#"),t(" 2224. 转化时间需要的最少操作数")],-1),h=n("code",null,"贪心",-1),_=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-convert-time",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-number-of-operations-to-convert-time",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two strings <code>current</code> and <code>correct</code> representing two <strong>24-hour times</strong>.</p><p>24-hour times are formatted as <code>&quot;HH:MM&quot;</code>, where <code>HH</code> is between <code>00</code> and <code>23</code>, and <code>MM</code> is between <code>00</code> and <code>59</code>. The earliest 24-hour time is <code>00:00</code>, and the latest is <code>23:59</code>.</p><p>In one operation you can increase the time <code>current</code> by <code>1</code>, <code>5</code>, <code>15</code>, or <code>60</code> minutes. You can perform this operation <strong>any</strong> number of times.</p><p>Return _the<strong>minimum number of operations</strong> needed to convert _<code>current</code><em>to</em><code>correct</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: current = &quot;02:30&quot;, correct = &quot;04:35&quot;</p><p>Output: 3</p><p>Explanation: We can convert current to correct in 3 operations as follows:</p><ul><li>Add 60 minutes to current. current becomes &quot;03:30&quot;.</li><li>Add 60 minutes to current. current becomes &quot;04:30&quot;.</li><li>Add 5 minutes to current. current becomes &quot;04:35&quot;.</li></ul><p>It can be proven that it is not possible to convert current to correct in fewer than 3 operations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: current = &quot;11:00&quot;, correct = &quot;11:01&quot;</p><p>Output: 1</p><p>Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>current</code> and <code>correct</code> are in the format <code>&quot;HH:MM&quot;</code></li><li><code>current &lt;= correct</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>current</code> 和 <code>correct</code> ，表示两个 <strong>24 小时制时间</strong> 。</p><p><strong>24 小时制时间</strong> 按 <code>&quot;HH:MM&quot;</code> 进行格式化，其中 <code>HH</code> 在 <code>00</code> 和 <code>23</code> 之间，而 <code>MM</code> 在 <code>00</code> 和 <code>59</code> 之间。最早的 24 小时制时间为 <code>00:00</code> ，最晚的是 <code>23:59</code> 。</p><p>在一步操作中，你可以将 <code>current</code> 这个时间增加 <code>1</code>、<code>5</code>、<code>15</code> 或 <code>60</code> 分钟。你可以执行这一操作 <strong>任意</strong> 次数。</p><p>返回将 <code>current</code> <strong>转化为</strong> <code>correct</code> 需要的 <strong>最少操作数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> current = &quot;02:30&quot;, correct = &quot;04:35&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 可以按下述 3 步操作将 current 转换为 correct ：</p><ul><li>为 current 加 60 分钟，current 变为 &quot;03:30&quot; 。</li><li>为 current 加 60 分钟，current 变为 &quot;04:30&quot; 。</li><li>为 current 加 5 分钟，current 变为 &quot;04:35&quot; 。</li></ul><p>可以证明，无法用少于 3 步操作将 current 转化为 correct 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> current = &quot;11:00&quot;, correct = &quot;11:01&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 只需要为 current 加一分钟，所以最小操作数是 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>current</code> 和 <code>correct</code> 都符合 <code>&quot;HH:MM&quot;</code> 格式</li><li><code>current &lt;= correct</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>计算时间差</strong>：</p><ul><li>将 <code>current</code> 和 <code>correct</code> 转换为分钟数表示，方便计算时间差 <code>diff</code>： <code>diff = correct_hour * 60 + correct_minute - (current_hour * 60 + current_minute)</code></li></ul></li><li><p><strong>贪心算法</strong>：</p><ul><li>使用贪心法，从大到小尝试减少时间差： <ul><li>如果剩余的时间差大于等于 60 分钟，则优先使用 60 分钟操作。</li><li>如果剩余的时间差小于 60 分钟但大于等于 15 分钟，则使用 15 分钟操作。</li><li>如果剩余的时间差小于 15 分钟但大于等于 5 分钟，则使用 5 分钟操作。</li><li>如果剩余的时间差小于 5 分钟，则使用 1 分钟操作。</li></ul></li><li>每次操作后，将操作次数加一 <code>res++</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次操作减少 <code>diff</code> 的值，常数次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">current</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">correct</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">convertTime</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">current<span class="token punctuation">,</span> correct</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 计算时间差（以分钟为单位）</span>
	<span class="token keyword">let</span> diff <span class="token operator">=</span>
		<span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>correct<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">+</span>
		<span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>correct<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用贪心法减小时间差</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>diff <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">-=</span> <span class="token number">60</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&gt;=</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">-=</span> <span class="token number">15</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			diff <span class="token operator">-=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			diff <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"322",-1),w=n("td",{style:{"text-align":"left"}},"零钱兑换",-1),M={style:{"text-align":"center"}},H={style:{"text-align":"left"}},N=n("code",null,"广度优先搜索",-1),E=n("code",null,"数组",-1),I=n("code",null,"动态规划",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/coin-change",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2241",-1),T=n("td",{style:{"text-align":"left"}},"设计一个 ATM 机器",-1),j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},R=n("code",null,"贪心",-1),W=n("code",null,"设计",-1),Y=n("code",null,"数组",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/design-an-atm-machine",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/design-an-atm-machine",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2409",-1),J=n("td",{style:{"text-align":"left"}},"统计共同度过的日子数",-1),K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数学",-1),U=n("code",null,"字符串",-1),X=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/count-days-spent-together",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/count-days-spent-together",target:"_blank",rel:"noopener noreferrer"};function tn(en,sn){const r=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),i("div",null,[m,n("p",null,[t("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(o,{to:"/tag/greedy.html"},{default:s(()=>[h]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",g,[b,e(a)]),t(),n("a",f,[v,e(a)])]),y,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[x,w,n("td",M,[e(o,{to:"/problem/0322.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",H,[e(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[N]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[I]),_:1})]),C,n("td",L,[n("a",V,[t("🀄️"),e(a)]),t(),n("a",A,[t("🔗"),e(a)])])]),n("tr",null,[O,T,j,n("td",B,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[R]),_:1}),t(),e(o,{to:"/tag/design.html"},{default:s(()=>[W]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1})]),S,n("td",z,[n("a",D,[t("🀄️"),e(a)]),t(),n("a",F,[t("🔗"),e(a)])])]),n("tr",null,[G,J,K,n("td",P,[e(o,{to:"/tag/math.html"},{default:s(()=>[Q]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[U]),_:1})]),X,n("td",Z,[n("a",$,[t("🀄️"),e(a)]),t(),n("a",nn,[t("🔗"),e(a)])])])])])])}const an=l(k,[["render",tn],["__file","2224.html.vue"]]);export{an as default};
