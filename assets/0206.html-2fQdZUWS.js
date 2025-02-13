import{_ as p,r as l,o as u,c as h,a as e,b as t,d as n,w as s,f as _,e as k}from"./app-MXSjQbID.js";const m={},g=e("h1",{id:"_206-反转链表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_206-反转链表","aria-hidden":"true"},"#"),t(" 206. 反转链表")],-1),f=e("code",null,"递归",-1),b=e("code",null,"链表",-1),x={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),L=k('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [5,4,3,2,1]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2]</p><p>Output: [2,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is the range <code>[0, 5000]</code>.</li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>有两种解题方法，一是循环、二是递归。</p><h3 id="思路一-循环" tabindex="-1"><a class="header-anchor" href="#思路一-循环" aria-hidden="true">#</a> 思路一：循环</h3><p>使用双指针，遍历链表，并在访问各节点时修改 <code>next</code> 引用指向。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，变量 <code>prev</code> 和 <code>cur</code> 使用常数大小额外空间。</li></ul><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3><p>使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 <code>next</code> 引用指向。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(n)</code>，遍历链表的递归深度达到 <code>n</code> ，系统使用 <code>O(n)</code> 大小额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),N=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"head"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"reverseList"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"head"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" prev "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"let"),t(" cur "),e("span",{class:"token operator"},"="),t(" head"),e("span",{class:"token punctuation"},";"),t(`

	`),e("span",{class:"token keyword"},"while"),t(),e("span",{class:"token punctuation"},"("),t("cur "),e("span",{class:"token operator"},"!=="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"let"),t(" next "),e("span",{class:"token operator"},"="),t(" cur"),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},";"),t(`
		cur`),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(" prev"),e("span",{class:"token punctuation"},";"),t(`
		prev `),e("span",{class:"token operator"},"="),t(" cur"),e("span",{class:"token punctuation"},";"),t(`
		cur `),e("span",{class:"token operator"},"="),t(" next"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" prev"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[t(`/**
 * `),e("span",{class:"token keyword"},"@param"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(),e("span",{class:"token parameter"},"head"),t(`
 * `),e("span",{class:"token keyword"},"@return"),t(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),t("ListNode"),e("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),e("span",{class:"token keyword"},"var"),t(),e("span",{class:"token function-variable function"},"reverseList"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"function"),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"head"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("head "),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token keyword"},"null"),t(),e("span",{class:"token operator"},"||"),t(" head"),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"==="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token keyword"},"return"),t(" head"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token keyword"},"const"),t(" last "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"reverseList"),e("span",{class:"token punctuation"},"("),t("head"),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
	head`),e("span",{class:"token punctuation"},"."),t("next"),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(" head"),e("span",{class:"token punctuation"},";"),t(`
	head`),e("span",{class:"token punctuation"},"."),t("next "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"null"),e("span",{class:"token punctuation"},";"),t(`
	`),e("span",{class:"token keyword"},"return"),t(" last"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),E=e("td",{style:{"text-align":"center"}},"92",-1),I=e("td",{style:{"text-align":"left"}},"反转链表 II",-1),q={style:{"text-align":"center"}},A={style:{"text-align":"left"}},V=e("code",null,"链表",-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"156",-1),G=e("td",{style:{"text-align":"left"}},"上下翻转二叉树 🔒",-1),S={style:{"text-align":"center"}},D={style:{"text-align":"left"}},H=e("code",null,"树",-1),J=e("code",null,"深度优先搜索",-1),K=e("code",null,"二叉树",-1),M=e("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/binary-tree-upside-down",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/binary-tree-upside-down",target:"_blank",rel:"noopener noreferrer"},W=e("td",{style:{"text-align":"center"}},"234",-1),X=e("td",{style:{"text-align":"left"}},"回文链表",-1),Y={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=e("code",null,"栈",-1),ee=e("code",null,"递归",-1),te=e("code",null,"链表",-1),ne=e("code",null,"1+",-1),se=e("td",{style:{"text-align":"center"}},"🟢",-1),oe={style:{"text-align":"center"}},ae={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},le={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},ce=e("td",{style:{"text-align":"center"}},"2074",-1),re=e("td",{style:{"text-align":"left"}},"反转偶数长度组的节点",-1),ie=e("td",{style:{"text-align":"center"}},null,-1),de={style:{"text-align":"left"}},pe=e("code",null,"链表",-1),ue=e("td",{style:{"text-align":"center"}},"🟠",-1),he={style:{"text-align":"center"}},_e={href:"https://leetcode.cn/problems/reverse-nodes-in-even-length-groups",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://leetcode.com/problems/reverse-nodes-in-even-length-groups",target:"_blank",rel:"noopener noreferrer"},me=e("td",{style:{"text-align":"center"}},"2130",-1),ge=e("td",{style:{"text-align":"left"}},"链表最大孪生和",-1),fe={style:{"text-align":"center"}},be={style:{"text-align":"left"}},xe=e("code",null,"栈",-1),ye=e("code",null,"链表",-1),ve=e("code",null,"双指针",-1),we=e("td",{style:{"text-align":"center"}},"🟠",-1),Le={style:{"text-align":"center"}},Ne={href:"https://leetcode.cn/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},je={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Ce=e("td",{style:{"text-align":"center"}},"2487",-1),Oe=e("td",{style:{"text-align":"left"}},"从链表中移除节点",-1),Ee=e("td",{style:{"text-align":"center"}},null,-1),Ie={style:{"text-align":"left"}},qe=e("code",null,"栈",-1),Ae=e("code",null,"递归",-1),Ve=e("code",null,"链表",-1),Te=e("code",null,"1+",-1),Be=e("td",{style:{"text-align":"center"}},"🟠",-1),ze={style:{"text-align":"center"}},Re={href:"https://leetcode.cn/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://leetcode.com/problems/remove-nodes-from-linked-list",target:"_blank",rel:"noopener noreferrer"},Ge=e("td",{style:{"text-align":"center"}},"2807",-1),Se=e("td",{style:{"text-align":"left"}},"在链表中插入最大公约数",-1),De=e("td",{style:{"text-align":"center"}},null,-1),He={style:{"text-align":"left"}},Je=e("code",null,"链表",-1),Ke=e("code",null,"数学",-1),Me=e("code",null,"数论",-1),Pe=e("td",{style:{"text-align":"center"}},"🟠",-1),Qe={style:{"text-align":"center"}},Ue={href:"https://leetcode.cn/problems/insert-greatest-common-divisors-in-linked-list",target:"_blank",rel:"noopener noreferrer"},We={href:"https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list",target:"_blank",rel:"noopener noreferrer"};function Xe(Ye,Ze){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),h("div",null,[g,e("p",null,[t("🟢 "),n(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/recursion.html"},{default:s(()=>[f]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[b]),_:1}),t("  🔗 "),e("a",x,[y,n(a)]),t(),e("a",v,[w,n(a)])]),L,n(d,{id:"127",data:[{id:"循环"},{id:"递归"}]},{title0:s(({value:c,isActive:r})=>[t("循环")]),title1:s(({value:c,isActive:r})=>[t("递归")]),tab0:s(({value:c,isActive:r})=>[N]),tab1:s(({value:c,isActive:r})=>[j]),_:1}),C,_(" prettier-ignore "),e("table",null,[O,e("tbody",null,[e("tr",null,[E,I,e("td",q,[n(o,{to:"/problem/0092.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",A,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[V]),_:1})]),T,e("td",B,[e("a",z,[t("🀄️"),n(a)]),t(),e("a",R,[t("🔗"),n(a)])])]),e("tr",null,[F,G,e("td",S,[n(o,{to:"/problem/0156.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",D,[n(o,{to:"/tag/tree.html"},{default:s(()=>[H]),_:1}),t(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[J]),_:1}),t(),n(o,{to:"/tag/binary-tree.html"},{default:s(()=>[K]),_:1})]),M,e("td",P,[e("a",Q,[t("🀄️"),n(a)]),t(),e("a",U,[t("🔗"),n(a)])])]),e("tr",null,[W,X,e("td",Y,[n(o,{to:"/problem/0234.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",Z,[n(o,{to:"/tag/stack.html"},{default:s(()=>[$]),_:1}),t(),n(o,{to:"/tag/recursion.html"},{default:s(()=>[ee]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[te]),_:1}),t(),ne]),se,e("td",oe,[e("a",ae,[t("🀄️"),n(a)]),t(),e("a",le,[t("🔗"),n(a)])])]),e("tr",null,[ce,re,ie,e("td",de,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[pe]),_:1})]),ue,e("td",he,[e("a",_e,[t("🀄️"),n(a)]),t(),e("a",ke,[t("🔗"),n(a)])])]),e("tr",null,[me,ge,e("td",fe,[n(o,{to:"/problem/2130.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",be,[n(o,{to:"/tag/stack.html"},{default:s(()=>[xe]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[ye]),_:1}),t(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[ve]),_:1})]),we,e("td",Le,[e("a",Ne,[t("🀄️"),n(a)]),t(),e("a",je,[t("🔗"),n(a)])])]),e("tr",null,[Ce,Oe,Ee,e("td",Ie,[n(o,{to:"/tag/stack.html"},{default:s(()=>[qe]),_:1}),t(),n(o,{to:"/tag/recursion.html"},{default:s(()=>[Ae]),_:1}),t(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[Ve]),_:1}),t(),Te]),Be,e("td",ze,[e("a",Re,[t("🀄️"),n(a)]),t(),e("a",Fe,[t("🔗"),n(a)])])]),e("tr",null,[Ge,Se,De,e("td",He,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[Je]),_:1}),t(),n(o,{to:"/tag/math.html"},{default:s(()=>[Ke]),_:1}),t(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[Me]),_:1})]),Pe,e("td",Qe,[e("a",Ue,[t("🀄️"),n(a)]),t(),e("a",We,[t("🔗"),n(a)])])])])])])}const et=p(m,[["render",Xe],["__file","0206.html.vue"]]);export{et as default};
