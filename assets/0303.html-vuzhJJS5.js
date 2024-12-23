import{_ as r,r as l,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-Kkp_66uf.js";const m={},h=n("h1",{id:"_303-区域和检索-数组不可变",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_303-区域和检索-数组不可变","aria-hidden":"true"},"#"),e(" 303. 区域和检索 - 数组不可变")],-1),_=n("code",null,"设计",-1),k=n("code",null,"数组",-1),g=n("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/range-sum-query-immutable",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/range-sum-query-immutable",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, handle multiple queries of the following type:</p><ol><li>Calculate the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> where <code>left &lt;= right</code>.</li></ol><p>Implement the <code>NumArray</code> class:</p><ul><li><code>NumArray(int[] nums)</code> Initializes the object with the integer array <code>nums</code>.</li><li><code>int sumRange(int left, int right)</code> Returns the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> (i.e. <code>nums[left] + nums[left + 1] + ... + nums[right]</code>).</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;NumArray&quot;, &quot;sumRange&quot;, &quot;sumRange&quot;, &quot;sumRange&quot;]</p><p>[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]</p><p><strong>Output</strong></p><p>[null, 1, -1, -3]</p><p><strong>Explanation</strong></p><p>NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);</p><p>numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1</p><p>numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1</p><p>numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li><li><code>0 &lt;= left &lt;= right &lt; nums.length</code></li><li>At most <code>104</code> calls will be made to <code>sumRange</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>nums</code>，请你完成查询：</p><p>返回数组 <code>nums</code> 中索引 <code>left</code> 和 <code>right</code> （包含 <code>left</code> 和 <code>right</code>）之间的 <code>nums</code> 元素的 <strong>和</strong> ，其中 <code>left &lt;= right</code></p><p>实现 <code>NumArray</code> 类：</p><ul><li><code>NumArray(int[] nums)</code> 使用数组 <code>nums</code> 初始化对象</li><li><code>int sumRange(int i, int j)</code> 返回数组 <code>nums</code> 中索引 <code>left</code> 和 <code>right</code> 之间的元素的 总和 ，包含 <code>left</code> 和 <code>right</code> 两点（也就是 <code>nums[left] + nums[left + 1] + ... + nums[right]</code> ）</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>标准的前缀和问题，核心思路是用一个新的数组 <code>preSum</code> 记录 <code>nums</code> 的累加和，这样，<code>sumRange</code> 函数仅仅需要做一次减法运算，避免了每次进行 <code>for</code> 循环调用，最坏时间复杂度为常数 <code>O(1)</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>sumRange</code> 函数的时间复杂度为 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 为 <code>nums</code> 数组的长度，使用了一个长度为 <code>n</code> 的数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">NumArray</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>preSum <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>preSum<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>preSum<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>preSum<span class="token punctuation">[</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>preSum<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"304",-1),R=n("td",{style:{"text-align":"left"}},"二维区域和检索 - 矩阵不可变",-1),A=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},S=n("code",null,"设计",-1),C=n("code",null,"数组",-1),E=n("code",null,"矩阵",-1),j=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/range-sum-query-2d-immutable",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/range-sum-query-2d-immutable",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"307",-1),B=n("td",{style:{"text-align":"left"}},"区域和检索 - 数组可修改",-1),G={style:{"text-align":"center"}},T={style:{"text-align":"left"}},D=n("code",null,"设计",-1),F=n("code",null,"树状数组",-1),H=n("code",null,"线段树",-1),J=n("code",null,"1+",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/range-sum-query-mutable",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"325",-1),W=n("td",{style:{"text-align":"left"}},"和等于 k 的最长子数组长度 🔒",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"哈希表",-1),nn=n("code",null,"前缀和",-1),en=n("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"};function on(ln,cn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/design.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",f,[b,t(o)]),e(),n("a",y,[v,t(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,R,A,n("td",N,[t(a,{to:"/tag/design.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/matrix.html"},{default:s(()=>[E]),_:1}),e(),j]),I,n("td",L,[n("a",V,[e("🀄️"),t(o)]),e(),n("a",O,[e("🔗"),t(o)])])]),n("tr",null,[z,B,n("td",G,[t(a,{to:"/problem/0307.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",T,[t(a,{to:"/tag/design.html"},{default:s(()=>[D]),_:1}),e(),t(a,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[F]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[H]),_:1}),e(),J]),K,n("td",M,[n("a",P,[e("🀄️"),t(o)]),e(),n("a",Q,[e("🔗"),t(o)])])]),n("tr",null,[U,W,X,n("td",Y,[t(a,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[$]),_:1}),e(),t(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[nn]),_:1})]),en,n("td",tn,[n("a",sn,[e("🀄️"),t(o)]),e(),n("a",an,[e("🔗"),t(o)])])])])])])}const pn=r(m,[["render",on],["__file","0303.html.vue"]]);export{pn as default};
