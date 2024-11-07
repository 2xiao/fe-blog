import{_ as c,r as l,o as i,c as u,a as n,b as a,d as s,w as t,f as r,e as d}from"./app-OX-nYmHS.js";const k={},h=n("h1",{id:"_354-俄罗斯套娃信封问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_354-俄罗斯套娃信封问题","aria-hidden":"true"},"#"),a(" 354. 俄罗斯套娃信封问题")],-1),m=n("code",null,"数组",-1),_=n("code",null,"二分查找",-1),v=n("code",null,"动态规划",-1),g=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/russian-doll-envelopes",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D array of integers <code>envelopes</code> where <code>envelopes[i] = [wi, hi]</code> represents the width and the height of an envelope.</p><p>One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope&#39;s width and height.</p><p>Return <em>the maximum number of envelopes you can Russian doll (i.e., put one inside the other)</em>.</p><p><strong>Note:</strong> You cannot rotate an envelope.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]</p><p>Output: 3</p><p>Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] =&gt; [5,4] =&gt; [6,7]).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: envelopes = [[1,1],[1,1],[1,1]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= envelopes.length &lt;= 10^5</code></li><li><code>envelopes[i].length == 2</code></li><li><code>1 &lt;= wi, hi &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>envelopes</code> ，其中 <code>envelopes[i] = [wi, hi]</code> ，表示第 <code>i</code> 个信封的宽度和高度。</p><p>当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。</p><p>请计算 <strong>最多能有多少个</strong> 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。</p><p>注意：不允许旋转信封。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以转化为求一组数对的最长链问题。首先对信封按照宽度进行排序，如果宽度相同，则按高度递减排序。然后，可以将问题转化为找出最长的严格递增子序列（LIS）。</p><ol><li><p><strong>排序：</strong></p><ul><li>首先对信封按照宽度进行升序排序。</li><li>如果宽度相同，则按高度递减排序，这样可以避免宽度相同的信封之间互相套娃。</li></ul></li><li><p><strong>动态规划求解最长递增子序列：</strong></p><ul><li><p>初始化左右指针：<code>left</code> 指向 0，<code>right</code> 指向 <code>len</code>。</p></li><li><p>开始二分查找：</p><ul><li>在当前的辅助数组 <code>tails</code> 中进行二分查找，找到第一个大于等于 <code>nums[i]</code> 的位置。用 <code>mid</code> 表示二分查找中间位置。</li><li>如果 <code>tails[mid] &lt; nums[i]</code>，说明当前的递增子序列可以继续延长，因此更新 <code>left = mid + 1</code>。</li><li>否则，说明当前递增子序列需要进行调整，因此更新 <code>right = mid</code>。</li></ul></li><li><p>更新辅助数组：</p><ul><li>如果 <code>left === len</code>，说明 <code>nums[i]</code> 大于当前递增子序列的所有元素，将 <code>nums[i]</code> 添加到辅助数组的末尾，并且递增子序列的长度 <code>len++</code>。</li><li>否则，将 <code>nums[i]</code> 替换掉辅助数组中第一个大于等于 <code>nums[i]</code> 的元素。</li></ul></li><li><p>迭代下一个元素：重复上述过程，直到遍历完整个数组 <code>nums</code>。</p></li><li><p>最终结果：辅助数组的长度 <code>len</code> 即为最长递增子序列的长度。</p></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是信封的数量。对信封数组进行排序的时间复杂度为 <code>O(n log n)</code>；在排好序的信封数组中，使用二分查找求最长递增子序列的时间复杂度为 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要额外的空间来存储高度的数组和辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">envelopes</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxEnvelopes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">envelopes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	envelopes<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> height <span class="token operator">=</span> envelopes<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> tails <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> height<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> len<span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>tails<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			tails<span class="token punctuation">[</span>len<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			tails<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> height<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> len<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"300",-1),L={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"数组",-1),R=n("code",null,"二分查找",-1),V=n("code",null,"动态规划",-1),M={style:{"text-align":"left"}},j=n("td",{style:{"text-align":"center"}},"1996",-1),B={style:{"text-align":"left"}},S={href:"https://leetcode.com/problems/the-number-of-weak-characters-in-the-game",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},D=n("code",null,"栈",-1),H=n("code",null,"贪心",-1),z=n("code",null,"数组",-1),A=n("code",null,"2+",-1),F={style:{"text-align":"left"}},G=n("td",{style:{"text-align":"center"}},"2771",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"动态规划",-1),X={style:{"text-align":"left"}};function Z($,nn){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[a("🔴 "),s(p,{color:"#ff334b"},{default:t(()=>[a("Hard")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),a(),s(e,{to:"/tag/binary-search.html"},{default:t(()=>[_]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),a(),s(e,{to:"/tag/sorting.html"},{default:t(()=>[g]),_:1}),a("  🔗 "),n("a",b,[f,s(o)]),a(),n("a",y,[x,s(o)])]),w,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,n("td",L,[n("a",N,[a("最长递增子序列"),s(o)])]),n("td",q,[s(e,{to:"/problem/0300.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",C,[s(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),a(),s(e,{to:"/tag/binary-search.html"},{default:t(()=>[R]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[V]),_:1})]),n("td",M,[s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1})])]),n("tr",null,[j,n("td",B,[n("a",S,[a("游戏中弱角色的数量"),s(o)])]),T,n("td",Y,[s(e,{to:"/tag/stack.html"},{default:t(()=>[D]),_:1}),a(),s(e,{to:"/tag/greedy.html"},{default:t(()=>[H]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[z]),_:1}),a(),A]),n("td",F,[s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1})])]),n("tr",null,[G,n("td",J,[n("a",K,[a("构造最长非递减子数组"),s(o)])]),P,n("td",Q,[s(e,{to:"/tag/array.html"},{default:t(()=>[U]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[W]),_:1})]),n("td",X,[s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1})])])])])])}const an=c(k,[["render",Z],["__file","0354.html.vue"]]);export{an as default};
