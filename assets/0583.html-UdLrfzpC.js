import{_ as k,r as c,o as d,c as m,a as n,b as s,d as t,w as a,f as h,e as u}from"./app-9Xw5divW.js";const _={},b=n("h1",{id:"_583-两个字符串的删除操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_583-两个字符串的删除操作","aria-hidden":"true"},"#"),s(" 583. 两个字符串的删除操作")],-1),g=n("code",null,"字符串",-1),f=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of <strong>steps</strong> required to make</em> <code>word1</code> <em>and</em> <code>word2</code> <em>the same</em>.</p><p>In one <strong>step</strong> , you can delete exactly one character in either string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word1 = &quot;sea&quot;, word2 = &quot;eat&quot;</p><p>Output: 2</p><p>Explanation: You need one step to make &quot;sea&quot; to &quot;ea&quot; and another step to make &quot;eat&quot; to &quot;ea&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word1 = &quot;leetcode&quot;, word2 = &quot;etco&quot;</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 500</code></li><li><code>word1</code> and <code>word2</code> consist of only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个单词 <code>word1</code> 和 <code>word2</code> ，返回使得 <code>word1</code> 和 <code>word2</code> <strong>相同</strong> 所需的 <strong>最小步数</strong> 。</p><p><strong>每步</strong> 可以删除任意一个字符串中的一个字符。</p><p><code>word1</code> 和 <code>word2</code> 只包含小写英文字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求计算将两个字符串变得相同的最少删除次数，而这两个字符串最后被删除的结果，其实就是它们的最长公共子序列。</p>',15),q=u(`<p>那么，要计算删除的次数，就可以通过最长公共子序列的长度推导出来：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">minDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> s1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 计算最长公共子序列的长度</span>
	<span class="token keyword">const</span> lcs <span class="token operator">=</span> <span class="token function">longestCommonSubsequence</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> m <span class="token operator">-</span> lcs <span class="token operator">+</span> n <span class="token operator">-</span> lcs<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,3),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minDistance"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("word1"),n("span",{class:"token punctuation"},","),s(" word2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" word1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" word2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" j")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" j "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("word1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" word2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 计算最长公共子序列的长度"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" lcs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" m "),n("span",{class:"token operator"},"-"),s(" lcs "),n("span",{class:"token operator"},"+"),s(" n "),n("span",{class:"token operator"},"-"),s(" lcs"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minDistance"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("word1"),n("span",{class:"token punctuation"},","),s(" word2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" word1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" word2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("word1"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" word2"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" lcs "),n("span",{class:"token operator"},"="),s(" dp"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" m "),n("span",{class:"token operator"},"-"),s(" lcs "),n("span",{class:"token operator"},"+"),s(" n "),n("span",{class:"token operator"},"-"),s(" lcs"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),D=n("td",{style:{"text-align":"center"}},"72",-1),L=n("td",{style:{"text-align":"left"}},"编辑距离",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},B=n("code",null,"字符串",-1),M=n("code",null,"动态规划",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/edit-distance",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/edit-distance",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"712",-1),G=n("td",{style:{"text-align":"left"}},"两个字符串的最小ASCII删除和",-1),Y={style:{"text-align":"center"}},z={style:{"text-align":"left"}},F=n("code",null,"字符串",-1),H=n("code",null,"动态规划",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"1143",-1),X=n("td",{style:{"text-align":"left"}},"最长公共子序列",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},nn=n("code",null,"字符串",-1),sn=n("code",null,"动态规划",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"2937",-1),pn=n("td",{style:{"text-align":"left"}},"使三个字符串相等",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},rn=n("code",null,"字符串",-1),kn=n("td",{style:{"text-align":"center"}},"🟢",-1),dn={style:{"text-align":"center"}},mn={href:"https://leetcode.cn/problems/make-three-strings-equal",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/make-three-strings-equal",target:"_blank",rel:"noopener noreferrer"};function _n(bn,gn){const r=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),m("div",null,[b,n("p",null,[s("🟠 "),t(r,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",v,[w,t(o)]),s(),n("a",y,[x,t(o)])]),j,n("p",null,[s("在 "),t(e,{to:"/problem/1143.html"},{default:a(()=>[s("第 1143 题")]),_:1}),s(" 中，我们计算了两个字符串的最长公共子序列的长度（有递归和 DP table 两种方法）。")]),q,t(i,{id:"83",data:[{id:"动态规划-递归"},{id:"动态规划-DP table"}]},{title0:a(({value:p,isActive:l})=>[s("动态规划-递归")]),title1:a(({value:p,isActive:l})=>[s("动态规划-DP table")]),tab0:a(({value:p,isActive:l})=>[A]),tab1:a(({value:p,isActive:l})=>[C]),_:1}),E,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[D,L,n("td",N,[t(e,{to:"/problem/0072.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/string.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[M]),_:1})]),P,n("td",S,[n("a",T,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[R,G,n("td",Y,[t(e,{to:"/problem/0712.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",z,[t(e,{to:"/tag/string.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[H]),_:1})]),J,n("td",K,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])]),n("tr",null,[W,X,n("td",Z,[t(e,{to:"/problem/1143.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",$,[t(e,{to:"/tag/string.html"},{default:a(()=>[nn]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[sn]),_:1})]),tn,n("td",an,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])]),n("tr",null,[cn,pn,ln,n("td",un,[t(e,{to:"/tag/string.html"},{default:a(()=>[rn]),_:1})]),kn,n("td",dn,[n("a",mn,[s("🀄️"),t(o)]),s(),n("a",hn,[s("🔗"),t(o)])])])])])])}const vn=k(_,[["render",_n],["__file","0583.html.vue"]]);export{vn as default};
