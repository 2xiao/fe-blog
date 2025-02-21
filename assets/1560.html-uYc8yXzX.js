import{_ as l,r as e,o as d,c as r,a as n,b as s,d as a,w as o,e as i}from"./app-9CeBk-uV.js";const u={},k=n("h1",{id:"_1560-圆形赛道上经过次数最多的扇区",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1560-圆形赛道上经过次数最多的扇区","aria-hidden":"true"},"#"),s(" 1560. 圆形赛道上经过次数最多的扇区")],-1),m=n("code",null,"数组",-1),g=n("code",null,"模拟",-1),h={href:"https://leetcode.cn/problems/most-visited-sector-in-a-circular-track",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/most-visited-sector-in-a-circular-track",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code> and an integer array <code>rounds</code>. We have a circular track which consists of <code>n</code> sectors labeled from <code>1</code> to <code>n</code>. A marathon will be held on this track, the marathon consists of <code>m</code> rounds. The <code>ith</code> round starts at sector <code>rounds[i - 1]</code> and ends at sector <code>rounds[i]</code>. For example, round 1 starts at sector <code>rounds[0]</code> and ends at sector <code>rounds[1]</code></p><p>Return <em>an array of the most visited sectors</em> sorted in <strong>ascending</strong> order.</p><p>Notice that you circulate the track in ascending order of sector numbers in the counter-clockwise direction (See the first example).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/14/tmp.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 4, rounds = [1,3,1,2]</p><p>Output: [1,2]</p><p>Explanation: The marathon starts at sector 1. The order of the visited sectors is as follows:</p><p>1 --&gt; 2 --&gt; 3 (end of round 1) --&gt; 4 --&gt; 1 (end of round 2) --&gt; 2 (end of round 3 and the marathon)</p><p>We can see that both sectors 1 and 2 are visited twice and they are the most visited sectors. Sectors 3 and 4 are visited only once.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2, rounds = [2,1,2,1,2,1,2,1,2]</p><p>Output: [2]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 7, rounds = [1,3,5,7]</p><p>Output: [1,2,3,4,5,6,7]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= m &lt;= 100</code></li><li><code>rounds.length == m + 1</code></li><li><code>1 &lt;= rounds[i] &lt;= n</code></li><li><code>rounds[i] != rounds[i + 1]</code> for <code>0 &lt;= i &lt; m</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> 和一个整数数组 <code>rounds</code> 。有一条圆形赛道由 <code>n</code> 个扇区组成，扇区编号从 <code>1</code> 到 <code>n</code> 。现将在这条赛道上举办一场马拉松比赛，该马拉松全程由 <code>m</code> 个阶段组成。其中，第 <code>i</code> 个阶段将会从扇区 <code>rounds[i - 1]</code> 开始，到扇区 <code>rounds[i]</code> 结束。举例来说，第 <code>1</code> 阶段从 <code>rounds[0]</code> 开始，到 <code>rounds[1]</code> 结束。</p><p>请你以数组形式返回经过次数最多的那几个扇区，按扇区编号 <strong>升序</strong> 排列。</p><p>注意，赛道按扇区编号升序逆时针形成一个圆（请参见第一个示例）。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/08/22/3rd45e.jpg)</p><blockquote><p><strong>输入：</strong> n = 4, rounds = [1,3,1,2]</p><p><strong>输出：</strong>[1,2]</p><p><strong>解释：</strong> 本场马拉松比赛从扇区 1 开始。经过各个扇区的次序如下所示：</p><p>1 --&gt; 2 --&gt; 3（阶段 1 结束）--&gt; 4 --&gt; 1（阶段 2 结束）--&gt; 2（阶段 3 结束，即本场马拉松结束）</p><p>其中，扇区 1 和 2 都经过了两次，它们是经过次数最多的两个扇区。扇区 3 和 4 都只经过了一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2, rounds = [2,1,2,1,2,1,2,1,2]</p><p><strong>输出：</strong>[2]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 7, rounds = [1,3,5,7]</p><p><strong>输出：</strong>[1,2,3,4,5,6,7]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= m &lt;= 100</code></li><li><code>rounds.length == m + 1</code></li><li><code>1 &lt;= rounds[i] &lt;= n</code></li><li><code>rounds[i] != rounds[i + 1]</code> ，其中 <code>0 &lt;= i &lt; m</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于赛道按扇区编号升序形成一个圆，所以我们只需要关注起点和终点，分为以下三种情况：</p><ol><li><p><strong><code>start == end</code></strong></p><ul><li>如果开始和结束在同一扇区，可以看出，起点比其他扇区多一次访问。</li><li>因此，访问最多的点就是起点 <code>start</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            s---------- n
1 --------------------- n
1 --------------------- n
1 --------- e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><ol start="2"><li><p><strong><code>start &lt; end</code></strong></p><ul><li>如果开始扇区在结束扇区之前，可以看出，起点和终点之间的扇区比其他扇区多一次访问。</li><li>因此，访问最多的点就是 <code>[start, end]</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      s -------------- n
1 --------------------- n
1 --------------------- n
1 --------------- e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><ol start="3"><li><p><strong><code>start &gt; end</code></strong></p><ul><li>如果开始扇区在结束扇区之后，可以看出，访问最多的扇区分为两个部分，分别是： <ul><li>从起点 <code>start</code> 到赛道的末尾 <code>n</code> 之间的扇区（<code>[start, n]</code>）；</li><li>从赛道的起始位置 <code>1</code> 到终点 <code>end</code> 之间的扇区（<code>[1, end]</code>）；</li></ul></li><li>因此，访问最多的点就是 <code>[start, n] + [1, end]</code>。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                s ----- n
1 --------------------- n
1 --------------------- n
1 ----- e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><p>具体实现：</p><ol><li><p>定义变量：</p><ul><li>定义变量 <code>start = rounds[0]</code> 代表起始扇区；</li><li>定义变量 <code>end = rounds[rounds.length - 1]</code> 代表终点扇区；</li><li><code>rounds</code> 是比赛经过的扇区顺序，<code>rounds[0]</code> 是起始扇区，<code>rounds[rounds.length - 1]</code> 是终点扇区。</li></ul></li><li><p>定义一个辅助函数 <code>buildArr(a, b)</code>，用于生成 <code>[a, a+1, ..., b]</code> 的连续数组，简化代码逻辑。</p></li><li><p>根据起点和终点的关系，选择不同方式生成结果数组。</p><ul><li>如果 <code>start == end</code>，直接返回 <code>[start]</code>。</li><li>如果 <code>start &lt; end</code>，返回从 <code>start</code> 到 <code>end</code> 的连续数组。</li><li>如果 <code>start &lt; end</code>，返回从 <code>1</code> 到 <code>end</code> 的连续数组，加上从 <code>start</code> 到 <code>n</code> 的连续数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code><ul><li>辅助函数 <code>buildArr(a, b)</code> 的复杂度是 <code>O(k)</code>，其中 <code>k</code> 是生成连续数组的长度，<code>k = b - a + 1</code>。</li><li>最坏情况下，需要生成长度为 <code>n</code> 的连续数组，因此时间复杂度是 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组所占的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">rounds</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mostVisited</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> rounds</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> rounds<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> start <span class="token operator">=</span> rounds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> end <span class="token operator">=</span> rounds<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">buildArr</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>b <span class="token operator">-</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">buildArr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">buildArr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token function">buildArr</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function x(y,w){const p=e("font"),t=e("RouterLink"),c=e("ExternalLinkIcon");return d(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),s(),a(t,{to:"/tag/simulation.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",h,[v,a(c)]),s(),n("a",b,[f,a(c)])]),_])}const A=l(u,[["render",x],["__file","1560.html.vue"]]);export{A as default};
