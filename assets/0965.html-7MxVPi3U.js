import{_ as p,r as l,o as r,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-KDJRKGep.js";const h={},k=n("h1",{id:"_965-单值二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_965-单值二叉树","aria-hidden":"true"},"#"),e(" 965. 单值二叉树")],-1),_=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/univalued-binary-tree",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/univalued-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A binary tree is <strong>uni-valued</strong> if every node in the tree has the same value.</p><p>Given the <code>root</code> of a binary tree, return <code>true</code> _if the given tree is <strong>uni-valued</strong> , or _<code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/28/unival_bst_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,1,1,1,1,null,1]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/28/unival_bst_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,2,2,5,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li><li><code>0 &lt;= Node.val &lt; 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果二叉树每个节点都具有相同的值，那么该二叉树就是 <em>单值</em> 二叉树。</p><p>只有给定的树是单值二叉树时，才返回 <code>true</code>；否则返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen- shot-2018-12-25-at-50104-pm.png)</p><blockquote><p><strong>输入：</strong>[1,1,1,1,1,null,1]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen- shot-2018-12-25-at-50050-pm.png)</p><blockquote><p><strong>输入：</strong>[2,2,2,5,2]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ol><li>给定树的节点数范围是 <code>[1, 100]</code>。</li><li>每个节点的值都是整数，范围为 <code>[0, 99]</code> 。</li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过深度优先搜索（DFS）遍历树的每个节点来完成判断</p><ul><li>根节点的值 <code>root.val</code> 被保存为基准值，用于与其他节点的值比较。</li><li>使用递归方法，从根节点开始，依次检查左子树和右子树的所有节点。</li><li>如果当前节点为 <code>null</code>，说明已经遍历到了树的末尾，返回 <code>true</code>。</li><li>如果遇到某个节点的值与根节点的值不同，则立即返回 <code>false</code>。</li><li>如果所有节点的值都相同，则最终返回 <code>true</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的个数，每个节点访问一次。</li><li><strong>空间复杂度</strong>: <code>O(h)</code>，其中 <code>h</code> 是树的高度，递归调用栈的最大深度与树的高度有关。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isUnivalTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> num <span class="token operator">=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span> <span class="token comment">// 保存根节点的值作为基准值</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 空节点默认返回 true</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>val <span class="token operator">!==</span> num<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果当前节点值不同，返回 false</span>
		<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归检查左右子树</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用递归函数从根节点开始检查</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"1469",-1),E=n("td",{style:{"text-align":"left"}},"寻找所有的独生节点 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},V=n("code",null,"树",-1),I=n("code",null,"深度优先搜索",-1),O=n("code",null,"广度优先搜索",-1),T=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-all-the-lonely-nodes",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/find-all-the-lonely-nodes",target:"_blank",rel:"noopener noreferrer"};function S(A,D){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/tree.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/binary-tree.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",b,[v,t(o)]),e(),n("a",y,[x,t(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[N,E,C,n("td",L,[t(a,{to:"/tag/tree.html"},{default:s(()=>[V]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[I]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[O]),_:1}),e(),T]),j,n("td",B,[n("a",z,[e("🀄️"),t(o)]),e(),n("a",R,[e("🔗"),t(o)])])])])])])}const G=p(h,[["render",S],["__file","0965.html.vue"]]);export{G as default};
