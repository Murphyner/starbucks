function GetData() {
    fetch('https://raw.githubusercontent.com/zahid022/json/main/starbucks.json')
        .then(res => res.json())
        .then(data => DATA = data)
        .then(() => ShowProducts())
}
GetData()

const url = new URLSearchParams(window.location.search)
const a = url.get("name")
const catName = document.getElementById('cat-name')
const productsC = document.getElementById('products-c')

function ShowProducts(){
    catName.innerHTML = a
    let kod = []
    let children = []
    let products = []
    let pro = []
    DATA.map(item => {kod.push(...item.children)})
    kod = kod.filter(item => a == item.name)
    
    if (kod[0].children.length) {
        kod.map(item => { children = item.children })
        children.map((item, i) => {
            products = item.products
            productsC.innerHTML += ` <div>
                                        <h2 class="text-[28px] mb-6 font-bold">${item.name}</h2>
                                        <div class="flex cats-contains flex-wrap py-10 border-t"></div>
                                    </div>`
            const catsContains = document.querySelectorAll('.cats-contains')
            products.map(item => {
                catsContains[i].innerHTML += `
                                            <a href="detail.html?number=${item.productNumber}&&name=${item.name}" target="_blank" class="lg:size-3/12 size-6/12 block px-3 mb-7">
                                                <div class="mb-3">
                                                    <img class="w-[140px] rounded-full mx-auto" src="${item.assets.masterImage.uri}" />
                                                </div>
                                                <div>
                                                    <p class="text-[24px] font-semibold text-center">${item.name}</p>
                                                </div>
                                            </a>
                                            `
    })})
    }else{
        kod.map(item => { pro = item.products })
        pro.map((item, i) => {
            productsC.innerHTML = ` <div>
                                        <div class="flex cats-contains flex-wrap py-10 border-t">
                                            
                                        </div>
                                    </div>`})
        pro.map((item) => {
            const catsContains = document.querySelector('.cats-contains')
            catsContains.innerHTML += `
                                            <a href="detail.html?number=${item.productNumber}&&name=${item.name}" target="_blank" class="size-3/12 block px-3 mb-7">
                                                <div class="mb-3">
                                                    <img class="w-[140px] rounded-full mx-auto" src="${item.assets.masterImage.uri}" />
                                                </div>
                                                <div>
                                                    <p class="text-[24px] font-semibold text-center">${item.name}</p>
                                                </div>
                                            </a>
                                            `
})}}