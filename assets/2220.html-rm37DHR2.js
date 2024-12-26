import{_ as i,r as l,o as p,c as d,a as t,b as e,d as n,w as s,f as u,e as r}from"./app-3dvbhwow.js";const m={},g=t("h1",{id:"_2220-转换数字的最少位翻转次数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2220-转换数字的最少位翻转次数","aria-hidden":"true"},"#"),e(" 2220. 转换数字的最少位翻转次数")],-1),h=t("code",null,"位运算",-1),k={href:"https://leetcode.cn/problems/minimum-bit-flips-to-convert-number",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-bit-flips-to-convert-number",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"LeetCode",-1),v=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>bit flip</strong> of a number <code>x</code> is choosing a bit in the binary representation of <code>x</code> and <strong>flipping</strong> it from either <code>0</code> to <code>1</code> or <code>1</code> to <code>0</code>.</p><ul><li>For example, for <code>x = 7</code>, the binary representation is <code>111</code> and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get <code>110</code>, flip the second bit from the right to get <code>101</code>, flip the fifth bit from the right (a leading zero) to get <code>10111</code>, etc.</li></ul><p>Given two integers <code>start</code> and <code>goal</code>, return _the<strong>minimum</strong> number of <strong>bit flips</strong> to convert _<code>start</code> <em>to</em><code>goal</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: start = 10, goal = 7</p><p>Output: 3</p><p>Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:</p><ul><li>Flip the first bit from the right: 101 <em>0</em> -&gt; 101 <em>1</em>.</li><li>Flip the third bit from the right: 1 <em>0</em> 11 -&gt; 1 <em>1</em> 11.</li><li>Flip the fourth bit from the right: <em>1</em> 111 -&gt; <em>0</em> 111.</li></ul><p>It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: start = 3, goal = 4</p><p>Output: 3</p><p>Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:</p><ul><li>Flip the first bit from the right: 01 <em>1</em> -&gt; 01 <em>0</em>.</li><li>Flip the second bit from the right: 0 <em>1</em> 0 -&gt; 0 <em>0</em> 0.</li><li>Flip the third bit from the right: <em>0</em> 00 -&gt; <em>1</em> 00.</li></ul><p>It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= start, goal &lt;= 10^9</code></li></ul>',10),x=t("strong",null,"Note:",-1),y=r('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一次 <strong>位翻转</strong> 定义为将数字 <code>x</code> 二进制中的一个位进行 <strong>翻转</strong> 操作，即将 <code>0</code> 变成 <code>1</code> ，或者将 <code>1</code> 变成 <code>0</code> 。</p><ul><li>比方说，<code>x = 7</code> ，二进制表示为 <code>111</code> ，我们可以选择任意一个位（包含没有显示的前导 0 ）并进行翻转。比方说我们可以翻转最右边一位得到 <code>110</code> ，或者翻转右边起第二位得到 <code>101</code> ，或者翻转右边起第五位（这一位是前导 0 ）得到 <code>10111</code> 等等。</li></ul><p>给你两个整数 <code>start</code> 和 <code>goal</code> ，请你返回将 <code>start</code> 转变成 <code>goal</code> 的 <strong>最少位翻转</strong> 次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> start = 10, goal = 7</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 10 和 7 的二进制表示分别为 1010 和 0111 。我们可以通过 3 步将 10 转变成 7 ：</p><ul><li>翻转右边起第一位得到：101** <em>0</em>** -&gt; 101** <em>1 。</em>**</li><li>翻转右边起第三位：1** <em>0</em>** 11 -&gt; 1** <em>1</em>** 11 。</li><li>翻转右边起第四位：** <em>1</em>** 111 -&gt; <strong><em>0</em></strong> 111 。</li></ul><p>我们无法在 3 步内将 10 转变成 7 。所以我们返回 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> start = 3, goal = 4</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 3 和 4 的二进制表示分别为 011 和 100 。我们可以通过 3 步将 3 转变成 4 ：</p><ul><li>翻转右边起第一位：01** <em>1</em>** -&gt; 01 <em><strong>0</strong></em> 。</li><li>翻转右边起第二位：0** <em>1</em>** 0 -&gt; 0** <em>0</em>** 0 。</li><li>翻转右边起第三位：** <em>0</em>** 00 -&gt; <strong><em>1</em></strong> 00 。</li></ul><p>我们无法在 3 步内将 3 变成 4 。所以我们返回 3 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= start, goal &lt;= 10^9</code></li></ul>',10),w=t("strong",null,"注意：",-1),q=r(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>最小的位反转次数其实就是 <code>start</code> 和 <code>goal</code> 的汉明距离。</p><ol><li><p><strong>位操作</strong>：对于每一位，通过位运算来获取 <code>start</code> 和 <code>goal</code> 的对应二进制位：</p><ul><li><code>(start &amp; 1)</code> 获取 <code>start</code> 最低位的值（0 或 1）。</li><li><code>(goal &amp; 1)</code> 获取 <code>goal</code> 最低位的值（0 或 1）。</li></ul></li><li><p><strong>比较每一位</strong>：如果 <code>start</code> 和 <code>goal</code> 对应位不同，即 <code>(start &amp; 1) !== (goal &amp; 1)</code>，就增加位反转次数。</p></li><li><p><strong>右移</strong>：为了继续检查下一个二进制位，需要将 <code>start</code> 和 <code>goal</code> 各自右移一位，即使用无符号右移运算符 <code>&gt;&gt;&gt;</code>，这将丢弃最低位，检查接下来的二进制位。</p></li><li><p><strong>重复操作</strong>：重复执行上述操作，直到 <code>start</code> 和 <code>goal</code> 都为 0。此时，已经检查完了所有的二进制位。</p></li><li><p><strong>返回结果</strong>：返回最终的位反转次数。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，对于一个整数来说，位数最多为 32 位，因此最坏情况下需要执行 32 次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">start</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">goal</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minBitFlips</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> goal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> goal <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 直到 start 和 goal 都为 0</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token punctuation">(</span>goal <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查最低位是否相同</span>
			count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果不同，距离加 1</span>
		<span class="token punctuation">}</span>
		start <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 start，检查下一个二进制位</span>
		goal <span class="token operator">&gt;&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移 goal，检查下一个二进制位</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span> <span class="token comment">// 返回最终的位翻转次数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),F=t("td",{style:{"text-align":"center"}},"1318",-1),I=t("td",{style:{"text-align":"left"}},"或运算的最小翻转次数",-1),N={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=t("code",null,"位运算",-1),V=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"2997",-1),H=t("td",{style:{"text-align":"left"}},"使数组异或和等于 K 的最少操作次数",-1),W=t("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},R=t("code",null,"位运算",-1),A=t("code",null,"数组",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k",target:"_blank",rel:"noopener noreferrer"};function J(M,P){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),d("div",null,[g,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[h]),_:1}),e("  🔗 "),t("a",k,[_,n(a)]),e(),t("a",b,[f,n(a)])]),v,t("p",null,[x,e(" This question is the same as "),n(o,{to:"/problem/0461.html"},{default:s(()=>[e("461: Hamming Distance")]),_:1})]),y,t("p",null,[w,e(" 本题与 "),n(o,{to:"/problem/0461.html"},{default:s(()=>[e("461. 汉明距离")]),_:1}),e(" 相同。")]),q,u(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[F,I,t("td",N,[n(o,{to:"/problem/1318.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[L]),_:1})]),V,t("td",B,[t("a",O,[e("🀄️"),n(a)]),e(),t("a",T,[e("🔗"),n(a)])])]),t("tr",null,[j,H,W,t("td",z,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[R]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[A]),_:1})]),D,t("td",G,[t("a",K,[e("🀄️"),n(a)]),e(),t("a",S,[e("🔗"),n(a)])])])])])])}const U=i(m,[["render",J],["__file","2220.html.vue"]]);export{U as default};
