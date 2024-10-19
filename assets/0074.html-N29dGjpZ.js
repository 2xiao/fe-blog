import{_ as u,r as c,o as d,c as k,a as n,d as t,b as s,w as a,f as m,e as h}from"./app-ynO5B_DP.js";const b={},g={id:"_74-搜索二维矩阵",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_74-搜索二维矩阵","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/search-a-2d-matrix",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),y=n("code",null,"矩阵",-1),w={href:"https://leetcode.com/problems/search-a-2d-matrix",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),C=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:</p><ul><li>Each row is sorted in non-decreasing order.</li><li>The first integer of each row is greater than the last integer of the previous row.</li></ul><p>Given an integer <code>target</code>, return <code>true</code> <em>if</em> <code>target</code> <em>is in</em> <code>matrix</code> <em>or</em><code>false</code> <em>otherwise</em>.</p><p>You must write a solution in <code>O(log(m * n))</code> time complexity.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/05/mat.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>-10^4 &lt;= matrix[i][j], target &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个满足下述两条属性的 <code>m x n</code> 整数矩阵：</p><ul><li>每行中的整数从左到右按非严格递增顺序排列。</li><li>每行的第一个整数大于前一行的最后一个整数。</li></ul><p>给你一个整数 <code>target</code> ，如果 <code>target</code> 在矩阵中，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-从右上角遍历" tabindex="-1"><a class="header-anchor" href="#思路一-从右上角遍历" aria-hidden="true">#</a> 思路一：从右上角遍历</h3><p>这道题说 <code>matrix</code> 从上到下递增，从左到右递增，显然左上角是最小元素，右下角是最大元素。我们如果想高效在 <code>matrix</code> 中搜索一个元素，肯定需要从某个角开始，比如说从左上角开始，然后每次只能向右或向下移动，不要走回头路。</p><p>如果真从左上角开始的话，就会发现无论向右还是向下走，元素大小都会增加，那么到底向右还是向下？不确定，那只好用类似 <strong>动态规划算法</strong> 的思路穷举了。</p><p>但实际上不用这么麻烦，我们不要从左上角开始，而是从右上角开始，规定只能向左或向下移动。</p><p>你注意，如果向左移动，元素在减小，如果向下移动，元素在增大，这样的话我们就可以根据当前位置的元素和 <code>target</code> 的相对大小来判断应该往哪移动，不断接近从而找到 <code>target</code> 的位置。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，因为从右上角向下、向左遍历，最坏情况下需要判断 <code>m+n</code> 次；</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数的额外空间。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>可以将这个问题看作在一个排序的一维数组中查找目标值的二分查找问题。虽然矩阵是二维的，但由于矩阵每行和每列都严格递增，可以将二维矩阵“展开”为一维数组来进行处理。</p><ol><li><strong>二维矩阵转为一维数组的思想</strong>： <ul><li>假设矩阵有 <code>m</code> 行 <code>n</code> 列，矩阵的第 <code>i</code> 行第 <code>j</code> 列的元素，可以映射到一维数组中的下标 <code>index = i * n + j</code>。</li><li>反过来，一维数组的索引 <code>index</code> 对应到二维矩阵中的行列位置则为：<code>row = index / n | 0</code>, <code>col = index % n</code>。</li></ul></li><li><strong>二分查找</strong>： <ul><li>可以把整个矩阵看作是一个长度为 <code>m * n</code> 的排序数组，然后直接对这个数组进行二分查找。</li><li>计算中间位置 <code>mid</code>，将其映射回二维矩阵中的 <code>row</code> 和 <code>col</code>。</li><li>如果中间值等于目标值，返回 <code>true</code>。</li><li>如果中间值小于目标值，说明目标值在右半部分，移动左边界。</li><li>如果中间值大于目标值，说明目标值在左半部分，移动右边界。</li><li>当左边界超过右边界时，说明没有找到目标值，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(m * n))</code>，这是一个标准的二分查找的时间复杂度，其中 <code>m</code> 是行数，<code>n</code> 是列数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"searchMatrix"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("matrix"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" h "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" w "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 从右上角开始遍历矩阵"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" w "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" h "),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 找到目标值"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 向下移动"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			j`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 向左移动"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"searchMatrix"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("matrix"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},","),t(`
		n `),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		right `),n("span",{class:"token operator"},"="),t(" m "),n("span",{class:"token operator"},"*"),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<="),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" mid "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"+"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("mid "),n("span",{class:"token operator"},"/"),t(" n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// 映射回二维矩阵中的行"),t(`
			j `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 映射回二维矩阵中的列"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 找到目标值"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},">"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			right `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 移动左边界"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			left `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 移动右边界"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"240",-1),N={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/search-a-2d-matrix-ii",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},M={href:"/problem/0240",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"left"}},B=n("code",null,"数组",-1),z=n("code",null,"二分查找",-1),R=n("code",null,"分治",-1),Y=n("code",null,"1+",-1),G={style:{"text-align":"left"}},H=n("td",{style:{"text-align":"center"}},"2468",-1),S={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/split-message-based-on-limit",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"字符串",-1),P=n("code",null,"二分查找",-1),Q={style:{"text-align":"left"}};function U(W,X){const o=c("ExternalLinkIcon"),l=c("font"),e=c("RouterLink"),p=c("CodeTabs");return d(),k("div",null,[n("h1",g,[_,t(),n("a",f,[t("74. 搜索二维矩阵"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[x]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/outline/tag/matrix.html"},{default:a(()=>[y]),_:1}),t("  🔗 "),n("a",w,[j,s(o)])]),C,s(p,{id:"218",data:[{id:"从右上角遍历"},{id:"二分查找"}]},{title0:a(({value:i,isActive:r})=>[t("从右上角遍历")]),title1:a(({value:i,isActive:r})=>[t("二分查找")]),tab0:a(({value:i,isActive:r})=>[O]),tab1:a(({value:i,isActive:r})=>[E]),_:1}),I,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[L,n("td",N,[n("a",V,[t("搜索二维矩阵 II"),s(o)])]),n("td",A,[n("a",M,[t("[✓]"),s(o)])]),n("td",T,[s(e,{to:"/outline/tag/array.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/outline/tag/divide-and-conquer.html"},{default:a(()=>[R]),_:1}),t(),Y]),n("td",G,[s(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[H,n("td",S,[n("a",D,[t("根据限制分割消息"),s(o)])]),F,n("td",J,[s(e,{to:"/outline/tag/string.html"},{default:a(()=>[K]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[P]),_:1})]),n("td",Q,[s(l,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])])])])])}const $=u(b,[["render",U],["__file","0074.html.vue"]]);export{$ as default};
