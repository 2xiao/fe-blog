import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as k,e as r}from"./app-KDJRKGep.js";const d={},h=n("h1",{id:"_2558-从数量最多的堆取走礼物",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2558-从数量最多的堆取走礼物","aria-hidden":"true"},"#"),s(" 2558. 从数量最多的堆取走礼物")],-1),m=n("code",null,"数组",-1),v=n("code",null,"模拟",-1),b=n("code",null,"堆（优先队列）",-1),f={href:"https://leetcode.cn/problems/take-gifts-from-the-richest-pile",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/take-gifts-from-the-richest-pile",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>gifts</code> denoting the number of gifts in various piles. Every second, you do the following:</p><ul><li>Choose the pile with the maximum number of gifts.</li><li>If there is more than one pile with the maximum number of gifts, choose any.</li><li>Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.</li></ul><p>Return <em>the number of gifts remaining after</em><code>k</code> <em>seconds.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: gifts = [25,64,9,4,100], k = 4</p><p>Output: 29</p><p>Explanation:</p><p>The gifts are taken in the following way:</p><ul><li>In the first second, the last pile is chosen and 10 gifts are left behind.</li><li>Then the second pile is chosen and 8 gifts are left behind.</li><li>After that the first pile is chosen and 5 gifts are left behind.</li><li>Finally, the last pile is chosen again and 3 gifts are left behind.</li></ul><p>The final remaining gifts are [5,8,9,4,3], so the total number of gifts remaining is 29.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: gifts = [1,1,1,1], k = 4</p><p>Output: 4</p><p>Explanation:</p><p>In this case, regardless which pile you choose, you have to leave behind 1 gift in each pile.</p><p>That is, you can&#39;t take any pile with you.</p><p>So, the total gifts remaining are 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= gifts.length &lt;= 10^3</code></li><li><code>1 &lt;= gifts[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^3</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>gifts</code> ，表示各堆礼物的数量。每一秒，你需要执行以下操作：</p><ul><li>选择礼物数量最多的那一堆。</li><li>如果不止一堆都符合礼物数量最多，从中选择任一堆即可。</li><li>选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。</li></ul><p>返回在 <code>k</code> 秒后剩下的礼物数量。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> gifts = [25,64,9,4,100], k = 4</p><p><strong>输出：</strong> 29</p><p><strong>解释：</strong></p><p>按下述方式取走礼物：</p><ul><li>在第一秒，选中最后一堆，剩下 10 个礼物。</li><li>接着第二秒选中第二堆礼物，剩下 8 个礼物。</li><li>然后选中第一堆礼物，剩下 5 个礼物。</li><li>最后，再次选中最后一堆礼物，剩下 3 个礼物。</li></ul><p>最后剩下的礼物数量分别是 [5,8,9,4,3] ，所以，剩下礼物的总数量是 29 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> gifts = [1,1,1,1], k = 4</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>在本例中，不管选中哪一堆礼物，都必须剩下 1 个礼物。</p><p>也就是说，你无法获取任一堆中的礼物。</p><p>所以，剩下礼物的总数量是 4 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= gifts.length &lt;= 10^3</code></li><li><code>1 &lt;= gifts[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^3</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用最大堆存储礼物堆数量</p><ul><li>初始时将所有礼物堆数量插入最大堆，最大堆的特点是可以快速获取当前最大值，非常适合本题。</li></ul></li><li><p>重复操作 <code>k</code> 次</p><ul><li>每次从堆中取出当前礼物数量最多的一堆（即堆顶元素）。</li><li>将其替换为平方根后的值（向下取整）。</li><li>重新插入堆中。</li></ul></li><li><p>计算剩余礼物总数</p><ul><li><code>k</code> 次操作完成后，堆中存储的是所有礼物堆剩余的数量。</li><li>遍历堆计算总和，返回结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + k log n)</code><ul><li>初始构建最大堆需要 <code>O(n)</code>；</li><li>执行 <code>k</code> 次取礼物操作，每次插入和删除各 <code>O(log n)</code>，总耗时为 <code>O(k log n)</code>；</li><li>计算堆中元素总和耗时 <code>O(n)</code>；</li><li>总时间复杂度为 <code>O(n + k log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最大堆存储 <code>n</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">gifts</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pickGifts</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">gifts<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 初始化最大堆</span>
	<span class="token keyword">let</span> maxHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MaxHeap</span><span class="token punctuation">(</span>gifts<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 执行 k 次操作</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> maxGift <span class="token operator">=</span> maxHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出最大值</span>
		maxHeap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>maxGift<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 替换为平方根后重新插入</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算剩余礼物总数</span>
	<span class="token keyword">return</span> maxHeap<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 最大堆实现</span>
<span class="token keyword">class</span> <span class="token class-name">MaxHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> arr<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> max <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>max<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1962",-1),E=n("td",{style:{"text-align":"left"}},"移除石子使总数最小",-1),O=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),H=n("code",null,"数组",-1),L=n("code",null,"堆（优先队列）",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/remove-stones-to-minimize-the-total",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/remove-stones-to-minimize-the-total",target:"_blank",rel:"noopener noreferrer"};function D(j,z){const c=o("font"),p=o("RouterLink"),e=o("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(p,{to:"/tag/simulation.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[g,a(e)]),s(),n("a",y,[w,a(e)])]),_,k(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,E,O,n("td",I,[a(p,{to:"/tag/greedy.html"},{default:t(()=>[C]),_:1}),s(),a(p,{to:"/tag/array.html"},{default:t(()=>[H]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[L]),_:1})]),M,n("td",T,[n("a",N,[s("🀄️"),a(e)]),s(),n("a",V,[s("🔗"),a(e)])])])])])])}const G=l(d,[["render",D],["__file","2558.html.vue"]]);export{G as default};
