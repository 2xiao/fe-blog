import{_ as r,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-JNmgkh1m.js";const h={},_=e("h1",{id:"_700-二叉搜索树中的搜索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_700-二叉搜索树中的搜索","aria-hidden":"true"},"#"),t(" 700. 二叉搜索树中的搜索")],-1),g=e("code",null,"树",-1),k=e("code",null,"二叉搜索树",-1),m=e("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary search tree (BST) and an integer <code>val</code>.</p><p>Find the node in the BST that the node&#39;s value equals <code>val</code> and return the subtree rooted with that node. If such a node does not exist, return <code>null</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3], val = 2</p><p>Output: [2,1,3]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3], val = 5</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 5000]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^7</code></li><li><code>root</code> is a binary search tree.</li><li><code>1 &lt;= val &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定二叉搜索树（BST）的根节点和一个值，你需要在 BST 中找到节点值等于给定值的节点，返回以该节点为根的子树，如果节点不存在，则返回 <code>NULL</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>二叉搜索树的性质</strong>：</p><ul><li>左子树的所有节点值小于根节点值。</li><li>右子树的所有节点值大于根节点值。</li></ul><p>利用 BST 左小右大的特性，可以避免搜索整棵二叉树去寻找元素，从而提升效率。</p><ol><li><p><strong>终止条件</strong>：</p><ul><li>如果当前节点为空，说明未找到目标值，返回 <code>null</code>。</li><li>如果当前节点值等于目标值 <code>val</code>，直接返回该节点。</li></ul></li><li><p><strong>递归查找</strong>：</p><ul><li>如果目标值 <code>val</code> 小于当前节点值，递归查找左子树。</li><li>如果目标值 <code>val</code> 大于当前节点值，递归查找右子树。</li></ul></li><li><p><strong>返回结果</strong>：递归返回目标节点或 <code>null</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：平均情况 <code>O(log n)</code>，每次递归会进入树的一半节点；最坏情况为 <code>O(n)</code>，树退化为链表。</li><li><strong>空间复杂度</strong>：平均情况 <code>O(log n)</code>，最坏情况<code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 如果当前节点为空或找到目标值，直接返回</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> val <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>

	<span class="token comment">// 目标值小于当前节点值，递归左子树</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 目标值大于当前节点值，递归右子树</span>
	<span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),T=e("td",{style:{"text-align":"center"}},"270",-1),B=e("td",{style:{"text-align":"left"}},"最接近的二叉搜索树值 🔒",-1),N=e("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},q=e("code",null,"树",-1),L=e("code",null,"深度优先搜索",-1),E=e("code",null,"二叉搜索树",-1),O=e("code",null,"2+",-1),j=e("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/closest-binary-search-tree-value",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/closest-binary-search-tree-value",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},"701",-1),R=e("td",{style:{"text-align":"left"}},"二叉搜索树中的插入操作",-1),F={style:{"text-align":"center"}},U={style:{"text-align":"left"}},Y=e("code",null,"树",-1),A=e("code",null,"二叉搜索树",-1),D=e("code",null,"二叉树",-1),G=e("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/insert-into-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/insert-into-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},"2476",-1),P=e("td",{style:{"text-align":"left"}},"二叉搜索树最近节点查询",-1),Q=e("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=e("code",null,"树",-1),Z=e("code",null,"深度优先搜索",-1),$=e("code",null,"二叉搜索树",-1),ee=e("code",null,"3+",-1),te=e("td",{style:{"text-align":"center"}},"🟠",-1),ne={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"};function oe(le,ce){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[_,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[g]),_:1}),t(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[k]),_:1}),t(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",f,[b,n(o)]),t(),e("a",v,[y,n(o)])]),x,p(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[T,B,N,e("td",S,[n(a,{to:"/tag/tree.html"},{default:s(()=>[q]),_:1}),t(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[L]),_:1}),t(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[E]),_:1}),t(),O]),j,e("td",C,[e("a",I,[t("🀄️"),n(o)]),t(),e("a",V,[t("🔗"),n(o)])])]),e("tr",null,[z,R,e("td",F,[n(a,{to:"/problem/0701.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",U,[n(a,{to:"/tag/tree.html"},{default:s(()=>[Y]),_:1}),t(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[A]),_:1}),t(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[D]),_:1})]),G,e("td",H,[e("a",J,[t("🀄️"),n(o)]),t(),e("a",K,[t("🔗"),n(o)])])]),e("tr",null,[M,P,Q,e("td",W,[n(a,{to:"/tag/tree.html"},{default:s(()=>[X]),_:1}),t(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Z]),_:1}),t(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[$]),_:1}),t(),ee]),te,e("td",ne,[e("a",se,[t("🀄️"),n(o)]),t(),e("a",ae,[t("🔗"),n(o)])])])])])])}const ie=r(h,[["render",oe],["__file","0700.html.vue"]]);export{ie as default};
