import{_ as c,r as l,o as p,c as i,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-3dvbhwow.js";const _={},h=t("h1",{id:"_152-乘积最大子数组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_152-乘积最大子数组","aria-hidden":"true"},"#"),n(" 152. 乘积最大子数组")],-1),m=t("code",null,"数组",-1),k=t("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, find a subarray that has the largest product, and return <em>the product</em>.</p><p>The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,-2,4]</p><p>Output: 6</p><p>Explanation: [2,3] has the largest product 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-2,0,-1]</p><p>Output: 0</p><p>Explanation: The result cannot be 2, because [-2,-1] is not a subarray.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个数组，要求找出这个数组中连续元素乘积最大的值。</li><li>分情况讨论: <ul><li>不和别人乘，就是 n 自己</li><li>n 是负数，乘上前面的最小积</li><li>n 是正数，乘上前面的最大积</li></ul></li><li>这一题是 DP 的题，状态转移方程是：最大值是 <code>Max(f(n)) = Max( Max(f(n-1)) * n, Min(f(n-1)) * n, n)</code>；最小值是 <code>Min(f(n)) = Min( Max(f(n-1)) * n, Min(f(n-1)) * n, n)</code>。只要动态维护这两个值，如果最后一个数是负数，最大值就在负数 _ 最小值和自己中产生，如果最后一个数是正数，最大值就在正数 _ 最大值和自己中产生。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProduct</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> temp1<span class="token punctuation">,</span> temp2<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 先计算好，免得下面重复计算两次，结果会出错</span>
		temp1 <span class="token operator">=</span> max <span class="token operator">*</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		temp2 <span class="token operator">=</span> min <span class="token operator">*</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>temp1<span class="token punctuation">,</span> temp2<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>temp1<span class="token punctuation">,</span> temp2<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"53",-1),M=t("td",{style:{"text-align":"left"}},"最大子数组和",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=t("code",null,"数组",-1),L=t("code",null,"分治",-1),N=t("code",null,"动态规划",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"198",-1),O=t("td",{style:{"text-align":"left"}},"打家劫舍",-1),P={style:{"text-align":"center"}},R={style:{"text-align":"left"}},D=t("code",null,"数组",-1),G=t("code",null,"动态规划",-1),K=t("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"238",-1),H=t("td",{style:{"text-align":"left"}},"除自身以外数组的乘积",-1),J={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"前缀和",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"628",-1),nt=t("td",{style:{"text-align":"left"}},"三个数的最大乘积",-1),et={style:{"text-align":"center"}},st={style:{"text-align":"left"}},at=t("code",null,"数组",-1),ot=t("code",null,"数学",-1),lt=t("code",null,"排序",-1),rt=t("td",{style:{"text-align":"center"}},"🟢",-1),ct={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/maximum-product-of-three-numbers",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/maximum-product-of-three-numbers",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},"713",-1),ut=t("td",{style:{"text-align":"left"}},"乘积小于 K 的子数组",-1),_t=t("td",{style:{"text-align":"center"}},null,-1),ht={style:{"text-align":"left"}},mt=t("code",null,"数组",-1),kt=t("code",null,"二分查找",-1),ft=t("code",null,"前缀和",-1),gt=t("code",null,"1+",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"};function wt(Mt,Et){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[h,t("p",null,[n("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),t("a",f,[g,e(o)]),n(),t("a",b,[x,e(o)])]),y,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,M,t("td",E,[e(a,{to:"/problem/0053.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",q,[e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[L]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[N]),_:1})]),V,t("td",I,[t("a",T,[n("🀄️"),e(o)]),n(),t("a",j,[n("🔗"),e(o)])])]),t("tr",null,[B,O,t("td",P,[e(a,{to:"/problem/0198.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",R,[e(a,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[G]),_:1})]),K,t("td",S,[t("a",z,[n("🀄️"),e(o)]),n(),t("a",A,[n("🔗"),e(o)])])]),t("tr",null,[F,H,t("td",J,[e(a,{to:"/problem/0238.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Q,[e(a,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[W]),_:1})]),X,t("td",Y,[t("a",Z,[n("🀄️"),e(o)]),n(),t("a",$,[n("🔗"),e(o)])])]),t("tr",null,[tt,nt,t("td",et,[e(a,{to:"/problem/0628.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",st,[e(a,{to:"/tag/array.html"},{default:s(()=>[at]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[ot]),_:1}),n(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[lt]),_:1})]),rt,t("td",ct,[t("a",pt,[n("🀄️"),e(o)]),n(),t("a",it,[n("🔗"),e(o)])])]),t("tr",null,[dt,ut,_t,t("td",ht,[e(a,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1}),n(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[kt]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[ft]),_:1}),n(),gt]),bt,t("td",xt,[t("a",yt,[n("🀄️"),e(o)]),n(),t("a",vt,[n("🔗"),e(o)])])])])])])}const Ct=c(_,[["render",wt],["__file","0152.html.vue"]]);export{Ct as default};
