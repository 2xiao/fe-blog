import{_ as r,r as o,o as d,c as k,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-Kkp_66uf.js";const b={},v=n("h1",{id:"_440-字典序的第k小数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_440-字典序的第k小数字","aria-hidden":"true"},"#"),s(" 440. 字典序的第K小数字")],-1),g=n("code",null,"字典树",-1),f={href:"https://leetcode.cn/problems/k-th-smallest-in-lexicographical-order",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/k-th-smallest-in-lexicographical-order",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>n</code> and <code>k</code>, return <em>the</em> <code>kth</code> <em>lexicographically smallest integer in the range</em> <code>[1, n]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 13, k = 2</p><p>Output: 10</p><p>Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1, k = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= n &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定整数 <code>n</code> 和 <code>k</code>，返回 <code>[1, n]</code> 中字典序第 <code>k</code> 小的数字。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-字典树计数" tabindex="-1"><a class="header-anchor" href="#思路一-字典树计数" aria-hidden="true">#</a> 思路一：字典树计数</h3><p>直接构建从 <code>1</code> 到 <code>n</code> 的所有数字并进行排序的时间复杂度较高，因此需要更高效的算法，可以利用字典序的树状结构。</p><p>我们可以将数字可视化为字典顺序树：</p><ul><li>根节点为 <code>1</code>，其子节点为 <code>10、11、12 ... 19</code>；</li><li>根节点为 <code>2</code>，其子节点为 <code>20、21 ... 29</code> 等等；</li></ul><p>根据这种结构，问题变成了遍历字典树，计算每个节点下有多少个数字。</p><p>使用一个计数函数 <code>getReqNum(a, n)</code> 来计算字典树中以 <code>a</code> 为前缀的数字有多少个，考虑最多 <code>n</code> 个数字。</p><p>一旦我们知道以 <code>a</code> 为前缀的数字有多少个，我们就可以决定是跳过 <code>a</code>（如果计数小于 k）移动到下一个兄弟节点 <code>a + 1</code>，还是深入 <code>a</code> 的子树中。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(K log n)</code>，每次查找最多需要 <code>O(log n)</code> 的时间（因为在树的层级中），对于 <code>K</code> 次查找，总体复杂度是 <code>O(K log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为使用一些变量来跟踪当前数字，并且除了整数变量之外不使用任何其他数据结构。</li></ul><hr><h3 id="思路二-字典树-超时" tabindex="-1"><a class="header-anchor" href="#思路二-字典树-超时" aria-hidden="true">#</a> 思路二：字典树（超时）</h3><p>思路一的方式并没有真的构建字典树，只是利用了字典树的结构，来计算每个节点下有多少个数字。</p><p>思路二尝试了真的构建一个字典树，然后深度优先遍历字典树，找到第 K 个数字。</p><p>这种做法<strong>无法跑通</strong>所有的测试用例，遇到很大的数字时会超时，但是仍然可以尝试写一写，作为一种练习。</p><ol><li><p><strong>构建字典树</strong>：</p><ul><li>初始化一个空的字典树（Trie）。</li><li>使用一个循环遍历从 <code>1</code> 到 <code>n</code> 的所有整数，将它们的每一位字符插入字典树中。对于每个数字，将其转换为字符串，然后逐位插入字典树。</li><li>在每个数字的末尾标记 <code>isEnd</code> 为 <code>true</code>，表示这个数字的结尾。</li></ul></li><li><p><strong>前序遍历查找前 K 个数</strong>：</p><ul><li>使用深度优先搜索（DFS）遍历字典树，从根节点开始，构建一个字符串 <code>str</code> 来表示当前路径。</li><li>如果当前节点标记为 <code>isEnd</code>，说明找到了一个有效的数字，将其添加到结果数组 <code>track</code> 中。</li><li>遍历当前节点的所有子节点，继续深度优先搜索。</li><li>直到找到 K 个数字或者没有更多节点可以遍历。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后，从 <code>track</code> 数组中返回第 K 个数字（即数组的最后一个元素），将其转换为数字类型。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * log(n))</code></p><ul><li>在构建字典树的过程中，对于每个数字 <code>1</code> 到 <code>n</code>，最多需要插入 <code>log(n)</code> 个字符，因此构建字典树的时间复杂度为 <code>O(n * log(n))</code>。</li><li>在前序遍历查找 <code>K</code> 个数的过程中，遍历的时间复杂度取决于字典树的结构，但在最坏情况下也可以认为是<code> O(n)</code>。</li><li>因此，总体时间复杂度为 <code>O(n * log(n))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n * log(n))</code></p><ul><li>字典树的空间复杂度取决于存储的数字数量和其字符的长度。在最坏情况下，字典树的空间复杂度为 <code>O(n * log(n))</code>。</li><li>另外，结果数组 <code>track</code> 的大小最多为 <code>K</code>，因此额外的空间复杂度为 <code>O(K)</code>。</li><li>综合来看，空间复杂度为 <code>O(n * log(n))</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),K=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findKthNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("n"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getReqNum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("first"),n("span",{class:"token punctuation"},","),s(" n")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" gap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
			last `),n("span",{class:"token operator"},"="),s(" first "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("first "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			gap `),n("span",{class:"token operator"},"+="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" last"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(" first"),n("span",{class:"token punctuation"},";"),s(`
			first `),n("span",{class:"token operator"},"*="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
			last `),n("span",{class:"token operator"},"*="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" gap"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" req "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getReqNum"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(" req "),n("span",{class:"token operator"},"<="),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			i `),n("span",{class:"token operator"},"+="),s(" req"),n("span",{class:"token punctuation"},";"),s(`
			num`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			num `),n("span",{class:"token operator"},"*="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" num"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"k"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"findKthNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("n"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" trie "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
		i `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 构建字典树"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" trie"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" char "),n("span",{class:"token keyword"},"of"),s(),n("span",{class:"token string"},"''"),s(),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("temp"),n("span",{class:"token punctuation"},"["),s("char"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				temp`),n("span",{class:"token punctuation"},"["),s("char"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			temp `),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},"["),s("char"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		temp`),n("span",{class:"token punctuation"},"."),s("isEnd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 前序遍历查找字典树中的前 K 个数"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" track "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" str")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node "),n("span",{class:"token operator"},"||"),s(" track"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("isEnd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			track`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" key "),n("span",{class:"token keyword"},"of"),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'isEnd'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" str "),n("span",{class:"token operator"},"+"),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("trie"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 返回第 K 个数"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"Number"),n("span",{class:"token punctuation"},"("),s("track"),n("span",{class:"token punctuation"},"["),s("track"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2376",-1),j=n("td",{style:{"text-align":"left"}},"统计特殊整数",-1),C=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},R=n("code",null,"数学",-1),T=n("code",null,"动态规划",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),A={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/count-special-integers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/count-special-integers",target:"_blank",rel:"noopener noreferrer"};function S(D,F){const i=o("font"),c=o("RouterLink"),e=o("ExternalLinkIcon"),u=o("CodeTabs");return d(),k("div",null,[v,n("p",null,[s("🔴 "),t(i,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(c,{to:"/tag/trie.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",f,[_,t(e)]),s(),n("a",y,[w,t(e)])]),x,t(u,{id:"229",data:[{id:"字典树计数"},{id:"字典树（超时）"}]},{title0:a(({value:l,isActive:p})=>[s("字典树计数")]),title1:a(({value:l,isActive:p})=>[s("字典树（超时）")]),tab0:a(({value:l,isActive:p})=>[K]),tab1:a(({value:l,isActive:p})=>[O]),_:1}),E,m(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[q,j,C,n("td",L,[t(c,{to:"/tag/math.html"},{default:a(()=>[R]),_:1}),s(),t(c,{to:"/tag/dynamic-programming.html"},{default:a(()=>[T]),_:1})]),V,n("td",A,[n("a",I,[s("🀄️"),t(e)]),s(),n("a",B,[s("🔗"),t(e)])])])])])])}const H=r(b,[["render",S],["__file","0440.html.vue"]]);export{H as default};
