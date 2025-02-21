import{_ as d,r as o,o as k,c as m,a as n,b as s,d as t,w as a,e as p}from"./app-9CeBk-uV.js";const b={},h=n("h1",{id:"_49-从根节点到叶节点的路径数字之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_49-从根节点到叶节点的路径数字之和","aria-hidden":"true"},"#"),s(" 49. 从根节点到叶节点的路径数字之和")],-1),v=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉树",-1),_={href:"https://leetcode.cn/problems/3Etpl5",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个二叉树的根节点 <code>root</code> ，树中每个节点都存放有一个 <code>0</code> 到 <code>9</code> 之间的数字。</p><p>每条从根节点到叶节点的路径都代表一个数字：</p><ul><li>例如，从根节点到叶节点的路径 <code>1 -&gt; 2 -&gt; 3</code> 表示数字 <code>123</code> 。</li></ul><p>计算从根节点到叶节点生成的 <strong>所有数字之和</strong> 。</p><p><strong>叶节点</strong> 是指没有子节点的节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,2,3]</p><p><strong>输出：</strong> 25</p><p><strong>解释：</strong></p><p>从根到叶子节点路径 1-&gt;2 代表数字 12</p><p>从根到叶子节点路径 1-&gt;3 代表数字 13</p><p>因此，数字总和 = 12 + 13 = 25</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/num2tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [4,9,0,5,1]</p><p><strong>输出：</strong> 1026</p><p><strong>解释：</strong></p><p>从根到叶子节点路径 4-&gt;9-&gt;5 代表数字 495</p><p>从根到叶子节点路径 4-&gt;9-&gt;1 代表数字 491</p><p>从根到叶子节点路径 4-&gt;0 代表数字 40</p><p>因此，数字总和 = 495 + 491 + 40 = 1026</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目在范围 <code>[1, 1000]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>树的深度不超过 <code>10</code></li></ul>',14),x={class:"hint-container warning"},S=n("p",{class:"hint-container-title"},"注意",-1),j=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),N=p('<h3 id="思路一-dfs" tabindex="-1"><a class="header-anchor" href="#思路一-dfs" aria-hidden="true">#</a> 思路一：DFS</h3><ul><li>使用深度优先搜索（DFS）来遍历二叉树，计算从根到叶子节点路径生成的数字之和。</li><li>函数 <code>sumNumbers</code> 是入口函数，调用 <code>dfs</code> 函数进行递归。</li><li>在 <code>dfs</code> 函数中，通过参数 <code>currentSum</code> 记录当前路径上的数字之和。</li><li>当到达叶子节点时，返回当前路径的数字之和。</li><li>整个递归过程计算了所有从根到叶子节点路径生成的数字之和。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数，递归函数对每个节点访问一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用栈的深度取决于树的高度。在最好的情况下，二叉树是完全平衡的，树的高度为 <code>O(log n)</code>；最坏情况下，二叉树是链状的，树的高度为 <code>n</code>（即节点数）。</p></li></ul><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><ol><li>定义一个结果变量 <code>sum</code> 和一个路径变量 <code>num</code>。</li><li>使用回溯算法，通过递归函数 <code>backtrack</code> 遍历组合的所有可能性。</li><li>在 <code>backtrack</code> 函数中，当到达叶子节点时，将当前路径的数字 <code>num</code> 加入到结果变量 <code>sum</code> 中。</li><li>在每一层递归中，将当前数字加入路径变量，然后递归调用下一层，最后去掉当前数字，回溯到上一层。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数，使用回溯方法遍历二叉树中的每一个节点，在每个节点处，进行常数级的操作。</p></li><li><p><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用栈的深度取决于树的高度。在最好的情况下，二叉树是完全平衡的，树的高度为 <code>O(log n)</code>；最坏情况下，二叉树是链状的，树的高度为 <code>n</code>（即节点数）。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',10),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"sumNumbers"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("root"),n("span",{class:"token punctuation"},","),s(" currentSum")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		currentSum `),n("span",{class:"token operator"},"="),s(" currentSum "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"+"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" currentSum"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" currentSum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" currentSum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"sumNumbers"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		num `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"backtrack"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 将当前数字加入路径变量"),s(`
		num `),n("span",{class:"token operator"},"="),s(" root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"*"),s(" num"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 到达叶子节点，将当前路径的数字 num 加入到结果变量 sum 中"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			sum `),n("span",{class:"token operator"},"+="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
			num `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"-"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 从路径变量中去掉当前数字"),s(`
		num `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"-"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token function"},"backtrack"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(L,T){const r=o("font"),e=o("RouterLink"),u=o("ExternalLinkIcon"),i=o("CodeTabs");return k(),m("div",null,[h,n("p",null,[s("🟠 "),t(r,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",_,[w,t(u)])]),y,n("div",x,[S,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0129.html"},{default:a(()=>[s("第 129 题")]),_:1}),s(" 相同。")])]),j,n("p",null,[s("这一题是 "),t(e,{to:"/problem/0257.html"},{default:a(()=>[s("第 257 题")]),_:1}),s(" 的变形题，第 257 题要求输出每条从根节点到叶子节点的路径，这一题变成了把每一个从根节点到叶子节点的数字都串联起来，再累加每条路径，求出最后的总和。实际做题思路基本没变。")]),N,t(i,{id:"203",data:[{id:"DFS"},{id:"回溯"}]},{title0:a(({value:c,isActive:l})=>[s("DFS")]),title1:a(({value:c,isActive:l})=>[s("回溯")]),tab0:a(({value:c,isActive:l})=>[I]),tab1:a(({value:c,isActive:l})=>[O]),_:1})])}const z=d(b,[["render",C],["__file","jz_offer_II_049.html.vue"]]);export{z as default};
