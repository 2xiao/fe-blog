import{_ as r,r as l,o as k,c as d,a as n,d as t,b as s,w as a,f as h,e as m}from"./app-ynO5B_DP.js";const _={},b={id:"_239-滑动窗口最大值",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_239-滑动窗口最大值","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"队列",-1),y=n("code",null,"数组",-1),w=n("code",null,"滑动窗口",-1),x=n("code",null,"单调队列",-1),q=n("code",null,"堆（优先队列）",-1),O={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"LeetCode",-1),E=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p><p>Return <em>the max sliding window</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,-1,-3,5,3,6,7], k = 3</p><p>Output: [3,3,5,5,6,7]</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Window position                Max
---------------               -----
[1 3  -1] -3   5  3  6  7       3
1 [3  -1  -3]  5  3  6  7       3
1  3 [-1  -3   5] 3  6  7       5
1  3  -1 [-3   5  3] 6  7       5
1  3  -1  -3  [5  3  6] 7       6
1  3  -1  -3   5 [3  6  7]      7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1], k = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，有一个大小为 <code>k</code> 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 <code>k</code> 个数字。滑动窗口每次只向右移动一位。</p><p>返回 <strong>滑动窗口中的最大值</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双端队列" tabindex="-1"><a class="header-anchor" href="#思路一-双端队列" aria-hidden="true">#</a> 思路一：双端队列</h3><p>双端队列（Deque，全称 Double Ended Queue）是一种可以在两端进行插入和删除操作的数据结构。相比于普通的队列（只能在一端插入，在另一端删除），双端队列更加灵活，适用于一些特殊的场景。在 JavaScript 中，双端队列可以使用数组来模拟。</p><ol><li>遍历数组：每次移动滑动窗口时，对双端队列进行更新：</li></ol><ul><li>如果队列头部的元素已经不在当前窗口中（即索引小于 <code>i - k + 1</code>），将其移除。</li><li>在队列尾部，移除所有小于当前元素的值，因为它们不可能成为当前或之后窗口的最大值。</li><li>将当前元素的索引加入队列。</li></ul><ol start="2"><li>获取最大值：对于每一个窗口，队列的前端始终保存当前窗口的最大值的索引。</li></ol><p>注意：</p><ul><li>存储数组元素的索引：不会直接存储数组的值，而是存储元素的索引，以便通过索引访问具体的值，并通过索引判断某个元素是否还在当前滑动窗口中。</li><li>保持队列中的元素单调递减：为了保证队列的前端始终是窗口的最大值，会从队列的后端移除所有小于当前元素的索引。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。每个元素被加入和移除队列至多各一次，因此总的操作次数为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，队列的大小在最坏情况下为 <code>k</code>。</li></ul><hr><h3 id="思路二-堆" tabindex="-1"><a class="header-anchor" href="#思路二-堆" aria-hidden="true">#</a> 思路二：堆</h3><p>大顶堆性质：堆是一棵二叉树，每个节点都满足：父节点的值大于左右子节点的值，堆顶元素是当前堆中的最大值。</p><p>使用大顶堆来保存滑动窗口中的 <code>k</code> 个数，每次窗口移动时，移除堆中不在当前窗口的元素，并将新元素入堆，堆顶元素就是滑动窗口中的最大值。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n × (k + log k))</code>，这在最坏情况下比使用双端队列的 <code>O(n)</code> 时间复杂度要高，尤其当 <code>k</code> 接近 <code>n</code> 时，复杂度变为 <code>O(n × k)</code>。</p><ul><li>插入操作需要 <code>O(log k)</code>。</li><li>删除操作的复杂度为 <code>O(k)</code>，因为需要遍历堆查找需要移除的元素，然后再执行 <code>O(log k)</code> 的调整操作。</li><li>对于数组中的每个元素，滑动窗口移动时，我们需要进行一次 <strong>插入</strong> 和一次 <strong>删除</strong> 操作，数组长度为 <code>n</code>，因此，最坏情况下总时间复杂度为 <code>O(n * (k + log k))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，堆中的最大元素个数为 <code>k</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,29),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSlidingWindow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" deque "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" deque"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" i "),n("span",{class:"token operator"},"-"),t(" k "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" nums"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},">="),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSlidingWindow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" maxHeap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"MaxHeap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" k"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("maxHeap"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(" k"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(" k"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("maxHeap"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"class"),t(),n("span",{class:"token class-name"},"MaxHeap"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" parent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				i `),n("span",{class:"token operator"},"="),t(" parent"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			right `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
			min `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" right"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("min "),n("span",{class:"token operator"},"!=="),t(" i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),D=n("td",{style:{"text-align":"center"}},"76",-1),V={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},A={href:"/problem/0076",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"left"}},B=n("code",null,"哈希表",-1),R=n("code",null,"字符串",-1),T=n("code",null,"滑动窗口",-1),W={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"155",-1),Y={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/min-stack",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},K={href:"/problem/0155",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"left"}},F=n("code",null,"栈",-1),G=n("code",null,"设计",-1),P={style:{"text-align":"left"}},X=n("td",{style:{"text-align":"center"}},"159",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"哈希表",-1),an=n("code",null,"字符串",-1),en=n("code",null,"滑动窗口",-1),on={style:{"text-align":"left"}},cn=n("td",{style:{"text-align":"center"}},"265",-1),ln={style:{"text-align":"left"}},pn={href:"https://leetcode.com/problems/paint-house-ii",target:"_blank",rel:"noopener noreferrer"},un=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},kn=n("code",null,"数组",-1),dn=n("code",null,"动态规划",-1),hn={style:{"text-align":"left"}},mn=n("td",{style:{"text-align":"center"}},"1696",-1),_n={style:{"text-align":"left"}},bn={href:"https://leetcode.com/problems/jump-game-vi",target:"_blank",rel:"noopener noreferrer"},fn=n("td",{style:{"text-align":"center"}},null,-1),gn={style:{"text-align":"left"}},vn=n("code",null,"队列",-1),yn=n("code",null,"数组",-1),wn=n("code",null,"动态规划",-1),xn=n("code",null,"2+",-1),qn={style:{"text-align":"left"}},On=n("td",{style:{"text-align":"center"}},"2398",-1),Hn={style:{"text-align":"left"}},En={href:"https://leetcode.com/problems/maximum-number-of-robots-within-budget",target:"_blank",rel:"noopener noreferrer"},Mn=n("td",{style:{"text-align":"center"}},null,-1),jn={style:{"text-align":"left"}},Cn=n("code",null,"队列",-1),In=n("code",null,"数组",-1),Dn=n("code",null,"二分查找",-1),Vn=n("code",null,"4+",-1),Ln={style:{"text-align":"left"}},Nn=n("td",{style:{"text-align":"center"}},"2517",-1),An={style:{"text-align":"left"}},Sn={href:"https://leetcode.com/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},Bn=n("td",{style:{"text-align":"center"}},null,-1),Rn={style:{"text-align":"left"}},Tn=n("code",null,"贪心",-1),Wn=n("code",null,"数组",-1),Un=n("code",null,"二分查找",-1),Yn=n("code",null,"1+",-1),zn={style:{"text-align":"left"}},Jn=n("td",{style:{"text-align":"center"}},"2530",-1),Kn={style:{"text-align":"left"}},Qn={href:"https://leetcode.com/problems/maximal-score-after-applying-k-operations",target:"_blank",rel:"noopener noreferrer"},Fn={style:{"text-align":"center"}},Gn={href:"/problem/2530",target:"_blank",rel:"noopener noreferrer"},Pn={style:{"text-align":"left"}},Xn=n("code",null,"贪心",-1),Zn=n("code",null,"数组",-1),$n=n("code",null,"堆（优先队列）",-1),nt={style:{"text-align":"left"}};function tt(st,at){const o=l("ExternalLinkIcon"),c=l("font"),e=l("RouterLink"),i=l("CodeTabs");return k(),d("div",null,[n("h1",b,[f,t(),n("a",g,[t("239. 滑动窗口最大值"),s(o)])]),n("p",null,[t("🔴 "),s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(e,{to:"/outline/tag/queue.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[w]),_:1}),t(),s(e,{to:"/outline/tag/monotonic-queue.html"},{default:a(()=>[x]),_:1}),t(),s(e,{to:"/outline/tag/heap-priority-queue.html"},{default:a(()=>[q]),_:1}),t("  🔗 "),n("a",O,[H,s(o)])]),E,s(i,{id:"185",data:[{id:"双端队列"},{id:"堆"}]},{title0:a(({value:p,isActive:u})=>[t("双端队列")]),title1:a(({value:p,isActive:u})=>[t("堆")]),tab0:a(({value:p,isActive:u})=>[M]),tab1:a(({value:p,isActive:u})=>[j]),_:1}),C,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[D,n("td",V,[n("a",L,[t("最小覆盖子串"),s(o)])]),n("td",N,[n("a",A,[t("[✓]"),s(o)])]),n("td",S,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[R]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[T]),_:1})]),n("td",W,[s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[U,n("td",Y,[n("a",z,[t("最小栈"),s(o)])]),n("td",J,[n("a",K,[t("[✓]"),s(o)])]),n("td",Q,[s(e,{to:"/outline/tag/stack.html"},{default:a(()=>[F]),_:1}),t(),s(e,{to:"/outline/tag/design.html"},{default:a(()=>[G]),_:1})]),n("td",P,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[X,n("td",Z,[n("a",$,[t("至多包含两个不同字符的最长子串"),s(o)])]),nn,n("td",tn,[s(e,{to:"/outline/tag/hash-table.html"},{default:a(()=>[sn]),_:1}),t(),s(e,{to:"/outline/tag/string.html"},{default:a(()=>[an]),_:1}),t(),s(e,{to:"/outline/tag/sliding-window.html"},{default:a(()=>[en]),_:1})]),n("td",on,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[cn,n("td",ln,[n("a",pn,[t("粉刷房子 II"),s(o)])]),un,n("td",rn,[s(e,{to:"/outline/tag/array.html"},{default:a(()=>[kn]),_:1}),t(),s(e,{to:"/outline/tag/dynamic-programming.html"},{default:a(()=>[dn]),_:1})]),n("td",hn,[s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[mn,n("td",_n,[n("a",bn,[t("跳跃游戏 VI"),s(o)])]),fn,n("td",gn,[s(e,{to:"/outline/tag/queue.html"},{default:a(()=>[vn]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[yn]),_:1}),t(),s(e,{to:"/outline/tag/dynamic-programming.html"},{default:a(()=>[wn]),_:1}),t(),xn]),n("td",qn,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[On,n("td",Hn,[n("a",En,[t("预算内的最多机器人数目"),s(o)])]),Mn,n("td",jn,[s(e,{to:"/outline/tag/queue.html"},{default:a(()=>[Cn]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[In]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[Dn]),_:1}),t(),Vn]),n("td",Ln,[s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})])]),n("tr",null,[Nn,n("td",An,[n("a",Sn,[t("礼盒的最大甜蜜度"),s(o)])]),Bn,n("td",Rn,[s(e,{to:"/outline/tag/greedy.html"},{default:a(()=>[Tn]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[Wn]),_:1}),t(),s(e,{to:"/outline/tag/binary-search.html"},{default:a(()=>[Un]),_:1}),t(),Yn]),n("td",zn,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[Jn,n("td",Kn,[n("a",Qn,[t("执行 K 次操作后的最大分数"),s(o)])]),n("td",Fn,[n("a",Gn,[t("[✓]"),s(o)])]),n("td",Pn,[s(e,{to:"/outline/tag/greedy.html"},{default:a(()=>[Xn]),_:1}),t(),s(e,{to:"/outline/tag/array.html"},{default:a(()=>[Zn]),_:1}),t(),s(e,{to:"/outline/tag/heap-priority-queue.html"},{default:a(()=>[$n]),_:1})]),n("td",nt,[s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const ot=r(_,[["render",tt],["__file","0239.html.vue"]]);export{ot as default};
