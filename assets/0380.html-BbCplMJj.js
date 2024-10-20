import{_ as l,r as p,o as i,c as u,a as n,d as s,b as a,w as t,f as d,e as r}from"./app-Fucr7yuT.js";const k={},m={id:"_380-o-1-时间插入、删除和获取随机元素",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_380-o-1-时间插入、删除和获取随机元素","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.com/problems/insert-delete-getrandom-o1",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"设计",-1),_=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),g=n("code",null,"数学",-1),w=n("code",null,"随机化",-1),y={href:"https://leetcode.com/problems/insert-delete-getrandom-o1",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),R=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement the <code>RandomizedSet</code> class:</p><ul><li><code>RandomizedSet()</code> Initializes the <code>RandomizedSet</code> object.</li><li><code>bool insert(int val)</code> Inserts an item <code>val</code> into the set if not present. Returns <code>true</code> if the item was not present, <code>false</code> otherwise.</li><li><code>bool remove(int val)</code> Removes an item <code>val</code> from the set if present. Returns <code>true</code> if the item was present, <code>false</code> otherwise.</li><li><code>int getRandom()</code> Returns a random element from the current set of elements (it&#39;s guaranteed that at least one element exists when this method is called). Each element must have the <strong>same probability</strong> of being returned.</li></ul><p>You must implement the functions of the class such that each function works in <strong>average</strong> <code>O(1)</code> time complexity.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;RandomizedSet&quot;, &quot;insert&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;, &quot;remove&quot;, &quot;insert&quot;, &quot;getRandom&quot;]</p><p>[[], [1], [2], [2], [], [1], [2], []]</p><p><strong>Output</strong></p><p>[null, true, false, true, 2, true, false, 2]</p><p><strong>Explanation</strong></p><p>RandomizedSet randomizedSet = new RandomizedSet();</p><p>randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.</p><p>randomizedSet.remove(2); // Returns false as 2 does not exist in the set.</p><p>randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].</p><p>randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.</p><p>randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].</p><p>randomizedSet.insert(2); // 2 was already in the set, so return false.</p><p>randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= val &lt;= 2^31 - 1</code></li><li>At most <code>2 * \`\`105</code> calls will be made to <code>insert</code>, <code>remove</code>, and <code>getRandom</code>.</li><li>There will be <strong>at least one</strong> element in the data structure when <code>getRandom</code> is called.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现 <code>RandomizedSet</code> 类：</p><ul><li><code>RandomizedSet()</code> 初始化 <code>RandomizedSet</code> 对象</li><li><code>bool insert(int val)</code> 当元素 <code>val</code> 不存在时，向集合中插入该项，并返回 <code>true</code> ；否则，返回 <code>false</code> 。</li><li><code>bool remove(int val)</code> 当元素 <code>val</code> 存在时，从集合中移除该项，并返回 <code>true</code> ；否则，返回 <code>false</code> 。</li><li><code>int getRandom()</code> 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 <strong>相同的概率</strong> 被返回。</li></ul><p>你必须实现类的所有函数，并满足每个函数的 <strong>平均</strong> 时间复杂度为 <code>O(1)</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题的难点在于两点：</p><ol><li>插入，删除，获取随机元素这三个操作的时间复杂度必须都是 <code>O(1)</code>。</li><li><code>getRandom</code> 方法返回的元素必须等概率返回随机元素，也就是说，如果集合里面有 <code>n</code> 个元素，每个元素被返回的概率必须是 <code>1/n</code>。</li></ol><p><code>HashSet</code> 插入，删除，查找这几种操作的时间复杂度是 <code>O(1)</code> ，但是由于<code>HashSet</code>存储数据时，是由哈希函数分散地存到整个数组里面的，遇到哈希冲突还会有拉链法等机制，所以做不到 <code>O(1)</code> 时间「等概率」随机获取元素。</p><p>如果想「等概率」且「在 <code>O(1)</code> 的时间」取出元素，一定要满足：底层用数组实现，且数组必须是紧凑的。可以直接生成随机数作为索引，从数组中取出该随机索引对应的元素，作为随机元素。</p><p>但如果用数组存储元素的话，插入，删除的时间复杂度怎么做到 <code>O(1)</code> 呢？</p><p>由于对数组尾部进行插入和删除操作时不会涉及数据搬移，时间复杂度是 <code>O(1)</code>，所以：</p><ul><li>插入数据时直接插入到数组尾端即可；</li><li>删除数组中的某一个元素时，先把这个元素交换到数组的尾部，然后再 <code>pop</code> 掉，交换两个元素时通过索引进行交换，用一个哈希表 <code>indexMap</code> 来记录每个元素值对应的索引。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RandomizedSet</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last_val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> last_val<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>last_val<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),S=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),z=n("td",{style:{"text-align":"center"}},"381",-1),q={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"设计",-1),L=n("code",null,"数组",-1),M=n("code",null,"哈希表",-1),N=n("code",null,"2+",-1),V={style:{"text-align":"left"}};function j(B,H){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",v,[s("380. O(1) 时间插入、删除和获取随机元素"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/randomized.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",y,[x,a(o)])]),R,d(" prettier-ignore "),n("table",null,[S,n("tbody",null,[n("tr",null,[z,n("td",q,[n("a",O,[s("O(1) 时间插入、删除和获取随机元素 - 允许重复"),a(o)])]),I,n("td",E,[a(e,{to:"/tag/design.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[M]),_:1}),s(),N]),n("td",V,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const A=l(k,[["render",j],["__file","0380.html.vue"]]);export{A as default};
