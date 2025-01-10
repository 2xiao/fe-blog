import{_ as r,r as p,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-XFeYdzZv.js";const b={},v=n("h1",{id:"_40-最小的k个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_40-最小的k个数","aria-hidden":"true"},"#"),s(" 40. 最小的k个数")],-1),h=n("code",null,"数组",-1),g=n("code",null,"分治",-1),f=n("code",null,"快速选择",-1),w=n("code",null,"排序",-1),y=n("code",null,"堆（优先队列）",-1),_={href:"https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),I=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>仓库管理员以数组 <code>stock</code> 形式记录商品库存表，其中 <code>stock[i]</code> 表示对应商品库存余量。请返回库存余量最少的 <code>cnt</code> 个商品余量，返回 <strong>顺序不限</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> stock = [2,5,7,4], cnt = 1</p><p><strong>输出：</strong>[2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> stock = [0,2,3,6], cnt = 2</p><p><strong>输出：</strong>[0,2] 或 [2,0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= cnt &lt;= stock.length &lt;= 10000</code></li><li><code>0 &lt;= stock[i] &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-sort-排序" tabindex="-1"><a class="header-anchor" href="#思路一-sort-排序" aria-hidden="true">#</a> 思路一：sort 排序</h3><ol><li>排序：使用 <code>sort</code> 方法对库存数组进行升序排序，便于找到库存最少的商品。</li><li>截取最小值：取排序后数组的前 <code>cnt</code> 个元素，即为库存最少的商品余量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，主要来源于排序操作。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，JavaScript 中的排序实现使用了 <code>O(n)</code> 的额外空间。</li></ul><hr><h3 id="思路二-快速选择算法" tabindex="-1"><a class="header-anchor" href="#思路二-快速选择算法" aria-hidden="true">#</a> 思路二：快速选择算法</h3><p>快速选择算法非常高效，其原理基于快速排序的分治思想，适合在不需要对整个数组进行排序时寻找第 k 小的元素。</p><p>其主要步骤如下：</p><ol><li><p><strong>选择一个枢轴</strong>：从数组中选择一个元素作为枢轴（pivot）。通常选择最后一个元素或中间的元素。</p></li><li><p><strong>分区操作</strong>：将数组分成两部分：</p><ul><li>小于枢轴的元素</li><li>大于或等于枢轴的元素</li><li>通过一次遍历，将所有小于枢轴的元素移到左侧，所有大于枢轴的元素移到右侧，最后将枢轴放到它的正确位置。</li></ul></li><li><p><strong>判断位置</strong>：</p><ul><li>如果枢轴的位置正好是我们要找的第 k 小元素的位置，返回该元素。</li><li>如果 k 小于枢轴的位置，继续在左侧子数组中进行快速选择。</li><li>如果 k 大于枢轴的位置，继续在右侧子数组中进行快速选择。</li></ul></li><li><p><strong>递归</strong>：重复上述过程，直到找到第 k 小的元素。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，在平均情况下，快速选择算法的复杂度是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常量空间来进行分区操作。</li></ul><h3 id="思路三-桶排序" tabindex="-1"><a class="header-anchor" href="#思路三-桶排序" aria-hidden="true">#</a> 思路三：桶排序</h3><ol><li><p><strong>确定范围</strong>：首先确定库存的范围。找到库存数组中的最大值 <code>maxStock</code>。</p></li><li><p><strong>桶的创建</strong>：</p><ul><li>根据库存值的范围创建桶。每个桶可以对应一个特定的库存值或一段范围。为了简化，我们可以选择每个桶表示一个库存数量。</li><li>创建一个大小为 <code>maxStock + 1</code> 的数组 <code>buckets</code>，用于统计每个库存数量出现的次数。</li></ul></li><li><p><strong>分配元素</strong>：遍历 <code>stock</code> 数组，将每个库存数量在 <code>buckets</code> 中的相应位置加一。</p></li><li><p><strong>提取结果</strong>：从小到大遍历 <code>buckets</code>，每次取出库存数量，直到收集到 <code>cnt</code> 个商品。</p></li></ol><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，，其中 <code>n</code> 是 <code>stock</code> 数组的长度，<code>m</code> 是库存的最大值。创建桶和遍历桶的时间复杂度较低。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，需要额外的空间存储桶。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stock"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"cnt"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"inventoryManagement"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("stock"),n("span",{class:"token punctuation"},","),s(" cnt")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	stock`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" stock"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" cnt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stock"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"cnt"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"inventoryManagement"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("stock"),n("span",{class:"token punctuation"},","),s(" cnt")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token doc-comment comment"},[s(`/**
	 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stock"),s(`
	 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"cnt"),s(`
	 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
	 */`)]),s(`
	`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getLowestStock"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("stock"),n("span",{class:"token punctuation"},","),s(" cnt")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"partition"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},","),s(" pivotIndex")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" pivotValue "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("pivotIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token comment"},"// 移动pivot到数组末尾"),s(`
			`),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("pivotIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("pivotIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"let"),s(" storeIndex "),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(`

			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" right"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" pivotValue"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("storeIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("storeIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
					storeIndex`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token comment"},"// 将pivot放回其最终位置"),s(`
			`),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("storeIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("arr"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("storeIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" storeIndex"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"quickSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"==="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 如果只有一个元素"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" pivotIndex "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" newPivotIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},","),s(" pivotIndex"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("k "),n("span",{class:"token operator"},"==="),s(" newPivotIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},"["),s("newPivotIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("k "),n("span",{class:"token operator"},"<"),s(" newPivotIndex"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},","),s(" left"),n("span",{class:"token punctuation"},","),s(" newPivotIndex "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},","),s(" newPivotIndex "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" right"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" stock"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" threshold "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),s("stock"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" cnt "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" stock"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"x"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" x "),n("span",{class:"token operator"},"<="),s(" threshold"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" cnt"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"stock"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"cnt"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"inventoryManagement"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("stock"),n("span",{class:"token punctuation"},","),s(" cnt")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" maxStock "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("stock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" buckets "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("maxStock "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 统计每个库存值的数量"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" s "),n("span",{class:"token keyword"},"of"),s(" stock"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		buckets`),n("span",{class:"token punctuation"},"["),s("s"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 从小到大遍历桶，找到库存最少的商品"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" buckets"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("buckets"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" result"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<"),s(" cnt"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			buckets`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(A,P){const l=p("font"),o=p("RouterLink"),u=p("ExternalLinkIcon"),i=p("CodeTabs");return k(),d("div",null,[v,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(o,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[g]),_:1}),s(),t(o,{to:"/tag/quickselect.html"},{default:a(()=>[f]),_:1}),s(),t(o,{to:"/tag/sorting.html"},{default:a(()=>[w]),_:1}),s(),t(o,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",_,[x,t(u)])]),I,t(i,{id:"218",data:[{id:"sort 排序"},{id:"快速选择算法"},{id:"桶排序"}]},{title0:a(({value:e,isActive:c})=>[s("sort 排序")]),title1:a(({value:e,isActive:c})=>[s("快速选择算法")]),title2:a(({value:e,isActive:c})=>[s("桶排序")]),tab0:a(({value:e,isActive:c})=>[j]),tab1:a(({value:e,isActive:c})=>[q]),tab2:a(({value:e,isActive:c})=>[S]),_:1})])}const L=r(b,[["render",O],["__file","jz_offer_40_1.html.vue"]]);export{L as default};
