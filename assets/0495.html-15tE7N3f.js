import{_ as c,r as l,o as r,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-fqckLmln.js";const h={},m=e("h1",{id:"_495-提莫攻击",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_495-提莫攻击","aria-hidden":"true"},"#"),t(" 495. 提莫攻击")],-1),g=e("code",null,"数组",-1),_=e("code",null,"模拟",-1),k={href:"https://leetcode.cn/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/teemo-attacking",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly <code>duration</code> seconds. More formally, an attack at second <code>t</code> will mean Ashe is poisoned during the <strong>inclusive</strong> time interval <code>[t, t + duration - 1]</code>. If Teemo attacks again <strong>before</strong> the poison effect ends, the timer for it is <strong>reset</strong> , and the poison effect will end <code>duration</code> seconds after the new attack.</p><p>You are given a <strong>non-decreasing</strong> integer array <code>timeSeries</code>, where <code>timeSeries[i]</code> denotes that Teemo attacks Ashe at second <code>timeSeries[i]</code>, and an integer <code>duration</code>.</p><p>Return <em>the<strong>total</strong> number of seconds that Ashe is poisoned</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: timeSeries = [1,4], duration = 2</p><p>Output: 4</p><p>Explanation: Teemo&#39;s attacks on Ashe go as follows:</p><ul><li>At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.</li><li>At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.</li></ul><p>Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: timeSeries = [1,2], duration = 2</p><p>Output: 3</p><p>Explanation: Teemo&#39;s attacks on Ashe go as follows:</p><ul><li>At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.</li><li>At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.</li></ul><p>Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= timeSeries.length &lt;= 10^4</code></li><li><code>0 &lt;= timeSeries[i], duration &lt;= 10^7</code></li><li><code>timeSeries</code> is sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在《英雄联盟》的世界中，有一个叫 “提莫” 的英雄。他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。</p><p>当提莫攻击艾希，艾希的中毒状态正好持续 <code>duration</code> 秒。</p><p>正式地讲，提莫在 <code>t</code> 发起攻击意味着艾希在时间区间 <code>[t, t + duration - 1]</code>（含 <code>t</code> 和 <code>t + duration - 1</code>）处于中毒状态。如果提莫在中毒影响结束 <strong>前</strong> 再次攻击，中毒状态计时器将会 <strong>重置</strong> ，在新的攻击之后，中毒影响将会在 <code>duration</code> 秒后结束。</p><p>给你一个 <strong>非递减</strong> 的整数数组 <code>timeSeries</code> ，其中 <code>timeSeries[i]</code> 表示提莫在 <code>timeSeries[i]</code> 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 <code>duration</code> 。</p><p>返回艾希处于中毒状态的 <strong>总</strong> 秒数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> timeSeries = [1,4], duration = 2</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 提莫攻击对艾希的影响如下：</p><ul><li>第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。</li><li>第 4 秒，提莫再次攻击艾希，艾希中毒状态又持续 2 秒，即第 4 秒和第 5 秒。</li></ul><p>艾希在第 1、2、4、5 秒处于中毒状态，所以总中毒秒数是 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> timeSeries = [1,2], duration = 2</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 提莫攻击对艾希的影响如下：</p><ul><li>第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。</li><li>第 2 秒，提莫再次攻击艾希，并重置中毒计时器，艾希中毒状态需要持续 2 秒，即第 2 秒和第 3 秒。</li></ul><p>艾希在第 1、2、3 秒处于中毒状态，所以总中毒秒数是 3 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= timeSeries.length &lt;= 10^4</code></li><li><code>0 &lt;= timeSeries[i], duration &lt;= 10^7</code></li><li><code>timeSeries</code> 按 <strong>非递减</strong> 顺序排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>维护变量</strong>：</p><ul><li>使用一个变量 <code>total</code> 来累加中毒的总时间。</li><li>使用变量 <code>end</code> 来表示上一次中毒的结束时间。</li></ul></li><li><p><strong>理解时间重叠</strong>：</p><ul><li>如果某次攻击的时间 <code>timeSeries[i]</code> 与上一次攻击的结束时间 <code>end</code> 重叠，即 <code>timeSeries[i] &lt; end</code>，那么实际的中毒时间要扣除重叠部分。</li><li>如果不重叠，则正常加上 <code>duration</code>。</li></ul></li><li><p><strong>遍历攻击时间数组</strong>：</p><ul><li>对于每个攻击时间 <code>time</code>： <ul><li>首先假设中毒持续时间是 <code>duration</code>，累加到 <code>total</code>。</li><li>如果当前攻击时间 <code>time</code> 小于 <code>end</code>，说明存在重叠部分，需要从 <code>total</code> 中减去重叠的时间 <code>(end - time)</code>。</li><li>更新当前中毒的结束时间 <code>end = time + duration</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完所有攻击时间后，返回总的中毒时间 <code>total</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是攻击次数的数量，需要遍历 <code>timeSeries</code> 数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">timeSeries</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">duration</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findPoisonedDuration</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">timeSeries<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 总中毒时间</span>
	<span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 上一次中毒的结束时间</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> time <span class="token keyword">of</span> timeSeries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		total <span class="token operator">+=</span> duration<span class="token punctuation">;</span> <span class="token comment">// 假设当前攻击完全贡献持续时间</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前攻击与上一次中毒时间重叠</span>
			total <span class="token operator">-=</span> end <span class="token operator">-</span> time<span class="token punctuation">;</span> <span class="token comment">// 减去重叠的时间</span>
		<span class="token punctuation">}</span>
		end <span class="token operator">=</span> time <span class="token operator">+</span> duration<span class="token punctuation">;</span> <span class="token comment">// 更新结束时间</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"56",-1),S=e("td",{style:{"text-align":"left"}},"合并区间",-1),A={style:{"text-align":"center"}},T={style:{"text-align":"left"}},q=e("code",null,"数组",-1),E=e("code",null,"排序",-1),C=e("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},O=e("td",{style:{"text-align":"center"}},"605",-1),V=e("td",{style:{"text-align":"left"}},"种花问题",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},R=e("code",null,"贪心",-1),D=e("code",null,"数组",-1),M=e("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/can-place-flowers",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/can-place-flowers",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},"649",-1),F=e("td",{style:{"text-align":"left"}},"Dota2 参议院",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=e("code",null,"贪心",-1),K=e("code",null,"队列",-1),Q=e("code",null,"字符串",-1),U=e("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/dota2-senate",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/dota2-senate",target:"_blank",rel:"noopener noreferrer"};function ee(te,ne){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),d("div",null,[m,e("p",null,[t("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),n(o,{to:"/tag/simulation.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),e("a",k,[f,n(a)]),t(),e("a",b,[v,n(a)])]),y,p(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[w,S,e("td",A,[n(o,{to:"/problem/0056.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",T,[n(o,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),t(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[E]),_:1})]),C,e("td",I,[e("a",L,[t("🀄️"),n(a)]),t(),e("a",N,[t("🔗"),n(a)])])]),e("tr",null,[O,V,e("td",j,[n(o,{to:"/problem/0605.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",B,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[R]),_:1}),t(),n(o,{to:"/tag/array.html"},{default:s(()=>[D]),_:1})]),M,e("td",P,[e("a",W,[t("🀄️"),n(a)]),t(),e("a",Y,[t("🔗"),n(a)])])]),e("tr",null,[z,F,e("td",G,[n(o,{to:"/problem/0649.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",H,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[J]),_:1}),t(),n(o,{to:"/tag/queue.html"},{default:s(()=>[K]),_:1}),t(),n(o,{to:"/tag/string.html"},{default:s(()=>[Q]),_:1})]),U,e("td",X,[e("a",Z,[t("🀄️"),n(a)]),t(),e("a",$,[t("🔗"),n(a)])])])])])])}const oe=c(h,[["render",ee],["__file","0495.html.vue"]]);export{oe as default};
