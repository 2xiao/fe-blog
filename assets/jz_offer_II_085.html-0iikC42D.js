import{_ as i,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-KDJRKGep.js";const d={},k=n("h1",{id:"_85-生成匹配的括号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_85-生成匹配的括号","aria-hidden":"true"},"#"),s(" 85. 生成匹配的括号")],-1),h=n("code",null,"字符串",-1),m=n("code",null,"动态规划",-1),v=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/IDBivT",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>正整数 <code>n</code> 代表生成括号的对数，请设计一个函数，用于能够生成所有可能的并且 <strong>有效的</strong> 括号组合。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong>[&quot;((()))&quot;,&quot;(()())&quot;,&quot;(())()&quot;,&quot;()(())&quot;,&quot;()()()&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong>[&quot;()&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 8</code></li></ul>',8),g={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),w=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>定义一个空数组 <code>res</code> 用于存储最终结果，以及一个空数组 <code>track</code> 用于存储当前生成的括号组合。</li><li>编写回溯函数 <code>backtrack</code>，该函数接收两个参数 <code>left</code> 和 <code>right</code>，分别表示当前已使用的左括号和右括号的数量。</li><li>在回溯函数中，通过判断条件进行剪枝： <ul><li>如果 <code>left</code> 小于 <code>right</code>，说明生成的括号组合是无效的，直接返回。</li><li>如果 <code>left</code> 或 <code>right</code> 的数量超过 <code>n</code>，说明已经超出有效范围，直接返回。</li></ul></li><li>如果 <code>left</code> 和 <code>right</code> 都等于 <code>n</code>，则说明已经生成了有效的括号组合，将当前 <code>track</code> 中的括号组合转为字符串并加入 <code>res</code> 数组。</li><li>在回溯函数中，分别尝试添加左括号和右括号，并递归调用下一层。之后需要撤销当前的选择，继续尝试下一个选择。</li><li>调用回溯函数 <code>backtrack</code> 的初始状态是 <code>(0, 0)</code>，表示左右括号的数量都为 0。</li><li>最终返回结果数组 <code>res</code>。</li></ol><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(4^n / √n)</code>，生成合法括号组合的时间复杂度由卡特兰数决定，对于 <code>n</code> 对括号，其数量为 <code>C(2n, n)/(n + 1)</code>，即 <code>O(4^n / √n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>(不包括结果数组的存储空间)。 <ul><li>递归栈的空间复杂度 <code>O(n)</code>，回溯的最大递归深度为 <code>2n</code>，因为每次递归都会处理一个括号，直到所有 <code>2n</code> 个括号被处理完；</li><li>使用了一个 <code>track</code> 数组来存储当前路径，它的空间复杂度是 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateParenthesis</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">||</span> left <span class="token operator">&gt;</span> n <span class="token operator">||</span> right <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> n <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">backtrack</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">backtrack</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(y,I){const p=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(l)])]),_,n("div",g,[q,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0022.html"},{default:t(()=>[s("第 22 题")]),_:1}),s(" 相同。")])]),w])}const L=i(d,[["render",x],["__file","jz_offer_II_085.html.vue"]]);export{L as default};
