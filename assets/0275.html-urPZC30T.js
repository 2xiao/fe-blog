import{_ as p,r as c,o as r,c as d,a as n,d as e,b as t,w as s,f as u,e as i}from"./app-ynO5B_DP.js";const h={},k={id:"_275-h-指数-ii",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_275-h-指数-ii","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/h-index-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"数组",-1),f=n("code",null,"二分查找",-1),b={href:"https://leetcode.com/problems/h-index-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>citations</code> where <code>citations[i]</code> is the number of citations a researcher received for their <code>ith</code> paper and <code>citations</code> is sorted in <strong>ascending order</strong> , return <em>the researcher &#39;s h-index</em>.</p>',2),y={href:"https://en.wikipedia.org/wiki/H-index",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"h",-1),q=n("code",null,"h",-1),I=n("code",null,"h",-1),E=i('<p>You must write an algorithm that runs in logarithmic time.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: citations = [0,1,3,5,6]</p><p>Output: 3</p><p>Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.</p><p>Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: citations = [1,2,100]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == citations.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>0 &lt;= citations[i] &lt;= 1000</code></li><li><code>citations</code> is sorted in <strong>ascending order</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>citations</code> ，其中 <code>citations[i]</code> 表示研究者的第 <code>i</code> 篇论文被引用的次数，<code>citations</code> 已经按照 <strong>升序排列</strong> 。计算并返回该研究者的 <code>h</code> <strong>指数</strong>。</p><p>根据维基百科上 <code>h</code> 指数的定义：<code>h</code> 代表“高引用次数” ，一名科研人员的 <code>h</code> 指数 是指他（她）至少发表了 <code>h</code> 篇论文，并且 <strong>至少</strong> 有 <code>h</code> 篇论文被引用次数大于等于 <code>h</code> 。如果 <code>h</code> 有多种可能的值，<code>h</code> <strong>指数</strong> 是其中最大的那个。</p><p>请你设计并实现对数时间复杂度的算法解决此问题。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：citations = [0,1,3,5,6]</p><p>输出：3</p><p>解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。</p><p>由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：citations = [1,3,100]</p><p>输出：2</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',16),C=n("code",null,"citations",-1),L=i(`<p>设查找范围的初始左边界 <code>left</code> 为 <code>0</code>, 初始右边界 <code>right</code> 为 <code>n−1</code>，其中 <code>n</code> 为数组 <code>citations</code> 的长度。每次在查找范围内取中点 <code>mid</code>，则有 <code>n−mid</code> 篇论文被引用了至少 <code>citations[mid]</code> 次。如果在查找过程中满足 <code>citations[mid]≥n−mid</code>，则移动右边界 <code>right</code>，否则移动左边界 <code>left</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code></li><li><strong>空间复杂度</strong>： <code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">citations</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">hIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">citations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> citations<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>citations<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> n <span class="token operator">-</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> n <span class="token operator">-</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,6),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),V=n("td",{style:{"text-align":"center"}},"274",-1),O={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/h-index",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},H={href:"/problem/0274",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"left"}},R=n("code",null,"数组",-1),S=n("code",null,"计数排序",-1),T=n("code",null,"排序",-1),A={style:{"text-align":"left"}};function G(W,Y){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return r(),d("div",null,[n("h1",k,[m,e(),n("a",_,[e("275. H 指数 II"),t(o)])]),n("p",null,[e("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/outline/tag/array.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/outline/tag/binary-search.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",b,[v,t(o)])]),x,n("p",null,[e("According to the "),n("a",y,[e("definition of h-index on Wikipedia"),t(o)]),e(": The h-index is defined as the maximum value of "),w,e(" such that the given researcher has published at least "),q,e(" papers that have each been cited at least "),I,e(" times.")]),E,n("p",null,[e("和 "),t(a,{to:"/problem/0274.html"},{default:s(()=>[e("第 274 题")]),_:1}),e(" 相比，这道题中的输入数组 "),C,e(" 已经按照升序排序。题目要求实现对数时间复杂度的算法，可以联想到使用二分查找的方法求解。")]),L,u(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[V,n("td",O,[n("a",j,[e("H 指数"),t(o)])]),n("td",B,[n("a",H,[e("[✓]"),t(o)])]),n("td",M,[t(a,{to:"/outline/tag/array.html"},{default:s(()=>[R]),_:1}),e(),t(a,{to:"/outline/tag/counting-sort.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[T]),_:1})]),n("td",A,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const D=p(h,[["render",G],["__file","0275.html.vue"]]);export{D as default};
