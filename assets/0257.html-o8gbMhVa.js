import{_ as p,r as l,o as r,c as i,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},_=t("h1",{id:"_257-二叉树的所有路径",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_257-二叉树的所有路径","aria-hidden":"true"},"#"),n(" 257. 二叉树的所有路径")],-1),k=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),f=t("code",null,"字符串",-1),m=t("code",null,"回溯",-1),b=t("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/binary-tree-paths",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/binary-tree-paths",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>all root-to-leaf paths in <strong>any order</strong></em>.</p><p>A <strong>leaf</strong> is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,null,5]</p><p>Output: [&quot;1-&gt;2-&gt;5&quot;,&quot;1-&gt;3&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [&quot;1&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，返回所有从根节点到叶子节点的路径。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>Google 的面试题，考察递归。</p><ol><li>从根节点开始，递归遍历左子树和右子树。</li><li>将当前节点的值与左子树或右子树返回的路径拼接，构建完整的路径。</li><li>当遍历到叶子节点时，将该路径存入结果中。</li><li>将左子树和右子树的路径合并，形成完整的从根节点到各个叶子节点的路径并返回。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是二叉树的节点数。由于需要访问所有 <code>n</code> 个节点，并且每次递归调用都进行字符串拼接操作，拼接的操作是与路径长度成比例的，在最坏情况下，树是链状的，路径的长度为 <code>O(n)</code>。因此，总体的时间复杂度为 <code>O(n^2)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用栈的最大深度由树的高度决定，在最好的情况下，树是完全平衡的，递归深度为 <code>O(log n)</code>；在最坏情况下，树是链状的，递归深度为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">binaryTreePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span> <span class="token operator">+</span> root<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> tempLeft <span class="token operator">=</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tempLeft<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> tempRight <span class="token operator">=</span> <span class="token function">binaryTreePaths</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tempRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&#39;-&gt;&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),O=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"113",-1),N=t("td",{style:{"text-align":"left"}},"路径总和 II",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},T=t("code",null,"树",-1),C=t("code",null,"深度优先搜索",-1),V=t("code",null,"回溯",-1),j=t("code",null,"1+",-1),R=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"988",-1),A=t("td",{style:{"text-align":"left"}},"从叶结点开始的最小字符串",-1),S=t("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=t("code",null,"树",-1),H=t("code",null,"深度优先搜索",-1),J=t("code",null,"字符串",-1),K=t("code",null,"2+",-1),M=t("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/smallest-string-starting-from-leaf",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/smallest-string-starting-from-leaf",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"2096",-1),Y=t("td",{style:{"text-align":"left"}},"从二叉树一个节点到另一个节点每一步的方向",-1),Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"树",-1),nt=t("code",null,"深度优先搜索",-1),et=t("code",null,"字符串",-1),st=t("code",null,"1+",-1),at=t("td",{style:{"text-align":"center"}},"🟠",-1),ot={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"};function pt(rt,it){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[_,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[v,e(o)]),n(),t("a",x,[w,e(o)])]),q,d(" prettier-ignore "),t("table",null,[O,t("tbody",null,[t("tr",null,[L,N,t("td",E,[e(a,{to:"/problem/0113.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",I,[e(a,{to:"/tag/tree.html"},{default:s(()=>[T]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[V]),_:1}),n(),j]),R,t("td",B,[t("a",P,[n("🀄️"),e(o)]),n(),t("a",G,[n("🔗"),e(o)])])]),t("tr",null,[z,A,S,t("td",D,[e(a,{to:"/tag/tree.html"},{default:s(()=>[F]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[J]),_:1}),n(),K]),M,t("td",Q,[t("a",U,[n("🀄️"),e(o)]),n(),t("a",W,[n("🔗"),e(o)])])]),t("tr",null,[X,Y,Z,t("td",$,[e(a,{to:"/tag/tree.html"},{default:s(()=>[tt]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[et]),_:1}),n(),st]),at,t("td",ot,[t("a",lt,[n("🀄️"),e(o)]),n(),t("a",ct,[n("🔗"),e(o)])])])])])])}const ut=p(h,[["render",pt],["__file","0257.html.vue"]]);export{ut as default};
