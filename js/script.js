
$(".stats").change(function() {
    let total = 27
    let selects = $(".stats")

    selects.each(function() {
        total = total - this.value
    })

    $("#pointsLeft").text(total)

    selects.each(function() {
        let currentValue = this.value

        $(this).children('option').each(function() {
                let option = this
                if(option.value - currentValue > total){
                    option.setAttribute("disabled","disabled");
                }else{
                    option.removeAttribute("disabled");
                }
             }
        )

    })
})

