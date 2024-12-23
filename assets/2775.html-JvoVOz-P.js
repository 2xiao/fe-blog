import{_ as c,r as t,o as p,c as i,a as n,b as s,d as a,w as d,e}from"./app-Kkp_66uf.js";const u={},r=n("h1",{id:"_2775-将-undefined-转为-null-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2775-将-undefined-转为-null-🔒","aria-hidden":"true"},"#"),s(" 2775. 将 undefined 转为 null 🔒")],-1),k={href:"https://leetcode.cn/problems/undefined-to-null",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/undefined-to-null",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"LeetCode",-1),f=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a deeply nested object or array <code>obj</code>, return the object <code>obj</code> with any <code>undefined</code> values replaced by <code>null</code>.</p><p><code>undefined</code> values are handled differently than <code>null</code> values when objects are converted to a JSON string using <code>JSON.stringify()</code>. This function helps ensure serialized data is free of unexpected errors.</p><p><strong>Example 1:</strong></p>',4),m=n("blockquote",null,[n("p",{"a:undefined,b:3":""},"Input: obj ="),n("p",{"a:null,b:3":""},"Output:"),n("p",null,"Explanation: The value for obj.a has been changed from undefined to null")],-1),_=n("p",null,[n("strong",null,"Example 2:")],-1),g=n("blockquote",null,[n("p",{"a:undefined,b:[a,undefined]":""},"Input: obj ="),n("p",{"a:null,b:[a,null]":""},"Output:"),n("p",null,"Explanation: The values for obj.a and obj.b[1] have been changed from undefined to null")],-1),y=e('<p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a valid JSON object or array</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个深层嵌套的对象或数组 <code>obj</code> ，并创建该对象 <code>obj</code> 的副本，将其中的任何 <code>undefined</code> 值替换为 <code>null</code> 。</p><p>当使用 <code>JSON.stringify()</code> 将对象转换为 JSON 字符串时，<code>undefined</code> 值与 <code>null</code> 值的处理方式不同。该函数有助于确保序列化数据不会出现意外错误。</p><p><strong>示例 1：</strong></p>',6),j=n("blockquote",null,[n("p",{"a:undefined,b:3":""},[n("strong",null,"输入："),s(" obj =")]),n("p",{"a:null,b:3":""},[n("strong",null,"输出：")]),n("p",null,[n("strong",null,"解释："),s(" obj.a 的值已从 undefined 更改为 null 。")])],-1),w=n("p",null,[n("strong",null,"示例 2：")],-1),x=n("blockquote",null,[n("p",{"a:undefined,b:[a,undefined]":""},[n("strong",null,"输入："),s(" obj =")]),n("p",{"a:null,b:[a,null]":""},[n("strong",null,"输出：")]),n("p",null,[n("strong",null,"解释："),s(" obj.a 和 obj.b[1] 的值已从 undefined 更改为 null 。")])],-1),N=e(`<p><strong>提示：</strong></p><ul><li><code>obj</code> 是一个有效的 JSON 对象或数组</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>通过判断输入是数组还是对象，分别创建一个新的空数组或对象（<code>res</code>），以便存储最终的结果。因为需要<strong>深度复制</strong>原对象或数组，保证不修改原对象。</p></li><li><p>使用 <code>for...in</code> 循环遍历输入对象（或数组）的每一个属性：</p><ul><li>如果属性值是一个对象或数组，则递归调用 <code>undefinedToNull</code> 方法继续处理其子属性，确保每一层都正确处理。</li><li>如果值是 <code>undefined</code>，将该值替换为 <code>null</code>。</li><li>如果值是其他类型（如数字、字符串、布尔值等），直接将该值赋给结果。</li></ul></li><li><p>最终，返回深度复制并处理过的对象或数组 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是对象或数组的元素总数，每个元素都会被访问一次并进行处理。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为创建了一个新的副本对象或数组，空间需求与输入对象大小成正比。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">undefinedToNull</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 判断 obj 是数组还是对象，分别创建一个新的空数组或对象</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 obj 的每个属性</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果当前属性值是对象或数组，递归调用 undefinedToNull 处理</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">undefinedToNull</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果当前属性值是 undefined，替换为 null</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 否则直接将原值赋给结果对象</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回新创建的对象或数组</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function O(S,J){const l=t("font"),o=t("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:d(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[b,a(o)]),s(),n("a",v,[h,a(o)])]),f,m,_,g,y,j,w,x,N])}const E=c(u,[["render",O],["__file","2775.html.vue"]]);export{E as default};
