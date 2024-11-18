import{_ as c,r,o as i,c as p,a as e,b as t,d as n,w as s,f as d,e as u}from"./app-9Xw5divW.js";const h={},_=e("h1",{id:"_226-翻转二叉树",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_226-翻转二叉树","aria-hidden":"true"},"#"),t(" 226. 翻转二叉树")],-1),k=e("code",null,"树",-1),m=e("code",null,"深度优先搜索",-1),f=e("code",null,"广度优先搜索",-1),g=e("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3,6,9]</p><p>Output: [4,7,2,9,6,3,1]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,1,3]</p><p>Output: [2,3,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉树的根节点 <code>root</code> ，翻转这棵二叉树，并返回其根节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以递归遍历（dfs）二叉树，交换每个节点的左右子节点，即可生成二叉树的镜像。</p><ul><li>终止条件： 当节点 <code>root</code> 为空时（即越过叶节点），则返回 <code>null</code> ；</li><li>初始化节点 <code>temp</code> ，用于暂存 <code>root</code> 的左子节点；</li><li>递归右子节点 <code>invertTree(root.right)</code> ，并将返回值作为 <code>root</code> 的左子节点 。</li><li>递归左子节点 <code>invertTree(temp)</code> ，并将返回值作为 <code>root</code> 的右子节点 。</li><li>返回当前节点 <code>root</code> ；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">invertTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">invertTree</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),T=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),N=e("td",{style:{"text-align":"center"}},"2415",-1),E=e("td",{style:{"text-align":"left"}},"反转二叉树的奇数层",-1),q=e("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},C=e("code",null,"树",-1),I=e("code",null,"深度优先搜索",-1),L=e("code",null,"广度优先搜索",-1),V=e("code",null,"1+",-1),B=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/reverse-odd-levels-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/reverse-odd-levels-of-binary-tree",target:"_blank",rel:"noopener noreferrer"};function G(S,A){const l=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon");return i(),p("div",null,[_,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[k]),_:1}),t(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),t(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[f]),_:1}),t(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),e("a",b,[v,n(o)]),t(),e("a",x,[y,n(o)])]),w,d(" prettier-ignore "),e("table",null,[T,e("tbody",null,[e("tr",null,[N,E,q,e("td",j,[n(a,{to:"/tag/tree.html"},{default:s(()=>[C]),_:1}),t(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[I]),_:1}),t(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[L]),_:1}),t(),V]),B,e("td",O,[e("a",z,[t("🀄️"),n(o)]),t(),e("a",R,[t("🔗"),n(o)])])])])])])}const F=c(h,[["render",G],["__file","0226.html.vue"]]);export{F as default};
