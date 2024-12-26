import{_ as c,r as o,o as l,c as p,a as n,b as s,d as e,w as i,e as a}from"./app-3dvbhwow.js";const d={},u=n("h1",{id:"_2794-从两个数组中创建对象-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2794-从两个数组中创建对象-🔒","aria-hidden":"true"},"#"),s(" 2794. 从两个数组中创建对象 🔒")],-1),k={href:"https://leetcode.cn/problems/create-object-from-two-arrays",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/create-object-from-two-arrays",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=a('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two arrays <code>keysArr</code> and <code>valuesArr</code>, return a new object <code>obj</code>. Each key-value pair in <code>obj</code> should come from <code>keysArr[i]</code> and <code>valuesArr[i]</code>.</p><p>If a duplicate key exists at a previous index, that key-value should be excluded. In other words, only the first key should be added to the object.</p><p>If the key is not a string, it should be converted into a string by calling <code>String()</code> on it.</p><p><strong>Example 1:</strong></p>',5),g=n("blockquote",null,[n("p",null,'Input: keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]'),n("p",{"a:1,b:2,c:3":""},"Output:"),n("p",null,'Explanation: The keys "a", "b", and "c" are paired with the values 1, 2, and 3 respectively.')],-1),m=n("p",null,[n("strong",null,"Example 2:")],-1),_=n("blockquote",null,[n("p",null,'Input: keysArr = ["1", 1, false], valuesArr = [4, 5, 6]'),n("p",{"1:4,false:6":""},"Output:"),n("p",null,'Explanation: First, all the elements in keysArr are converted into strings. We can see there are two occurrences of "1". The value associated with the first occurrence of "1" is used: 4.')],-1),A=a('<p><strong>Example 3:</strong></p><blockquote><p>Input: keysArr = [], valuesArr = []</p><p>Output: {}</p><p>Explanation: There are no keys so an empty object is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>keysArr</code> and <code>valuesArr</code> are valid JSON arrays</li><li><code>2 &lt;= JSON.stringify(keysArr).length, JSON.stringify(valuesArr).length &lt;= 5 * 10^5</code></li><li><code>keysArr.length === valuesArr.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个数组 <code>keysArr </code>和 <code>valuesArr</code>，返回一个新的对象 <code>obj</code>。<code>obj</code> 中的每个键值对都来自 <code>keysArr[i]</code> 和 <code>valuesArr[i]</code>。</p><p>如果前面的索引中存在重复的键，则应该跳过该键值对。换句话说，只有第一次出现的键会被添加到对象中。</p><p>如果键不是字符串，则应通过调用 <code>String()</code> 方法将其转换为字符串。</p><p><strong>示例 1：</strong></p>',9),f=n("blockquote",null,[n("p",null,[n("strong",null,"输入："),s(' keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]')]),n("p",null,[n("strong",{"a:1,b:2,c:3":""},"输出：")]),n("p",null,[n("strong",null,"解释："),s(' 键 "a"、"b" 和 "c" 分别与值 1、2 和 3 配对。')])],-1),x=n("p",null,[n("strong",null,"示例 2：")],-1),w=n("blockquote",null,[n("p",null,[n("strong",null,"输入："),s(' keysArr = ["1", 1, false], valuesArr = [4, 5, 6]')]),n("p",null,[n("strong",{"1:4,false:6":""},"输出：")]),n("p",null,[n("strong",null,"解释："),s(' 首先，将 arr1 中的所有元素转换为字符串。我们可以看到有两个 "1" 的出现。使用第一次出现 "1" 的关联值：4。')])],-1),j=a(`<p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> keysArr = [], valuesArr = []</p><p><strong>输出：</strong>{}</p><p><strong>解释：</strong> 没有键，因此返回一个空对象。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>keysArr</code> 和 <code>valuesArr</code> 都是有效的 JSON 数组</li><li><code>2 &lt;= JSON.stringify(keysArr).length, JSON.stringify(valuesArr).length &lt;= 5 * 10^5</code></li><li><code>keysArr.length === valuesArr.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>首先创建一个空对象 <code>result</code>，该对象将存储最终的键值对。</p></li><li><p>使用 <code>for</code> 循环遍历 <code>keysArr</code> 数组，同时根据 <code>i</code> 获取对应的 <code>valuesArr[i]</code> 值。</p></li><li><p><strong>处理重复键：</strong></p><ul><li>如果当前键已经存在于 <code>result</code> 对象中，使用 <code>continue</code> 跳过该键值对，避免重复插入。</li><li>如果当前键不存在于 <code>result</code> 中，则将 <code>keysArr[i]</code> 作为键，<code>valuesArr[i]</code> 作为值，添加到 <code>result</code> 中。</li></ul></li><li><p>最终返回构建好的对象 <code>result</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组 <code>keysArr</code> 一次，插入每个键值对到对象中。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>，需要创建一个新的对象来存储结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">keysArr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">valuesArr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createObject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">keysArr<span class="token punctuation">,</span> valuesArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keysArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 处理重复键</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>keysArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">in</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		result<span class="token punctuation">[</span>keysArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> valuesArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function O(E,N){const r=o("font"),t=o("ExternalLinkIcon");return l(),p("div",null,[u,n("p",null,[s("🟢 "),e(r,{color:"#15bd66"},{default:i(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[h,e(t)]),s(),n("a",v,[b,e(t)])]),y,g,m,_,A,f,x,w,j])}const q=c(d,[["render",O],["__file","2794.html.vue"]]);export{q as default};
