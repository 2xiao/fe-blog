import{_ as l,r as p,o as i,c as d,a as n,b as s,d as a,w as t,f as u,e as r}from"./app-3dvbhwow.js";const k="/leetcode-js/assets/106-CkwIJTG_.png",h={},m=n("h1",{id:"_106-从中序与后序遍历序列构造二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_106-从中序与后序遍历序列构造二叉树","aria-hidden":"true"},"#"),s(" 106. 从中序与后序遍历序列构造二叉树")],-1),_=n("code",null,"树",-1),b=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),g=n("code",null,"分治",-1),v=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),T=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>inorder</code> and <code>postorder</code> where <code>inorder</code> is the inorder traversal of a binary tree and <code>postorder</code> is the postorder traversal of the same tree, construct and return <em>the binary tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]</p><p>Output: [3,9,20,null,null,15,7]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: inorder = [-1], postorder = [-1]</p><p>Output: [-1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= inorder.length &lt;= 3000</code></li><li><code>postorder.length == inorder.length</code></li><li><code>-3000 &lt;= inorder[i], postorder[i] &lt;= 3000</code></li><li><code>inorder</code> and <code>postorder</code> consist of <strong>unique</strong> values.</li><li>Each value of <code>postorder</code> also appears in <code>inorder</code>.</li><li><code>inorder</code> is <strong>guaranteed</strong> to be the inorder traversal of the tree.</li><li><code>postorder</code> is <strong>guaranteed</strong> to be the postorder traversal of the tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>根据一棵树的中序遍历与后序遍历构造二叉树。</p><p>注意: 你可以假设树中没有重复的元素。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),q=r('<p>构造二叉树，第一件事一定是找根节点，然后想办法构造左右子树。</p><p>后序遍历结果最后一个值就是根节点的值，然后再根据中序遍历结果确定左右子树的节点。</p><p>不断的递归直到所有的树都生成完成。</p><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>递归时直接传入需要的 slice 范围作为输入, 可以避免申请对应 inorder 索引的内存。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">postorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">inorder<span class="token punctuation">,</span> postorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>postorder<span class="token punctuation">[</span>postorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> inorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span> postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">buildTree</span><span class="token punctuation">(</span>
				inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				postorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> postorder<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"105",-1),j=n("td",{style:{"text-align":"left"}},"从前序与中序遍历序列构造二叉树",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=n("code",null,"树",-1),B=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),G=n("code",null,"2+",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",target:"_blank",rel:"noopener noreferrer"};function S(A,D){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",y,[x,a(o)]),s(),n("a",w,[N,a(o)])]),T,n("p",null,[s("思路与 "),a(e,{to:"/problem/0105.html"},{default:t(()=>[s("第 105 题")]),_:1}),s(" 类似。")]),q,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[E,j,n("td",I,[a(e,{to:"/problem/0105.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/tree.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[z]),_:1}),s(),G]),O,n("td",R,[n("a",J,[s("🀄️"),a(o)]),s(),n("a",M,[s("🔗"),a(o)])])])])])])}const H=l(h,[["render",S],["__file","0106.html.vue"]]);export{H as default};
