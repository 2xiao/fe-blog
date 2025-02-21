import{_ as r,r as l,o as d,c as i,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-9CeBk-uV.js";const _={},h=t("h1",{id:"_2-两数相加",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-两数相加","aria-hidden":"true"},"#"),e(" 2. 两数相加")],-1),m=t("code",null,"递归",-1),k=t("code",null,"链表",-1),g=t("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong> , and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</p><p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: l1 = [2,4,3], l2 = [5,6,4]</p><p>Output: [7,0,8]</p><p>Explanation: 342 + 465 = 807.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: l1 = [0], l2 = [0]</p><p>Output: [0]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]</p><p>Output: [8,9,9,9,0,0,0,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>It is guaranteed that the list represents a number that does not have leading zeros.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字。</p><p>请你将两个数相加，并以相同形式返回一个表示和的链表。</p><p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2021/01/02/addtwonumber1.jpg)</p><blockquote><p><strong>输入：</strong> l1 = [2,4,3], l2 = [5,6,4]</p><p><strong>输出：</strong>[7,0,8]</p><p><strong>解释：</strong> 342 + 465 = 807.</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> l1 = [0], l2 = [0]</p><p><strong>输出：</strong>[0]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]</p><p><strong>输出：</strong>[8,9,9,9,0,0,0,1]</p></blockquote><p><strong>提示：</strong></p><ul><li>每个链表中的节点数在范围 <code>[1, 100]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>题目数据保证列表表示的数字不含前导零</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化：</strong></p><ul><li>创建一个新的链表 <code>List</code> 来存储结果，<code>head</code> 是 <code>List</code> 的指针，用来遍历和构建结果链表。</li><li>使用 <code>sum</code> 来存储每次两位数相加后的和，<code>carry</code> 来存储每次计算是否有进位。</li></ul></li><li><p><strong>遍历两个链表：</strong></p><ul><li>使用 <code>while</code> 循环，当 <code>l1</code> 或 <code>l2</code> 还存在节点或者 <code>sum &gt; 0</code> 时，继续遍历。</li><li>对于每一位数，分别从 <code>l1</code> 和 <code>l2</code> 中提取当前节点的值，如果该链表为空，跳过。</li><li>将当前位数相加，并检查是否有进位。</li></ul></li><li><p><strong>进位处理：</strong></p><ul><li>如果 <code>sum</code> 大于或等于 10，表示有进位。设置 <code>carry = 1</code>，并更新 <code>sum</code> 为 <code>sum - 10</code>。</li><li>否则，<code>carry</code> 设为 0。</li></ul></li><li><p><strong>构建结果链表：</strong></p><ul><li>将当前位的和（去除进位后）保存到 <code>head.next</code> 中，并更新 <code>head</code> 指向下一个节点。</li><li>处理完一个节点后，更新 <code>sum</code> 为 <code>carry</code>，以便下一轮加法使用。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最后返回 <code>List.next</code>，即从头节点后的第一个节点开始的链表。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(max(m, n))</code>，其中 <code>m</code> 和 <code>n</code> 分别是两个链表 <code>l1</code> 和 <code>l2</code> 的长度。我们遍历两个链表一次，因此时间复杂度是它们长度的最大值。</li><li><strong>空间复杂度</strong>：<code>O(max(m, n))</code>，因为需要存储返回的结果链表，它的长度最多为两个链表长度之和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> List <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 新建一个虚拟头节点</span>
	<span class="token keyword">var</span> head <span class="token operator">=</span> List<span class="token punctuation">;</span>
	<span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前位的和</span>
	<span class="token keyword">var</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 进位</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> l2 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">||</span> sum <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>l1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 l1 不为空</span>
			sum <span class="token operator">+=</span> l1<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
			l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>l2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果 l2 不为空</span>
			sum <span class="token operator">+=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
			l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前位的和大于或等于 10，需要进位</span>
			carry <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			sum <span class="token operator">-=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 处理进位</span>
		<span class="token punctuation">}</span>
		head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

		sum <span class="token operator">=</span> carry<span class="token punctuation">;</span> <span class="token comment">// 将进位传递给下一位</span>
		carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置进位</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> List<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 返回链表的实际结果部分（跳过虚拟头节点）</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"43",-1),N=t("td",{style:{"text-align":"left"}},"字符串相乘",-1),q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},E=t("code",null,"数学",-1),j=t("code",null,"字符串",-1),C=t("code",null,"模拟",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"67",-1),R=t("td",{style:{"text-align":"left"}},"二进制求和",-1),Y={style:{"text-align":"center"}},A={style:{"text-align":"left"}},M=t("code",null,"位运算",-1),S=t("code",null,"数学",-1),D=t("code",null,"字符串",-1),F=t("code",null,"1+",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"371",-1),Q=t("td",{style:{"text-align":"left"}},"两整数之和",-1),U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"位运算",-1),Z=t("code",null,"数学",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/sum-of-two-integers",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/sum-of-two-integers",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"415",-1),at=t("td",{style:{"text-align":"left"}},"字符串相加",-1),ot={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},ct=t("code",null,"数学",-1),rt=t("code",null,"字符串",-1),dt=t("code",null,"模拟",-1),it=t("td",{style:{"text-align":"center"}},"🟢",-1),pt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"445",-1),mt=t("td",{style:{"text-align":"left"}},"两数相加 II",-1),kt={style:{"text-align":"center"}},gt={style:{"text-align":"left"}},bt=t("code",null,"栈",-1),ft=t("code",null,"链表",-1),yt=t("code",null,"数学",-1),vt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/add-two-numbers-ii",target:"_blank",rel:"noopener noreferrer"},Lt={href:"https://leetcode.com/problems/add-two-numbers-ii",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",{style:{"text-align":"center"}},"989",-1),qt=t("td",{style:{"text-align":"left"}},"数组形式的整数加法",-1),It={style:{"text-align":"center"}},Et={style:{"text-align":"left"}},jt=t("code",null,"数组",-1),Ct=t("code",null,"数学",-1),Ot=t("td",{style:{"text-align":"center"}},"🟢",-1),Vt={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},Bt=t("td",{style:{"text-align":"center"}},"1634",-1),Rt=t("td",{style:{"text-align":"left"}},"求两个多项式链表的和 🔒",-1),Yt=t("td",{style:{"text-align":"center"}},null,-1),At={style:{"text-align":"left"}},Mt=t("code",null,"链表",-1),St=t("code",null,"数学",-1),Dt=t("code",null,"双指针",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Gt={style:{"text-align":"center"}},Ht={href:"https://leetcode.cn/problems/add-two-polynomials-represented-as-linked-lists",target:"_blank",rel:"noopener noreferrer"},Jt={href:"https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",{style:{"text-align":"center"}},"2816",-1),Pt=t("td",{style:{"text-align":"left"}},"翻倍以链表形式表示的数字",-1),Qt=t("td",{style:{"text-align":"center"}},null,-1),Ut={style:{"text-align":"left"}},Wt=t("code",null,"栈",-1),Xt=t("code",null,"链表",-1),Zt=t("code",null,"数学",-1),$t=t("td",{style:{"text-align":"center"}},"🟠",-1),te={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/double-a-number-represented-as-a-linked-list",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/double-a-number-represented-as-a-linked-list",target:"_blank",rel:"noopener noreferrer"};function se(ae,oe){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return d(),i("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/recursion.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",b,[f,n(o)]),e(),t("a",y,[v,n(o)])]),x,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[L,N,t("td",q,[n(a,{to:"/problem/0043.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",I,[n(a,{to:"/tag/math.html"},{default:s(()=>[E]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[j]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[C]),_:1})]),O,t("td",V,[t("a",T,[e("🀄️"),n(o)]),e(),t("a",z,[e("🔗"),n(o)])])]),t("tr",null,[B,R,t("td",Y,[n(a,{to:"/problem/0067.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[D]),_:1}),e(),F]),G,t("td",H,[t("a",J,[e("🀄️"),n(o)]),e(),t("a",K,[e("🔗"),n(o)])])]),t("tr",null,[P,Q,t("td",U,[n(a,{to:"/problem/0371.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",W,[n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[X]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",et,[e("🀄️"),n(o)]),e(),t("a",nt,[e("🔗"),n(o)])])]),t("tr",null,[st,at,t("td",ot,[n(a,{to:"/problem/0415.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",lt,[n(a,{to:"/tag/math.html"},{default:s(()=>[ct]),_:1}),e(),n(a,{to:"/tag/string.html"},{default:s(()=>[rt]),_:1}),e(),n(a,{to:"/tag/simulation.html"},{default:s(()=>[dt]),_:1})]),it,t("td",pt,[t("a",ut,[e("🀄️"),n(o)]),e(),t("a",_t,[e("🔗"),n(o)])])]),t("tr",null,[ht,mt,t("td",kt,[n(a,{to:"/problem/0445.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",gt,[n(a,{to:"/tag/stack.html"},{default:s(()=>[bt]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[yt]),_:1})]),vt,t("td",xt,[t("a",wt,[e("🀄️"),n(o)]),e(),t("a",Lt,[e("🔗"),n(o)])])]),t("tr",null,[Nt,qt,t("td",It,[n(a,{to:"/problem/0989.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Et,[n(a,{to:"/tag/array.html"},{default:s(()=>[jt]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[Ct]),_:1})]),Ot,t("td",Vt,[t("a",Tt,[e("🀄️"),n(o)]),e(),t("a",zt,[e("🔗"),n(o)])])]),t("tr",null,[Bt,Rt,Yt,t("td",At,[n(a,{to:"/tag/linked-list.html"},{default:s(()=>[Mt]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[St]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Dt]),_:1})]),Ft,t("td",Gt,[t("a",Ht,[e("🀄️"),n(o)]),e(),t("a",Jt,[e("🔗"),n(o)])])]),t("tr",null,[Kt,Pt,Qt,t("td",Ut,[n(a,{to:"/tag/stack.html"},{default:s(()=>[Wt]),_:1}),e(),n(a,{to:"/tag/linked-list.html"},{default:s(()=>[Xt]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[Zt]),_:1})]),$t,t("td",te,[t("a",ee,[e("🀄️"),n(o)]),e(),t("a",ne,[e("🔗"),n(o)])])])])])])}const ce=r(_,[["render",se],["__file","0002.html.vue"]]);export{ce as default};
