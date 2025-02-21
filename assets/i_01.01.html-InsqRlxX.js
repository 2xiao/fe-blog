import{_ as r,r as l,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-9CeBk-uV.js";const h={},b=n("h1",{id:"_01-01-判定字符是否唯一",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01-01-判定字符是否唯一","aria-hidden":"true"},"#"),s(" 01.01. 判定字符是否唯一")],-1),v=n("code",null,"位运算",-1),g=n("code",null,"哈希表",-1),f=n("code",null,"字符串",-1),_=n("code",null,"排序",-1),w={href:"https://leetcode.cn/problems/is-unique-lcci",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abc&quot;</p><p>Output: true</p></blockquote><p><strong>Note:</strong></p><ul><li><code>0 &lt;= len(s) &lt;= 100 </code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现一个算法，确定一个字符串 <code>s</code> 的所有字符是否全都不同。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;leetcode&quot;</p><p><strong>输出:</strong> false</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;abc&quot;</p><p><strong>输出:</strong> true</p></blockquote><p><strong>限制：</strong></p><ul><li><code>0 &lt;= len(s) &lt;= 100 </code></li><li><code>s[i]</code>仅包含小写字母</li><li>如果你不使用额外的数据结构，会很加分。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><p>可以使用一个哈希表或集合来记录已经遇到的字符。如果在遍历字符串时遇到某个字符已经存在于哈希表中，则说明字符不是唯一的，返回 <code>false</code>。否则，在遍历完整个字符串后返回 <code>true</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历一次字符串，且每次在集合中插入和查找字符都是 <code>O(1)</code> 的操作。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，集合最多需要存储 <code>n</code> 个字符。</li></ul><h3 id="思路二-排序后比较" tabindex="-1"><a class="header-anchor" href="#思路二-排序后比较" aria-hidden="true">#</a> 思路二：排序后比较</h3><p>先将字符串排序，然后检查相邻的字符是否相同。如果有相同的字符，则返回 <code>false</code>。否则，说明所有字符都不重复，返回 <code>true</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，因为需要对字符串进行排序。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为需要存储排序后的字符数组。</li></ul><h3 id="思路三-位运算" tabindex="-1"><a class="header-anchor" href="#思路三-位运算" aria-hidden="true">#</a> 思路三：位运算</h3><p>可以使用位运算的技巧，用一个整数的位来记录某个字母是否已经出现过。因为一个整数的位数有限，这种方法适用于只有小写字母（或 ASCII 码范围有限）的情况。</p><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只使用了一个整数来记录字符的状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',30),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"astr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isUnique"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"astr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" seen "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 用来存储已经遇到的字符"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" char "),n("span",{class:"token keyword"},"of"),s(" astr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("seen"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("char"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 如果字符已存在于集合中，说明字符不唯一"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		seen`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("char"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 否则，将字符添加到集合中"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 遍历结束后，所有字符都不重复"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"astr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isUnique"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"astr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" sorted "),n("span",{class:"token operator"},"="),s(" astr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 将字符串拆分成字符数组并排序"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" sorted"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("sorted"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(" sorted"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 如果有相邻字符相同，则字符不唯一"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 没有发现重复字符，返回 true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"astr"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"isUnique"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"astr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" checker "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 用整数的位来记录字符是否出现"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" astr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" val "),n("span",{class:"token operator"},"="),s(" astr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 计算字符相对 'a' 的偏移量"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("checker "),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 如果当前位已经置位，说明字符重复"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		checker `),n("span",{class:"token operator"},"|="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" val"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 否则，将该位设置为 1"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 没有发现重复字符，返回 true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(C,I){const p=l("font"),c=l("RouterLink"),u=l("ExternalLinkIcon"),i=l("CodeTabs");return k(),d("div",null,[b,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(c,{to:"/tag/bit-manipulation.html"},{default:a(()=>[v]),_:1}),s(),t(c,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(c,{to:"/tag/string.html"},{default:a(()=>[f]),_:1}),s(),t(c,{to:"/tag/sorting.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",w,[y,t(u)])]),x,t(i,{id:"161",data:[{id:"哈希表"},{id:"排序后比较"},{id:"位运算"}]},{title0:a(({value:e,isActive:o})=>[s("哈希表")]),title1:a(({value:e,isActive:o})=>[s("排序后比较")]),title2:a(({value:e,isActive:o})=>[s("位运算")]),tab0:a(({value:e,isActive:o})=>[q]),tab1:a(({value:e,isActive:o})=>[j]),tab2:a(({value:e,isActive:o})=>[A]),_:1})])}const N=r(h,[["render",O],["__file","i_01.01.html.vue"]]);export{N as default};
