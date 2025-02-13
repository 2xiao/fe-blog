import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-MXSjQbID.js";const d={},k=n("h1",{id:"_832-翻转图像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_832-翻转图像","aria-hidden":"true"},"#"),s(" 832. 翻转图像")],-1),m=n("code",null,"位运算",-1),g=n("code",null,"数组",-1),h=n("code",null,"双指针",-1),b=n("code",null,"矩阵",-1),v=n("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/flipping-an-image",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/flipping-an-image",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>n x n</code> binary matrix <code>image</code>, flip the image <strong>horizontally</strong> , then invert it, and return <em>the resulting image</em>.</p><p>To flip an image horizontally means that each row of the image is reversed.</p><ul><li>For example, flipping <code>[1,1,0]</code> horizontally results in <code>[0,1,1]</code>.</li></ul><p>To invert an image means that each <code>0</code> is replaced by <code>1</code>, and each <code>1</code> is replaced by <code>0</code>.</p><ul><li>For example, inverting <code>[0,1,1]</code> results in <code>[1,0,0]</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: image = [[1,1,0],[1,0,1],[0,0,0]]</p><p>Output: [[1,0,0],[0,1,0],[1,1,1]]</p><p>Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].</p><p>Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]</p><p>Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]</p><p>Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].</p><p>Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == image.length</code></li><li><code>n == image[i].length</code></li><li><code>1 &lt;= n &lt;= 20</code></li><li><code>images[i][j]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>n x n</code> 的二进制矩阵 <code>image</code> ，先 <strong>水平</strong> 翻转图像，然后 **反转 **图像并返回 <em>结果</em> 。</p><p><strong>水平</strong> 翻转图片就是将图片的每一行都进行翻转，即逆序。</p><ul><li>例如，水平翻转 <code>[1,1,0]</code> 的结果是 <code>[0,1,1]</code>。</li></ul><p><strong>反转</strong> 图片的意思是图片中的 <code>0</code> 全部被 <code>1</code> 替换， <code>1</code> 全部被 <code>0</code> 替换。</p><ul><li>例如，反转 <code>[0,1,1]</code> 的结果是 <code>[1,0,0]</code>。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> image = [[1,1,0],[1,0,1],[0,0,0]]</p><p><strong>输出：</strong>[[1,0,0],[0,1,0],[1,1,1]]</p><p><strong>解释：</strong> 首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；</p><blockquote><p>然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]</p></blockquote></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]</p><p><strong>输出：</strong>[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]</p><p><strong>解释：</strong> 首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；</p><blockquote><p>然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]</p></blockquote></blockquote><p><strong>提示：</strong></p><ul><li><code>n == image.length</code></li><li><code>n == image[i].length</code></li><li><code>1 &lt;= n &lt;= 20</code></li><li><code>images[i][j]</code> == <code>0</code> 或 <code>1</code>.</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>翻转和取反同时操作</strong>：</p><ul><li>使用双指针从行的两端开始，逐步交换对应位置的元素（水平翻转）。</li><li>在交换元素的同时，对元素进行取反操作： <ul><li>使用位运算 <code>^ 1</code> 实现取反操作（<code>0 ^ 1 = 1</code>, <code>1 ^ 1 = 0</code>）。</li></ul></li><li>注意要兼容列数为奇数的情况。</li></ul></li><li><p>遍历整个二维数组，对二维数组的每一行都应用上述操作。</p></li><li><p>修改二维数组后直接返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，二维数组有 <code>m</code> 行，每行长度为 <code>n</code>， 对每一行，我们需要遍历 <code>O(n / 2)</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">image</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flipAndInvertImage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">image</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> image<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 行的长度</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token keyword">of</span> image<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 双指针从两端进行翻转和取反</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 交换并取反</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> row<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			row<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> row<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 取反</span>
			row<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp <span class="token operator">^</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 取反</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果长度是奇数，处理中间元素</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			row<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">^=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> image<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function q(E,I){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/two-pointers.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/matrix.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/simulation.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",_,[f,a(p)]),s(),n("a",w,[x,a(p)])]),y])}const L=l(d,[["render",q],["__file","0832.html.vue"]]);export{L as default};
