import{_ as u,r as e,o as r,c as l,a as n,b as t,d as o,w as a,e as d}from"./app-totCBmv-.js";const i={},g=n("h1",{id:"_1639-通过给定词典构造目标字符串的方案数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1639-通过给定词典构造目标字符串的方案数","aria-hidden":"true"},"#"),t(" 1639. 通过给定词典构造目标字符串的方案数")],-1),k=n("code",null,"数组",-1),b=n("code",null,"字符串",-1),q=n("code",null,"动态规划",-1),m={href:"https://leetcode.cn/problems/number-of-ways-to-form-a-target-string-given-a-dictionary",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a list of strings of the <strong>same length</strong> <code>words</code> and a string <code>target</code>.</p><p>Your task is to form <code>target</code> using the given <code>words</code> under the following rules:</p><ul><li><code>target</code> should be formed from left to right.</li><li>To form the <code>ith</code> character (<strong>0-indexed</strong>) of <code>target</code>, you can choose the <code>kth</code> character of the <code>jth</code> string in <code>words</code> if <code>target[i] = words[j][k]</code>.</li><li>Once you use the <code>kth</code> character of the <code>jth</code> string of <code>words</code>, you <strong>can no longer</strong> use the <code>xth</code> character of any string in <code>words</code> where <code>x &lt;= k</code>. In other words, all characters to the left of or at index <code>k</code> become unusuable for every string.</li><li>Repeat the process until you form the string <code>target</code>.</li></ul><p><strong>Notice</strong> that you can use <strong>multiple characters</strong> from the <strong>same string</strong> in <code>words</code> provided the conditions above are met.</p><p>Return <em>the number of ways to form<code>target</code> from <code>words</code></em>. Since the answer may be too large, return it <strong>modulo</strong> <code>10^9 + 7</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;acca&quot;,&quot;bbbb&quot;,&quot;caca&quot;], target = &quot;aba&quot;</p><p>Output: 6</p><p>Explanation: There are 6 ways to form target.</p><p>&quot;aba&quot; -&gt; index 0 (&quot;<em>a</em> cca&quot;), index 1 (&quot;b <em>b</em> bb&quot;), index 3 (&quot;cac <em>a</em> &quot;)</p><p>&quot;aba&quot; -&gt; index 0 (&quot;<em>a</em> cca&quot;), index 2 (&quot;bb <em>b</em> b&quot;), index 3 (&quot;cac <em>a</em> &quot;)</p><p>&quot;aba&quot; -&gt; index 0 (&quot;<em>a</em> cca&quot;), index 1 (&quot;b <em>b</em> bb&quot;), index 3 (&quot;acc <em>a</em> &quot;)</p><p>&quot;aba&quot; -&gt; index 0 (&quot;<em>a</em> cca&quot;), index 2 (&quot;bb <em>b</em> b&quot;), index 3 (&quot;acc <em>a</em> &quot;)</p><p>&quot;aba&quot; -&gt; index 1 (&quot;c <em>a</em> ca&quot;), index 2 (&quot;bb <em>b</em> b&quot;), index 3 (&quot;acc <em>a</em> &quot;)</p><p>&quot;aba&quot; -&gt; index 1 (&quot;c <em>a</em> ca&quot;), index 2 (&quot;bb <em>b</em> b&quot;), index 3 (&quot;cac <em>a</em> &quot;)</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;abba&quot;,&quot;baab&quot;], target = &quot;bab&quot;</p><p>Output: 4</p><p>Explanation: There are 4 ways to form target.</p><p>&quot;bab&quot; -&gt; index 0 (&quot;<em>b</em> aab&quot;), index 1 (&quot;b <em>a</em> ab&quot;), index 2 (&quot;ab <em>b</em> a&quot;)</p><p>&quot;bab&quot; -&gt; index 0 (&quot;<em>b</em> aab&quot;), index 1 (&quot;b <em>a</em> ab&quot;), index 3 (&quot;baa <em>b</em> &quot;)</p><p>&quot;bab&quot; -&gt; index 0 (&quot;<em>b</em> aab&quot;), index 2 (&quot;ba <em>a</em> b&quot;), index 3 (&quot;baa <em>b</em> &quot;)</p><p>&quot;bab&quot; -&gt; index 1 (&quot;a <em>b</em> ba&quot;), index 2 (&quot;ba <em>a</em> b&quot;), index 3 (&quot;baa <em>b</em> &quot;)</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length &lt;= 1000</code></li><li>All strings in <code>words</code> have the same length.</li><li><code>1 &lt;= target.length &lt;= 1000</code></li><li><code>words[i]</code> and <code>target</code> contain only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串列表 <code>words</code> 和一个目标字符串 <code>target</code> 。<code>words</code> 中所有字符串都 <strong>长度相同</strong> 。</p><p>你的目标是使用给定的 <code>words</code> 字符串列表按照下述规则构造 <code>target</code> ：</p><ul><li>从左到右依次构造 <code>target</code> 的每一个字符。</li><li>为了得到 <code>target</code> 第 <code>i</code> 个字符（下标从 <strong>0</strong> 开始），当 <code>target[i] = words[j][k]</code> 时，你可以使用 <code>words</code> 列表中第 <code>j</code> 个字符串的第 <code>k</code> 个字符。</li><li>一旦你使用了 <code>words</code> 中第 <code>j</code> 个字符串的第 <code>k</code> 个字符，你不能再使用 <code>words</code> 字符串列表中任意单词的第 <code>x</code> 个字符（<code>x &lt;= k</code>）。也就是说，所有单词下标小于等于 <code>k</code> 的字符都不能再被使用。</li><li>请你重复此过程直到得到目标字符串 <code>target</code> 。</li></ul><p><strong>请注意</strong>，在构造目标字符串的过程中，你可以按照上述规定使用 <code>words</code> 列表中 <strong>同一个字符串</strong> 的 <strong>多个字符</strong> 。</p><p>请你返回使用 <code>words</code> 构造 <code>target</code> 的方案数。由于答案可能会很大，请对 <code>10^9 + 7</code> <strong>取余</strong> 后返回。</p><p>（译者注：此题目求的是有多少个不同的 <code>k</code> 序列，详情请见示例。）</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;acca&quot;,&quot;bbbb&quot;,&quot;caca&quot;], target = &quot;aba&quot;</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 总共有 6 种方法构造目标串。</p><p>&quot;aba&quot; -&gt; 下标为 0 (&quot;<strong>a</strong> cca&quot;)，下标为 1 (&quot;b<strong>b</strong> bb&quot;)，下标为 3 (&quot;cac<strong>a</strong> &quot;)</p><p>&quot;aba&quot; -&gt; 下标为 0 (&quot;<strong>a</strong> cca&quot;)，下标为 2 (&quot;bb<strong>b</strong> b&quot;)，下标为 3 (&quot;cac<strong>a</strong> &quot;)</p><p>&quot;aba&quot; -&gt; 下标为 0 (&quot;<strong>a</strong> cca&quot;)，下标为 1 (&quot;b<strong>b</strong> bb&quot;)，下标为 3 (&quot;acc<strong>a</strong> &quot;)</p><p>&quot;aba&quot; -&gt; 下标为 0 (&quot;<strong>a</strong> cca&quot;)，下标为 2 (&quot;bb<strong>b</strong> b&quot;)，下标为 3 (&quot;acc<strong>a</strong> &quot;)</p><p>&quot;aba&quot; -&gt; 下标为 1 (&quot;c<strong>a</strong> ca&quot;)，下标为 2 (&quot;bb<strong>b</strong> b&quot;)，下标为 3 (&quot;acc<strong>a</strong> &quot;)</p><p>&quot;aba&quot; -&gt; 下标为 1 (&quot;c<strong>a</strong> ca&quot;)，下标为 2 (&quot;bb<strong>b</strong> b&quot;)，下标为 3 (&quot;cac<strong>a</strong> &quot;)</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abba&quot;,&quot;baab&quot;], target = &quot;bab&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 总共有 4 种不同形成 target 的方法。</p><p>&quot;bab&quot; -&gt; 下标为 0 (&quot;<strong>b</strong> aab&quot;)，下标为 1 (&quot;b<strong>a</strong> ab&quot;)，下标为 2 (&quot;ab<strong>b</strong> a&quot;)</p><p>&quot;bab&quot; -&gt; 下标为 0 (&quot;<strong>b</strong> aab&quot;)，下标为 1 (&quot;b<strong>a</strong> ab&quot;)，下标为 3 (&quot;baa<strong>b</strong> &quot;)</p><p>&quot;bab&quot; -&gt; 下标为 0 (&quot;<strong>b</strong> aab&quot;)，下标为 2 (&quot;ba<strong>a</strong> b&quot;)，下标为 3 (&quot;baa<strong>b</strong> &quot;)</p><p>&quot;bab&quot; -&gt; 下标为 1 (&quot;a<strong>b</strong> ba&quot;)，下标为 2 (&quot;ba<strong>a</strong> b&quot;)，下标为 3 (&quot;baa<strong>b</strong> &quot;)</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abcd&quot;], target = &quot;abcd&quot;</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;abab&quot;,&quot;baba&quot;,&quot;abba&quot;,&quot;baab&quot;], target = &quot;abba&quot;</p><p><strong>输出：</strong> 16</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length &lt;= 1000</code></li><li><code>words</code> 中所有单词长度相同。</li><li><code>1 &lt;= target.length &lt;= 1000</code></li><li><code>words[i]</code> 和 <code>target</code> 都仅包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的本质是一个组合问题，使用动态规划可以有效解决。</p><ul><li>设 <code>dp[j]</code> 表示构造 <code>target</code> 的前 <code>j</code> 个字符的方法总数。</li><li>遍历 <code>words</code> 的列，从右向左更新 <code>dp</code> 数组，计算每列对 <code>target</code> 各个位置的贡献。</li><li>通过预处理统计 <code>words</code> 各列每个字符的出现次数，加速计算。</li></ul><p><strong>1. 统计频率</strong></p><ul><li>遍历 <code>words</code>，统计每列每个字符的出现次数，存储为一个频率矩阵 <code>freq</code>。</li></ul><p><strong>2. 初始化 DP 数组</strong></p><ul><li>初始化 <code>dp</code> 数组： <ul><li><code>dp[j]</code> 表示构造 <code>target[:j]</code> 的方法数。</li><li>初始化：<code>dp[0] = 1</code>，表示构造空字符串的方式数为 1。</li></ul></li></ul><p><strong>3. 逐列更新 DP</strong></p><ul><li>对每列进行处理，从右向左更新 <code>dp</code> 数组： <ul><li>如果当前列能够为目标字符串的第 <code>j</code> 个字符提供一个字符： <ul><li>更新 <code>dp[j] += dp[j - 1] * freq[col][target[j - 1]]</code>。</li></ul></li><li>使用模 <code>10^9 + 7</code> 防止溢出。</li></ul></li></ul><p><strong>4. 返回结果</strong></p><ul><li>最终 <code>dp[target.length]</code> 即为所求。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li>统计频率：<code>O(m * w)</code>，其中 <code>m</code> 是 <code>words</code> 的列数，<code>w</code> 是行数。</li><li>动态规划更新：<code>O(m * n)</code>，其中 <code>n</code> 是 <code>target</code> 的长度。</li><li>总时间复杂度：<code>O(m * (w + n))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li>频率数组 <code>freq</code>：<code>O(26 * m)</code>。</li><li>动态规划数组 <code>dp</code>：<code>O(n)</code>。</li><li>总空间复杂度：<code>O(26 * m + n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numWays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token constant">MOD</span> <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 列数</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> target<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 统计每列字符频率</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> m <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			freq<span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>col<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化 dp 数组</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历列，从右向左更新 dp 数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> charIndex <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> freq<span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">[</span>charIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
			dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">%=</span> <span class="token constant">MOD</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function x(y,_){const p=e("font"),s=e("RouterLink"),c=e("ExternalLinkIcon");return r(),l("div",null,[g,n("p",null,[t("🔴 "),o(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),o(s,{to:"/tag/array.html"},{default:a(()=>[k]),_:1}),t(),o(s,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),t(),o(s,{to:"/tag/dynamic-programming.html"},{default:a(()=>[q]),_:1}),t("  🔗 "),n("a",m,[h,o(c)]),t(),n("a",v,[f,o(c)])]),w])}const O=u(i,[["render",x],["__file","1639.html.vue"]]);export{O as default};
