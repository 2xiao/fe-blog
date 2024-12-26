import{_ as r,r as o,o as i,c as d,a as n,b as s,d as a,w as e,e as c}from"./app-3dvbhwow.js";const u={},k=n("h1",{id:"_27-二叉树的镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_27-二叉树的镜像","aria-hidden":"true"},"#"),s(" 27. 二叉树的镜像")],-1),h=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),f=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一棵二叉树的根节点 <code>root</code>，请左右翻转这棵二叉树，并返回其根节点。</p><p><strong>示例 1：</strong><img src="https://pic.leetcode.cn/1694686821-qlvjod-翻转二叉树.png" alt="" loading="lazy"></p><blockquote><p>输入：root = [5,7,9,8,3,2,4]</p><p>输出：[5,9,7,4,2,3,8]</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目范围在 <code>[0, 100]</code> 内</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul>',6),x={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以递归遍历（dfs）二叉树，交换每个节点的左右子节点，即可生成二叉树的镜像。</p><ul><li>终止条件： 当节点 <code>root</code> 为空时（即越过叶节点），则返回 <code>null</code> ；</li><li>初始化节点 <code>temp</code> ，用于暂存 <code>root</code> 的左子节点；</li><li>递归右子节点 <code>mirrorTree(root.right)</code> ，并将返回值作为 <code>root</code> 的左子节点 。</li><li>递归左子节点 <code>mirrorTree(temp)</code> ，并将返回值作为 <code>root</code> 的右子节点 。</li><li>返回当前节点 <code>root</code> ；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mirrorTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function T(j,N){const l=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),n("a",v,[b,a(p)])]),g,n("div",x,[w,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0226.html"},{default:e(()=>[s("第 226 题")]),_:1}),s(" 相同。")])]),y])}const E=r(u,[["render",T],["__file","jz_offer_27_1.html.vue"]]);export{E as default};
