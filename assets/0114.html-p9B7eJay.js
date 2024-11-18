import{_ as p,r as l,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as _}from"./app-5LzGvT4H.js";const m={},f=n("h1",{id:"_114-二叉树展开为链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_114-二叉树展开为链表","aria-hidden":"true"},"#"),t(" 114. 二叉树展开为链表")],-1),b=n("code",null,"栈",-1),g=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),y=n("code",null,"链表",-1),x=n("code",null,"二叉树",-1),w={href:"https://leetcode.cn/problems/flatten-binary-tree-to-linked-list",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"LeetCode",-1),j=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),q=n("p",null,[t("Given the "),n("code",null,"root"),t(' of a binary tree, flatten the tree into a "linked list":')],-1),E=n("li",null,[t('The "linked list" should use the same '),n("code",null,"TreeNode"),t(" class where the "),n("code",null,"right"),t(" child pointer points to the next node in the list and the "),n("code",null,"left"),t(" child pointer is always "),n("code",null,"null"),t(".")],-1),L={href:"https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR",target:"_blank",rel:"noopener noreferrer"},I=n("strong",null,"pre-order",-1),V=n("strong",null,"traversal",-1),A=_('<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,5,3,4,null,6]</p><p>Output: [1,null,2,null,3,null,4,null,5,null,6]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Can you flatten the tree in-place (with <code>O(1)</code> extra space)?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根结点 <code>root</code> ，请你将它展开为一个单链表：</p><ul><li>展开后的单链表应该同样使用 <code>TreeNode</code> ，其中 <code>right</code> 子指针指向链表中下一个结点，而左子指针始终为 <code>null</code> 。</li><li>展开后的单链表应该与二叉树 <strong>先序遍历</strong> 顺序相同。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-迭代" tabindex="-1"><a class="header-anchor" href="#思路一-迭代" aria-hidden="true">#</a> 思路一：迭代</h3><p>使用一个栈来模拟先序遍历。从根节点开始，将右子节点和左子节点入栈。出栈时，将当前节点的右子节点指向栈顶节点，同时将左子节点设为 <code>null</code>，以满足展开的要求。不断重复这个过程，直到栈为空，即完成了二叉树的展开。展开后的链表即为二叉树的先序遍历结果。</p><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3><p>通过递归先展开左右子树，然后将根节点的右子树连接到已经展开的左子树的末尾。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',20),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify root in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"flatten"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" stack "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("stack"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" node "),n("span",{class:"token operator"},"="),t(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(" stack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		node`),n("span",{class:"token punctuation"},"."),t("left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
		node`),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"="),t(" stack"),n("span",{class:"token punctuation"},"["),t("stack"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify root in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"flatten"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"flatten"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" rightSubtree "),n("span",{class:"token operator"},"="),t(" root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},";"),t(`
	root`),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"="),t(" root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},";"),t(`
	root`),n("span",{class:"token punctuation"},"."),t("left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" end "),n("span",{class:"token operator"},"="),t(" root"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("end"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		end `),n("span",{class:"token operator"},"="),t(" end"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	end`),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"="),t(" rightSubtree"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),S=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),D=n("td",{style:{"text-align":"center"}},"430",-1),z=n("td",{style:{"text-align":"left"}},"扁平化多级双向链表",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"深度优先搜索",-1),P=n("code",null,"链表",-1),H=n("code",null,"双向链表",-1),J=n("td",{style:{"text-align":"left"}},"🟠",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/flatten-a-multilevel-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"1660",-1),X=n("td",{style:{"text-align":"left"}},"纠正二叉树 🔒",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"树",-1),nn=n("code",null,"深度优先搜索",-1),tn=n("code",null,"广度优先搜索",-1),en=n("code",null,"2+",-1),sn=n("td",{style:{"text-align":"left"}},"🟠",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/correct-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/correct-a-binary-tree",target:"_blank",rel:"noopener noreferrer"};function cn(rn,un){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),u=l("CodeTabs");return d(),k("div",null,[f,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[y]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[x]),_:1}),t("  🔗 "),n("a",w,[N,e(o)]),t(),n("a",T,[C,e(o)])]),j,q,n("ul",null,[E,n("li",null,[t('The "linked list" should be in the same order as a '),n("a",L,[I,t(),V,e(o)]),t(" of the binary tree.")])]),A,e(u,{id:"115",data:[{id:"迭代"},{id:"递归"}]},{title0:s(({value:c,isActive:i})=>[t("迭代")]),title1:s(({value:c,isActive:i})=>[t("递归")]),tab0:s(({value:c,isActive:i})=>[O]),tab1:s(({value:c,isActive:i})=>[B]),_:1}),R,h(" prettier-ignore "),n("table",null,[S,n("tbody",null,[n("tr",null,[D,z,n("td",F,[e(a,{to:"/problem/0430.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",G,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[M]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[P]),_:1}),t(),e(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[H]),_:1})]),J,n("td",K,[n("a",Q,[t("🀄️"),e(o)]),t(),n("a",U,[t("🔗"),e(o)])])]),n("tr",null,[W,X,Y,n("td",Z,[e(a,{to:"/tag/tree.html"},{default:s(()=>[$]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[tn]),_:1}),t(),en]),sn,n("td",an,[n("a",on,[t("🀄️"),e(o)]),t(),n("a",ln,[t("🔗"),e(o)])])])])])])}const dn=p(m,[["render",cn],["__file","0114.html.vue"]]);export{dn as default};
