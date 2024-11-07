import{_ as u,r as l,o as d,c as k,a as t,b as n,d as e,w as s,f as h,e as m}from"./app-OX-nYmHS.js";const g={},_=t("h1",{id:"_42-接雨水",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_42-接雨水","aria-hidden":"true"},"#"),n(" 42. 接雨水")],-1),f=t("code",null,"栈",-1),b=t("code",null,"数组",-1),x=t("code",null,"双指针",-1),v=t("code",null,"动态规划",-1),y=t("code",null,"单调栈",-1),M={href:"https://leetcode.cn/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),I={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},O=t("code",null,"LeetCode",-1),C=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]</p><p>Output: 6</p><p>Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: height = [4,2,0,3,2,5]</p><p>Output: 9</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == height.length</code></li><li><code>1 &lt;= n &lt;= 2 * 10^4</code></li><li><code>0 &lt;= height[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <code>n</code> 个非负整数表示每个宽度为 <code>1</code> 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>对于接雨水问题，我们的目标是找到每个位置上可以蓄水的量，然后将这些蓄水量加起来得到最终的结果。</p><p>在这个问题中，蓄水量取决于当前位置的左侧最大高度和右侧最大高度。因此可以考虑预处理数组，计算每个位置的左侧最大高度和右侧最大高度，然后在遍历数组时，通过这两个值来计算蓄水量。</p><ol><li><p><strong>初始化左侧最大高度数组 <code>leftMax</code></strong>：</p><ul><li>从左到右遍历数组，对于每个位置 <code>i</code>，<code>leftMax[i]</code> 存储位置 <code>i</code> 左侧（包括位置 <code>i</code>）的最大高度。</li></ul></li><li><p><strong>初始化右侧最大高度数组 <code>rightMax</code></strong>：</p><ul><li>从右到左遍历数组，对于每个位置 <code>i</code>，<code>rightMax[i]</code> 存储位置 <code>i</code> 右侧（包括位置 <code>i</code>）的最大高度。</li></ul></li><li><p><strong>遍历数组计算蓄水量</strong>：</p><ul><li>对于每个位置 <code>i</code>，蓄水量等于 <code>min(leftMax[i], rightMax[i]) - height[i]</code>，其中 <code>height[i]</code> 是当前位置的高度。</li><li>注意，如果 <code>min(leftMax[i], rightMax[i]) - height[i]</code> 小于等于零，则当前位置不会蓄水。</li></ul></li><li><p><strong>将所有位置的蓄水量相加得到最终结果</strong>。</p></li></ol><p>这种方法的关键在于预处理左侧和右侧最大高度数组，使得在计算蓄水量时能够直接使用这两个数组的值，而无需每次都重新计算。时间复杂度为 <code>O(n)</code> ，空间复杂度为 <code>O(n)</code> ，其中 <code>n</code> 是数组的长度。</p><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><p>动态规划的做法中，需要维护两个数组 <code>leftMax</code> 和 <code>rightMax</code>，因此空间复杂度是 <code>O(n)</code>。是否可以将空间复杂度降到 <code>O(1)</code> ？</p><p>注意到下标 <code>i</code> 处能接的雨水量由 <code>leftMax[i]</code> 和 <code>rightMax[i]</code> 中的最小值决定。由于数组 <code>leftMax</code> 是从左往右计算，数组 <code>rightMax</code> 是从右往左计算，因此可以使用双指针和两个变量代替两个数组。</p><ol><li><p><strong>初始化</strong>：定义两个指针 <code>left</code> 和 <code>right</code> ，分别指向数组的开头和结尾。使用两个变量 <code>leftMax</code> 和 <code>rightMax</code> 分别记录左侧和右侧的最大高度，初始化为 <code>0</code>。</p></li><li><p><strong>循环遍历</strong>：在每次循环中，比较 <code>height[left]</code> 和 <code>height[right]</code> ，选择较小的一方，根据这一方的高度来更新 <code>leftMax</code> 或 <code>rightMax</code> 。然后，根据当前的 <code>leftMax</code> 和 <code>rightMax</code> 计算当前位置上的蓄水量。</p><ul><li>如果 <code>height[left] &lt; height[right]</code> ，则必有 <code>leftMax &lt; rightMax</code>，下标 <code>left</code> 处能接的雨水量等于 <code>leftMax − height[left]</code> ，将下标 <code>left</code> 处能接的雨水量加到能接的雨水总量，然后将 <code>left</code> 加 <code>1</code>（即向右移动一位）；</li><li>如果 <code>height[left] ≥ height[right]</code>，则必有 <code>leftMax ≥ rightMax</code>，下标 <code>right</code> 处能接的雨水量等于 <code>rightMax − height[right]</code>，将下标 <code>right</code> 处能接的雨水量加到能接的雨水总量，然后将 <code>right</code> 减 <code>1</code>（即向左移动一位）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，因为我们只需遍历一次数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"height"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"trap"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"height"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"const"),n(" n "),t("span",{class:"token operator"},"="),n(" height"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token comment"},"// 左侧最大高度数组"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" leftMax "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("height"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		leftMax`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("height"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" leftMax"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 右侧最大高度数组"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" rightMax "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	rightMax`),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" height"),t("span",{class:"token punctuation"},"["),n("n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		rightMax`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("height"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" rightMax"),t("span",{class:"token punctuation"},"["),n("i "),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 遍历数组计算蓄水量"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(" n "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		res `),t("span",{class:"token operator"},"+="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"min"),t("span",{class:"token punctuation"},"("),n("leftMax"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(" rightMax"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"-"),n(" height"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"height"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"trap"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"height"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" left "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" right "),t("span",{class:"token operator"},"="),n(" height"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" leftMax "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" rightMax "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("left "),t("span",{class:"token operator"},"<"),n(" right"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("height"),t("span",{class:"token punctuation"},"["),n("left"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"<"),n(" height"),t("span",{class:"token punctuation"},"["),n("right"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			leftMax `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("leftMax"),t("span",{class:"token punctuation"},","),n(" height"),t("span",{class:"token punctuation"},"["),n("left"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
			res `),t("span",{class:"token operator"},"+="),n(" leftMax "),t("span",{class:"token operator"},"-"),n(" height"),t("span",{class:"token punctuation"},"["),n("left"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			left`),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
			rightMax `),t("span",{class:"token operator"},"="),n(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),n("rightMax"),t("span",{class:"token punctuation"},","),n(" height"),t("span",{class:"token punctuation"},"["),n("right"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
			res `),t("span",{class:"token operator"},"+="),n(" rightMax "),t("span",{class:"token operator"},"-"),n(" height"),t("span",{class:"token punctuation"},"["),n("right"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			right`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),L=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),N=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),V=t("td",{style:{"text-align":"center"}},"11",-1),q={style:{"text-align":"left"}},A={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"center"}},B={style:{"text-align":"left"}},H=t("code",null,"贪心",-1),R=t("code",null,"数组",-1),z=t("code",null,"双指针",-1),G={style:{"text-align":"left"}},S=t("td",{style:{"text-align":"center"}},"238",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=t("code",null,"数组",-1),Q=t("code",null,"前缀和",-1),U={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"407",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/trapping-rain-water-ii",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},tt=t("code",null,"广度优先搜索",-1),nt=t("code",null,"数组",-1),et=t("code",null,"矩阵",-1),st=t("code",null,"1+",-1),at={style:{"text-align":"left"}},ot=t("td",{style:{"text-align":"center"}},"755",-1),ct={style:{"text-align":"left"}},lt={href:"https://leetcode.com/problems/pour-water",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},null,-1),pt={style:{"text-align":"left"}},rt=t("code",null,"数组",-1),ut=t("code",null,"模拟",-1),dt={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"2874",-1),ht={style:{"text-align":"left"}},mt={href:"https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),bt={style:{"text-align":"left"}};function xt(vt,yt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),r=l("CodeTabs");return d(),k("div",null,[_,t("p",null,[n("🔴 "),e(c,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1}),n("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[x]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[v]),_:1}),n(),e(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[y]),_:1}),n("  🔗 "),t("a",M,[w,e(o)]),n(),t("a",I,[O,e(o)])]),C,e(r,{id:"181",data:[{id:"动态规划"},{id:"双指针"}]},{title0:s(({value:i,isActive:p})=>[n("动态规划")]),title1:s(({value:i,isActive:p})=>[n("双指针")]),tab0:s(({value:i,isActive:p})=>[j]),tab1:s(({value:i,isActive:p})=>[E]),_:1}),L,h(" prettier-ignore "),t("table",null,[N,t("tbody",null,[t("tr",null,[V,t("td",q,[t("a",A,[n("盛最多水的容器"),e(o)])]),t("td",T,[e(a,{to:"/problem/0011.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",B,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[H]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),n(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[z]),_:1})]),t("td",G,[e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[S,t("td",D,[t("a",F,[n("除自身以外数组的乘积"),e(o)])]),t("td",J,[e(a,{to:"/problem/0238.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",K,[e(a,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Q]),_:1})]),t("td",U,[e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[n("接雨水 II"),e(o)])]),Z,t("td",$,[e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[tt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[nt]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[et]),_:1}),n(),st]),t("td",at,[e(c,{color:"#ff334b"},{default:s(()=>[n("Hard")]),_:1})])]),t("tr",null,[ot,t("td",ct,[t("a",lt,[n("倒水 🔒"),e(o)])]),it,t("td",pt,[e(a,{to:"/tag/array.html"},{default:s(()=>[rt]),_:1}),n(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[ut]),_:1})]),t("td",dt,[e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[kt,t("td",ht,[t("a",mt,[n("有序三元组中的最大值 II"),e(o)])]),gt,t("td",_t,[e(a,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1})]),t("td",bt,[e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])])])])])}const wt=u(g,[["render",xt],["__file","0042.html.vue"]]);export{wt as default};
