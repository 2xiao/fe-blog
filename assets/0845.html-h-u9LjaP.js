import{_ as r,r as l,o as c,c as i,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-KDJRKGep.js";const k={},h=n("h1",{id:"_845-数组中的最长山脉",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_845-数组中的最长山脉","aria-hidden":"true"},"#"),t(" 845. 数组中的最长山脉")],-1),m=n("code",null,"数组",-1),g=n("code",null,"双指针",-1),_=n("code",null,"动态规划",-1),b=n("code",null,"枚举",-1),v={href:"https://leetcode.cn/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You may recall that an array <code>arr</code> is a <strong>mountain array</strong> if and only if:</p><ul><li><code>arr.length &gt;= 3</code></li><li>There exists some index <code>i</code> (<strong>0-indexed</strong>) with <code>0 &lt; i &lt; arr.length - 1</code> such that: <ul><li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li><li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><p>Given an integer array <code>arr</code>, return <em>the length of the longest subarray, which is a mountain</em>. Return <code>0</code> if there is no mountain subarray.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [2,1,4,7,3,2,5]</p><p>Output: 5</p><p>Explanation: The largest mountain is [1,4,7,3,2] which has length 5.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [2,2,2]</p><p>Output: 0</p><p>Explanation: There is no mountain.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong></p><ul><li>Can you solve it using only one pass?</li><li>Can you solve it in <code>O(1)</code> space?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>把符合下列属性的数组 <code>arr</code> 称为 <strong>山脉数组</strong> ：</p><ul><li><code>arr.length &gt;= 3</code></li><li>存在下标 <code>i</code>（<code>0 &lt; i &lt; arr.length - 1</code>），满足 <ul><li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li><li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><p>给出一个整数数组 <code>arr</code>，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 <code>0</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,1,4,7,3,2,5]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 最长的山脉子数组是 [1,4,7,3,2]，长度为 5。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,2,2]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 不存在山脉子数组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><p><strong>进阶：</strong></p><ul><li>你可以仅用一趟扫描解决此问题吗？</li><li>你可以用 <code>O(1)</code> 空间解决此问题吗？</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要在一次遍历中找到数组中最长的山脉子数组，并且使用 O(1) 的空间，可以按照以下步骤进行：</p><ol><li><p><strong>初始化</strong>：设置变量来跟踪当前山脉的长度和找到的最大山脉长度。</p></li><li><p><strong>遍历数组</strong>：使用循环遍历数组，检查每个元素是否是山脉的顶点：</p><ul><li>对于每个元素（除了第一个和最后一个），检查它是否为峰值（大于其相邻的元素）。</li><li>一旦找到峰值，就向左扩展以计数上升部分的长度，再向右扩展以计数下降部分的长度。</li></ul></li><li><p><strong>更新最大长度</strong>：找到有效的山脉后，如果当前山脉的长度大于已知的最大长度，更新最大山脉长度。</p></li><li><p><strong>跳过已处理元素</strong>：在处理完一个山脉后，更新索引 <code>i</code> 为右侧的最后一个元素，以跳过已经计数的部分，优化遍历。</p></li><li><p><strong>返回结果</strong>：遍历结束后，返回找到的最大山脉长度，如果没有找到山脉，则返回 0。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，因为只遍历数组一次，并在遇到山脉时跳过已经处理的元素。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数级的空间来存储变量，而不随输入规模而变化。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestMountain</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> maxMountain <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 arr[i] 是否为峰值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
				right <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token comment">// 计算递增部分的长度</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 计算递减部分的长度</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 更新最长山脉子数组的长度</span>
			maxMountain <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxMountain<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 跳过山脉数组中的元素</span>
			i <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> maxMountain<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"1671",-1),E=n("td",{style:{"text-align":"left"}},"得到山形数组的最少删除次数",-1),M={style:{"text-align":"center"}},O={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),N=n("code",null,"数组",-1),V=n("code",null,"二分查找",-1),I=n("code",null,"1+",-1),T=n("td",{style:{"text-align":"center"}},"🔴",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2100",-1),G=n("td",{style:{"text-align":"left"}},"适合野炊的日子",-1),S=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},z=n("code",null,"数组",-1),A=n("code",null,"动态规划",-1),D=n("code",null,"前缀和",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/find-good-days-to-rob-the-bank",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/find-good-days-to-rob-the-bank",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return c(),i("div",null,[h,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/enumeration.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),n("a",v,[f,s(o)]),t(),n("a",y,[x,s(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[C,E,n("td",M,[s(e,{to:"/problem/1671.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",O,[s(e,{to:"/tag/greedy.html"},{default:a(()=>[L]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[V]),_:1}),t(),I]),T,n("td",j,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[F,G,S,n("td",Y,[s(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[A]),_:1}),t(),s(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[D]),_:1})]),H,n("td",J,[n("a",K,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])])])])])}const Z=r(k,[["render",Q],["__file","0845.html.vue"]]);export{Z as default};
