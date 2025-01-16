import{_ as c,r as l,o as p,c as i,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-KDJRKGep.js";const h={},_=t("h1",{id:"_112-路径总和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_112-路径总和","aria-hidden":"true"},"#"),e(" 112. 路径总和")],-1),m=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),f=t("code",null,"广度优先搜索",-1),k=t("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a <strong>root-to-leaf</strong> path such that adding up all the values along the path equals <code>targetSum</code>.</p><p>A <strong>leaf</strong> is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22</p><p>Output: true</p><p>Explanation: The root-to-leaf path with the target sum is shown.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3], targetSum = 5</p><p>Output: false</p><p>Explanation: There two root-to-leaf paths in the tree:</p><p>(1 --&gt; 2): The sum is 3.</p><p>(1 --&gt; 3): The sum is 4.</p><p>There is no root-to-leaf path with sum = 5.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [], targetSum = 0</p><p>Output: false</p><p>Explanation: Since the tree is empty, there are no root-to-leaf paths.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归求解即可</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"113",-1),E=t("td",{style:{"text-align":"left"}},"路径总和 II",-1),T={style:{"text-align":"center"}},q={style:{"text-align":"left"}},N=t("code",null,"树",-1),V=t("code",null,"深度优先搜索",-1),j=t("code",null,"回溯",-1),C=t("code",null,"1+",-1),L=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"124",-1),R=t("td",{style:{"text-align":"left"}},"二叉树中的最大路径和",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},D=t("code",null,"树",-1),F=t("code",null,"深度优先搜索",-1),H=t("code",null,"动态规划",-1),J=t("code",null,"1+",-1),K=t("td",{style:{"text-align":"center"}},"🔴",-1),M={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},"129",-1),X=t("td",{style:{"text-align":"left"}},"求根节点到叶节点数字之和",-1),Y={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=t("code",null,"树",-1),tt=t("code",null,"深度优先搜索",-1),et=t("code",null,"二叉树",-1),nt=t("td",{style:{"text-align":"center"}},"🟠",-1),st={style:{"text-align":"center"}},at={href:"https://leetcode.cn/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/sum-root-to-leaf-numbers",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},"437",-1),rt=t("td",{style:{"text-align":"left"}},"路径总和 III",-1),ct={style:{"text-align":"center"}},pt={style:{"text-align":"left"}},it=t("code",null,"树",-1),dt=t("code",null,"深度优先搜索",-1),ut=t("code",null,"二叉树",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),_t={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},"666",-1),kt=t("td",{style:{"text-align":"left"}},"路径总和 IV 🔒",-1),bt=t("td",{style:{"text-align":"center"}},null,-1),xt={style:{"text-align":"left"}},yt=t("code",null,"树",-1),vt=t("code",null,"深度优先搜索",-1),wt=t("code",null,"数组",-1),St=t("code",null,"2+",-1),It=t("td",{style:{"text-align":"center"}},"🟠",-1),Et={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"};function Nt(Vt,jt){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[_,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),t("a",b,[x,n(o)]),e(),t("a",y,[v,n(o)])]),w,d(" prettier-ignore "),t("table",null,[S,t("tbody",null,[t("tr",null,[I,E,t("td",T,[n(a,{to:"/problem/0113.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(a,{to:"/tag/tree.html"},{default:s(()=>[N]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[V]),_:1}),e(),n(a,{to:"/tag/backtracking.html"},{default:s(()=>[j]),_:1}),e(),C]),L,t("td",B,[t("a",O,[e("🀄️"),n(o)]),e(),t("a",P,[e("🔗"),n(o)])])]),t("tr",null,[z,R,t("td",A,[n(a,{to:"/problem/0124.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",G,[n(a,{to:"/tag/tree.html"},{default:s(()=>[D]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[F]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[H]),_:1}),e(),J]),K,t("td",M,[t("a",Q,[e("🀄️"),n(o)]),e(),t("a",U,[e("🔗"),n(o)])])]),t("tr",null,[W,X,t("td",Y,[n(a,{to:"/problem/0129.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Z,[n(a,{to:"/tag/tree.html"},{default:s(()=>[$]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[tt]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[et]),_:1})]),nt,t("td",st,[t("a",at,[e("🀄️"),n(o)]),e(),t("a",ot,[e("🔗"),n(o)])])]),t("tr",null,[lt,rt,t("td",ct,[n(a,{to:"/problem/0437.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",pt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[it]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[dt]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[ut]),_:1})]),ht,t("td",_t,[t("a",mt,[e("🀄️"),n(o)]),e(),t("a",gt,[e("🔗"),n(o)])])]),t("tr",null,[ft,kt,bt,t("td",xt,[n(a,{to:"/tag/tree.html"},{default:s(()=>[yt]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[vt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[wt]),_:1}),e(),St]),It,t("td",Et,[t("a",Tt,[e("🀄️"),n(o)]),e(),t("a",qt,[e("🔗"),n(o)])])])])])])}const Lt=c(h,[["render",Nt],["__file","0112.html.vue"]]);export{Lt as default};
