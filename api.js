// sync , async ,fetch

// error handling , await
// try,catch,finally

// const url = `https://fakestoreapi.com/products`;
// // const url = `https://randomuser.me/api/`;

// // fetch and then are a async function
// try {
//     fetch(url)
//         // fetch() will give a promise for that we process that using then()
//         .then((res) => res.json())
//         //this first then() or res.json() are a promise only
//         .then((data) => product(data))
//     //this second then will provide the data that the response provide, here we store the value in product functions argument
// } catch (err) {
//     //catch block will get the error from the try and it perform the action
//     console.log(err)
// } finally {
//     // finally, if error comes or not whatever happens will execute the action wrote inside the block
//     console.log("hello")
// }

// const product = (data) => {
//     console.log(data)
// }

// <---------------------------Example for api call--------------------------------->

// const btn = document.getElementById("btn")
// const inputEl = document.getElementById("input")
// const outputEl = document.getElementById("output")

// btn.addEventListener("click", () => {
//     const inputText = inputEl.value
//     // outputEl.innerText = inputText

//     let url = `https://api.funtranslations.com/translate/pig-latin.json?text=`;
//     url = url + inputText

//     try {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//                 outputEl.innerText = data.contents.translated
//             })
//     } catch (err) {
//         console.log(err)
//     }
// })

// async awaits

const url = `https://fakestoreapi.com/producs`;

try {
    fetch(url)
        .then((res) => res.json())
        .then((data) => { console.log(data) })
} catch (err) {
    console.log(err)
} finally {
    // finally, if error comes or not whatever happens will execute the action wrote inside the block
    console.log("hello")
}

try {
    const fetchData = async (url) => {
        const response = await fetch(url);
        console.log(response)
        if (response.status !== 200) {
            console.log("I'm not here")
        } else {
            console.log("I'm responding Don't worry!")
        }
        const data = await response.json();
        console.log(data)
    }
    fetchData(url)
} catch (err) {
    console.log(err)
}  finally {
        // finally, if error comes or not whatever happens will execute the action wrote inside the block
        console.log("hello")
    }

// await works like