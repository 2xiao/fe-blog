import{_ as d,r as c,o as k,c as m,a as t,d as n,b as e,w as s,f as h,e as p}from"./app-Fucr7yuT.js";const _={},f={id:"_129-求根节点到叶节点数字之和",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_129-求根节点到叶节点数字之和","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"树",-1),y=t("code",null,"深度优先搜索",-1),x=t("code",null,"二叉树",-1),w={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},T=t("code",null,"LeetCode",-1),S=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary tree containing digits from <code>0</code> to <code>9</code> only.</p><p>Each root-to-leaf path in the tree represents a number.</p><ul><li>For example, the root-to-leaf path <code>1 -&gt; 2 -&gt; 3</code> represents the number <code>123</code>.</li></ul><p>Return <em>the total sum of all root-to-leaf numbers</em>. Test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p><p>A <strong>leaf</strong> node is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3]</p><p>Output: 25</p><p>Explanation:</p><p>The root-to-leaf path 1-&gt;2 represents the number 12.</p><p>The root-to-leaf path 1-&gt;3 represents the number 13.</p><p>Therefore, sum = 12 + 13 = 25.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,9,0,5,1]</p><p>Output: 1026</p><p>Explanation:</p><p>The root-to-leaf path 4-&gt;9-&gt;5 represents the number 495.</p><p>The root-to-leaf path 4-&gt;9-&gt;1 represents the number 491.</p><p>The root-to-leaf path 4-&gt;0 represents the number 40.</p><p>Therefore, sum = 495 + 491 + 40 = 1026.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>The depth of the tree will not exceed <code>10</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，它的每个结点都存放一个  <code>0-9</code>  的数字，每条从根到叶子节点的路径都代表一个数字。例如，从根到叶子节点路径 <code>1-&gt;2-&gt;3</code> 代表数字 <code>123</code>。计算从根到叶子节点生成的所有数字之和。说明:  叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',17),N=p('<h3 id="思路一-dfs" tabindex="-1"><a class="header-anchor" href="#思路一-dfs" aria-hidden="true">#</a> 思路一：DFS</h3><ul><li>使用深度优先搜索（DFS）来遍历二叉树，计算从根到叶子节点路径生成的数字之和。</li><li>函数 <code>sumNumbers</code> 是入口函数，调用 <code>dfs</code> 函数进行递归。</li><li>在 <code>dfs</code> 函数中，通过参数 <code>currentSum</code> 记录当前路径上的数字之和。</li><li>当到达叶子节点时，返回当前路径的数字之和。</li><li>整个递归过程计算了所有从根到叶子节点路径生成的数字之和。</li></ul><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><ol><li>定义一个结果变量 <code>sum</code> 和一个路径变量 <code>num</code>。</li><li>使用回溯算法，通过递归函数 <code>backtrack</code> 遍历组合的所有可能性。</li><li>在 <code>backtrack</code> 函数中，当到达叶子节点时，将当前路径的数字 <code>num</code> 加入到结果变量 <code>sum</code> 中。</li><li>在每一层递归中，将当前数字加入路径变量，然后递归调用下一层，最后去掉当前数字，回溯到上一层。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',6),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"sumNumbers"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"dfs"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("root"),t("span",{class:"token punctuation"},","),n(" currentSum")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
		currentSum `),t("span",{class:"token operator"},"="),n(" currentSum "),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"10"),n(),t("span",{class:"token operator"},"+"),n(" root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("left "),t("span",{class:"token operator"},"&&"),n(),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" currentSum"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" left "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},","),n(" currentSum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" right "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},","),n(" currentSum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"return"),n(" left "),t("span",{class:"token operator"},"+"),n(" right"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"sumNumbers"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" sum "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},","),n(`
		num `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"backtrack"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 将当前数字加入路径变量"),n(`
		num `),t("span",{class:"token operator"},"="),n(" root"),t("span",{class:"token punctuation"},"."),n("val "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"10"),n(),t("span",{class:"token operator"},"*"),n(" num"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 到达叶子节点，将当前路径的数字 num 加入到结果变量 sum 中"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("left "),t("span",{class:"token operator"},"&&"),n(),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			sum `),t("span",{class:"token operator"},"+="),n(" num"),t("span",{class:"token punctuation"},";"),n(`
			num `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),n("num "),t("span",{class:"token operator"},"-"),n(" root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"/"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`

		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 从路径变量中去掉当前数字"),n(`
		num `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),n("num "),t("span",{class:"token operator"},"-"),n(" root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"/"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token function"},"backtrack"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"return"),n(" sum"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),A=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),F=t("td",{style:{"text-align":"center"}},"112",-1),L={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},D={style:{"text-align":"left"}},I=t("code",null,"树",-1),B=t("code",null,"深度优先搜索",-1),R=t("code",null,"广度优先搜索",-1),z=t("code",null,"1+",-1),M={style:{"text-align":"left"}},O=t("td",{style:{"text-align":"center"}},"124",-1),H={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=t("code",null,"树",-1),P=t("code",null,"深度优先搜索",-1),Q=t("code",null,"动态规划",-1),U=t("code",null,"1+",-1),W={style:{"text-align":"left"}},X=t("td",{style:{"text-align":"center"}},"988",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/smallest-string-starting-from-leaf",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},et=t("code",null,"树",-1),st=t("code",null,"深度优先搜索",-1),at=t("code",null,"字符串",-1),ot=t("code",null,"2+",-1),lt={style:{"text-align":"left"}};function ct(rt,it){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),u=c("CodeTabs");return k(),m("div",null,[t("h1",f,[b,n(),t("a",g,[n("129. 求根节点到叶节点数字之和"),e(o)])]),t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[v]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[y]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[x]),_:1}),n("  🔗 "),t("a",w,[T,e(o)])]),S,t("p",null,[n("这一题是 "),e(a,{to:"/problem/0257.html"},{default:s(()=>[n("第 257 题")]),_:1}),n(" 的变形题，第 257 题要求输出每条从根节点到叶子节点的路径，这一题变成了把每一个从根节点到叶子节点的数字都串联起来，再累加每条路径，求出最后的总和。实际做题思路基本没变。")]),N,e(u,{id:"174",data:[{id:"DFS"},{id:"回溯"}]},{title0:s(({value:r,isActive:i})=>[n("DFS")]),title1:s(({value:r,isActive:i})=>[n("回溯")]),tab0:s(({value:r,isActive:i})=>[E]),tab1:s(({value:r,isActive:i})=>[j]),_:1}),C,h(" prettier-ignore "),t("table",null,[A,t("tbody",null,[t("tr",null,[F,t("td",L,[t("a",V,[n("路径总和"),e(o)])]),t("td",q,[e(a,{to:"/problem/0112.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",D,[e(a,{to:"/tag/tree.html"},{default:s(()=>[I]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[R]),_:1}),n(),z]),t("td",M,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[O,t("td",H,[t("a",Y,[n("二叉树中的最大路径和"),e(o)])]),t("td",G,[e(a,{to:"/problem/0124.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",J,[e(a,{to:"/tag/tree.html"},{default:s(()=>[K]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Q]),_:1}),n(),U]),t("td",W,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[X,t("td",Z,[t("a",$,[n("从叶结点开始的最小字符串"),e(o)])]),tt,t("td",nt,[e(a,{to:"/tag/tree.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[at]),_:1}),n(),ot]),t("td",lt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const ut=d(_,[["render",ct],["__file","0129.html.vue"]]);export{ut as default};
