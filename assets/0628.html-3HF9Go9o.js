import{_ as r,r as c,o as d,c as m,a as n,b as s,d as t,w as a,f as k,e as h}from"./app-UFGGnKWA.js";const b={},g=n("h1",{id:"_628-三个数的最大乘积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_628-三个数的最大乘积","aria-hidden":"true"},"#"),s(" 628. 三个数的最大乘积")],-1),_=n("code",null,"数组",-1),v=n("code",null,"数学",-1),x=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/maximum-product-of-three-numbers",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximum-product-of-three-numbers",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, <em>find three numbers whose product is maximum and return the maximum product</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: 6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: 24</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [-1,-2,-3]</p><p>Output: -6</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整型数组 <code>nums</code> ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong> 6</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong> 24</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [-1,-2,-3]</p><p><strong>输出：</strong> -6</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们需要在数组中找到 <strong>三个数的最大乘积</strong>。为了做到这一点，可以通过以下两种情况来获得最大值：</p><ol><li><strong>三个最大的正数</strong> 的乘积。</li><li><strong>两个最小的负数和一个最大的正数</strong> 的乘积。</li></ol><hr><h3 id="思路一-排序法" tabindex="-1"><a class="header-anchor" href="#思路一-排序法" aria-hidden="true">#</a> 思路一：排序法</h3><ul><li>对数组进行排序，时间复杂度为 <code>O(n log n)</code>。</li><li>最大乘积可能是最后三个数的乘积（即最大的三个正数）或者前两个数（最小的负数）与最后一个数（最大正数）的乘积。</li><li>返回这两种情况的较大值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，排序需要 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><hr><h3 id="思路二-线性扫描法" tabindex="-1"><a class="header-anchor" href="#思路二-线性扫描法" aria-hidden="true">#</a> 思路二：线性扫描法</h3><ul><li>在一次遍历中找到： <ul><li>最大的三个数（<code>max1, max2, max3</code>）。</li><li>最小的两个数（<code>min1, min2</code>）。</li></ul></li><li>计算： <ul><li><code>max1 * max2 * max3</code>（三个最大的正数）。</li><li><code>min1 * min2 * max1</code>（两个最小的负数和一个最大的正数）。</li></ul></li><li>返回两者的较大值。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，仅需一次遍历，在性能上更优，适用于大规模数据。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',34),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maximumProduct"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 排序"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 比较最后三个数的乘积和最小两个数与最大数的乘积"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s(`
		nums`),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		nums`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*"),s(" nums"),n("span",{class:"token punctuation"},"["),s("n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"maximumProduct"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 初始化最大和最小值"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" max1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),s(`
		max2 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),s(`
		max3 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" min1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},","),s(`
		min2 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 更新最大的三个数"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">"),s(" max1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			max3 `),n("span",{class:"token operator"},"="),s(" max2"),n("span",{class:"token punctuation"},";"),s(`
			max2 `),n("span",{class:"token operator"},"="),s(" max1"),n("span",{class:"token punctuation"},";"),s(`
			max1 `),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">"),s(" max2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			max3 `),n("span",{class:"token operator"},"="),s(" max2"),n("span",{class:"token punctuation"},";"),s(`
			max2 `),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">"),s(" max3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			max3 `),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 更新最小的两个数"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"<"),s(" min1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			min2 `),n("span",{class:"token operator"},"="),s(" min1"),n("span",{class:"token punctuation"},";"),s(`
			min1 `),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"<"),s(" min2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			min2 `),n("span",{class:"token operator"},"="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 返回最大的乘积"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("max1 "),n("span",{class:"token operator"},"*"),s(" max2 "),n("span",{class:"token operator"},"*"),s(" max3"),n("span",{class:"token punctuation"},","),s(" min1 "),n("span",{class:"token operator"},"*"),s(" min2 "),n("span",{class:"token operator"},"*"),s(" max1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"152",-1),N=n("td",{style:{"text-align":"left"}},"乘积最大子数组",-1),V={style:{"text-align":"center"}},A={style:{"text-align":"left"}},B=n("code",null,"数组",-1),T=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"};function S(z,D){const u=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),m("div",null,[g,n("p",null,[s("🟢 "),t(u,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[x]),_:1}),s("  🔗 "),n("a",f,[y,t(o)]),s(),n("a",w,[q,t(o)])]),I,t(i,{id:"231",data:[{id:"排序法"},{id:"线性扫描法"}]},{title0:a(({value:l,isActive:p})=>[s("排序法")]),title1:a(({value:l,isActive:p})=>[s("线性扫描法")]),tab0:a(({value:l,isActive:p})=>[O]),tab1:a(({value:l,isActive:p})=>[C]),_:1}),E,k(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[L,N,n("td",V,[t(e,{to:"/problem/0152.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",A,[t(e,{to:"/tag/array.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[T]),_:1})]),M,n("td",P,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",G,[s("🔗"),t(o)])])])])])])}const H=r(b,[["render",S],["__file","0628.html.vue"]]);export{H as default};
