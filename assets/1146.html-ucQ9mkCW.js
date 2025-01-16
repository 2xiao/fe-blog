import{_ as l,r as o,o as i,c as d,a as n,b as s,d as a,w as e,e as u}from"./app-KDJRKGep.js";const r={},k=n("h1",{id:"_1146-快照数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1146-快照数组","aria-hidden":"true"},"#"),s(" 1146. 快照数组")],-1),m=n("code",null,"设计",-1),v=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),b=n("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/snapshot-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/snapshot-array",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement a SnapshotArray that supports the following interface:</p><ul><li><code>SnapshotArray(int length)</code> initializes an array-like data structure with the given length. <strong>Initially, each element equals 0</strong>.</li><li><code>void set(index, val)</code> sets the element at the given <code>index</code> to be equal to <code>val</code>.</li><li><code>int snap()</code> takes a snapshot of the array and returns the <code>snap_id</code>: the total number of times we called <code>snap()</code> minus <code>1</code>.</li><li><code>int get(index, snap_id)</code> returns the value at the given <code>index</code>, at the time we took the snapshot with the given <code>snap_id</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: [&quot;SnapshotArray&quot;,&quot;set&quot;,&quot;snap&quot;,&quot;set&quot;,&quot;get&quot;]</p><p>[[3],[0,5],[],[0,6],[0,0]]</p><p>Output: [null,null,0,null,5]</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3

snapshotArr.set(0,5); // Set array[0] = 5

snapshotArr.snap(); // Take a snapshot, return snap_id = 0

snapshotArr.set(0,6);

snapshotArr.get(0,0); // Get the value of array[0] with snap_id = 0, return 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= length &lt;= 5 * 10^4</code></li><li><code>0 &lt;= index &lt; length</code></li><li><code>0 &lt;= val &lt;= 10^9</code></li><li><code>0 &lt;= snap_id &lt; </code>(the total number of times we call <code>snap()</code>)</li><li>At most <code>5 * 10^4</code> calls will be made to <code>set</code>, <code>snap</code>, and <code>get</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现支持下列接口的「快照数组」- SnapshotArray：</p><ul><li><code>SnapshotArray(int length)</code>： 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。</li><li><code>void set(index, val)</code>： 会将指定索引 <code>index</code> 处的元素设置为 <code>val</code>。</li><li><code>int snap()</code>： 获取该数组的快照，并返回快照的编号 <code>snap_id</code>（快照号是调用 <code>snap()</code> 的总次数减去 <code>1</code>）。</li><li><code>int get(index, snap_id)</code>： 根据指定的 <code>snap_id</code> 选择快照，并返回该快照指定索引 <code>index</code> 的值。</li></ul><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong>[&quot;SnapshotArray&quot;,&quot;set&quot;,&quot;snap&quot;,&quot;set&quot;,&quot;get&quot;]</p><blockquote><p>[[3],[0,5],[],[0,6],[0,0]]</p></blockquote><p><strong>输出：</strong>[null,null,0,null,5]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组

snapshotArr.set(0,5); // 令 array[0] = 5

snapshotArr.snap(); // 获取快照，返回 snap_id = 0

snapshotArr.set(0,6);

snapshotArr.get(0,0); // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= length &lt;= 50000</code></li><li>题目最多进行<code>50000</code> 次<code>set</code>，<code>snap</code>，和 <code>get</code>的调用 。</li><li><code>0 &lt;= index &lt; length</code></li><li><code>0 &lt;= snap_id &lt; </code>我们调用 <code>snap()</code> 的总次数</li><li><code>0 &lt;= val &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于 <code>snap_id</code> 是严格递增的，我们可以利用<strong>稀疏存储</strong>和<strong>二分查找</strong>来优化性能。</p><ol><li><p>初始化 <code>store</code>：</p><ul><li>使用长度为 <code>length</code> 的数组 <code>store</code> 保存每个索引的值变化记录。</li><li>对于每个索引 <code>index</code>，维护一个数组 <code>[(snap_id1, value1), (snap_id2, value2), ...]</code> 来记录不同快照编号对应的值。</li><li>每个索引初始化为 <code>[[0, 0]]</code>，表示在 <code>snap_id=0</code> 时，默认值为 0。</li></ul></li><li><p><strong><code>set(index, val)</code></strong>：</p><ul><li>在调用 <code>set(index, val)</code> 时，将 <code>(snap_id, val)</code> 插入到 <code>store[index]</code>，记录当前快照编号对应的值。</li><li>注意只更新 <code>index</code> 的快照数组，而不是更新 <code>store</code> 中的所有快照数组，<strong>稀疏存储</strong>从而降低空间复杂度。</li><li>例如，当 <code>set(0, 5)</code> 时，在 <code>store[0]</code> 中追加 <code>[snap_id, 5]</code>。</li></ul></li><li><p><strong><code>snap()</code></strong>：</p><ul><li>返回当前快照编号 <code>snap_id</code>，然后将 <code>snap_id</code> 加 1。</li></ul></li><li><p><strong><code>get(index, snap_id)</code></strong>：</p><ul><li>对 <code>store[index]</code> 使用二分查找，找到最后一个小于等于 <code>snap_id</code> 的编号，返回对应的值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>set</code> 操作</strong>：<code>O(1)</code>，直接追加新值。</li><li><strong><code>snap</code> 操作</strong>：<code>O(1)</code>，只返回并更新快照编号。</li><li><strong><code>get</code> 操作</strong>：<code>O(log n)</code>，二分查找快照编号。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，假设进行了 <code>m</code> 次 <code>set</code> 操作，则 <code>store</code> 的空间复杂度为 <code>O(m)</code>，仅存储变化值而不是每次完整快照。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SnapshotArray</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">length</span>
	 */</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>snap_id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前快照编号</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 每个索引存储 [(snap_id, value)]</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">set</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 新增一个快照记录</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>snap_id<span class="token punctuation">,</span> val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">snap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>snap_id<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">snap_id</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> snap_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 二分查找最后一个小于等于 snap_id 的快照编号</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> snap_id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				res <span class="token operator">=</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function w(q,A){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/binary-search.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",g,[_,a(p)]),s(),n("a",y,[x,a(p)])]),f])}const j=l(r,[["render",w],["__file","1146.html.vue"]]);export{j as default};
