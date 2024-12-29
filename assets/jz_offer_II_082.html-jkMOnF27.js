import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-r0ql_Osa.js";const r={},k=n("h1",{id:"_82-含有重复元素集合的组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_82-含有重复元素集合的组合","aria-hidden":"true"},"#"),s(" 82. 含有重复元素集合的组合")],-1),m=n("code",null,"数组",-1),v=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/4sjJUc",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个可能有重复数字的整数数组 <code>candidates</code> 和一个目标数 <code>target</code> ，找出 <code>candidates</code> 中所有可以使数字和为 <code>target</code> 的组合。</p><p><code>candidates</code> 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> candidates = [10,1,2,7,6,1,5], target = 8,</p><p><strong>输出:</strong></p><p>[</p><p>[1,1,6],</p><p>[1,2,5],</p><p>[1,7],</p><p>[2,6]</p><p>]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> candidates = [2,5,2,1,2], target = 5,</p><p><strong>输出:</strong></p><p>[</p><p>[1,2,2],</p><p>[5]</p><p>]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 100</code></li><li><code>1 &lt;= candidates[i] &lt;= 50</code></li><li><code>1 &lt;= target &lt;= 30</code></li></ul>',9),_={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归搜索所有可能的组合，满足组合的元素和等于目标值 <code>target</code>：</p><ol><li>对输入的数组 <code>candidates</code> 进行排序，以便在后续的去重步骤中方便比较相邻的元素。</li><li>定义一个空数组 <code>res</code> 用于存储最终的结果，以及一个空数组 <code>track</code> 用于回溯过程中记录当前的路径。</li><li>定义一个变量 <code>sum</code> 用于记录当前路径中元素的和。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数接受一个参数 <code>start</code> 表示当前遍历的起始位置。</li><li>在 <code>backtrack</code> 函数中，首先检查当前路径的和是否等于目标值 <code>target</code>，如果是，则将当前路径 <code>track</code> 加入到结果数组 <code>res</code> 中。</li><li>然后从 <code>start</code> 开始遍历数组 <code>candidates</code>，对于每个元素： <ul><li>如果当前元素加上当前路径的和超过目标值 <code>target</code>，则结束当前循环，因为后续元素只会使和更大。</li><li>如果当前元素与前一个元素相同（即出现了重复元素），并且当前元素不是起始位置的元素，则跳过当前元素，以避免重复生成相同的组合。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，更新当前路径的和 <code>sum</code>，递归调用 <code>backtrack</code> 函数，并传入下一个位置 <code>i + 1</code> 作为参数，以继续生成下一个元素的组合。</li><li>在递归调用结束后，需要将当前元素从路径 <code>track</code> 中弹出，以便回溯到上一层继续遍历其他元素，并恢复当前路径的和 <code>sum</code>。</li></ul></li><li>最后返回结果数组 <code>res</code>，其中包含所有满足条件的组合。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(nlog n + 2^n)</code>，<code>n</code> 为 <code>candidates</code> 长度。 <ul><li>对 <code>candidates</code> 进行排序的时间复杂度为 <code>O(nlog n)</code>；</li><li>在递归过程中，每个数字在路径中只能使用一次，在最坏的情况下，每个候选数都可以被加入到组合中，而每个数有选择和不选择两种可能，时间复杂度为 <code>O(n^2)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(t)</code>，<code>t = target / 最小候选数</code>，主要由递归深度决定，递归树的深度可能达到 <code>target / 最小候选数</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	candidates<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 剪枝一：从 start 开始遍历，避免重复选择同一元素，避免生成重复子集</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 剪枝二：若子集和超过 target ，则直接结束循环</span>
			<span class="token comment">// 这是因为数组已排序，后边元素更大，子集和一定超过 target</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">-</span> sum <span class="token operator">-</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 剪枝三：如果该元素与左边元素相等，说明该搜索分支重复，直接跳过</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> start <span class="token operator">&amp;&amp;</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> candidates<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">+=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">-=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,j){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(l)])]),g,n("div",_,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0040.html"},{default:t(()=>[s("第 40 题")]),_:1}),s(" 相同。")])]),w])}const L=i(r,[["render",y],["__file","jz_offer_II_082.html.vue"]]);export{L as default};
