import{_ as s,r as n,o as l,c as r,a as e,d as o,b as t,w as d,e as i}from"./app-ynO5B_DP.js";const h={},u={id:"_946-验证栈序列",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_946-验证栈序列","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/validate-stack-sequences",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"栈",-1),g=e("code",null,"数组",-1),b=e("code",null,"模拟",-1),k={href:"https://leetcode.com/problems/validate-stack-sequences",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),v=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>pushed</code> and <code>popped</code> each with distinct values, return <code>true</code> <em>if this could have been the result of a sequence of push and pop operations on an initially empty stack, or</em><code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]</p><p>Output: true</p><p>Explanation: We might do the following sequence:</p><p>push(1), push(2), push(3), push(4),</p><p>pop() -&gt; 4,</p><p>push(5),</p><p>pop() -&gt; 5, pop() -&gt; 3, pop() -&gt; 2, pop() -&gt; 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]</p><p>Output: false</p><p>Explanation: 1 cannot be popped before 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pushed.length &lt;= 1000</code></li><li><code>0 &lt;= pushed[i] &lt;= 1000</code></li><li>All the elements of <code>pushed</code> are <strong>unique</strong>.</li><li><code>popped.length == pushed.length</code></li><li><code>popped</code> is a permutation of <code>pushed</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <code>pushed</code> 和 <code>popped</code> 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 <code>push</code> 和弹出 <code>pop</code> 操作序列的结果时，返回 <code>true</code>；否则，返回 <code>false</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用模拟栈的方法进行判断，使用一个辅助栈 <code>stack</code>，模拟 <code>push</code> 和 <code>pop</code> 操作，最后通过判断栈是否为空来得到最终的结果。</p><p>具体思路如下：</p><ol><li>遍历 <code>pushed</code> 数组，模拟入栈操作，并在每次入栈后，判断是否需要执行出栈操作。</li><li>如果当前栈顶元素等于 <code>popped</code> 数组中下一个要出栈的元素，则执行出栈操作。</li><li>遍历结束后，判断栈是否为空。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16);function q(E,w){const p=n("ExternalLinkIcon"),c=n("font"),a=n("RouterLink");return l(),r("div",null,[e("h1",u,[_,o(),e("a",f,[o("946. 验证栈序列"),t(p)])]),e("p",null,[o("🟠 "),t(c,{color:"#ffb800"},{default:d(()=>[o("Medium")]),_:1}),o("  🔖  "),t(a,{to:"/outline/tag/stack.html"},{default:d(()=>[m]),_:1}),o(),t(a,{to:"/outline/tag/array.html"},{default:d(()=>[g]),_:1}),o(),t(a,{to:"/outline/tag/simulation.html"},{default:d(()=>[b]),_:1}),o("  🔗 "),e("a",k,[x,t(p)])]),v])}const y=s(h,[["render",q],["__file","0946.html.vue"]]);export{y as default};
