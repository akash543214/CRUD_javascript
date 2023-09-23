//addNums = (num1,num2) => { return num1+num2;}
/*
addNums = (num1,num2) => num1+num2;

console.log(addNums(1,2));


function hello()
{
console.log("hello");
}

const hellos = function()
{
    console.log("hello");
}
console.log(hello());
console.log(hellos());

(function automaticExecution()
{
console.log("automatic call");
})();

const arr = [1,2,3,4,5];

//arr.forEach((item)=> {console.log(++item)});

const user = [
   
    {
        name:"Akash sharma",
        email:"sh@gmail.com",
       
        
    },

    {
        name: "Amritpal Singh",
        email: "paal@gmail.com"
    }
]
//const show =()=>{console.log(this);}

//show();
//user.forEach((item)=>{console.log(item)});

const person = {
    firstName: "John",
    lastName: "Doe",
  
   
    fullName: function() 
    {
      return this.firstName + " " + this.lastName;
    }
  };
  for (const key in person) 
  {
    if (person.hasOwnProperty(key)) 
    { 
       
        console.log(person[key]); 
    }
  }
console.log(person.fullName());




const nums = [1,2,3,4,5,6,7,8];

//const newNums = [];
const newNums = nums.filter((items)=>items<6);
console.log(newNums);
//nums.forEach((items)=>{ if(items>5) newNums.push(items);})
//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //console.log(books.filter((items)=> items.genre=="Science"));
  books.forEach((items)=> { if(items.genre==="History") console.log(items);  })


  const parent = document.querySelector('.parent');
  console.log(parent);
  console.log("hy");

  */

  function createNode()
  {
    const div = document.createElement('div');
    div.setAttribute("class","parent");
    //const text = document.createTextNode("node is created");
    //div.appendChild(text);
    document.body.appendChild(div);
    //const parent = document.querySelector('.parent');
    //parent.appendChild(div);
  }

  function addName()
  {
    //const name = document.getElementById("myInput").value;
    if(document.querySelector('.Input').value=="")
    {
      alert("Enter Name");
      return;
    }
   

    const name = document.querySelector('.Input').value;
    const li = document.createElement('li');
      li.setAttribute("class","child");
    li.appendChild(document.createTextNode(name));
    document.querySelector('.names').appendChild(li);
    document.querySelector('.Input').value="";   
  }

  function deleteName()
  {

    let n = document.getElementById("tentacles").value;
    n--;
   const elCollection = document.getElementsByClassName("child");
   
   const elementToremove = elCollection[n];
   
   elementToremove.remove();
    
  }

  function editName()
  {
    const name = document.querySelector('.editInput').value;
    if(name=="")
    return;
  
    let n = document.getElementById("tentacles2").value;
    n--;
    const elCollection = document.getElementsByClassName("child");
    const rep = elCollection[n];
    const li = document.createElement('li');
      li.setAttribute("class","child");
      li.appendChild(document.createTextNode(name));

      rep.replaceWith(li);
   
   // const li = document.createElement('li');
   // li.appendChild(document.createTextNode(name));
   // deleteEl.replaceWith(li);
  }