import{_ as p,r as c,o as i,c as r,a as n,b as s,d as e,w as t,f as u,e as d}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_1710-卡车上的最大单元数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1710-卡车上的最大单元数","aria-hidden":"true"},"#"),s(" 1710. 卡车上的最大单元数")],-1),h=n("code",null,"贪心",-1),b=n("code",null,"数组",-1),g=n("code",null,"排序",-1),x={href:"https://leetcode.cn/problems/maximum-units-on-a-truck",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/maximum-units-on-a-truck",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are assigned to put some amount of boxes onto <strong>one truck</strong>. You are given a 2D array <code>boxTypes</code>, where <code>boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]</code>:</p><ul><li><code>numberOfBoxesi</code> is the number of boxes of type <code>i</code>.</li><li><code>numberOfUnitsPerBoxi</code> is the number of units in each box of the type <code>i</code>.</li></ul><p>You are also given an integer <code>truckSize</code>, which is the <strong>maximum</strong> number of <strong>boxes</strong> that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed <code>truckSize</code>.</p><p>Return <em>the <strong>maximum</strong> total number of <strong>units</strong> that can be put on the truck.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4</p><p>Output: 8</p><p>Explanation: There are:</p><ul><li>1 box of the first type that contains 3 units.</li><li>2 boxes of the second type that contain 2 units each.</li><li>3 boxes of the third type that contain 1 unit each.</li></ul><p>You can take all the boxes of the first and second types, and one box of the third type.</p><p>The total number of units will be = <code>(1 * 3) + (2 * 2) + (1 * 1) = 8</code>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10</p><p>Output: 91</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= boxTypes.length &lt;= 1000</code></li><li><code>1 &lt;= numberOfBoxesi, numberOfUnitsPerBoxi &lt;= 1000</code></li><li><code>1 &lt;= truckSize &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你将一些箱子装在 <strong>一辆卡车</strong> 上。给你一个二维数组 <code>boxTypes</code> ，其中 <code>boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]</code> ：</p><ul><li><code>numberOfBoxesi</code> 是类型 <code>i</code> 的箱子的数量。</li><li><code>numberOfUnitsPerBoxi</code> 是类型 <code>i</code> 每个箱子可以装载的单元数量。</li></ul><p>整数 <code>truckSize</code> 表示卡车上可以装载 <strong>箱子</strong> 的 <strong>最大数量</strong> 。只要箱子数量不超过 <code>truckSize</code> ，你就可以选择任意箱子装到卡车上。</p><p>返回卡车可以装载 <strong>单元</strong> 的 <strong>最大</strong> 总数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 箱子的情况如下：</p><ul><li>1 个第一类的箱子，里面含 3 个单元。</li><li>2 个第二类的箱子，每个里面含 2 个单元。</li><li>3 个第三类的箱子，每个里面含 1 个单元。</li></ul><p>可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。</p><p>单元总数 = <code>(1 * 3) + (2 * 2) + (1 * 1) = 8</code></p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10</p><p><strong>输出：</strong> 91</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= boxTypes.length &lt;= 1000</code></li><li><code>1 &lt;= numberOfBoxesi, numberOfUnitsPerBoxi &lt;= 1000</code></li><li><code>1 &lt;= truckSize &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过贪心算法解决。</p><ol><li><p><strong>优先选择单位数多的箱子</strong>：</p><ul><li>将 <code>boxTypes</code> 按单位数降序排列。</li><li>优先装载单位数最多的箱子，这样每装载一部分，能获得最大的单位数。</li></ul></li><li><p><strong>装载逻辑</strong>：</p><ul><li>对于每种箱子类型，取卡车剩余容量和当前箱子数量的最小值作为装载数量。</li><li>更新卡车剩余容量，并累加单位数。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>如果卡车已满（<code>truckSize == 0</code>），可以提前终止遍历。</li><li>返回总装载数量</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code><ul><li>排序时间：<code>O(n log n)</code>，其中 <code>n</code> 为 <code>boxTypes</code> 的长度。</li><li>遍历 <code>boxTypes</code>：<code>O(n)</code>。</li><li>总复杂度：<code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">boxTypes</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">truckSize</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumUnits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">boxTypes<span class="token punctuation">,</span> truckSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按单位数降序排序</span>
	boxTypes<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> unit<span class="token punctuation">]</span> <span class="token keyword">of</span> boxTypes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>truckSize <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 卡车满了则终止</span>

		<span class="token comment">// 装载的箱子数量</span>
		<span class="token keyword">const</span> boxes <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>truckSize<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> boxes <span class="token operator">*</span> unit<span class="token punctuation">;</span> <span class="token comment">// 累加单位数</span>
		truckSize <span class="token operator">-=</span> boxes<span class="token punctuation">;</span> <span class="token comment">// 更新剩余容量</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"2279",-1),O=n("td",{style:{"text-align":"left"}},"装满石头的背包的最大数量",-1),S=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},B=n("code",null,"贪心",-1),q=n("code",null,"数组",-1),E=n("code",null,"排序",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/maximum-bags-with-full-capacity-of-rocks",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks",target:"_blank",rel:"noopener noreferrer"};function N(V,Y){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",x,[f,e(o)]),s(),n("a",_,[y,e(o)])]),v,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[T,O,S,n("td",z,[e(a,{to:"/tag/greedy.html"},{default:t(()=>[B]),_:1}),s(),e(a,{to:"/tag/array.html"},{default:t(()=>[q]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[E]),_:1})]),U,n("td",P,[n("a",C,[s("🀄️"),e(o)]),s(),n("a",L,[s("🔗"),e(o)])])])])])])}const j=p(k,[["render",N],["__file","1710.html.vue"]]);export{j as default};
