import{_ as p,r as l,o as r,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-BBnmDgJV.js";const h={},k=n("h1",{id:"_374-猜数字大小",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_374-猜数字大小","aria-hidden":"true"},"#"),e(" 374. 猜数字大小")],-1),_=n("code",null,"二分查找",-1),m=n("code",null,"交互",-1),g={href:"https://leetcode.cn/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/guess-number-higher-or-lower",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We are playing the Guess Game. The game is as follows:</p><p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked.</p><p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.</p><p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:</p><ul><li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num &gt; pick</code>).</li><li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).</li><li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</li></ul><p>Return <em>the number that I picked</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 10, pick = 6</p><p>Output: 6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1, pick = 1</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 2, pick = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li><li><code>1 &lt;= pick &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>猜数字游戏的规则如下：</p><ul><li>每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。</li><li>如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。</li></ul><p>你可以通过调用一个预先定义好的接口 <code>int guess(int num)</code> 来获取猜测结果，返回值一共有 3 种可能的情况（<code>-1</code>，<code>1</code> 或 <code>0</code>）：</p><ul><li><code>-1</code>：我选出的数字比你猜的数字小 <code>pick &lt; num</code></li><li><code>1</code>：我选出的数字比你猜的数字大 <code>pick &gt; num</code></li><li><code>0</code>：我选出的数字和你猜的数字一样。恭喜！你猜对了！<code>pick == num</code></li></ul><p>返回我选出的数字。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以采用二分查找解决。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(logn)</code>，二分查找的时间复杂度是 <code>O(logn)</code>。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">guessNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> n<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">guess</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"278",-1),I=n("td",{style:{"text-align":"left"}},"第一个错误的版本",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},N=n("code",null,"二分查找",-1),O=n("code",null,"交互",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"375",-1),B=n("td",{style:{"text-align":"left"}},"猜数字大小 II",-1),R={style:{"text-align":"center"}},G={style:{"text-align":"left"}},T=n("code",null,"数学",-1),A=n("code",null,"动态规划",-1),K=n("code",null,"博弈",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/guess-number-higher-or-lower-ii",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"658",-1),D=n("td",{style:{"text-align":"left"}},"找到 K 个最接近的元素",-1),F=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"数组",-1),Q=n("code",null,"双指针",-1),U=n("code",null,"二分查找",-1),X=n("code",null,"3+",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"};function tn(sn,an){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),n("a",g,[b,t(o)]),e(),n("a",f,[v,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,I,n("td",E,[t(a,{to:"/problem/0278.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",q,[t(a,{to:"/tag/binary-search.html"},{default:s(()=>[N]),_:1}),e(),t(a,{to:"/tag/interactive.html"},{default:s(()=>[O]),_:1})]),C,n("td",L,[n("a",V,[e("🀄️"),t(o)]),e(),n("a",Y,[e("🔗"),t(o)])])]),n("tr",null,[j,B,n("td",R,[t(a,{to:"/problem/0375.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",G,[t(a,{to:"/tag/math.html"},{default:s(()=>[T]),_:1}),e(),t(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[A]),_:1}),e(),t(a,{to:"/tag/game-theory.html"},{default:s(()=>[K]),_:1})]),M,n("td",P,[n("a",S,[e("🀄️"),t(o)]),e(),n("a",W,[e("🔗"),t(o)])])]),n("tr",null,[z,D,F,n("td",H,[t(a,{to:"/tag/array.html"},{default:s(()=>[J]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Q]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[U]),_:1}),e(),X]),Z,n("td",$,[n("a",nn,[e("🀄️"),t(o)]),e(),n("a",en,[e("🔗"),t(o)])])])])])])}const ln=p(h,[["render",tn],["__file","0374.html.vue"]]);export{ln as default};
