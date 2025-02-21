import{_ as r,r as l,o as i,c as u,a as n,b as t,d as s,w as a,f as d,e as p}from"./app-9CeBk-uV.js";const k={},h=n("h1",{id:"_2633-将对象转换为-json-字符串-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2633-将对象转换为-json-字符串-🔒","aria-hidden":"true"},"#"),t(" 2633. 将对象转换为 JSON 字符串 🔒")],-1),b={href:"https://leetcode.cn/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),f=n("p",null,[t("Given a value, return a valid JSON string of that value. The value can be a string, number, array, object, boolean, or null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by "),n("code",null,"Object.keys()"),t(".")],-1),y=n("p",null,[t("Please solve it without using the built-in "),n("code",null,"JSON.stringify"),t(" method.")],-1),x=n("p",null,[n("strong",null,"Example 1:")],-1),q=n("blockquote",null,[n("p",{"y:1,x:2":""},"Input: object ="),n("p",{"y:1,x:2":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"Return the JSON representation."),n("p",null,"Note that the order of keys should be the same as the order returned by Object.keys().")],-1),j=n("p",null,[n("strong",null,"Example 2:")],-1),O=n("blockquote",null,[n("p",{"a:str,b:-12,c:true,d:null":""},"Input: object ="),n("p",{"a:str,b:-12,c:true,d:null":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"The primitives of JSON are strings, numbers, booleans, and null.")],-1),w=p('<p><strong>Example 3:</strong></p><blockquote><p>Input: object = {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}</p><p>Output: {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}</p><p>Explanation:</p><p>Objects and arrays can include other objects and arrays.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input: object = true</p><p>Output: true</p><p>Explanation:</p><p>Primitive types are valid inputs.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>value</code> is a valid JSON value</li><li><code>1 &lt;= JSON.stringify(object).length &lt;= 10^5</code></li><li><code>maxNestingLevel &lt;= 1000</code></li><li>all strings contain only alphanumeric characters</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个值，返回该值的有效 JSON 字符串。你可以假设这个值只包括字符串、整数、数组、对象、布尔值和 null。返回的字符串不能包含额外的空格。键的返回顺序应该与 <code>Object.keys()</code> 的顺序相同。</p><p>请你在不使用内置方法 <code>JSON.stringify</code> 的前提下解决这个问题。</p><p><strong>示例 1：</strong></p>',10),N=n("blockquote",null,[n("p",{"y:1,x:2":""},[n("strong",null,"输入："),t(" object =")]),n("p",{"y:1,x:2":""},[n("strong",null,"输出：")]),n("p",null,[n("strong",null,"解释：")]),n("p",null,"返回该对象的 JSON 表示形式。"),n("p",null,"注意，键的返回顺序应该与 Object.keys() 的顺序相同。")],-1),S=n("p",null,[n("strong",null,"示例 2：")],-1),J=n("blockquote",null,[n("p",{"a:str,b:-12,c:true,d:null":""},[n("strong",null,"输入："),t(" object =")]),n("p",{"a:str,b:-12,c:true,d:null":""},[n("strong",null,"输出：")]),n("p",null,[n("strong",null,"解释：")]),n("p",null,"JSON 的基本类型是字符串、数字型、布尔值和 null。")],-1),E=p(`<p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> object = {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}</p><p><strong>输出：</strong> {&quot;key&quot;:{&quot;a&quot;:1,&quot;b&quot;:[{},null,&quot;Hello&quot;]}}</p><p><strong>解释：</strong></p><p>对象和数组可以包括其他对象和数组。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> object = true</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>基本类型是有效的输入</p></blockquote><p><strong>提示：</strong></p><ul><li><code>value</code> 是一个有效的 JSON 值</li><li><code>1 &lt;= JSON.stringify(object).length &lt;= 10^5</code></li><li><code>maxNestingLevel &lt;= 1000</code></li><li>所有字符串只包含字母数字字符</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>基本数据类型处理</strong>：</p><ul><li><strong>字符串</strong>：需要用双引号包裹，内部的双引号需要转义。</li><li><strong>数字</strong>、<strong>布尔值</strong>和<strong>null</strong>：直接转为字符串即可。</li></ul></li><li><p><strong>数组处理</strong>：</p><ul><li>使用递归处理数组中的每个元素，将结果用逗号连接并用方括号包裹。</li></ul></li><li><p><strong>对象处理</strong>：</p><ul><li>遍历对象的键（使用 <code>Object.keys()</code> 确保顺序），递归处理每个键值对。</li><li>每个键需要用双引号包裹，格式为 <code>&quot;key&quot;:value</code>。</li><li>将结果用逗号连接并用大括号包裹。</li></ul></li><li><p><strong>递归结束条件</strong>：</p><ul><li>如果遇到不支持的类型，返回 <code>null</code> 或抛出错误。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是输入值的总元素数量，每个元素只被处理一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在递归调用和拼接字符串时，需要额外的空间来存储结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">stringify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 处理字符串</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> object <span class="token operator">==</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;&quot;&#39;</span> <span class="token operator">+</span> object <span class="token operator">+</span> <span class="token string">&#39;&quot;&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理数字、布尔值、null</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		<span class="token keyword">typeof</span> object <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span>
		<span class="token keyword">typeof</span> object <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span> <span class="token operator">||</span>
		object <span class="token operator">==</span> <span class="token keyword">null</span>
	<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理数组</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token string">&#39;[&#39;</span> <span class="token operator">+</span> object<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">stringify</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理对象</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> object <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token string">&#39;{&#39;</span> <span class="token operator">+</span>
			Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">stringify</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;:&#39;</span> <span class="token operator">+</span> <span class="token function">stringify</span><span class="token punctuation">(</span>object<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token string">&#39;}&#39;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果是无法处理的类型，返回 null</span>
	<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,13),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"2625",-1),C=n("td",{style:{"text-align":"left"}},"扁平化嵌套数组",-1),T={style:{"text-align":"center"}},V=n("td",{style:{"text-align":"left"}},null,-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"2628",-1),G=n("td",{style:{"text-align":"left"}},"完全相等的 JSON 字符串 🔒",-1),M={style:{"text-align":"center"}},z=n("td",{style:{"text-align":"left"}},null,-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2675",-1),W=n("td",{style:{"text-align":"left"}},"将对象数组转换为矩阵 🔒",-1),X={style:{"text-align":"center"}},Y=n("td",{style:{"text-align":"left"}},null,-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"2700",-1),en=n("td",{style:{"text-align":"left"}},"两个对象之间的差异 🔒",-1),an={style:{"text-align":"center"}},on=n("td",{style:{"text-align":"left"}},null,-1),ln=n("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"};function un(dn,kn){const c=l("font"),e=l("ExternalLinkIcon"),o=l("RouterLink");return i(),u("div",null,[h,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",b,[g,s(e)]),t(),n("a",_,[m,s(e)])]),v,f,y,x,q,j,O,w,N,S,J,E,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[I,C,n("td",T,[s(o,{to:"/problem/2625.html"},{default:a(()=>[t("[✓]")]),_:1})]),V,H,n("td",B,[n("a",R,[t("🀄️"),s(e)]),t(),n("a",A,[t("🔗"),s(e)])])]),n("tr",null,[P,G,n("td",M,[s(o,{to:"/problem/2628.html"},{default:a(()=>[t("[✓]")]),_:1})]),z,D,n("td",F,[n("a",K,[t("🀄️"),s(e)]),t(),n("a",Q,[t("🔗"),s(e)])])]),n("tr",null,[U,W,n("td",X,[s(o,{to:"/problem/2675.html"},{default:a(()=>[t("[✓]")]),_:1})]),Y,Z,n("td",$,[n("a",nn,[t("🀄️"),s(e)]),t(),n("a",tn,[t("🔗"),s(e)])])]),n("tr",null,[sn,en,n("td",an,[s(o,{to:"/problem/2700.html"},{default:a(()=>[t("[✓]")]),_:1})]),on,ln,n("td",pn,[n("a",cn,[t("🀄️"),s(e)]),t(),n("a",rn,[t("🔗"),s(e)])])])])])])}const bn=r(k,[["render",un],["__file","2633.html.vue"]]);export{bn as default};
