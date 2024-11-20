import{_ as u,r as p,o as i,c as r,a as n,b as s,d as a,w as t,e}from"./app-BBnmDgJV.js";const k={},d=n("h1",{id:"_87-复原-ip",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_87-复原-ip","aria-hidden":"true"},"#"),s(" 87. 复原 IP")],-1),v=n("code",null,"字符串",-1),b=n("code",null,"回溯",-1),m={href:"https://leetcode.cn/problems/0on3uN",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),h=e('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个只包含数字的字符串 <code>s</code> ，用以表示一个 IP 地址，返回所有可能从 <code>s</code> 获得的 <strong>有效 IP 地址</strong> 。你可以按任何顺序返回答案。</p><p><strong>有效 IP 地址</strong> 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 <code>0</code>），整数之间用 <code>&#39;.&#39;</code> 分隔。</p><p>例如：&quot;0.1.2.201&quot; 和 &quot;192.168.1.1&quot; 是 <strong>有效</strong> IP 地址，但是 &quot;0.011.255.245&quot;、&quot;192.168.1.312&quot; 和 &quot;192.168@1.1&quot; 是 <strong>无效</strong> IP 地址。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;25525511135&quot;</p><p><strong>输出：</strong>[&quot;255.255.11.135&quot;,&quot;255.255.111.35&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;0000&quot;</p><p><strong>输出：</strong>[&quot;0.0.0.0&quot;]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1111&quot;</p><p><strong>输出：</strong>[&quot;1.1.1.1&quot;]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;010010&quot;</p><p><strong>输出：</strong>[&quot;0.10.0.10&quot;,&quot;0.100.1.0&quot;]</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;10203040&quot;</p><p><strong>输出：</strong>[&quot;10.20.30.40&quot;,&quot;102.0.30.40&quot;,&quot;10.203.0.40&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 3000</code></li><li><code>s</code> 仅由数字组成</li></ul>',16),_={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),q=e(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用回溯法来解决。</p><p>IP 地址由 4 个数字组成，每个数字的范围是 0 到 255。回溯法的基本思路是尝试每一种可能性，当得到一个满足条件的组合时，继续搜索下一个可能的数字。</p><ol><li><p>使用一个递归函数，每次从字符串中截取一个数字（可以是 1、2、3 位数字），将该数字加入当前的 IP 地址组合中，然后递归处理剩余的部分。</p></li><li><p>在递归函数中，需要注意一些剪枝的条件，比如：</p><ul><li>如果当前截取的数字超过了字符串的长度，结束递归。</li><li>如果当前截取的数字是以 0 开头的多位数，应该跳过，因为 IP 地址中不允许有前导零。</li><li>如果当前截取的数字大于 255，也应该跳过。</li></ul></li><li><p>如果得到的 IP 地址组合正好有 4 个数字，并且字符串被完全截取完毕，就将当前的组合加入结果集。</p></li></ol><p><strong>具体步骤：</strong></p><ol><li>初始化一个数组 <code>res</code> 用于存放结果。</li><li>定义一个递归函数 <code>backtrack</code>，接受参数 <code>start</code> 表示当前截取的位置，<code>track</code> 表示当前已经得到的 IP 地址组合。</li><li>在 <code>backtrack</code> 函数中，判断终止条件： <ul><li>如果 <code>track</code> 中超过了 4 个数字，直接返回。</li><li>如果 <code>track</code> 中已经有 4 个数字，且 <code>start</code> 刚好等于字符串的长度，将当前 <code>track</code> 加入 <code>res</code>。</li></ul></li><li>在循环中，每次截取 1、2、3 位数字，判断是否满足条件（不超过字符串长度，不以 0 开头的多位数，小于等于 255），满足条件则递归调用 <code>backtrack</code>。</li><li>最后，在主函数中返回结果数组 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是字符串的长度。递归栈最多会有 4 层，是常数级别的；每个字符都可能成为 IP 的一个部分，需要检查 <code>O(n)</code> 个可能的子串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>(不考虑结果数组的存储空间)，递归栈最多会有 4 层，是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">restoreIpAddresses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> track<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function w(y,I){const c=p("font"),o=p("RouterLink"),l=p("ExternalLinkIcon");return i(),r("div",null,[d,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",m,[g,a(l)])]),h,n("div",_,[f,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0093.html"},{default:t(()=>[s("第 93 题")]),_:1}),s(" 相同。")])]),q])}const P=u(k,[["render",w],["__file","jz_offer_II_087.html.vue"]]);export{P as default};
