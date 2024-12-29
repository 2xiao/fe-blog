import{_ as c,r as l,o as p,c as d,a as n,b as e,d as t,w as s,f as r,e as u}from"./app-r0ql_Osa.js";const k={},m=n("h1",{id:"_528-按权重随机选择",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_528-按权重随机选择","aria-hidden":"true"},"#"),e(" 528. 按权重随机选择")],-1),h=n("code",null,"数组",-1),g=n("code",null,"数学",-1),v=n("code",null,"二分查找",-1),b=n("code",null,"前缀和",-1),_=n("code",null,"随机化",-1),x={href:"https://leetcode.cn/problems/random-pick-with-weight",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/random-pick-with-weight",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> array of positive integers <code>w</code> where <code>w[i]</code> describes the <strong>weight</strong> of the <code>ith</code> index.</p><p>You need to implement the function <code>pickIndex()</code>, which <strong>randomly</strong> picks an index in the range <code>[0, w.length - 1]</code> (<strong>inclusive</strong>) and returns it. The <strong>probability</strong> of picking an index <code>i</code> is <code>w[i] / sum(w)</code>.</p><ul><li>For example, if <code>w = [1, 3]</code>, the probability of picking index <code>0</code> is <code>1 / (1 + 3) = 0.25</code> (i.e., <code>25%</code>), and the probability of picking index <code>1</code> is <code>3 / (1 + 3) = 0.75</code> (i.e., <code>75%</code>).</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Solution&quot;,&quot;pickIndex&quot;]</p><p>[[[1]],[]]</p><p><strong>Output</strong></p><p>[null,0]</p><p><strong>Explanation</strong></p><p>Solution solution = new Solution([1]);</p><p>solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;Solution&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;]</p><p>[[[1,3]],[],[],[],[],[]]</p><p><strong>Output</strong></p><p>[null,1,1,1,1,0]</p><p><strong>Explanation</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Solution solution = new Solution([1, 3]);
solution.pickIndex(); // return 1. It is returning the second element (index = 1) that has a probability of 3/4.
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 1
solution.pickIndex(); // return 0. It is returning the first element (index = 0) that has a probability of 1/4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Since this is a randomization problem, multiple answers are allowed.</p><p>All of the following outputs can be considered correct:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and so on.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= w.length &lt;= 10^4</code></li><li><code>1 &lt;= w[i] &lt;= 10^5</code></li><li><code>pickIndex</code> will be called at most <code>10^4</code> times.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>下标从 0 开始</strong> 的正整数数组 <code>w</code> ，其中 <code>w[i]</code> 代表第 <code>i</code> 个下标的权重。</p><p>请你实现一个函数 <code>pickIndex</code> ，它可以 <strong>随机地</strong> 从范围 <code>[0, w.length - 1]</code> 内（含 <code>0</code> 和 <code>w.length - 1</code>）选出并返回一个下标。选取下标 <code>i</code>的 <strong>概率</strong> 为 <code>w[i] / sum(w)</code> 。</p><ul><li>例如，对于 <code>w = [1, 3]</code>，挑选下标 <code>0</code> 的概率为 <code>1 / (1 + 3) = 0.25</code> （即，25%），而选取下标 <code>1</code> 的概率为 <code>3 / (1 + 3) = 0.75</code>（即，<code>75%</code>）。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;Solution&quot;,&quot;pickIndex&quot;]</p><p>[[[1]],[]]</p><p><strong>输出：</strong></p><p>[null,0]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Solution solution = new Solution([1]);
solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;Solution&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;,&quot;pickIndex&quot;]</p><p>[[[1,3]],[],[],[],[],[]]</p><p><strong>输出：</strong></p><p>[null,1,1,1,1,0]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Solution solution = new Solution([1, 3]);
solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 1
solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[null,1,1,1,1,0]
[null,1,1,1,1,1]
[null,1,1,1,0,0]
[null,1,1,1,0,1]
[null,1,0,1,0,0]
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>诸若此类。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= w.length &lt;= 10^4</code></li><li><code>1 &lt;= w[i] &lt;= 10^5</code></li><li><code>pickIndex</code> 将被调用不超过 <code>10^4</code> 次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构建前缀和数组：</strong></p><ul><li>权重数组 <code>w</code> 中的每个值代表选中对应下标的相对概率。</li><li>我们将权重数组转换为 <strong>前缀和数组</strong>，<code>arr[i]</code> 表示权重数组从开始到第 <code>i</code> 项的累积和。</li><li>这样可以将权重范围映射到连续区间上。例如： <ul><li>对于 <code>w = [1, 3, 2]</code>，前缀和数组为 <code>[1, 4, 6]</code>，其中： <ul><li>区间 <code>[1, 1]</code> 对应下标 <code>0</code>。</li><li>区间 <code>[2, 4]</code> 对应下标 <code>1</code>。</li><li>区间 <code>[5, 6]</code> 对应下标 <code>2</code>。</li></ul></li></ul></li></ul></li><li><p><strong>随机化：</strong></p><ul><li>生成一个范围在 <code>[1, sum(w)]</code> 的随机数，<code>sum(w)</code> 为权重总和。</li><li>通过该随机数找到对应的区间，进而确定返回的下标。</li></ul></li><li><p><strong>二分查找：</strong></p><ul><li>在前缀和数组中找到第一个大于等于随机数的位置（下标 <code>i</code>）。</li><li>由于前缀和数组是递增的，可以利用二分查找快速定位。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>构造器 <code>Solution(w)</code></strong>：构建前缀和数组需要遍历权重数组，时间复杂度为 <code>O(n)</code>。</li><li><strong>方法 <code>pickIndex()</code></strong>：使用二分查找确定下标，时间复杂度为 <code>O(log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，存储前缀和数组需要额外的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">w</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">Solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">w</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 构建前缀和数组</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> w<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
		<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">=</span> sum<span class="token punctuation">;</span> <span class="token comment">// 记录权重总和</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Solution</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pickIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 生成 [1, sum] 的随机数</span>
	<span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 二分查找第一个大于等于 random 的位置</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> random<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w);
 * var param_1 = obj.pickIndex();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"398",-1),E=n("td",{style:{"text-align":"left"}},"随机数索引",-1),j=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"水塘抽样",-1),N=n("code",null,"哈希表",-1),O=n("code",null,"数学",-1),V=n("code",null,"1+",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"497",-1),R=n("td",{style:{"text-align":"left"}},"非重叠矩形中的随机点",-1),A=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},D=n("code",null,"水塘抽样",-1),G=n("code",null,"数组",-1),H=n("code",null,"数学",-1),J=n("code",null,"4+",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/random-point-in-non-overlapping-rectangles",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"710",-1),X=n("td",{style:{"text-align":"left"}},"黑名单中的随机数",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),en=n("code",null,"哈希表",-1),tn=n("code",null,"数学",-1),sn=n("code",null,"3+",-1),on=n("td",{style:{"text-align":"center"}},"🔴",-1),an={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/random-pick-with-blacklist",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/random-pick-with-blacklist",target:"_blank",rel:"noopener noreferrer"};function pn(dn,rn){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return p(),d("div",null,[m,n("p",null,[e("🟠 "),t(i,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(o,{to:"/tag/array.html"},{default:s(()=>[h]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e(),t(o,{to:"/tag/binary-search.html"},{default:s(()=>[v]),_:1}),e(),t(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[b]),_:1}),e(),t(o,{to:"/tag/randomized.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",x,[f,t(a)]),e(),n("a",w,[y,t(a)])]),q,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[S,E,j,n("td",C,[t(o,{to:"/tag/reservoir-sampling.html"},{default:s(()=>[L]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:s(()=>[O]),_:1}),e(),V]),M,n("td",B,[n("a",T,[e("🀄️"),t(a)]),e(),n("a",Y,[e("🔗"),t(a)])])]),n("tr",null,[z,R,A,n("td",F,[t(o,{to:"/tag/reservoir-sampling.html"},{default:s(()=>[D]),_:1}),e(),t(o,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:s(()=>[H]),_:1}),e(),J]),K,n("td",P,[n("a",Q,[e("🀄️"),t(a)]),e(),n("a",U,[e("🔗"),t(a)])])]),n("tr",null,[W,X,Z,n("td",$,[t(o,{to:"/tag/array.html"},{default:s(()=>[nn]),_:1}),e(),t(o,{to:"/tag/hash-table.html"},{default:s(()=>[en]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:s(()=>[tn]),_:1}),e(),sn]),on,n("td",an,[n("a",ln,[e("🀄️"),t(a)]),e(),n("a",cn,[e("🔗"),t(a)])])])])])])}const kn=c(k,[["render",pn],["__file","0528.html.vue"]]);export{kn as default};
