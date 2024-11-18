import{_ as p,r as l,o as d,c as _,a as t,b as e,d as n,w as s,f as h,e as k}from"./app-9Xw5divW.js";const m={},f=t("h1",{id:"_102-二叉树的层序遍历",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_102-二叉树的层序遍历","aria-hidden":"true"},"#"),e(" 102. 二叉树的层序遍历")],-1),b=t("code",null,"树",-1),g=t("code",null,"广度优先搜索",-1),y=t("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),N=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the level order traversal of its nodes &#39; values</em>. (i.e., from left to right, level by level).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: [[3],[9,20],[15,7]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>层序</strong> 遍历。（即逐层地，从左到右访问所有节点）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-广度优先遍历-bfs" tabindex="-1"><a class="header-anchor" href="#思路一-广度优先遍历-bfs" aria-hidden="true">#</a> 思路一：广度优先遍历(BFS)</h3><ul><li>使用队列实现</li></ul><ol><li>首先将根节点放入队列中；</li><li>更新队列的长度 <code>len</code> ，遍历队列的前 <code>len</code> 个节点；</li><li>如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中；</li><li>将队列的前 <code>len</code> 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；</li><li>重复步骤 2、3、4，直至队列为空；</li></ol><hr><h3 id="思路二-深度优先遍历-dfs" tabindex="-1"><a class="header-anchor" href="#思路二-深度优先遍历-dfs" aria-hidden="true">#</a> 思路二：深度优先遍历(DFS)</h3><ol><li>维护一个递归函数，参数为节点和该节点的深度</li><li>先将根节点与深度 0 传入递归函数</li><li>将节点放入 index 与深度对应的数组内</li><li>将节点的左子节点和右子节点分别传入递归函数，深度 +1</li><li>重复步骤 3、4，直至子节点为空</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',21),S=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token comment"},"// 思路一：广度优先遍历(BFS)"),e(`
`),t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"levelOrder"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" queue "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" len "),t("span",{class:"token operator"},"="),e(" queue"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" temp "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" len"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),e(" queue"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),e(" queue"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			temp`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("queue"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
		queue `),t("span",{class:"token operator"},"="),e(" queue"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"slice"),t("span",{class:"token punctuation"},"("),e("len"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("temp"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),F=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token comment"},"// 思路二：深度优先遍历(DFS)"),e(`
`),t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"levelOrder"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token function-variable function"},"traverse"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[e("node"),t("span",{class:"token punctuation"},","),e(" deep")]),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("node "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("res"),t("span",{class:"token punctuation"},"."),e("length "),t("span",{class:"token operator"},"=="),e(" deep"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			res`),t("span",{class:"token punctuation"},"["),e("deep"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e("node"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			res`),t("span",{class:"token punctuation"},"["),e("deep"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
		`),t("span",{class:"token function"},"traverse"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},","),e(" deep "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token function"},"traverse"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},","),e(" deep "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token function"},"traverse"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),B=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),C=t("td",{style:{"text-align":"center"}},"103",-1),I=t("td",{style:{"text-align":"left"}},"二叉树的锯齿形层序遍历",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},z=t("code",null,"树",-1),L=t("code",null,"广度优先搜索",-1),O=t("code",null,"二叉树",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"107",-1),M=t("td",{style:{"text-align":"left"}},"二叉树的层序遍历 II",-1),H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=t("code",null,"树",-1),P=t("code",null,"广度优先搜索",-1),Q=t("code",null,"二叉树",-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"111",-1),$=t("td",{style:{"text-align":"left"}},"二叉树的最小深度",-1),tt={style:{"text-align":"center"}},et={style:{"text-align":"left"}},nt=t("code",null,"树",-1),st=t("code",null,"深度优先搜索",-1),at=t("code",null,"广度优先搜索",-1),ot=t("code",null,"1+",-1),lt=t("td",{style:{"text-align":"center"}},"🟢",-1),ct={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/minimum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"314",-1),pt=t("td",{style:{"text-align":"left"}},"二叉树的垂直遍历 🔒",-1),dt=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ht=t("code",null,"树",-1),kt=t("code",null,"深度优先搜索",-1),mt=t("code",null,"广度优先搜索",-1),ft=t("code",null,"3+",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),gt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/binary-tree-vertical-order-traversal",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/binary-tree-vertical-order-traversal",target:"_blank",rel:"noopener noreferrer"},xt=t("td",{style:{"text-align":"center"}},"429",-1),wt=t("td",{style:{"text-align":"left"}},"N 叉树的层序遍历",-1),qt=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},St=t("code",null,"树",-1),Ft=t("code",null,"广度优先搜索",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Bt={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"637",-1),Tt=t("td",{style:{"text-align":"left"}},"二叉树的层平均值",-1),zt={style:{"text-align":"center"}},Lt={style:{"text-align":"left"}},Ot=t("code",null,"树",-1),Vt=t("code",null,"深度优先搜索",-1),At=t("code",null,"广度优先搜索",-1),Dt=t("code",null,"1+",-1),Rt=t("td",{style:{"text-align":"center"}},"🟢",-1),Gt={style:{"text-align":"center"}},Mt={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},Ht={href:"https://leetcode.com/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},"993",-1),Kt=t("td",{style:{"text-align":"left"}},"二叉树的堂兄弟节点",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"树",-1),Wt=t("code",null,"深度优先搜索",-1),Xt=t("code",null,"广度优先搜索",-1),Yt=t("code",null,"1+",-1),Zt=t("td",{style:{"text-align":"center"}},"🟢",-1),$t={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/cousins-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},ne=t("td",{style:{"text-align":"center"}},"2471",-1),se=t("td",{style:{"text-align":"left"}},"逐层排序二叉树所需的最少操作数目",-1),ae=t("td",{style:{"text-align":"center"}},null,-1),oe={style:{"text-align":"left"}},le=t("code",null,"树",-1),ce=t("code",null,"广度优先搜索",-1),re=t("code",null,"二叉树",-1),ie=t("td",{style:{"text-align":"center"}},"🟠",-1),ue={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level",target:"_blank",rel:"noopener noreferrer"},de={href:"https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level",target:"_blank",rel:"noopener noreferrer"},_e=t("td",{style:{"text-align":"center"}},"2493",-1),he=t("td",{style:{"text-align":"left"}},"将节点分成尽可能多的组",-1),ke=t("td",{style:{"text-align":"center"}},null,-1),me={style:{"text-align":"left"}},fe=t("code",null,"广度优先搜索",-1),be=t("code",null,"并查集",-1),ge=t("code",null,"图",-1),ye=t("td",{style:{"text-align":"center"}},"🔴",-1),ve={style:{"text-align":"center"}},xe={href:"https://leetcode.cn/problems/divide-nodes-into-the-maximum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},we={href:"https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups",target:"_blank",rel:"noopener noreferrer"};function qe(Ne,Se){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),u=l("CodeTabs");return d(),_("div",null,[f,t("p",null,[e("🟠 "),n(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",v,[x,n(o)]),e(),t("a",w,[q,n(o)])]),N,n(u,{id:"143",data:[{id:"广度优先遍历(BFS)"},{id:"深度优先遍历(DFS)"}]},{title0:s(({value:c,isActive:r})=>[e("广度优先遍历(BFS)")]),title1:s(({value:c,isActive:r})=>[e("深度优先遍历(DFS)")]),tab0:s(({value:c,isActive:r})=>[S]),tab1:s(({value:c,isActive:r})=>[F]),_:1}),j,h(" prettier-ignore "),t("table",null,[B,t("tbody",null,[t("tr",null,[C,I,t("td",E,[n(a,{to:"/problem/0103.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",T,[n(a,{to:"/tag/tree.html"},{default:s(()=>[z]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[O]),_:1})]),V,t("td",A,[t("a",D,[e("🀄️"),n(o)]),e(),t("a",R,[e("🔗"),n(o)])])]),t("tr",null,[G,M,t("td",H,[n(a,{to:"/problem/0107.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",J,[n(a,{to:"/tag/tree.html"},{default:s(()=>[K]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[P]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[Q]),_:1})]),U,t("td",W,[t("a",X,[e("🀄️"),n(o)]),e(),t("a",Y,[e("🔗"),n(o)])])]),t("tr",null,[Z,$,t("td",tt,[n(a,{to:"/problem/0111.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",et,[n(a,{to:"/tag/tree.html"},{default:s(()=>[nt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[st]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[at]),_:1}),e(),ot]),lt,t("td",ct,[t("a",rt,[e("🀄️"),n(o)]),e(),t("a",it,[e("🔗"),n(o)])])]),t("tr",null,[ut,pt,dt,t("td",_t,[n(a,{to:"/tag/tree.html"},{default:s(()=>[ht]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[kt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[mt]),_:1}),e(),ft]),bt,t("td",gt,[t("a",yt,[e("🀄️"),n(o)]),e(),t("a",vt,[e("🔗"),n(o)])])]),t("tr",null,[xt,wt,qt,t("td",Nt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[St]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Ft]),_:1})]),jt,t("td",Bt,[t("a",Ct,[e("🀄️"),n(o)]),e(),t("a",It,[e("🔗"),n(o)])])]),t("tr",null,[Et,Tt,t("td",zt,[n(a,{to:"/problem/0637.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Lt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Ot]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Vt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[At]),_:1}),e(),Dt]),Rt,t("td",Gt,[t("a",Mt,[e("🀄️"),n(o)]),e(),t("a",Ht,[e("🔗"),n(o)])])]),t("tr",null,[Jt,Kt,Pt,t("td",Qt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Ut]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Wt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Xt]),_:1}),e(),Yt]),Zt,t("td",$t,[t("a",te,[e("🀄️"),n(o)]),e(),t("a",ee,[e("🔗"),n(o)])])]),t("tr",null,[ne,se,ae,t("td",oe,[n(a,{to:"/tag/tree.html"},{default:s(()=>[le]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[ce]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[re]),_:1})]),ie,t("td",ue,[t("a",pe,[e("🀄️"),n(o)]),e(),t("a",de,[e("🔗"),n(o)])])]),t("tr",null,[_e,he,ke,t("td",me,[n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[fe]),_:1}),e(),n(a,{to:"/tag/union-find.html"},{default:s(()=>[be]),_:1}),e(),n(a,{to:"/tag/graph.html"},{default:s(()=>[ge]),_:1})]),ye,t("td",ve,[t("a",xe,[e("🀄️"),n(o)]),e(),t("a",we,[e("🔗"),n(o)])])])])])])}const je=p(m,[["render",qe],["__file","0102.html.vue"]]);export{je as default};
