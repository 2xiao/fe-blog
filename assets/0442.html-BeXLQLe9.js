import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-9Xw5divW.js";const _={},b=n("h1",{id:"_442-数组中重复的数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_442-数组中重复的数据","aria-hidden":"true"},"#"),t(" 442. 数组中重复的数据")],-1),g=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),v={href:"https://leetcode.cn/problems/find-all-duplicates-in-an-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/find-all-duplicates-in-an-array",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),O=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of length <code>n</code> where all the integers of <code>nums</code> are in the range <code>[1, n]</code> and each integer appears <strong>once</strong> or <strong>twice</strong> , return <em>an array of all the integers that appears <strong>twice</strong></em>.</p><p>You must write an algorithm that runs in <code>O(n) </code>time and uses only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,3,2,7,8,2,3,1]</p><p>Output: [2,3]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,2]</p><p>Output: [1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1]</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= n</code></li><li>Each element in <code>nums</code> appears <strong>once</strong> or <strong>twice</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，其中 <code>nums</code> 的所有整数都在范围 <code>[1, n]</code> 内，且每个整数出现 <strong>一次</strong> 或 <strong>两次</strong> 。请你找出所有出现 <strong>两次</strong> 的整数，并以数组形式返回。</p><p>你必须设计并实现一个时间复杂度为 <code>O(n)</code> 且仅使用常量额外空间的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求在不使用额外空间和时间复杂度 <code>O(n)</code> 的情况下解决问题。由于 <code>1 &lt;= nums[i] &lt;= n</code>，可以通过修改原数组的方式来标记出现过的元素。</p><h3 id="思路一-索引取反" tabindex="-1"><a class="header-anchor" href="#思路一-索引取反" aria-hidden="true">#</a> 思路一：索引取反</h3><p>具体的步骤如下：</p><ol><li>遍历数组，对于每个元素 <code>nums[i]</code>，将其对应的索引处的元素取反。</li><li>当访问到某个元素 <code>nums[j]</code> 时，如果 <code>nums[j]</code> 已经是负数，说明之前已经访问过，表示 <code>j+1</code> 是重复出现的元素。</li><li>将找到的重复元素添加到结果数组中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外的空间。</li></ul><hr><h3 id="思路二-原地哈希" tabindex="-1"><a class="header-anchor" href="#思路二-原地哈希" aria-hidden="true">#</a> 思路二：原地哈希</h3><p>原地哈希的意思是利用数组的索引来存储元素的存在性。具体来说，将每个值 <code>x</code> 放到数组的索引 <code>x-1</code> 处（即 <code>nums[x-1]</code>），如果 <code>x</code> 的值在 <code>[1, n]</code> 范围内。这样做的前提是，数组中只有正整数。</p><ul><li><p><strong>遍历数组</strong>：</p><ul><li>首先遍历数组，将每个有效的正整数放到正确的位置（即将 <code>x</code> 放到 <code>nums[x-1]</code>）。</li><li>对于每个值 <code>x</code>，如果 <code>1 ≤ x ≤ n</code>，并且 <code>nums[x-1]</code> 不是 <code>x</code>，则交换 <code>nums[i]</code> 和 <code>nums[x-1]</code>，直到 <code>nums[i]</code> 在正确的位置。</li></ul></li><li><p><strong>第二次遍历</strong>：</p><ul><li>再次遍历数组，找到所有 <code>nums[i]</code> 不等于 <code>i + 1</code> 的位置，那么 <code>nums[i]</code> 就是重复的数。</li></ul></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，数组只遍历了两次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findDuplicates"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"in"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			nums`),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"-"),t("nums"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findDuplicates"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 将每个数放到对应的位置"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!=="),t(" nums"),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 交换 nums[i] 和 nums[nums[i] - 1]"),t(`
			`),n("span",{class:"token keyword"},"let"),t(" temp "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			nums`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("temp "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			nums`),n("span",{class:"token punctuation"},"["),t("temp "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" temp"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 查找没有放在对应位置的正整数，即为重复的数"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!=="),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"448",-1),L=n("td",{style:{"text-align":"left"}},"找到所有数组中消失的数字",-1),N=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},A=n("code",null,"数组",-1),B=n("code",null,"哈希表",-1),T=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2615",-1),S=n("td",{style:{"text-align":"left"}},"等值距离和",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},F=n("code",null,"数组",-1),H=n("code",null,"哈希表",-1),J=n("code",null,"前缀和",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/sum-of-distances",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/sum-of-distances",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"3289",-1),X=n("td",{style:{"text-align":"left"}},"数字小镇中的捣蛋鬼",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),tn=n("code",null,"哈希表",-1),sn=n("code",null,"数学",-1),en=n("td",{style:{"text-align":"center"}},"🟢",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/the-two-sneaky-numbers-of-digitville",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville",target:"_blank",rel:"noopener noreferrer"};function ln(un,pn){const u=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(u,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",v,[x,s(o)]),t(),n("a",y,[w,s(o)])]),O,s(p,{id:"182",data:[{id:"索引取反"},{id:"原地哈希"}]},{title0:e(({value:l,isActive:i})=>[t("索引取反")]),title1:e(({value:l,isActive:i})=>[t("原地哈希")]),tab0:e(({value:l,isActive:i})=>[j]),tab1:e(({value:l,isActive:i})=>[C]),_:1}),E,m(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[I,L,N,n("td",V,[s(a,{to:"/tag/array.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[B]),_:1})]),T,n("td",D,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[G,S,Y,n("td",z,[s(a,{to:"/tag/array.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[H]),_:1}),t(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[J]),_:1})]),K,n("td",P,[n("a",Q,[t("🀄️"),s(o)]),t(),n("a",U,[t("🔗"),s(o)])])]),n("tr",null,[W,X,Z,n("td",$,[s(a,{to:"/tag/array.html"},{default:e(()=>[nn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[tn]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[sn]),_:1})]),en,n("td",an,[n("a",on,[t("🀄️"),s(o)]),t(),n("a",cn,[t("🔗"),s(o)])])])])])])}const dn=r(_,[["render",ln],["__file","0442.html.vue"]]);export{dn as default};
