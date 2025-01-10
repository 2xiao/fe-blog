import{_ as c,r as l,o as i,c as p,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-XFeYdzZv.js";const h={},_=n("h1",{id:"_344-反转字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_344-反转字符串","aria-hidden":"true"},"#"),t(" 344. 反转字符串")],-1),k=n("code",null,"双指针",-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),y=n("p",null,[t("Write a function that reverses a string. The input string is given as an array of characters "),n("code",null,"s"),t(".")],-1),w={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"O(1)",-1),C=n("p",null,[n("strong",null,"Example 1:")],-1),E=n("blockquote",null,[n("p",null,'Input: s = ["h","e","l","l","o"]'),n("p",null,'Output: ["o","l","l","e","h"]')],-1),O=n("p",null,[n("strong",null,"Example 2:")],-1),L=n("blockquote",null,[n("p",null,'Input: s = ["H","a","n","n","a","h"]'),n("p",null,'Output: ["h","a","n","n","a","H"]')],-1),N=n("p",null,[n("strong",null,"Constraints:")],-1),V=n("li",null,[n("code",null,"1 <= s.length <= 10^5")],-1),j=n("code",null,"s[i]",-1),B={href:"https://en.wikipedia.org/wiki/ASCII#Printable_characters",target:"_blank",rel:"noopener noreferrer"},S=u(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 <code>s</code> 的形式给出。</p><p>不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 <code>O(1)</code> 的额外空间解决这一问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以将数组的首位元素一一交换即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n = s.length / 2</code>，要遍历一半的数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify s in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>s<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,10),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),H=n("td",{style:{"text-align":"center"}},"345",-1),R=n("td",{style:{"text-align":"left"}},"反转字符串中的元音字母",-1),T={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=n("code",null,"双指针",-1),P=n("code",null,"字符串",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"541",-1),J=n("td",{style:{"text-align":"left"}},"反转字符串 II",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},Q=n("code",null,"双指针",-1),U=n("code",null,"字符串",-1),X=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"};function tn(en,sn){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[_,n("p",null,[t("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",m,[f,e(o)]),t(),n("a",b,[v,e(o)])]),x,y,n("p",null,[t("You must do this by modifying the input array "),n("a",w,[t("in- place"),e(o)]),t(" with "),I,t(" extra memory.")]),C,E,O,L,N,n("ul",null,[V,n("li",null,[j,t(" is a "),n("a",B,[t("printable ascii character"),e(o)]),t(".")])]),S,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[H,R,n("td",T,[e(a,{to:"/problem/0345.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",A,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[P]),_:1})]),W,n("td",Y,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])]),n("tr",null,[G,J,n("td",K,[e(a,{to:"/problem/0541.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[Q]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[U]),_:1})]),X,n("td",Z,[n("a",$,[t("🀄️"),e(o)]),t(),n("a",nn,[t("🔗"),e(o)])])])])])])}const on=c(h,[["render",tn],["__file","0344.html.vue"]]);export{on as default};
