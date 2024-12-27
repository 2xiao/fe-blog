import{_ as l,r as p,o as i,c as r,a as n,b as a,d as t,w as s,f as d,e as u}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_1886-判断矩阵经轮转后是否一致",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1886-判断矩阵经轮转后是否一致","aria-hidden":"true"},"#"),a(" 1886. 判断矩阵经轮转后是否一致")],-1),g=n("code",null,"数组",-1),h=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/determine-whether-matrix-can-be-obtained-by-rotation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two <code>n x n</code> binary matrices <code>mat</code> and <code>target</code>, return <code>true</code> <em>if it is possible to make</em><code>mat</code> <em>equal to</em><code>target</code> _by <strong>rotating</strong> _<code>mat</code> _in<strong>90-degree increments</strong> , or _<code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/20/grid3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]</p><p>Output: true</p><p>Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/20/grid4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]</p><p>Output: false</p><p>Explanation: It is impossible to make mat equal to target by rotating mat.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/26/grid4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]</p><p>Output: true</p><p>Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == mat.length == target.length</code></li><li><code>n == mat[i].length == target[i].length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>mat[i][j]</code> and <code>target[i][j]</code> are either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个大小为 <code>n x n</code> 的二进制矩阵 <code>mat</code> 和 <code>target</code> 。现<strong>以 90 度顺时针轮转</strong> 矩阵 <code>mat</code> 中的元素 <strong>若干次</strong> ，如果能够使 <code>mat</code> 与 <code>target</code> 一致，返回 <code>true</code> ；否则，返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/20/grid3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> mat = [[0,1],[1,0]], target = [[1,0],[0,1]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 顺时针轮转 90 度一次可以使 mat 和 target 一致。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/20/grid4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> mat = [[0,1],[1,1]], target = [[1,0],[0,1]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 无法通过轮转矩阵中的元素使 equal 与 target 一致。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/05/26/grid4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 顺时针轮转 90 度两次可以使 mat 和 target 一致。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == mat.length == target.length</code></li><li><code>n == mat[i].length == target[i].length</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>mat[i][j]</code> 和 <code>target[i][j]</code> 不是 <code>0</code> 就是 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要判断矩阵 <code>mat</code> 是否能够通过旋转来变成目标矩阵 <code>target</code>。</p><p>我们并不需要真的旋转矩阵然后再逐行逐列地对比是否全等，而只需要直接计算 <code>mat[i][j]</code> 与四种（0 度、90 度、180 度、270 度）可能旋转后对应的坐标是否匹配来判断。</p><ol><li><p><strong>初始化变量</strong></p><p>用四个变量分别表示四种旋转后的匹配情况：</p><ul><li><code>normal</code>: 是否原矩阵与目标矩阵相同，即未旋转（0 度）。</li><li><code>rightOnce</code>: 是否矩阵经过 90 度旋转后与目标矩阵相同。</li><li><code>rightTwice</code>: 是否矩阵经过 180 度旋转后与目标矩阵相同。</li><li><code>rightThrice</code>: 是否矩阵经过 270 度旋转后与目标矩阵相同。</li></ul></li><li><p><strong>双重循环遍历矩阵</strong></p><p>通过双重循环遍历矩阵 <code>mat</code> 和 <code>target</code>，对比每个元素。 对于每个元素，检查它是否在四种旋转状态下匹配目标矩阵的对应元素。</p></li><li><p><strong>检查四种旋转</strong></p><ol><li><strong>不旋转</strong>： <ul><li>检查原始矩阵 <code>mat[i][j]</code> 与目标矩阵 <code>target[i][j]</code> 是否相同。</li></ul></li><li><strong>右旋 90 度</strong>： <ul><li>旋转 90 度后，第 <code>i</code> 行第 <code>j</code> 列的元素会变成原矩阵第 <code>j</code> 行第 <code>n-1-i</code> 列的元素。</li><li>检查原始矩阵 <code>mat[i][j]</code> 与目标矩阵 <code>target[j][n - 1 - i]</code> 是否相同。</li></ul></li><li><strong>右旋 180 度</strong>： <ul><li>旋转 180 度后的元素位置是 <code>target[m - 1 - i][n - 1 - j]</code>。</li><li>检查原始矩阵 <code>mat[i][j]</code> 与目标矩阵 <code>target[j][n - 1 - i]</code> 是否相同。</li></ul></li><li><strong>右旋 270 度</strong>： <ul><li>旋转 270 度后的元素位置是 <code>target[m - 1 - j][i]</code>。</li><li>检查原始矩阵 <code>mat[i][j]</code> 与目标矩阵 <code>target[j][n - 1 - i]</code> 是否相同。</li></ul></li></ol></li><li><p><strong>提前退出优化</strong></p><p>如果在某次循环中，四种旋转都没有匹配，即 <code>normal</code>、<code>rightOnce</code>、<code>rightTwice</code> 和 <code>rightThrice</code> 都为 <code>false</code>，表示 <code>mat</code> 无论如何旋转都无法匹配 <code>target</code>，那么可以直接返回 <code>false</code>，避免继续遍历。</p></li><li><p><strong>返回结果</strong> 如果四种旋转中至少有一种情况匹配成功，则返回 <code>true</code>，表示 <code>mat</code> 可以通过旋转与 <code>target</code> 匹配。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 是矩阵的行和列数，需要遍历每个元素四次进行比较。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储标志位。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">mat</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRotation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mat<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> mat<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> normal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> rightOnce <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> rightTwice <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> rightThrice <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历矩阵，逐个检查四种旋转情况</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 不旋转 mat</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>normal <span class="token operator">&amp;&amp;</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				normal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// mat 右旋 90 度</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rightOnce <span class="token operator">&amp;&amp;</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				rightOnce <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// mat 右旋 180 度</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rightTwice <span class="token operator">&amp;&amp;</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				rightTwice <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// mat 右旋 270 度</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rightThrice <span class="token operator">&amp;&amp;</span> mat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				rightThrice <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 如果四种情况都不符合，提前返回 false</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>normal <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>rightOnce <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>rightTwice <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>rightThrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"48",-1),j=n("td",{style:{"text-align":"left"}},"旋转图像",-1),q={style:{"text-align":"center"}},T={style:{"text-align":"left"}},O=n("code",null,"数组",-1),E=n("code",null,"数学",-1),z=n("code",null,"矩阵",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"};function V(B,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[a("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[a("Easy")]),_:1}),a("  🔖  "),t(e,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),a(),t(e,{to:"/tag/matrix.html"},{default:s(()=>[h]),_:1}),a("  🔗 "),n("a",b,[v,t(o)]),a(),n("a",f,[_,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,j,n("td",q,[t(e,{to:"/problem/0048.html"},{default:s(()=>[a("[✓]")]),_:1})]),n("td",T,[t(e,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),a(),t(e,{to:"/tag/math.html"},{default:s(()=>[E]),_:1}),a(),t(e,{to:"/tag/matrix.html"},{default:s(()=>[z]),_:1})]),I,n("td",C,[n("a",L,[a("🀄️"),t(o)]),a(),n("a",N,[a("🔗"),t(o)])])])])])])}const G=l(k,[["render",V],["__file","1886.html.vue"]]);export{G as default};
