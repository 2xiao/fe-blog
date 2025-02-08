import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as _}from"./app-totCBmv-.js";const m={},g=n("h1",{id:"_242-有效的字母异位词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_242-有效的字母异位词","aria-hidden":"true"},"#"),t(" 242. 有效的字母异位词")],-1),f=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),y=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/valid-anagram",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),A=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> <em>is an anagram of</em> <code>s</code><em>, and</em> <code>false</code> <em>otherwise</em>.</p><p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;anagram&quot;, t = &quot;nagaram&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;rat&quot;, t = &quot;car&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, t.length &lt;= 5 * 10^4</code></li><li><code>s</code> and <code>t</code> consist of lowercase English letters.</li></ul><p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个字符串 <code>s</code> 和 <code>t</code> ，编写一个函数来判断 <code>t</code> 是否是 <code>s</code> 的字母异位词。</p><p>注意：若 <code>s</code> 和 <code>t</code> 中每个字符出现的次数都相同，则称 <code>s</code> 和 <code>t</code> 互为字母异位词。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><p>异位词这类问题的关键在于，如何迅速判断两个字符串是异位词，主要考察数据编码和哈希表的使用。</p><p>可以使用哈希表，扫描字符串 <code>s</code> ，把 <code>s</code> 中的每个字符出现的次数存在哈希表中，再扫字符串 <code>t</code>，每出现一个字母就把哈希表中对应的字符减一，异位词中字符出现的次数肯定都是一样的，最终判断表中是否全部为 <code>0</code> 即可，有非 <code>0</code> 的数就输出 <code>false</code> 。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要循环 <code>n</code> 次。</li><li><strong>空间复杂度</strong>: <code>O(k)</code>，其中 <code>k</code> 是字符串 <code>s</code> 中不同的字符数量，使用哈希表存储不同字符的出现频率。</li></ul><hr><h3 id="思路二-编码-哈希表" tabindex="-1"><a class="header-anchor" href="#思路二-编码-哈希表" aria-hidden="true">#</a> 思路二：编码+哈希表</h3><p>可以尝试找到一种编码方法，使得字母异位词的编码相同，找到这种编码方式之后，就可以用一个哈希表存储编码相同的所有异位词，得到最终的答案。</p><p>对字符串排序可以是一种编码方案，如果是异位词，排序后就变成一样的了，但是这样时间复杂度略高，且会修改原始数据。</p><p>更好的编码方案是利用每个字符的出现次数进行编码，也就是下面的解法代码。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要循环 <code>n</code> 次。</li><li><strong>空间复杂度</strong>: <code>O(26)</code>，使用了一个长度为 <code>26</code> 的辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isAnagram"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" map "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" val "),n("span",{class:"token operator"},"="),t(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},","),t(" val "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token keyword"},"of"),t(" t"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" val "),n("span",{class:"token operator"},"="),t(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),t("j"),n("span",{class:"token punctuation"},","),t(" val "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" i "),n("span",{class:"token operator"},"!="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isAnagram"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"encode"),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token function"},"encode"),n("span",{class:"token punctuation"},"("),t("t"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"encode"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"str"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"26"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" str"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" code "),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charCodeAt"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res`),n("span",{class:"token punctuation"},"["),t("code"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'_'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"49",-1),N=n("td",{style:{"text-align":"left"}},"字母异位词分组",-1),V={style:{"text-align":"center"}},I={style:{"text-align":"left"}},B=n("code",null,"数组",-1),T=n("code",null,"哈希表",-1),R=n("code",null,"字符串",-1),F=n("code",null,"1+",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"266",-1),W=n("td",{style:{"text-align":"left"}},"回文排列 🔒",-1),z=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},J=n("code",null,"位运算",-1),K=n("code",null,"哈希表",-1),P=n("code",null,"字符串",-1),Q=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"438",-1),nn=n("td",{style:{"text-align":"left"}},"找到字符串中所有字母异位词",-1),tn={style:{"text-align":"center"}},sn={style:{"text-align":"left"}},en=n("code",null,"哈希表",-1),an=n("code",null,"字符串",-1),on=n("code",null,"滑动窗口",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),ln={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"},un=n("td",{style:{"text-align":"center"}},"2273",-1),dn=n("td",{style:{"text-align":"left"}},"移除字母异位词后的结果数组",-1),kn={style:{"text-align":"center"}},hn={style:{"text-align":"left"}},_n=n("code",null,"数组",-1),mn=n("code",null,"哈希表",-1),gn=n("code",null,"字符串",-1),fn=n("code",null,"1+",-1),bn=n("td",{style:{"text-align":"center"}},"🟢",-1),yn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/find-resultant-array-after-removing-anagrams",target:"_blank",rel:"noopener noreferrer"};function wn(qn,An){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[g,n("p",null,[t("🟢 "),s(i,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[y]),_:1}),t("  🔗 "),n("a",v,[x,s(o)]),t(),n("a",w,[q,s(o)])]),A,s(p,{id:"122",data:[{id:"哈希表"},{id:"编码+哈希表"}]},{title0:e(({value:l,isActive:r})=>[t("哈希表")]),title1:e(({value:l,isActive:r})=>[t("编码+哈希表")]),tab0:e(({value:l,isActive:r})=>[j]),tab1:e(({value:l,isActive:r})=>[C]),_:1}),E,h(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[L,N,n("td",V,[s(a,{to:"/problem/0049.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[R]),_:1}),t(),F]),G,n("td",H,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",S,[t("🔗"),s(o)])])]),n("tr",null,[U,W,z,n("td",D,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[P]),_:1})]),Q,n("td",X,[n("a",Y,[t("🀄️"),s(o)]),t(),n("a",Z,[t("🔗"),s(o)])])]),n("tr",null,[$,nn,n("td",tn,[s(a,{to:"/problem/0438.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",sn,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[on]),_:1})]),cn,n("td",ln,[n("a",rn,[t("🀄️"),s(o)]),t(),n("a",pn,[t("🔗"),s(o)])])]),n("tr",null,[un,dn,n("td",kn,[s(a,{to:"/problem/2273.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",hn,[s(a,{to:"/tag/array.html"},{default:e(()=>[_n]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[mn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[gn]),_:1}),t(),fn]),bn,n("td",yn,[n("a",vn,[t("🀄️"),s(o)]),t(),n("a",xn,[t("🔗"),s(o)])])])])])])}const Cn=u(m,[["render",wn],["__file","0242.html.vue"]]);export{Cn as default};
