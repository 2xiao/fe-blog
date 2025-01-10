import{_ as c,r as l,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-XFeYdzZv.js";const k={},g=n("h1",{id:"_2352-相等行列对",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2352-相等行列对","aria-hidden":"true"},"#"),s(" 2352. 相等行列对")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),_=n("code",null,"矩阵",-1),b=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/equal-row-and-column-pairs",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/equal-row-and-column-pairs",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> <code>n x n</code> integer matrix <code>grid</code>, <em>return the number of pairs</em><code>(ri, cj)</code><em>such that row</em><code>ri</code> <em>and column</em><code>cj</code> <em>are equal</em>.</p><p>A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[3,2,1],[1,7,6],[2,7,7]]</p><p>Output: 1</p><p>Explanation: There is 1 equal row and column pair:</p><ul><li>(Row 2, Column 1): [2,7,7]</li></ul></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]</p><p>Output: 3</p><p>Explanation: There are 3 equal row and column pairs:</p><ul><li>(Row 0, Column 0): [3,1,2,2]</li><li>(Row 2, Column 2): [2,4,2,2]</li><li>(Row 3, Column 2): [2,4,2,2]</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 200</code></li><li><code>1 &lt;= grid[i][j] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始、大小为 <code>n x n</code> 的整数矩阵 <code>grid</code> ，返回满足 <code>Ri</code> 行和 <code>Cj</code> 列相等的行列对 <code>(Ri, Cj)</code> 的数目 。</p><p>如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[3,2,1],[1,7,6],[2,7,7]]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 存在一对相等行列对：</p><ul><li>(第 2 行，第 1 列)：[2,7,7]</li></ul></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 存在三对相等行列对：</p><ul><li>(第 0 行，第 0 列)：[3,1,2,2]</li><li>(第 2 行, 第 2 列)：[2,4,2,2]</li><li>(第 3 行, 第 2 列)：[2,4,2,2]</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 200</code></li><li><code>1 &lt;= grid[i][j] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>获取矩阵的行数和列数 <code>n</code>。</li><li>创建一个哈希表 <code>rows</code> 来存储行的字符串表示的出现次数。</li><li>创建一个数组 <code>cols</code> 用于构建列的字符串表示。</li></ul></li><li><p><strong>统计行的出现次数</strong>：</p><ul><li>遍历每一行，将每一行的元素拼接成字符串 <code>rowStr</code>（以逗号分隔）。</li><li>将这个字符串作为键存入哈希表 <code>rows</code>，并记录其出现次数。</li><li>同时，将每一行的元素拼接到对应的列字符串 <code>cols[j]</code> 中，构建列的字符串表示。</li></ul></li><li><p><strong>统计行列对的数量</strong>：</p><ul><li>初始化结果 <code>res</code> 为 0。</li><li>遍历构建的列字符串 <code>cols</code>，对每个列字符串，在哈希表中查找其出现次数。</li><li>将出现次数累加到结果 <code>res</code> 中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回最终的结果 <code>res</code>，即满足条件的行列对的数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，因为需要遍历整个 <code>grid</code> 矩阵一次，构建行和列字符串。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，哈希表 <code>rows</code> 和数组 <code>cols</code> 存储了行和列的字符串表示。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">equalPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 存储行的字符串表示</span>
	<span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 存储列的字符串表示</span>
	<span class="token keyword">let</span> cols <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建并统计行字符串和列字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> rowStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			rowStr <span class="token operator">+=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">;</span>
			cols<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		rows<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>rowStr<span class="token punctuation">,</span> <span class="token punctuation">(</span>rows<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>rowStr<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 统计满足条件的行列对数量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> colStr <span class="token keyword">of</span> cols<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> rows<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>colStr<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2500",-1),C=n("td",{style:{"text-align":"left"}},"删除每行中的最大值",-1),R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},E=n("code",null,"数组",-1),L=n("code",null,"矩阵",-1),N=n("code",null,"排序",-1),V=n("code",null,"2+",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/delete-greatest-value-in-each-row",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/delete-greatest-value-in-each-row",target:"_blank",rel:"noopener noreferrer"};function T(A,M){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,a(o)]),s(),n("a",w,[x,a(o)])]),y,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,C,R,n("td",S,[a(e,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[N]),_:1}),s(),V]),z,n("td",I,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const P=c(k,[["render",T],["__file","2352.html.vue"]]);export{P as default};
