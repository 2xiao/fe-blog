import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-9CeBk-uV.js";const k={},h=n("h1",{id:"_2261-含最多-k-个可整除元素的子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2261-含最多-k-个可整除元素的子数组","aria-hidden":"true"},"#"),s(" 2261. 含最多 K 个可整除元素的子数组")],-1),m=n("code",null,"字典树",-1),_=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),g=n("code",null,"枚举",-1),f=n("code",null,"哈希函数",-1),v=n("code",null,"滚动哈希",-1),y={href:"https://leetcode.cn/problems/k-divisible-elements-subarrays",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/k-divisible-elements-subarrays",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),E=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and two integers <code>k</code> and <code>p</code>, return <em>the number of <strong>distinct subarrays,</strong> which have <strong>at most</strong></em> <code>k</code> <em>elements</em> that are <em>divisible by</em> <code>p</code>.</p><p>Two arrays <code>nums1</code> and <code>nums2</code> are said to be <strong>distinct</strong> if:</p><ul><li>They are of <strong>different</strong> lengths, or</li><li>There exists <strong>at least</strong> one index <code>i</code> where <code>nums1[i] != nums2[i]</code>.</li></ul><p>A <strong>subarray</strong> is defined as a <strong>non-empty</strong> contiguous sequence of elements in an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [ _ <strong>2</strong>_ ,3,3, _ <strong>2</strong>_ , _ <strong>2</strong>_ ], k = 2, p = 2</p><p>Output: 11</p><p>Explanation:</p><p>The elements at indices 0, 3, and 4 are divisible by p = 2.</p><p>The 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:</p><p>[2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].</p><p>Note that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.</p><p>The subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4], k = 4, p = 1</p><p>Output: 10</p><p>Explanation:</p><p>All element of nums are divisible by p = 1.</p><p>Also, every subarray of nums will have at most 4 elements that are divisible by 1.</p><p>Since all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i], p &lt;= 200</code></li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><p><strong>Follow up:</strong></p><p>Can you solve this problem in O(n2) time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和两个整数 <code>k</code> 和 <code>p</code> ，找出并返回满足要求的不同的子数组数，要求子数组中最多 <code>k</code> 个可被 <code>p</code> 整除的元素。</p><p>如果满足下述条件之一，则认为数组 <code>nums1</code> 和 <code>nums2</code> 是 <strong>不同</strong> 数组：</p><ul><li>两数组长度 <strong>不同</strong> ，或者</li><li>存在 <strong>至少</strong> 一个下标 <code>i</code> 满足 <code>nums1[i] != nums2[i]</code> 。</li></ul><p><strong>子数组</strong> 定义为：数组中的连续元素组成的一个 <strong>非空</strong> 序列。</p><p><strong>进阶：</strong></p><p>你可以设计并实现时间复杂度为 <code>O(n^2)</code> 的算法解决此问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>可以用两次循环遍历数组，在循环中记录满足条件的子数组数；</li><li>用一个哈希 <code>Set</code> 来记录满足条件的不同子数组，一个哈希 <code>Map</code> 记录 <code>nums</code> 中的每个数是否能被 <code>p</code> 整除；</li><li>用变量 <code>count</code> 记录当前子数组中被 p 整除的元素个数，变量 <code>temp</code> 记录当前子数组；</li><li>在循环中记录满足条件的子数组数，然后返回即可；</li><li>注意 <code>Set</code> 中的数据是用 <code>,</code> 连接的字符串形式，否则会有 bug；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countDistinct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 记录满足条件的不同子数组</span>
		map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录 nums 中的每个数是否能被 p 整除</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 记录当前子数组中被 p 整除的元素个数</span>
			temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前子数组</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%</span> p <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				count<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"992",-1),N=n("td",{style:{"text-align":"left"}},"K 个不同整数的子数组",-1),q=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},S=n("code",null,"数组",-1),V=n("code",null,"哈希表",-1),I=n("code",null,"计数",-1),O=n("code",null,"1+",-1),A=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/subarrays-with-k-different-integers",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"1248",-1),z=n("td",{style:{"text-align":"left"}},"统计「优美子数组」",-1),D=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=n("code",null,"数组",-1),H=n("code",null,"哈希表",-1),J=n("code",null,"数学",-1),P=n("code",null,"2+",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/count-number-of-nice-subarrays",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/count-number-of-nice-subarrays",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"2334",-1),Z=n("td",{style:{"text-align":"left"}},"元素值大于变化阈值的子数组",-1),$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},sn=n("code",null,"栈",-1),tn=n("code",null,"并查集",-1),an=n("code",null,"数组",-1),en=n("code",null,"1+",-1),on=n("td",{style:{"text-align":"center"}},"🔴",-1),pn={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/subarray-with-elements-greater-than-varying-threshold",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold",target:"_blank",rel:"noopener noreferrer"};function rn(un,dn){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/trie.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/enumeration.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/hash-function.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/rolling-hash.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",y,[x,t(o)]),s(),n("a",w,[j,t(o)])]),E,u(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[C,N,q,n("td",L,[t(e,{to:"/tag/array.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[I]),_:1}),s(),O]),A,n("td",B,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])]),n("tr",null,[R,z,D,n("td",F,[t(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[J]),_:1}),s(),P]),Q,n("td",U,[n("a",W,[s("🀄️"),t(o)]),s(),n("a",X,[s("🔗"),t(o)])])]),n("tr",null,[Y,Z,$,n("td",nn,[t(e,{to:"/tag/stack.html"},{default:a(()=>[sn]),_:1}),s(),t(e,{to:"/tag/union-find.html"},{default:a(()=>[tn]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[an]),_:1}),s(),en]),on,n("td",pn,[n("a",cn,[s("🀄️"),t(o)]),s(),n("a",ln,[s("🔗"),t(o)])])])])])])}const hn=l(k,[["render",rn],["__file","2261.html.vue"]]);export{hn as default};
