import{_ as u,r as l,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as _}from"./app-r0ql_Osa.js";const m={},b=n("h1",{id:"_5-最长回文子串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-最长回文子串","aria-hidden":"true"},"#"),t(" 5. 最长回文子串")],-1),g=n("code",null,"双指针",-1),f=n("code",null,"字符串",-1),y=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),q=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the longest</em> <em>palindromic</em> <em>substring</em> in <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;babad&quot;</p><p>Output: &quot;bab&quot;</p><p>Explanation: &quot;aba&quot; is also a valid answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;cbbd&quot;</p><p>Output: &quot;bb&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consist of only digits and English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，找到 <code>s</code> 中最长的回文子串。</p><p>如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。</p><p><code>s</code> 仅由数字和英文字母组成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-中心扩展法" tabindex="-1"><a class="header-anchor" href="#思路一-中心扩展法" aria-hidden="true">#</a> 思路一：中心扩展法</h3><p>找回文串的难点在于，回文串的的长度可能是奇数也可能是偶数，解决问题的核心是以每个字符或两个相邻字符为中心，用左右指针向两边扩展，判断是否是回文串。遍历所有可能的中心，记录最长的回文串。</p><ul><li><strong>奇数长度的回文串：</strong> 以每个字符为中心，向两边扩展判断回文串。</li><li><strong>偶数长度的回文串：</strong> 以每两个相邻字符的中心向两边扩展判断回文串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路二-动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划" aria-hidden="true">#</a> 思路二：动态规划</h3><p>动态规划法的思想是，利用已知的回文串信息推导出更长的回文串。</p><ul><li><p>定义动态规划数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示字符串 <code>s</code> 从索引 <code>i</code> 到索引 <code>j</code> 是否为回文串。</p></li><li><p>状态转移方程为：</p><ul><li><code>s[i] == s[j] &amp;&amp; dp[i+1][j-1] == true</code> 时，<code>dp[i][j] = true</code></li><li>否则，<code>dp[i][j] = false</code></li></ul></li><li><p>边界条件：</p><ul><li><code>dp[i][i] = true</code></li><li><code>s[i] == s[i+1]</code> 时，<code>dp[i][i+1] = true</code></li></ul></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestPalindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"palindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("i"),n("span",{class:"token punctuation"},","),t(" j")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
			j`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" s1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"palindrome"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" s2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"palindrome"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res `),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(" s1"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"?"),t(" res "),n("span",{class:"token operator"},":"),t(" s1"),n("span",{class:"token punctuation"},";"),t(`
		res `),n("span",{class:"token operator"},"="),t(" res"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(" s2"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"?"),t(" res "),n("span",{class:"token operator"},":"),t(" s2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"longestPalindrome"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" start "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" end "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
			start `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
			end `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 对于长度为 2 的子串，我们在初始化动态规划数组时已经考虑到了，即 dp[i][i+1]。"),t(`
	`),n("span",{class:"token comment"},"// 因此，从长度为 3 的子串开始遍历，直到长度为 n 的子串，逐步填充动态规划数组。"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" len "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" len "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" len"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" j "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"&&"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
				start `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
				end `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"+"),t(" len "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("start"),n("span",{class:"token punctuation"},","),t(" end "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"214",-1),N=n("td",{style:{"text-align":"left"}},"最短回文串",-1),V=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},B=n("code",null,"字符串",-1),T=n("code",null,"字符串匹配",-1),P=n("code",null,"哈希函数",-1),R=n("code",null,"1+",-1),G=n("td",{style:{"text-align":"center"}},"🔴",-1),M={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/shortest-palindrome",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/shortest-palindrome",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"266",-1),F=n("td",{style:{"text-align":"left"}},"回文排列 🔒",-1),H=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"位运算",-1),Q=n("code",null,"哈希表",-1),U=n("code",null,"字符串",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"336",-1),nn=n("td",{style:{"text-align":"left"}},"回文对",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},en=n("code",null,"字典树",-1),an=n("code",null,"数组",-1),on=n("code",null,"哈希表",-1),ln=n("code",null,"1+",-1),cn=n("td",{style:{"text-align":"center"}},"🔴",-1),pn={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"center"}},"516",-1),kn=n("td",{style:{"text-align":"left"}},"最长回文子序列",-1),hn={style:{"text-align":"center"}},_n={style:{"text-align":"left"}},mn=n("code",null,"字符串",-1),bn=n("code",null,"动态规划",-1),gn=n("td",{style:{"text-align":"center"}},"🟠",-1),fn={style:{"text-align":"center"}},yn={href:"https://leetcode.cn/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},xn=n("td",{style:{"text-align":"center"}},"647",-1),wn=n("td",{style:{"text-align":"left"}},"回文子串",-1),jn=n("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},Cn=n("code",null,"双指针",-1),En=n("code",null,"字符串",-1),An=n("code",null,"动态规划",-1),On=n("td",{style:{"text-align":"center"}},"🟠",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/palindromic-substrings",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/palindromic-substrings",target:"_blank",rel:"noopener noreferrer"},In=n("td",{style:{"text-align":"center"}},"2472",-1),Bn=n("td",{style:{"text-align":"left"}},"不重叠回文子字符串的最大数目",-1),Tn=n("td",{style:{"text-align":"center"}},null,-1),Pn={style:{"text-align":"left"}},Rn=n("code",null,"贪心",-1),Gn=n("code",null,"双指针",-1),Mn=n("code",null,"字符串",-1),Sn=n("code",null,"1+",-1),zn=n("td",{style:{"text-align":"center"}},"🔴",-1),Dn={style:{"text-align":"center"}},Fn={href:"https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"},Hn={href:"https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"};function Jn(Kn,Qn){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),r=l("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[y]),_:1}),t("  🔗 "),n("a",v,[x,s(o)]),t(),n("a",w,[j,s(o)])]),q,s(r,{id:"166",data:[{id:"中心扩展法"},{id:"动态规划"}]},{title0:e(({value:c,isActive:p})=>[t("中心扩展法")]),title1:e(({value:c,isActive:p})=>[t("动态规划")]),tab0:e(({value:c,isActive:p})=>[C]),tab1:e(({value:c,isActive:p})=>[E]),_:1}),A,h(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[L,N,V,n("td",I,[s(a,{to:"/tag/string.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/string-matching.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/hash-function.html"},{default:e(()=>[P]),_:1}),t(),R]),G,n("td",M,[n("a",S,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[D,F,H,n("td",J,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[U]),_:1})]),W,n("td",X,[n("a",Y,[t("🀄️"),s(o)]),t(),n("a",Z,[t("🔗"),s(o)])])]),n("tr",null,[$,nn,tn,n("td",sn,[s(a,{to:"/tag/trie.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[on]),_:1}),t(),ln]),cn,n("td",pn,[n("a",rn,[t("🀄️"),s(o)]),t(),n("a",un,[t("🔗"),s(o)])])]),n("tr",null,[dn,kn,n("td",hn,[s(a,{to:"/problem/0516.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",_n,[s(a,{to:"/tag/string.html"},{default:e(()=>[mn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[bn]),_:1})]),gn,n("td",fn,[n("a",yn,[t("🀄️"),s(o)]),t(),n("a",vn,[t("🔗"),s(o)])])]),n("tr",null,[xn,wn,jn,n("td",qn,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[Cn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[En]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[An]),_:1})]),On,n("td",Ln,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])]),n("tr",null,[In,Bn,Tn,n("td",Pn,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[Rn]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[Gn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Mn]),_:1}),t(),Sn]),zn,n("td",Dn,[n("a",Fn,[t("🀄️"),s(o)]),t(),n("a",Hn,[t("🔗"),s(o)])])])])])])}const Wn=u(m,[["render",Jn],["__file","0005.html.vue"]]);export{Wn as default};
