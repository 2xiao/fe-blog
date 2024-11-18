import{_ as p,r as t,o as c,c as r,a as n,b as s,d as a,w as l,e as i}from"./app-5LzGvT4H.js";const u={},d=n("h1",{id:"_2695-包装数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2695-包装数组","aria-hidden":"true"},"#"),s(" 2695. 包装数组")],-1),k={href:"https://leetcode.cn/problems/array-wrapper",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/array-wrapper",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),h=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Create a class <code>ArrayWrapper</code> that accepts an array of integers in its constructor. This class should have two features:</p><ul><li>When two instances of this class are added together with the <code>+</code> operator, the resulting value is the sum of all the elements in both arrays.</li><li>When the <code>String()</code> function is called on the instance, it will return a comma separated string surrounded by brackets. For example, <code>[1,2,3]</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [[1,2],[3,4]], operation = &quot;Add&quot;</p><p>Output: 10</p><p>Explanation:</p><p>const obj1 = new ArrayWrapper([1,2]);</p><p>const obj2 = new ArrayWrapper([3,4]);</p><p>obj1 + obj2; // 10</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [[23,98,42,70]], operation = &quot;String&quot;</p><p>Output: &quot;[23,98,42,70]&quot;</p><p>Explanation:</p><p>const obj = new ArrayWrapper([23,98,42,70]);</p><p>String(obj); // &quot;[23,98,42,70]&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [[],[]], operation = &quot;Add&quot;</p><p>Output: 0</p><p>Explanation:</p><p>const obj1 = new ArrayWrapper([]);</p><p>const obj2 = new ArrayWrapper([]);</p><p>obj1 + obj2; // 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li><code>Note: nums is the array passed to the constructor</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>创建一个名为 <code>ArrayWrapper</code> 的类，它在其构造函数中接受一个整数数组作为参数。该类应具有以下两个特性：</p><ul><li>当使用 <code>+</code> 运算符将两个该类的实例相加时，结果值为两个数组中所有元素的总和。</li><li>当在实例上调用 <code>String()</code> 函数时，它将返回一个由逗号分隔的括在方括号中的字符串。例如，<code>[1,2,3]</code> 。</li></ul><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li><code>注意：nums 是传递给构造函数的数组。</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>定义包装类</strong>：创建一个名为 <code>ArrayWrapper</code> 的类，接收一个数组作为构造参数。</li><li><strong>实现基本方法</strong>： <ul><li><code>toString</code>：返回数组的字符串表示形式。</li><li><code>valueOf</code>：返回数组元素的总和。</li></ul></li><li><strong>重载运算符</strong>：使用 <code>valueOf</code> 来支持加法操作，确保可以直接与数字进行相加。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，求和和获取长度操作需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了固定的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">ArrayWrapper</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> arr<span class="token punctuation">;</span> <span class="token comment">// 存储数组</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">ArrayWrapper</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组元素的总和</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">ArrayWrapper</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组的字符串表示</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // &quot;[1,2]&quot;
 * String(obj2); // &quot;[3,4]&quot;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function g(f,y){const o=t("font"),e=t("ExternalLinkIcon");return c(),r("div",null,[d,n("p",null,[s("🟢 "),a(o,{color:"#15bd66"},{default:l(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[m,a(e)]),s(),n("a",v,[b,a(e)])]),h])}const w=p(u,[["render",g],["__file","2695.html.vue"]]);export{w as default};
