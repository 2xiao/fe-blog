import{_ as l,r as c,o as r,c as d,a as n,b as s,d as a,w as e,f as i,e as u}from"./app-r0ql_Osa.js";const h={},k=n("h1",{id:"_2-31-2-的幂",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-31-2-的幂","aria-hidden":"true"},"#"),s(" 2^31. 2 的幂")],-1),g=n("code",null,"位运算",-1),b=n("code",null,"递归",-1),m=n("code",null,"数学",-1),f={href:"https://leetcode.cn/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of two. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of two, if there exists an integer <code>x</code> such that <code>n == 2x</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 1</p><p>Output: true</p><p>Explanation: 20 = 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 16</p><p>Output: true</p><p>Explanation: 24 = 16</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 3</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without loops/recursion?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code>，请你判断该整数是否是 2 的幂次方。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>如果存在一个整数 <code>x</code> 使得 <code>n == 2x</code> ，则认为 <code>n</code> 是 2 的幂次方。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 20 = 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 16</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 24 = 16</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>进阶：</strong> 你能够不使用循环/递归解决此问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-逐步除以-2" tabindex="-1"><a class="header-anchor" href="#思路一-逐步除以-2" aria-hidden="true">#</a> 思路一：逐步除以 2</h3><ul><li>不断将 <code>n</code> 除以 2，直到 <code>n</code> 为 1。如果途中有无法整除的情况，则说明 <code>n</code> 不是 2 的幂。</li><li>如果 <code>n &lt;= 0</code>，直接返回 <code>false</code>，因为负数和 0 不可能是 2 的幂。</li></ul><h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		n <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，<code>n</code> 每次被除以 2，最多进行 <code>log n</code> 次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不需要额外空间。</li></ul><hr><h3 id="思路二-按位与操作" tabindex="-1"><a class="header-anchor" href="#思路二-按位与操作" aria-hidden="true">#</a> 思路二：按位与操作</h3><ul><li>2 的幂次方的特点是它的二进制表示中只有一位是 <code>1</code>，例如： <ul><li><code>1</code> (2^0) 是 <code>0001</code></li><li><code>2</code> (2^1) 是 <code>0010</code></li><li><code>4</code> (2^2) 是 <code>0100</code></li><li><code>8</code> (2^3) 是 <code>1000</code></li></ul></li><li>判断是否是 2 的幂次方，只需检查 <code>n</code> 是否大于 0 且满足 <code>n &amp; (n - 1) == 0</code>。 <ul><li><code>n &amp; (n - 1)</code> 会将 <code>n</code> 的最低位的 1 变为 0，而其他位保持不变。如果结果为 0，则 <code>n</code> 是 2 的幂次方。</li></ul></li></ul><h4 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只需一次按位操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路三-对数判断" tabindex="-1"><a class="header-anchor" href="#思路三-对数判断" aria-hidden="true">#</a> 思路三：对数判断</h3><ul><li>如果 <code>n</code> 是 2 的幂次方，则 <code>log2(n)</code> 是整数。</li><li>用 <code>Math.log2(n)</code> 计算 <code>log2(n)</code>，检查是否为整数。</li></ul><h4 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，<code>Math.log2()</code> 是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路四-模运算与整数溢出" tabindex="-1"><a class="header-anchor" href="#思路四-模运算与整数溢出" aria-hidden="true">#</a> 思路四：模运算与整数溢出</h3><ul><li>使用最大范围内的 2 的幂次方数（如 <code>2^30 = 1073741824</code>，因为 <code>2^31</code> 已超过 32 位整数范围）。</li><li>如果 <code>n</code> 是 2 的幂次方，则它一定能整除 <code>2^30</code>。</li></ul><h4 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1073741824</span> <span class="token operator">%</span> n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只有一次取模操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><hr><h3 id="思路五-递归法" tabindex="-1"><a class="header-anchor" href="#思路五-递归法" aria-hidden="true">#</a> 思路五：递归法</h3><ul><li>如果 <code>n</code> 是 2 的幂次方，则 <code>n</code> 应该等于 1 或者能被 2 整除后递归调用自身继续判断。</li></ul><h4 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isPowerOfTwo</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-4" tabindex="-1"><a class="header-anchor" href="#复杂度分析-4" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，<code>n</code> 每次递归减小一半。</li><li><strong>空间复杂度</strong>：<code>O(log n)</code>，递归调用栈的深度。</li></ul><hr><h3 id="思路六-预计算法" tabindex="-1"><a class="header-anchor" href="#思路六-预计算法" aria-hidden="true">#</a> 思路六：预计算法</h3><ul><li>预先存储所有 2 的幂次方（例如 <code>2^0, 2^1, ..., 2^30</code>）。</li><li>用一个集合存储这些值，判断时直接查找。</li></ul><h4 id="代码-5" tabindex="-1"><a class="header-anchor" href="#代码-5" aria-hidden="true">#</a> 代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> powersOfTwo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">30</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	powersOfTwo<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2^i</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">isPowerOfTwo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> powersOfTwo<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-5" tabindex="-1"><a class="header-anchor" href="#复杂度分析-5" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，查找集合中的元素是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，集合的大小固定为 31 个元素。</li></ul><hr><h3 id="比较总结" tabindex="-1"><a class="header-anchor" href="#比较总结" aria-hidden="true">#</a> 比较总结</h3><table><thead><tr><th>解法</th><th>时间复杂度</th><th>空间复杂度</th><th>优缺点</th></tr></thead><tbody><tr><td><strong>逐步除以 2</strong></td><td><code>O(log n)</code></td><td><code>O(1)</code></td><td>简单易懂，但不够高效</td></tr><tr><td><strong>按位与操作</strong></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>最优解，高效且简洁</td></tr><tr><td><strong>对数判断</strong></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>需依赖浮点运算，可能有精度问题</td></tr><tr><td><strong>模运算</strong></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>易于实现，但需硬编码最大范围</td></tr><tr><td><strong>递归法</strong></td><td><code>O(log n)</code></td><td><code>O(log n)</code></td><td>直观，但递归调用消耗较大</td></tr><tr><td><strong>预计算法</strong></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>适合范围固定的场景</td></tr></tbody></table><p>推荐使用 <strong>按位与操作</strong> 解法，兼具高效性和代码简洁性。</p><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,71),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"191",-1),j=n("td",{style:{"text-align":"left"}},"位1的个数",-1),q={style:{"text-align":"center"}},T={style:{"text-align":"left"}},E=n("code",null,"位运算",-1),P=n("code",null,"分治",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"326",-1),B=n("td",{style:{"text-align":"left"}},"3 的幂",-1),M={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=n("code",null,"递归",-1),A=n("code",null,"数学",-1),F=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"342",-1),J=n("td",{style:{"text-align":"left"}},"4的幂",-1),K={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"位运算",-1),W=n("code",null,"递归",-1),X=n("code",null,"数学",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"};function sn(an,en){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return r(),d("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/recursion.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",v,[w,a(o)])]),x,i(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[O,j,n("td",q,[a(t,{to:"/problem/0191.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",T,[a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[E]),_:1}),s(),a(t,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[P]),_:1})]),C,n("td",I,[n("a",L,[s("🀄️"),a(o)]),s(),n("a",N,[s("🔗"),a(o)])])]),n("tr",null,[V,B,n("td",M,[a(t,{to:"/problem/0326.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",R,[a(t,{to:"/tag/recursion.html"},{default:e(()=>[S]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:e(()=>[A]),_:1})]),F,n("td",G,[n("a",z,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])]),n("tr",null,[H,J,n("td",K,[a(t,{to:"/problem/0342.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Q,[a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[U]),_:1}),s(),a(t,{to:"/tag/recursion.html"},{default:e(()=>[W]),_:1}),s(),a(t,{to:"/tag/math.html"},{default:e(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[s("🀄️"),a(o)]),s(),n("a",nn,[s("🔗"),a(o)])])])])])])}const on=l(h,[["render",sn],["__file","0231.html.vue"]]);export{on as default};
