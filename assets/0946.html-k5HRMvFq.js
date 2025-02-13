import{_ as l,r as p,o as d,c as i,a as n,b as s,d as e,w as a,e as u}from"./app-MXSjQbID.js";const r={},k=n("h1",{id:"_946-验证栈序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_946-验证栈序列","aria-hidden":"true"},"#"),s(" 946. 验证栈序列")],-1),h=n("code",null,"栈",-1),m=n("code",null,"数组",-1),g=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/validate-stack-sequences",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/validate-stack-sequences",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>pushed</code> and <code>popped</code> each with distinct values, return <code>true</code> <em>if this could have been the result of a sequence of push and pop operations on an initially empty stack, or</em><code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]</p><p>Output: true</p><p>Explanation: We might do the following sequence:</p><p>push(1), push(2), push(3), push(4),</p><p>pop() -&gt; 4,</p><p>push(5),</p><p>pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]</p><p>Output: false</p><p>Explanation: 1 cannot be popped before 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pushed.length &lt;= 1000</code></li><li><code>0 &lt;= pushed[i] &lt;= 1000</code></li><li>All the elements of <code>pushed</code> are <strong>unique</strong>.</li><li><code>popped.length == pushed.length</code></li><li><code>popped</code> is a permutation of <code>pushed</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <code>pushed</code> 和 <code>popped</code> 两个序列，每个序列中的 <strong>值都不重复</strong> ，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 <code>true</code>；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> pushed = [1,2,3,4,5], popped = [4,5,3,2,1]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 我们可以按以下顺序执行：</p><p>push(1), push(2), push(3), push(4), pop() -&gt; 4,</p><p>push(5), pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> pushed = [1,2,3,4,5], popped = [4,3,5,1,2]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 1 不能在 2 之前弹出。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= pushed.length &lt;= 1000</code></li><li><code>0 &lt;= pushed[i] &lt;= 1000</code></li><li><code>pushed</code> 的所有元素 <strong>互不相同</strong></li><li><code>popped.length == pushed.length</code></li><li><code>popped</code> 是 <code>pushed</code> 的一个排列</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用模拟栈的方法进行判断，使用一个辅助栈 <code>stack</code>，模拟 入栈（<code>push</code>）和出栈（<code>pop</code>）操作，最后通过判断栈是否为空来来验证序列的正确性。</p><ol><li><p><strong>初始化：</strong></p><ul><li>创建一个空栈 <code>stack</code> 来模拟栈的操作。</li><li>设置一个变量 <code>popIndex</code> 为 0，表示当前需要匹配的出栈序列中的元素位置。</li></ul></li><li><p><strong>遍历 <code>pushed</code>：</strong></p><ul><li>将每个元素 <code>item</code> 入栈（<code>stack.push(item)</code>）。</li><li>在每次入栈后，检查栈顶元素是否与 <code>popped[popIndex]</code> 相等： <ul><li>如果相等，说明当前出栈序列中的元素可以出栈，我们执行 <code>stack.pop()</code> 并将 <code>popIndex</code> 加 1。</li><li>继续重复这个过程，直到栈顶元素与 <code>popped[popIndex]</code> 不相等或栈为空。</li></ul></li></ul></li><li><p><strong>验证结果：</strong></p><ul><li>如果最终栈为空，说明 <code>popped</code> 是合法的出栈序列；否则不是。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>pushed</code> 的长度，每个元素入栈一次，最多出栈一次，总操作次数是 <code>O(n)</code>，</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，栈最多存储 <code>pushed</code> 中的所有元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">pushed</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">popped</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">validateStackSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pushed<span class="token punctuation">,</span> popped</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 模拟栈操作</span>
	<span class="token keyword">let</span> popIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 指向出栈序列的当前位置</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> pushed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 入栈操作</span>
		<span class="token comment">// 栈顶元素与当前出栈元素相等时，执行出栈操作</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> popped<span class="token punctuation">[</span>popIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			popIndex<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果栈为空，表示出栈序列是合法的</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function w(y,q){const c=p("font"),o=p("RouterLink"),t=p("ExternalLinkIcon");return d(),i("div",null,[k,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(o,{to:"/tag/stack.html"},{default:a(()=>[h]),_:1}),s(),e(o,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),e(o,{to:"/tag/simulation.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,e(t)]),s(),n("a",_,[f,e(t)])]),x])}const E=l(r,[["render",w],["__file","0946.html.vue"]]);export{E as default};
