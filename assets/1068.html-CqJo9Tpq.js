import{_ as o,r as a,o as c,c as r,a as e,b as n,d as t,w as i,f as u,e as p}from"./app-UFGGnKWA.js";const v={},m=e("h1",{id:"_1068-产品销售分析-i",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1068-产品销售分析-i","aria-hidden":"true"},"#"),n(" 1068. 产品销售分析 I")],-1),b=e("code",null,"数据库",-1),h={href:"https://leetcode.cn/problems/product-sales-analysis-i",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/product-sales-analysis-i",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),y=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Sales</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-------+
| Column Name | Type  |
+-------------+-------+
| sale_id     | int   |
| product_id  | int   |
| year        | int   |
| quantity    | int   |
| price       | int   |
+-------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(sale_id, year) is the primary key (combination of columns with unique values) of this table.</p><p>product_id is a foreign key (reference column) to Product table.</p><p>Each row of this table shows a sale on the product product_id in a certain year.</p><p>Note that the price is per unit.</p></blockquote><p>Table: <code>Product</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
+--------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>product_id is the primary key (column with unique values) of this table.</p><p>Each row of this table indicates the product name of each product.</p></blockquote><p>Write a solution to report the <code>product_name</code>, <code>year</code>, and <code>price</code> for each <code>sale_id</code> in the <code>Sales</code> table.</p><p>Return the resulting table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Sales table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+------------+------+----------+-------+
| sale_id | product_id | year | quantity | price |
+---------+------------+------+----------+-------+
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |
+---------+------------+------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Product table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+
| product_id | product_name |
+------------+--------------+
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |
+------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+-------+-------+
| product_name | year  | price |
+--------------+-------+-------+
| Nokia        | 2008  | 5000  |
| Nokia        | 2009  | 5000  |
| Apple        | 2011  | 9000  |
+--------------+-------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>From sale_id = 1, we can conclude that Nokia was sold for 5000 in the year 2008.</p><p>From sale_id = 2, we can conclude that Nokia was sold for 5000 in the year 2009.</p><p>From sale_id = 7, we can conclude that Apple was sold for 9000 in the year 2011.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>销售表 <code>Sales</code>：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-------+
| Column Name | Type  |
+-------------+-------+
| sale_id     | int   |
| product_id  | int   |
| year        | int   |
| quantity    | int   |
| price       | int   |
+-------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(sale_id, year) 是销售表 Sales 的主键（具有唯一值的列的组合）。</p><p>product_id 是关联到产品表 Product 的外键（reference 列）。</p><p>该表的每一行显示 product_id 在某一年的销售情况。</p><p>注意: price 表示每单位价格。</p></blockquote><p>产品表 <code>Product</code>：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| product_id   | int     |
| product_name | varchar |
+--------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>product_id 是表的主键（具有唯一值的列）。</p><p>该表的每一行表示每种产品的产品名称。</p></blockquote><p>编写解决方案，以获取 <code>Sales</code> 表中所有 <code>sale_id</code> 对应的 <code>product_name</code> 以及该产品的所有 <code>year</code> 和 <code>price</code> 。</p><p>返回结果表 <strong>无顺序要求</strong> 。</p><p>结果格式示例如下。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Sales 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+------------+------+----------+-------+
| sale_id | product_id | year | quantity | price |
+---------+------------+------+----------+-------+
| 1       | 100        | 2008 | 10       | 5000  |
| 2       | 100        | 2009 | 12       | 5000  |
| 7       | 200        | 2011 | 15       | 9000  |
+---------+------------+------+----------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Product table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------+--------------+
| product_id | product_name |
+------------+--------------+
| 100        | Nokia        |
| 200        | Apple        |
| 300        | Samsung      |
+------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------+-------+-------+
| product_name | year  | price |
+--------------+-------+-------+
| Nokia        | 2008  | 5000  |
| Nokia        | 2009  | 5000  |
| Apple        | 2011  | 9000  |
+--------------+-------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 指定要返回的字段：</p><ul><li><code>p.product_name</code>：来自 <code>Product</code> 表，表示产品名称。</li><li><code>s.year</code>：来自 <code>Sales</code> 表，表示销售年份。</li><li><code>s.price</code>：来自 <code>Sales</code> 表，表示销售价格。</li></ul></li><li><p><strong>表来源与连接</strong>：</p><ul><li>数据来源于两个表：<code>Product</code> 表和 <code>Sales</code> 表。</li><li>使用 <code>JOIN</code> 将两张表连接，关联条件为 <code>p.product_id = s.product_id</code>，即通过两表的 <code>product_id</code> 字段进行匹配。</li><li>仅保留 <code>Product</code> 和 <code>Sales</code> 表中存在匹配记录的数据。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 是 <code>Product</code> 表的记录数，<code>m</code> 是 <code>Sales</code> 表的记录数。<code>JOIN</code> 操作需要<code>O(n * m)</code> 次遍历两张表来匹配 <code>product_id</code> 字段。</p><ul><li>如果使用索引优化，通过索引快速匹配 <code>product_id</code> 字段，复杂度可以降低到 <code>O(n + m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是返回的结果集大小，结果集的空间需求与匹配记录数成正比。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> p<span class="token punctuation">.</span>product_name<span class="token punctuation">,</span> s<span class="token punctuation">.</span><span class="token keyword">year</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>price
<span class="token keyword">FROM</span> Product p
<span class="token keyword">JOIN</span> Sales s
<span class="token keyword">ON</span> p<span class="token punctuation">.</span>product_id <span class="token operator">=</span> s<span class="token punctuation">.</span>product_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),f=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),k=e("td",{style:{"text-align":"center"}},"1069",-1),N=e("td",{style:{"text-align":"left"}},"产品销售分析 II 🔒",-1),q=e("td",{style:{"text-align":"center"}},null,-1),w={style:{"text-align":"left"}},S=e("code",null,"数据库",-1),E=e("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/product-sales-analysis-ii",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/product-sales-analysis-ii",target:"_blank",rel:"noopener noreferrer"},O=e("td",{style:{"text-align":"center"}},"2324",-1),T=e("td",{style:{"text-align":"left"}},"产品销售分析 IV 🔒",-1),L=e("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},A=e("code",null,"数据库",-1),F=e("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/product-sales-analysis-iv",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/product-sales-analysis-iv",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},"2329",-1),W=e("td",{style:{"text-align":"left"}},"产品销售分析Ⅴ 🔒",-1),j=e("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},D=e("code",null,"数据库",-1),G=e("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/product-sales-analysis-v",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/product-sales-analysis-v",target:"_blank",rel:"noopener noreferrer"};function U(X,Y){const l=a("font"),s=a("RouterLink"),d=a("ExternalLinkIcon");return c(),r("div",null,[m,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:i(()=>[n("Easy")]),_:1}),n("  🔖  "),t(s,{to:"/tag/database.html"},{default:i(()=>[b]),_:1}),n("  🔗 "),e("a",h,[_,t(d)]),n(),e("a",g,[x,t(d)])]),y,u(" prettier-ignore "),e("table",null,[f,e("tbody",null,[e("tr",null,[k,N,q,e("td",w,[t(s,{to:"/tag/database.html"},{default:i(()=>[S]),_:1})]),E,e("td",P,[e("a",C,[n("🀄️"),t(d)]),n(),e("a",I,[n("🔗"),t(d)])])]),e("tr",null,[O,T,L,e("td",V,[t(s,{to:"/tag/database.html"},{default:i(()=>[A]),_:1})]),F,e("td",R,[e("a",B,[n("🀄️"),t(d)]),n(),e("a",J,[n("🔗"),t(d)])])]),e("tr",null,[M,W,j,e("td",z,[t(s,{to:"/tag/database.html"},{default:i(()=>[D]),_:1})]),G,e("td",H,[e("a",K,[n("🀄️"),t(d)]),n(),e("a",Q,[n("🔗"),t(d)])])])])])])}const $=o(v,[["render",U],["__file","1068.html.vue"]]);export{$ as default};
