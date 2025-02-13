import{_ as d,r as o,o as k,c as h,a as n,b as s,d as t,w as a,e as p}from"./app-MXSjQbID.js";const m={},_=n("h1",{id:"_55-二叉树的深度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_55-二叉树的深度","aria-hidden":"true"},"#"),s(" 55. 二叉树的深度")],-1),b=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),w={href:"https://leetcode.cn/problems/er-cha-shu-de-shen-du-lcof",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个二叉树 <code>root</code> ，返回其最大深度。</p><p>二叉树的 <strong>最大深度</strong> 是指从根节点到最远叶子节点的最长路径上的节点数。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：root = [3,9,20,null,null,15,7]</p><p>输出：3</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：root = [1,null,2]</p><p>输出：2</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数量在 <code>[0, 10^4]</code> 区间内。</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul>',10),j={class:"hint-container warning"},D=n("p",{class:"hint-container-title"},"注意",-1),N=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>只需求出根节点的左孩子的最大高度和根节点右孩子的最大高度，取出两者的最大值再加一即为根节点的最大高度。</p><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><p>深度优先搜索（DFS）一颗二叉树，在 DFS 中，递归返回的时候，我们需要进行回溯（backtrack）。<code>depth</code> 变量用来记录当前节点的深度，每次进入一个子节点时，<code>depth</code> 增加，每次返回到父节点时，<code>depth</code> 需要减少。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',7),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("TreeNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"root"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"calculateDepth"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"calculateDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"calculateDepth"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"calculateDepth"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" depth "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"traverse"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("root "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),s(`

		depth`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		res `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" depth"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},"."),s("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		depth`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token function"},"traverse"),n("span",{class:"token punctuation"},"("),s("root"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function q(A,E){const r=o("font"),e=o("RouterLink"),i=o("ExternalLinkIcon"),u=o("CodeTabs");return k(),h("div",null,[_,n("p",null,[s("🟢 "),t(r,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",w,[y,t(i)])]),x,n("div",j,[D,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0104.html"},{default:a(()=>[s("第 104 题")]),_:1}),s(" 相同。")])]),N,t(u,{id:"79",data:[{id:"递归"},{id:"回溯"}]},{title0:a(({value:c,isActive:l})=>[s("递归")]),title1:a(({value:c,isActive:l})=>[s("回溯")]),tab0:a(({value:c,isActive:l})=>[C]),tab1:a(({value:c,isActive:l})=>[L]),_:1})])}const V=d(m,[["render",q],["__file","jz_offer_55_1.html.vue"]]);export{V as default};
