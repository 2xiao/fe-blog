import{_ as c,r as p,o as r,c as i,a as n,b as e,d as t,w as s,f as u,e as d}from"./app-9CeBk-uV.js";const h={},k=n("h1",{id:"_406-根据身高重建队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_406-根据身高重建队列","aria-hidden":"true"},"#"),e(" 406. 根据身高重建队列")],-1),g=n("code",null,"树状数组",-1),_=n("code",null,"线段树",-1),m=n("code",null,"数组",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/queue-reconstruction-by-height",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/queue-reconstruction-by-height",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of people, <code>people</code>, which are the attributes of some people in a queue (not necessarily in order). Each <code>people[i] = [hi, ki]</code> represents the <code>ith</code> person of height <code>hi</code> with <strong>exactly</strong> <code>ki</code> other people in front who have a height greater than or equal to <code>hi</code>.</p><p>Reconstruct and return <em>the queue that is represented by the input array</em> <code>people</code>. The returned queue should be formatted as an array <code>queue</code>, where <code>queue[j] = [hj, kj]</code> is the attributes of the <code>jth</code> person in the queue (<code>queue[0]</code> is the person at the front of the queue).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]</p><p>Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]</p><p>Explanation:</p><p>Person 0 has height 5 with no other people taller or the same height in front.</p><p>Person 1 has height 7 with no other people taller or the same height in front.</p><p>Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.</p><p>Person 3 has height 6 with one person taller or the same height in front, which is person 1.</p><p>Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.</p><p>Person 5 has height 7 with one person taller or the same height in front, which is person 1.</p><p>Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]</p><p>Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= people.length &lt;= 2000</code></li><li><code>0 &lt;= hi &lt;= 10^6</code></li><li><code>0 &lt;= ki &lt; people.length</code></li><li>It is guaranteed that the queue can be reconstructed.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设有打乱顺序的一群人站成一个队列，数组 <code>people</code> 表示队列中一些人的属性（不一定按顺序）。每个 <code>people[i] = [hi, ki]</code> 表示第 <code>i</code> 个人的身高为 <code>hi</code> ，前面 <strong>正好</strong> 有 <code>ki</code> 个身高大于或等于 <code>hi</code> 的人。</p><p>请你重新构造并返回输入数组 <code>people</code> 所表示的队列。返回的队列应该格式化为数组 <code>queue</code> ，其中 <code>queue[j] = [hj, kj]</code> 是队列中第 <code>j</code> 个人的属性（<code>queue[0]</code> 是排在队列前面的人）。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]</p><p><strong>输出：</strong>[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]</p><p><strong>解释：</strong></p><p>编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。</p><p>编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。</p><p>编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。</p><p>编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。</p><p>编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。</p><p>编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。</p><p>因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]</p><p><strong>输出：</strong>[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= people.length &lt;= 2000</code></li><li><code>0 &lt;= hi &lt;= 10^6</code></li><li><code>0 &lt;= ki &lt; people.length</code></li><li>题目数据确保队列可以被重建</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>贪心策略 + 插入排序</strong>，按照贪心思想，从高个子优先的角度入手更容易满足条件约束。</p><ol><li><p><strong>排序策略</strong>：</p><ul><li><strong>按身高降序排序</strong>，对于身高相同的人按 <code>k</code> 升序排序：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>people<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>这样高个子优先处理，可以直接插入而不影响后续的计算。</li></ul></li><li><p><strong>插入重建队列</strong>：</p><ul><li>遍历排序后的 <code>people</code> 数组，根据每个人的 <code>k</code> 值将其插入到对应位置： <ul><li>使用 <code>splice(k, 0, item)</code> 来确保插入位置满足 <code>k</code> 条件。</li></ul></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，由于 <code>splice()</code> 操作可能需要线性时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储结果队列。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">people</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reconstructQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">people</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按身高降序，k值升序排序</span>
	people<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> person <span class="token keyword">of</span> people<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 插入到正确位置</span>
		result<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"315",-1),E=n("td",{style:{"text-align":"left"}},"计算右侧小于当前元素的个数",-1),P=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=n("code",null,"树状数组",-1),L=n("code",null,"线段树",-1),N=n("code",null,"数组",-1),V=n("code",null,"4+",-1),O=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/count-of-smaller-numbers-after-self",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/count-of-smaller-numbers-after-self",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"2512",-1),K=n("td",{style:{"text-align":"left"}},"奖励最顶尖的 K 名学生",-1),M=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},S=n("code",null,"数组",-1),Y=n("code",null,"哈希表",-1),z=n("code",null,"字符串",-1),A=n("code",null,"2+",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/reward-top-k-students",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/reward-top-k-students",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),n("a",f,[v,t(o)]),e(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[j,E,P,n("td",C,[t(a,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[I]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[L]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),e(),V]),O,n("td",B,[n("a",R,[e("🀄️"),t(o)]),e(),n("a",T,[e("🔗"),t(o)])])]),n("tr",null,[H,K,M,n("td",Q,[t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[Y]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[z]),_:1}),e(),A]),D,n("td",F,[n("a",G,[e("🀄️"),t(o)]),e(),n("a",J,[e("🔗"),t(o)])])])])])])}const $=c(h,[["render",U],["__file","0406.html.vue"]]);export{$ as default};
