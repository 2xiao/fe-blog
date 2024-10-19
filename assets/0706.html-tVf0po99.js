import{_ as i}from"./705-6E08G9Ez.js";import{_ as u,r as c,o as d,c as r,a as n,d as s,b as a,w as t,f as k,e as l}from"./app-ynO5B_DP.js";const h={},m={id:"_706-设计哈希映射",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_706-设计哈希映射","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.com/problems/design-hashmap",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"设计",-1),_=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),g=n("code",null,"链表",-1),w=n("code",null,"哈希函数",-1),x={href:"https://leetcode.com/problems/design-hashmap",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"LeetCode",-1),H=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a HashMap without using any built-in hash table libraries.</p><p>Implement the <code>MyHashMap</code> class:</p><ul><li><code>MyHashMap()</code> initializes the object with an empty map.</li><li><code>void put(int key, int value)</code> inserts a <code>(key, value)</code> pair into the HashMap. If the <code>key</code> already exists in the map, update the corresponding <code>value</code>.</li><li><code>int get(int key)</code> returns the <code>value</code> to which the specified <code>key</code> is mapped, or <code>-1</code> if this map contains no mapping for the <code>key</code>.</li><li><code>void remove(key)</code> removes the <code>key</code> and its corresponding <code>value</code> if the map contains the mapping for the <code>key</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyHashMap&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;remove&quot;, &quot;get&quot;]</p><p>[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]</p><p><strong>Output</strong></p><p>[null, null, null, 1, -1, null, 1, null, -1]</p><p><strong>Explanation</strong></p><p>MyHashMap myHashMap = new MyHashMap();</p><p>myHashMap.put(1, 1); // The map is now [[1,1]]</p><p>myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]</p><p>myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]</p><p>myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]</p><p>myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)</p><p>myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]</p><p>myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]</p><p>myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= key, value &lt;= 10^6</code></li><li>At most <code>104</code> calls will be made to <code>put</code>, <code>get</code>, and <code>remove</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>不使用任何内建的哈希表库设计一个哈希映射（HashMap）。</p><p>实现 <code>MyHashMap</code> 类：</p><ul><li><code>MyHashMap()</code> 用空映射初始化对象</li><li><code>void put(int key, int value)</code> 向 <code>HashMap</code> 插入一个键值对 <code>(key, value)</code> 。如果 <code>key</code> 已经存在于映射中，则更新其对应的值 <code>value</code> 。</li><li><code>int get(int key)</code> 返回特定的 <code>key</code> 所映射的 <code>value</code> ；如果映射中不包含 <code>key</code> 的映射，返回 <code>-1</code> 。</li><li><code>void remove(key)</code> 如果映射中存在 <code>key</code> 的映射，则移除 <code>key</code> 和它所对应的 <code>value</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',13),q=n("code",null,"key",-1),j=n("code",null,"(key,value)",-1),L=l('<p>链地址法：</p><ul><li>设哈希表的大小为 <code>base</code>，则可以设计一个简单的哈希函数：<code>hash(x) = x mod base</code>；</li><li>开辟一个大小为 <code>base</code> 的数组，数组的每个位置是一个链表。当计算出哈希值之后，就插入到对应位置的链表当中；</li><li>由于使用整数除法作为哈希函数，为了尽可能避免冲突，应当将 <code>base</code> 取为一个质数，如 <code>base = 769</code>；</li></ul><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n / b)</code>。其中 <code>n</code> 为哈希表中的元素数量，<code>b</code> 为链表的数量，假设哈希值是均匀分布的，则每个链表大概长度为 <code>n / b</code>；</li><li><strong>空间复杂度</strong>：<code>O(n+b)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyHashMap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token number">769</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>base<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">hash</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> key <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>base<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @param {number} value</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token keyword">return</span> item<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} key</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> hList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> hList<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>hList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				hList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),E=n("td",{style:{"text-align":"center"}},"705",-1),C={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/design-hashset",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},V={href:"/problem/0705",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"left"}},B=n("code",null,"设计",-1),O=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),R=n("code",null,"2+",-1),D={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"1206",-1),Y={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/design-skiplist",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=n("code",null,"设计",-1),P=n("code",null,"链表",-1),Q={style:{"text-align":"left"}};function U(W,X){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return d(),r("div",null,[n("h1",m,[v,s(),n("a",b,[s("706. 设计哈希映射"),a(o)])]),n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/outline/tag/design.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/outline/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/outline/tag/linked-list.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/outline/tag/hash-function.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",x,[M,a(o)])]),H,n("p",null,[s("本题与 "),a(e,{to:"/problem/0705.html"},{default:t(()=>[s("第 705 题")]),_:1}),s(" 解法接近，唯一的区别在于存储的不是 "),q,s(" 本身，而是 "),j,s(" 对，其他代码都一样。")]),L,k(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[E,n("td",C,[n("a",I,[s("设计哈希集合"),a(o)])]),n("td",N,[n("a",V,[s("[✓]"),a(o)])]),n("td",A,[a(e,{to:"/outline/tag/design.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/outline/tag/array.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/outline/tag/hash-table.html"},{default:t(()=>[z]),_:1}),s(),R]),n("td",D,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})])]),n("tr",null,[S,n("td",Y,[n("a",F,[s("设计跳表"),a(o)])]),G,n("td",J,[a(e,{to:"/outline/tag/design.html"},{default:t(()=>[K]),_:1}),s(),a(e,{to:"/outline/tag/linked-list.html"},{default:t(()=>[P]),_:1})]),n("td",Q,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const nn=u(h,[["render",U],["__file","0706.html.vue"]]);export{nn as default};
