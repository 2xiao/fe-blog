import{_ as c,r as l,o as r,c as d,a as n,b as e,d as t,w as s,f as p,e as u}from"./app-9CeBk-uV.js";const h={},g=n("h1",{id:"_2154-将找到的值乘以-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2154-将找到的值乘以-2","aria-hidden":"true"},"#"),e(" 2154. 将找到的值乘以 2")],-1),m=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),k=n("code",null,"排序",-1),b=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>nums</code>. You are also given an integer <code>original</code> which is the first number that needs to be searched for in <code>nums</code>.</p><p>You then do the following steps:</p><ol><li>If <code>original</code> is found in <code>nums</code>, <strong>multiply</strong> it by two (i.e., set <code>original = 2 * original</code>).</li><li>Otherwise, <strong>stop</strong> the process.</li><li><strong>Repeat</strong> this process with the new number as long as you keep finding the number.</li></ol><p>Return <em>the <strong>final</strong> value of</em> <code>original</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [5,3,6,1,12], original = 3</p><p>Output: 24</p><p>Explanation:</p><ul><li>3 is found in nums. 3 is multiplied by 2 to obtain 6.</li><li>6 is found in nums. 6 is multiplied by 2 to obtain 12.</li><li>12 is found in nums. 12 is multiplied by 2 to obtain 24.</li><li>24 is not found in nums. Thus, 24 is returned.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,7,9], original = 4</p><p>Output: 4</p><p>Explanation:</p><ul><li>4 is not found in nums. Thus, 4 is returned.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i], original &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，另给你一个整数 <code>original</code> ，这是需要在 <code>nums</code> 中搜索的第一个数字。</p><p>接下来，你需要按下述步骤操作：</p><ol><li>如果在 <code>nums</code> 中找到 <code>original</code> ，将 <code>original</code> <strong>乘以</strong> 2 ，得到新 <code>original</code>（即，令 <code>original = 2 * original</code>）。</li><li>否则，停止这一过程。</li><li>只要能在数组中找到新 <code>original</code> ，就对新 <code>original</code> 继续 <strong>重复</strong> 这一过程。</li></ol><p>返回 <code>original</code> 的 <strong>最终</strong> 值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [5,3,6,1,12], original = 3</p><p><strong>输出：</strong> 24</p><p><strong>解释：</strong></p><ul><li>3 能在 nums 中找到。3 * 2 = 6 。</li><li>6 能在 nums 中找到。6 * 2 = 12 。</li><li>12 能在 nums 中找到。12 * 2 = 24 。</li><li>24 不能在 nums 中找到。因此，返回 24 。</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,7,9], original = 4</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><ul><li>4 不能在 nums 中找到。因此，返回 4 。</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i], original &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用 Set 优化查询效率</strong>：</p><ul><li>由于需要频繁判断某个值是否存在于数组中，使用哈希集合 <code>Set</code> 存储 <code>nums</code> 中的元素。</li><li>这样可以将每次查询的时间复杂度降为 <code>O(1)</code>。</li></ul></li><li><p><strong>循环处理</strong>：</p><ul><li>在集合中检查当前的 <code>original</code> 是否存在。</li><li>如果存在，将 <code>original</code> 乘以 <code>2</code> 并继续循环。</li><li>如果不存在，跳出循环并返回当前的 <code>original</code> 值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>将数组转换为集合的时间复杂度是 <code>O(n)</code>。</li><li>循环过程中，每次查询 <code>set.has(original)</code> 的时间复杂度是 <code>O(1)</code>，最多查询 <code>log(max / original)</code> 次，其中 <code>max</code> 是数组中的最大值。</li><li>因此，总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个哈希集合存储数组元素。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">original</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findFinalValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> original</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将数组转换为集合</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果集合中存在当前 original</span>
		original <span class="token operator">*=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 乘以 2</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> original<span class="token punctuation">;</span> <span class="token comment">// 返回最终值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"747",-1),E=n("td",{style:{"text-align":"left"}},"至少是其他数字两倍的最大数",-1),V={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"排序",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/largest-number-at-least-twice-of-others",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1346",-1),T=n("td",{style:{"text-align":"left"}},"检查整数及其两倍数是否存在",-1),Y={style:{"text-align":"center"}},F={style:{"text-align":"left"}},z=n("code",null,"数组",-1),A=n("code",null,"哈希表",-1),D=n("code",null,"双指针",-1),G=n("code",null,"2+",-1),H=n("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/check-if-n-and-its-double-exist",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/check-if-n-and-its-double-exist",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),d("div",null,[g,n("p",null,[e("🟢 "),t(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[_]),_:1}),e(),t(o,{to:"/tag/sorting.html"},{default:s(()=>[k]),_:1}),e(),t(o,{to:"/tag/simulation.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),n("a",f,[y,t(a)]),e(),n("a",v,[x,t(a)])]),w,p(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[q,E,n("td",V,[t(o,{to:"/problem/0747.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",C,[t(o,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),e(),t(o,{to:"/tag/sorting.html"},{default:s(()=>[L]),_:1})]),N,n("td",R,[n("a",S,[e("🀄️"),t(a)]),e(),n("a",j,[e("🔗"),t(a)])])]),n("tr",null,[B,T,n("td",Y,[t(o,{to:"/problem/1346.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",F,[t(o,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[A]),_:1}),e(),t(o,{to:"/tag/two-pointers.html"},{default:s(()=>[D]),_:1}),e(),G]),H,n("td",J,[n("a",K,[e("🀄️"),t(a)]),e(),n("a",M,[e("🔗"),t(a)])])])])])])}const X=c(h,[["render",P],["__file","2154.html.vue"]]);export{X as default};
