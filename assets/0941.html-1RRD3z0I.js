import{_ as c,r as l,o as p,c as i,a as n,b as a,d as t,w as s,f as d,e as u}from"./app-totCBmv-.js";const k={},h=n("h1",{id:"_941-有效的山脉数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_941-有效的山脉数组","aria-hidden":"true"},"#"),a(" 941. 有效的山脉数组")],-1),m=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/valid-mountain-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/valid-mountain-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, return <em><code>true</code> if and only if it is a valid mountain array</em>.</p><p>Recall that arr is a mountain array if and only if:</p><ul><li><code>arr.length &gt;= 3</code></li><li>There exists some <code>i</code> with <code>0 &lt; i &lt; arr.length - 1</code> such that: <ul><li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i] </code></li><li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><figure><img src="https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [2,1]</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [3,5,5]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [0,3,2,1]</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>arr</code>，如果它是有效的山脉数组就返回 <code>true</code>，否则返回 <code>false</code>。</p><p>让我们回顾一下，如果 <code>arr</code> 满足下述条件，那么它是一个山脉数组：</p><ul><li><code>arr.length &gt;= 3</code></li><li>在 <code>0 &lt; i &lt; arr.length - 1</code> 条件下，存在 <code>i</code> 使得： <ul><li><code>arr[0] &lt; arr[1] &lt; ... arr[i-1] &lt; arr[i] </code></li><li><code>arr[i] &gt; arr[i+1] &gt; ... &gt; arr[arr.length - 1]</code></li></ul></li></ul><figure><img src="https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,1]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [3,5,5]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,3,2,1]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^4</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过一次线性遍历完成检查：</p><ol><li><strong>找到递增部分</strong>：从左到右遍历数组，找到峰顶 <code>i</code>。</li><li><strong>找到递减部分</strong>：从峰顶 <code>i</code>继续遍历，找到递减结束的位置。</li><li><strong>检查有效性</strong>： <ul><li>峰顶 <code>i</code> 不能是数组的第一个或最后一个元素。</li><li>最后递减部分的终点必须是数组末尾。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，需要遍历数组一次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，仅使用常数级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validMountainArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到上升的部分</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果峰顶是第一个或最后一个元素，则不是山脉数组</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">===</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到下降的部分</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果遍历完整个数组，说明是山脉数组</span>
	<span class="token keyword">return</span> i <span class="token operator">===</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"1671",-1),w=n("td",{style:{"text-align":"left"}},"得到山形数组的最少删除次数",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"贪心",-1),C=n("code",null,"数组",-1),L=n("code",null,"二分查找",-1),N=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2865",-1),z=n("td",{style:{"text-align":"left"}},"美丽塔 I",-1),T=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"栈",-1),M=n("code",null,"数组",-1),S=n("code",null,"单调栈",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/beautiful-towers-i",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/beautiful-towers-i",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const r=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[a("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[a("Easy")]),_:1}),a("  🔖  "),t(e,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),a("  🔗 "),n("a",g,[_,t(o)]),a(),n("a",b,[f,t(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",q,[t(e,{to:"/problem/1671.html"},{default:s(()=>[a("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/greedy.html"},{default:s(()=>[I]),_:1}),a(),t(e,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),a(),t(e,{to:"/tag/binary-search.html"},{default:s(()=>[L]),_:1}),a(),N]),O,n("td",V,[n("a",j,[a("🀄️"),t(o)]),a(),n("a",B,[a("🔗"),t(o)])])]),n("tr",null,[R,z,T,n("td",A,[t(e,{to:"/tag/stack.html"},{default:s(()=>[G]),_:1}),a(),t(e,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),a(),t(e,{to:"/tag/monotonic-stack.html"},{default:s(()=>[S]),_:1})]),D,n("td",F,[n("a",H,[a("🀄️"),t(o)]),a(),n("a",J,[a("🔗"),t(o)])])])])])])}const W=c(k,[["render",K],["__file","0941.html.vue"]]);export{W as default};
