import{_ as d,r as i,o as k,c as m,a as n,b as s,d as e,w as t,f as h,e as p}from"./app-BBnmDgJV.js";const v={},b=n("h1",{id:"_25-k-个一组翻转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_25-k-个一组翻转链表","aria-hidden":"true"},"#"),s(" 25. K 个一组翻转链表")],-1),_=n("code",null,"递归",-1),g=n("code",null,"链表",-1),f={href:"https://leetcode.cn/problems/reverse-nodes-in-k-group",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/reverse-nodes-in-k-group",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),N=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p><p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p><p>You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], k = 2</p><p>Output: [2,1,4,3,5]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], k = 3</p><p>Output: [3,2,1,4,5]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is <code>n</code>.</li><li><code>1 &lt;= k &lt;= n &lt;= 5000</code></li><li><code>0 &lt;= Node.val &lt;= 1000</code></li></ul><p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你链表的头节点 <code>head</code> ，每 <code>k</code> 个节点一组进行翻转，请你返回修改后的链表。</p><p><code>k</code> 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 <code>k</code> 的整数倍，那么请将最后剩余的节点保持原有顺序。</p><p>你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',18),L=n("code",null,"k",-1),j=n("code",null,"k = 2",-1),C=p('<h3 id="思路一-迭代法" tabindex="-1"><a class="header-anchor" href="#思路一-迭代法" aria-hidden="true">#</a> 思路一：迭代法</h3><ol><li>使用 <code>dummy</code> 作为虚拟头节点，方便处理链表的连接和首节点的反转；</li><li>首先遍历链表，获取链表长度 <code>length</code>，用于判断是否有足够的 <code>k</code> 个节点进行反转；</li><li>每次找到 <code>k</code> 个节点进行反转，通过循环来交换节点的位置，并保持链表正确的连接顺序；</li><li>反转完成后，将指针 <code>prev</code> 移动到下一组的前一个节点，继续遍历下一组 <code>k</code> 个节点，直到剩余节点不足 <code>k</code>；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路二-递归法" tabindex="-1"><a class="header-anchor" href="#思路二-递归法" aria-hidden="true">#</a> 思路二：递归法</h3><ol><li><strong>判断是否足够 <code>k</code> 个节点</strong>：在每次递归之前，遍历前 <code>k</code> 个节点，判断是否有足够的 <code>k</code> 个节点。如果不足 <code>k</code> 个，则直接返回当前链表，不进行反转。</li><li><strong>反转前 <code>k</code> 个节点</strong>：通过循环逐个反转 <code>k</code> 个节点。使用 <code>prev</code> 来记录已经反转的部分，<code>curr</code> 用来遍历当前节点，<code>next</code> 记录下一个节点的位置。</li><li><strong>递归处理剩余部分</strong>：在反转 <code>k</code> 个节点后，递归处理剩余的链表部分，并将递归结果连接到反转后的链表。</li><li><strong>返回结果</strong>：每次递归都返回反转后的链表头节点。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code></li><li><strong>空间复杂度</strong>：<code>O(n/k)</code>，递归方式更加直观，反转过程简洁，但递归栈的深度为 <code>O(n/k)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',10),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseKGroup"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("head"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 创建虚拟头节点，方便处理链表连接"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dummy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	dummy`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" prev "),n("span",{class:"token operator"},"="),s(" dummy"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 统计链表长度"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" length "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("temp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		length`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		temp `),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 逐步反转每组k个节点"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("length "),n("span",{class:"token operator"},">="),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" curr "),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" next "),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			curr`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
			next`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
			prev`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
			next `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 移动指针到下一组"),s(`
		prev `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
		length `),n("span",{class:"token operator"},"-="),s(" k"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" dummy"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseKGroup"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("head"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 判断剩余节点是否足够k个，不够则返回原链表"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},"<"),s(" k "),n("span",{class:"token operator"},"&&"),s(" node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("count "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 反转前k个节点"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" prev "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" curr "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		next `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		curr`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
		prev `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
		curr `),n("span",{class:"token operator"},"="),s(" next"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 递归处理剩下的链表，并连接到反转后的链表"),s(`
	head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),s("curr"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 返回反转后的头节点"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" prev"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"head"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"k"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseKGroup"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("head"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" node "),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 将 node 指向第 k + 1 个节点"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 若不足 k 个节点，直接返回 head"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("node"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" head"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		node `),n("span",{class:"token operator"},"="),s(" node"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 翻转 1 ~ k 之间的节点"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" newHead "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("head"),n("span",{class:"token punctuation"},","),s(" node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 递归，继续反转后面的节点"),s(`
	head`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reverseKGroup"),n("span",{class:"token punctuation"},"("),s("node"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" newHead"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 反转的 first ~ last - 1 之间的节点"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"first"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"last"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverse"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("first"),n("span",{class:"token punctuation"},","),s(" last")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" first"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("first"),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"!="),s(" last"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(" first"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		first`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		temp`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" res"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		res`),n("span",{class:"token punctuation"},"."),s("next "),n("span",{class:"token operator"},"="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"24",-1),I=n("td",{style:{"text-align":"left"}},"两两交换链表中的节点",-1),V={style:{"text-align":"center"}},T={style:{"text-align":"left"}},B=n("code",null,"递归",-1),H=n("code",null,"链表",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"1721",-1),D=n("td",{style:{"text-align":"left"}},"交换链表中的节点",-1),J=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},P=n("code",null,"链表",-1),Q=n("code",null,"双指针",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"2074",-1),nn=n("td",{style:{"text-align":"left"}},"反转偶数长度组的节点",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},tn=n("code",null,"链表",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),on={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/reverse-nodes-in-even-length-groups",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/reverse-nodes-in-even-length-groups",target:"_blank",rel:"noopener noreferrer"};function pn(rn,un){const r=i("font"),a=i("RouterLink"),o=i("ExternalLinkIcon"),u=i("CodeTabs");return k(),m("div",null,[b,n("p",null,[s("🔴 "),e(r,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),e(a,{to:"/tag/recursion.html"},{default:t(()=>[_]),_:1}),s(),e(a,{to:"/tag/linked-list.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[y,e(o)]),s(),n("a",x,[w,e(o)])]),N,n("p",null,[s("这一题是 "),e(a,{to:"/problem/0024.html"},{default:t(()=>[s("第 24 题")]),_:1}),s(" 的加强版，第 24 题是两两相邻的元素，翻转链表。而本题要求的是 "),L,s(" 个相邻的元素，翻转链表，第 24 题相当于是 "),j,s(" 的特殊情况。")]),C,e(u,{id:"171",data:[{id:"迭代法"},{id:"递归法"},{id:"递归法 2"}]},{title0:t(({value:c,isActive:l})=>[s("迭代法")]),title1:t(({value:c,isActive:l})=>[s("递归法")]),title2:t(({value:c,isActive:l})=>[s("递归法 2")]),tab0:t(({value:c,isActive:l})=>[O]),tab1:t(({value:c,isActive:l})=>[A]),tab2:t(({value:c,isActive:l})=>[G]),_:1}),K,h(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,I,n("td",V,[e(a,{to:"/problem/0024.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",T,[e(a,{to:"/tag/recursion.html"},{default:t(()=>[B]),_:1}),s(),e(a,{to:"/tag/linked-list.html"},{default:t(()=>[H]),_:1})]),z,n("td",R,[n("a",F,[s("🀄️"),e(o)]),s(),n("a",S,[s("🔗"),e(o)])])]),n("tr",null,[Y,D,J,n("td",M,[e(a,{to:"/tag/linked-list.html"},{default:t(()=>[P]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[Q]),_:1})]),U,n("td",W,[n("a",X,[s("🀄️"),e(o)]),s(),n("a",Z,[s("🔗"),e(o)])])]),n("tr",null,[$,nn,sn,n("td",en,[e(a,{to:"/tag/linked-list.html"},{default:t(()=>[tn]),_:1})]),an,n("td",on,[n("a",cn,[s("🀄️"),e(o)]),s(),n("a",ln,[s("🔗"),e(o)])])])])])])}const kn=d(v,[["render",pn],["__file","0025.html.vue"]]);export{kn as default};
