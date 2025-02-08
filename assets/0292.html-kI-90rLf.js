import{_ as c,r as l,o as p,c as d,a as e,b as n,d as t,w as o,f as u,e as r}from"./app-totCBmv-.js";const h={},g=e("h1",{id:"_292-nim-游戏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_292-nim-游戏","aria-hidden":"true"},"#"),n(" 292. Nim 游戏")],-1),m=e("code",null,"脑筋急转弯",-1),_=e("code",null,"数学",-1),f=e("code",null,"博弈",-1),k={href:"https://leetcode.cn/problems/nim-game",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/nim-game",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are playing the following Nim Game with your friend:</p><ul><li>Initially, there is a heap of stones on the table.</li><li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li><li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li><li>The one who removes the last stone is the winner.</li></ul><p>Given <code>n</code>, the number of stones in the heap, return <code>true</code> <em>if you can win the game assuming both you and your friend play optimally, otherwise return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 4</p><p>Output: false</p><p>Explanation: These are the possible outcomes:</p><ol><li><p>You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.</p></li><li><p>You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.</p></li><li><p>You remove 3 stones. Your friend removes the last stone. Your friend wins.</p></li></ol><p>In all outcomes, your friend wins.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 2</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',13),w={href:"https://baike.baidu.com/item/Nim%E6%B8%B8%E6%88%8F/6737105",target:"_blank",rel:"noopener noreferrer"},q=r(`<ul><li>桌子上有一堆石头。</li><li>你们轮流进行自己的回合， **你作为先手 **。</li><li>每一回合，轮到的人拿掉 1 - 3 块石头。</li><li>拿掉最后一块石头的人就是获胜者。</li></ul><p>假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 <code>n</code> 的情况下赢得游戏。如果可以赢，返回 <code>true</code>；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 以下是可能的结果:</p><ol><li><p>移除 1 颗石头。你的朋友移走了 3 块石头，包括最后一块。你的朋友赢了。</p></li><li><p>移除 2 个石子。你的朋友移走 2 块石头，包括最后一块。你的朋友赢了。</p></li></ol><p>3.你移走 3 颗石子。你的朋友移走了最后一块石头。你的朋友赢了。</p><p>在所有结果中，你的朋友是赢家。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 2^31 - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道经典的博弈论问题。解决这类问题的关键在于<strong>分析规律</strong>和<strong>确定必胜/必败局面</strong>。</p><p><strong>1. 基础分析</strong></p><ul><li>如果石头数量 <code>n &lt;= 3</code>，你可以一次性拿完，直接赢得比赛。</li><li>如果石头数量 <code>n == 4</code>，无论你拿走 1、2 或 3 块，都会让对手面对剩下的 3、2 或 1 块石头，最终对手会赢。这是一个<strong>必败局面</strong>。</li></ul><p><strong>2. 归纳规律</strong></p><p>对于任意数量的石头：</p><ul><li>如果 <code>n % 4 == 0</code>，你处于<strong>必败局面</strong>。 <ul><li>原因：不管你拿 1、2 或 3 块石头，都会让对手拿完剩余的石头，从而确保对手获胜。</li></ul></li><li>如果 <code>n % 4 !== 0</code>，你可以选择拿 <code>n % 4</code> 块石头，使得剩余石头数量变成 <code>4</code> 的倍数，从而将对手置于必败局面。</li></ul><p><strong>3. 总结</strong></p><p>因此，可以总结为：</p><ul><li>如果 <code>n % 4 == 0</code>，返回 <code>false</code>。</li><li>否则，返回 <code>true</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只需计算一次模运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canWinNim</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 如果 n 不是 4 的倍数，返回 true，否则返回 false</span>
	<span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),Y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"294",-1),N=e("td",{style:{"text-align":"left"}},"翻转游戏 II 🔒",-1),I=e("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},B=e("code",null,"记忆化搜索",-1),C=e("code",null,"数学",-1),L=e("code",null,"动态规划",-1),V=e("code",null,"2+",-1),j=e("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/flip-game-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/flip-game-ii",target:"_blank",rel:"noopener noreferrer"};function z(F,S){const i=l("font"),s=l("RouterLink"),a=l("ExternalLinkIcon");return p(),d("div",null,[g,e("p",null,[n("🟢 "),t(i,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),t(s,{to:"/tag/brainteaser.html"},{default:o(()=>[m]),_:1}),n(),t(s,{to:"/tag/math.html"},{default:o(()=>[_]),_:1}),n(),t(s,{to:"/tag/game-theory.html"},{default:o(()=>[f]),_:1}),n("  🔗 "),e("a",k,[b,t(a)]),n(),e("a",v,[y,t(a)])]),x,e("p",null,[n("你和你的朋友，两个人一起玩 "),e("a",w,[n("Nim 游戏"),t(a)]),n("：")]),q,u(" prettier-ignore "),e("table",null,[Y,e("tbody",null,[e("tr",null,[E,N,I,e("td",O,[t(s,{to:"/tag/memoization.html"},{default:o(()=>[B]),_:1}),n(),t(s,{to:"/tag/math.html"},{default:o(()=>[C]),_:1}),n(),t(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[L]),_:1}),n(),V]),j,e("td",T,[e("a",G,[n("🀄️"),t(a)]),n(),e("a",R,[n("🔗"),t(a)])])])])])])}const A=c(h,[["render",z],["__file","0292.html.vue"]]);export{A as default};
