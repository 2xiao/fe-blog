import{_ as u,r as o,o as k,c as m,a as n,d as e,b as a,w as s,e as d}from"./app-ynO5B_DP.js";const h={},b={id:"剑指-offer-15-二进制中1的个数",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#剑指-offer-15-二进制中1的个数","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"位运算",-1),g={href:"https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=d('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 &#39;1&#39; 的个数（也被称为 汉明重量）。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：n = 11 (控制台输入 00000000000000000000000000001011)</p><p>输出：3</p><p>解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 &#39;1&#39;。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：n = 128 (控制台输入 00000000000000000000000010000000)</p><p>输出：1</p><p>解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 &#39;1&#39;。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：n = 4294967293 （控制台输入 11111111111111111111111111111101，部分语言中 n = -3）</p><p>输出：31</p><p>解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 &#39;1&#39;。</p></blockquote><p><strong>提示：</strong></p><ul><li>输入必须是长度为 <code>32</code> 的 <strong>二进制串</strong> 。</li></ul>',10),y={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),q=d('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-循环" tabindex="-1"><a class="header-anchor" href="#思路一-循环" aria-hidden="true">#</a> 思路一：循环</h3><p>可以直接循环检查给定整数 <code>n</code> 的二进制位的每一位是否为 <code>1</code>。</p><p>当检查第 <code>i</code> 位时，可以让 <code>n</code> 与 <code>2^i</code> 进行 <strong>与</strong> 运算，当且仅当 <code>n</code> 的第 <code>i</code> 位为 <code>1</code> 时，运算结果不为 <code>0</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k=32</code>，一共需要检查 <code>32</code> 位。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数的空间保存若干变量。</p></li></ul><hr><h3 id="思路二-位运算" tabindex="-1"><a class="header-anchor" href="#思路二-位运算" aria-hidden="true">#</a> 思路二：位运算</h3><p>由于 <code>n &amp; (n−1)</code> 会 <code>n</code> 的二进制位中的最低位的 <code>1</code> 变为 <code>0</code> ，如：<code>6 &amp; (6−1) = 4</code>, <code>6 = (110)_2</code>, <code>4 = (100)_2</code>，运算结果 <code>4</code> 即为把 <code>6</code> 的二进制位中的最低位的 <code>1</code> 变为 <code>0</code> 之后的结果。</p><p>可以利用这个位运算的性质，不断让当前的 <code>n</code> 与 <code>n - 1</code> 做与运算，直到 <code>n</code> 变为 <code>0</code> 即可。因为每次运算会使得 <code>n</code> 的最低位的 <code>1</code> 被翻转，因此运算次数就等于 <code>n</code> 的二进制位中 <code>1</code> 的个数。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是 <code>n</code> 的二进制表示中 <code>1</code> 的数量。每次 <code>n &amp;= n - 1</code> 操作都会消除 <code>n</code> 中的一个 <code>1</code>，因此循环的次数等于 <code>1</code> 的个数。最坏情况下，当 <code>n</code> 的所有位都是 <code>1</code> 时，循环次数等于 <code>m</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数的空间保存变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',13),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(` - a positive integer
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"hammingWeight"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"&"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),e(),n("span",{class:"token operator"},"<<"),e(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(` - a positive integer
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"hammingWeight"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		n `),n("span",{class:"token operator"},"&="),e(" n "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
		res`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(O,A){const l=o("ExternalLinkIcon"),i=o("font"),r=o("RouterLink"),p=o("CodeTabs");return k(),m("div",null,[n("h1",b,[_,e(),n("a",v,[e("剑指 Offer 15. 二进制中1的个数"),a(l)])]),n("p",null,[e("🟢 "),a(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),a(r,{to:"/outline/tag/bit-manipulation.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",g,[w,a(l)])]),x,n("div",y,[j,n("p",null,[e("本题与 LeetCode "),a(r,{to:"/problem/0191.html"},{default:s(()=>[e("第 191 题")]),_:1}),e(" 相同。")])]),q,a(p,{id:"124",data:[{id:"循环"},{id:"位运算"}]},{title0:s(({value:t,isActive:c})=>[e("循环")]),title1:s(({value:t,isActive:c})=>[e("位运算")]),tab0:s(({value:t,isActive:c})=>[z]),tab1:s(({value:t,isActive:c})=>[C]),_:1})])}const N=u(h,[["render",L],["__file","jz_offer_15_1.html.vue"]]);export{N as default};
