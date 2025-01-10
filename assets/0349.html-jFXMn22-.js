import{_ as r,r as l,o as d,c as i,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-XFeYdzZv.js";const _={},h=t("h1",{id:"_349-两个数组的交集",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_349-两个数组的交集","aria-hidden":"true"},"#"),e(" 349. 两个数组的交集")],-1),m=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),f=t("code",null,"双指针",-1),k=t("code",null,"二分查找",-1),y=t("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must be <strong>unique</strong> and you may return the result in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,2,2,1], nums2 = [2,2]</p><p>Output: [2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]</p><p>Output: [9,4]</p><p>Explanation: [4,9] is also accepted.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个数组 <code>nums1</code> 和 <code>nums2</code> ，返回 <em>它们的交集</em> 。输出结果中的每个元素一定是 <strong>唯一</strong> 的。我们可以 <strong>不考虑输出结果的顺序</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [1,2,2,1], nums2 = [2,2]</p><p><strong>输出：</strong>[2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]</p><p><strong>输出：</strong>[9,4]</p><p><strong>解释：</strong>[4,9] 也是可通过的</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效地找出交集，使用 <strong>集合（Set）</strong> 数据结构，它具有自动去重和高效查找的特性。</p><ol><li>将 <code>nums1</code> 和 <code>nums2</code> 分别转换为集合 <code>set1</code> 和 <code>set2</code>，从而去除数组中的重复元素，并提高查找效率。</li><li>使用 <code>filter</code> 方法遍历 <code>set1</code> 中的元素，检查每个元素是否同时存在于 <code>set2</code> 中。如果存在，则将该元素加入到最终结果中。最后，返回交集结果。</li><li>也可以使用 ES6 的 Set 交集操作符 <code>.intersection()</code>，可以进一步简化代码。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 是两个数组的长度。 <ul><li>构建 <code>set1</code> 和 <code>set2</code> 的时间复杂度为 <code>O(n + m)</code>。</li><li><code>filter</code> 方法遍历 <code>set1</code> 的时间复杂度是 <code>O(n)</code>。</li><li>总的时间复杂度为 <code>O(n + m)</code></li></ul></li><li><strong>空间复杂度</strong>：<code>O(n + m)</code>，需要分别存储两个集合 <code>set1</code> 和 <code>set2</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">intersection</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去重并存储 nums1 中的元素</span>
	<span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去重并存储 nums2 中的元素</span>

	<span class="token comment">// 过滤出 set1 中存在于 set2 的元素</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>set1<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> set2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 或者使用原生方法</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>set1<span class="token punctuation">.</span><span class="token function">intersection</span><span class="token punctuation">(</span>set2<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"350",-1),I=t("td",{style:{"text-align":"left"}},"两个数组的交集 II",-1),S={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"数组",-1),N=t("code",null,"哈希表",-1),V=t("code",null,"双指针",-1),j=t("code",null,"2+",-1),B=t("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"1213",-1),A=t("td",{style:{"text-align":"left"}},"三个有序数组的交集 🔒",-1),D=t("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},H=t("code",null,"数组",-1),J=t("code",null,"哈希表",-1),K=t("code",null,"二分查找",-1),M=t("code",null,"1+",-1),P=t("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/intersection-of-three-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/intersection-of-three-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},X=t("td",{style:{"text-align":"center"}},"2085",-1),Y=t("td",{style:{"text-align":"left"}},"统计出现过一次的公共字符串",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},tt=t("code",null,"数组",-1),et=t("code",null,"哈希表",-1),nt=t("code",null,"字符串",-1),st=t("code",null,"1+",-1),ot=t("td",{style:{"text-align":"center"}},"🟢",-1),at={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"2143",-1),dt=t("td",{style:{"text-align":"left"}},"在两个数组的区间中选取数字 🔒",-1),it=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},ut=t("code",null,"数组",-1),_t=t("code",null,"动态规划",-1),ht=t("td",{style:{"text-align":"center"}},"🔴",-1),mt={style:{"text-align":"center"}},gt={href:"https://leetcode.cn/problems/choose-numbers-from-two-arrays-in-range",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},"2215",-1),yt=t("td",{style:{"text-align":"left"}},"找出两数组的不同",-1),bt={style:{"text-align":"center"}},xt={style:{"text-align":"left"}},vt=t("code",null,"数组",-1),wt=t("code",null,"哈希表",-1),qt=t("td",{style:{"text-align":"center"}},"🟢",-1),Et={style:{"text-align":"center"}},Ot={href:"https://leetcode.cn/problems/find-the-difference-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/find-the-difference-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},St=t("td",{style:{"text-align":"center"}},"2248",-1),Ct=t("td",{style:{"text-align":"left"}},"多个数组求交集",-1),Lt={style:{"text-align":"center"}},Nt={style:{"text-align":"left"}},Vt=t("code",null,"数组",-1),jt=t("code",null,"哈希表",-1),Bt=t("code",null,"计数",-1),zt=t("code",null,"1+",-1),Rt=t("td",{style:{"text-align":"center"}},"🟢",-1),Gt={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/intersection-of-multiple-arrays",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/intersection-of-multiple-arrays",target:"_blank",rel:"noopener noreferrer"},Dt=t("td",{style:{"text-align":"center"}},"2540",-1),Ft=t("td",{style:{"text-align":"left"}},"最小公共值",-1),Ht=t("td",{style:{"text-align":"center"}},null,-1),Jt={style:{"text-align":"left"}},Kt=t("code",null,"数组",-1),Mt=t("code",null,"哈希表",-1),Pt=t("code",null,"双指针",-1),Qt=t("code",null,"1+",-1),Ut=t("td",{style:{"text-align":"center"}},"🟢",-1),Wt={style:{"text-align":"center"}},Xt={href:"https://leetcode.cn/problems/minimum-common-value",target:"_blank",rel:"noopener noreferrer"},Yt={href:"https://leetcode.com/problems/minimum-common-value",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},"3002",-1),$t=t("td",{style:{"text-align":"left"}},"移除后集合的最多元素数",-1),te=t("td",{style:{"text-align":"center"}},null,-1),ee={style:{"text-align":"left"}},ne=t("code",null,"贪心",-1),se=t("code",null,"数组",-1),oe=t("code",null,"哈希表",-1),ae=t("td",{style:{"text-align":"center"}},"🟠",-1),le={style:{"text-align":"center"}},ce={href:"https://leetcode.cn/problems/maximum-size-of-a-set-after-removals",target:"_blank",rel:"noopener noreferrer"},re={href:"https://leetcode.com/problems/maximum-size-of-a-set-after-removals",target:"_blank",rel:"noopener noreferrer"};function de(ie,pe){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return d(),i("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[k]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[y]),_:1}),e("  🔗 "),t("a",b,[x,n(a)]),e(),t("a",v,[w,n(a)])]),q,p(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[O,I,t("td",S,[n(o,{to:"/problem/0350.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(o,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[V]),_:1}),e(),j]),B,t("td",z,[t("a",R,[e("🀄️"),n(a)]),e(),t("a",G,[e("🔗"),n(a)])])]),t("tr",null,[T,A,D,t("td",F,[n(o,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[J]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[K]),_:1}),e(),M]),P,t("td",Q,[t("a",U,[e("🀄️"),n(a)]),e(),t("a",W,[e("🔗"),n(a)])])]),t("tr",null,[X,Y,t("td",Z,[n(o,{to:"/problem/2085.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",$,[n(o,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[et]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[nt]),_:1}),e(),st]),ot,t("td",at,[t("a",lt,[e("🀄️"),n(a)]),e(),t("a",ct,[e("🔗"),n(a)])])]),t("tr",null,[rt,dt,it,t("td",pt,[n(o,{to:"/tag/array.html"},{default:s(()=>[ut]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[_t]),_:1})]),ht,t("td",mt,[t("a",gt,[e("🀄️"),n(a)]),e(),t("a",ft,[e("🔗"),n(a)])])]),t("tr",null,[kt,yt,t("td",bt,[n(o,{to:"/problem/2215.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",xt,[n(o,{to:"/tag/array.html"},{default:s(()=>[vt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[wt]),_:1})]),qt,t("td",Et,[t("a",Ot,[e("🀄️"),n(a)]),e(),t("a",It,[e("🔗"),n(a)])])]),t("tr",null,[St,Ct,t("td",Lt,[n(o,{to:"/problem/2248.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Nt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Vt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[jt]),_:1}),e(),n(o,{to:"/tag/counting.html"},{default:s(()=>[Bt]),_:1}),e(),zt]),Rt,t("td",Gt,[t("a",Tt,[e("🀄️"),n(a)]),e(),t("a",At,[e("🔗"),n(a)])])]),t("tr",null,[Dt,Ft,Ht,t("td",Jt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Kt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Pt]),_:1}),e(),Qt]),Ut,t("td",Wt,[t("a",Xt,[e("🀄️"),n(a)]),e(),t("a",Yt,[e("🔗"),n(a)])])]),t("tr",null,[Zt,$t,te,t("td",ee,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[ne]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[se]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[oe]),_:1})]),ae,t("td",le,[t("a",ce,[e("🀄️"),n(a)]),e(),t("a",re,[e("🔗"),n(a)])])])])])])}const _e=r(_,[["render",de],["__file","0349.html.vue"]]);export{_e as default};
