import{_ as r,r as e,o as k,c as d,a as n,d as s,b as t,w as a,e as m}from"./app-Fucr7yuT.js";const h={},b={id:"_120-三角形最小路径和",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_120-三角形最小路径和","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/triangle",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),y={href:"https://leetcode.com/problems/triangle",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>triangle</code> array, return <em>the minimum path sum from top to bottom</em>.</p><p>For each step, you may move to an adjacent number of the row below. More formally, if you are on index <code>i</code> on the current row, you may move to either index <code>i</code> or index <code>i + 1</code> on the next row.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]</p><p>Output: 11</p><p>Explanation: The triangle looks like:</p></blockquote><pre><code>[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
</code></pre><blockquote><p>The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: triangle = [[-10]]</p><p>Output: -10</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= triangle.length &lt;= 200</code></li><li><code>triangle[0].length == 1</code></li><li><code>triangle[i].length == triangle[i - 1].length + 1</code></li><li><code>-10^4 &lt;= triangle[i][j] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Could you do this using only <code>O(n)</code> extra space, where <code>n</code> is the total number of rows in the triangle?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>求出从三角形顶端到底端的最小和。要求最好用 <code>O(n)</code> 的空间复杂度。</p><h3 id="思路一-倒序-dp" tabindex="-1"><a class="header-anchor" href="#思路一-倒序-dp" aria-hidden="true">#</a> 思路一：倒序 DP</h3><ul><li>从下往上找出最小路径和，存入二维数组 DP。</li><li><code>dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + input[i][j]</code></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code>，遍历整个二维数组，其中 <code>n</code> 是三角形的高度。</li><li><strong>空间复杂度</strong>: <code>O(n^2)</code>，使用了一个大小为 <code>n^2</code> 的二维数组来存储中间状态。</li></ul><hr><h3 id="思路二-倒序-dp-压缩状态" tabindex="-1"><a class="header-anchor" href="#思路二-倒序-dp-压缩状态" aria-hidden="true">#</a> 思路二：倒序 DP+压缩状态</h3><ul><li>压缩状态</li><li>从下往上找出最小路径和，存入一维数组 DP。</li><li><code>dp[j] = Math.min(dp[j], dp[j + 1]) + inputArr[i][j]</code></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n^2)</code>，遍历整个二维数组，其中 <code>n</code> 是三角形的高度。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个长度为 <code>n</code> 的一维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,26),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"minSum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"inputArr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 初始化dp数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" h "),n("span",{class:"token operator"},"="),s(" inputArr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("h"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" h"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 自底向上"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" h "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"==="),s(" h "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// 最底层就是它自己"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// 其余点的dp值 = 对应输入数组的值 + 下一层相邻两个点的dp值中最小的"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"minSum2"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"inputArr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" h "),n("span",{class:"token operator"},"="),s(" inputArr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 初始化dp数组为输入最底层的值"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("h "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 从第二层开始循环"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" h "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" inputArr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(O,P){const p=e("ExternalLinkIcon"),u=e("font"),l=e("RouterLink"),i=e("CodeTabs");return k(),d("div",null,[n("h1",b,[v,s(),n("a",g,[s("120. 三角形最小路径和"),t(p)])]),n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(l,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(l,{to:"/tag/dynamic-programming.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",y,[w,t(p)])]),j,t(i,{id:"155",data:[{id:"倒序 DP"},{id:"倒序 DP + 压缩状态"}]},{title0:a(({value:o,isActive:c})=>[s("倒序 DP")]),title1:a(({value:o,isActive:c})=>[s("倒序 DP + 压缩状态")]),tab0:a(({value:o,isActive:c})=>[x]),tab1:a(({value:o,isActive:c})=>[A]),_:1})])}const q=r(h,[["render",D],["__file","0120.html.vue"]]);export{q as default};
