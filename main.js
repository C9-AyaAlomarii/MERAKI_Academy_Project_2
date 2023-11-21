const courses = [
    {
      id: 1,
      department: "IT",
  Name: "name1",
      goals: ["goal1", "goal2"],
      imageSrc: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=900&t=st=1700502277~exp=1700502877~hmac=07b2f74aace77245d2df2ae02affc2a221eadad0ef5f4ceaf87332f5aa3c1eff",
  videosSrc: "url/path",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum.",
      rate: 7,
      lessons:[],
    },
  
    {
        id: 2,
        department: "some name",
    Name: "name2",
        goals: ["goal1", "goal2"],
        imageSrc: "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=900&t=st=1700502340~exp=1700502940~hmac=401563a0ba61e48375ca08328ced36d4c6cede23a92615744bb5e975b5fd7779",
    videosSrc: "url/path",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum. ",
        rate: 7,
        lessons:[],
      }, {
        id: 3,
        department: "some name",
    Name: "name2",
        goals: ["goal1", "goal2"],
        imageSrc: "https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=996&t=st=1700592621~exp=1700593221~hmac=76eec6c0bd1211f451e0c5dc69c283c77fd5fce45efdc7481c5418fd7c9f2585",
    videosSrc: "url/path",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque veritatis eos, earum laboriosam quia recusandae aperiam vel molestias illum quasi saepe vero odio, consequuntur minima excepturi nesciunt atque. Ipsum. ",
        rate: 7,
        lessons:[],
      }
    
    // {},...
  ];
  // for the `imageSrc` it can use an array of url/path
const mainDiv = $("#main")
/*  const boxDiv = $(`<div id="box-div"></div>`)
boxDiv.appendTo(mainDiv)  */

/* boxDiv.css({
  
  "display": "grid",
  'grid-template-columns': " 1fr 1fr 1fr",
  "grid-template-rows":"100%  ",
 " grid-template-areas":"c1r1 c2r1 c2r1 "

});  */


  courses.forEach((ele,i)=>{
    console.log(i);
    const renderDiv = $(`<div id="render-div${i}"></div>`)
    const img = $(`<img src=${ele.imageSrc} alt="" >`)
    
        const Name = $(`  <h3 id="name">${ele.Name}</h3>
                             <p id="description">${ele.description}</p> `)
        renderDiv.appendTo(mainDiv)
        img.appendTo(renderDiv)
        Name.appendTo(renderDiv)
         img.css({
            "height": "50%",
            "width": "50%",
          }); 

  })

