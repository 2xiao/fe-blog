import{_ as r,r as c,o as k,c as d,a as n,d as s,b as t,w as a,f as m,e as h}from"./app-ynO5B_DP.js";const b={},v={id:"_103-二叉树的锯齿形层序遍历",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_103-二叉树的锯齿形层序遍历","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"树",-1),y=n("code",null,"广度优先搜索",-1),w=n("code",null,"二叉树",-1),x={href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),z=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the zigzag level order traversal of its nodes &#39; values</em>. (i.e., from left to right, then right to left for the next level and alternate between).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: [[3],[20,9],[15,7]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>按照 Z 字型层序遍历一棵树。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),N=n("h2",{id:"代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),s(" 代码")],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 思路一：广度优先遍历(BFS)"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"zigzagLevelOrder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" flag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" len"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("flag"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				temp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				temp`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		flag `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("flag"),n("span",{class:"token punctuation"},";"),s(`
		queue `),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 思路二：深度优先遍历(DFS)"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"zigzagLevelOrder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"traverse"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("node"),n("span",{class:"token punctuation"},","),s(" deep")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(" deep"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"["),s("deep"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("deep "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"["),s("deep"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"["),s("deep"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"unshift"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},","),s(" deep "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},","),s(" deep "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),S=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),B=n("td",{style:{"text-align":"center"}},"102",-1),E={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"center"}},I={href:"/problem/0102",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"left"}},V=n("code",null,"树",-1),A=n("code",null,"广度优先搜索",-1),D=n("code",null,"二叉树",-1),M={style:{"text-align":"left"}};function R(G,Z){const o=c("ExternalLinkIcon"),u=c("font"),e=c("RouterLink"),i=c("CodeTabs");return k(),d("div",null,[n("h1",v,[f,s(),n("a",_,[s("103. 二叉树的锯齿形层序遍历"),t(o)])]),n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/outline/tag/tree.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/outline/tag/breadth-first-search.html"},{default:a(()=>[y]),_:1}),s(),t(e,{to:"/outline/tag/binary-tree.html"},{default:a(()=>[w]),_:1}),s("  🔗 "),n("a",x,[q,t(o)])]),z,n("p",null,[s("这题和 "),t(e,{to:"/problem/0102.html"},{default:a(()=>[s("第 102 题 二叉树的层序遍历")]),_:1}),s(" 几乎是一样的，只要根据层数控制遍历方向即可。")]),N,t(i,{id:"78",data:[{id:"广度优先遍历(BFS)"},{id:"深度优先遍历(DFS)"}]},{title0:a(({value:l,isActive:p})=>[s("广度优先遍历(BFS)")]),title1:a(({value:l,isActive:p})=>[s("深度优先遍历(DFS)")]),tab0:a(({value:l,isActive:p})=>[j]),tab1:a(({value:l,isActive:p})=>[C]),_:1}),L,m(" prettier-ignore "),n("table",null,[S,n("tbody",null,[n("tr",null,[B,n("td",E,[n("a",F,[s("二叉树的层序遍历"),t(o)])]),n("td",T,[n("a",I,[s("[✓]"),t(o)])]),n("td",O,[t(e,{to:"/outline/tag/tree.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/outline/tag/breadth-first-search.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/outline/tag/binary-tree.html"},{default:a(()=>[D]),_:1})]),n("td",M,[t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const J=r(b,[["render",R],["__file","0103.html.vue"]]);export{J as default};
