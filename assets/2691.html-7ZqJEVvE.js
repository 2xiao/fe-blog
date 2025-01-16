import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as o,f as u,e as d}from"./app-KDJRKGep.js";const k={},m=n("h1",{id:"_2691-不可变辅助工具-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2691-不可变辅助工具-🔒","aria-hidden":"true"},"#"),s(" 2691. 不可变辅助工具 🔒")],-1),b={href:"https://leetcode.cn/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Creating clones of immutable objects with minor alterations can be a tedious process. Write a class <code>ImmutableHelper</code> that serves as a tool to help with this requirement. The constructor accepts an immutable object <code>obj</code> which will be a JSON object or array.</p><p>The class has a single method <code>produce</code> which accepts a function <code>mutator</code>. The function returns a new object which is similar to the original except it has those mutations applied.</p><p><code>mutator</code> accepts a <strong>proxied</strong> version of <code>obj</code>. A user of this function can (appear to) mutate this object, but the original object <code>obj</code> should not actually be effected.</p><p>For example, a user could write code like this:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> originalObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImmutableHelper</span><span class="token punctuation">(</span>originalObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> helper<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">proxy</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	proxy<span class="token punctuation">.</span>x <span class="token operator">=</span> proxy<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>originalObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;x&quot;: 5}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;x&quot;: 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Properties of the <code>mutator</code> function:</p><ul><li>It will always return <code>undefined</code>.</li><li>It will never access keys that don&#39;t exist.</li><li>It will never delete keys (<code>delete obj.key</code>)</li><li>It will never call methods on a proxied object (<code>push</code>, <code>shift</code>, etc).</li><li>It will never set keys to objects (<code>proxy.x = {}</code>)</li></ul><p><strong>Note on how the solution will be tested:</strong> the solution validator will only analyze differences between what was returned and the original <code>obj</code>. Doing a full comparison would be too computationally expensive. Also, any mutations to the original object will result in a wrong answer.</p><p><strong>Example 1:</strong></p><p>Input:</p><pre><code>obj = {&quot;val&quot;: 10},

mutators = [
  proxy =&gt; { proxy.val += 1; },
  proxy =&gt; { proxy.val -= 1; }
]
</code></pre><p>Output:</p><pre><code>[{&quot;val&quot;: 11}, {&quot;val&quot;: 9}]
</code></pre><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImmutableHelper</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
helper<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">proxy</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	proxy<span class="token punctuation">.</span>val <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;val&quot;: 11 }</span>
helper<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">proxy</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	proxy<span class="token punctuation">.</span>val <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;val&quot;: 9 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong></p><p>Input:</p><pre><code>obj = {&quot;arr&quot;: [1, 2, 3]}
mutators = [
  proxy =&gt; {
    proxy.arr[0] = 5;
    proxy.newVal = proxy.arr[0] + proxy.arr[1];
  }
]
</code></pre><p>Output:</p><pre><code>[{&quot;arr&quot;: [5, 2, 3], &quot;newVal&quot;: 7 }]
</code></pre><p>Explanation: Two edits were made to the original array. The first element in the array was to set 5. Then a new key was added with a value of 7.</p><p><strong>Example 3:</strong></p><p>Input:</p><pre><code>obj = {&quot;obj&quot;: {&quot;val&quot;: {&quot;x&quot;: 10, &quot;y&quot;: 20}}}

mutators = [
  proxy =&gt; {
    let data = proxy.obj.val;
    let temp = data.x;
    data.x = data.y;
    data.y = temp;
  }
]
</code></pre><p>Output:</p><pre><code>[{&quot;obj&quot;: {&quot;val&quot;: {&quot;x&quot;: 20, &quot;y&quot;: 10}}}]
</code></pre><p>Explanation: The values of &quot;x&quot; and &quot;y&quot; were swapped.</p><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 4 * 10^5</code></li><li><code>mutators</code> is an array of functions</li><li><code>total calls to produce() &lt; 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>创建带有微小修改的不可变对象的克隆副本是一个繁琐的过程。请你编写一个名为 <code>ImmutableHelper</code> 的类，作为满足这一要求的工具。构造函数接受一个不可变对象 <code>obj</code> ，该对象将是一个 JSON 对象或数组。</p><p>该类有一个名为 <code>produce</code> 的方法，它接受一个名为 <code>mutator</code> 的函数。该函数返回一个新的对象，它与原始对象相似，但应用了这些变化。</p><p><code>mutator</code> 函数接受 <code>obj</code> 的 <strong>代理</strong> 版本。函数的使用者可以（看起来）对该对象进行修改，但原始对象 <code>obj</code> 实际上没有被改变。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> originalObj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> helper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ImmutableHelper</span><span class="token punctuation">(</span>originalObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newObj <span class="token operator">=</span> helper<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">proxy</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	proxy<span class="token punctuation">.</span>x <span class="token operator">=</span> proxy<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>originalObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;x&quot;: 5}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;x&quot;: 6}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，用户可以编写如下代码：</p><p><code>mutator</code> 函数的属性：</p><ul><li>它始终返回 <code>undefined</code> 。</li><li>它永远不会访问不存在的键。</li><li>它永远不会删除键（ <code>delete obj.key</code> ）。</li><li>它永远不会在代理对象上调用方法（ <code>push</code> 、<code>shift</code> 等）。</li><li>它永远不会将键设置为对象（ <code>proxy.x = {}</code> ）。</li></ul><p><strong>关于如何测试解决方案的说明：</strong> 解决方案验证器仅分析返回结果与原始 <code>obj</code> 之间的差异。进行完全比较的计算开销太大。此外，对原始对象进行的任何变更都将导致答案错误。</p><p><strong>提示：</strong></p><ul><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 4 * 10^5</code></li><li><code>produce() 的总调用次数 &lt; 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <code>Proxy</code> 和深拷贝机制，确保原始对象不被改变的同时，允许用户通过代理对象“修改”属性。</p><ol><li><p><strong>深拷贝原始对象</strong>：在构造函数中，通过 <code>JSON.parse(JSON.stringify(obj))</code> 进行深拷贝，以确保 <code>this.original</code> 是一个全新的对象。</p></li><li><p><strong>使用 Proxy</strong>：在 <code>produce</code> 方法中，创建一个 <code>Proxy</code>，用于代理对原始对象的访问，代理允许拦截对对象属性的设置操作。</p></li><li><p><strong>Mutator 函数</strong>：调用传入的 <code>mutator</code> 函数，并将代理对象作为参数传递给它。用户可以通过这个代理对象进行修改。</p></li><li><p><strong>返回新对象</strong>：在 <code>produce</code> 方法结束时，再进行一次深拷贝以创建一个新的对象并返回。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ImmutableHelper</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>original <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 深拷贝原始对象</span>
	<span class="token punctuation">}</span>

	<span class="token function">produce</span><span class="token punctuation">(</span><span class="token parameter">mutator</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 使用 Proxy 来修改对象</span>
		<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>original<span class="token punctuation">,</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token comment">// 只允许修改代理，不允许直接修改原始对象</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span> <span class="token comment">// 代理修改</span>
					<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Cannot set property </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> on proxy</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 调用 mutator 函数</span>
		<span class="token function">mutator</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 深拷贝代理对象，返回一个新对象，应用修改</span>
		<span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,47),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),f=n("td",{style:{"text-align":"center"}},"2690",-1),_=n("td",{style:{"text-align":"left"}},"无穷方法对象 🔒",-1),w={style:{"text-align":"center"}},j=n("td",{style:{"text-align":"left"}},null,-1),q=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2692",-1),E=n("td",{style:{"text-align":"left"}},"使对象不可变 🔒",-1),J={style:{"text-align":"center"}},T=n("td",{style:{"text-align":"left"}},null,-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"};function L(B,A){const c=e("font"),t=e("ExternalLinkIcon"),p=e("RouterLink");return i(),r("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:o(()=>[s("Hard")]),_:1}),s("  🔗 "),n("a",b,[h,a(t)]),s(),n("a",v,[g,a(t)])]),y,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[f,_,n("td",w,[a(p,{to:"/problem/2690.html"},{default:o(()=>[s("[✓]")]),_:1})]),j,q,n("td",O,[n("a",I,[s("🀄️"),a(t)]),s(),n("a",N,[s("🔗"),a(t)])])]),n("tr",null,[S,E,n("td",J,[a(p,{to:"/problem/2692.html"},{default:o(()=>[s("[✓]")]),_:1})]),T,C,n("td",H,[n("a",V,[s("🀄️"),a(t)]),s(),n("a",P,[s("🔗"),a(t)])])])])])])}const z=l(k,[["render",L],["__file","2691.html.vue"]]);export{z as default};
