import{_ as l,r as o,o as p,c as r,a as n,b as a,d as e,w as u,e as t}from"./app-OX-nYmHS.js";const i={},d=n("h1",{id:"_2804-数组原型的-foreach-方法-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2804-数组原型的-foreach-方法-🔒","aria-hidden":"true"},"#"),a(" 2804. 数组原型的 forEach 方法 🔒")],-1),k={href:"https://leetcode.cn/problems/array-prototype-foreach",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/array-prototype-foreach",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),m=t('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write your version of method <code>forEach</code> that enhances all arrays such that you can call the <code>array.forEach(callback, context)</code> method on any array and it will execute <code>callback</code> on each element of the array. Method <code>forEach</code> should not return anything.</p><p><code>callback</code> accepts the following arguments:</p><ul><li><code>currentValue</code> - represents the current element being processed in the array. It is the value of the element in the current iteration.</li><li><code>index</code> - represents the index of the current element being processed in the array.</li><li><code>array</code> - represents the array itself, allowing access to the entire array within the callback function.</li></ul><p>The <code>context</code> is the object that should be passed as the function context parameter to the <code>callback</code> function, ensuring that the <code>this</code> keyword within the <code>callback</code> function refers to this <code>context</code> object.</p><p>Try to implement it without using the built-in array methods.</p><p><strong>Example 1:</strong></p>',7),x=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr = [1,2,3],"),n("p",null,"callback = (val, i, arr) => arr[i] = val * 2,"),n("p",{"context:true":""},"context ="),n("p",null,"Output: [2,4,6]"),n("p",null,"Explanation:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),a("callback"),n("span",{class:"token punctuation"},","),a(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// [2,4,6]"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"The callback is executed on each element of the array.")],-1),v=n("p",null,[n("strong",null,"Example 2:")],-1),g=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr = [true, true, false, false],"),n("p",null,"callback = (val, i, arr) => arr[i] = this,"),n("p",{"context:false":""},"context ="),n("p",null,'Output: [{"context":false},{"context":false},{"context":false},{"context":false}]'),n("p",null,"Explanation:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),a("callback"),n("span",{class:"token punctuation"},","),a(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// [{"context":false},{"context":false},{"context":false},{"context":false}]'),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"The callback is executed on each element of the array with the right context.")],-1),_=n("p",null,[n("strong",null,"Example 3:")],-1),y=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr = [true, true, false, false],"),n("p",null,"callback = (val, i, arr) => arr[i] = !val,"),n("p",{"context:5":""},"context ="),n("p",null,"Output: [false,false,true,true]")],-1),E=t('<p><strong>Constraints:</strong></p><ul><li><code>arr</code> is a valid JSON array</li><li><code>context</code> is a valid JSON object</li><li><code>fn</code> is a function</li><li><code>0 &lt;= arr.length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个数组方法 <code>forEach</code>，使其可以在任何数组上调用 <code>array.forEach(callback, context)</code> 方法，它将在数组的每个元素上执行回调函数。<code>forEach</code> 方法不应该返回任何内容。</p><p>回调函数 <code>callback</code> 接受以下参数：</p><ul><li><code>value</code>：表示数组中当前正在处理的元素的值。</li><li><code>index</code>：表示数组中当前正在处理的元素的索引。</li><li><code>array</code>：表示数组本身，在回调函数内部可以访问整个数组。</li></ul><p>上下文 <code>context</code> 应该是作为函数上下文参数传递给回调函数 <code>callback</code> 的对象，确保回调函数 <code>callback</code> 内部的 <code>this</code> 关键字引用此上下文对象。</p><p>尝试在不使用内置数组方法的情况下实现这个方法。</p><p><strong>示例 1：</strong></p>',9),w=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"arr = [1,2,3],"),n("p",null,"callback = (val, i, arr) => arr[i] = val * 2,"),n("p",{"context:true":""},"context ="),n("p",null,[n("strong",null,"输出："),a("[2,4,6]")]),n("p",null,[n("strong",null,"解释：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),a("callback"),n("span",{class:"token punctuation"},","),a(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// [2,4,6]"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"回调函数在数组的每个元素上执行。")],-1),j=n("p",null,[n("strong",null,"示例 2：")],-1),N=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"arr = [true, true, false, false],"),n("p",null,"callback = (val, i, arr) => arr[i] = this,"),n("p",{"context:false":""},"context ="),n("p",null,[n("strong",null,"输出："),a('[{"context":false},{"context":false},{"context":false},{"context":false}]')]),n("p",null,[n("strong",null,"解释：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[a("arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),a("callback"),n("span",{class:"token punctuation"},","),a(" context"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// [{"context":false},{"context":false},{"context":false},{"context":false}]'),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"回调函数在数组的每个元素上以正确的上下文执行。")],-1),O=n("p",null,[n("strong",null,"示例 3：")],-1),q=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"arr = [true, true, false, false],"),n("p",null,"callback = (val, i, arr) => arr[i] = !val,"),n("p",{"context:5":""},"context ="),n("p",null,[n("strong",null,"输出："),a("[false,false,true,true]")])],-1),I=t(`<p><strong>提示：</strong></p><ul><li><code>arr</code> 是一个有效的 JSON 数组</li><li><code>context</code> 是一个有效的 JSON 对象</li><li><code>fn</code> 是一个函数</li><li><code>0 &lt;= arr.length &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过在 <code>Array.prototype</code> 上定义一个 <code>forEach</code> 方法来实现该功能。为了确保回调函数 <code>callback</code> 在指定的 <code>context</code> 上下文中执行，可以使用 <code>Function.prototype.call()</code>。</p><ol><li>在 <code>Array.prototype</code> 上定义 <code>forEach</code>，使其可以在任何数组上使用。</li><li>遍历数组的每个元素，调用 <code>callback.call(context, value, index, array)</code>，以确保 <code>callback</code> 在 <code>context</code> 上下文中执行。</li><li><code>callback</code> 接收三个参数：<code>value</code>（当前元素）、<code>index</code>（当前索引）和 <code>array</code>（数组本身）。</li><li><code>forEach</code> 不返回任何内容。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">context</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">forEach</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function S(T,V){const c=o("font"),s=o("ExternalLinkIcon");return p(),r("div",null,[d,n("p",null,[a("🟢 "),e(c,{color:"#15bd66"},{default:u(()=>[a("Easy")]),_:1}),a("  🔗 "),n("a",k,[h,e(s)]),a(),n("a",f,[b,e(s)])]),m,x,v,g,_,y,E,w,j,N,O,q,I])}const J=l(i,[["render",S],["__file","2804.html.vue"]]);export{J as default};
