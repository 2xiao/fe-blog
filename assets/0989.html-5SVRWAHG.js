import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_989-数组形式的整数加法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_989-数组形式的整数加法","aria-hidden":"true"},"#"),t(" 989. 数组形式的整数加法")],-1),h=n("code",null,"数组",-1),_=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>array-form</strong> of an integer <code>num</code> is an array representing its digits in left to right order.</p><ul><li>For example, for <code>num = 1321</code>, the array form is <code>[1,3,2,1]</code>.</li></ul><p>Given <code>num</code>, the <strong>array-form</strong> of an integer, and an integer <code>k</code>, return <em>the<strong>array-form</strong> of the integer</em> <code>num + k</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = [1,2,0,0], k = 34</p><p>Output: [1,2,3,4]</p><p>Explanation: 1200 + 34 = 1234</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = [2,7,4], k = 181</p><p>Output: [4,5,5]</p><p>Explanation: 274 + 181 = 455</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = [2,1,5], k = 806</p><p>Output: [1,0,2,1]</p><p>Explanation: 215 + 806 = 1021</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num.length &lt;= 10^4</code></li><li><code>0 &lt;= num[i] &lt;= 9</code></li><li><code>num</code> does not contain any leading zeros except for the zero itself.</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>整数的 <strong>数组形式</strong> <code>num</code> 是按照从左到右的顺序表示其数字的数组。</p><ul><li>例如，对于 <code>num = 1321</code> ，数组形式是 <code>[1,3,2,1]</code> 。</li></ul><p>给定 <code>num</code> ，整数的 <strong>数组形式</strong> ，和整数 <code>k</code> ，返回 <em>整数<code>num + k</code> 的 <strong>数组形式</strong></em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = [1,2,0,0], k = 34</p><p><strong>输出：</strong>[1,2,3,4]</p><p><strong>解释：</strong> 1200 + 34 = 1234</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = [2,7,4], k = 181</p><p><strong>输出：</strong>[4,5,5]</p><p><strong>解释：</strong> 274 + 181 = 455</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = [2,1,5], k = 806</p><p><strong>输出：</strong>[1,0,2,1]</p><p><strong>解释：</strong> 215 + 806 = 1021</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num.length &lt;= 10^4</code></li><li><code>0 &lt;= num[i] &lt;= 9</code></li><li><code>num</code> 不包含任何前导零，除了零本身</li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以模拟数字的逐位加法，从数组的最右边开始进行加法（从 <code>num</code> 的最后一位和 <code>k</code> 的个位开始），逐位加到最终的结果中。每一位加法可能会产生一个进位，需要将进位保留并继续到下一位。</p><ol><li><p><strong>变量初始化</strong>:</p><ul><li><code>i = num.length - 1</code>: 从 <code>num</code> 数组的末尾开始处理。</li><li><code>carry = 0</code>: 进位初始化为 <code>0</code>。</li></ul></li><li><p><strong>循环处理每一位</strong>:</p><ul><li>在 <code>while</code> 循环中，条件是 <code>i &gt;= 0</code> 或 <code>k &gt; 0</code>，即仍有 <code>num</code> 中的数字或者 <code>k</code> 中的数字需要处理。</li><li>每次通过 <code>k % 10</code> 获取 <code>k</code> 的当前个位数</li><li>如果 <code>i &gt;= 0</code>，当前和为 <code>sum = (k % 10) + carry + num[i]</code>，将当前和的个位数更新到 <code>num[i]</code>。</li><li>否则，当前和为 <code>sum = (k % 10) + carry</code>，将当前和的个位数直接插入到 <code>num</code> 的最前面。</li><li>更新进位 <code>carry</code> 和 <code>k</code>，<code>carry</code> 为当前和的十位部分，<code>k</code> 则右移一位。</li></ul></li><li><p><strong>处理进位</strong>: 如果加法过程中产生了最终的进位（<code>carry</code> 不为零），将其插入到数组的最前面。</p></li><li><p><strong>返回结果</strong>: 返回更新后的 <code>num</code> 数组。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(max(n, log(k)))</code>，<code>n</code> 为 <code>num</code> 数组的长度，<code>log(k)</code> 是 <code>k</code> 的位数。需要对 <code>num</code> 和 <code>k</code> 的每一位进行处理，时间复杂度是二者的最大值。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常数空间来存储进位。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addToArrayForm</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> num<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>
		carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">+</span> carry<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			num<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果 num 已经遍历完，直接将结果插入 num 的最前面</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			num<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 当前位更新为加法结果的个位</span>
		<span class="token punctuation">}</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算进位</span>
		k <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>k <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 k 除以 10 以去掉当前位</span>
		i<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>carry<span class="token punctuation">)</span> num<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果最后有进位，插入到最前面</span>
	<span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2",-1),q=n("td",{style:{"text-align":"left"}},"两数相加",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"递归",-1),L=n("code",null,"链表",-1),N=n("code",null,"数学",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"66",-1),z=n("td",{style:{"text-align":"left"}},"加一",-1),F={style:{"text-align":"center"}},M={style:{"text-align":"left"}},R=n("code",null,"数组",-1),A=n("code",null,"数学",-1),G=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"67",-1),K=n("td",{style:{"text-align":"left"}},"二进制求和",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"位运算",-1),W=n("code",null,"数学",-1),X=n("code",null,"字符串",-1),Y=n("code",null,"1+",-1),Z=n("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"415",-1),sn=n("td",{style:{"text-align":"left"}},"字符串相加",-1),an={style:{"text-align":"center"}},on={style:{"text-align":"left"}},ln=n("code",null,"数学",-1),cn=n("code",null,"字符串",-1),pn=n("code",null,"模拟",-1),rn=n("td",{style:{"text-align":"center"}},"🟢",-1),dn={style:{"text-align":"center"}},un={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"};function mn(hn,_n){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[h]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",g,[f,e(o)]),t(),n("a",b,[y,e(o)])]),v,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[e(a,{to:"/problem/0002.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",C,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[N]),_:1})]),O,n("td",V,[n("a",j,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])]),n("tr",null,[T,z,n("td",F,[e(a,{to:"/problem/0066.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[e(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[A]),_:1})]),G,n("td",S,[n("a",D,[t("🀄️"),e(o)]),t(),n("a",H,[t("🔗"),e(o)])])]),n("tr",null,[J,K,n("td",P,[e(a,{to:"/problem/0067.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",Q,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[U]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[X]),_:1}),t(),Y]),Z,n("td",$,[n("a",nn,[t("🀄️"),e(o)]),t(),n("a",tn,[t("🔗"),e(o)])])]),n("tr",null,[en,sn,n("td",an,[e(a,{to:"/problem/0415.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",on,[e(a,{to:"/tag/math.html"},{default:s(()=>[ln]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[cn]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[pn]),_:1})]),rn,n("td",dn,[n("a",un,[t("🀄️"),e(o)]),t(),n("a",kn,[t("🔗"),e(o)])])])])])])}const fn=p(k,[["render",mn],["__file","0989.html.vue"]]);export{fn as default};
