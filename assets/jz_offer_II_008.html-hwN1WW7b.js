import{_ as k,r as l,o as d,c as m,a as n,b as s,d as t,w as a,e as p}from"./app-9CeBk-uV.js";const b={},h=n("h1",{id:"_8-和大于等于-target-的最短子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-和大于等于-target-的最短子数组","aria-hidden":"true"},"#"),s(" 8. 和大于等于 target 的最短子数组")],-1),v=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),f=n("code",null,"前缀和",-1),_=n("code",null,"滑动窗口",-1),y={href:"https://leetcode.cn/problems/2VG8Kg",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个含有 <code>n</code> 个正整数的数组和一个正整数 <code>target</code>。</p><p>找出该数组中满足其和 <code>≥ target</code> 的长度最小的 <strong>连续子数组</strong> <code>[numsl, numsl+1, ..., numsr-1,numsr]</code> ，并返回其长度。 如果不存在符合条件的子数组，返回 <code>0</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> target = 7, nums = [2,3,1,2,4,3]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 子数组 [4,3] 是该条件下的长度最小的子数组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> target = 4, nums = [1,4,4]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> target = 11, nums = [1,1,1,1,1,1,1,1]</p><p><strong>输出：</strong> 0</p></blockquote><p>提示：</p><ul><li><code>1 &lt;= target &lt;= 10^9</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^5</code></li></ul><p>进阶：</p><ul><li>如果你已经实现 <code>O(n)</code> 时间复杂度的解法, 请尝试设计一个 <code>O(n log(n))</code> 时间复杂度的解法。</li></ul>',13),j={class:"hint-container warning"},O=n("p",{class:"hint-container-title"},"注意",-1),L=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-滑动窗口" tabindex="-1"><a class="header-anchor" href="#思路一-滑动窗口" aria-hidden="true">#</a> 思路一：滑动窗口</h3><ol><li>初始化变量：使用两个指针（或滑动窗口）来遍历数组；</li><li>扩大窗口：移动右指针，向右扩大求和；</li><li>缩小窗口：一旦窗口总和大于等于 <code>target</code>，就移动左指针缩小窗口；</li><li>更新最小长度：过程中更新最小长度；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是数组的长度；</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路二-暴力查找" tabindex="-1"><a class="header-anchor" href="#思路二-暴力查找" aria-hidden="true">#</a> 思路二：暴力查找</h3><ol><li>初始化子数组的最小长度为无穷大；</li><li>枚举数组 <code>nums</code> 中的每个下标作为子数组的开始下标；</li><li>对于每个开始下标 <code>i</code>，需要找到大于或等于 <code>i</code> 的最小下标 <code>j</code>，使得从 <code>nums[i]</code> 到 <code>nums[j]</code> 的元素和大于或等于 <code>s</code>；</li><li>更新子数组的最小长度（此时子数组的长度是 <code>j−i+1</code>）；</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，需要遍历每个下标作为子数组的开始下标，对于每个开始下标，需要遍历其后面的下标；</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路三-二分查找" tabindex="-1"><a class="header-anchor" href="#思路三-二分查找" aria-hidden="true">#</a> 思路三：二分查找</h3><ol><li>暴力查找的时间复杂度是 <code>O(n^2)</code>，因为在确定每个子数组的开始下标后，找到长度最小的子数组需要 <code>O(n)</code> 的时间。如果使用二分查找，则可以将时间优化到 <code>O(logn)</code>。</li><li>为了使用二分查找，需要额外创建一个数组 sums 用于存储数组 nums 的前缀和，其中 <code>sums[i]</code> 表示从 <code>nums[0]</code> 到 <code>nums[i−1]</code> 的元素和。</li><li>得到前缀和之后，对于每个开始下标 <code>i</code>，可通过二分查找得到大于或等于 <code>i</code> 的最小下标 <code>bound</code>，使得 <code>sums[bound]−sums[i−1]≥s</code>，并更新子数组的最小长度（此时子数组的长度是 <code>bound−(i−1)</code>）。</li></ol><p>因为这道题保证了数组中每个元素都为正，所以前缀和一定是递增的，这一点保证了二分的正确性。如果题目没有说明数组中每个元素都为正，这里就不能使用二分来查找这个位置了。</p><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(nlogn)</code>，遍历每个下标的时间复杂度是 <code>O(n)</code>，二分查找的时间复杂度是 <code>O(logn)</code>，因此总时间复杂度是 <code>O(nlogn)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，额外创建数组 <code>sums</code> 存储前缀和。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',17),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minSubArrayLen"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" nums")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		sum `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		minLength `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" right "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" right "),n("span",{class:"token operator"},"<"),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" right"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sum `),n("span",{class:"token operator"},"+="),s(" nums"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},">="),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			minLength `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("minLength"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"-"),s(" left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			sum `),n("span",{class:"token operator"},"-="),s(" nums"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" minLength "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"Infinity"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(" minLength"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minSubArrayLen"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" nums")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},","),s(`
		res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" sum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			sum `),n("span",{class:"token operator"},"+="),s(" nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("sum "),n("span",{class:"token operator"},">="),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				res `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"Infinity"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minSubArrayLen"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" nums")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},","),s(`
		sum `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sum`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" sum"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" newTarget "),n("span",{class:"token operator"},"="),s(" target "),n("span",{class:"token operator"},"+"),s(" sum"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" bound "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"binarySearch"),n("span",{class:"token punctuation"},"("),s("sum"),n("span",{class:"token punctuation"},","),s(" newTarget"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},","),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("bound "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" bound "),n("span",{class:"token operator"},"-"),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"Infinity"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"binarySearch"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr"),n("span",{class:"token punctuation"},","),s(" target"),n("span",{class:"token punctuation"},","),s(" l"),n("span",{class:"token punctuation"},","),s(" r")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("r"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("l "),n("span",{class:"token operator"},"<"),s(" r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" mid "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("l "),n("span",{class:"token operator"},"+"),s(" r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			l `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			r `),n("span",{class:"token operator"},"="),s(" mid"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},"["),s("l"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">="),s(" target "),n("span",{class:"token operator"},"?"),s(" l "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function S(C,T){const u=l("font"),e=l("RouterLink"),r=l("ExternalLinkIcon"),i=l("CodeTabs");return d(),m("div",null,[h,n("p",null,[s("🟠 "),t(u,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,t(r)])]),x,n("div",j,[O,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0209.html"},{default:a(()=>[s("第 209 题")]),_:1}),s(" 相同。")])]),L,t(i,{id:"212",data:[{id:"滑动窗口"},{id:"暴力查找"},{id:"二分查找"}]},{title0:a(({value:o,isActive:c})=>[s("滑动窗口")]),title1:a(({value:o,isActive:c})=>[s("暴力查找")]),title2:a(({value:o,isActive:c})=>[s("二分查找")]),tab0:a(({value:o,isActive:c})=>[I]),tab1:a(({value:o,isActive:c})=>[A]),tab2:a(({value:o,isActive:c})=>[q]),_:1})])}const M=k(b,[["render",S],["__file","jz_offer_II_008.html.vue"]]);export{M as default};
