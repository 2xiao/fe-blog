import{_ as c,r as a,o as p,c as d,a as n,b as e,d as s,w as o,f as r,e as u}from"./app-totCBmv-.js";const h={},k=n("h1",{id:"_328-奇偶链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_328-奇偶链表","aria-hidden":"true"},"#"),e(" 328. 奇偶链表")],-1),m=n("code",null,"链表",-1),v={href:"https://leetcode.cn/problems/odd-even-linked-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/odd-even-linked-list",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return <em>the reordered list</em>.</p><p>The <strong>first</strong> node is considered <strong>odd</strong> , and the <strong>second</strong> node is <strong>even</strong> , and so on.</p><p>Note that the relative order inside both the even and odd groups should remain as it was in the input.</p><p>You must solve the problem in <code>O(1)</code> extra space complexity and <code>O(n)</code> time complexity.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [1,3,5,2,4]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [2,1,3,5,6,4,7]</p><p>Output: [2,3,6,7,1,5,4]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the linked list is in the range <code>[0, 10^4]</code>.</li><li><code>-10^6 &lt;= Node.val &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>把所有奇数节点拼接在一起，然后再拼接上所有偶数节点。</p><p>请原地（in-place）实现，要求空间复杂度 O(1)，时间复杂度 O(n)。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>通过两个指针分别维护奇数节点和偶数节点的链表：</p><ol><li>判断链表是否为空或只有一个节点，直接返回链表。</li><li>使用两个指针： <ul><li><code>odd</code> 指向当前奇数索引的最后一个节点。</li><li><code>even</code> 指向当前偶数索引的最后一个节点，并用 <code>evenHead</code> 保存偶链表的头节点，方便最后拼接。</li></ul></li><li>遍历链表时： <ul><li>奇节点的下一个节点直接连接到偶节点的下一个节点，<code>odd</code> 移动到下一个奇节点。</li><li>偶节点的下一个节点直接连接到奇节点的下一个节点，<code>even</code> 移动到下一个偶节点。</li></ul></li><li>遍历结束后，将奇数链表的末尾连接到 <code>evenHead</code>。</li><li>返回头节点。</li></ol><p>例如：</p><ol><li>初始链表：<code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5</code></li><li>奇数节点：<code>2 -&gt; 3 -&gt; 5</code></li><li>偶数节点：<code>2 -&gt; 4</code></li><li>合并：<code>1 -&gt; 3 -&gt; 5 -&gt; 2 -&gt; 4</code></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历链表一次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，原地操作，无额外空间分配。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">oddEvenList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span> <span class="token comment">// 特殊情况处理</span>

	<span class="token keyword">let</span> odd <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">// 奇数链表的最后一个节点</span>
	<span class="token keyword">let</span> even <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 偶数链表的第一个节点</span>
	<span class="token keyword">let</span> evenHead <span class="token operator">=</span> even<span class="token punctuation">;</span> <span class="token comment">// 保存偶数链表的头节点</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>even <span class="token operator">&amp;&amp;</span> even<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		odd<span class="token punctuation">.</span>next <span class="token operator">=</span> even<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 连接下一个奇数节点</span>
		odd <span class="token operator">=</span> odd<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 移动奇数指针</span>
		even<span class="token punctuation">.</span>next <span class="token operator">=</span> odd<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 连接下一个偶数节点</span>
		even <span class="token operator">=</span> even<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 移动偶数指针</span>
	<span class="token punctuation">}</span>

	odd<span class="token punctuation">.</span>next <span class="token operator">=</span> evenHead<span class="token punctuation">;</span> <span class="token comment">// 将奇数链表的尾部连接到偶数链表的头部</span>
	<span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"725",-1),w=n("td",{style:{"text-align":"left"}},"分隔链表",-1),N=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},O=n("code",null,"链表",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/split-linked-list-in-parts",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/split-linked-list-in-parts",target:"_blank",rel:"noopener noreferrer"};function q(H,I){const i=a("font"),l=a("RouterLink"),t=a("ExternalLinkIcon");return p(),d("div",null,[k,n("p",null,[e("🟠 "),s(i,{color:"#ffb800"},{default:o(()=>[e("Medium")]),_:1}),e("  🔖  "),s(l,{to:"/tag/linked-list.html"},{default:o(()=>[m]),_:1}),e("  🔗 "),n("a",v,[g,s(t)]),e(),n("a",_,[b,s(t)])]),f,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,N,n("td",L,[s(l,{to:"/tag/linked-list.html"},{default:o(()=>[O]),_:1})]),E,n("td",j,[n("a",C,[e("🀄️"),s(t)]),e(),n("a",V,[e("🔗"),s(t)])])])])])])}const T=c(h,[["render",q],["__file","0328.html.vue"]]);export{T as default};
