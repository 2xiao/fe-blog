import{_ as d,r as o,o as k,c as m,a as n,b as s,d as t,w as a,e as i}from"./app-r0ql_Osa.js";const h={},b=n("h1",{id:"_55-ii-平衡二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_55-ii-平衡二叉树","aria-hidden":"true"},"#"),s(" 55-II. 平衡二叉树")],-1),g=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉树",-1),_={href:"https://leetcode.cn/problems/ping-heng-er-cha-shu-lcof",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过 1，那么它就是一棵平衡二叉树。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> root = [3,9,20,null,null,15,7]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 如下图</p></blockquote><figure><img src="https://pic.leetcode.cn/1695102431-vbmWJn-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例 2:</strong></p><blockquote><p>输入：root = [1,2,2,3,3,null,null,4,4]</p><p>输出：false</p><p>解释：如下图</p></blockquote><figure><img src="https://pic.leetcode.cn/1695102434-WlaxCo-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>提示：</strong></p><ul><li><code>0 &lt;= 树的结点个数 &lt;= 10000</code></li></ul>',10),x={class:"hint-container warning"},H=n("p",{class:"hint-container-title"},"注意",-1),B=i('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-自上向下递归" tabindex="-1"><a class="header-anchor" href="#思路一-自上向下递归" aria-hidden="true">#</a> 思路一：自上向下递归</h3><p>通过递归的方式，对每个节点进行判断，确保它的左右子树高度差不超过 1，并逐层向下判断:</p><ol><li>对于每个节点，计算其左子树和右子树的高度差。</li><li>如果某个节点的左右子树的高度差超过 1，则说明以该节点为根的子树不是平衡的，直接返回 <code>false</code>。</li><li>如果该节点是平衡的，继续递归检查其左子树和右子树是否平衡。</li><li>递归的终止条件是遍历到叶子节点，叶子节点是平衡的。</li><li>如果整棵树的所有节点都满足平衡条件，返回 <code>true</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>， <ul><li><strong><code>getHeight</code> 函数</strong>：每次调用 <code>getHeight</code> 会遍历树的节点以计算高度。在 <code>isBalanced</code> 函数中，对每个节点都调用了一次 <code>getHeight</code>。因此，对于一棵包含 <code>n</code> 个节点的树，<code>getHeight</code> 的时间复杂度是 <code>O(n)</code>。</li><li><strong><code>isBalanced</code> 函数</strong>：在最坏情况下，每个节点都会调用一次 <code>getHeight</code>，因此总的时间复杂度是 <code>O(n^2)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于递归的深度等于树的高度，在最坏情况下（例如完全不平衡的树），树的高度可能是 <code>n</code>，因此空间复杂度为 <code>O(n)</code>。在平衡树的情况下，空间复杂度是 <code>O(log n)</code>。</li></ul><hr><h3 id="思路二-自底向上递归" tabindex="-1"><a class="header-anchor" href="#思路二-自底向上递归" aria-hidden="true">#</a> 思路二：自底向上递归</h3><p>为了优化时间复杂度，可以使用自底向上的方法，在计算树的高度时同时检查树的平衡性，这样可以将时间复杂度降低到 <code>O(n)</code>。</p><ol><li><strong>单次遍历</strong>：<code>checkBalance</code> 函数在检查每个节点的高度时，直接判断其是否平衡，避免了重复遍历。</li><li><strong>返回值</strong>：如果发现不平衡，返回 <code>-1</code>，否则返回树的高度。这种方式使得可以在发现不平衡时立即停止后续的检查。</li></ol><h3 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，每个节点只遍历一次。</li><li><strong>空间复杂度</strong>： <code>O(h)</code>，其中 <code>h</code> 是树的高度（递归调用栈的深度），在最坏情况下为 <code>O(n)</code>，在平衡树情况下为 <code>O(log n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',13),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isBalanced"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 空树是平衡的"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 计算左右子树的高度差"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" diff "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 检查当前节点是否平衡，以及其左右子树是否平衡"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" diff "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isBalanced"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"isBalanced"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 计算树的高度"),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getHeight"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isBalanced"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 检查平衡性和计算高度"),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"checkBalance"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 空树高度为0"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"const"),s(" leftHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("leftHeight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 左子树不平衡"),s(`

	`),n("span",{class:"token keyword"},"const"),s(" rightHeight "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rightHeight "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 右子树不平衡"),s(`

	`),n("span",{class:"token comment"},"// 检查当前节点的平衡性"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("leftHeight "),n("span",{class:"token operator"},"-"),s(" rightHeight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 不平衡"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 返回当前树的高度"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("leftHeight"),n("span",{class:"token punctuation"},","),s(" rightHeight"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(N,L){const p=o("font"),e=o("RouterLink"),u=o("ExternalLinkIcon"),r=o("CodeTabs");return k(),m("div",null,[b,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",_,[y,t(u)])]),w,n("div",x,[H,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0110.html"},{default:a(()=>[s("第 110 题")]),_:1}),s(" 相同。")])]),B,t(r,{id:"161",data:[{id:"自上向下递归"},{id:"自底向上递归"}]},{title0:a(({value:c,isActive:l})=>[s("自上向下递归")]),title1:a(({value:c,isActive:l})=>[s("自底向上递归")]),tab0:a(({value:c,isActive:l})=>[O]),tab1:a(({value:c,isActive:l})=>[j]),_:1})])}const q=d(h,[["render",C],["__file","jz_offer_55_2.html.vue"]]);export{q as default};
