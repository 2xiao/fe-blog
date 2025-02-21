import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-9CeBk-uV.js";const k={},h=n("h1",{id:"_46-全排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_46-全排列","aria-hidden":"true"},"#"),t(" 46. 全排列")],-1),_=n("code",null,"数组",-1),m=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/permutations",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/permutations",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1]</p><p>Output: [[0,1],[1,0]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 6</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>All the integers of <code>nums</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个不含重复数字的数组 <code>nums</code> ，返回其 <strong>所有可能的全排列</strong> 。你可以 <strong>按任意顺序</strong> 返回答案。<code>nums</code> 中的所有整数 <strong>互不相同</strong>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的回溯问题，可以通过深度优先搜索（DFS）来解决。</p><ol><li>使用一个数组 <code>used</code> 来标记数字是否已经被使用过，确保每个数字在排列中只使用一次，初始时都为 <code>false</code>。</li><li>定义一个 <code>backtrack</code> 函数，用于搜索所有可能的排列。在函数中进行如下操作： <ul><li>如果当前排列的长度等于输入序列的长度，说明已经得到一个完整的排列，将其添加到结果数组中。</li><li>否则，遍历输入序列的每个数字，如果当前数字没有被使用过，就将其加入当前排列中，并标记为已使用。</li><li>然后递归调用 <code>backtrack</code> 函数，继续搜索下一个位置的数字。</li><li>在递归完成后，需要回溯，即将当前数字从排列中移除，并标记为未使用，使其可以在其他位置被使用。</li></ul></li><li>最后返回结果数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * n!)</code>，其中 <code>n</code> 是 <code>nums</code> 的长度。主要由递归调用栈的深度决定，递归深度（即排列的数量 <code>n!</code>）乘以每次操作的时间复杂度 <code>O(n)</code>，总时间复杂度为 <code>O(n * n!)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n * n!)</code>，空间复杂度主要由以下几个部分组成： <ul><li>结果数组<code>res</code> 用于存储所有生成的唯一排列，在最坏情况下（所有元素都不相同），生成的排列数为 <code>n!</code>，因此结果数组的空间复杂度为 <code>O(n * n!)</code>；</li><li>临时数组 <code>track</code>，在每个递归调用中，<code>track</code> 的最大长度为 <code>n</code>，因此其空间复杂度为 <code>O(n)</code>；</li><li>布尔数组 <code>used</code> 用于标记哪些元素已经被使用，大小为 <code>n</code>，因此占用 <code>O(n)</code> 的空间。</li><li>综合考虑，最主要的空间复杂度来源于结果数组 <code>res</code>，因此整体空间复杂度为 <code>O(n * n!)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">track</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 做选择</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

			<span class="token comment">// 递归</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 撤销选择，回溯</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"31",-1),O=n("td",{style:{"text-align":"left"}},"下一个排列",-1),q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},E=n("code",null,"数组",-1),C=n("code",null,"双指针",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"47",-1),A=n("td",{style:{"text-align":"left"}},"全排列 II",-1),R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},D=n("code",null,"数组",-1),F=n("code",null,"回溯",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"60",-1),H=n("td",{style:{"text-align":"left"}},"排列序列",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=n("code",null,"递归",-1),Q=n("code",null,"数学",-1),U=n("td",{style:{"text-align":"center"}},"🔴",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/permutation-sequence",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/permutation-sequence",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"77",-1),nn=n("td",{style:{"text-align":"left"}},"组合",-1),tn={style:{"text-align":"center"}},sn={style:{"text-align":"left"}},en=n("code",null,"回溯",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),on={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/combinations",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/combinations",target:"_blank",rel:"noopener noreferrer"};function pn(rn,un){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[m]),_:1}),t("  🔗 "),n("a",b,[g,s(o)]),t(),n("a",v,[f,s(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,O,n("td",q,[s(a,{to:"/problem/0031.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[E]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[C]),_:1})]),L,n("td",N,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",j,[t("🔗"),s(o)])])]),n("tr",null,[B,A,n("td",R,[s(a,{to:"/problem/0047.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",S,[s(a,{to:"/tag/array.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[F]),_:1})]),G,n("td",M,[n("a",T,[t("🀄️"),s(o)]),t(),n("a",Y,[t("🔗"),s(o)])])]),n("tr",null,[z,H,n("td",J,[s(a,{to:"/problem/0060.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",K,[s(a,{to:"/tag/recursion.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[Q]),_:1})]),U,n("td",W,[n("a",X,[t("🀄️"),s(o)]),t(),n("a",Z,[t("🔗"),s(o)])])]),n("tr",null,[$,nn,n("td",tn,[s(a,{to:"/problem/0077.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",sn,[s(a,{to:"/tag/backtracking.html"},{default:e(()=>[en]),_:1})]),an,n("td",on,[n("a",cn,[t("🀄️"),s(o)]),t(),n("a",ln,[t("🔗"),s(o)])])])])])])}const kn=p(k,[["render",pn],["__file","0046.html.vue"]]);export{kn as default};
