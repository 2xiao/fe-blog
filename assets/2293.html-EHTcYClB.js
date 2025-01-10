import{_ as p,r as c,o as i,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-XFeYdzZv.js";const m={},g=n("h1",{id:"_2293-极大极小游戏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2293-极大极小游戏","aria-hidden":"true"},"#"),s(" 2293. 极大极小游戏")],-1),h=n("code",null,"数组",-1),k=n("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/min-max-game",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/min-max-game",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> whose length is a power of <code>2</code>.</p><p>Apply the following algorithm on <code>nums</code>:</p><ol><li>Let <code>n</code> be the length of <code>nums</code>. If <code>n == 1</code>, <strong>end</strong> the process. Otherwise, <strong>create</strong> a new <strong>0-indexed</strong> integer array <code>newNums</code> of length <code>n / 2</code>.</li><li>For every <strong>even</strong> index <code>i</code> where <code>0 &lt;= i &lt; n / 2</code>, <strong>assign</strong> the value of <code>newNums[i]</code> as <code>min(nums[2 * i], nums[2 * i + 1])</code>.</li><li>For every <strong>odd</strong> index <code>i</code> where <code>0 &lt;= i &lt; n / 2</code>, <strong>assign</strong> the value of <code>newNums[i]</code> as <code>max(nums[2 * i], nums[2 * i + 1])</code>.</li><li><strong>Replace</strong> the array <code>nums</code> with <code>newNums</code>.</li><li><strong>Repeat</strong> the entire process starting from step 1.</li></ol><p>Return <em>the last number that remains in</em><code>nums</code> <em>after applying the algorithm.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/13/example1drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: nums = [1,3,5,2,4,8,2,2]</p><p>Output: 1</p><p>Explanation: The following arrays are the results of applying the algorithm repeatedly.</p><p>First: nums = [1,5,4,2]</p><p>Second: nums = [1,4]</p><p>Third: nums = [1]</p><p>1 is the last remaining number, so we return 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3]</p><p>Output: 3</p><p>Explanation: 3 is already the last remaining number, so we return 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1024</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>nums.length</code> is a power of <code>2</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，其长度是 <code>2</code> 的幂。</p><p>对 <code>nums</code> 执行下述算法：</p><ol><li>设 <code>n</code> 等于 <code>nums</code> 的长度，如果 <code>n == 1</code> ，<strong>终止</strong> 算法过程。否则，<strong>创建</strong> 一个新的整数数组 <code>newNums</code> ，新数组长度为 <code>n / 2</code> ，下标从 <strong>0</strong> 开始。</li><li>对于满足 <code>0 &lt;= i &lt; n / 2</code> 的每个 <strong>偶数</strong> 下标 <code>i</code> ，将 <code>newNums[i]</code> <strong>赋值</strong> 为 <code>min(nums[2 * i], nums[2 * i + 1])</code> 。</li><li>对于满足 <code>0 &lt;= i &lt; n / 2</code> 的每个 <strong>奇数</strong> 下标 <code>i</code> ，将 <code>newNums[i]</code> <strong>赋值</strong> 为 <code>max(nums[2 * i], nums[2 * i + 1])</code> 。</li><li>用 <code>newNums</code> 替换 <code>nums</code> 。</li><li>从步骤 1 开始 <strong>重复</strong> 整个过程。</li></ol><p>执行算法后，返回 <code>nums</code> 中剩下的那个数字。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/13/example1drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> nums = [1,3,5,2,4,8,2,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 重复执行算法会得到下述数组。</p><p>第一轮：nums = [1,5,4,2]</p><p>第二轮：nums = [1,4]</p><p>第三轮：nums = [1]</p><p>1 是最后剩下的那个数字，返回 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 3 就是最后剩下的数字，返回 3 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1024</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>nums.length</code> 是 <code>2</code> 的幂</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>初始化变量 <code>n</code> 为数组的长度。</p></li><li><p>使用一个 <code>while</code> 循环，当 <code>n &gt; 1</code> 时进行迭代。</p></li><li><p>在每轮中，遍历数组的前 <code>n / 2</code> 个元素，并根据规则替换其值：</p><ul><li>如果当前索引 <code>i</code> 是偶数，则取当前数组中第 <code>2i</code> 和 <code>2i+1</code> 个元素的最小值。</li><li>如果当前索引 <code>i</code> 是奇数，则取当前数组中第 <code>2i</code> 和 <code>2i+1</code> 个元素的最大值。</li></ul></li><li><p>将 <code>n</code> 缩减为原来的一半。</p></li><li><p>当<code>n == 1</code> 时，返回其唯一元素。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每一轮的操作遍历一半的数组，直到数组长度减为 1，总操作次数为 <code>n+n/2+n/4+…+1</code>，这是一个等比数列，和为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了原地修改数组，未引入额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minMaxGame</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		n <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 缩减数组长度</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"390",-1),N=n("td",{style:{"text-align":"left"}},"消除游戏",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},L=n("code",null,"递归",-1),O=n("code",null,"数学",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/elimination-game",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/elimination-game",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"2221",-1),B=n("td",{style:{"text-align":"left"}},"数组的三角和",-1),F=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},T=n("code",null,"数组",-1),z=n("code",null,"数学",-1),S=n("code",null,"组合数学",-1),A=n("code",null,"1+",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/find-triangular-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-triangular-sum-of-an-array",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/simulation.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",_,[b,e(o)]),s(),n("a",f,[v,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,N,q,n("td",E,[e(a,{to:"/tag/recursion.html"},{default:t(()=>[L]),_:1}),s(),e(a,{to:"/tag/math.html"},{default:t(()=>[O]),_:1})]),C,n("td",I,[n("a",R,[s("🀄️"),e(o)]),s(),n("a",V,[s("🔗"),e(o)])])]),n("tr",null,[j,B,F,n("td",M,[e(a,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/tag/math.html"},{default:t(()=>[z]),_:1}),s(),e(a,{to:"/tag/combinatorics.html"},{default:t(()=>[S]),_:1}),s(),A]),G,n("td",Y,[n("a",D,[s("🀄️"),e(o)]),s(),n("a",H,[s("🔗"),e(o)])])])])])])}const U=p(m,[["render",J],["__file","2293.html.vue"]]);export{U as default};
