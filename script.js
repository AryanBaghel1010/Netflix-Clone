console.log("Let's write JavaScript")
async function main() {
    let answers = document.querySelectorAll(".faqbox")
    console.log(answers)
    document.querySelector(".faqbox").addEventListener("click", () => {
        document.querySelector(".faqbox").style.height = "160px"
            console.log("clicked")
    })
}

main()