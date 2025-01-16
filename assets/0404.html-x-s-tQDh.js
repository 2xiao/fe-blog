import{_ as r,r as o,o as d,c as k,a as n,b as s,d as a,w as t,e as m}from"./app-KDJRKGep.js";const h={},f=n("h1",{id:"_404-左叶子之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_404-左叶子之和","aria-hidden":"true"},"#"),s(" 404. 左叶子之和")],-1),b=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),g=n("code",null,"广度优先搜索",-1),_=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/sum-of-left-leaves",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/sum-of-left-leaves",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),L=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the sum of all left leaves.</em></p><p>A <strong>leaf</strong> is a node with no children. A <strong>left leaf</strong> is a leaf that is the left child of another node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: 24</p><p>Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定二叉树的根节点 <code>root</code> ，返回所有左叶子之和。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> root = [3,9,20,null,null,15,7]</p><p><strong>输出:</strong> 24</p><p><strong>解释:</strong> 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> root = [1]</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>提示:</strong></p><ul><li>节点数在 <code>[1, 1000]</code> 范围内</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><ol><li><strong>当前节点</strong>： <ul><li>判断其左子节点是否是 <strong>左叶子节点</strong>。 <ul><li>如果是，则将左子节点的值加入到结果中。</li></ul></li></ul></li><li><strong>递归向下</strong>： <ul><li>分别对当前节点的左子树和右子树进行递归操作。</li></ul></li><li><strong>返回结果</strong>：将所有左叶子节点的值累加并返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点遍历一次，<code>n</code> 是树中的节点总数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，取决于递归调用栈的深度，最坏情况下是 <code>O(n)</code>（链状树）。</li></ul><hr><h3 id="思路二-迭代-bfs" tabindex="-1"><a class="header-anchor" href="#思路二-迭代-bfs" aria-hidden="true">#</a> 思路二：迭代（BFS）</h3><ol><li>使用队列进行 <strong>层序遍历</strong>。</li><li>遍历过程中： <ul><li>如果当前节点的左子节点是 <strong>左叶子</strong>，将其值加入结果中。</li><li>将左右子节点继续加入队列，继续遍历。</li></ul></li><li>返回累加的结果。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点遍历一次，<code>n</code> 是树中的节点总数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，取决于队列的最大长度，最坏情况下是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',30),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"sumOfLeftLeaves"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 判断左子节点是否是左叶子节点"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sum `),n("span",{class:"token operator"},"+="),s(" root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 递归左右子树"),s(`
	sum `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"sumOfLeftLeaves"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	sum `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"sumOfLeftLeaves"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"sumOfLeftLeaves"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" queue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("queue"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 检查左子节点是否是左叶子"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("left "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			sum `),n("span",{class:"token operator"},"+="),s(" node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},"."),s("val"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 继续遍历左右子树"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),s(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function N(E,T){const u=o("font"),e=o("RouterLink"),i=o("ExternalLinkIcon"),p=o("CodeTabs");return d(),k("div",null,[f,n("p",null,[s("🟢 "),a(u,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,a(i)]),s(),n("a",x,[q,a(i)])]),L,a(p,{id:"217",data:[{id:"递归"},{id:"迭代（BFS）"}]},{title0:t(({value:l,isActive:c})=>[s("递归")]),title1:t(({value:l,isActive:c})=>[s("迭代（BFS）")]),tab0:t(({value:l,isActive:c})=>[O]),tab1:t(({value:l,isActive:c})=>[j]),_:1})])}const B=r(h,[["render",N],["__file","0404.html.vue"]]);export{B as default};
