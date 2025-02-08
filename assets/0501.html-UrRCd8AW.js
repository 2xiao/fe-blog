import{_ as i,r as l,o as r,c as u,a as n,b as s,d as e,w as t,f as d,e as c}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_501-二叉搜索树中的众数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_501-二叉搜索树中的众数","aria-hidden":"true"},"#"),s(" 501. 二叉搜索树中的众数")],-1),h=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉搜索树",-1),_=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/find-mode-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/find-mode-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("code",null,"root",-1),F={href:"https://en.wikipedia.org/wiki/Mode_(statistics)",target:"_blank",rel:"noopener noreferrer"},B=c('<p>If the tree has more than one mode, return them in <strong>any order</strong>.</p><p>Assume a BST is defined as follows:</p><ul><li>The left subtree of a node contains only nodes with keys <strong>less than or equal to</strong> the node&#39;s key.</li><li>The right subtree of a node contains only nodes with keys <strong>greater than or equal to</strong> the node&#39;s key.</li><li>Both the left and right subtrees must also be binary search trees.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,2]</p><p>Output: [2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 104]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong> Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',12),T=n("code",null,"root",-1),V={href:"https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796",target:"_blank",rel:"noopener noreferrer"},E=c(`<p>如果树中有不止一个众数，可以按 <strong>任意顺序</strong> 返回。</p><p>假定 BST 满足如下定义：</p><ul><li>结点左子树中所含节点的值 <strong>小于等于</strong> 当前节点的值</li><li>结点右子树中所含节点的值 <strong>大于等于</strong> 当前节点的值</li><li>左子树和右子树都是二叉搜索树</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/11/mode-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,null,2,2]</p><p><strong>输出：</strong>[2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [0]</p><p><strong>输出：</strong>[0]</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目在范围 <code>[1, 104]</code> 内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>进阶：</strong> 你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求找到二叉搜索树（BST）的众数（即出现频率最高的元素），由于 BST 的中序遍历结果是一个升序排列的数组，因此相同值的节点会连续出现在遍历结果中，可以通过中序遍历逐一访问节点，同时记录出现频率来解决问题。</p><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>maxFreq = 0</code>：记录所有值中最高的出现频率。</li><li><code>curVal = 0</code>：记录当前正在处理的值。</li><li><code>curFreq = 0</code>：记录当前值的出现频率。</li><li><code>res = []</code>：存储所有频率等于 <code>maxFreq</code> 的值。</li></ul></li><li><p><strong>中序遍历</strong>：</p><ul><li>树为空时，直接返回空数组。</li><li>递归遍历左子树。</li><li>处理当前节点： <ul><li>如果当前值与 <code>curVal</code> 相同，增加 <code>curFreq</code>。</li><li>如果不同，更新 <code>curVal</code> 并重置 <code>curFreq</code> 为 1。</li><li>更新 <code>maxFreq</code>，根据频率决定是否更新 <code>res</code>。</li></ul></li><li>递归遍历右子树。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回存储众数的数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是节点数，中序遍历整棵树一次。</li><li><strong>空间复杂度</strong>：<code>O(h + m)</code><ul><li>递归调用栈的空间复杂度为 <strong>O(h)</strong>，其中 <code>h</code> 是树的高度。</li><li>结果数组 <code>res</code> 的空间复杂度为 <strong>O(m)</strong>，其中 <code>m</code> 是众数的数量。</li><li>请注意，如果我们不计算递归调用堆栈空间和结果数组使用的空间（如问题描述的后续内容中所述），则此方法使用 <code>O(1)</code> 空间，因为我们仅使用几个额外的变量，如 <code>maxFreq, curFreq, curVal</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxFreq <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前最大频率</span>
	<span class="token keyword">let</span> curFreq <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前值的频率</span>
	<span class="token keyword">let</span> curVal <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前处理的值</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储众数的结果数组</span>

	<span class="token comment">// 中序遍历函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 如果节点为空，直接返回</span>

		<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 遍历左子树</span>

		<span class="token comment">// 处理当前节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">===</span> curVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curFreq <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前值与之前相同，频率增加</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			curFreq <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前值不同，重置频率为 1</span>
			curVal <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span> <span class="token comment">// 更新当前值</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新最大频率和结果数组</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>curFreq <span class="token operator">&gt;</span> maxFreq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxFreq <span class="token operator">=</span> curFreq<span class="token punctuation">;</span> <span class="token comment">// 更新最大频率</span>
			res <span class="token operator">=</span> <span class="token punctuation">[</span>node<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 重新记录结果</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curFreq <span class="token operator">===</span> maxFreq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果频率相等，加入结果</span>
		<span class="token punctuation">}</span>

		<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 遍历右子树</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 开始中序遍历</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"98",-1),C=n("td",{style:{"text-align":"left"}},"验证二叉搜索树",-1),O={style:{"text-align":"center"}},j={style:{"text-align":"left"}},I=n("code",null,"树",-1),L=n("code",null,"深度优先搜索",-1),z=n("code",null,"二叉搜索树",-1),A=n("code",null,"1+",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/tree.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/depth-first-search.html"},{default:t(()=>[g]),_:1}),s(),e(a,{to:"/tag/binary-search-tree.html"},{default:t(()=>[v]),_:1}),s(),e(a,{to:"/tag/binary-tree.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[f,e(o)]),s(),n("a",y,[x,e(o)])]),q,n("p",null,[s("Given the "),w,s(" of a binary search tree (BST) with duplicates, return _all the"),n("a",F,[s("mode(s)"),e(o)]),s(" (i.e., the most frequently occurred element) in it_.")]),B,n("p",null,[s("给你一个含重复值的二叉搜索树（BST）的根节点 "),T,s(" ，找出并返回 BST 中的所有 "),n("a",V,[s("众数"),e(o)]),s("（即，出现频率最高的元素）。")]),E,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[S,C,n("td",O,[e(a,{to:"/problem/0098.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",j,[e(a,{to:"/tag/tree.html"},{default:t(()=>[I]),_:1}),s(),e(a,{to:"/tag/depth-first-search.html"},{default:t(()=>[L]),_:1}),s(),e(a,{to:"/tag/binary-search-tree.html"},{default:t(()=>[z]),_:1}),s(),A]),M,n("td",R,[n("a",G,[s("🀄️"),e(o)]),s(),n("a",D,[s("🔗"),e(o)])])])])])])}const Q=i(k,[["render",H],["__file","0501.html.vue"]]);export{Q as default};
