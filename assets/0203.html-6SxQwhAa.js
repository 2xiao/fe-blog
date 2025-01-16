import{_ as r,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-KDJRKGep.js";const _={},h=t("h1",{id:"_203-移除链表元素",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_203-移除链表元素","aria-hidden":"true"},"#"),e(" 203. 移除链表元素")],-1),k=t("code",null,"递归",-1),m=t("code",null,"链表",-1),f={href:"https://leetcode.cn/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list and an integer <code>val</code>, remove all the nodes of the linked list that has <code>Node.val == val</code>, and return <em>the new head</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,6,3,4,5,6], val = 6</p><p>Output: [1,2,3,4,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [], val = 1</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = [7,7,7,7], val = 7</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 10^4]</code>.</li><li><code>1 &lt;= Node.val &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>删除链表中所有指定值的结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题意做即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"27",-1),N=t("td",{style:{"text-align":"left"}},"移除元素",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=t("code",null,"数组",-1),q=t("code",null,"双指针",-1),C=t("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"237",-1),R=t("td",{style:{"text-align":"left"}},"删除链表中的节点",-1),T={style:{"text-align":"center"}},z={style:{"text-align":"left"}},G=t("code",null,"链表",-1),S=t("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/delete-node-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2095",-1),J=t("td",{style:{"text-align":"left"}},"删除链表的中间节点",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=t("code",null,"链表",-1),Q=t("code",null,"双指针",-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"3217",-1),$=t("td",{style:{"text-align":"left"}},"从链表中移除在数组中存在的节点",-1),tt=t("td",{style:{"text-align":"center"}},null,-1),et={style:{"text-align":"left"}},nt=t("code",null,"数组",-1),st=t("code",null,"哈希表",-1),at=t("code",null,"链表",-1),ot=t("td",{style:{"text-align":"center"}},"🟠",-1),lt={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/delete-nodes-from-linked-list-present-in-array",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},"3263",-1),dt=t("td",{style:{"text-align":"left"}},"将双链表转换为数组 I 🔒",-1),pt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"数组",-1),ht=t("code",null,"链表",-1),kt=t("code",null,"双向链表",-1),mt=t("td",{style:{"text-align":"center"}},"🟢",-1),ft={style:{"text-align":"center"}},gt={href:"https://leetcode.cn/problems/convert-doubly-linked-list-to-array-i",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://leetcode.com/problems/convert-doubly-linked-list-to-array-i",target:"_blank",rel:"noopener noreferrer"},vt=t("td",{style:{"text-align":"center"}},"3294",-1),yt=t("td",{style:{"text-align":"left"}},"将双链表转换为数组 II 🔒",-1),xt=t("td",{style:{"text-align":"center"}},null,-1),wt={style:{"text-align":"left"}},Nt=t("code",null,"数组",-1),Et=t("code",null,"链表",-1),It=t("code",null,"双向链表",-1),Lt=t("td",{style:{"text-align":"center"}},"🟠",-1),qt={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/convert-doubly-linked-list-to-array-ii",target:"_blank",rel:"noopener noreferrer"},Vt={href:"https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii",target:"_blank",rel:"noopener noreferrer"};function jt(Bt,Ot){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/recursion.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",f,[g,n(o)]),e(),t("a",b,[v,n(o)])]),y,p(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[w,N,t("td",E,[n(a,{to:"/problem/0027.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",I,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[q]),_:1})]),C,t("td",V,[t("a",j,[e("🀄️"),n(o)]),e(),t("a",B,[e("🔗"),n(o)])])]),t("tr",null,[O,R,t("td",T,[n(a,{to:"/problem/0237.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",z,[n(a,{to:"/tag/linked-list.html"},{default:s(()=>[G]),_:1})]),S,t("td",A,[t("a",D,[e("🀄️"),n(o)]),e(),t("a",F,[e("🔗"),n(o)])])]),t("tr",null,[H,J,t("td",K,[n(a,{to:"/problem/2095.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",M,[n(a,{to:"/tag/linked-list.html"},{default:s(()=>[P]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Q]),_:1})]),U,t("td",W,[t("a",X,[e("🀄️"),n(o)]),e(),t("a",Y,[e("🔗"),n(o)])])]),t("tr",null,[Z,$,tt,t("td",et,[n(a,{to:"/tag/array.html"},{default:s(()=>[nt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[st]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[at]),_:1})]),ot,t("td",lt,[t("a",ct,[e("🀄️"),n(o)]),e(),t("a",rt,[e("🔗"),n(o)])])]),t("tr",null,[it,dt,pt,t("td",ut,[n(a,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[ht]),_:1}),e(),n(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[kt]),_:1})]),mt,t("td",ft,[t("a",gt,[e("🀄️"),n(o)]),e(),t("a",bt,[e("🔗"),n(o)])])]),t("tr",null,[vt,yt,xt,t("td",wt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Nt]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[Et]),_:1}),e(),n(a,{to:"/tag/doubly-linked-list.html"},{default:s(()=>[It]),_:1})]),Lt,t("td",qt,[t("a",Ct,[e("🀄️"),n(o)]),e(),t("a",Vt,[e("🔗"),n(o)])])])])])])}const Tt=r(_,[["render",jt],["__file","0203.html.vue"]]);export{Tt as default};
