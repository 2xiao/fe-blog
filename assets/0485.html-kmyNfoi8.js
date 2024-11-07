import{_ as i,r as c,o as r,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-OX-nYmHS.js";const _={},h=t("h1",{id:"_485-最大连续-1-的个数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_485-最大连续-1-的个数","aria-hidden":"true"},"#"),e(" 485. 最大连续 1 的个数")],-1),m=t("code",null,"数组",-1),k={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary array <code>nums</code>, return <em>the maximum number of consecutive</em><code>1</code> <em>&#39; s in the array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,0,1,1,1]</p><p>Output: 3</p><p>Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,0,1,1,0,1]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二进制数组， 计算其中最大连续 1 的个数。</p><p>注意：</p><ul><li>输入的数组只包含 0 和 1。</li><li>输入数组的长度是正整数，且不超过 10,000。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给定一个二进制数组， 计算其中最大连续 1 的个数。</li><li>简单题。扫一遍数组，累计 1 的个数，动态维护最大的计数，最终输出即可。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMaxConsecutiveOnes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),v=t("td",{style:{"text-align":"center"}},"487",-1),w={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/max-consecutive-ones-ii",target:"_blank",rel:"noopener noreferrer"},I=t("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=t("code",null,"数组",-1),M=t("code",null,"动态规划",-1),N=t("code",null,"滑动窗口",-1),V={style:{"text-align":"left"}},q=t("td",{style:{"text-align":"center"}},"1004",-1),j={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},T={style:{"text-align":"left"}},R=t("code",null,"数组",-1),z=t("code",null,"二分查找",-1),G=t("code",null,"前缀和",-1),S=t("code",null,"1+",-1),A={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"1446",-1),F={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/consecutive-characters",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"字符串",-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"1869",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"字符串",-1),tt={style:{"text-align":"left"}},nt=t("td",{style:{"text-align":"center"}},"2414",-1),et={style:{"text-align":"left"}},st={href:"https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=t("code",null,"字符串",-1),ct={style:{"text-align":"left"}},it=t("td",{style:{"text-align":"center"}},"2511",-1),rt={style:{"text-align":"left"}},pt={href:"https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured",target:"_blank",rel:"noopener noreferrer"},dt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"数组",-1),ht=t("code",null,"双指针",-1),mt={style:{"text-align":"left"}};function kt(ft,gt){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),p("div",null,[h,t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",k,[f,n(o)]),e(),t("a",g,[b,n(o)])]),x,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[v,t("td",w,[t("a",E,[e("最大连续1的个数 II 🔒"),n(o)])]),I,t("td",C,[n(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[M]),_:1}),e(),n(a,{to:"/tag/sliding-window.html"},{default:s(()=>[N]),_:1})]),t("td",V,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[q,t("td",j,[t("a",B,[e("最大连续1的个数 III"),n(o)])]),t("td",O,[n(a,{to:"/problem/1004.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",T,[n(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[z]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[G]),_:1}),e(),S]),t("td",A,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[D,t("td",F,[t("a",H,[e("连续字符"),n(o)])]),J,t("td",K,[n(a,{to:"/tag/string.html"},{default:s(()=>[P]),_:1})]),t("td",Q,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[U,t("td",W,[t("a",X,[e("哪种连续子字符串更长"),n(o)])]),Y,t("td",Z,[n(a,{to:"/tag/string.html"},{default:s(()=>[$]),_:1})]),t("td",tt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[nt,t("td",et,[t("a",st,[e("最长的字母序连续子字符串的长度"),n(o)])]),at,t("td",ot,[n(a,{to:"/tag/string.html"},{default:s(()=>[lt]),_:1})]),t("td",ct,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[it,t("td",rt,[t("a",pt,[e("最多可以摧毁的敌人城堡数目"),n(o)])]),dt,t("td",ut,[n(a,{to:"/tag/array.html"},{default:s(()=>[_t]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[ht]),_:1})]),t("td",mt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const xt=i(_,[["render",kt],["__file","0485.html.vue"]]);export{xt as default};
