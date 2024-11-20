import{_ as r,r as l,o as p,c as d,a as t,b as e,d as n,w as s,f as i,e as u}from"./app-BBnmDgJV.js";const _={},h=t("h1",{id:"_560-和为-k-的子数组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_560-和为-k-的子数组","aria-hidden":"true"},"#"),e(" 560. 和为 K 的子数组")],-1),m=t("code",null,"数组",-1),k=t("code",null,"哈希表",-1),g=t("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return <em>the total number of subarrays whose sum equals to</em> <code>k</code>.</p><p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1], k = 2</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3], k = 3</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你统计并返回 <em>该数组中和为 <code>k</code> 的子数组的个数</em>。</p><p>子数组是数组中元素的连续非空序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1], k = 2</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3], k = 3</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效解决这个问题，可以使用<strong>前缀和</strong>和<strong>哈希表</strong>的组合。</p><p>前缀和指的是数组中从开始到某个位置的所有元素之和。利用前缀和，可以计算出任意子数组的和。</p><p>假设子数组的范围是从索引 <code>i</code> 到 <code>j</code>，那么它的和可以表示为：<code>sum(nums[i:j]) = prefixSum[j] - prefixSum[i-1]</code>，其中，<code>prefixSum[i]</code> 是从数组开头到索引 <code>i</code> 的前缀和。</p><p>如果想让这个子数组的和等于 <code>k</code>，就需要满足：<code>prefixSum[j] - prefixSum[i-1] = k</code>，换句话说，子数组的和等于 <code>k</code> 等价于在之前的某个位置 <code>i-1</code> 存在一个前缀和，它与当前前缀和的差为 <code>k</code>。</p><p>为了快速判断是否有这样的前缀和，使用哈希表记录每个前缀和出现的次数。每次遍历数组时，计算当前前缀和，并查看哈希表中是否存在 <code>prefixSum - k</code>，如果存在，说明从之前某个位置到当前位置的子数组和等于 <code>k</code>。</p><ol><li>初始化一个哈希表 <code>map</code>，用于记录前缀和出现的次数。初始时将 <code>map[0] = 1</code>，表示和为 0 的前缀和已经出现过一次（这是为了处理从数组开头的子数组）。</li><li>遍历数组，逐步累加计算当前前缀和 <code>prefixSum</code>。</li><li>每次计算新的前缀和时，查看 <code>map</code> 中是否存在 <code>prefixSum - k</code>，如果存在，说明找到了一个和为 <code>k</code> 的子数组，将计数器增加。</li><li>然后将当前的 <code>prefixSum</code> 的值更新到哈希表中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。只需要遍历数组一次，哈希表的插入和查询都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，所有前缀和都不同，哈希表需要记录所有前缀和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化前缀和为0，出现1次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span> <span class="token comment">// 当前前缀和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果存在前缀和差为k，则增加计数</span>
		<span class="token punctuation">}</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前前缀和的出现次数</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"1",-1),S=t("td",{style:{"text-align":"left"}},"两数之和",-1),j={style:{"text-align":"center"}},C={style:{"text-align":"left"}},E=t("code",null,"数组",-1),L=t("code",null,"哈希表",-1),N=t("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"523",-1),K=t("td",{style:{"text-align":"left"}},"连续的子数组和",-1),z=t("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},R=t("code",null,"数组",-1),A=t("code",null,"哈希表",-1),G=t("code",null,"数学",-1),T=t("code",null,"1+",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/continuous-subarray-sum",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/continuous-subarray-sum",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"713",-1),Q=t("td",{style:{"text-align":"left"}},"乘积小于 K 的子数组",-1),U=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"数组",-1),Y=t("code",null,"二分查找",-1),Z=t("code",null,"前缀和",-1),$=t("code",null,"1+",-1),tt=t("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"724",-1),ot=t("td",{style:{"text-align":"left"}},"寻找数组的中心下标",-1),lt={style:{"text-align":"center"}},ct={style:{"text-align":"left"}},rt=t("code",null,"数组",-1),pt=t("code",null,"前缀和",-1),dt=t("td",{style:{"text-align":"center"}},"🟢",-1),it={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"974",-1),mt=t("td",{style:{"text-align":"left"}},"和可被 K 整除的子数组",-1),kt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),bt=t("code",null,"哈希表",-1),yt=t("code",null,"前缀和",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),vt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/subarray-sums-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},St=t("td",{style:{"text-align":"center"}},"1658",-1),jt=t("td",{style:{"text-align":"left"}},"将 x 减到 0 的最小操作数",-1),Ct=t("td",{style:{"text-align":"center"}},null,-1),Et={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Nt=t("code",null,"哈希表",-1),Vt=t("code",null,"二分查找",-1),It=t("code",null,"2+",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),Bt={style:{"text-align":"center"}},Kt={href:"https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"2090",-1),Rt=t("td",{style:{"text-align":"left"}},"半径为 k 的子数组平均值",-1),At=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},Tt=t("code",null,"数组",-1),Dt=t("code",null,"滑动窗口",-1),Ft=t("td",{style:{"text-align":"center"}},"🟠",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Pt={href:"https://leetcode.com/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Qt=t("td",{style:{"text-align":"center"}},"2219",-1),Ut=t("td",{style:{"text-align":"left"}},"数组的最大总分 🔒",-1),Wt=t("td",{style:{"text-align":"center"}},null,-1),Xt={style:{"text-align":"left"}},Yt=t("code",null,"数组",-1),Zt=t("code",null,"前缀和",-1),$t=t("td",{style:{"text-align":"center"}},"🟠",-1),te={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"};function se(ae,oe){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",f,[b,n(o)]),e(),t("a",y,[x,n(o)])]),v,i(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,S,t("td",j,[n(a,{to:"/problem/0001.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[L]),_:1})]),N,t("td",V,[t("a",I,[e("🀄️"),n(o)]),e(),t("a",O,[e("🔗"),n(o)])])]),t("tr",null,[B,K,z,t("td",M,[n(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[A]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:s(()=>[G]),_:1}),e(),T]),D,t("td",F,[t("a",H,[e("🀄️"),n(o)]),e(),t("a",J,[e("🔗"),n(o)])])]),t("tr",null,[P,Q,U,t("td",W,[n(a,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Y]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Z]),_:1}),e(),$]),tt,t("td",et,[t("a",nt,[e("🀄️"),n(o)]),e(),t("a",st,[e("🔗"),n(o)])])]),t("tr",null,[at,ot,t("td",lt,[n(a,{to:"/problem/0724.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ct,[n(a,{to:"/tag/array.html"},{default:s(()=>[rt]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[pt]),_:1})]),dt,t("td",it,[t("a",ut,[e("🀄️"),n(o)]),e(),t("a",_t,[e("🔗"),n(o)])])]),t("tr",null,[ht,mt,kt,t("td",gt,[n(a,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[bt]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[yt]),_:1})]),xt,t("td",vt,[t("a",wt,[e("🀄️"),n(o)]),e(),t("a",qt,[e("🔗"),n(o)])])]),t("tr",null,[St,jt,Ct,t("td",Et,[n(a,{to:"/tag/array.html"},{default:s(()=>[Lt]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[Nt]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[Vt]),_:1}),e(),It]),Ot,t("td",Bt,[t("a",Kt,[e("🀄️"),n(o)]),e(),t("a",zt,[e("🔗"),n(o)])])]),t("tr",null,[Mt,Rt,At,t("td",Gt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Tt]),_:1}),e(),n(a,{to:"/tag/sliding-window.html"},{default:s(()=>[Dt]),_:1})]),Ft,t("td",Ht,[t("a",Jt,[e("🀄️"),n(o)]),e(),t("a",Pt,[e("🔗"),n(o)])])]),t("tr",null,[Qt,Ut,Wt,t("td",Xt,[n(a,{to:"/tag/array.html"},{default:s(()=>[Yt]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Zt]),_:1})]),$t,t("td",te,[t("a",ee,[e("🀄️"),n(o)]),e(),t("a",ne,[e("🔗"),n(o)])])])])])])}const ce=r(_,[["render",se],["__file","0560.html.vue"]]);export{ce as default};
