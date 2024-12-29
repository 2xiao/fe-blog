import{_ as u,r as o,o as d,c as k,a as n,b as s,d as a,w as e,e as g}from"./app-r0ql_Osa.js";const h={},m=n("h1",{id:"_796-旋转字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_796-旋转字符串","aria-hidden":"true"},"#"),s(" 796. 旋转字符串")],-1),b=n("code",null,"字符串",-1),f=n("code",null,"字符串匹配",-1),_={href:"https://leetcode.cn/problems/rotate-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/rotate-string",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=g('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>goal</code>, return <code>true</code> <em>if and only if</em> <code>s</code> <em>can become</em> <code>goal</code> <em>after some number of<strong>shifts</strong> on</em> <code>s</code>.</p><p>A <strong>shift</strong> on <code>s</code> consists of moving the leftmost character of <code>s</code> to the rightmost position.</p><ul><li>For example, if <code>s = &quot;abcde&quot;</code>, then it will be <code>&quot;bcdea&quot;</code> after one shift.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abcde&quot;, goal = &quot;cdeab&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abcde&quot;, goal = &quot;abced&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, goal.length &lt;= 100</code></li><li><code>s</code> and <code>goal</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串, <code>s</code> 和 <code>goal</code>。如果在若干次旋转操作之后，<code>s</code> 能变成 <code>goal</code> ，那么返回 <code>true</code> 。</p><p><code>s</code> 的 <strong>旋转操作</strong> 就是将 <code>s</code> 最左边的字符移动到最右边。</p><ul><li>例如, 若 <code>s = &#39;abcde&#39;</code>，在旋转一次之后结果就是<code>&#39;bcdea&#39;</code> 。</li></ul><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;abcde&quot;, goal = &quot;cdeab&quot;</p><p><strong>输出:</strong> true</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;abcde&quot;, goal = &quot;abced&quot;</p><p><strong>输出:</strong> false</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length, goal.length &lt;= 100</code></li><li><code>s</code> 和 <code>goal</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-字符串拼接法" tabindex="-1"><a class="header-anchor" href="#思路一-字符串拼接法" aria-hidden="true">#</a> 思路一：字符串拼接法</h3><ul><li>首先检查 <code>s</code> 和 <code>goal</code> 的长度。如果两者长度不同，则不可能通过旋转操作得到相等的字符串，直接返回 <code>false</code>。</li><li>将 <code>s</code> 拼接到自己，例如 <code>s + s</code>，然后检查 <code>goal</code> 是否是这个拼接字符串的子串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，拼接和比较字符串的时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为需要额外的空间来存储拼接后的字符串。</li></ul><h3 id="思路二-模拟旋转法" tabindex="-1"><a class="header-anchor" href="#思路二-模拟旋转法" aria-hidden="true">#</a> 思路二：模拟旋转法</h3><ol><li><p><strong>长度检查</strong>：</p><ul><li>首先检查 <code>s</code> 和 <code>goal</code> 的长度。如果两者长度不同，则不可能通过旋转操作得到相等的字符串，直接返回 <code>false</code>。</li></ul></li><li><p><strong>旋转操作模拟</strong>：</p><ul><li>遍历字符串 <code>s</code> 的每个位置 <code>i</code>，模拟一次旋转操作： <ul><li>使用 <code>s.slice(i)</code> 获取从位置 <code>i</code> 到结束的子字符串。</li><li>使用 <code>s.slice(0, i)</code> 获取从开头到位置 <code>i</code> 的子字符串。</li><li>将这两个子字符串连接起来，形成旋转后的字符串。</li></ul></li><li>检查这个旋转后的字符串是否等于 <code>goal</code>。如果找到匹配，返回 <code>true</code>。</li></ul></li><li><p><strong>未找到匹配</strong>：</p><ul><li>如果遍历结束后仍然没有找到匹配的旋转字符串，则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。在最坏的情况下，需要进行 <code>n</code> 次循环，每次循环又需要 <code>O(n)</code> 的时间来拼接和比较字符串。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为在每次旋转操作中，我们都创建了新的子字符串用于比较。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',30),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"goal"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"rotateString"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("s"),n("span",{class:"token punctuation"},","),s(" goal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(" goal"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"+"),s(" s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("goal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"goal"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"rotateString"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("s"),n("span",{class:"token punctuation"},","),s(" goal")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(" goal"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" goal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(j,C){const r=o("font"),l=o("RouterLink"),i=o("ExternalLinkIcon"),p=o("CodeTabs");return d(),k("div",null,[m,n("p",null,[s("🟢 "),a(r,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(l,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),s(),a(l,{to:"/tag/string-matching.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),n("a",_,[v,a(i)]),s(),n("a",q,[w,a(i)])]),x,a(p,{id:"226",data:[{id:"字符串拼接法"},{id:"模拟旋转法"}]},{title0:e(({value:t,isActive:c})=>[s("字符串拼接法")]),title1:e(({value:t,isActive:c})=>[s("模拟旋转法")]),tab0:e(({value:t,isActive:c})=>[y]),tab1:e(({value:t,isActive:c})=>[O]),_:1})])}const L=u(h,[["render",E],["__file","0796.html.vue"]]);export{L as default};
