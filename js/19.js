a=document.createElement("Button")
a.setAttribute("onclick","add();");
a.innerHTML="Click Me"
document.body.appendChild(a);

function add()
{
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="start";
   document.body.appendChild(x)
}

function single()
{
	var a = document.createElement("input");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter the number:");
    a.setAttribute("id","n");
    document.body.appendChild(a);

    b=document.createElement("Button");
    b.setAttribute("onclick","run();");
    b.innerHTML="run";
    document.body.appendChild(b)
} 

function run()
{
num1 = Number(document.getElementById("n").value);
var rev = 0;
while(num1>0){
	rem=num1%10;
	rev=(rev*10)+rem
	num1=(num1-rem)/10;
}	
var number = rev;
var temp = 0;
while(number>0)
{
	rem=number%10;
	temp+=rem;
	number=(number-rem)/10;
	if(number%10==0)
	{
		document.write(rem);
	}
	else
	{
		document.write(rem+"+");
	}
}
document.write("="+temp);
}