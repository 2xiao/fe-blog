import{_ as c,r as a,o as l,c as i,a as e,b as s,d as n,w as t,e as d}from"./app-fqckLmln.js";const u={},k=e("h1",{id:"_1629-按键持续时间最长的键",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1629-按键持续时间最长的键","aria-hidden":"true"},"#"),s(" 1629. 按键持续时间最长的键")],-1),h=e("code",null,"数组",-1),m=e("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/slowest-key",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/slowest-key",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),b=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A newly designed keypad was tested, where a tester pressed a sequence of <code>n</code> keys, one at a time.</p><p>You are given a string <code>keysPressed</code> of length <code>n</code>, where <code>keysPressed[i]</code> was the <code>ith</code> key pressed in the testing sequence, and a sorted list <code>releaseTimes</code>, where <code>releaseTimes[i]</code> was the time the <code>ith</code> key was released. Both arrays are <strong>0-indexed</strong>. The <code>0th</code> key was pressed at the time <code>0</code>, and every subsequent key was pressed at the <strong>exact</strong> time the previous key was released.</p><p>The tester wants to know the key of the keypress that had the <strong>longest duration</strong>. The <code>ith</code> keypress had a <strong>duration</strong> of <code>releaseTimes[i] - releaseTimes[i - 1]</code>, and the <code>0th</code> keypress had a duration of <code>releaseTimes[0]</code>.</p><p>Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key <strong>may not</strong> have had the same <strong>duration</strong>.</p><p><em>Return the key of the keypress that had the <strong>longest duration</strong>. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: releaseTimes = [9,29,49,50], keysPressed = &quot;cbcd&quot;</p><p>Output: &quot;c&quot;</p><p>Explanation: The keypresses were as follows:</p><p>Keypress for &#39;c&#39; had a duration of 9 (pressed at time 0 and released at time 9).</p><p>Keypress for &#39;b&#39; had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).</p><p>Keypress for &#39;c&#39; had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).</p><p>Keypress for &#39;d&#39; had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).</p><p>The longest of these was the keypress for &#39;b&#39; and the second keypress for &#39;c&#39;, both with duration 20.</p><p>&#39;c&#39; is lexicographically larger than &#39;b&#39;, so the answer is &#39;c&#39;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: releaseTimes = [12,23,36,46,62], keysPressed = &quot;spuda&quot;</p><p>Output: &quot;a&quot;</p><p>Explanation: The keypresses were as follows:</p><p>Keypress for &#39;s&#39; had a duration of 12.</p><p>Keypress for &#39;p&#39; had a duration of 23 - 12 = 11.</p><p>Keypress for &#39;u&#39; had a duration of 36 - 23 = 13.</p><p>Keypress for &#39;d&#39; had a duration of 46 - 36 = 10.</p><p>Keypress for &#39;a&#39; had a duration of 62 - 46 = 16.</p><p>The longest of these was the keypress for &#39;a&#39; with duration 16.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>releaseTimes.length == n</code></li><li><code>keysPressed.length == n</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= releaseTimes[i] &lt;= 10^9</code></li><li><code>releaseTimes[i] &lt; releaseTimes[i+1]</code></li><li><code>keysPressed</code> contains only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>LeetCode 设计了一款新式键盘，正在测试其可用性。测试人员将会点击一系列键（总计 <code>n</code> 个），每次一个。</p><p>给你一个长度为 <code>n</code> 的字符串 <code>keysPressed</code> ，其中 <code>keysPressed[i]</code> 表示测试序列中第 <code>i</code> 个被按下的键。<code>releaseTimes</code> 是一个升序排列的列表，其中 <code>releaseTimes[i]</code> 表示松开第 <code>i</code> 个键的时间。字符串和数组的 <strong>下标都从 0 开始</strong> 。第 <code>0</code> 个键在时间为 <code>0</code> 时被按下，接下来每个键都 <strong>恰好</strong> 在前一个键松开时被按下。</p><p>测试人员想要找出按键 <strong>持续时间最长</strong> 的键。第 <code>i</code> 次按键的持续时间为 <code>releaseTimes[i] - releaseTimes[i - 1]</code> ，第 <code>0</code> 次按键的持续时间为 <code>releaseTimes[0]</code> 。</p><p>注意，测试期间，同一个键可以在不同时刻被多次按下，而每次的持续时间都可能不同。</p><p>请返回单次按键 <strong>持续时间最长</strong> 的键，如果有多个这样的键，则返回 <strong>按字母顺序排列最大</strong> 的那个键。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> releaseTimes = [9,29,49,50], keysPressed = &quot;cbcd&quot;</p><p><strong>输出：</strong> &quot;c&quot;</p><p><strong>解释：</strong> 按键顺序和持续时间如下：</p><p>按下 &#39;c&#39; ，持续时间 9（时间 0 按下，时间 9 松开）</p><p>按下 &#39;b&#39; ，持续时间 29 - 9 = 20（松开上一个键的时间 9 按下，时间 29 松开）</p><p>按下 &#39;c&#39; ，持续时间 49 - 29 = 20（松开上一个键的时间 29 按下，时间 49 松开）</p><p>按下 &#39;d&#39; ，持续时间 50 - 49 = 1（松开上一个键的时间 49 按下，时间 50 松开）</p><p>按键持续时间最长的键是 &#39;b&#39; 和 &#39;c&#39;（第二次按下时），持续时间都是 20</p><p>&#39;c&#39; 按字母顺序排列比 &#39;b&#39; 大，所以答案是 &#39;c&#39;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> releaseTimes = [12,23,36,46,62], keysPressed = &quot;spuda&quot;</p><p><strong>输出：</strong> &quot;a&quot;</p><p><strong>解释：</strong> 按键顺序和持续时间如下：</p><p>按下 &#39;s&#39; ，持续时间 12</p><p>按下 &#39;p&#39; ，持续时间 23 - 12 = 11</p><p>按下 &#39;u&#39; ，持续时间 36 - 23 = 13</p><p>按下 &#39;d&#39; ，持续时间 46 - 36 = 10</p><p>按下 &#39;a&#39; ，持续时间 62 - 46 = 16</p><p>按键持续时间最长的键是 &#39;a&#39; ，持续时间 16</p></blockquote><p><strong>提示：</strong></p><ul><li><code>releaseTimes.length == n</code></li><li><code>keysPressed.length == n</code></li><li><code>2 &lt;= n &lt;= 1000</code></li><li><code>1 &lt;= releaseTimes[i] &lt;= 10^9</code></li><li><code>releaseTimes[i] &lt; releaseTimes[i+1]</code></li><li><code>keysPressed</code> 仅由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化</strong>：</p><ul><li>定义变量 <code>longestDuration</code> 来记录最长持续时间，初始化为第一个按键的持续时间 <code>releaseTimes[0]</code>。</li><li>定义变量 <code>res</code> 来记录当前最长持续时间对应的按键，初始化为 <code>keysPressed[0]</code>。</li></ul></li><li><p><strong>遍历按键记录</strong>：</p><ul><li>从第二个按键开始，计算每个按键的持续时间： <code>duration = releaseTimes[i] - releaseTimes[i - 1]</code></li><li>比较当前按键持续时间 <code>duration</code> 和记录的 <code>longestDuration</code>： <ul><li>如果 <code>duration &gt; longestDuration</code>，更新 <code>longestDuration</code> 和 <code>res</code>；</li><li>如果 <code>duration == longestDuration</code>，按键字典序 <code>keysPressed[i]</code> 更大时更新 <code>res</code>。</li></ul></li></ul></li><li><p>遍历完成后，<code>res</code> 即为答案。</p></li></ol><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><ol><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历 <code>releaseTimes</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常量空间记录结果和最长持续时间。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">releaseTimes</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">keysPressed</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">slowestKey</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">releaseTimes<span class="token punctuation">,</span> keysPressed</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> longestDuration <span class="token operator">=</span> releaseTimes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 第一个按键的持续时间</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> keysPressed<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 第一个按键字符</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> releaseTimes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> duration <span class="token operator">=</span> releaseTimes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> releaseTimes<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前按键持续时间</span>

		<span class="token comment">// 比较持续时间，若相等则比较字典序</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			duration <span class="token operator">&gt;</span> longestDuration <span class="token operator">||</span>
			<span class="token punctuation">(</span>duration <span class="token operator">==</span> longestDuration <span class="token operator">&amp;&amp;</span> keysPressed<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> res<span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			longestDuration <span class="token operator">=</span> duration<span class="token punctuation">;</span>
			res <span class="token operator">=</span> keysPressed<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function _(w,T){const r=a("font"),o=a("RouterLink"),p=a("ExternalLinkIcon");return l(),i("div",null,[k,e("p",null,[s("🟢 "),n(r,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),n(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),n(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),e("a",g,[y,n(p)]),s(),e("a",f,[v,n(p)])]),b])}const x=c(u,[["render",_],["__file","1629.html.vue"]]);export{x as default};
