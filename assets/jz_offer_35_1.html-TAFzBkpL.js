import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-r0ql_Osa.js";const r={},k=n("h1",{id:"_35-复杂链表的复制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_35-复杂链表的复制","aria-hidden":"true"},"#"),s(" 35. 复杂链表的复制")],-1),m=n("code",null,"哈希表",-1),v=n("code",null,"链表",-1),h={href:"https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请实现 <code>copyRandomList</code> 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 <code>next</code> 指针指向下一个节点，还有一个 <code>random</code> 指针指向链表中的任意节点或者 <code>null</code>。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/12/18/e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]</p><p>输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/12/18/e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：head = [[1,1],[2,1]]</p><p>输出：[[1,1],[2,1]]</p></blockquote><p><strong>示例 3：</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/12/18/e3.png" alt="" loading="lazy"></strong></p><blockquote><p>输入：head = [[3,null],[3,0],[3,null]]</p><p>输出：[[3,null],[3,0],[3,null]]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p>输入：head = []</p><p>输出：[]</p><p>解释：给定的链表为空（空指针），因此返回 null。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-10000 &lt;= Node.val &lt;= 10000</code></li><li><code>Node.random</code> 为空（<code>null</code>）或指向链表中的节点。</li><li>节点数目不超过 <code>1000</code> 。</li></ul>',15),_={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于数据结构复制，不管怎么变，你就记住最简单的方式： <strong>一个哈希表 + 两次遍历</strong> 。</p><p>第一次遍历专门克隆节点，借助哈希表把原始节点和克隆节点的映射存储起来；第二次专门组装节点，照着原数据结构的样子，把克隆节点的指针组装起来。</p><p>题目如果让你克隆带随机指针的二叉树，或者克隆图，都是一样的，只不过是遍历的方式从 for 循环迭代遍历变成 traverse 递归函数遍历罢了。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, next, random) <span class="token punctuation">{</span>
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 第一次遍历，专门克隆节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clone<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 第二次遍历，专门组装节点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>random <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>random <span class="token operator">=</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>random<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(x,N){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(l)])]),f,n("div",_,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0138.html"},{default:t(()=>[s("第 138 题")]),_:1}),s(" 相同。")])]),w])}const z=i(r,[["render",y],["__file","jz_offer_35_1.html.vue"]]);export{z as default};
