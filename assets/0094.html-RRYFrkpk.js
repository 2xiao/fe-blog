import{_ as u,r as l,o as p,c as _,a as t,b as e,d as n,w as s,f as h,e as k}from"./app-BBnmDgJV.js";const m={},g=t("h1",{id:"_94-二叉树的中序遍历",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_94-二叉树的中序遍历","aria-hidden":"true"},"#"),e(" 94. 二叉树的中序遍历")],-1),f=t("code",null,"栈",-1),b=t("code",null,"树",-1),y=t("code",null,"深度优先搜索",-1),v=t("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),N=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes&#39; values</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3]</p><p>Output: [1,3,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>中序</strong> 遍历。</p><p><strong>进阶</strong>：递归算法很简单，你可以通过迭代算法完成吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>中序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它本身，最后打印它的右子树。而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，可以直接用递归函数来模拟这一过程。</p><ul><li>先递归调用 <code>preorderTraversal(root.left)</code> 来遍历 <code>root</code> 节点的左子树</li><li>再将 <code>root</code> 节点的值加入答案</li><li>最后递归调用 <code>preorderTraversal(root.right)</code> 来遍历 <code>root</code> 节点的右子树即可</li><li>递归终止的条件为碰到空节点</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为递归过程中栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。</p><p>中序遍历是左中右，先访问的是二叉树顶部的节点，然后一层一层向下访问，直到到达树左面的最底部，再开始处理节点（也就是在把节点的数值放进 res 数组中），这就造成了处理顺序和访问顺序是不一致的。那么在使用迭代法写中序遍历，就需要借用指针的遍历来帮助访问节点，栈则用来处理节点上的元素。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为迭代过程中显式栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
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
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),I=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"98",-1),L=t("td",{style:{"text-align":"left"}},"验证二叉搜索树",-1),V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},B=t("code",null,"树",-1),R=t("code",null,"深度优先搜索",-1),z=t("code",null,"二叉搜索树",-1),F=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"144",-1),J=t("td",{style:{"text-align":"left"}},"二叉树的前序遍历",-1),M={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"栈",-1),U=t("code",null,"树",-1),W=t("code",null,"深度优先搜索",-1),X=t("code",null,"1+",-1),Y=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"145",-1),nt=t("td",{style:{"text-align":"left"}},"二叉树的后序遍历",-1),st={style:{"text-align":"center"}},ot={style:{"text-align":"left"}},at=t("code",null,"栈",-1),lt=t("code",null,"树",-1),ct=t("code",null,"深度优先搜索",-1),rt=t("code",null,"1+",-1),it=t("td",{style:{"text-align":"center"}},"🟢",-1),dt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"173",-1),ht=t("td",{style:{"text-align":"left"}},"二叉搜索树迭代器",-1),kt={style:{"text-align":"center"}},mt={style:{"text-align":"left"}},gt=t("code",null,"栈",-1),ft=t("code",null,"树",-1),bt=t("code",null,"设计",-1),yt=t("code",null,"3+",-1),vt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/binary-search-tree-iterator",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/binary-search-tree-iterator",target:"_blank",rel:"noopener noreferrer"},Ot=t("td",{style:{"text-align":"center"}},"230",-1),Nt=t("td",{style:{"text-align":"left"}},"二叉搜索树中第 K 小的元素",-1),jt={style:{"text-align":"center"}},Ct={style:{"text-align":"left"}},Et=t("code",null,"树",-1),It=t("code",null,"深度优先搜索",-1),qt=t("code",null,"二叉搜索树",-1),Lt=t("code",null,"1+",-1),Vt=t("td",{style:{"text-align":"center"}},"🟠",-1),At={style:{"text-align":"center"}},Bt={href:"https://leetcode.cn/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst",target:"_blank",rel:"noopener noreferrer"},zt=t("td",{style:{"text-align":"center"}},"272",-1),Ft=t("td",{style:{"text-align":"left"}},"最接近的二叉搜索树值 II 🔒",-1),Gt=t("td",{style:{"text-align":"center"}},null,-1),Kt={style:{"text-align":"left"}},St=t("code",null,"栈",-1),Dt=t("code",null,"树",-1),Ht=t("code",null,"深度优先搜索",-1),Jt=t("code",null,"4+",-1),Mt=t("td",{style:{"text-align":"center"}},"🔴",-1),Pt={style:{"text-align":"center"}},Qt={href:"https://leetcode.cn/problems/closest-binary-search-tree-value-ii",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://leetcode.com/problems/closest-binary-search-tree-value-ii",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",{style:{"text-align":"center"}},"285",-1),Xt=t("td",{style:{"text-align":"left"}},"二叉搜索树中的中序后继 🔒",-1),Yt=t("td",{style:{"text-align":"center"}},null,-1),Zt={style:{"text-align":"left"}},$t=t("code",null,"树",-1),te=t("code",null,"深度优先搜索",-1),ee=t("code",null,"二叉搜索树",-1),ne=t("code",null,"1+",-1),se=t("td",{style:{"text-align":"center"}},"🟠",-1),oe={style:{"text-align":"center"}},ae={href:"https://leetcode.cn/problems/inorder-successor-in-bst",target:"_blank",rel:"noopener noreferrer"},le={href:"https://leetcode.com/problems/inorder-successor-in-bst",target:"_blank",rel:"noopener noreferrer"},ce=t("td",{style:{"text-align":"center"}},"426",-1),re=t("td",{style:{"text-align":"left"}},"将二叉搜索树转化为排序的双向链表 🔒",-1),ie={style:{"text-align":"center"}},de={style:{"text-align":"left"}},ue=t("code",null,"栈",-1),pe=t("code",null,"树",-1),_e=t("code",null,"深度优先搜索",-1),he=t("code",null,"4+",-1),ke=t("td",{style:{"text-align":"center"}},"🟠",-1),me={style:{"text-align":"center"}},ge={href:"https://leetcode.cn/problems/convert-binary-search-tree-to-sorted-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list",target:"_blank",rel:"noopener noreferrer"},be=t("td",{style:{"text-align":"center"}},"783",-1),ye=t("td",{style:{"text-align":"left"}},"二叉搜索树节点最小距离",-1),ve={style:{"text-align":"center"}},xe={style:{"text-align":"left"}},we=t("code",null,"树",-1),Te=t("code",null,"深度优先搜索",-1),Oe=t("code",null,"广度优先搜索",-1),Ne=t("code",null,"2+",-1),je=t("td",{style:{"text-align":"center"}},"🟢",-1),Ce={style:{"text-align":"center"}},Ee={href:"https://leetcode.cn/problems/minimum-distance-between-bst-nodes",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://leetcode.com/problems/minimum-distance-between-bst-nodes",target:"_blank",rel:"noopener noreferrer"};function qe(Le,Ve){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),d=l("CodeTabs");return p(),_("div",null,[g,t("p",null,[e("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/stack.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[y]),_:1}),e(),n(o,{to:"/tag/binary-tree.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),t("a",x,[w,n(a)]),e(),t("a",T,[O,n(a)])]),N,n(d,{id:"149",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:c,isActive:r})=>[e("递归")]),title1:s(({value:c,isActive:r})=>[e("迭代")]),tab0:s(({value:c,isActive:r})=>[j]),tab1:s(({value:c,isActive:r})=>[C]),_:1}),E,h(" prettier-ignore "),t("table",null,[I,t("tbody",null,[t("tr",null,[q,L,t("td",V,[n(o,{to:"/problem/0098.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(o,{to:"/tag/tree.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[R]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[z]),_:1}),e(),F]),G,t("td",K,[t("a",S,[e("🀄️"),n(a)]),e(),t("a",D,[e("🔗"),n(a)])])]),t("tr",null,[H,J,t("td",M,[n(o,{to:"/problem/0144.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",P,[n(o,{to:"/tag/stack.html"},{default:s(()=>[Q]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[U]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[W]),_:1}),e(),X]),Y,t("td",Z,[t("a",$,[e("🀄️"),n(a)]),e(),t("a",tt,[e("🔗"),n(a)])])]),t("tr",null,[et,nt,t("td",st,[n(o,{to:"/problem/0145.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ot,[n(o,{to:"/tag/stack.html"},{default:s(()=>[at]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[lt]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[ct]),_:1}),e(),rt]),it,t("td",dt,[t("a",ut,[e("🀄️"),n(a)]),e(),t("a",pt,[e("🔗"),n(a)])])]),t("tr",null,[_t,ht,t("td",kt,[n(o,{to:"/problem/0173.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",mt,[n(o,{to:"/tag/stack.html"},{default:s(()=>[gt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/design.html"},{default:s(()=>[bt]),_:1}),e(),yt]),vt,t("td",xt,[t("a",wt,[e("🀄️"),n(a)]),e(),t("a",Tt,[e("🔗"),n(a)])])]),t("tr",null,[Ot,Nt,t("td",jt,[n(o,{to:"/problem/0230.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Ct,[n(o,{to:"/tag/tree.html"},{default:s(()=>[Et]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[It]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[qt]),_:1}),e(),Lt]),Vt,t("td",At,[t("a",Bt,[e("🀄️"),n(a)]),e(),t("a",Rt,[e("🔗"),n(a)])])]),t("tr",null,[zt,Ft,Gt,t("td",Kt,[n(o,{to:"/tag/stack.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[Dt]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[Ht]),_:1}),e(),Jt]),Mt,t("td",Pt,[t("a",Qt,[e("🀄️"),n(a)]),e(),t("a",Ut,[e("🔗"),n(a)])])]),t("tr",null,[Wt,Xt,Yt,t("td",Zt,[n(o,{to:"/tag/tree.html"},{default:s(()=>[$t]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[te]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[ee]),_:1}),e(),ne]),se,t("td",oe,[t("a",ae,[e("🀄️"),n(a)]),e(),t("a",le,[e("🔗"),n(a)])])]),t("tr",null,[ce,re,t("td",ie,[n(o,{to:"/problem/0426.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",de,[n(o,{to:"/tag/stack.html"},{default:s(()=>[ue]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[pe]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[_e]),_:1}),e(),he]),ke,t("td",me,[t("a",ge,[e("🀄️"),n(a)]),e(),t("a",fe,[e("🔗"),n(a)])])]),t("tr",null,[be,ye,t("td",ve,[n(o,{to:"/problem/0783.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",xe,[n(o,{to:"/tag/tree.html"},{default:s(()=>[we]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[Te]),_:1}),e(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Oe]),_:1}),e(),Ne]),je,t("td",Ce,[t("a",Ee,[e("🀄️"),n(a)]),e(),t("a",Ie,[e("🔗"),n(a)])])])])])])}const Be=u(m,[["render",qe],["__file","0094.html.vue"]]);export{Be as default};
