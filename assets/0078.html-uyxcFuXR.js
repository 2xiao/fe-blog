import{_ as i,r as c,o as p,c as d,a as n,d as e,b as t,w as s,f as r,e as u}from"./app-ynO5B_DP.js";const _={},k={id:"_78-子集",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_78-子集","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"位运算",-1),f=n("code",null,"数组",-1),g=n("code",null,"回溯",-1),v={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of <strong>unique</strong> elements, return <em>all possible</em><em>subsets</em> <em>(the power set)</em>.</p><p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [[],[0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归函数实现:</p><ol><li>定义一个结果集 <code>res</code> 用于存储所有的子集。</li><li>定义一个辅助数组 <code>track</code> 用于记录当前回溯路径上的元素。</li><li>编写回溯算法的核心函数 <code>backtrack</code>，其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在 <code>backtrack</code> 函数中，首先将当前路径 <code>track</code> 加入结果集 <code>res</code>，这表示当前的 <code>track</code> 是一个有效的子集。</li><li>然后使用循环遍历从 <code>start</code> 到数组末尾的元素，对于每个元素，做出选择（将其加入 <code>track</code>），然后递归调用 <code>backtrack</code> 进入下一层。</li><li>在递归调用返回后，需要撤销选择，即将 <code>track</code> 的末尾元素弹出，以便进行下一次选择。</li><li>通过回溯的过程，可以遍历所有可能的子集。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(2^n * n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。这是因为对于每个元素，都有两种选择：选择或不选择，所以总共有 <code>2^n</code> 种可能的子集。在每个选择中，都需要花费 <code>O(n)</code> 的时间来复制当前的路径。</p></li><li><p><strong>空间复杂度</strong>：<code>O(2^n * k)</code></p><ul><li>空间复杂度主要取决于递归调用的栈空间和存储结果集的空间。</li><li>递归调用栈的最大深度是数组 <code>nums</code> 的长度，所以空间复杂度是 <code>O(n)</code>。</li><li>此外，存储结果集的空间复杂度为 <code>O(总子集个数 * 平均子集大小)</code>。在这里，总子集个数为 <code>2^n</code>，平均子集大小为 <code>k</code>（题目要求生成大小为 <code>k</code> 的子集），因此空间复杂度为 <code>O(2^n * k)</code>。</li><li>综合考虑以上两部分，整体的空间复杂度为 <code>O(n + 2^n * k)</code>。</li><li>在一般情况下，由于 <code>2^n</code> 的增长速度较大，因此空间复杂度可以近似表示为 <code>O(2^n * k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于存储结果</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 用于记录回溯路径</span>
	<span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 前序遍历位置，每个节点的值都是一个子集</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯算法标准框架</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 做选择</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 回溯遍历下一层节点</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 撤销选择</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"90",-1),q={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},E={href:"/problem/0090",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},M=n("code",null,"位运算",-1),N=n("code",null,"数组",-1),V=n("code",null,"回溯",-1),j={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"320",-1),R={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/generalized-abbreviation",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"位运算",-1),H=n("code",null,"字符串",-1),S=n("code",null,"回溯",-1),D={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"784",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/letter-case-permutation",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"位运算",-1),W=n("code",null,"字符串",-1),X=n("code",null,"回溯",-1),Y={style:{"text-align":"left"}},Z=n("td",{style:{"text-align":"center"}},"1982",-1),$={style:{"text-align":"left"}},nn={href:"https://leetcode.com/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),an=n("code",null,"分治",-1),on={style:{"text-align":"left"}},ln=n("td",{style:{"text-align":"center"}},"2044",-1),cn={style:{"text-align":"left"}},pn={href:"https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets",target:"_blank",rel:"noopener noreferrer"},dn={style:{"text-align":"center"}},rn={href:"/problem/2044",target:"_blank",rel:"noopener noreferrer"},un={style:{"text-align":"left"}},_n=n("code",null,"位运算",-1),kn=n("code",null,"数组",-1),hn=n("code",null,"回溯",-1),mn=n("code",null,"1+",-1),bn={style:{"text-align":"left"}};function fn(gn,vn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return p(),d("div",null,[n("h1",k,[h,e(),n("a",m,[e("78. 子集"),t(o)])]),n("p",null,[e("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/outline/tag/array.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/outline/tag/backtracking.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",v,[x,t(o)])]),y,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[O,n("td",q,[n("a",I,[e("子集 II"),t(o)])]),n("td",C,[n("a",E,[e("[✓]"),t(o)])]),n("td",L,[t(a,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1}),e(),t(a,{to:"/outline/tag/array.html"},{default:s(()=>[N]),_:1}),e(),t(a,{to:"/outline/tag/backtracking.html"},{default:s(()=>[V]),_:1})]),n("td",j,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[B,n("td",R,[n("a",T,[e("列举单词的全部缩写"),t(o)])]),z,n("td",A,[t(a,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[G]),_:1}),e(),t(a,{to:"/outline/tag/string.html"},{default:s(()=>[H]),_:1}),e(),t(a,{to:"/outline/tag/backtracking.html"},{default:s(()=>[S]),_:1})]),n("td",D,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[F,n("td",J,[n("a",K,[e("字母大小写全排列"),t(o)])]),P,n("td",Q,[t(a,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[U]),_:1}),e(),t(a,{to:"/outline/tag/string.html"},{default:s(()=>[W]),_:1}),e(),t(a,{to:"/outline/tag/backtracking.html"},{default:s(()=>[X]),_:1})]),n("td",Y,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[Z,n("td",$,[n("a",nn,[e("从子集的和还原数组"),t(o)])]),tn,n("td",en,[t(a,{to:"/outline/tag/array.html"},{default:s(()=>[sn]),_:1}),e(),t(a,{to:"/outline/tag/divide-and-conquer.html"},{default:s(()=>[an]),_:1})]),n("td",on,[t(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})])]),n("tr",null,[ln,n("td",cn,[n("a",pn,[e("统计按位或能得到最大值的子集数目"),t(o)])]),n("td",dn,[n("a",rn,[e("[✓]"),t(o)])]),n("td",un,[t(a,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[_n]),_:1}),e(),t(a,{to:"/outline/tag/array.html"},{default:s(()=>[kn]),_:1}),e(),t(a,{to:"/outline/tag/backtracking.html"},{default:s(()=>[hn]),_:1}),e(),mn]),n("td",bn,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const yn=i(_,[["render",fn],["__file","0078.html.vue"]]);export{yn as default};
