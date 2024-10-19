import{_ as r,r as c,o as i,c as p,a as t,d as e,b as n,w as s,f as u,e as d}from"./app-ynO5B_DP.js";const _={},h={id:"_152-乘积最大子数组",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_152-乘积最大子数组","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"数组",-1),g=t("code",null,"动态规划",-1),b={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, find a subarray that has the largest product, and return <em>the product</em>.</p><p>The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,3,-2,4]</p><p>Output: 6</p><p>Explanation: [2,3] has the largest product 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-2,0,-1]</p><p>Output: 0</p><p>Explanation: The result cannot be 2, because [-2,-1] is not a subarray.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个数组，要求找出这个数组中连续元素乘积最大的值。</li><li>分情况讨论: <ul><li>不和别人乘，就是 n 自己</li><li>n 是负数，乘上前面的最小积</li><li>n 是正数，乘上前面的最大积</li></ul></li><li>这一题是 DP 的题，状态转移方程是：最大值是 <code>Max(f(n)) = Max( Max(f(n-1)) * n, Min(f(n-1)) * n, n)</code>；最小值是 <code>Min(f(n)) = Min( Max(f(n-1)) * n, Min(f(n-1)) * n, n)</code>。只要动态维护这两个值，如果最后一个数是负数，最大值就在负数 _ 最小值和自己中产生，如果最后一个数是正数，最大值就在正数 _ 最大值和自己中产生。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProduct</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),M=t("td",{style:{"text-align":"center"}},"53",-1),w={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},C={href:"/problem/0053",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},N=t("code",null,"数组",-1),V=t("code",null,"分治",-1),I=t("code",null,"动态规划",-1),T={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"198",-1),B={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"center"}},R={href:"/problem/0198",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"left"}},G=t("code",null,"数组",-1),K=t("code",null,"动态规划",-1),S={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"238",-1),A={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},H={style:{"text-align":"center"}},J={href:"/problem/0238",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"前缀和",-1),X={style:{"text-align":"left"}},Y=t("td",{style:{"text-align":"center"}},"628",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/maximum-product-of-three-numbers",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},et=t("code",null,"数组",-1),st=t("code",null,"数学",-1),at=t("code",null,"排序",-1),ot={style:{"text-align":"left"}},lt=t("td",{style:{"text-align":"center"}},"713",-1),ct={style:{"text-align":"left"}},rt={href:"https://leetcode.com/problems/subarray-product-less-than-k",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},ut=t("code",null,"数组",-1),dt=t("code",null,"二分查找",-1),_t=t("code",null,"前缀和",-1),ht=t("code",null,"1+",-1),mt={style:{"text-align":"left"}};function ft(kt,gt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),p("div",null,[t("h1",h,[m,e(),t("a",f,[e("152. 乘积最大子数组"),n(o)])]),t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/outline/tag/array.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",b,[x,n(o)])]),y,u(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[M,t("td",w,[t("a",E,[e("最大子数组和"),n(o)])]),t("td",q,[t("a",C,[e("[✓]"),n(o)])]),t("td",L,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[N]),_:1}),e(),n(a,{to:"/outline/tag/divide-and-conquer.html"},{default:s(()=>[V]),_:1}),e(),n(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[I]),_:1})]),t("td",T,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[j,t("td",B,[t("a",O,[e("打家劫舍"),n(o)])]),t("td",P,[t("a",R,[e("[✓]"),n(o)])]),t("td",D,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[G]),_:1}),e(),n(a,{to:"/outline/tag/dynamic-programming.html"},{default:s(()=>[K]),_:1})]),t("td",S,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[z,t("td",A,[t("a",F,[e("除自身以外数组的乘积"),n(o)])]),t("td",H,[t("a",J,[e("[✓]"),n(o)])]),t("td",Q,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/outline/tag/prefix-sum.html"},{default:s(()=>[W]),_:1})]),t("td",X,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[Y,t("td",Z,[t("a",$,[e("三个数的最大乘积"),n(o)])]),tt,t("td",nt,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[et]),_:1}),e(),n(a,{to:"/outline/tag/math.html"},{default:s(()=>[st]),_:1}),e(),n(a,{to:"/outline/tag/sorting.html"},{default:s(()=>[at]),_:1})]),t("td",ot,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[lt,t("td",ct,[t("a",rt,[e("乘积小于 K 的子数组"),n(o)])]),it,t("td",pt,[n(a,{to:"/outline/tag/array.html"},{default:s(()=>[ut]),_:1}),e(),n(a,{to:"/outline/tag/binary-search.html"},{default:s(()=>[dt]),_:1}),e(),n(a,{to:"/outline/tag/prefix-sum.html"},{default:s(()=>[_t]),_:1}),e(),ht]),t("td",mt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])])])])])}const xt=r(_,[["render",ft],["__file","0152.html.vue"]]);export{xt as default};
