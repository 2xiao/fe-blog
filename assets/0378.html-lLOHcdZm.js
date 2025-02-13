import{_ as k,r as c,o as d,c as m,a as n,b as t,d as s,w as a,f as h,e as i}from"./app-MXSjQbID.js";const b={},_=n("h1",{id:"_378-有序矩阵中第-k-小的元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_378-有序矩阵中第-k-小的元素","aria-hidden":"true"},"#"),t(" 378. 有序矩阵中第 K 小的元素")],-1),f=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),g=n("code",null,"矩阵",-1),y=n("code",null,"排序",-1),x=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"力扣",-1),O={href:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"LeetCode",-1),q=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>n x n</code> <code>matrix</code> where each of the rows and columns is sorted in ascending order, return <em>the</em> <code>kth</code> <em>smallest element in the matrix</em>.</p><p>Note that it is the <code>kth</code> smallest element <strong>in the sorted order</strong> , not the <code>kth</code> <strong>distinct</strong> element.</p><p>You must find a solution with a memory complexity better than <code>O(n^2)</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8</p><p>Output: 13</p><p>Explanation: The elements in the matrix are [1,5,9,10,11,12,13, _ <strong>13</strong>_ ,15], and the 8th smallest number is 13</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[-5]], k = 1</p><p>Output: -5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == matrix.length == matrix[i].length</code></li><li><code>1 &lt;= n &lt;= 300</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li><li>All the rows and columns of <code>matrix</code> are <strong>guaranteed</strong> to be sorted in <strong>non-decreasing order</strong>.</li><li><code>1 &lt;= k &lt;= n^2</code></li></ul><p><strong>Follow up:</strong></p>',11),E=n("li",null,[t("Could you solve the problem with a constant memory (i.e., "),n("code",null,"O(1)"),t(" memory complexity)?")],-1),N=n("code",null,"O(n)",-1),A={href:"http://www.cse.yorku.ca/~andy/pubs/X+Y.pdf",target:"_blank",rel:"noopener noreferrer"},L=i('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>n x n</code> 矩阵 <code>matrix</code> ，其中每行和每列元素均按升序排序，找到矩阵中第 <code>k</code> 小的元素。 请注意，它是 <strong>排序后</strong> 的第 <code>k</code> 小元素，而不是第 <code>k</code> 个 <strong>不同</strong> 的元素。</p><p>你必须找到一个内存复杂度优于 <code>O(n^2)</code> 的解决方案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-二分查找" tabindex="-1"><a class="header-anchor" href="#思路一-二分查找" aria-hidden="true">#</a> 思路一：二分查找</h3><p>由于每一行和每一列都是升序排序的，可以尝试对目标值进行二分查找，然后计算小于等于目标值的元素个数。具体步骤如下：</p><ol><li>设置二分查找的左边界 <code>left</code> 为矩阵中最小的元素，右边界 <code>right</code> 为矩阵中最大的元素。</li><li>在每一次迭代中，计算中间值 <code>mid</code>，然后遍历整个矩阵，统计小于等于 <code>mid</code> 的元素个数。</li><li>如果小于等于 <code>mid</code> 的元素个数大于等于 <code>k</code>，说明目标值在左半部分，更新 <code>right = mid</code>。</li><li>如果小于等于 <code>mid</code> 的元素个数小于 <code>k</code>，说明目标值在右半部分，更新 <code>left = mid + 1</code>。</li><li>重复上述步骤直到 <code>left</code> 和 <code>right</code> 相遇，最终 <code>left</code> 的值就是目标值。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n log(max-min))</code>，其中 <code>max</code> 和 <code>min</code> 分别是矩阵中的最大值和最小值。因为进行二分查找的次数是 <code>log(max-min)</code> 级别的，而每次二分查找的时间复杂度是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>： <code>O(1)</code>。</li></ul><hr><h3 id="思路二-堆-优先队列" tabindex="-1"><a class="header-anchor" href="#思路二-堆-优先队列" aria-hidden="true">#</a> 思路二：堆（优先队列）</h3><p>可以使用最小堆（Min Heap）实现一个大小为 <code>k</code> 的优先队列。最小堆是一个二叉树，其中每个节点的值都小于或等于其子节点的值。</p><ol><li>将矩阵的第一列元素全部插入优先队列中。这时队列中的元素个数是矩阵的行数 <code>n</code>。</li><li>进行以下循环操作： <ul><li>弹出队首元素，这是当前队列中最小的元素。</li><li>如果该元素所在行还有下一个元素，将下一个元素插入队列。</li><li>重复上述两步操作直到找到第 <code>k</code> 小的元素。</li></ul></li><li>当完成 <code>k</code> 次循环后，队首元素即为第 <code>k</code> 小的元素。</li></ol><p>这样每次都弹出队列中最小的元素，保证队列中保留着当前阶段的最小的 <code>k</code> 个元素。最终， <code>k</code> 次循环后，队首元素即为矩阵中第 <code>k</code> 小的元素。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k * log(n))</code>，其中 <code>n</code> 是矩阵的边长。由于每次插入和删除的操作都需要 <code>log(n)</code> 的时间，循环执行 <code>k - 1</code> 次，因此总时间复杂度是 <code>O(k * log(n))</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，空间复杂度主要取决于优先队列的大小，最坏情况下为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',17),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"kthSmallest"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("matrix"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" right "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" mid "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"+"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"&&"),t(" matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},">"),t(" mid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				j`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
			count `),n("span",{class:"token operator"},"+="),t(" j "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("count "),n("span",{class:"token operator"},">="),t(" k"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			right `),n("span",{class:"token operator"},"="),t(" mid"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			left `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"kthSmallest"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("matrix"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" heap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"add"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"["),t("val"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		heap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("val"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"pop"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" min "),n("span",{class:"token operator"},"="),t(" heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" max "),n("span",{class:"token operator"},"="),t(" heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			heap`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" max"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" min"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"heapifyUp"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" parent "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
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
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" heap"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("right "),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" heap"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" right"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("min "),n("span",{class:"token operator"},"!=="),t(" i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 将第一列元素加入优先队列"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" i"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 从优先队列中弹出 k - 1 个最小元素"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("val"),n("span",{class:"token punctuation"},","),t(" m"),n("span",{class:"token punctuation"},","),t(" n"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"<"),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t("matrix"),n("span",{class:"token punctuation"},"["),t("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" m"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 优先队列的队首元素即为第 k 小的元素"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),K=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"373",-1),B=n("td",{style:{"text-align":"left"}},"查找和最小的 K 对数字",-1),D={style:{"text-align":"center"}},S={style:{"text-align":"left"}},R=n("code",null,"数组",-1),U=n("code",null,"堆（优先队列）",-1),Y=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/find-k-pairs-with-smallest-sums",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"668",-1),z=n("td",{style:{"text-align":"left"}},"乘法表中第k小的数",-1),J=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数学",-1),W=n("code",null,"二分查找",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/kth-smallest-number-in-multiplication-table",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/kth-smallest-number-in-multiplication-table",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"719",-1),an=n("td",{style:{"text-align":"left"}},"找出第 K 小的数对距离",-1),en=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},cn=n("code",null,"数组",-1),ln=n("code",null,"双指针",-1),pn=n("code",null,"二分查找",-1),un=n("code",null,"1+",-1),rn=n("td",{style:{"text-align":"center"}},"🔴",-1),kn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://leetcode.com/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},hn=n("td",{style:{"text-align":"center"}},"786",-1),bn=n("td",{style:{"text-align":"left"}},"第 K 个最小的质数分数",-1),_n=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},vn=n("code",null,"数组",-1),gn=n("code",null,"双指针",-1),yn=n("code",null,"二分查找",-1),xn=n("code",null,"2+",-1),wn=n("td",{style:{"text-align":"center"}},"🟠",-1),jn={style:{"text-align":"center"}},On={href:"https://leetcode.cn/problems/k-th-smallest-prime-fraction",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://leetcode.com/problems/k-th-smallest-prime-fraction",target:"_blank",rel:"noopener noreferrer"};function qn(En,Nn){const u=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),m("div",null,[_,n("p",null,[t("🟠 "),s(u,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[x]),_:1}),t("  🔗 "),n("a",w,[j,s(o)]),t(),n("a",O,[C,s(o)])]),q,n("ul",null,[E,n("li",null,[t("Could you solve the problem in "),N,t(" time complexity? The solution may be too advanced for an interview but you may find reading "),n("a",A,[t("this paper"),s(o)]),t(" fun.")])]),L,s(r,{id:"210",data:[{id:"二分查找"},{id:"堆（优先队列）"}]},{title0:a(({value:l,isActive:p})=>[t("二分查找")]),title1:a(({value:l,isActive:p})=>[t("堆（优先队列）")]),tab0:a(({value:l,isActive:p})=>[T]),tab1:a(({value:l,isActive:p})=>[V]),_:1}),I,h(" prettier-ignore "),n("table",null,[K,n("tbody",null,[n("tr",null,[M,B,n("td",D,[s(e,{to:"/problem/0373.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",S,[s(e,{to:"/tag/array.html"},{default:a(()=>[R]),_:1}),t(),s(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[U]),_:1})]),Y,n("td",F,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])]),n("tr",null,[X,z,J,n("td",P,[s(e,{to:"/tag/math.html"},{default:a(()=>[Q]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[W]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])]),n("tr",null,[sn,an,en,n("td",on,[s(e,{to:"/tag/array.html"},{default:a(()=>[cn]),_:1}),t(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[ln]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[pn]),_:1}),t(),un]),rn,n("td",kn,[n("a",dn,[t("🀄️"),s(o)]),t(),n("a",mn,[t("🔗"),s(o)])])]),n("tr",null,[hn,bn,_n,n("td",fn,[s(e,{to:"/tag/array.html"},{default:a(()=>[vn]),_:1}),t(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[gn]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[yn]),_:1}),t(),xn]),wn,n("td",jn,[n("a",On,[t("🀄️"),s(o)]),t(),n("a",Cn,[t("🔗"),s(o)])])])])])])}const Ln=k(b,[["render",qn],["__file","0378.html.vue"]]);export{Ln as default};
