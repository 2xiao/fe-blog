import{_ as i,r as d,o as _,c,f as r,a as t,d as o,b as e,w as n,e as h}from"./app-ynO5B_DP.js";const u={},f=h(`<h1 id="_3-2-递归算法" tabindex="-1"><a class="header-anchor" href="#_3-2-递归算法" aria-hidden="true">#</a> 3.2 递归算法</h1><p>递归是一种应用非常广泛的算法，很多数据结构和算法的编码实现都要用到递归，比如 DFS 深度优先搜索、前中后序二叉树遍历等等。</p><h4 id="递归需要满足的三个条件" tabindex="-1"><a class="header-anchor" href="#递归需要满足的三个条件" aria-hidden="true">#</a> 递归需要满足的三个条件</h4><ol><li>一个问题的解可以分解为几个子问题的解</li><li>这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样</li><li>存在递归终止条件</li></ol><h4 id="写递归代码的关键" tabindex="-1"><a class="header-anchor" href="#写递归代码的关键" aria-hidden="true">#</a> 写递归代码的关键</h4><ol><li>找到将大问题分解为小问题的规律，并且基于此写出<strong>递推公式</strong>，再推敲<strong>终止条件</strong>，最后将递推公式和终止条件翻译成代码。</li><li>遇到递归，就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 终止条件</span>
	<span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 递推公式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的递归代码都可以改写为迭代循环的非递归写法。</p><h4 id="弊端" tabindex="-1"><a class="header-anchor" href="#弊端" aria-hidden="true">#</a> 弊端</h4><ol><li>警惕栈溢出：可以声明一个全局变量来控制递归的深度，从而避免栈溢出。</li><li>警惕重复计算：通过某种数据结构来保存已经求解过的值，从而避免重复计算。</li></ol>`,10),g=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),o(" 相关题目")],-1),p=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),m=t("td",{style:{"text-align":"center"}},"344",-1),y={style:{"text-align":"left"}},b={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},x={style:{"text-align":"center"}},k={href:"/problem/0344",target:"_blank",rel:"noopener noreferrer"},v={style:{"text-align":"left"}},E=t("code",null,"双指针",-1),w=t("code",null,"字符串",-1),I={style:{"text-align":"left"}},T=t("td",{style:{"text-align":"center"}},"24",-1),N={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},D={href:"/problem/0024",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"left"}},M=t("code",null,"递归",-1),R=t("code",null,"链表",-1),V={style:{"text-align":"left"}},j=t("td",{style:{"text-align":"center"}},"118",-1),A={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},O={href:"/problem/0118",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"left"}},q=t("code",null,"数组",-1),H=t("code",null,"动态规划",-1),U={style:{"text-align":"left"}},F=t("td",{style:{"text-align":"center"}},"119",-1),K={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/pascals-triangle-ii",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},W=t("code",null,"数组",-1),X=t("code",null,"动态规划",-1),Y={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"206",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},et={style:{"text-align":"center"}},ot={href:"/problem/0206",target:"_blank",rel:"noopener noreferrer"},nt={style:{"text-align":"left"}},lt=t("code",null,"递归",-1),st=t("code",null,"链表",-1),at={style:{"text-align":"left"}},rt=t("td",{style:{"text-align":"center"}},"92",-1),dt={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},_t={style:{"text-align":"center"}},ct={href:"/problem/0092",target:"_blank",rel:"noopener noreferrer"},ht={style:{"text-align":"left"}},ut=t("code",null,"链表",-1),ft={style:{"text-align":"left"}},gt=t("td",{style:{"text-align":"center"}},"21",-1),pt={style:{"text-align":"left"}},mt={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},yt={style:{"text-align":"center"}},bt={href:"/problem/0021",target:"_blank",rel:"noopener noreferrer"},xt={style:{"text-align":"left"}},kt=t("code",null,"递归",-1),vt=t("code",null,"链表",-1),Et={style:{"text-align":"left"}},wt=t("td",{style:{"text-align":"center"}},"509",-1),It={style:{"text-align":"left"}},Tt={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},Nt={style:{"text-align":"center"}},zt={href:"/problem/0509",target:"_blank",rel:"noopener noreferrer"},St={style:{"text-align":"left"}},Dt=t("code",null,"递归",-1),Lt=t("code",null,"记忆化搜索",-1),Mt=t("code",null,"数学",-1),Rt=t("code",null,"1+",-1),Vt={style:{"text-align":"left"}},jt=t("td",{style:{"text-align":"center"}},"70",-1),At={style:{"text-align":"left"}},Bt={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},Ct={style:{"text-align":"center"}},Ot={href:"/problem/0070",target:"_blank",rel:"noopener noreferrer"},Pt={style:{"text-align":"left"}},qt=t("code",null,"记忆化搜索",-1),Ht=t("code",null,"数学",-1),Ut=t("code",null,"动态规划",-1),Ft={style:{"text-align":"left"}},Kt=t("td",{style:{"text-align":"center"}},"104",-1),Gt={style:{"text-align":"left"}},Jt={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},Qt={style:{"text-align":"center"}},Wt={href:"/problem/0104",target:"_blank",rel:"noopener noreferrer"},Xt={style:{"text-align":"left"}},Yt=t("code",null,"树",-1),Zt=t("code",null,"深度优先搜索",-1),$t=t("code",null,"广度优先搜索",-1),te=t("code",null,"1+",-1),ee={style:{"text-align":"left"}},oe=t("td",{style:{"text-align":"center"}},"124",-1),ne={style:{"text-align":"left"}},le={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},se={style:{"text-align":"center"}},ae={href:"/problem/0124",target:"_blank",rel:"noopener noreferrer"},re={style:{"text-align":"left"}},de=t("code",null,"树",-1),ie=t("code",null,"深度优先搜索",-1),_e=t("code",null,"动态规划",-1),ce=t("code",null,"1+",-1),he={style:{"text-align":"left"}},ue=t("td",{style:{"text-align":"center"}},"226",-1),fe={style:{"text-align":"left"}},ge={href:"https://leetcode.com/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},pe={style:{"text-align":"center"}},me={href:"/problem/0226",target:"_blank",rel:"noopener noreferrer"},ye={style:{"text-align":"left"}},be=t("code",null,"树",-1),xe=t("code",null,"深度优先搜索",-1),ke=t("code",null,"广度优先搜索",-1),ve=t("code",null,"1+",-1),Ee={style:{"text-align":"left"}},we=t("td",{style:{"text-align":"center"}},"50",-1),Ie={style:{"text-align":"left"}},Te={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},Ne={style:{"text-align":"center"}},ze={href:"/problem/0050",target:"_blank",rel:"noopener noreferrer"},Se={style:{"text-align":"left"}},De=t("code",null,"递归",-1),Le=t("code",null,"数学",-1),Me={style:{"text-align":"left"}},Re=t("td",{style:{"text-align":"center"}},"779",-1),Ve={style:{"text-align":"left"}},je={href:"https://leetcode.com/problems/k-th-symbol-in-grammar",target:"_blank",rel:"noopener noreferrer"},Ae=t("td",{style:{"text-align":"center"}},null,-1),Be={style:{"text-align":"left"}},Ce=t("code",null,"位运算",-1),Oe=t("code",null,"递归",-1),Pe=t("code",null,"数学",-1),qe={style:{"text-align":"left"}},He=t("td",{style:{"text-align":"center"}},"95",-1),Ue={style:{"text-align":"left"}},Fe={href:"https://leetcode.com/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},Ke={style:{"text-align":"center"}},Ge={href:"/problem/0095",target:"_blank",rel:"noopener noreferrer"},Je={style:{"text-align":"left"}},Qe=t("code",null,"树",-1),We=t("code",null,"二叉搜索树",-1),Xe=t("code",null,"动态规划",-1),Ye=t("code",null,"2+",-1),Ze={style:{"text-align":"left"}},$e=t("td",{style:{"text-align":"center"}},"剑指 Offer 62",-1),to={style:{"text-align":"left"}},eo={href:"https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},oo={style:{"text-align":"center"}},no={href:"/problem/jz_offer_62_1",target:"_blank",rel:"noopener noreferrer"},lo={style:{"text-align":"left"}},so=t("code",null,"递归",-1),ao=t("code",null,"数学",-1),ro={style:{"text-align":"left"}};function io(_o,co){const s=d("ExternalLinkIcon"),l=d("RouterLink"),a=d("font");return _(),c("div",null,[f,r(" START TABLE "),r(" Please keep comment here to allow auto update "),r(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),g,r(" prettier-ignore "),t("table",null,[p,t("tbody",null,[t("tr",null,[m,t("td",y,[t("a",b,[o("反转字符串"),e(s)])]),t("td",x,[t("a",k,[o("[✓]"),e(s)])]),t("td",v,[e(l,{to:"/outline/tag/two-pointers.html"},{default:n(()=>[E]),_:1}),o(),e(l,{to:"/outline/tag/string.html"},{default:n(()=>[w]),_:1})]),t("td",I,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[T,t("td",N,[t("a",z,[o("两两交换链表中的节点"),e(s)])]),t("td",S,[t("a",D,[o("[✓]"),e(s)])]),t("td",L,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[M]),_:1}),o(),e(l,{to:"/outline/tag/linked-list.html"},{default:n(()=>[R]),_:1})]),t("td",V,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[j,t("td",A,[t("a",B,[o("杨辉三角"),e(s)])]),t("td",C,[t("a",O,[o("[✓]"),e(s)])]),t("td",P,[e(l,{to:"/outline/tag/array.html"},{default:n(()=>[q]),_:1}),o(),e(l,{to:"/outline/tag/dynamic-programming.html"},{default:n(()=>[H]),_:1})]),t("td",U,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[F,t("td",K,[t("a",G,[o("杨辉三角 II"),e(s)])]),J,t("td",Q,[e(l,{to:"/outline/tag/array.html"},{default:n(()=>[W]),_:1}),o(),e(l,{to:"/outline/tag/dynamic-programming.html"},{default:n(()=>[X]),_:1})]),t("td",Y,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[o("反转链表"),e(s)])]),t("td",et,[t("a",ot,[o("[✓]"),e(s)])]),t("td",nt,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[lt]),_:1}),o(),e(l,{to:"/outline/tag/linked-list.html"},{default:n(()=>[st]),_:1})]),t("td",at,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[rt,t("td",dt,[t("a",it,[o("反转链表 II"),e(s)])]),t("td",_t,[t("a",ct,[o("[✓]"),e(s)])]),t("td",ht,[e(l,{to:"/outline/tag/linked-list.html"},{default:n(()=>[ut]),_:1})]),t("td",ft,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[gt,t("td",pt,[t("a",mt,[o("合并两个有序链表"),e(s)])]),t("td",yt,[t("a",bt,[o("[✓]"),e(s)])]),t("td",xt,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[kt]),_:1}),o(),e(l,{to:"/outline/tag/linked-list.html"},{default:n(()=>[vt]),_:1})]),t("td",Et,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[wt,t("td",It,[t("a",Tt,[o("斐波那契数"),e(s)])]),t("td",Nt,[t("a",zt,[o("[✓]"),e(s)])]),t("td",St,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[Dt]),_:1}),o(),e(l,{to:"/outline/tag/memoization.html"},{default:n(()=>[Lt]),_:1}),o(),e(l,{to:"/outline/tag/math.html"},{default:n(()=>[Mt]),_:1}),o(),Rt]),t("td",Vt,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[jt,t("td",At,[t("a",Bt,[o("爬楼梯"),e(s)])]),t("td",Ct,[t("a",Ot,[o("[✓]"),e(s)])]),t("td",Pt,[e(l,{to:"/outline/tag/memoization.html"},{default:n(()=>[qt]),_:1}),o(),e(l,{to:"/outline/tag/math.html"},{default:n(()=>[Ht]),_:1}),o(),e(l,{to:"/outline/tag/dynamic-programming.html"},{default:n(()=>[Ut]),_:1})]),t("td",Ft,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Kt,t("td",Gt,[t("a",Jt,[o("二叉树的最大深度"),e(s)])]),t("td",Qt,[t("a",Wt,[o("[✓]"),e(s)])]),t("td",Xt,[e(l,{to:"/outline/tag/tree.html"},{default:n(()=>[Yt]),_:1}),o(),e(l,{to:"/outline/tag/depth-first-search.html"},{default:n(()=>[Zt]),_:1}),o(),e(l,{to:"/outline/tag/breadth-first-search.html"},{default:n(()=>[$t]),_:1}),o(),te]),t("td",ee,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[oe,t("td",ne,[t("a",le,[o("二叉树中的最大路径和"),e(s)])]),t("td",se,[t("a",ae,[o("[✓]"),e(s)])]),t("td",re,[e(l,{to:"/outline/tag/tree.html"},{default:n(()=>[de]),_:1}),o(),e(l,{to:"/outline/tag/depth-first-search.html"},{default:n(()=>[ie]),_:1}),o(),e(l,{to:"/outline/tag/dynamic-programming.html"},{default:n(()=>[_e]),_:1}),o(),ce]),t("td",he,[e(a,{color:"#ff334b"},{default:n(()=>[o("Hard")]),_:1})])]),t("tr",null,[ue,t("td",fe,[t("a",ge,[o("翻转二叉树"),e(s)])]),t("td",pe,[t("a",me,[o("[✓]"),e(s)])]),t("td",ye,[e(l,{to:"/outline/tag/tree.html"},{default:n(()=>[be]),_:1}),o(),e(l,{to:"/outline/tag/depth-first-search.html"},{default:n(()=>[xe]),_:1}),o(),e(l,{to:"/outline/tag/breadth-first-search.html"},{default:n(()=>[ke]),_:1}),o(),ve]),t("td",Ee,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[we,t("td",Ie,[t("a",Te,[o("Pow(x, n)"),e(s)])]),t("td",Ne,[t("a",ze,[o("[✓]"),e(s)])]),t("td",Se,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[De]),_:1}),o(),e(l,{to:"/outline/tag/math.html"},{default:n(()=>[Le]),_:1})]),t("td",Me,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[Re,t("td",Ve,[t("a",je,[o("第K个语法符号"),e(s)])]),Ae,t("td",Be,[e(l,{to:"/outline/tag/bit-manipulation.html"},{default:n(()=>[Ce]),_:1}),o(),e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[Oe]),_:1}),o(),e(l,{to:"/outline/tag/math.html"},{default:n(()=>[Pe]),_:1})]),t("td",qe,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[He,t("td",Ue,[t("a",Fe,[o("不同的二叉搜索树 II"),e(s)])]),t("td",Ke,[t("a",Ge,[o("[✓]"),e(s)])]),t("td",Je,[e(l,{to:"/outline/tag/tree.html"},{default:n(()=>[Qe]),_:1}),o(),e(l,{to:"/outline/tag/binary-search-tree.html"},{default:n(()=>[We]),_:1}),o(),e(l,{to:"/outline/tag/dynamic-programming.html"},{default:n(()=>[Xe]),_:1}),o(),Ye]),t("td",Ze,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[$e,t("td",to,[t("a",eo,[o("圆圈中最后剩下的数字"),e(s)])]),t("td",oo,[t("a",no,[o("[✓]"),e(s)])]),t("td",lo,[e(l,{to:"/outline/tag/recursion.html"},{default:n(()=>[so]),_:1}),o(),e(l,{to:"/outline/tag/math.html"},{default:n(()=>[ao]),_:1})]),t("td",ro,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])])])])])}const uo=i(u,[["render",io],["__file","recursion.html.vue"]]);export{uo as default};
