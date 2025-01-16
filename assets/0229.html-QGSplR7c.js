import{_ as p,r as c,o as i,c as d,a as n,b as s,d as t,w as a,f as r,e as u}from"./app-KDJRKGep.js";const k={},m=n("h1",{id:"_229-多数元素-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_229-多数元素-ii","aria-hidden":"true"},"#"),s(" 229. 多数元素 II")],-1),h=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),b=n("code",null,"计数",-1),g=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/majority-element-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/majority-element-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array of size <code>n</code>, find all elements that appear more than <code>⌊n/3⌋</code> times.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,3]</p><p>Output: [3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: [1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2]</p><p>Output: [1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5 * 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><p><strong>Follow up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个大小为 <em>n</em> 的整数数组，找出其中所有出现超过 <code>⌊ n/3 ⌋</code> 次的元素。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,2,3]</p><p><strong>输出：</strong>[3]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1]</p><p><strong>输出：</strong>[1]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2]</p><p><strong>输出：</strong>[1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5 * 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><p><strong>进阶：</strong> 尝试设计时间复杂度为 <code>O(n)</code>、空间复杂度为 <code>O(1)</code> 的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于出现次数大于 <code>n/3</code> 次的元素最多只有两个，因此可以利用摩尔投票法将问题简化为寻找最多两个候选人。</p><ul><li><strong>第一轮</strong>：找到可能的候选元素。 <strong>核心逻辑</strong>：对于出现次数超过 <code>n/3</code> 的元素，其在数组中的频次一定比其他元素更高。当遇到不属于现有候选人的数字时，减少候选人的计数，最终剩下的候选人是可能超过 <code>n/3</code> 次的元素。</li></ul><ol><li>使用两个变量 <code>candidate1</code> 和 <code>candidate2</code> 分别记录两个可能的候选人。</li><li>使用两个计数器 <code>count1</code> 和 <code>count2</code> 分别记录这两个候选人的票数。</li><li>遍历数组： <ul><li>如果当前数字等于 <code>candidate1</code>，增加 <code>count1</code>。</li><li>如果当前数字等于 <code>candidate2</code>，增加 <code>count2</code>。</li><li>如果 <code>count1</code> 为 0，设置当前数字为 <code>candidate1</code>，并将 <code>count1</code> 置为 1。</li><li>如果 <code>count2</code> 为 0，设置当前数字为 <code>candidate2</code>，并将 <code>count2</code> 置为 1。</li><li>如果当前数字与 <code>candidate1</code> 和 <code>candidate2</code> 都不相同，则 <code>count1</code> 和 <code>count2</code> 同时减 1。</li></ul></li></ol><ul><li><strong>第二轮</strong>：验证候选元素是否满足条件。</li></ul><ol><li><p>初始化两个计数器 <code>count1</code> 和 <code>count2</code> 为 0。</p></li><li><p>遍历数组：</p><ul><li>如果当前数字等于 <code>candidate1</code>，增加 <code>count1</code>。</li><li>如果当前数字等于 <code>candidate2</code>，增加 <code>count2</code>。</li></ul></li><li><p>检查 <code>count1</code> 和 <code>count2</code> 是否超过 <code>n/3</code>：</p><ul><li>如果 <code>count1 &gt; n/3</code>，将 <code>candidate1</code> 加入结果。</li><li>如果 <code>count2 &gt; n/3</code>，将 <code>candidate2</code> 加入结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，两次遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">majorityElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> candidate1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
		candidate2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		count2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 第一遍：摩尔投票法，找出两个候选者</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>candidate1 <span class="token operator">===</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count1<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>candidate2 <span class="token operator">===</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count2<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count1 <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			candidate1 <span class="token operator">=</span> num<span class="token punctuation">;</span>
			count1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count2 <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			candidate2 <span class="token operator">=</span> num<span class="token punctuation">;</span>
			count2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count1<span class="token operator">--</span><span class="token punctuation">;</span>
			count2<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 第二遍：验证候选者</span>
	count1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	count2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> candidate1<span class="token punctuation">)</span> count1<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> candidate2<span class="token punctuation">)</span> count2<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>count1 <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>candidate1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>count2 <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>candidate2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"169",-1),O=n("td",{style:{"text-align":"left"}},"多数元素",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"分治",-1),V=n("code",null,"2+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/majority-element",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/majority-element",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"1150",-1),G=n("td",{style:{"text-align":"left"}},"检查一个数是否在数组中占绝大多数 🔒",-1),S=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},A=n("code",null,"数组",-1),D=n("code",null,"二分查找",-1),H=n("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/check-if-a-number-is-majority-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2404",-1),U=n("td",{style:{"text-align":"left"}},"出现最频繁的偶数元素",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),Z=n("code",null,"哈希表",-1),$=n("code",null,"计数",-1),nn=n("td",{style:{"text-align":"center"}},"🟢",-1),sn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/most-frequent-even-element",target:"_blank",rel:"noopener noreferrer"};function en(on,cn){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[f,t(o)]),s(),n("a",y,[x,t(o)])]),w,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[j,O,n("td",E,[t(e,{to:"/problem/0169.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[N]),_:1}),s(),V]),B,n("td",M,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",z,[s("🔗"),t(o)])])]),n("tr",null,[F,G,S,n("td",T,[t(e,{to:"/tag/array.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[D]),_:1})]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])]),n("tr",null,[Q,U,W,n("td",X,[t(e,{to:"/tag/array.html"},{default:a(()=>[Y]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[Z]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[$]),_:1})]),nn,n("td",sn,[n("a",tn,[s("🀄️"),t(o)]),s(),n("a",an,[s("🔗"),t(o)])])])])])])}const pn=p(k,[["render",en],["__file","0229.html.vue"]]);export{pn as default};
