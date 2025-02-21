import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as k}from"./app-9CeBk-uV.js";const d={},r=n("h1",{id:"_432-全-o-1-的数据结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_432-全-o-1-的数据结构","aria-hidden":"true"},"#"),s(" 432. 全 O(1) 的数据结构")],-1),v=n("code",null,"设计",-1),m=n("code",null,"哈希表",-1),y=n("code",null,"链表",-1),b=n("code",null,"双向链表",-1),h={href:"https://leetcode.cn/problems/all-oone-data-structure",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/all-oone-data-structure",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),x=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a data structure to store the strings&#39; count with the ability to return the strings with minimum and maximum counts.</p><p>Implement the <code>AllOne</code> class:</p><ul><li><code>AllOne()</code> Initializes the object of the data structure.</li><li><code>inc(String key)</code> Increments the count of the string <code>key</code> by <code>1</code>. If <code>key</code> does not exist in the data structure, insert it with count <code>1</code>.</li><li><code>dec(String key)</code> Decrements the count of the string <code>key</code> by <code>1</code>. If the count of <code>key</code> is <code>0</code> after the decrement, remove it from the data structure. It is guaranteed that <code>key</code> exists in the data structure before the decrement.</li><li><code>getMaxKey()</code> Returns one of the keys with the maximal count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li><li><code>getMinKey()</code> Returns one of the keys with the minimum count. If no element exists, return an empty string <code>&quot;&quot;</code>.</li></ul><p><strong>Note</strong> that each function must run in <code>O(1)</code> average time complexity.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;AllOne&quot;, &quot;inc&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;, &quot;inc&quot;, &quot;getMaxKey&quot;, &quot;getMinKey&quot;]</p><p>[[], [&quot;hello&quot;], [&quot;hello&quot;], [], [], [&quot;leet&quot;], [], []]</p><p><strong>Output</strong></p><p>[null, null, null, &quot;hello&quot;, &quot;hello&quot;, null, &quot;hello&quot;, &quot;leet&quot;]</p><p><strong>Explanation</strong></p><p>AllOne allOne = new AllOne();</p><p>allOne.inc(&quot;hello&quot;);</p><p>allOne.inc(&quot;hello&quot;);</p><p>allOne.getMaxKey(); // return &quot;hello&quot;</p><p>allOne.getMinKey(); // return &quot;hello&quot;</p><p>allOne.inc(&quot;leet&quot;);</p><p>allOne.getMaxKey(); // return &quot;hello&quot;</p><p>allOne.getMinKey(); // return &quot;leet&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= key.length &lt;= 10</code></li><li><code>key</code> consists of lowercase English letters.</li><li>It is guaranteed that for each call to <code>dec</code>, <code>key</code> is existing in the data structure.</li><li>At most <code>5 * 10^4</code> calls will be made to <code>inc</code>, <code>dec</code>, <code>getMaxKey</code>, and <code>getMinKey</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。</p><p>实现 <code>AllOne</code> 类：</p><ul><li><code>AllOne()</code> 初始化数据结构的对象。</li><li><code>inc(String key)</code> 字符串 <code>key</code> 的计数增加 <code>1</code> 。如果数据结构中尚不存在 <code>key</code> ，那么插入计数为 <code>1</code> 的 <code>key</code> 。</li><li><code>dec(String key)</code> 字符串 <code>key</code> 的计数减少 <code>1</code> 。如果 <code>key</code> 的计数在减少后为 0 ，那么需要将这个 <code>key</code> 从数据结构中删除。测试用例保证：在减少计数前，<code>key</code> 存在于数据结构中。</li><li><code>getMaxKey()</code> 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 <code>&quot;&quot;</code> 。</li><li><code>getMinKey()</code> 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 <code>&quot;&quot;</code> 。</li></ul><p><strong>注意</strong>：每个函数都应当满足 <code>O(1)</code> 平均时间复杂度。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以用 <strong>哈希表 + 双向链表</strong> 来解决。</p><ul><li>链表中的每个节点存储一个字符串集合 <code>keys</code>，和一个正整数 <code>count</code>，表示 <code>keys</code> 中的字符串均出现 <code>count</code> 次。注意， <code>count</code> 相同的字符串存储在同一个节点中。</li><li>链表从头到尾的每个节点的 <code>count</code> 值单调递增（但不一定连续）。</li><li>每个节点还需存储指向上一个节点的指针 <code>prev</code> 和指向下一个节点的指针 <code>next</code>。</li><li>另外还要用一个哈希表 <code>map</code> 维护每个字符串当前所处的链表节点。</li></ul><ol><li>对于 <code>inc</code> 操作：</li></ol><ul><li><p>当若 <code>key</code> 不在链表中，判断当前链表有没有 <code>count = 1</code> 的节点。因为链表是按照 <code>count</code> 升序排列的，所以只需要看头节点的 <code>count</code> 是否为 <code>1</code>；</p><ul><li>若有则共用此节点；</li><li>否则新建一个 <code>count = 1</code> 的节点；</li></ul></li><li><p>若 <code>key</code> 在链表中，设 <code>key</code> 所在节点为 <code>cur</code>，判断当前链表有没有 <code>count = cur.count + 1</code> 的节点。同理也只需要判断 <code>cur.next</code> 的 <code>count</code> 是否等于 <code>cur.count + 1</code>；</p><ul><li>若有则共用此 <code>cur.next</code> 节点；</li><li>否则新建一个 <code>count = cur.count + 1</code> 的节点插入到 cur 的后面；</li><li>最后，将 <code>key</code> 从 <code>cur.keys</code> 中移除，若移除后 cur.keys 为空，则将 cur 从链表中移除。并更新 <code>map</code> 中 <code>key</code> 所处的节点。</li></ul></li></ul><ol start="2"><li>对于 <code>dec</code> 操作：</li></ol><ul><li>若 <code>key</code> 仅出现一次：将其从 <code>map</code> 中移除。</li><li>若 <code>key</code> 出现不止一次，则需要判断链表中是否有 <code>count = cur.count - 1</code> 的节点. <ul><li>若有，则共用此 <code>cur.prev</code> 节点;</li><li>否则新建一个 <code>count = cur.count - 1</code> 的节点；</li></ul></li><li>最后，将 <code>key</code> 从 <code>cur.keys</code> 中移除，若移除后 <code>cur.keys</code> 为空，则将 <code>cur</code> 从链表中移除。</li></ul><ol start="3"><li>对于 <code>getMaxKey</code> 操作:</li></ol><ul><li>在链表不为空时，返回链表尾节点的 <code>keys</code> 中的任一元素;</li><li>否则返回空字符串。</li></ul><ol start="4"><li>对于 <code>getMinKey</code> 操作</li></ol><ul><li>在链表不为空时，返回链表头节点的 <code>keys</code> 中的任一元素;</li><li>否则返回空字符串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：所有操作均为 <code>O(1)</code>，这里将字符串长度视作常数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是调用 <code>inc</code> 的次数。最坏情况下每次调用 <code>inc</code> 传入的字符串均不相同，我们需要 <code>O(n)</code> 大小的哈希表来存储所有字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
		node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		node<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
		node<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> node<span class="token punctuation">;</span>

		<span class="token keyword">return</span> node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token function-variable function">AllOne</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">AllOne</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">inc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// key 在链表中</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span>
			next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">||</span> next<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> cur<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cur<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			next<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// key 不在链表中</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">AllOne</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">dec</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// count 为 1 时，直接删掉</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// count 大于 1 时，寻找 dec 后 key 在链表中的位置</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> prev <span class="token operator">=</span> cur<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">||</span> prev<span class="token punctuation">.</span>count <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> prev<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> cur<span class="token punctuation">.</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> prev<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	cur<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>keys<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">AllOne</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMaxKey</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxKey <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>prev<span class="token punctuation">.</span>keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxKey <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> maxKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">AllOne</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getMinKey</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> minKey <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		minKey <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> minKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function q(_,O){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return u(),i("div",null,[r,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/tag/doubly-linked-list.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[w,a(p)]),s(),n("a",f,[g,a(p)])]),x])}const M=l(d,[["render",q],["__file","0432.html.vue"]]);export{M as default};
