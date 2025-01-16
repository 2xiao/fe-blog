import{_ as r,r as c,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-KDJRKGep.js";const h={},g=e("h1",{id:"_2078-两栋颜色不同且距离最远的房子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2078-两栋颜色不同且距离最远的房子","aria-hidden":"true"},"#"),n(" 2078. 两栋颜色不同且距离最远的房子")],-1),m=e("code",null,"贪心",-1),k=e("code",null,"数组",-1),_={href:"https://leetcode.cn/problems/two-furthest-houses-with-different-colors",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/two-furthest-houses-with-different-colors",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> houses evenly lined up on the street, and each house is beautifully painted. You are given a <strong>0-indexed</strong> integer array <code>colors</code> of length <code>n</code>, where <code>colors[i]</code> represents the color of the <code>ith</code> house.</p><p>Return <em>the <strong>maximum</strong> distance between <strong>two</strong> houses with <strong>different</strong> colors</em>.</p><p>The distance between the <code>ith</code> and <code>jth</code> houses is <code>abs(i - j)</code>, where <code>abs(x)</code> is the <strong>absolute value</strong> of <code>x</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/10/31/eg1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: colors = [<em><strong>1</strong></em> ,1,1,<strong><em>6</em></strong> ,1,1,1]</p><p>Output: 3</p><p>Explanation: In the above image, color 1 is blue, and color 6 is red.</p><p>The furthest two houses with different colors are house 0 and house 3.</p><p>House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.</p><p>Note that houses 3 and 6 can also produce the optimal answer.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/10/31/eg2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: colors = [<em><strong>1</strong></em> ,8,3,8,<em><strong>3</strong></em>]</p><p>Output: 4</p><p>Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.</p><p>The furthest two houses with different colors are house 0 and house 4.</p><p>House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: colors = [<em><strong>0</strong></em> ,<strong><em>1</em></strong>]</p><p>Output: 1</p><p>Explanation: The furthest two houses with different colors are house 0 and house 1.</p><p>House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == colors.length</code></li><li><code>2 &lt;= n &lt;= 100</code></li><li><code>0 &lt;= colors[i] &lt;= 100</code></li><li>Test data are generated such that <strong>at least</strong> two houses have different colors.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>街上有 <code>n</code> 栋房子整齐地排成一列，每栋房子都粉刷上了漂亮的颜色。给你一个下标从 <strong>0</strong> 开始且长度为 <code>n</code> 的整数数组 <code>colors</code> ，其中 <code>colors[i]</code> 表示第 <code>i</code> 栋房子的颜色。</p><p>返回 <strong>两栋</strong> 颜色 <strong>不同</strong> 房子之间的 <strong>最大</strong> 距离。</p><p>第 <code>i</code> 栋房子和第 <code>j</code> 栋房子之间的距离是 <code>abs(i - j)</code> ，其中 <code>abs(x)</code> 是 <code>x</code> 的绝对值。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/10/31/eg1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> colors = [<strong><em>1</em></strong> ,1,1,<em><strong>6</strong></em> ,1,1,1]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 上图中，颜色 1 标识成蓝色，颜色 6 标识成红色。</p><p>两栋颜色不同且距离最远的房子是房子 0 和房子 3 。</p><p>房子 0 的颜色是颜色 1 ，房子 3 的颜色是颜色 6 。两栋房子之间的距离是 abs(0 - 3) = 3 。</p><p>注意，房子 3 和房子 6 也可以产生最佳答案。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/10/31/eg2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> colors = [<em><strong>1</strong></em> ,8,3,8,<em><strong>3</strong></em>]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 上图中，颜色 1 标识成蓝色，颜色 8 标识成黄色，颜色 3 标识成绿色。</p><p>两栋颜色不同且距离最远的房子是房子 0 和房子 4 。</p><p>房子 0 的颜色是颜色 1 ，房子 4 的颜色是颜色 3 。两栋房子之间的距离是 abs(0 - 4) = 4 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> colors = [<em><strong>0</strong></em> ,<em><strong>1</strong></em>]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 两栋颜色不同且距离最远的房子是房子 0 和房子 1 。</p><p>房子 0 的颜色是颜色 0 ，房子 1 的颜色是颜色 1 。两栋房子之间的距离是 abs(0 - 1) = 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == colors.length</code></li><li><code>2 &lt;= n &lt;= 100</code></li><li><code>0 &lt;= colors[i] &lt;= 100</code></li><li>生成的测试数据满足 <strong>至少</strong> 存在 2 栋颜色不同的房子</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的目标是找到 <code>colors</code> 数组中两个不同颜色的最大距离（索引差）。由于数组的第一个元素 <code>colors[0]</code> 和最后一个元素 <code>colors[n-1]</code> 是潜在的极值点，可以从这两端进行判断。</p><ol><li><p><strong>初始化变量</strong>:</p><ul><li>用 <code>distance</code> 记录当前最大距离。</li><li>获取数组长度 <code>n</code>。</li></ul></li><li><p><strong>从两端判断最大距离</strong>:</p><ul><li>从左向右遍历： <ul><li>如果当前颜色与最后一个颜色 <code>colors[n-1]</code> 不同，则计算距离 <code>n - 1 - i</code>。</li><li>如果当前颜色与第一个颜色 <code>colors[0]</code> 不同，则计算距离 <code>i</code>。</li></ul></li><li>在上述两种情况中，更新最大距离 <code>distance</code>。</li></ul></li><li><p>返回 <code>distance</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组一次</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">colors</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">colors</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> colors<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>colors<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> colors<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			distance <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>distance<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>colors<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> colors<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			distance <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>distance<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> distance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"1299",-1),q=e("td",{style:{"text-align":"left"}},"将每个元素替换为右侧最大元素",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},j=e("code",null,"数组",-1),I=e("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/replace-elements-with-greatest-element-on-right-side",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side",target:"_blank",rel:"noopener noreferrer"},O=e("td",{style:{"text-align":"center"}},"1855",-1),V=e("td",{style:{"text-align":"left"}},"下标对中的最大距离",-1),z=e("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},H=e("code",null,"数组",-1),R=e("code",null,"双指针",-1),M=e("code",null,"二分查找",-1),D=e("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/maximum-distance-between-a-pair-of-values",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/maximum-distance-between-a-pair-of-values",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"2016",-1),G=e("td",{style:{"text-align":"left"}},"增量元素之间的最大差值",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},P=e("code",null,"数组",-1),Q=e("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/maximum-difference-between-increasing-elements",target:"_blank",rel:"noopener noreferrer"};function Z($,ee){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),i("div",null,[g,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[f,t(a)]),n(),e("a",b,[x,t(a)])]),v,d(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,q,e("td",E,[t(o,{to:"/problem/1299.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",T,[t(o,{to:"/tag/array.html"},{default:s(()=>[j]),_:1})]),I,e("td",N,[e("a",C,[n("🀄️"),t(a)]),n(),e("a",L,[n("🔗"),t(a)])])]),e("tr",null,[O,V,z,e("td",B,[t(o,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),n(),t(o,{to:"/tag/two-pointers.html"},{default:s(()=>[R]),_:1}),n(),t(o,{to:"/tag/binary-search.html"},{default:s(()=>[M]),_:1})]),D,e("td",S,[e("a",Y,[n("🀄️"),t(a)]),n(),e("a",A,[n("🔗"),t(a)])])]),e("tr",null,[F,G,e("td",J,[t(o,{to:"/problem/2016.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",K,[t(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1})]),Q,e("td",U,[e("a",W,[n("🀄️"),t(a)]),n(),e("a",X,[n("🔗"),t(a)])])])])])])}const te=r(h,[["render",Z],["__file","2078.html.vue"]]);export{te as default};
