function cal(){
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const res = document.getElementById("result")
    if(isNaN(date) || date==""){
        if(isNaN(month) || month==""){
            if(isNaN(year) || year==""){
                res.innerText = "Please input valid data for date, month and year field";
            }
            else{
                res.innerText = "Please input valid data for date and month field";
            }
        }
        else if(isNaN(year) || year==""){
            res.innerText = "Please input valid data for date and year field";
        }
        else{
            res.innerText = "Please input valid data for date field";
        }
        }
        else if(isNaN(month) || month==""){
            if(isNaN(year) || year=="" || year.length!=4){
                res.innerText = "Please input valid data for month and year field";
            }
            res.innerText = "Please input valid data for month field";
        }
        else if(isNaN(year) || year==""){
            res.innerText = "Please input valid data for year field";
        }

    const currentDate =new Date();
    const dob = new Date(`${parseInt(month)}/${parseInt(date)}/${parseInt(year)}`);
    
        const diff = currentDate-dob;
        const months = Math.floor(diff/(1000*60*60*24*30.5));
        const diff2 = (diff%(1000*60*60*24*30.5));
        const days = Math.floor(diff2/(1000*60*60*24));
    console.log(months/12)
    res.innerText = `Your age is ${Math.floor(months/12)} Years ${months%12} months and ${days} days`;
}