import{_ as u,r,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app-BBnmDgJV.js";const _={},b=n("h1",{id:"_209-长度最小的子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_209-长度最小的子数组","aria-hidden":"true"},"#"),t(" 209. 长度最小的子数组")],-1),g=n("code",null,"数组",-1),f=n("code",null,"二分查找",-1),y=n("code",null,"前缀和",-1),v=n("code",null,"滑动窗口",-1),x={href:"https://leetcode.cn/problems/minimum-size-subarray-sum",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/minimum-size-subarray-sum",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return <em>the <strong>minimal length</strong> of a __subarray</em> <em>whose sum is greater than or equal to</em> <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: target = 7, nums = [2,3,1,2,4,3]</p><p>Output: 2</p><p>Explanation: The subarray [4,3] has the minimal length under the problem constraint.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: target = 4, nums = [1,4,4]</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: target = 11, nums = [1,1,1,1,1,1,1,1]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= target &lt;= 10^9</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个含有 <code>n</code> 个正整数的数组和一个正整数 <code>target</code> 。</p><p>找出该数组中满足其总和大于等于 <code>target</code> 的长度最小的 <strong>子数组</strong> ，并返回其长度。如果不存在符合条件的子数组，返回 <code>0</code> 。</p><p>子数组是数组中连续的非空元素序列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-滑动窗口" tabindex="-1"><a class="header-anchor" href="#思路一-滑动窗口" aria-hidden="true">#</a> 思路一：滑动窗口</h3><ol><li>初始化变量：使用两个指针（或滑动窗口）来遍历数组；</li><li>扩大窗口：移动右指针，向右扩大求和；</li><li>缩小窗口：一旦窗口总和大于等于 <code>target</code>，就移动左指针缩小窗口；</li><li>更新最小长度：过程中更新最小长度；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是数组的长度；</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路二-暴力查找" tabindex="-1"><a class="header-anchor" href="#思路二-暴力查找" aria-hidden="true">#</a> 思路二：暴力查找</h3><ol><li>初始化子数组的最小长度为无穷大；</li><li>枚举数组 <code>nums</code> 中的每个下标作为子数组的开始下标；</li><li>对于每个开始下标 <code>i</code>，需要找到大于或等于 <code>i</code> 的最小下标 <code>j</code>，使得从 <code>nums[i]</code> 到 <code>nums[j]</code> 的元素和大于或等于 <code>s</code>；</li><li>更新子数组的最小长度（此时子数组的长度是 <code>j−i+1</code>）；</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，需要遍历每个下标作为子数组的开始下标，对于每个开始下标，需要遍历其后面的下标；</li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路三-二分查找" tabindex="-1"><a class="header-anchor" href="#思路三-二分查找" aria-hidden="true">#</a> 思路三：二分查找</h3><ol><li>暴力查找的时间复杂度是 <code>O(n^2)</code>，因为在确定每个子数组的开始下标后，找到长度最小的子数组需要 <code>O(n)</code> 的时间。如果使用二分查找，则可以将时间优化到 <code>O(logn)</code>。</li><li>为了使用二分查找，需要额外创建一个数组 sums 用于存储数组 nums 的前缀和，其中 <code>sums[i]</code> 表示从 <code>nums[0]</code> 到 <code>nums[i−1]</code> 的元素和。</li><li>得到前缀和之后，对于每个开始下标 <code>i</code>，可通过二分查找得到大于或等于 <code>i</code> 的最小下标 <code>bound</code>，使得 <code>sums[bound]−sums[i−1]≥s</code>，并更新子数组的最小长度（此时子数组的长度是 <code>bound−(i−1)</code>）。</li></ol><p>因为这道题保证了数组中每个元素都为正，所以前缀和一定是递增的，这一点保证了二分的正确性。如果题目没有说明数组中每个元素都为正，这里就不能使用二分来查找这个位置了。</p><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(nlogn)</code>，遍历每个下标的时间复杂度是 <code>O(n)</code>，二分查找的时间复杂度是 <code>O(logn)</code>，因此总时间复杂度是 <code>O(nlogn)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，额外创建数组 <code>sums</code> 存储前缀和。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minSubArrayLen"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("target"),n("span",{class:"token punctuation"},","),t(" nums")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		sum `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		minLength `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" right "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" right "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" right"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		sum `),n("span",{class:"token operator"},"+="),t(" nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},">="),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			minLength `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("minLength"),n("span",{class:"token punctuation"},","),t(" right "),n("span",{class:"token operator"},"-"),t(" left "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			sum `),n("span",{class:"token operator"},"-="),t(" nums"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" minLength "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"Infinity"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},":"),t(" minLength"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minSubArrayLen"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("target"),n("span",{class:"token punctuation"},","),t(" nums")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" sum "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			sum `),n("span",{class:"token operator"},"+="),t(" nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},">="),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" j "),n("span",{class:"token operator"},"-"),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"Infinity"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},":"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"target"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minSubArrayLen"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("target"),n("span",{class:"token punctuation"},","),t(" nums")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},","),t(`
		sum `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"Infinity"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		sum`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" sum"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" newTarget "),n("span",{class:"token operator"},"="),t(" target "),n("span",{class:"token operator"},"+"),t(" sum"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" bound "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"binarySearch"),n("span",{class:"token punctuation"},"("),t("sum"),n("span",{class:"token punctuation"},","),t(" newTarget"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},","),t(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("bound "),n("span",{class:"token operator"},"!="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" bound "),n("span",{class:"token operator"},"-"),t(" i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"Infinity"),t(),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},":"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"binarySearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("arr"),n("span",{class:"token punctuation"},","),t(" target"),n("span",{class:"token punctuation"},","),t(" l"),n("span",{class:"token punctuation"},","),t(" r")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},"["),t("r"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("l "),n("span",{class:"token operator"},"<"),t(" r"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("l "),n("span",{class:"token operator"},"+"),t(" r"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">>"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},"["),t("mid"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			l `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			r `),n("span",{class:"token operator"},"="),t(" mid"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" arr"),n("span",{class:"token punctuation"},"["),t("l"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},">="),t(" target "),n("span",{class:"token operator"},"?"),t(" l "),n("span",{class:"token operator"},":"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),z=n("td",{style:{"text-align":"center"}},"76",-1),S=n("td",{style:{"text-align":"left"}},"最小覆盖子串",-1),T={style:{"text-align":"center"}},N={style:{"text-align":"left"}},V=n("code",null,"哈希表",-1),M=n("code",null,"字符串",-1),B=n("code",null,"滑动窗口",-1),K=n("td",{style:{"text-align":"center"}},"🔴",-1),R={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"325",-1),H=n("td",{style:{"text-align":"left"}},"和等于 k 的最长子数组长度 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"哈希表",-1),W=n("code",null,"前缀和",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"718",-1),tn=n("td",{style:{"text-align":"left"}},"最长重复子数组",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},an=n("code",null,"数组",-1),on=n("code",null,"二分查找",-1),ln=n("code",null,"动态规划",-1),cn=n("code",null,"3+",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/maximum-length-of-repeated-subarray",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/maximum-length-of-repeated-subarray",target:"_blank",rel:"noopener noreferrer"},kn=n("td",{style:{"text-align":"center"}},"1658",-1),mn=n("td",{style:{"text-align":"left"}},"将 x 减到 0 的最小操作数",-1),hn=n("td",{style:{"text-align":"center"}},null,-1),_n={style:{"text-align":"left"}},bn=n("code",null,"数组",-1),gn=n("code",null,"哈希表",-1),fn=n("code",null,"二分查找",-1),yn=n("code",null,"2+",-1),vn=n("td",{style:{"text-align":"center"}},"🟠",-1),xn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},jn={href:"https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero",target:"_blank",rel:"noopener noreferrer"},On=n("td",{style:{"text-align":"center"}},"2090",-1),In=n("td",{style:{"text-align":"left"}},"半径为 k 的子数组平均值",-1),Ln=n("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},An=n("code",null,"数组",-1),Cn=n("code",null,"滑动窗口",-1),En=n("td",{style:{"text-align":"center"}},"🟠",-1),zn={style:{"text-align":"center"}},Sn={href:"https://leetcode.cn/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://leetcode.com/problems/k-radius-subarray-averages",target:"_blank",rel:"noopener noreferrer"},Nn=n("td",{style:{"text-align":"center"}},"2233",-1),Vn=n("td",{style:{"text-align":"left"}},"K 次增加后的最大乘积",-1),Mn=n("td",{style:{"text-align":"center"}},null,-1),Bn={style:{"text-align":"left"}},Kn=n("code",null,"贪心",-1),Rn=n("code",null,"数组",-1),Fn=n("code",null,"堆（优先队列）",-1),Gn=n("td",{style:{"text-align":"center"}},"🟠",-1),Dn={style:{"text-align":"center"}},Hn={href:"https://leetcode.cn/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://leetcode.com/problems/maximum-product-after-k-increments",target:"_blank",rel:"noopener noreferrer"},Pn=n("td",{style:{"text-align":"center"}},"3095",-1),Qn=n("td",{style:{"text-align":"left"}},"或值至少 K 的最短子数组 I",-1),Un=n("td",{style:{"text-align":"center"}},null,-1),Wn={style:{"text-align":"left"}},Xn=n("code",null,"位运算",-1),Yn=n("code",null,"数组",-1),Zn=n("code",null,"滑动窗口",-1),$n=n("td",{style:{"text-align":"center"}},"🟢",-1),nt={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/shortest-subarray-with-or-at-least-k-i",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i",target:"_blank",rel:"noopener noreferrer"};function et(at,ot){const i=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon"),p=r("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",x,[w,s(o)]),t(),n("a",j,[O,s(o)])]),I,s(p,{id:"209",data:[{id:"滑动窗口"},{id:"暴力查找"},{id:"二分查找"}]},{title0:e(({value:l,isActive:c})=>[t("滑动窗口")]),title1:e(({value:l,isActive:c})=>[t("暴力查找")]),title2:e(({value:l,isActive:c})=>[t("二分查找")]),tab0:e(({value:l,isActive:c})=>[L]),tab1:e(({value:l,isActive:c})=>[q]),tab2:e(({value:l,isActive:c})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[z,S,n("td",T,[s(a,{to:"/problem/0076.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[B]),_:1})]),K,n("td",R,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",G,[t("🔗"),s(o)])])]),n("tr",null,[D,H,J,n("td",P,[s(a,{to:"/tag/array.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[W]),_:1})]),X,n("td",Y,[n("a",Z,[t("🀄️"),s(o)]),t(),n("a",$,[t("🔗"),s(o)])])]),n("tr",null,[nn,tn,sn,n("td",en,[s(a,{to:"/tag/array.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[on]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[ln]),_:1}),t(),cn]),rn,n("td",pn,[n("a",un,[t("🀄️"),s(o)]),t(),n("a",dn,[t("🔗"),s(o)])])]),n("tr",null,[kn,mn,hn,n("td",_n,[s(a,{to:"/tag/array.html"},{default:e(()=>[bn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[gn]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[fn]),_:1}),t(),yn]),vn,n("td",xn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",jn,[t("🔗"),s(o)])])]),n("tr",null,[On,In,Ln,n("td",qn,[s(a,{to:"/tag/array.html"},{default:e(()=>[An]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[Cn]),_:1})]),En,n("td",zn,[n("a",Sn,[t("🀄️"),s(o)]),t(),n("a",Tn,[t("🔗"),s(o)])])]),n("tr",null,[Nn,Vn,Mn,n("td",Bn,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[Kn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Rn]),_:1}),t(),s(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[Fn]),_:1})]),Gn,n("td",Dn,[n("a",Hn,[t("🀄️"),s(o)]),t(),n("a",Jn,[t("🔗"),s(o)])])]),n("tr",null,[Pn,Qn,Un,n("td",Wn,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Xn]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Yn]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[Zn]),_:1})]),$n,n("td",nt,[n("a",tt,[t("🀄️"),s(o)]),t(),n("a",st,[t("🔗"),s(o)])])])])])])}const ct=u(_,[["render",et],["__file","0209.html.vue"]]);export{ct as default};
