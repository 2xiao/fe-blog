import{_ as p,r as c,o as d,c as k,a as n,b as e,d as t,w as s,f as m,e as h}from"./app-r0ql_Osa.js";const b={},_=n("h1",{id:"_167-两数之和-ii-输入有序数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_167-两数之和-ii-输入有序数组","aria-hidden":"true"},"#"),e(" 167. 两数之和 II - 输入有序数组")],-1),g=n("code",null,"数组",-1),f=n("code",null,"双指针",-1),x=n("code",null,"二分查找",-1),y={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),O=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong> , find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index1]</code> and <code>numbers[index2]</code> where <code>1 &lt;= index1 &lt; index2 &lt; numbers.length</code>.</p><p>Return <em>the indices of the two numbers,</em><code>index1</code> <em>and</em> <code>index2</code> _, <strong>added by one</strong> as an integer array _<code>[index1, index2]</code> <em>of length 2.</em></p><p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p><p>Your solution must use only constant extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: numbers = [ <em>2</em> , <em>7</em> ,11,15], target = 9</p><p>Output: [1,2]</p><p>Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: numbers = [ <em>2</em> ,3, <em>4</em> ], target = 6</p><p>Output: [1,3]</p><p>Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: numbers = [ <em>-1</em> , <em>0</em> ], target = -1</p><p>Output: [1,2]</p><p>Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= numbers.length &lt;= 3 * 10^4</code></li><li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li><li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.</li><li><code>-1000 &lt;= target &lt;= 1000</code></li><li>The tests are generated such that there is <strong>exactly one solution</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <code>1</code> 开始的整数数组 <code>numbers</code> ，该数组已按 <strong>非递减顺序排列</strong> ，请你从数组中找出满足相加之和等于目标数 <code>target</code> 的两个数。如果设这两个数分别是 <code>numbers[index1]</code> 和 <code>numbers[index2]</code> ，则 <code>1 &lt;= index1 &lt; index2 &lt;= numbers.length</code> 。</p><p>以长度为 <code>2</code> 的整数数组 <code>[index1, index2]</code> 的形式返回这两个整数的下标 <code>index1</code> 和 <code>index2</code>。</p><p>你可以假设每个输入 <strong>只对应唯一的答案</strong> ，而且你 <strong>不可以</strong> 重复使用相同的元素。</p><p>你所设计的解决方案必须只使用常量级的额外空间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双指针-对撞指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针-对撞指针" aria-hidden="true">#</a> 思路一：双指针（对撞指针）</h3><ol><li><strong>数组有序性</strong>：题目给定的数组是有序的，因此可以利用数组的有序性来减少遍历次数。</li><li><strong>双指针的思想</strong>： <ul><li>初始化两个指针，一个从数组的起始位置 <code>i = 0</code>，一个从数组的末尾位置 <code>j = numbers.length - 1</code>。</li><li>然后将这两个指针所指的元素相加，比较其和与目标 <code>target</code> 的关系： <ul><li>如果两数之和正好等于 <code>target</code>，则返回这两个指针的索引值（注意题目要求返回的是 1-based 索引，所以需要加 1）。</li><li>如果和小于 <code>target</code>，说明需要更大的数，左指针向右移动一位（<code>i++</code>）。</li><li>如果和大于 <code>target</code>，说明需要更小的数，右指针向左移动一位（<code>j--</code>）。</li></ul></li></ul></li><li><strong>终止条件</strong>：指针相遇时退出循环。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，由于只需要一次遍历整个数组（每个元素最多被遍历一次），所以时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了几个额外的指针变量，没有使用其他额外的存储空间。</li></ul><h3 id="思路二-哈希表" tabindex="-1"><a class="header-anchor" href="#思路二-哈希表" aria-hidden="true">#</a> 思路二：哈希表</h3><p>这一解法不要求数组是有序的，可以处理任意无序数组。</p><ul><li>遍历数组，同时用一个哈希表 <code>obj</code> 来记录已经遍历过的数字及其索引。</li><li>对于每个遍历到的数字 <code>numbers[i]</code>，计算 <code>target - numbers[i]</code> 的值，称之为 <code>another</code>。</li><li>然后检查 <code>another</code> 是否已经在哈希表中存在： <ul><li>如果存在，说明已经找到了一组符合条件的数字，返回它们的索引值。（注意题目要求返回的是 1-based 索引，所以需要加 1）。</li><li>如果不存在，则将当前数字 <code>numbers[i]</code> 和它的索引 <code>i</code> 存入哈希表中。</li></ul></li></ul><p>哈希表查找时间复杂度为 <code>O(1)</code>，因此可以通过这种方法快速找到目标和。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历一次数组，时间复杂度为 <code>O(n)</code>，在遍历的过程中，哈希表的查找和插入操作的时间复杂度都是 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于需要用哈希表来存储已经遍历过的数字及其索引，哈希表的空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',30),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法一 这一题可以利用数组有序的特性，使用对撞指针"),e(`
`),n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"numbers"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"target"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"twoSum"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("numbers"),n("span",{class:"token punctuation"},","),e(" target")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" j "),n("span",{class:"token operator"},"="),e(" numbers"),n("span",{class:"token punctuation"},"."),e("length "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("i "),n("span",{class:"token operator"},"<"),e(" j"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("numbers"),n("span",{class:"token punctuation"},"["),e("i"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"+"),e(" numbers"),n("span",{class:"token punctuation"},"["),e("j"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"==="),e(" target"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			`),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token punctuation"},"["),e("i "),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),e(" j "),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("numbers"),n("span",{class:"token punctuation"},"["),e("i"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"+"),e(" numbers"),n("span",{class:"token punctuation"},"["),e("j"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"<"),e(" target"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token punctuation"},"{"),e(`
			j`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法二 不管数组是否有序，空间复杂度比上一种解法要多 O(n)"),e(`
`),n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"numbers"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"target"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"twoSum"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("numbers"),n("span",{class:"token punctuation"},","),e(" target")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" obj "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" numbers"),n("span",{class:"token punctuation"},"."),e("length"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" another "),n("span",{class:"token operator"},"="),e(" target "),n("span",{class:"token operator"},"-"),e(" numbers"),n("span",{class:"token punctuation"},"["),e("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("another "),n("span",{class:"token keyword"},"in"),e(" obj"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			`),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token punctuation"},"["),e("obj"),n("span",{class:"token punctuation"},"["),e("another"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),e(" i "),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
		obj`),n("span",{class:"token punctuation"},"["),e("numbers"),n("span",{class:"token punctuation"},"["),e("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(" i"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1",-1),L=n("td",{style:{"text-align":"left"}},"两数之和",-1),V={style:{"text-align":"center"}},N={style:{"text-align":"left"}},A=n("code",null,"数组",-1),B=n("code",null,"哈希表",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"653",-1),K=n("td",{style:{"text-align":"left"}},"两数之和 IV - 输入二叉搜索树",-1),M={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=n("code",null,"树",-1),F=n("code",null,"深度优先搜索",-1),H=n("code",null,"广度优先搜索",-1),J=n("code",null,"4+",-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"1099",-1),$=n("td",{style:{"text-align":"left"}},"小于 K 的两数之和 🔒",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},tn=n("code",null,"数组",-1),sn=n("code",null,"双指针",-1),an=n("code",null,"二分查找",-1),on=n("code",null,"1+",-1),cn=n("td",{style:{"text-align":"center"}},"🟢",-1),ln={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"};function pn(dn,kn){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[_,n("p",null,[e("🟠 "),t(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[x]),_:1}),e("  🔗 "),n("a",y,[v,t(o)]),e(),n("a",w,[j,t(o)])]),O,t(u,{id:"231",data:[{id:"对撞指针"},{id:"哈希表"}]},{title0:s(({value:l,isActive:r})=>[e("对撞指针")]),title1:s(({value:l,isActive:r})=>[e("哈希表")]),tab0:s(({value:l,isActive:r})=>[T]),tab1:s(({value:l,isActive:r})=>[E]),_:1}),I,m(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[q,L,n("td",V,[t(a,{to:"/problem/0001.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",N,[t(a,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[B]),_:1})]),R,n("td",S,[n("a",W,[e("🀄️"),t(o)]),e(),n("a",Y,[e("🔗"),t(o)])])]),n("tr",null,[G,K,n("td",M,[t(a,{to:"/problem/0653.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",z,[t(a,{to:"/tag/tree.html"},{default:s(()=>[D]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[F]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[H]),_:1}),e(),J]),P,n("td",Q,[n("a",U,[e("🀄️"),t(o)]),e(),n("a",X,[e("🔗"),t(o)])])]),n("tr",null,[Z,$,nn,n("td",en,[t(a,{to:"/tag/array.html"},{default:s(()=>[tn]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[sn]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[an]),_:1}),e(),on]),cn,n("td",ln,[n("a",rn,[e("🀄️"),t(o)]),e(),n("a",un,[e("🔗"),t(o)])])])])])])}const hn=p(b,[["render",pn],["__file","0167.html.vue"]]);export{hn as default};
