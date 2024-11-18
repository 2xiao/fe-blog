import{_ as d,r as l,o as h,c as k,a as t,b as e,d as n,w as s,f as m,e as i}from"./app-9Xw5divW.js";const _={},f=t("h1",{id:"_559-n-叉树的最大深度",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_559-n-叉树的最大深度","aria-hidden":"true"},"#"),e(" 559. N 叉树的最大深度")],-1),b=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),y=t("code",null,"广度优先搜索",-1),v={href:"https://leetcode.cn/problems/maximum-depth-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximum-depth-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},N=t("code",null,"LeetCode",-1),C=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a n-ary tree, find its maximum depth.</p><p>The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p><p><em>Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,3,2,4,null,5,6]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The total number of nodes is in the range <code>[0, 10^4]</code>.</li><li>The depth of the n-ary tree is less than or equal to <code>1000</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 N 叉树，找到其最大深度。</p><p>最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。</p><p>N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',17),T=i('<h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>只需求出根节点的每个子树的最大高度，取出其中的最大值再加一即为根节点的最大高度。</p><hr><h3 id="思路二-回溯" tabindex="-1"><a class="header-anchor" href="#思路二-回溯" aria-hidden="true">#</a> 思路二：回溯</h3><p>深度优先搜索（DFS）一颗 N 叉树，在 DFS 中，递归返回的时候，我们需要进行回溯（backtrack）。<code>depth</code> 变量用来记录当前节点的深度，每次进入一个子节点时，<code>depth</code> 增加，每次返回到父节点时，<code>depth</code> 需要减少。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',6),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),e("root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" max "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token keyword"},"of"),e(" root"),t("span",{class:"token punctuation"},"."),e("children"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		max `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("max"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token function"},"maxDepth"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" max "),t("span",{class:"token operator"},"+"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"root"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"maxDepth"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" depth "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" res "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token function-variable function"},"traverse"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),e("root"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";"),e(`
		depth`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),e(`
		res `),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("depth"),t("span",{class:"token punctuation"},","),e(" res"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token keyword"},"of"),e(" root"),t("span",{class:"token punctuation"},"."),e("children"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
			`),t("span",{class:"token function"},"traverse"),t("span",{class:"token punctuation"},"("),e("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		`),t("span",{class:"token punctuation"},"}"),e(`
		depth`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token function"},"traverse"),t("span",{class:"token punctuation"},"("),e("root"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" res"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),q=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),D=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"104",-1),V=t("td",{style:{"text-align":"left"}},"二叉树的最大深度",-1),A={style:{"text-align":"center"}},I={style:{"text-align":"left"}},S=t("code",null,"树",-1),z=t("code",null,"深度优先搜索",-1),B=t("code",null,"广度优先搜索",-1),F=t("code",null,"1+",-1),M=t("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2039",-1),J=t("td",{style:{"text-align":"left"}},"网络空闲的时刻",-1),K=t("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=t("code",null,"广度优先搜索",-1),U=t("code",null,"图",-1),W=t("code",null,"数组",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/the-time-when-the-network-becomes-idle",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/the-time-when-the-network-becomes-idle",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"3249",-1),et=t("td",{style:{"text-align":"left"}},"统计好节点的数目",-1),nt=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},at=t("code",null,"树",-1),ot=t("code",null,"深度优先搜索",-1),lt=t("td",{style:{"text-align":"center"}},"🟠",-1),ct={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/count-the-number-of-good-nodes",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/count-the-number-of-good-nodes",target:"_blank",rel:"noopener noreferrer"};function pt(ut,dt){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),u=l("CodeTabs");return h(),k("div",null,[f,t("p",null,[e("🟢 "),n(p,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",v,[x,n(o)]),e(),t("a",w,[N,n(o)])]),C,t("p",null,[e("思路和 "),n(a,{to:"/problem/0104.html"},{default:s(()=>[e("第 104 题 二叉树的最大深度")]),_:1}),e(" 一样。")]),T,n(u,{id:"95",data:[{id:"递归"},{id:"回溯"}]},{title0:s(({value:c,isActive:r})=>[e("递归")]),title1:s(({value:c,isActive:r})=>[e("回溯")]),tab0:s(({value:c,isActive:r})=>[j]),tab1:s(({value:c,isActive:r})=>[E]),_:1}),q,m(" prettier-ignore "),t("table",null,[D,t("tbody",null,[t("tr",null,[L,V,t("td",A,[n(a,{to:"/problem/0104.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",I,[n(a,{to:"/tag/tree.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[z]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[B]),_:1}),e(),F]),M,t("td",O,[t("a",R,[e("🀄️"),n(o)]),e(),t("a",G,[e("🔗"),n(o)])])]),t("tr",null,[H,J,K,t("td",P,[n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Q]),_:1}),e(),n(a,{to:"/tag/graph.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[W]),_:1})]),X,t("td",Y,[t("a",Z,[e("🀄️"),n(o)]),e(),t("a",$,[e("🔗"),n(o)])])]),t("tr",null,[tt,et,nt,t("td",st,[n(a,{to:"/tag/tree.html"},{default:s(()=>[at]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ot]),_:1})]),lt,t("td",ct,[t("a",rt,[e("🀄️"),n(o)]),e(),t("a",it,[e("🔗"),n(o)])])])])])])}const kt=d(_,[["render",pt],["__file","0559.html.vue"]]);export{kt as default};
