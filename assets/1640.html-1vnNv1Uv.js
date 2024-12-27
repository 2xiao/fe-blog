import{_ as r,r as e,o as l,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-fqckLmln.js";const d={},k=n("h1",{id:"_1640-能否连接形成数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1640-能否连接形成数组","aria-hidden":"true"},"#"),s(" 1640. 能否连接形成数组")],-1),g=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),h={href:"https://leetcode.cn/problems/check-array-formation-through-concatenation",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/check-array-formation-through-concatenation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <strong>distinct</strong> integers <code>arr</code> and an array of integer arrays <code>pieces</code>, where the integers in <code>pieces</code> are <strong>distinct</strong>. Your goal is to form <code>arr</code> by concatenating the arrays in <code>pieces</code> <strong>in any order</strong>. However, you are <strong>not</strong> allowed to reorder the integers in each array <code>pieces[i]</code>.</p><p>Return <code>true</code> <em>if it is possible</em> <em>to form the array</em> <code>arr</code> <em>from</em> <code>pieces</code>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [15,88], pieces = [[88],[15]]</p><p>Output: true</p><p>Explanation: Concatenate [15] then [88]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [49,18,16], pieces = [[16,18,49]]</p><p>Output: false</p><p>Explanation: Even though the numbers match, we cannot reorder pieces[0].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]</p><p>Output: true</p><p>Explanation: Concatenate [91] then [4,64] then [78]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pieces.length &lt;= arr.length &lt;= 100</code></li><li><code>sum(pieces[i].length) == arr.length</code></li><li><code>1 &lt;= pieces[i].length &lt;= arr.length</code></li><li><code>1 &lt;= arr[i], pieces[i][j] &lt;= 100</code></li><li>The integers in <code>arr</code> are <strong>distinct</strong>.</li><li>The integers in <code>pieces</code> are <strong>distinct</strong> (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> ，数组中的每个整数 <strong>互不相同</strong> 。另有一个由整数数组构成的数组 <code>pieces</code>，其中的整数也 <strong>互不相同</strong> 。请你以 <strong>任意顺序</strong> 连接 <code>pieces</code> 中的数组以形成 <code>arr</code> 。但是，<strong>不允许</strong> 对每个数组 <code>pieces[i]</code> 中的整数重新排序。</p><p>如果可以连接 <code>pieces</code> 中的数组形成 <code>arr</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [15,88], pieces = [[88],[15]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 依次连接 [15] 和 [88]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [49,18,16], pieces = [[16,18,49]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 即便数字相符，也不能重新排列 pieces[0]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [91,4,64,78], pieces = [[78],[4,64],[91]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 依次连接 [91]、[4,64] 和 [78]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= pieces.length &lt;= arr.length &lt;= 100</code></li><li><code>sum(pieces[i].length) == arr.length</code></li><li><code>1 &lt;= pieces[i].length &lt;= arr.length</code></li><li><code>1 &lt;= arr[i], pieces[i][j] &lt;= 100</code></li><li><code>arr</code> 中的整数 <strong>互不相同</strong></li><li><code>pieces</code> 中的整数 <strong>互不相同</strong> （也就是说，如果将 <code>pieces</code> 扁平化成一维数组，数组中的所有整数互不相同）</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求判断数组 <code>arr</code> 是否可以通过串联 <code>pieces</code> 中的子数组（按原序列顺序）形成，因此每个子数组在 <code>arr</code> 中必须是相邻的。</p><ol><li><p><strong>建立索引映射</strong>：</p><ul><li>使用哈希表 <code>numMap</code> 将 <code>arr</code> 中的每个数字与其索引建立映射关系，方便快速查询某个数字的位置。</li></ul></li><li><p><strong>验证子数组顺序</strong>：</p><ul><li>遍历 <code>pieces</code> 中的每个子数组，验证其是否可以完全匹配 <code>arr</code> 中的某段连续子序列： <ul><li>如果子数组的首元素不在 <code>arr</code> 中，直接返回 <code>false</code>。</li><li>对子数组的每两个相邻元素，如果它们在 <code>arr</code> 中不是连续出现（通过索引的差值判断），直接返回 <code>false</code>。</li></ul></li></ul></li><li><p>遍历结束后，如果所有子数组都满足上述条件，返回 <code>true</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + m)</code></p><ul><li>建立映射：<code>O(n)</code>，其中 <code>n</code> 是 <code>arr</code> 的长度。</li><li>验证子数组：<code>O(m)</code>，其中 <code>m</code> 是 <code>pieces</code> 中所有子数组元素的总数量。</li><li>总体复杂度为 <code>O(n + m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用 <code>numMap</code> 存储映射表。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">pieces</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canFormArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> pieces</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建 num -&gt; index 的映射</span>
	<span class="token keyword">let</span> numMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> piece <span class="token keyword">of</span> pieces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> piece<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查子数组是否连续</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>numMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>piece<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> numMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>piece<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!==</span> numMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>piece<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function y(w,x){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",h,[b,a(p)]),s(),n("a",v,[f,a(p)])]),_])}const E=r(d,[["render",y],["__file","1640.html.vue"]]);export{E as default};
