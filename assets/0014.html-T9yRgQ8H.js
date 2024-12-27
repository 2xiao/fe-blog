import{_ as r,r as e,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-fqckLmln.js";const h={},b=n("h1",{id:"_14-最长公共前缀",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_14-最长公共前缀","aria-hidden":"true"},"#"),s(" 14. 最长公共前缀")],-1),f=n("code",null,"字典树",-1),g=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/longest-common-prefix",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/longest-common-prefix",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function to find the longest common prefix string amongst an array of strings.</p><p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]</p><p>Output: &quot;fl&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]</p><p>Output: &quot;&quot;</p><p>Explanation: There is no common prefix among the input strings.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 200</code></li><li><code>0 &lt;= strs[i].length &lt;= 200</code></li><li><code>strs[i]</code> consists of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数来查找字符串数组中的最长公共前缀。</p><p>如果不存在公共前缀，返回空字符串 &quot;&quot;。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-循环比较" tabindex="-1"><a class="header-anchor" href="#思路一-循环比较" aria-hidden="true">#</a> 思路一：循环比较</h3><ol><li>将字符串数组按照字符串长度，从小到大排序；</li><li>初始化公共前缀为字符串数组中的第一个字符串；</li><li>然后将数组中的字符串与公共前缀依次比较，每次比较出不同时就缩小公共前缀，直到公共前缀为空或者遍历完所有字符串数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>strs</code> 中最短的字符串的长度，<code>n</code> 是 <code>strs</code> 中字符串的个数； <ul><li>排序的时间复杂度是 <code>O(n log n)</code>；</li><li>遍历寻找公共前缀的时间复杂度是 <code>O(m * n)</code>；</li><li>遍历数组，需要循环 <code>n - 1</code> 次，内部的 <code>while</code> 循环中字符串会与公共前缀依次比较，每次比较出不同时就缩小公共前缀，最坏的情况需要比较 <code>m</code> 次； <ul><li>在大多数情况下，当字符串数量 (<code>n</code>) 和最短字符串的长度 (<code>m</code>) 很大时，<code>O(m * n)</code> 将占主导地位，因此时间复杂度是 <code>O(m * n)</code>。</li></ul></li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用的额外空间复杂度为常数。</li></ul><hr><h3 id="思路二-二维数组" tabindex="-1"><a class="header-anchor" href="#思路二-二维数组" aria-hidden="true">#</a> 思路二：二维数组</h3><p>把字符串列表看成一个二维数组，然后用一个嵌套 <code>for</code> 循环计算这个二维数组前面有多少列的元素完全相同即可。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是字符串数组中的字符串的平均长度，<code>n</code> 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用的额外空间复杂度为常数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',23),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"strs"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"longestCommonPrefix"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"strs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	strs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" pref "),n("span",{class:"token operator"},"="),s(" strs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		prefLen `),n("span",{class:"token operator"},"="),s(" pref"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" strs"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" s "),n("span",{class:"token operator"},"="),s(" strs"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("pref "),n("span",{class:"token operator"},"!=="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" prefLen"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			prefLen`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("prefLen "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
			pref `),n("span",{class:"token operator"},"="),s(" pref"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" prefLen"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" pref"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"strs"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"longestCommonPrefix"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"strs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" strs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" strs"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">="),s(" strs"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"||"),s(" strs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(" strs"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(" strs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" strs"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(O,C){const u=e("font"),l=e("RouterLink"),p=e("ExternalLinkIcon"),i=e("CodeTabs");return k(),d("div",null,[b,n("p",null,[s("🟢 "),t(u,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(l,{to:"/tag/trie.html"},{default:a(()=>[f]),_:1}),s(),t(l,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[_,t(p)]),s(),n("a",w,[x,t(p)])]),y,t(i,{id:"156",data:[{id:"循环比较"},{id:"二维数组"}]},{title0:a(({value:o,isActive:c})=>[s("循环比较")]),title1:a(({value:o,isActive:c})=>[s("二维数组")]),tab0:a(({value:o,isActive:c})=>[q]),tab1:a(({value:o,isActive:c})=>[j]),_:1})])}const I=r(h,[["render",L],["__file","0014.html.vue"]]);export{I as default};
