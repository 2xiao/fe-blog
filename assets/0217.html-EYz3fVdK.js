import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-KDJRKGep.js";const _={},h=t("h1",{id:"_217-存在重复元素",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_217-存在重复元素","aria-hidden":"true"},"#"),e(" 217. 存在重复元素")],-1),k=t("code",null,"数组",-1),m=t("code",null,"哈希表",-1),f=t("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/contains-duplicate",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/contains-duplicate",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,1,1,3,3,4,3,2,4,2]</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果数组里面有重复数字就输出 <code>true</code> ，否则输出 <code>flase</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用 <code>map</code> 判断即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">containsDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"219",-1),q=t("td",{style:{"text-align":"left"}},"存在重复元素 II",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"数组",-1),N=t("code",null,"哈希表",-1),V=t("code",null,"滑动窗口",-1),j=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/contains-duplicate-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/contains-duplicate-ii",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"220",-1),D=t("td",{style:{"text-align":"left"}},"存在重复元素 III",-1),G=t("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},S=t("code",null,"数组",-1),T=t("code",null,"桶排序",-1),A=t("code",null,"有序集合",-1),F=t("code",null,"2+",-1),H=t("td",{style:{"text-align":"center"}},"🔴",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/contains-duplicate-iii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/contains-duplicate-iii",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"2357",-1),U=t("td",{style:{"text-align":"left"}},"使数组中所有元素都等于零",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Y=t("code",null,"贪心",-1),Z=t("code",null,"数组",-1),$=t("code",null,"哈希表",-1),tt=t("code",null,"3+",-1),et=t("td",{style:{"text-align":"center"}},"🟢",-1),nt={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts",target:"_blank",rel:"noopener noreferrer"};function ot(lt,ct){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",g,[b,n(o)]),e(),t("a",y,[x,n(o)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[I,q,t("td",E,[n(a,{to:"/problem/0219.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),e(),n(a,{to:"/tag/sliding-window.html"},{default:s(()=>[V]),_:1})]),j,t("td",B,[t("a",O,[e("🀄️"),n(o)]),e(),t("a",z,[e("🔗"),n(o)])])]),t("tr",null,[R,D,G,t("td",M,[n(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),e(),n(a,{to:"/tag/bucket-sort.html"},{default:s(()=>[T]),_:1}),e(),n(a,{to:"/tag/ordered-set.html"},{default:s(()=>[A]),_:1}),e(),F]),H,t("td",J,[t("a",K,[e("🀄️"),n(o)]),e(),t("a",P,[e("🔗"),n(o)])])]),t("tr",null,[Q,U,t("td",W,[n(a,{to:"/problem/2357.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",X,[n(a,{to:"/tag/greedy.html"},{default:s(()=>[Y]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[$]),_:1}),e(),tt]),et,t("td",nt,[t("a",st,[e("🀄️"),n(o)]),e(),t("a",at,[e("🔗"),n(o)])])])])])])}const it=r(_,[["render",ot],["__file","0217.html.vue"]]);export{it as default};
