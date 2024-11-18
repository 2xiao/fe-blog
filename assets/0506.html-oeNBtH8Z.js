import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as d}from"./app-9Xw5divW.js";const r={},k=n("h1",{id:"_506-相对名次",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_506-相对名次","aria-hidden":"true"},"#"),s(" 506. 相对名次")],-1),h=n("code",null,"数组",-1),m=n("code",null,"排序",-1),v=n("code",null,"堆（优先队列）",-1),b={href:"https://leetcode.cn/problems/relative-ranks",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/relative-ranks",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>score</code> of size <code>n</code>, where <code>score[i]</code> is the score of the <code>ith</code> athlete in a competition. All the scores are guaranteed to be <strong>unique</strong>.</p><p>The athletes are <strong>placed</strong> based on their scores, where the <code>1st</code> place athlete has the highest score, the <code>2nd</code> place athlete has the <code>2nd</code> highest score, and so on. The placement of each athlete determines their rank:</p><ul><li>The <code>1st</code> place athlete&#39;s rank is <code>&quot;Gold Medal&quot;</code>.</li><li>The <code>2nd</code> place athlete&#39;s rank is <code>&quot;Silver Medal&quot;</code>.</li><li>The <code>3rd</code> place athlete&#39;s rank is <code>&quot;Bronze Medal&quot;</code>.</li><li>For the <code>4th</code> place to the <code>nth</code> place athlete, their rank is their placement number (i.e., the <code>xth</code> place athlete&#39;s rank is <code>&quot;x&quot;</code>).</li></ul><p>Return an array <code>answer</code> of size <code>n</code> where <code>answer[i]</code> is the <strong>rank</strong> of the <code>ith</code> athlete.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: score = [5,4,3,2,1]</p><p>Output: [&quot;Gold Medal&quot;,&quot;Silver Medal&quot;,&quot;Bronze Medal&quot;,&quot;4&quot;,&quot;5&quot;]</p><p>Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: score = [10,3,8,9,4]</p><p>Output: [&quot;Gold Medal&quot;,&quot;5&quot;,&quot;Bronze Medal&quot;,&quot;Silver Medal&quot;,&quot;4&quot;]</p><p>Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == score.length</code></li><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>0 &lt;= score[i] &lt;= 10^6</code></li><li>All the values in <code>score</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的整数数组 <code>score</code> ，其中 <code>score[i]</code> 是第 <code>i</code> 位运动员在比赛中的得分。所有得分都 <strong>互不相同</strong> 。</p><p>运动员将根据得分 <strong>决定名次</strong> ，其中名次第 <code>1</code> 的运动员得分最高，名次第 <code>2</code> 的运动员得分第 <code>2</code> 高，依此类推。运动员的名次决定了他们的获奖情况：</p><ul><li>名次第 <code>1</code> 的运动员获金牌 <code>&quot;Gold Medal&quot;</code> 。</li><li>名次第 <code>2</code> 的运动员获银牌 <code>&quot;Silver Medal&quot;</code> 。</li><li>名次第 <code>3</code> 的运动员获铜牌 <code>&quot;Bronze Medal&quot;</code> 。</li><li>从名次第 <code>4</code> 到第 <code>n</code> 的运动员，只能获得他们的名次编号（即，名次第 <code>x</code> 的运动员获得编号 <code>&quot;x&quot;</code>）。</li></ul><p>使用长度为 <code>n</code> 的数组 <code>answer</code> 返回获奖，其中 <code>answer[i]</code> 是第 <code>i</code> 位运动员的获奖情况。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以先将成绩排序，将每个成绩对应的名次用哈希表存起来，然后按照原始顺序从哈希表中取出名次，返回即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">score</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRelativeRanks</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">score</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> rank <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>score<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	rank<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Gold Medal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Silver Medal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token string">&#39;Bronze Medal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> <span class="token function">String</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> score<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function x(w,y){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,a(p)]),s(),n("a",f,[g,a(p)])]),q])}const B=l(r,[["render",x],["__file","0506.html.vue"]]);export{B as default};
