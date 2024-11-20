import{_ as i,r as t,o as d,c as k,a as n,b as s,d as e,w as a,e as m}from"./app-BBnmDgJV.js";const h={},b=n("h1",{id:"_62-圆圈中最后剩下的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_62-圆圈中最后剩下的数字","aria-hidden":"true"},"#"),s(" 62. 圆圈中最后剩下的数字")],-1),v=n("code",null,"递归",-1),g=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>社团共有 <code>num</code> 位成员参与破冰游戏，编号为 <code>0 ~ num-1</code>。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 <code>target</code>，从 0 号成员起开始计数，排在第 <code>target</code> 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = 7, target = 4</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = 12, target = 5</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num &lt;= 10^5</code></li><li><code>1 &lt;= target &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的 <strong>约瑟夫环问题</strong>，也称为约瑟夫斯问题，可以通过数学递归或者迭代的方法解决。</p><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>假设 <code>num</code> 个成员围坐成一个圈，每次计数到 <code>target</code> 号成员离开，要找到最后剩下的成员的编号。</p><ul><li>当只有一个成员时（<code>num = 1</code>），最后剩下的成员显然是编号为 <code>0</code> 的成员。</li><li>当有 <code>num &gt; 1</code> 个成员时，可以将问题简化为一个子问题：假设知道在 <code>num - 1</code> 个成员中的解法是什么，并且每次计数时剔除一名成员，最后结果会递归得到最后剩下的成员的编号。</li></ul><p>递归公式为：<code>f(n) = (f(n - 1) + target) % n</code></p><p>其中 <code>n</code> 是当前参与游戏的人数，<code>target</code> 是每次剔除的第 <code>target</code> 个人。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(num)</code>，需要求解的函数值有 <code>num</code> 个。</li><li><strong>空间复杂度</strong>：<code>O(num)</code>，函数的递归深度为 <code>num</code>，需要使用 <code>O(num)</code> 的栈空间。</li></ul><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>上面的递归可以改写为迭代，避免递归使用栈空间。</p><p>可以通过递归公式，从人数为 1 开始，逐步迭代计算，最后得到 <code>num</code> 人的结果。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(num)</code>，需要从 <code>2</code> 遍历到 <code>num</code>，逐步计算每次删除后的编号。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用常数空间存储当前的结果编号。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',24),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"num"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"iceBreakingGame"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 递归函数"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"remove"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 当 num 为 1 时，最后剩下的编号是 0"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 递归公式"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" num"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"num"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"iceBreakingGame"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 当 num 为 1 时，最后剩下的编号是 0"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 迭代计算最后的编号"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" num"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("res "),n("span",{class:"token operator"},"+"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(" i"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(q,z){const r=t("font"),l=t("RouterLink"),u=t("ExternalLinkIcon"),p=t("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟢 "),e(r,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(l,{to:"/tag/recursion.html"},{default:a(()=>[v]),_:1}),s(),e(l,{to:"/tag/math.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,e(u)])]),w,e(p,{id:"122",data:[{id:"递归"},{id:"迭代"}]},{title0:a(({value:o,isActive:c})=>[s("递归")]),title1:a(({value:o,isActive:c})=>[s("迭代")]),tab0:a(({value:o,isActive:c})=>[y]),tab1:a(({value:o,isActive:c})=>[x]),_:1})])}const O=i(h,[["render",j],["__file","jz_offer_62_1.html.vue"]]);export{O as default};
