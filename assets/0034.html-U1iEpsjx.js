import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_34-在排序数组中查找元素的第一个和最后一个位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_34-在排序数组中查找元素的第一个和最后一个位置","aria-hidden":"true"},"#"),s(" 34. 在排序数组中查找元素的第一个和最后一个位置")],-1),h=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.</p><p>If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [5,7,7,8,8,10], target = 8</p><p>Output: [3,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [5,7,7,8,8,10], target = 6</p><p>Output: [-1,-1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [], target = 0</p><p>Output: [-1,-1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>nums</code> is a non-decreasing array.</li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个按照非递减顺序排列的整数数组 <code>nums</code>，和一个目标值 <code>target</code>。请你找出给定目标值在数组中的开始位置和结束位置。</p><p>如果数组中不存在目标值 <code>target</code>，返回 <code>[-1, -1]</code>。</p><p>你必须设计并实现时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>二分查找</strong>分别寻找第一个出现的位置和最后一个出现的位置。</p><ol><li><p><strong>寻找第一个出现的位置（getFirst）</strong>：</p><ul><li>使用二分查找。</li><li>如果 <code>nums[mid] &gt;= target</code>，则说明第一个目标值可能在 <code>mid</code> 或其左侧，调整 <code>right = mid - 1</code>。</li><li>如果 <code>nums[mid] &lt; target</code>，则调整 <code>left = mid + 1</code>。</li><li>查找结束后，检查 <code>left</code>： <ul><li>如果 <code>left</code> 越界或 <code>nums[left]</code> 不等于 <code>target</code>，返回<code>-1</code>；</li><li>其他情况返回 <code>left</code>。</li></ul></li></ul></li><li><p><strong>寻找最后一个出现的位置（getLast）</strong>：</p><ul><li>同样使用二分查找。</li><li>如果 <code>nums[mid] &gt; target</code>，则说明最后一个目标值可能在 <code>mid</code> 左侧，调整 <code>right = mid - 1</code>。</li><li>如果 <code>nums[mid] &lt;= target</code>，则调整 <code>left = mid + 1</code>。</li><li>查找结束后，检查 <code>right</code>： <ul><li>如果 <code>right</code> 越界或 <code>nums[right]</code> 不等于 <code>target</code>，返回<code>-1</code>；</li><li>其他情况返回 <code>right</code>。</li></ul></li></ul></li><li><p>返回 <code>[getFirst(), getLast()]</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是数组的长度。</p><ul><li>每次调用二分查找的时间复杂度为 <code>O(log n)</code>，因为在每次迭代中搜索范围缩小一半。</li><li>总共调用两次二分查找，时间复杂度为 <code>O(2 * log n) = O(log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，算法仅使用常数空间存储变量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchRange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getFirst</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> left<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getLast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;=</span> nums<span class="token punctuation">.</span>length <span class="token operator">||</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> right<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">getFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"278",-1),O=n("td",{style:{"text-align":"left"}},"第一个错误的版本",-1),L={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"二分查找",-1),I=n("code",null,"交互",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"2055",-1),B=n("td",{style:{"text-align":"left"}},"蜡烛之间的盘子",-1),M=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},G=n("code",null,"数组",-1),S=n("code",null,"字符串",-1),T=n("code",null,"二分查找",-1),Y=n("code",null,"1+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/plates-between-candles",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/plates-between-candles",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2089",-1),K=n("td",{style:{"text-align":"left"}},"找出数组排序后的目标下标",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"二分查找",-1),X=n("code",null,"排序",-1),Z=n("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/find-target-indices-after-sorting-array",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/find-target-indices-after-sorting-array",target:"_blank",rel:"noopener noreferrer"};function tn(an,en){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,t(o)]),s(),n("a",b,[v,t(o)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,O,n("td",L,[t(e,{to:"/problem/0278.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",q,[t(e,{to:"/tag/binary-search.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/interactive.html"},{default:a(()=>[I]),_:1})]),C,n("td",N,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",F,[s("🔗"),t(o)])])]),n("tr",null,[j,B,M,n("td",R,[t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[T]),_:1}),s(),Y]),z,n("td",A,[n("a",D,[s("🀄️"),t(o)]),s(),n("a",H,[s("🔗"),t(o)])])]),n("tr",null,[J,K,P,n("td",Q,[t(e,{to:"/tag/array.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[X]),_:1})]),Z,n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])])])])])}const pn=l(k,[["render",tn],["__file","0034.html.vue"]]);export{pn as default};
