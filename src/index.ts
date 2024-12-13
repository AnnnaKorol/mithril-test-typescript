import m from "mithril";

console.log('hello World');


/* Interativ function*/
function faculty(n: number) {
    let out = 1;
    for (let i = 1; i < n + 1; i++) {
        out = i * out;
    }
    return out;
};
console.log(faculty(3));


/*-----------------------------------------------------------------------------*/

/*Recursiv function*/
function facult(n: number) {
    if (n != 1) {
        return n * faculty(n - 1);
    }
    return 1;
};
console.log(facult(3));


// Main code starts here

/*
const app = document.getElementById("app");
if (app != null) {
    console.log("app is not null")
    m.render(app, m("button.my-class", {
            "data-index": "hello world",
            style: {"width": "500px"},
            onclick: () => {
                console.log("pressed button")
            }
        }, "My Button"
    ));
*/


// Main code starts here

const root = document.body
let count = 0 // added a variable


function demo5Second() {
    setTimeout(() => {
        console.log("Hello world")
        demo5Second()
    }, 1000)
}


const myMithrilComponent = {
    view: () => {
        return m("button.my-class", {

            "data-index": "hello world",
            style: {"width": "500px"},
            onclick: () => {
                count++
            }
        }, "My Button: " + count
        )

    }
}

m.mount(root, myMithrilComponent)

demo5Second()


/*function bannerToGenerate(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString('Hello World'));*/


let textToBeDisplayed = ""


function getBannerText(): string {
    const banners: string[] = [];
    const banner1 = 'Hello World';
    const banner2 = 'Time changed';
    const banner3 = 'End';
    banners.push(banner1);
    banners.push(banner2);
    banners.push(banner3);
    //  const option = Math.floor(Math.random() * 3);
    // if(option == 1) {
    // return banners[0];}
    // else if (option == 2) {
    // return return banners[1];}
    // else(option == 3) {
    // return banners[2];}
}

function updateBannerText() {
    setTimeout(() => {
        textToBeDisplayed = getBannerText()
        updateBannerText()
    }, 5000)

}

updateBannerText()


/*----------------------------------------------------------------------SORTIEREN------------------------------------------------------------------------------------------------------*/


/*/ Main code starts here

const root = document.body
let count = 0 // added a variable*/


let txtToDisplay = "";

type Position = {
    x: number
    y: number
}


const position: Position = {x: 12, y: 10}
console.log(position)


/*
function getPosition(positon: ) {
    console.log(X is ${positon.x} Y is ${positon.y})

}
*/


const myMithrilComponents = {
    view: () => {
        return [m("button.my-class", {
            "data-index": "hello world",
            style: {"width": "500px"},
            onclick: () => {
                count++
            }
        }, "My Button: " + count
        ), renderBanner(), renderBoard(),


            m(new MyDog("TEst"))
        ]

    }


}

m.mount(root, myMithrilComponents)


function renderBoard() {
    const board = [[0, 0, 1], [0, 0, 0], [0, 0, 0]]
    return m(".grid", board.map(row => row.map(col => m(".cell", col))))
}


function renderBanner() {
    return m("div", {
            style: {"width": "100%"}
        }, txtToDisplay
    )
}

function updateDisplayText() {
    let txt = [
        "hello",
        "welcome",
        "good to see you"
    ]
    setTimeout(() => {
        txtToDisplay = txt[getRandomName()]
        console.log(txtToDisplay)
        m.redraw()
        updateDisplayText()
    }, 1000)

}

updateDisplayText()

function getRandomName(): number {
// TODO: This should return a random string
    let i = Math.floor(Math.random() * 3);
    return i;
}

