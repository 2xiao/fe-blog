import{_ as d,r as a,o as c,c as i,f as r,a as t,d as n,w as s,b as e,e as _}from"./app-BBnmDgJV.js";const h={},p=_(`<h1 id="_3-2-递归算法" tabindex="-1"><a class="header-anchor" href="#_3-2-递归算法" aria-hidden="true">#</a> 3.2 递归算法</h1><p>递归是一种应用非常广泛的算法，很多数据结构和算法的编码实现都要用到递归，比如 DFS 深度优先搜索、前中后序二叉树遍历等等。</p><h4 id="递归需要满足的三个条件" tabindex="-1"><a class="header-anchor" href="#递归需要满足的三个条件" aria-hidden="true">#</a> 递归需要满足的三个条件</h4><ol><li>一个问题的解可以分解为几个子问题的解</li><li>这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样</li><li>存在递归终止条件</li></ol><h4 id="写递归代码的关键" tabindex="-1"><a class="header-anchor" href="#写递归代码的关键" aria-hidden="true">#</a> 写递归代码的关键</h4><ol><li>找到将大问题分解为小问题的规律，并且基于此写出<strong>递推公式</strong>，再推敲<strong>终止条件</strong>，最后将递推公式和终止条件翻译成代码。</li><li>遇到递归，就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 终止条件</span>
	<span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 递推公式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的递归代码都可以改写为迭代循环的非递归写法。</p><h4 id="弊端" tabindex="-1"><a class="header-anchor" href="#弊端" aria-hidden="true">#</a> 弊端</h4><ol><li>警惕栈溢出：可以声明一个全局变量来控制递归的深度，从而避免栈溢出。</li><li>警惕重复计算：通过某种数据结构来保存已经求解过的值，从而避免重复计算。</li></ol>`,10),g=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),u=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),m=t("td",{style:{"text-align":"center"}},"344",-1),f=t("td",{style:{"text-align":"left"}},"反转字符串",-1),y={style:{"text-align":"center"}},x={style:{"text-align":"left"}},b=t("code",null,"双指针",-1),k=t("code",null,"字符串",-1),v=t("td",{style:{"text-align":"center"}},"🟢",-1),w={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},E=t("td",{style:{"text-align":"center"}},"24",-1),N=t("td",{style:{"text-align":"left"}},"两两交换链表中的节点",-1),z={style:{"text-align":"center"}},S={style:{"text-align":"left"}},D=t("code",null,"递归",-1),L=t("code",null,"链表",-1),R=t("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"118",-1),C=t("td",{style:{"text-align":"left"}},"杨辉三角",-1),O={style:{"text-align":"center"}},q={style:{"text-align":"left"}},P=t("code",null,"数组",-1),U=t("code",null,"动态规划",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"119",-1),M=t("td",{style:{"text-align":"left"}},"杨辉三角 II",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"数组",-1),Y=t("code",null,"动态规划",-1),Z=t("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/pascals-triangle-ii",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/pascals-triangle-ii",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"206",-1),ot=t("td",{style:{"text-align":"left"}},"反转链表",-1),st={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},rt=t("code",null,"递归",-1),at=t("code",null,"链表",-1),dt=t("td",{style:{"text-align":"center"}},"🟢",-1),ct={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"92",-1),pt=t("td",{style:{"text-align":"left"}},"反转链表 II",-1),gt={style:{"text-align":"center"}},ut={style:{"text-align":"left"}},mt=t("code",null,"链表",-1),ft=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},xt={href:"https://leetcode.cn/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},"21",-1),vt=t("td",{style:{"text-align":"left"}},"合并两个有序链表",-1),wt={style:{"text-align":"center"}},It={style:{"text-align":"left"}},Tt=t("code",null,"递归",-1),Et=t("code",null,"链表",-1),Nt=t("td",{style:{"text-align":"center"}},"🟢",-1),zt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",{style:{"text-align":"center"}},"509",-1),Rt=t("td",{style:{"text-align":"left"}},"斐波那契数",-1),Vt={style:{"text-align":"center"}},jt={style:{"text-align":"left"}},At=t("code",null,"递归",-1),Bt=t("code",null,"记忆化搜索",-1),Ct=t("code",null,"数学",-1),Ot=t("code",null,"1+",-1),qt=t("td",{style:{"text-align":"center"}},"🟢",-1),Pt={style:{"text-align":"center"}},Ut={href:"https://leetcode.cn/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"70",-1),Kt=t("td",{style:{"text-align":"left"}},"爬楼梯",-1),Gt={style:{"text-align":"center"}},Jt={style:{"text-align":"left"}},Mt=t("code",null,"记忆化搜索",-1),Qt=t("code",null,"数学",-1),Wt=t("code",null,"动态规划",-1),Xt=t("td",{style:{"text-align":"center"}},"🟢",-1),Yt={style:{"text-align":"center"}},Zt={href:"https://leetcode.cn/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},$t={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},te=t("td",{style:{"text-align":"center"}},"104",-1),ee=t("td",{style:{"text-align":"left"}},"二叉树的最大深度",-1),ne={style:{"text-align":"center"}},oe={style:{"text-align":"left"}},se=t("code",null,"树",-1),le=t("code",null,"深度优先搜索",-1),re=t("code",null,"广度优先搜索",-1),ae=t("code",null,"1+",-1),de=t("td",{style:{"text-align":"center"}},"🟢",-1),ce={style:{"text-align":"center"}},ie={href:"https://leetcode.cn/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},he=t("td",{style:{"text-align":"center"}},"124",-1),pe=t("td",{style:{"text-align":"left"}},"二叉树中的最大路径和",-1),ge={style:{"text-align":"center"}},ue={style:{"text-align":"left"}},me=t("code",null,"树",-1),fe=t("code",null,"深度优先搜索",-1),ye=t("code",null,"动态规划",-1),xe=t("code",null,"1+",-1),be=t("td",{style:{"text-align":"center"}},"🔴",-1),ke={style:{"text-align":"center"}},ve={href:"https://leetcode.cn/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},we={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},Ie=t("td",{style:{"text-align":"center"}},"226",-1),Te=t("td",{style:{"text-align":"left"}},"翻转二叉树",-1),Ee={style:{"text-align":"center"}},Ne={style:{"text-align":"left"}},ze=t("code",null,"树",-1),Se=t("code",null,"深度优先搜索",-1),De=t("code",null,"广度优先搜索",-1),Le=t("code",null,"1+",-1),Re=t("td",{style:{"text-align":"center"}},"🟢",-1),Ve={style:{"text-align":"center"}},je={href:"https://leetcode.cn/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://leetcode.com/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},Be=t("td",{style:{"text-align":"center"}},"50",-1),Ce=t("td",{style:{"text-align":"left"}},"Pow(x, n)",-1),Oe={style:{"text-align":"center"}},qe={style:{"text-align":"left"}},Pe=t("code",null,"递归",-1),Ue=t("code",null,"数学",-1),Fe=t("td",{style:{"text-align":"center"}},"🟠",-1),He={style:{"text-align":"center"}},Ke={href:"https://leetcode.cn/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},Je=t("td",{style:{"text-align":"center"}},"779",-1),Me=t("td",{style:{"text-align":"left"}},"第K个语法符号",-1),Qe=t("td",{style:{"text-align":"center"}},null,-1),We={style:{"text-align":"left"}},Xe=t("code",null,"位运算",-1),Ye=t("code",null,"递归",-1),Ze=t("code",null,"数学",-1),$e=t("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/k-th-symbol-in-grammar",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/k-th-symbol-in-grammar",target:"_blank",rel:"noopener noreferrer"},on=t("td",{style:{"text-align":"center"}},"95",-1),sn=t("td",{style:{"text-align":"left"}},"不同的二叉搜索树 II",-1),ln={style:{"text-align":"center"}},rn={style:{"text-align":"left"}},an=t("code",null,"树",-1),dn=t("code",null,"二叉搜索树",-1),cn=t("code",null,"动态规划",-1),_n=t("code",null,"2+",-1),hn=t("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},gn={href:"https://leetcode.cn/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},mn=t("td",{style:{"text-align":"center"}},"剑指 Offer 62",-1),fn=t("td",{style:{"text-align":"left"}},"圆圈中最后剩下的数字",-1),yn={style:{"text-align":"center"}},xn={style:{"text-align":"left"}},bn=t("code",null,"递归",-1),kn=t("code",null,"数学",-1),vn=t("td",{style:{"text-align":"center"}},"🟢",-1),wn={style:{"text-align":"center"}},In={href:"https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"};function Tn(En,Nn){const o=a("RouterLink"),l=a("ExternalLinkIcon");return c(),i("div",null,[p,r(" START TABLE "),r(" Please keep comment here to allow auto update "),r(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),g,r(" prettier-ignore "),t("table",null,[u,t("tbody",null,[t("tr",null,[m,f,t("td",y,[n(o,{to:"/problem/0344.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",x,[n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1})]),v,t("td",w,[t("a",I,[e("🀄️"),n(l)]),e(),t("a",T,[e("🔗"),n(l)])])]),t("tr",null,[E,N,t("td",z,[n(o,{to:"/problem/0024.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",S,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[L]),_:1})]),R,t("td",V,[t("a",j,[e("🀄️"),n(l)]),e(),t("a",A,[e("🔗"),n(l)])])]),t("tr",null,[B,C,t("td",O,[n(o,{to:"/problem/0118.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[U]),_:1})]),F,t("td",H,[t("a",K,[e("🀄️"),n(l)]),e(),t("a",G,[e("🔗"),n(l)])])]),t("tr",null,[J,M,Q,t("td",W,[n(o,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Y]),_:1})]),Z,t("td",$,[t("a",tt,[e("🀄️"),n(l)]),e(),t("a",et,[e("🔗"),n(l)])])]),t("tr",null,[nt,ot,t("td",st,[n(o,{to:"/problem/0206.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",lt,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[at]),_:1})]),dt,t("td",ct,[t("a",it,[e("🀄️"),n(l)]),e(),t("a",_t,[e("🔗"),n(l)])])]),t("tr",null,[ht,pt,t("td",gt,[n(o,{to:"/problem/0092.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ut,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[mt]),_:1})]),ft,t("td",yt,[t("a",xt,[e("🀄️"),n(l)]),e(),t("a",bt,[e("🔗"),n(l)])])]),t("tr",null,[kt,vt,t("td",wt,[n(o,{to:"/problem/0021.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",It,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[Tt]),_:1}),e(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[Et]),_:1})]),Nt,t("td",zt,[t("a",St,[e("🀄️"),n(l)]),e(),t("a",Dt,[e("🔗"),n(l)])])]),t("tr",null,[Lt,Rt,t("td",Vt,[n(o,{to:"/problem/0509.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",jt,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[At]),_:1}),e(),n(o,{to:"/tag/memoization.html"},{default:s(()=>[Bt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Ct]),_:1}),e(),Ot]),qt,t("td",Pt,[t("a",Ut,[e("🀄️"),n(l)]),e(),t("a",Ft,[e("🔗"),n(l)])])]),t("tr",null,[Ht,Kt,t("td",Gt,[n(o,{to:"/problem/0070.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Jt,[n(o,{to:"/tag/memoization.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Qt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Wt]),_:1})]),Xt,t("td",Yt,[t("a",Zt,[e("🀄️"),n(l)]),e(),t("a",$t,[e("🔗"),n(l)])])]),t("tr",null,[te,ee,t("td",ne,[n(o,{to:"/problem/0104.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",oe,[n(o,{to:"/tag/tree.html"},{default:s(()=>[se]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[le]),_:1}),e(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[re]),_:1}),e(),ae]),de,t("td",ce,[t("a",ie,[e("🀄️"),n(l)]),e(),t("a",_e,[e("🔗"),n(l)])])]),t("tr",null,[he,pe,t("td",ge,[n(o,{to:"/problem/0124.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",ue,[n(o,{to:"/tag/tree.html"},{default:s(()=>[me]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[fe]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ye]),_:1}),e(),xe]),be,t("td",ke,[t("a",ve,[e("🀄️"),n(l)]),e(),t("a",we,[e("🔗"),n(l)])])]),t("tr",null,[Ie,Te,t("td",Ee,[n(o,{to:"/problem/0226.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",Ne,[n(o,{to:"/tag/tree.html"},{default:s(()=>[ze]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[Se]),_:1}),e(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[De]),_:1}),e(),Le]),Re,t("td",Ve,[t("a",je,[e("🀄️"),n(l)]),e(),t("a",Ae,[e("🔗"),n(l)])])]),t("tr",null,[Be,Ce,t("td",Oe,[n(o,{to:"/problem/0050.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",qe,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[Pe]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Ue]),_:1})]),Fe,t("td",He,[t("a",Ke,[e("🀄️"),n(l)]),e(),t("a",Ge,[e("🔗"),n(l)])])]),t("tr",null,[Je,Me,Qe,t("td",We,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[Xe]),_:1}),e(),n(o,{to:"/tag/recursion.html"},{default:s(()=>[Ye]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Ze]),_:1})]),$e,t("td",tn,[t("a",en,[e("🀄️"),n(l)]),e(),t("a",nn,[e("🔗"),n(l)])])]),t("tr",null,[on,sn,t("td",ln,[n(o,{to:"/problem/0095.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",rn,[n(o,{to:"/tag/tree.html"},{default:s(()=>[an]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[dn]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[cn]),_:1}),e(),_n]),hn,t("td",pn,[t("a",gn,[e("🀄️"),n(l)]),e(),t("a",un,[e("🔗"),n(l)])])]),t("tr",null,[mn,fn,t("td",yn,[n(o,{to:"/offer/jz_offer_62_1.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",xn,[n(o,{to:"/tag/recursion.html"},{default:s(()=>[bn]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[kn]),_:1})]),vn,t("td",wn,[t("a",In,[e("🀄️"),n(l)])])])])])])}const Sn=d(h,[["render",Tn],["__file","recursion.html.vue"]]);export{Sn as default};
