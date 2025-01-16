import{_ as r,r as p,o as i,c as d,a as n,b as t,d as e,w as s,f as u,e as l}from"./app-KDJRKGep.js";const h={},k=n("h1",{id:"_543-二叉树的直径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_543-二叉树的直径","aria-hidden":"true"},"#"),t(" 543. 二叉树的直径")],-1),_=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/diameter-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/diameter-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the length of the <strong>diameter</strong> of the tree</em>.</p><p>The <strong>diameter</strong> of a binary tree is the <strong>length</strong> of the longest path between any two nodes in a tree. This path may or may not pass through the <code>root</code>.</p><p>The <strong>length</strong> of a path between two nodes is represented by the number of edges between them.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,4,5]</p><p>Output: 3</p><p>Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1,2]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^4]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉树的根节点，返回该树的 直径 。</p><p>二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 <code>root</code> 。</p><p>两节点之间路径的 长度 由它们之间边数表示。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>所谓二叉树的直径，就是左右子树的最大深度之和，那么直接的想法是对每个节点计算左右子树的最大高度，得出每个节点的直径，从而得出最大的那个直径。</p><p>但是由于 <code>maxDepth</code> 也是递归函数，所以上述方式时间复杂度较高。</p>',18),w=n("code",null,"maxDepth",-1),N=l(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">diameterOfBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,3),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"1522",-1),j=n("td",{style:{"text-align":"left"}},"N 叉树的直径 🔒",-1),D={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"树",-1),V=n("code",null,"深度优先搜索",-1),q=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/diameter-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/diameter-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"2246",-1),R=n("td",{style:{"text-align":"left"}},"相邻字符不同的最长路径",-1),z=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},S=n("code",null,"树",-1),A=n("code",null,"深度优先搜索",-1),F=n("code",null,"图",-1),H=n("code",null,"3+",-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/longest-path-with-different-adjacent-characters",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/longest-path-with-different-adjacent-characters",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",g,[b,e(o)]),t(),n("a",v,[y,e(o)])]),x,n("p",null,[t("这题类似 "),e(a,{to:"/problem/0366.html"},{default:s(()=>[t("第 366 题 寻找二叉树的叶子节点")]),_:1}),t(" ，需要灵活运用二叉树的后序遍历，在 "),w,t(" 的后序遍历位置顺便计算最大直径。")]),N,u(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[T,j,n("td",D,[e(a,{to:"/problem/1522.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",C,[e(a,{to:"/tag/tree.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[V]),_:1})]),q,n("td",B,[n("a",I,[t("🀄️"),e(o)]),t(),n("a",O,[t("🔗"),e(o)])])]),n("tr",null,[M,R,z,n("td",G,[e(a,{to:"/tag/tree.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/graph.html"},{default:s(()=>[F]),_:1}),t(),H]),J,n("td",K,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])])])])])}const Z=r(h,[["render",U],["__file","0543.html.vue"]]);export{Z as default};
