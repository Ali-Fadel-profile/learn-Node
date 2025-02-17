
const deleteProduct = (button) => {
    const productId = button.parentNode.querySelector("[name=productId]").value;
    const csrf = button.parentNode.querySelector("[name=_csrf]").value;

    fetch("/admin/product/" + productId, {
        method: "DELETE",
        headers: {
            "X-CSRF-Token": csrf,
            "Content-Type": "application/json"
        },
    }).then(result => {
        console.log("DESTROYED PRODUCT");
        return result.json();
    })
        .then(_ => {
            button.closest("article").remove();
        })
        .catch(err => {
            console.log(err);
        });
}
