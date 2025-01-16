import{_ as l,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as c}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_81-允许重复选择元素的组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_81-允许重复选择元素的组合","aria-hidden":"true"},"#"),s(" 81. 允许重复选择元素的组合")],-1),m=n("code",null,"数组",-1),g=n("code",null,"回溯",-1),v={href:"https://leetcode.cn/problems/Ygoe9J",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个<strong>无重复元素</strong> 的正整数数组 <code>candidates</code> 和一个正整数 <code>target</code> ，找出 <code>candidates</code> 中所有可以使数字和为目标数 <code>target</code> 的唯一组合。</p><p><code>candidates</code> 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。</p><p>对于给定的输入，保证和为 <code>target</code> 的唯一组合数少于 <code>150</code> 个。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> candidates = [2,3,6,7], target = 7</p><p><strong>输出:</strong>[[7],[2,2,3]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> candidates = [2,3,5], target = 8</p><p><strong>输出:</strong>[[2,2,2,2],[2,3,3],[3,5]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入:</strong> candidates = [2], target = 1</p><p><strong>输出:</strong>[]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入:</strong> candidates = [1], target = 1</p><p><strong>输出:</strong>[[1]]</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入:</strong> candidates = [1], target = 2</p><p><strong>输出:</strong>[[1,1]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 30</code></li><li><code>1 &lt;= candidates[i] &lt;= 200</code></li><li><code>candidate</code> 中的每个元素都是独一无二的。</li><li><code>1 &lt;= target &lt;= 500</code></li></ul>',16),_={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),w=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题使用回溯法来解决。回溯法是一种通过不断尝试生成问题的所有解的算法，如果解不符合要求，就撤销上一步甚至上几步的计算，再通过其他可能的分支寻找正确的解。具体步骤如下：</p><ol><li><p><strong>定义回溯函数：</strong> 定义一个回溯函数 <code>backtrack</code>，接收一个起始索引 <code>start</code> 作为参数，表示从候选数组的哪个位置开始考虑，避免重复组合。</p></li><li><p><strong>回溯过程：</strong> 在回溯的过程中，不断选择当前位置的数字，并更新当前组合的和 <code>sum</code>。如果 <code>sum</code> 等于目标值 <code>target</code>，则将当前组合添加到结果集中。</p></li><li><p><strong>递归调用：</strong> 如果 <code>sum</code> 小于 <code>target</code>，则继续在当前位置和之后的位置进行递归。如果 <code>sum</code> 大于 <code>target</code>，说明当前组合不满足条件，需要撤销当前选择，返回上一层继续尝试其他分支。</p></li><li><p><strong>限制条件：</strong> 在递归的过程中，通过判断 <code>sum</code> 是否等于 <code>target</code> 来确保生成的组合是符合要求的。递归时传入 <code>i</code> 作为参数，表示从当前位置开始尝试，以确保可以重复使用当前数字。</p></li><li><p><strong>返回结果：</strong> 最终通过调用 <code>backtrack</code> 函数得到所有符合条件的组合，返回这些组合的数组作为结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^t)</code>，<code>n</code> 为 <code>candidates</code> 长度，<code>t = target / 最小候选数</code>，主要由递归树的深度和每层递归中循环次数决定。 <ul><li>递归树的每一层代表从数组 <code>candidates</code> 中选择一个数字加入到组合中的过程。每个数字都可以重复使用，因此递归树的深度最大为 <code>target / 最小候选数</code>。</li><li>在最坏情况下，递归树的每个节点都要进行 <code>n</code> 次循环操作来选择候选数，因此递归树的节点总数最多为 <code>n^(target / 最小候选数)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(t)</code>，<code>t = target / 最小候选数</code>，主要由递归深度决定，递归树的深度可能达到 <code>target / 最小候选数</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 满足条件</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 剪枝</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">+=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token comment">// 注意这里传入的参数是 i 而不是 i + 1，表示可以重复使用当前的数字</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">-=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,q){const p=o("font"),e=o("RouterLink"),i=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,a(i)])]),h,n("div",_,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0039.html"},{default:t(()=>[s("第 39 题")]),_:1}),s(" 相同。")])]),w])}const j=l(d,[["render",y],["__file","jz_offer_II_081.html.vue"]]);export{j as default};
