import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as _}from"./app-KDJRKGep.js";const m={},b=n("h1",{id:"_215-数组中的第k个最大元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_215-数组中的第k个最大元素","aria-hidden":"true"},"#"),t(" 215. 数组中的第K个最大元素")],-1),g=n("code",null,"数组",-1),f=n("code",null,"分治",-1),y=n("code",null,"快速选择",-1),v=n("code",null,"排序",-1),x=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),K={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),O=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>kth</code> <em>largest element in the array</em>.</p><p>Note that it is the <code>kth</code> largest element in the sorted order, not the <code>kth</code> distinct element.</p><p>Can you solve it without sorting?</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,1,5,6,4], k = 2</p><p>Output: 5</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,3,1,2,4,5,5,6], k = 4</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定整数数组 <code>nums</code> 和整数 <code>k</code>，请返回数组中第 <code>k</code> 个最大的元素。</p><p>请注意，你需要找的是数组排序后的第 <code>k</code> 个最大的元素，而不是第 <code>k</code> 个不同的元素。</p><p>你必须设计并实现时间复杂度为 <code>O(n)</code> 的算法解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-快速选择算法" tabindex="-1"><a class="header-anchor" href="#思路一-快速选择算法" aria-hidden="true">#</a> 思路一：快速选择算法</h3><p>每次选取一个基准元素（类似于快速排序中的划分操作），将数组划分为两部分，然后根据基准元素的位置来确定下一步是在左侧还是右侧进行查找。这样，每次划分都能将问题规模缩小一半。</p><ol><li>选择数组中的一个元素作为基准元素（可以随机选择）。</li><li>根据基准元素将数组划分为两部分，左侧部分的元素大于等于基准元素，右侧部分的元素小于基准元素。</li><li>如果基准元素的位置等于 <code>k</code>，则找到了第 <code>k</code> 个最大的元素；</li><li>如果基准元素的位置小于 <code>k</code>，则在右侧部分递归查找；</li><li>如果基准元素的位置大于 <code>k</code>，则在左侧部分递归查找；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>快速选择的平均时间复杂度为 <code>O(n)</code>。这是因为在每次划分过程中，通常会将数组分成两个大致相等的部分，从而在每一步大约只需要处理一半的元素。</li><li>在最坏情况下，时间复杂度为 <code>O(n²)</code>，例如当数组已经是有序的情况下（如递增或递减），每次划分都只将一个元素放到正确的位置，导致递归的深度达到 <code>n</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为在快速选择中只使用了常量级别的额外空间（只存储了一些变量，没有使用额外的数据结构），但递归调用栈的深度在最坏情况下可能达到 <code>O(n)</code>。</li></ul><hr><h3 id="思路二-小顶堆" tabindex="-1"><a class="header-anchor" href="#思路二-小顶堆" aria-hidden="true">#</a> 思路二：小顶堆</h3><p>针对静态数据，想要在一个包含 <code>n</code> 个数据的数组中，查找前 <code>K</code> 大的数据，可以维护一个大小为 <code>K</code> 的小顶堆：</p><ul><li>顺序遍历数组，从数组中取出取数据与堆顶元素比较；</li><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理，继续遍历数组；</li><li>遍历完数组中的数据之后，堆顶元素就是第 <code>K</code> 大的数</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>(nlogK)</code>，遍历数组需要 <code>O(n)</code> 的时间复杂度，一次堆化操作需要 <code>O(logK)</code> 的时间复杂度，所以最坏情况下，<code>n</code> 个元素都入堆一次，所以时间复杂度就是 <code>O(nlogK)</code> 。</li><li><strong>空间复杂度</strong>: <code>O(K)</code>，使用了一个长度为 <code>K</code> 的数组来存储堆中的元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findKthLargest"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"quickSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("left"),n("span",{class:"token punctuation"},","),t(" right")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},"=="),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},">"),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},","),t(" index "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"partition"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("left"),n("span",{class:"token punctuation"},","),t(" right")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" pivot "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" right"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},">"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" i"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"findKthLargest"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" heap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"add"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"<"),t(" k"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			heap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val "),n("span",{class:"token operator"},">"),t(" heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			heap`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" val"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"heapifyUp"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" parent "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},">"),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				i `),n("span",{class:"token operator"},"="),t(" parent"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"heapifyDown"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" left "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" right "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" min "),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" heap"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("right "),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" heap"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" right"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("min "),n("span",{class:"token operator"},"!=="),t(" i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"324",-1),S=n("td",{style:{"text-align":"left"}},"摆动排序 II",-1),V=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},B=n("code",null,"贪心",-1),D=n("code",null,"数组",-1),T=n("code",null,"分治",-1),M=n("code",null,"2+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/wiggle-sort-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/wiggle-sort-ii",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"347",-1),H=n("td",{style:{"text-align":"left"}},"前 K 个高频元素",-1),J={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),X=n("code",null,"分治",-1),Y=n("code",null,"5+",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/top-k-frequent-elements",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"414",-1),en=n("td",{style:{"text-align":"left"}},"第三大的数",-1),an={style:{"text-align":"center"}},on={style:{"text-align":"left"}},cn=n("code",null,"数组",-1),ln=n("code",null,"排序",-1),pn=n("td",{style:{"text-align":"center"}},"🟢",-1),un={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/third-maximum-number",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/third-maximum-number",target:"_blank",rel:"noopener noreferrer"},kn=n("td",{style:{"text-align":"center"}},"703",-1),hn=n("td",{style:{"text-align":"left"}},"数据流中的第 K 大元素",-1),_n={style:{"text-align":"center"}},mn={style:{"text-align":"left"}},bn=n("code",null,"树",-1),gn=n("code",null,"设计",-1),fn=n("code",null,"二叉搜索树",-1),yn=n("code",null,"3+",-1),vn=n("td",{style:{"text-align":"center"}},"🟢",-1),xn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/kth-largest-element-in-a-stream",target:"_blank",rel:"noopener noreferrer"},qn={href:"https://leetcode.com/problems/kth-largest-element-in-a-stream",target:"_blank",rel:"noopener noreferrer"},Kn=n("td",{style:{"text-align":"center"}},"973",-1),jn=n("td",{style:{"text-align":"left"}},"最接近原点的 K 个点",-1),On={style:{"text-align":"center"}},Cn={style:{"text-align":"left"}},Ln=n("code",null,"几何",-1),In=n("code",null,"数组",-1),Nn=n("code",null,"数学",-1),En=n("code",null,"4+",-1),Sn=n("td",{style:{"text-align":"center"}},"🟠",-1),Vn={style:{"text-align":"center"}},An={href:"https://leetcode.cn/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},Bn={href:"https://leetcode.com/problems/k-closest-points-to-origin",target:"_blank",rel:"noopener noreferrer"},Dn=n("td",{style:{"text-align":"center"}},"1985",-1),Tn=n("td",{style:{"text-align":"left"}},"找出数组中的第 K 大整数",-1),Mn=n("td",{style:{"text-align":"center"}},null,-1),Rn={style:{"text-align":"left"}},Un=n("code",null,"数组",-1),Gn=n("code",null,"字符串",-1),zn=n("code",null,"分治",-1),Fn=n("code",null,"3+",-1),Hn=n("td",{style:{"text-align":"center"}},"🟠",-1),Jn={style:{"text-align":"center"}},Pn={href:"https://leetcode.cn/problems/find-the-kth-largest-integer-in-the-array",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array",target:"_blank",rel:"noopener noreferrer"},Wn=n("td",{style:{"text-align":"center"}},"2099",-1),Xn=n("td",{style:{"text-align":"left"}},"找到和最大的长度为 K 的子序列",-1),Yn={style:{"text-align":"center"}},Zn={style:{"text-align":"left"}},$n=n("code",null,"数组",-1),nt=n("code",null,"哈希表",-1),tt=n("code",null,"排序",-1),st=n("code",null,"1+",-1),et=n("td",{style:{"text-align":"center"}},"🟢",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},lt=n("td",{style:{"text-align":"center"}},"2146",-1),pt=n("td",{style:{"text-align":"left"}},"价格范围内最高排名的 K 样物品",-1),it=n("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},rt=n("code",null,"广度优先搜索",-1),dt=n("code",null,"数组",-1),kt=n("code",null,"矩阵",-1),ht=n("code",null,"2+",-1),_t=n("td",{style:{"text-align":"center"}},"🟠",-1),mt={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/k-highest-ranked-items-within-a-price-range",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range",target:"_blank",rel:"noopener noreferrer"};function ft(yt,vt){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/quickselect.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[x]),_:1}),t("  🔗 "),n("a",w,[q,s(o)]),t(),n("a",K,[j,s(o)])]),O,s(u,{id:"177",data:[{id:"快速选择算法"},{id:"小顶堆"}]},{title0:e(({value:l,isActive:p})=>[t("快速选择算法")]),title1:e(({value:l,isActive:p})=>[t("小顶堆")]),tab0:e(({value:l,isActive:p})=>[C]),tab1:e(({value:l,isActive:p})=>[L]),_:1}),I,h(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[E,S,V,n("td",A,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[T]),_:1}),t(),M]),R,n("td",U,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[F,H,n("td",J,[s(a,{to:"/problem/0347.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",P,[s(a,{to:"/tag/array.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[X]),_:1}),t(),Y]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])]),n("tr",null,[sn,en,n("td",an,[s(a,{to:"/problem/0414.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",on,[s(a,{to:"/tag/array.html"},{default:e(()=>[cn]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[ln]),_:1})]),pn,n("td",un,[n("a",rn,[t("🀄️"),s(o)]),t(),n("a",dn,[t("🔗"),s(o)])])]),n("tr",null,[kn,hn,n("td",_n,[s(a,{to:"/problem/0703.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",mn,[s(a,{to:"/tag/tree.html"},{default:e(()=>[bn]),_:1}),t(),s(a,{to:"/tag/design.html"},{default:e(()=>[gn]),_:1}),t(),s(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[fn]),_:1}),t(),yn]),vn,n("td",xn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",qn,[t("🔗"),s(o)])])]),n("tr",null,[Kn,jn,n("td",On,[s(a,{to:"/problem/0973.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",Cn,[s(a,{to:"/tag/geometry.html"},{default:e(()=>[Ln]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[In]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[Nn]),_:1}),t(),En]),Sn,n("td",Vn,[n("a",An,[t("🀄️"),s(o)]),t(),n("a",Bn,[t("🔗"),s(o)])])]),n("tr",null,[Dn,Tn,Mn,n("td",Rn,[s(a,{to:"/tag/array.html"},{default:e(()=>[Un]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Gn]),_:1}),t(),s(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[zn]),_:1}),t(),Fn]),Hn,n("td",Jn,[n("a",Pn,[t("🀄️"),s(o)]),t(),n("a",Qn,[t("🔗"),s(o)])])]),n("tr",null,[Wn,Xn,n("td",Yn,[s(a,{to:"/problem/2099.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",Zn,[s(a,{to:"/tag/array.html"},{default:e(()=>[$n]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[nt]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[tt]),_:1}),t(),st]),et,n("td",at,[n("a",ot,[t("🀄️"),s(o)]),t(),n("a",ct,[t("🔗"),s(o)])])]),n("tr",null,[lt,pt,it,n("td",ut,[s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[rt]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[dt]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[kt]),_:1}),t(),ht]),_t,n("td",mt,[n("a",bt,[t("🀄️"),s(o)]),t(),n("a",gt,[t("🔗"),s(o)])])])])])])}const wt=r(m,[["render",ft],["__file","0215.html.vue"]]);export{wt as default};
