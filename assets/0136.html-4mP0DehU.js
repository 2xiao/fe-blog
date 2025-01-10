import{_ as c,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as _}from"./app-XFeYdzZv.js";const h={},u=t("h1",{id:"_136-只出现一次的数字",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_136-只出现一次的数字","aria-hidden":"true"},"#"),e(" 136. 只出现一次的数字")],-1),m=t("code",null,"位运算",-1),g=t("code",null,"数组",-1),f={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=_(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p><p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,2,1]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,1,2,1,2]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-3 * 10^4 &lt;= nums[i] &lt;= 3 * 10^4</code></li><li>Each element in the array appears twice except for one element which appears only once.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。要求算法时间复杂度是线性的，并且不使用额外的辅助空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>可以使用位运算，利用异或运算的性质：任何一个数字异或它自己都等于 <code>0</code> (<code>x ^ x = 0</code>)；</li><li>从头遍历数组，依次异或数组中的每一个数字；</li><li>数组中除了某个元素只出现一次以外，其余每个元素均出现两次，因为出现两次的数字在异或中会被抵消掉，所以最终得到的结果就是那个只出现一次的数字。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 为 <code>nums</code> 数组的长度，需要遍历数组中的所有整数。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数级别的辅助空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> res <span class="token operator">^</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"137",-1),I=t("td",{style:{"text-align":"left"}},"只出现一次的数字 II",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},N=t("code",null,"位运算",-1),O=t("code",null,"数组",-1),C=t("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"260",-1),R=t("td",{style:{"text-align":"left"}},"只出现一次的数字 III",-1),F=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},S=t("code",null,"位运算",-1),T=t("code",null,"数组",-1),X=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"268",-1),H=t("td",{style:{"text-align":"left"}},"丢失的数字",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},M=t("code",null,"位运算",-1),P=t("code",null,"数组",-1),Q=t("code",null,"哈希表",-1),U=t("code",null,"3+",-1),W=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/missing-number",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"287",-1),nt=t("td",{style:{"text-align":"left"}},"寻找重复数",-1),st={style:{"text-align":"center"}},ot={style:{"text-align":"left"}},at=t("code",null,"位运算",-1),lt=t("code",null,"数组",-1),rt=t("code",null,"双指针",-1),ct=t("code",null,"1+",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),dt={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/find-the-duplicate-number",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"389",-1),ut=t("td",{style:{"text-align":"left"}},"找不同",-1),mt={style:{"text-align":"center"}},gt={style:{"text-align":"left"}},ft=t("code",null,"位运算",-1),bt=t("code",null,"哈希表",-1),kt=t("code",null,"字符串",-1),xt=t("code",null,"1+",-1),yt=t("td",{style:{"text-align":"center"}},"🟢",-1),vt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/find-the-difference",target:"_blank",rel:"noopener noreferrer"},It={href:"https://leetcode.com/problems/find-the-difference",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"3158",-1),qt=t("td",{style:{"text-align":"left"}},"求出出现两次数字的 XOR 值",-1),Nt=t("td",{style:{"text-align":"center"}},null,-1),Ot={style:{"text-align":"left"}},Ct=t("code",null,"位运算",-1),Lt=t("code",null,"数组",-1),Vt=t("code",null,"哈希表",-1),jt=t("td",{style:{"text-align":"center"}},"🟢",-1),Bt={style:{"text-align":"center"}},Rt={href:"https://leetcode.cn/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"};function Gt(St,Tt){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[u,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",f,[b,n(a)]),e(),t("a",k,[x,n(a)])]),y,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,I,t("td",E,[n(o,{to:"/problem/0137.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[N]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[O]),_:1})]),C,t("td",L,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",j,[e("🔗"),n(a)])])]),t("tr",null,[B,R,F,t("td",G,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[T]),_:1})]),X,t("td",Y,[t("a",z,[e("🀄️"),n(a)]),e(),t("a",A,[e("🔗"),n(a)])])]),t("tr",null,[D,H,t("td",J,[n(o,{to:"/problem/0268.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",K,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[M]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Q]),_:1}),e(),U]),W,t("td",Z,[t("a",$,[e("🀄️"),n(a)]),e(),t("a",tt,[e("🔗"),n(a)])])]),t("tr",null,[et,nt,t("td",st,[n(o,{to:"/problem/0287.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ot,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[at]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[rt]),_:1}),e(),ct]),it,t("td",dt,[t("a",pt,[e("🀄️"),n(a)]),e(),t("a",_t,[e("🔗"),n(a)])])]),t("tr",null,[ht,ut,t("td",mt,[n(o,{to:"/problem/0389.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",gt,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[kt]),_:1}),e(),xt]),yt,t("td",vt,[t("a",wt,[e("🀄️"),n(a)]),e(),t("a",It,[e("🔗"),n(a)])])]),t("tr",null,[Et,qt,Nt,t("td",Ot,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[Ct]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Lt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Vt]),_:1})]),jt,t("td",Bt,[t("a",Rt,[e("🀄️"),n(a)]),e(),t("a",Ft,[e("🔗"),n(a)])])])])])])}const Yt=c(h,[["render",Gt],["__file","0136.html.vue"]]);export{Yt as default};
