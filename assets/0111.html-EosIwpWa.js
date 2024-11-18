import{_ as r,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as m}from"./app-5LzGvT4H.js";const _={},f=n("h1",{id:"_111-二叉树的最小深度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_111-二叉树的最小深度","aria-hidden":"true"},"#"),t(" 111. 二叉树的最小深度")],-1),b=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),y=n("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree, find its minimum depth.</p><p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p><p><strong>Note:</strong> A leaf is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [2,null,3,null,4,null,5,null,6]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^5]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，找出其最小深度。最小深度是从根节点到最近叶子节点的最短路径上的节点数量。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>递归求出根节点到叶子节点的深度，输出最小值即可。</p><hr><h3 id="思路二-bfs" tabindex="-1"><a class="header-anchor" href="#思路二-bfs" aria-hidden="true">#</a> 思路二：BFS</h3><p>BFS 算法解决的问题的本质，就是在一幅「图」中找到从起点 <code>start</code> 到终点 <code>target</code> 的最近距离。</p><p>套用到本题，起点就是 <code>root</code> 根节点，终点就是最靠近根节点的那个叶子节点。</p><p>要使用 <strong>队列</strong> 这种数据结构，层序遍历二叉树，每次将一个节点的所有子节点加入队列，如果某个节点没有子节点，则该节点就是最靠近根节点的那个叶子节点。</p><p>注意 <code>while</code> 循环和 <code>for</code> 循环的配合，<code>while</code> 循环控制一层一层往下走，<code>for</code> 循环利用 <code>len</code> 变量控制从左到右遍历每一层二叉树节点。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',23),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minDepth"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"minDepth"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minDepth"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" queue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" depth "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" len "),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" len"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("left "),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"return"),t(" depth"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				queue`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		queue `),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),t("len"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		depth`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" depth"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"102",-1),A=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历",-1),L={style:{"text-align":"center"}},S={style:{"text-align":"left"}},V=n("code",null,"树",-1),F=n("code",null,"广度优先搜索",-1),I=n("code",null,"二叉树",-1),O=n("td",{style:{"text-align":"left"}},"🟠",-1),R={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"104",-1),H=n("td",{style:{"text-align":"left"}},"二叉树的最大深度",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=n("code",null,"树",-1),Q=n("code",null,"深度优先搜索",-1),U=n("code",null,"广度优先搜索",-1),W=n("code",null,"1+",-1),X=n("td",{style:{"text-align":"left"}},"🟢",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"};function nn(tn,en){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[f,n("p",null,[t("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,e(o)]),t(),n("a",q,[N,e(o)])]),j,e(u,{id:"92",data:[{id:"递归"},{id:"BFS"}]},{title0:s(({value:l,isActive:p})=>[t("递归")]),title1:s(({value:l,isActive:p})=>[t("BFS")]),tab0:s(({value:l,isActive:p})=>[B]),tab1:s(({value:l,isActive:p})=>[C]),_:1}),D,h(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[T,A,n("td",L,[e(a,{to:"/problem/0102.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",S,[e(a,{to:"/tag/tree.html"},{default:s(()=>[V]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[I]),_:1})]),O,n("td",R,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",G,[t("🔗"),e(o)])])]),n("tr",null,[M,H,n("td",J,[e(a,{to:"/problem/0104.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",K,[e(a,{to:"/tag/tree.html"},{default:s(()=>[P]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Q]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[U]),_:1}),t(),W]),X,n("td",Y,[n("a",Z,[t("🀄️"),e(o)]),t(),n("a",$,[t("🔗"),e(o)])])])])])])}const an=r(_,[["render",nn],["__file","0111.html.vue"]]);export{an as default};
