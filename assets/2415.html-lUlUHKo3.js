import{_ as u,r as l,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as m}from"./app-3dvbhwow.js";const g={},b=n("h1",{id:"_2415-反转二叉树的奇数层",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2415-反转二叉树的奇数层","aria-hidden":"true"},"#"),t(" 2415. 反转二叉树的奇数层")],-1),v=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),_=n("code",null,"广度优先搜索",-1),y=n("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/reverse-odd-levels-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/reverse-odd-levels-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),T=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a <strong>perfect</strong> binary tree, reverse the node values at each <strong>odd</strong> level of the tree.</p><ul><li>For example, suppose the node values at level 3 are <code>[2,1,3,4,7,11,29,18]</code>, then it should become <code>[18,29,11,7,4,3,1,2]</code>.</li></ul><p>Return <em>the root of the reversed tree</em>.</p><p>A binary tree is <strong>perfect</strong> if all parent nodes have two children and all leaves are on the same level.</p><p>The <strong>level</strong> of a node is the number of edges along the path between it and the root node.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/07/28/first_case1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,3,5,8,13,21,34]</p><p>Output: [2,5,3,8,13,21,34]</p><p>Explanation:</p><p>The tree has only one odd level.</p><p>The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/07/28/second_case3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [7,13,11]</p><p>Output: [7,11,13]</p><p>Explanation:</p><p>The nodes at level 1 are 13, 11, which are reversed and become 11, 13.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]</p><p>Output: [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]</p><p>Explanation:</p><p>The odd levels have non-zero values.</p><p>The nodes at level 1 were 1, 2, and are 2, 1 after the reversal.</p><p>The nodes at level 3 were 1, 1, 1, 1, 2, 2, 2, 2, and are 2, 2, 2, 2, 1, 1, 1, 1 after the reversal.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 214]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^5</code></li><li><code>root</code> is a <strong>perfect</strong> binary tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 <strong>完美</strong> 二叉树的根节点 <code>root</code> ，请你反转这棵树中每个 <strong>奇数</strong> 层的节点值。</p><ul><li>例如，假设第 3 层的节点值是 <code>[2,1,3,4,7,11,29,18]</code> ，那么反转后它应该变成 <code>[18,29,11,7,4,3,1,2]</code> 。</li></ul><p>反转后，返回树的根节点。</p><p><strong>完美</strong> 二叉树需满足：二叉树的所有父节点都有两个子节点，且所有叶子节点都在同一层。</p><p>节点的 <strong>层数</strong> 等于该节点到根节点之间的边数。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/07/28/first_case1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [2,3,5,8,13,21,34]</p><p><strong>输出：</strong>[2,5,3,8,13,21,34]</p><p><strong>解释：</strong></p><p>这棵树只有一个奇数层。</p><p>在第 1 层的节点分别是 3、5 ，反转后为 5、3 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/07/28/second_case3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [7,13,11]</p><p><strong>输出：</strong>[7,11,13]</p><p><strong>解释：</strong></p><p>在第 1 层的节点分别是 13、11 ，反转后为 11、13 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]</p><p><strong>输出：</strong>[0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]</p><p><strong>解释：</strong> 奇数层由非零值组成。</p><p>在第 1 层的节点分别是 1、2 ，反转后为 2、1 。</p><p>在第 3 层的节点分别是 1、1、1、1、2、2、2、2 ，反转后为 2、2、2、2、1、1、1、1 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中的节点数目在范围 <code>[1, 214]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 10^5</code></li><li><code>root</code> 是一棵 <strong>完美</strong> 二叉树</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-广度优先搜索-bfs" tabindex="-1"><a class="header-anchor" href="#思路一-广度优先搜索-bfs" aria-hidden="true">#</a> 思路一：广度优先搜索（BFS）</h3><ol><li>使用队列进行层序遍历。</li><li>在遍历的过程中： <ul><li>如果是奇数层，反转交换当前层的节点值。</li><li>将当前层节点的子节点插入队列。</li><li>将当前层的节点出队。</li></ul></li><li>返回修改后的树。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>每个节点访问一次，时间复杂度为 <code>O(n)</code>。</li><li>反转每一奇数层的值，时间复杂度为 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，队列的最大长度为某一层的节点数，最坏情况下为 <code>O(n)</code>。</li></ul><hr><h3 id="思路二-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#思路二-深度优先搜索-dfs" aria-hidden="true">#</a> 思路二：深度优先搜索（DFS）</h3><ol><li>通过递归遍历树。</li><li>当到达奇数层时，将左子树和右子树对应位置的值交换。</li><li>对于偶数层，不进行任何操作。</li><li>递归地同时遍历左子树和右子树。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点访问一次。</li><li><strong>空间复杂度</strong>：<code>O(log n)</code>，递归栈的最大深度为树的高度，最坏情况下为<code>O(log n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',43),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"reverseOddLevels"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" root"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"let"),t(" queue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("root"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 初始化队列"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" level "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 当前层数"),t(`

	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token comment"},"// 遍历当前层"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 如果当前是奇数层，交换两个节点的值"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("level "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(" i "),n("span",{class:"token operator"},"<"),t(" n "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"let"),t(" temp "),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},";"),t(`
				queue`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"-"),t(" i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},";"),t(`
				queue`),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"-"),t(" i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`

			`),n("span",{class:"token comment"},"// 下一层节点入队"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("queue"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		queue `),n("span",{class:"token operator"},"="),t(" queue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		level`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 进入下一层"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" root"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"reverseOddLevels"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"dfs"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("left"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},","),t(" level")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("left "),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token operator"},"!"),t("right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token comment"},"// 如果当前是奇数层，交换两个节点的值"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("level "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"let"),t(" temp "),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},";"),t(`
			left`),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"="),t(" right"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},";"),t(`
			right`),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`

		`),n("span",{class:"token comment"},"// 递归下一层"),t(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" level "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 从第 1 层开始（根节点为第 0 层）"),t(`
	`),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},","),t(" root"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" root"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),F=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"226",-1),S=n("td",{style:{"text-align":"left"}},"翻转二叉树",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},z=n("code",null,"树",-1),A=n("code",null,"深度优先搜索",-1),I=n("code",null,"广度优先搜索",-1),V=n("code",null,"1+",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),r=l("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,s(o)]),t(),n("a",q,[O,s(o)])]),T,s(r,{id:"335",data:[{id:"广度优先搜索（BFS）"},{id:"深度优先搜索（DFS）"}]},{title0:e(({value:c,isActive:p})=>[t("广度优先搜索（BFS）")]),title1:e(({value:c,isActive:p})=>[t("深度优先搜索（DFS）")]),tab0:e(({value:c,isActive:p})=>[E]),tab1:e(({value:c,isActive:p})=>[N]),_:1}),C,h(" prettier-ignore "),n("table",null,[F,n("tbody",null,[n("tr",null,[L,S,n("td",j,[s(a,{to:"/problem/0226.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",B,[s(a,{to:"/tag/tree.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[I]),_:1}),t(),V]),D,n("td",R,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",M,[t("🔗"),s(o)])])])])])])}const Q=u(g,[["render",H],["__file","2415.html.vue"]]);export{Q as default};
