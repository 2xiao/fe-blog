import{_ as r,r as t,o as d,c as i,a as n,b as s,d as a,w as o,e as p}from"./app-9Xw5divW.js";const u={},k=n("h1",{id:"_68-ii-二叉树的最近公共祖先",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_68-ii-二叉树的最近公共祖先","aria-hidden":"true"},"#"),s(" 68-II. 二叉树的最近公共祖先")],-1),h=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),m=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),b=n("p",null,"给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。",-1),q={href:"https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"一个节点也可以是它自己的祖先",-1),x=p("<p>例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]</p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/15/binarytree.png)</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 节点 5 和节点 1 的最近公共祖先是节点 3。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4</p><p><strong>输出:</strong> 5</p><p><strong>解释:</strong> 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。</p></blockquote><p><strong>说明:</strong></p><ul><li>所有节点的值都是唯一的。</li><li>p、q 为不同节点且均存在于给定的二叉树中。</li></ul>",8),y={class:"hint-container warning"},E=n("p",{class:"hint-container-title"},"注意",-1),C=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道经典的题目，寻找任意一个二叉树中两个结点的 LCA 最近公共祖先，考察递归。</p><p>从根节点开始，递归地向左子树和右子树搜索。递归的终止条件有几种情况：</p><ol><li>如果当前节点为 <code>null</code>，表示遍历到空节点，直接返回 <code>null</code>。</li><li>如果当前节点等于 <code>p</code> 或 <code>q</code>，表示找到了其中一个节点，直接返回当前节点。</li></ol><p>递归步骤如下：</p><ol><li>递归地在左子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>left</code> 中。</li><li>递归地在右子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先，结果存储在变量 <code>right</code> 中。</li></ol><p>然后，根据 <code>left</code> 和 <code>right</code> 的情况，可以得出以下结论：</p><ul><li>如果 <code>left</code> 和 <code>right</code> 都不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 分别位于当前节点的左右子树，因此当前节点就是它们的最低共同祖先，直接返回当前节点。</li><li>如果只有 <code>left</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在左子树，最低共同祖先在左子树中，返回 <code>left</code>。</li><li>如果只有 <code>right</code> 不为 <code>null</code>，说明 <code>p</code> 和 <code>q</code> 都在右子树，最低共同祖先在右子树中，返回 <code>right</code>。</li></ul><p>递归法的关键在于将大问题划分为规模较小的子问题，然后通过递归调用来解决子问题，最终得到整体的解决方案。在这里，递归调用的子问题是在左右子树中寻找 <code>p</code> 和 <code>q</code> 的最低共同祖先。</p><p>递归法的优点在于其简洁性和直观性，但需要注意避免重复计算，以提高性能。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的总数，因为在最坏的情况下，需要检查每个节点来找到最近公共祖先。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度，空间复杂度主要由递归调用栈的深度决定。 <ul><li>在平衡树中，递归深度为 <code>O(h)</code>，其中 <code>h</code> 是树的高度。</li><li>在最坏情况下（例如，树是完全不平衡的），递归的深度可以达到 <code>O(n)</code>，其中 <code>n</code> 是树中节点的总数。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowestCommonAncestor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> root <span class="token operator">==</span> p <span class="token operator">||</span> root <span class="token operator">==</span> q<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">lowestCommonAncestor</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">return</span> left <span class="token operator">?</span> left <span class="token operator">:</span> right<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function N(j,A){const l=t("font"),e=t("RouterLink"),c=t("ExternalLinkIcon");return d(),i("div",null,[k,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:o(()=>[h]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:o(()=>[_]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",f,[g,a(c)])]),v,b,n("p",null,[n("a",q,[s("百度百科"),a(c)]),s('中最近公共祖先的定义为："对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（'),w,s(' ）。"')]),x,n("div",y,[E,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0236.html"},{default:o(()=>[s("第 236 题")]),_:1}),s(" 相同。")])]),C])}const T=r(u,[["render",N],["__file","jz_offer_68_2.html.vue"]]);export{T as default};
