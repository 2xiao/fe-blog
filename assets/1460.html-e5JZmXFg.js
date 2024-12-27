import{_ as i,r as e,o as d,c as k,a as n,b as a,d as s,w as t,e as g}from"./app-fqckLmln.js";const m={},h=n("h1",{id:"_1460-通过翻转子数组使两个数组相等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1460-通过翻转子数组使两个数组相等","aria-hidden":"true"},"#"),a(" 1460. 通过翻转子数组使两个数组相等")],-1),b=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),f=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-subarrays",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=g('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integer arrays of equal length <code>target</code> and <code>arr</code>. In one step, you can select any <strong>non-empty subarray</strong> of <code>arr</code> and reverse it. You are allowed to make any number of steps.</p><p>Return <code>true</code> <em>if you can make</em><code>arr</code> <em>equal to</em><code>target</code> _ or _<code>false</code><em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: target = [1,2,3,4], arr = [2,4,1,3]</p><p>Output: true</p><p>Explanation: You can follow the next steps to convert arr to target:</p><p>1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]</p><p>2- Reverse subarray [4,2], arr becomes [1,2,4,3]</p><p>3- Reverse subarray [4,3], arr becomes [1,2,3,4]</p><p>There are multiple ways to convert arr to target, this is not the only way to do so.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: target = [7], arr = [7]</p><p>Output: true</p><p>Explanation: arr is equal to target without any reverses.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: target = [3,7,9], arr = [3,7,11]</p><p>Output: false</p><p>Explanation: arr does not have value 9 and it can never be converted to target.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>target.length == arr.length</code></li><li><code>1 &lt;= target.length &lt;= 1000</code></li><li><code>1 &lt;= target[i] &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个长度相同的整数数组 <code>target</code> 和 <code>arr</code> 。每一步中，你可以选择 <code>arr</code> 的任意 <strong>非空子数组</strong> 并将它翻转。你可以执行此过程任意次。</p><p><em>如果你能让 <code>arr</code> 变得与 <code>target</code> 相同，返回 <code>true</code>；否则，返回 <code>false</code> 。</em></p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> target = [1,2,3,4], arr = [2,4,1,3]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 你可以按照如下步骤使 arr 变成 target：</p><p>1- 翻转子数组 [2,4,1] ，arr 变成 [1,4,2,3]</p><p>2- 翻转子数组 [4,2] ，arr 变成 [1,2,4,3]</p><p>3- 翻转子数组 [4,3] ，arr 变成 [1,2,3,4]</p><p>上述方法并不是唯一的，还存在多种将 arr 变成 target 的方法。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> target = [7], arr = [7]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> arr 不需要做任何翻转已经与 target 相等。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> target = [3,7,9], arr = [3,7,11]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> arr 没有数字 9 ，所以无论如何也无法变成 target 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>target.length == arr.length</code></li><li><code>1 &lt;= target.length &lt;= 1000</code></li><li><code>1 &lt;= target[i] &lt;= 1000</code></li><li><code>1 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>问题要求判断是否可以通过任意次数组元素的交换使 <code>arr</code> 转换为 <code>target</code>。这种情况等价于检查两个数组中每个数字出现的次数是否完全相同。</p><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><ol><li><p><strong>统计 <code>target</code> 中每个数字的频次</strong>:</p><ul><li>使用一个 <code>Map</code> 来存储数字及其出现的次数。</li></ul></li><li><p><strong>更新频次</strong>:</p><ul><li>遍历 <code>arr</code>，对每个数字对应的计数减 1。</li></ul></li><li><p><strong>验证频次是否平衡</strong>:</p><ul><li>检查 <code>Map</code> 中所有的值是否都为 0，若不是，则两个数组不能通过交换等价。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组长度，遍历 <code>target</code> 和 <code>arr</code>。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，需要存储 <code>Map</code>，占用的空间与数字种类的数量成正比。</li></ul><hr><h3 id="思路二-排序" tabindex="-1"><a class="header-anchor" href="#思路二-排序" aria-hidden="true">#</a> 思路二：排序</h3><p>也可以通过排序的方式实现同样的效果。</p><ul><li>对 <code>target</code> 和 <code>arr</code> 分别进行排序。</li><li>比较排序后的数组转成字符串后，是否相等。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n log n)</code> (排序)</li><li><strong>空间复杂度</strong>: <code>O(1)</code> (排序原地操作)</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[a(`/**
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token parameter"},"target"),a(`
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token parameter"},"arr"),a(`
 * `),n("span",{class:"token keyword"},"@return"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("boolean"),n("span",{class:"token punctuation"},"}")]),a(`
 */`)]),a(`
`),n("span",{class:"token keyword"},"var"),a(),n("span",{class:"token function-variable function"},"canBeEqual"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("target"),n("span",{class:"token punctuation"},","),a(" arr")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
	`),n("span",{class:"token keyword"},"let"),a(" count "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token keyword"},"of"),a(" target"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
		count`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`

	`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" num "),n("span",{class:"token keyword"},"of"),a(" arr"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
		count`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),a("num"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`

	`),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" value "),n("span",{class:"token keyword"},"of"),a(" count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
		`),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("value "),n("span",{class:"token operator"},"!=="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token punctuation"},"}"),a(`
	`),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),a(),n("span",{class:"token function-variable function"},"canBeEqual"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("target"),n("span",{class:"token punctuation"},","),a(" arr")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
	target`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("a"),n("span",{class:"token punctuation"},","),a(" b")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" a "),n("span",{class:"token operator"},"-"),a(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
	arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("a"),n("span",{class:"token punctuation"},","),a(" b")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" a "),n("span",{class:"token operator"},"-"),a(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token keyword"},"return"),a(" target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"==="),a(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(C,I){const p=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon"),u=e("CodeTabs");return d(),k("div",null,[h,n("p",null,[a("🟢 "),s(p,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(o,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),a(),s(o,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),a(),s(o,{to:"/tag/sorting.html"},{default:t(()=>[f]),_:1}),a("  🔗 "),n("a",_,[y,s(l)]),a(),n("a",w,[x,s(l)])]),q,s(u,{id:"281",data:[{id:"哈希表"},{id:"排序"}]},{title0:t(({value:c,isActive:r})=>[a("哈希表")]),title1:t(({value:c,isActive:r})=>[a("排序")]),tab0:t(({value:c,isActive:r})=>[E]),tab1:t(({value:c,isActive:r})=>[j]),_:1})])}const B=i(m,[["render",O],["__file","1460.html.vue"]]);export{B as default};
