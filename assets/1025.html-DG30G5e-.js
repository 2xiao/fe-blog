import{_ as d,r as t,o as r,c as p,a as e,b as n,d as o,w as a,e as i}from"./app-totCBmv-.js";const u={},h=e("h1",{id:"_1025-除数博弈",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1025-除数博弈","aria-hidden":"true"},"#"),n(" 1025. 除数博弈")],-1),m=e("code",null,"脑筋急转弯",-1),g=e("code",null,"数学",-1),k=e("code",null,"动态规划",-1),_=e("code",null,"博弈",-1),b={href:"https://leetcode.cn/problems/divisor-game",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/divisor-game",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Alice and Bob take turns playing a game, with Alice starting first.</p><p>Initially, there is a number <code>n</code> on the chalkboard. On each player&#39;s turn, that player makes a move consisting of:</p><ul><li>Choosing any <code>x</code> with <code>0 &lt; x &lt; n</code> and <code>n % x == 0</code>.</li><li>Replacing the number <code>n</code> on the chalkboard with <code>n - x</code>.</li></ul><p>Also, if a player cannot make a move, they lose the game.</p><p>Return <code>true</code> <em>if and only if Alice wins the game, assuming both players play optimally</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: true</p><p>Explanation: Alice chooses 1, and Bob has no more moves.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3</p><p>Output: false</p><p>Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。</p><p>最初，黑板上有一个数字 <code>n</code> 。在每个玩家的回合，玩家需要执行以下操作：</p><ul><li>选出任一 <code>x</code>，满足 <code>0 &lt; x &lt; n</code> 且 <code>n % x == 0</code> 。</li><li>用 <code>n - x</code> 替换黑板上的数字 <code>n</code> 。</li></ul><p>如果玩家无法执行这些操作，就会输掉游戏。</p><p><em>只有在爱丽丝在游戏中取得胜利时才返回 <code>true</code> 。假设两个玩家都以最佳状态参与游戏。</em></p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 爱丽丝选择 1，鲍勃无法进行操作。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题是一个博弈论问题，需要分析数字 <code>n</code> 的变化过程和两位玩家的策略。爱丽丝和鲍勃都采取最佳策略，这意味着每次都选择对自己最有利的 <code>x</code>。</p><ol><li><p><strong>取模操作的约束</strong>：</p><ul><li>若 <code>n</code> 为偶数，爱丽丝可以选择 <code>x = n / 2</code>（或者其他任意符合条件的 <code>x</code>），使得 <code>n - x</code> 仍然为奇数。</li><li>若 <code>n</code> 为奇数，所有因数 <code>x</code> 也都是奇数，减去任意因数 <code>x</code> 后结果变成偶数，交给鲍勃。</li></ul></li><li><p><strong>偶数与奇数的规律</strong>：</p><ul><li>偶数：爱丽丝总能确保每次操作后，数字 <code>n</code> 交到鲍勃时是奇数。</li><li>奇数：鲍勃可以确保每次操作后，数字 <code>n</code> 交到爱丽丝时是偶数。</li></ul></li><li><p><strong>游戏的终局</strong>：</p><ul><li>当 <code>n = 1</code> 时，当前玩家无法操作，判定为输。</li></ul></li></ol><p>因此，游戏的核心在于数字 <code>n</code> 是奇数还是偶数：</p><ul><li>如果 <code>n</code> 是偶数，爱丽丝总能获胜，因为她可以让数字始终是奇数留给鲍勃，返回 <code>true</code>。</li><li>如果 <code>n</code> 是奇数，爱丽丝会输，因为最终鲍勃会让 <code>n = 1</code>，返回 <code>false</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只需要判断 <code>n</code> 是否为偶数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不需要额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">divisorGame</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function w(q,E){const l=t("font"),s=t("RouterLink"),c=t("ExternalLinkIcon");return r(),p("div",null,[h,e("p",null,[n("🟢 "),o(l,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),o(s,{to:"/tag/brainteaser.html"},{default:a(()=>[m]),_:1}),n(),o(s,{to:"/tag/math.html"},{default:a(()=>[g]),_:1}),n(),o(s,{to:"/tag/dynamic-programming.html"},{default:a(()=>[k]),_:1}),n(),o(s,{to:"/tag/game-theory.html"},{default:a(()=>[_]),_:1}),n("  🔗 "),e("a",b,[f,o(c)]),n(),e("a",v,[x,o(c)])]),y])}const B=d(u,[["render",w],["__file","1025.html.vue"]]);export{B as default};
