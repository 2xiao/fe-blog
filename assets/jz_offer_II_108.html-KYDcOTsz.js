import{_ as i,r as e,o as u,c as d,a as s,b as n,d as a,w as t,e as p}from"./app-XFeYdzZv.js";const r={},k=s("h1",{id:"_108-单词演变",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_108-单词演变","aria-hidden":"true"},"#"),n(" 108. 单词演变")],-1),m=s("code",null,"广度优先搜索",-1),v=s("code",null,"哈希表",-1),b=s("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/om3reC",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"力扣",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>在字典（单词列表） <code>wordList</code> 中，从单词 <code>beginWord</code> 和 <code>endWord</code> 的 <strong>转换序列</strong> 是一个按下述规格形成的序列：</p><ul><li>序列中第一个单词是 <code>beginWord</code> 。</li><li>序列中最后一个单词是 <code>endWord</code> 。</li><li>每次转换只能改变一个字母。</li><li>转换过程中的中间单词必须是字典 <code>wordList</code> 中的单词。</li></ul><p>给定两个长度相同但内容不同的单词 <code>beginWord</code> 和 <code>endWord</code> 和一个字典 <code>wordList</code> ，找到从 <code>beginWord</code> 到 <code>endWord</code> 的 <strong>最短转换序列</strong> 中的 <strong>单词数目</strong> 。如果不存在这样的转换序列，返回 0。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 一个最短转换序列是 &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; &quot;cog&quot;, 返回它的长度 5。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> endWord &quot;cog&quot; 不在字典中，所以无法进行转换。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= beginWord.length &lt;= 10</code></li><li><code>endWord.length == beginWord.length</code></li><li><code>1 &lt;= wordList.length &lt;= 5000</code></li><li><code>wordList[i].length == beginWord.length</code></li><li><code>beginWord</code>、<code>endWord</code> 和 <code>wordList[i]</code> 由小写英文字母组成</li><li><code>beginWord != endWord</code></li><li><code>wordList</code> 中的所有字符串 <strong>互不相同</strong></li></ul>',10),f={class:"hint-container warning"},_=s("p",{class:"hint-container-title"},"注意",-1),q=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),y=s("strong",null,"图的最短路径问题",-1),W=s("strong",null,"广度优先搜索（BFS）",-1),L=p(`<p>只不过第 433 题给定了基因的变化范围是 <code>A/T/G/C</code>，而这道题中，用于替换单词中每个字符的字符范围需要自己从 <code>wordList</code> 中求得。</p><ol><li>将起始单词 <code>beginWord</code> 放入队列 <code>queue</code>，同时设定一个集合 <code>visited</code> 用于记录已经访问过的单词，避免重复访问。</li><li>每次从队列中取出一个单词，尝试将其每个字符替换，看看是否能得到一个新的有效单词（这个新单词需要在字典中存在，且没有被访问过）。</li><li>如果某次得到的单词等于目标单词 <code>endWord</code>，直接返回当前的变化次数 <code>step + 1</code>。</li><li>如果该单词有效且未访问，则将其加入队列，继续下一步的遍历。</li><li>如果队列为空但还未找到目标单词，返回 <code>0</code>，表示无法到达目标单词。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n / m)</code>，其中 <code>n</code> 是字典中的单词数量，<code>m</code> 是单词的长度。在每次 BFS 扩展时，我们会对每个单词的每个字母进行替换，生成新的单词并检查是否存在于字典中。</li><li><strong>空间复杂度</strong>：<code>O(k * m + n)</code>，其中 <code>n</code> 是字典中的单词数量，<code>m</code> 是单词的长度，<code>k</code> 是用于替换单词中每个字符的字符范围，最大为 <code>26</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">beginWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">endWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">wordList</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">ladderLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">beginWord<span class="token punctuation">,</span> endWord<span class="token punctuation">,</span> wordList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 wordList 转化为 Set 便于快速查找</span>
	<span class="token keyword">const</span> wordSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordList<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 用于计算替换单词中每个字符的字符范围</span>
	<span class="token keyword">const</span> charSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>beginWord<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>endWord<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化队列</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>beginWord<span class="token punctuation">]</span><span class="token punctuation">,</span>
		visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>beginWord<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS 搜索</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 如果找到目标单词，返回步数 + 1</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> endWord<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 尝试改变每个字符</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newWord <span class="token keyword">of</span> <span class="token function">getAllDiff</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> charSet<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果新的单词在 wordSet 中且还没访问过</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 加入队列中，并标记已访问</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
					visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 步数 +1</span>
		step<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 用于计算替换单词中每个字符的所有可能结果</span>
<span class="token keyword">var</span> <span class="token function-variable function">getAllDiff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word<span class="token punctuation">,</span> charSet</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	chars <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> char <span class="token operator">=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newChar <span class="token keyword">of</span> charSet<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newChar<span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> char<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function S(x,C){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return u(),d("div",null,[k,s("p",null,[n("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[n("Hard")]),_:1}),n("  🔖  "),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[m]),_:1}),n(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),n(),a(o,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),n("  🔗 "),s("a",h,[g,a(l)])]),w,s("div",f,[_,s("p",null,[n("本题与 LeetCode "),a(o,{to:"/problem/0127.html"},{default:t(()=>[n("第 127 题")]),_:1}),n(" 相同。")])]),q,s("p",null,[n("这道题和 "),a(o,{to:"/problem/0433.html"},{default:t(()=>[n("433 最小基因变化")]),_:1}),n(" 很像，可以转换为 "),y,n("，每个单词是图中的节点，两个只相差一个字母的单词之间有一条边。因此可以使用 "),W,n(" 来求解。")]),L])}const B=i(r,[["render",S],["__file","jz_offer_II_108.html.vue"]]);export{B as default};
