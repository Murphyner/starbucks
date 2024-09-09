function GetData() {
    fetch('https://raw.githubusercontent.com/zahid022/json/main/starbucks.json')
        .then(res => res.json())
        .then(data => DATA = data)
        .then(() => ShowDetails())
}
GetData()

const url = new URLSearchParams(window.location.search)
const number = url.get("number")
const ad = url.get("name")
const detailContainer = document.getElementById('detail-container')

function ShowDetails() {
    let kod = []
    let children = []
    let pro = []

    DATA.map(item => { kod.push(...item.children) })

    kod.map(item => {
        if (item.children.length) {
            children.push(...item.children)
        } else {
            children.push(...item.products)
        }
    })

    children.map((item => {
        if (item.children) {
            pro.push(...item.products)
        }else{
            pro.push(item)
        }
    }))
    pro = pro.filter(item => item.productNumber == number && item.name == ad )
    console.log(pro);
    pro.map(item => {
        detailContainer.innerHTML = `
                                    <div class="w-full lg:w-5/12 lg:pr-3">
                                        <div class="max-w-[400px] mx-auto">
                                            <img class="w-full" src="${item.assets.masterImage.uri}" />
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-7/12 lg:pl-3">
                                        <div>
                                            <h2 class="text-white text-center lg:text-start font-bold text-[45px]">${item.name}</h2>
                                        </div>
                                    </div>
                                    `
    })
}