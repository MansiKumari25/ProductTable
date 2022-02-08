
let arr=[];

function addProduct()
{
    let pid=document.getElementById("productid").value;
    let pname=document.getElementById("productname").value;
    let pprice=document.getElementById("productprice") .value;

    if(checkData(pid, pname, pprice))
    {
        checkDuplicacy(pid, pname, pprice);
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

function checkDuplicacy(pid, pname, pprice){
    if(arr.length ===0 )
    {
       insertData(pid, pname, pprice);
       return;
    }
    else{
        for(let i=0; i<arr.length; i++)
        {
            if(arr[i].id== pid)
            {
                alert("Duplicate ID");
                return;
            }            
        }
        insertData(pid, pname, pprice);
       
    }
}


function insertData(pid, pname, pprice)
{
   
    arr.push({
        "id": pid,
        "name": pname,
        "price": pprice
    });
    console.log(arr);
    
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
            result +=`<tr><td>${arr[i].id}</td><td>${arr[i].name}</td><td>${arr[i].price}</td><td><button id="edit${arr[i].id}" onclick="editProduct(${arr[i].id})">EDIT</button></td></tr>`;
        }
        document.getElementById("output").innerHTML=`<table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th></th>
            <th></th>
        </tr>
        ${result}
        </table>`;
        
    }
    console.log(arr);
}

function editProduct(id)
{
    var product=getProduct(id);
    document.getElementById("productid").value=product.id;
    document.getElementById("productname").value=product.name;
    document.getElementById("productprice").value=product.price;
    document.getElementById(`add`).style="display:none";
    document.getElementById(`update`).style="display:inline-block";
    document.getElementById("update").setAttribute("onclick", `updateProduct(${id})`);
    

}

function getProduct(id)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].id==id)
        {
            return arr[i];
        }
    }
}


function updateProduct(id)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].id==id)
        {
            arr[i].id=document.getElementById("productid").value;
            arr[i].name=document.getElementById("productname").value;
            arr[i].price=document.getElementById("productprice").value;
        }
    }
    display();
}


