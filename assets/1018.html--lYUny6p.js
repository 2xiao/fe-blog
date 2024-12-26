import{_ as i,r as c,o as r,c as d,a as e,b as n,d as t,w as a,f as p,e as u}from"./app-3dvbhwow.js";const h={},m=e("h1",{id:"_1018-可被-5-整除的二进制前缀",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1018-可被-5-整除的二进制前缀","aria-hidden":"true"},"#"),n(" 1018. 可被 5 整除的二进制前缀")],-1),_=e("code",null,"位运算",-1),k=e("code",null,"数组",-1),b={href:"https://leetcode.cn/problems/binary-prefix-divisible-by-5",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/binary-prefix-divisible-by-5",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a binary array <code>nums</code> (<strong>0-indexed</strong>).</p><p>We define <code>xi</code> as the number whose binary representation is the subarray <code>nums[0..i]</code> (from most-significant-bit to least-significant-bit).</p><ul><li>For example, if <code>nums = [1,0,1]</code>, then <code>x0 = 1</code>, <code>x1 = 2</code>, and <code>x2 = 5</code>.</li></ul><p>Return <em>an array of booleans</em><code>answer</code> <em>where</em><code>answer[i]</code><em>is</em><code>true</code> <em>if</em><code>xi</code><em>is divisible by</em><code>5</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,1]</p><p>Output: [true,false,false]</p><p>Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.</p><p>Only the first number is divisible by 5, so answer[0] is true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,1,1]</p><p>Output: [false,false,false]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二进制数组 <code>nums</code> (<strong>索引从 0 开始</strong>)。</p><p>我们将<code>xi</code> 定义为其二进制表示形式为子数组 <code>nums[0..i]</code> (从最高有效位到最低有效位)。</p><ul><li>例如，如果 <code>nums =[1,0,1]</code> ，那么 <code>x0 = 1</code>, <code>x1 = 2</code>, 和 <code>x2 = 5</code>。</li></ul><p>返回布尔值列表 <code>answer</code>，只有当 <code>xi</code> 可以被 <code>5</code> 整除时，答案 <code>answer[i]</code> 为 <code>true</code>，否则为 <code>false</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,1]</p><p><strong>输出：</strong>[true,false,false]</p><p><strong>解释：</strong></p><p>输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1]</p><p><strong>输出：</strong>[false,false,false]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> 仅为 <code>0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>累积计算二进制数</strong>：</p><ul><li>使用一个变量 <code>num</code> 表示当前的二进制数。</li><li>遍历数组 <code>nums</code>，对于每个数字 <code>bit</code>，通过位运算将其追加到当前的二进制数中：<code>num = (num &lt;&lt; 1 | bit)</code>。</li></ul></li><li><p><strong>取模优化</strong>：</p><p>由于我们只关心能否被 5 整除，可以在每次更新 <code>num</code> 后直接对 5 取模：<code>num %= 5</code>。</p><ul><li>例如，当 <code>num = 6</code> 时，对 5 取模结果为 <code>6 % 5 = 1</code>，在下一次循环中： <ul><li>如果直接用 <code>num = 6</code>：<code>(6 &lt;&lt; 1 | 1) % 5 = 3</code></li><li>如果用对 5 取模后的 <code>num = 6 % 5</code>：<code>((6 % 5) &lt;&lt; 1 | 1) % 5 = 3</code></li></ul></li><li>这样可以避免 <code>num</code> 变得过大，同时仍能正确判断是否整除。</li></ul></li><li><p>如果当前的 <code>num</code> 对 5 取模结果为 0，表示当前形成的二进制数能被 5 整除，将 <code>true</code> 加入结果数组 <code>res</code>；否则加入 <code>false</code>。</p></li><li><p>遍历结束后，返回结果数组 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组占用的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">prefixesDivBy5</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> bit <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		num <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> bit<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"2455",-1),q=e("td",{style:{"text-align":"left"}},"可被三整除的偶数的平均值",-1),E=e("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=e("code",null,"数组",-1),N=e("code",null,"数学",-1),O=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three",target:"_blank",rel:"noopener noreferrer"},j=e("td",{style:{"text-align":"center"}},"2644",-1),R=e("td",{style:{"text-align":"left"}},"找出可整除性得分最大的整数",-1),T=e("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=e("code",null,"数组",-1),S=e("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/find-the-maximum-divisibility-score",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/find-the-maximum-divisibility-score",target:"_blank",rel:"noopener noreferrer"};function A(G,H){const l=c("font"),o=c("RouterLink"),s=c("ExternalLinkIcon");return r(),d("div",null,[m,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/bit-manipulation.html"},{default:a(()=>[_]),_:1}),n(),t(o,{to:"/tag/array.html"},{default:a(()=>[k]),_:1}),n("  🔗 "),e("a",b,[g,t(s)]),n(),e("a",f,[v,t(s)])]),x,p(" prettier-ignore "),e("table",null,[y,e("tbody",null,[e("tr",null,[w,q,E,e("td",C,[t(o,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),n(),t(o,{to:"/tag/math.html"},{default:a(()=>[N]),_:1})]),O,e("td",V,[e("a",B,[n("🀄️"),t(s)]),n(),e("a",I,[n("🔗"),t(s)])])]),e("tr",null,[j,R,T,e("td",D,[t(o,{to:"/tag/array.html"},{default:a(()=>[F]),_:1})]),S,e("td",W,[e("a",Y,[n("🀄️"),t(s)]),n(),e("a",z,[n("🔗"),t(s)])])])])])])}const K=i(h,[["render",A],["__file","1018.html.vue"]]);export{K as default};
