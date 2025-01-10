import{_ as p,r as c,o as d,c as k,a as n,b as s,d as a,w as t,e as h}from"./app-XFeYdzZv.js";const m={},b=n("h1",{id:"_258-各位相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_258-各位相加","aria-hidden":"true"},"#"),s(" 258. 各位相加")],-1),g=n("code",null,"数学",-1),_=n("code",null,"数论",-1),v=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),O=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>num</code>, repeatedly add all its digits until the result has only one digit, and return it.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 38</p><p>Output: 2</p><p>Explanation: The process is</p><p>38 --&gt; 3 + 8 --&gt; 11</p><p>11 --&gt; 1 + 1 --&gt; 2</p><p>Since 2 has only one digit, return it.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num &lt;= 231 - 1</code></li></ul><p><strong>Follow up:</strong> Could you do it without any loop/recursion in <code>O(1)</code> runtime?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非负整数 <code>num</code>，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> num = 38</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong> 各位相加的过程为：38 --&gt; 3 + 8 --&gt; 11</p><p>11 --&gt; 1 + 1 --&gt; 2</p><p>由于 2 是一位数，所以返回 2。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> num = 0</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= num &lt;= 231 - 1</code></li></ul><p><strong>进阶：</strong> 你可以不使用循环或者递归，在 <code>O(1)</code> 时间复杂度内解决这个问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-模拟逐步计算" tabindex="-1"><a class="header-anchor" href="#思路一-模拟逐步计算" aria-hidden="true">#</a> 思路一：模拟逐步计算</h3><ol><li>每次将数字的各位相加。</li><li>如果结果仍然大于 9，继续重复此过程。</li><li>当数字小于 10 时，返回结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_10 n)</code>，每次循环会减少一位数字。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常量额外空间。</li></ul><hr><h3 id="思路二-数学方法-数字根-o-1-解法" tabindex="-1"><a class="header-anchor" href="#思路二-数学方法-数字根-o-1-解法" aria-hidden="true">#</a> 思路二：数学方法（数字根，O(1) 解法）</h3><ol><li>数字根的概念（Digital Root）可用于快速找到结果： <ul><li>如果 <code>num == 0</code>，结果为 <code>0</code>。</li><li>如果 <code>num != 0</code>，结果为 <code>1 + (num - 1) % 9</code>。</li><li>公式来源：将数字 <code>num</code> 按照 10 进制分解后，可以得出其各位数字和对 9 取模的规律。</li></ul></li><li>使用公式直接计算，无需循环或递归。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，仅进行常数次数学运算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不需要额外空间。</li></ul><hr><h3 id="思路三-递归法" tabindex="-1"><a class="header-anchor" href="#思路三-递归法" aria-hidden="true">#</a> 思路三：递归法</h3><ol><li>如果 <code>num</code> 小于 10，直接返回。</li><li>否则，将 <code>num</code> 的各位相加后递归调用自身。</li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_10 n)</code>，每次递归会减少一位数字。</li><li><strong>空间复杂度</strong>：<code>O(log_10 n)</code>，递归调用栈的深度。</li></ul><hr><h3 id="思路比较" tabindex="-1"><a class="header-anchor" href="#思路比较" aria-hidden="true">#</a> 思路比较</h3><table><thead><tr><th>方法</th><th>时间复杂度</th><th>空间复杂度</th><th>备注</th></tr></thead><tbody><tr><td>模拟逐步相加</td><td><code>O(log_10 n)</code></td><td><code>O(1)</code></td><td>简单直观，代码可读性强</td></tr><tr><td>数学方法</td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>最优解，高效且无需循环</td></tr><tr><td>递归法</td><td><code>O(log_10 n)</code></td><td><code>O(log_10 n)</code></td><td>简单实现，但递归耗费栈空间</td></tr></tbody></table><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',37),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"addDigits"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			sum `),n("span",{class:"token operator"},"+="),s(" num "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 提取个位数并累加"),s(`
			num `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 去掉个位"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		num `),n("span",{class:"token operator"},"="),s(" sum"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" num"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"addDigits"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"addDigits"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" num"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sum `),n("span",{class:"token operator"},"+="),s(" num "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
		num `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"addDigits"),n("span",{class:"token punctuation"},"("),s("sum"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(A,D){const r=c("font"),l=c("RouterLink"),i=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟢 "),a(r,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(l,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(l,{to:"/tag/number-theory.html"},{default:t(()=>[_]),_:1}),s(),a(l,{to:"/tag/simulation.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[y,a(i)]),s(),n("a",w,[x,a(i)])]),O,a(u,{id:"295",data:[{id:"模拟逐步计算"},{id:"数学方法"},{id:"递归法"}]},{title0:t(({value:e,isActive:o})=>[s("模拟逐步计算")]),title1:t(({value:e,isActive:o})=>[s("数学方法")]),title2:t(({value:e,isActive:o})=>[s("递归法")]),tab0:t(({value:e,isActive:o})=>[j]),tab1:t(({value:e,isActive:o})=>[q]),tab2:t(({value:e,isActive:o})=>[C]),_:1})])}const I=p(m,[["render",E],["__file","0258.html.vue"]]);export{I as default};
