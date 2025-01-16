import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as r}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_933-最近的请求次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_933-最近的请求次数","aria-hidden":"true"},"#"),s(" 933. 最近的请求次数")],-1),m=n("code",null,"设计",-1),g=n("code",null,"队列",-1),h=n("code",null,"数据流",-1),v={href:"https://leetcode.cn/problems/number-of-recent-calls",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/number-of-recent-calls",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a <code>RecentCounter</code> class which counts the number of recent requests within a certain time frame.</p><p>Implement the <code>RecentCounter</code> class:</p><ul><li><code>RecentCounter()</code> Initializes the counter with zero recent requests.</li><li><code>int ping(int t)</code> Adds a new request at time <code>t</code>, where <code>t</code> represents some time in milliseconds, and returns the number of requests that has happened in the past <code>3000</code> milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range <code>[t - 3000, t]</code>.</li></ul><p>It is <strong>guaranteed</strong> that every call to <code>ping</code> uses a strictly larger value of <code>t</code> than the previous call.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;]</p><p>[[], [1], [100], [3001], [3002]]</p><p><strong>Output</strong></p><p>[null, 1, 2, 3, 3]</p><p><strong>Explanation</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>RecentCounter recentCounter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RecentCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// requests = [1], range is [-2999,1], return 1</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// requests = [1 , 100], range is [-2900,100], return 2</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">3001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// requests = [1 , 100 , 3001], range is [1,3001], return 3</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// requests = [1, 100 , 3001 , 3002], range is [2,3002], return 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= t &lt;= 10^9</code></li><li>Each test case will call <code>ping</code> with <strong>strictly increasing</strong> values of <code>t</code>.</li><li>At most <code>10^4</code> calls will be made to <code>ping</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>写一个 <code>RecentCounter</code> 类来计算特定时间范围内最近的请求。</p><p>请你实现 <code>RecentCounter</code> 类：</p><ul><li><code>RecentCounter()</code> 初始化计数器，请求数为 0 。</li><li><code>int ping(int t)</code> 在时间 <code>t</code> 添加一个新请求，其中 <code>t</code> 表示以毫秒为单位的某个时间，并返回过去 <code>3000</code> 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 <code>[t-3000, t]</code> 内发生的请求数。</li></ul><p><strong>保证</strong> 每次对 <code>ping</code> 的调用都使用比之前更大的 <code>t</code> 值。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;]</p><p>[[], [1], [100], [3001], [3002]]</p><p><strong>输出：</strong></p><p>[null, 1, 2, 3, 3]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>RecentCounter recentCounter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RecentCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// requests = [1], range is [-2999,1], return 1</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// requests = [1 , 100], range is [-2900,100], return 2</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">3001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// requests = [1 , 100 , 3001], range is [1,3001], return 3</span>
recentCounter<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token number">3002</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// requests = [1, 100 , 3001 , 3002], range is [2,3002], return 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= t &lt;= 10^9</code></li><li>保证每次对 <code>ping</code> 调用所使用的 <code>t</code> 值都 <strong>严格递增</strong></li><li>至多调用 <code>ping</code> 方法 <code>10^4</code> 次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>属性初始化</strong>：<code>RecentCounter</code> 类包含一个数组 <code>requests</code>，用于存储所有请求的时间戳。</p></li><li><p><strong>ping 方法</strong>：</p><ul><li><code>ping</code> 方法在收到一个新请求时，将当前请求时间戳 <code>t</code> 记录在 <code>requests</code> 数组中，并移除所有在当前时间 <code>t</code> 的 3000 毫秒前的请求（即小于 <code>t - 3000</code> 的请求）。</li><li><code>while</code> 循环逐一检查 <code>requests</code> 的开头元素（即最早的请求时间），如果小于 <code>t - 3000</code>，则从队列的头部移除该元素，直到只剩下在最近 3000 毫秒内的请求。</li><li>最后，返回当前队列的长度，即 3000 毫秒内的请求数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为 <code>requests</code> 中的请求数量，最坏情况下，每次 ping 操作都需要移除旧请求。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，存储最近 3000 毫秒内的请求数量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">RecentCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>requests <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">RecentCounter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">ping</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> t <span class="token operator">-</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 移除所有超过 3000 毫秒的旧请求</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 添加当前请求时间戳</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 返回 3000 毫秒内的请求数量</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>requests<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function w(C,y){const p=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/data-stream.html"},{default:e(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(c)]),s(),n("a",f,[q,a(c)])]),_])}const R=l(d,[["render",w],["__file","0933.html.vue"]]);export{R as default};
