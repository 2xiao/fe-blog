import{_ as i,r as o,o as r,c as u,a as n,b as t,d as s,w as e,e as p}from"./app-JOMdB8bl.js";const d={},k={id:"_55-二叉搜索树迭代器",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_55-二叉搜索树迭代器","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.cn/problems/kTOapQ",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"栈",-1),b=n("code",null,"树",-1),v=n("code",null,"设计",-1),f=n("code",null,"二叉搜索树",-1),g=n("code",null,"二叉树",-1),x=n("code",null,"迭代器",-1),T={href:"https://leetcode.cn/problems/kTOapQ",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),S=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>实现一个二叉搜索树迭代器类<code>BSTIterator</code> ，表示一个按中序遍历二叉搜索树（BST）的迭代器：</p><ul><li><code>BSTIterator(TreeNode root)</code> 初始化 <code>BSTIterator</code> 类的一个对象。BST 的根节点 <code>root</code> 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。</li><li><code>boolean hasNext()</code> 如果向指针右侧遍历存在数字，则返回 <code>true</code> ；否则返回 <code>false</code> 。</li><li><code>int next()</code>将指针向右移动，然后返回指针处的数字。</li></ul><p>注意，指针初始化为一个不存在于 BST 中的数字，所以对 <code>next()</code> 的首次调用将返回 BST 中的最小元素。</p><p>可以假设 <code>next()</code> 调用总是有效的，也就是说，当调用 <code>next()</code> 时，BST 的中序遍历中至少存在一个下一个数字。</p><p><strong>示例：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入</strong></p><p>inputs = [&quot;BSTIterator&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]</p><p>inputs = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]</p><p><strong>输出</strong></p><p>[null, 3, 7, true, 9, true, 15, true, 20, false]</p><p><strong>解释</strong></p><p>BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);</p><p>bSTIterator.next(); // 返回 3</p><p>bSTIterator.next(); // 返回 7</p><p>bSTIterator.hasNext(); // 返回 True</p><p>bSTIterator.next(); // 返回 9</p><p>bSTIterator.hasNext(); // 返回 True</p><p>bSTIterator.next(); // 返回 15</p><p>bSTIterator.hasNext(); // 返回 True</p><p>bSTIterator.next(); // 返回 20</p><p>bSTIterator.hasNext(); // 返回 False</p></blockquote><p><strong>提示：</strong></p><ul><li>树中节点的数目在范围 <code>[1, 105]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 10^6</code></li><li>最多调用 <code>10^5</code> 次 <code>hasNext</code> 和 <code>next</code> 操作</li></ul><p><strong>进阶：</strong></p><ul><li>你可以设计一个满足下述条件的解决方案吗？<code>next()</code> 和 <code>hasNext()</code> 操作均摊时间复杂度为 <code>O(1)</code> ，并使用 <code>O(h)</code> 内存。其中 <code>h</code> 是树的高度。</li></ul>',12),I={class:"hint-container warning"},N=n("p",{class:"hint-container-title"},"注意",-1),B=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以采用中序遍历的方式，通过队列来模拟递归过程。</p><p>因为题目要求调用 <code>next()</code> 返回下一个最小的数，即按照从小到大的顺序返回元素，这正好符合二叉搜索树中序遍历的特性，二叉搜索树（BST）的中序遍历能够按照升序顺序输出树中的所有节点值。</p><ol><li>在构造函数中，调用 <code>_inorder()</code> 方法对整个树进行中序遍历，将遍历结果按顺序存入 <code>queue</code>。</li><li><code>next()</code> 方法：返回并移除队列中的第一个元素。</li><li><code>hasNext()</code> 方法：判断队列是否还有剩余元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>初始化 (<code>constructor</code>)</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的数量。因为 <code>_inorder()</code> 方法会遍历树中的每一个节点，并将它们按中序顺序存入队列，整体是线性时间复杂度。</li><li><strong><code>next()</code> 操作</strong>: <code>O(1)</code>，因为只需要从队列中移除并返回第一个元素。</li><li><strong><code>hasNext()</code> 操作</strong>: <code>O(1)</code>，仅仅检查队列的长度是否大于 0。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li><strong>初始化 (<code>constructor</code>)</strong>: <code>O(n)</code>，队列需要存储树中的所有节点，因此空间复杂度与节点数 <code>n</code> 成正比。</li><li><strong><code>next()</code> 和 <code>hasNext()</code> 操作</strong>：<code>O(1)</code>，因为这些操作只需要访问或修改队列，不需要额外的空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BSTIterator</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {TreeNode} root</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 中序遍历</span>
	<span class="token function">_inorder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function w(y,O){const c=o("ExternalLinkIcon"),l=o("font"),a=o("RouterLink");return r(),u("div",null,[n("h1",k,[h,t(),n("a",_,[t("55. 二叉搜索树迭代器"),s(c)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/tree.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/iterator.html"},{default:e(()=>[x]),_:1}),t("  🔗 "),n("a",T,[q,s(c)])]),S,n("div",I,[N,n("p",null,[t("本题与 LeetCode "),s(a,{to:"/problem/0173.html"},{default:e(()=>[t("第 173 题")]),_:1}),t(" 相同。")])]),B])}const j=i(d,[["render",w],["__file","jz_offer_II_055.html.vue"]]);export{j as default};
