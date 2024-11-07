import{_ as u,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as m,e as h}from"./app-OX-nYmHS.js";const _={},g=t("h1",{id:"_66-加一",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_66-加一","aria-hidden":"true"},"#"),n(" 66. 加一")],-1),b=t("code",null,"数组",-1),f=t("code",null,"数学",-1),y={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),E=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>ith</code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>&#39;s.</p><p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = [1,2,3]</p><p>Output: [1,2,4]</p><p>Explanation: The array represents the integer 123.</p><p>Incrementing by one gives 123 + 1 = 124.</p><p>Thus, the result should be [1,2,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = [4,3,2,1]</p><p>Output: [4,3,2,2]</p><p>Explanation: The array represents the integer 4321.</p><p>Incrementing by one gives 4321 + 1 = 4322.</p><p>Thus, the result should be [4,3,2,2].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = [9]</p><p>Output: [1,0]</p><p>Explanation: The array represents the integer 9.</p><p>Incrementing by one gives 9 + 1 = 10.</p><p>Thus, the result should be [1,0].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= digits.length &lt;= 100</code></li><li><code>0 &lt;= digits[i] &lt;= 9</code></li><li><code>digits</code> does not contain any leading <code>0</code>&#39;s.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个数组，代表一个十进制数，数组的 <code>0</code> 下标是十进制数的高位。要求计算这个十进制数加一以后的结果。</li><li>简单的模拟题。从数组尾部开始往前扫，逐位进位即可。最高位如果还有进位需要在数组里面第 <code>0</code> 位再插入一个 <code>1</code> 。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',16),T=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"digits"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"plusOne"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"digits"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" carry "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 进位"),n(`
		i `),t("span",{class:"token operator"},"="),n(" digits"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 从数组尾部开始往前扫"),n(`
		sum `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 当不再有进位时，循环结束"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("carry "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token comment"},"// 最高位如果还有进位，在数组里面第 0 位再插入一个 1"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			digits`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),n("carry"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
			carry `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token comment"},"// 模拟加法过程"),n(`
			sum `),t("span",{class:"token operator"},"="),n(" carry "),t("span",{class:"token operator"},"+"),n(" digits"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			carry `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),n("sum "),t("span",{class:"token operator"},"/"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"|"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
			digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" sum "),t("span",{class:"token operator"},"%"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},";"),n(`
			i`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"digits"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"plusOne"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"digits"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" digits"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token comment"},"// digits[i] 小于 9 时，不会发生进位，直接求和，并停止遍历"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("digits"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`

		`),t("span",{class:"token comment"},"// 否则发生进位，将 digits[i] 直接改为 0，继续遍历高位"),n(`
		digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 最高位如果还有进位，在数组里面第 0 位再插入一个 1"),n(`
	digits`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),q=t("td",{style:{"text-align":"center"}},"43",-1),L={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},O={style:{"text-align":"center"}},V={style:{"text-align":"left"}},A=t("code",null,"数学",-1),B=t("code",null,"字符串",-1),M=t("code",null,"模拟",-1),R={style:{"text-align":"left"}},S=t("td",{style:{"text-align":"center"}},"67",-1),Y={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},G=t("code",null,"位运算",-1),H=t("code",null,"数学",-1),J=t("code",null,"字符串",-1),K=t("code",null,"1+",-1),P={style:{"text-align":"left"}},Q=t("td",{style:{"text-align":"center"}},"369",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/plus-one-linked-list",target:"_blank",rel:"noopener noreferrer"},X={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=t("code",null,"链表",-1),tt=t("code",null,"数学",-1),nt={style:{"text-align":"left"}},et=t("td",{style:{"text-align":"center"}},"989",-1),st={style:{"text-align":"left"}},at={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"数组",-1),it=t("code",null,"数学",-1),rt={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"2571",-1),ut={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},ht=t("code",null,"贪心",-1),_t=t("code",null,"位运算",-1),gt=t("code",null,"动态规划",-1),bt={style:{"text-align":"left"}};function ft(yt,vt){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[g,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",y,[v,e(o)]),n(),t("a",x,[w,e(o)])]),E,e(p,{id:"119",data:[{id:"思路一"},{id:"思路二"}]},{title0:s(({value:i,isActive:r})=>[n("思路一")]),title1:s(({value:i,isActive:r})=>[n("思路二")]),tab0:s(({value:i,isActive:r})=>[T]),tab1:s(({value:i,isActive:r})=>[I]),_:1}),C,m(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[q,t("td",L,[t("a",N,[n("字符串相乘"),e(o)])]),t("td",O,[e(a,{to:"/problem/0043.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",V,[e(a,{to:"/tag/math.html"},{default:s(()=>[A]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[M]),_:1})]),t("td",R,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[S,t("td",Y,[t("a",z,[n("二进制求和"),e(o)])]),t("td",D,[e(a,{to:"/problem/0067.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",F,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[J]),_:1}),n(),K]),t("td",P,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[Q,t("td",U,[t("a",W,[n("给单链表加一 🔒"),e(o)])]),t("td",X,[e(a,{to:"/problem/0369.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Z,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[$]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[tt]),_:1})]),t("td",nt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[et,t("td",st,[t("a",at,[n("数组形式的整数加法"),e(o)])]),ot,t("td",lt,[e(a,{to:"/tag/array.html"},{default:s(()=>[ct]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[it]),_:1})]),t("td",rt,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[pt,t("td",ut,[t("a",dt,[n("将整数减少到零需要的最少操作数"),e(o)])]),kt,t("td",mt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[ht]),_:1}),n(),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[_t]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[gt]),_:1})]),t("td",bt,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const wt=u(_,[["render",ft],["__file","0066.html.vue"]]);export{wt as default};
