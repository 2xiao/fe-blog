import{_ as t,r as d,o,c,a as e,b as n,d as i,w as a,e as u}from"./app-g2EQZ7P9.js";const v={},m=e("h1",{id:"_584-寻找用户推荐人",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_584-寻找用户推荐人","aria-hidden":"true"},"#"),n(" 584. 寻找用户推荐人")],-1),p=e("code",null,"数据库",-1),b={href:"https://leetcode.cn/problems/find-customer-referee",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/find-customer-referee",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Customer</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In SQL, id is the primary key column for this table.</p><p>Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.</p></blockquote><p>Find the names of the customer that are <strong>not referred by</strong> the customer with <code>id = 2</code>.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Customer table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Customer</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 SQL 中，id 是该表的主键列。</p><p>该表的每一行表示一个客户的 id、姓名以及推荐他们的客户的 id。</p></blockquote><p>找出那些 <strong>没有被</strong> <code>id = 2</code> 的客户 <strong>推荐</strong> 的客户的姓名。</p><p>以 <strong>任意顺序</strong> 返回结果表。</p><p>结果格式如下所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Customer 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 指定要返回的字段为 <code>name</code>（客户姓名）。从 <code>Customer</code> 表中提取数据。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li>使用 <code>WHERE</code> 子句指定筛选条件。</li><li>包含两种情况： <ol><li><code>referee_id</code> 为 <code>NULL</code>，使用 <code>IS NULL</code> 判断空值。</li><li><code>referee_id</code> 不等于 <code>2</code>，使用 <code>!= 2</code> 判断。</li></ol></li><li>使用 <code>OR</code> 运算符将上述条件结合，确保筛选出的客户符合任意一个条件。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>Customer</code> 表的记录数。SQL 引擎会逐行检查 <code>referee_id</code> 是否满足条件。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，无需额外空间，筛选操作在原表上完成。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name
<span class="token keyword">FROM</span> Customer
<span class="token keyword">WHERE</span> referee_id <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token operator">OR</span> referee_id <span class="token operator">!=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function x(k,L){const l=d("font"),r=d("RouterLink"),s=d("ExternalLinkIcon");return o(),c("div",null,[m,e("p",null,[n("🟢 "),i(l,{color:"#15bd66"},{default:a(()=>[n("Easy")]),_:1}),n("  🔖  "),i(r,{to:"/tag/database.html"},{default:a(()=>[p]),_:1}),n("  🔗 "),e("a",b,[h,i(s)]),n(),e("a",g,[_,i(s)])]),f])}const E=t(v,[["render",x],["__file","0584.html.vue"]]);export{E as default};
