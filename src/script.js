
let arr=[];

function addProduct()
{
    let pid=document.getElementById("productid").value;
    let pname=document.getElementById("productname").value;
    let pprice=document.getElementById("productprice") .value;

    if(checkData(pid, pname, pprice))
    {
        insertData(pid, pname, pprice);
        display();
    }
    
}


function checkData(pid, pname, pprice)
{
    if(pid=="" || isNaN(pid))
    {
        alert("Enter correct ID");
    }
    else if(isNaN(pname)===false || pname==="")
    {
        alert("Enter valid Name");
    }
    else if(isNaN(pprice) || pprice==="")
    {
        alert("Enter valid price");
    }
    else{
        return true;
    }

}


function insertData(pid, pname, pprice)
{
    arr.push({
        "id": pid,
        "name": pname,
        "price": pprice
    });
}

function display()
{
    let result="";
    
    if(arr.length ===0 )
    {
       document.getElementById("output").innerHTML= "<p>No values</p>";
    }
    else{
        
        for(let i=0; i<arr.length; i++)
        {
            result +=`<tr><td>${arr[i].id}</td><td>${arr[i].name}</td><td>${arr[i].price}</td></tr>`;
        }
        document.getElementById("output").innerHTML=`<table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
        </tr>
        ${result}
        </table>`;
        
    }
}


