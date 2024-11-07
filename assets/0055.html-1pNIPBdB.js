import{_ as i,r as c,o as r,c as d,a as t,b as n,d as e,w as s,f as p,e as u}from"./app-OX-nYmHS.js";const _={},h=t("h1",{id:"_55-跳跃游戏",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_55-跳跃游戏","aria-hidden":"true"},"#"),n(" 55. 跳跃游戏")],-1),m=t("code",null,"贪心",-1),f=t("code",null,"数组",-1),g=t("code",null,"动态规划",-1),k={href:"https://leetcode.cn/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong> , and each element in the array represents your maximum jump length at that position.</p><p>Return <code>true</code> <em>if you can reach the last index, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,1,1,4]</p><p>Output: true</p><p>Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,1,0,4]</p><p>Output: false</p><p>Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数数组 <code>nums</code> ，你最初位于数组的 <strong>第一个下标</strong> 。数组中的每个元素代表你在该位置可以跳跃的最大长度。</p><p>判断你是否能够到达最后一个下标，如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：nums = [2,3,1,1,4]</p><p>输出：true</p><p>解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：nums = [3,2,1,0,4]</p><p>输出：false</p><p>解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题表面上不是求最值，但是可以改一改：</p><p>请问通过题目中的跳跃规则，最多能跳多远？如果能够越过最后一格，返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p>所以解题关键在于求出能够跳到的最远距离。</p><ol><li>遍历数组，不断计算能跳到的最远距离；</li><li>当最远距离小于当前 <code>index</code> 时，可能是遇到了 0，卡住跳不动了（要排除最后一跳为 0 的情况）；</li><li>遍历结束后，判断能跳到的最远距离，是否大于等于数组的最后一位。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是 <code>nums</code> 数组的长度，遍历了整个数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个变量来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canJump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 不断计算能跳到的最远距离</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 可能碰到了 0，卡住跳不动了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;=</span> i <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max <span class="token operator">&gt;=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"45",-1),j={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},M={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),C=t("code",null,"数组",-1),L=t("code",null,"动态规划",-1),N={style:{"text-align":"left"}},O=t("td",{style:{"text-align":"center"}},"1306",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},H=t("code",null,"深度优先搜索",-1),S=t("code",null,"广度优先搜索",-1),T=t("code",null,"数组",-1),z={style:{"text-align":"left"}},A=t("td",{style:{"text-align":"center"}},"1871",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"字符串",-1),Q=t("code",null,"动态规划",-1),U=t("code",null,"前缀和",-1),W=t("code",null,"1+",-1),X={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"2297",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"栈",-1),at=t("code",null,"图",-1),ot=t("code",null,"数组",-1),lt=t("code",null,"3+",-1),ct={style:{"text-align":"left"}},it=t("td",{style:{"text-align":"center"}},"2617",-1),rt={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"栈",-1),ht=t("code",null,"广度优先搜索",-1),mt=t("code",null,"并查集",-1),ft=t("code",null,"5+",-1),gt={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"2789",-1),bt={style:{"text-align":"left"}},xt={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},wt=t("code",null,"贪心",-1),It=t("code",null,"数组",-1),jt={style:{"text-align":"left"}};function qt(Et,Mt){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),d("div",null,[h,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[g]),_:1}),n("  🔗 "),t("a",k,[b,e(o)]),n(),t("a",x,[y,e(o)])]),v,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[I,t("td",j,[t("a",q,[n("跳跃游戏 II"),e(o)])]),t("td",E,[e(a,{to:"/problem/0045.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",M,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[V]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[L]),_:1})]),t("td",N,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[O,t("td",B,[t("a",R,[n("跳跃游戏 III"),e(o)])]),Y,t("td",J,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[S]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[T]),_:1})]),t("td",z,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[A,t("td",D,[t("a",F,[n("跳跃游戏 VII"),e(o)])]),G,t("td",K,[e(a,{to:"/tag/string.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[U]),_:1}),n(),W]),t("td",X,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[n("跳跃游戏 VIII 🔒"),e(o)])]),et,t("td",nt,[e(a,{to:"/tag/stack.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/tag/graph.html"},{default:s(()=>[at]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[ot]),_:1}),n(),lt]),t("td",ct,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[it,t("td",rt,[t("a",dt,[n("网格图中最少访问的格子数"),e(o)])]),pt,t("td",ut,[e(a,{to:"/tag/stack.html"},{default:s(()=>[_t]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[ht]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[mt]),_:1}),n(),ft]),t("td",gt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[kt,t("td",bt,[t("a",xt,[n("合并后数组中的最大元素"),e(o)])]),yt,t("td",vt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[It]),_:1})]),t("td",jt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const Ct=i(_,[["render",qt],["__file","0055.html.vue"]]);export{Ct as default};
