import{_ as l,r as p,o as r,c as d,a as s,b as n,d as a,w as e,e as i}from"./app-BBnmDgJV.js";const u={},k=s("h1",{id:"_427-建立四叉树",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_427-建立四叉树","aria-hidden":"true"},"#"),n(" 427. 建立四叉树")],-1),g=s("code",null,"树",-1),h=s("code",null,"数组",-1),v=s("code",null,"分治",-1),m=s("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/construct-quad-tree",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/construct-quad-tree",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"LeetCode",-1),y=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>n * n</code> matrix <code>grid</code> of <code>0&#39;s</code> and <code>1&#39;s</code> only. We want to represent <code>grid</code> with a Quad-Tree.</p><p>Return <em>the root of the Quad-Tree representing</em><code>grid</code>.</p><p>A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:</p><ul><li><code>val</code>: True if the node represents a grid of 1&#39;s or False if the node represents a grid of 0&#39;s. Notice that you can assign the <code>val</code> to True or False when <code>isLeaf</code> is False, and both are accepted in the answer.</li><li><code>isLeaf</code>: True if the node is a leaf node on the tree or False if the node has four children.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can construct a Quad-Tree from a two-dimensional area using the following steps:</p><ol><li>If the current grid has the same value (i.e all <code>1&#39;s</code> or all <code>0&#39;s</code>) set <code>isLeaf</code> True and set <code>val</code> to the value of the grid and set the four children to Null and stop.</li><li>If the current grid has different values, set <code>isLeaf</code> to False and set <code>val</code> to any value and divide the current grid into four sub-grids as shown in the photo.</li><li>Recurse for each of the children with the proper sub-grid.</li></ol><figure><img src="https://assets.leetcode.com/uploads/2020/02/11/new_top.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,9),x={href:"https://en.wikipedia.org/wiki/Quadtree",target:"_blank",rel:"noopener noreferrer"},L=i(`<p><strong>Quad-Tree format:</strong></p><p>You don&#39;t need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where <code>null</code> signifies a path terminator where no node exists below.</p><p>It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list <code>[isLeaf, val]</code>.</p><p>If the value of <code>isLeaf</code> or <code>val</code> is True we represent it as <strong>1</strong> in the list <code>[isLeaf, val]</code> and if the value of <code>isLeaf</code> or <code>val</code> is False we represent it as <strong>0</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/11/grid1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,1],[1,0]]</p><p>Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]</p><p>Explanation: The explanation of this example is shown below:</p><p>Notice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.</p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e1tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e2mat.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]</p><p>Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]</p><p>Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.</p><p>The topLeft, bottomLeft and bottomRight each has the same value.</p><p>The topRight have different values so we divide it into 4 sub-grids where each has the same value.</p><p>Explanation is shown in the photo below:</p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e2tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>n == 2^x</code> where <code>0 &lt;= x &lt;= 6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>n * n</code> 矩阵 <code>grid</code> ，矩阵由若干 <code>0</code> 和 <code>1</code> 组成。请你用四叉树表示该矩阵 <code>grid</code> 。</p><p>你需要返回能表示矩阵 <code>grid</code> 的 <strong>四叉树</strong> 的根结点。</p><p>四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：</p><ul><li><code>val</code>：储存叶子结点所代表的区域的值。<code>1</code> 对应 <strong>True</strong> ，<code>0</code> 对应 <strong>False</strong> 。注意，当 <code>isLeaf</code> 为 <strong>False</strong> 时，你可以把 <strong>True</strong> 或者 <strong>False</strong> 赋值给节点，两种值都会被判题机制 <strong>接受</strong> 。</li><li><code>isLeaf</code>: 当这个节点是一个叶子结点时为 <strong>True</strong> ，如果它有 <code>4</code> 个子节点则为 <strong>False</strong> 。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以按以下步骤为二维区域构建四叉树：</p><ol><li>如果当前网格的值相同（即，全为 <code>0</code> 或者全为 <code>1</code>），将 <code>isLeaf</code> 设为 True ，将 <code>val</code> 设为网格相应的值，并将四个子节点都设为 Null 然后停止。</li><li>如果当前网格的值不同，将 <code>isLeaf</code> 设为 False， 将 <code>val</code> 设为任意值，然后如下图所示，将当前网格划分为四个子网格。</li><li>使用适当的子网格递归每个子节点。</li></ol><figure><img src="https://assets.leetcode.com/uploads/2020/02/11/new_top.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,21),T={href:"https://en.wikipedia.org/wiki/Quadtree",target:"_blank",rel:"noopener noreferrer"},N=i(`<p><strong>四叉树格式：</strong></p><p>你不需要阅读本节来解决这个问题。只有当你想了解输出格式时才会这样做。输出为使用层序遍历后四叉树的序列化形式，其中 <code>null</code> 表示路径终止符，其下面不存在节点。</p><p>它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 <code>[isLeaf, val]</code> 。</p><p>如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 True ，则表示它在列表 <code>[isLeaf, val]</code> 中的值为 <strong>1</strong> ；如果 <code>isLeaf</code> 或者 <code>val</code> 的值为 <code>False</code> ，则表示值为 <strong>0</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/11/grid1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,1],[1,0]]</p><p><strong>输出：</strong>[[0,1],[1,0],[1,1],[1,1],[1,0]]</p><p><strong>解释：</strong> 此示例的解释如下：</p><p>请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。</p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e1tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e2mat.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]</p><p><strong>输出：</strong>[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]</p><p><strong>解释：</strong> 网格中的所有值都不相同。我们将网格划分为四个子网格。</p><p>topLeft，bottomLeft 和 bottomRight 均具有相同的值。</p><p>topRight 具有不同的值，因此我们将其再分为 4 个子网格，这样每个子网格都具有相同的值。</p><p>解释如下图所示：</p><figure><img src="https://assets.leetcode.com/uploads/2020/02/12/e2tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>提示：</strong></p><ol><li><code>n == grid.length == grid[i].length</code></li><li><code>n == 2^x</code> 其中 <code>0 &lt;= x &lt;= 6</code></li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题本质上是一个<strong>递归划分问题</strong>，类似于分治算法。需要不断地将网格划分为四个子网格，直到找到一个可以用叶子节点来表示的区域。</p><ol><li><p>每个节点要么是叶子节点，要么是内部节点：</p><ul><li>如果是叶子节点，它将包含子网格的单一值（<code>0</code> 或 <code>1</code>）；</li><li>如果是内部节点，它将有四个指针指向子节点。</li></ul></li><li><p>递归地构建四叉树：</p><ul><li>如果当前网格是同一个值（即所有单元格都为 <code>0</code> 或都为 <code>1</code>），则构造一个叶子节点。</li><li>否则，对当前网格的四个子区域（左上、右上、左下、右下）分别递归构造子节点。</li></ul></li><li><p>终止条件：</p><ul><li>当网格区域缩小到只有一个单元格时，直接返回该单元格的值作为叶子节点。</li><li>当所有单元格的值相同，可以创建一个叶子节点。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2 * log n)</code>，其中 <code>n</code> 是 <code>grid</code> 的边长。需要递归地划分网格并检查每个子网格的值。由于网格划分的方式类似于四叉树，每次递归将网格的大小减半。</li><li><strong>空间复杂度</strong>: <code>O(log n)</code>，因为递归栈的深度与网格大小呈对数关系。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) <span class="token punctuation">{</span>
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>_Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">construct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">buildTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rowStart<span class="token punctuation">,</span> rowEnd<span class="token punctuation">,</span> colStart<span class="token punctuation">,</span> colEnd</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> first <span class="token operator">=</span> grid<span class="token punctuation">[</span>rowStart<span class="token punctuation">]</span><span class="token punctuation">[</span>colStart<span class="token punctuation">]</span><span class="token punctuation">,</span>
			isLeaf <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token literal-property property">out</span><span class="token operator">:</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> rowStart<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rowEnd<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> colStart<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> colEnd<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					isLeaf <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span> out<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>isLeaf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>first <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> rowMid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>rowStart <span class="token operator">+</span> rowEnd<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> colMid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>colStart <span class="token operator">+</span> colEnd<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>
				<span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token function">buildTree</span><span class="token punctuation">(</span>rowStart<span class="token punctuation">,</span> rowMid<span class="token punctuation">,</span> colStart<span class="token punctuation">,</span> colMid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// top-left</span>
				<span class="token function">buildTree</span><span class="token punctuation">(</span>rowStart<span class="token punctuation">,</span> rowMid<span class="token punctuation">,</span> colMid<span class="token punctuation">,</span> colEnd<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// top-right</span>
				<span class="token function">buildTree</span><span class="token punctuation">(</span>rowMid<span class="token punctuation">,</span> rowEnd<span class="token punctuation">,</span> colStart<span class="token punctuation">,</span> colMid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// bottom-left</span>
				<span class="token function">buildTree</span><span class="token punctuation">(</span>rowMid<span class="token punctuation">,</span> rowEnd<span class="token punctuation">,</span> colMid<span class="token punctuation">,</span> colEnd<span class="token punctuation">)</span> <span class="token comment">// bottom-right</span>
			<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">buildTree</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function E(R,F){const c=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return r(),d("div",null,[k,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[g]),_:1}),n(),a(t,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),n(),a(t,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[v]),_:1}),n(),a(t,{to:"/tag/matrix.html"},{default:e(()=>[m]),_:1}),n("  🔗 "),s("a",f,[b,a(o)]),n(),s("a",w,[_,a(o)])]),y,s("p",null,[n("If you want to know more about the Quad-Tree, you can refer to the "),s("a",x,[n("wiki"),a(o)]),n(".")]),L,s("p",null,[n("如果你想了解更多关于四叉树的内容，可以参考 "),s("a",T,[n("wiki"),a(o)]),n(" 。")]),N])}const z=l(u,[["render",E],["__file","0427.html.vue"]]);export{z as default};
