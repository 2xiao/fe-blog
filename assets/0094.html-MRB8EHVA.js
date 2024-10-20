import{_ as u,r as c,o as p,c as _,a as t,d as e,b as n,w as s,f as h,e as k}from"./app-Fucr7yuT.js";const f={},m={id:"_94-二叉树的中序遍历",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#_94-二叉树的中序遍历","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"栈",-1),v=t("code",null,"树",-1),x=t("code",null,"深度优先搜索",-1),w=t("code",null,"二叉树",-1),T={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),E=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes&#39; values</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3]</p><p>Output: [1,3,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>中序</strong> 遍历。</p><p><strong>进阶</strong>：递归算法很简单，你可以通过迭代算法完成吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>中序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它本身，最后打印它的右子树。而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，可以直接用递归函数来模拟这一过程。</p><ul><li>先递归调用 <code>preorderTraversal(root.left)</code> 来遍历 <code>root</code> 节点的左子树</li><li>再将 <code>root</code> 节点的值加入答案</li><li>最后递归调用 <code>preorderTraversal(root.right)</code> 来遍历 <code>root</code> 节点的右子树即可</li><li>递归终止的条件为碰到空节点</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为递归过程中栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。</p><p>中序遍历是左中右，先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左面的最底部，再开始处理节点（也就是在把节点的数值放进 res 数组中），这就造成了处理顺序和访问顺序是不一致的。那么在使用迭代法写中序遍历，就需要借用指针的遍历来帮助访问节点，栈则用来处理节点上的元素。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为迭代过程中显式栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),N=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"inorderTraversal"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"inorderTraversal"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"inorderTraversal"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"inorderTraversal"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" stack "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" cur "),t("span",{class:"token operator"},"="),e(" root"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("cur "),t("span",{class:"token operator"},"!="),e(),t("span",{class:"token keyword"},"null"),e(),t("span",{class:"token operator"},"||"),e(" stack"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("cur "),t("span",{class:"token operator"},"!="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			stack`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("cur"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			cur `),t("span",{class:"token operator"},"="),e(" cur"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"else"),e(),t("span",{class:"token punctuation"},"{"),e(`
			cur `),t("span",{class:"token operator"},"="),e(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("cur"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
			cur `),t("span",{class:"token operator"},"="),e(" cur"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),I=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),q=t("td",{style:{"text-align":"center"}},"98",-1),L={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},B=t("code",null,"树",-1),R=t("code",null,"深度优先搜索",-1),z=t("code",null,"二叉搜索树",-1),F=t("code",null,"1+",-1),G={style:{"text-align":"left"}},H=t("td",{style:{"text-align":"center"}},"144",-1),K={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},J={style:{"text-align":"left"}},P=t("code",null,"栈",-1),Q=t("code",null,"树",-1),U=t("code",null,"深度优先搜索",-1),W=t("code",null,"1+",-1),X={style:{"text-align":"left"}},Y=t("td",{style:{"text-align":"center"}},"145",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},tt={style:{"text-align":"center"}},et={style:{"text-align":"left"}},nt=t("code",null,"栈",-1),st=t("code",null,"树",-1),ot=t("code",null,"深度优先搜索",-1),at=t("code",null,"1+",-1),lt={style:{"text-align":"left"}},ct=t("td",{style:{"text-align":"center"}},"173",-1),rt={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/binary-search-tree-iterator",target:"_blank",rel:"noopener noreferrer"},dt={style:{"text-align":"center"}},ut={style:{"text-align":"left"}},pt=t("code",null,"栈",-1),_t=t("code",null,"树",-1),ht=t("code",null,"设计",-1),kt=t("code",null,"3+",-1),ft={style:{"text-align":"left"}},mt=t("td",{style:{"text-align":"center"}},"230",-1),gt={style:{"text-align":"left"}},bt={href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},yt={style:{"text-align":"center"}},vt={style:{"text-align":"left"}},xt=t("code",null,"树",-1),wt=t("code",null,"深度优先搜索",-1),Tt=t("code",null,"二叉搜索树",-1),Ot=t("code",null,"1+",-1),Et={style:{"text-align":"left"}},Nt=t("td",{style:{"text-align":"center"}},"272",-1),jt={style:{"text-align":"left"}},Ct={href:"https://leetcode.com/problems/closest-binary-search-tree-value-ii",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},null,-1),qt={style:{"text-align":"left"}},Lt=t("code",null,"栈",-1),Mt=t("code",null,"树",-1),Vt=t("code",null,"深度优先搜索",-1),At=t("code",null,"4+",-1),Bt={style:{"text-align":"left"}},Rt=t("td",{style:{"text-align":"center"}},"285",-1),zt={style:{"text-align":"left"}},Ft={href:"https://leetcode.com/problems/inorder-successor-in-bst",target:"_blank",rel:"noopener noreferrer"},Gt=t("td",{style:{"text-align":"center"}},null,-1),Ht={style:{"text-align":"left"}},Kt=t("code",null,"树",-1),St=t("code",null,"深度优先搜索",-1),Dt=t("code",null,"二叉搜索树",-1),Jt=t("code",null,"1+",-1),Pt={style:{"text-align":"left"}},Qt=t("td",{style:{"text-align":"center"}},"426",-1),Ut={style:{"text-align":"left"}},Wt={href:"https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},Xt={style:{"text-align":"center"}},Yt={style:{"text-align":"left"}},Zt=t("code",null,"栈",-1),$t=t("code",null,"树",-1),te=t("code",null,"深度优先搜索",-1),ee=t("code",null,"4+",-1),ne={style:{"text-align":"left"}},se=t("td",{style:{"text-align":"center"}},"783",-1),oe={style:{"text-align":"left"}},ae={href:"https://leetcode.com/problems/minimum-distance-between-bst-nodes",target:"_blank",rel:"noopener noreferrer"},le={style:{"text-align":"center"}},ce={style:{"text-align":"left"}},re=t("code",null,"树",-1),ie=t("code",null,"深度优先搜索",-1),de=t("code",null,"广度优先搜索",-1),ue=t("code",null,"2+",-1),pe={style:{"text-align":"left"}};function _e(he,ke){const a=c("ExternalLinkIcon"),l=c("font"),o=c("RouterLink"),d=c("CodeTabs");return p(),_("div",null,[t("h1",m,[g,e(),t("a",b,[e("94. 二叉树的中序遍历"),n(a)])]),t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/stack.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[v]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[x]),_:1}),e(),n(o,{to:"/tag/binary-tree.html"},{default:s(()=>[w]),_:1}),e("  🔗 "),t("a",T,[O,n(a)])]),E,n(d,{id:"149",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:r,isActive:i})=>[e("递归")]),title1:s(({value:r,isActive:i})=>[e("迭代")]),tab0:s(({value:r,isActive:i})=>[N]),tab1:s(({value:r,isActive:i})=>[j]),_:1}),C,h(" prettier-ignore "),t("table",null,[I,t("tbody",null,[t("tr",null,[q,t("td",L,[t("a",M,[e("验证二叉搜索树"),n(a)])]),t("td",V,[n(o,{to:"/problem/0098.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(o,{to:"/tag/tree.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[R]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[z]),_:1}),e(),F]),t("td",G,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[H,t("td",K,[t("a",S,[e("二叉树的前序遍历"),n(a)])]),t("td",D,[n(o,{to:"/problem/0144.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",J,[n(o,{to:"/tag/stack.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[Q]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[U]),_:1}),e(),W]),t("td",X,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[Y,t("td",Z,[t("a",$,[e("二叉树的后序遍历"),n(a)])]),t("td",tt,[n(o,{to:"/problem/0145.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",et,[n(o,{to:"/tag/stack.html"},{default:s(()=>[nt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[st]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[ot]),_:1}),e(),at]),t("td",lt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[ct,t("td",rt,[t("a",it,[e("二叉搜索树迭代器"),n(a)])]),t("td",dt,[n(o,{to:"/problem/0173.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ut,[n(o,{to:"/tag/stack.html"},{default:s(()=>[pt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[_t]),_:1}),e(),n(o,{to:"/tag/design.html"},{default:s(()=>[ht]),_:1}),e(),kt]),t("td",ft,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[mt,t("td",gt,[t("a",bt,[e("二叉搜索树中第 K 小的元素"),n(a)])]),t("td",yt,[n(o,{to:"/problem/0230.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",vt,[n(o,{to:"/tag/tree.html"},{default:s(()=>[xt]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[wt]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[Tt]),_:1}),e(),Ot]),t("td",Et,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Nt,t("td",jt,[t("a",Ct,[e("最接近的二叉搜索树值 II"),n(a)])]),It,t("td",qt,[n(o,{to:"/tag/stack.html"},{default:s(()=>[Lt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[Vt]),_:1}),e(),At]),t("td",Bt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),t("tr",null,[Rt,t("td",zt,[t("a",Ft,[e("二叉搜索树中的中序后继"),n(a)])]),Gt,t("td",Ht,[n(o,{to:"/tag/tree.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[Dt]),_:1}),e(),Jt]),t("td",Pt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Qt,t("td",Ut,[t("a",Wt,[e("将二叉搜索树转化为排序的双向链表"),n(a)])]),t("td",Xt,[n(o,{to:"/problem/0426.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Yt,[n(o,{to:"/tag/stack.html"},{default:s(()=>[Zt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[$t]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[te]),_:1}),e(),ee]),t("td",ne,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[se,t("td",oe,[t("a",ae,[e("二叉搜索树节点最小距离"),n(a)])]),t("td",le,[n(o,{to:"/problem/0783.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ce,[n(o,{to:"/tag/tree.html"},{default:s(()=>[re]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[ie]),_:1}),e(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[de]),_:1}),e(),ue]),t("td",pe,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const me=u(f,[["render",_e],["__file","0094.html.vue"]]);export{me as default};
