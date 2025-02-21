import{_ as r,r as o,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-9CeBk-uV.js";const g={},h=n("h1",{id:"_1260-二维网格迁移",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1260-二维网格迁移","aria-hidden":"true"},"#"),s(" 1260. 二维网格迁移")],-1),b=n("code",null,"数组",-1),v=n("code",null,"矩阵",-1),f=n("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/shift-2d-grid",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/shift-2d-grid",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a 2D <code>grid</code> of size <code>m x n</code> and an integer <code>k</code>. You need to shift the <code>grid</code> <code>k</code> times.</p><p>In one shift operation:</p><ul><li>Element at <code>grid[i][j]</code> moves to <code>grid[i][j + 1]</code>.</li><li>Element at <code>grid[i][n - 1]</code> moves to <code>grid[i + 1][0]</code>.</li><li>Element at <code>grid[m - 1][n - 1]</code> moves to <code>grid[0][0]</code>.</li></ul><p>Return the <em>2D grid</em> after applying shift operation <code>k</code> times.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/05/e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1</p><p>Output: [[9,1,2],[3,4,5],[6,7,8]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/05/e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4</p><p>Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9</p><p>Output: [[1,2,3],[4,5,6],[7,8,9]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m &lt;= 50</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>-1000 &lt;= grid[i][j] &lt;= 1000</code></li><li><code>0 &lt;= k &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m</code> 行 <code>n</code> 列的二维网格 <code>grid</code> 和一个整数 <code>k</code>。你需要将 <code>grid</code> 迁移 <code>k</code> 次。</p><p>每次「迁移」操作将会引发下述活动：</p><ul><li>位于 <code>grid[i][j]</code>（<code>j &lt; n - 1</code>）的元素将会移动到 <code>grid[i][j + 1]</code>。</li><li>位于 <code>grid[i][n - 1]</code> 的元素将会移动到 <code>grid[i + 1][0]</code>。</li><li>位于 <code>grid[m - 1][n - 1]</code> 的元素将会移动到 <code>grid[0][0]</code>。</li></ul><p>请你返回 <code>k</code> 次迁移操作后最终得到的 <strong>二维网格</strong> 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/16/e1-1.png)</p><blockquote><p><strong>输入：</strong> grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1</p><p><strong>输出：</strong>[[9,1,2],[3,4,5],[6,7,8]]</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/16/e2-1.png)</p><blockquote><p><strong>输入：</strong> grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4</p><p><strong>输出：</strong>[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9</p><p><strong>输出：</strong>[[1,2,3],[4,5,6],[7,8,9]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m &lt;= 50</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>-1000 &lt;= grid[i][j] &lt;= 1000</code></li><li><code>0 &lt;= k &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-直接映射" tabindex="-1"><a class="header-anchor" href="#思路一-直接映射" aria-hidden="true">#</a> 思路一：直接映射</h3><p><strong>思路：</strong><br> 通过直接计算目标矩阵中每个元素在源矩阵中的位置来完成操作：</p><ol><li>计算矩阵的大小 <code>m * n</code>；</li><li>遍历矩阵中的每个元素，利用公式计算其在目标位置的行列索引： <ul><li>新的行索引：<code>(i + floor((j + k) / n)) % m</code>；</li><li>新的列索引：<code>(j + k) % n</code>；</li></ul></li><li>创建一个新的矩阵 <code>res</code> 来保存结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(m * n)</code></li><li><strong>空间复杂度：</strong> <code>O(m * n)</code></li></ul><hr><h3 id="思路二-矩阵一维化-翻转法" tabindex="-1"><a class="header-anchor" href="#思路二-矩阵一维化-翻转法" aria-hidden="true">#</a> 思路二：矩阵一维化 + 翻转法</h3><p>将矩阵看作一个一维数组，对其整体进行「环形右移」：</p><ol><li>将矩阵的二维坐标索引转化为一维索引；</li><li>借助翻转数组的技巧，分三步完成右移： <ul><li>翻转整个数组；</li><li>翻转前 <code>k</code> 个元素；</li><li>翻转后 <code>x - k</code> 个元素；</li></ul></li><li>最后将数组恢复为矩阵。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(m * n)</code></li><li><strong>空间复杂度：</strong> <code>O(1)</code>，原地操作，无额外空间开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',43),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"heights"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"queries"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"shiftGrid"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("grid"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			res`),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"+"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"+"),s(" k"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" n"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"heights"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"queries"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"shiftGrid"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("grid"),n("span",{class:"token punctuation"},","),s(" k")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(" m "),n("span",{class:"token operator"},"*"),s(" n"),n("span",{class:"token punctuation"},";"),s(`
	k `),n("span",{class:"token operator"},"%="),s(" x"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"reverse"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token punctuation"},"["),s("grid"),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"/"),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("a "),n("span",{class:"token operator"},"%"),s(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" grid"),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("b "),n("span",{class:"token operator"},"/"),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("b "),n("span",{class:"token operator"},"%"),s(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
				grid`),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("b "),n("span",{class:"token operator"},"/"),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("b "),n("span",{class:"token operator"},"%"),s(" n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
				grid`),n("span",{class:"token punctuation"},"["),s("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"/"),s(" n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("a "),n("span",{class:"token operator"},"%"),s(" n"),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			a`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			b`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" x "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 翻转整个数组"),s(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" k "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 翻转前 k 个元素"),s(`
	`),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},","),s(" x "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 翻转后 x-k 个元素"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" grid"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(A,C){const i=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon"),u=o("CodeTabs");return k(),d("div",null,[h,n("p",null,[s("🟢 "),t(i,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/simulation.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",_,[y,t(p)]),s(),n("a",w,[x,t(p)])]),j,t(u,{id:"324",data:[{id:"直接映射"},{id:"矩阵一维化 + 翻转法"}]},{title0:a(({value:c,isActive:l})=>[s("直接映射")]),title1:a(({value:c,isActive:l})=>[s("矩阵一维化 + 翻转法")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[E]),_:1})])}const L=r(g,[["render",O],["__file","1260.html.vue"]]);export{L as default};
