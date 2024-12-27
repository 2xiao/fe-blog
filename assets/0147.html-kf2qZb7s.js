import{_ as r,r as l,o as p,c,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-fqckLmln.js";const h={},k=n("h1",{id:"_147-对链表进行插入排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_147-对链表进行插入排序","aria-hidden":"true"},"#"),t(" 147. 对链表进行插入排序")],-1),m=n("code",null,"链表",-1),_=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/insertion-sort-list",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, sort the list using <strong>insertion sort</strong> , and return <em>the sorted list &#39;s head</em>.</p><p>The steps of the <strong>insertion sort</strong> algorithm:</p><ol><li>Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.</li><li>At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.</li><li>It repeats until no input elements remain.</li></ol><p>The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.</p><p>![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort- example-300px.gif)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/04/sort1linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,2,1,3]</p><p>Output: [1,2,3,4]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/04/sort2linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [-1,5,3,4,0]</p><p>Output: [-1,0,3,4,5]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 5000]</code>.</li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定单个链表的头 <code>head</code> ，使用 <strong>插入排序</strong> 对链表进行排序，并返回 <strong>排序后链表的头</strong> 。</p><p><strong>插入排序</strong> 算法的步骤:</p><ol><li>插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。</li><li>每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。</li><li>重复直到所有输入数据插入完为止。</li></ol><p>下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。</p><p>![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort- example-300px.gif)</p><p>对链表进行插入排序。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>首先，我们需要创建一个虚拟头节点 <code>res</code>，并将其指向链表的头部。这样做是为了方便在头部插入节点。</p></li><li><p>然后，我们遍历链表中的每个节点，将其插入已排序的链表中。初始时，已排序的链表只包含虚拟头节点。</p></li><li><p>在遍历的过程中，我们将当前节点与已排序链表中的节点进行比较。找到合适的位置后，将当前节点插入到已排序链表中。</p></li><li><p>插入操作需要先找到插入的位置，然后进行节点的插入。注意在找到插入位置前，要一直移动指针。</p></li><li><p>最后，返回虚拟头节点的下一个节点，即排序后的链表头。</p></li></ol><p>虽然插入排序不如一些高级排序算法的时间复杂度低，但在链表这样的数据结构上，插入排序是一种简单且有效的排序算法。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是链表的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">insertionSortList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		prev<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">;</span>
		cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"148",-1),L=n("td",{style:{"text-align":"left"}},"排序链表",-1),N={style:{"text-align":"center"}},I={style:{"text-align":"left"}},j=n("code",null,"链表",-1),q=n("code",null,"双指针",-1),C=n("code",null,"分治",-1),E=n("code",null,"2+",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"708",-1),R=n("td",{style:{"text-align":"left"}},"循环有序列表的插入 🔒",-1),S=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"链表",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/insert-into-a-sorted-circular-linked-list",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),c("div",null,[k,n("p",null,[t("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",g,[f,e(o)]),t(),n("a",v,[b,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,L,n("td",N,[e(a,{to:"/problem/0148.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[j]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[q]),_:1}),t(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[C]),_:1}),t(),E]),O,n("td",T,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])]),n("tr",null,[z,R,S,n("td",A,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[G]),_:1})]),M,n("td",D,[n("a",F,[t("🀄️"),e(o)]),t(),n("a",H,[t("🔗"),e(o)])])])])])])}const U=r(h,[["render",J],["__file","0147.html.vue"]]);export{U as default};
