import{_ as u,r as c,o as d,c as k,a as n,b as s,d as e,w as t,f as h,e as m}from"./app-XFeYdzZv.js";const g={},b=n("h1",{id:"_151-反转字符串中的单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_151-反转字符串中的单词","aria-hidden":"true"},"#"),s(" 151. 反转字符串中的单词")],-1),_=n("code",null,"双指针",-1),v=n("code",null,"字符串",-1),f={href:"https://leetcode.cn/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an input string <code>s</code>, reverse the order of the <strong>words</strong>.</p><p>A <strong>word</strong> is defined as a sequence of non-space characters. The <strong>words</strong> in <code>s</code> will be separated by at least one space.</p><p>Return <em>a string of the words in reverse order concatenated by a single space.</em></p><p><strong>Note</strong> that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;the sky is blue&quot;</p><p>Output: &quot;blue is sky the&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot; hello world &quot;</p><p>Output: &quot;world hello&quot;</p><p>Explanation: Your reversed string should not contain leading or trailing spaces.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;a good example&quot;</p><p>Output: &quot;example good a&quot;</p><p>Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>&#39; &#39;</code>.</li><li>There is <strong>at least one</strong> word in <code>s</code>.</li></ul><p><strong>Follow-up:</strong> If the string data type is mutable in your language, can you solve it <strong>in-place</strong> with <code>O(1)</code> extra space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串，逐个翻转字符串中的每个单词。</p><p>说明：</p><ul><li>无空格字符构成一个单词。</li><li>输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。</li><li>如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。</li></ul><p>请尝试使用 <code>O(1)</code> 额外空间复杂度的 <strong>原地</strong> 解法。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-分割-倒序" tabindex="-1"><a class="header-anchor" href="#思路一-分割-倒序" aria-hidden="true">#</a> 思路一：分割+倒序</h3><p>常规的方式是把 <code>s</code> 按空格 <code>split</code> 成若干单词，然后 <code>reverse</code> 这些单词的顺序，最后把这些单词 <code>join</code> 成句子。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 为字符串 <code>s</code> 的长度； <ul><li><code>split()</code> 方法为 <code>O(n)</code></li><li><code>reverse()</code> 方法为 <code>O(n)</code></li><li><code>filter()</code> 方法为 <code>O(n)</code></li><li><code>join()</code> 方法为 <code>O(n)</code></li></ul></li><li><strong>空间复杂度</strong>： <code>O(n)</code>，新建的字符串数组总长度 <code>≤n</code> ，占用 <code>O(n)</code> 大小的额外空间。</li></ul><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><ul><li>倒序遍历字符串 <code>s</code> ，记录单词左右索引边界 <code>i</code> , <code>j</code> 。</li><li>每确定一个单词的边界，则将其添加至单词列表 <code>res</code> 。</li><li>最终，将单词列表拼接为字符串，并返回即可。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 为字符串 <code>s</code> 的长度；</li><li><strong>空间复杂度</strong>： <code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',30),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseWords"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` s
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" i "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"reverseWords"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			i`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		res `),n("span",{class:"token operator"},"+="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			i`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		j `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"186",-1),N=n("td",{style:{"text-align":"left"}},"反转字符串中的单词 II 🔒",-1),T=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},L=n("code",null,"双指针",-1),V=n("code",null,"字符串",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/reverse-words-in-a-string-ii",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/reverse-words-in-a-string-ii",target:"_blank",rel:"noopener noreferrer"};function D(F,G){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟠 "),e(r,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[_]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[w,e(o)]),s(),n("a",x,[y,e(o)])]),q,e(p,{id:"197",data:[{id:"分割+倒序"},{id:"双指针"}]},{title0:t(({value:l,isActive:i})=>[s("分割+倒序")]),title1:t(({value:l,isActive:i})=>[s("双指针")]),tab0:t(({value:l,isActive:i})=>[O]),tab1:t(({value:l,isActive:i})=>[j]),_:1}),E,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[C,N,T,n("td",A,[e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[L]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[V]),_:1})]),B,n("td",R,[n("a",W,[s("🀄️"),e(o)]),s(),n("a",Y,[s("🔗"),e(o)])])])])])])}const S=u(g,[["render",D],["__file","0151.html.vue"]]);export{S as default};
