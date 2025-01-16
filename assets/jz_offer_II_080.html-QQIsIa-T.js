import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-KDJRKGep.js";const k={},d=n("h1",{id:"_80-含有-k-个元素的组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_80-含有-k-个元素的组合","aria-hidden":"true"},"#"),s(" 80. 含有 k 个元素的组合")],-1),m=n("code",null,"数组",-1),v=n("code",null,"回溯",-1),h={href:"https://leetcode.cn/problems/uUsW3B",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个整数 <code>n</code> 和 <code>k</code>，返回 <code>1 ... n</code> 中所有可能的 <code>k</code> 个数的组合。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> n = 4, k = 2</p><p><strong>输出:</strong></p><p>[</p><p>[2,4],</p><p>[3,4],</p><p>[2,3],</p><p>[1,2],</p><p>[1,3],</p><p>[1,4],</p><p>]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> n = 1, k = 1</p><p><strong>输出:</strong>[[1]]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= n &lt;= 20</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul>',8),f={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归的方式生成组合：</p><ol><li>定义一个结果数组 <code>res</code> 和一个路径数组 <code>track</code>。</li><li>使用回溯算法，通过递归函数 <code>backtrack</code> 遍历组合的所有可能性。</li><li>在 <code>backtrack</code> 函数中，当路径数组的长度达到 <code>k</code> 时，将当前路径数组的副本加入结果数组。其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在每一层递归中，从 <code>start</code> 开始遍历数字，将当前数字加入路径数组，然后递归调用下一层，最后弹出当前数字，回溯到上一层。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n! / (k!(n-k)!))</code> ，因为这个问题的解的数量是从 <code>n</code> 个不同元素中选择 <code>k</code> 个元素的方式数。</li><li><strong>空间复杂度</strong>：<code>O(k * n! / (k!(n-k)!)) + O(k)</code> = <code>O(k * n! / (k!(n-k)!))</code><ul><li>其中 <code>n! / (k!(n-k)!)</code> 表示从 <code>n</code> 个元素中选择 <code>k</code> 个的组合数。</li><li>由于 <code>n! / (k!(n-k)!) &lt; n! / ((n / 2)!)^2</code>，因此整体空间复杂度可以简化为 <code>O(k * n! / ((n / 2)!)^2)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,I){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[d,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(l)])]),_,n("div",f,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0077.html"},{default:t(()=>[s("第 77 题")]),_:1}),s(" 相同。")])]),w])}const L=i(k,[["render",y],["__file","jz_offer_II_080.html.vue"]]);export{L as default};
