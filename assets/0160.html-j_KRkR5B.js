import{_ as d,r as c,o as u,c as k,a as n,b as e,d as t,w as s,f as h,e as m}from"./app-Kkp_66uf.js";const b={},f=n("h1",{id:"_160-相交链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_160-相交链表","aria-hidden":"true"},"#"),e(" 160. 相交链表")],-1),g=n("code",null,"哈希表",-1),v=n("code",null,"链表",-1),_=n("code",null,"双指针",-1),y={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/intersection-of-two-linked-lists",target:"_blank",rel:"noopener noreferrer"},A=n("code",null,"LeetCode",-1),B=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the heads of two singly linked-lists <code>headA</code> and <code>headB</code>, return <em>the node at which the two lists intersect</em>. If the two linked lists have no intersection at all, return <code>null</code>.</p><p>For example, the following two linked lists begin to intersect at node <code>c1</code>:</p><figure><img src="https://assets.leetcode.com/uploads/2021/03/05/160_statement.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The test cases are generated such that there are no cycles anywhere in the entire linked structure.</p><p><strong>Note</strong> that the linked lists must <strong>retain their original structure</strong> after the function returns.</p><p><strong>Custom Judge:</strong></p><p>The inputs to the <strong>judge</strong> are given as follows (your program is <strong>not</strong> given these inputs):</p><ul><li><code>intersectVal</code> - The value of the node where the intersection occurs. This is <code>0</code> if there is no intersected node.</li><li><code>listA</code> - The first linked list.</li><li><code>listB</code> - The second linked list.</li><li><code>skipA</code> - The number of nodes to skip ahead in <code>listA</code> (starting from the head) to get to the intersected node.</li><li><code>skipB</code> - The number of nodes to skip ahead in <code>listB</code> (starting from the head) to get to the intersected node.</li></ul><p>The judge will then create the linked structure based on these inputs and pass the two heads, <code>headA</code> and <code>headB</code> to your program. If you correctly return the intersected node, then your solution will be <strong>accepted</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/05/160_example_1_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3</p><p>Output: Intersected at &#39;8&#39;</p><p>Explanation: The intersected node&#39;s value is 8 (note that this must not be 0 if the two lists intersect).</p><p>From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.</p><ul><li>Note that the intersected node&#39;s value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.</li></ul></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/05/160_example_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1</p><p>Output: Intersected at &#39;2&#39;</p><p>Explanation: The intersected node&#39;s value is 2 (note that this must not be 0 if the two lists intersect).</p><p>From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/05/160_example_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2</p><p>Output: No intersection</p><p>Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.</p><p>Explanation: The two lists do not intersect, so return null.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes of <code>listA</code> is in the <code>m</code>.</li><li>The number of nodes of <code>listB</code> is in the <code>n</code>.</li><li><code>1 &lt;= m, n &lt;= 3 * 10^4</code></li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li><code>0 &lt;= skipA &lt; m</code></li><li><code>0 &lt;= skipB &lt; n</code></li><li><code>intersectVal</code> is <code>0</code> if <code>listA</code> and <code>listB</code> do not intersect.</li><li><code>intersectVal == listA[skipA] == listB[skipB]</code> if <code>listA</code> and <code>listB</code> intersect.</li></ul><p><strong>Follow up:</strong> Could you write a solution that runs in <code>O(m + n)</code> time and use only <code>O(1)</code> memory?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 <code>null</code> 。</p><p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p><p>注意，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应。</p><h3 id="思路一-双指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针" aria-hidden="true">#</a> 思路一：双指针</h3><p>可以使用双指针，用两个指针 <code>p1</code> 和 <code>p2</code> 分别在两条链表上前进，可以让 <code>p1</code> 遍历完链表 A 之后开始遍历链表 B，让 <code>p2</code> 遍历完链表 B 之后开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起，这样就可以让 <code>p1</code> 和 <code>p2</code> 同时进入公共部分，也就是同时到达相交节点。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(lenA + lenB)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><p>另一种思路，先计算两个链表的长度差，记为 <code>diff</code>。如果 <code>lenA &gt; lenB</code>，则将 <code>headA</code> 向后移动 <code>diff</code> 步，使得两个链表剩余的长度相等；如果 <code>lenB &gt; lenA</code>，则将 <code>headB</code> 向后移动 <code>diff</code> 步，使得两个链表剩余的长度相等。</p><p>然后，同时移动 <code>headA</code> 和 <code>headB</code>，直到找到相交的节点 C 或者走到链表的末尾。如果找到相交的节点 C，则返回该节点；如果走到链表的末尾，则说明两个链表不相交，返回 <code>null</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(lenA + lenB)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',39),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"headA"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"headB"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"getIntersectionNode"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("headA"),n("span",{class:"token punctuation"},","),e(" headB")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" p1 "),n("span",{class:"token operator"},"="),e(" headA"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" p2 "),n("span",{class:"token operator"},"="),e(" headB"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("p1 "),n("span",{class:"token operator"},"!=="),e(" p2"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("p1 "),n("span",{class:"token operator"},"=="),e(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p1 `),n("span",{class:"token operator"},"="),e(" headB"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p1 `),n("span",{class:"token operator"},"="),e(" p1"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("p2 "),n("span",{class:"token operator"},"=="),e(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p2 `),n("span",{class:"token operator"},"="),e(" headA"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p2 `),n("span",{class:"token operator"},"="),e(" p2"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" p1"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * Definition for singly-linked list.
 * function ListNode(val) `),n("span",{class:"token punctuation"},"{"),e(`
 *     this.val = val;
 *     this.next = null;
 * `),n("span",{class:"token punctuation"},"}"),e(`
 */`)]),e(`

`),n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"headA"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"headB"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"getIntersectionNode"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("headA"),n("span",{class:"token punctuation"},","),e(" headB")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token function-variable function"},"getLength"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"=>"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" len "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("head "),n("span",{class:"token operator"},"!=="),e(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			head `),n("span",{class:"token operator"},"="),e(" head"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
			len`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
		`),n("span",{class:"token keyword"},"return"),e(" len"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"const"),e(" lenA "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"getLength"),n("span",{class:"token punctuation"},"("),e("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"const"),e(" lenB "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token function"},"getLength"),n("span",{class:"token punctuation"},"("),e("headB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" p1 "),n("span",{class:"token operator"},"="),e(" headA"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" p2 "),n("span",{class:"token operator"},"="),e(" headB"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("lenA "),n("span",{class:"token operator"},">"),e(" lenB"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" lenA "),n("span",{class:"token operator"},"-"),e(" lenB"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p1 `),n("span",{class:"token operator"},"="),e(" p1"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" lenB "),n("span",{class:"token operator"},"-"),e(" lenA"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			p2 `),n("span",{class:"token operator"},"="),e(" p2"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("p1 "),n("span",{class:"token operator"},"!=="),e(" p2"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		p1 `),n("span",{class:"token operator"},"="),e(" p1"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		p2 `),n("span",{class:"token operator"},"="),e(" p2"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" p1"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"599",-1),C=n("td",{style:{"text-align":"left"}},"两个列表的最小索引总和",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},j=n("code",null,"数组",-1),F=n("code",null,"哈希表",-1),q=n("code",null,"字符串",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/minimum-index-sum-of-two-lists",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/minimum-index-sum-of-two-lists",target:"_blank",rel:"noopener noreferrer"};function G(J,H){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return u(),k("div",null,[f,n("p",null,[e("🟢 "),t(p,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[v]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",y,[w,t(o)]),e(),n("a",x,[A,t(o)])]),B,t(r,{id:"242",data:[{id:"双指针"},{id:"双指针"}]},{title0:s(({value:l,isActive:i})=>[e("双指针")]),title1:s(({value:l,isActive:i})=>[e("双指针")]),tab0:s(({value:l,isActive:i})=>[T]),tab1:s(({value:l,isActive:i})=>[N]),_:1}),L,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[V,C,n("td",E,[t(a,{to:"/problem/0599.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",O,[t(a,{to:"/tag/array.html"},{default:s(()=>[j]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[F]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[q]),_:1})]),z,n("td",R,[n("a",S,[e("🀄️"),t(o)]),e(),n("a",D,[e("🔗"),t(o)])])])])])])}const M=d(b,[["render",G],["__file","0160.html.vue"]]);export{M as default};
