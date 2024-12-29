import{_ as l,r as c,o as i,c as d,a as n,b as a,d as s,w as t,f as u,e as r}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_40-组合总和-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_40-组合总和-ii","aria-hidden":"true"},"#"),a(" 40. 组合总和 II")],-1),b=n("code",null,"数组",-1),h=n("code",null,"回溯",-1),v={href:"https://leetcode.cn/problems/combination-sum-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/combination-sum-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a collection of candidate numbers (<code>candidates</code>) and a target number (<code>target</code>), find all unique combinations in <code>candidates</code> where the candidate numbers sum to <code>target</code>.</p><p>Each number in <code>candidates</code> may only be used <strong>once</strong> in the combination.</p><p><strong>Note:</strong> The solution set must not contain duplicate combinations.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candidates = [10,1,2,7,6,1,5], target = 8</p><p>Output: [[1,1,6], [1,2,5], [1,7], [2,6]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candidates = [2,5,2,1,2], target = 5</p><p>Output: [[1,2,2], [5]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 100</code></li><li><code>1 &lt;= candidates[i] &lt;= 50</code></li><li><code>1 &lt;= target &lt;= 30</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个候选人编号的集合 <code>candidates</code> 和一个目标数 <code>target</code> ，找出 <code>candidates</code> 中所有可以使数字和为 <code>target</code> 的组合。</p><p><code>candidates</code> 中的每个数字在每个组合中只能使用 <strong>一次</strong> 。</p><p>注意：解集不能包含重复的组合。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归搜索所有可能的组合，满足组合的元素和等于目标值 <code>target</code>：</p><ol><li>对输入的数组 <code>candidates</code> 进行排序，以便在后续的去重步骤中方便比较相邻的元素。</li><li>定义一个空数组 <code>res</code> 用于存储最终的结果，以及一个空数组 <code>track</code> 用于回溯过程中记录当前的路径。</li><li>定义一个变量 <code>sum</code> 用于记录当前路径中元素的和。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数接受一个参数 <code>start</code> 表示当前遍历的起始位置。</li><li>在 <code>backtrack</code> 函数中，首先检查当前路径的和是否等于目标值 <code>target</code>，如果是，则将当前路径 <code>track</code> 加入到结果数组 <code>res</code> 中。</li><li>然后从 <code>start</code> 开始遍历数组 <code>candidates</code>，对于每个元素： <ul><li>如果当前元素加上当前路径的和超过目标值 <code>target</code>，则结束当前循环，因为后续元素只会使和更大。</li><li>如果当前元素与前一个元素相同（即出现了重复元素），并且当前元素不是起始位置的元素，则跳过当前元素，以避免重复生成相同的组合。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，更新当前路径的和 <code>sum</code>，递归调用 <code>backtrack</code> 函数，并传入下一个位置 <code>i + 1</code> 作为参数，以继续生成下一个元素的组合。</li><li>在递归调用结束后，需要将当前元素从路径 <code>track</code> 中弹出，以便回溯到上一层继续遍历其他元素，并恢复当前路径的和 <code>sum</code>。</li></ul></li><li>最后返回结果数组 <code>res</code>，其中包含所有满足条件的组合。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(nlog n + 2^n)</code>，<code>n</code> 为 <code>candidates</code> 长度。 <ul><li>对 <code>candidates</code> 进行排序的时间复杂度为 <code>O(nlog n)</code>；</li><li>在递归过程中，每个数字在路径中只能使用一次，在最坏的情况下，每个候选数都可以被加入到组合中，而每个数有选择和不选择两种可能，时间复杂度为 <code>O(n^2)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(t)</code>，<code>t = target / 最小候选数</code>，主要由递归深度决定，递归树的深度可能达到 <code>target / 最小候选数</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"39",-1),E=n("td",{style:{"text-align":"left"}},"组合总和",-1),I={style:{"text-align":"center"}},N={style:{"text-align":"left"}},O=n("code",null,"数组",-1),q=n("code",null,"回溯",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"};function B(R,S){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[a("🟠 "),s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),a(),s(e,{to:"/tag/backtracking.html"},{default:t(()=>[h]),_:1}),a("  🔗 "),n("a",v,[g,s(o)]),a(),n("a",_,[f,s(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,E,n("td",I,[s(e,{to:"/problem/0039.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",N,[s(e,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),a(),s(e,{to:"/tag/backtracking.html"},{default:t(()=>[q]),_:1})]),C,n("td",L,[n("a",V,[a("🀄️"),s(o)]),a(),n("a",j,[a("🔗"),s(o)])])])])])])}const G=l(k,[["render",B],["__file","0040.html.vue"]]);export{G as default};
