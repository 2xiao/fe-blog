import{_ as d,r as n,o as c,c as l,a as e,b as o,d as t,w as r,e as p}from"./app-BBnmDgJV.js";const g={},h=e("h1",{id:"_790-多米诺和托米诺平铺",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_790-多米诺和托米诺平铺","aria-hidden":"true"},"#"),o(" 790. 多米诺和托米诺平铺")],-1),u=e("code",null,"动态规划",-1),m={href:"https://leetcode.cn/problems/domino-and-tromino-tiling",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/domino-and-tromino-tiling",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),x=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have two types of tiles: a <code>2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Given an integer n, return <em>the number of ways to tile an</em> <code>2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>109 + 7</code>.</p><p>In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3</p><p>Output: 5</p><p>Explanation: The five different ways are show above.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有两种形状的瓷砖：一种是 <code>2 x 1</code> 的多米诺形，另一种是形如 &quot;L&quot; 的托米诺形。两种形状都可以旋转。</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>给定整数 n ，返回可以平铺 <code>2 x n</code> 的面板的方法的数量。<strong>返回对</strong> <code>109 + 7</code> <strong>取模</strong> 的值。</p><p>平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> n = 3</p><p><strong>输出:</strong> 5</p><p><strong>解释:</strong> 五种不同的方法如上所示。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> n = 1</p><p><strong>输出:</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O()</code>，</li><li><strong>空间复杂度</strong>：<code>O()</code>，</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29);function v(y,k){const s=n("font"),i=n("RouterLink"),a=n("ExternalLinkIcon");return c(),l("div",null,[h,e("p",null,[o("🟠 "),t(s,{color:"#ffb800"},{default:r(()=>[o("Medium")]),_:1}),o("  🔖  "),t(i,{to:"/tag/dynamic-programming.html"},{default:r(()=>[u]),_:1}),o("  🔗 "),e("a",m,[f,t(a)]),o(),e("a",_,[b,t(a)])]),x])}const w=d(g,[["render",v],["__file","0790.html.vue"]]);export{w as default};
