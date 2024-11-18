import{_ as p,r as c,o as u,c as k,a as e,b as n,d as t,w as s,f as m,e as h}from"./app-5LzGvT4H.js";const _={},b=e("h1",{id:"_137-只出现一次的数字-ii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_137-只出现一次的数字-ii","aria-hidden":"true"},"#"),n(" 137. 只出现一次的数字 II")],-1),g=e("code",null,"位运算",-1),f=e("code",null,"数组",-1),v={href:"https://leetcode.cn/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/single-number-ii",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> where every element appears <strong>three times</strong> except for one, which appears <strong>exactly once</strong>. <em>Find the single element and return it</em>.</p><p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,2,3,2]</p><p>Output: 3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,0,1,0,1,99]</p><p>Output: 99</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li>Each element in <code>nums</code> appears exactly <strong>three times</strong> except for one element which appears <strong>once</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，除某个元素仅出现 <strong>一次</strong> 外，其余每个元素都恰出现 <strong>三次</strong> 。请你找出并返回那个只出现了一次的元素。</p><p>你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-位运算" tabindex="-1"><a class="header-anchor" href="#思路一-位运算" aria-hidden="true">#</a> 思路一：位运算</h3><ol><li>使用两个变量 <code>ones</code> 和 <code>twos</code> 来分别记录当前位中出现 1 次和 2 次的数字，初始化为 <code>0</code>；</li><li>遍历数组中的每一个数字，更新 <code>ones</code> 和 <code>twos</code> 的状态；</li><li>使用位运算更新 <code>twos</code>，只在 <code>ones</code> 中存在的数字中增加计数，这样可以防止将已经出现 3 次的数字再次计入；</li></ol><ul><li><code>twos |= ones &amp; num</code>: 将 <code>twos</code> 中的位更新为那些同时在 <code>ones</code> 和 <code>num</code> 中为 <code>1</code> 的位；</li><li><code>ones &amp; num</code>: 这部分计算在 <code>ones</code> 和 <code>num</code> 中都为 <code>1</code> 的位，结果是一个新的整数；</li><li><code>twos |=</code>: 这部分是将计算得到的结果与 <code>twos</code> 进行按位或（OR）操作，更新 <code>twos</code> 的值；</li></ul><ol start="4"><li>使用异或运算更新 <code>ones</code>，添加当前数字；</li></ol><ul><li><code>ones ^= num</code>: 任何一个数字异或它自己都等于 <code>0</code> (<code>x ^ x = 0</code>)，出现两次的数字在异或中会被抵消掉；</li></ul><ol start="5"><li><p><code>threes</code> 变量通过 <code>ones &amp; twos</code> 计算得出，表示哪些数字出现了 3 次；</p></li><li><p>使用位清除操作将这些数字从 <code>ones</code> 和 <code>twos</code> 中移除，<code>ones &amp;= ~threes</code>；</p></li></ol><ul><li><code>~threes</code>: 这是 <code>threes</code> 的按位取反（bitwise NOT），将所有的二进制位反转。即，如果 <code>threes</code> 中某个位置是 <code>1</code>，那么 <code>~threes</code> 中该位置就是 <code>0</code>，反之亦然。</li><li><code>ones</code> 中的每一位和 <code>~threes</code> 中的每一位进行按位与（AND）操作。</li><li>如果 <code>threes</code> 中的某一位是 <code>1</code>，那么 <code>~threes</code> 中的对应位是 <code>0</code>，因此 <code>ones</code> 的该位将被置为 <code>0</code>。</li><li>如果 <code>threes</code> 中的某一位是 <code>0</code>，那么 <code>~threes</code> 中的对应位是 <code>1</code>，因此 <code>ones</code> 的该位保持不变。</li></ul><ol start="7"><li>在遍历完成后，<code>ones</code> 中的值就是只出现一次的数字。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，只需遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><hr><h3 id="思路二-位运算" tabindex="-1"><a class="header-anchor" href="#思路二-位运算" aria-hidden="true">#</a> 思路二：位运算</h3><ol><li><strong>位计数</strong>：初始化一个大小为 32 的数组 <code>count</code>（因为整数通常是 32 位的），用来计数每个位上 <code>1</code> 出现的次数；</li><li><strong>遍历</strong>：遍历数组，对于每个数，更新 <code>count</code> 每个位上 1 的个数；</li><li><strong>取模</strong>：对于每个位，如果该位的计数可以被 <code>3</code> 整除，说明该位不是唯一的数的一部分；否则，说明该位是唯一的数的一部分；</li><li><strong>构造结果</strong>：计算结果，根据计数结果构造只出现一次的数；</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析：</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组两次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常量的额外空间来存储计数数组（大小为 32）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),N=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"nums"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"singleNumber"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"nums"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"let"),n(" ones "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},","),n(`
		twos `),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(`

	`),e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"let"),n(" num "),e("span",{class:"token keyword"},"of"),n(" nums"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		`),e("span",{class:"token comment"},"// 更新 twos：只记录在 ones 中已经出现过的数字"),n(`
		twos `),e("span",{class:"token operator"},"|="),n(" ones "),e("span",{class:"token operator"},"&"),n(" num"),e("span",{class:"token punctuation"},";"),n(`

		`),e("span",{class:"token comment"},"// 更新 ones：将当前数字加入 ones"),n(`
		ones `),e("span",{class:"token operator"},"^="),n(" num"),e("span",{class:"token punctuation"},";"),n(`

		`),e("span",{class:"token comment"},"// 将出现 3 次的数字从 ones 和 twos 中移除"),n(`
		`),e("span",{class:"token keyword"},"const"),n(" threes "),e("span",{class:"token operator"},"="),n(" ones "),e("span",{class:"token operator"},"&"),n(" twos"),e("span",{class:"token punctuation"},";"),n(`
		ones `),e("span",{class:"token operator"},"&="),n(),e("span",{class:"token operator"},"~"),n("threes"),e("span",{class:"token punctuation"},";"),n(`
		twos `),e("span",{class:"token operator"},"&="),n(),e("span",{class:"token operator"},"~"),n("threes"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`

	`),e("span",{class:"token keyword"},"return"),n(" ones"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token comment"},"// 结果在 ones 中"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=e("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[n(`/**
 * `),e("span",{class:"token keyword"},"@param"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"}")]),n(),e("span",{class:"token parameter"},"nums"),n(`
 * `),e("span",{class:"token keyword"},"@return"),n(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),n("number"),e("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),e("span",{class:"token keyword"},"var"),n(),e("span",{class:"token function-variable function"},"singleNumber"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"function"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"nums"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
	`),e("span",{class:"token keyword"},"const"),n(" count "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token keyword"},"new"),n(),e("span",{class:"token class-name"},"Array"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"32"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"fill"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),n(`

	`),e("span",{class:"token comment"},"// 统计每个位上1的个数"),n(`
	`),e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),n(" num "),e("span",{class:"token keyword"},"of"),n(" nums"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		`),e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"let"),n(" i "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(" i "),e("span",{class:"token operator"},"<"),n(),e("span",{class:"token number"},"32"),e("span",{class:"token punctuation"},";"),n(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
			count`),e("span",{class:"token punctuation"},"["),n("i"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"+="),n(),e("span",{class:"token punctuation"},"("),n("num "),e("span",{class:"token operator"},">>"),n(" i"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"&"),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},";"),n(),e("span",{class:"token comment"},"// 统计第i位上的1的个数"),n(`
		`),e("span",{class:"token punctuation"},"}"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`

	`),e("span",{class:"token keyword"},"let"),n(" result "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(`
	`),e("span",{class:"token comment"},"// 通过计数结果构造数返回值"),n(`
	`),e("span",{class:"token keyword"},"for"),n(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"let"),n(" i "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},";"),n(" i "),e("span",{class:"token operator"},"<"),n(),e("span",{class:"token number"},"32"),e("span",{class:"token punctuation"},";"),n(" i"),e("span",{class:"token operator"},"++"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
		`),e("span",{class:"token keyword"},"if"),n(),e("span",{class:"token punctuation"},"("),n("count"),e("span",{class:"token punctuation"},"["),n("i"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"%"),n(),e("span",{class:"token number"},"3"),n(),e("span",{class:"token operator"},"!=="),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token punctuation"},"{"),n(`
			result `),e("span",{class:"token operator"},"|="),n(),e("span",{class:"token number"},"1"),n(),e("span",{class:"token operator"},"<<"),n(" i"),e("span",{class:"token punctuation"},";"),n(`
		`),e("span",{class:"token punctuation"},"}"),n(`
	`),e("span",{class:"token punctuation"},"}"),n(`

	`),e("span",{class:"token keyword"},"return"),n(" result"),e("span",{class:"token punctuation"},";"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("h2",{id:"相关题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),j=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),A=e("td",{style:{"text-align":"center"}},"136",-1),E=e("td",{style:{"text-align":"left"}},"只出现一次的数字",-1),L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},q=e("code",null,"位运算",-1),R=e("code",null,"数组",-1),T=e("td",{style:{"text-align":"left"}},"🟢",-1),B={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/single-number",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/single-number",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"260",-1),M=e("td",{style:{"text-align":"left"}},"只出现一次的数字 III",-1),S=e("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=e("code",null,"位运算",-1),z=e("code",null,"数组",-1),H=e("td",{style:{"text-align":"left"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/single-number-iii",target:"_blank",rel:"noopener noreferrer"},Q=e("td",{style:{"text-align":"center"}},"3158",-1),U=e("td",{style:{"text-align":"left"}},"求出出现两次数字的 XOR 值",-1),W=e("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=e("code",null,"位运算",-1),ee=e("code",null,"数组",-1),ne=e("code",null,"哈希表",-1),te=e("td",{style:{"text-align":"left"}},"🟢",-1),se={style:{"text-align":"center"}},oe={href:"https://leetcode.cn/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice",target:"_blank",rel:"noopener noreferrer"};function ce(le,re){const i=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),d=c("CodeTabs");return u(),k("div",null,[b,e("p",null,[n("🟠 "),t(i,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),e("a",v,[y,t(a)]),n(),e("a",x,[w,t(a)])]),I,t(d,{id:"220",data:[{id:"思路一"},{id:"思路二"}]},{title0:s(({value:l,isActive:r})=>[n("思路一")]),title1:s(({value:l,isActive:r})=>[n("思路二")]),tab0:s(({value:l,isActive:r})=>[N]),tab1:s(({value:l,isActive:r})=>[O]),_:1}),C,m(" prettier-ignore "),e("table",null,[j,e("tbody",null,[e("tr",null,[A,E,e("td",L,[t(o,{to:"/problem/0136.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",V,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[q]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[R]),_:1})]),T,e("td",B,[e("a",D,[n("🀄️"),t(a)]),n(),e("a",F,[n("🔗"),t(a)])])]),e("tr",null,[G,M,S,e("td",X,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[Y]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1})]),H,e("td",J,[e("a",K,[n("🀄️"),t(a)]),n(),e("a",P,[n("🔗"),t(a)])])]),e("tr",null,[Q,U,W,e("td",Z,[t(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[$]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[ee]),_:1}),n(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[ne]),_:1})]),te,e("td",se,[e("a",oe,[n("🀄️"),t(a)]),n(),e("a",ae,[n("🔗"),t(a)])])])])])])}const de=p(_,[["render",ce],["__file","0137.html.vue"]]);export{de as default};
