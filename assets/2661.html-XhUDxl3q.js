import{_ as p,r as c,o as i,c as r,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-9CeBk-uV.js";const k={},m=n("h1",{id:"_2661-找出叠涂元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2661-找出叠涂元素","aria-hidden":"true"},"#"),a(" 2661. 找出叠涂元素")],-1),g=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),_=n("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/first-completely-painted-row-or-column",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/first-completely-painted-row-or-column",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>arr</code>, and an <code>m x n</code> integer <strong>matrix</strong> <code>mat</code>. <code>arr</code> and <code>mat</code> both contain <strong>all</strong> the integers in the range <code>[1, m * n]</code>.</p><p>Go through each index <code>i</code> in <code>arr</code> starting from index <code>0</code> and paint the cell in <code>mat</code> containing the integer <code>arr[i]</code>.</p><p>Return <em>the smallest index</em> <code>i</code> <em>at which either a row or a column will be completely painted in</em> <code>mat</code>.</p><p><strong>Example 1:</strong></p><p>![](image explanation for example 1)<img src="https://assets.leetcode.com/uploads/2023/01/18/grid1.jpg" alt="image explanation for example
1" loading="lazy"></p><blockquote><p>Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]</p><p>Output: 2</p><p>Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/18/grid2.jpg" alt="image explanation for example
2" tabindex="0" loading="lazy"><figcaption>image explanation for example 2</figcaption></figure><blockquote><p>Input: arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]</p><p>Output: 3</p><p>Explanation: The second column becomes fully painted at arr[3].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == mat.length</code></li><li><code>n = mat[i].length</code></li><li><code>arr.length == m * n</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= arr[i], mat[r][c] &lt;= m * n</code></li><li>All the integers of <code>arr</code> are <strong>unique</strong>.</li><li>All the integers of <code>mat</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>arr</code> 和一个 <code>m x n</code> 的整数 <strong>矩阵</strong> <code>mat</code> 。<code>arr</code> 和 <code>mat</code> 都包含范围 <code>[1，m * n]</code> 内的 <strong>所有</strong> 整数。</p><p>从下标 <code>0</code> 开始遍历 <code>arr</code> 中的每个下标 <code>i</code> ，并将包含整数 <code>arr[i]</code> 的 <code>mat</code> 单元格涂色。</p><p>请你找出 <code>arr</code> 中第一个使得 <code>mat</code> 的某一行或某一列都被涂色的元素，并返回其下标 <code>i</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/18/grid1.jpg" alt="image explanation for example
1" tabindex="0" loading="lazy"><figcaption>image explanation for example 1</figcaption></figure><blockquote><p><strong>输入：</strong> arr = [1,3,4,2], mat = [[1,4],[2,3]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 遍历如上图所示，arr[2] 在矩阵中的第一行或第二列上都被涂色。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/01/18/grid2.jpg" alt="image explanation for example
2" tabindex="0" loading="lazy"><figcaption>image explanation for example 2</figcaption></figure><blockquote><p><strong>输入：</strong> arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 遍历如上图所示，arr[3] 在矩阵中的第二列上都被涂色。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == mat.length</code></li><li><code>n = mat[i].length</code></li><li><code>arr.length == m * n</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>1 &lt;= m * n &lt;= 10^5</code></li><li><code>1 &lt;= arr[i], mat[r][c] &lt;= m * n</code></li><li><code>arr</code> 中的所有整数 <strong>互不相同</strong></li><li><code>mat</code> 中的所有整数 <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>预处理：构建位置映射</strong></p><ul><li>将矩阵的每个值的行、列索引记录到一个哈希表中，以便快速找到 <code>arr[i]</code> 在矩阵中的位置。</li></ul></li><li><p><strong>初始化计数数组</strong></p><ul><li>使用两个数组 <code>rowCount</code> 和 <code>colCount</code> 分别记录矩阵中每一行和每一列已涂色的单元格数。</li></ul></li><li><p><strong>模拟涂色过程</strong></p><ul><li>遍历 <code>arr</code>，对于每个值，根据映射找到其在矩阵中的行和列索引。</li><li>更新对应的 <code>rowCount</code> 和 <code>colCount</code>。</li><li>检查当前行或列是否完全涂满，如果是，直接返回当前的操作步骤。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n + k)</code><ul><li>预处理位置映射：<code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是矩阵的行数和列数。</li><li>模拟涂色过程：<code>O(k)</code>，<code>k</code> 是 <code>arr</code> 的长度。</li><li>总复杂度为 <code>O(m * n + k)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m + n + m*n)</code>，使用了两个计数数组 <code>rowCount</code> 和 <code>colCount</code>，以及一个映射表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">firstCompleteIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 映射每个值到它在矩阵中的位置</span>
	<span class="token keyword">const</span> valueToPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			valueToPosition<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>i<span class="token punctuation">,</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化行和列的计数器</span>
	<span class="token keyword">const</span> rowCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> colCount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历数组，模拟涂色</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> step <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> step<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> value <span class="token operator">=</span> arr<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>row<span class="token punctuation">,</span> col<span class="token punctuation">]</span> <span class="token operator">=</span> valueToPosition<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新行和列的计数</span>
		rowCount<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		colCount<span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查是否有行或列被完全涂满</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>rowCount<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">===</span> n <span class="token operator">||</span> colCount<span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">===</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> step<span class="token punctuation">;</span> <span class="token comment">// 返回从 0 开始的索引</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"2133",-1),j=n("td",{style:{"text-align":"left"}},"检查是否每一行每一列都包含全部整数",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},O=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),T=n("code",null,"矩阵",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"2482",-1),B=n("td",{style:{"text-align":"left"}},"行和列中一和零的差值",-1),P=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},M=n("code",null,"数组",-1),G=n("code",null,"矩阵",-1),S=n("code",null,"模拟",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/difference-between-ones-and-zeros-in-row-and-column",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column",target:"_blank",rel:"noopener noreferrer"};function J(K,Q){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[a("🟠 "),s(l,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[_]),_:1}),a("  🔗 "),n("a",f,[b,s(o)]),a(),n("a",v,[x,s(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[C,j,n("td",q,[s(e,{to:"/problem/2133.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",E,[s(e,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[z]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[T]),_:1})]),I,n("td",L,[n("a",N,[a("🀄️"),s(o)]),a(),n("a",V,[a("🔗"),s(o)])])]),n("tr",null,[A,B,P,n("td",R,[s(e,{to:"/tag/array.html"},{default:t(()=>[M]),_:1}),a(),s(e,{to:"/tag/matrix.html"},{default:t(()=>[G]),_:1}),a(),s(e,{to:"/tag/simulation.html"},{default:t(()=>[S]),_:1})]),Y,n("td",D,[n("a",F,[a("🀄️"),s(o)]),a(),n("a",H,[a("🔗"),s(o)])])])])])])}const W=p(k,[["render",J],["__file","2661.html.vue"]]);export{W as default};
