import{_ as i,r as c,o as l,c as d,a as n,b as s,d as t,w as e,f as r,e as u}from"./app-9Xw5divW.js";const k={},h=n("h1",{id:"_2196-根据描述创建二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2196-根据描述创建二叉树","aria-hidden":"true"},"#"),s(" 2196. 根据描述创建二叉树")],-1),m=n("code",null,"树",-1),_=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/create-binary-tree-from-descriptions",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/create-binary-tree-from-descriptions",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer array <code>descriptions</code> where <code>descriptions[i] = [parenti, childi, isLefti]</code> indicates that <code>parenti</code> is the <strong>parent</strong> of <code>childi</code> in a <strong>binary</strong> tree of <strong>unique</strong> values. Furthermore,</p><ul><li>If <code>isLefti == 1</code>, then <code>childi</code> is the left child of <code>parenti</code>.</li><li>If <code>isLefti == 0</code>, then <code>childi</code> is the right child of <code>parenti</code>.</li></ul><p>Construct the binary tree described by <code>descriptions</code> and return <em>its <strong>root</strong></em>.</p><p>The test cases will be generated such that the binary tree is <strong>valid</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/09/example1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]</p><p>Output: [50,20,80,15,17,19]</p><p>Explanation: The root node is the node with value 50 since it has no parent.</p><p>The resulting binary tree is shown in the diagram.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/09/example2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]</p><p>Output: [1,2,null,null,3,4]</p><p>Explanation: The root node is the node with value 1 since it has no parent.</p><p>The resulting binary tree is shown in the diagram.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= descriptions.length &lt;= 10^4</code></li><li><code>descriptions[i].length == 3</code></li><li><code>1 &lt;= parenti, childi &lt;= 10^5</code></li><li><code>0 &lt;= isLefti &lt;= 1</code></li><li>The binary tree described by <code>descriptions</code> is valid.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>descriptions</code> ，其中 <code>descriptions[i] = [parenti, childi, isLefti]</code> 表示 <code>parenti</code> 是 <code>childi</code> 在 二叉树 中的 父节点，二叉树中各节点的值 互不相同 。此外：</p><ul><li>如果 <code>isLefti == 1</code> ，那么 <code>childi</code> 就是 <code>parenti</code> 的左子节点。</li><li>如果 <code>isLefti == 0</code> ，那么 <code>childi</code> 就是 <code>parenti</code> 的右子节点。 请你根据 <code>descriptions</code> 的描述来构造二叉树并返回其 根节点 。</li></ul><p>测试用例会保证可以构造出 有效 的二叉树。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以通过字典来存储树节点，然后根据描述构建二叉树。</p><ol><li><p>首先，创建一个空字典 <code>map</code>，用于存储树节点，键为节点的值，值为对应的节点对象 <code>TreeNode</code>。</p></li><li><p>遍历描述数组 <code>descriptions</code>，对于每个描述 <code>[parent, child, isLeft]</code>：</p><ul><li>如果 <code>parent</code> 不在 <code>map</code> 中，创建一个值为 <code>parent</code> 的树节点，并将其加入 <code>map</code>。</li><li>如果 <code>child</code> 不在 <code>map</code> 中，创建一个值为 <code>child</code> 的树节点，并将其加入 <code>map</code>。</li></ul></li><li><p>将所有节点的值存入 <code>set</code> 中，因为根节点没有父节点，所以可以通过排除所有有父节点的元素，找到根节点。</p></li><li><p>再次遍历描述数组，对于每个描述 <code>[parent, child, isLeft]</code>：</p></li></ol><ul><li>通过 <code>map</code> 取得对应的父节点和子节点对象。</li><li>根据 <code>isLeft</code> 的值判断，如果为 1，则将子节点作为左孩子加到父节点上；如果为 0，则将子节点作为右孩子加到父节点上。</li><li>删除 <code>set</code> 中 <code>child</code> 对应的值。</li></ul><ol start="5"><li>最后，<code>set</code> 中剩下的值即为根节点，在 <code>map</code> 中找到对应的节点对象返回，即为构建好的二叉树的根。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">descriptions</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">descriptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">,</span> isLeft<span class="token punctuation">]</span> <span class="token keyword">of</span> descriptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span>has<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span>has<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">)</span> map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>parent<span class="token punctuation">,</span> child<span class="token punctuation">,</span> isLeft<span class="token punctuation">]</span> <span class="token keyword">of</span> descriptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> node <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>isLeft<span class="token punctuation">)</span> node<span class="token punctuation">.</span>left <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> node<span class="token punctuation">.</span>right <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>
		set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"109",-1),N=n("td",{style:{"text-align":"left"}},"有序链表转换二叉搜索树",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"树",-1),q=n("code",null,"二叉搜索树",-1),V=n("code",null,"链表",-1),B=n("code",null,"2+",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1719",-1),S=n("td",{style:{"text-align":"left"}},"重构一棵树的方案数",-1),D=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},Y=n("code",null,"树",-1),A=n("code",null,"图",-1),G=n("td",{style:{"text-align":"center"}},"🔴",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/number-of-ways-to-reconstruct-a-tree",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return l(),d("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[y,t(o)]),s(),n("a",v,[x,t(o)])]),w,r(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[T,N,n("td",E,[t(a,{to:"/problem/0109.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/tree.html"},{default:e(()=>[I]),_:1}),s(),t(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[q]),_:1}),s(),t(a,{to:"/tag/linked-list.html"},{default:e(()=>[V]),_:1}),s(),B]),j,n("td",z,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[R,S,D,n("td",F,[t(a,{to:"/tag/tree.html"},{default:e(()=>[Y]),_:1}),s(),t(a,{to:"/tag/graph.html"},{default:e(()=>[A]),_:1})]),G,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])])])])])}const X=i(k,[["render",P],["__file","2196.html.vue"]]);export{X as default};
