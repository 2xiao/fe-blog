import{_ as k,r as o,o as d,c as m,a as n,d as s,b as a,w as t,e as u}from"./app-Fucr7yuT.js";const h={},b={id:"剑指-offer-34-二叉树中和为某一值的路径",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#剑指-offer-34-二叉树中和为某一值的路径","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),w=n("code",null,"回溯",-1),y=n("code",null,"二叉树",-1),S={href:"https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你二叉树的根节点 <code>root</code> 和一个整数目标和 <code>targetSum</code> ，找出所有 <strong>从根节点到叶子节点</strong> 路径总和等于给定目标和的路径。</p><p><strong>叶子节点</strong> 是指没有子节点的节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p>输出：[[5,4,11,2],[5,8,4,5]]</p><p>解释: 5 + 4 + 11 + 2 = 22；5 + 8 + 4 + 5 = 22</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：root = [1,2,3], targetSum = 5</p><p>输出：[]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：root = [1,2], targetSum = 0</p><p>输出：[]</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点总数在范围 <code>[0, 5000]</code> 内</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul>',13),L={class:"hint-container warning"},T=n("p",{class:"hint-container-title"},"注意",-1),z=u('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-dfs" tabindex="-1"><a class="header-anchor" href="#思路一-dfs" aria-hidden="true">#</a> 思路一：DFS</h3><p>这道题可以使用深度优先搜索（DFS）进行解答。具体思路如下：</p><ol><li>使用 DFS 遍历二叉树的所有路径，同时记录当前路径和。</li><li>在遍历的过程中，维护一个路径列表，记录当前路径上的所有节点。</li><li>当遍历到叶子节点时，判断当前路径和是否等于目标和，如果等于则将当前路径加入结果列表。</li><li>最终返回结果列表。</li></ol><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3>',6),N=n("h2",{id:"代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),s(" 代码")],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"targetSum"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"pathTarget"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("root"),n("span",{class:"token punctuation"},","),s(" targetSum")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" sum")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 将当前节点添加到路径中"),s(`
		path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		sum `),n("span",{class:"token operator"},"+="),s(" node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 如果当前节点为叶子节点且路径和等于目标和，将路径加入结果列表"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"&&"),s(" sum "),n("span",{class:"token operator"},"=="),s(" targetSum"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("path"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 递归遍历左右子树"),s(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" sum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" sum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 回溯，移除当前节点"),s(`
		path`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 调用内部的深度优先搜索函数"),s(`
	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"targetSum"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"pathTarget"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("root"),n("span",{class:"token punctuation"},","),s(" targetSum")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("right "),n("span",{class:"token operator"},"&&"),s(" root"),n("span",{class:"token punctuation"},"."),s("val "),n("span",{class:"token operator"},"=="),s(" targetSum"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" tempLeft "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"pathTarget"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" targetSum "),n("span",{class:"token operator"},"-"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tempLeft"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token keyword"},"of"),s(" tempLeft"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" tempRight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"pathTarget"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" targetSum "),n("span",{class:"token operator"},"-"),s(" root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tempRight"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token keyword"},"of"),s(" tempRight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(F,R){const p=o("ExternalLinkIcon"),i=o("font"),e=o("RouterLink"),r=o("CodeTabs");return d(),m("div",null,[n("h1",b,[f,s(),n("a",v,[s("剑指 Offer 34. 二叉树中和为某一值的路径"),a(p)])]),n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[w]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",S,[x,a(p)])]),j,n("div",L,[T,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0113.html"},{default:t(()=>[s("第 113 题")]),_:1}),s(" 相同。")])]),z,n("p",null,[s("这一题是 "),a(e,{to:"/problem/0112.html"},{default:t(()=>[s("第 112 题")]),_:1}),s(" 和 "),a(e,{to:"/problem/0257.html"},{default:t(()=>[s("第 257 题")]),_:1}),s(" 的组合增强版。")]),n("p",null,[a(e,{to:"/problem/0112.html"},{default:t(()=>[s("第 112 题")]),_:1}),s(" 要求判断树中是否存在从根节点到叶子节点路径总和等于给定目标和； "),a(e,{to:"/problem/0257.html"},{default:t(()=>[s("第 257 题")]),_:1}),s(" 要求返回所有从根节点到叶子节点的路径；而本题要求返回所有从根节点到叶子节点路径总和等于给定目标和的路径。可以结合两道题的解题思路，采用递归实现。")]),N,a(r,{id:"126",data:[{id:"DFS"},{id:"递归"}]},{title0:t(({value:c,isActive:l})=>[s("DFS")]),title1:t(({value:c,isActive:l})=>[s("递归")]),tab0:t(({value:c,isActive:l})=>[q]),tab1:t(({value:c,isActive:l})=>[C]),_:1})])}const V=k(h,[["render",D],["__file","jz_offer_34_1.html.vue"]]);export{V as default};
