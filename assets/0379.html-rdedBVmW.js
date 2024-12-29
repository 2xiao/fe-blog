import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-r0ql_Osa.js";const k={},h=n("h1",{id:"_379-电话目录管理系统-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_379-电话目录管理系统-🔒","aria-hidden":"true"},"#"),s(" 379. 电话目录管理系统 🔒")],-1),m=n("code",null,"设计",-1),b=n("code",null,"队列",-1),v=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),y=n("code",null,"链表",-1),f={href:"https://leetcode.cn/problems/design-phone-directory",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/design-phone-directory",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a phone directory that initially has <code>maxNumbers</code> empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.</p><p>Implement the <code>PhoneDirectory</code> class:</p><ul><li><code>PhoneDirectory(int maxNumbers)</code> Initializes the phone directory with the number of available slots <code>maxNumbers</code>.</li><li><code>int get()</code> Provides a number that is not assigned to anyone. Returns <code>-1</code> if no number is available.</li><li><code>bool check(int number)</code> Returns <code>true</code> if the slot <code>number</code> is available and <code>false</code> otherwise.</li><li><code>void release(int number)</code> Recycles or releases the slot <code>number</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input</p><p>[&quot;PhoneDirectory&quot;, &quot;get&quot;, &quot;get&quot;, &quot;check&quot;, &quot;get&quot;, &quot;check&quot;, &quot;release&quot;, &quot;check&quot;]</p><p>[[3], [], [], [2], [], [2], [2], [2]]</p><p>Output</p><p>[null, 0, 1, true, 2, false, null, true]</p><p>Explanation</p><p>PhoneDirectory phoneDirectory = new PhoneDirectory(3);</p><p>phoneDirectory.get(); // It can return any available phone number. Here we assume it returns 0.</p><p>phoneDirectory.get(); // Assume it returns 1.</p><p>phoneDirectory.check(2); // The number 2 is available, so return true.</p><p>phoneDirectory.get(); // It returns 2, the only number that is left.</p><p>phoneDirectory.check(2); // The number 2 is no longer available, so return false.</p><p>phoneDirectory.release(2); // Release number 2 back to the pool.</p><p>phoneDirectory.check(2); // Number 2 is available again, return true.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= maxNumbers &lt;= 10^4</code></li><li><code>0 &lt;= number &lt; maxNumbers</code></li><li>At most <code>2 * 10^4</code> calls will be made to get, check, and release.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>要求设计一个电话目录管理系统，包含以下两个操作：</p><ol><li><code>get()</code>：分配一个未被使用的电话号码，返回其编号，如果没有未被使用的号码，则返回 <code>-1</code>。</li><li><code>check(number)</code>：检查指定的电话号码是否被使用。</li><li><code>release(number)</code>：释放一个已经被使用的电话号码。</li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以通过维护一个可用号码集合和已使用号码集合来实现，可以使用两个数据结构：</p><ol><li>一个 <code>Set</code> 存储可用的号码，初始时包含所有可能的号码。</li><li>一个 <code>Set</code> 存储已经被使用的号码，初始时为空。</li></ol><p>通过两个 <code>Set</code> 来分别管理可用和已使用的号码，实现了分配、检查和释放号码的功能。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PhoneDirectory</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">maxNumbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>available <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxNumbers<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>available<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>available<span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>available<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>available<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>used<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> num<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>used<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">release</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>used<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>used<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>available<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),D=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"1845",-1),I=n("td",{style:{"text-align":"left"}},"座位预约管理系统",-1),P=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},S=n("code",null,"设计",-1),C=n("code",null,"堆（优先队列）",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/seat-reservation-manager",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/seat-reservation-manager",target:"_blank",rel:"noopener noreferrer"};function j(B,z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/queue.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",f,[g,a(o)]),s(),n("a",x,[w,a(o)])]),q,r(" prettier-ignore "),n("table",null,[D,n("tbody",null,[n("tr",null,[N,I,P,n("td",R,[a(e,{to:"/tag/design.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[C]),_:1})]),E,n("td",L,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])])])])])}const H=l(k,[["render",j],["__file","0379.html.vue"]]);export{H as default};
