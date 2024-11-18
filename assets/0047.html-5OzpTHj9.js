import{_ as l,r as c,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-9Xw5divW.js";const k={},h=n("h1",{id:"_47-全排列-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_47-全排列-ii","aria-hidden":"true"},"#"),s(" 47. 全排列 II")],-1),_=n("code",null,"数组",-1),m=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/permutations-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a collection of numbers, <code>nums</code>, that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,2]</p><p>Output:</p><p>[[1,1,2],</p><p>[1,2,1],</p><p>[2,1,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 8</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个可包含重复数字的序列 <code>nums</code> ，<strong>按任意顺序</strong> 返回所有不重复的全排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法生成全排列，同时处理数组中可能存在重复元素的情况：</p><ol><li>定义一个结果数组 <code>res</code>，一个路径数组 <code>track</code> 用于记录当前排列的路径，以及一个布尔数组 <code>used</code> 用于标记某个元素是否已经被使用过。</li><li>对输入数组 <code>nums</code> 进行升序排序，以方便在后续去重的过程中判断相邻元素是否相同。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数用于生成全排列。函数没有参数，通过数组 <code>track</code> 和布尔数组 <code>used</code> 记录当前的路径和状态。</li><li>在 <code>backtrack</code> 函数中，首先检查当前路径的长度是否等于输入数组 <code>nums</code> 的长度，如果是，则说明已经生成了一个完整的排列，将当前路径加入到结果数组 <code>res</code> 中，并直接返回。</li><li>然后，从头开始遍历排序后的数组 <code>nums</code>，对于每个元素： <ul><li>如果该元素已经被使用过 (<code>used[i]</code> 为 <code>true</code>)，则跳过当前元素。</li><li>如果该元素和前一个元素相同，且前一个元素没有被使用过 (<code>!used[i - 1]</code>)，则跳过当前元素。这是为了避免生成重复的排列，确保相同元素只在同一层递归中出现一次。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，标记该元素为已使用，递归调用 <code>backtrack</code> 函数，进入下一层，并在递归调用结束后，将当前元素从路径中弹出，标记为未使用，以便回溯到上一层，继续遍历其他元素。</li></ul></li><li>最后，返回结果数组 <code>res</code>，其中包含了所有满足条件的全排列。</li></ol><p>标准全排列算法之所以出现重复，是因为把相同元素形成的排列序列视为不同的序列，但实际上它们应该是相同的；而如果固定相同元素形成的序列顺序，保证相同元素在排列中的相对位置保持不变，就避免了重复。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * n!)</code>，其中 <code>n</code> 是 <code>nums</code> 的长度。 <ul><li>在回溯过程中，每次递归都要遍历 <code>n</code> 个元素，递归树的每一层都要做选择；</li><li>对于每一层的递归，最多需要处理 <code>n!</code> 种情况；</li><li>因此总的时间复杂度是 <code>O(n * n!)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n * n!)</code>，空间复杂度主要由以下几个部分组成： <ul><li>结果数组<code>res</code> 用于存储所有生成的唯一排列，在最坏情况下（所有元素都不相同），生成的排列数为 <code>n!</code>，因此结果数组的空间复杂度为 <code>O(n * n!)</code>；</li><li>临时数组 <code>track</code>，在每个递归调用中，<code>track</code> 的最大长度为 <code>n</code>，因此其空间复杂度为 <code>O(n)</code>；</li><li>布尔数组 <code>used</code> 用于标记哪些元素已经被使用，大小为 <code>n</code>，因此占用 <code>O(n)</code> 的空间。</li><li>综合考虑，最主要的空间复杂度来源于结果数组 <code>res</code>，因此整体空间复杂度为 <code>O(n * n!)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permuteUnique</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 先排序，让相同的元素靠在一起</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>used<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"31",-1),O=n("td",{style:{"text-align":"left"}},"下一个排列",-1),q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"数组",-1),E=n("code",null,"双指针",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/next-permutation",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"46",-1),R=n("td",{style:{"text-align":"left"}},"全排列",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"回溯",-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/permutations",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/permutations",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"267",-1),H=n("td",{style:{"text-align":"left"}},"回文排列 II 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"哈希表",-1),Q=n("code",null,"字符串",-1),W=n("code",null,"回溯",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/palindrome-permutation-ii",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/palindrome-permutation-ii",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"996",-1),sn=n("td",{style:{"text-align":"left"}},"平方数组的数目",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},en=n("code",null,"位运算",-1),on=n("code",null,"数组",-1),cn=n("code",null,"哈希表",-1),pn=n("code",null,"4+",-1),ln=n("td",{style:{"text-align":"center"}},"🔴",-1),rn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/number-of-squareful-arrays",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/number-of-squareful-arrays",target:"_blank",rel:"noopener noreferrer"};function kn(hn,_n){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",g,[v,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,O,n("td",q,[t(e,{to:"/problem/0031.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[E]),_:1})]),L,n("td",N,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",j,[s("🔗"),t(o)])])]),n("tr",null,[B,R,n("td",A,[t(e,{to:"/problem/0046.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",G,[t(e,{to:"/tag/array.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[S]),_:1})]),T,n("td",U,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",D,[s("🔗"),t(o)])])]),n("tr",null,[F,H,J,n("td",K,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[P]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[Q]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[W]),_:1})]),X,n("td",Y,[n("a",Z,[s("🀄️"),t(o)]),s(),n("a",$,[s("🔗"),t(o)])])]),n("tr",null,[nn,sn,tn,n("td",an,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[en]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[on]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[cn]),_:1}),s(),pn]),ln,n("td",rn,[n("a",un,[s("🀄️"),t(o)]),s(),n("a",dn,[s("🔗"),t(o)])])])])])])}const bn=l(k,[["render",kn],["__file","0047.html.vue"]]);export{bn as default};
