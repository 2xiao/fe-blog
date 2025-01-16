import{_ as i,r as p,o as u,c as r,a as n,b as s,d as a,w as t,f as d,e as c}from"./app-KDJRKGep.js";const k={},h=n("h1",{id:"_117-填充每个节点的下一个右侧节点指针-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_117-填充每个节点的下一个右侧节点指针-ii","aria-hidden":"true"},"#"),s(" 117. 填充每个节点的下一个右侧节点指针 II")],-1),m=n("code",null,"树",-1),v=n("code",null,"深度优先搜索",-1),_=n("code",null,"广度优先搜索",-1),b=n("code",null,"链表",-1),g=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),N=c(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  struct Node <span class="token punctuation">{</span>
    int val<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>left<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>right<span class="token punctuation">;</span>
    Node <span class="token operator">*</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p><p>Initially, all next pointers are set to <code>NULL</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/02/15/117_sample.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4,5,null,7]</p><p>Output: [1,#,2,3,#,4,5,7,#]</p><p>Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with &#39;#&#39; signifying the end of each level.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 6000]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p><strong>Follow-up:</strong></p><ul><li>You may only use constant extra space.</li><li>The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>struct Node <span class="token punctuation">{</span>
  int val<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>left<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>right<span class="token punctuation">;</span>
  Node <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>填充它的每个 <code>next</code> 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 <code>next</code> 指针设置为 <code>NULL</code>。初始状态下，所有  <code>next</code> 指针都被设置为 <code>NULL</code>。</p><p>你只能使用常量级额外空间。 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>`,20),q=c(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">connect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>next <span class="token operator">=</span> queue<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"116",-1),I=n("td",{style:{"text-align":"left"}},"填充每个节点的下一个右侧节点指针",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},V=n("code",null,"树",-1),B=n("code",null,"深度优先搜索",-1),T=n("code",null,"广度优先搜索",-1),U=n("code",null,"2+",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/populating-next-right-pointers-in-each-node",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node",target:"_blank",rel:"noopener noreferrer"};function R(Y,A){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return u(),r("div",null,[h,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[x,a(o)]),s(),n("a",y,[w,a(o)])]),N,n("p",null,[s("和 "),a(e,{to:"/problem/0116.html"},{default:t(()=>[s("第 116 题")]),_:1}),s(" 一样，本质上是二叉树的层序遍历，基于广度优先搜索，将每层的节点放入队列，并遍历队列进行连接。")]),q,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[j,I,n("td",E,[a(e,{to:"/problem/0116.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(e,{to:"/tag/tree.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[T]),_:1}),s(),U]),F,n("td",z,[n("a",G,[s("🀄️"),a(o)]),s(),n("a",O,[s("🔗"),a(o)])])])])])])}const P=i(k,[["render",R],["__file","0117.html.vue"]]);export{P as default};
