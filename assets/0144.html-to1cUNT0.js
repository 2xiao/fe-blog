import{_ as u,r as l,o as d,c as h,a as t,b as e,d as n,w as s,f as k,e as _}from"./app-9CeBk-uV.js";const m={},f=t("h1",{id:"_144-二叉树的前序遍历",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_144-二叉树的前序遍历","aria-hidden":"true"},"#"),e(" 144. 二叉树的前序遍历")],-1),g=t("code",null,"栈",-1),b=t("code",null,"树",-1),v=t("code",null,"深度优先搜索",-1),y=t("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),N=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the preorder traversal of its nodes&#39; values</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3]</p><p>Output: [1,2,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回它节点值的 <strong>前序</strong> 遍历。</p><p><strong>进阶</strong>：递归算法很简单，你可以通过迭代算法完成吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>前序遍历是指，对于树中的任意节点来说，先打印这个节点，然后再打印它的左子树，最后打印它的右子树。而在访问左子树或者右子树的时候，按照同样的方式遍历，直到遍历完整棵树。因此整个遍历过程天然具有递归的性质，可以直接用递归函数来模拟这一过程。</p><ul><li>先将 <code>root</code> 节点的值加入答案</li><li>再递归调用 <code>preorderTraversal(root.left)</code> 来遍历 <code>root</code> 节点的左子树</li><li>最后递归调用 <code>preorderTraversal(root.right)</code> 来遍历 <code>root</code> 节点的右子树即可</li><li>递归终止的条件为碰到空节点</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为递归过程中栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>也可以用迭代的方式实现思路一的递归函数，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而迭代的时候需要显式地将这个栈模拟出来，其余的实现与细节都相同，具体可以参考下面的代码。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数。每一个节点恰好被遍历一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，为迭代过程中显式栈的开销，平均情况下为 <code>O(log⁡n)</code>，最坏情况下树呈现链状，为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"preorderTraversal"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"preorderTraversal"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"preorderTraversal"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("TreeNode"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"preorderTraversal"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("root "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" stack "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"["),e("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"while"),e(),t("span",{class:"token punctuation"},"("),e("stack"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" node "),t("span",{class:"token operator"},"="),e(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),e(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("right"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),e(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),e("node"),t("span",{class:"token punctuation"},"."),e("left"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"94",-1),L=t("td",{style:{"text-align":"left"}},"二叉树的中序遍历",-1),V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},B=t("code",null,"栈",-1),R=t("code",null,"树",-1),z=t("code",null,"深度优先搜索",-1),F=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"255",-1),J=t("td",{style:{"text-align":"left"}},"验证二叉搜索树的前序遍历序列 🔒",-1),M=t("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=t("code",null,"栈",-1),U=t("code",null,"树",-1),W=t("code",null,"二叉搜索树",-1),X=t("code",null,"4+",-1),Y=t("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/verify-preorder-sequence-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"589",-1),nt=t("td",{style:{"text-align":"left"}},"N 叉树的前序遍历",-1),st={style:{"text-align":"center"}},at={style:{"text-align":"left"}},ot=t("code",null,"栈",-1),lt=t("code",null,"树",-1),ct=t("code",null,"深度优先搜索",-1),rt=t("td",{style:{"text-align":"center"}},"🟢",-1),it={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},"2583",-1),ht=t("td",{style:{"text-align":"left"}},"二叉树中的第 K 大层和",-1),kt={style:{"text-align":"center"}},_t={style:{"text-align":"left"}},mt=t("code",null,"树",-1),ft=t("code",null,"广度优先搜索",-1),gt=t("code",null,"二叉树",-1),bt=t("code",null,"1+",-1),vt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},xt={href:"https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"};function Tt(Ot,Nt){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),p=l("CodeTabs");return d(),h("div",null,[f,t("p",null,[e("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/stack.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[v]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[w,n(o)]),e(),t("a",T,[O,n(o)])]),N,n(p,{id:"146",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:c,isActive:r})=>[e("递归")]),title1:s(({value:c,isActive:r})=>[e("迭代")]),tab0:s(({value:c,isActive:r})=>[q]),tab1:s(({value:c,isActive:r})=>[j]),_:1}),C,k(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[I,L,t("td",V,[n(a,{to:"/problem/0094.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(a,{to:"/tag/stack.html"},{default:s(()=>[B]),_:1}),e(),n(a,{to:"/tag/tree.html"},{default:s(()=>[R]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[z]),_:1}),e(),F]),G,t("td",K,[t("a",S,[e("🀄️"),n(o)]),e(),t("a",D,[e("🔗"),n(o)])])]),t("tr",null,[H,J,M,t("td",P,[n(a,{to:"/tag/stack.html"},{default:s(()=>[Q]),_:1}),e(),n(a,{to:"/tag/tree.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[W]),_:1}),e(),X]),Y,t("td",Z,[t("a",$,[e("🀄️"),n(o)]),e(),t("a",tt,[e("🔗"),n(o)])])]),t("tr",null,[et,nt,t("td",st,[n(a,{to:"/problem/0589.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",at,[n(a,{to:"/tag/stack.html"},{default:s(()=>[ot]),_:1}),e(),n(a,{to:"/tag/tree.html"},{default:s(()=>[lt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ct]),_:1})]),rt,t("td",it,[t("a",pt,[e("🀄️"),n(o)]),e(),t("a",ut,[e("🔗"),n(o)])])]),t("tr",null,[dt,ht,t("td",kt,[n(a,{to:"/problem/2583.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",_t,[n(a,{to:"/tag/tree.html"},{default:s(()=>[mt]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[gt]),_:1}),e(),bt]),vt,t("td",yt,[t("a",xt,[e("🀄️"),n(o)]),e(),t("a",wt,[e("🔗"),n(o)])])])])])])}const jt=u(m,[["render",Tt],["__file","0144.html.vue"]]);export{jt as default};
