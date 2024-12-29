import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_135-分发糖果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_135-分发糖果","aria-hidden":"true"},"#"),s(" 135. 分发糖果")],-1),_=n("code",null,"贪心",-1),m=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/candy",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/candy",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.</p><p>You are giving candies to these children subjected to the following requirements:</p><ul><li>Each child must have at least one candy.</li><li>Children with a higher rating get more candies than their neighbors.</li></ul><p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: ratings = [1,0,2]</p><p>Output: 5</p><p>Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ratings = [1,2,2]</p><p>Output: 4</p><p>Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.</p><p>The third child gets 1 candy because it satisfies the above two conditions.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == ratings.length</code></li><li><code>1 &lt;= n &lt;= 2 * 10^4</code></li><li><code>0 &lt;= ratings[i] &lt;= 2 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>n</code> 个孩子站成一排。给你一个整数数组 <code>ratings</code> 表示每个孩子的评分。</p><p>你需要按照以下要求，给这些孩子分发糖果：</p><ul><li>每个孩子至少分配到 <code>1</code> 个糖果。</li><li>相邻两个孩子评分更高的孩子会获得更多的糖果。</li></ul><p>请你给每个孩子分发糖果，计算并返回需要准备的 <strong>最少糖果数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：ratings = [1,0,2]</p><p>输出：5</p><p>解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：ratings = [1,2,2]</p><p>输出：4</p><p>解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。</p><p>第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在这个问题中，每个孩子拿到的最小糖果数取决于他左侧和右侧的孩子。因此可以将「相邻的孩子中，评分高的孩子必须获得更多的糖果」这句话拆分为两个规则，分别处理：</p><ol><li><p><strong>初始化数组</strong>：</p><ul><li>使用一个数组 <code>candy</code> 来保存每个孩子的糖果数；</li><li>初始化 <code>candy</code> 的每个位置为 <code>1</code> ，来满足每个孩子至少分配到 <code>1</code> 个糖果；</li></ul></li><li><p><strong>从左向右遍历</strong>：</p><ul><li>从左到右遍历数组，当 <code>ratings[i−1]&lt;ratings[i]</code> 时，<code>i</code> 号孩子的糖果数量将比 <code>i−1</code> 号孩子的糖果数量多 <code>1</code> 个；</li></ul></li><li><p><strong>从右向左遍历</strong>：</p><ul><li>从右到左遍历数组，当 <code>ratings[i]&gt;ratings[i+1]</code> 时，<code>i</code> 号孩子的糖果数量将比 <code>i+1</code> 号孩子的糖果数量多 <code>1</code> 个；</li></ul></li><li><p><strong>将所有孩子的糖果数相加得到最终结果</strong></p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">ratings</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">candy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ratings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> ratings<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> candy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> ratings<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> candy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> candy<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			candy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> candy<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ratings<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> ratings<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> candy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> candy<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			candy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> candy<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> candy<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2371",-1),q=n("td",{style:{"text-align":"left"}},"最小化网格中的最大值 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"并查集",-1),N=n("code",null,"图",-1),V=n("code",null,"拓扑排序",-1),j=n("code",null,"3+",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),O={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/minimize-maximum-value-in-a-grid",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/minimize-maximum-value-in-a-grid",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"3122",-1),Y=n("td",{style:{"text-align":"left"}},"使矩阵满足条件的最少操作次数",-1),z=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},H=n("code",null,"数组",-1),S=n("code",null,"动态规划",-1),D=n("code",null,"矩阵",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"3142",-1),P=n("td",{style:{"text-align":"left"}},"判断矩阵是否满足条件",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"矩阵",-1),Z=n("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"};function tn(an,en){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🔴 "),t(c,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/greedy.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,t(o)]),s(),n("a",f,[y,t(o)])]),v,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,E,n("td",C,[t(e,{to:"/tag/union-find.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/graph.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/topological-sort.html"},{default:a(()=>[V]),_:1}),s(),j]),I,n("td",O,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[T,Y,z,n("td",A,[t(e,{to:"/tag/array.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[D]),_:1})]),F,n("td",G,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[M,P,Q,n("td",U,[t(e,{to:"/tag/array.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[X]),_:1})]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])])])])])}const pn=l(k,[["render",tn],["__file","0135.html.vue"]]);export{pn as default};
