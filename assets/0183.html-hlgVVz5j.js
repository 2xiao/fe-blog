import{_ as u,r as t,o as p,c as m,a as e,b as n,d as a,w as s,e as v}from"./app-WL8GPOUO.js";const b={},h=e("h1",{id:"_183-从不订购的客户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_183-从不订购的客户","aria-hidden":"true"},"#"),n(" 183. 从不订购的客户")],-1),k=e("code",null,"数据库",-1),g={href:"https://leetcode.cn/problems/customers-who-never-order",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/customers-who-never-order",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),y=v(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Customers</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>Each row of this table indicates the ID and name of a customer.</p></blockquote><p>Table: <code>Orders</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id is the primary key (column with unique values) for this table.</p><p>customerId is a foreign key (reference columns) of the ID from the Customers table.</p><p>Each row of this table indicates the ID of an order and the ID of the customer who ordered it.</p></blockquote><p>Write a solution to find all customers who never order anything.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Customers table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Orders table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>Customers</code> 表：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，id 是该表的主键。</p><p>该表的每一行都表示客户的 ID 和名称。</p></blockquote><p><code>Orders</code> 表：</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，id 是该表的主键。</p><p>customerId 是 Customers 表中 ID 的外键( Pandas 中的连接键)。</p><p>该表的每一行都表示订单的 ID 和订购该订单的客户的 ID。</p></blockquote><p>找出所有从不点任何东西的顾客。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Customers table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Orders table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br><code>SELECT</code> 指定要返回的字段：<code>name</code>（客户名称），重命名为 <code>Customers</code>。<br><code>FROM Customers</code> 表作为数据来源。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li>使用 <code>LEFT JOIN</code> 将 <code>Customers</code> 表与 <code>Orders</code> 表连接，关联条件是 <code>Customers.id = Orders.customerId</code>。</li><li>筛选出未下单的客户，即 <code>Orders.customerId</code> 为 <code>NULL</code> 的记录。</li><li>使用 <code>WHERE o.customerId IS NULL</code> 筛选条件。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 是 <code>Customers</code> 表的记录数，<code>m</code> 是 <code>Orders</code> 表的记录数。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，返回的结果占用的空间与未下单的客户数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Customers</code> 和 <code>Orders</code> 数据加载到 Pandas 的两个 <code>DataFrame</code> 中。</p></li><li><p><strong>左连接</strong>：<br> 使用 <code>merge</code> 模拟 SQL 的 <code>LEFT JOIN</code>，<code>Customers</code> 为左表，<code>Orders</code> 为右表，关联条件是 <code>Customers.id = Orders.customerId</code>。</p></li><li><p><strong>筛选条件</strong>：<br> 筛选出 <code>customerId</code> 为 <code>NaN</code> 的记录，即未下过订单的客户。</p></li><li><p><strong>选择列</strong>：<br> 保留筛选后的 <code>name</code> 列，并重命名为 <code>Customers</code> ，作为最终结果。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,29),I=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(" c"),e("span",{class:"token punctuation"},"."),n("name "),e("span",{class:"token keyword"},"as"),n(` Customers
`),e("span",{class:"token keyword"},"FROM"),n(` Customers c
`),e("span",{class:"token keyword"},"LEFT"),n(),e("span",{class:"token keyword"},"JOIN"),n(` Orders o
`),e("span",{class:"token keyword"},"ON"),n(" c"),e("span",{class:"token punctuation"},"."),n("id "),e("span",{class:"token operator"},"="),n(" o"),e("span",{class:"token punctuation"},"."),n(`customerId
`),e("span",{class:"token keyword"},"WHERE"),n(" o"),e("span",{class:"token punctuation"},"."),n("customerId "),e("span",{class:"token operator"},"IS"),n(),e("span",{class:"token boolean"},"NULL"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"customers_without_orders"),e("span",{class:"token punctuation"},"("),n("customers"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},","),n(" orders"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# LEFT JOIN 模拟"),n(`
    merged `),e("span",{class:"token operator"},"="),n(" pd"),e("span",{class:"token punctuation"},"."),n("merge"),e("span",{class:"token punctuation"},"("),n("customers"),e("span",{class:"token punctuation"},","),n(" orders"),e("span",{class:"token punctuation"},","),n(" left_on"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'id'"),e("span",{class:"token punctuation"},","),n(" right_on"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'customerId'"),e("span",{class:"token punctuation"},","),n(" how"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'left'"),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token comment"},"# 筛选未下订单的客户"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" merged"),e("span",{class:"token punctuation"},"["),n("merged"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'customerId'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),n("isna"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),n("rename"),e("span",{class:"token punctuation"},"("),n("columns"),e("span",{class:"token operator"},"="),e("span",{class:"token punctuation"},"{"),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},":"),n(),e("span",{class:"token string"},"'Customers'"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function w(L,O){const l=t("font"),r=t("RouterLink"),o=t("ExternalLinkIcon"),c=t("CodeTabs");return p(),m("div",null,[h,e("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(r,{to:"/tag/database.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",g,[x,a(o)]),n(),e("a",_,[f,a(o)])]),y,a(c,{id:"203",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:s(({value:i,isActive:d})=>[n("MySQL")]),title1:s(({value:i,isActive:d})=>[n("Pandas")]),tab0:s(({value:i,isActive:d})=>[I]),tab1:s(({value:i,isActive:d})=>[C]),_:1})])}const E=u(b,[["render",w],["__file","0183.html.vue"]]);export{E as default};
