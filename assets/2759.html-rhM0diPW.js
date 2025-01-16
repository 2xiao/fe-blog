import{_ as c,r as o,o as l,c as i,a as n,b as s,d as a,w as u,e as t}from"./app-KDJRKGep.js";const r={},k=n("h1",{id:"_2759-将-json-字符串转换为对象-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2759-将-json-字符串转换为对象-🔒","aria-hidden":"true"},"#"),s(" 2759. 将 JSON 字符串转换为对象 🔒")],-1),d={href:"https://leetcode.cn/problems/convert-json-string-to-object",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/convert-json-string-to-object",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),g=t('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>str</code>, return parsed JSON <code>parsedStr</code>. You may assume the <code>str</code> is a valid JSON string hence it only includes strings, numbers, arrays, objects, booleans, and null. <code>str</code> will not include invisible characters and escape characters.</p><p>Please solve it without using the built-in <code>JSON.parse</code> method.</p><p><strong>Example 1:</strong></p>',4),f=n("blockquote",null,[n("p",null,`Input: str = '{"a":2,"b":[1,2,3]}'`),n("p",{"a:2,b:[1,2,3]":""},"Output:"),n("p",null,"Explanation: Returns the object represented by the JSON string.")],-1),h=t('<p><strong>Example 2:</strong></p><blockquote><p>Input: str = &#39;true&#39;</p><p>Output: true</p><p>Explanation: Primitive types are valid JSON.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: str = &#39;[1,5,&quot;false&quot;,{&quot;a&quot;:2}]&#39;</p><p>Output: [1,5,&quot;false&quot;,{&quot;a&quot;:2}]</p><p>Explanation: Returns the array represented by the JSON string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>str</code> is a valid JSON string</li><li><code>1 &lt;= str.length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>str</code> ，返回 JSON 解析后的 <code>parsedStr</code> 。你可以假设 <code>str</code> 是一个有效的 JSON 字符串，因此它只包含字符串、数字、数组、对象、布尔值和 null。<code>str</code> 不会包含不可见字符和转义字符。</p><p>请在不使用内置的 <code>JSON.parse</code> 方法的情况下解决此问题。</p><p><strong>示例 1：</strong></p>',10),y=n("blockquote",null,[n("p",null,[n("strong",null,"输入："),s(` str = '{"a":2,"b":[1,2,3]}'`)]),n("p",null,[n("strong",{"a:2,b:[1,2,3]":""},"输出：")]),n("p",null,[n("strong",null,"解释："),s(" 返回由 JSON 字符串表示的对象。")])],-1),w=t(`<p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> str = &#39;true&#39;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 原始类型是有效的 JSON。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> str = &#39;[1,5,&quot;false&quot;,{&quot;a&quot;:2}]&#39;</p><p><strong>输出：</strong>[1,5,&quot;false&quot;,{&quot;a&quot;:2}]</p><p><strong>解释：</strong> 返回由 JSON 字符串表示的数组。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>str</code> 是一个有效的 JSON 字符串</li><li><code>1 &lt;= str.length &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要实现一个自定义的 JSON 解析器，可以利用递归逐步解析 JSON 字符串的各个部分。解析过程需要从头开始扫描字符串，识别出字符串、数字、对象、数组、布尔值和 <code>null</code> 的格式。</p><ol><li><p><strong>设置初始状态</strong>：</p><ul><li>定义一个全局变量 <code>i</code>，用来指示当前正在解析的字符串 <code>str</code> 中的索引位置。</li><li><code>jsonParse</code> 的核心函数是 <code>parseValue</code>，用于识别当前字符并递归调用其他解析函数来处理不同的数据类型。</li></ul></li><li><p><strong>解析不同的数据类型</strong>：</p><ul><li><strong>布尔值 <code>true</code></strong>：如果当前字符为 <code>&#39;t&#39;</code>，调用 <code>parseTrue</code>，将指针 <code>i</code> 向前移动 4 个字符（<code>true</code>的长度），并返回 <code>true</code>。</li><li><strong>布尔值 <code>false</code></strong>：如果当前字符为 <code>&#39;f&#39;</code>，调用 <code>parseFalse</code>，将指针 <code>i</code> 向前移动 5 个字符（<code>false</code>的长度），并返回 <code>false</code>。</li><li><strong>空值 <code>null</code></strong>：如果当前字符为 <code>&#39;n&#39;</code>，调用 <code>parseNull</code>，将指针 <code>i</code> 向前移动 4 个字符（<code>null</code>的长度），并返回 <code>null</code>。</li></ul></li><li><p><strong>字符串解析</strong>：</p><ul><li>如果当前字符为双引号 <code>&quot;</code>，调用 <code>parseString</code> 函数。</li><li><code>parseString</code> 函数在起始位置跳过 <code>&quot;</code>，然后循环读取字符，直到再次遇到 <code>&quot;</code>，构造字符串并返回。</li><li>最后，指针 <code>i</code> 再次向前移动一位，跳过结尾的 <code>&quot;</code>。</li></ul></li><li><p><strong>数字解析</strong>：</p><ul><li>如果当前字符是 <code>-</code> 或数字字符，调用 <code>parseNumber</code> 函数。</li><li><code>parseNumber</code> 从当前指针位置开始检查字符，直到找到数字的结束位置，支持整数和小数格式。</li><li>最后，将数字部分转化为 <code>Number</code> 类型并返回。</li></ul></li><li><p><strong>对象解析</strong>：</p><ul><li>如果当前字符是 <code>{</code>，调用 <code>parseObject</code>。</li><li><code>parseObject</code> 会构建一个空对象，然后在循环中依次解析键值对： <ul><li>调用 <code>parseString</code> 解析键名。</li><li>跳过冒号 <code>:</code> 后，调用 <code>parseValue</code> 解析对应的值。</li><li>遇到 <code>,</code> 时继续解析下一对键值对，遇到 <code>}</code> 表示对象解析结束。</li></ul></li><li>空对象 <code>{}</code> 特殊情况：如果下一个字符直接是 <code>}</code>，则直接返回空对象。</li></ul></li><li><p><strong>数组解析</strong>：</p><ul><li>如果当前字符是 <code>[</code>，调用 <code>parseArray</code>。</li><li><code>parseArray</code> 会构建一个空数组，然后在循环中依次解析每个元素： <ul><li>调用 <code>parseValue</code> 解析当前元素，并将结果加入数组。</li><li>遇到 <code>,</code> 时继续解析下一个元素，遇到 <code>]</code> 表示数组解析结束。</li></ul></li><li>空数组 <code>[]</code> 特殊情况：如果下一个字符直接是 <code>]</code>，则直接返回空数组。</li></ul></li><li><p><strong>控制流</strong>：</p><ul><li><code>parseValue</code> 函数根据当前字符确定类型，调用不同的解析函数进行递归解析。</li><li>通过递归，每个数据类型函数会处理它们的嵌套情况，例如对象内的数组、数组内的对象等。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 JSON 字符串的长度，每个字符在整个解析过程中只访问一次。</li><li><strong>空间复杂度</strong>：<code>O(d)</code>，其中 <code>d</code> 是对象或数组的嵌套深度，递归调用栈的最大深度决定了所需的辅助空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token operator">|</span>boolean<span class="token operator">|</span>number<span class="token operator">|</span>string<span class="token operator">|</span>Array<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">jsonParse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析布尔值 true</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseTrue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析布尔值 false</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseFalse</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i <span class="token operator">+=</span> <span class="token number">5</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析空值 null</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseNull</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析字符串</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseString</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过开始的双引号</span>
		<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">+=</span> str<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过结束的双引号</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析数字</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> start <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析对象</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseObject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过开始的 &#39;{&#39;</span>
		<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token comment">// 空对象的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token function">parseString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过冒号 &#39;:&#39;</span>
			obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">parseValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过逗号 &#39;,&#39;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">// 解析数组</span>
	<span class="token keyword">const</span> <span class="token function-variable function">parseArray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过左方括号 &#39;[&#39;</span>
		<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 空数组的情况</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> arr<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">parseValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过逗号 &#39;,&#39;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> arr<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">isDigit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> char <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">parseValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> c <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;{&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;[&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;t&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseTrue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseFalse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;n&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">||</span> <span class="token function">isDigit</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">parseNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid JSON&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">parseValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;{&quot;a&quot;:2,&quot;b&quot;:[1,2,3]}&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">jsonParse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function _(q,N){const e=o("font"),p=o("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🔴 "),a(e,{color:"#ff334b"},{default:u(()=>[s("Hard")]),_:1}),s("  🔗 "),n("a",d,[v,a(p)]),s(),n("a",m,[b,a(p)])]),g,f,h,y,w])}const S=c(r,[["render",_],["__file","2759.html.vue"]]);export{S as default};
