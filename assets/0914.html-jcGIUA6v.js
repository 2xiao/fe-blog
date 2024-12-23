import{_ as r,r as t,o as d,c as k,a as n,b as s,d as e,w as a,e as m}from"./app-Kkp_66uf.js";const b={},h=n("h1",{id:"_914-卡牌分组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_914-卡牌分组","aria-hidden":"true"},"#"),s(" 914. 卡牌分组")],-1),g=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),f=n("code",null,"数学",-1),_=n("code",null,"计数",-1),w=n("code",null,"数论",-1),y={href:"https://leetcode.cn/problems/x-of-a-kind-in-a-deck-of-cards",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),C={href:"https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"LeetCode",-1),D=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>deck</code> where <code>deck[i]</code> represents the number written on the <code>ith</code> card.</p><p>Partition the cards into <strong>one or more groups</strong> such that:</p><ul><li>Each group has <strong>exactly</strong> <code>x</code> cards where <code>x &gt; 1</code>, and</li><li>All the cards in one group have the same integer written on them.</li></ul><p>Return <code>true</code> <em>if such partition is possible, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: deck = [1,2,3,4,4,3,2,1]</p><p>Output: true</p><p><strong>Explanation</strong> : Possible partition [1,1],[2,2],[3,3],[4,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: deck = [1,1,1,2,2,2,3,3]</p><p>Output: false</p><p><strong>Explanation</strong> : No possible partition.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= deck.length &lt;= 10^4</code></li><li><code>0 &lt;= deck[i] &lt; 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一副牌，每张牌上都写着一个整数。</p><p>此时，你需要选定一个数字 <code>X</code>，使我们可以将整副牌按下述规则分成 1 组或更多组：</p><ul><li>每组都有 <code>X</code> 张牌。</li><li>组内所有的牌上都写着相同的整数。</li></ul><p>仅当你可选的 <code>X &gt;= 2</code> 时返回 <code>true</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> deck = [1,2,3,4,4,3,2,1]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> deck = [1,1,1,2,2,2,3,3]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 没有满足要求的分组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= deck.length &lt;= 10^4</code></li><li><code>0 &lt;= deck[i] &lt; 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-最大公约数法" tabindex="-1"><a class="header-anchor" href="#思路一-最大公约数法" aria-hidden="true">#</a> 思路一：最大公约数法</h3><p>要判断能否将整副牌分成满足条件的组，关键在于找到一个满足所有数字频数的 <strong>最大公约数 (GCD)</strong>，并确保这个最大公约数 <code>X &gt;= 2</code>。</p><ol><li><p>使用一个哈希表 <code>Map</code> 统计每个数字在牌中的出现次数。</p></li><li><p>计算最大公约数 <code>gcd</code>，最常用高效的办法是 <strong>辗转相除法（欧几里得算法）</strong></p><ul><li><p><strong>定理</strong>：对于任意两个正整数 <code>a</code> 和 <code>b</code>（假设 <code>a &gt; b</code>），它们的最大公约数等于 <code>b</code> 和 <code>a</code> 除以 <code>b</code> 的余数（<code>a % b</code>）的最大公约数。</p></li><li><p>形式化表示为：<code>GCD(a, b) = GCD(b, a % b)</code></p></li><li><p>算法的步骤如下：</p><ol><li>如果 <code>b = 0</code>，则 <code>GCD(a, b) = a</code>。</li><li>否则，递归计算 <code>GCD(b, a % b)</code>。</li></ol></li><li><p>举例来说，假设我们要计算 <code>GCD(48, 18)</code>：</p><ul><li><code>GCD(48, 18)</code></li><li><code>48 % 18 = 12</code></li><li>现在计算 <code>GCD(18, 12)</code></li><li><code>18 % 12 = 6</code></li><li>现在计算 <code>GCD(12, 6)</code></li><li><code>12 % 6 = 0</code></li><li>现在计算 <code>GCD(6, 0)</code>，结果为 <code>6</code></li><li>最终，<code>GCD(48, 18)</code> 的结果是 <code>6</code></li></ul></li></ul></li><li><p>遍历数组，计算所有数字的频数的最大公约数 <code>gcd</code>。</p><ul><li>如果 <code>gcd &lt; 2</code>，则返回 <code>false</code>。</li><li>如果 <code>gcd &gt;= 2</code>，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m * log(maxCount))</code><ul><li>统计数字的频数：<code>O(n)</code>，其中 <code>n</code> 是 <code>deck</code> 数组的长度。</li><li>计算最大公约数：<code>O(m * log(maxCount))</code>，其中 <code>m</code> 是不同数字的种类数，<code>maxCount</code> 是最大频数。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用了一个哈希表来存储频数。</li></ul><hr><h3 id="思路二-枚举法" tabindex="-1"><a class="header-anchor" href="#思路二-枚举法" aria-hidden="true">#</a> 思路二：枚举法</h3><p>还可以使用 <strong>枚举法</strong>，通过枚举可能的 <code>x</code> 来判断是否满足条件。</p><ol><li><p><strong>统计每张牌的频数</strong><br> 使用 <code>Map</code> 对牌中的每个数字进行计数，得到每种数字的频数。</p></li><li><p><strong>枚举分组的大小 <code>x</code></strong></p><ul><li>遍历从 <code>2</code> 到 <code>n</code> 的所有可能的 <code>x</code>（<code>n</code> 是牌的总数）。</li><li>如果 <code>x</code> 不能整除 <code>n</code>，直接跳过。</li><li>检查每种数字的频数是否能被 <code>x</code> 整除。如果不能，说明不能按当前 <code>x</code> 分组。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>如果找到一个满足条件的 <code>x</code>，返回 <code>true</code>。</li><li>如果所有可能的 <code>x</code> 都不满足条件，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 是 <code>deck</code> 数组的长度，<code>m</code> 是不同数字的种类数。 <ul><li>统计数字的频数：<code>O(n)</code>。</li><li>枚举 <code>x</code> 的循环次数最多为 <code>n</code>，每次需要检查所有 <code>m</code> 个频数，复杂度为 <code>O(n * m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用了一个哈希表来存储频数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"deck"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasGroupsSizeX"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"deck"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 统计频数"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" card "),n("span",{class:"token keyword"},"of"),s(" deck"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		count`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("card"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("card"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 求最大公约数的辅助函数"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"gcd"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s("b "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(" a "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"gcd"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},","),s(" a "),n("span",{class:"token operator"},"%"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 所有频数的数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" counts "),n("span",{class:"token operator"},"="),s(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" g "),n("span",{class:"token operator"},"="),s(" counts"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 依次计算所有频数的最大公约数"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" freq "),n("span",{class:"token keyword"},"of"),s(" counts"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		g `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"gcd"),n("span",{class:"token punctuation"},"("),s("g"),n("span",{class:"token punctuation"},","),s(" freq"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("g "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 一旦 gcd 为 1，直接返回 false"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" g "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"deck"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"hasGroupsSizeX"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"deck"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" deck"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" deck"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" x "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" x"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" flag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"%"),s(" x "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" value "),n("span",{class:"token keyword"},"of"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"values"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"%"),s(" x "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					flag `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
					`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("flag"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(j,A){const i=t("font"),o=t("RouterLink"),p=t("ExternalLinkIcon"),u=t("CodeTabs");return d(),k("div",null,[h,n("p",null,[s("🟢 "),e(i,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),e(o,{to:"/tag/hash-table.html"},{default:a(()=>[v]),_:1}),s(),e(o,{to:"/tag/math.html"},{default:a(()=>[f]),_:1}),s(),e(o,{to:"/tag/counting.html"},{default:a(()=>[_]),_:1}),s(),e(o,{to:"/tag/number-theory.html"},{default:a(()=>[w]),_:1}),s("  🔗 "),n("a",y,[x,e(p)]),s(),n("a",C,[G,e(p)])]),D,e(u,{id:"364",data:[{id:"最大公约数法"},{id:"枚举法"}]},{title0:a(({value:c,isActive:l})=>[s("最大公约数法")]),title1:a(({value:c,isActive:l})=>[s("枚举法")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[O]),_:1})])}const L=r(b,[["render",E],["__file","0914.html.vue"]]);export{L as default};
