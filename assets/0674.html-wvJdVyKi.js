import{_ as i,r as l,o as r,c as d,a as n,b as e,d as t,w as s,f as p,e as u}from"./app-KDJRKGep.js";const h={},m=n("h1",{id:"_674-最长连续递增序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_674-最长连续递增序列","aria-hidden":"true"},"#"),e(" 674. 最长连续递增序列")],-1),_=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/longest-continuous-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest<strong>continuous increasing subsequence</strong> (i.e. subarray)</em>. The subsequence must be <strong>strictly</strong> increasing.</p><p>A <strong>continuous increasing subsequence</strong> is defined by two indices <code>l</code> and <code>r</code> (<code>l &lt; r</code>) such that it is <code>[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]</code> and for each <code>l &lt;= i &lt; r</code>, <code>nums[i] &lt; nums[i + 1]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,5,4,7]</p><p>Output: 3</p><p>Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.</p><p>Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element</p><ol start="4"><li></li></ol></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,2]</p><p>Output: 1</p><p>Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly</p><p>increasing.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个未经排序的整数数组，找到最长且<strong>连续递增的子序列</strong> ，并返回该序列的长度。</p><p><strong>连续递增的子序列</strong> 可以由两个下标 <code>l</code> 和 <code>r</code>（<code>l &lt; r</code>）确定，如果对于每个 <code>l &lt;= i &lt; r</code>，都有 <code>nums[i] &lt; nums[i + 1]</code> ，那么子序列 <code>[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]</code> 就是连续递增子序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3,5,4,7]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最长连续递增序列是 [1,3,5], 长度为 3。</p><p>尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,2,2,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 最长连续递增序列是 [2], 长度为 1。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义变量</strong>：</p><ul><li><code>count</code>：用于记录当前递增子序列的长度。</li><li><code>maxLength</code>：记录最长递增子序列的长度。</li><li><code>prev</code>：保存上一个元素的值，用于与当前元素进行比较。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>通过遍历数组 <code>nums</code>，对每个元素与前一个元素进行比较。</li><li>如果当前元素大于前一个元素（即满足递增条件），则继续增加当前子序列的长度 <code>count</code>。</li><li>如果当前元素不大于前一个元素（即递增序列断裂），则更新 <code>maxLength</code> 为 <code>count</code> 的最大值，并重置 <code>count</code> 为 <code>1</code>，表示从当前元素开始新的递增子序列。</li><li>更新 <code>prev</code> 为当前元素。</li></ul></li><li><p><strong>处理结束后的最大值</strong>：</p><ul><li>遍历完成后，由于最后一个递增序列可能是最长的，因此需要在最后返回 <code>maxLength</code> 和 <code>count</code> 的较大值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，只需要遍历一次数组，因此时间复杂度是线性的。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储 <code>count</code>、<code>maxLength</code> 和 <code>prev</code>，所以空间复杂度是常数级的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLengthOfLCIS</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		prev <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span> <span class="token comment">// 初始化 prev 为负无穷，确保第一个元素可以进入递增序列</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前元素大于前一个元素，递增子序列长度加 1</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前元素不大于前一个元素，更新最长递增子序列长度</span>
			maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
			count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置 count 为 1，表示从当前元素开始新的递增子序列</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 更新 prev 为当前元素</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回最长递增子序列的长度</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"673",-1),q=n("td",{style:{"text-align":"left"}},"最长递增子序列的个数",-1),w=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},E=n("code",null,"树状数组",-1),I=n("code",null,"线段树",-1),C=n("code",null,"数组",-1),N=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"727",-1),M=n("td",{style:{"text-align":"left"}},"最小窗口子序列 🔒",-1),R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},A=n("code",null,"字符串",-1),G=n("code",null,"动态规划",-1),z=n("code",null,"滑动窗口",-1),D=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/minimum-window-subsequence",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/minimum-window-subsequence",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"1446",-1),P=n("td",{style:{"text-align":"left"}},"连续字符",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"字符串",-1),X=n("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"2407",-1),en=n("td",{style:{"text-align":"left"}},"最长递增子序列 II",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},on=n("code",null,"树状数组",-1),an=n("code",null,"线段树",-1),ln=n("code",null,"队列",-1),cn=n("code",null,"4+",-1),rn=n("td",{style:{"text-align":"center"}},"🔴",-1),dn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/longest-increasing-subsequence-ii",target:"_blank",rel:"noopener noreferrer"};function hn(mn,_n){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),d("div",null,[m,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",g,[k,t(a)]),e(),n("a",b,[f,t(a)])]),v,p(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,q,w,n("td",L,[t(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[E]),_:1}),e(),t(o,{to:"/tag/segment-tree.html"},{default:s(()=>[I]),_:1}),e(),t(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),N]),O,n("td",V,[n("a",T,[e("🀄️"),t(a)]),e(),n("a",j,[e("🔗"),t(a)])])]),n("tr",null,[B,M,R,n("td",S,[t(o,{to:"/tag/string.html"},{default:s(()=>[A]),_:1}),e(),t(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[G]),_:1}),e(),t(o,{to:"/tag/sliding-window.html"},{default:s(()=>[z]),_:1})]),D,n("td",F,[n("a",H,[e("🀄️"),t(a)]),e(),n("a",J,[e("🔗"),t(a)])])]),n("tr",null,[K,P,n("td",Q,[t(o,{to:"/problem/1446.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",U,[t(o,{to:"/tag/string.html"},{default:s(()=>[W]),_:1})]),X,n("td",Y,[n("a",Z,[e("🀄️"),t(a)]),e(),n("a",$,[e("🔗"),t(a)])])]),n("tr",null,[nn,en,tn,n("td",sn,[t(o,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[on]),_:1}),e(),t(o,{to:"/tag/segment-tree.html"},{default:s(()=>[an]),_:1}),e(),t(o,{to:"/tag/queue.html"},{default:s(()=>[ln]),_:1}),e(),cn]),rn,n("td",dn,[n("a",pn,[e("🀄️"),t(a)]),e(),n("a",un,[e("🔗"),t(a)])])])])])])}const kn=i(h,[["render",hn],["__file","0674.html.vue"]]);export{kn as default};
