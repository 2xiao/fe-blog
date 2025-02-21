import{_ as p,r as c,o as i,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-9CeBk-uV.js";const m={},k=n("h1",{id:"_896-单调数列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_896-单调数列","aria-hidden":"true"},"#"),s(" 896. 单调数列")],-1),h=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/monotonic-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/monotonic-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>An array is <strong>monotonic</strong> if it is either monotone increasing or monotone decreasing.</p><p>An array <code>nums</code> is monotone increasing if for all <code>i &lt;= j</code>, <code>nums[i] &lt;= nums[j]</code>. An array <code>nums</code> is monotone decreasing if for all <code>i &lt;= j</code>, <code>nums[i] &gt;= nums[j]</code>.</p><p>Given an integer array <code>nums</code>, return <code>true</code> <em>if the given array is monotonic, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2,3]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [6,5,4,4]</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,3,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果数组是单调递增或单调递减的，那么它是 <strong>单调</strong> <em>的</em> 。</p><p>如果对于所有 <code>i &lt;= j</code>，<code>nums[i] &lt;= nums[j]</code>，那么数组 <code>nums</code> 是单调递增的。 如果对于所有 <code>i &lt;= j</code>，<code>nums[i]&gt; = nums[j]</code>，那么数组 <code>nums</code> 是单调递减的。</p><p>当给定的数组 <code>nums</code> 是单调数组时返回 <code>true</code>，否则返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,2,3]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [6,5,4,4]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,2]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>标记递增和递减</strong>：</p><ul><li>定义两个布尔变量 <code>isIncreasing</code> 和 <code>isDecreasing</code>。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>遍历数组中的每一对相邻元素，分别检查它们是否满足单调递增或单调递减。</li><li>如果数组中的有一对相邻元素满足 <code>nums[i] &gt; nums[i+1]</code>，则数组不满足递增条件，将 <code>isIncreasing</code> 设置为 <code>false</code>。</li><li>如果数组中的有一对相邻元素满足 <code>nums[i] &lt; nums[i+1]</code>，则数组不满足递减条件，将 <code>isDecreasing</code> 设置为 <code>false</code>。</li><li>如果 <code>isDecreasing</code> 和 <code>isIncreasing</code> 都为 <code>false</code>，则提前终止循环。</li></ul></li><li><p><strong>结果判断</strong>：</p><ul><li>如果数组既不是递增的，也不是递减的（两个标志都为 <code>false</code>），直接返回 <code>false</code>。</li><li>否则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需一次遍历。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量空间（两个布尔变量）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isMonotonic</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> isIncreasing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> isDecreasing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			isDecreasing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 违反递减性</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			isIncreasing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 违反递增性</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isIncreasing <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isDecreasing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> isIncreasing <span class="token operator">||</span> isDecreasing<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2210",-1),w=n("td",{style:{"text-align":"left"}},"统计数组中峰和谷的数量",-1),I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},j=n("code",null,"数组",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),E={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},"3250",-1),O=n("td",{style:{"text-align":"left"}},"单调数组对的数目 I",-1),V=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},B=n("code",null,"数组",-1),R=n("code",null,"数学",-1),G=n("code",null,"动态规划",-1),M=n("code",null,"2+",-1),S=n("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-the-count-of-monotonic-pairs-i",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[_,e(o)]),s(),n("a",b,[f,e(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",I,[e(a,{to:"/problem/2210.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:t(()=>[j]),_:1})]),D,n("td",E,[n("a",C,[s("🀄️"),e(o)]),s(),n("a",L,[s("🔗"),e(o)])])]),n("tr",null,[N,O,V,n("td",A,[e(a,{to:"/tag/array.html"},{default:t(()=>[B]),_:1}),s(),e(a,{to:"/tag/math.html"},{default:t(()=>[R]),_:1}),s(),e(a,{to:"/tag/dynamic-programming.html"},{default:t(()=>[G]),_:1}),s(),M]),S,n("td",T,[n("a",z,[s("🀄️"),e(o)]),s(),n("a",F,[s("🔗"),e(o)])])])])])])}const Q=p(m,[["render",H],["__file","0896.html.vue"]]);export{Q as default};
