import{_ as u,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as h,e as _}from"./app-totCBmv-.js";const m={},f=t("h1",{id:"_145-二叉树的后序遍历",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_145-二叉树的后序遍历","aria-hidden":"true"},"#"),n(" 145. 二叉树的后序遍历")],-1),g=t("code",null,"栈",-1),b=t("code",null,"树",-1),v=t("code",null,"深度优先搜索",-1),y=t("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),N=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the postorder traversal of its nodes&#39; values</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3]</p><p>Output: [3,2,1]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>后序</strong> 遍历。</p><p><strong>进阶</strong>：递归算法很简单，你可以通过迭代算法完成吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>后序遍历是指，对于树中的任意节点来说，先打印它的左子树，然后再打印它的右子树，最后打印这个节点本身。而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，可以直接用递归函数来模拟这一过程。</p><ul><li>先递归调用 <code>preorderTraversal(root.left)</code> 来遍历 <code>root</code> 节点的左子树</li><li>再递归调用 <code>preorderTraversal(root.right)</code> 来遍历 <code>root</code> 节点的右子树</li><li>最后将 <code>root</code> 节点的值加入答案即可</li><li>递归终止的条件为碰到空节点</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为递归过程中栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。</p><p>先序遍历是中左右，后续遍历是左右中，那么我们只需要调整一下先序遍历的代码顺序，就变成中右左的遍历顺序，然后再反转 res 数组，输出的结果顺序就是左右中了。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为迭代过程中显式栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorderTraversal"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("root "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"postorderTraversal"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"postorderTraversal"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorderTraversal"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("root "),t("span",{class:"token operator"},"=="),n(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" stack "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("stack"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" node "),t("span",{class:"token operator"},"="),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"94",-1),L=t("td",{style:{"text-align":"left"}},"二叉树的中序遍历",-1),V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},B=t("code",null,"栈",-1),R=t("code",null,"树",-1),z=t("code",null,"深度优先搜索",-1),F=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"590",-1),K=t("td",{style:{"text-align":"left"}},"N 叉树的后序遍历",-1),M={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"栈",-1),U=t("code",null,"树",-1),W=t("code",null,"深度优先搜索",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"2477",-1),nt=t("td",{style:{"text-align":"left"}},"到达首都的最少油耗",-1),et=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},at=t("code",null,"树",-1),ot=t("code",null,"深度优先搜索",-1),ct=t("code",null,"广度优先搜索",-1),lt=t("code",null,"1+",-1),rt=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/minimum-fuel-cost-to-report-to-the-capital",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital",target:"_blank",rel:"noopener noreferrer"};function dt(kt,ht){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[f,t("p",null,[n("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[v]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",x,[w,e(o)]),n(),t("a",T,[O,e(o)])]),N,e(p,{id:"149",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:l,isActive:r})=>[n("递归")]),title1:s(({value:l,isActive:r})=>[n("迭代")]),tab0:s(({value:l,isActive:r})=>[j]),tab1:s(({value:l,isActive:r})=>[C]),_:1}),E,h(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[I,L,t("td",V,[e(a,{to:"/problem/0094.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(a,{to:"/tag/stack.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[R]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[z]),_:1}),n(),F]),G,t("td",S,[t("a",D,[n("🀄️"),e(o)]),n(),t("a",H,[n("🔗"),e(o)])])]),t("tr",null,[J,K,t("td",M,[e(a,{to:"/problem/0590.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",P,[e(a,{to:"/tag/stack.html"},{default:s(()=>[Q]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[U]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[W]),_:1})]),X,t("td",Y,[t("a",Z,[n("🀄️"),e(o)]),n(),t("a",$,[n("🔗"),e(o)])])]),t("tr",null,[tt,nt,et,t("td",st,[e(a,{to:"/tag/tree.html"},{default:s(()=>[at]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[ct]),_:1}),n(),lt]),rt,t("td",it,[t("a",pt,[n("🀄️"),e(o)]),n(),t("a",ut,[n("🔗"),e(o)])])])])])])}const mt=u(m,[["render",dt],["__file","0145.html.vue"]]);export{mt as default};
