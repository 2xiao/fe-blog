import{_ as c,r as l,o as i,c as p,a as n,b as t,d as e,w as a,f as u,e as d}from"./app-KDJRKGep.js";const h={},k=n("h1",{id:"_701-二叉搜索树中的插入操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_701-二叉搜索树中的插入操作","aria-hidden":"true"},"#"),t(" 701. 二叉搜索树中的插入操作")],-1),_=n("code",null,"树",-1),g=n("code",null,"二叉搜索树",-1),m=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/insert-into-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/insert-into-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> node of a binary search tree (BST) and a <code>value</code> to insert into the tree. Return <em>the root node of the BST after the insertion</em>. It is <strong>guaranteed</strong> that the new value does not exist in the original BST.</p><p><strong>Notice</strong> that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return <strong>any of them</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/05/insertbst.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3], val = 5</p><p>Output: [4,2,7,1,3,5]</p><p>Explanation: Another accepted tree is:</p></blockquote><figure><img src="https://assets.leetcode.com/uploads/2020/10/05/bst.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [40,20,60,10,30,50,70], val = 25</p><p>Output: [40,20,60,10,30,50,70,null,null,25]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5</p><p>Output: [4,2,7,1,3,5]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree will be in the range <code>[0, 10^4]</code>.</li><li><code>-10^8 &lt;= Node.val &lt;= 10^8</code></li><li>All the values <code>Node.val</code> are <strong>unique</strong>.</li><li><code>-10^8 &lt;= val &lt;= 10^8</code></li><li>It&#39;s <strong>guaranteed</strong> that <code>val</code> does not exist in the original BST.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 <strong>保证</strong> ，新值和原始二叉搜索树中的任意节点值都不同。注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 <strong>任意有效的结果</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>如果树为空（即根节点为 null），则新节点将成为树的根。</li><li>如果树不为空，我们从树的根节点开始，比较新节点的值与当前节点的值。 <ul><li>如果新节点的值小于当前节点的值，则递归地将新节点插入到当前节点的左子树中。</li><li>如果新节点的值大于当前节点的值，则递归地将新节点插入到当前节点的右子树中。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">insertIntoBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">insertIntoBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"700",-1),B=n("td",{style:{"text-align":"left"}},"二叉搜索树中的搜索",-1),N={style:{"text-align":"center"}},I={style:{"text-align":"left"}},S=n("code",null,"树",-1),q=n("code",null,"二叉搜索树",-1),E=n("code",null,"二叉树",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"};function O(R,z){const r=l("font"),s=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[k,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),e(s,{to:"/tag/tree.html"},{default:a(()=>[_]),_:1}),t(),e(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[g]),_:1}),t(),e(s,{to:"/tag/binary-tree.html"},{default:a(()=>[m]),_:1}),t("  🔗 "),n("a",f,[b,e(o)]),t(),n("a",v,[y,e(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[T,B,n("td",N,[e(s,{to:"/problem/0700.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",I,[e(s,{to:"/tag/tree.html"},{default:a(()=>[S]),_:1}),t(),e(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[q]),_:1}),t(),e(s,{to:"/tag/binary-tree.html"},{default:a(()=>[E]),_:1})]),j,n("td",C,[n("a",L,[t("🀄️"),e(o)]),t(),n("a",V,[t("🔗"),e(o)])])])])])])}const Y=c(h,[["render",O],["__file","0701.html.vue"]]);export{Y as default};
