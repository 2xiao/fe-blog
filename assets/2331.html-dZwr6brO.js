import{_ as r,r as l,o as d,c as i,a as e,b as t,d as n,w as o,f as p,e as u}from"./app-r0ql_Osa.js";const h={},g=e("h1",{id:"_2331-计算布尔二叉树的值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2331-计算布尔二叉树的值","aria-hidden":"true"},"#"),t(" 2331. 计算布尔二叉树的值")],-1),_=e("code",null,"树",-1),f=e("code",null,"深度优先搜索",-1),k=e("code",null,"二叉树",-1),m={href:"https://leetcode.cn/problems/evaluate-boolean-binary-tree",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/evaluate-boolean-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a <strong>full binary tree</strong> with the following properties:</p><ul><li><strong>Leaf nodes</strong> have either the value <code>0</code> or <code>1</code>, where <code>0</code> represents <code>False</code> and <code>1</code> represents <code>True</code>.</li><li><strong>Non-leaf nodes</strong> have either the value <code>2</code> or <code>3</code>, where <code>2</code> represents the boolean <code>OR</code> and <code>3</code> represents the boolean <code>AND</code>.</li></ul><p>The <strong>evaluation</strong> of a node is as follows:</p><ul><li>If the node is a leaf node, the evaluation is the <strong>value</strong> of the node, i.e. <code>True</code> or <code>False</code>.</li><li>Otherwise, <strong>evaluate</strong> the node&#39;s two children and <strong>apply</strong> the boolean operation of its value with the children&#39;s evaluations.</li></ul><p>Return _the boolean result of <strong>evaluating</strong> the _<code>root</code> <em>node.</em></p><p>A <strong>full binary tree</strong> is a binary tree where each node has either <code>0</code> or <code>2</code> children.</p><p>A <strong>leaf node</strong> is a node that has zero children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,1,3,null,null,0,1]</p><p>Output: true</p><p>Explanation: The above diagram illustrates the evaluation process.</p><p>The AND node evaluates to False AND True = False.</p><p>The OR node evaluates to True OR False = True.</p><p>The root node evaluates to True, so we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [0]</p><p>Output: false</p><p>Explanation: The root node is a leaf node and it evaluates to false, so we return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>0 &lt;= Node.val &lt;= 3</code></li><li>Every node has either <code>0</code> or <code>2</code> children.</li><li>Leaf nodes have a value of <code>0</code> or <code>1</code>.</li><li>Non-leaf nodes have a value of <code>2</code> or <code>3</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 <strong>完整二叉树</strong> 的根，这棵树有以下特征：</p><ul><li><strong>叶子节点</strong> 要么值为 <code>0</code> 要么值为 <code>1</code> ，其中 <code>0</code> 表示 <code>False</code> ，<code>1</code> 表示 <code>True</code> 。</li><li><strong>非叶子节点</strong> 要么值为 <code>2</code> 要么值为 <code>3</code> ，其中 <code>2</code> 表示逻辑或 <code>OR</code> ，<code>3</code> 表示逻辑与 <code>AND</code> 。</li></ul><p><strong>计算</strong> 一个节点的值方式如下：</p><ul><li>如果节点是个叶子节点，那么节点的 <strong>值</strong> 为它本身，即 <code>True</code> 或者 <code>False</code> 。</li><li>否则，<strong>计算</strong> 两个孩子的节点值，然后将该节点的运算符对两个孩子值进行 <strong>运算</strong> 。</li></ul><p>返回根节点 <code>root</code> 的布尔运算值。</p><p><strong>完整二叉树</strong> 是每个节点有 <code>0</code> 个或者 <code>2</code> 个孩子的二叉树。</p><p><strong>叶子节点</strong> 是没有孩子的节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [2,1,3,null,null,0,1]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 上图展示了计算过程。</p><p>AND 与运算节点的值为 False AND True = False 。</p><p>OR 运算节点的值为 True OR False = True 。</p><p>根节点的值为 True ，所以我们返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [0]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 根节点是叶子节点，且值为 false，所以我们返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点数目在 <code>[1, 1000]</code> 之间。</li><li><code>0 &lt;= Node.val &lt;= 3</code></li><li>每个节点的孩子数为 <code>0</code> 或 <code>2</code> 。</li><li>叶子节点的值为 <code>0</code> 或 <code>1</code> 。</li><li>非叶子节点的值为 <code>2</code> 或 <code>3</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>递归遍历树</strong>，从根节点开始，递归地评估左右子树的值。</p><ul><li>如果当前节点值是 <code>0</code>，返回 <code>false</code>。</li><li>如果当前节点值是 <code>1</code>，返回 <code>true</code>。</li><li>如果当前节点值是 <code>2</code>，则返回左子树和右子树的逻辑“或”运算结果。</li><li>如果当前节点值是 <code>3</code>，则返回左子树和右子树的逻辑“与”运算结果。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树中节点的总数，每个节点都会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归的深度为树的高度 <code>h</code>，最坏情况下空间复杂度为 <code>O(h)</code>，在树为链状时 <code>h</code> 为 <code>n</code>，因此空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">evaluateTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 叶节点，0 表示 false</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 叶节点，1 表示 true</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 非叶节点，2 表示 OR 操作</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">evaluateTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">evaluateTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 非叶节点，3 表示 AND 操作</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">evaluateTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">evaluateTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),T=e("td",{style:{"text-align":"center"}},"1612",-1),N=e("td",{style:{"text-align":"left"}},"检查两棵二叉表达式树是否等价 🔒",-1),O=e("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},F=e("code",null,"树",-1),R=e("code",null,"深度优先搜索",-1),A=e("code",null,"哈希表",-1),E=e("code",null,"2+",-1),D=e("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/check-if-two-expression-trees-are-equivalent",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"center"}},"1628",-1),j=e("td",{style:{"text-align":"left"}},"设计带解析函数的表达式树 🔒",-1),z=e("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},S=e("code",null,"栈",-1),Y=e("code",null,"树",-1),G=e("code",null,"设计",-1),H=e("code",null,"3+",-1),J=e("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/design-an-expression-tree-with-evaluate-function",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"2313",-1),U=e("td",{style:{"text-align":"left"}},"二叉树中得到结果所需的最少翻转次数 🔒",-1),W=e("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=e("code",null,"树",-1),$=e("code",null,"深度优先搜索",-1),ee=e("code",null,"动态规划",-1),te=e("code",null,"1+",-1),ne=e("td",{style:{"text-align":"center"}},"🔴",-1),oe={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/minimum-flips-in-binary-tree-to-get-result",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result",target:"_blank",rel:"noopener noreferrer"};function le(ce,re){const c=l("font"),s=l("RouterLink"),a=l("ExternalLinkIcon");return d(),i("div",null,[g,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),n(s,{to:"/tag/tree.html"},{default:o(()=>[_]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[f]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:o(()=>[k]),_:1}),t("  🔗 "),e("a",m,[v,n(a)]),t(),e("a",b,[x,n(a)])]),y,p(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[T,N,O,e("td",q,[n(s,{to:"/tag/tree.html"},{default:o(()=>[F]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[R]),_:1}),t(),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[A]),_:1}),t(),E]),D,e("td",L,[e("a",C,[t("🀄️"),n(a)]),t(),e("a",I,[t("🔗"),n(a)])])]),e("tr",null,[V,j,z,e("td",B,[n(s,{to:"/tag/stack.html"},{default:o(()=>[S]),_:1}),t(),n(s,{to:"/tag/tree.html"},{default:o(()=>[Y]),_:1}),t(),n(s,{to:"/tag/design.html"},{default:o(()=>[G]),_:1}),t(),H]),J,e("td",K,[e("a",M,[t("🀄️"),n(a)]),t(),e("a",P,[t("🔗"),n(a)])])]),e("tr",null,[Q,U,W,e("td",X,[n(s,{to:"/tag/tree.html"},{default:o(()=>[Z]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:o(()=>[$]),_:1}),t(),n(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[ee]),_:1}),t(),te]),ne,e("td",oe,[e("a",se,[t("🀄️"),n(a)]),t(),e("a",ae,[t("🔗"),n(a)])])])])])])}const ie=r(h,[["render",le],["__file","2331.html.vue"]]);export{ie as default};
