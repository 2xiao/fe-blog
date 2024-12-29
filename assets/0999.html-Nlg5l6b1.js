import{_ as i,r as a,o as p,c as q,a as t,b as o,d as n,w as s,f as c,e as r}from"./app-r0ql_Osa.js";const d={},m=t("h1",{id:"_999-可以被一步捕获的棋子数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_999-可以被一步捕获的棋子数","aria-hidden":"true"},"#"),o(" 999. 可以被一步捕获的棋子数")],-1),k=t("code",null,"数组",-1),v=t("code",null,"矩阵",-1),b=t("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/available-captures-for-rook",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/available-captures-for-rook",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>8 x 8</code> <strong>matrix</strong> representing a chessboard. There is <strong>exactly one</strong> white rook represented by <code>&#39;R&#39;</code>, some number of white bishops <code>&#39;B&#39;</code>, and some number of black pawns <code>&#39;p&#39;</code>. Empty squares are represented by <code>&#39;.&#39;</code>.</p><p>A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece <em>or</em> the edge of the board. A rook is <strong>attacking</strong> a pawn if it can move to the pawn&#39;s square in one move.</p><p>Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.</p><p>Return the <strong>number of pawns</strong> the white rook is <strong>attacking</strong>.</p><p><strong>Example 1:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_1_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>board =
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>In this example, the rook is attacking all the pawns.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2019/02/19/1253_example_2_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>board =
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;R&quot;,&quot;B&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong> 0</p><p><strong>Explanation:</strong></p><p>The bishops are blocking the rook from attacking any of the pawns.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><figure><img src="https://assets.leetcode.com/uploads/2019/02/20/1253_example_3_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Input:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>board =
[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;B&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>The rook is attacking the pawns at positions b5, d6, and f5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>board.length == 8</code></li><li><code>board[i].length == 8</code></li><li><code>board[i][j]</code> is either <code>&#39;R&#39;</code>, <code>&#39;.&#39;</code>, <code>&#39;B&#39;</code>, or <code>&#39;p&#39;</code></li><li>There is exactly one cell with <code>board[i][j] == &#39;R&#39;</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>8 x 8</code> 的棋盘，<strong>只有一个</strong> 白色的车，用字符 <code>&#39;R&#39;</code> 表示。棋盘上还可能存在白色的象 <code>&#39;B&#39;</code> 以及黑色的卒 <code>&#39;p&#39;</code>。空方块用字符 <code>&#39;.&#39;</code> 表示。</p><p>车可以按水平或竖直方向（上，下，左，右）移动任意个方格直到它遇到另一个棋子或棋盘的边界。如果它能够在一次移动中移动到棋子的方格，则能够 <strong>吃掉</strong> 棋子。</p><p>注意：车不能穿过其它棋子，比如象和卒。这意味着如果有其它棋子挡住了路径，车就不能够吃掉棋子。</p><p>返回白车将能 <strong>吃掉</strong> 的 <strong>卒的数量</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/1253_example_1_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 在本例中，车能够吃掉所有的卒。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/1253_example_2_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;R&quot;,&quot;B&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;B&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 象阻止了车吃掉任何卒。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/23/1253_example_3_improved.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;p&quot;,&quot;p&quot;,&quot;.&quot;,&quot;R&quot;,&quot;.&quot;,&quot;p&quot;,&quot;B&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;B&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;p&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
[&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>车可以吃掉位置 b5，d6 和 f5 的卒。</p></blockquote><p><strong>提示：</strong></p><ol><li><code>board.length == 8</code></li><li><code>board[i].length == 8</code></li><li><code>board[i][j]</code> 可以是 <code>&#39;R&#39;</code>，<code>&#39;.&#39;</code>，<code>&#39;B&#39;</code> 或 <code>&#39;p&#39;</code></li><li>只有一个格子上存在 <code>board[i][j] == &#39;R&#39;</code></li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>遍历整个棋盘，记录 <code>R</code> 的位置 <code>(x, y)</code>。</p></li><li><p>使用方向数组 <code>[[1, 0], [-1, 0], [0, 1], [0, -1]]</code>，分别表示下、上、右、左四个方向。</p></li><li><p>从 <code>R</code> 的位置出发，按照每个方向依次移动，每次移动时：</p><ul><li>如果遇到卒 <code>p</code>，捕获并停止该方向的移动。</li><li>如果遇到象 <code>B</code> 或出界，停止该方向的移动。</li><li>如果遇到空格 <code>.</code>，继续移动。</li></ul></li><li><p>返回捕获的卒数量。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(1)</code></p><ul><li>找到车的位置需要遍历整个棋盘，时间复杂度为 <code>O(64)</code>（固定为 8x8 棋盘）。</li><li>模拟四个方向的移动，每个方向最多遍历 8 格，时间复杂度为 <code>O(4 × 8)</code>。</li><li>总时间复杂度为 <code>O(64)</code>，即常数时间。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用常数额外空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numRookCaptures</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到车 &#39;R&#39; 的位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				x <span class="token operator">=</span> i<span class="token punctuation">;</span>
				y <span class="token operator">=</span> j<span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 定义四个方向</span>
	<span class="token keyword">const</span> direction <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历四个方向</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> i <span class="token operator">=</span> x <span class="token operator">+</span> dx<span class="token punctuation">,</span>
			j <span class="token operator">=</span> y <span class="token operator">+</span> dy<span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果遇到卒</span>
				res<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果遇到阻挡（非空格）</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			i <span class="token operator">+=</span> dx<span class="token punctuation">;</span>
			j <span class="token operator">+=</span> dy<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"2257",-1),B=t("td",{style:{"text-align":"left"}},"统计网格图中没有被保卫的格子数",-1),R={style:{"text-align":"center"}},j={style:{"text-align":"left"}},N=t("code",null,"数组",-1),E=t("code",null,"矩阵",-1),I=t("code",null,"模拟",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/count-unguarded-cells-in-the-grid",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/count-unguarded-cells-in-the-grid",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"3001",-1),T=t("td",{style:{"text-align":"left"}},"捕获黑皇后需要的最少移动次数",-1),L=t("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},A=t("code",null,"数组",-1),S=t("code",null,"枚举",-1),Y=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/minimum-moves-to-capture-the-queen",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/minimum-moves-to-capture-the-queen",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"3256",-1),K=t("td",{style:{"text-align":"left"}},"放三个车的价值之和最大 I",-1),M=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"动态规划",-1),X=t("code",null,"枚举",-1),Z=t("code",null,"1+",-1),$=t("td",{style:{"text-align":"center"}},"🔴",-1),tt={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/maximum-value-sum-by-placing-three-rooks-i",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"3257",-1),et=t("td",{style:{"text-align":"left"}},"放三个车的价值之和最大 II",-1),ut=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},lt=t("code",null,"数组",-1),it=t("code",null,"动态规划",-1),pt=t("code",null,"枚举",-1),qt=t("code",null,"1+",-1),ct=t("td",{style:{"text-align":"center"}},"🔴",-1),rt={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/maximum-value-sum-by-placing-three-rooks-ii",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii",target:"_blank",rel:"noopener noreferrer"};function kt(vt,bt){const l=a("font"),e=a("RouterLink"),u=a("ExternalLinkIcon");return p(),q("div",null,[m,t("p",null,[o("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[o("Easy")]),_:1}),o("  🔖  "),n(e,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),o(),n(e,{to:"/tag/matrix.html"},{default:s(()=>[v]),_:1}),o(),n(e,{to:"/tag/simulation.html"},{default:s(()=>[b]),_:1}),o("  🔗 "),t("a",g,[h,n(u)]),o(),t("a",_,[f,n(u)])]),x,c(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[w,B,t("td",R,[n(e,{to:"/problem/2257.html"},{default:s(()=>[o("[✓]")]),_:1})]),t("td",j,[n(e,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),o(),n(e,{to:"/tag/matrix.html"},{default:s(()=>[E]),_:1}),o(),n(e,{to:"/tag/simulation.html"},{default:s(()=>[I]),_:1})]),O,t("td",z,[t("a",C,[o("🀄️"),n(u)]),o(),t("a",G,[o("🔗"),n(u)])])]),t("tr",null,[P,T,L,t("td",V,[n(e,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),o(),n(e,{to:"/tag/enumeration.html"},{default:s(()=>[S]),_:1})]),Y,t("td",D,[t("a",F,[o("🀄️"),n(u)]),o(),t("a",H,[o("🔗"),n(u)])])]),t("tr",null,[J,K,M,t("td",Q,[n(e,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),o(),n(e,{to:"/tag/dynamic-programming.html"},{default:s(()=>[W]),_:1}),o(),n(e,{to:"/tag/enumeration.html"},{default:s(()=>[X]),_:1}),o(),Z]),$,t("td",tt,[t("a",ot,[o("🀄️"),n(u)]),o(),t("a",nt,[o("🔗"),n(u)])])]),t("tr",null,[st,et,ut,t("td",at,[n(e,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),o(),n(e,{to:"/tag/dynamic-programming.html"},{default:s(()=>[it]),_:1}),o(),n(e,{to:"/tag/enumeration.html"},{default:s(()=>[pt]),_:1}),o(),qt]),ct,t("td",rt,[t("a",dt,[o("🀄️"),n(u)]),o(),t("a",mt,[o("🔗"),n(u)])])])])])])}const ht=i(d,[["render",kt],["__file","0999.html.vue"]]);export{ht as default};
