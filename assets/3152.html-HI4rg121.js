import{_ as i,r as t,o as l,c as r,a as n,b as s,d as e,w as a,e as u}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_3152-特殊数组-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3152-特殊数组-ii","aria-hidden":"true"},"#"),s(" 3152. 特殊数组 II")],-1),m=n("code",null,"数组",-1),h=n("code",null,"二分查找",-1),g=n("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/special-array-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/special-array-ii",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An array is considered <strong>special</strong> if every pair of its adjacent elements contains two numbers with different parity.</p><p>You are given an array of integer <code>nums</code> and a 2D integer matrix <code>queries</code>, where for <code>queries[i] = [fromi, toi]</code> your task is to check that subarray <code>nums[fromi..toi]</code> is <strong>special</strong> or not.</p><p>Return an array of booleans <code>answer</code> such that <code>answer[i]</code> is <code>true</code> if <code>nums[fromi..toi]</code> is special.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [3,4,1,2,6], queries = [[0,4]]</p><p><strong>Output:</strong> [false]</p><p><strong>Explanation:</strong></p><p>The subarray is <code>[3,4,1,2,6]</code>. 2 and 6 are both even.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [4,3,1,6], queries = [[0,2],[2,3]]</p><p><strong>Output:</strong> [false,true]</p><p><strong>Explanation:</strong></p><ol><li>The subarray is <code>[4,3,1]</code>. 3 and 1 are both odd. So the answer to this query is <code>false</code>.</li><li>The subarray is <code>[1,6]</code>. There is only one pair: <code>(1,6)</code> and it contains numbers with different parity. So the answer to this query is <code>true</code>.</li></ol><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= queries.length &lt;= 10^5</code></li><li><code>queries[i].length == 2</code></li><li><code>0 &lt;= queries[i][0] &lt;= queries[i][1] &lt;= nums.length - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 <strong>特殊数组</strong> 。</p><p>你有一个整数数组 <code>nums</code> 和一个二维整数矩阵 <code>queries</code>，对于 <code>queries[i] = [fromi, toi]</code>，请你帮助你检查 子数组 <code>nums[fromi..toi]</code> 是不是一个 <strong>特殊数组</strong> 。</p><p>返回布尔数组 <code>answer</code>，如果 <code>nums[fromi..toi]</code> 是特殊数组，则 <code>answer[i]</code> 为 <code>true</code> ，否则，<code>answer[i]</code> 为 <code>false</code> 。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [3,4,1,2,6], queries = [[0,4]]</p><p><strong>输出：</strong>[false]</p><p><strong>解释：</strong></p><p>子数组是 <code>[3,4,1,2,6]</code>。2 和 6 都是偶数。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [4,3,1,6], queries = [[0,2],[2,3]]</p><p><strong>输出：</strong>[false,true]</p><p><strong>解释：</strong></p><ol><li>子数组是 <code>[4,3,1]</code>。3 和 1 都是奇数。因此这个查询的答案是 <code>false</code>。</li><li>子数组是 <code>[1,6]</code>。只有一对：<code>(1,6)</code>，且包含了奇偶性不同的数字。因此这个查询的答案是 <code>true</code>。</li></ol><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= queries.length &lt;= 10^5</code></li><li><code>queries[i].length == 2</code></li><li><code>0 &lt;= queries[i][0] &lt;= queries[i][1] &lt;= nums.length - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>定义前缀和数组 <code>prefix</code>，使用变量 <code>count</code> 记录相邻数字奇偶性相同出现的次数；</p></li><li><p><strong>构造前缀和数组</strong></p><p>遍历 <code>nums</code> 数组，不断更新 <code>count</code> 和 <code>prefix</code>：</p><ul><li>如果 <code>nums[i]</code> 和 <code>nums[i-1]</code> 奇偶性相同，则 <code>count += 1</code>；</li><li>将遍历到 <code>nums[i]</code> 时 <code>count</code> 的值保存到 <code>prefix[i]</code>；</li></ul></li><li><p><strong>查询结果</strong> 遍历 <code>queries</code> 数组，对于每个查询 <code>queries[i] = [left, right]</code>，判断：</p><ul><li>如果 <code>prefix[right] == prefix[left]</code>，说明在 <code>[left, right]</code> 区间内，没有出现奇偶性相同的相邻数字对，返回 <code>true</code>；</li><li>否则，返回 <code>false</code>；</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + q)</code>，其中 <code>n = nums.length, q = queries.length</code>，构造 <code>prefix</code> 数组需要遍历 <code>nums</code> 一遍，查询结果需要遍历 <code>queries</code> 一遍。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储 <code>prefix</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">queries</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isArraySpecial</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> queries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 记录相邻数字奇偶性相同出现的次数</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 构造前缀和数组</span>
	<span class="token keyword">let</span> prefix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果 \`nums[i]\` 和 \`nums[i-1]\` 奇偶性相同</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prefix<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 查询结果</span>
	<span class="token keyword">return</span> queries<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prefix<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> prefix<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function y(q,w){const p=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),e(o,{to:"/tag/binary-search.html"},{default:a(()=>[h]),_:1}),s(),e(o,{to:"/tag/prefix-sum.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",f,[v,e(c)]),s(),n("a",b,[_,e(c)])]),x])}const I=i(d,[["render",y],["__file","3152.html.vue"]]);export{I as default};
