import{_ as p,r as o,o as u,c as m,a as e,b as n,d as a,w as s,e as v}from"./app-fqckLmln.js";const b={},k=e("h1",{id:"_1873-计算特殊奖金",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1873-计算特殊奖金","aria-hidden":"true"},"#"),n(" 1873. 计算特殊奖金")],-1),h=e("code",null,"数据库",-1),y={href:"https://leetcode.cn/problems/calculate-special-bonus",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/calculate-special-bonus",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"LeetCode",-1),f=v(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Employees</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
| salary      | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>employee_id is the primary key (column with unique values) for this table.</p><p>Each row of this table indicates the employee ID, employee name, and salary.</p></blockquote><p>Write a solution to calculate the bonus of each employee. The bonus of an employee is <code>100%</code> of their salary if the ID of the employee is <strong>an odd number</strong> and **the employee &#39;s name does not start with the character **<code>&#39;M&#39;</code>. The bonus of an employee is <code>0</code> otherwise.</p><p>Return the result table ordered by <code>employee_id</code>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Employees table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+--------+
| employee_id | name    | salary |
+-------------+---------+--------+
| 2           | Meir    | 3000   |
| 3           | Michael | 3800   |
| 7           | Addilyn | 7400   |
| 8           | Juan    | 6100   |
| 9           | Kannon  | 7700   |
+-------------+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-------+
| employee_id | bonus |
+-------------+-------+
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |
+-------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Explanation:</p><p>The employees with IDs 2 and 8 get 0 bonus because they have an even employee_id.</p><p>The employee with ID 3 gets 0 bonus because their name starts with &#39;M&#39;.</p><p>The rest of the employees get a 100% bonus.</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表: <code>Employees</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
| salary      | int     |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>employee_id 是这个表的主键(具有唯一值的列)。</p><p>此表的每一行给出了雇员 id ，名字和薪水。</p></blockquote><p>编写解决方案，计算每个雇员的奖金。如果一个雇员的 id 是 <strong>奇数</strong> 并且他的名字不是以 <code>&#39;M&#39;</code> <strong>开头</strong> ，那么他的奖金是他工资的 <code>100%</code> ，否则奖金为 <code>0</code> 。</p><p>返回的结果按照 <code>employee_id</code> 排序。</p><p>返回结果格式如下面的例子所示。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong></p><p>Employees 表:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+--------+
| employee_id | name    | salary |
+-------------+---------+--------+
| 2           | Meir    | 3000   |
| 3           | Michael | 3800   |
| 7           | Addilyn | 7400   |
| 8           | Juan    | 6100   |
| 9           | Kannon  | 7700   |
+-------------+---------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-------+
| employee_id | bonus |
+-------------+-------+
| 2           | 0     |
| 3           | 0     |
| 7           | 7400  |
| 8           | 0     |
| 9           | 7700  |
+-------------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释：</strong></p><p>因为雇员 id 是偶数，所以雇员 id 是 2 和 8 的两个雇员得到的奖金是 0。</p><p>雇员 id 为 3 的因为他的名字以&#39;M&#39;开头，所以，奖金是 0。</p><p>其他的雇员得到了百分之百的奖金。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 指定返回字段：</p><ul><li><code>employee_id</code>：雇员 ID。</li><li>计算奖金并命名为 <code>bonus</code>。</li></ul></li><li><p><strong>奖金计算逻辑</strong>：<br> 使用 <code>CASE</code> 表达式计算奖金：</p><ul><li>如果雇员 ID 是奇数 (<code>employee_id % 2 = 1</code>) 且名字不是以 <code>&#39;M&#39;</code> 开头 (<code>name NOT LIKE &#39;M%&#39;</code>)，则奖金等于工资（<code>salary</code>）。</li><li>否则奖金为 <code>0</code>。</li></ul></li><li><p><strong>排序要求</strong>：<br> 按 <code>employee_id</code> 进行升序排序。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，需要对所有记录应用条件筛选和奖金计算。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Employees</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>奖金计算逻辑</strong>：<br> 使用 Pandas 的布尔索引和条件判断：</p><ul><li>如果 <code>employee_id</code> 是奇数且 <code>name</code> 列的值不以 <code>&#39;M&#39;</code> 开头，则奖金等于对应的 <code>salary</code> 值。</li><li>否则奖金为 <code>0</code>。</li></ul></li><li><p><strong>结果选择与排序</strong>：<br> 返回结果包含 <code>employee_id</code> 和计算后的 <code>bonus</code>，按 <code>employee_id</code> 升序排列。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,25),w=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(" employee_id"),e("span",{class:"token punctuation"},","),n(`
       `),e("span",{class:"token keyword"},"CASE"),n(`
           `),e("span",{class:"token keyword"},"WHEN"),n(" employee_id "),e("span",{class:"token operator"},"%"),n(),e("span",{class:"token number"},"2"),n(),e("span",{class:"token operator"},"="),n(),e("span",{class:"token number"},"1"),n(),e("span",{class:"token operator"},"AND"),n(" name "),e("span",{class:"token operator"},"NOT"),n(),e("span",{class:"token operator"},"LIKE"),n(),e("span",{class:"token string"},"'M%'"),n(),e("span",{class:"token keyword"},"THEN"),n(` salary
           `),e("span",{class:"token keyword"},"ELSE"),n(),e("span",{class:"token number"},"0"),n(`
       `),e("span",{class:"token keyword"},"END"),n(),e("span",{class:"token keyword"},"AS"),n(` bonus
`),e("span",{class:"token keyword"},"FROM"),n(` Employees
`),e("span",{class:"token keyword"},"ORDER"),n(),e("span",{class:"token keyword"},"BY"),n(" employee_id"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"calculate_bonus"),e("span",{class:"token punctuation"},"("),n("employees"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 条件判断：计算奖金"),n(`
    employees`),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'bonus'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"="),n(" employees"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"apply"),e("span",{class:"token punctuation"},"("),n(`
        `),e("span",{class:"token keyword"},"lambda"),n(" row"),e("span",{class:"token punctuation"},":"),n(" row"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'salary'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token keyword"},"if"),n(" row"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'employee_id'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"%"),n(),e("span",{class:"token number"},"2"),n(),e("span",{class:"token operator"},"=="),n(),e("span",{class:"token number"},"1"),n(),e("span",{class:"token keyword"},"and"),n(),e("span",{class:"token keyword"},"not"),n(" row"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),n("startswith"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'M'"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token keyword"},"else"),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},","),n(" axis"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(`
    `),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token comment"},"# 返回结果并按 employee_id 排序"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" employees"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'employee_id'"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token string"},"'bonus'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),n("sort_values"),e("span",{class:"token punctuation"},"("),n("by"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'employee_id'"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function M(T,q){const d=o("font"),c=o("RouterLink"),t=o("ExternalLinkIcon"),r=o("CodeTabs");return u(),m("div",null,[k,e("p",null,[n("🟢 "),a(d,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(c,{to:"/tag/database.html"},{default:s(()=>[h]),_:1}),n("  🔗 "),e("a",y,[g,a(t)]),n(),e("a",_,[x,a(t)])]),f,a(r,{id:"208",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:s(({value:l,isActive:i})=>[n("MySQL")]),title1:s(({value:l,isActive:i})=>[n("Pandas")]),tab0:s(({value:l,isActive:i})=>[w]),tab1:s(({value:l,isActive:i})=>[E]),_:1})])}const D=p(b,[["render",M],["__file","1873.html.vue"]]);export{D as default};
