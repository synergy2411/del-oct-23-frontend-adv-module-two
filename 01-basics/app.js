jQuery(document).ready(function () {

    // $("em").parents().addClass("border")
    // $(".item-1").parentsUntil(".container-two").addClass("border")


    // $("#drinks").find("li:first").siblings().css({ color: "red" })


    // $("#drinks").find("li:first").next().next().prev().css({ color: "green" })


    // $("#drinks li").first().addClass("underline")

    // $("#drinks li").eq(1).addClass("underline")

    // $("#drinks li").has("a").addClass("border")

    // $("#drinks li").slice(0, 2).addClass("border")

    // $("#drinks li").not(".item-1").addClass("border")

    $("#btnFetch").on("click", function () {

        // $(".header-container").load("./templates/header.html #second")

        $.get("http://localhost:3000/todos", function (data, statusText, xhr) {
            console.log(data);
        })

        $.post("http://localhost:3000/todos", { title: "...", status: "pending" }, function (data, statusText, xhr) {
            console.log(data, statusText, xhr);
        })

    })


});

