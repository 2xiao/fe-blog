import{_ as l,r as p,o as u,c as i,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_79-单词搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_79-单词搜索","aria-hidden":"true"},"#"),s(" 79. 单词搜索")],-1),b=n("code",null,"数组",-1),h=n("code",null,"字符串",-1),v=n("code",null,"回溯",-1),g=n("code",null,"矩阵",-1),q={href:"https://leetcode.cn/problems/word-search",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/word-search",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> grid of characters <code>board</code> and a string <code>word</code>, return <code>true</code><em>if</em> <code>word</code> <em>exists in the grid</em>.</p><p>The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/word2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCCED&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;SEE&quot;</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/15/word3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;E&quot;],[&quot;S&quot;,&quot;F&quot;,&quot;C&quot;,&quot;S&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;E&quot;]], word = &quot;ABCB&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == board.length</code></li><li><code>n = board[i].length</code></li><li><code>1 &lt;= m, n &lt;= 6</code></li><li><code>1 &lt;= word.length &lt;= 15</code></li><li><code>board</code> and <code>word</code> consists of only lowercase and uppercase English letters.</li></ul><p><strong>Follow up:</strong> Could you use search pruning to make your solution faster with a larger <code>board</code>?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>m x n</code> 二维字符网格 <code>board</code> 和一个字符串单词 <code>word</code> 。如果 <code>word</code> 存在于网格中，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。</p><p>进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 <code>board</code> 更大的情况下可以更快解决问题？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历整个二维字符网格，找到与单词的首字母匹配的位置。</li><li>对于每一个匹配的位置，从这个位置出发进行深度优先搜索（DFS），尝试构建出给定的单词。</li><li>在 DFS 的过程中，需要标记已经访问过的单元格，防止重复访问。</li><li>如果在 DFS 的过程中成功构建出给定的单词，则返回<code>true</code>，否则返回<code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m*n*4^L)</code> 这个算法的时间复杂度主要由两部分组成：</p><ol><li>对于每个可能的起始位置，都进行了一次 DFS 搜索，DFS 的时间复杂度为 <code>O(4^L)</code> ，其中 L 是给定单词的长度。</li><li>遍历整个二维字符网格，时间复杂度为 <code>O(m*n)</code>，其中 <code>m</code> 和 <code>n</code> 分别为网格的行数和列数。</li></ol><p>综合考虑，总的时间复杂度为 <code>O(m*n*4^L)</code> 。</p></li><li><p><strong>空间复杂度</strong>：<code>O(L)</code>，空间复杂度主要由 DFS 的递归调用栈所占用的空间，最坏情况下为 <code>O(L)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">exist</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board<span class="token punctuation">,</span> word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 边界条件</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n <span class="token operator">||</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> word<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 匹配成功的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> word<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 标记当前单元格已访问</span>
		<span class="token keyword">const</span> temp <span class="token operator">=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// 沿四个方向进行DFS</span>
		<span class="token keyword">const</span> found <span class="token operator">=</span>
			<span class="token function">dp</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token function">dp</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 恢复当前单元格状态</span>
		board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token keyword">return</span> found<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历整个二维字符网格</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果找到匹配的首字母，开始DFS</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 没有找到匹配的情况</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"212",-1),E=n("td",{style:{"text-align":"left"}},"单词搜索 II",-1),S={style:{"text-align":"center"}},C={style:{"text-align":"left"}},D=n("code",null,"字典树",-1),F=n("code",null,"数组",-1),L=n("code",null,"字符串",-1),B=n("code",null,"2+",-1),O=n("td",{style:{"text-align":"center"}},"🔴",-1),A={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"};function V(z,T){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return u(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",q,[f,a(e)]),s(),n("a",_,[w,a(e)])]),y,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[j,E,n("td",S,[a(o,{to:"/problem/0212.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(o,{to:"/tag/trie.html"},{default:t(()=>[D]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[F]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[L]),_:1}),s(),B]),O,n("td",A,[n("a",I,[s("🀄️"),a(e)]),s(),n("a",N,[s("🔗"),a(e)])])])])])])}const G=l(k,[["render",V],["__file","0079.html.vue"]]);export{G as default};
