import{_ as i,r as l,o as r,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-MXSjQbID.js";const h={},_=t("h1",{id:"_653-两数之和-iv-输入二叉搜索树",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_653-两数之和-iv-输入二叉搜索树","aria-hidden":"true"},"#"),e(" 653. 两数之和 IV - 输入二叉搜索树")],-1),k=t("code",null,"树",-1),m=t("code",null,"深度优先搜索",-1),g=t("code",null,"广度优先搜索",-1),f=t("code",null,"二叉搜索树",-1),b=t("code",null,"哈希表",-1),v=t("code",null,"双指针",-1),y=t("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),I={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),N=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary search tree and an integer <code>k</code>, return <code>true</code> <em>if there exist two elements in the BST such that their sum is equal to</em> <code>k</code>, <em>or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,3,6,2,4,null,7], k = 9</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,3,6,2,4,null,7], k = 28</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^4]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li><li><code>root</code> is guaranteed to be a <strong>valid</strong> binary search tree.</li><li><code>-10^5 &lt;= k &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉搜索树 <code>root</code> 和一个目标结果 <code>k</code>，如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 <code>true</code>。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> root = [5,3,6,2,4,null,7], k = 9</p><p><strong>输出:</strong> true</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> root = [5,3,6,2,4,null,7], k = 28</p><p><strong>输出:</strong> false</p></blockquote><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[1, 10^4]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li><li>题目数据保证，输入的 <code>root</code> 是一棵 <strong>有效</strong> 的二叉搜索树</li><li><code>-10^5 &lt;= k &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题目要求在二叉树中找到是否存在两个节点，它们的值之和等于给定的数值 <code>k</code>。可以使用 <strong>深度优先搜索 (DFS)</strong> 配合 <strong>哈希集合 (Set)</strong> 来高效地解决这个问题。</p><ol><li><p>初始化一个空的哈希集合 <code>set</code>，用于存储已访问的节点值。</p></li><li><p>使用深度优先搜索（DFS）遍历整棵树。通过递归访问每一个节点，并在每个节点处检查是否能够找到符合条件的两个值。</p><ul><li>由于需要查找两个节点的值之和等于 <code>k</code>，当访问到一个节点时，检查 <code>k - node.val</code> 是否已经出现在哈希集合中。</li><li>如果 <code>k - node.val</code> 已经在哈希集合中，说明找到了满足条件的两个节点，它们的值之和等于 <code>k</code>，此时返回 <code>true</code>。</li><li>否则，将当前节点的值加入集合中，继续遍历其左子树和右子树。</li></ul></li><li><p>从根节点调用 <code>dfs</code>，如果找到符合条件的节点，则返回 <code>true</code>，否则返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点只被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，哈希集合需要存储每个节点的值，最坏情况下要存储所有节点的治。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findTarget</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储已访问的节点值</span>

	<span class="token comment">// 深度优先搜索 (DFS) 函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果当前节点为空，返回 false</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>k <span class="token operator">-</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果存在一个已访问的值，使得 k - node.val == 目标值</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将当前节点的值加入集合</span>
		<span class="token comment">// 递归遍历左子树或右子树</span>
		<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从根节点开始进行 DFS</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"1",-1),E=t("td",{style:{"text-align":"left"}},"两数之和",-1),V={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"数组",-1),T=t("code",null,"哈希表",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"167",-1),R=t("td",{style:{"text-align":"left"}},"两数之和 II - 输入有序数组",-1),G={style:{"text-align":"center"}},A={style:{"text-align":"left"}},H=t("code",null,"数组",-1),J=t("code",null,"双指针",-1),K=t("code",null,"二分查找",-1),M=t("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},"170",-1),X=t("td",{style:{"text-align":"left"}},"两数之和 III - 数据结构设计 🔒",-1),Y={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=t("code",null,"设计",-1),tt=t("code",null,"数组",-1),et=t("code",null,"哈希表",-1),nt=t("code",null,"2+",-1),st=t("td",{style:{"text-align":"center"}},"🟢",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://leetcode.com/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},"1214",-1),it=t("td",{style:{"text-align":"left"}},"查找两棵二叉搜索树之和 🔒",-1),rt=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},dt=t("code",null,"栈",-1),ut=t("code",null,"树",-1),ht=t("code",null,"深度优先搜索",-1),_t=t("code",null,"4+",-1),kt=t("td",{style:{"text-align":"center"}},"🟠",-1),mt={style:{"text-align":"center"}},gt={href:"https://leetcode.cn/problems/two-sum-bsts",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/two-sum-bsts",target:"_blank",rel:"noopener noreferrer"};function bt(vt,yt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/tree.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[g]),_:1}),e(),n(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[f]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[b]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[v]),_:1}),e(),n(a,{to:"/tag/binary-tree.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",x,[w,n(o)]),e(),t("a",I,[q,n(o)])]),N,d(" prettier-ignore "),t("table",null,[S,t("tbody",null,[t("tr",null,[j,E,t("td",V,[n(a,{to:"/problem/0001.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1})]),z,t("td",B,[t("a",D,[e("🀄️"),n(o)]),e(),t("a",F,[e("🔗"),n(o)])])]),t("tr",null,[O,R,t("td",G,[n(a,{to:"/problem/0167.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[J]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[K]),_:1})]),M,t("td",P,[t("a",Q,[e("🀄️"),n(o)]),e(),t("a",U,[e("🔗"),n(o)])])]),t("tr",null,[W,X,t("td",Y,[n(a,{to:"/problem/0170.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Z,[n(a,{to:"/tag/design.html"},{default:s(()=>[$]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[et]),_:1}),e(),nt]),st,t("td",at,[t("a",ot,[e("🀄️"),n(o)]),e(),t("a",lt,[e("🔗"),n(o)])])]),t("tr",null,[ct,it,rt,t("td",pt,[n(a,{to:"/tag/stack.html"},{default:s(()=>[dt]),_:1}),e(),n(a,{to:"/tag/tree.html"},{default:s(()=>[ut]),_:1}),e(),n(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[ht]),_:1}),e(),_t]),kt,t("td",mt,[t("a",gt,[e("🀄️"),n(o)]),e(),t("a",ft,[e("🔗"),n(o)])])])])])])}const wt=i(h,[["render",bt],["__file","0653.html.vue"]]);export{wt as default};
