import{_ as u,r as i,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as _}from"./app-9CeBk-uV.js";const h={},b=n("h1",{id:"_509-斐波那契数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_509-斐波那契数","aria-hidden":"true"},"#"),t(" 509. 斐波那契数")],-1),f=n("code",null,"递归",-1),g=n("code",null,"记忆化搜索",-1),v=n("code",null,"数学",-1),y=n("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),F={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),N=_(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>Fibonacci numbers</strong> , commonly denoted <code>F(n)</code> form a sequence, called the <strong>Fibonacci sequence</strong> , such that each number is the sum of the two preceding ones, starting from <code>0</code> and <code>1</code>. That is,</p><blockquote><p>F(0) = 0, F(1) = 1</p><p>F(n) = F(n - 1) + F(n - 2), for n &gt; 1.</p></blockquote><p>Given <code>n</code>, calculate <code>F(n)</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 1</p><p>Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 2</p><p>Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 4</p><p>Output: 3</p><p>Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 30</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>F(0) = 0, F(1) = 1

F(N) = F(N - 1) + F(N - 2), 其中 N &gt; 1.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给定 N，计算 F(N)。</p><p>提示：0 ≤ N ≤ 30</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题解法很多，大的分类是四种：</p><ul><li>递归</li><li>记忆化搜索(dp)</li><li>矩阵快速幂</li><li>通项公式</li></ul><p>其中记忆化搜索可以写 3 种方法：</p><ul><li>自底向上的</li><li>自顶向下的</li><li>优化空间复杂度版的</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,23),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法一 暴力递归法 时间复杂度 O(2^n)，空间复杂度 O(n)"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fib"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"fib"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token function"},"fib"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法二 自底向上的记忆化搜索 时间复杂度 O(n)，空间复杂度 O(n)"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fib"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		arr`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" arr"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},"["),t("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法三 自顶向下的记忆化搜索 时间复杂度 O(n)，空间复杂度 O(n)"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fib"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" map "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"helper"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法四 滚动数组优化版的 dp，节约内存空间 时间复杂度 O(n)，空间复杂度 O(1)"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fib"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" result "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		result `),n("span",{class:"token operator"},"="),t(" prev1 "),n("span",{class:"token operator"},"+"),t(" prev2"),n("span",{class:"token punctuation"},";"),t(`
		prev1 `),n("span",{class:"token operator"},"="),t(" prev2"),n("span",{class:"token punctuation"},";"),t(`
		prev2 `),n("span",{class:"token operator"},"="),t(" result"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" result"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"70",-1),T=n("td",{style:{"text-align":"left"}},"爬楼梯",-1),V={style:{"text-align":"center"}},z={style:{"text-align":"left"}},B=n("code",null,"记忆化搜索",-1),R=n("code",null,"数学",-1),G=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"842",-1),K=n("td",{style:{"text-align":"left"}},"将数组拆分成斐波那契序列",-1),P=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"字符串",-1),W=n("code",null,"回溯",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/split-array-into-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/split-array-into-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"873",-1),tn=n("td",{style:{"text-align":"left"}},"最长的斐波那契子序列的长度",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},an=n("code",null,"数组",-1),on=n("code",null,"哈希表",-1),ln=n("code",null,"动态规划",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/length-of-longest-fibonacci-subsequence",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"center"}},"1137",-1),kn=n("td",{style:{"text-align":"left"}},"第 N 个泰波那契数",-1),mn={style:{"text-align":"center"}},_n={style:{"text-align":"left"}},hn=n("code",null,"记忆化搜索",-1),bn=n("code",null,"数学",-1),fn=n("code",null,"动态规划",-1),gn=n("td",{style:{"text-align":"center"}},"🟢",-1),vn={style:{"text-align":"center"}},yn={href:"https://leetcode.cn/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"};function wn(Fn,qn){const p=i("font"),a=i("RouterLink"),o=i("ExternalLinkIcon"),r=i("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/recursion.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/memoization.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[y]),_:1}),t("  🔗 "),n("a",x,[w,s(o)]),t(),n("a",F,[q,s(o)])]),N,s(r,{id:"139",data:[{id:"暴力递归法"},{id:"自底向上的记忆化搜索"},{id:"自顶向下的记忆化搜索"},{id:"滚动数组优化版的 dp"}]},{title0:e(({value:l,isActive:c})=>[t("暴力递归法")]),title1:e(({value:l,isActive:c})=>[t("自底向上的记忆化搜索")]),title2:e(({value:l,isActive:c})=>[t("自顶向下的记忆化搜索")]),title3:e(({value:l,isActive:c})=>[t("滚动数组优化版的 dp")]),tab0:e(({value:l,isActive:c})=>[j]),tab1:e(({value:l,isActive:c})=>[O]),tab2:e(({value:l,isActive:c})=>[E]),tab3:e(({value:l,isActive:c})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[L,T,n("td",V,[s(a,{to:"/problem/0070.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",z,[s(a,{to:"/tag/memoization.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[R]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[G]),_:1})]),M,n("td",S,[n("a",D,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])]),n("tr",null,[J,K,P,n("td",Q,[s(a,{to:"/tag/string.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[W]),_:1})]),X,n("td",Y,[n("a",Z,[t("🀄️"),s(o)]),t(),n("a",$,[t("🔗"),s(o)])])]),n("tr",null,[nn,tn,sn,n("td",en,[s(a,{to:"/tag/array.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[on]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[ln]),_:1})]),cn,n("td",pn,[n("a",rn,[t("🀄️"),s(o)]),t(),n("a",un,[t("🔗"),s(o)])])]),n("tr",null,[dn,kn,n("td",mn,[s(a,{to:"/problem/1137.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",_n,[s(a,{to:"/tag/memoization.html"},{default:e(()=>[hn]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[bn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[fn]),_:1})]),gn,n("td",vn,[n("a",yn,[t("🀄️"),s(o)]),t(),n("a",xn,[t("🔗"),s(o)])])])])])])}const jn=u(h,[["render",wn],["__file","0509.html.vue"]]);export{jn as default};
