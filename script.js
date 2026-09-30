function showFood() {

    document
        .getElementById("food")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function findFood() {

    const budget =
        Number(
            document.getElementById("budget").value
        );


    const results =
        document.getElementById("foodResults");


    if (budget <= 0) {

        results.innerHTML =
            "<p>Please enter a valid budget.</p>";

        return;

    }


    /*
       Temporary data.

       Later this will come directly
       from your SQL Server database
       through your middle tier.
    */

    const meals = [

        {
            name: "Fish and Rice",

            vendor: "Nambo Kitchen",

            price: 35
        },

        {
            name: "Supreme Loaded Hot Dog",

            vendor: "House of Hotdog",

            price: 45
        }

    ];


    const affordable =
        meals.filter(
            meal => meal.price <= budget
        );


    results.innerHTML = "";


    if (affordable.length === 0) {

        results.innerHTML =
            "<p>No meals found within your budget.</p>";

        return;

    }


    affordable.forEach(meal => {

        results.innerHTML += `

            <div class="food-result">

                <h3>
                    ${meal.name}
                </h3>

                <p>
                    Vendor: ${meal.vendor}
                </p>

                <p>
                    Price:
                    N$${meal.price.toFixed(2)}
                </p>

            </div>

        `;

    });

}


function submitReview() {

    const comment =
        document.getElementById("comment").value;


    const message =
        document.getElementById("reviewMessage");


    if (comment.trim() === "") {

        message.innerText =
            "Please write a review.";

        return;

    }


    message.innerText =
        "Review submitted successfully!";

}
