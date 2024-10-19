import{_ as p,r as c,o as i,c as r,a as n,d as e,b as s,w as t,f as d,e as u}from"./app-ynO5B_DP.js";const h={},k={id:"_109-有序链表转换二叉搜索树",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_109-有序链表转换二叉搜索树","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"树",-1),f=n("code",null,"二叉搜索树",-1),b=n("code",null,"链表",-1),g=n("code",null,"分治",-1),y=n("code",null,"二叉树",-1),x={href:"https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),T=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list where elements are sorted in <strong>ascending order</strong> , convert <em>it to a</em> <strong><em>height-balanced</em></strong> <em>binary search tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/linked.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [-10,-3,0,5,9]</p><p>Output: [0,-3,9,-10,null,5]</p><p>Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in <code>head</code> is in the range <code>[0, 2 * 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个单链表的头节点 <code>head</code> ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。</p><p>本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过递归的方式实现，使用快慢指针找到链表的中间节点，并以中间节点为根构建左右子树。</p><ol><li><p><strong>找到链表的中间节点：</strong> 为了构建平衡二叉搜索树，我们需要找到链表的中间节点作为根节点。可以通过快慢指针的方式，一个指针每次走两步，另一个指针每次走一步，直到快指针到达链表末尾，慢指针即为中间节点。在这个过程中，用一个 <code>prev</code> 指针指向中间节点的前一个节点，方便从中间切断链表。</p></li><li><p><strong>以中间节点为根构建左右子树：</strong> 将找到的中间节点作为当前子树的根节点，然后递归地构建左子树和右子树。对于左子树，递归处理链表的前半部分；对于右子树，递归处理链表的后半部分。</p></li><li><p><strong>递归终止条件：</strong> 在递归过程中，当链表为空或只有一个节点时，直接返回对应的树节点。这是递归的终止条件。</p></li><li><p><strong>返回根节点：</strong> 最终返回根节点作为整棵平衡二叉搜索树的根。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedListToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token comment">// 使用快慢指针找到链表中间节点</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prev <span class="token operator">=</span> slow<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 中间节点作为根节点</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 递归构建左右子树</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 切断链表</span>
    root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),N=n("td",{style:{"text-align":"center"}},"108",-1),B={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},C={href:"/problem/0108",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"left"}},V=n("code",null,"树",-1),j=n("code",null,"二叉搜索树",-1),I=n("code",null,"数组",-1),O=n("code",null,"2+",-1),M={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"2196",-1),z={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/create-binary-tree-from-descriptions",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},D={href:"/problem/2196",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"left"}},H=n("code",null,"树",-1),J=n("code",null,"数组",-1),K=n("code",null,"哈希表",-1),P=n("code",null,"1+",-1),Q={style:{"text-align":"left"}};function U(W,X){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[n("h1",k,[_,e(),n("a",m,[e("109. 有序链表转换二叉搜索树"),s(o)])]),n("p",null,[e("🟠 "),s(l,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(a,{to:"/outline/tag/tree.html"},{default:t(()=>[v]),_:1}),e(),s(a,{to:"/outline/tag/binary-search-tree.html"},{default:t(()=>[f]),_:1}),e(),s(a,{to:"/outline/tag/linked-list.html"},{default:t(()=>[b]),_:1}),e(),s(a,{to:"/outline/tag/divide-and-conquer.html"},{default:t(()=>[g]),_:1}),e(),s(a,{to:"/outline/tag/binary-tree.html"},{default:t(()=>[y]),_:1}),e("  🔗 "),n("a",x,[w,s(o)])]),T,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[N,n("td",B,[n("a",E,[e("将有序数组转换为二叉搜索树"),s(o)])]),n("td",q,[n("a",C,[e("[✓]"),s(o)])]),n("td",S,[s(a,{to:"/outline/tag/tree.html"},{default:t(()=>[V]),_:1}),e(),s(a,{to:"/outline/tag/binary-search-tree.html"},{default:t(()=>[j]),_:1}),e(),s(a,{to:"/outline/tag/array.html"},{default:t(()=>[I]),_:1}),e(),O]),n("td",M,[s(l,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1})])]),n("tr",null,[R,n("td",z,[n("a",G,[e("根据描述创建二叉树"),s(o)])]),n("td",A,[n("a",D,[e("[✓]"),s(o)])]),n("td",F,[s(a,{to:"/outline/tag/tree.html"},{default:t(()=>[H]),_:1}),e(),s(a,{to:"/outline/tag/array.html"},{default:t(()=>[J]),_:1}),e(),s(a,{to:"/outline/tag/hash-table.html"},{default:t(()=>[K]),_:1}),e(),P]),n("td",Q,[s(l,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1})])])])])])}const Z=p(h,[["render",U],["__file","0109.html.vue"]]);export{Z as default};
