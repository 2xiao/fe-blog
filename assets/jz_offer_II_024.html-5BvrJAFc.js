import{_ as d,r as t,o as k,c as h,a as n,b as s,d as e,w as a,e as r}from"./app-3dvbhwow.js";const m={},v=n("h1",{id:"_24-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-反转链表","aria-hidden":"true"},"#"),s(" 24. 反转链表")],-1),b=n("code",null,"递归",-1),g=n("code",null,"链表",-1),_={href:"https://leetcode.cn/problems/UHnkqh",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),x=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定单链表的头节点 <code>head</code> ，请反转链表，并返回反转后的链表的头节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [1,2,3,4,5]</p><p><strong>输出：</strong>[5,4,3,2,1]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [1,2]</p><p><strong>输出：</strong>[2,1]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> head = []</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[0, 5000]</code></li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><p><strong>进阶：</strong> 链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p>',13),w={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),L=r('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-循环" tabindex="-1"><a class="header-anchor" href="#思路一-循环" aria-hidden="true">#</a> 思路一：循环</h3><p>使用双指针，遍历链表，并在访问各节点时修改 <code>next</code> 引用指向。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，变量 <code>prev</code> 和 <code>cur</code> 使用常数大小额外空间。</li></ul><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3><p>使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 <code>next</code> 引用指向。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，遍历链表使用线性大小时间。</li><li><strong>空间复杂度</strong>： <code>O(n)</code>，遍历链表的递归深度达到 <code>n</code> ，系统使用 <code>O(n)</code> 大小额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',11),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" cur "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" next "),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		cur`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
		prev `),n("span",{class:"token operator"},"="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
		cur `),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseList"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" head"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" last "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseList"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	head`),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" last"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function q(I,C){const i=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon"),u=t("CodeTabs");return k(),h("div",null,[v,n("p",null,[s("🟢 "),e(i,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/recursion.html"},{default:a(()=>[b]),_:1}),s(),e(o,{to:"/tag/linked-list.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,e(p)])]),x,n("div",w,[y,n("p",null,[s("本题与 LeetCode "),e(o,{to:"/problem/0206.html"},{default:a(()=>[s("第 206 题")]),_:1}),s(" 相同。")])]),L,e(u,{id:"123",data:[{id:"循环"},{id:"递归"}]},{title0:a(({value:c,isActive:l})=>[s("循环")]),title1:a(({value:c,isActive:l})=>[s("递归")]),tab0:a(({value:c,isActive:l})=>[j]),tab1:a(({value:c,isActive:l})=>[N]),_:1})])}const z=d(m,[["render",q],["__file","jz_offer_II_024.html.vue"]]);export{z as default};
