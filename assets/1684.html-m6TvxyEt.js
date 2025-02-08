import{_ as d,r as c,o as p,c as k,a as t,b as n,d as o,w as s,f as h,e as q}from"./app-totCBmv-.js";const g={},b=t("h1",{id:"_1684-统计一致字符串的数目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1684-统计一致字符串的数目","aria-hidden":"true"},"#"),n(" 1684. 统计一致字符串的数目")],-1),m=t("code",null,"位运算",-1),_=t("code",null,"数组",-1),w=t("code",null,"哈希表",-1),f=t("code",null,"字符串",-1),v=t("code",null,"计数",-1),y={href:"https://leetcode.cn/problems/count-the-number-of-consistent-strings",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),C={href:"https://leetcode.com/problems/count-the-number-of-consistent-strings",target:"_blank",rel:"noopener noreferrer"},S=t("code",null,"LeetCode",-1),E=q('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>allowed</code> consisting of <strong>distinct</strong> characters and an array of strings <code>words</code>. A string is <strong>consistent</strong> if all characters in the string appear in the string <code>allowed</code>.</p><p>Return <em>the number of <strong>consistent</strong> strings in the array</em> <code>words</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: allowed = &quot;ab&quot;, words = [&quot;ad&quot;,&quot;bd&quot;,&quot;aaab&quot;,&quot;baa&quot;,&quot;badab&quot;]</p><p>Output: 2</p><p>Explanation: Strings &quot;aaab&quot; and &quot;baa&quot; are consistent since they only contain characters &#39;a&#39; and &#39;b&#39;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: allowed = &quot;abc&quot;, words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;ab&quot;,&quot;ac&quot;,&quot;bc&quot;,&quot;abc&quot;]</p><p>Output: 7</p><p>Explanation: All strings are consistent.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: allowed = &quot;cad&quot;, words = [&quot;cc&quot;,&quot;acd&quot;,&quot;b&quot;,&quot;ba&quot;,&quot;bac&quot;,&quot;bad&quot;,&quot;ac&quot;,&quot;d&quot;]</p><p>Output: 4</p><p>Explanation: Strings &quot;cc&quot;, &quot;acd&quot;, &quot;ac&quot;, and &quot;d&quot; are consistent.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 10^4</code></li><li><code>1 &lt;= allowed.length &lt;= 26</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li>The characters in <code>allowed</code> are <strong>distinct</strong>.</li><li><code>words[i]</code> and <code>allowed</code> contain only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由不同字符组成的字符串 <code>allowed</code> 和一个字符串数组 <code>words</code> 。如果一个字符串的每一个字符都在 <code>allowed</code> 中，就称这个字符串是 <strong>一致字符串</strong> 。</p><p>请你返回 <code>words</code> 数组中 <strong>一致字符串</strong> 的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> allowed = &quot;ab&quot;, words = [&quot;ad&quot;,&quot;bd&quot;,&quot;aaab&quot;,&quot;baa&quot;,&quot;badab&quot;]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 字符串 &quot;aaab&quot; 和 &quot;baa&quot; 都是一致字符串，因为它们只包含字符 &#39;a&#39; 和 &#39;b&#39; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> allowed = &quot;abc&quot;, words = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;ab&quot;,&quot;ac&quot;,&quot;bc&quot;,&quot;abc&quot;]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 所有字符串都是一致的。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> allowed = &quot;cad&quot;, words = [&quot;cc&quot;,&quot;acd&quot;,&quot;b&quot;,&quot;ba&quot;,&quot;bac&quot;,&quot;bad&quot;,&quot;ac&quot;,&quot;d&quot;]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 字符串 &quot;cc&quot;，&quot;acd&quot;，&quot;ac&quot; 和 &quot;d&quot; 是一致字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 10^4</code></li><li><code>1 &lt;= allowed.length &lt;= 26</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li><code>allowed</code> 中的字符 <strong>互不相同</strong> 。</li><li><code>words[i]</code> 和 <code>allowed</code> 只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>存储允许字符</strong>：将 <code>allowed</code> 中的字符存储到一个 <code>Set</code> 数据结构中，以便快速判断某字符是否被允许。</li><li><strong>遍历数组 <code>words</code></strong>： <ul><li>对于每个单词 <code>word</code>，检查其每个字符是否都在 <code>Set</code> 中。</li><li>如果有任意一个字符不在 <code>Set</code> 中，则该单词不是一致字符串。</li><li>如果检查通过，则计数器加一。</li></ul></li><li><strong>返回结果</strong>：遍历完成后，返回计数器值。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(a + m * l)</code>， <ul><li>初始化 <code>Set</code>：<code>O(a)</code>，其中 <code>a</code> 是 <code>allowed</code> 的长度。</li><li>遍历 <code>words</code>： <ul><li>外层循环遍历每个单词，<code>O(m)</code>，其中 <code>m</code> 是单词数组的长度。</li><li>内层循环检查单词中的字符，<code>O(l)</code>，其中 <code>l</code> 是单词的平均长度。</li></ul></li><li>总复杂度为 <code>O(a + m * l)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(a)</code>，其中 <code>a</code> 是 <code>allowed</code> 的长度，使用了一个 <code>Set</code> 来存储 <code>allowed</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),O=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("string"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"allowed"),n(`
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"words"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"countConsistentStrings"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("allowed"),t("span",{class:"token punctuation"},","),n(" words")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" allowChar "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Set"),t("span",{class:"token punctuation"},"("),n("allowed"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"split"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" count "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" word "),t("span",{class:"token keyword"},"of"),n(" words"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" consistent "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" char "),t("span",{class:"token keyword"},"of"),n(" word"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("allowChar"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"has"),t("span",{class:"token punctuation"},"("),n("char"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
				consistent `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},";"),n(`
				`),t("span",{class:"token keyword"},"break"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("consistent"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			count`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" count"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"countConsistentStrings"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("allowed"),t("span",{class:"token punctuation"},","),n(" words")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" allowChar "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Set"),t("span",{class:"token punctuation"},"("),n("allowed"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" words"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"filter"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"word"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token operator"},"..."),n("word"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"every"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"char"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(" allowChar"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"has"),t("span",{class:"token punctuation"},"("),n("char"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(`
		`),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),A=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),I=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"2506",-1),N=t("td",{style:{"text-align":"left"}},"统计相似字符串对的数目",-1),V=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},B=t("code",null,"位运算",-1),R=t("code",null,"数组",-1),Y=t("code",null,"哈希表",-1),z=t("code",null,"2+",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/count-pairs-of-similar-strings",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/count-pairs-of-similar-strings",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const r=c("font"),a=c("RouterLink"),e=c("ExternalLinkIcon"),i=c("CodeTabs");return p(),k("div",null,[b,t("p",null,[n("🟢 "),o(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),o(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[m]),_:1}),n(),o(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),n(),o(a,{to:"/tag/hash-table.html"},{default:s(()=>[w]),_:1}),n(),o(a,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),n(),o(a,{to:"/tag/counting.html"},{default:s(()=>[v]),_:1}),n("  🔗 "),t("a",y,[x,o(e)]),n(),t("a",C,[S,o(e)])]),E,o(i,{id:"252",data:[{id:"遍历"},{id:"内置函数"}]},{title0:s(({value:l,isActive:u})=>[n("遍历")]),title1:s(({value:l,isActive:u})=>[n("内置函数")]),tab0:s(({value:l,isActive:u})=>[O]),tab1:s(({value:l,isActive:u})=>[j]),_:1}),A,h(" prettier-ignore "),t("table",null,[I,t("tbody",null,[t("tr",null,[L,N,V,t("td",T,[o(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[B]),_:1}),n(),o(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),n(),o(a,{to:"/tag/hash-table.html"},{default:s(()=>[Y]),_:1}),n(),z]),D,t("td",F,[t("a",G,[n("🀄️"),o(e)]),n(),t("a",H,[n("🔗"),o(e)])])])])])])}const Q=d(g,[["render",J],["__file","1684.html.vue"]]);export{Q as default};
