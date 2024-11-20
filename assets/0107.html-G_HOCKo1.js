import{_ as i,r as l,o as r,c as u,a as n,b as t,d as s,w as e,f as d,e as p}from"./app-BBnmDgJV.js";const k={},h=n("h1",{id:"_107-二叉树的层序遍历-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_107-二叉树的层序遍历-ii","aria-hidden":"true"},"#"),t(" 107. 二叉树的层序遍历 II")],-1),_=n("code",null,"树",-1),m=n("code",null,"广度优先搜索",-1),f=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, return <em>the bottom-up level order traversal of its nodes &#39; values</em>. (i.e., from left to right, level by level from leaf to root).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: [[15,7],[9,20],[3]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 2000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你二叉树的根节点 <code>root</code> ，返回其节点值 <strong>自底向上的层序遍历</strong> 。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),w=p(`<p>可以使用广度优先遍历(BFS)实现，注意每层的节点从数组前端插入即可。</p><ol><li>首先将根节点放入队列中；</li><li>更新队列的长度 <code>len</code> ，遍历队列的前 <code>len</code> 个节点；</li><li>如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中；</li><li>将队列的前 <code>len</code> 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；</li><li>重复步骤 2、3、4，直至队列为空；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">levelOrderBottom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
			temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"102",-1),N=n("td",{style:{"text-align":"left"}},"二叉树的层序遍历",-1),E={style:{"text-align":"center"}},B={style:{"text-align":"left"}},C=n("code",null,"树",-1),L=n("code",null,"广度优先搜索",-1),V=n("code",null,"二叉树",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/binary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"637",-1),z=n("td",{style:{"text-align":"left"}},"二叉树的层平均值",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"树",-1),A=n("code",null,"深度优先搜索",-1),D=n("code",null,"广度优先搜索",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/average-of-levels-in-binary-tree",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",v,[b,s(o)]),t(),n("a",g,[y,s(o)])]),x,n("p",null,[t("这道题与 "),s(a,{to:"/problem/0102.html"},{default:e(()=>[t("第 102 题")]),_:1}),t(" 的解题思路相同，区别在于返回数组的顺序要求自底向上。")]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,N,n("td",E,[s(a,{to:"/problem/0102.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",B,[s(a,{to:"/tag/tree.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[V]),_:1})]),j,n("td",O,[n("a",T,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[S,z,n("td",F,[s(a,{to:"/problem/0637.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",G,[s(a,{to:"/tag/tree.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[D]),_:1}),t(),H]),J,n("td",K,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])])])])])}const Z=i(k,[["render",U],["__file","0107.html.vue"]]);export{Z as default};
