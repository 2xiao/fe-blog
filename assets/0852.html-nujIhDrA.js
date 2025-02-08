import{_ as p,r,o as c,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_852-山脉数组的峰顶索引",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_852-山脉数组的峰顶索引","aria-hidden":"true"},"#"),t(" 852. 山脉数组的峰顶索引")],-1),m=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <strong>mountain</strong> array <code>arr</code> of length <code>n</code> where the values increase to a <strong>peak element</strong> and then decrease.</p><p>Return the index of the peak element.</p><p>Your task is to solve it in <code>O(log(n))</code> time complexity.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> arr = [0,1,0]</p><p><strong>Output:</strong> 1</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> arr = [0,2,1,0]</p><p><strong>Output:</strong> 1</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> arr = [0,10,5,2]</p><p><strong>Output:</strong> 1</p><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 10^5</code></li><li><code>0 &lt;= arr[i] &lt;= 10^6</code></li><li><code>arr</code> is <strong>guaranteed</strong> to be a mountain array.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为 <code>n</code> 的整数 <strong>山脉</strong> 数组 <code>arr</code> ，其中的值递增到一个 <strong>峰值元素</strong> 然后递减。</p><p>返回峰值元素的下标。</p><p>你必须设计并实现时间复杂度为 <code>O(log(n))</code> 的解决方案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,1,0]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,2,1,0]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,10,5,2]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= arr.length &lt;= 10^5</code></li><li><code>0 &lt;= arr[i] &lt;= 10^6</code></li><li>题目数据 <strong>保证</strong> <code>arr</code> 是一个山脉数组</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用二分查找</strong>：可以通过二分查找来高效找到这个峰值：</p><ul><li>设置 <code>left</code> 为数组的起始索引，<code>right</code> 为数组的结束索引。</li><li>在每次迭代中计算中间索引 <code>mid</code>。</li></ul></li><li><p><strong>判断中间元素</strong>：</p><ul><li>如果 <code>arr[mid]</code> 是峰值，则直接返回 <code>mid</code>。</li><li>如果 <code>arr[mid]</code> 大于其左侧元素而小于其右侧元素，说明峰值在右侧，因此将 <code>left</code> 移动到 <code>mid</code>。</li><li>如果 <code>arr[mid]</code> 小于其左侧元素，说明峰值在左侧，因此将 <code>right</code> 移动到 <code>mid</code>。</li></ul></li><li><p><strong>循环直到找到峰值</strong>：继续迭代，直到找到峰值索引。</p></li><li><p><strong>返回结果</strong>：当 <code>left</code> 与 <code>right</code> 重合时，<code>left</code> 就是峰值的索引。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是数组的长度，每次都将搜索范围缩小一半，使用了二分查找的策略。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数级的空间来存储变量，而不随输入规模而变化。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">peakIndexInMountainArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// arr[mid] 就是峰值</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 峰值在右侧</span>
			left <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 峰值在左侧</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"162",-1),I=n("td",{style:{"text-align":"left"}},"寻找峰值",-1),O={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1095",-1),R=n("td",{style:{"text-align":"left"}},"山脉数组中查找目标值",-1),M=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},A=n("code",null,"数组",-1),S=n("code",null,"二分查找",-1),T=n("code",null,"交互",-1),z=n("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/find-in-mountain-array",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/find-in-mountain-array",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"1671",-1),J=n("td",{style:{"text-align":"left"}},"得到山形数组的最少删除次数",-1),K={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=n("code",null,"贪心",-1),U=n("code",null,"数组",-1),W=n("code",null,"二分查找",-1),X=n("code",null,"1+",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"};function en(sn,an){const l=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon");return c(),i("div",null,[h,n("p",null,[t("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",_,[f,e(o)]),t(),n("a",b,[v,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,I,n("td",O,[e(a,{to:"/problem/0162.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:s(()=>[E]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[C]),_:1})]),L,n("td",N,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",j,[t("🔗"),e(o)])])]),n("tr",null,[B,R,M,n("td",Y,[e(a,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/interactive.html"},{default:s(()=>[T]),_:1})]),z,n("td",D,[n("a",F,[t("🀄️"),e(o)]),t(),n("a",G,[t("🔗"),e(o)])])]),n("tr",null,[H,J,n("td",K,[e(a,{to:"/problem/1671.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",P,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[Q]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[W]),_:1}),t(),X]),Z,n("td",$,[n("a",nn,[t("🀄️"),e(o)]),t(),n("a",tn,[t("🔗"),e(o)])])])])])])}const rn=p(k,[["render",en],["__file","0852.html.vue"]]);export{rn as default};
