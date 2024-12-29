import{_ as c,r as p,o as i,c as u,a as n,b as s,d as a,w as e,f as r,e as d}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_2458-移除子树后的二叉树高度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2458-移除子树后的二叉树高度","aria-hidden":"true"},"#"),s(" 2458. 移除子树后的二叉树高度")],-1),g=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),f=n("code",null,"数组",-1),b=n("code",null,"二叉树",-1),_={href:"https://leetcode.cn/problems/height-of-binary-tree-after-subtree-removal-queries",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a <strong>binary tree</strong> with <code>n</code> nodes. Each node is assigned a unique value from <code>1</code> to <code>n</code>. You are also given an array <code>queries</code> of size <code>m</code>.</p><p>You have to perform <code>m</code> <strong>independent</strong> queries on the tree where in the <code>ith</code> query you do the following:</p><ul><li><strong>Remove</strong> the subtree rooted at the node with the value <code>queries[i]</code> from the tree. It is <strong>guaranteed</strong> that <code>queries[i]</code> will <strong>not</strong> be equal to the value of the root.</li></ul><p>Return <em>an array</em><code>answer</code> <em>of size</em><code>m</code> <em>where</em><code>answer[i]</code><em>is the height of the tree after performing the</em><code>ith</code> <em>query</em>.</p><p><strong>Note</strong> :</p><ul><li>The queries are independent, so the tree returns to its <strong>initial</strong> state after each query.</li><li>The height of a tree is the <strong>number of edges in the longest simple path</strong> from the root to some node in the tree.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/07/binaryytreeedrawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]</p><p>Output: [2]</p><p>Explanation: The diagram above shows the tree after removing the subtree rooted at node with value 4.</p><p>The height of the tree is 2 (The path 1 -&gt; 3 -&gt; 2).</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/07/binaryytreeedrawio-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]</p><p>Output: [3,2,3,2]</p><p>Explanation: We have the following queries:</p><ul><li>Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -&gt; 8 -&gt; 2 -&gt; 4).</li><li>Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -&gt; 8 -&gt; 1).</li><li>Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -&gt; 8 -&gt; 2 -&gt; 6).</li><li>Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -&gt; 9 -&gt; 3).</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is <code>n</code>.</li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= Node.val &lt;= n</code></li><li>All the values in the tree are <strong>unique</strong>.</li><li><code>m == queries.length</code></li><li><code>1 &lt;= m &lt;= min(n, 104)</code></li><li><code>1 &lt;= queries[i] &lt;= n</code></li><li><code>queries[i] != root.val</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 <strong>二叉树</strong> 的根节点 <code>root</code> ，树中有 <code>n</code> 个节点。每个节点都可以被分配一个从 <code>1</code> 到 <code>n</code> 且互不相同的值。另给你一个长度为 <code>m</code> 的数组 <code>queries</code> 。</p><p>你必须在树上执行 <code>m</code> 个 <strong>独立</strong> 的查询，其中第 <code>i</code> 个查询你需要执行以下操作：</p><ul><li>从树中 <strong>移除</strong> 以 <code>queries[i]</code> 的值作为根节点的子树。题目所用测试用例保证 <code>queries[i]</code> <strong>不</strong> 等于根节点的值。</li></ul><p>返回一个长度为 <code>m</code> 的数组 **<code>answer</code> ** ，其中 <strong><code>answer[i]</code></strong> 是执行第 <code>i</code> 个查询后树的高度。</p><p><strong>注意：</strong></p><ul><li>查询之间是独立的，所以在每个查询执行后，树会回到其 <strong>初始</strong> 状态。</li><li>树的高度是从根到树中某个节点的 <strong>最长简单路径中的边数</strong> 。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/07/binaryytreeedrawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]</p><p><strong>输出：</strong>[2]</p><p><strong>解释：</strong> 上图展示了从树中移除以 4 为根节点的子树。</p><p>树的高度是 2（路径为 1 -&gt; 3 -&gt; 2）。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/07/binaryytreeedrawio-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]</p><p><strong>输出：</strong>[3,2,3,2]</p><p><strong>解释：</strong> 执行下述查询：</p><ul><li>移除以 3 为根节点的子树。树的高度变为 3（路径为 5 -&gt; 8 -&gt; 2 -&gt; 4）。</li><li>移除以 2 为根节点的子树。树的高度变为 2（路径为 5 -&gt; 8 -&gt; 1）。</li><li>移除以 4 为根节点的子树。树的高度变为 3（路径为 5 -&gt; 8 -&gt; 2 -&gt; 6）。</li><li>移除以 8 为根节点的子树。树的高度变为 2（路径为 5 -&gt; 9 -&gt; 3）。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目是 <code>n</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= Node.val &lt;= n</code></li><li>树中的所有值 <strong>互不相同</strong></li><li><code>m == queries.length</code></li><li><code>1 &lt;= m &lt;= min(n, 10^4)</code></li><li><code>1 &lt;= queries[i] &lt;= n</code></li><li><code>queries[i] != root.val</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>树的高度是指从根节点到叶子节点的最长路径上的边数，使用深度优先搜索（DFS）来计算树的高度。</p><ol><li><p><strong>存储节点信息</strong>：</p><ul><li>使用一个哈希表（<code>heightMap</code>）来存储每个节点的高度和深度，键为节点的值，值为一个数组，包含节点的高度和深度 <code>[height, depth]</code>。</li></ul></li><li><p><strong>层级信息的存储</strong>：</p><ul><li>使用另一个哈希表（<code>levelsMap</code>）来存储每一层的最大高度和第二高的节点，对于每一层，我们需要记录： <ul><li>最大高度（max）</li><li>第二高的高度（second）</li><li>最大高度节点的值（maxNodeVal）</li></ul></li></ul></li><li><p><strong>计算树的高度</strong>：</p><ul><li>通过递归方式遍历树的每个节点，在遍历过程中计算每个节点的高度，并更新 <code>heightMap</code> 和 <code>levelsMap</code>。</li></ul></li><li><p><strong>处理查询</strong>：</p><ul><li>对于每个查询，首先获取待删除节点的高度和深度。</li><li>检查该节点是否为其所在层的最大高度节点： <ul><li>如果是，新的树高度为 <code>rootHeight - max + second</code>（即去掉最大高度节点的影响，使用第二高的高度）。</li><li>如果不是，树的高度保持不变，即 <code>rootHeight</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>将每个查询的结果存储到数组中，并最终返回该数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 为树的节点数，<code>m</code> 为查询的数量； <ul><li>DFS 计算高度和层级信息的时间复杂度为 <code>O(n)</code>；</li><li>查询每个节点的高度的时间复杂度为 <code>O(1)</code>，总查询复杂度为 <code>O(m)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储每个节点信息的 <code>heightMap</code> 和 <code>levelsMap</code> 的空间复杂度均为 <code>O(n)</code>；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">treeQueries</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> heightMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> levelsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// DFS 计算高度并记录每层的最大和第二高</span>
	<span class="token function">calculateHeight</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> heightMap<span class="token punctuation">,</span> levelsMap<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> rootHeight <span class="token operator">=</span> heightMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> queries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> deep<span class="token punctuation">]</span> <span class="token operator">=</span> heightMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> max<span class="token punctuation">,</span> second<span class="token punctuation">,</span> maxNodeVal <span class="token punctuation">}</span> <span class="token operator">=</span> levelsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>deep<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 检查该节点是否为其所在层的最大高度节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> maxNodeVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rootHeight <span class="token operator">-</span> max <span class="token operator">+</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rootHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">calculateHeight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> heightMap<span class="token punctuation">,</span> levelsMap<span class="token punctuation">,</span> deep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">calculateHeight</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">,</span> heightMap<span class="token punctuation">,</span> levelsMap<span class="token punctuation">,</span> deep <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">calculateHeight</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">,</span> heightMap<span class="token punctuation">,</span> levelsMap<span class="token punctuation">,</span> deep <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	heightMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span>height<span class="token punctuation">,</span> deep<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>levelsMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>deep<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		levelsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>deep<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">max</span><span class="token operator">:</span> height<span class="token punctuation">,</span> <span class="token literal-property property">second</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">maxNodeVal</span><span class="token operator">:</span> node<span class="token punctuation">.</span>val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> levelInfo <span class="token operator">=</span> levelsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>deep<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>height <span class="token operator">&gt;</span> levelInfo<span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			levelInfo<span class="token punctuation">.</span>second <span class="token operator">=</span> levelInfo<span class="token punctuation">.</span>max<span class="token punctuation">;</span>
			levelInfo<span class="token punctuation">.</span>max <span class="token operator">=</span> height<span class="token punctuation">;</span>
			levelInfo<span class="token punctuation">.</span>maxNodeVal <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>height <span class="token operator">&gt;</span> levelInfo<span class="token punctuation">.</span>second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			levelInfo<span class="token punctuation">.</span>second <span class="token operator">=</span> height<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,38),M=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"104",-1),N=n("td",{style:{"text-align":"left"}},"二叉树的最大深度",-1),I={style:{"text-align":"center"}},H={style:{"text-align":"left"}},V=n("code",null,"树",-1),E=n("code",null,"深度优先搜索",-1),O=n("code",null,"广度优先搜索",-1),R=n("code",null,"1+",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"};function j(B,D){const l=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:e(()=>[s("Hard")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[y,a(o)]),s(),n("a",w,[x,a(o)])]),q,r(" prettier-ignore "),n("table",null,[M,n("tbody",null,[n("tr",null,[T,N,n("td",I,[a(t,{to:"/problem/0104.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",H,[a(t,{to:"/tag/tree.html"},{default:e(()=>[V]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[E]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[O]),_:1}),s(),R]),z,n("td",C,[n("a",L,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])])])])])}const Y=c(k,[["render",j],["__file","2458.html.vue"]]);export{Y as default};
