import{_ as r,r as c,o as p,c as i,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-OX-nYmHS.js";const h={},_=t("h1",{id:"_112-路径总和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_112-路径总和","aria-hidden":"true"},"#"),n(" 112. 路径总和")],-1),m=t("code",null,"树",-1),f=t("code",null,"深度优先搜索",-1),g=t("code",null,"广度优先搜索",-1),k=t("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a <strong>root-to-leaf</strong> path such that adding up all the values along the path equals <code>targetSum</code>.</p><p>A <strong>leaf</strong> is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22</p><p>Output: true</p><p>Explanation: The root-to-leaf path with the target sum is shown.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3], targetSum = 5</p><p>Output: false</p><p>Explanation: There two root-to-leaf paths in the tree:</p><p>(1 --&gt; 2): The sum is 3.</p><p>(1 --&gt; 3): The sum is 4.</p><p>There is no root-to-leaf path with sum = 5.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [], targetSum = 0</p><p>Output: false</p><p>Explanation: Since the tree is empty, there are no root-to-leaf paths.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归求解即可</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hasPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">==</span> targetSum<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">||</span>
		<span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> targetSum <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"113",-1),E={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=t("code",null,"树",-1),j=t("code",null,"深度优先搜索",-1),C=t("code",null,"回溯",-1),L=t("code",null,"1+",-1),M={style:{"text-align":"left"}},B=t("td",{style:{"text-align":"center"}},"124",-1),O={style:{"text-align":"left"}},P={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},R={style:{"text-align":"left"}},A=t("code",null,"树",-1),G=t("code",null,"深度优先搜索",-1),H=t("code",null,"动态规划",-1),D=t("code",null,"1+",-1),F={style:{"text-align":"left"}},J=t("td",{style:{"text-align":"center"}},"129",-1),K={style:{"text-align":"left"}},Q={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"树",-1),Y=t("code",null,"深度优先搜索",-1),Z=t("code",null,"二叉树",-1),$={style:{"text-align":"left"}},tt=t("td",{style:{"text-align":"center"}},"437",-1),et={style:{"text-align":"left"}},nt={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},st={style:{"text-align":"center"}},at={style:{"text-align":"left"}},ot=t("code",null,"树",-1),lt=t("code",null,"深度优先搜索",-1),ct=t("code",null,"二叉树",-1),rt={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"666",-1),it={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},_t=t("code",null,"树",-1),mt=t("code",null,"深度优先搜索",-1),ft=t("code",null,"数组",-1),gt=t("code",null,"2+",-1),kt={style:{"text-align":"left"}};function bt(xt,yt){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[_,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),t("a",b,[x,e(o)]),n(),t("a",y,[v,e(o)])]),w,d(" prettier-ignore "),t("table",null,[S,t("tbody",null,[t("tr",null,[I,t("td",E,[t("a",T,[n("路径总和 II"),e(o)])]),t("td",q,[e(a,{to:"/problem/0113.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",N,[e(a,{to:"/tag/tree.html"},{default:s(()=>[V]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[j]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[C]),_:1}),n(),L]),t("td",M,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[B,t("td",O,[t("a",P,[n("二叉树中的最大路径和"),e(o)])]),t("td",z,[e(a,{to:"/problem/0124.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",R,[e(a,{to:"/tag/tree.html"},{default:s(()=>[A]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[H]),_:1}),n(),D]),t("td",F,[e(l,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[J,t("td",K,[t("a",Q,[n("求根节点到叶节点数字之和"),e(o)])]),t("td",U,[e(a,{to:"/problem/0129.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",W,[e(a,{to:"/tag/tree.html"},{default:s(()=>[X]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[Z]),_:1})]),t("td",$,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[tt,t("td",et,[t("a",nt,[n("路径总和 III"),e(o)])]),t("td",st,[e(a,{to:"/problem/0437.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",at,[e(a,{to:"/tag/tree.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[lt]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[ct]),_:1})]),t("td",rt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[pt,t("td",it,[t("a",dt,[n("路径总和 IV 🔒"),e(o)])]),ut,t("td",ht,[e(a,{to:"/tag/tree.html"},{default:s(()=>[_t]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[mt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),n(),gt]),t("td",kt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const wt=r(h,[["render",bt],["__file","0112.html.vue"]]);export{wt as default};
