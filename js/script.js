const tabs=document.querySelectorAll('.tab')
const panels=document.querySelectorAll('.panel')
const btn=document.getElementById("menu-btn")
const menu=document.getElementById("menu")
const logo=document.getElementById("logo")

btn.addEventListener("click",()=>{
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
    if(menu.classList.contains("flex")){
        logo.setAttribute('src','./images/logo-bookmark-footer.svg')
    }else{logo.setAttribute('src','./images/logo-bookmark.svg')}
})

tabs.forEach((tab)=>{
    tab.addEventListener("click",onTabClick)
})

function onTabClick(e){
    tabs.forEach((tab)=>{
       tab.children[0].classList.remove(
        'border-b-4',
        'rounded-sm',
        'border-softRed'
       )
    })
    // hide all panels
    panels.forEach((panel)=>{
        panel.classList.add("hidden")
    })
    // activate a new tab and panel based on the data target
    e.target.classList.add(
        'border-b-4',
        'rounded-sm',
        'border-softRed'
    )
    const classString=e.target.getAttribute("data-target")
    document.getElementsByClassName(classString)[0].classList.remove("hidden")
}