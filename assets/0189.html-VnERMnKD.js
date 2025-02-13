import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as m}from"./app-MXSjQbID.js";const _={},b=n("h1",{id:"_189-轮转数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_189-轮转数组","aria-hidden":"true"},"#"),t(" 189. 轮转数组")],-1),g=n("code",null,"数组",-1),f=n("code",null,"数学",-1),v=n("code",null,"双指针",-1),y={href:"https://leetcode.cn/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"LeetCode",-1),E=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5,6,7], k = 3</p><p>Output: [5,6,7,1,2,3,4]</p><p>Explanation:</p><p>rotate 1 steps to the right: [7,1,2,3,4,5,6]</p><p>rotate 2 steps to the right: [6,7,1,2,3,4,5]</p><p>rotate 3 steps to the right: [5,6,7,1,2,3,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,-100,3,99], k = 2</p><p>Output: [3,99,-1,-100]</p><p>Explanation:</p><p>rotate 1 steps to the right: [99,-1,-100,3]</p><p>rotate 2 steps to the right: [3,99,-1,-100]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>0 &lt;= k &lt;= 10^5</code></li></ul><p><strong>Follow up:</strong></p><ul><li>Try to come up with as many solutions as you can. There are at least <strong>three</strong> different ways to solve this problem.</li><li>Could you do it in-place with <code>O(1)</code> extra space?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一" tabindex="-1"><a class="header-anchor" href="#思路一" aria-hidden="true">#</a> 思路一</h3><p>使用一个额外的数组，先将原数组拷贝一份，再将下标为 <code>(i + n - k) mod n</code> 的元素移动到 i 的位置即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为给定数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了长度为 <code>n</code> 的额外空间。</li></ul><hr><h3 id="思路二" tabindex="-1"><a class="header-anchor" href="#思路二" aria-hidden="true">#</a> 思路二</h3><p>由于题目要求不能使用额外的空间，所以本题最佳解法不是解法一。翻转最终态是，末尾 <code>k mod n</code> 个元素移动至了数组头部，剩下的元素右移 <code>k mod n</code> 个位置至最尾部。确定了最终态以后再变换就很容易。先将数组中所有元素从头到尾翻转一次，尾部的所有元素都到了头部，然后再将 <code>[0,(k mod n) − 1]</code> 区间内的元素翻转一次，最后再将 <code>[k mod n, n − 1]</code> 区间内的元素翻转一次，即可满足题目要求。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为给定数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',23),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify nums in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"rotate"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	k `),n("span",{class:"token operator"},"="),t(" k "),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("nums"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		nums`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(" n "),n("span",{class:"token operator"},"-"),t(" k"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),t(` Do not return anything, modify nums in-place instead.
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"rotate"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	k `),n("span",{class:"token operator"},"="),t(" k "),n("span",{class:"token operator"},"%"),t(" n"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},","),t(" k"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"reverse"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("arr"),n("span",{class:"token punctuation"},","),t(" start"),n("span",{class:"token punctuation"},","),t(" end")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("end "),n("span",{class:"token operator"},"-"),t(" start"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" temp"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" mid"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		temp `),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("start"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		arr`),n("span",{class:"token punctuation"},"["),t("start"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"["),t("end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		arr`),n("span",{class:"token punctuation"},"["),t("end"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
		start`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		end`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"61",-1),N=n("td",{style:{"text-align":"left"}},"旋转链表",-1),T={style:{"text-align":"center"}},V={style:{"text-align":"left"}},A=n("code",null,"链表",-1),B=n("code",null,"双指针",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/rotate-list",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/rotate-list",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"186",-1),S=n("td",{style:{"text-align":"left"}},"反转字符串中的单词 II 🔒",-1),z=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"双指针",-1),K=n("code",null,"字符串",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/reverse-words-in-a-string-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/reverse-words-in-a-string-ii",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"2607",-1),Y=n("td",{style:{"text-align":"left"}},"使子数组元素和相等",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"数学",-1),sn=n("code",null,"数论",-1),en=n("code",null,"1+",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),on={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/make-k-subarray-sums-equal",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/make-k-subarray-sums-equal",target:"_blank",rel:"noopener noreferrer"};function rn(pn,un){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",w,[C,s(o)])]),E,s(i,{id:"145",data:[{id:"思路一"},{id:"思路二"}]},{title0:e(({value:l,isActive:r})=>[t("思路一")]),title1:e(({value:l,isActive:r})=>[t("思路二")]),tab0:e(({value:l,isActive:r})=>[O]),tab1:e(({value:l,isActive:r})=>[j]),_:1}),q,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[L,N,n("td",T,[s(a,{to:"/problem/0061.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",V,[s(a,{to:"/tag/linked-list.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[B]),_:1})]),D,n("td",R,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",G,[t("🔗"),s(o)])])]),n("tr",null,[M,S,z,n("td",H,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[K]),_:1})]),P,n("td",Q,[n("a",U,[t("🀄️"),s(o)]),t(),n("a",W,[t("🔗"),s(o)])])]),n("tr",null,[X,Y,Z,n("td",$,[s(a,{to:"/tag/array.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/tag/number-theory.html"},{default:e(()=>[sn]),_:1}),t(),en]),an,n("td",on,[n("a",cn,[t("🀄️"),s(o)]),t(),n("a",ln,[t("🔗"),s(o)])])])])])])}const kn=u(_,[["render",rn],["__file","0189.html.vue"]]);export{kn as default};
