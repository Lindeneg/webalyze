if(window.NardisGame&&window.NardisIs&&window.NardisFixed){const e=window.NardisGame.create(["christian","lindeneg"]),t=window.NardisFixed,n=window.NardisIs,i={highlight:{success:{text:"text-success",button:"btn-success"},failure:{text:"text-danger",button:"bg-danger"},default:{text:"text-body",button:"btn-info"}},visibility:{hide:"hide"}},s={0:()=>{u.classList.contains(i.visibility.hide)?(H.forEach(e=>e===u?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),A.forEach(e=>e===d?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),e.resetNewRoute(),e.updateNewRoute(),e.newRoute.potentialRoutes.length>0&&(e.newRoute.currentRoute=e.newRoute.potentialRoutes[0],e.newRoute.toCity=e.newRoute.potentialRoutes[0][t.potentialRoute.city],F.specifyRouteCards(0))):(H.forEach(e=>e.classList.add(i.visibility.hide)),A.forEach(e=>e.classList.add(i.visibility.hide)))},1:()=>{$.classList.contains(i.visibility.hide)?H.forEach(e=>e===$?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)):H.forEach(e=>e.classList.add(i.visibility.hide))},2:()=>{if(I.classList.contains(i.visibility.hide)){const t=e.getCurrentPlayer().getQueue();H.forEach(e=>e===I?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),t.length>0?D.queue(t):D.emptyQueue()}else H.forEach(e=>e.classList.add(i.visibility.hide)),A.forEach(e=>e.classList.add(i.visibility.hide))},3:()=>{if(M.classList.contains(i.visibility.hide)){const t=e.getCurrentPlayer().getCurrentFinance(),n=e.getCurrentPlayer().getFinanceHistory();H.forEach(e=>e===M?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),D.finances(t,n)}else H.forEach(e=>e.classList.add(i.visibility.hide)),A.forEach(e=>e.classList.add(i.visibility.hide))},4:()=>{S.classList.contains(i.visibility.hide)?H.forEach(e=>e===S?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)):H.forEach(e=>e.classList.add(i.visibility.hide))},5:()=>{k.classList.contains(i.visibility.hide)?H.forEach(e=>e===k?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)):H.forEach(e=>e.classList.add(i.visibility.hide))},6:()=>{H.forEach(e=>e.classList.add(i.visibility.hide)),U.buttonHighlight(a),e.endTurn(),F.playerInfoCard()},7:()=>{},nameMap:{0:"newRoute",1:"editRoute",2:"buildQueue",3:"finances",4:"upgrades",5:"opponents",6:"endTurn",7:"default"}},a=document.createElement("empty"),l=(document.getElementById("root-div"),document.getElementById("nav-and-player-info"),document.getElementById("nav-control")),o=document.getElementById("nav-div"),r=[...document.querySelectorAll(".nav-entries")],c=[...document.querySelectorAll(".player-info-entry")],u=(document.getElementById("loading-spinner-btn"),document.getElementById("new-route")),d=document.getElementById("specify-route"),g=[...document.querySelectorAll(".from-city-card-entry")],p=document.getElementById("from-city-from-city"),y=document.getElementById("from-city-dropdown"),m=document.getElementById("to-city-to-city"),h=document.getElementById("to-city-dropdown"),f=[...document.querySelectorAll(".to-city-card-entry")],b=document.getElementById("new-route-specify-route-continue"),R=document.getElementById("specify-train"),E=document.getElementById("specify-train-ul"),C=document.getElementById("specify-train-current-cost"),T=document.getElementById("new-route-specify-train-continue"),v=document.getElementById("specify-cargo"),L=document.getElementById("specify-cargo-ul-former"),x=document.getElementById("specify-cargo-ul-latter"),w=document.getElementById("new-route-specify-cargo-continue"),N=document.getElementById("specify-confirmation"),A=document.querySelectorAll(".specify"),$=document.getElementById("edit-route"),I=document.getElementById("build-queue"),M=document.getElementById("finances"),S=document.getElementById("upgrades"),k=document.getElementById("opponents"),H=[...document.querySelectorAll(".menu-item-active-div")],O=e=>e.map(e=>e.getWeight()).reduce((e,t)=>e+t,0),q=e=>{let t=[];if(e.length>0)for(let n=0;n<e.length;n++){let i=B(t,e[n]);i<0?t.push([e[n],1]):t[i][1]++}return t},B=(e,t)=>{if(e.length>0)for(let n=0;n<e.length;n++)if(e[n][0].isEqual(t))return n;return-1},P=(e,t)=>{let n="",i=0;if(e.length>0)for(let s=0;s<e.length;s++)if(t.productInCityDemand(e[s][0])){let[t,a]=e[s],l=t.getValue()*a;i+=l,n+=`\n                    <li class="list-group-item">\n                        ${a}x${t.getName().toUpperCase()}\n                        <span class="text-body card-span">\n                            ${l}g\n                        </span>\n                    </li>\n                    `}return[n,i]},U={playerCardHighlight:e=>{n.array(e)&&n.HTMLElements(...e)&&e.forEach(e=>{let t=parseInt(e.innerText);n.number(t)&&(t>0?e.classList.replace(i.highlight.failure.text,i.highlight.success.text):e.classList.replace(i.highlight.success.text,i.highlight.failure.text))})},buttonHighlight:e=>{n.HTMLElements(r)&&n.HTMLElement(e)&&(r.forEach(t=>{t!==e&&t.classList.replace(i.highlight.success.button,i.highlight.default.button)}),e.classList.contains(i.highlight.success.button)?e.classList.replace(i.highlight.success.button,i.highlight.default.button):e.classList.replace(i.highlight.default.button,i.highlight.success.button))},visibility:e=>{if(n.HTMLElement(e))return e.classList.contains(i.visibility.hide)?(e.classList.remove(i.visibility.hide),1):(e.classList.add(i.visibility.hide),0)},financeContents:(e,n)=>{let i=[],s=0;if(e.length>0){let a,l;for(let o=0;o<e.length;o++){let r,c,u,d="",[g,p]=e[o],y=0;switch(n){case t.finance.income:let[e,i,o,d]=[g.getCurrentCity(),g.getCurrentCargo(),g.getFrom(),g.getTo()],m=q(i);[r,s]=P(m,e),console.log(e.getName()),i.forEach(e=>{console.log(e.getName())}),0!==s&&(a="ROUTE",l=o.getName().toUpperCase()+" - "+d.getName().toUpperCase());break;case t.finance.expense:switch(c="ROUTE",u=g.getFrom().getName().toUpperCase()+" - "+g.getTo().getName().toUpperCase(),p){case t.expenseType.newRoute:r="ROUTE COST",y=g.getCost()+g.getTrain().getCost();break;case t.expenseType.editRoute:r="EDIT COST",y=Math.round(g.getTrain().getCost()/2);break;case t.expenseType.maintenance:r="TRAIN UPKEEP",y=g.getTrain().getMaintenance()}break;default:r="",c="",u=""}0!==(s+=y)&&(d+=`\n                        <li class="list-group-item bg-secondary text-light">\n                            TYPE\n                            <span class="text-light card-span">\n                                ${t.financeTypeNameMap[p]}\n                            </span>\n                        </li>\n                        `,r&&y&&(d+=`\n                            <li class="list-group-item">\n                                ${r}\n                                <span class="text-body card-span">\n                                    ${y}g\n                                </span>\n                            </li>\n                            `),r&&!y&&(d+=r),c&&u&&(d+=`\n                            <li class="list-group-item">\n                                ${c}\n                                <span class="text-body card-span">\n                                    ${u}\n                                </span>\n                            </li>\n                            `),i.push(d))}if(a&&l){let e=`\n                    <li class="list-group-item">\n                        ${a}\n                        <span class="text-body card-span">\n                            ${l}\n                        </span>\n                    </li>\n                    `;i.push(e)}if(s>0){let e=`\n                    <li class="list-group-item bg-info text-light">\n                        TOTAL\n                        <span class="text-light card-span">\n                            ${s}g\n                        </span>\n                    </li>\n                    `;i.push(e)}}return[i,s=n===t.finance.income?s:-1*s]}},F={playerInfoCard:()=>{if(n.HTMLElements(...c)){const[t,n,i,s,a,l]=c,o=e.getCurrentPlayer();t.innerText=o.getName(),n.innerText=o.getTotalTurns(),i.innerText=o.getRoutes().length,s.innerText=o.getGold(),a.innerText=0,l.innerText=0,U.playerCardHighlight([s,a,l])}},innerText:(e,t)=>{if(n.array(e)&&n.HTMLElements(...e)&&n.array(t)&&e.length===t.length)for(let n=0;n<e.length;n++)e[n].innerHTML=t[n]},specifyRouteCards:i=>{if(n.HTMLElements(...g,...f)){let n=[e.newRoute.fromCity.getName(),e.newRoute.fromCity.getCurrentRoutesCount(),e.newRoute.fromCity.getMaxCurrentRoutes(),e.newRoute.fromCity.getSize(),e.newRoute.fromCity.isStartCity?"Yes":"No",D.productArray(e.newRoute.fromCity.getSupply(),t.productType.supply),D.productArray(e.newRoute.fromCity.getDemand(),t.productType.demand)],s=[e.newRoute.potentialRoutes[i][t.potentialRoute.city].getName(),e.newRoute.potentialRoutes[i][t.potentialRoute.city].getCurrentRoutesCount(),`${e.newRoute.potentialRoutes[i][t.potentialRoute.distance]}km`,`${e.newRoute.potentialRoutes[i][t.potentialRoute.goldCost]}g`,`${e.newRoute.potentialRoutes[i][t.potentialRoute.turnCost]}t`,D.productArray(e.newRoute.potentialRoutes[i][t.potentialRoute.city].getSupply(),t.productType.supply),D.productArray(e.newRoute.potentialRoutes[i][t.potentialRoute.city].getDemand(),t.productType.demand)];F.innerText(g,n),F.innerText(f,s)}}},D={productArray:(e,i,s)=>{if(n.array(e)&&n.number(i)){let n;switch(i){case t.productType.supply:n="Supply";break;case t.productType.demand:n="Demand";break;case t.productType.cargo:n="Current Cargo";break;default:n=""}let a=`\n                <li class="list-group-item bg-secondary text-light">\n                    ${n}\n                </li>\n                `;if(i===t.productType.cargo&&e.length<=0)return'\n                    <li class="list-group-item">\n                        No Cargo\n                    </li>    \n                    ';for(let t=0;t<e.length;t++){let n=e[t];a+=`\n                        <li index=${t} class="list-group-item ${s||""}">\n                            ${n.getName()}\n                            <span class="card-span product-span">\n                                Value : ${n.getValue()}g ||\n                                Weight: ${n.getWeight()}u\n                            </span>\n                        </li>                   \n                    `}return a}return e},purchaseableTrains:()=>{const n=e.getTrains(),i="list-group-item";let s="";for(let a=0;a<n.length;a++){let l=n[a];e.newRoute.currentRoute[t.potentialRoute.goldCost]+l.getCost()<=e.getCurrentPlayer().getGold()&&(s+=`\n                    <li id="specify-train-entry" index=${a} class="${i} bg-dark text-light">\n                        Name\n                        <span class="text-light card-span">\n                            ${l.getName()}\n                        </span>\n                    </li>\n                    <li class="${i}">\n                        Cost\n                        <span class="text-body card-span">\n                            ${l.getCost()}g\n                        </span>\n                    </li>\n                    <li class="${i}">\n                        Maintenance\n                        <span class="text-body card-span">\n                            ${l.getMaintenance()}g/t\n                        </span>\n                    </li>\n                    <li class="${i}">\n                        Speed\n                        <span class="text-body card-span">\n                            ${l.getSpeed()}km/t\n                        </span>\n                    </li>\n                    <li class="${i}">\n                        Cargo Space\n                        <span class="text-body card-span">\n                            ${l.getCargoSpace()}u\n                        </span>\n                    </li>\n                    `)}if(""===s)D.cannotAffordAnyTrains();else{E.innerHTML=s;const n=E.querySelectorAll("#specify-train-entry");n.forEach(i=>{i.addEventListener("click",i=>{let s=(i=i.target).getAttribute("index");s||(s=(i=i.parentElement).getAttribute("index"));let a=e.getTrains()[s];e.newRoute.train=a;let l=a.getCost();C.innerText=e.newRoute.currentRoute[t.potentialRoute.goldCost]+l+"g",i.classList.replace("bg-dark","bg-success"),n.forEach(e=>{e!==i&&e.classList.replace("bg-success","bg-dark")})})})}},addCargoToRouteTemplate:n=>{const{fromCity:i,toCity:s,train:a}=e.newRoute,l=n===t.cargo.from,o=l?i:s,r=l?s:i,c=l?e.newRoute.fromCargo:e.newRoute.toCargo;return`\n                    <li id="" class="list-group-item bg-dark text-light text-center">\n                        <span class="text-light">\n                            FROM ${o.getName().toUpperCase()}\n                        </span>\n                    </li>\n                    ${D.productArray(o.getSupply(),t.productType.supply,"specify-cargo-entry")}\n                    <li id="" class="list-group-item bg-dark text-light text-center">\n                        <span class="text-light">\n                            TO ${r.getName().toUpperCase()}\n                        </span>\n                    </li>\n                    ${D.productArray(r.getDemand(),t.productType.demand)}\n                    <li id="" class="list-group-item bg-dark text-light text-center">\n                        CARGO SPACE LEFT:\n                        <span class="text-light">\n                        ${a.getCargoSpace()-O(c)} \n                        </span>\n                    </li>\n                    ${D.productArray(c,t.productType.cargo,"specified-cargo-entry")}\n                `},addCargoToRoute:()=>{const n=D.addCargoToRouteTemplate(t.cargo.from),i=D.addCargoToRouteTemplate(t.cargo.to),s=[[L,".specify-cargo-entry",e.newRoute.fromCargo,Y],[L,".specified-cargo-entry",e.newRoute.fromCargo,W],[x,".specify-cargo-entry",e.newRoute.toCargo,Y],[x,".specified-cargo-entry",e.newRoute.toCargo,W]];L.innerHTML=n,x.innerHTML=i,s.forEach(e=>{let[t,n,i,s]=e;t.querySelectorAll(n).forEach(e=>{e.addEventListener("click",e=>{s(e.target,i)})})})},finalNewRouteOverview:()=>{const{fromCity:n,toCity:i,train:s,currentRoute:a}=e.newRoute;return`\n            <ul id="" class="list-group selection-list ul-largest">\n                <li id="" class="list-group-item bg-dark text-light">\n                    NEW ROUTE\n                </li>\n                <li class="list-group-item">\n                    FROM\n                    <span class="text-body card-span">\n                        ${n.getName().toUpperCase()}\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    TO\n                    <span class="text-body card-span">\n                        ${i.getName().toUpperCase()}\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    DISTANCE\n                    <span class="text-body card-span">\n                        ${a[t.potentialRoute.distance]}km\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    TRAIN SPEED\n                    <span class="text-body card-span">\n                        ${s.getSpeed()}km/t\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    GOLD COST\n                    <span class="text-body card-span">\n                        ${a[t.potentialRoute.goldCost]+s.getCost()}g\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    TURN COST\n                    <span class="text-body card-span">\n                        ${a[t.potentialRoute.turnCost]}t\n                    </span>\n                </li>\n                <li class="list-group-item">\n                    MAINTENANCE\n                    <span class="text-body card-span">\n                        ${s.getMaintenance()}g/t\n                    </span>\n                </li>\n                <button type="button" class="btn btn-danger btn-lg text-light final-btn">\n                    Add Route To Queue\n                </button>\n            </ul>\n            `},emptyQueue:()=>{I.innerHTML='\n            <div id="active-build-queue">\n                <ul class="list-group selection-list ul-largest">\n                    <li class="list-group-item" >\n                        YOUR BUILD QUEUE IS EMPTY\n                    </li>\n                </ul>\n            </div>\n            '},queue:n=>{let i="";for(let e=0;e<n.length;e++){let s=n[e];i+=`\n                <li id="queue-list-entry" index=${e} class="list-group-item bg-dark text-light">\n                    ROUTE\n                </li>\n                <li class="list-group-item" >\n                    ${s[t.queue.route].getFrom().getName()} \n                    <span class="text-body card-span">\n                        ${s[t.queue.route].getTo().getName()}\n                    </span>\n                </li>\n                <li class="list-group-item" >\n                    Train\n                    <span class="text-body card-span">\n                        ${s[t.queue.route].getTrain().getName()}\n                    </span>\n                </li>\n                <li class="list-group-item" >\n                    Turns Left\n                    <span class="text-body card-span">\n                        ${s[t.queue.turnCost]}\n                    </span>\n                </li>\n                `}I.innerHTML=`\n            <div id="active-build-queue">\n                <ul class="list-group selection-list ul-largest">\n                    ${i}\n                </ul>\n            </div>\n            `;const s=I.querySelectorAll("#queue-list-entry");if(s.length>0)for(let t=0;t<s.length;t++)s[t].addEventListener("click",t=>{const n=t.target.getAttribute("index"),i=e.getCurrentPlayer(),s=e.getCurrentPlayer().getQueue()[n];e.removeRouteFromPlayerQueue(s),F.playerInfoCard();const a=i.getQueue();a.length>0?D.queue(a):D.emptyQueue()})},cannotAffordAnyTrains:()=>{E.innerHTML='\n            <li class="list-group-item bg-dark text-light">\n                YOU CANNOT AFFORD ANY TRAINS WITH THIS ROUTE\n            </li>\n            ',T.addEventListener("click",()=>{U.buttonHighlight(a),H.forEach(e=>e.classList.add(i.visibility.hide))},{once:!0})},noFinance:()=>{M.innerHTML='\n            <div id="active-finances">\n                <ul class="list-group selection-list ul-largest">\n                    <li class="list-group-item">\n                        NO FINANCE INFO AVAILABLE\n                    </li>\n                </ul>\n            </div>\n            '},finances:(e,n)=>{const i=[],s=[],a=[[i,e[t.finance.income],t.finance.income],[s,e[t.finance.expense],t.finance.expense]];let l=0;for(let e=0;e<a.length;e++){let[t,n,i]=a[e],s=U.financeContents(n,i);l+=s[1],s[0].length>0&&t.push(s[0])}let o=`    \n            <div id="active-finances">\n                <ul class="list-group selection-list ul-largest">\n                    <li class="list-group-item bg-primary text-light">\n                        TURN \n                        <span class="text-light card-span">\n                            ${e[t.finance.turn]}\n                        </span>\n                        <div id="finance-turn-dropdown" class="dropdown-content">\n                        </div>\n                    </li>\n                    <li class="list-group-item bg-dark text-light">\n                        INCOME\n                    </li>\n                    ${i.length>0?i.join("\n"):'<li class="list-group-item">NO INCOME</li>'}\n                    <li class="list-group-item bg-dark text-light">\n                        EXPENSE\n                    </li>\n                    ${s.length>0?s.join("\n"):'<li class="list-group-item">NO EXPENSE</li>'}\n                    <li class="list-group-item bg-dark text-light ">\n                        PROFIT\n                        <li class="list-group-item text-light ${l>0?"bg-success":"bg-danger"}">\n                            TOTAL \n                            <span class="text-light card-span">\n                                ${l}g\n                            </span>\n                        </li>\n                    </li>\n                </ul>\n            </div>\n            `.replace(/,/g,"");M.innerHTML=o;const r=M.querySelector(".bg-primary"),c=M.querySelector("#finance-turn-dropdown");r.id="finance-turn",r.addEventListener("mouseenter",K.bind(null,n,c,e[t.finance.turn])),r.addEventListener("mouseleave",Q.bind(null,c))}},Q=e=>{n.HTMLElement(e)&&(e.innerHTML="")},G=()=>{A.forEach(e=>e===N?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),N.innerHTML=D.finalNewRouteOverview(),N.querySelector("button").addEventListener("click",()=>{e.addRouteToPlayerQueue(),F.playerInfoCard(),e.resetNewRoute(),U.visibility(u),U.buttonHighlight(a)})},W=(e,t)=>{let n=e.getAttribute("index");n||(n=(e=e.parentElement).getAttribute("index")),t.splice(n,1),D.addCargoToRoute()},Y=(t,n)=>{const{fromCity:i,toCity:s,train:a}=e.newRoute,l=n===e.newRoute.fromCargo?i.getSupply():s.getSupply();let o=t.getAttribute("index");o||(o=(t=t.parentElement).getAttribute("index"));let r=l[o];O(n)+r.getWeight()<=a.getCargoSpace()&&n.push(r),D.addCargoToRoute()},V=()=>{U.visibility(o)?l.innerText="Hide Menu":l.innerText="Show Menu"},j=(e,t,i)=>{n.HTMLElement(e)&&n.array(t)&&n.function(i)&&(U.buttonHighlight(e,t),i())},X=()=>{if(""===h.innerHTML.trim()&&e.newRoute.potentialRoutes.length>0)for(let n=0;n<e.newRoute.potentialRoutes.length;n++){let i=e.newRoute.potentialRoutes[n][t.potentialRoute.city],s=document.createElement("a");s.className="to-city-dropdown-entry",s.setAttribute("index",n),i.isEqual(e.newRoute.toCity)&&s.setAttribute("style","background-color: #17a2b8 !important;"),s.innerText=i.getName(),s.addEventListener("click",Z),h.appendChild(s)}else h.innerHTML=""},z=()=>{if(""===y.innerHTML.trim()&&e.newRoute.routedCities.length>0)for(let t=0;t<e.newRoute.routedCities.length;t++){let n=e.newRoute.routedCities[t],i=document.createElement("a");i.className="to-city-dropdown-entry",i.setAttribute("index",t),n.isEqual(e.newRoute.fromCity)&&i.setAttribute("style","background-color: #17a2b8 !important;"),i.innerText=n.getName(),i.addEventListener("click",_),y.appendChild(i)}else y.innerHTML=""},K=(t,n,i)=>{let s=[...t,e.getCurrentPlayer().getCurrentFinance()];if(""===n.innerHTML.trim()&&s.length>0)for(let e=0;e<s.length;e++){let t=document.createElement("a"),s=e+1;t.className="to-city-dropdown-entry",t.setAttribute("index",e),s===i&&t.setAttribute("style","background-color: #17a2b8 !important;"),t.innerText=`TURN #${s}`,t.addEventListener("click",J),n.appendChild(t)}else n.innerHTML=""},J=t=>{const n=e.getCurrentPlayer().getFinanceHistory(),i=t.target.getAttribute("index");let s=n[i]?n[i]:e.getCurrentPlayer().getCurrentFinance();D.finances(s,n)},Z=n=>{const i=n.target.getAttribute("index");e.newRoute.currentRoute=e.newRoute.potentialRoutes[i],e.newRoute.toCity=e.newRoute.potentialRoutes[i][t.potentialRoute.city],e.newRoute.potentialRoutes=e.getPlayerPotentialRoutes(),F.specifyRouteCards(i)},_=n=>{let i=n.target.getAttribute("index");if(e.newRoute.fromCity=e.newRoute.routedCities[i],e.newRoute.potentialRoutes=e.getPlayerPotentialRoutes(),e.newRoute.potentialRoutes.length>0)for(let n=0;n<e.newRoute.potentialRoutes.length;n++){e.newRoute.potentialRoutes[n][t.potentialRoute.city].isEqual(e.newRoute.toCity)&&(i=n)}F.specifyRouteCards(i)},ee=()=>{A.forEach(e=>e===R?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),C.innerText=e.newRoute.currentRoute[t.potentialRoute.goldCost]+"g",D.purchaseableTrains()},te=()=>{document.querySelectorAll("#specify-train-entry").forEach(e=>{e.classList.contains("bg-success")&&(A.forEach(e=>e===v?e.classList.remove(i.visibility.hide):e.classList.add(i.visibility.hide)),D.addCargoToRoute())})};l.addEventListener("click",V),m.addEventListener("mouseenter",X),m.addEventListener("mouseleave",Q.bind(null,h)),p.addEventListener("mouseenter",z),p.addEventListener("mouseleave",Q.bind(null,y)),b.addEventListener("click",ee),T.addEventListener("click",te),w.addEventListener("click",G),r.forEach(e=>{const t=s[e.getAttribute("event")];e.addEventListener("click",()=>{j(e,r,t)})}),F.playerInfoCard()}