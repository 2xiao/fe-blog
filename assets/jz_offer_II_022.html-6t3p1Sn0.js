import{_ as d,r as t,o as i,c as r,a as n,b as s,d as a,w as e,e as c}from"./app-OX-nYmHS.js";const u={},k=n("h1",{id:"_22-链表中环的入口节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_22-链表中环的入口节点","aria-hidden":"true"},"#"),s(" 22. 链表中环的入口节点")],-1),h=n("code",null,"哈希表",-1),m=n("code",null,"链表",-1),v=n("code",null,"双指针",-1),g={href:"https://leetcode.cn/problems/c32eOV",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 <code>next</code> 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 <code>null</code>。</p><p>为了表示给定链表中的环，我们使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意，<code>pos</code> 仅仅是用于标识环的情况，并不会作为参数传递到函数中。</strong></p><p><strong>说明：</strong> 不允许修改给定的链表。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [3,2,0,-4], pos = 1</p><p><strong>输出：</strong> 返回索引为 1 的链表节点</p><p><strong>解释：</strong> 链表中有一个环，其尾部连接到第二个节点。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/07/circularlinkedlist_test2.png)</p><blockquote><p><strong>输入：</strong> head = [1,2], pos = 0</p><p><strong>输出：</strong> 返回索引为 0 的链表节点</p><p><strong>解释：</strong> 链表中有一个环，其尾部连接到第一个节点。</p></blockquote><p><strong>示例 3：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/07/circularlinkedlist_test3.png)</p><blockquote><p><strong>输入：</strong> head = [1], pos = -1</p><p><strong>输出：</strong> 返回 null</p><p><strong>解释：</strong> 链表中没有环。</p></blockquote><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围在范围 <code>[0, 104]</code> 内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li><li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li></ul><p><strong>进阶：</strong> 是否可以使用 <code>O(1)</code> 空间解决此题？</p>',16),f={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),x=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过快慢指针的方法来解决。</p><ol><li>定义两个指针，一个慢指针 <code>slow</code>，一个快指针 <code>fast</code>，初始位置都在链表的头部。</li><li>使用循环，每轮循环中慢指针走一步，快指针走两步。</li><li>如果链表中存在环，快指针最终会追上慢指针，两者会相遇。如果链表中不存在环，快指针会先到达链表的末尾。</li><li>如果相遇，将其中一个指针重新放置在链表头部，然后两个指针以相同的速度向前移动，每次移动一步。</li><li>当两个指针再次相遇时，相遇点即为环的入口点。</li></ol><p>这个方法的原理证明如下：</p><p>假设链表头到环的入口点的距离为 <code>a</code> 步，环的入口点到相遇点的距离为 <code>b</code> 步，环的长度为 <code>c</code> 步。那么，在第一次相遇时，慢指针 <code>slow</code> 走了 <code>a + b</code> 步，快指针 <code>fast</code> 走了 <code>a + b + k * c</code> 步（其中 <code>k</code> 是快指针在环中转了 <code>k</code> 圈）。</p><p>由于快指针的速度是慢指针的两倍，所以：<code>2(a + b) = a + b + k * c</code></p><p>整理得：<code>a = (k - 1) * c + (c - b)</code></p><p>这意味着从相遇点继续走 <code>a</code> 步，将再次到达环的入口点。我们重新将 <code>slow</code> 指针放到链表头，然后 <code>slow</code> 和 <code>fast</code> 每次都移动一步，最终它们将在环的入口点相遇。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表中的节点数量。</p><ul><li>在第一阶段（找环阶段），快指针 <code>fast</code> 以两倍速度遍历链表，而慢指针 <code>slow</code> 以正常速度遍历链表。当链表中存在环时，快慢指针最终会在环中相遇。由于每次移动都会减少两者之间的距离，因此最坏情况下需要遍历整个链表，这一部分的时间复杂度为 <code>O(n)</code>。</li><li>在第二阶段（找环入口），两个指针从相遇点和头结点开始分别每次移动一步，最终会在环的入口处相遇。这个过程最多也需要遍历 <code>O(n)</code> 的节点。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
				fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function y(L,N){const p=t("font"),o=t("RouterLink"),l=t("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/linked-list.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/two-pointers.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",g,[_,a(l)])]),b,n("div",f,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0142.html"},{default:e(()=>[s("第 142 题")]),_:1}),s(" 相同。")])]),x])}const I=d(u,[["render",y],["__file","jz_offer_II_022.html.vue"]]);export{I as default};
