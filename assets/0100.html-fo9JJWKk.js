import{_ as l,r as o,o as r,c as i,a as n,b as a,d as s,w as e,e as u}from"./app-9Xw5divW.js";const d={},k=n("h1",{id:"_100-相同的树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_100-相同的树","aria-hidden":"true"},"#"),a(" 100. 相同的树")],-1),h=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),_=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/same-tree",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/same-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: p = [1,2,3], q = [1,2,3]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: p = [1,2], q = [1,null,2]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: p = [1,2,1], q = [1,1,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both trees is in the range <code>[0, 100]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>这一题要求判断两颗树是否是完全相等的。</p><p>如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>递归判断即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">q</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isSameTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> q</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>p <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>q<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> q <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>val <span class="token operator">==</span> q<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>left<span class="token punctuation">,</span> q<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>right<span class="token punctuation">,</span> q<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function q(w,T){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[a("Easy")]),_:1}),a("  🔖  "),s(t,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),a(),s(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[m]),_:1}),a(),s(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[f]),_:1}),a(),s(t,{to:"/tag/binary-tree.html"},{default:e(()=>[_]),_:1}),a("  🔗 "),n("a",b,[g,s(p)]),a(),n("a",v,[x,s(p)])]),y])}const N=l(d,[["render",q],["__file","0100.html.vue"]]);export{N as default};
