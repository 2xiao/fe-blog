import{_ as r,r as l,o as d,c as i,a as e,b as t,d as n,w as o,f as p,e as _}from"./app-MXSjQbID.js";const h={},u=e("h1",{id:"_236-二叉树的最近公共祖先",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_236-二叉树的最近公共祖先","aria-hidden":"true"},"#"),t(" 236. 二叉树的最近公共祖先")],-1),f=e("code",null,"树",-1),g=e("code",null,"深度优先搜索",-1),m=e("code",null,"二叉树",-1),k={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),w=e("p",null,"Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",-1),q={href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"p",-1),L=e("code",null,"q",-1),A=e("code",null,"T",-1),I=e("code",null,"p",-1),N=e("code",null,"q",-1),T=e("strong",null,"a node to be a descendant of itself",-1),E=_(`<p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1</p><p>Output: 3</p><p>Explanation: The LCA of nodes 5 and 1 is 3.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4</p><p>Output: 5</p><p>Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1,2], p = 1, q = 2</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[2, 10^5]</code>.</li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li>All <code>Node.val</code> are <strong>unique</strong>.</li><li><code>p != q</code></li><li><code>p</code> and <code>q</code> will exist in the tree.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p><p>维基百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道经典的题目，寻找任意一个二叉树中两个结点的 LCA 最近公共祖先，考察递归。</p><p>从根节点开始，递归地向左子树和右子树搜索。递归的终止条件有几种情况：</p><ol><li>如果当前节点为 <code>null</code>，表示遍历到空节点，直接返回 <code>null</code>。</li><li>如果当前节点等于 <code>p</code> 或 <code>q</code>，表示找到了其中一个节点，直接返回当前节点。</li></ol><p>递归步骤如下：</p><ol><li>递归地在左子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>left</code> 中。</li><li>递归地在右子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>right</code> 中。</li></ol><p>然后，根据 <code>left</code> 和 <code>right</code> 的情况，可以得出以下结论：</p><ul><li>如果 <code>left</code> 和 <code>right</code> 都不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 分别位于当前节点的左右子树，因此当前节点就是它们的最低共同祖先，直接返回当前节点。</li><li>如果只有 <code>left</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在左子树，最低共同祖先在左子树中，返回 <code>left</code>。</li><li>如果只有 <code>right</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在右子树，最低共同祖先在右子树中，返回 <code>right</code>。</li></ul><p>递归法的关键在于将大问题划分为规模较小的子问题，然后通过递归调用来解决子问题，最终得到整体的解决方案。在这里，递归调用的子问题是在左右子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先。</p><p>递归法的优点在于其简洁性和直观性，但需要注意避免重复计算，以提高性能。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的总数，因为在最坏的情况下，需要检查每个节点来找到最近公共祖先。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，空间复杂度主要由递归调用栈的深度决定。 <ul><li>在平衡树中，递归深度为 <code>O(h)</code>，其中 <code>h</code> 是树的高度。</li><li>在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 <code>O(n)</code>，其中 <code>n</code> 是树中节点的总数。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">return</span> left <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),O=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),V=e("td",{style:{"text-align":"center"}},"235",-1),z=e("td",{style:{"text-align":"left"}},"二叉搜索树的最近公共祖先",-1),j={style:{"text-align":"center"}},B={style:{"text-align":"left"}},R=e("code",null,"树",-1),G=e("code",null,"深度优先搜索",-1),M=e("code",null,"二叉搜索树",-1),S=e("code",null,"1+",-1),W=e("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},J=e("td",{style:{"text-align":"center"}},"1257",-1),K=e("td",{style:{"text-align":"left"}},"最小公共区域 🔒",-1),P=e("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=e("code",null,"树",-1),X=e("code",null,"深度优先搜索",-1),Y=e("code",null,"广度优先搜索",-1),Z=e("code",null,"3+",-1),$=e("td",{style:{"text-align":"center"}},"🟠",-1),ee={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/smallest-common-region",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/smallest-common-region",target:"_blank",rel:"noopener noreferrer"},oe=e("td",{style:{"text-align":"center"}},"1644",-1),se=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 II 🔒",-1),ae=e("td",{style:{"text-align":"center"}},null,-1),le={style:{"text-align":"left"}},ce=e("code",null,"树",-1),re=e("code",null,"深度优先搜索",-1),de=e("code",null,"二叉树",-1),ie=e("td",{style:{"text-align":"center"}},"🟠",-1),pe={style:{"text-align":"center"}},_e={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},he={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},ue=e("td",{style:{"text-align":"center"}},"1650",-1),fe=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 III 🔒",-1),ge=e("td",{style:{"text-align":"center"}},null,-1),me={style:{"text-align":"left"}},ke=e("code",null,"树",-1),be=e("code",null,"哈希表",-1),ye=e("code",null,"双指针",-1),xe=e("code",null,"1+",-1),ve=e("td",{style:{"text-align":"center"}},"🟠",-1),we={style:{"text-align":"center"}},qe={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii",target:"_blank",rel:"noopener noreferrer"},Le=e("td",{style:{"text-align":"center"}},"1676",-1),Ae=e("td",{style:{"text-align":"left"}},"二叉树的最近公共祖先 IV 🔒",-1),Ie=e("td",{style:{"text-align":"center"}},null,-1),Ne={style:{"text-align":"left"}},Te=e("code",null,"树",-1),Ee=e("code",null,"深度优先搜索",-1),Oe=e("code",null,"哈希表",-1),Ve=e("code",null,"1+",-1),ze=e("td",{style:{"text-align":"center"}},"🟠",-1),je={style:{"text-align":"center"}},Be={href:"https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iv",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv",target:"_blank",rel:"noopener noreferrer"},Ge=e("td",{style:{"text-align":"center"}},"2096",-1),Me=e("td",{style:{"text-align":"left"}},"从二叉树一个节点到另一个节点每一步的方向",-1),Se=e("td",{style:{"text-align":"center"}},null,-1),We={style:{"text-align":"left"}},De=e("code",null,"树",-1),Fe=e("code",null,"深度优先搜索",-1),He=e("code",null,"字符串",-1),Je=e("code",null,"1+",-1),Ke=e("td",{style:{"text-align":"center"}},"🟠",-1),Pe={style:{"text-align":"center"}},Qe={href:"https://leetcode.cn/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"},Xe=e("td",{style:{"text-align":"center"}},"2225",-1),Ye=e("td",{style:{"text-align":"left"}},"找出输掉零场或一场比赛的玩家",-1),Ze=e("td",{style:{"text-align":"center"}},null,-1),$e={style:{"text-align":"left"}},et=e("code",null,"数组",-1),tt=e("code",null,"哈希表",-1),nt=e("code",null,"计数",-1),ot=e("code",null,"1+",-1),st=e("td",{style:{"text-align":"center"}},"🟠",-1),at={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/find-players-with-zero-or-one-losses",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/find-players-with-zero-or-one-losses",target:"_blank",rel:"noopener noreferrer"},rt=e("td",{style:{"text-align":"center"}},"2509",-1),dt=e("td",{style:{"text-align":"left"}},"查询树中环的长度",-1),it=e("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},_t=e("code",null,"树",-1),ht=e("code",null,"数组",-1),ut=e("code",null,"二叉树",-1),ft=e("td",{style:{"text-align":"center"}},"🔴",-1),gt={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/cycle-length-queries-in-a-tree",target:"_blank",rel:"noopener noreferrer"},kt={href:"https://leetcode.com/problems/cycle-length-queries-in-a-tree",target:"_blank",rel:"noopener noreferrer"};function bt(yt,xt){const c=l("font"),s=l("RouterLink"),a=l("ExternalLinkIcon");return d(),i("div",null,[u,e("p",null,[t("🟠 "),n(c,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔖  "),n(s,{to:"/tag/tree.html"},{default:o(()=>[f]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[g]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[m]),_:1}),t("  🔗 "),e("a",k,[b,n(a)]),t(),e("a",y,[x,n(a)])]),v,w,e("p",null,[t("According to the "),e("a",q,[t("definition of LCA on Wikipedia"),n(a)]),t(': "The lowest common ancestor is defined between two nodes '),C,t(" and "),L,t(" as the lowest node in "),A,t(" that has both "),I,t(" and "),N,t(" as descendants (where we allow "),T,t(' )."')]),E,p(" prettier-ignore "),e("table",null,[O,e("tbody",null,[e("tr",null,[V,z,e("td",j,[n(s,{to:"/problem/0235.html"},{default:o(()=>[t("[✓]")]),_:1})]),e("td",B,[n(s,{to:"/tag/tree.html"},{default:o(()=>[R]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[G]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:o(()=>[M]),_:1}),t(),S]),W,e("td",D,[e("a",F,[t("🀄️"),n(a)]),t(),e("a",H,[t("🔗"),n(a)])])]),e("tr",null,[J,K,P,e("td",Q,[n(s,{to:"/tag/tree.html"},{default:o(()=>[U]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[X]),_:1}),t(),n(s,{to:"/tag/breadth-first-search.html"},{default:o(()=>[Y]),_:1}),t(),Z]),$,e("td",ee,[e("a",te,[t("🀄️"),n(a)]),t(),e("a",ne,[t("🔗"),n(a)])])]),e("tr",null,[oe,se,ae,e("td",le,[n(s,{to:"/tag/tree.html"},{default:o(()=>[ce]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[re]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[de]),_:1})]),ie,e("td",pe,[e("a",_e,[t("🀄️"),n(a)]),t(),e("a",he,[t("🔗"),n(a)])])]),e("tr",null,[ue,fe,ge,e("td",me,[n(s,{to:"/tag/tree.html"},{default:o(()=>[ke]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[be]),_:1}),t(),n(s,{to:"/tag/two-pointers.html"},{default:o(()=>[ye]),_:1}),t(),xe]),ve,e("td",we,[e("a",qe,[t("🀄️"),n(a)]),t(),e("a",Ce,[t("🔗"),n(a)])])]),e("tr",null,[Le,Ae,Ie,e("td",Ne,[n(s,{to:"/tag/tree.html"},{default:o(()=>[Te]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[Ee]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[Oe]),_:1}),t(),Ve]),ze,e("td",je,[e("a",Be,[t("🀄️"),n(a)]),t(),e("a",Re,[t("🔗"),n(a)])])]),e("tr",null,[Ge,Me,Se,e("td",We,[n(s,{to:"/tag/tree.html"},{default:o(()=>[De]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[Fe]),_:1}),t(),n(s,{to:"/tag/string.html"},{default:o(()=>[He]),_:1}),t(),Je]),Ke,e("td",Pe,[e("a",Qe,[t("🀄️"),n(a)]),t(),e("a",Ue,[t("🔗"),n(a)])])]),e("tr",null,[Xe,Ye,Ze,e("td",$e,[n(s,{to:"/tag/array.html"},{default:o(()=>[et]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[tt]),_:1}),t(),n(s,{to:"/tag/counting.html"},{default:o(()=>[nt]),_:1}),t(),ot]),st,e("td",at,[e("a",lt,[t("🀄️"),n(a)]),t(),e("a",ct,[t("🔗"),n(a)])])]),e("tr",null,[rt,dt,it,e("td",pt,[n(s,{to:"/tag/tree.html"},{default:o(()=>[_t]),_:1}),t(),n(s,{to:"/tag/array.html"},{default:o(()=>[ht]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[ut]),_:1})]),ft,e("td",gt,[e("a",mt,[t("🀄️"),n(a)]),t(),e("a",kt,[t("🔗"),n(a)])])])])])])}const wt=r(h,[["render",bt],["__file","0236.html.vue"]]);export{wt as default};
