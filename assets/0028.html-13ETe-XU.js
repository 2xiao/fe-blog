import{_ as p,r as c,o as u,c as h,a as e,b as n,d as t,w as s,f as k,e as _}from"./app-5LzGvT4H.js";const m={},f=e("h1",{id:"_28-找出字符串中第一个匹配项的下标",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_28-找出字符串中第一个匹配项的下标","aria-hidden":"true"},"#"),n(" 28. 找出字符串中第一个匹配项的下标")],-1),g=e("code",null,"双指针",-1),b=e("code",null,"字符串",-1),y=e("code",null,"字符串匹配",-1),x={href:"https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"LeetCode",-1),O=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: haystack = &quot;sadbutsad&quot;, needle = &quot;sad&quot;</p><p>Output: 0</p><p>Explanation: &quot;sad&quot; occurs at index 0 and 6.</p><p>The first occurrence is at index 0, so we return 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: haystack = &quot;leetcode&quot;, needle = &quot;leeto&quot;</p><p>Output: -1</p><p>Explanation: &quot;leeto&quot; did not occur in &quot;leetcode&quot;, so we return -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= haystack.length, needle.length &lt;= 10^4</code></li><li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>haystack</code> 和 <code>needle</code> ，请你在 <code>haystack</code> 字符串中找出 <code>needle</code> 字符串的第一个匹配项的下标（下标从 <code>0</code> 开始）。如果 <code>needle</code> 不是 <code>haystack</code> 的一部分，则返回 <code>-1</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-原生方法" tabindex="-1"><a class="header-anchor" href="#思路一-原生方法" aria-hidden="true">#</a> 思路一：原生方法</h3><p>利用 JavaScript 提供的内置方法 <code>indexOf</code>，可以直接返回 <code>needle</code> 在 <code>haystack</code> 中的索引。</p><p>该方法会自动处理边界情况，若 <code>needle</code> 不存在，则返回 <code>-1</code>。</p><p>这种方法简洁高效，适合快速实现。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(m * n)</code>，其中 <code>m</code> 是 <code>haystack</code> 的长度，<code>n</code> 是 <code>needle</code> 的长度。最坏情况下，<code>indexOf</code> 需要遍历整个 <code>haystack</code> 并在每个位置比较 <code>needle</code>。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，不需要额外的空间，使用内置方法。</li></ul><hr><h3 id="思路二-手写-indexof" tabindex="-1"><a class="header-anchor" href="#思路二-手写-indexof" aria-hidden="true">#</a> 思路二：手写 indexOf</h3><p>若不能使用原生方法，则手动实现一下 <code>String.prototype.indexOf()</code> 方法，注意几个优化的细节。</p><ul><li>首先，获取 <code>haystack</code> 和 <code>needle</code> 的长度，并检查 <code>haystack</code> 是否比 <code>needle</code> 短，如果短，则直接返回 <code>-1</code>。</li><li>使用一个 <code>for</code> 循环遍历 <code>haystack</code>，对于每个可能的起始位置，利用 <code>slice</code> 方法提取子字符串并与 <code>needle</code> 比较。</li><li>一旦找到匹配的子字符串，则返回当前的索引。</li><li>如果遍历结束仍未找到，返回 <code>-1</code>。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(m * n)</code>，其中 <code>m</code> 是 <code>haystack</code> 的长度，<code>n</code> 是 <code>needle</code> 的长度。对于每个起始位置，最多需要进行 <code>n</code> 次比较。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>，只使用常数空间，不需要额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',24),E=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("string"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"haystack"),n(`
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("string"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"needle"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"strStr"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[n("haystack"),e("span",{class:"token punctuation"},","),n(" needle")]),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"return"),n(" haystack"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"indexOf"),e("span",{class:"token punctuation"},"("),n("needle"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("string"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"haystack"),n(`
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("string"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"needle"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"strStr"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[n("haystack"),e("span",{class:"token punctuation"},","),n(" needle")]),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"let"),n(" len "),e("span",{class:"token operator"},"="),n(" haystack"),e("span",{class:"token punctuation"},"."),n("length"),e("span",{class:"token punctuation"},","),n(`
		n `),e("span",{class:"token operator"},"="),n(" needle"),e("span",{class:"token punctuation"},"."),n("length"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("len "),e("span",{class:"token operator"},"<"),n(" n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		`),e("span",{class:"token keyword"},"return"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`

	`),e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"let"),n(" i "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(" i "),e("span",{class:"token operator"},"<="),n(" len "),e("span",{class:"token operator"},"-"),n(" n"),e("span",{class:"token punctuation"},";"),n(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		`),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("haystack"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"slice"),e("span",{class:"token punctuation"},"("),n("i"),e("span",{class:"token punctuation"},","),n(" i "),e("span",{class:"token operator"},"+"),n(" n"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"==="),n(" needle"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
			`),e("span",{class:"token keyword"},"return"),n(" i"),e("span",{class:"token punctuation"},";"),n(`
		`),e("span",{class:"token punctuation"},"}"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`

	`),e("span",{class:"token keyword"},"return"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),L=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),N=e("td",{style:{"text-align":"center"}},"214",-1),S=e("td",{style:{"text-align":"left"}},"最短回文串",-1),V=e("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},I=e("code",null,"字符串",-1),T=e("code",null,"字符串匹配",-1),B=e("code",null,"哈希函数",-1),R=e("code",null,"1+",-1),G=e("td",{style:{"text-align":"left"}},"🔴",-1),J={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/shortest-palindrome",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/shortest-palindrome",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"459",-1),H=e("td",{style:{"text-align":"left"}},"重复的子字符串",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},P=e("code",null,"字符串",-1),Q=e("code",null,"字符串匹配",-1),U=e("td",{style:{"text-align":"left"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"};function Z($,ee){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return u(),h("div",null,[f,e("p",null,[n("🟢 "),t(i,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),n(),t(a,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),n(),t(a,{to:"/tag/string-matching.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),e("a",x,[v,t(o)]),n(),e("a",w,[q,t(o)])]),O,t(r,{id:"141",data:[{id:"原生方法"},{id:"手写 indexOf"}]},{title0:s(({value:l,isActive:d})=>[n("原生方法")]),title1:s(({value:l,isActive:d})=>[n("手写 indexOf")]),tab0:s(({value:l,isActive:d})=>[E]),tab1:s(({value:l,isActive:d})=>[C]),_:1}),j,k(" prettier-ignore "),e("table",null,[L,e("tbody",null,[e("tr",null,[N,S,V,e("td",A,[t(a,{to:"/tag/string.html"},{default:s(()=>[I]),_:1}),n(),t(a,{to:"/tag/string-matching.html"},{default:s(()=>[T]),_:1}),n(),t(a,{to:"/tag/hash-function.html"},{default:s(()=>[B]),_:1}),n(),R]),G,e("td",J,[e("a",z,[n("🀄️"),t(o)]),n(),e("a",D,[n("🔗"),t(o)])])]),e("tr",null,[F,H,e("td",K,[t(a,{to:"/problem/0459.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",M,[t(a,{to:"/tag/string.html"},{default:s(()=>[P]),_:1}),n(),t(a,{to:"/tag/string-matching.html"},{default:s(()=>[Q]),_:1})]),U,e("td",W,[e("a",X,[n("🀄️"),t(o)]),n(),e("a",Y,[n("🔗"),t(o)])])])])])])}const te=p(m,[["render",Z],["__file","0028.html.vue"]]);export{te as default};
