import{_ as l,r as o,o as r,c as i,a as n,b as s,d as a,w as e,e as u}from"./app-9CeBk-uV.js";const d={},k=n("h1",{id:"_2501-数组中最长的方波",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2501-数组中最长的方波","aria-hidden":"true"},"#"),s(" 2501. 数组中最长的方波")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),g=n("code",null,"二分查找",-1),b=n("code",null,"动态规划",-1),v=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/longest-square-streak-in-an-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/longest-square-streak-in-an-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>. A subsequence of <code>nums</code> is called a <strong>square streak</strong> if:</p><ul><li>The length of the subsequence is at least <code>2</code>, and</li><li><strong>after</strong> sorting the subsequence, each element (except the first element) is the <strong>square</strong> of the previous number.</li></ul><p>Return <em>the length of the<strong>longest square streak</strong> in</em> <code>nums</code> <em>, or return</em> <code>-1</code> <em>if there is no <strong>square streak</strong>.</em></p><p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,3,6,16,8,2]</p><p>Output: 3</p><p>Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].</p><ul><li>4 = 2 * 2.</li><li>16 = 4 * 4.</li></ul><p>Therefore, [4,16,2] is a square streak.</p><p>It can be shown that every subsequence of length 4 is not a square streak.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,5,6,7]</p><p>Output: -1</p><p>Explanation: There is no square streak in nums so return -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>2 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 。如果 <code>nums</code> 的子序列满足下述条件，则认为该子序列是一个 <strong>方波</strong> ：</p><ul><li>子序列的长度至少为 <code>2</code> ，并且</li><li>将子序列从小到大排序 <strong>之后</strong> ，除第一个元素外，每个元素都是前一个元素的 <strong>平方</strong> 。</li></ul><p>返回 **<code>nums</code> ** 中 <strong>最长方波</strong> 的长度，如果不存在 <strong>方波</strong> ** 则返回 **<code>-1</code> 。</p><p><strong>子序列</strong> 也是一个数组，可以由另一个数组删除一些或不删除元素且不改变剩余元素的顺序得到。</p><p><strong>示例 1 ：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,3,6,16,8,2]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 选出子序列 [4,16,2] 。排序后，得到 [2,4,16] 。</p><ul><li>4 = 2 * 2.</li><li>16 = 4 * 4.</li></ul><p>因此，[4,16,2] 是一个方波.</p><p>可以证明长度为 4 的子序列都不是方波。</p></blockquote><p><strong>示例 2 ：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,5,6,7]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> nums 不存在方波，所以返回 -1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>2 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要解决这个问题，可以利用集合来快速查找平方数，同时通过对输入数组进行排序来方便构造平方序列。</p><ol><li><p>将数组中的每个元素存入一个集合中，以便快速查找平方值。</p></li><li><p>对输入数组 <code>nums</code> 进行去重和排序，以便后续构建平方序列时，能够保证元素的顺序。</p></li><li><p>构建平方序列：</p><ul><li>遍历已排序的数组，针对每个元素 <code>num</code>，检查是否可以形成平方序列： <ul><li>如果 <code>num</code> 是 <code>1</code>，跳过，因为 <code>1</code> 的平方是 <code>1</code>，不会形成有效的平方序列。</li><li>从当前元素开始，尝试查找下一个平方数，即 <code>num * num</code>。</li><li>如果找到了，就将平方序列长度加一，并从集合中删除当前平方数，防止重复计算，并更新当前元素为下一个平方数。</li><li>重复这一过程直到找不到下一个平方数为止，并记录当前的平方序列长度。</li></ul></li></ul></li><li><p>在每次构建平方序列时，检查长度是否大于当前记录的最长平方序列长度，并进行更新。</p></li><li><p>如果找到的最长平方序列长度大于等于 2，则返回该长度；否则返回 -1。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度，对数组进行了排序。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用额外的集合存储元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestSquareStreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于快速查找</span>
	<span class="token keyword">let</span> numsSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// 去重并排序</span>
	nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>numsSet<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 跳过 1</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
			square <span class="token operator">=</span> num <span class="token operator">*</span> num<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>numsSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			len<span class="token operator">++</span><span class="token punctuation">;</span>
			numsSet<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">;</span>
			square <span class="token operator">*=</span> square<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(S,E){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/binary-search.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/dynamic-programming.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",_,[f,a(p)]),s(),n("a",q,[y,a(p)])]),w])}const I=l(d,[["render",x],["__file","2501.html.vue"]]);export{I as default};
