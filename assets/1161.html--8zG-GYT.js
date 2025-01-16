import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-KDJRKGep.js";const k={},m=n("h1",{id:"_1161-最大层内元素和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1161-最大层内元素和","aria-hidden":"true"},"#"),s(" 1161. 最大层内元素和")],-1),h=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, the level of its root is <code>1</code>, the level of its children is <code>2</code>, and so on.</p><p>Return the <strong>smallest</strong> level <code>x</code> such that the sum of all the values of nodes at level <code>x</code> is <strong>maximal</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/05/03/capture.JPG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,7,0,7,-8,null,null]</p><p>Output: 2</p><p>Explanation:</p><p>Level 1 sum = 1.</p><p>Level 2 sum = 7 + 0 = 7.</p><p>Level 3 sum = 7 + -8 = -1.</p><p>So we return the level with the maximum sum which is level 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 104]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二叉树的根节点 <code>root</code>。设根节点位于二叉树的第 <code>1</code> 层，而根节点的子节点位于第 <code>2</code> 层，依此类推。</p><p>请返回层内元素之和 <strong>最大</strong> 的那几层（可能只有一层）的层号，并返回其中 <strong>最小</strong> 的那个。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/08/17/capture.jpeg)</strong></p><blockquote><p><strong>输入：</strong> root = [1,7,0,7,-8,null,null]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>第 1 层各元素之和为 1，</p><p>第 2 层各元素之和为 7 + 0 = 7，</p><p>第 3 层各元素之和为 7 + -8 = -1，</p><p>所以我们返回第 2 层的层号，它的层内元素之和最大。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [989,null,10250,98693,-89388,null,null,null,-32127]</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li>树中的节点数在 <code>[1, 104]</code>范围内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>核心思想是使用 <strong>层序遍历（BFS）</strong> 来按层访问二叉树的每个节点，在每一层中，计算该层的节点值之和，并与当前的最大值比较，记录具有最大和的层号。</p><ol><li><p><strong>初始化</strong>：</p><ul><li>使用一个队列存储每层的节点。</li><li>初始化最大层和为 <code>-Infinity</code>，以及对应的层号。</li><li>设置当前层号。</li></ul></li><li><p><strong>层序遍历</strong>：</p><ul><li>每次遍历一层，取出队列中所有节点。</li><li>累加该层的节点值，比较是否是当前的最大和。</li></ul></li><li><p><strong>更新最大值</strong>：如果当前层和大于最大层和，则更新最大层和及其对应的层号。</p></li><li><p><strong>递进到下一层</strong>：把当前层节点的左右子节点加入队列，继续下一轮遍历。</p></li><li><p><strong>返回结果</strong>：遍历完成后，返回最大层和对应的层号。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点访问一次。</li><li><strong>空间复杂度</strong>：<code>O(w)</code>，<code>w</code> 为树的最大宽度，队列存储某层的所有节点。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxLevelSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 队列初始化</span>
	<span class="token keyword">let</span> maxSum <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 记录最大层和</span>
	<span class="token keyword">let</span> maxLevel <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录最大层的层号</span>
	<span class="token keyword">let</span> currentLevel <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前层号</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> levelSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前层的和</span>
		<span class="token keyword">let</span> levelSize <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 当前层的节点数量</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> levelSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出当前层的节点</span>
			levelSum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span> <span class="token comment">// 累加当前层的节点值</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加入左子节点</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加入右子节点</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新最大层和及其层号</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>levelSum <span class="token operator">&gt;</span> maxSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxSum <span class="token operator">=</span> levelSum<span class="token punctuation">;</span>
			maxLevel <span class="token operator">=</span> currentLevel<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		currentLevel<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 进入下一层</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxLevel<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2583",-1),S=n("td",{style:{"text-align":"left"}},"二叉树中的第 K 大层和",-1),I={style:{"text-align":"center"}},N={style:{"text-align":"left"}},E=n("code",null,"树",-1),C=n("code",null,"广度优先搜索",-1),V=n("code",null,"二叉树",-1),j=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2641",-1),G=n("td",{style:{"text-align":"left"}},"二叉树的堂兄弟节点 II",-1),F={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=n("code",null,"树",-1),M=n("code",null,"深度优先搜索",-1),P=n("code",null,"广度优先搜索",-1),A=n("code",null,"2+",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/cousins-in-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[v]),_:1}),s(),t(a,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[q,S,n("td",I,[t(a,{to:"/problem/2583.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",N,[t(a,{to:"/tag/tree.html"},{default:e(()=>[E]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/binary-tree.html"},{default:e(()=>[V]),_:1}),s(),j]),B,n("td",O,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[T,G,n("td",F,[t(a,{to:"/problem/2641.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",J,[t(a,{to:"/tag/tree.html"},{default:e(()=>[K]),_:1}),s(),t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[P]),_:1}),s(),A]),D,n("td",H,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])])])])])}const $=c(k,[["render",W],["__file","1161.html.vue"]]);export{$ as default};
