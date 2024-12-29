import{_ as d,r as o,o as k,c as m,a as n,b as s,d as e,w as a,e as p}from"./app-r0ql_Osa.js";const b={},h=n("h1",{id:"_58-日程表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_58-日程表","aria-hidden":"true"},"#"),s(" 58. 日程表")],-1),v=n("code",null,"设计",-1),f=n("code",null,"线段树",-1),_=n("code",null,"二分查找",-1),y=n("code",null,"有序集合",-1),g={href:"https://leetcode.cn/problems/fi9suh",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),C=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请实现一个 <code>MyCalendar</code> 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。</p><p><code>MyCalendar</code> 有一个 <code>book(int start, int end)</code>方法。它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 <code>[start, end)</code>, 实数 <code>x</code> 的范围为， <code>start &lt;= x &lt; end</code>。</p><p>当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。</p><p>每次调用 <code>MyCalendar.book</code>方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 <code>true</code>。否则，返回 <code>false</code> 并且不要将该日程安排添加到日历中。</p><p>请按照以下步骤调用 <code>MyCalendar</code> 类: <code>MyCalendar cal = new MyCalendar();</code><code>MyCalendar.book(start, end)</code></p><p><strong>示例:</strong></p><blockquote><p><strong>输入:</strong>[&quot;MyCalendar&quot;,&quot;book&quot;,&quot;book&quot;,&quot;book&quot;]</p><p>[[],[10,20],[15,25],[20,30]]</p><p><strong>输出:</strong> [null,true,false,true]</p><p><strong>解释:</strong></p><p>MyCalendar myCalendar = new MyCalendar();</p><p>MyCalendar.book(10, 20); // returns true</p><p>MyCalendar.book(15, 25); // returns false ，第二个日程安排不能添加到日历中，因为时间 15 已经被第一个日程安排预定了</p><p>MyCalendar.book(20, 30); // returns true ，第三个日程安排可以添加到日历中，因为第一个日程安排并不包含时间 20</p></blockquote><p><strong>提示：</strong></p><ul><li>每个测试用例，调用 <code>MyCalendar.book</code> 函数最多不超过 <code>1000</code>次。</li><li><code>0 &lt;= start &lt; end &lt;= 10^9</code></li></ul>',10),M={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),j=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-遍历" tabindex="-1"><a class="header-anchor" href="#思路一-遍历" aria-hidden="true">#</a> 思路一：遍历</h3><ul><li>遍历已添加的日历，逐一判断新的日程安排 <code>[start, end)</code> 和已有的日程安排 <code>[s, e)</code> 是否重复</li><li>当 <code>start &lt; e &amp;&amp; end &gt; s</code> 时，代表两个区间重复了；</li><li>一旦发现重复，则返回 <code>false</code>；</li><li>全部遍历完都没有重复，则将新日程加入到日程数组中，并返回 <code>true</code>；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是已预定的时间段数量。每次调用 <code>book</code> 方法时，都需要遍历整个 <code>calendar</code> 数组以检查是否有重叠时间段。</li><li><strong>空间复杂度</strong>：<code>O(n)``，数组 </code>calendar<code>存储</code>n` 个预定的时间段。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>如果每次添加新的日程 <code>[start, end)</code> 时，按照 <code>start</code> 的大小顺序插入，查找的时候就可以用二分查找，将时间复杂度降低到 <code>O(log n)</code>。</p><p>更新二分查找范围的时候要注意，对于已有的日程安排 <code>[s, e)</code>，要根据 <code>e</code> 和 <code>start</code>的关系来判断查找范围：</p><ul><li>若 <code>e &lt; start</code>，则两个日程无交集，可以直接缩小范围； <ul><li>如果新时间段的 <code>start</code> 大于等于当前比较时间段的 <code>end</code>，更新 <code>left</code> 指针；</li><li>如果新时间段的 <code>end</code> 小于当前比较时间段的 <code>start</code>，更新 <code>right</code> 指针；</li></ul></li><li>若 <code>e &gt; start</code>，则两个日程有重合的可能，返回 <code>false</code>；</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是已预定的时间段数量。由于时间段按顺序插入，因此可以对 <code>calendar</code> 进行二分查找，查找并插入新时间段的时间复杂度为 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)``，数组 </code>calendar<code>存储</code>n` 个预定的时间段。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',13),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"MyCalendar"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"start"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"end"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token class-name"},"MyCalendar"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"book"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("start"),n("span",{class:"token punctuation"},","),s(" end")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("s"),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},"<"),s(" e "),n("span",{class:"token operator"},"&&"),s(" end "),n("span",{class:"token operator"},">"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"MyCalendar"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"start"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"end"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token class-name"},"MyCalendar"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"book"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("start"),n("span",{class:"token punctuation"},","),s(" end")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		right `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 二分查找"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"<="),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" mid "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(" right"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("s"),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},"["),s("mid"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 时间重合，直接返回 false"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},"<"),s(" e "),n("span",{class:"token operator"},"&&"),s(" end "),n("span",{class:"token operator"},">"),s(" s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 更新二分查找范围"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("start "),n("span",{class:"token operator"},">="),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			left `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			right `),n("span",{class:"token operator"},"="),s(" mid "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("calendar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("left"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),s("start"),n("span",{class:"token punctuation"},","),s(" end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(L,A){const i=o("font"),t=o("RouterLink"),r=o("ExternalLinkIcon"),u=o("CodeTabs");return k(),m("div",null,[h,n("p",null,[s("🟠 "),e(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(t,{to:"/tag/design.html"},{default:a(()=>[v]),_:1}),s(),e(t,{to:"/tag/segment-tree.html"},{default:a(()=>[f]),_:1}),s(),e(t,{to:"/tag/binary-search.html"},{default:a(()=>[_]),_:1}),s(),e(t,{to:"/tag/ordered-set.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",g,[w,e(r)])]),C,n("div",M,[x,n("p",null,[s("本题与 LeetCode "),e(t,{to:"/problem/0729.html"},{default:a(()=>[s("第 729 题")]),_:1}),s(" 相同。")])]),j,e(u,{id:"168",data:[{id:"遍历"},{id:"二分查找"}]},{title0:a(({value:c,isActive:l})=>[s("遍历")]),title1:a(({value:c,isActive:l})=>[s("二分查找")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[I]),_:1})])}const V=d(b,[["render",O],["__file","jz_offer_II_058.html.vue"]]);export{V as default};
