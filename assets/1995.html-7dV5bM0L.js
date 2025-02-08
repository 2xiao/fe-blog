import{_ as p,r as l,o as r,c as u,a as n,b as s,d as t,w as e,f as i,e as d}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_1995-统计特殊四元组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1995-统计特殊四元组","aria-hidden":"true"},"#"),s(" 1995. 统计特殊四元组")],-1),h=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),g=n("code",null,"枚举",-1),b={href:"https://leetcode.cn/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-special-quadruplets",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, return <em>the number of <strong>distinct</strong> quadruplets</em> <code>(a, b, c, d)</code> <em>such that:</em></p><ul><li><code>nums[a] + nums[b] + nums[c] == nums[d]</code>, and</li><li><code>a &lt; b &lt; c &lt; d</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,6]</p><p>Output: 1</p><p>Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,3,6,4,5]</p><p>Output: 0</p><p>Explanation: There are no such quadruplets in [3,3,6,4,5].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,1,1,3,5]</p><p>Output: 4</p><p>Explanation: The 4 quadruplets that satisfy the requirement are:</p><ul><li>(0, 1, 2, 3): 1 + 1 + 1 == 3</li><li>(0, 1, 3, 4): 1 + 1 + 3 == 5</li><li>(0, 2, 3, 4): 1 + 1 + 3 == 5</li><li>(1, 2, 3, 4): 1 + 1 + 3 == 5</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>4 &lt;= nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>下标从 0 开始</strong> 的整数数组 <code>nums</code> ，返回满足下述条件的 <strong>不同</strong> 四元组 <code>(a, b, c, d)</code> 的 <strong>数目</strong> ：</p><ul><li><code>nums[a] + nums[b] + nums[c] == nums[d]</code> ，且</li><li><code>a &lt; b &lt; c &lt; d</code></li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,6]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 满足要求的唯一一个四元组是 (0, 1, 2, 3) 因为 1 + 2 + 3 == 6 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,3,6,4,5]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong>[3,3,6,4,5] 中不存在满足要求的四元组。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,3,5]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 满足要求的 4 个四元组如下：</p><ul><li>(0, 1, 2, 3): 1 + 1 + 1 == 3</li><li>(0, 1, 3, 4): 1 + 1 + 3 == 5</li><li>(0, 2, 3, 4): 1 + 1 + 3 == 5</li><li>(1, 2, 3, 4): 1 + 1 + 3 == 5</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>4 &lt;= nums.length &lt;= 50</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题目要求在数组中找到四个不同的索引 <code>a, b, c, d</code>，满足 <code>nums[a] + nums[b] + nums[c] = nums[d]</code>。我们通过优化暴力<code>O(n^4)</code> 的方法，使用 <strong>哈希表</strong> 优化为 <code>O(n^2)</code>，在大规模输入下表现更优。。</p><ol><li><p>初始化结果 <code>res</code> 为 0。</p></li><li><p><strong>转换为等式形式</strong>：</p><ul><li>重新整理条件为 <code>nums[a] + nums[b] = nums[d] - nums[c]</code>。</li></ul></li><li><p><strong>倒序遍历</strong>：</p><ul><li>首先处理 <code>c, d</code>：计算 <code>nums[d] - nums[c]</code>，并将其存入哈希表 <code>count</code> 中，用于快速查询。</li><li>再处理 <code>a, b</code>：对于每个 <code>b</code>，枚举所有 <code>a</code>，直接从哈希表中查找 <code>nums[a] + nums[b]</code> 的数量并累加到结果 <code>res</code>。</li></ul></li><li><p><strong>动态更新哈希表</strong>：</p><ul><li>每次遍历到新的 <code>b</code>，将与 <code>c, d</code> 的可能差值 <code>nums[d] - nums[c]</code> 更新到哈希表中。</li></ul></li><li><p>最后返回结果 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，两层循环。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用哈希表 <code>count</code> 存储 <code>O(n)</code> 个键值对。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countQuadruplets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 结果计数器</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 哈希表记录 nums[d] - nums[c]</span>
	count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化最后两个元素的差值</span>

	<span class="token comment">// 从倒数第三个元素开始枚举 b</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> b <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">;</span> b <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> b<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 枚举 a</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> a <span class="token operator">=</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> a <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> a<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 查找是否有匹配的 nums[a] + nums[b] 在哈希表中</span>
			res <span class="token operator">+=</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>a<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新哈希表：计算 nums[d] - nums[b] 并存入</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> d <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> d <span class="token operator">&gt;</span> b<span class="token punctuation">;</span> d<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">-</span> nums<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"18",-1),E=n("td",{style:{"text-align":"left"}},"四数之和",-1),O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"双指针",-1),N=n("code",null,"排序",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/4sum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"334",-1),G=n("td",{style:{"text-align":"left"}},"递增的三元子序列",-1),M={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},S=n("code",null,"贪心",-1),z=n("code",null,"数组",-1),A=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"1534",-1),K=n("td",{style:{"text-align":"left"}},"统计好三元组",-1),P={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"数组",-1),X=n("code",null,"枚举",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/count-good-triplets",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/count-good-triplets",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"2552",-1),tn=n("td",{style:{"text-align":"left"}},"统计上升四元组",-1),en=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},on=n("code",null,"树状数组",-1),ln=n("code",null,"数组",-1),cn=n("code",null,"动态规划",-1),pn=n("code",null,"2+",-1),rn=n("td",{style:{"text-align":"center"}},"🔴",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/count-increasing-quadruplets",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/count-increasing-quadruplets",target:"_blank",rel:"noopener noreferrer"};function mn(hn,_n){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/hash-table.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/enumeration.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",v,[y,t(o)])]),x,i(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,E,n("td",O,[t(a,{to:"/problem/0018.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[N]),_:1})]),V,n("td",T,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[R,G,n("td",M,[t(a,{to:"/problem/0334.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Q,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[S]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[z]),_:1})]),A,n("td",D,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",H,[s("🔗"),t(o)])])]),n("tr",null,[J,K,n("td",P,[t(a,{to:"/problem/1534.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",U,[t(a,{to:"/tag/array.html"},{default:e(()=>[W]),_:1}),s(),t(a,{to:"/tag/enumeration.html"},{default:e(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[s("🀄️"),t(o)]),s(),n("a",nn,[s("🔗"),t(o)])])]),n("tr",null,[sn,tn,en,n("td",an,[t(a,{to:"/tag/binary-indexed-tree.html"},{default:e(()=>[on]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[ln]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[cn]),_:1}),s(),pn]),rn,n("td",un,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",kn,[s("🔗"),t(o)])])])])])])}const bn=p(k,[["render",mn],["__file","1995.html.vue"]]);export{bn as default};
