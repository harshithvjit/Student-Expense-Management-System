function addExpense() {

    const studentName =
        document.getElementById("studentName").value.trim();

    const description =
        document.getElementById("description").value.trim();

    const category =
        document.getElementById("category").value;

    const amount =
        document.getElementById("amount").value;

    const date =
        document.getElementById("date").value;

    const payment =
        document.getElementById("payment").value;

    const message =
        document.getElementById("message");


    if (
        !studentName ||
        !description ||
        !category ||
        !amount ||
        !date ||
        !payment
    ) {

        message.className = "message";

        message.innerHTML =
            "⚠️ Please complete all expense details.";

        return;
    }


    if (Number(amount) <= 0) {

        message.className = "message";

        message.innerHTML =
            "⚠️ Amount must be greater than zero.";

        return;
    }


    let icon = "💰";

    if (category === "Food")
        icon = "🍜";

    else if (category === "Transport")
        icon = "🚌";

    else if (category === "Education")
        icon = "📖";

    else if (category === "Shopping")
        icon = "✦";

    else if (category === "Entertainment")
        icon = "🎬";


    const list =
        document.getElementById("expenseTable");


    const transaction =
        document.createElement("div");

    transaction.className = "transaction";


    transaction.innerHTML = `

        <div class="transaction-left">

            <div class="transaction-icon ${category.toLowerCase()}">
                ${icon}
            </div>

            <div>

                <strong>
                    ${description}
                </strong>

                <span>
                    ${category} · Just now · ${payment}
                </span>

            </div>

        </div>


        <div class="transaction-right">

            <strong>
                − ₹${Number(amount).toFixed(2)}
            </strong>

            <span class="recorded">
                Recorded
            </span>

        </div>

    `;


    list.prepend(transaction);


    message.className = "message";

    message.innerHTML =
        `✓ ₹${Number(amount).toFixed(2)} expense recorded for ${studentName}.`;


    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

}