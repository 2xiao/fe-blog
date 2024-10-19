import{_ as i,r as c,o as r,c as p,a as t,d as n,b as e,w as s,f as d,e as u}from"./app-ynO5B_DP.js";const _={},h={id:"_55-跳跃游戏",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_55-跳跃游戏","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"贪心",-1),k=t("code",null,"数组",-1),b=t("code",null,"动态规划",-1),x={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. You are initially positioned at the array&#39;s <strong>first index</strong> , and each element in the array represents your maximum jump length at that position.</p><p>Return <code>true</code> <em>if you can reach the last index, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,1,1,4]</p><p>Output: true</p><p>Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,1,0,4]</p><p>Output: false</p><p>Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非负整数数组 <code>nums</code> ，你最初位于数组的 <strong>第一个下标</strong> 。数组中的每个元素代表你在该位置可以跳跃的最大长度。</p><p>判断你是否能够到达最后一个下标，如果可以，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：nums = [2,3,1,1,4]</p><p>输出：true</p><p>解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：nums = [3,2,1,0,4]</p><p>输出：false</p><p>解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题表面上不是求最值，但是可以改一改：</p><p>请问通过题目中的跳跃规则，最多能跳多远？如果能够越过最后一格，返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p>所以解题关键在于求出能够跳到的最远距离。</p><ol><li>遍历数组，不断计算能跳到的最远距离；</li><li>当最远距离小于当前 <code>index</code> 时，可能是遇到了 0，卡住跳不动了（要排除最后一跳为 0 的情况）；</li><li>遍历结束后，判断能跳到的最远距离，是否大于等于数组的最后一位。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是 <code>nums</code> 数组的长度，遍历了整个数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个变量来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"45",-1),j={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},M={href:"/problem/0045",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"left"}},C=t("code",null,"贪心",-1),L=t("code",null,"数组",-1),N=t("code",null,"动态规划",-1),O={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"1306",-1),R={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/jump-game-iii",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},S=t("code",null,"深度优先搜索",-1),T=t("code",null,"广度优先搜索",-1),z=t("code",null,"数组",-1),A={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"1871",-1),F={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/jump-game-vii",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=t("code",null,"字符串",-1),U=t("code",null,"动态规划",-1),W=t("code",null,"前缀和",-1),X=t("code",null,"1+",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"2297",-1),tt={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/jump-game-viii",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},at=t("code",null,"栈",-1),ot=t("code",null,"图",-1),lt=t("code",null,"数组",-1),ct=t("code",null,"3+",-1),it={style:{"text-align":"left"}},rt=t("td",{style:{"text-align":"center"}},"2617",-1),pt={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ht=t("code",null,"栈",-1),mt=t("code",null,"广度优先搜索",-1),ft=t("code",null,"并查集",-1),gt=t("code",null,"5+",-1),kt={style:{"text-align":"left"}},bt=t("td",{style:{"text-align":"center"}},"2789",-1),xt={style:{"text-align":"left"}},yt={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},null,-1),wt={style:{"text-align":"left"}},It=t("code",null,"贪心",-1),jt=t("code",null,"数组",-1),qt={style:{"text-align":"left"}};function Et(Mt,Vt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return r(),p("div",null,[t("h1",h,[m,n(),t("a",f,[n("55. 跳跃游戏"),e(o)])]),t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/outline/tag/array.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",x,[y,e(o)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[I,t("td",j,[t("a",q,[n("跳跃游戏 II"),e(o)])]),t("td",E,[t("a",M,[n("[✓]"),e(o)])]),t("td",V,[e(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/outline/tag/array.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[N]),_:1})]),t("td",O,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[B,t("td",R,[t("a",Y,[n("跳跃游戏 III"),e(o)])]),J,t("td",H,[e(a,{to:"/outline/tag/depth-first-search.html"},{default:s(()=>[S]),_:1}),n(),e(a,{to:"/outline/tag/breadth-first-search.html"},{default:s(()=>[T]),_:1}),n(),e(a,{to:"/outline/tag/array.html"},{default:s(()=>[z]),_:1})]),t("td",A,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",G,[n("跳跃游戏 VII"),e(o)])]),K,t("td",P,[e(a,{to:"/outline/tag/string.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[U]),_:1}),n(),e(a,{to:"/outline/tag/prefix-sum.html"},{default:s(()=>[W]),_:1}),n(),X]),t("td",Z,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",et,[n("跳跃游戏 VIII"),e(o)])]),nt,t("td",st,[e(a,{to:"/outline/tag/stack.html"},{default:s(()=>[at]),_:1}),n(),e(a,{to:"/outline/tag/graph.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/outline/tag/array.html"},{default:s(()=>[lt]),_:1}),n(),ct]),t("td",it,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[rt,t("td",pt,[t("a",dt,[n("网格图中最少访问的格子数"),e(o)])]),ut,t("td",_t,[e(a,{to:"/outline/tag/stack.html"},{default:s(()=>[ht]),_:1}),n(),e(a,{to:"/outline/tag/breadth-first-search.html"},{default:s(()=>[mt]),_:1}),n(),e(a,{to:"/outline/tag/union-find.html"},{default:s(()=>[ft]),_:1}),n(),gt]),t("td",kt,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[bt,t("td",xt,[t("a",yt,[n("合并后数组中的最大元素"),e(o)])]),vt,t("td",wt,[e(a,{to:"/outline/tag/greedy.html"},{default:s(()=>[It]),_:1}),n(),e(a,{to:"/outline/tag/array.html"},{default:s(()=>[jt]),_:1})]),t("td",qt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const Lt=i(_,[["render",Et],["__file","0055.html.vue"]]);export{Lt as default};
