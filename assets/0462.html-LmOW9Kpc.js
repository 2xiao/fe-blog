import{_ as p,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as m,e as _}from"./app-9CeBk-uV.js";const h={},g=n("h1",{id:"_462-最小操作次数使数组元素相等-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_462-最小操作次数使数组元素相等-ii","aria-hidden":"true"},"#"),t(" 462. 最小操作次数使数组元素相等 II")],-1),b=n("code",null,"数组",-1),f=n("code",null,"数学",-1),y=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),j=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of size <code>n</code>, return <em>the minimum number of moves required to make all array elements equal</em>.</p><p>In one move, you can increment or decrement an element of the array by <code>1</code>.</p><p>Test cases are designed so that the answer will fit in a <strong>32-bit</strong> integer.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: 2</p><p>Explanation:</p><p>Only two moves are needed (remember each move increments or decrements one element):</p><p>[<em>1</em> ,2,3] =&gt; [2,2,<em>3</em>] =&gt; [2,2,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,10,2,9]</p><p>Output: 16</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组 <code>nums</code> ，返回使所有数组元素相等需要的最小操作数。</p><p>在一次操作中，你可以使数组中的一个元素加 <code>1</code> 或者减 <code>1</code> 。</p><p>测试用例经过设计以使答案在 <strong>32 位</strong> 整数范围内。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>只需要两次操作（每次操作指南使一个元素加 1 或减 1）：</p><p>[<em>1</em> ,2,3] =&gt; [2,2,<em>3</em>] =&gt; [2,2,2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,10,2,9]</p><p><strong>输出：</strong> 16</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-排序" tabindex="-1"><a class="header-anchor" href="#思路一-排序" aria-hidden="true">#</a> 思路一：排序</h3><ol><li><strong>排序 <code>nums</code></strong>，确定中位数 <code>mid = nums[n/2]</code>。</li><li>遍历 <code>nums</code>，计算所有元素变成 <code>mid</code> 需要的步数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，排序 <code>O(n log n)</code>，求和 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级变量。</li></ul><hr><h3 id="思路二-快速选择排序" tabindex="-1"><a class="header-anchor" href="#思路二-快速选择排序" aria-hidden="true">#</a> 思路二：快速选择排序</h3><p>我们只需要找到中位数，不需要完全排序。因此，可以使用快速选择算法（QuickSelect）在 <code>O(n)</code> 时间内找到中位数。</p><ul><li>采用**分区（partition）**的方式，每次将一个元素放到正确的位置。</li><li>但 只递归处理一侧（与快速排序不同）。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，排序 <code>O(n)</code>，求和 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',32),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minMoves2"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("a"),n("span",{class:"token punctuation"},","),t(" b")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" a "),n("span",{class:"token operator"},"-"),t(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" mid "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 选取中位数"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" cur")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),t("cur "),n("span",{class:"token operator"},"-"),t(" mid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"minMoves2"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 快速选择算法: 找到第 k 小的元素（k = n // 2）"),t(`
	`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("left"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},">="),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

		`),n("span",{class:"token keyword"},"let"),t(" pivot "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("pivot "),n("span",{class:"token operator"},"==="),t(" k"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"["),t("pivot"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" pivot "),n("span",{class:"token operator"},"<"),t(` k
			`),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),t("pivot "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" right"),n("span",{class:"token punctuation"},","),t(" k"),n("span",{class:"token punctuation"},")"),t(`
			`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),t("left"),n("span",{class:"token punctuation"},","),t(" pivot "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// Lomuto partition"),t(`
	`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"partition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("left"),n("span",{class:"token punctuation"},","),t(" right")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" pivot "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
			i `),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" right"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" pivot"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t("nums"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"return"),t(" i"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 找到中位数"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" mid "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"quickSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 计算总步数"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),t("num "),n("span",{class:"token operator"},"-"),t(" mid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"296",-1),M=n("td",{style:{"text-align":"left"}},"最佳的碰头地点 🔒",-1),S=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},V=n("code",null,"数组",-1),A=n("code",null,"数学",-1),T=n("code",null,"矩阵",-1),B=n("code",null,"1+",-1),R=n("td",{style:{"text-align":"center"}},"🔴",-1),z={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/best-meeting-point",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/best-meeting-point",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"453",-1),F=n("td",{style:{"text-align":"left"}},"最小操作次数使数组元素相等",-1),H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=n("code",null,"数组",-1),P=n("code",null,"数学",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/minimum-moves-to-equal-array-elements",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"2033",-1),$=n("td",{style:{"text-align":"left"}},"获取单值网格的最小操作数",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=n("code",null,"数组",-1),sn=n("code",null,"数学",-1),an=n("code",null,"矩阵",-1),on=n("code",null,"1+",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),ln={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/minimum-operations-to-make-a-uni-value-grid",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},"2171",-1),dn=n("td",{style:{"text-align":"left"}},"拿出最少数目的魔法豆",-1),kn=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},_n=n("code",null,"贪心",-1),hn=n("code",null,"数组",-1),gn=n("code",null,"枚举",-1),bn=n("code",null,"2+",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/removing-minimum-number-of-magic-beans",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/removing-minimum-number-of-magic-beans",target:"_blank",rel:"noopener noreferrer"},wn=n("td",{style:{"text-align":"center"}},"2448",-1),qn=n("td",{style:{"text-align":"left"}},"使数组相等的最小开销",-1),jn=n("td",{style:{"text-align":"center"}},null,-1),On={style:{"text-align":"left"}},Cn=n("code",null,"贪心",-1),In=n("code",null,"数组",-1),En=n("code",null,"二分查找",-1),Ln=n("code",null,"2+",-1),Mn=n("td",{style:{"text-align":"center"}},"🔴",-1),Sn={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/minimum-cost-to-make-array-equal",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/minimum-cost-to-make-array-equal",target:"_blank",rel:"noopener noreferrer"},An=n("td",{style:{"text-align":"center"}},"2602",-1),Tn=n("td",{style:{"text-align":"left"}},"使数组元素全部相等的最少操作次数",-1),Bn=n("td",{style:{"text-align":"center"}},null,-1),Rn={style:{"text-align":"left"}},zn=n("code",null,"数组",-1),Gn=n("code",null,"二分查找",-1),Qn=n("code",null,"前缀和",-1),Dn=n("code",null,"1+",-1),Fn=n("td",{style:{"text-align":"center"}},"🟠",-1),Hn={style:{"text-align":"center"}},Jn={href:"https://leetcode.cn/problems/minimum-operations-to-make-all-array-elements-equal",target:"_blank",rel:"noopener noreferrer"},Kn={href:"https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal",target:"_blank",rel:"noopener noreferrer"},Pn=n("td",{style:{"text-align":"center"}},"2967",-1),Un=n("td",{style:{"text-align":"left"}},"使数组成为等数数组的最小代价",-1),Wn=n("td",{style:{"text-align":"center"}},null,-1),Xn={style:{"text-align":"left"}},Yn=n("code",null,"贪心",-1),Zn=n("code",null,"数组",-1),$n=n("code",null,"数学",-1),nt=n("code",null,"2+",-1),tt=n("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/minimum-cost-to-make-array-equalindromic",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic",target:"_blank",rel:"noopener noreferrer"};function ot(ct,lt){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return d(),k("div",null,[g,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[y]),_:1}),t("  🔗 "),n("a",v,[x,e(o)]),t(),n("a",w,[q,e(o)])]),j,e(u,{id:"202",data:[{id:"排序"},{id:"快速选择排序"}]},{title0:s(({value:l,isActive:i})=>[t("排序")]),title1:s(({value:l,isActive:i})=>[t("快速选择排序")]),tab0:s(({value:l,isActive:i})=>[O]),tab1:s(({value:l,isActive:i})=>[C]),_:1}),I,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[L,M,S,n("td",N,[e(a,{to:"/tag/array.html"},{default:s(()=>[V]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[T]),_:1}),t(),B]),R,n("td",z,[n("a",G,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])]),n("tr",null,[D,F,n("td",H,[e(a,{to:"/problem/0453.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",J,[e(a,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[P]),_:1})]),U,n("td",W,[n("a",X,[t("🀄️"),e(o)]),t(),n("a",Y,[t("🔗"),e(o)])])]),n("tr",null,[Z,$,nn,n("td",tn,[e(a,{to:"/tag/array.html"},{default:s(()=>[en]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[sn]),_:1}),t(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[an]),_:1}),t(),on]),cn,n("td",ln,[n("a",rn,[t("🀄️"),e(o)]),t(),n("a",un,[t("🔗"),e(o)])])]),n("tr",null,[pn,dn,kn,n("td",mn,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[_n]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[hn]),_:1}),t(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[gn]),_:1}),t(),bn]),fn,n("td",yn,[n("a",vn,[t("🀄️"),e(o)]),t(),n("a",xn,[t("🔗"),e(o)])])]),n("tr",null,[wn,qn,jn,n("td",On,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[Cn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[In]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[En]),_:1}),t(),Ln]),Mn,n("td",Sn,[n("a",Nn,[t("🀄️"),e(o)]),t(),n("a",Vn,[t("🔗"),e(o)])])]),n("tr",null,[An,Tn,Bn,n("td",Rn,[e(a,{to:"/tag/array.html"},{default:s(()=>[zn]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[Gn]),_:1}),t(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Qn]),_:1}),t(),Dn]),Fn,n("td",Hn,[n("a",Jn,[t("🀄️"),e(o)]),t(),n("a",Kn,[t("🔗"),e(o)])])]),n("tr",null,[Pn,Un,Wn,n("td",Xn,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[Yn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[Zn]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[$n]),_:1}),t(),nt]),tt,n("td",et,[n("a",st,[t("🀄️"),e(o)]),t(),n("a",at,[t("🔗"),e(o)])])])])])])}const rt=p(h,[["render",ot],["__file","0462.html.vue"]]);export{rt as default};
